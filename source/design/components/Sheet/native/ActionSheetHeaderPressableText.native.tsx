// Module ID: 8982
// Function ID: 8983
// Name: ActionSheetHeaderPressableText
// Dependencies: [21, 4303, 1367, 4846, 4299, 2]
// Exports: ActionSheetHeaderPressableText

// Module 8982 (ActionSheetHeaderPressableText)
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles(() => ({ container: { marginTop: 3 } }));
const result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = function ActionSheetHeaderPressableText(onPress) {
  let accessibilityLabel;
  let label;
  ({ label, accessibilityLabel } = onPress);
  let str = "text-md/semibold";
  if (importDefault(1367)("ActionSheetHeaderPressableText")) {
    str = "text-md/medium";
  }
  const obj = { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null };
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  obj[3] = tmp5;
  obj[4] = jsx(require(4299) /* Text */.Text, { variant: str, color: "text-brand", children: label });
  return jsx(require(4846) /* PressableBase */.PressableOpacity, { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null });
};
