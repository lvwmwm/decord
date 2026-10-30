// Module ID: 16219
// Function ID: 16220
// Dependencies: [16202]
// Exports: default

// Module 16219
import ArgType from "ArgType" /* 16202 */;


export default () => (arg0) => {
  const result = ArgType.assertHasLoggerPlugin(arg0);
  let closure_0 = arg0;
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
