// Module ID: 89
// Function ID: 1517
// Name: processColorElement
// Dependencies: [38]

// Module 89 (processColorElement)
const module = arg2;
const dependencyMap = arg6;
function processColorElement(arg0) {
  let num = module(38)(arg0);
  if (null == num) {
    const _console = console;
    console.error("Invalid value in color array:", arg0);
    num = 0;
  }
  return num;
}
arg5.default = function processColorArray(arr) {
  let mapped = null;
  if (null != arr) {
    mapped = arr.map(processColorElement);
  }
  return mapped;
};
