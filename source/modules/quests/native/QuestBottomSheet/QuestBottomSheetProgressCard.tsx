// Module ID: 14055
// Function ID: 108094
// Name: StyleSheet
// Dependencies: [31, 27, 1849, 33, 4130, 689, 10464, 10472, 566, 9463, 6963, 1212, 4126, 4983, 5167, 14027, 9458, 14019, 10919, 4660, 8302, 4554, 5085, 14056, 8286, 2]
// Exports: QuestBottomSheetProgressCardInGameTask, QuestBottomSheetProgressCardPlayStreamTask, QuestBottomSheetProgressCardWatchTask

// Module 14055 (StyleSheet)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { card: { padding: 0 }, cardWatchTask: { justifyContent: "flex-end", height: 210 } };
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentWatchTask = { alignItems: "flex-end" };
let obj1 = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
_createForOfIteratorHelperLoose.footer = obj1;
_createForOfIteratorHelperLoose.instructionsText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, textAlign: "center" };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3["borderRadius"] = require("_createForOfIteratorHelperLoose").modules.mobile.CARD_DEFAULT_RADIUS;
obj3["overflow"] = "hidden";
_createForOfIteratorHelperLoose.videoPreviewWrapper = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.videoPreview = {};
let obj5 = { alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, position: "absolute", left: "50%", overflow: "hidden", top: "50%", width: 60, height: 60 };
let items = [{ translateX: -30 }, { translateY: -30 }];
obj5.transform = items;
_createForOfIteratorHelperLoose.playVideoIconWrapper = obj5;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, textAlign: "center" };
let obj4 = {};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetProgressCard.tsx");

