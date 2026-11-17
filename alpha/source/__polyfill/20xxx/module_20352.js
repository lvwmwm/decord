// Module ID: 20352
// Function ID: 20353
// Dependencies: []

// Module 20352

export default (promise, arg1) => {
  const fn = arg1 || (() => {

  });
  return promise.then((result) => {
    let closure_0 = result;
    const promise = new Promise((fn) => {
      fn(fn());
    });
    return promise.then(() => fn);
  }, (arg0) => {
    let closure_0 = arg0;
    const promise = new Promise((fn) => {
      fn(closure_0());
    });
    return promise.then(() => {
      throw closure_0;
    });
  });
};
