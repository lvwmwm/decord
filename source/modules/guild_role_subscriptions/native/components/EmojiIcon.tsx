// Module ID: 14179
// Function ID: 109073
// Name: EmojiIcon
// Dependencies: [31, 33, 14180, 5085, 9392, 5151, 1392, 2]
// Exports: default

// Module 14179 (EmojiIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useEmojiByIdOrName").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiIcon.tsx");

export default function EmojiIcon(size) {
  let fontSize;
  let guildId;
  let id;
  let lineHeight;
  let num = size.size;
  ({ guildId, id } = size);
  if (num === undefined) {
    num = 20;
  }
  let flag = size.useFallbackIcon;
  if (flag === undefined) {
    flag = true;
  }
  ({ fontSize, lineHeight } = size);
  if (lineHeight === undefined) {
    lineHeight = num + 4;
  }
  let obj = require(14180) /* useEmojiByIdOrName */;
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp6 = null;
    if (flag) {
      obj = { resizeMode: "contain" };
      obj = { width: num, height: num };
      obj.style = obj;
      obj.source = importDefault(9392);
      tmp6 = jsx(importDefault(5085), { width: num, height: num });
      const tmp10 = importDefault(5085);
    }
    let tmp11Result = tmp6;
  } else {
    let obj1 = { style: size.style };
    const obj2 = { width: num, height: num };
    obj1.fastImageStyle = obj2;
    const obj3 = {};
    let tmp2 = num;
    if (null != fontSize) {
      tmp2 = fontSize;
    }
    obj3.fontSize = tmp2;
    obj3.lineHeight = lineHeight;
    obj1.textEmojiStyle = obj3;
    if (null != emojiByIdOrName.id) {
      let str = emojiByIdOrName.name;
    } else {
      let name = emojiByIdOrName.surrogates;
      if (null == name) {
        name = emojiByIdOrName.name;
      }
      str = "";
      if (null != name) {
        str = name;
      }
    }
    obj1.name = str;
    if (null != emojiByIdOrName.id) {
      obj1 = importDefault(1392);
      const obj4 = {};
      ({ id: obj3.id, animated: obj3.animated } = emojiByIdOrName);
      obj4.size = num;
      let url = obj1.getEmojiURL(obj4);
    } else {
      url = emojiByIdOrName.url;
    }
    obj1.src = url;
    tmp11Result = jsx(importDefault(5151), { style: size.style });
    const tmp11 = jsx;
    const tmp14 = importDefault(5151);
  }
  return tmp11Result;
};
