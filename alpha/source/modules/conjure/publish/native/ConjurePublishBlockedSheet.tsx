// Module ID: 10957
// Function ID: 10958
// Name: ConjurePublishBlockedSheet
// Dependencies: [19, 17, 21, 5014, 575, 10958, 5258, 7366, 7321, 5624, 5634, 2]
// Exports: default

// Module 10957 (ConjurePublishBlockedSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
let obj2;
function ConjurePublishBlockedSheet(onConfirm) {
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
  let obj = onConfirm(10958);
  const conjurePublishBlockedCopy = obj.getConjurePublishBlockedCopy(reason, message);
  const obj2 = { header: closure_4(onConfirm(7321).BottomSheetTitleHeader, obj3), children: tmp6(tmp7, obj4) };
  const ActionSheet = onConfirm(7366).ActionSheet;
  obj4 = { style: tmp.content, children: items };
  items = [, , ];
  obj3 = { title: conjurePublishBlockedCopy.title };
  const obj5 = { variant: "text-md/normal", color: "text-muted", children: conjurePublishBlockedCopy.body };
  items[0] = closure_4(onConfirm(5624).Text, obj5);
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
  items[1] = closure_4(onConfirm(5634).Button, obj6);
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
    tmp5Result = tmp5(tmp2(5634).Button, obj7);
  }
  items[2] = tmp5Result;
  return closure_4(ActionSheet, obj2);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ConjurePublishBlockedSheet_str = "ConjurePublishBlockedSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishBlockedSheet.tsx");

export default function showConjurePublishBlockedSheet(reason, message, onConfirm) {
  let obj2;
  const obj = { key: ConjurePublishBlockedSheet_str, content: React3(ConjurePublishBlockedSheet, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = { reason, message, onConfirm };
  ActionSheetActionCreators;
  showActionSheet(obj);
};
export const CONJURE_PUBLISH_BLOCKED_SHEET_KEY = "ConjurePublishBlockedSheet";
