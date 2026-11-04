// Module ID: 13893
// Function ID: 13894
// Name: EmojiCube
// Dependencies: [32, 17, 5142, 6201, 21, 5141, 1357, 575, 504, 1493, 1411, 7436, 2]
// Exports: default

// Module 13893 (EmojiCube)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 6201 */;
import EmojiDefault from "Emoji" /* 7436 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import createStyles_mod from "createStyles" /* 5141 */;
import PlatformUtils_mod from "utils/PlatformUtils" /* 1357 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let num2;
let obj2;
let tmp10;
let tmp11;
let tmp4;
let tmp5;
let tmp7;
let tmp8;
function createFaceTransforms(items, items2, items1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  [tmp, tmp2] = items;
  [tmp3, tmp4] = items2;
  [tmp5, tmp6] = items1;
  const result = Math.atan2(2 * (tmp * tmp3 + tmp2 * tmp4), tmp * tmp + tmp2 * tmp2 - tmp3 * tmp3 - tmp4 * tmp4) / 2;
  const cosResult = Math.cos(result);
  const sinResult = Math.sin(result);
  const sum = tmp * cosResult + tmp3 * sinResult;
  const sum1 = tmp2 * cosResult + tmp4 * sinResult;
  const hypotResult = Math.hypot(sum, sum1);
  const obj = { transform: items };
  items = [, , , , ];
  const obj2 = { translateX: tmp5 * c6 / 2 };
  items[0] = obj2;
  items[1] = { translateY: tmp6 * c6 / 2 };
  items[2] = { rotate: "" + Math.atan2(sum1, sum) + "rad" };
  items[3] = { scaleX: hypotResult };
  items[4] = { scaleY: (tmp * tmp4 - tmp3 * tmp2) / hypotResult };
  items1 = [obj, ];
  const obj4 = { transform: items2 };
  items2 = [];
  const obj5 = { rotate: `${-tmp7}rad` };
  items2[0] = obj5;
  items1[1] = obj4;
  ({ rotate: "" + Math.atan2(sum1, sum) + "rad" });
  return items1;
}
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let c6 = 200;
let items = [0.8322767019271851, -0.37332993745803833];
let items1 = [0.5543603897094727, 0.560490608215332];
let items2 = [0, 0.739239513874054];
let items3 = [-items2[0], -items2[1]];
let items4 = [-items[0], -items[1]];
[tmp4, tmp5] = createFaceTransforms(items, items1, items3);
_slicedToArray(createFaceTransforms(items, items1, items3), 2);
[tmp7, tmp8] = createFaceTransforms(items1, items2, items4);
_slicedToArray(createFaceTransforms(items1, items2, items4), 2);
[tmp10, tmp11] = createFaceTransforms(items, items2, items1);
_slicedToArray(createFaceTransforms(items, items2, items1), 2);
let createStyles = createStyles_mod;
let obj = { container: { position: "relative", width: 200, height: 200 }, face: { position: "absolute", top: 0, left: 0, width: 200, height: 200 }, emoji: { position: "absolute", top: 0, left: 0, width: 200, height: 200, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, overflow: "hidden" }, customEmoji: { width: 196, height: 196 }, textEmoji: obj2, topFace: tmp4, leftFace: tmp7, rightFace: tmp10, topEmoji: tmp5, leftEmoji: tmp8, rightEmoji: tmp11 };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 196;
if (PlatformUtils.isIOS()) {
  num = 200;
}
obj2 = { fontSize: num, lineHeight: num2, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 229.99999999999997;
}
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/emoji/EmojiCube.tsx");

export default function EmojiCube(emoji) {
  let closure_2;
  let items2;
  let tmp7;
  let useReducedMotion;
  emoji = emoji.emoji;
  let emojiURL;
  dependencyMap = undefined;
  const style = emoji.style;
  const tmp = dependencyMap;
  let items = [AccessibilityStore];
  const obj = emoji(504);
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const result = emojiURL(1493)().width / 392;
  emojiURL = undefined;
  if (null != emoji.id) {
    const obj2 = { id: emoji.id, animated: tmp7, size: 196 * result };
    tmp7 = !stateFromStores;
    const getEmojiURL = tmp3(1411).getEmojiURL;
    emojiURL(1411);
    if (!stateFromStores) {
      tmp7 = true === emoji.animated;
    }
    emojiURL = getEmojiURL(obj2);
  }
  const tmp8 = closure_7();
  dependencyMap = tmp8;
  let items1 = [tmp8.container, , ];
  const obj4 = { transform: items2 };
  items2 = [{ scale: result }];
  items1[1] = obj4;
  items1[2] = style;
  const items3 = [, ];
  ({ topFace: arr4[0], topEmoji: arr4[1] } = tmp8);
  const items4 = [items3, , ];
  const items5 = [, ];
  ({ leftFace: arr6[0], leftEmoji: arr6[1] } = tmp8);
  items4[1] = items5;
  const items6 = [, ];
  ({ rightFace: arr7[0], rightEmoji: arr7[1] } = tmp8);
  items4[2] = items6;
  return <View style={items1}>{items4.map((item, index) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const items = [closure_2.face, tmp];
    const items1 = [closure_2.emoji, tmp2];
    const str = "";
    EmojiDefault;
    return <tmp4 key={arg1} style={items}>{null}</tmp4>;
  })}</View>;
};
