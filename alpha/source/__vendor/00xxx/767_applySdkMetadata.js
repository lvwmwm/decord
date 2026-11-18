// Module ID: 767
// Function ID: 768
// Name: applySdkMetadata
// Dependencies: [690]
// Exports: applySdkMetadata

// Module 767 (applySdkMetadata)
import SDK_VERSION from "SDK_VERSION" /* 690 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function applySdkMetadata(_metadata, browser, arg2, SENTRY_SDK_SOURCE) {
  let arr = arg2;
  if (arg2 === undefined) {
    const items = [browser];
    arr = items;
  }
  let str = SENTRY_SDK_SOURCE;
  if (SENTRY_SDK_SOURCE === undefined) {
    str = "npm";
  }
  const tmp = _metadata._metadata || {};
  if (!tmp.sdk) {
    let obj = {
      name: "sentry.javascript." + browser,
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
