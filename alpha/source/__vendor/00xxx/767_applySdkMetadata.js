// Module ID: 767
// Function ID: 768
// Name: applySdkMetadata
// Dependencies: [690]
// Exports: applySdkMetadata

// Module 767 (applySdkMetadata)
import SDK_VERSION from "SDK_VERSION" /* 690 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function applySdkMetadata(_metadata, arg1) {
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
          const obj = { name: "" + str + ":@sentry/" + item, version: SDK_VERSION.SDK_VERSION };
          return obj;
        }),
      version: str(690).SDK_VERSION
    };
    const _HermesInternal = HermesInternal;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
}
