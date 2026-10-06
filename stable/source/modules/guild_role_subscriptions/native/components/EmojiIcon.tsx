// Module ID: 14773
// Function ID: 14774
// Name: EmojiIcon
// Dependencies: [19, 21, 14774, 5896, 9678, 6552, 1403, 2]
// Exports: default

// Module 14773 (EmojiIcon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5896 */;
import EmojiDefault from "Emoji" /* 6552 */;
import AssetRegistryDefault from "AssetRegistry" /* 9678 */;
import useEmojiByIdOrName from "useEmojiByIdOrName" /* 14774 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiIcon.tsx");

export default function EmojiIcon(size) {
  let fontSize;
  let guildId;
  let id;
  let lineHeight;
  let obj5;
  let size1;
  let str;
  let tmp8Result;
  let url;
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
  const style = size.style;
  const obj = useEmojiByIdOrName;
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp4 = null;
    if (flag) {
      size = { width: num, height: num };
      FastImageDefault;
      tmp4 = <tmp7 resizeMode="contain" style={size} source={AssetRegistryDefault} />;
    }
    tmp8Result = tmp4;
  } else {
    const obj3 = { style, fastImageStyle: size1, textEmojiStyle: obj5, name: str, src: url };
    size1 = { width: num, height: num };
    const tmp10 = EmojiDefault;
    const tmp8 = jsx;
    const tmp9 = importDefault;
    if (fontSize == null) {
      fontSize = num;
    }
    obj5 = { fontSize, lineHeight };
    if (null != emojiByIdOrName.id) {
      str = emojiByIdOrName.name;
    } else {
      str = emojiByIdOrName.surrogates;
      if (str == null) {
        str = emojiByIdOrName.name;
      }
      if (str == null) {
        str = "";
      }
    }
    if (null != emojiByIdOrName.id) {
      const obj6 = { id: null, animated: null, size: num };
      ({ id: obj4.id, animated: obj4.animated } = emojiByIdOrName);
      const tmp9Result = tmp9(1403);
      url = tmp9Result.getEmojiURL(obj6);
    } else {
      url = emojiByIdOrName.url;
    }
    tmp8Result = tmp8(tmp10, obj3);
  }
  return tmp8Result;
};
