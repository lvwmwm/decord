// Module ID: 5049
// Function ID: 43701
// Name: createTextStyle
// Dependencies: []
// Exports: default

// Module 5049 (createTextStyle)
const Fonts = require(dependencyMap[0]).Fonts;
let closure_1 = {};
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
