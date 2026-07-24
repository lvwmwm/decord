// Module ID: 14100
// Function ID: 108391
// Name: VideoQuestModalHeader
// Dependencies: [31, 27, 6943, 33, 4130, 689, 14072, 10493, 6964, 3743, 10503, 4126, 1212, 14095, 2]
// Exports: default

// Module 14100 (VideoQuestModalHeader)
import "result";
import { View } from "get ActivityIndicator";
import { useVideoQuestUIStore } from "_toPropertyKey";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { videoContentHeaderWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" } };
_createForOfIteratorHelperLoose = { flexDirection: "column", flexShrink: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.videoContentHeading = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subheader = { opacity: 0.6 };
let obj1 = { margin: -15, padding: 15, textShadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
_createForOfIteratorHelperLoose.textShadow = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_toPropertyKey").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

export default function VideoQuestModalHeader(showCurrentVideoTime) {
  let closeButtonIconColor;
  let onClose;
  let style;
  showCurrentVideoTime = showCurrentVideoTime.showCurrentVideoTime;
  let tmp = undefined !== showCurrentVideoTime;
  ({ closeButtonIconColor, onClose, style } = showCurrentVideoTime);
  if (tmp) {
    tmp = showCurrentVideoTime;
  }
  const withTextShadow = showCurrentVideoTime.withTextShadow;
  let textShadow = undefined !== withTextShadow && withTextShadow;
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = quest(14072);
  quest = obj.useVideoQuestModalContext().quest;
  let obj1 = quest(10493);
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const tmp4 = useVideoQuestUIStore((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (null == tmp) {
      const obj = { timestampSec: questTaskDetails.progressSeconds, duration: questTaskDetails.targetSeconds, maxTimestampSec: questTaskDetails.progressSeconds };
      tmp = obj;
    }
    const result = quest(outer1_2[8]).parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    const obj2 = quest(outer1_2[8]);
    return quest(outer1_2[8]).formatWatchTaskTime(result.minutes, result.seconds);
  }, quest(3743).shallow);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  if (null == completedAt) {
    let obj2 = quest(10503);
    const videoQuestProgressRemainingAccessibilityLabel = obj2.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp6);
  }
  obj = { style: items };
  items = [tmp2.videoContentHeaderWrapper, style];
  obj = { style: tmp2.videoContentHeading };
  obj1 = { variant: "heading-md/semibold", color: "text-overlay-light" };
  let textShadow2 = textShadow;
  if (textShadow) {
    textShadow2 = tmp2.textShadow;
  }
  obj1.style = textShadow2;
  const intl = quest(1212).intl;
  obj2 = { questName: quest.config.messages.questName };
  obj1.children = intl.formatToPlainString(quest(1212).t.EQa7os, obj2);
  const items1 = [callback(quest(4126).Text, obj1), ];
  const obj3 = { variant: "heading-sm/semibold", color: "text-overlay-light", accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel };
  const items2 = [tmp2.subheader, ];
  if (textShadow) {
    textShadow = tmp2.textShadow;
  }
  items2[1] = textShadow;
  obj3.style = items2;
  let gamePublisher = tmp4;
  if (null != completedAt) {
    gamePublisher = tmp4;
    if (!tmp) {
      gamePublisher = quest.config.messages.gamePublisher;
    }
  }
  obj3.children = gamePublisher;
  items1[1] = callback(quest(4126).Text, obj3);
  obj.children = items1;
  const items3 = [closure_6(View, obj), callback(questTaskDetails(14095), { iconColor: closeButtonIconColor, onClose })];
  obj.children = items3;
  return closure_6(View, obj);
};
