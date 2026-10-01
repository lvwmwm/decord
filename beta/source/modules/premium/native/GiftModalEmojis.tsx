// Module ID: 10990
// Function ID: 10991
// Name: GiftModalEmojis
// Dependencies: [32, 19, 17, 21, 4836, 4487, 6551, 2]
// Exports: default

// Module 10990 (GiftModalEmojis)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import EmojiDefault from "Emoji" /* 6551 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let items = [[100, 0, -40], [120, 40, -10], [100, 80, 10], [180, 20, 20], [140, 95, 15], [250, 0, 0], [250, 80, -20], [400, 90, 10], [400, 20, -20], [410, 0, 40]];
let closure_6 = createStyles.createStyles({ emojisContainer: { alignItems: "center", justifyContent: "center", height: 250, width: "100%", position: "absolute", zIndex: 1, paddingBottom: 210 } });
const result = size.fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default function _default(emojiName) {
  emojiName = emojiName.emojiName;
  let flag = emojiName.randomizeSizing;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  let obj = emojiName(flag[5]);
  const src = obj.getURL(emojiName);
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
};
