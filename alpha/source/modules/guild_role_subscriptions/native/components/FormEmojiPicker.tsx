// Module ID: 19299
// Function ID: 19300
// Name: FormEmojiPicker
// Dependencies: [19, 1395, 21, 4971, 558, 576, 15140, 4917, 16593, 16592, 9350, 9825, 4921, 1128, 5234, 7305, 9041, 2]

// Module 19299 (FormEmojiPicker)
import EmojiConstants from "EmojiConstants" /* 1395 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9825 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, emojiPickerIcon: { width: 20, height: 20 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormEmojiPicker(onChange) {
  let emoji;
  let emojiId;
  let emojiName;
  let guildId;
  let items;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(25);
  ({ emoji, guildId } = onChange);
  onChange = onChange.onChange;
  ({ emojiId, emojiName } = emoji);
  const tmp4 = closure_6();
  const tmp6 = onChange(15140)();
  if (cResult[0] === emojiId) {
    let tmp7;
    let tmp15;
    if (cResult[1] === emojiName) {
      tmp7 = cResult[2];
    }
    const tmpResult = tmp(16593);
    const emojiByIdOrName = tmpResult.useEmojiByIdOrName(guildId, tmp7);
    if (cResult[3] === tmp7) {
      if (cResult[4] === guildId) {
        let tmp12;
        if (cResult[5] === tmp4.emojiPickerIcon) {
          tmp12 = cResult[6];
        }
        if (cResult[7] === guildId) {
          let tmp17;
          if (cResult[8] === onChange) {
            tmp17 = cResult[9];
          }
          if (cResult[10] === tmp6.textInput) {
            let tmp18;
            let tmp20;
            if (cResult[11] === tmp4.container) {
              tmp18 = cResult[12];
            }
            let str2 = "text-muted";
            if (null != emojiByIdOrName) {
              str2 = "text-default";
            }
            if (cResult[13] !== emojiByIdOrName) {
              let allEmojiNamesString;
              if (null != emojiByIdOrName) {
                const tmpResult2 = tmp(4921);
                allEmojiNamesString = tmpResult2.getAllEmojiNamesString(emojiByIdOrName);
              } else {
                const intl = tmp(1128).intl;
                allEmojiNamesString = intl.string(tmp(1128).t.gXAN3P);
              }
              cResult[13] = emojiByIdOrName;
              cResult[14] = allEmojiNamesString;
              tmp20 = allEmojiNamesString;
            } else {
              tmp20 = cResult[14];
            }
            if (cResult[15] === tmp4.content) {
              if (cResult[16] === str2) {
                let tmp22;
                let tmp26;
                if (cResult[17] === tmp20) {
                  tmp22 = cResult[18];
                }
                const _Symbol = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp28 = closure_4(tmp(7305).ChevronSmallRightIcon, { size: "md" });
                  cResult[19] = tmp28;
                  tmp26 = tmp28;
                } else {
                  tmp26 = cResult[19];
                }
                if (cResult[20] === tmp12) {
                  if (cResult[21] === tmp17) {
                    if (cResult[22] === tmp18) {
                      let tmp29;
                      if (cResult[23] === tmp22) {
                        tmp29 = cResult[24];
                      }
                      return tmp29;
                    }
                  }
                }
                let obj2 = { style: tmp18, accessibilityRole: "link", onPress: tmp17, children: items };
                items = [tmp12, tmp22, tmp26];
                const tmp31 = closure_5(onChange(9041), obj2);
                cResult[20] = tmp12;
                cResult[21] = tmp17;
                cResult[22] = tmp18;
                cResult[23] = tmp22;
                cResult[24] = tmp31;
                tmp29 = tmp31;
              }
            }
            const obj3 = { style: tmp4.content, variant: "text-md/medium", color: str2, children: tmp20 };
            const tmp24 = closure_4(tmp(5234).Text, obj3);
            cResult[15] = tmp4.content;
            cResult[16] = str2;
            cResult[17] = tmp20;
            cResult[18] = tmp24;
            tmp22 = tmp24;
          }
          const items1 = [tmp4.container, tmp6.textInput];
          cResult[10] = tmp6.textInput;
          cResult[11] = tmp4.container;
          cResult[12] = items1;
          tmp18 = items1;
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
        cResult[7] = guildId;
        cResult[8] = onChange;
        cResult[9] = handleSelectEmoji;
        tmp17 = handleSelectEmoji;
      }
    }
    if (null != tmp7) {
      const obj4 = { guildId, id: tmp7 };
      tmp15 = closure_4(tmp5(16592), obj4);
    } else {
      const obj5 = { size: "custom", style: tmp4.emojiPickerIcon };
      tmp15 = closure_4(tmp(9350).ReactionIcon, obj5);
    }
    cResult[3] = tmp7;
    cResult[4] = guildId;
    cResult[5] = tmp4.emojiPickerIcon;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  }
  let result = emojiId;
  if (emojiId == null) {
    let str = emojiName;
    const convertSurrogateToName = onChange(4917).convertSurrogateToName;
    onChange(4917);
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
  let str;
  let tmp8;
  let tmp9;
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = closure_6();
  const tmp3 = dependencyMap;
  const tmp4 = onChange(15140)();
  if (emojiId == null) {
    const convertSurrogateToName = onChange(4917).convertSurrogateToName;
    onChange(4917);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = convertSurrogateToName(emojiName, false);
  }
  let obj = guildId(16593);
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj2 = { guildId, id: emojiId };
    tmp9 = closure_4(tmp2(16592), obj2);
    tmp8 = closure_4;
  } else {
    tmp8 = closure_4;
    const obj3 = { size: "custom", style: tmp.emojiPickerIcon };
    tmp9 = closure_4(tmp6(9350).ReactionIcon, obj3);
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
  items1 = [tmp9, , ];
  const obj5 = { style: tmp.content, variant: "text-md/medium", color: str, children: allEmojiNamesString };
  str = "text-muted";
  const tmp2Result2 = onChange(9041);
  const Text = tmp6(5234).Text;
  const tmp11 = closure_5;
  if (null != emojiByIdOrName) {
    str = "text-default";
  }
  if (null != emojiByIdOrName) {
    const tmp6Result = guildId(4921);
    allEmojiNamesString = tmp6Result.getAllEmojiNamesString(emojiByIdOrName);
  } else {
    const intl = tmp6(1128).intl;
    allEmojiNamesString = intl.string(tmp6(1128).t.gXAN3P);
  }
  items1[1] = tmp8(Text, obj5);
  items1[2] = tmp8(guildId(7305).ChevronSmallRightIcon, { size: "md" });
  return tmp11(tmp2Result2, obj4);
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default tmp4;
