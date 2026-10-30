// Module ID: 13615
// Function ID: 13616
// Name: EmojiCube
// Dependencies: [17, 5010, 6061, 21, 13616, 5009, 1377, 575, 504, 1410, 1492, 7294, 2]
// Exports: default

// Module 13615 (EmojiCube)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import EmojiDefault from "Emoji" /* 7294 */;
import glMatrix from "glMatrix" /* 13616 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils_mod from "utils/PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let items2;
let items3;
let items4;
let num2;
let obj2;
let obj3;
let obj5;
let obj6;
function transformMatrix(items, rotation) {
  let point = rotation.rotation;
  if (point === undefined) {
    point = { x: 0, y: 0, z: 0 };
  }
  let translation = rotation.translation;
  if (translation === undefined) {
    translation = { x: 0, y: 0, z: 0 };
  }
  let point2 = rotation.skew;
  if (point2 === undefined) {
    point2 = { x: 0, y: 0, z: 0 };
  }
  const mat4 = glMatrix.mat4;
  const obj = mat4.create();
  const mat42 = glMatrix.mat4;
  mat42.copy(obj, items);
  const mat43 = glMatrix.mat4;
  mat43.rotateX(obj, obj, point.x);
  const mat44 = glMatrix.mat4;
  mat44.rotateY(obj, obj, point.y);
  const mat45 = glMatrix.mat4;
  mat45.rotateZ(obj, obj, point.z);
  const mat46 = glMatrix.mat4;
  items = [, , ];
  ({ x: arr[0], y: arr[1], z: arr[2] } = translation);
  mat46.translate(obj, obj, items);
  const mat47 = glMatrix.mat4;
  const fromValuesResult = mat47.fromValues(1, point2.y, 0, 0, point2.x, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  const mat48 = glMatrix.mat4;
  mat48.multiply(obj, obj, fromValuesResult);
  return Array.from(obj);
}
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let items = [0.5543603897094727, 0.560490608215332, 0.6152518391609192, 0, 0, 0.739239513874054, -0.6734426617622375, 0, -0.8322767019271851, 0.37332993745803833, 0.4098050892353058, 0, -83.22766876220703, 37.33299255371094, -59.01948928833008, 1];
let items1 = [0.8322767019271851, -0.37332993745803833, -0.4098050892353058, 0, 0, 0.739239513874054, -0.6734426617622375, 0, 0.5543603897094727, 0.560490608215332, 0.6152518391609192, 0, 55.436038970947266, 56.0490608215332, -38.474815368652344, 1];
let transformMatrixResult = transformMatrix(items, { skew: { x: 0.2, y: 0.03, z: 0 } });
let transformMatrixResult1 = transformMatrix(items1, { rotation: { x: 0, y: 0.02, z: 0.015 }, translation: { x: -1, y: 1, z: 0 }, skew: { x: 0, y: 0.035, z: 0 } });
let createStyles = createStyles_mod;
let obj = { container: { position: "relative", width: 200, height: 200 }, emoji: { position: "absolute", width: 200, height: 200, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, overflow: "hidden" }, customEmoji: { width: 196, height: 196 }, textEmoji: obj2, topFace: obj3, leftFace: obj5, rightFace: obj6 };
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
let obj4 = { matrix: [0.8322767019271851, -0.37332993745803833, -0.4098050892353058, 0, 0.5543603897094727, 0.560490608215332, 0.6152518391609192, 0, 0, -0.739239513874054, 0.6734426617622375, 0, 0, -73.9239501953125, -32.65573501586914, 1] };
obj3 = { transform: items2 };
PlatformUtils = PlatformUtils_mod;
PlatformUtils.isIOS();
items2 = [obj4];
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isIOS()) {
  transformMatrixResult = items;
}
obj5 = { transform: items3 };
items3 = [{ matrix: transformMatrixResult }];
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isIOS()) {
  transformMatrixResult1 = items1;
}
obj6 = { transform: items4 };
items4 = [{ matrix: transformMatrixResult1 }];
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/emoji/EmojiCube.tsx");

export default function EmojiCube(emoji) {
  let closure_2;
  let items2;
  let tmp6;
  let useReducedMotion;
  emoji = emoji.emoji;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  const style = emoji.style;
  let obj = emoji(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let emojiURL;
  if (null != emoji.id) {
    const obj2 = { id: emoji.id, animated: tmp6, size: 48 };
    tmp6 = !stateFromStores;
    const getEmojiURL = emojiURL(1410).getEmojiURL;
    emojiURL(1410);
    if (!stateFromStores) {
      tmp6 = true === emoji.animated;
    }
    emojiURL = getEmojiURL(obj2);
  }
  const tmp7 = closure_6();
  dependencyMap = tmp7;
  const items1 = [tmp7.container, , ];
  const obj4 = { transform: items2 };
  items2 = [{ scale: emojiURL(1492)().width / 392 }];
  items1[1] = obj4;
  items1[2] = style;
  const items3 = [, , ];
  ({ topFace: arr4[0], leftFace: arr4[1], rightFace: arr4[2] } = tmp7);
  ({ scale: emojiURL(1492)().width / 392 });
  return <View style={items1}>{items3.map((item, index) => {
    let items;
    let str;
    const obj = { style: items, fastImageStyle: closure_2.customEmoji, textEmojiStyle: closure_2.textEmoji, name: str, src: emojiURL };
    items = [closure_2.emoji, item];
    str = "";
    const tmp = jsx;
    const tmp2 = EmojiDefault;
    if (null == emoji.id) {
      str = emoji.name;
    }
    return tmp(tmp2, obj, index);
  })}</View>;
};
