// Module ID: 9647
// Function ID: 9648
// Name: ActionSheetHeaderPressableText
// Dependencies: [21, 4481, 5084, 4477, 2]
// Exports: ActionSheetHeaderPressableText

// Module 9647 (ActionSheetHeaderPressableText)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import Text from "Text" /* 4477 */;
import PressableBase from "PressableBase" /* 5084 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const jsx = jsxProd.jsx;
let closure_3 = createCacheKey.createStyles(() => ({ container: { marginTop: 3 } }));
const result = set.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export const ActionSheetHeaderPressableText = function ActionSheetHeaderPressableText(onPress) {
  ({ label, accessibilityLabel } = onPress);
  const obj = { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null };
  let tmp5 = label;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  obj[3] = tmp5;
  obj[4] = jsx(Text.Text, { variant: "text-md/medium", color: "text-brand", children: label });
  return jsx(PressableBase.PressableOpacity, { style: callback().container, accessibilityRole: "button", onPress: onPress.onPress, accessibilityLabel: null, children: null });
};
