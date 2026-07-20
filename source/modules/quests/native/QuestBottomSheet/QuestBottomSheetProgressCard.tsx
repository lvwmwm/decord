// Module ID: 13924
// Function ID: 105843
// Name: StyleSheet
// Dependencies: []
// Exports: QuestBottomSheetProgressCardInGameTask, QuestBottomSheetProgressCardPlayStreamTask, QuestBottomSheetProgressCardWatchTask

// Module 13924 (StyleSheet)
let StyleSheet;
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { card: { padding: 0 }, cardWatchTask: {} };
obj = { padding: importDefault(dependencyMap[5]).space.PX_16 };
obj.content = obj;
obj.contentWatchTask = { alignItems: "flex-end" };
const obj1 = { paddingTop: null, paddingHorizontal: 15.1, gap: null, flexDirection: "\u{1F468}\u{1F3FE}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", alignItems: true, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: importDefault(dependencyMap[5]).modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: importDefault(dependencyMap[5]).modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_MUTED };
obj.footer = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.instructionsText = { marginTop: importDefault(dependencyMap[5]).space.PX_12, textAlign: "center" };
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3["borderRadius"] = importDefault(dependencyMap[5]).modules.mobile.CARD_DEFAULT_RADIUS;
obj3["overflow"] = "hidden";
obj.videoPreviewWrapper = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.videoPreview = {};
const obj2 = { marginTop: importDefault(dependencyMap[5]).space.PX_12, textAlign: "center" };
const obj4 = {};
const items = [{ translateX: -30 }, { translateY: -30 }];
obj.playVideoIconWrapper = { borderRadius: importDefault(dependencyMap[5]).radii.round, transform: items };
let closure_9 = obj.createStyles(obj);
const obj5 = { borderRadius: importDefault(dependencyMap[5]).radii.round, transform: items };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetProgressCard.tsx");

