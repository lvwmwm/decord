// Module ID: 14728
// Function ID: 14729
// Name: QuestDockUnenrolledBody
// Dependencies: [5, 19, 7116, 5756, 21, 14631, 14711, 14621, 563, 14620, 10681, 10711, 10709, 10696, 10697, 14628, 10749, 5759, 7141, 14649, 10683, 14655, 10750, 10678, 10719, 14729, 14694, 1115, 7363, 12479, 10699, 2]

// Module 14728 (QuestDockUnenrolledBody)
import Fragment from "Fragment" /* 21 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import QuestUtils from "QuestUtils" /* 10678 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10719 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import QuestStore from "QuestStore" /* 7116 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
({ QuestDockMode: metroRequire, QuestsExperimentLocations: metroImportDefault } = QuestConstants);
const jsx = Fragment.jsx;
const memoResult = react.memo(function QuestDockUnenrolledBody() {
  let getQuestImpressionId;
  let hasWatchVideoOnMobileTasks;
  let intl;
  let isMobileActivityQuest;
  let obj16;
  let questDockQuest;
  let setRestingQuestDockMode;
  let tmp22Result;
  let tmp22Result2;
  let tmpResult8;
  let trackQuestContentClickedWithImpression;
  const tmp2 = isMobileActivityQuest;
  let obj = questDockQuest(isMobileActivityQuest[5]);
  questDockQuest = obj.useQuestDockQuest();
  let obj2 = getQuestImpressionId;
  const isRendered = getQuestImpressionId.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[6])).isRendered;
  let obj3 = questDockQuest(isMobileActivityQuest[7]);
  let isQuestDockExpanded = obj3.useIsQuestDockExpanded();
  let obj4 = questDockQuest(isMobileActivityQuest[8]);
  const items = [setRestingQuestDockMode];
  const stateFromStores = obj4.useStateFromStores(items, () => QuestStore.isEnrolling(questDockQuest.id));
  let obj5 = questDockQuest(isMobileActivityQuest[9]);
  hasWatchVideoOnMobileTasks = obj5.useHasWatchVideoOnMobileTasks(questDockQuest.config);
  let obj6 = questDockQuest(isMobileActivityQuest[10]);
  const questTaskDetails = obj6.useQuestTaskDetails(questDockQuest);
  let obj7 = questDockQuest(isMobileActivityQuest[9]);
  const mobileActivityQuest = obj7.useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const questApplication = mobileActivityQuest.questApplication;
  let obj8 = questDockQuest(isMobileActivityQuest[11]);
  getQuestImpressionId = obj8.useGetQuestImpressionId();
  const QuestMobileBarSecondaryCtaExperiment = questDockQuest(isMobileActivityQuest[12]).QuestMobileBarSecondaryCtaExperiment;
  let obj9 = { location: trackQuestContentClickedWithImpression.QUESTS_BAR_MOBILE };
  let tmp11 = trackQuestContentClickedWithImpression;
  const enabled = QuestMobileBarSecondaryCtaExperiment.useConfig(obj9).enabled;
  let obj10 = questDockQuest(isMobileActivityQuest[13]);
  const questOrbMultiplierEligibility = obj10.useQuestOrbMultiplierEligibility();
  const obj11 = questDockQuest(isMobileActivityQuest[10]);
  const shouldShowBonusOrbsUX = obj11.useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  const tmp14 = shouldShowBonusOrbsUX && questOrbMultiplierEligibility === questDockQuest(tmp2[14]).QuestOrbMultiplierEligibilityType.NITRO;
  setRestingQuestDockMode = obj2.useContext(tmp(tmp2[15]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const tmpResult = questDockQuest(tmp2[10]);
  const isQuestAccessSuspended = tmpResult.useIsQuestAccessSuspended();
  const tmpResult5 = questDockQuest(tmp2[16]);
  trackQuestContentClickedWithImpression = tmpResult5.useTrackQuestContentClickedWithImpression();
  const items1 = [questDockQuest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  const callback = obj2.useCallback(launchMobileActivity(function*(arg0, value) {
    let c2;
    let v2;
    if (isMobileActivityQuest === 2) {
      isMobileActivityQuest = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let v0;
        isMobileActivityQuest = 2;
        if (0 === hasWatchVideoOnMobileTasks) {
          if (arg0 === 1) {
            isMobileActivityQuest = 3;
            throw value;
          } else if (arg0 === 2) {
            isMobileActivityQuest = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            v0 = 0;
            const tmp48 = isQuestAccessSuspended;
            if (tmp48) {
              const obj4 = { questId: questDockQuest.id, questContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: v0(isMobileActivityQuest[18]).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE };
              trackQuestContentClickedWithImpression(obj4);
              hasWatchVideoOnMobileTasks(isMobileActivityQuest[19])();
              isMobileActivityQuest = 3;
              const obj5 = { value: undefined, done: true };
              return obj5;
            } else {
              const obj6 = { questContentCTA: v0(isMobileActivityQuest[18]).QuestContentCTA.ACCEPT_QUEST, questContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE };
              const enrollInQuest = v0(isMobileActivityQuest[20]).enrollInQuest;
              const id = questDockQuest.id;
              const tmp22 = v0(isMobileActivityQuest[20]);
              hasWatchVideoOnMobileTasks = 1;
              isMobileActivityQuest = 1;
              const obj7 = { value: enrollInQuest(id, obj6), done: false };
              return obj7;
            }
          }
        } else {
          if (1 === tmp3) {
            if (arg0 === 1) {
              isMobileActivityQuest = 3;
              throw value;
            } else if (arg0 === 2) {
              isMobileActivityQuest = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              const tmp47 = closure_128_2;
              if (tmp47) {
                hasWatchVideoOnMobileTasks = 2;
                isMobileActivityQuest = 1;
                const obj9 = { value: closure_128_3(), done: false };
                return obj9;
              } else {
                const tmp8 = closure_128_1;
                if (tmp8) {
                  const obj10 = { questId: closure_128_0.id, sourceQuestContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE };
                  const tmp11 = hasWatchVideoOnMobileTasks(isMobileActivityQuest[21]);
                  tmp11(obj10);
                  closure_128_5(constants.COLLAPSED);
                }
              }
            }
          } else if (arg0 === 1) {
            isMobileActivityQuest = 3;
            throw value;
          } else if (arg0 === 2) {
            isMobileActivityQuest = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_5(constants.COLLAPSED);
          }
          isMobileActivityQuest = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp42) {
        isMobileActivityQuest = 3;
        throw tmp42;
      }
    }
  }), items1);
  const tmpResult6 = questDockQuest(tmp2[22]);
  const primaryCtaCopy = tmpResult6.usePrimaryCtaCopy({ quest: questDockQuest, application: questApplication, shortText: true });
  const items2 = [questDockQuest];
  const tmpResult7 = questDockQuest(tmp2[22]);
  const obj12 = { quest: questDockQuest, location: tmp11.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(tmp2[17]).QuestContent.QUEST_BAR_MOBILE };
  const questsInstructionsToWinReward = tmpResult7.useQuestsInstructionsToWinReward(obj12);
  const items3 = [questDockQuest, getQuestImpressionId];
  const callback1 = obj2.useCallback(() => {
    const obj = QuestUtils;
    return obj.getPrimaryCtaIcon(questDockQuest, true);
  }, items2);
  let tmp22 = jsx;
  const callback2 = obj2.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.openGameLinkDirectly(questDockQuest, obj2);
  }, items3);
  let tmp24 = !isQuestDockExpanded;
  const tmp4Result = hasWatchVideoOnMobileTasks(tmp2[25]);
  const QuestDockBodyQuestRewardTile = tmp(tmp2[25]).QuestDockBodyQuestRewardTile;
  if (isQuestDockExpanded) {
    tmp24 = !isRendered;
  }
  const obj13 = { paused: tmp24, quest: questDockQuest, withAnimation: isQuestDockExpanded };
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj14 = { rewardTile: tmp22(QuestDockBodyQuestRewardTile, obj13), premiumRewardPerkPill: tmp22Result, title: intl.format(questDockQuest(tmp2[27]).t.EQa7os, obj16), description: questsInstructionsToWinReward, ctaText: primaryCtaCopy, onCtaPress: callback, renderCtaIcon: callback1, ctaButtonVariant: "shiny", ctaLoading: stateFromStores, showBonusOrbsGradient: tmp14, secondaryCta: tmp22Result2 };
  tmp22Result = undefined;
  if (shouldShowBonusOrbsUX) {
    const obj15 = { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    tmp22Result = tmp22(tmp(tmp2[26]).QuestOrbMultiplierPerkPill, obj15);
  }
  intl = tmp(tmp2[27]).intl;
  tmp22Result2 = undefined;
  obj16 = { questName: questDockQuest.config.messages.questName };
  if (enabled) {
    const obj17 = { variant: "secondary", size: "md", icon: hasWatchVideoOnMobileTasks(tmp2[29]), accessibilityLabel: tmpResult8.getExternalCtaLabel(questDockQuest), onPress: callback2 };
    const IconButton = tmp(tmp2[28]).IconButton;
    tmpResult8 = questDockQuest(tmp2[30]);
    tmp22Result2 = tmp22(IconButton, obj17);
  }
  return tmp22(tmp4Result, obj14);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;
