// Module ID: 11414
// Function ID: 11415
// Name: SoundmojiActionSheet
// Dependencies: [19, 17, 21, 4836, 576, 1364, 5318, 6571, 6551, 11415, 4832, 1115, 2]
// Exports: default

// Module 11414 (SoundmojiActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import getSoundmojiASTFromString from "getSoundmojiASTFromString" /* 5318 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, soundmojiContainer: { flexDirection: "row", alignItems: "center" }, emoji: size, textContainer: obj3 };
obj2 = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
let num;
if (PlatformUtils.isIOS()) {
  num = 32;
}
size = { width: 32, height: 32, fontSize: num, lineHeight: 36, marginEnd: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_4, display: "flex", flex: 1 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx");

export default function SoundmojiActionSheet(guildId) {
  let intl;
  let items1;
  let items2;
  let obj2;
  let str;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const messageId = guildId.messageId;
  const soundId = guildId.soundId;
  const tmp = closure_7();
  const items = [guildId, channelId, messageId, soundId];
  const memo = soundId.useMemo(() => {
    const obj = getSoundmojiASTFromString;
    return obj.getSoundmojiFromMessage(guildId, channelId, messageId, soundId, []);
  }, items);
  let tmp4Result2 = null;
  if (null != memo) {
    let obj = { startExpanded: true, bodyStyles: tmp.container, children: closure_6(View, obj2) };
    let tmp4Result = null != memo.emojiId;
    obj2 = { style: tmp.soundmojiContainer, children: items1 };
    BottomSheet = guildId(messageId[7]).BottomSheet;
    if (!tmp4Result) {
      tmp4Result = null != memo.emojiName;
    }
    if (tmp4Result) {
      ({ emoji: obj3.fastImageStyle, emoji: obj3.textEmojiStyle } = tmp);
      const obj4 = { fastImageStyle: null, textEmojiStyle: null, src: channelId(messageId[9])(memo, 32), name: str };
      str = memo.emojiName;
      const tmp11 = channelId(messageId[8]);
      if (str == null) {
        str = "";
      }
      tmp4Result = tmp4(tmp11, obj4);
    }
    items1 = [tmp4Result, ];
    const obj5 = { style: tmp.textContainer, children: items2 };
    const obj6 = { variant: "text-sm/bold", children: memo.name };
    items2 = [closure_5(guildId(messageId[10]).Text, obj6), ];
    const obj11 = { variant: "text-sm/normal", children: intl.string(guildId(messageId[11]).t.Tj5Nwi) };
    const Text = tmp5(tmp6[10]).Text;
    intl = tmp5(tmp6[11]).intl;
    items2[1] = closure_5(Text, obj11);
    items1[1] = closure_6(View, obj5);
    tmp4Result2 = tmp4(BottomSheet, obj);
  }
  return tmp4Result2;
};
