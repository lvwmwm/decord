// Module ID: 11075
// Function ID: 86191
// Name: AppealIngestionFreeTextAppealReasonActionSheet
// Dependencies: [57, 31, 27, 11053, 33, 4130, 689, 566, 1212, 5187, 4541, 4660, 5119, 11068, 7645, 4126, 4543, 2]
// Exports: default

// Module 11075 (AppealIngestionFreeTextAppealReasonActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { footerText: { textAlign: "center" }, textArea: { marginTop: -16, marginBottom: 36 } };
_createForOfIteratorHelperLoose = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginHorizontal: -16 };
_createForOfIteratorHelperLoose.separator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.closeIcon = { alignSelf: "flex-end", flexDirection: "row", marginBottom: -26 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx");

export default function AppealIngestionFreeTextAppealReasonActionSheet(onPress) {
  const onSave = onPress.onSave;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onSave(first[7]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getFreeTextAppealReason());
  const tmp3 = callback(React.useState(stateFromStores), 2);
  first = tmp3[0];
  if ("" === stateFromStores) {
    const intl2 = onSave(first[8]).intl;
    let stringResult = intl2.string(onSave(first[8]).t.uoQFIp);
  } else {
    const intl = onSave(first[8]).intl;
    stringResult = intl.string(onSave(first[8]).t.tnE3bZ);
  }
  const intl3 = onSave(first[8]).intl;
  obj = { startExpanded: true };
  obj = { spacing: 16 };
  const obj1 = { onPress: onPress.onClose, style: tmp.closeIcon, children: callback2(onSave(first[12]).XSmallIcon, { size: "md" }) };
  const items1 = [callback2(onSave(first[11]).PressableOpacity, obj1), , , , , ];
  const obj2 = { headerText: stringResult, subHeaderText: intl3.string(onSave(first[8]).t["Rk+uJx"]) };
  items1[1] = callback2(onSave(first[13]).AppealIngestionModalHeader, obj2);
  const obj3 = { maxLength: 1024 };
  const intl4 = onSave(first[8]).intl;
  obj3.placeholder = intl4.string(onSave(first[8]).t.bQrZIN);
  obj3.containerStyle = tmp.textArea;
  obj3.value = first;
  obj3.onChange = tmp3[1];
  items1[2] = callback2(onSave(first[14]).TextArea, obj3);
  items1[3] = callback2(View, { style: tmp.separator });
  const obj5 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText };
  const intl5 = onSave(first[8]).intl;
  obj5.children = intl5.string(onSave(first[8]).t.xfNY3L);
  items1[4] = callback2(onSave(first[15]).Text, obj5);
  const obj6 = {
    onPress() {
      return onSave(first);
    }
  };
  const intl6 = onSave(first[8]).intl;
  obj6.text = intl6.string(onSave(first[8]).t["R3BPH+"]);
  items1[5] = callback2(onSave(first[16]).Button, obj6);
  obj.children = items1;
  obj.children = callback3(onSave(first[10]).Stack, obj);
  return callback2(onSave(first[9]).BottomSheet, obj);
};
