// Module ID: 12076
// Function ID: 12077
// Dependencies: [12008]
// Exports: applySdkMetadata

// Module 12076
import _mod12008 from "module_12008" /* 12008 */;


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
    let obj = {
      name: "sentry.javascript." + arg1,
      packages: arr.map((item) => {
          const obj = { name: "" + str + ":@sentry/" + item, version: _mod12008.SDK_VERSION };
          return obj;
        }),
      version: str(12008).SDK_VERSION
    };
    const _HermesInternal = HermesInternal;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
};
