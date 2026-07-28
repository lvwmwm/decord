// Module ID: 9043
// Function ID: 71036
// Name: ApplicationStreamActivityStatus
// Dependencies: [31, 33, 1212, 9044, 9045, 9047, 2]
// Exports: default

// Module 9043 (ApplicationStreamActivityStatus)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("getSystemLocale").fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

export default function ApplicationStreamActivityStatus(hideText) {
  let game;
  let hideIcon;
  let iconStyle;
  let maxFontSizeMultiplier;
  let textStyle;
  ({ game, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (hideIcon) {
    if (flag) {
      return null;
    }
  }
  let name;
  if (null != game) {
    name = game.name;
  }
  let tmp2 = null;
  if ("" !== name) {
    let name1;
    if (null != game) {
      name1 = game.name;
    }
    tmp2 = name1;
  }
  if (null != tmp2) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = { name: tmp2 };
    let formatResult = intl2.format(require(1212) /* getSystemLocale */.t["0wJXSh"], obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatResult = intl.string(require(1212) /* getSystemLocale */.t.eXan7B);
  }
  obj = {};
  let tmp11 = !hideIcon;
  if (tmp11) {
    obj = { icon: require(9045) /* TvIcon */.TvIcon, style: iconStyle };
    tmp11 = callback(importDefault(9044), obj);
    const tmp15 = importDefault(9044);
  }
  const items = [tmp11, ];
  let tmp17 = !flag;
  if (tmp17) {
    const obj1 = { style: textStyle, maxFontSizeMultiplier, children: formatResult };
    tmp17 = callback(importDefault(9047), obj1);
  }
  items[1] = tmp17;
  obj.children = items;
  return closure_5(closure_4, obj);
};
