// Module ID: 1443
// Function ID: 1444
// Name: PseudoMap
// Dependencies: [1444]

// Module 1443 (PseudoMap)
import _mod1444 from "module_1444" /* 1444 */;

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

export default _mod1444;
