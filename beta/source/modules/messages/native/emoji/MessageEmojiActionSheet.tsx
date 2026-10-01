// Module ID: 9790
// Function ID: 9791
// Name: MessageEmojiActionSheet
// Dependencies: [19, 17, 1074, 21, 4836, 1364, 1255, 6571, 1241, 9791, 9798, 9799, 2]
// Exports: default

// Module 9790 (MessageEmojiActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

function MessageStandardEmojiActionSheet(emojiNode) {
  let nonce;
  _require = undefined;
  emojiNode = emojiNode.emojiNode;
  const tmp = closure_6();
  let obj = require("v1");
  _require = obj.v4();
  const v4Result = obj.v4();
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  return <BottomSheet startExpanded onDismiss={function onDismiss() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { nonce };
    obj.track(AnalyticEvents.CLOSE_POPOUT, obj2);
  }}>{null}</BottomSheet>;
}
function MessageCustomEmojiActionSheet(emojiNode) {
  let nonce;
  emojiNode = emojiNode.emojiNode;
  _require = undefined;
  const tmp = closure_6();
  let obj = require("useEmojiAndSource");
  let obj2 = { emojiId: emojiNode.id };
  const emojiAndSource = obj.useEmojiAndSource(obj2);
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    const tmp2Result = require("v1");
    const v4Result = tmp2Result.v4();
    _require = v4Result;
    BottomSheet = tmp2(6571).BottomSheet;
    return <BottomSheet startExpanded onDismiss={function onDismiss() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { nonce };
      obj.track(AnalyticEvents.CLOSE_POPOUT, obj2);
    }}>{null}</BottomSheet>;
  }
}
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj = { contentWrapper: { paddingHorizontal: 16, paddingBottom: num } };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

export default function MessageEmojiActionSheet(emojiNode) {
  let tmpResult;
  emojiNode = emojiNode.emojiNode;
  if ("surrogate" in emojiNode) {
    const obj2 = { emojiNode };
    tmpResult = tmp(MessageStandardEmojiActionSheet, obj2);
  } else {
    const obj = { emojiNode };
    tmpResult = tmp(MessageCustomEmojiActionSheet, obj);
  }
  return tmpResult;
};
