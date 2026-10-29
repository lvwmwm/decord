// Module ID: 19847
// Function ID: 19848
// Name: FormEmojiPicker
// Dependencies: [19, 17, 1392, 21, 558, 576, 15640, 4951, 17107, 4955, 1125, 17106, 6963, 9413, 9891, 5271, 2]

// Module 19847 (FormEmojiPicker)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1392 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9891 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const EmojiIntention = EmojiConstants.EmojiIntention;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormEmojiPicker(onChange) {
  let emoji;
  let emojiId;
  let emojiName;
  let guildId;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(22);
  ({ emoji, guildId } = onChange);
  onChange = onChange.onChange;
  ({ emojiId, emojiName } = emoji);
  const tmp5 = onChange(15640)();
  if (cResult[0] === emojiId) {
    let tmp6;
    let tmp11;
    let tmp14;
    let tmp19;
    if (cResult[1] === emojiName) {
      tmp6 = cResult[2];
    }
    const tmpResult = tmp(17107);
    const emojiByIdOrName = tmpResult.useEmojiByIdOrName(guildId, tmp6);
    if (cResult[3] !== emojiByIdOrName) {
      let allEmojiNamesString = null;
      if (null != emojiByIdOrName) {
        const tmpResult2 = tmp(4955);
        allEmojiNamesString = tmpResult2.getAllEmojiNamesString(emojiByIdOrName);
      }
      cResult[3] = emojiByIdOrName;
      cResult[4] = allEmojiNamesString;
      tmp11 = allEmojiNamesString;
    } else {
      tmp11 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(tmp(1125).t.gXAN3P);
      cResult[5] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp6) {
      let tmp16;
      if (cResult[7] === guildId) {
        tmp16 = cResult[8];
      }
      if (cResult[9] === guildId) {
        let tmp21;
        let tmp22;
        if (cResult[10] === onChange) {
          tmp21 = cResult[11];
        }
        if (cResult[12] !== tmp11) {
          let tmp24 = tmp11;
          if (tmp11 == null) {
            tmp24 = jsx(tmp(5271).Text, { variant: "text-md/medium", color: "text-muted", children: tmp14 });
          }
          cResult[12] = tmp11;
          cResult[13] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[13];
        }
        if (tmp11 == null) {
          tmp11 = tmp14;
        }
        if (cResult[14] === tmp16) {
          if (cResult[15] === tmp21) {
            if (cResult[16] === tmp22) {
              let tmp27;
              if (cResult[17] === tmp11) {
                tmp27 = cResult[18];
              }
              if (cResult[19] === tmp5.inputContainer) {
                let tmp30;
                if (cResult[20] === tmp27) {
                  tmp30 = cResult[21];
                }
                return tmp30;
              }
              const tmp33 = <View style={tmp5.inputContainer}>{tmp27}</View>;
              cResult[19] = tmp5.inputContainer;
              cResult[20] = tmp27;
              cResult[21] = tmp33;
              tmp30 = tmp33;
            }
          }
        }
        const tmp29 = jsx(tmp(6963).TableRow, { start: true, end: true, icon: tmp16, label: tmp22, accessibilityLabel: tmp11, arrow: true, onPress: tmp21 });
        cResult[14] = tmp16;
        cResult[15] = tmp21;
        cResult[16] = tmp22;
        cResult[17] = tmp11;
        cResult[18] = tmp29;
        tmp27 = tmp29;
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
      cResult[9] = guildId;
      cResult[10] = onChange;
      cResult[11] = handleSelectEmoji;
      tmp21 = handleSelectEmoji;
    }
    if (null != tmp6) {
      tmp19 = jsx(tmp4(17106), { guildId, id: tmp6 });
    } else {
      const Icon = tmp(6963).TableRow.Icon;
      tmp19 = <Icon IconComponent={tmp(9413).ReactionIcon} />;
    }
    cResult[6] = tmp6;
    cResult[7] = guildId;
    cResult[8] = tmp19;
    tmp16 = tmp19;
  }
  let result = emojiId;
  if (emojiId == null) {
    let str = emojiName;
    const convertSurrogateToName = onChange(4951).convertSurrogateToName;
    onChange(4951);
    if (emojiName == null) {
      str = "";
    }
    result = convertSurrogateToName(str, false);
  }
  cResult[0] = emojiId;
  cResult[1] = emojiName;
  cResult[2] = result;
  tmp6 = result;
}) : (function FormEmojiPicker(emoji) {
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
  const tmp3 = onChange(15640)();
  if (emojiId == null) {
    const convertSurrogateToName = tmp(4951).convertSurrogateToName;
    const tmpResult = tmp(4951);
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = convertSurrogateToName(emojiName, false);
  }
  let obj = guildId(17107);
  const emojiByIdOrName = obj.useEmojiByIdOrName(guildId, emojiId);
  let allEmojiNamesString = null;
  if (null != emojiByIdOrName) {
    const tmp5Result = guildId(4955);
    allEmojiNamesString = tmp5Result.getAllEmojiNamesString(emojiByIdOrName);
  }
  const intl = tmp5(1125).intl;
  const stringResult = intl.string(guildId(1125).t.gXAN3P);
  if (null != emojiId) {
    tmp10 = jsx(tmp(17106), { guildId, id: emojiId });
    tmp9 = jsx;
  } else {
    tmp9 = jsx;
    const Icon = tmp5(6963).TableRow.Icon;
    tmp10 = <Icon IconComponent={guildId(9413).ReactionIcon} />;
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
  TableRow = tmp5(6963).TableRow;
  const tmp12 = View;
  if (allEmojiNamesString == null) {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: stringResult };
    tmp9Result = tmp9(tmp5(5271).Text, obj6);
  }
  if (allEmojiNamesString == null) {
    allEmojiNamesString = stringResult;
  }
  return tmp9(tmp12, obj4);
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default tmp3;
