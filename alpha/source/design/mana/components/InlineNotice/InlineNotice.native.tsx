// Module ID: 7953
// Function ID: 7954
// Name: InlineNotice
// Dependencies: [19, 21, 7954, 558, 576, 7955, 7956, 5244, 5234, 2]

// Module 7953 (InlineNotice)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 5234 */;
import HelpMessage from "HelpMessage" /* 7954 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 7955 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const HelpMessageDefault = HelpMessage;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
const InlineNotice_str = "InlineNotice";
let obj = { critical: HelpMessage.HelpMessageTypes.ERROR, warning: HelpMessage.HelpMessageTypes.WARNING, info: HelpMessage.HelpMessageTypes.INFO, positive: HelpMessage.HelpMessageTypes.SUCCESS };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function InlineNotice(hidden) {
  let action;
  let items;
  let items1;
  let message;
  let messageList;
  let title;
  obj = react2;
  const cResult = obj.c(14);
  const obj2 = DesignSystemsNotificationComponentsExperiment;
  if (obj2.useDesignSystemsNotificationComponents(InlineNotice_str)) {
    let tmp27;
    if (cResult[0] !== hidden) {
      const obj3 = {};
      const NewInlineNotice = tmp(7956).NewInlineNotice;
      const merged = Object.assign(hidden);
      const tmp32 = React3(NewInlineNotice, obj3);
      cResult[0] = hidden;
      cResult[1] = tmp32;
      tmp27 = tmp32;
    } else {
      tmp27 = cResult[1];
    }
    return tmp27;
  } else {
    ({ title, message, messageList, action } = hidden);
    if (true === hidden.hidden) {
      return null;
    } else {
      if (cResult[2] === message) {
        let tmp5;
        let tmp12;
        if (cResult[3] === messageList) {
          tmp5 = cResult[4];
        }
        if (cResult[5] !== action) {
          let tmp14;
          if (null != action) {
            const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
            ({ text: obj4.text, onPress: obj4.onPress, loading: obj4.loading } = action);
            tmp14 = React3(tmp(5244).Button, obj5);
          }
          cResult[5] = action;
          cResult[6] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          let tmp16;
          if (cResult[8] === title) {
            tmp16 = cResult[9];
          }
          if (cResult[10] === obj[tmp4]) {
            if (cResult[11] === tmp12) {
              let tmp22;
              if (cResult[12] === tmp16) {
                tmp22 = cResult[13];
              }
              return tmp22;
            }
          }
          const obj6 = { messageType: obj[tmp4], button: tmp12, children: tmp16 };
          const tmp25 = React3(HelpMessageDefault, obj6);
          cResult[10] = obj[tmp4];
          cResult[11] = tmp12;
          cResult[12] = tmp16;
          cResult[13] = tmp25;
          tmp22 = tmp25;
        }
        let tmp18 = tmp5;
        if (null != title) {
          const obj7 = { children: items };
          const obj8 = { variant: "text-sm/semibold", children: title };
          items = [React3(Text_Text.Text, obj8), "\n", tmp5];
          tmp18 = hasOwnProperty(metroRequire, obj7);
        }
        cResult[7] = tmp5;
        cResult[8] = title;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      }
      let tmp7 = message;
      if (null != messageList) {
        const obj14 = { children: items1 };
        items1 = [
          message,
          messageList.map((item, index) => {
                  let items;
                  obj = { children: items };
                  items = ["\n\u2022 ", item];
                  return closure_1_5(React.Fragment, obj, index);
                })
        ];
        tmp7 = hasOwnProperty(metroRequire, obj14);
      }
      cResult[2] = message;
      cResult[3] = messageList;
      cResult[4] = tmp7;
      tmp5 = tmp7;
    }
  }
}) : (function InlineNotice(hidden) {
  let action;
  let items;
  let items1;
  let message;
  let messageList;
  let title;
  let tmp12;
  let tmp7Result;
  obj = DesignSystemsNotificationComponentsExperiment;
  if (obj.useDesignSystemsNotificationComponents(InlineNotice_str)) {
    const obj2 = {};
    const NewInlineNotice = tmp(7956).NewInlineNotice;
    const merged = Object.assign(hidden);
    return React3(NewInlineNotice, obj2);
  } else {
    ({ title, message, messageList, action } = hidden);
    if (true === hidden.hidden) {
      return null;
    } else {
      let tmp6 = message;
      if (null != messageList) {
        const obj3 = { children: items };
        items = [
          message,
          messageList.map((item, index) => {
                  let items;
                  obj = { children: items };
                  items = ["\n\u2022 ", item];
                  return closure_1_5(React.Fragment, obj, index);
                })
        ];
        tmp6 = hasOwnProperty(metroRequire, obj3);
      }
      const obj5 = { messageType: obj[tmp3], button: tmp7Result, children: tmp12 };
      tmp7Result = undefined;
      const tmp9 = HelpMessageDefault;
      if (null != action) {
        const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
        ({ text: obj4.text, onPress: obj4.onPress, loading: obj4.loading } = action);
        tmp7Result = tmp7(tmp(5244).Button, obj6);
      }
      tmp12 = tmp6;
      if (null != title) {
        const obj13 = { variant: "text-sm/semibold", children: title };
        const obj7 = { children: items1 };
        items1 = [React3(Text_Text.Text, obj13), "\n", tmp6];
        tmp12 = hasOwnProperty(metroRequire, obj7);
      }
      return React3(tmp9, obj5);
    }
  }
});
const result = size.fileFinishedImporting("design/mana/components/InlineNotice/InlineNotice.native.tsx");

export const InlineNotice = tmp3;
