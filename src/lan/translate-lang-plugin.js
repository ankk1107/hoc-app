const path = require('path');
const fs = require('fs-extra');

class TranslateLangPlugin {
    constructor() { }

    apply(compiler) {
        compiler.hooks.done.tap('TranslateLangPlugin', (stats) => {
            console.log('进来了')
            const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, './untranslation/en.json'), 'utf8'));

            fs.readdir(path.resolve(__dirname, './translated'), (err, files) => {
                files.forEach(file => {
                    const originData = JSON.parse(fs.readFileSync(path.resolve(__dirname, `./translated/${file}`), 'utf8'));
                    Object.keys(data).forEach(key => {
                        if (originData[key] === undefined) {
                            originData[key] = data[key];
                        }
                    });


                    fs.writeFile(path.resolve(__dirname, `./dist/${file}`), JSON.stringify(originData), err => {
                        if (err) {
                            console.error(err);
                        }
                    });
                })
            })


            fs.copy(path.resolve(__dirname, `./dist`), 'build/lang', err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('文件夹复制成功');
                }
            });

        })
    }
}

module.exports = TranslateLangPlugin;