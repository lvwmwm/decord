// Module ID: 15499
// Function ID: 15500
// Name: EmojiIcon
// Dependencies: [19, 21, 15500, 5802, 10477, 7377, 1401, 2]
// Exports: default

// Module 15499 (EmojiIcon)
import FastImageDefault from "FastImage" /* 5802 */;
import EmojiDefault from "Emoji" /* 7377 */;
import _modDef10477 from "module_10477" /* 10477 */;
import useEmojiByIdOrName from "useEmojiByIdOrName" /* 15500 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiIcon.tsx");

export default function EmojiIcon(size) {
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
  const emojiByIdOrName = useEmojiByIdOrName.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp4 = null;
    if (flag) {
      const obj2 = { resizeMode: "contain", style: null, source: null };
      size = { width: num, height: num };
      obj2.style = size;
      obj2.source = _modDef10477;
      tmp4 = jsx(FastImageDefault, { resizeMode: "contain", style: null, source: null });
    }
    let tmp8Result = tmp4;
  } else {
    const obj3 = { style: size.style, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
    const size1 = { width: num, height: num };
    obj3.fastImageStyle = size1;
    if (fontSize == null) {
      fontSize = num;
    }
    const obj5 = { fontSize, lineHeight };
    obj3.textEmojiStyle = obj5;
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
    obj3.name = str;
    if (null != emojiByIdOrName.id) {
      const obj6 = { id: null, animated: null, size: null };
      ({ id: obj4.id, animated: obj4.animated } = emojiByIdOrName);
      obj6.size = num;
      let url = tmp9(1401).getEmojiURL(obj6);
      const tmp9Result = tmp9(1401);
    } else {
      url = emojiByIdOrName.url;
    }
    obj3.src = url;
    tmp8Result = jsx(EmojiDefault, { style: size.style, fastImageStyle: null, textEmojiStyle: null, name: null, src: null });
    tmp9 = importDefault;
  }
  return tmp8Result;
};
