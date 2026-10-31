// Module ID: 12113
// Function ID: 12114
// Name: ConjureDesignRemarkSheet
// Dependencies: [32, 19, 17, 10850, 21, 5014, 575, 5258, 12093, 7366, 7321, 7253, 1113, 3868, 5634, 2]
// Exports: default

// Module 12113 (ConjureDesignRemarkSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10850 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 12093 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const sendUserMessage = ConjureConnectionStore.sendUserMessage;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjureDesignRemarkSheet_str = "ConjureDesignRemarkSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, actions: obj3 };
obj2 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/design_feedback/native/ConjureDesignRemarkSheet.tsx");

export default function ConjureDesignRemarkSheet(projectId) {
  let BottomSheetTitleHeader;
  let intl;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let obj4;
  let obj5;
  let obj6;
  let stringResult;
  projectId = projectId.projectId;
  const target = projectId.target;
  const onClose = projectId.onClose;
  let value;
  let onPress;
  let tmp = closure_10();
  const tmp2 = value(onPress.useState(""), 2);
  value = tmp2[0];
  const items = [onClose];
  const tmp4 = tmp2[1];
  onPress = onPress.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureDesignRemarkSheet_str);
    onClose();
  }, items);
  let obj = projectId(onClose[8]);
  const result = obj.isConjureDesignCommentUsable(value);
  let c5 = result;
  const items1 = [result, projectId, target, value, onPress];
  const callback1 = onPress.useCallback(() => {
    const tmp = c5;
    if (tmp) {
      const obj = ConjureDesignFeedback;
      sendUserMessage(projectId, obj.formatConjureDesignRemark(target, first));
      callback();
    }
  }, items1);
  const obj2 = projectId(onClose[8]);
  const kind = obj2.labelConjureDesignTarget(target).kind;
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: onClose, header: closure_7(BottomSheetTitleHeader, obj4), children: closure_8(c5, obj6) };
  const ActionSheet = projectId(onClose[9]).ActionSheet;
  obj4 = { title: obj5.describeConjureDesignTarget(target) };
  BottomSheetTitleHeader = projectId(onClose[10]).BottomSheetTitleHeader;
  obj5 = projectId(onClose[8]);
  obj6 = { style: tmp.content, children: items2 };
  const obj7 = { autoFocus: true, label: intl.string(target(onClose[13]).KCYqWL), placeholder: stringResult, maxLength: projectId(onClose[8]).CONJURE_DESIGN_COMMENT_MAX, value, onChange: tmp4 };
  const TextArea = projectId(onClose[11]).TextArea;
  intl = projectId(onClose[12]).intl;
  if ("" === kind) {
    const intl2 = tmp6(tmp7[12]).intl;
    stringResult = intl2.string(tmp13(tmp7[13]).MPPV1Q);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = "Edit " + kind;
  }
  items2 = [tmp10(TextArea, obj7), ];
  const obj8 = { style: tmp.actions, children: items3 };
  const obj9 = { variant: "tertiary", grow: true, text: intl3.string(target(onClose[13])["W/HWvP"]), onPress };
  const Button = tmp6(tmp7[14]).Button;
  intl3 = tmp6(tmp7[12]).intl;
  items3 = [tmp10(Button, obj9), ];
  const obj10 = { variant: "primary", grow: true, text: intl4.string(projectId(onClose[12]).t.TXNS7S), disabled: !result, onPress: callback1 };
  const Button2 = tmp6(tmp7[14]).Button;
  intl4 = tmp6(tmp7[12]).intl;
  items3[1] = closure_7(Button2, obj10);
  items2[1] = closure_8(c5, obj8);
  return closure_7(ActionSheet, obj3);
};
export const CONJURE_DESIGN_REMARK_SHEET_KEY = "ConjureDesignRemarkSheet";
