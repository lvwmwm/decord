// Module ID: 15116
// Function ID: 115048
// Name: GenericUpsellActionSheet
// Dependencies: [31, 27, 1345, 33, 4130, 689, 7186, 5187, 5085, 5446, 4126, 1273, 4543, 2]
// Exports: default

// Module 15116 (GenericUpsellActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { image: { width: "100%" } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.description = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1 };
const result = require("ContentDismissActionType").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx");

export default function GenericUpsellActionSheet(markAsDismissed) {
  let body;
  let bottomSheetClose;
  let bottomSheetRef;
  let cta;
  let header;
  let imageSource;
  let onCTAPress;
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = markAsDismissed(7186);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = {
    ref: bottomSheetRef,
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(outer1_4.UNKNOWN);
    },
    handleDisabled: true
  };
  obj = {};
  const items = [callback(importDefault(5085), { source: imageSource, style: tmp.image }), callback(markAsDismissed(5446).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  obj.children = items;
  obj.header = callback2(View, obj);
  const obj2 = { style: tmp.content };
  const obj3 = { accessibilityRole: "header", variant: "heading-xl/medium", color: "mobile-text-heading-primary", children: header };
  const items1 = [callback(markAsDismissed(4126).Text, obj3), callback(markAsDismissed(1273).Spacer, { size: 12 }), , ];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: body };
  items1[2] = callback(markAsDismissed(4126).Text, obj4);
  const obj5 = { variant: "primary", grow: true, onPress: onCTAPress, text: cta };
  items1[3] = callback(markAsDismissed(4543).Button, obj5);
  obj2.children = items1;
  obj.children = callback2(View, obj2);
  return callback(markAsDismissed(5187).BottomSheet, obj);
};
