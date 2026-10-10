// Module ID: 7567
// Function ID: 7568
// Name: InlineNotice
// Dependencies: [19, 21, 7568, 558, 576, 7569, 7570, 5379, 5088, 2]

// Module 7567 (InlineNotice)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 5088 */;
import HelpMessage from "HelpMessage" /* 7568 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 7569 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const HelpMessageDefault = HelpMessage;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const InlineNotice_str = "InlineNotice";
let obj = { critical: HelpMessage.HelpMessageTypes.ERROR, warning: HelpMessage.HelpMessageTypes.WARNING, info: HelpMessage.HelpMessageTypes.INFO, positive: HelpMessage.HelpMessageTypes.SUCCESS };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function InlineNotice(hidden) {
  let action;
  let items;
  let message;
  let title;
  obj = react2;
  const cResult = obj.c(11);
  const obj2 = DesignSystemsNotificationComponentsExperiment;
  if (obj2.useDesignSystemsNotificationComponents(InlineNotice_str)) {
    let tmp20;
    if (cResult[0] !== hidden) {
      const obj4 = {};
      const NewInlineNotice = tmp(7570).NewInlineNotice;
      const merged = Object.assign(hidden);
      const tmp25 = _false(NewInlineNotice, obj4);
      cResult[0] = hidden;
      cResult[1] = tmp25;
      tmp20 = tmp25;
    } else {
      tmp20 = cResult[1];
    }
    return tmp20;
  } else {
    ({ title, message, action } = hidden);
    if (true === hidden.hidden) {
      return null;
    } else {
      let tmp5;
      if (cResult[2] !== action) {
        let tmp7;
        if (null != action) {
          const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
          ({ text: obj3.text, onClick: obj3.onPress } = action);
          tmp7 = _false(tmp(5379).Button, obj5);
        }
        cResult[2] = action;
        cResult[3] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] === message) {
        let tmp9;
        if (cResult[5] === title) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === obj[tmp4]) {
          if (cResult[8] === tmp5) {
            let tmp15;
            if (cResult[9] === tmp9) {
              tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
        const obj6 = { messageType: obj[tmp4], button: tmp5, children: tmp9 };
        const tmp18 = _false(HelpMessageDefault, obj6);
        cResult[7] = obj[tmp4];
        cResult[8] = tmp5;
        cResult[9] = tmp9;
        cResult[10] = tmp18;
        tmp15 = tmp18;
      }
      let tmp11 = message;
      if (null != title) {
        const obj12 = { variant: "text-sm/semibold", children: title };
        const obj7 = { children: items };
        items = [_false(Text_Text.Text, obj12), "\n", message];
        tmp11 = hasOwnProperty(React3, obj7);
      }
      cResult[4] = message;
      cResult[5] = title;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
  }
}) : (function InlineNotice(hidden) {
  let action;
  let items;
  let message;
  let title;
  let tmp14Result;
  let tmp7;
  obj = DesignSystemsNotificationComponentsExperiment;
  if (obj.useDesignSystemsNotificationComponents(InlineNotice_str)) {
    const obj3 = {};
    const NewInlineNotice = tmp(7570).NewInlineNotice;
    const merged = Object.assign(hidden);
    return _false(NewInlineNotice, obj3);
  } else {
    ({ title, message, action } = hidden);
    let tmp14Result2 = null;
    if (true !== hidden.hidden) {
      const obj4 = { messageType: obj[tmp3], button: tmp14Result, children: tmp7 };
      tmp14Result = undefined;
      const tmp16 = HelpMessageDefault;
      if (null != action) {
        const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
        ({ text: obj2.text, onClick: obj2.onPress } = action);
        tmp14Result = tmp14(tmp(5379).Button, obj5);
      }
      tmp7 = message;
      if (null != title) {
        const obj11 = { variant: "text-sm/semibold", children: title };
        const obj6 = { children: items };
        items = [_false(Text_Text.Text, obj11), "\n", message];
        tmp7 = hasOwnProperty(React3, obj6);
      }
      tmp14Result2 = tmp14(tmp16, obj4);
    }
    return tmp14Result2;
  }
});
const result = size.fileFinishedImporting("design/mana/components/InlineNotice/InlineNotice.native.tsx");

export const InlineNotice = tmp4;
