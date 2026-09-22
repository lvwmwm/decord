// Module ID: 13000
// Function ID: 13001
// Dependencies: [12932]
// Exports: applySdkMetadata

// Module 13000
import _mod12932 from "module_12932" /* 12932 */;

require = arg1;
const dependencyMap = arg6;

export const applySdkMetadata = function applySdkMetadata(_metadata, arg1) {
  let arr = arg2;
  if (arg2 === undefined) {
    const items = [arg1];
    arr = items;
  }
  let str = arg3;
  if (arg3 === undefined) {
    str = "npm";
  }
  const tmp = _metadata._metadata || {};
  if (!tmp.sdk) {
    const obj = { name: null, packages: null, version: null };
    const _HermesInternal = HermesInternal;
    obj.name = "sentry.javascript." + arg1;
    obj.packages = arr.map((item) => ({ name: "" + str + ":@sentry/" + item, version: _mod12932.SDK_VERSION }));
    obj.version = str(12932).SDK_VERSION;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
};
