// Module ID: 8620
// Function ID: 8621
// Name: processFonts
// Dependencies: [26]

// Module 8620 (processFonts)
const module = arg2;
const dependencyMap = arg6;
arg5.processFonts = function processFonts(items3) {
  const fontFamily = module(26).fontFamily;
  let _process;
  if (fontFamily != null) {
    _process = fontFamily.process;
  }
  let mapped = items3;
  if (typeof _process === "function") {
    mapped = items3.map(_process);
  }
  return mapped;
};
