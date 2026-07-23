// Module ID: 10895
// Function ID: 84656
// Name: SummaryActionSheetButton
// Dependencies: [31, 27, 33, 4130, 689, 4660, 1273, 4126, 2]
// Exports: SummaryActionSheetButton

// Module 10895 (SummaryActionSheetButton)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.iconBox = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { margin: 12, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.name = { textAlign: "center", marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { margin: 12, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("jsxProd").fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = function SummaryActionSheetButton(label) {
  let iconSource;
  let onPress;
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label };
  obj = { style: items };
  items = [tmp.iconBox];
  obj = { style: tmp.icon, source: iconSource };
  obj.children = callback(require(1273) /* Button */.Icon, obj);
  const items1 = [callback(View, obj), ];
  const obj1 = { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
};
