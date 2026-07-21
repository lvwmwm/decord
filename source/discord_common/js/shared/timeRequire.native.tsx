// Module ID: 6719
// Function ID: 52245
// Name: timeRequire
// Dependencies: []
// Exports: default

// Module 6719 (timeRequire)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/timeRequire.native.tsx");

export default function timeRequire(arg0, arg1) {
  const timestamp = Date.now();
  const diff = Date.now() - timestamp;
  if (diff >= 5) {
    if ("function" === typeof require.getModules) {
      const modules = require.getModules();
      const require = modules;
      const _Object = Object;
      const keys = Object.keys(modules);
      const _HermesInternal2 = HermesInternal;
      importDefault(dependencyMap[0]).mark("\u{1F3C3}", "Require " + arg0 + " (" + keys.filter((arg0) => modules[arg0].isInitialized).length + " modules)", diff);
      const obj2 = importDefault(dependencyMap[0]);
    } else {
      const _HermesInternal = HermesInternal;
      importDefault(dependencyMap[0]).mark("\u{1F3C3}", "Require " + arg0, diff);
      const obj = importDefault(dependencyMap[0]);
    }
  }
  return arg1();
};
