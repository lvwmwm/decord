// Module ID: 11063
// Function ID: 11064
// Dependencies: [10995]
// Exports: applySdkMetadata

// Module 11063
import _mod10995 from "module_10995" /* 10995 */;


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
          const obj = { name: "" + str + ":@sentry/" + item, version: _mod10995.SDK_VERSION };
          return obj;
        }),
      version: str(10995).SDK_VERSION
    };
    const _HermesInternal = HermesInternal;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
};
