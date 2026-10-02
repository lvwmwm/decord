// Module ID: 17587
// Function ID: 17588
// Name: FormEmojiPicker
// Dependencies: [19, 1086, 1381, 21, 4837, 5837, 588, 558, 576, 13444, 4486, 14774, 14773, 5896, 17588, 9640, 4490, 1127, 1189, 9374, 9215, 2]

// Module 17587 (FormEmojiPicker)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import EmojiConstants from "EmojiConstants" /* 1381 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9640 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import TextStyles_mod from "TextStyles" /* 5837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1;

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
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((onChange) => {
  let emoji;
  let emojiId;
  let emojiName;
  let guildId;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(26);
  ({ emoji, guildId } = onChange);
  onChange = onChange.onChange;
  ({ emojiId, emojiName } = emoji);
  const tmp4 = closure_6();
  const tmp6 = onChange(13444)();
  if (cResult[0] === emojiId) {
    let tmp7;
    let tmp17;
    if (cResult[1] === emojiName) {
      tmp7 = cResult[2];
    }
    const tmpResult = tmp(14774);
    const emojiByIdOrName = tmpResult.useEmojiByIdOrName(guildId, tmp7);
    if (cResult[3] === tmp7) {
      if (cResult[6] === guildId) {
        if (cResult[9] === tmp6.textInput) {
          class N {
            constructor() {
              obj = closure_0(closure_2[15]);
              obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
              result = obj.openEmojiPickerActionSheet(obj1);
              return;
            }
          }
          if (cResult[12] === tmp4.content) {
            let tmp24;
            let tmp25;
            if (cResult[13] === tmp23) {
              tmp24 = cResult[14];
            }
            if (cResult[15] !== emojiByIdOrName) {
              let allEmojiNamesString;
              if (null != emojiByIdOrName) {
                const tmpResult2 = tmp(4490);
                allEmojiNamesString = tmpResult2.getAllEmojiNamesString(emojiByIdOrName);
              } else {
                const string = tmp(1127).intl.string;
                class N {
                  constructor() {
                    obj = closure_0(closure_2[15]);
                    obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                    result = obj.openEmojiPickerActionSheet(obj1);
                    return;
                  }
                }
              }
              class N {
                constructor() {
                  obj = closure_0(closure_2[15]);
                  obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                  result = obj.openEmojiPickerActionSheet(obj1);
                  return;
                }
              }
              cResult[16] = allEmojiNamesString;
              tmp25 = allEmojiNamesString;
            } else {
              tmp25 = cResult[16];
            }
            class N {
              constructor() {
                obj = closure_0(closure_2[15]);
                obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                result = obj.openEmojiPickerActionSheet(obj1);
                return;
              }
            }
            let obj2 = { style: tmp24, children: tmp25 };
            cResult[17] = tmp24;
            cResult[18] = tmp25;
            cResult[19] = closure_4(tmp(1189).LegacyText, obj2);
            const tmp29 = closure_4(tmp(1189).LegacyText, obj2);
          }
          const items = [tmp4.content, tmp23];
          cResult[12] = tmp4.content;
          cResult[13] = tmp23;
          cResult[14] = items;
          tmp24 = items;
        }
        class N {
          constructor() {
            obj = closure_0(closure_2[15]);
            obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
            result = obj.openEmojiPickerActionSheet(obj1);
            return;
          }
        }
        tmp21[0] = tmp4.container;
        tmp21[1] = tmp6.textInput;
        cResult[9] = tmp6.textInput;
        cResult[10] = tmp4.container;
        cResult[11] = tmp21;
      }
      class N {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
          result = obj.openEmojiPickerActionSheet(obj1);
          return;
        }
      }
      cResult[6] = guildId;
      cResult[7] = onChange;
      cResult[8] = N;
    }
    if (null != tmp7) {
      const obj3 = { guildId: null, id: tmp7 };
      class N {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
          result = obj.openEmojiPickerActionSheet(obj1);
          return;
        }
      }
      tmp17 = closure_4(tmp5(14773), obj3);
    } else {
      const obj4 = { resizeMode: "contain", source: onChange(17588) };
      class N {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
          result = obj.openEmojiPickerActionSheet(obj1);
          return;
        }
      }
      tmp17 = closure_4(tmp16, obj4);
    }
    cResult[3] = tmp7;
    cResult[4] = guildId;
    cResult[5] = tmp17;
  }
  let tmp10Result = emojiId;
  if (emojiId == null) {
    onChange(4486);
    let str = emojiName;
    class N {
      constructor() {
        obj = closure_0(closure_2[15]);
        obj1 = { guildId, onPressEmoji() { /* body not rendered: F147543 */ }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
        result = obj.openEmojiPickerActionSheet(obj1);
        return;
      }
    }
    if (emojiName == null) {
      str = "";
    }
    tmp10Result = tmp10(str, false);
  }
  cResult[0] = emojiId;
  cResult[1] = emojiName;
  cResult[2] = tmp10Result;
  tmp7 = tmp10Result;
}) : ((emoji) => {
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
  const tmp4 = onChange(13444)();
  if (emojiId == null) {
    const convertSurrogateToName = onChange(4486).convertSurrogateToName;
    onChange(4486);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = convertSurrogateToName(emojiName, false);
  }
  let obj = guildId(14774);
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj2 = { guildId, id: emojiId };
    tmp10 = closure_4(tmp2(14773), obj2);
    tmp11 = closure_4;
  } else {
    const obj3 = { resizeMode: "contain", source: onChange(17588) };
    const tmp2Result3 = onChange(5896);
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
  const tmp2Result4 = onChange(9215);
  const LegacyText = tmp6(1189).LegacyText;
  const tmp13 = closure_5;
  if (null != emojiByIdOrName) {
    const tmp6Result = guildId(4490);
    allEmojiNamesString = tmp6Result.getAllEmojiNamesString(emojiByIdOrName);
  } else {
    const intl = tmp6(1127).intl;
    allEmojiNamesString = intl.string(tmp6(1127).t.gXAN3P);
  }
  items1[1] = tmp11(LegacyText, obj5);
  const obj6 = { size: guildId(1189).Icon.Sizes.MEDIUM, source: onChange(9374) };
  const Icon = tmp6(1189).Icon;
  items1[2] = tmp11(Icon, obj6);
  return tmp13(tmp2Result4, obj4);
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default tmp9;
