// Module ID: 16801
// Function ID: 16802
// Name: QuestDockUnenrolledBackground
// Dependencies: [19, 6871, 16687, 21, 575, 16721, 16681, 16802, 16799, 8393, 16803, 2]

// Module 16801 (QuestDockUnenrolledBackground)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import QuestConstants from "QuestConstants" /* 6871 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8393 */;
import QuestDockConstants from "QuestDockConstants" /* 16687 */;
import QuestDockVideoBackgroundDefault from "QuestDockVideoBackground" /* 16803 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const expandedHeight = QuestDockConstants.QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const jsx = Fragment.jsx;
const NEUTRAL_79 = nativeDefault.unsafe_rawColors.NEUTRAL_79;
const memoResult = react.memo(function QuestDockUnenrolledBackground() {
  let handleAcceptQuest;
  let mimetype;
  let staticUrl;
  let tmp9;
  let url;
  let videoAsset;
  const obj = handleAcceptQuest(16721);
  const questDockQuest = obj.useQuestDockQuest();
  const obj2 = handleAcceptQuest(16681);
  const questDockHeroAsset = obj2.useQuestDockHeroAsset(questDockQuest);
  ({ videoAsset, staticUrl } = questDockHeroAsset);
  const QuestBarStartQuestOnClickExperiment = handleAcceptQuest(16802).QuestBarStartQuestOnClickExperiment;
  const obj3 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  let enabled = QuestBarStartQuestOnClickExperiment.useConfig(obj3).enabled;
  const obj4 = handleAcceptQuest(16799);
  const questDockAcceptQuest = obj4.useQuestDockAcceptQuest();
  handleAcceptQuest = questDockAcceptQuest.handleAcceptQuest;
  const items = [handleAcceptQuest];
  const isEnrolling = questDockAcceptQuest.isEnrolling;
  const callback = react.useCallback(() => {
    handleAcceptQuest(AnalyticsTypes.QuestContentCTA.QUEST_BAR_HERO);
  }, items);
  const obj5 = { expandedHeight, imageUrl: staticUrl, videoUrl: url, videoMimetype: mimetype, gradientBaseColor: NEUTRAL_79, onPress: tmp9, disabled: enabled };
  url = undefined;
  const tmp5 = jsx;
  const tmp6 = QuestDockVideoBackgroundDefault;
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
  tmp9 = undefined;
  if (enabled) {
    tmp9 = callback;
  }
  if (enabled) {
    enabled = isEnrolling;
  }
  return tmp5(tmp6, obj5);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;
