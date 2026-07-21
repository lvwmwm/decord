// Module ID: 7300
// Function ID: 58902
// Name: applySdkMetadata
// Dependencies: []

// Module 7300 (applySdkMetadata)
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
    const arg1 = str2;
    const tmp = _metadata._metadata || {};
    if (!tmp.sdk) {
      const obj = {};
      const _HermesInternal = HermesInternal;
      obj.name = "sentry.javascript." + arg1;
      obj.packages = items.map((arg0) => ({ name: "" + str2 + ":@sentry/" + arg0, version: str2(closure_1[0]).SDK_VERSION }));
      obj.version = arg1(arg6[0]).SDK_VERSION;
      tmp.sdk = obj;
    }
    _metadata._metadata = tmp;
  }
  items = [arg1];
};
