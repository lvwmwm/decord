// Module ID: 8358
// Function ID: 8359
// Name: processFonts
// Dependencies: [26]

// Module 8358 (processFonts)
const module = arg2;
const dependencyMap = arg6;
arg5.processFonts = function processFonts(items) {
  const fontFamily = module(26).fontFamily;
  let _process;
  if (fontFamily != null) {
    _process = fontFamily.process;
  }
  let mapped = items;
  if (typeof _process === "function") {
    mapped = items.map(_process);
  }
  return mapped;
};
