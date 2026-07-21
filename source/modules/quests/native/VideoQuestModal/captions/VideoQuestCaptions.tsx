// Module ID: 13920
// Function ID: 105817
// Name: VideoQuestCaptions
// Dependencies: []
// Exports: VideoQuestCaptions

// Module 13920 (VideoQuestCaptions)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { bottom: importDefault(dependencyMap[4]).space.PX_32, left: importDefault(dependencyMap[4]).space.PX_16, right: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
const obj1 = {};
const importDefaultResult = importDefault(dependencyMap[5]);
const importDefaultResultResult = importDefault(dependencyMap[5])(importDefault(dependencyMap[4]).unsafe_rawColors.BLACK);
obj1.backgroundColor = importDefault(dependencyMap[5])(importDefault(dependencyMap[4]).unsafe_rawColors.BLACK).alpha(0.35).hex();
obj1.padding = importDefault(dependencyMap[4]).space.PX_8;
obj1.borderRadius = importDefault(dependencyMap[4]).radii.sm;
obj1.overflow = "hidden";
obj.captionBox = obj1;
const alphaResult = importDefault(dependencyMap[5])(importDefault(dependencyMap[4]).unsafe_rawColors.BLACK).alpha(0.35);
obj.captionText = { color: importDefault(dependencyMap[4]).colors.WHITE, textAlign: "center" };
let closure_6 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[4]).colors.WHITE, textAlign: "center" };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx");

export const VideoQuestCaptions = function VideoQuestCaptions(currentTime) {
  let quest;
  let style;
  currentTime = currentTime.currentTime;
  const arg1 = currentTime;
  let flag = currentTime.visible;
  ({ quest, style } = currentTime);
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let dependencyMap;
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  const videoQuestCaptions = obj.useVideoQuestCaptions(quest);
  const captions = videoQuestCaptions.captions;
  dependencyMap = captions;
  const items = [captions, currentTime, flag];
  const memo = React.useMemo(() => {
    let findActiveCaptionResult = null;
    if (null != captions) {
      findActiveCaptionResult = null;
      if (flag) {
        findActiveCaptionResult = currentTime(captions[7]).findActiveCaption(captions, currentTime);
        const obj = currentTime(captions[7]);
      }
    }
    return findActiveCaptionResult;
  }, items);
  let tmp4 = null;
  if ("success" === videoQuestCaptions.status) {
    tmp4 = null;
    if (null != memo) {
      obj = { "Bool(true)": "isArray", "Bool(true)": "isArray", "Bool(true)": "isArray", "Bool(true)": "accessibilityRole" };
      const items1 = [tmp.container, style];
      obj.style = items1;
      obj = { 1649621859: 0, 1387052113: 0, -550975292: 0, 1370110562: 1000, style: tmp.captionBox };
      const obj1 = { variant: "heading-sm/medium", style: tmp.captionText, children: memo.text };
      obj.children = jsx(arg1(dependencyMap[9]).Text, obj1);
      obj.children = jsx(importDefault(dependencyMap[8]), obj);
      tmp4 = <View {...obj} />;
      const tmp9 = importDefault(dependencyMap[8]);
    }
  }
  return tmp4;
};
