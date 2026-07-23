// Module ID: 1363
// Function ID: 16345
// Name: PseudoMap
// Dependencies: [1364]

// Module 1363 (PseudoMap)
let tmp = "pseudomap" === process.env.npm_package_name;
if (tmp) {
  const _process = process;
  tmp = "test" === process.env.npm_lifecycle_script;
}
if (tmp) {
  const _process2 = process;
  process.env.TEST_PSEUDOMAP = "true";
}
if ("function" === typeof Map) {
  const _process3 = process;
  if (!process.env.TEST_PSEUDOMAP) {
    const _Map = Map;
    module.exports = Map;
  }
}

export { default } from "PseudoMap";
