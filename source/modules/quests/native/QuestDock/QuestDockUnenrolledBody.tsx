// Module ID: 14216
// Function ID: 14217
// Name: QUEST_DOCK_EXPANDED_PADDING_BOTTOM
// Dependencies: [5, 19, 17, 5985, 14120, 5033, 14122, 21, 4189, 712, 14204, 647, 14118, 10492, 1581, 9486, 9487, 14126, 9469, 6012, 5036, 14148, 10967, 14187, 14184, 10963, 14188, 4185, 1236, 1297, 10960, 2]

// Module 14216 (QUEST_DOCK_EXPANDED_PADDING_BOTTOM)
import closure_3 from "QuestsExperimentLocations";
import importAllResult from "getQuestContentName";
import { View } from "QuestDockMode";
import initializeState from "initializeState";
import QuestDockMode from "QuestDockMode";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "openVideoQuestModal";
import createCacheKey from "createCacheKey";

let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ QuestDockMode: metroImportAll, QuestsExperimentLocations: c9 } = QuestsExperimentLocations);
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { wrapper: { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM }, rewardContentWrapper: null, rewardContent: null, rewardContentCopy: null, premiumRewardPerkPill: null, titleRow: null, questDockRewardTile: null, questDockCtaWrapper: null, questDockCta: null, questDockCtaRow: null, questDockCtaSaparator: null };
obj = { borderRadius: require("Themes").modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
obj[1] = obj;
obj[2] = { alignItems: "center", flexDirection: "row", gap: 16 };
obj[3] = { flexGrow: 1, flexShrink: 1, gap: 4 };
obj[4] = { alignSelf: "flex-start" };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, flexWrap: "wrap" };
obj[5] = createCacheKey;
obj[6] = { borderRadius: require("Themes").radii.lg };
obj[7] = { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" };
let obj2 = { borderRadius: require("Themes").radii.lg };
obj[8] = { borderRadius: require("Themes").radii.round };
obj[9] = { alignSelf: "stretch" };
let obj3 = { borderRadius: require("Themes").radii.round };
obj[10] = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 1, opacity: 1 };
let closure_13 = createCacheKey.createStyles(obj);
let obj4 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 1, opacity: 1 };
const memoResult = importAllResult.memo(function QuestDockUnenrolledBody() {
  let isRendered;
  let quest;
  let obj = setRestingQuestDockMode;
  const context = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[10]));
  ({ isRendered, quest } = context);
  const tmp4 = callback2();
  let obj1 = quest(isMobileActivityQuest[11]);
  const items = [QuestDockMode];
  const stateFromStores = obj1.useStateFromStores(items, () => obj.prevRestingQuestDockMode === constants.EXPANDED);
  let obj2 = quest(isMobileActivityQuest[11]);
  const items1 = [initializeState];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_6.isEnrolling(quest.id));
  let obj3 = quest(isMobileActivityQuest[12]);
  hasWatchVideoOnMobileTasks = obj3.useHasWatchVideoOnMobileTasks(quest.config);
  let obj4 = quest(isMobileActivityQuest[13]);
  const questTaskDetails = obj4.useQuestTaskDetails(quest);
  let obj5 = quest(isMobileActivityQuest[12]);
  const mobileActivityQuest = obj5.useMobileActivityQuest(quest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  let obj6 = quest(isMobileActivityQuest[15]);
  const questOrbMultiplierEligibility = obj6.useQuestOrbMultiplierEligibility();
  let obj7 = quest(isMobileActivityQuest[13]);
  const shouldShowBonusOrbsUX = obj7.useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  let tmp13 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp13 = questOrbMultiplierEligibility === tmp5(tmp2[16]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  setRestingQuestDockMode = obj.useContext(tmp5(tmp2[17]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const items2 = [quest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity];
  const callback = obj.useCallback(launchMobileActivity(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            const obj1 = { questContentCTA: null, questContent: null, sourceQuestContent: null };
            obj1[0] = outer1_0(6012).QuestContentCTA.ACCEPT_QUEST;
            obj1[1] = outer1_0(5036).QuestContent.QUEST_BAR_MOBILE;
            obj1[2] = outer1_0(5036).QuestContent.QUEST_BAR_MOBILE;
            v0 = 1;
            dependencyMap = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = outer1_0(9469).enrollInQuest(outer1_0.id, obj1);
            return obj2;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else if (dependencyMap) {
              v0 = 2;
              dependencyMap = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = outer1_3();
              return obj4;
            } else {
              if (v0) {
                const obj5 = { questId: null, sourceQuestContent: null };
                obj5[0] = outer1_0.id;
                obj5[1] = outer1_0(5036).QuestContent.QUEST_BAR_MOBILE;
                v0(14148)(obj5);
                outer1_4(outer1_8.COLLAPSED);
                const tmp12 = v0(14148);
              }
              dependencyMap = 3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback(outer1_8.COLLAPSED);
          }
          dependencyMap = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp21) {
        dependencyMap = tmp;
        throw tmp21;
      }
    }
  }), items2);
  let tmp5Result = tmp5(tmp2[22]);
  const primaryCtaCopy = tmp5Result.usePrimaryCtaCopy({ quest, application: mobileActivityQuest.questApplication, shortText: true });
  tmp5Result = tmp5(tmp2[22]);
  obj = { quest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: tmp5(tmp2[20]).QuestContent.QUEST_BAR_MOBILE };
  const questsInstructionsToWinReward = tmp5Result.useQuestsInstructionsToWinReward(obj);
  obj = { visible: tmp13, glow: true, style: null, children: null };
  const items3 = [tmp4.wrapper, ];
  obj1 = { paddingBottom: null };
  let tmpResult = tmp(tmp2[23]);
  obj1[0] = Math.max(hasWatchVideoOnMobileTasks(isMobileActivityQuest[14])().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
  items3[1] = obj1;
  obj[2] = items3;
  obj2 = { style: tmp4.rewardContentWrapper, children: null };
  const items4 = [callback(hasWatchVideoOnMobileTasks(isMobileActivityQuest[24]), {}), ];
  obj3 = { style: tmp4.rewardContent, children: null };
  let tmp22 = !stateFromStores;
  tmpResult = tmp(tmp2[25]);
  if (stateFromStores) {
    tmp22 = !isRendered;
  }
  obj4 = { paused: tmp22, height: 80, width: 80, quest, style: tmp4.questDockRewardTile, withAnimation: null };
  let tmp23 = stateFromStores;
  if (stateFromStores) {
    tmp23 = isRendered;
  }
  obj4[5] = tmp23;
  const items5 = [callback(tmpResult, obj4), ];
  obj5 = { style: tmp4.rewardContentCopy, children: null };
  let tmp20Result = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    obj6 = { style: null, children: null };
    obj6[0] = tmp4.premiumRewardPerkPill;
    obj7 = { questId: null, orbMultiplierEligibility: null };
    obj7[0] = quest.config.id;
    obj7[1] = questOrbMultiplierEligibility;
    obj6[1] = tmp20(tmp5(tmp2[26]).QuestOrbMultiplierPerkPill, obj7);
    tmp20Result = tmp20(tmp19, obj6);
  }
  const items6 = [tmp20Result, , ];
  const obj8 = { style: tmp4.titleRow, children: null };
  const obj9 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl = tmp5(tmp2[28]).intl;
  obj9[2] = intl.format(quest(isMobileActivityQuest[28]).t.EQa7os, { questName: quest.config.messages.questName });
  obj8[1] = callback(quest(isMobileActivityQuest[27]).Text, obj9);
  items6[1] = callback(View, obj8);
  items6[2] = callback(quest(isMobileActivityQuest[27]).Text, { color: "text-default", variant: "text-sm/normal", children: questsInstructionsToWinReward });
  obj5[1] = items6;
  items5[1] = closure_12(View, obj5);
  obj3[1] = items5;
  items4[1] = closure_12(View, obj3);
  obj2[1] = items4;
  const items7 = [closure_12(View, obj2), ];
  const obj11 = { style: tmp4.questDockCtaWrapper, children: null };
  const items8 = [callback(View, { style: tmp4.questDockCtaSaparator }), callback(View, { style: tmp4.questDockCtaRow, children: callback(quest(isMobileActivityQuest[29]).ShinyButton, obj14) })];
  obj11[1] = items8;
  items7[1] = closure_12(View, obj11);
  obj[3] = items7;
  return closure_12(tmpResult, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;
