// Module ID: 12345
// Function ID: 12346
// Dependencies: [12277]
// Exports: applySdkMetadata

// Module 12345
import _mod12277 from "module_12277" /* 12277 */;


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
          const obj = { name: "" + str + ":@sentry/" + item, version: _mod12277.SDK_VERSION };
          return obj;
        }),
      version: str(12277).SDK_VERSION
    };
    const _HermesInternal = HermesInternal;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
};
