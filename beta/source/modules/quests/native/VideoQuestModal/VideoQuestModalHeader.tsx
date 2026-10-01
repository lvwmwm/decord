// Module ID: 14684
// Function ID: 14685
// Name: VideoQuestModalHeader
// Dependencies: [19, 17, 7118, 21, 4836, 576, 14657, 10681, 7137, 4452, 10735, 4832, 1115, 14679, 2]
// Exports: default

// Module 14684 (VideoQuestModalHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import VideoQuestUIStore from "VideoQuestUIStore" /* 7118 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7137 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const useVideoQuestUIStore = VideoQuestUIStore.useVideoQuestUIStore;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { videoContentHeaderWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, videoContentHeading: obj2, textShadow: obj3 };
obj2 = { flexDirection: "column", flexShrink: 1, gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

export default function VideoQuestModalHeader(showCurrentVideoTime) {
  let closeButtonIconColor;
  let gamePublisher;
  let intl;
  let items;
  let items1;
  let items2;
  let obj6;
  let onClose;
  let quest;
  let style;
  let videoQuestProgressRemainingAccessibilityLabel;
  showCurrentVideoTime = showCurrentVideoTime.showCurrentVideoTime;
  let tmp = undefined !== showCurrentVideoTime;
  ({ closeButtonIconColor, onClose, style } = showCurrentVideoTime);
  if (tmp) {
    tmp = showCurrentVideoTime;
  }
  const withTextShadow = showCurrentVideoTime.withTextShadow;
  let textShadow = undefined !== withTextShadow && withTextShadow;
  const tmp2 = closure_7();
  let obj = quest(14657);
  quest = obj.useVideoQuestModalContext().quest;
  let obj2 = quest(10681);
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const tmp6 = useVideoQuestUIStore((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      ({ progressSeconds: obj.timestampSec, targetSeconds: obj.duration, progressSeconds: obj.maxTimestampSec } = questTaskDetails);
      tmp = obj;
    }
    const obj2 = QuestTaskUtils;
    const time = obj2.parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    const obj3 = QuestTaskUtils;
    return obj3.formatWatchTaskTime(time.minutes, time.seconds);
  }, quest(4452).shallow);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null == completedAt) {
    const tmp3Result = quest(10735);
    videoQuestProgressRemainingAccessibilityLabel = tmp3Result.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp8);
  }
  let obj3 = { style: items, children: items2 };
  items = [tmp2.videoContentHeaderWrapper, style];
  let textShadow2 = textShadow;
  const obj4 = { style: tmp2.videoContentHeading, children: items1 };
  const Text = tmp3(4832).Text;
  if (textShadow) {
    textShadow2 = tmp2.textShadow;
  }
  const obj5 = { variant: "heading-md/semibold", color: "text-overlay-light", style: textShadow2, children: intl.formatToPlainString(quest(1115).t.EQa7os, obj6) };
  intl = tmp3(1115).intl;
  obj6 = { questName: quest.config.messages.questName };
  items1 = [closure_5(Text, obj5), ];
  const obj7 = { variant: "heading-sm/semibold", color: "text-overlay-light", accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel, style: textShadow, children: gamePublisher };
  const Text2 = tmp3(4832).Text;
  if (textShadow) {
    textShadow = tmp2.textShadow;
  }
  gamePublisher = tmp6;
  if (null != completedAt) {
    gamePublisher = tmp6;
    if (!tmp) {
      gamePublisher = quest.config.messages.gamePublisher;
    }
  }
  items1[1] = closure_5(Text2, obj7);
  items2 = [closure_6(View, obj4), closure_5(questTaskDetails(14679), { iconColor: closeButtonIconColor, onClose })];
  return closure_6(View, obj3);
};
