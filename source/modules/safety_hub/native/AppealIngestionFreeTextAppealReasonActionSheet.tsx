// Module ID: 11037
// Function ID: 85939
// Name: AppealIngestionFreeTextAppealReasonActionSheet
// Dependencies: []
// Exports: default

// Module 11037 (AppealIngestionFreeTextAppealReasonActionSheet)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_5 = importDefault(dependencyMap[3]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { footerText: { textAlign: "center" }, textArea: { size: "/assets/design/components/Icon/native/redesign/generated/images", progress: 24 } };
obj = { 0: null, 0: null, 0: null, backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.separator = obj;
obj.closeIcon = {};
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionFreeTextAppealReasonActionSheet.tsx");

export default function AppealIngestionFreeTextAppealReasonActionSheet(onPress) {
  const arg1 = onPress.onSave;
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => freeTextAppealReason.getFreeTextAppealReason());
  const tmp3 = callback(React.useState(stateFromStores), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  if ("" === stateFromStores) {
    const intl2 = arg1(dependencyMap[8]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[8]).t.uoQFIp);
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    stringResult = intl.string(arg1(dependencyMap[8]).t.tnE3bZ);
  }
  const intl3 = arg1(dependencyMap[8]).intl;
  obj = { startExpanded: true };
  obj = { spacing: 16 };
  const obj1 = { onPress: onPress.onClose, style: tmp.closeIcon, children: callback2(arg1(dependencyMap[12]).XSmallIcon, { size: "md" }) };
  const items1 = [callback2(arg1(dependencyMap[11]).PressableOpacity, obj1), , , , , ];
  const obj2 = { headerText: stringResult, subHeaderText: intl3.string(arg1(dependencyMap[8]).t.Rk+uJx) };
  items1[1] = callback2(arg1(dependencyMap[13]).AppealIngestionModalHeader, obj2);
  const obj3 = { maxLength: 1024 };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj3.placeholder = intl4.string(arg1(dependencyMap[8]).t.bQrZIN);
  obj3.containerStyle = tmp.textArea;
  obj3.value = first;
  obj3.onChange = tmp3[1];
  items1[2] = callback2(arg1(dependencyMap[14]).TextArea, obj3);
  items1[3] = callback2(View, { style: tmp.separator });
  const obj5 = { hasMaxConnections: 1961492483, isBoostOnlySubscription: 1964048387, style: tmp.footerText };
  const intl5 = arg1(dependencyMap[8]).intl;
  obj5.children = intl5.string(arg1(dependencyMap[8]).t.xfNY3L);
  items1[4] = callback2(arg1(dependencyMap[15]).Text, obj5);
  const obj6 = {
    onPress() {
      return onSave(first);
    }
  };
  const intl6 = arg1(dependencyMap[8]).intl;
  obj6.text = intl6.string(arg1(dependencyMap[8]).t.R3BPH+);
  items1[5] = callback2(arg1(dependencyMap[16]).Button, obj6);
  obj.children = items1;
  obj.children = callback3(arg1(dependencyMap[10]).Stack, obj);
  return callback2(arg1(dependencyMap[9]).BottomSheet, obj);
};
