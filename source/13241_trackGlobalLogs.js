// Module ID: 13241
// Function ID: 100473
// Name: trackGlobalLogs
// Dependencies: []

// Module 13241 (trackGlobalLogs)
arg5.default = function trackGlobalLogs() {
  return (log) => {
    const result = log(closure_1[0]).assertHasLoggerPlugin(log);
    return {
      onConnect() {
        const arg0 = console.log;
        console.log = () => {
          log(...arguments);
          const log = log.log;
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
