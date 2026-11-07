// Module ID: 17437
// Function ID: 17438
// Name: VideoQuestModalCloseButton
// Dependencies: [21, 575, 7043, 1113, 7120, 2]
// Exports: default

// Module 17437 (VideoQuestModalCloseButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Pressables from "Pressables" /* 7043 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default function VideoQuestModalCloseButton(iconColor) {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  const onClose = iconColor.onClose;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  const style = iconColor.style;
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl2.intl;
  const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, style];
  return <PressableOpacity accessibilityLabel={intl.string(intl2.t.cpT0Cq)} accessibilityRole="button" hitSlop={12} onPress={onClose} style={items}>{null}</PressableOpacity>;
};
