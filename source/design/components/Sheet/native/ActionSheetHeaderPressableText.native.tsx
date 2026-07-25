// Module ID: 8192
// Function ID: 65668
// Name: ActionSheetHeaderPressableText
// Dependencies: [33, 4131, 1324, 4661, 4127, 2]
// Exports: ActionSheetHeaderPressableText

// Module 8192 (ActionSheetHeaderPressableText)
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4 = _createForOfIteratorHelperLoose.createStyles(() => ({ container: { marginTop: 3 } }));
const result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = function ActionSheetHeaderPressableText(onPress) {
  let accessibilityLabel;
  let label;
  ({ label, accessibilityLabel } = onPress);
  let str = "text-md/semibold";
  if (importDefault(1324)("ActionSheetHeaderPressableText")) {
    str = "text-md/medium";
  }
  let obj = { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress };
  let tmp3 = label;
  if (null != accessibilityLabel) {
    tmp3 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp3;
  obj = { variant: str, color: "text-brand", children: label };
  obj.children = jsx(require(4127) /* Text */.Text, { variant: str, color: "text-brand", children: label });
  return jsx(require(4661) /* PressableBase */.PressableOpacity, { variant: str, color: "text-brand", children: label });
};
