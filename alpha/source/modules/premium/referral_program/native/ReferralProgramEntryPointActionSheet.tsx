// Module ID: 18428
// Function ID: 18429
// Name: ReferralProgramEntryPointActionSheet
// Dependencies: [19, 17, 4820, 21, 4971, 587, 5210, 14750, 2002, 5265, 5669, 8425, 5234, 1128, 5244, 2]
// Exports: default

// Module 18428 (ReferralProgramEntryPointActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4820 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import FastImageDefault from "FastImage" /* 5669 */;
import _modDef8425 from "module_8425" /* 8425 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
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
    obj.openLazy(asyncRequire(14750, dependencyMap.paths), "referral-program-share-action-sheet");
  }, items);
  const callback1 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { onDismiss: callback1, children: closure_7(View, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  BottomSheet = markAsDismissed(5265).BottomSheet;
  const obj3 = { source: obj4, style: tmp.image };
  obj4 = { uri: _modDef8425 };
  const tmp4 = FastImageDefault;
  items2 = [closure_6(tmp4, obj3), , , ];
  const obj5 = { style: tmp.header, color: "mobile-text-heading-primary", variant: "heading-lg/extrabold", children: intl.string(markAsDismissed(1128).t.u1CFbS) };
  const Text = markAsDismissed(5234).Text;
  intl = markAsDismissed(1128).intl;
  items2[1] = closure_6(Text, obj5);
  const obj6 = { style: tmp.body, color: "text-default", variant: "text-sm/normal", children: intl2.string(markAsDismissed(1128).t.k2ibMz) };
  const Text2 = markAsDismissed(5234).Text;
  intl2 = markAsDismissed(1128).intl;
  items2[2] = closure_6(Text2, obj6);
  const obj7 = { style: tmp.buttonContainer, children: closure_6(Button, obj8) };
  obj8 = { text: intl3.string(markAsDismissed(1128).t.TI8qgg), size: "lg", onPress: callback, variant: "primary" };
  Button = markAsDismissed(5244).Button;
  intl3 = markAsDismissed(1128).intl;
  items2[3] = closure_6(View, obj7);
  return closure_6(BottomSheet, obj);
};
