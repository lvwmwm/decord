// Module ID: 13776
// Function ID: 105595
// Name: ExplicitMediaSettingsActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 4098, 5187, 5186, 7654, 1282, 7653, 2]
// Exports: default

// Module 13776 (ExplicitMediaSettingsActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx");

export default function ExplicitMediaSettingsActionSheet(options) {
  let subtitle;
  let title;
  options = options.options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const callback = React.useCallback((arg0) => {
    const options = arg0;
    const found = options.find((value) => value.value === closure_0);
    if (null != found) {
      found.onPress();
      outer1_1(outer1_2[5]).hideActionSheet();
      const obj2 = outer1_1(outer1_2[5]);
    }
  }, items);
  let obj = { startExpanded: true };
  const items1 = [callback(options(5186).BottomSheetTitleHeader, { title, subtitle }), ];
  obj = { style: _createForOfIteratorHelperLoose().content };
  obj = {};
  if (null == SHOW) {
    SHOW = options(1282).ExplicitContentRedaction.SHOW;
  }
  obj.defaultValue = SHOW;
  obj.onChange = callback;
  obj.hasIcons = false;
  obj.children = options.map((label) => outer1_5(options(outer1_2[10]).TableRadioRow, { label: label.label, value: label.value }, label.value));
  obj.children = callback(options(7654).TableRadioGroup, obj);
  items1[1] = callback(View, obj);
  obj.children = items1;
  return closure_6(options(5187).BottomSheet, obj);
};
