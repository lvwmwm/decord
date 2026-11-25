// Module ID: 16596
// Function ID: 16597
// Name: QuestDockUnenrolledBackground
// Dependencies: [19, 6558, 16483, 21, 16516, 16477, 5477, 575, 16597, 16594, 8430, 16598, 2]

// Module 16596 (QuestDockUnenrolledBackground)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8430 */;
import QuestDockConstants from "QuestDockConstants" /* 16483 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 16598 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const expandedHeight = QuestDockConstants.QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockUnenrolledBackground() {
  let handleAcceptQuest;
  let mimetype;
  let staticUrl;
  let tmp10;
  let url;
  let videoAsset;
  const obj = handleAcceptQuest(16516);
  const questDockQuest = obj.useQuestDockQuest();
  const obj2 = handleAcceptQuest(16477);
  const questDockHeroAsset = obj2.useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const obj3 = handleAcceptQuest(5477);
  const token = obj3.useToken(nativeDefault.colors.CARD_BACKGROUND_DEFAULT);
  const QuestBarStartQuestOnClickExperiment = handleAcceptQuest(16597).QuestBarStartQuestOnClickExperiment;
  const obj4 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  let enabled = QuestBarStartQuestOnClickExperiment.useConfig(obj4).enabled;
  const obj5 = handleAcceptQuest(16594);
  const questDockAcceptQuest = obj5.useQuestDockAcceptQuest();
  handleAcceptQuest = questDockAcceptQuest.handleAcceptQuest;
  const items = [handleAcceptQuest];
  const isEnrolling = questDockAcceptQuest.isEnrolling;
  const callback = react.useCallback(() => {
    handleAcceptQuest(AnalyticsTypes.QuestContentCTA.QUEST_BAR_HERO);
  }, items);
  const obj6 = { expandedHeight, imageUrl: staticUrl, videoUrl: url, videoMimetype: mimetype, gradientBaseColor: token, onPress: tmp10, disabled: enabled };
  url = undefined;
  const tmp6 = jsx;
  const tmp7 = QuestDockVideoBackgroundDefault;
  if (videoAsset != null) {
    url = videoAsset.url;
  }
  mimetype = undefined;
  if (videoAsset != null) {
    mimetype = videoAsset.mimetype;
  }
  if (mimetype == null) {
    mimetype = null;
  }
  tmp10 = undefined;
  if (enabled) {
    tmp10 = callback;
  }
  if (enabled) {
    enabled = isEnrolling;
  }
  return tmp6(tmp7, obj6);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;
