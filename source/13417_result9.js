// Module ID: 13417
// Function ID: 103011
// Name: result9
// Dependencies: [13400]

// Module 13417 (result9)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function trackGlobalLogs() {
  return (log) => {
    const result = outer1_0(outer1_1[0]).assertHasLoggerPlugin(log);
    let closure_0 = log;
    return {
      onConnect() {
        console.log = () => {
          log(...arguments);
          log = log.log;
          log(...arguments);
        };
        console.warn = () => {
          warn(...arguments);
          let first;
          if (arguments.length > 0) {
            first = arguments[0];
          }
          log.warn(first);
        };
        console.debug = () => {
          debug(...arguments);
          let first;
          if (arguments.length > 0) {
            first = arguments[0];
          }
          log.debug(first);
        };
      }
    };
  };
};
