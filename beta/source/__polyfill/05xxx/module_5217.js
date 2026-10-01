// Module ID: 5217
// Function ID: 5218
// Dependencies: [5218]

// Module 5217
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5218 */;


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
