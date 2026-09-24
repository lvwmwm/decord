// Module ID: 11619
// Function ID: 11620
// Name: GiftModalEmojis
// Dependencies: [32, 19, 17, 21, 4790, 558, 568, 4449, 7409, 2]

// Module 11619 (GiftModalEmojis)
import EmojiUtilsDefault from "EmojiUtils" /* 4449 */;
import EmojiDefault from "Emoji" /* 7409 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let items = [[100, 0, -40], [120, 40, -10], [100, 80, 10], [180, 20, 20], [140, 95, 15], [250, 0, 0], [250, 80, -20], [400, 90, 10], [400, 20, -20], [410, 0, 40]];
const createStyles = fn(4790);
let closure_7 = createStyles.createStyles({ emojisContainer: { alignItems: "center", justifyContent: "center", height: 250, width: "100%", position: "absolute", zIndex: 1, paddingBottom: 210 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((emojiName) => {
  const cResult = emojiName(568).c(9);
  emojiName = emojiName.emojiName;
  const randomizeSizing = emojiName.randomizeSizing;
  importDefault = tmp3;
  const tmp4 = closure_7();
  if (cResult[0] !== emojiName) {
    const uRL = EmojiUtilsDefault.getURL(emojiName);
    cResult[0] = emojiName;
    cResult[1] = uRL;
    let tmp5 = uRL;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  if (cResult[2] === emojiName) {
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp3) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.emojisContainer) {
        if (cResult[7] === tmp8) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj3 = { style: tmp4.emojisContainer, children: tmp8 };
      const tmp13 = <View style={tmp4.emojisContainer}>{tmp8}</View>;
      cResult[6] = tmp4.emojisContainer;
      cResult[7] = tmp8;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
  }
  const mapped = items.map((item, index) => {
    [tmp2, tmp3, tmp4] = item;
    const obj = { src, name: emojiName, style: null, forceTextEmoji: true };
    const rect = { position: "absolute", top: null, left: null, transform: null };
    const tmp = _slicedToArray(item, 3);
    const tmp5 = jsx;
    rect.top = "" + tmp2 + "%";
    rect.left = "" + tmp3 + "%";
    const tmp6 = EmojiDefault;
    const tmp7 = emojiName;
    items = [{ rotate: "" + tmp4 + "deg" }, ];
    let num = 1;
    if (closure_1) {
      const _Math = Math;
      num = 1.5 * Math.random() + 0.5;
    }
    items[1] = { scale: num };
    rect.transform = items;
    obj.style = rect;
    return tmp5(tmp6, obj, "" + index + "-" + tmp7);
  });
  cResult[2] = emojiName;
  cResult[3] = tmp5;
  cResult[4] = undefined !== randomizeSizing && randomizeSizing;
  cResult[5] = mapped;
  tmp8 = mapped;
}) : ((emojiName) => {
  emojiName = emojiName.emojiName;
  let flag = emojiName.randomizeSizing;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_7();
  dependencyMap = flag(4449).getURL(emojiName);
  let obj = flag(4449);
  return <View style={tmp.emojisContainer}>{items.map((item, index) => {
    [tmp2, tmp3, tmp4] = item;
    const obj = { src, name: emojiName, style: null, forceTextEmoji: true };
    const rect = { position: "absolute", top: null, left: null, transform: null };
    const tmp = _slicedToArray(item, 3);
    const tmp5 = jsx;
    rect.top = "" + tmp2 + "%";
    rect.left = "" + tmp3 + "%";
    const tmp6 = EmojiDefault;
    const tmp7 = emojiName;
    items = [{ rotate: "" + tmp4 + "deg" }, ];
    let num = 1;
    if (flag) {
      const _Math = Math;
      num = 1.5 * Math.random() + 0.5;
    }
    items[1] = { scale: num };
    rect.transform = items;
    obj.style = rect;
    return tmp5(tmp6, obj, "" + index + "-" + tmp7);
  })}</View>;
});
