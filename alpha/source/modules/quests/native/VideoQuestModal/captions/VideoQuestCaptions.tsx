// Module ID: 17109
// Function ID: 17110
// Name: VideoQuestCaptions
// Dependencies: [19, 17, 21, 5014, 575, 671, 17110, 17112, 5600, 5624, 2]
// Exports: VideoQuestCaptions

// Module 17109 (VideoQuestCaptions)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import VideoQuestCaptionsUtils from "VideoQuestCaptionsUtils" /* 17112 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import module_671 from "module_671" /* 671 */;
import size from "module_2" /* 2 */;

let alphaResult;
let obj2;
let obj3;
let rect;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: rect, captionBox: obj2, captionText: obj3 };
rect = { position: "absolute", bottom: nativeDefault.space.PX_32, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "flex-end" };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: alphaResult.hex(), padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const importDefaultResultResult = module_671(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.35);
obj3 = { color: nativeDefault.colors.WHITE, textAlign: "center" };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx");

export function VideoQuestCaptions(currentTime) {
  let quest;
  let style;
  currentTime = currentTime.currentTime;
  let flag = currentTime.visible;
  ({ quest, style } = currentTime);
  if (flag === undefined) {
    flag = true;
  }
  let captions;
  const tmp = closure_6();
  let obj = currentTime(captions[6]);
  const videoQuestCaptions = obj.useVideoQuestCaptions(quest);
  const tmp3 = captions;
  captions = videoQuestCaptions.captions;
  const items = [captions, currentTime, flag];
  const status = videoQuestCaptions.status;
  const memo = react.useMemo(() => {
    let findActiveCaptionResult = null;
    if (null != captions) {
      findActiveCaptionResult = null;
      if (flag) {
        const obj = VideoQuestCaptionsUtils;
        findActiveCaptionResult = obj.findActiveCaption(tmp, currentTime);
      }
    }
    return findActiveCaptionResult;
  }, items);
  let tmp6 = null;
  if ("success" === status) {
    tmp6 = null;
    if (null != memo) {
      const items1 = [tmp.container, style];
      flag(tmp3[8]);
      tmp6 = <View style={items1} importantForAccessibility="no-hide-descendants" accessibilityRole="none" accessible={false}>{null}</View>;
    }
  }
  return tmp6;
}
