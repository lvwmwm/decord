// Module ID: 14095
// Function ID: 108360
// Name: VideoQuestModalCloseButton
// Dependencies: [33, 689, 4660, 1212, 5119, 2]
// Exports: default

// Module 14095 (VideoQuestModalCloseButton)
import { jsx } from "jsxProd";

const result = require("PressableBase").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default function VideoQuestModalCloseButton(iconColor) {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  let obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.onPress = iconColor.onClose;
  const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, iconColor.style];
  obj.style = items;
  obj = { color: MOBILE_TEXT_HEADING_PRIMARY };
  obj.children = jsx(require(5119) /* XSmallIcon */.XSmallIcon, { color: MOBILE_TEXT_HEADING_PRIMARY });
  return jsx(require(4660) /* PressableBase */.PressableOpacity, { color: MOBILE_TEXT_HEADING_PRIMARY });
};
