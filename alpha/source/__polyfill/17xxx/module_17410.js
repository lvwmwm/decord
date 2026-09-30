// Module ID: 17410
// Function ID: 17411
// Dependencies: []

// Module 17410

export default (promise, arg1) => {
  let fn = arg1;
  if (!arg1) {
    fn = () => {

    };
  }
  return promise.then((result) => {
    closure_0 = result;
    return new Promise((fn) => {
      fn(closure_0());
    }).then(() => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    return new Promise((fn) => {
      fn(closure_0());
    }).then(() => {
      throw closure_0;
    });
  });
};
