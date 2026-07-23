// Module ID: 240
// Function ID: 3265
// Name: __fetchSegment
// Dependencies: [241]

// Module 240 (__fetchSegment)
const require = arg1;
const dependencyMap = arg6;
arg0.__fetchSegment = function __fetchSegment(arg0, arg1, arg2) {
  const _require = arg2;
  const segment = _require(241).default.fetchSegment(arg0, arg1, (message) => {
    if (message) {
      const _Error = Error;
      const error = new Error(message.message);
      error.code = message.code;
      callback(error);
    } else {
      callback(null);
    }
  });
};
