// Module ID: 14689
// Function ID: 14690
// Name: QuestBottomSheetProgressCard
// Dependencies: [19, 17, 1372, 21, 4836, 576, 10681, 10719, 504, 10694, 7135, 1115, 4832, 5764, 5919, 14662, 10689, 14654, 10678, 14649, 5435, 7755, 5293, 5899, 14690, 7722, 2]
// Exports: QuestBottomSheetProgressCardInGameTask, QuestBottomSheetProgressCardPlayStreamTask, QuestBottomSheetProgressCardWatchTask

// Module 14689 (QuestBottomSheetProgressCard)
import nativeDefault from "native" /* 576 */;
import intl8 from "intl" /* 1115 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5764 */;
import FastImageDefault from "FastImage" /* 5899 */;
import Card_Card from "Card/Card" /* 5919 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10681 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 14649 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 14662 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 14690 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_4;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: { padding: 0 }, cardWatchTask: { justifyContent: "flex-end", height: 210 }, content: obj2, contentWatchTask: { alignItems: "flex-end" }, footer: obj3, instructionsText: obj4, videoPreviewWrapper: obj5, videoPreview: obj6, playVideoIconWrapper: size };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: 12, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj4 = { marginTop: nativeDefault.space.PX_12, textAlign: "center" };
obj5 = { borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, overflow: "hidden" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, position: "absolute", left: "50%", overflow: "hidden", top: "50%", width: 60, height: 60, transform: items };
items = [{ translateX: -30 }, { translateY: -30 }];
let closure_9 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetProgressCard.tsx");

export const QuestBottomSheetProgressCardPlayStreamTask = function QuestBottomSheetProgressCardPlayStreamTask(quest) {
  let Text;
  let closure_2;
  let closure_3;
  let intl;
  let items2;
  let items3;
  let length;
  let obj8;
  let obj9;
  quest = quest.quest;
  let questTaskDetails;
  dependencyMap = undefined;
  react = undefined;
  let c4;
  let questFormattedDate;
  let gameTitle;
  let defaultRewardName;
  let c8;
  let tmp = closure_9();
  let tmp2 = questTaskDetails;
  let obj = questTaskDetails(10681);
  questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj2 = questTaskDetails(10681);
  let isQuestProgressing = obj2.useIsQuestProgressing(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp7 = null != completedAt;
  dependencyMap = tmp7;
  const userStatus2 = quest.userStatus;
  let claimedAt;
  if (userStatus2 != null) {
    claimedAt = userStatus2.claimedAt;
  }
  let tmp9 = null != claimedAt;
  react = tmp9;
  const tmp2Result = tmp2(10719);
  const result = tmp2Result.supportedTaskPlatforms(quest);
  c4 = result;
  const tmp2Result5 = tmp2(10681);
  questFormattedDate = tmp2Result5.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  gameTitle = quest.config.messages.gameTitle;
  const items = [gameTitle];
  const tmp2Result6 = tmp2(504);
  const stateFromStores = tmp2Result6.useStateFromStores(items, () => gameTitle.getCurrentUser());
  const tmp2Result7 = tmp2(10694);
  defaultRewardName = tmp2Result7.getDefaultRewardName(quest.config, stateFromStores);
  const tmp2Result8 = tmp2(7135);
  const isSponsoredPlayQuestResult = tmp2Result8.isSponsoredPlayQuest(quest);
  c8 = isSponsoredPlayQuestResult;
  const items1 = [questTaskDetails, tmp7, tmp9, gameTitle, defaultRewardName, isQuestProgressing, result, questFormattedDate, isSponsoredPlayQuestResult];
  const memo = react.useMemo(() => {
    let children;
    const tmp = closure_2;
    if (tmp) {
      const tmp2 = closure_3;
      if (!tmp2) {
        const intl = intl8.intl;
        let obj = {
          rewardHook() {
                const obj = { variant: "text-sm/semibold", color: "text-strong", children };
                return defaultRewardName(questTaskDetails(closure_2[12]).Text, obj);
              },
          date: questFormattedDate
        };
        return intl.format(intl8.t.e3OlfB, obj);
      }
    }
    const tmp8 = isQuestProgressing;
    if (tmp8) {
      const _Math = Math;
      const rounded = Math.ceil((questTaskDetails.targetSeconds - questTaskDetails.progressSeconds) / 60);
      const intl7 = intl8.intl;
      const obj2 = {
        minutesLeft: rounded,
        minutesHook(children) {
            const obj = { variant: "text-sm/semibold", color: "text-strong", children };
            return children(questTaskDetails(closure_1_2[12]).Text, obj);
          }
      };
      return intl7.format(intl8.t.aFaRso, obj2);
    } else {
      let stringResult;
      const tmp9 = c8;
      if (tmp9) {
        const intl6 = intl8.intl;
        stringResult = intl6.string(intl8.t["04ateG"]);
      } else if (length.length > 1) {
        const intl5 = intl8.intl;
        const obj3 = { gameName: gameTitle };
        stringResult = intl5.formatToPlainString(intl8.t.E2R8VX, obj3);
      } else if (questTaskDetails.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP) {
        const intl4 = intl8.intl;
        const obj4 = { gameName: gameTitle };
        stringResult = intl4.formatToPlainString(intl8.t.boMftC, obj4);
      } else if (questTaskDetails.taskType === FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP) {
        const intl3 = intl8.intl;
        const obj5 = { gameName: gameTitle };
        stringResult = intl3.formatToPlainString(intl8.t["9Peldf"], obj5);
      } else {
        const CONSOLE = FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypesSets.CONSOLE;
        stringResult = null;
        if (CONSOLE.has(questTaskDetails.taskType)) {
          const intl2 = intl8.intl;
          const obj6 = { gameTitle };
          stringResult = intl2.formatToPlainString(intl8.t["+8JB6Y"], obj6);
        }
      }
      return stringResult;
    }
  }, items1);
  let obj3 = { style: tmp.card, border: "subtle", children: items3 };
  let obj4 = { style: tmp.content, children: items2 };
  const Card = tmp2(5919).Card;
  let obj5 = { quest, size: "lg", progress: questTaskDetails.percentComplete, loading: !tmp7, hasConfetti: true };
  const tmp19 = isQuestProgressing(14662);
  if (!tmp7) {
    tmp7 = isQuestProgressing;
  }
  items2 = [tmp18(tmp19, obj5), ];
  let tmp18Result = null != memo;
  if (tmp18Result) {
    let obj6 = { style: tmp.instructionsText, variant: "text-sm/semibold", color: "text-subtle", children: memo };
    tmp18Result = tmp18(tmp2(4832).Text, obj6);
  }
  items2[1] = tmp18Result;
  items3 = [c8(tmp17, obj4), ];
  if (isQuestProgressing) {
    const obj7 = { style: tmp.footer, children: defaultRewardName(Text, obj8) };
    obj8 = { color: "text-feedback-positive", variant: "text-sm/semibold", children: intl.format(tmp2(1115).t.lIFg6I, obj9) };
    Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    obj9 = { gameName: quest.config.messages.gameTitle };
    isQuestProgressing = tmp18(tmp17, obj7);
  }
  items3[1] = isQuestProgressing;
  return c8(Card, obj3);
};
export const QuestBottomSheetProgressCardWatchTask = function QuestBottomSheetProgressCardWatchTask(quest) {
  let Card;
  let YsCuyF;
  let intl;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj12;
  let obj17;
  let obj5;
  let obj8;
  let url;
  quest = quest.quest;
  const sourceQuestContent = quest.sourceQuestContent;
  const tmp = closure_9();
  let obj = quest(10681);
  const items = [quest];
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_VIDEO);
  }, items);
  const items1 = [quest];
  const memo1 = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.VIDEO_PLAYER_THUMBNAIL, undefined, true);
  }, items1);
  const items2 = [quest];
  const memo2 = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO_IMAGE);
  }, items2);
  let isHeroVideoSupportedResult = null != memo;
  const obj2 = quest(14654);
  const obj3 = { questId: quest.id, sourceQuestContent };
  const watchTaskPressHandler = obj2.useWatchTaskPressHandler(obj3);
  if (isHeroVideoSupportedResult) {
    const tmp2Result = quest(10678);
    isHeroVideoSupportedResult = tmp2Result.isHeroVideoSupported(memo.mimetype);
  }
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    YsCuyF = tmp2(1115).t.YsCuyF;
  } else {
    YsCuyF = tmp2(1115).t["74KqrR"];
  }
  let tmp12 = watchTaskPressHandler;
  const tmp2Result2 = quest(10681);
  if (tmp2Result2.useIsQuestAccessSuspended()) {
    tmp12 = openQuestAccessSuspendedBottomSheetDefault;
  }
  const obj4 = { onPress: tmp12, accessibilityRole: "button", accessibilityLabel: intl.string(YsCuyF), children: closure_8(Card, obj5) };
  const PressableOpacity = tmp2(5435).PressableOpacity;
  intl = tmp2(1115).intl;
  obj5 = { style: items3, border: "subtle", children: items5 };
  items3 = [, ];
  ({ card: arr4[0], cardWatchTask: arr4[1] } = tmp);
  let tmp15Result = isHeroVideoSupportedResult;
  Card = tmp2(5919).Card;
  if (isHeroVideoSupportedResult) {
    const obj7 = { style: tmp.videoPreview, poster: url, posterResizeMode: "cover", source: obj8, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    url = undefined;
    const obj6 = { style: tmp.videoPreviewWrapper, children: items4 };
    const VideoComponent = tmp2(7755).VideoComponent;
    const tmp17 = closure_4;
    if (memo1 != null) {
      url = memo1.url;
    }
    obj8 = { uri: memo.url };
    items4 = [closure_7(VideoComponent, obj7), ];
    const obj9 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items4[1] = closure_7(LinearGradientDefault, obj9);
    tmp15Result = tmp15(tmp17, obj6);
  }
  items5 = [tmp15Result, , , ];
  let tmp15Result2 = !isHeroVideoSupportedResult && null != memo2;
  if (tmp15Result2) {
    const obj11 = { style: tmp.videoPreview, source: obj12, resizeMode: "cover" };
    const obj10 = { style: tmp.videoPreviewWrapper, children: items6 };
    obj12 = { uri: memo2.url };
    items6 = [closure_7(FastImageDefault, obj11), ];
    const obj13 = { start: { x: 0.5, y: 0.5 }, end: { x: 1, y: 1 }, style: StyleSheet.absoluteFill, colors: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] };
    items6[1] = closure_7(LinearGradientDefault, obj13);
    tmp15Result2 = tmp15(closure_4, obj10);
  }
  items5[1] = tmp15Result2;
  const obj14 = { style: tmp.playVideoIconWrapper, children: items7 };
  items7 = [closure_7(QuestDockBlurredContentBackgroundDefault, { blurTheme: "light" }), ];
  const obj15 = { color: nativeDefault.colors.WHITE };
  const PlayIcon = tmp2(7722).PlayIcon;
  items7[1] = closure_7(PlayIcon, obj15);
  items5[2] = closure_8(closure_4, obj14);
  const obj16 = { style: items8, children: closure_7(QuestProgressIndicatorDefault, obj17) };
  items8 = [, ];
  ({ content: arr9[0], contentWatchTask: arr9[1] } = tmp);
  obj17 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, hasConfetti: true };
  items5[3] = closure_7(closure_4, obj16);
  return closure_7(PressableOpacity, obj4);
};
export const QuestBottomSheetProgressCardInGameTask = function QuestBottomSheetProgressCardInGameTask(quest) {
  let num;
  let obj3;
  let obj4;
  let tmp4;
  let tmp5;
  quest = quest.quest;
  const tmp = closure_9();
  const obj = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj.useThirdPartyTaskDetails(quest);
  const obj2 = { style: tmp.card, border: "subtle", children: metroImportDefault(tmp4, obj3) };
  obj3 = { style: tmp.content, children: metroImportDefault(tmp5, obj4) };
  const Card = Card_Card.Card;
  obj4 = { quest, size: "lg", progress: num, hasConfetti: true };
  num = undefined;
  tmp4 = React3;
  tmp5 = QuestProgressIndicatorDefault;
  if (thirdPartyTaskDetails != null) {
    num = thirdPartyTaskDetails.percentComplete;
  }
  if (num == null) {
    num = 0;
  }
  return metroImportDefault(Card, obj2);
};
