// Module ID: 17585
// Function ID: 17586
// Name: FormEmojiPicker
// Dependencies: [19, 1074, 1375, 21, 4836, 5836, 576, 13442, 4483, 14786, 14785, 5899, 17586, 9203, 10583, 1177, 4487, 1115, 9396, 2]
// Exports: default

// Module 17585 (FormEmojiPicker)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10583 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const Fonts = Constants.Fonts;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: obj2, text: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj3 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
let closure_6 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  let allEmojiNamesString;
  let emojiId;
  let emojiName;
  let items;
  let items1;
  let tmp10;
  let tmp11;
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = closure_6();
  const tmp3 = dependencyMap;
  const tmp4 = onChange(13442)();
  if (emojiId == null) {
    const convertSurrogateToName = onChange(4483).convertSurrogateToName;
    onChange(4483);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = convertSurrogateToName(emojiName, false);
  }
  let obj = guildId(14786);
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj2 = { guildId, id: emojiId };
    tmp10 = closure_4(tmp2(14785), obj2);
    tmp11 = closure_4;
  } else {
    const obj3 = { resizeMode: "contain", source: onChange(17586) };
    const tmp2Result3 = onChange(5899);
    tmp10 = closure_4(tmp2Result3, obj3);
    tmp11 = closure_4;
  }
  const obj4 = {
    style: items,
    accessibilityRole: "link",
    onPress() {
      let obj = openEmojiPickerActionSheet;
      let obj2 = {
        guildId,
        onPressEmoji(id) {
          if (null != id.id) {
            if (onChange != null) {
              const obj2 = { emojiId: id.id };
              tmp3(obj2);
            }
          } else if (null != id.optionallyDiverseSequence) {
            if (onChange != null) {
              const obj = { emojiName: id.optionallyDiverseSequence };
              tmp(obj);
            }
          }
        },
        pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI
      };
      const result = obj.openEmojiPickerActionSheet(obj2);
    },
    children: items1
  };
  items = [tmp.container, tmp4.textInput];
  items1 = [tmp10, , ];
  const items2 = [tmp.content, ];
  const obj5 = { style: items2, children: allEmojiNamesString };
  items2[1] = null != emojiByIdOrName ? tmp.text : tmp.placeholder;
  const tmp2Result4 = onChange(9203);
  const LegacyText = tmp6(1177).LegacyText;
  const tmp13 = closure_5;
  if (null != emojiByIdOrName) {
    const tmp6Result = guildId(4487);
    allEmojiNamesString = tmp6Result.getAllEmojiNamesString(emojiByIdOrName);
  } else {
    const intl = tmp6(1115).intl;
    allEmojiNamesString = intl.string(tmp6(1115).t.gXAN3P);
  }
  items1[1] = tmp11(LegacyText, obj5);
  const obj6 = { size: guildId(1177).Icon.Sizes.MEDIUM, source: onChange(9396) };
  const Icon = tmp6(1177).Icon;
  items1[2] = tmp11(Icon, obj6);
  return tmp13(tmp2Result4, obj4);
};
