// Module ID: 9001
// Function ID: 9002
// Name: ActionSheetHeaderPressableText
// Dependencies: [21, 5009, 6974, 5619, 2]
// Exports: ActionSheetHeaderPressableText

// Module 9001 (ActionSheetHeaderPressableText)
import Fragment from "Fragment" /* 21 */;
import Pressables from "Pressables" /* 6974 */;
import createStyles from "createStyles" /* 5009 */;
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
