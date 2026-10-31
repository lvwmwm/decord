// Module ID: 13326
// Function ID: 13327
// Name: AppealIngestionFreeTextAppealReasonActionSheet
// Dependencies: [32, 19, 17, 7994, 21, 5014, 575, 504, 1113, 5272, 6027, 6980, 7054, 13304, 7253, 5624, 5634, 2]
// Exports: default

// Module 13326 (AppealIngestionFreeTextAppealReasonActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7994 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { footerText: { textAlign: "center" }, textArea: { marginTop: -16, marginBottom: 36 }, separator: obj2, closeIcon: { alignSelf: "flex-end", flexDirection: "row", marginBottom: -26 } };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: -16 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx");

export default function AppealIngestionFreeTextAppealReasonActionSheet(onSave) {
  let Stack;
  let freeTextAppealReason;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let obj3;
  let stringResult;
  let tmp7;
  let value;
  onSave = onSave.onSave;
  value = undefined;
  const onClose = onSave.onClose;
  const tmp = closure_8();
  const items = [SafetyHubStore];
  const obj = onSave(value[7]);
  const stateFromStores = obj.useStateFromStores(items, () => freeTextAppealReason.getFreeTextAppealReason());
  [value, tmp7] = react.useState(stateFromStores);
  if ("" === stateFromStores) {
    const intl2 = tmp2(tmp3[8]).intl;
    stringResult = intl2.string(tmp2(tmp3[8]).t.uoQFIp);
  } else {
    const intl = tmp2(tmp3[8]).intl;
    stringResult = intl.string(tmp2(tmp3[8]).t.tnE3bZ);
  }
  const intl3 = tmp2(tmp3[8]).intl;
  const obj2 = { startExpanded: true, children: closure_7(Stack, obj3) };
  const stringResult1 = intl3.string(onSave(value[8]).t["Rk+uJx"]);
  BottomSheet = tmp2(tmp3[9]).BottomSheet;
  obj3 = { spacing: 16, children: items1 };
  Stack = tmp2(tmp3[10]).Stack;
  const obj4 = { onPress: onClose, style: tmp.closeIcon, children: closure_6(onSave(value[12]).XSmallIcon, { size: "md" }) };
  const PressableOpacity = tmp2(tmp3[11]).PressableOpacity;
  items1 = [closure_6(PressableOpacity, obj4), closure_6(onSave(value[13]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , , ];
  const obj5 = { maxLength: 1024, placeholder: intl4.string(onSave(value[8]).t.bQrZIN), containerStyle: tmp.textArea, value, onChange: tmp7 };
  const TextArea = tmp2(tmp3[14]).TextArea;
  intl4 = tmp2(tmp3[8]).intl;
  items1[2] = closure_6(TextArea, obj5);
  const obj6 = { style: tmp.separator };
  items1[3] = closure_6(View, obj6);
  const obj7 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText, children: intl5.string(onSave(value[8]).t.xfNY3L) };
  const Text = tmp2(tmp3[15]).Text;
  intl5 = tmp2(tmp3[8]).intl;
  items1[4] = closure_6(Text, obj7);
  const obj8 = {
    onPress() {
      return onSave(first);
    },
    text: intl6.string(onSave(value[8]).t["R3BPH+"])
  };
  const Button = tmp2(tmp3[16]).Button;
  intl6 = tmp2(tmp3[8]).intl;
  items1[5] = closure_6(Button, obj8);
  return closure_6(BottomSheet, obj2);
};
