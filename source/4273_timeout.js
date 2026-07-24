// Module ID: 4273
// Function ID: 37400
// Name: timeout
// Dependencies: []

// Module 4273 (timeout)
exports.exports.timeout = (arg0, arg1) => {
  let closure_0 = arg1;
  let closure_2 = new closure_0();
  const items = [arg0, ];
  const tmp = new closure_0();
  items[1] = new Promise((arg0, arg1) => {
    let closure_0 = arg1;
    const timeout = setTimeout(() => {
      callback(outer1_2);
    }, closure_0);
  });
  const promise = new Promise((arg0, arg1) => {
    let closure_0 = arg1;
    const timeout = setTimeout(() => {
      callback(outer1_2);
    }, closure_0);
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
let closure_0 = tmp;
tmp.prototype = Object.create(Error.prototype);
tmp.prototype.name = "TimeoutError";
