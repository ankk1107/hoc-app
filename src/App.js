import logo from './logo.svg';
import './App.css';
import ClickIncrease from './components/ClickIncrease';
import HoverIncrease from './components/HoverIncrease';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    // const p1 = new Promise((resolve, reject) => {
    //   console.log('s1')
    //   setTimeout(() => {
    //     console.log('s2')
    //     resolve(343)
    //   }, 2000);
    //   console.log('s5')
    // })
    // p1.then(res => {
    //   console.log('s3', res);
    //   return '4444'
    // }).finally(res => {
    //   console.log('s4', res)
    // })


    // const r = Promise.all([p1, 'abc'])
    // r.then(res => console.log('s6:', res))

    Promise.myResolve = (args) => {
      return Promise.resolve(args)
    }
    Promise.myResolve2 = (args) => {
      return new Promise((resolve) => {
        resolve(args)
      })
    }
    const case1 = new Promise(resolve => setTimeout(() => { resolve('case1') }, 1000))
    console.log(Promise.resolve(1).then(res => console.log(res)), Promise.myResolve(1).then(res => console.log(res)), Promise.myResolve2(1).then(res => console.log(res)));
    console.log(Promise.resolve(case1).then(res => console.log(res)), Promise.myResolve(case1).then(res => console.log(res)), Promise.myResolve2(case1).then(res => console.log(res)));

  }, [])

  return (
    <div className="App">
      <ClickIncrease a={3} />
      <HoverIncrease />
    </div>
  );
}

export default App;
