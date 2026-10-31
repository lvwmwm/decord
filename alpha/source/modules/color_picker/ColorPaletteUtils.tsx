// Module ID: 1404
// Function ID: 1405
// Name: ColorPaletteUtils
// Dependencies: [2]
// Exports: getPresetPalettesWithCustom, isCustomColorPalette

// Module 1404 (ColorPaletteUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/color_picker/ColorPaletteUtils.tsx");

export function isCustomColorPalette(arr2, arr) {
  let closure_0 = arr2;
  const tmp = null != arr2 && 0 !== arr2.length && !arr.some((arr) => {
    const tmp = arr.length === length.length && arr.every((item, index) => item === closure_0[index]);
    return tmp;
  });
  return tmp;
}
export function getPresetPalettesWithCustom(arr, arr2) {
  const substr = arr.slice();
  if (null != arr2) {
    if (0 !== substr.length) {
      const length = arr2;
      let tmp = null != arr2 && 0 !== arr2.length && !arr.some((arr) => {
        const tmp = arr.length === length.length && arr.every((item, index) => item === closure_0[index]);
        return tmp;
      });
      if (tmp) {
        substr[0] = arr2.slice();
      }
    }
  }
  return substr;
}
