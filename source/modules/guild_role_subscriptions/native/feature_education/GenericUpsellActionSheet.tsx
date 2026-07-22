// Module ID: 14953
// Function ID: 112559
// Name: GenericUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 14953 (GenericUpsellActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { image: { width: "100%" } };
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.content = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.description = { marginBottom: importDefault(dependencyMap[5]).space.PX_16, flex: 1 };
let closure_7 = obj.createStyles(obj);
const obj1 = { marginBottom: importDefault(dependencyMap[5]).space.PX_16, flex: 1 };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx");

export default function GenericUpsellActionSheet(markAsDismissed) {
  let body;
  let bottomSheetClose;
  let bottomSheetRef;
  let cta;
  let header;
  let imageSource;
  let onCTAPress;
  const arg1 = markAsDismissed.markAsDismissed;
  ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = {
    ref: bottomSheetRef,
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(constants.UNKNOWN);
    },
    handleDisabled: true
  };
  obj = {};
  const items = [callback(importDefault(dependencyMap[8]), { source: imageSource, style: tmp.image }), callback(arg1(dependencyMap[9]).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  obj.children = items;
  obj.header = callback2(View, obj);
  const obj2 = { style: tmp.content };
  const obj3 = { "Bool(false)": "_desired", "Bool(false)": "hash", "Bool(false)": "construct", children: header };
  const items1 = [callback(arg1(dependencyMap[10]).Text, obj3), callback(arg1(dependencyMap[11]).Spacer, { size: 12 }), callback(arg1(dependencyMap[10]).Text, { style: tmp.description, children: body }), ];
  const obj5 = { "Null": null, "Null": null, onPress: onCTAPress, text: cta };
  items1[3] = callback(arg1(dependencyMap[12]).Button, obj5);
  obj2.children = items1;
  obj.children = callback2(View, obj2);
  return callback(arg1(dependencyMap[7]).BottomSheet, obj);
};
