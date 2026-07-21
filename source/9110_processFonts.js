// Module ID: 9110
// Function ID: 71355
// Name: processFonts
// Dependencies: []

// Module 9110 (processFonts)
arg5.processFonts = function processFonts(items) {
  let _process;
  const fontFamily = arg2(arg6[0]).fontFamily;
  if (null != fontFamily) {
    _process = fontFamily.process;
  }
  let mapped = items;
  if ("function" === typeof _process) {
    mapped = items.map(_process);
  }
  return mapped;
};
