// Module ID: 7306
// Function ID: 58988
// Name: applySdkMetadata
// Dependencies: [7238]

// Module 7306 (applySdkMetadata)
const require = arg1;
const dependencyMap = arg6;
arg5.applySdkMetadata = function applySdkMetadata(_metadata) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let items = arguments[2];
    }
    let str2 = "npm";
    if (arguments.length > 3) {
      str2 = "npm";
      if (undefined !== arguments[3]) {
        str2 = arguments[3];
      }
    }
    const tmp = _metadata._metadata || {};
    if (!tmp.sdk) {
      const obj = {};
      const _HermesInternal = HermesInternal;
      obj.name = "sentry.javascript." + arg1;
      obj.packages = items.map((arg0) => ({ name: "" + str2 + ":@sentry/" + arg0, version: str2(outer1_1[0]).SDK_VERSION }));
      obj.version = str2(7238).SDK_VERSION;
      tmp.sdk = obj;
    }
    _metadata._metadata = tmp;
  }
  items = [arg1];
};
