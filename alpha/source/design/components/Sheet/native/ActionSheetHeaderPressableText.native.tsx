// Module ID: 8031
// Function ID: 8032
// Name: ActionSheetHeaderPressableText
// Dependencies: [21, 5310, 7438, 5923, 2]
// Exports: ActionSheetHeaderPressableText

// Module 8031 (ActionSheetHeaderPressableText)
import Fragment from "Fragment" /* 21 */;
import Pressables from "Pressables" /* 7438 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles(() => ({ container: { marginTop: 3 } }));
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx");

export function ActionSheetHeaderPressableText(onPress) {
  let accessibilityLabel;
  let label;
  ({ label, accessibilityLabel } = onPress);
  onPress = onPress.onPress;
  let tmp5 = label;
  const PressableOpacity = Pressables.PressableOpacity;
  if (null != accessibilityLabel) {
    tmp5 = accessibilityLabel;
  }
  return <PressableOpacity style={closure_3().container} accessibilityRole="button" onPress={onPress} accessibilityLabel={tmp5}>{null}</PressableOpacity>;
}
