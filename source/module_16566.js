// Module ID: 16566
// Function ID: 16567
// Dependencies: []

// Module 16566

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
