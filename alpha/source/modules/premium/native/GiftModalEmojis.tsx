// Module ID: 10599
// Function ID: 10600
// Name: GiftModalEmojis
// Dependencies: [32, 19, 17, 21, 5091, 558, 576, 4727, 6816, 2]

// Module 10599 (GiftModalEmojis)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4727 */;
import EmojiDefault from "Emoji" /* 6816 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, emojiName, importDefault;

const View = react_native.View;
const jsx = Fragment.jsx;
let items = [[100, 0, -40], [120, 40, -10], [100, 80, 10], [180, 20, 20], [140, 95, 15], [250, 0, 0], [250, 80, -20], [400, 90, 10], [400, 20, -20], [410, 0, 40]];
let closure_7 = createStyles.createStyles({ emojisContainer: { alignItems: "center", justifyContent: "center", height: 250, width: "100%", position: "absolute", zIndex: 1, paddingBottom: 210 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiName) => {
  let closure_1;
  let src;
  let tmp5;
  let obj = emojiName(576);
  const cResult = obj.c(9);
  emojiName = emojiName.emojiName;
  const randomizeSizing = emojiName.randomizeSizing;
  const tmp3 = undefined !== randomizeSizing && randomizeSizing;
  importDefault = tmp3;
  const tmp4 = closure_7();
  if (cResult[0] !== emojiName) {
    let tmp6 = importDefault;
    const obj2 = EmojiUtilsDefault;
    const uRL = obj2.getURL(emojiName);
    let num = 0;
    cResult[0] = emojiName;
    cResult[1] = uRL;
    tmp5 = uRL;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  if (cResult[2] === emojiName) {
    if (cResult[3] === tmp5) {
      let tmp8;
      if (cResult[4] === tmp3) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.emojisContainer) {
        let tmp10;
        if (cResult[7] === tmp8) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      const tmp13 = <View style={tmp4.emojisContainer}>{tmp8}</View>;
      cResult[6] = tmp4.emojisContainer;
      cResult[7] = tmp8;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  const mapped = items.map((item, index) => {
    let rect;
    let tmp2;
    let tmp3;
    let tmp4;
    [tmp2, tmp3, tmp4] = item;
    const obj = { src, name: emojiName, style: rect, forceTextEmoji: true };
    rect = { position: "absolute", top: "" + tmp2 + "%", left: "" + tmp3 + "%", transform: items };
    _slicedToArray(item, 3);
    const tmp6 = EmojiDefault;
    items = [{ rotate: "" + tmp4 + "deg" }, ];
    let num = 1;
    ({ rotate: "" + tmp4 + "deg" });
    const tmp5 = jsx;
    const tmp7 = emojiName;
    if (closure_1) {
      const _Math = Math;
      num = 1.5 * Math.random() + 0.5;
    }
    items[1] = { scale: num };
    return tmp5(tmp6, obj, "" + index + "-" + tmp7);
  });
  cResult[2] = emojiName;
  cResult[3] = tmp5;
  cResult[4] = tmp3;
  cResult[5] = mapped;
  tmp8 = mapped;
}) : ((emojiName) => {
  let src;
  emojiName = emojiName.emojiName;
  let flag = emojiName.randomizeSizing;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  let obj = flag(4727);
  dependencyMap = obj.getURL(emojiName);
  return <View style={tmp.emojisContainer}>{items.map((item, index) => {
    let rect;
    let tmp2;
    let tmp3;
    let tmp4;
    [tmp2, tmp3, tmp4] = item;
    const obj = { src, name: emojiName, style: rect, forceTextEmoji: true };
    rect = { position: "absolute", top: "" + tmp2 + "%", left: "" + tmp3 + "%", transform: items };
    _slicedToArray(item, 3);
    const tmp6 = EmojiDefault;
    items = [{ rotate: "" + tmp4 + "deg" }, ];
    let num = 1;
    ({ rotate: "" + tmp4 + "deg" });
    const tmp5 = jsx;
    const tmp7 = emojiName;
    if (flag) {
      const _Math = Math;
      num = 1.5 * Math.random() + 0.5;
    }
    items[1] = { scale: num };
    return tmp5(tmp6, obj, "" + index + "-" + tmp7);
  })}</View>;
});
const result = size.fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default tmp3;