export const QuestBottomSheetProgressCardPlayStreamTask = function QuestBottomSheetProgressCardPlayStreamTask(quest) {
  quest = quest.quest;
  let dependencyMap;
  let React;
  let c4;
  let questFormattedDate;
  let gameTitle;
  let defaultRewardName;
  let c8;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = questTaskDetails(10464);
  questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = questTaskDetails(10464);
  let isQuestProgressing = obj1.useIsQuestProgressing(quest);
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
  let obj2 = questTaskDetails(10472);
  const result = obj2.supportedTaskPlatforms(quest);
  c4 = result;
  let obj3 = questTaskDetails(10464);
  questFormattedDate = obj3.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  gameTitle = quest.config.messages.gameTitle;
  let obj4 = questTaskDetails(566);
  const items = [gameTitle];
  const stateFromStores = obj4.useStateFromStores(items, () => gameTitle.getCurrentUser());
  let obj5 = questTaskDetails(9463);
  defaultRewardName = obj5.getDefaultRewardName(quest.config, stateFromStores);
  const isSponsoredPlayQuestResult = questTaskDetails(6963).isSponsoredPlayQuest(quest);
  c8 = isSponsoredPlayQuestResult;
  const items1 = [questTaskDetails, tmp5, null != claimedAt, gameTitle, defaultRewardName, isQuestProgressing, result, questFormattedDate, isSponsoredPlayQuestResult];
  const memo = React.useMemo(() => {
    if (_undefined) {
      if (!c3) {
        const intl = questTaskDetails(_undefined[11]).intl;
        let obj = {
          rewardHook() {
                const obj = { variant: "text-sm/semibold", color: "text-strong", children: outer1_7 };
                return defaultRewardName(questTaskDetails(4126).Text, obj);
              },
          date: questFormattedDate
        };
        return intl.format(questTaskDetails(_undefined[11]).t.e3OlfB, obj);
      }
    }
    if (isQuestProgressing) {
      const _Math = Math;
      const rounded = Math.ceil((questTaskDetails.targetSeconds - questTaskDetails.progressSeconds) / 60);
      const intl7 = questTaskDetails(_undefined[11]).intl;
      obj = {
        minutesLeft: rounded,
        minutesHook(children) {
            const obj = { variant: "text-sm/semibold", color: "text-strong", children };
            return defaultRewardName(questTaskDetails(4126).Text, obj);
          }
      };
      return intl7.format(questTaskDetails(_undefined[11]).t.aFaRso, obj);
    } else {
      if (c8) {
        const intl6 = questTaskDetails(_undefined[11]).intl;
        let stringResult = intl6.string(questTaskDetails(_undefined[11]).t["04ateG"]);
      } else if (_undefined2.length > 1) {
        const intl5 = questTaskDetails(_undefined[11]).intl;
        obj = { gameName: gameTitle };
        stringResult = intl5.formatToPlainString(questTaskDetails(_undefined[11]).t.E2R8VX, obj);
      } else if (questTaskDetails.taskType === questTaskDetails(_undefined[13]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
        const intl4 = questTaskDetails(_undefined[11]).intl;
        const obj1 = { gameName: gameTitle };
        stringResult = intl4.formatToPlainString(questTaskDetails(_undefined[11]).t.boMftC, obj1);
      } else if (questTaskDetails.taskType === questTaskDetails(_undefined[13]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP) {
        const intl3 = questTaskDetails(_undefined[11]).intl;
        const obj2 = { gameName: gameTitle };
        stringResult = intl3.formatToPlainString(questTaskDetails(_undefined[11]).t["9Peldf"], obj2);
      } else {
        const CONSOLE = questTaskDetails(_undefined[13]).FirstPartyQuestTaskTypesSets.CONSOLE;
        stringResult = null;
        if (CONSOLE.has(questTaskDetails.taskType)) {
          const intl2 = questTaskDetails(_undefined[11]).intl;
          const obj3 = { gameTitle };
          stringResult = intl2.formatToPlainString(questTaskDetails(_undefined[11]).t["+8JB6Y"], obj3);
        }
      }
      return stringResult;
    }
  }, items1);
  obj = { style: tmp.card, border: "subtle" };
  obj = { style: tmp.content };
  obj1 = { quest, size: "lg", progress: questTaskDetails.percentComplete };
  const obj7 = questTaskDetails(6963);
  const tmp15 = c4;
  const tmp16 = defaultRewardName;
  if (!tmp5) {
    tmp5 = isQuestProgressing;
  }
  obj1.loading = !tmp5;
  obj1.hasConfetti = true;
  const items2 = [tmp16(isQuestProgressing(14027), obj1), ];
  let tmp18 = null != memo;
  if (tmp18) {
    obj2 = { style: tmp.instructionsText, variant: "text-sm/semibold", color: "text-subtle", children: memo };
    tmp18 = defaultRewardName(questTaskDetails(4126).Text, obj2);
  }
  items2[1] = tmp18;
  obj.children = items2;
  const items3 = [c8(tmp15, obj), ];
  if (isQuestProgressing) {
    obj3 = { style: tmp.footer };
    obj4 = { color: "text-feedback-positive", variant: "text-sm/semibold" };
    let intl = questTaskDetails(1212).intl;
    obj5 = { gameName: quest.config.messages.gameTitle };
    obj4.children = intl.format(questTaskDetails(1212).t.lIFg6I, obj5);
    obj3.children = defaultRewardName(questTaskDetails(4126).Text, obj4);
    isQuestProgressing = defaultRewardName(c4, obj3);
  }
  items3[1] = isQuestProgressing;
  obj.children = items3;
  return c8(questTaskDetails(5167).Card, obj);
};
export const QuestBottomSheetProgressCardWatchTask = function QuestBottomSheetProgressCardWatchTask(quest) {
  quest = quest.quest;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = quest(10464);
  const items = [quest];
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const memo = React.useMemo(() => quest(outer1_2[16]).getQuestAsset(quest, quest(outer1_2[16]).QuestAssetType.QUEST_BAR_HERO_VIDEO), items);
  const items1 = [quest];
  const memo1 = React.useMemo(() => quest(outer1_2[16]).getQuestAsset(quest, quest(outer1_2[16]).QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true), items1);
  const items2 = [quest];
  const memo2 = React.useMemo(() => quest(outer1_2[16]).getQuestAsset(quest, quest(outer1_2[16]).QuestAssetType.QUEST_BAR_HERO_IMAGE), items2);
  let obj1 = quest(14019);
  obj = { questId: quest.id, sourceQuestContent: quest.sourceQuestContent };
  let isHeroVideoSupportedResult = null != memo;
  if (isHeroVideoSupportedResult) {
    let obj3 = quest(10919);
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
  const intl = quest(1212).intl;
  obj.accessibilityLabel = intl.string(_74KqrR);
  obj1 = { style: items3, border: "subtle" };
  items3 = [, ];
  ({ card: arr4[0], cardWatchTask: arr4[1] } = tmp);
  let tmp18Result = isHeroVideoSupportedResult;
  if (isHeroVideoSupportedResult) {
    const obj2 = { style: tmp.videoPreviewWrapper };
    obj3 = { style: tmp.videoPreview, poster: null, posterResizeMode: "cover", source: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    let url;
    if (null != memo1) {
      url = memo1.url;
    }
    obj3.poster = url;
    const obj4 = { uri: memo.url };
    obj3.source = obj4;
    const items4 = [callback(quest(8302).VideoComponent, obj3), ];
    const obj5 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items4[1] = callback(importDefault(4554), obj5);
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
    const items6 = [callback(importDefault(5085), obj7), ];
    const obj9 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items6[1] = callback(importDefault(4554), obj9);
    obj6.children = items6;
    tmp28 = callback2(closure_4, obj6);
  }
  items5[1] = tmp28;
  const obj10 = { style: tmp.playVideoIconWrapper };
  const items7 = [callback(importDefault(14056), { blurTheme: "light" }), ];
  const obj11 = { color: importDefault(689).colors.WHITE };
  items7[1] = callback(quest(8286).PlayIcon, obj11);
  obj10.children = items7;
  items5[2] = callback2(closure_4, obj10);
  const tmp15 = callback;
  const tmp16 = callback2;
  const watchTaskPressHandler = obj1.useWatchTaskPressHandler(obj);
  const items8 = [, ];
  ({ content: arr9[0], contentWatchTask: arr9[1] } = tmp);
  items5[3] = callback(closure_4, { style: items8, children: callback(importDefault(14027), obj13) });
  obj1.children = items5;
  obj.children = tmp16(quest(5167).Card, obj1);
  return tmp15(quest(4660).PressableOpacity, obj);
};
export const QuestBottomSheetProgressCardInGameTask = function QuestBottomSheetProgressCardInGameTask(quest) {
  quest = quest.quest;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(10464) /* _createForOfIteratorHelperLoose */;
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
  obj.children = closure_7(importDefault(14027), obj1);
  obj.children = closure_7(closure_4, obj);
  return closure_7(require(5167) /* getCardBackgroundToken */.Card, obj);
};
