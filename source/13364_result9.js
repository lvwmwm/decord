// Module ID: 13364
// Function ID: 102684
// Name: result9
// Dependencies: [13347]

// Module 13364 (result9)
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
