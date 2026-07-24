// Module ID: 11105
// Function ID: 86353
// Name: SoundmojiActionSheet
// Dependencies: [31, 27, 33, 4130, 689, 477, 4577, 5187, 5151, 11106, 4126, 1212, 2]
// Exports: default

// Module 11105 (SoundmojiActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.soundmojiContainer = { flexDirection: "row", alignItems: "center" };
let obj1 = { width: 32, height: 32, fontSize: null, lineHeight: 36 };
let num;
if (set.isIOS()) {
  num = 32;
}
obj1.fontSize = num;
obj1.marginEnd = require("_createForOfIteratorHelperLoose").space.PX_16;
_createForOfIteratorHelperLoose.emoji = obj1;
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4, display: "flex", flex: 1 };
_createForOfIteratorHelperLoose.textContainer = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx");

export default function SoundmojiActionSheet(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const messageId = guildId.messageId;
  const soundId = guildId.soundId;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [guildId, channelId, messageId, soundId];
  const memo = soundId.useMemo(() => guildId(messageId[6]).getSoundmojiFromMessage(guildId, channelId, messageId, soundId, []), items);
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
      obj.src = channelId(messageId[9])(memo, 32);
      const emojiName = memo.emojiName;
      let str = "";
      if (null != emojiName) {
        str = emojiName;
      }
      obj.name = str;
      tmp10Result = callback(channelId(messageId[8]), obj);
      const tmp10 = callback;
      const tmp13 = channelId(messageId[8]);
    }
    const items1 = [tmp10Result, ];
    const obj1 = { style: tmp.textContainer };
    const obj2 = { variant: "text-sm/bold", children: memo.name };
    const items2 = [callback(guildId(messageId[10]).Text, obj2), ];
    const obj3 = { variant: "text-sm/normal" };
    const intl = guildId(messageId[11]).intl;
    obj3.children = intl.string(guildId(messageId[11]).t.Tj5Nwi);
    items2[1] = callback(guildId(messageId[10]).Text, obj3);
    obj1.children = items2;
    items1[1] = callback2(View, obj1);
    obj.children = items1;
    obj.children = callback2(View, obj);
    tmp4Result = callback(guildId(messageId[7]).BottomSheet, obj);
    const tmp4 = callback;
    const tmp7 = callback2;
    const tmp8 = View;
  }
  return tmp4Result;
};
