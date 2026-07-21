// Module ID: 11067
// Function ID: 86101
// Name: SoundmojiActionSheet
// Dependencies: []
// Exports: default

// Module 11067 (SoundmojiActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { padding: importDefault(dependencyMap[4]).space.PX_24, gap: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
obj.soundmojiContainer = { "Null": 7, "Null": 370 };
const obj1 = {};
const tmp2 = arg1(dependencyMap[2]);
let num;
if (obj5.isIOS()) {
  num = 32;
}
obj1.fontSize = num;
obj1.marginEnd = importDefault(dependencyMap[4]).space.PX_16;
obj.emoji = obj1;
const obj2 = { "Null": "<string:275054593>", "Null": "<string:724697089>", "Null": "<string:1719009284>", gap: importDefault(dependencyMap[4]).space.PX_4 };
obj.textContainer = obj2;
let closure_7 = obj.createStyles(obj);
const obj5 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx");

export default function SoundmojiActionSheet(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const channelId = guildId.channelId;
  const importDefault = channelId;
  const messageId = guildId.messageId;
  const dependencyMap = messageId;
  const soundId = guildId.soundId;
  const React = soundId;
  const tmp = callback3();
  const items = [guildId, channelId, messageId, soundId];
  const memo = React.useMemo(() => guildId(messageId[6]).getSoundmojiFromMessage(guildId, channelId, messageId, soundId, []), items);
  let tmp4Result = null;
  if (null != memo) {
    let obj = { startExpanded: true, bodyStyles: tmp.container };
    obj = { style: tmp.soundmojiContainer };
    let tmp10Result = null != memo.emojiId;
    if (!tmp10Result) {
      tmp10Result = null != memo.emojiName;
    }
    if (tmp10Result) {
      obj = {};
      ({ emoji: obj3.fastImageStyle, emoji: obj3.textEmojiStyle } = tmp);
      obj.src = importDefault(dependencyMap[9])(memo, 32);
      const emojiName = memo.emojiName;
      let str = "";
      if (null != emojiName) {
        str = emojiName;
      }
      obj.name = str;
      tmp10Result = callback(importDefault(dependencyMap[8]), obj);
      const tmp10 = callback;
      const tmp13 = importDefault(dependencyMap[8]);
    }
    const items1 = [tmp10Result, ];
    const obj1 = { style: tmp.textContainer };
    const obj2 = { variant: "text-sm/bold", children: memo.name };
    const items2 = [callback(arg1(dependencyMap[10]).Text, obj2), ];
    const obj3 = { variant: "text-sm/normal" };
    const intl = arg1(dependencyMap[11]).intl;
    obj3.children = intl.string(arg1(dependencyMap[11]).t.Tj5Nwi);
    items2[1] = callback(arg1(dependencyMap[10]).Text, obj3);
    obj1.children = items2;
    items1[1] = callback2(View, obj1);
    obj.children = items1;
    obj.children = callback2(View, obj);
    tmp4Result = callback(arg1(dependencyMap[7]).BottomSheet, obj);
    const tmp4 = callback;
    const tmp7 = callback2;
    const tmp8 = View;
  }
  return tmp4Result;
};
