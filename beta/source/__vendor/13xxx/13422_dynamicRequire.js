// Module ID: 13422
// Function ID: 13423
// Name: dynamicRequire
// Dependencies: [13423, 13310]
// Exports: isBrowser

// Module 13422 (dynamicRequire)
import _mod13423 from "module_13423" /* 13423 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13423;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13310).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
