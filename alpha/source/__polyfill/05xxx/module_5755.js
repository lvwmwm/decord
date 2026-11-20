// Module ID: 5755
// Function ID: 5756
// Dependencies: [5756]

// Module 5755
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5756 */;


export const RNSLog = {
  log(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      const items = [arg0];
      HermesBuiltin.arraySpread(items, substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(log, items, console);
    }
  },
  warn(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      const items = [arg0];
      HermesBuiltin.arraySpread(items, substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(warn, items, console);
    }
  },
  error(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      const items = [arg0];
      HermesBuiltin.arraySpread(items, substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(error, items, console);
    }
  },
  info(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      const items = [arg0];
      HermesBuiltin.arraySpread(items, substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(info, items, console);
    }
  }
};
