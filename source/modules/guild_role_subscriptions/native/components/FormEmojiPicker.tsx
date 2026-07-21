// Module ID: 16327
// Function ID: 126011
// Name: FormEmojiPicker
// Dependencies: []
// Exports: default

// Module 16327 (FormEmojiPicker)
importAll(dependencyMap[0]);
const Fonts = arg1(dependencyMap[1]).Fonts;
const EmojiIntention = arg1(dependencyMap[2]).EmojiIntention;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {}, content: { -392852907: null, -1030708856: null } };
obj = {};
const tmp3 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[5])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[6]).colors.TEXT_MUTED, 16));
obj.placeholder = obj;
const importDefaultResult = importDefault(dependencyMap[5]);
const obj1 = {};
const merged1 = Object.assign(importDefault(dependencyMap[5])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[6]).colors.TEXT_DEFAULT, 16));
obj.text = obj1;
let closure_6 = obj.createStyles(obj);
const importDefaultResult1 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default function FormEmojiPicker(emoji) {
  let emojiId;
  let emojiName;
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const arg1 = guildId;
  const importDefault = emoji.onChange;
  const tmp = callback2();
  if (null == emojiId) {
    let obj = importDefault(dependencyMap[8]);
    let str = "";
    if (null != emojiName) {
      str = emojiName;
    }
    emojiId = obj.convertSurrogateToName(str, false);
  }
  let obj1 = arg1(dependencyMap[9]);
  const emojiByIdOrName = obj1.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    obj = { guildId, id: emojiId };
    let tmp10 = callback(importDefault(dependencyMap[10]), obj);
  } else {
    obj = { resizeMode: "contain", source: importDefault(dependencyMap[12]) };
    tmp10 = callback(importDefault(dependencyMap[11]), obj);
    const tmp9 = importDefault(dependencyMap[11]);
  }
  obj1 = {
    style: items,
    accessibilityRole: "link",
    onPress() {
      let obj = guildId(closure_2[14]);
      obj = {
        guildId,
        onPressEmoji(id) {
          if (null != id.id) {
            if (null != callback) {
              let obj = { emojiId: id.id };
              callback(obj);
            }
          } else if (null != id.optionallyDiverseSequence) {
            if (null != callback) {
              obj = { emojiName: id.optionallyDiverseSequence };
              callback(obj);
            }
          }
        },
        pickerIntention: constants.GUILD_ROLE_BENEFIT_EMOJI
      };
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  };
  const items = [tmp.container, importDefault(dependencyMap[7])().textInput];
  const items1 = [tmp10, , ];
  const tmp14 = closure_5;
  const tmp2 = importDefault(dependencyMap[7])();
  const obj2 = { style: items2 };
  const items2 = [tmp.content, null != emojiByIdOrName ? tmp.text : tmp.placeholder];
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = arg1(dependencyMap[16]).getAllEmojiNamesString(emojiByIdOrName);
    const obj7 = arg1(dependencyMap[16]);
  } else {
    const intl = arg1(dependencyMap[17]).intl;
    allEmojiNamesString = intl.string(arg1(dependencyMap[17]).t.gXAN3P);
  }
  obj2.children = allEmojiNamesString;
  items1[1] = callback(arg1(dependencyMap[15]).LegacyText, obj2);
  const obj3 = { size: arg1(dependencyMap[15]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[18]) };
  items1[2] = callback(arg1(dependencyMap[15]).Icon, obj3);
  obj1.children = items1;
  return tmp14(importDefault(dependencyMap[13]), obj1);
};
