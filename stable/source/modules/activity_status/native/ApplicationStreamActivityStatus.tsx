// Module ID: 10750
// Function ID: 10751
// Name: ApplicationStreamActivityStatus
// Dependencies: [19, 21, 1113, 10751, 10752, 10754, 2]
// Exports: default

// Module 10750 (ApplicationStreamActivityStatus)
import intl3 from "intl" /* 1113 */;
import ActivityStatusIconDefault from "ActivityStatusIcon" /* 10751 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10754 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

export default function ApplicationStreamActivityStatus(hideText) {
  let formatResult;
  let game;
  let hideIcon;
  let iconStyle;
  let maxFontSizeMultiplier;
  let textStyle;
  let tmp7;
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
  if (game != null) {
    name = game.name;
  }
  let tmp2 = null;
  if ("" !== name) {
    let name1;
    if (game != null) {
      name1 = game.name;
    }
    tmp2 = name1;
  }
  if (null != tmp2) {
    const intl2 = intl3.intl;
    const obj = { name: tmp2 };
    formatResult = intl2.format(intl3.t["0wJXSh"], obj);
    tmp7 = require;
  } else {
    const intl = intl3.intl;
    formatResult = intl.string(intl3.t.eXan7B);
    tmp7 = require;
  }
  let tmp12 = !hideIcon;
  const tmp10 = hasOwnProperty;
  const tmp11 = React3;
  if (!hideIcon) {
    const obj2 = { icon: tmp7(10752).TvIcon, style: iconStyle };
    const tmp15 = ActivityStatusIconDefault;
    tmp12 = _false(tmp15, obj2);
  }
  const children = [tmp12, ];
  let tmp16 = !flag;
  if (tmp16) {
    const obj3 = { style: textStyle, maxFontSizeMultiplier, children: formatResult };
    tmp16 = _false(ActivityStatusTextDefault, obj3);
  }
  children[1] = tmp16;
  return tmp10(tmp11, { children });
};
