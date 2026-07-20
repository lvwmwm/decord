// Module ID: 1935
// Function ID: 21816
// Name: asyncGeneratorStep
// Dependencies: []

// Module 1935 (asyncGeneratorStep)
function asyncGeneratorStep(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const iter = arg0[arg5](arg6);
  const value = iter.value;
  if (iter.done) {
    arg1(value);
  } else {
    const resolved = Promise.resolve(value);
    resolved.then(arg3, arg4);
  }
}

export default function _asyncToGenerator(arg0) {
  const asyncGeneratorStep = arg0;
  return function() {
    const arg0 = this;
    let closure_1 = arguments;
    return new Promise((arg0, arg1) => {
      const self = arg0;
      let closure_1 = arg1;
      function _next(arg0) {
        arg0(closure_2, arg0, arg1, _next, _throw, "next", arg0);
      }
      function _throw(arg0) {
        arg0(closure_2, arg0, arg1, _next, _throw, "throw", arg0);
      }
      let closure_2 = self.apply(self, closure_1);
      _next(undefined);
    });
  };
};
