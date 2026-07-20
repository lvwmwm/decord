// Module ID: 13957
// Function ID: 106101
// Name: QUEST_DOCK_EXPANDED_PADDING_BOTTOM
// Dependencies: []

// Module 13957 (QUEST_DOCK_EXPANDED_PADDING_BOTTOM)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ QuestDockMode: closure_8, QuestsExperimentLocations: closure_9 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[6]);
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = tmp3.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = { wrapper: obj };
obj = { -202119967: 1, -1169061023: true, 1493721778: "/assets/design/components/Icon/native/redesign/generated/images", paddingHorizontal: tmp3.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM };
obj1 = { "Bool(false)": "Array", "Bool(false)": "Text", "Bool(false)": "guild", "Bool(false)": "parent", borderRadius: importDefault(dependencyMap[9]).modules.mobile.QUEST_DOCK_BORDER_RADIUS };
obj.rewardContentWrapper = obj1;
obj.rewardContent = {};
obj.rewardContentCopy = {};
obj.premiumRewardPerkPill = { alignSelf: "flex-start" };
const obj2 = { 9223372036854775807: 24, 0: 24, 9223372036854775807: null, 9223372036854775807: "d415e9ae6db962a437b5c21e64fa1fc3", gap: importDefault(dependencyMap[9]).space.PX_8 };
obj.titleRow = obj2;
const tmp4 = arg1(dependencyMap[7]);
obj.questDockRewardTile = { borderRadius: importDefault(dependencyMap[9]).radii.lg };
obj.questDockCtaWrapper = { "Bool(false)": true, "Bool(false)": "/assets/design/components/Icon/native/redesign/generated/images", "Bool(false)": 24, "Bool(false)": 24 };
const obj3 = { borderRadius: importDefault(dependencyMap[9]).radii.lg };
obj.questDockCta = { borderRadius: importDefault(dependencyMap[9]).radii.round };
obj.questDockCtaRow = { alignSelf: "stretch" };
const obj4 = { borderRadius: importDefault(dependencyMap[9]).radii.round };
obj.questDockCtaSaparator = { backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
let closure_13 = obj1.createStyles(obj);
const obj5 = { backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
const memoResult = importAllResult.memo(function QuestDockUnenrolledBody() {
  let isRendered;
  let quest;
  const context = importAllResult.useContext(importDefault(dependencyMap[10]));
  ({ isRendered, quest } = context);
  const arg1 = quest;
  const tmp2 = callback4();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => obj.prevRestingQuestDockMode === constants.EXPANDED);
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => enrolling.isEnrolling(quest.id));
  let obj2 = arg1(dependencyMap[12]);
  const hasWatchVideoOnMobileTasks = obj2.useHasWatchVideoOnMobileTasks(quest.config);
  const importDefault = hasWatchVideoOnMobileTasks;
  let obj3 = arg1(dependencyMap[13]);
  const questTaskDetails = obj3.useQuestTaskDetails(quest);
  let obj4 = arg1(dependencyMap[12]);
  const mobileActivityQuest = obj4.useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const dependencyMap = isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  let callback = launchMobileActivity;
  let obj5 = arg1(dependencyMap[15]);
  const questOrbMultiplierEligibility = obj5.useQuestOrbMultiplierEligibility();
  let obj6 = arg1(dependencyMap[13]);
  let shouldShowBonusOrbsUX = obj6.useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  let tmp10 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp10 = questOrbMultiplierEligibility === arg1(dependencyMap[16]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  const context1 = importAllResult.useContext(arg1(dependencyMap[17]).QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [quest.id, hasWatchVideoOnMobileTasks, setRestingQuestDockMode, isMobileActivityQuest, launchMobileActivity];
  callback = importAllResult.useCallback(callback(context1), items2);
  let obj7 = arg1(dependencyMap[22]);
  const primaryCtaCopy = obj7.usePrimaryCtaCopy({ quest, application: mobileActivityQuest.questApplication, shortText: true });
  let obj8 = arg1(dependencyMap[22]);
  obj = { quest, location: constants.QUESTS_BAR_MOBILE, taskDetails: questTaskDetails, sourceQuestContent: arg1(dependencyMap[20]).QuestContent.QUEST_BAR_MOBILE };
  const questsInstructionsToWinReward = obj8.useQuestsInstructionsToWinReward(obj);
  obj = { visible: tmp10, glow: true };
  const items3 = [tmp2.wrapper, ];
  obj1 = { paddingBottom: Math.max(importDefault(dependencyMap[14])().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items3[1] = obj1;
  obj.style = items3;
  obj2 = { style: tmp2.rewardContentWrapper };
  const items4 = [callback2(importDefault(dependencyMap[24]), {}), ];
  obj3 = { style: tmp2.rewardContent };
  obj4 = {};
  let tmp22 = !stateFromStores;
  const tmp18 = importDefault(dependencyMap[23]);
  const tmp20 = callback2;
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
  const items5 = [tmp20(importDefault(dependencyMap[25]), obj4), ];
  obj5 = { style: tmp2.rewardContentCopy };
  if (shouldShowBonusOrbsUX) {
    obj6 = { style: tmp2.premiumRewardPerkPill };
    obj7 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    obj6.children = callback2(arg1(dependencyMap[26]).QuestOrbMultiplierPerkPill, obj7);
    shouldShowBonusOrbsUX = callback2(View, obj6);
  }
  const items6 = [shouldShowBonusOrbsUX, , ];
  obj8 = { style: tmp2.titleRow };
  const obj9 = {};
  const intl = arg1(dependencyMap[28]).intl;
  obj9.children = intl.format(arg1(dependencyMap[28]).t.EQa7os, { questName: quest.config.messages.questName });
  obj8.children = callback2(arg1(dependencyMap[27]).Text, obj9);
  items6[1] = callback2(View, obj8);
  const obj11 = { "Bool(false)": false, "Bool(false)": false, children: questsInstructionsToWinReward };
  items6[2] = callback2(arg1(dependencyMap[27]).Text, obj11);
  obj5.children = items6;
  items5[1] = callback3(View, obj5);
  obj3.children = items5;
  items4[1] = callback3(View, obj3);
  obj2.children = items4;
  const items7 = [callback3(View, obj2), ];
  const obj12 = { style: tmp2.questDockCtaWrapper };
  const items8 = [callback2(View, { style: tmp2.questDockCtaSaparator }), ];
  const obj10 = { questName: quest.config.messages.questName };
  const obj13 = { style: tmp2.questDockCtaSaparator };
  const tmp21 = importDefault(dependencyMap[25]);
  const tmp24 = callback3;
  const tmp25 = View;
  items8[1] = callback2(View, { style: tmp2.questDockCtaRow, children: callback2(arg1(dependencyMap[29]).ShinyButton, obj15) });
  obj12.children = items8;
  items7[1] = callback3(View, obj12);
  obj.children = items7;
  return callback3(tmp18, obj);
});
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;
