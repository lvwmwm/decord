// Module ID: 15455
// Function ID: 15456
// Name: QuestDockUnenrolledBody
// Dependencies: [5, 19, 7944, 5663, 21, 558, 568, 15358, 15438, 15348, 565, 15347, 11607, 10577, 10578, 15355, 11902, 5666, 7969, 15374, 10564, 15380, 11903, 11895, 15456, 15421, 1119, 2]

// Module 15455 (QuestDockUnenrolledBody)
import QuestUtils from "QuestUtils" /* 11895 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7944 */;

const require = globalThis.__r;

require = fn;
const QuestConstants = fn(5663);
({ QuestDockMode: metroRequire, QuestsExperimentLocations: closure_7 } = QuestConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(39);
  const obj = require("c");
  const questDockQuest = require("QuestDockCreativeContext").useQuestDockQuest();
  _require = questDockQuest;
  const isRendered = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[8])).isRendered;
  const obj2 = require("QuestDockCreativeContext");
  const obj3 = setRestingQuestDockMode;
  const isQuestDockExpanded = require("QuestDockHooks").useIsQuestDockExpanded();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isQuestAccessSuspended];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== questDockQuest.id) {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
    cResult[1] = questDockQuest.id;
    cResult[2] = Q;
    const tmp8 = Q;
  } else {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
  }
  const obj4 = require("QuestDockHooks");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp8);
  const tmpResult = require("useStateFromStores");
  hasWatchVideoOnMobileTasks = require("QuestHooks").useHasWatchVideoOnMobileTasks(questDockQuest.config);
  const tmpResult8 = require("QuestHooks");
  const questTaskDetails = require("hooks/QuestHooks").useQuestTaskDetails(questDockQuest);
  const tmpResult9 = require("hooks/QuestHooks");
  const mobileActivityQuest = require("QuestHooks").useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  ({ questApplication, launchMobileActivity } = mobileActivityQuest);
  const tmpResult10 = require("QuestHooks");
  const questOrbMultiplierEligibility = require("QuestOrbMultiplierHooks").useQuestOrbMultiplierEligibility();
  const tmpResult11 = require("QuestOrbMultiplierHooks");
  const shouldShowBonusOrbsUX = require("hooks/QuestHooks").useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  if (shouldShowBonusOrbsUX) {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
  }
  setRestingQuestDockMode = obj3.useContext(tmp(tmp2[15]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const tmpResult12 = require("hooks/QuestHooks");
  isQuestAccessSuspended = require("hooks/QuestHooks").useIsQuestAccessSuspended();
  const tmpResult13 = require("hooks/QuestHooks");
  const trackQuestContentClickedWithImpression = require("AnalyticsHooks").useTrackQuestContentClickedWithImpression();
  if (cResult[3] === isMobileActivityQuest) {
    class Q {
      constructor() {
        return closure_5.isEnrolling(closure_0.id);
      }
    }
  }
  _require = launchMobileActivity(function*(arg0, value) {
    const v0 = 0;
    if (isQuestAccessSuspended) {
      trackQuestContentClickedWithImpression({ questId: v0.id, questContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE, questContentCTA: v0(isMobileActivityQuest[18]).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE });
      hasWatchVideoOnMobileTasks(isMobileActivityQuest[19])();
    }
    yield v0(isMobileActivityQuest[20]).enrollInQuest(v0.id, { questContentCTA: v0(isMobileActivityQuest[18]).QuestContentCTA.ACCEPT_QUEST, questContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE });
    if (1 === tmp4) {
      if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        return { value, done: true };
      } else if (c2) {
        c1 = 2;
        c2 = 1;
        return { value: launchMobileActivity(), done: false };
      } else {
        if (c1) {
          hasWatchVideoOnMobileTasks(isMobileActivityQuest[21])({ questId: v0.id, sourceQuestContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE });
          setRestingQuestDockMode(trackQuestContentClickedWithImpression.COLLAPSED);
          hasWatchVideoOnMobileTasks(isMobileActivityQuest[21]);
          { questId: v0.id, sourceQuestContent: v0(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE };
        }
        c2 = 3;
      }
    } else if (arg0 === 1) {
      c2 = 3;
      throw value;
    } else if (arg0 !== 2) {
      setRestingQuestDockMode(trackQuestContentClickedWithImpression.COLLAPSED);
    }
    return value;
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[3] = isMobileActivityQuest;
  cResult[4] = isQuestAccessSuspended;
  cResult[5] = launchMobileActivity;
  cResult[6] = questDockQuest.id;
  cResult[7] = setRestingQuestDockMode;
  cResult[8] = hasWatchVideoOnMobileTasks;
  cResult[9] = trackQuestContentClickedWithImpression;
  cResult[10] = fn;
}) : (() => {
  questDockQuest = questDockQuest(isMobileActivityQuest[7]).useQuestDockQuest();
  const isRendered = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[8])).isRendered;
  const obj = questDockQuest(isMobileActivityQuest[7]);
  const tmp4 = hasWatchVideoOnMobileTasks;
  let isQuestDockExpanded = questDockQuest(isMobileActivityQuest[9]).useIsQuestDockExpanded();
  const obj3 = questDockQuest(isMobileActivityQuest[9]);
  const items = [isQuestAccessSuspended];
  const stateFromStores = questDockQuest(isMobileActivityQuest[10]).useStateFromStores(items, () => QuestStore.isEnrolling(questDockQuest.id));
  const obj4 = questDockQuest(isMobileActivityQuest[10]);
  hasWatchVideoOnMobileTasks = questDockQuest(isMobileActivityQuest[11]).useHasWatchVideoOnMobileTasks(questDockQuest.config);
  const obj5 = questDockQuest(isMobileActivityQuest[11]);
  const questTaskDetails = questDockQuest(isMobileActivityQuest[12]).useQuestTaskDetails(questDockQuest);
  const obj6 = questDockQuest(isMobileActivityQuest[12]);
  const mobileActivityQuest = questDockQuest(isMobileActivityQuest[11]).useMobileActivityQuest(questDockQuest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const obj7 = questDockQuest(isMobileActivityQuest[11]);
  const questOrbMultiplierEligibility = questDockQuest(isMobileActivityQuest[13]).useQuestOrbMultiplierEligibility();
  const obj8 = questDockQuest(isMobileActivityQuest[13]);
  const shouldShowBonusOrbsUX = questDockQuest(isMobileActivityQuest[12]).useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
  let tmp12 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp12 = questOrbMultiplierEligibility === tmp(tmp2[14]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  setRestingQuestDockMode = obj2.useContext(tmp(tmp2[15]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const obj9 = questDockQuest(isMobileActivityQuest[12]);
  isQuestAccessSuspended = questDockQuest(isMobileActivityQuest[12]).useIsQuestAccessSuspended();
  const tmpResult = questDockQuest(isMobileActivityQuest[12]);
  const trackQuestContentClickedWithImpression = questDockQuest(isMobileActivityQuest[16]).useTrackQuestContentClickedWithImpression();
  const items1 = [questDockQuest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity, isQuestAccessSuspended, trackQuestContentClickedWithImpression];
  const callback = obj2.useCallback(launchMobileActivity(function*(arg0, value) {
    const v0 = 0;
    if (isQuestAccessSuspended) {
      trackQuestContentClickedWithImpression({ questId: questDockQuest.id, questContent: v0(5666).QuestContent.QUEST_BAR_MOBILE, questContentCTA: v0(7969).QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: v0(5666).QuestContent.QUEST_BAR_MOBILE });
      v2(15374)();
    }
    yield v0(10564).enrollInQuest(questDockQuest.id, { questContentCTA: v0(7969).QuestContentCTA.ACCEPT_QUEST, questContent: v0(5666).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: v0(5666).QuestContent.QUEST_BAR_MOBILE });
    if (1 === tmp4) {
      if (arg0 === 1) {
        dependencyMap = 3;
        throw value;
      } else if (arg0 === 2) {
        dependencyMap = 3;
        return { value, done: true };
      } else if (closure_128_2) {
        v2 = 2;
        dependencyMap = 1;
        return { value: closure_128_3(), done: false };
      } else {
        if (closure_128_1) {
          v2(15380)({ questId: closure_128_0.id, sourceQuestContent: v0(5666).QuestContent.QUEST_BAR_MOBILE });
          closure_128_4(constants.COLLAPSED);
          v2(15380);
          { questId: closure_128_0.id, sourceQuestContent: v0(5666).QuestContent.QUEST_BAR_MOBILE };
        }
        dependencyMap = 3;
      }
    } else if (arg0 === 1) {
      dependencyMap = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_128_4(constants.COLLAPSED);
    }
    return value;
  }), items1);
  const tmpResult4 = questDockQuest(isMobileActivityQuest[16]);
  const primaryCtaCopy = questDockQuest(isMobileActivityQuest[22]).usePrimaryCtaCopy({ quest: questDockQuest, application: mobileActivityQuest.questApplication, shortText: true });
  const tmpResult5 = questDockQuest(isMobileActivityQuest[22]);
  const tmpResult6 = questDockQuest(isMobileActivityQuest[22]);
  const items2 = [questDockQuest];
  const questsInstructionsToWinReward = tmpResult6.useQuestsInstructionsToWinReward({ quest: questDockQuest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE });
  const callback1 = obj2.useCallback(() => QuestUtils.getPrimaryCtaIcon(questDockQuest, true), items2);
  const obj10 = { quest: questDockQuest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: questDockQuest(isMobileActivityQuest[17]).QuestContent.QUEST_BAR_MOBILE };
  let tmp21 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp21 = !isRendered;
  }
  const obj11 = { paused: tmp21, quest: questDockQuest, withAnimation: null };
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj12 = { rewardTile: jsx(questDockQuest(isMobileActivityQuest[24]).QuestDockBodyQuestRewardTile, { paused: tmp21, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null };
  obj11.withAnimation = isQuestDockExpanded;
  let tmp19Result;
  if (shouldShowBonusOrbsUX) {
    const obj13 = { questId: questDockQuest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    tmp19Result = tmp19(tmp(tmp2[25]).QuestOrbMultiplierPerkPill, obj13);
  }
  obj12.premiumRewardPerkPill = tmp19Result;
  const intl = tmp(tmp2[26]).intl;
  obj12.title = intl.format(questDockQuest(isMobileActivityQuest[26]).t.EQa7os, { questName: questDockQuest.config.messages.questName });
  obj12.description = questsInstructionsToWinReward;
  obj12.ctaText = primaryCtaCopy;
  obj12.onCtaPress = callback;
  obj12.renderCtaIcon = callback1;
  obj12.ctaLoading = stateFromStores;
  obj12.showBonusOrbsGradient = tmp12;
  return jsx(tmp4(isMobileActivityQuest[24]), { rewardTile: jsx(questDockQuest(isMobileActivityQuest[24]).QuestDockBodyQuestRewardTile, { paused: tmp21, quest: questDockQuest, withAnimation: null }), premiumRewardPerkPill: null, title: null, description: null, ctaText: null, onCtaPress: null, renderCtaIcon: null, ctaButtonVariant: "shiny", ctaLoading: null, showBonusOrbsGradient: null });
}));
