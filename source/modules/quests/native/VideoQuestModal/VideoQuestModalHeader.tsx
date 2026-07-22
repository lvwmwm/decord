// Module ID: 13936
// Function ID: 105912
// Name: VideoQuestModalHeader
// Dependencies: []
// Exports: default

// Module 13936 (VideoQuestModalHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const useVideoQuestUIStore = arg1(dependencyMap[2]).useVideoQuestUIStore;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { videoContentHeaderWrapper: {} };
obj = { flexDirection: "onAnimationFinishCapture", alignItems: "onAnimationFinish", gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.videoContentHeading = obj;
obj.subheader = { opacity: 0.6 };
const tmp3 = arg1(dependencyMap[3]);
obj.textShadow = { textShadowColor: importDefault(dependencyMap[5]).colors.BLACK, textShadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" } };
let closure_7 = obj.createStyles(obj);
const obj1 = { textShadowColor: importDefault(dependencyMap[5]).colors.BLACK, textShadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" } };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

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
  const tmp2 = callback2();
  let obj = arg1(dependencyMap[6]);
  const quest = obj.useVideoQuestModalContext().quest;
  const arg1 = quest;
  let obj1 = arg1(dependencyMap[7]);
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  const importDefault = questTaskDetails;
  const tmp4 = useVideoQuestUIStore((arg0) => {
    let tmp = arg0.videoProgress[closure_0.id];
    if (null == tmp) {
      const obj = { timestampSec: questTaskDetails.progressSeconds, duration: questTaskDetails.targetSeconds, maxTimestampSec: questTaskDetails.progressSeconds };
      tmp = obj;
    }
    const result = quest(closure_2[8]).parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    const obj2 = quest(closure_2[8]);
    return quest(closure_2[8]).formatWatchTaskTime(result.minutes, result.seconds);
  }, arg1(dependencyMap[9]).shallow);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  if (null == completedAt) {
    let obj2 = arg1(dependencyMap[10]);
    const videoQuestProgressRemainingAccessibilityLabel = obj2.getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp6);
  }
  obj = { style: items };
  const items = [tmp2.videoContentHeaderWrapper, style];
  obj = { style: tmp2.videoContentHeading };
  obj1 = {};
  let textShadow2 = textShadow;
  if (textShadow) {
    textShadow2 = tmp2.textShadow;
  }
  obj1.style = textShadow2;
  const intl = arg1(dependencyMap[12]).intl;
  obj2 = { questName: quest.config.messages.questName };
  obj1.children = intl.formatToPlainString(arg1(dependencyMap[12]).t.EQa7os, obj2);
  const items1 = [callback(arg1(dependencyMap[11]).Text, obj1), ];
  const obj3 = { accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel };
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
  items1[1] = callback(arg1(dependencyMap[11]).Text, obj3);
  obj.children = items1;
  const items3 = [closure_6(View, obj), callback(importDefault(dependencyMap[13]), { iconColor: closeButtonIconColor, onClose })];
  obj.children = items3;
  return closure_6(View, obj);
};
