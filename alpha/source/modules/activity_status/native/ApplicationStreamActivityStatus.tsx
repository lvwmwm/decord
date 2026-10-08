// Module ID: 10225
// Function ID: 10226
// Name: ApplicationStreamActivityStatus
// Dependencies: [19, 21, 558, 576, 1126, 10226, 10227, 10229, 2]

// Module 10225 (ApplicationStreamActivityStatus)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import ActivityStatusIconDefault from "ActivityStatusIcon" /* 10226 */;
import TvIcon from "TvIcon" /* 10227 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10229 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationStreamActivityStatus(arg0) {
  let game;
  let hideIcon;
  let hideText;
  let iconStyle;
  let items;
  let maxFontSizeMultiplier;
  let textStyle;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(13);
  ({ game, iconStyle, textStyle, maxFontSizeMultiplier, hideIcon, hideText } = arg0);
  if (undefined !== hideIcon && hideIcon) {
    if (undefined !== hideText && hideText) {
      return null;
    }
  }
  let name;
  if (game != null) {
    name = game.name;
  }
  let tmp7 = null;
  if ("" !== name) {
    let name1;
    if (game != null) {
      name1 = game.name;
    }
    tmp7 = name1;
  }
  if (cResult[0] !== tmp7) {
    let formatResult;
    if (null != tmp7) {
      const intl2 = tmp(1126).intl;
      const obj2 = { name: tmp7 };
      formatResult = intl2.format(tmp(1126).t["0wJXSh"], obj2);
    } else {
      const intl = tmp(1126).intl;
      formatResult = intl.string(tmp(1126).t.eXan7B);
    }
    cResult[0] = tmp7;
    cResult[1] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === (undefined !== hideIcon && hideIcon)) {
    let tmp11;
    if (cResult[3] === iconStyle) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === (undefined !== hideText && hideText)) {
      if (cResult[6] === maxFontSizeMultiplier) {
        if (cResult[7] === tmp9) {
          let tmp16;
          if (cResult[8] === textStyle) {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp11) {
            let tmp20;
            if (cResult[11] === tmp16) {
              tmp20 = cResult[12];
            }
            return tmp20;
          }
          const obj3 = { children: items };
          items = [tmp11, tmp16];
          const tmp23 = hasOwnProperty(React3, obj3);
          cResult[10] = tmp11;
          cResult[11] = tmp16;
          cResult[12] = tmp23;
          tmp20 = tmp23;
        }
      }
    }
    let tmp17 = !tmp5;
    if (tmp17) {
      const obj4 = { style: textStyle, maxFontSizeMultiplier, children: tmp9 };
      tmp17 = _false(ActivityStatusTextDefault, obj4);
    }
    cResult[5] = undefined !== hideText && hideText;
    cResult[6] = maxFontSizeMultiplier;
    cResult[7] = tmp9;
    cResult[8] = textStyle;
    cResult[9] = tmp17;
    tmp16 = tmp17;
  }
  let tmp12 = !tmp4;
  if (tmp12) {
    const obj5 = { icon: TvIcon.TvIcon, style: iconStyle };
    const tmp15 = ActivityStatusIconDefault;
    tmp12 = _false(tmp15, obj5);
  }
  cResult[2] = undefined !== hideIcon && hideIcon;
  cResult[3] = iconStyle;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function ApplicationStreamActivityStatus(hideText) {
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
    const obj2 = { icon: tmp7(10227).TvIcon, style: iconStyle };
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
});
const result = size.fileFinishedImporting("modules/activity_status/native/ApplicationStreamActivityStatus.tsx");

export default tmp4;
