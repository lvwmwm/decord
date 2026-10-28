// Module ID: 15715
// Function ID: 15716
// Dependencies: [15698]
// Exports: default

// Module 15715
import ArgType from "ArgType" /* 15698 */;


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