export const QuestBottomSheetProgressCardPlayStreamTask = function QuestBottomSheetProgressCardPlayStreamTask(quest) {
  quest = quest.quest;
  let dependencyMap;
  let React;
  let result;
  let StyleSheet;
  let closure_6;
  let defaultRewardName;
  let isSponsoredPlayQuestResult;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const arg1 = questTaskDetails;
  let obj1 = arg1(dependencyMap[6]);
  let isQuestProgressing = obj1.useIsQuestProgressing(quest);
  const importDefault = isQuestProgressing;
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  let tmp5 = null != completedAt;
  dependencyMap = tmp5;
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (null != userStatus2) {
    claimedAt = userStatus2.claimedAt;
  }
  React = tmp7;
  let obj2 = arg1(dependencyMap[7]);
  result = obj2.supportedTaskPlatforms(quest);
  let obj3 = arg1(dependencyMap[6]);
  const questFormattedDate = obj3.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  StyleSheet = questFormattedDate;
  const gameTitle = quest.config.messages.gameTitle;
  closure_6 = gameTitle;
  let obj4 = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj4.useStateFromStores(items, () => gameTitle.getCurrentUser());
  let obj5 = arg1(dependencyMap[9]);
  defaultRewardName = obj5.getDefaultRewardName(quest.config, stateFromStores);
  isSponsoredPlayQuestResult = arg1(dependencyMap[10]).isSponsoredPlayQuest(quest);
  const items1 = [questTaskDetails, tmp5, null != claimedAt, gameTitle, defaultRewardName, isQuestProgressing, result, questFormattedDate, isSponsoredPlayQuestResult];
  const memo = React.useMemo(() => {
    if (tmp5) {
      if (!tmp7) {
        const intl = questTaskDetails(tmp5[11]).intl;
        let obj = {
          rewardHook() {
                return callback2(callback(closure_2[12]).Text, { children: callback2 });
              },
          date: questFormattedDate
        };
        return intl.format(questTaskDetails(tmp5[11]).t.e3OlfB, obj);
      }
    }
    if (isQuestProgressing) {
      const _Math = Math;
      const rounded = Math.ceil((questTaskDetails.targetSeconds - questTaskDetails.progressSeconds) / 60);
      const intl7 = questTaskDetails(tmp5[11]).intl;
      obj = {
        minutesLeft: rounded,
        minutesHook(children) {
            return callback2(callback(closure_2[12]).Text, { children });
          }
      };
      return intl7.format(questTaskDetails(tmp5[11]).t.aFaRso, obj);
    } else {
      if (isSponsoredPlayQuestResult) {
        const intl6 = questTaskDetails(tmp5[11]).intl;
        let stringResult = intl6.string(questTaskDetails(tmp5[11]).t.04ateG);
      } else if (result.length > 1) {
        const intl5 = questTaskDetails(tmp5[11]).intl;
        obj = { gameName: gameTitle };
        stringResult = intl5.formatToPlainString(questTaskDetails(tmp5[11]).t.E2R8VX, obj);
      } else if (questTaskDetails.taskType === questTaskDetails(tmp5[13]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
        const intl4 = questTaskDetails(tmp5[11]).intl;
        const obj1 = { gameName: gameTitle };
        stringResult = intl4.formatToPlainString(questTaskDetails(tmp5[11]).t.boMftC, obj1);
      } else if (questTaskDetails.taskType === questTaskDetails(tmp5[13]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP) {
        const intl3 = questTaskDetails(tmp5[11]).intl;
        const obj2 = { gameName: gameTitle };
        stringResult = intl3.formatToPlainString(questTaskDetails(tmp5[11]).t.9Peldf, obj2);
      } else {
        const CONSOLE = questTaskDetails(tmp5[13]).FirstPartyQuestTaskTypesSets.CONSOLE;
        stringResult = null;
        if (CONSOLE.has(questTaskDetails.taskType)) {
          const intl2 = questTaskDetails(tmp5[11]).intl;
          const obj3 = { gameTitle };
          stringResult = intl2.formatToPlainString(questTaskDetails(tmp5[11]).t.+8JB6Y, obj3);
        }
      }
      return stringResult;
    }
  }, items1);
  obj = { style: tmp.card, border: "subtle" };
  obj = { style: tmp.content };
  obj1 = { quest, size: "lg", progress: questTaskDetails.percentComplete };
  const obj7 = arg1(dependencyMap[10]);
  const tmp15 = result;
  const tmp16 = defaultRewardName;
  if (!tmp5) {
    tmp5 = isQuestProgressing;
  }
  obj1.loading = !tmp5;
  obj1.hasConfetti = true;
  const items2 = [tmp16(importDefault(dependencyMap[15]), obj1), ];
  let tmp18 = null != memo;
  if (tmp18) {
    obj2 = { Promise: false, marginTop: false, flags: false, style: tmp.instructionsText, children: memo };
    tmp18 = defaultRewardName(arg1(dependencyMap[12]).Text, obj2);
  }
  items2[1] = tmp18;
  obj.children = items2;
  const items3 = [isSponsoredPlayQuestResult(tmp15, obj), ];
  if (isQuestProgressing) {
    obj3 = { style: tmp.footer };
    obj4 = {};
    const intl = arg1(dependencyMap[11]).intl;
    obj5 = { gameName: quest.config.messages.gameTitle };
    obj4.children = intl.format(arg1(dependencyMap[11]).t.lIFg6I, obj5);
    obj3.children = defaultRewardName(arg1(dependencyMap[12]).Text, obj4);
    isQuestProgressing = defaultRewardName(result, obj3);
  }
  items3[1] = isQuestProgressing;
  obj.children = items3;
  return isSponsoredPlayQuestResult(arg1(dependencyMap[14]).Card, obj);
};
export const QuestBottomSheetProgressCardWatchTask = function QuestBottomSheetProgressCardWatchTask(quest) {
  quest = quest.quest;
  const arg1 = quest;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const items = [quest];
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const memo = React.useMemo(() => quest(closure_2[16]).getQuestAsset(quest, quest(closure_2[16]).QuestAssetType.QUEST_BAR_HERO_VIDEO), items);
  const items1 = [quest];
  const memo1 = React.useMemo(() => quest(closure_2[16]).getQuestAsset(quest, quest(closure_2[16]).QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items1);
  const items2 = [quest];
  const memo2 = React.useMemo(() => quest(closure_2[16]).getQuestAsset(quest, quest(closure_2[16]).QuestAssetType.QUEST_BAR_HERO_IMAGE), items2);
  let obj1 = arg1(dependencyMap[17]);
  obj = { questId: quest.id, sourceQuestContent: quest.sourceQuestContent };
  let isHeroVideoSupportedResult = null != memo;
  if (isHeroVideoSupportedResult) {
    let obj3 = arg1(dependencyMap[18]);
    isHeroVideoSupportedResult = obj3.isHeroVideoSupported(memo);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
  } else {
  }
  obj = { onPress: obj1.useWatchTaskPressHandler(obj), accessibilityRole: "button" };
  const intl = arg1(dependencyMap[11]).intl;
  obj.accessibilityLabel = intl.string(_74KqrR);
  obj1 = { style: items3, border: "subtle" };
  const items3 = [, ];
  ({ card: arr4[0], cardWatchTask: arr4[1] } = tmp);
  let tmp18Result = isHeroVideoSupportedResult;
  if (isHeroVideoSupportedResult) {
    const obj2 = { style: tmp.videoPreviewWrapper };
    obj3 = { style: tmp.videoPreview };
    let url;
    if (null != memo1) {
      url = memo1.url;
    }
    obj3.poster = url;
    const obj4 = { uri: memo.url };
    obj3.source = obj4;
    const items4 = [callback(arg1(dependencyMap[20]).VideoComponent, obj3), ];
    const obj5 = { start: {}, end: { "Null": "innocent", "Null": "innocent" }, style: StyleSheet.absoluteFill, colors: [null, null] };
    items4[1] = callback(importDefault(dependencyMap[21]), obj5);
    obj2.children = items4;
    tmp18Result = callback2(closure_4, obj2);
    const tmp18 = callback2;
    const tmp19 = closure_4;
    const tmp20 = callback;
  }
  const items5 = [tmp18Result, , , ];
  let tmp28 = !isHeroVideoSupportedResult && null != memo2;
  if (tmp28) {
    const obj6 = { style: tmp.videoPreviewWrapper };
    const obj7 = { style: tmp.videoPreview };
    const obj8 = { uri: memo2.url };
    obj7.source = obj8;
    obj7.resizeMode = "cover";
    const items6 = [callback(importDefault(dependencyMap[22]), obj7), ];
    const obj9 = { start: {}, end: { "Null": "innocent", "Null": "innocent" }, style: StyleSheet.absoluteFill, colors: [null, null] };
    items6[1] = callback(importDefault(dependencyMap[21]), obj9);
    obj6.children = items6;
    tmp28 = callback2(closure_4, obj6);
  }
  items5[1] = tmp28;
  const obj10 = { style: tmp.playVideoIconWrapper };
  const items7 = [callback(importDefault(dependencyMap[23]), { blurTheme: "light" }), ];
  const obj11 = { color: importDefault(dependencyMap[5]).colors.WHITE };
  items7[1] = callback(arg1(dependencyMap[24]).PlayIcon, obj11);
  obj10.children = items7;
  items5[2] = callback2(closure_4, obj10);
  const tmp15 = callback;
  const tmp16 = callback2;
  const watchTaskPressHandler = obj1.useWatchTaskPressHandler(obj);
  const items8 = [, ];
  ({ content: arr9[0], contentWatchTask: arr9[1] } = tmp);
  items5[3] = callback(closure_4, { style: items8, children: callback(importDefault(dependencyMap[15]), obj13) });
  obj1.children = items5;
  obj.children = tmp16(arg1(dependencyMap[14]).Card, obj1);
  return tmp15(arg1(dependencyMap[19]).PressableOpacity, obj);
};
export const QuestBottomSheetProgressCardInGameTask = function QuestBottomSheetProgressCardInGameTask(quest) {
  quest = quest.quest;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const thirdPartyTaskDetails = obj.useThirdPartyTaskDetails(quest);
  obj = { style: tmp.card, border: "subtle" };
  obj = { style: tmp.content };
  const obj1 = { quest, size: "lg" };
  let percentComplete;
  if (null != thirdPartyTaskDetails) {
    percentComplete = thirdPartyTaskDetails.percentComplete;
  }
  let num = 0;
  if (null != percentComplete) {
    num = percentComplete;
  }
  obj1.progress = num;
  obj1.hasConfetti = true;
  obj.children = closure_7(importDefault(dependencyMap[15]), obj1);
  obj.children = closure_7(closure_4, obj);
  return closure_7(arg1(dependencyMap[14]).Card, obj);
};
