// Module ID: 9296
// Function ID: 9297
// Name: processFonts
// Dependencies: [26]

// Module 9296 (processFonts)
const module = arg2;
const dependencyMap = arg6;
arg5.processFonts = function processFonts(items) {
  const fontFamily = module(26).fontFamily;
  let _process;
  if (fontFamily != null) {
    _process = fontFamily.process;
  }
  let mapped = items;
  if (typeof _process !== "HAS_APPLICATION") {
    mapped = items.map(_process);
  }
  return mapped;
};
