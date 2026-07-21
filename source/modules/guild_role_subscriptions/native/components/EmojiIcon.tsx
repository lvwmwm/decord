// Module ID: 14008
// Function ID: 106554
// Name: EmojiIcon
// Dependencies: []
// Exports: default

// Module 14008 (EmojiIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiIcon.tsx");

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
  let obj = arg1(dependencyMap[2]);
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, id);
  if (null == emojiByIdOrName) {
    let tmp6 = null;
    if (flag) {
      obj = { resizeMode: "contain" };
      obj = { width: num, height: num };
      obj.style = obj;
      obj.source = importDefault(dependencyMap[4]);
      tmp6 = jsx(importDefault(dependencyMap[3]), obj);
      const tmp10 = importDefault(dependencyMap[3]);
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
      obj1 = importDefault(dependencyMap[6]);
      const obj4 = {};
      ({ id: obj3.id, animated: obj3.animated } = emojiByIdOrName);
      obj4.size = num;
      let url = obj1.getEmojiURL(obj4);
    } else {
      url = emojiByIdOrName.url;
    }
    obj1.src = url;
    tmp11Result = jsx(importDefault(dependencyMap[5]), obj1);
    const tmp11 = jsx;
    const tmp14 = importDefault(dependencyMap[5]);
  }
  return tmp11Result;
};
