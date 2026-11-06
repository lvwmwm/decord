// Module ID: 7450
// Function ID: 7451
// Name: ActionSheetCloseButton
// Dependencies: [19, 21, 7068, 1113, 7145, 575, 2]
// Exports: ActionSheetCloseButton

// Module 7450 (ActionSheetCloseButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Pressables from "Pressables" /* 7068 */;
import XSmallIcon2 from "XSmallIcon" /* 7145 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const androidRippleConfig = Object.freeze({ radius: 12 });
const hitSlop = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetCloseButton.native.tsx");

export function ActionSheetCloseButton(arg0) {
  let onPress;
  let variant;
  ({ onPress, variant } = arg0);
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl2.intl;
  const XSmallIcon = XSmallIcon2.XSmallIcon;
  if ("overlay" === variant) {
    let ICON_STRONG = nativeDefault.colors.WHITE;
  } else {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  return <PressableOpacity accessibilityRole="button" accessibilityLabel={intl.string(intl2.t.cpT0Cq)} hitSlop={hitSlop} androidRippleConfig={androidRippleConfig} onPress={onPress}>{null}</PressableOpacity>;
}
