// Module ID: 15168
// Function ID: 15169
// Name: BadgeUnlockColorUtils
// Dependencies: [5240, 2]
// Exports: getBadgeHaloColor, pickBadgeColor

// Module 15168 (BadgeUnlockColorUtils)
import ColorUtils from "ColorUtils" /* 5240 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/BadgeUnlockColorUtils.tsx");

export function pickBadgeColor(arr) {
  const found = arr.filter((item) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = item;
    const obj = ColorUtils;
    const lightness = obj.rawRgbToHsl(tmp, tmp2, tmp3).lightness;
    return lightness > 0.15 && lightness < 0.85;
  });
  let found1 = found.find((item) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = item;
    const obj = ColorUtils;
    return obj.rawRgbToHsl(tmp, tmp2, tmp3).saturation > 0.3;
  });
  if (found1 == null) {
    found1 = found[0];
  }
  let rgbToHexResult = null;
  if (null != found1) {
    const tmp3 = require;
    let obj = ColorUtils;
    rgbToHexResult = obj.rgbToHex(found1[0], found1[1], found1[2]);
  }
  return rgbToHexResult;
}
export function getBadgeHaloColor(PRIMARY_800) {
  let b;
  let g;
  let hue;
  let r;
  let saturation;
  const obj = ColorUtils;
  ({ r, g, b } = obj.hexToRgb(PRIMARY_800));
  obj.hexToRgb(PRIMARY_800);
  const obj2 = ColorUtils;
  ({ hue, saturation } = obj2.rawRgbToHsl(r, g, b));
  obj2.rawRgbToHsl(r, g, b);
  const obj3 = ColorUtils;
  return obj3.hslToHex(hue, 100 * saturation, 70);
}
