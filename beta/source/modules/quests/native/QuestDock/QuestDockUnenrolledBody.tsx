// Module ID: 16593
// Function ID: 16594
// Name: QuestDockUnenrolledBody
// Dependencies: [19, 6558, 21, 16516, 16572, 16480, 16594, 8430, 9958, 9996, 9994, 9979, 9980, 13757, 6561, 9955, 9998, 16595, 16558, 1112, 7591, 10381, 9982, 2]

// Module 16593 (QuestDockUnenrolledBody)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import QuestTypes from "QuestTypes" /* 6561 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8430 */;
import QuestUtils from "QuestUtils" /* 9955 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9998 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockUnenrolledBody() {
  let getQuestImpressionId;
  let handleAcceptQuest;
  let isEnrolling;
  let primaryCtaCopy;
  let questDockQuest;
  let tmpResult2;
  let obj = questDockQuest(getQuestImpressionId[3]);
  questDockQuest = obj.useQuestDockQuest();
  let obj2 = react;
  const isRendered = react.useContext(handleAcceptQuest(getQuestImpressionId[4])).isRendered;
  const obj3 = questDockQuest(getQuestImpressionId[5]);
  let isQuestDockExpanded = obj3.useIsQuestDockExpanded();
  const obj4 = questDockQuest(getQuestImpressionId[6]);
  const questDockAcceptQuest = obj4.useQuestDockAcceptQuest();
  handleAcceptQuest = questDockAcceptQuest.handleAcceptQuest;
  const items = [handleAcceptQuest];
  ({ isEnrolling, primaryCtaCopy } = questDockAcceptQuest);
  const callback = react.useCallback(() => {
    handleAcceptQuest(AnalyticsTypes.QuestContentCTA.ACCEPT_QUEST);
  }, items);
  const obj5 = questDockQuest(getQuestImpressionId[8]);
  const questTaskDetails = obj5.useQuestTaskDetails(questDockQuest);
  const obj6 = questDockQuest(getQuestImpressionId[9]);
  getQuestImpressionId = obj6.useGetQuestImpressionId();
  const QuestMobileBarSecondaryCtaExperiment = questDockQuest(getQuestImpressionId[10]).QuestMobileBarSecondaryCtaExperiment;
  const obj7 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  const enabled = QuestMobileBarSecondaryCtaExperiment.useConfig(obj7).enabled;
  const obj8 = questDockQuest(getQuestImpressionId[11]);
  const questOrbMultiplierEligibility = obj8.useQuestOrbMultiplierEligibility();
  const obj9 = questDockQuest(getQuestImpressionId[8]);
  const shouldShowBonusOrbsUX = obj9.useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  const tmp13 = shouldShowBonusOrbsUX && questOrbMultiplierEligibility === questDockQuest(getQuestImpressionId[12]).QuestOrbMultiplierEligibilityType.NITRO;
  const items1 = [questDockQuest];
  const tmpResult = questDockQuest(getQuestImpressionId[13]);
  const obj10 = { quest: questDockQuest, location: QuestsExperimentLocations.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(getQuestImpressionId[14]).QuestContent.QUEST_BAR_MOBILE };
  const questsInstructionsToWinReward = tmpResult.useQuestsInstructionsToWinReward(obj10);
  const items2 = [questDockQuest, getQuestImpressionId];
  const callback1 = obj2.useCallback(() => {
    const obj = QuestUtils;
    return obj.getPrimaryCtaIcon(questDockQuest, true);
  }, items1);
  const callback2 = obj2.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.openGameLinkDirectly(questDockQuest, obj2);
  }, items2);
  let tmp19 = !isQuestDockExpanded;
  handleAcceptQuest(getQuestImpressionId[17]);
  const QuestDockBodyQuestRewardTile = tmp(tmp2[17]).QuestDockBodyQuestRewardTile;
  if (isQuestDockExpanded) {
    tmp19 = !isRendered;
  }
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  let tmp17Result;
  if (shouldShowBonusOrbsUX) {
    const obj13 = { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    tmp17Result = tmp17(tmp(tmp2[18]).QuestOrbMultiplierPerkPill, obj13);
  }
  const intl = tmp(tmp2[19]).intl;
  let tmp17Result2;
  const obj14 = { questName: questDockQuest.config.messages.questName };
  if (enabled) {
    const obj15 = { variant: "secondary", size: "md", icon: handleAcceptQuest(getQuestImpressionId[21]), accessibilityLabel: tmpResult2.getExternalCtaLabel(questDockQuest), onPress: callback2 };
    const IconButton = tmp(tmp2[20]).IconButton;
    tmpResult2 = questDockQuest(getQuestImpressionId[22]);
    tmp17Result2 = tmp17(IconButton, obj15);
  }
  return <tmp4Result rewardTile={<QuestDockBodyQuestRewardTile paused={tmp19} quest={questDockQuest} withAnimation={isQuestDockExpanded} />} premiumRewardPerkPill={tmp17Result} title={intl.format(questDockQuest(getQuestImpressionId[19]).t.EQa7os, obj14)} description={questsInstructionsToWinReward} ctaText={primaryCtaCopy} onCtaPress={callback} renderCtaIcon={callback1} ctaButtonVariant="shiny" ctaLoading={isEnrolling} showBonusOrbsGradient={tmp13} secondaryCta={tmp17Result2} />;
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;
