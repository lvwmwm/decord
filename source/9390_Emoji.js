// Module ID: 9390
// Function ID: 73189
// Name: Emoji
// Dependencies: []
// Exports: EmojiGrid

// Module 9390 (Emoji)
function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  let obj = {};
  const tmp = callback();
  const tmp2 = jsx;
  if (null == guildEmoji.id) {
    let uRL = importDefault(dependencyMap[5]).getURL(guildEmoji.name);
    const obj4 = importDefault(dependencyMap[5]);
  } else {
    obj = {};
    ({ id: obj3.id, animated: obj3.animated } = guildEmoji);
    obj.size = 48;
    uRL = importDefault(dependencyMap[6]).getEmojiURL(obj);
    const obj2 = importDefault(dependencyMap[6]);
  }
  obj.src = uRL;
  ({ gridEmojiFastImage: obj.fastImageStyle, gridEmojiText: obj.textEmojiStyle } = tmp);
  obj.name = guildEmoji.name;
  return tmp2(importDefault(dependencyMap[7]), obj, guildEmoji.id);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { <string:1140607356>: 30706176, <string:1751293292>: 378290688, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.gridEmojiFastImage = obj;
obj.gridEmojiText = {};
obj.emojiGridRowContainer = { "Null": null, "Null": 11 };
obj.emojiGridContainer = {};
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export const EmojiGrid = function EmojiGrid(numberToShow) {
  let doNotDisplayEmojiIds;
  let expressionSourceGuild;
  ({ expressionSourceGuild, doNotDisplayEmojiIds } = numberToShow);
  if (doNotDisplayEmojiIds === undefined) {
    doNotDisplayEmojiIds = [];
  }
  const arg1 = doNotDisplayEmojiIds;
  let num = numberToShow.numberToShow;
  if (num === undefined) {
    num = 10;
  }
  let num2 = numberToShow.maxPerRow;
  if (num2 === undefined) {
    num2 = 5;
  }
  let importDefault;
  let obj = {};
  const merged = Object.assign(arg1(dependencyMap[8]).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(callback());
  importDefault = obj;
  let emojis;
  if (null != expressionSourceGuild) {
    emojis = expressionSourceGuild.emojis;
  }
  if (null == emojis) {
    emojis = [];
  }
  const substr = emojis.slice(0, num + 1);
  const found = substr.filter((id) => !doNotDisplayEmojiIds.includes(id.id));
  const substr1 = found.slice(0, num);
  const obj2 = arg1(dependencyMap[8]);
  obj = { style: obj.emojiGridContainer };
  obj = {
    gap: 8,
    children: importDefault(dependencyMap[9])(substr1, num2).map((arr) => {
      let obj = { style: obj.emojiGridRowContainer };
      obj = { gap: 32, children: arr.map((guildEmoji) => callback(closure_6, { guildEmoji }, guildEmoji.id)) };
      obj.children = callback(doNotDisplayEmojiIds(closure_2[10]).GappedList, obj);
      return callback(closure_3, obj, arg1);
    })
  };
  obj.children = jsx(arg1(dependencyMap[10]).GappedList, obj);
  return <View {...obj} />;
};
