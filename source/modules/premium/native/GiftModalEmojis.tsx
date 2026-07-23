// Module ID: 8210
// Function ID: 64917
// Name: items
// Dependencies: [57, 31, 27, 33, 4130, 3775, 5151, 2]
// Exports: default

// Module 8210 (items)
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let items = [100, 0, -40];
const items1 = [items, , , , , , , , , ];
const items2 = [120, 40, -10];
items1[1] = items2;
items1[2] = [100, 80, 10];
items1[3] = [180, 20, 20];
items1[4] = [140, 95, 15];
items1[5] = [250, 0, 0];
const items3 = [250, 80, -20];
items1[6] = items3;
items1[7] = [400, 90, 10];
const items4 = [400, 20, -20];
items1[8] = items4;
items1[9] = [410, 0, 40];
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ emojisContainer: { alignItems: "center", justifyContent: "center", height: 250, width: "100%", position: "absolute", zIndex: 1, paddingBottom: 210 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default function _default(emojiName) {
  emojiName = emojiName.emojiName;
  let flag = emojiName.randomizeSizing;
  if (flag === undefined) {
    flag = false;
  }
  let uRL;
  let obj = emojiName(flag[5]);
  uRL = obj.getURL(emojiName);
  obj = {
    style: callback().emojisContainer,
    children: items1.map((arg0, arg1) => {
      let tmp2;
      let tmp3;
      let tmp4;
      let num = 1;
      [tmp2, tmp3, tmp4] = callback(arg0, 3);
      let obj = { src: callback, name: emojiName };
      obj = { position: "absolute" };
      const tmp = callback(arg0, 3);
      const tmp5 = outer1_4;
      obj.top = "" + tmp2 + "%";
      obj.left = "" + tmp3 + "%";
      obj = { rotate: "" + tmp4 + "deg" };
      const items = [obj, ];
      const obj1 = {};
      if (flag) {
        const _Math = Math;
        num = 1.5 * Math.random() + 0.5;
      }
      obj1.scale = num;
      items[1] = obj1;
      obj.transform = items;
      obj.style = obj;
      obj.forceTextEmoji = true;
      return tmp5(emojiName(flag[6]), obj, "" + arg1 + "-" + emojiName);
    })
  };
  return <View style={callback().emojisContainer}>{items1.map((arg0, arg1) => {
    let tmp2;
    let tmp3;
    let tmp4;
    let num = 1;
    [tmp2, tmp3, tmp4] = callback(arg0, 3);
    let obj = { src: callback, name: emojiName };
    obj = { position: "absolute" };
    const tmp = callback(arg0, 3);
    const tmp5 = outer1_4;
    obj.top = "" + tmp2 + "%";
    obj.left = "" + tmp3 + "%";
    obj = { rotate: "" + tmp4 + "deg" };
    const items = [obj, ];
    const obj1 = {};
    if (flag) {
      const _Math = Math;
      num = 1.5 * Math.random() + 0.5;
    }
    obj1.scale = num;
    items[1] = obj1;
    obj.transform = items;
    obj.style = obj;
    obj.forceTextEmoji = true;
    return tmp5(emojiName(flag[6]), obj, "" + arg1 + "-" + emojiName);
  })}</View>;
};
