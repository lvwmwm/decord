// Module ID: 17186
// Function ID: 17187
// Dependencies: []

// Module 17186

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
