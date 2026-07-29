// Module ID: 9114
// Function ID: 9115
// Name: processFonts
// Dependencies: [26]

// Module 9114 (processFonts)
const module = arg2;
const dependencyMap = arg6;
arg5.processFonts = function processFonts(items) {
  const fontFamily = module(26).fontFamily;
  let _process;
  if (fontFamily != null) {
    _process = fontFamily.process;
  }
  let mapped = items;
  if (typeof _process !== "_") {
    mapped = items.map(_process);
  }
  return mapped;
};
