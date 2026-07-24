// Module ID: 14091
// Function ID: 108336
// Name: VideoQuestCaptions
// Dependencies: [31, 27, 33, 4130, 689, 666, 14092, 14094, 4533, 4126, 2]
// Exports: VideoQuestCaptions

// Module 14091 (VideoQuestCaptions)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "t";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", bottom: require("_createForOfIteratorHelperLoose").space.PX_32, left: require("_createForOfIteratorHelperLoose").space.PX_16, right: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", justifyContent: "flex-end" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = {};
const importDefaultResultResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK);
obj1.backgroundColor = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK).alpha(0.35).hex();
obj1.padding = require("_createForOfIteratorHelperLoose").space.PX_8;
obj1.borderRadius = require("_createForOfIteratorHelperLoose").radii.sm;
obj1.overflow = "hidden";
_createForOfIteratorHelperLoose.captionBox = obj1;
const alphaResult = require("t")(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK).alpha(0.35);
_createForOfIteratorHelperLoose.captionText = { color: require("_createForOfIteratorHelperLoose").colors.WHITE, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE, textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx");

export const VideoQuestCaptions = function VideoQuestCaptions(currentTime) {
  let quest;
  let style;
  currentTime = currentTime.currentTime;
  let flag = currentTime.visible;
  ({ quest, style } = currentTime);
  if (flag === undefined) {
    flag = true;
  }
  let captions;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = currentTime(captions[6]);
  const videoQuestCaptions = obj.useVideoQuestCaptions(quest);
  captions = videoQuestCaptions.captions;
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
      obj = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false };
      const items1 = [tmp.container, style];
      obj.style = items1;
      obj = { style: tmp.captionBox, blurTheme: "dark", blurStyle: "default", blurAmount: 0.2 };
      const obj1 = { variant: "heading-sm/medium", style: tmp.captionText, children: memo.text };
      obj.children = jsx(currentTime(captions[9]).Text, { variant: "heading-sm/medium", style: tmp.captionText, children: memo.text });
      obj.children = jsx(flag(captions[8]), { style: tmp.captionBox, blurTheme: "dark", blurStyle: "default", blurAmount: 0.2 });
      tmp4 = <View style={tmp.captionBox} blurTheme="dark" blurStyle="default" blurAmount={0.2} />;
      const tmp9 = flag(captions[8]);
    }
  }
  return tmp4;
};
