// Module ID: 14752
// Function ID: 14753
// Dependencies: [14735]
// Exports: default

// Module 14752
import emptyPromise from "emptyPromise" /* 14735 */;

require = arg1;
const dependencyMap = arg6;

export default () => (arg0) => {
  const result = emptyPromise.assertHasLoggerPlugin(arg0);
  closure_0 = arg0;
  return {
    onConnect() {
      console.log = () => {
        const items = [...arguments];
        log(...items);
        const items1 = [...items];
        log.log.apply(items1);
      };
      console.warn = () => {
        const items = [...arguments];
        warn(...items);
        log.warn(items[0]);
      };
      console.debug = () => {
        const items = [...arguments];
        debug(...items);
        log.debug(items[0]);
      };
    }
  };
};
