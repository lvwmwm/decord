// Module ID: 7348
// Function ID: 7349
// Name: processFonts
// Dependencies: [26]
// Exports: processFonts

// Module 7348 (processFonts)
import _modDef26 from "module_26" /* 26 */;


export const processFonts = function processFonts(items3) {
  const fontFamily = _modDef26.fontFamily;
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
