// Module ID: 4265
// Function ID: 37303
// Name: timeout
// Dependencies: []

// Module 4265 (timeout)
exports.exports.timeout = (arg0, arg1) => {
  let tmp = arg1;
  tmp = new tmp();
  const items = [
    arg0,
    new Promise((arg0, arg1) => {
      const timeout = setTimeout(() => {
        arg1(closure_2);
      }, arg1);
    })
  ];
  const promise = new Promise((arg0, arg1) => {
    const timeout = setTimeout(() => {
      arg1(closure_2);
    }, arg1);
  });
  return Promise.race(items).then((arg0) => {
    clearTimeout(closure_1);
    return arg0;
  }, (arg0) => {
    clearTimeout(closure_1);
    throw arg0;
  });
};
class tmp {
  constructor() {
    callResult = Error.call(this);
    this.stack = Error().stack;
    this.message = "Timeout";
    return;
  }
}
exports.exports.TimeoutError = tmp;
tmp.prototype = Object.create(Error.prototype);
tmp.prototype.name = "TimeoutError";
