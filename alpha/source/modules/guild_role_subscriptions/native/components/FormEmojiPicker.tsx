// Module ID: 20380
// Function ID: 20381
// Name: FormEmojiPicker
// Dependencies: [19, 1388, 21, 5086, 17552, 5090, 1113, 17551, 7038, 9533, 5751, 10061, 2]
// Exports: default

// Module 20380 (FormEmojiPicker)
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10061 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  let emojiId;
  let emojiName;
  let tmp10;
  let tmp9;
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  if (emojiId == null) {
    const tmp = onChange;
    const tmp3 = onChange(5086);
    const convertSurrogateToName = tmp3.convertSurrogateToName;
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = convertSurrogateToName(emojiName, false);
  }
  let obj = guildId(17552);
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, emojiId);
  let allEmojiNamesString = null;
  if (null != emojiByIdOrName) {
    const tmp4Result = guildId(5090);
    allEmojiNamesString = tmp4Result.getAllEmojiNamesString(emojiByIdOrName);
  }
  const intl = tmp4(1113).intl;
  const stringResult = intl.string(guildId(1113).t.gXAN3P);
  if (null != emojiId) {
    tmp10 = jsx(onChange(17551), { guildId, id: emojiId });
    tmp9 = jsx;
  } else {
    tmp9 = jsx;
    const Icon = tmp4(7038).TableRow.Icon;
    tmp10 = <Icon IconComponent={guildId(9533).ReactionIcon} />;
  }
  const obj4 = {
    icon: tmp10,
    label: allEmojiNamesString,
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
  const TableRow = tmp4(7038).TableRow;
  if (allEmojiNamesString == null) {
    const obj5 = { variant: "body-md/medium", color: "text-muted", children: stringResult };
    allEmojiNamesString = tmp9(tmp4(5751).Text, obj5);
  }
  return tmp9(TableRow, obj4);
};
