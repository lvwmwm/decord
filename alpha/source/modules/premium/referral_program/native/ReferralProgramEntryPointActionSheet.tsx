// Module ID: 18937
// Function ID: 18938
// Name: ReferralProgramEntryPointActionSheet
// Dependencies: [19, 17, 4854, 21, 5005, 587, 5247, 15244, 2000, 5302, 5707, 8480, 5271, 1125, 5281, 2]
// Exports: default

// Module 18937 (ReferralProgramEntryPointActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4854 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import FastImageDefault from "FastImage" /* 5707 */;
import _modDef8480 from "module_8480" /* 8480 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: size, header: obj3, body: { textAlign: "center" }, image: size1 };
obj2 = { display: "flex", flexDirection: "column", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
obj3 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
size1 = { height: 188, width: 335, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramEntryPointActionSheet.tsx");

export default function ReferralProgramEntryPointActionSheet(markAsDismissed) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj2;
  let obj4;
  let obj8;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_8();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.PRIMARY);
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(15244, dependencyMap.paths), "referral-program-share-action-sheet");
  }, items);
  const callback1 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { onDismiss: callback1, children: closure_7(View, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  BottomSheet = markAsDismissed(5302).BottomSheet;
  const obj3 = { source: obj4, style: tmp.image };
  obj4 = { uri: _modDef8480 };
  const tmp4 = FastImageDefault;
  items2 = [closure_6(tmp4, obj3), , , ];
  const obj5 = { style: tmp.header, color: "mobile-text-heading-primary", variant: "heading-lg/extrabold", children: intl.string(markAsDismissed(1125).t.u1CFbS) };
  const Text = markAsDismissed(5271).Text;
  intl = markAsDismissed(1125).intl;
  items2[1] = closure_6(Text, obj5);
  const obj6 = { style: tmp.body, color: "text-default", variant: "text-sm/normal", children: intl2.string(markAsDismissed(1125).t.k2ibMz) };
  const Text2 = markAsDismissed(5271).Text;
  intl2 = markAsDismissed(1125).intl;
  items2[2] = closure_6(Text2, obj6);
  const obj7 = { style: tmp.buttonContainer, children: closure_6(Button, obj8) };
  obj8 = { text: intl3.string(markAsDismissed(1125).t.TI8qgg), size: "lg", onPress: callback, variant: "primary" };
  Button = markAsDismissed(5281).Button;
  intl3 = markAsDismissed(1125).intl;
  items2[3] = closure_6(View, obj7);
  return closure_6(BottomSheet, obj);
};
