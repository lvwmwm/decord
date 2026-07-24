// Module ID: 16147
// Function ID: 125134
// Dependencies: []

// Module 16147

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
