// Module ID: 16541
// Function ID: 128871
// Name: InviteSelectActionSheet
// Dependencies: [31, 33, 4130, 689, 5187, 5186, 7654, 4098, 7653, 2]
// Exports: default

// Module 16541 (InviteSelectActionSheet)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  let options;
  let require;
  let title;
  let value;
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  let obj = { contentStyles: _createForOfIteratorHelperLoose().content, header: jsx(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title }) };
  obj = {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => outer1_3(outer1_0(outer1_2[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  };
  obj.children = jsx(require(7654) /* context */.TableRadioGroup, {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => outer1_3(outer1_0(outer1_2[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
  return jsx(require(5187) /* Background */.BottomSheet, {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => outer1_3(outer1_0(outer1_2[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
};
