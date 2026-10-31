// Module ID: 18295
// Function ID: 18296
// Name: GenericUpsellActionSheet
// Dependencies: [19, 17, 4860, 21, 5014, 575, 8741, 5272, 5717, 5595, 5624, 1187, 5634, 2]
// Exports: default

// Module 18295 (GenericUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { image: { width: "100%" }, content: obj2, description: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, flex: 1 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx");

export default function GenericUpsellActionSheet(markAsDismissed) {
  let body;
  let bottomSheetClose;
  let bottomSheetRef;
  let cta;
  let header;
  let imageSource;
  let items;
  let items1;
  let obj3;
  let obj5;
  let onCTAPress;
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
  const tmp = closure_7();
  const obj = markAsDismissed(8741);
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = {
    ref: bottomSheetRef,
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    handleDisabled: true,
    header: closure_6(View, obj3),
    children: closure_6(View, obj5)
  };
  obj3 = { children: items };
  BottomSheet = markAsDismissed(5272).BottomSheet;
  items = [, ];
  const obj4 = { source: imageSource, style: tmp.image };
  items[0] = closure_5(FastImageDefault, obj4);
  items[1] = closure_5(markAsDismissed(5595).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj5 = { style: tmp.content, children: items1 };
  items1 = [closure_5(markAsDismissed(5624).Text, { accessibilityRole: "header", variant: "heading-xl/medium", color: "mobile-text-heading-primary", children: header }), closure_5(markAsDismissed(1187).Spacer, { size: 12 }), , ];
  const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: body };
  items1[2] = closure_5(markAsDismissed(5624).Text, obj6);
  items1[3] = closure_5(markAsDismissed(5634).Button, { variant: "primary", grow: true, onPress: onCTAPress, text: cta });
  return closure_5(BottomSheet, obj2);
};
