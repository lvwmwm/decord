// Module ID: 18285
// Function ID: 18286
// Name: FormEmojiPicker
// Dependencies: [19, 1085, 1392, 21, 5090, 5902, 587, 558, 576, 13950, 4721, 15336, 15335, 6164, 18286, 9359, 4725, 1126, 1200, 10808, 7013, 2]

// Module 18285 (FormEmojiPicker)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import EmojiConstants from "EmojiConstants" /* 1392 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9359 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import TextStyles_mod from "TextStyles" /* 5902 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormEmojiPicker(onChange) {
  let emoji;
  let emojiId;
  let emojiName;
  let guildId;
  let items;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(26);
  ({ emoji, guildId } = onChange);
  onChange = onChange.onChange;
  ({ emojiId, emojiName } = emoji);
  const tmp4 = closure_6();
  const tmp6 = onChange(13950)();
  if (cResult[0] === emojiId) {
    let tmp7;
    let tmp16;
    if (cResult[1] === emojiName) {
      tmp7 = cResult[2];
    }
    const tmpResult = tmp(15336);
    const emojiByIdOrName = tmpResult.useEmojiByIdOrName(guildId, tmp7);
    if (cResult[3] === tmp7) {
      let tmp12;
      if (cResult[4] === guildId) {
        tmp12 = cResult[5];
      }
      if (cResult[6] === guildId) {
        let tmp18;
        if (cResult[7] === onChange) {
          tmp18 = cResult[8];
        }
        if (cResult[9] === tmp6.textInput) {
          let tmp19;
          if (cResult[10] === tmp4.container) {
            tmp19 = cResult[11];
          }
          const tmp21 = null != emojiByIdOrName ? tmp4.text : tmp4.placeholder;
          if (cResult[12] === tmp4.content) {
            let tmp22;
            let tmp23;
            if (cResult[13] === tmp21) {
              tmp22 = cResult[14];
            }
            if (cResult[15] !== emojiByIdOrName) {
              let allEmojiNamesString;
              if (null != emojiByIdOrName) {
                const tmpResult2 = tmp(4725);
                allEmojiNamesString = tmpResult2.getAllEmojiNamesString(emojiByIdOrName);
              } else {
                const intl = tmp(1126).intl;
                allEmojiNamesString = intl.string(tmp(1126).t.gXAN3P);
              }
              cResult[15] = emojiByIdOrName;
              cResult[16] = allEmojiNamesString;
              tmp23 = allEmojiNamesString;
            } else {
              tmp23 = cResult[16];
            }
            if (cResult[17] === tmp22) {
              let tmp25;
              let tmp29;
              if (cResult[18] === tmp23) {
                tmp25 = cResult[19];
              }
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { size: tmp(1200).Icon.Sizes.MEDIUM, source: onChange(10808) };
                const Icon = tmp(1200).Icon;
                const tmp31 = closure_4(Icon, obj2);
                cResult[20] = tmp31;
                tmp29 = tmp31;
              } else {
                tmp29 = cResult[20];
              }
              if (cResult[21] === tmp12) {
                if (cResult[22] === tmp18) {
                  if (cResult[23] === tmp19) {
                    let tmp32;
                    if (cResult[24] === tmp25) {
                      tmp32 = cResult[25];
                    }
                    return tmp32;
                  }
                }
              }
              const obj3 = { style: tmp19, accessibilityRole: "link", onPress: tmp18, children: items };
              items = [tmp12, tmp25, tmp29];
              const tmp34 = closure_5(onChange(7013), obj3);
              cResult[21] = tmp12;
              cResult[22] = tmp18;
              cResult[23] = tmp19;
              cResult[24] = tmp25;
              cResult[25] = tmp34;
              tmp32 = tmp34;
            }
            const obj4 = { style: tmp22, children: tmp23 };
            const tmp27 = closure_4(tmp(1200).LegacyText, obj4);
            cResult[17] = tmp22;
            cResult[18] = tmp23;
            cResult[19] = tmp27;
            tmp25 = tmp27;
          }
          const items1 = [tmp4.content, tmp21];
          cResult[12] = tmp4.content;
          cResult[13] = tmp21;
          cResult[14] = items1;
          tmp22 = items1;
        }
        const items2 = [tmp4.container, tmp6.textInput];
        cResult[9] = tmp6.textInput;
        cResult[10] = tmp4.container;
        cResult[11] = items2;
        tmp19 = items2;
      }
      function handleSelectEmoji() {
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
      cResult[6] = guildId;
      cResult[7] = onChange;
      cResult[8] = handleSelectEmoji;
      tmp18 = handleSelectEmoji;
    }
    if (null != tmp7) {
      const obj5 = { guildId, id: tmp7 };
      tmp16 = closure_4(tmp5(15335), obj5);
    } else {
      const obj6 = { resizeMode: "contain", source: onChange(18286) };
      const tmp5Result = onChange(6164);
      tmp16 = closure_4(tmp5Result, obj6);
    }
    cResult[3] = tmp7;
    cResult[4] = guildId;
    cResult[5] = tmp16;
    tmp12 = tmp16;
  }
  let result = emojiId;
  if (emojiId == null) {
    let str = emojiName;
    const convertSurrogateToName = onChange(4721).convertSurrogateToName;
    onChange(4721);
    if (emojiName == null) {
      str = "";
    }
    result = convertSurrogateToName(str, false);
  }
  cResult[0] = emojiId;
  cResult[1] = emojiName;
  cResult[2] = result;
  tmp7 = result;
}) : (function FormEmojiPicker(emoji) {
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
  const tmp4 = onChange(13950)();
  if (emojiId == null) {
    const convertSurrogateToName = onChange(4721).convertSurrogateToName;
    onChange(4721);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = convertSurrogateToName(emojiName, false);
  }
  let obj = guildId(15336);
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj2 = { guildId, id: emojiId };
    tmp10 = closure_4(tmp2(15335), obj2);
    tmp11 = closure_4;
  } else {
    const obj3 = { resizeMode: "contain", source: onChange(18286) };
    const tmp2Result3 = onChange(6164);
    tmp10 = closure_4(tmp2Result3, obj3);
    tmp11 = closure_4;
  }
  const obj4 = {
    style: items,
    accessibilityRole: "link",
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
    },
    children: items1
  };
  items = [tmp.container, tmp4.textInput];
  items1 = [tmp10, , ];
  const items2 = [tmp.content, ];
  const obj5 = { style: items2, children: allEmojiNamesString };
  items2[1] = null != emojiByIdOrName ? tmp.text : tmp.placeholder;
  const tmp2Result4 = onChange(7013);
  const LegacyText = tmp6(1200).LegacyText;
  const tmp13 = closure_5;
  if (null != emojiByIdOrName) {
    const tmp6Result = guildId(4725);
    allEmojiNamesString = tmp6Result.getAllEmojiNamesString(emojiByIdOrName);
  } else {
    const intl = tmp6(1126).intl;
    allEmojiNamesString = intl.string(tmp6(1126).t.gXAN3P);
  }
  items1[1] = tmp11(LegacyText, obj5);
  const obj6 = { size: guildId(1200).Icon.Sizes.MEDIUM, source: onChange(10808) };
  const Icon = tmp6(1200).Icon;
  items1[2] = tmp11(Icon, obj6);
  return tmp13(tmp2Result4, obj4);
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default tmp9;
