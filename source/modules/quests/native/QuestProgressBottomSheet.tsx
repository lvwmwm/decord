// Module ID: 15591
// Function ID: 118997
// Name: contextMenuButton
// Dependencies: []
// Exports: default

// Module 15591 (contextMenuButton)
function contextMenuButton(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["icon"] = importDefault(dependencyMap[13]);
  obj["variant"] = "secondary-overlay";
  const intl = arg1(dependencyMap[14]).intl;
  obj["accessibilityLabel"] = intl.string(arg1(dependencyMap[14]).t.UKOtz+);
  obj["size"] = "sm";
  return callback2(arg1(dependencyMap[12]).IconButton, obj);
}
function QuestProgressBottomSheet(quest) {
  let claim;
  let isClaiming;
  quest = quest.quest;
  const arg1 = quest;
  let importDefault;
  let obj = arg1(dependencyMap[15]);
  const isScreenLandscape = obj.useIsScreenLandscape();
  const tmp2 = callback4(isScreenLandscape);
  let obj1 = arg1(dependencyMap[16]);
  let obj2 = arg1(dependencyMap[17]);
  const getOrFetchApplication = obj1.useGetOrFetchApplication(obj2.getActivityApplicationId(quest));
  obj = {};
  let id;
  if (null != getOrFetchApplication) {
    id = getOrFetchApplication.id;
  }
  obj.applicationId = id;
  obj.size = 600;
  obj.names = ["RollOutRight"];
  const url = importDefault(dependencyMap[18])(obj).url;
  let obj4 = arg1(dependencyMap[19]);
  const questTaskDetails = obj4.useQuestTaskDetails(quest);
  const intl = arg1(dependencyMap[14]).intl;
  obj = { questName: quest.config.messages.questName };
  const tmp4 = importDefault(dependencyMap[18]);
  let obj6 = arg1(dependencyMap[20]);
  obj1 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: arg1(dependencyMap[11]).QuestContent.RUNNING_ACTIVITY };
  const userStatus = quest.userStatus;
  let completedAt;
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj1);
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  let tmp10 = null != completedAt;
  if (tmp10) {
    const userStatus2 = quest.userStatus;
    let claimedAt;
    if (null != userStatus2) {
      claimedAt = userStatus2.claimedAt;
    }
    tmp10 = null == claimedAt;
  }
  let obj8 = arg1(dependencyMap[21]);
  obj2 = { quest, questContent: arg1(dependencyMap[11]).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: arg1(dependencyMap[11]).QuestContent.RUNNING_ACTIVITY };
  const questRewardClaimHandler = obj8.useQuestRewardClaimHandler(obj2);
  ({ isClaiming, claim } = questRewardClaimHandler);
  importDefault = claim;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [claim];
  const items1 = [quest.id];
  const callback = React.useCallback(callback(questRewardClaimHandler), items);
  let callback1 = React.useCallback(() => {
    let obj = claim(closure_2[23]);
    obj.hideActionSheet();
    claim(closure_2[22]).updateFramePanelMode(constants.PIP);
    const obj2 = claim(closure_2[22]);
    obj = { scrollToQuestId: quest.id, fromContent: quest(closure_2[11]).QuestContent.QUEST_BOTTOM_SHEET };
    quest(closure_2[24]).openQuestHome(obj);
  }, items1);
  const items2 = [quest.id];
  const callback2 = React.useCallback(() => {
    let obj = claim(closure_2[23]);
    obj.hideActionSheet();
    obj = {};
    const obj2 = quest(closure_2[25]);
    obj.message = quest(closure_2[26]).getQuestUrl(quest.id);
    obj2.showShareActionSheet(obj);
  }, items2);
  const callback3 = React.useCallback(() => {
    claim(closure_2[23]).hideActionSheet();
  }, []);
  const obj3 = { bottom: null, right: null };
  obj4 = { style: tmp2.heroContainer };
  let tmp20 = null != url;
  if (tmp20) {
    const obj5 = {};
    obj6 = { uri: url };
    obj5.source = obj6;
    obj5.style = tmp2.heroImg;
    tmp20 = callback2(importDefault(dependencyMap[28]), obj5);
  }
  const items3 = [tmp20, , , ];
  const obj7 = { style: tmp2.heroGradient };
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[14]).t.EAYZAr, obj);
  const tmp17 = callback3;
  const tmp18 = callback3;
  const tmp19 = closure_5;
  obj7.start = arg1(dependencyMap[30]).VerticalGradient.START;
  obj7.end = arg1(dependencyMap[30]).VerticalGradient.END;
  const items4 = [, callback5().gradientEnd];
  obj7.colors = items4;
  items3[1] = callback2(importDefault(dependencyMap[29]), obj7);
  obj8 = { style: tmp2.gameTileContainer };
  const obj9 = { quest };
  let num2 = 80;
  let num3 = 80;
  const tmp24 = importDefault(dependencyMap[29]);
  const tmp25 = callback2;
  const tmp26 = closure_5;
  const tmp27 = callback2;
  if (isScreenLandscape) {
    num3 = 56;
  }
  obj9.height = num3;
  if (isScreenLandscape) {
    num2 = 56;
  }
  obj9.width = num2;
  obj8.children = tmp27(importDefault(dependencyMap[31]), obj9);
  items3[2] = tmp25(tmp26, obj8);
  const obj10 = { style: tmp2.contextMenuContainer };
  const obj11 = { icon: importDefault(dependencyMap[32]), onPress: callback2, variant: "secondary-overlay", size: "sm" };
  const intl2 = arg1(dependencyMap[14]).intl;
  obj11.accessibilityLabel = intl2.string(arg1(dependencyMap[14]).t.RDE0Sc);
  const items5 = [callback2(arg1(dependencyMap[12]).IconButton, obj11), ];
  const obj12 = { quest, showShareLink: true, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET };
  const tmp28 = importDefault(dependencyMap[31]);
  obj12.sourceQuestContent = arg1(dependencyMap[11]).QuestContent.RUNNING_ACTIVITY;
  obj12.children = contextMenuButton;
  items5[1] = callback2(importDefault(dependencyMap[33]), obj12);
  obj10.children = items5;
  items3[3] = callback3(closure_5, obj10);
  obj4.children = items3;
  const items6 = [tmp18(tmp19, obj4), ];
  const obj13 = { style: tmp2.contentContainer };
  const obj14 = { direction: "vertical", spacing: importDefault(dependencyMap[8]).space.PX_8, style: tmp2.textContainer };
  const obj15 = {};
  let str = "heading-lg/bold";
  if (isScreenLandscape) {
    str = "heading-md/bold";
  }
  obj15.variant = str;
  obj15.color = "mobile-text-heading-primary";
  obj15.children = formatToPlainStringResult;
  const items7 = [callback2(arg1(dependencyMap[35]).Text, obj15), ];
  const obj16 = { style: tmp2.questDescription };
  let str2 = "text-md/normal";
  if (isScreenLandscape) {
    str2 = "text-sm/normal";
  }
  obj16.variant = str2;
  obj16.color = "text-muted";
  obj16.children = questsInstructionsToWinReward;
  items7[1] = callback2(arg1(dependencyMap[35]).Text, obj16);
  obj14.children = items7;
  const items8 = [callback3(arg1(dependencyMap[34]).Stack, obj14), ];
  const obj17 = { direction: "vertical", spacing: importDefault(dependencyMap[8]).space.PX_12, style: tmp2.buttonsContainer };
  const obj18 = { size: "lg" };
  const intl3 = arg1(dependencyMap[14]).intl;
  const t = arg1(dependencyMap[14]).t;
  obj18.text = intl3.string(tmp10 ? t.cfY4PE : t.LLLLPD);
  if (tmp10) {
    callback1 = callback;
  }
  obj18.onPress = callback1;
  if (!isClaiming) {
    isClaiming = questRewardClaimHandler.isLoading;
  }
  obj18.loading = isClaiming;
  obj18.grow = true;
  const items9 = [callback2(arg1(dependencyMap[36]).Button, obj18), ];
  const obj19 = { -9223372036854775808: null, -9223372036854775808: true, 9223372036854775807: "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL3RhZ3Mvd2Vi", 0: null, 0: "e9e0b327a07bc2a048d6ebd0769783d0" };
  const intl4 = arg1(dependencyMap[14]).intl;
  obj19.text = intl4.string(arg1(dependencyMap[14]).t.cpT0Cq);
  obj19.onPress = callback3;
  items9[1] = callback2(arg1(dependencyMap[36]).Button, obj19);
  obj17.children = items9;
  items8[1] = callback3(arg1(dependencyMap[34]).Stack, obj17);
  obj13.children = items8;
  items6[1] = callback3(closure_5, obj13);
  obj3.children = items6;
  return tmp17(arg1(dependencyMap[27]).BottomSheet, obj3);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const QuestsExperimentLocations = arg1(dependencyMap[4]).QuestsExperimentLocations;
