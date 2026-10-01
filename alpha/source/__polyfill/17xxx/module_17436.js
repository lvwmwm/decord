// Module ID: 17436
// Function ID: 17437
// Dependencies: []

// Module 17436

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
