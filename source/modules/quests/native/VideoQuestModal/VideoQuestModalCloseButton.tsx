// Module ID: 13924
// Function ID: 105841
// Name: VideoQuestModalCloseButton
// Dependencies: []
// Exports: default

// Module 13924 (VideoQuestModalCloseButton)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default function VideoQuestModalCloseButton(iconColor) {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = importDefault(dependencyMap[1]).colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  let obj = {};
  const intl = require(dependencyMap[3]).intl;
  obj.accessibilityLabel = intl.string(require(dependencyMap[3]).t.cpT0Cq);
  obj.onPress = iconColor.onClose;
  const items = [{}, iconColor.style];
  obj.style = items;
  obj = { color: MOBILE_TEXT_HEADING_PRIMARY };
  obj.children = jsx(require(dependencyMap[4]).XSmallIcon, obj);
  return jsx(require(dependencyMap[2]).PressableOpacity, obj);
};
