// Module ID: 12250
// Function ID: 95661
// Dependencies: [31, 27, 33, 4131, 689, 10488, 4127, 1212, 4544, 3828, 2]

// Module 12250
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: require("_createForOfIteratorHelperLoose").space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
obj.container = obj;
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.text = _createForOfIteratorHelperLoose;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function MediaModalYoutubeEmbedError(videoId) {
  videoId = videoId.videoId;
  const tmp = callback3();
  let obj = { style: tmp.container };
  const items = [callback(videoId(10488).StreamFailed, { resizeMode: "contain" }), , ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light" };
  const intl = videoId(1212).intl;
  obj.children = intl.string(videoId(1212).t.u7vKPs);
  items[1] = callback(videoId(4127).Text, obj);
  obj = { text: null, variant: "primary-overlay", shrink: true, grow: false };
  const intl2 = videoId(1212).intl;
  obj.text = intl2.string(videoId(1212).t.LLpxJ5);
  obj.onPress = function onPress() {
    outer1_1(outer1_2[9]).openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = callback(videoId(4544).Button, obj);
  obj.children = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default memoResult;
