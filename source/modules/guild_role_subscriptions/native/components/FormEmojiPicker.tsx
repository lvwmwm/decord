// Module ID: 16452
// Function ID: 128227
// Name: FormEmojiPicker
// Dependencies: [31, 653, 1852, 33, 4130, 5052, 689, 12905, 3771, 14130, 14129, 5085, 16453, 8474, 9326, 1273, 3775, 1212, 10681, 2]
// Exports: default

// Module 16452 (FormEmojiPicker)
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
    let obj = onChange(3771);
    let str = "";
    if (null != emojiName) {
      str = emojiName;
    }
    emojiId = obj.convertSurrogateToName(str, false);
  }
  let obj1 = guildId(14130);
  const emojiByIdOrName = obj1.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    obj = { guildId, id: emojiId };
    let tmp10 = callback(onChange(14129), obj);
  } else {
    obj = { resizeMode: "contain", source: onChange(16453) };
    tmp10 = callback(onChange(5085), obj);
    const tmp9 = onChange(5085);
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
  items = [tmp.container, onChange(12905)().textInput];
  const items1 = [tmp10, , ];
  const tmp14 = closure_5;
  const tmp2 = onChange(12905)();
  const obj2 = { style: items2 };
  items2 = [tmp.content, null != emojiByIdOrName ? tmp.text : tmp.placeholder];
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = guildId(3775).getAllEmojiNamesString(emojiByIdOrName);
    const obj7 = guildId(3775);
  } else {
    const intl = guildId(1212).intl;
    allEmojiNamesString = intl.string(guildId(1212).t.gXAN3P);
  }
  obj2.children = allEmojiNamesString;
  items1[1] = callback(guildId(1273).LegacyText, obj2);
  const obj3 = { size: guildId(1273).Icon.Sizes.MEDIUM, source: onChange(10681) };
  items1[2] = callback(guildId(1273).Icon, obj3);
  obj1.children = items1;
  return tmp14(onChange(8474), obj1);
};
