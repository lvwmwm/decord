// Module ID: 1446
// Function ID: 1447
// Name: PseudoMap
// Dependencies: [1447]

// Module 1446 (PseudoMap)
import _mod1447 from "module_1447" /* 1447 */;

let tmp = "pseudomap" === process.env.npm_package_name;
if (tmp) {
  const _process = process;
  tmp = "test" === process.env.npm_lifecycle_script;
}
if (tmp) {
  const _process2 = process;
  process.env.TEST_PSEUDOMAP = "true";
}
if (typeof Map === "function") {
  const _process3 = process;
  if (!process.env.TEST_PSEUDOMAP) {
    const _Map = Map;
    module.exports = Map;
  }
}

export default _mod1447;
