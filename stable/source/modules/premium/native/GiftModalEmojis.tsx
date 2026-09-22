// Module ID: 11583
// Function ID: 11584
// Name: GiftModalEmojis
// Dependencies: [32, 19, 17, 21, 4636, 4293, 7233, 2]
// Exports: default

// Module 11583 (GiftModalEmojis)
import EmojiDefault from "Emoji" /* 7233 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
let items = [[100, 0, -40], [120, 40, -10], [100, 80, 10], [180, 20, 20], [140, 95, 15], [250, 0, 0], [250, 80, -20], [400, 90, 10], [400, 20, -20], [410, 0, 40]];
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles({ emojisContainer: { alignItems: "center", justifyContent: "center", height: 250, width: "100%", position: "absolute", zIndex: 1, paddingBottom: 210 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default function _default(emojiName) {
  emojiName = emojiName.emojiName;
  let flag = emojiName.randomizeSizing;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_6();
  const src = emojiName(flag[5]).getURL(emojiName);
  let obj = emojiName(flag[5]);
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
};
