// Module ID: 16562
// Function ID: 128927
// Name: FormEmojiPicker
// Dependencies: [31, 653, 1853, 33, 4165, 5087, 689, 13013, 3806, 14236, 14235, 5119, 16563, 8316, 9312, 1273, 3810, 1212, 10713, 2]
// Exports: default

// Module 16562 (FormEmojiPicker)
import "result";
import { Fonts } from "ME";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, 16));
_createForOfIteratorHelperLoose.placeholder = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 16));
_createForOfIteratorHelperLoose.text = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  let emojiId;
  let emojiName;
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = _createForOfIteratorHelperLoose();
  if (null == emojiId) {
    let obj = onChange(3806);
    let str = "";
    if (null != emojiName) {
      str = emojiName;
    }
    emojiId = obj.convertSurrogateToName(str, false);
  }
  let obj1 = guildId(14236);
  const emojiByIdOrName = obj1.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    obj = { guildId, id: emojiId };
    let tmp10 = callback(onChange(14235), obj);
  } else {
    obj = { resizeMode: "contain", source: onChange(16563) };
    tmp10 = callback(onChange(5119), obj);
    const tmp9 = onChange(5119);
  }
  obj1 = {
    style: items,
    accessibilityRole: "link",
    onPress() {
      let obj = guildId(outer1_2[14]);
      obj = {
        guildId,
        onPressEmoji(id) {
          if (null != id.id) {
            if (null != outer1_1) {
              let obj = { emojiId: id.id };
              outer1_1(obj);
            }
          } else if (null != id.optionallyDiverseSequence) {
            if (null != outer1_1) {
              obj = { emojiName: id.optionallyDiverseSequence };
              outer1_1(obj);
            }
          }
        },
        pickerIntention: outer1_3.GUILD_ROLE_BENEFIT_EMOJI
      };
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  };
  items = [tmp.container, onChange(13013)().textInput];
  const items1 = [tmp10, , ];
  const tmp14 = closure_5;
  const tmp2 = onChange(13013)();
  const obj2 = { style: items2 };
  items2 = [tmp.content, null != emojiByIdOrName ? tmp.text : tmp.placeholder];
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = guildId(3810).getAllEmojiNamesString(emojiByIdOrName);
    const obj7 = guildId(3810);
  } else {
    const intl = guildId(1212).intl;
    allEmojiNamesString = intl.string(guildId(1212).t.gXAN3P);
  }
  obj2.children = allEmojiNamesString;
  items1[1] = callback(guildId(1273).LegacyText, obj2);
  const obj3 = { size: guildId(1273).Icon.Sizes.MEDIUM, source: onChange(10713) };
  items1[2] = callback(guildId(1273).Icon, obj3);
  obj1.children = items1;
  return tmp14(onChange(8316), obj1);
};
