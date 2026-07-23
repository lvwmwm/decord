// Module ID: 9118
// Function ID: 71420
// Name: processFonts
// Dependencies: [73]

// Module 9118 (processFonts)
const module = arg2;
const dependencyMap = arg6;
arg5.processFonts = function processFonts(items) {
  let _process;
  const fontFamily = module(73).fontFamily;
  if (null != fontFamily) {
    _process = fontFamily.process;
  }
  let mapped = items;
  if ("function" === typeof _process) {
    mapped = items.map(_process);
  }
  return mapped;
};
