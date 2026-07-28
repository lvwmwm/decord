// Module ID: 8230
// Function ID: 65779
// Name: ActionSheetHeaderPressableText
// Dependencies: [33, 4165, 1324, 4695, 4161, 2]
// Exports: ActionSheetHeaderPressableText

// Module 8230 (ActionSheetHeaderPressableText)
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
  obj.children = jsx(require(4161) /* Text */.Text, { variant: str, color: "text-brand", children: label });
  return jsx(require(4695) /* PressableBase */.PressableOpacity, { variant: str, color: "text-brand", children: label });
};
