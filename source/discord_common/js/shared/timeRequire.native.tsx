// Module ID: 6724
// Function ID: 52288
// Name: timeRequire
// Dependencies: [20, 2]
// Exports: default

// Module 6724 (timeRequire)
const result = require("set").fileFinishedImporting("../discord_common/js/shared/timeRequire.native.tsx");

export default function timeRequire(arg0, arg1) {
  const timestamp = Date.now();
  const diff = Date.now() - timestamp;
  if (diff >= 5) {
    if ("function" === typeof modules.getModules) {
      modules = modules.getModules();
      const _Object = Object;
      const keys = Object.keys(modules);
      const _HermesInternal2 = HermesInternal;
      importDefault(20).mark("\u{1F3C3}", "Require " + arg0 + " (" + keys.filter((arg0) => modules[arg0].isInitialized).length + " modules)", diff);
      const obj2 = importDefault(20);
    } else {
      const _HermesInternal = HermesInternal;
      importDefault(20).mark("\u{1F3C3}", "Require " + arg0, diff);
      const obj = importDefault(20);
    }
  }
  return arg1();
};
