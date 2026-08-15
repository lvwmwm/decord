// Module ID: 14586
// Function ID: 14587
// Name: EmojiIcon
// Dependencies: [19, 21, 14587, 5449, 9355, 6930, 1435, 2]
// Exports: default

// Module 14586 (EmojiIcon)
import "noop";
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
  let obj = require(14587) /* useEmojiByIdOrName */;
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp4 = null;
    if (flag) {
      obj = { resizeMode: "contain", style: null, source: null };
      obj = { width: null, height: null };
      obj[0] = num;
      obj[1] = num;
      obj[1] = obj;
      obj[2] = importDefault(9355);
      tmp4 = jsx(importDefault(5449), { width: null, height: null });
      const tmp7 = importDefault(5449);
    }
    let tmp8Result = tmp4;
  } else {
    const obj1 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
    obj1[0] = size.style;
    const obj2 = { width: null, height: null };
    obj2[0] = num;
    obj2[1] = num;
    obj1[1] = obj2;
    if (fontSize == null) {
      fontSize = num;
    }
    const obj3 = { fontSize: null, lineHeight: null };
    obj3[0] = fontSize;
    obj3[1] = lineHeight;
    obj1[2] = obj3;
    if (null != emojiByIdOrName.id) {
      let str = emojiByIdOrName.name;
    } else {
      str = emojiByIdOrName.surrogates;
      if (str == null) {
        str = emojiByIdOrName.name;
      }
      if (str == null) {
        str = "";
      }
    }
    obj1[3] = str;
    if (null != emojiByIdOrName.id) {
      const obj4 = { id: null, animated: null, size: null };
      ({ id: obj4[0], animated: obj4[1] } = emojiByIdOrName);
      obj4[2] = num;
      let url = tmp9(1435).getEmojiURL(obj4);
      const tmp9Result = tmp9(1435);
    } else {
      url = emojiByIdOrName.url;
    }
    obj1[4] = url;
    tmp8Result = jsx(importDefault(6930), { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null });
    const tmp10 = importDefault(6930);
    const tmp8 = jsx;
    tmp9 = importDefault;
  }
  return tmp8Result;
};
