// Module ID: 17361
// Function ID: 17362
// Name: VideoQuestModalCloseButton
// Dependencies: [21, 575, 7121, 1113, 7195, 2]
// Exports: default

// Module 17361 (VideoQuestModalCloseButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Pressables from "Pressables" /* 7121 */;
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
