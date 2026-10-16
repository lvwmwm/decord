// Module ID: 9585
// Function ID: 9586
// Name: processFonts
// Dependencies: [26]
// Exports: processFonts

// Module 9585 (processFonts)
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
