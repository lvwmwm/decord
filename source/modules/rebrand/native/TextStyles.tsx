// Module ID: 5052
// Function ID: 43719
// Name: createTextStyle
// Dependencies: [653, 2]
// Exports: default

// Module 5052 (createTextStyle)
import { Fonts } from "ME";

let closure_1 = { 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 16: 16, 18: 17, 20: 20, 24: 25, 32: 34 };
let closure_2 = { 10: 14, 11: 14, 12: 16, 13: 16, 14: 18, 16: 20, 18: 24, 20: 24, 24: 30, 32: 40 };
const result = require("set").fileFinishedImporting("modules/rebrand/native/TextStyles.tsx");

export default function createTextStyle(fontFamily, color, arg2, uppercase) {
  const obj = { fontFamily, fontSize: table[arg2], lineHeight: table2[arg2] };
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
