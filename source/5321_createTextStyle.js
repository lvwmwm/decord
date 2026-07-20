// Module ID: 5321
// Function ID: 45243
// Name: createTextStyle
// Dependencies: []
// Exports: default

// Module 5321 (createTextStyle)
const Fonts = require(dependencyMap[0]).Fonts;
let closure_1 = { 1549862179: "center", 1663490641: 0.5, 1365441440: 0, 1549905086: 3, 1661142353: 4, 1370969698: "flag", 340984409: 4, 1425442007: 1, 503071709: null, 451744238: 0 };
let closure_2 = {};
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/rebrand/native/TextStyles.tsx");

export default function createTextStyle(fontFamily, color, arg2, uppercase) {
  const obj = { fontFamily, fontSize: closure_1[arg2], lineHeight: closure_2[arg2] };
  if (null != color) {
    obj.color = color;
  }
  uppercase = undefined;
  if (null != uppercase) {
    uppercase = uppercase.uppercase;
  }
  if (true === uppercase) {
    obj.textTransform = "uppercase";
    let tmp3 = tmp <= 14;
    if (tmp3) {
      let tmp5 = fontFamily === Fonts.DISPLAY_EXTRABOLD;
      if (!tmp5) {
        tmp5 = fontFamily === Fonts.DISPLAY_SEMIBOLD;
      }
      tmp3 = tmp5;
    }
    if (tmp3) {
      obj.letterSpacing = 0.2;
    }
  }
  let marginBottom;
  if (null != uppercase) {
    marginBottom = uppercase.marginBottom;
  }
  if (null != marginBottom) {
    obj.marginBottom = uppercase.marginBottom;
  }
  return obj;
};
