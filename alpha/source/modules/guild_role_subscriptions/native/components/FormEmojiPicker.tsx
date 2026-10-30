// Module ID: 19910
// Function ID: 19911
// Name: FormEmojiPicker
// Dependencies: [19, 17, 1387, 21, 15680, 4955, 17161, 4959, 1114, 17160, 6969, 9430, 5619, 9918, 2]
// Exports: default

// Module 19910 (FormEmojiPicker)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1387 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9918 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  let TableRow;
  let emojiId;
  let emojiName;
  let obj5;
  let tmp10;
  let tmp9;
  let tmp9Result;
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = onChange;
  const tmp3 = onChange(15680)();
  if (emojiId == null) {
    const convertSurrogateToName = tmp(4955).convertSurrogateToName;
    const tmpResult = tmp(4955);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = convertSurrogateToName(emojiName, false);
  }
  let obj = guildId(17161);
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, emojiId);
  let allEmojiNamesString = null;
  if (null != emojiByIdOrName) {
    const tmp5Result = guildId(4959);
    allEmojiNamesString = tmp5Result.getAllEmojiNamesString(emojiByIdOrName);
  }
  const intl = tmp5(1114).intl;
  const stringResult = intl.string(guildId(1114).t.gXAN3P);
  if (null != emojiId) {
    tmp10 = jsx(tmp(17160), { guildId, id: emojiId });
    tmp9 = jsx;
  } else {
    tmp9 = jsx;
    const Icon = tmp5(6969).TableRow.Icon;
    tmp10 = <Icon IconComponent={guildId(9430).ReactionIcon} />;
  }
  const obj4 = { style: tmp3.inputContainer, children: tmp9(TableRow, obj5) };
  obj5 = {
    start: true,
    end: true,
    icon: tmp10,
    label: tmp9Result,
    accessibilityLabel: allEmojiNamesString,
    arrow: true,
    onPress: function handleSelectEmoji() {
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
    }
  };
  tmp9Result = allEmojiNamesString;
  TableRow = tmp5(6969).TableRow;
  const tmp12 = View;
  if (allEmojiNamesString == null) {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: stringResult };
    tmp9Result = tmp9(tmp5(5619).Text, obj6);
  }
  if (allEmojiNamesString == null) {
    allEmojiNamesString = stringResult;
  }
  return tmp9(tmp12, obj4);
};