const ActivityPanelModes = arg1(dependencyMap[5]).ActivityPanelModes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[7]).createStyles((arg0) => {
  let obj = {};
  obj = { display: "flex", paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingBottom: importDefault(dependencyMap[8]).space.PX_16 };
  obj.contentContainer = obj;
  obj = {};
  let num = 140;
  if (arg0) {
    num = 125;
  }
  obj.height = num;
  obj.position = "relative";
  let num2 = 0;
  if (!arg0) {
    num2 = 52 + importDefault(dependencyMap[8]).space.PX_8;
  }
  obj.marginBottom = num2;
  obj.heroContainer = obj;
  const obj1 = { resizeMode: "cover" };
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj1["borderTopLeftRadius"] = importDefault(dependencyMap[8]).radii.lg;
  obj1["borderTopRightRadius"] = importDefault(dependencyMap[8]).radii.lg;
  obj.heroImg = obj1;
  const obj2 = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj2["borderTopLeftRadius"] = importDefault(dependencyMap[8]).radii.lg;
  obj2["borderTopRightRadius"] = importDefault(dependencyMap[8]).radii.lg;
  obj.heroGradient = obj2;
  const obj3 = {};
  let num4 = -52;
  if (arg0) {
    num4 = importDefault(dependencyMap[8]).space.PX_12;
  }
  obj3.bottom = num4;
  obj.gameTileContainer = obj3;
  const obj4 = { websiteButtons: "names", ROUGH_COUNT_MILLION_PLAYERS: "construct", stopSurface: "View", 2018342988: "isArray", 663976015: "isArray", 664037462: "isArray", 1833066845: "Text", top: importDefault(dependencyMap[8]).space.PX_16, right: importDefault(dependencyMap[8]).space.PX_16, gap: importDefault(dependencyMap[8]).space.PX_16 };
  obj.contextMenuContainer = obj4;
  const obj5 = { alignItems: "center" };
  let PX_16;
  if (!arg0) {
    PX_16 = importDefault(dependencyMap[8]).space.PX_16;
  }
  obj5.paddingTop = PX_16;
  obj5.gap = importDefault(dependencyMap[8]).space.PX_8;
  obj5.marginBottom = importDefault(dependencyMap[8]).space.PX_16;
  obj5.textAlign = "center";
  obj.textContainer = obj5;
  obj.questDescription = { textAlign: "center" };
  const obj6 = {};
  let PX_161;
  if (!arg0) {
    PX_161 = importDefault(dependencyMap[8]).space.PX_16;
  }
  obj6.paddingTop = PX_161;
  obj.buttonsContainer = obj6;
  return obj;
});
const obj = arg1(dependencyMap[7]);
let closure_13 = arg1(dependencyMap[7]).createStyleProperties(() => ({ gradientEnd: importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT }));
const obj2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default function QuestProgressBottomSheetConnected(questId) {
  const arg1 = questId.questId;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => quest.getQuest(questId));
  const importDefault = stateFromStores;
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: arg1(dependencyMap[11]).QuestContent.RUNNING_ACTIVITY,
      sourceQuestContent: arg1(dependencyMap[11]).QuestContent.RUNNING_ACTIVITY,
      children() {
          return callback(closure_15, { quest: stateFromStores });
        }
    };
    tmp2 = callback2(arg1(dependencyMap[10]).QuestContentImpressionTrackerNative, obj);
  }
  return tmp2;
};
