// Module ID: 18039
// Function ID: 18040
// Name: ReferralProgramEntryPointActionSheet
// Dependencies: [19, 17, 2065, 21, 5153, 587, 5118, 14433, 2002, 7063, 5091, 8306, 5149, 1128, 5441, 2]
// Exports: default

// Module 18039 (ReferralProgramEntryPointActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2065 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5153 */;
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
  const actionSheetKey = markAsDismissed.actionSheetKey;
  const tmp = closure_8();
  const items = [markAsDismissed, actionSheetKey];
  const items1 = [markAsDismissed];
  const callback = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.PRIMARY);
    let str = actionSheetKey;
    if (actionSheetKey == null) {
      str = "referral-program-share-action-sheet";
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(14433, dependencyMap.paths), str, { actionSheetKey: str });
  }, items);
  const callback1 = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let obj = { onDismiss: callback1, children: closure_7(View, obj2) };
  obj2 = { style: tmp.container, children: items2 };
  BottomSheet = markAsDismissed(7063).BottomSheet;
  const obj3 = { source: obj4, style: tmp.image };
  obj4 = { uri: actionSheetKey(8306) };
  const tmp4 = actionSheetKey(5091);
  items2 = [closure_6(tmp4, obj3), , , ];
  const obj5 = { style: tmp.header, color: "mobile-text-heading-primary", variant: "heading-lg/extrabold", children: intl.string(markAsDismissed(1128).t.u1CFbS) };
  const Text = markAsDismissed(5149).Text;
  intl = markAsDismissed(1128).intl;
  items2[1] = closure_6(Text, obj5);
  const obj6 = { style: tmp.body, color: "text-default", variant: "text-sm/normal", children: intl2.string(markAsDismissed(1128).t.k2ibMz) };
  const Text2 = markAsDismissed(5149).Text;
  intl2 = markAsDismissed(1128).intl;
  items2[2] = closure_6(Text2, obj6);
  const obj7 = { style: tmp.buttonContainer, children: closure_6(Button, obj8) };
  obj8 = { text: intl3.string(markAsDismissed(1128).t.TI8qgg), size: "lg", onPress: callback, variant: "primary" };
  Button = markAsDismissed(5441).Button;
  intl3 = markAsDismissed(1128).intl;
  items2[3] = closure_6(View, obj7);
  return closure_6(BottomSheet, obj);
};
