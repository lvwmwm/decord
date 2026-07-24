// Module ID: 4677
// Function ID: 40748
// Name: ProcessArgs
// Dependencies: [6, 7, 3741, 2]

// Module 4677 (ProcessArgs)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class ProcessArgs {
    constructor() {
      tmp = outer1_2(this, ProcessArgs);
      return;
    }
  }
  let obj = {
    key: "get",
    value() {
      if (null == ProcessArgs.cached) {
        let mainArgvSync;
        if (null != ProcessArgs(outer1_1[2])) {
          const processUtils = ProcessArgs(outer1_1[2]).processUtils;
          if (null != processUtils) {
            if (null != processUtils.getMainArgvSync) {
              mainArgvSync = processUtils.getMainArgvSync();
            }
          }
        }
        let tmp3 = null != mainArgvSync;
        if (tmp3) {
          tmp3 = mainArgvSync.length > 1;
        }
        if (tmp3) {
          mainArgvSync.shift();
        }
        if (null == mainArgvSync) {
          mainArgvSync = [];
        }
        ProcessArgs.cached = mainArgvSync;
        const tmp5 = ProcessArgs;
      }
      return ProcessArgs.cached;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "contains",
    value(arg0) {
      const value = ProcessArgs.get();
      return value.includes(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "isEnvVariableTrue",
    value(arg0) {
      if (undefined === ProcessArgs(outer1_1[2])) {
        return false;
      } else {
        let tmp4;
        if (null != ProcessArgs(outer1_1[2])) {
          const _process = ProcessArgs(outer1_1[2]).process;
          if (null != _process) {
            const env = _process.env;
            if (null != env) {
              tmp4 = env[arg0];
            }
          }
        }
        if ("1" !== tmp4) {
          if ("true" !== tmp4) {
            return false;
          }
        }
        return true;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isDisallowPopupsSet",
    value() {
      let tmp = !ProcessArgs.contains("--disallow-popups");
      if (tmp) {
        tmp = !ProcessArgs.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS");
      }
      return !tmp;
    }
  };
  items[4] = {
    key: "isDiscordTestSet",
    value() {
      return ProcessArgs.isEnvVariableTrue("DISCORD_TEST");
    }
  };
  items[5] = {
    key: "isDiscordGatewayPlaintextSet",
    value() {
      return false;
    }
  };
  return callback(ProcessArgs, null, items);
})();
const result = require("set").fileFinishedImporting("utils/ProcessArgs.tsx");

export const ProcessArgs = tmp2;
