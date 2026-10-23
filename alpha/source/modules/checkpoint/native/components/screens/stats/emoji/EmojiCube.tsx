// Module ID: 12957
// Function ID: 12958
// Name: EmojiCube
// Dependencies: [17, 4970, 6013, 21, 12958, 4969, 1385, 587, 558, 576, 504, 1417, 1499, 7225, 2]

// Module 12957 (EmojiCube)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1499 */;
import CheckpointConstants from "CheckpointConstants" /* 6013 */;
import EmojiDefault from "Emoji" /* 7225 */;
import glMatrix from "glMatrix" /* 12958 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import createStyles_mod from "createStyles" /* 4969 */;
import PlatformUtils_mod from "utils/PlatformUtils" /* 1385 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

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
obj3 = { transform: items2 };
let obj4 = { matrix: [0.8322767019271851, -0.37332993745803833, -0.4098050892353058, 0, 0.5543603897094727, 0.560490608215332, 0.6152518391609192, 0, 0, -0.739239513874054, 0.6734426617622375, 0, 0, -73.9239501953125, -32.65573501586914, 1] };
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiCube(emoji) {
  let closure_2;
  let items1;
  let src;
  let tmp12;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  let tmp2 = dependencyMap;
  let tmp = emoji;
  let obj = emoji(576);
  const cResult = obj.c(27);
  emoji = emoji.emoji;
  const style = emoji.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === emoji.animated) {
    if (cResult[3] === emoji.id) {
      let tmp8;
      let tmp17;
      if (cResult[4] === stateFromStores) {
        tmp8 = cResult[5];
      }
      importDefault = tmp8;
      const tmp14 = closure_6();
      dependencyMap = tmp14;
      const result = useWindowDimensionsDefault().width / 392;
      if (cResult[6] !== result) {
        const obj2 = { transform: items1 };
        items1 = [{ scale: result }];
        const obj3 = { scale: result };
        cResult[6] = result;
        cResult[7] = obj2;
        tmp17 = obj2;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === style) {
        if (cResult[9] === tmp14.container) {
          let tmp18;
          if (cResult[10] === tmp17) {
            tmp18 = cResult[11];
          }
          if (cResult[12] === tmp14.leftFace) {
            if (cResult[13] === tmp14.rightFace) {
              let arr4;
              if (cResult[14] === tmp14.topFace) {
                arr4 = cResult[15];
              }
              if (cResult[16] === emoji.id) {
                if (cResult[17] === emoji.name) {
                  if (cResult[18] === tmp8) {
                    if (cResult[19] === tmp14.customEmoji) {
                      if (cResult[20] === tmp14.emoji) {
                        if (cResult[21] === tmp14.textEmoji) {
                          let tmp19;
                          if (cResult[22] === arr4) {
                            tmp19 = cResult[23];
                          }
                          if (cResult[24] === tmp18) {
                            let tmp21;
                            if (cResult[25] === tmp19) {
                              tmp21 = cResult[26];
                            }
                            return tmp21;
                          }
                          const tmp24 = <View style={tmp18}>{tmp19}</View>;
                          cResult[24] = tmp18;
                          cResult[25] = tmp19;
                          cResult[26] = tmp24;
                          tmp21 = tmp24;
                        }
                      }
                    }
                  }
                }
              }
              const mapped = arr4.map((item, index) => {
                let items;
                let str;
                const obj = { style: items, fastImageStyle: closure_2.customEmoji, textEmojiStyle: closure_2.textEmoji, name: str, src };
                items = [closure_2.emoji, item];
                str = "";
                const tmp = jsx;
                const tmp2 = EmojiDefault;
                if (null == emoji.id) {
                  str = emoji.name;
                }
                return tmp(tmp2, obj, index);
              });
              cResult[16] = emoji.id;
              cResult[17] = emoji.name;
              cResult[18] = tmp8;
              cResult[19] = tmp14.customEmoji;
              cResult[20] = tmp14.emoji;
              cResult[21] = tmp14.textEmoji;
              cResult[22] = arr4;
              cResult[23] = mapped;
              tmp19 = mapped;
            }
          }
          const items2 = [, , ];
          ({ topFace: arr5[0], leftFace: arr5[1], rightFace: arr5[2] } = tmp14);
          cResult[12] = tmp14.leftFace;
          cResult[13] = tmp14.rightFace;
          cResult[14] = tmp14.topFace;
          cResult[15] = items2;
          arr4 = items2;
        }
      }
      const items3 = [tmp14.container, tmp17, style];
      cResult[8] = style;
      cResult[9] = tmp14.container;
      cResult[10] = tmp17;
      cResult[11] = items3;
      tmp18 = items3;
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    const obj5 = { id: emoji.id, animated: tmp12, size: 48 };
    tmp12 = !stateFromStores;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores) {
      tmp12 = true === emoji.animated;
    }
    emojiURL = getEmojiURL(obj5);
  }
  cResult[2] = emoji.animated;
  cResult[3] = emoji.id;
  cResult[4] = stateFromStores;
  cResult[5] = emojiURL;
  tmp8 = emojiURL;
}) : (function EmojiCube(emoji) {
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
    const getEmojiURL = emojiURL(1417).getEmojiURL;
    emojiURL(1417);
    if (!stateFromStores) {
      tmp6 = true === emoji.animated;
    }
    emojiURL = getEmojiURL(obj2);
  }
  const tmp7 = closure_6();
  dependencyMap = tmp7;
  const items1 = [tmp7.container, , ];
  const obj4 = { transform: items2 };
  items2 = [{ scale: emojiURL(1499)().width / 392 }];
  items1[1] = obj4;
  items1[2] = style;
  const items3 = [, , ];
  ({ topFace: arr4[0], leftFace: arr4[1], rightFace: arr4[2] } = tmp7);
  ({ scale: emojiURL(1499)().width / 392 });
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
});
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/emoji/EmojiCube.tsx");

export default tmp6;
