// Module ID: 14138
// Function ID: 108675
// Name: QUEST_DOCK_EXPANDED_PADDING_BOTTOM
// Dependencies: [5, 31, 27, 6941, 14042, 4976, 14044, 33, 4130, 689, 14126, 624, 14040, 10493, 1557, 9501, 9502, 14048, 9480, 6968, 4979, 14070, 10953, 14109, 14106, 10949, 14110, 4126, 1212, 1273, 10946, 2]

// Module 14138 (QUEST_DOCK_EXPANDED_PADDING_BOTTOM)
import closure_3 from "QuestsExperimentLocations";
import importAllResult from "set";
import { View } from "Text";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
({ QuestDockMode: closure_8, QuestsExperimentLocations: closure_9 } = QuestsExperimentLocations);
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
obj = { wrapper: obj };
obj = { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
obj.rewardContentWrapper = _createForOfIteratorHelperLoose;
obj.rewardContent = { alignItems: "center", flexDirection: "row", gap: 16 };
obj.rewardContentCopy = { flexGrow: 1, flexShrink: 1, gap: 4 };
obj.premiumRewardPerkPill = { alignSelf: "flex-start" };
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, flexWrap: "wrap" };
obj.titleRow = obj2;
obj.questDockRewardTile = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.questDockCtaWrapper = { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" };
let obj3 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.questDockCta = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.questDockCtaRow = { alignSelf: "stretch" };
let obj5 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 1, opacity: 1 };
obj.questDockCtaSaparator = obj5;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
const memoResult = importAllResult.memo(function QuestDockUnenrolledBody() {
  let isRendered;
  let quest;
  const context = setRestingQuestDockMode.useContext(hasWatchVideoOnMobileTasks(isMobileActivityQuest[10]));
  ({ isRendered, quest } = context);
  const tmp2 = callback3();
  let obj = quest(isMobileActivityQuest[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.prevRestingQuestDockMode === outer1_8.EXPANDED);
  let obj1 = quest(isMobileActivityQuest[11]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_6.isEnrolling(quest.id));
  let obj2 = quest(isMobileActivityQuest[12]);
  hasWatchVideoOnMobileTasks = obj2.useHasWatchVideoOnMobileTasks(quest.config);
  let obj3 = quest(isMobileActivityQuest[13]);
  const questTaskDetails = obj3.useQuestTaskDetails(quest);
  let obj4 = quest(isMobileActivityQuest[12]);
  const mobileActivityQuest = obj4.useMobileActivityQuest(quest);
  isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  let obj5 = quest(isMobileActivityQuest[15]);
  const questOrbMultiplierEligibility = obj5.useQuestOrbMultiplierEligibility();
  let obj6 = quest(isMobileActivityQuest[13]);
  let shouldShowBonusOrbsUX = obj6.useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  let tmp10 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp10 = questOrbMultiplierEligibility === quest(isMobileActivityQuest[16]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  const context1 = setRestingQuestDockMode.useContext(quest(isMobileActivityQuest[17]).QuestDockExternalCoordinationContext);
  setRestingQuestDockMode = context1.setRestingQuestDockMode;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [quest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity];
  const callback = setRestingQuestDockMode.useCallback(launchMobileActivity(context1), items2);
  let obj7 = quest(isMobileActivityQuest[22]);
  const primaryCtaCopy = obj7.usePrimaryCtaCopy({ quest, application: mobileActivityQuest.questApplication, shortText: true });
  let obj8 = quest(isMobileActivityQuest[22]);
  obj = { quest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: quest(isMobileActivityQuest[20]).QuestContent.QUEST_BAR_MOBILE };
  const questsInstructionsToWinReward = obj8.useQuestsInstructionsToWinReward(obj);
  obj = { visible: tmp10, glow: true };
  const items3 = [tmp2.wrapper, ];
  obj1 = { paddingBottom: Math.max(hasWatchVideoOnMobileTasks(isMobileActivityQuest[14])().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items3[1] = obj1;
  obj.style = items3;
  obj2 = { style: tmp2.rewardContentWrapper };
  const items4 = [callback(hasWatchVideoOnMobileTasks(isMobileActivityQuest[24]), {}), ];
  obj3 = { style: tmp2.rewardContent };
  obj4 = { paused: null, height: 80, width: 80 };
  let tmp22 = !stateFromStores;
  const tmp18 = hasWatchVideoOnMobileTasks(isMobileActivityQuest[23]);
  const tmp20 = callback;
  if (!tmp22) {
    tmp22 = !isRendered;
  }
  obj4.paused = tmp22;
  obj4.quest = quest;
  obj4.style = tmp2.questDockRewardTile;
  let tmp23 = stateFromStores;
  if (stateFromStores) {
    tmp23 = isRendered;
  }
  obj4.withAnimation = tmp23;
  const items5 = [tmp20(hasWatchVideoOnMobileTasks(isMobileActivityQuest[25]), obj4), ];
  obj5 = { style: tmp2.rewardContentCopy };
  if (shouldShowBonusOrbsUX) {
    obj6 = { style: tmp2.premiumRewardPerkPill };
    obj7 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    obj6.children = callback(quest(isMobileActivityQuest[26]).QuestOrbMultiplierPerkPill, obj7);
    shouldShowBonusOrbsUX = callback(View, obj6);
  }
  const items6 = [shouldShowBonusOrbsUX, , ];
  obj8 = { style: tmp2.titleRow };
  const obj9 = { variant: "heading-md/medium", color: "mobile-text-heading-primary" };
  const intl = quest(isMobileActivityQuest[28]).intl;
  obj9.children = intl.format(quest(isMobileActivityQuest[28]).t.EQa7os, { questName: quest.config.messages.questName });
  obj8.children = callback(quest(isMobileActivityQuest[27]).Text, obj9);
  items6[1] = callback(View, obj8);
  const obj11 = { color: "text-default", variant: "text-sm/normal", children: questsInstructionsToWinReward };
  items6[2] = callback(quest(isMobileActivityQuest[27]).Text, obj11);
  obj5.children = items6;
  items5[1] = callback2(View, obj5);
  obj3.children = items5;
  items4[1] = callback2(View, obj3);
  obj2.children = items4;
  const items7 = [callback2(View, obj2), ];
  const obj12 = { style: tmp2.questDockCtaWrapper };
  const items8 = [callback(View, { style: tmp2.questDockCtaSaparator }), ];
  const obj10 = { questName: quest.config.messages.questName };
  const obj13 = { style: tmp2.questDockCtaSaparator };
  const tmp21 = hasWatchVideoOnMobileTasks(isMobileActivityQuest[25]);
  const tmp24 = callback2;
  const tmp25 = View;
  items8[1] = callback(View, { style: tmp2.questDockCtaRow, children: callback(quest(isMobileActivityQuest[29]).ShinyButton, obj15) });
  obj12.children = items8;
  items7[1] = callback2(View, obj12);
  obj.children = items7;
  return callback2(tmp18, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;
