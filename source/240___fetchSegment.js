// Module ID: 240
// Function ID: 3265
// Name: __fetchSegment
// Dependencies: []

// Module 240 (__fetchSegment)
arg0.__fetchSegment = function __fetchSegment(arg0, arg1, arg2) {
  arg1 = arg2;
  const segment = arg1(arg6[0]).default.fetchSegment(arg0, arg1, (message) => {
    if (message) {
      const _Error = Error;
      const error = new Error(message.message);
      error.code = message.code;
      arg2(error);
    } else {
      arg2(null);
    }
  });
};
