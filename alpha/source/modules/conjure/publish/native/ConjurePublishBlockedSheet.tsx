// Module ID: 16966
// Function ID: 16967
// Name: ConjurePublishBlockedSheet
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 16967, 5055, 6835, 5087, 5376, 6892, 2]
// Exports: default

// Module 16966 (ConjurePublishBlockedSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ConjurePublishBlockedSheet_str = "ConjurePublishBlockedSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishBlockedSheet(arg0) {
  let items;
  let message;
  let onConfirm;
  let reason;
  let obj = onConfirm(576);
  const cResult = obj.c(23);
  ({ reason, message, onConfirm } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === message) {
    let tmp5;
    let tmp8;
    let tmp9;
    let tmp12;
    let tmp15;
    if (cResult[1] === reason) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      function close() {
        const obj = closure_1(dependencyMap[8]);
        obj.hideActionSheet(ConjurePublishBlockedSheet_str);
      }
      cResult[3] = close;
      tmp8 = close;
    } else {
      tmp8 = cResult[3];
    }
    let closure_1 = tmp8;
    if (cResult[4] !== tmp5.title) {
      const obj2 = { title: tmp5.title };
      const tmp11 = closure_4(onConfirm(6835).BottomSheetTitleHeader, obj2);
      cResult[4] = tmp5.title;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== tmp5.body) {
      const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp5.body };
      const tmp14 = closure_4(onConfirm(5087).Text, obj3);
      cResult[6] = tmp5.body;
      cResult[7] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] !== onConfirm) {
      const fn = function x() {
        closure_1();
        if (onConfirm != null) {
          onConfirm();
        }
      };
      cResult[8] = onConfirm;
      cResult[9] = fn;
      tmp15 = fn;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp5.action) {
      let tmp16;
      let tmp19;
      if (cResult[11] === tmp15) {
        tmp16 = cResult[12];
      }
      if (cResult[13] !== tmp5.cancel) {
        let tmp20 = null;
        if (null != tmp5.cancel) {
          const obj4 = { variant: "secondary", text: tmp5.cancel, onPress: tmp8 };
          tmp20 = closure_4(tmp(5376).Button, obj4);
        }
        cResult[13] = tmp5.cancel;
        cResult[14] = tmp20;
        tmp19 = tmp20;
      } else {
        tmp19 = cResult[14];
      }
      if (cResult[15] === tmp4.content) {
        if (cResult[16] === tmp12) {
          if (cResult[17] === tmp16) {
            let tmp22;
            if (cResult[18] === tmp19) {
              tmp22 = cResult[19];
            }
            if (cResult[20] === tmp9) {
              let tmp26;
              if (cResult[21] === tmp22) {
                tmp26 = cResult[22];
              }
              return tmp26;
            }
            const obj5 = { header: tmp9, children: tmp22 };
            const tmp28 = closure_4(onConfirm(6892).ActionSheet, obj5);
            cResult[20] = tmp9;
            cResult[21] = tmp22;
            cResult[22] = tmp28;
            tmp26 = tmp28;
          }
        }
      }
      const obj6 = { style: tmp4.content, children: items };
      items = [tmp12, tmp16, tmp19];
      const tmp25 = closure_5(View, obj6);
      cResult[15] = tmp4.content;
      cResult[16] = tmp12;
      cResult[17] = tmp16;
      cResult[18] = tmp19;
      cResult[19] = tmp25;
      tmp22 = tmp25;
    }
    const obj7 = { variant: "primary", text: tmp5.action, onPress: tmp15 };
    const tmp18 = closure_4(onConfirm(5376).Button, obj7);
    cResult[10] = tmp5.action;
    cResult[11] = tmp15;
    cResult[12] = tmp18;
    tmp16 = tmp18;
  }
  const tmpResult = onConfirm(16967);
  const conjurePublishBlockedCopy = tmpResult.getConjurePublishBlockedCopy(reason, message);
  cResult[0] = message;
  cResult[1] = reason;
  cResult[2] = conjurePublishBlockedCopy;
  tmp5 = conjurePublishBlockedCopy;
}) : (function ConjurePublishBlockedSheet(onConfirm) {
  let items;
  let message;
  let obj3;
  let obj4;
  let reason;
  let tmp6;
  let tmp7;
  onConfirm = onConfirm.onConfirm;
  ({ reason, message } = onConfirm);
  const tmp = closure_7();
  let obj = onConfirm(16967);
  const conjurePublishBlockedCopy = obj.getConjurePublishBlockedCopy(reason, message);
  const obj2 = { header: closure_4(onConfirm(6835).BottomSheetTitleHeader, obj3), children: tmp6(tmp7, obj4) };
  const ActionSheet = onConfirm(6892).ActionSheet;
  obj4 = { style: tmp.content, children: items };
  items = [, , ];
  obj3 = { title: conjurePublishBlockedCopy.title };
  const obj5 = { variant: "text-md/normal", color: "text-muted", children: conjurePublishBlockedCopy.body };
  items[0] = closure_4(onConfirm(5087).Text, obj5);
  const obj6 = {
    variant: "primary",
    text: conjurePublishBlockedCopy.action,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePublishBlockedSheet_str);
      if (onConfirm != null) {
        onConfirm();
      }
    }
  };
  items[1] = closure_4(onConfirm(5376).Button, obj6);
  let tmp5Result = null;
  const tmp2 = onConfirm;
  tmp6 = closure_5;
  tmp7 = View;
  if (null != conjurePublishBlockedCopy.cancel) {
    function close() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePublishBlockedSheet_str);
    }
    const obj7 = { variant: "secondary", text: conjurePublishBlockedCopy.cancel, onPress: close };
    tmp5Result = tmp5(tmp2(5376).Button, obj7);
  }
  items[2] = tmp5Result;
  return closure_4(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishBlockedSheet.tsx");

export default function showConjurePublishBlockedSheet(reason, message, onConfirm) {
  let obj2;
  const obj = { key: ConjurePublishBlockedSheet_str, content: React3(closure_8, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = { reason, message, onConfirm };
  ActionSheetActionCreators;
  showActionSheet(obj);
};
export const CONJURE_PUBLISH_BLOCKED_SHEET_KEY = "ConjurePublishBlockedSheet";
