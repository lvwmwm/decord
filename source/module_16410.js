// Module ID: 16410
// Function ID: 16411
// Dependencies: []

// Module 16410

export default (promise) => {
  let fn = arg1;
  fn = arg1;
  if (!arg1) {
    fn = () => {

    };
  }
  return promise.then((arg0) => {
    let closure_0 = arg0;
    return new Promise((arg0) => {
      arg0(callback());
    }).then(() => closure_0);
  }, (arg0) => {
    let closure_0 = arg0;
    return new Promise((arg0) => {
      arg0(callback());
    }).then(() => {
      throw closure_0;
    });
  });
};
