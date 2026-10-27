// Module ID: 12048
// Function ID: 12049
// Name: AppLauncherCommandOption
// Dependencies: [19, 17, 1501, 21, 4972, 587, 558, 576, 1997, 12049, 12056, 12058, 12062, 12083, 12084, 6828, 12087, 12089, 12090, 12096, 7020, 6910, 2]

// Module 12048 (AppLauncherCommandOption)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1501 */;
import utils_AutocompleteUtilsDefault from "utils/AutocompleteUtils" /* 6828 */;
import AppLauncherChoicesOptionDefault from "AppLauncherChoicesOption" /* 12049 */;
import AppLauncherAutocompleteOptionDefault from "AppLauncherAutocompleteOption" /* 12056 */;
import AppLauncherTextInputOptionDefault from "AppLauncherTextInputOption" /* 12058 */;
import AppLauncherAttachmentOptionDefault from "AppLauncherAttachmentOption" /* 12062 */;
import AppLauncherBooleanOptionDefault from "AppLauncherBooleanOption" /* 12083 */;
import AppLauncherMentionableListActionSheet from "AppLauncherMentionableListActionSheet" /* 12084 */;
import AppLauncherMentionableOptionDefault from "AppLauncherMentionableOption" /* 12087 */;
import AppLauncherRoleOptionDefault from "AppLauncherRoleOption" /* 12089 */;
import AppLauncherUserOptionDefault from "AppLauncherUserOption" /* 12090 */;
import AppLauncherChannelOptionDefault from "AppLauncherChannelOption" /* 12096 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = AppLauncherNativeConstants.AppLauncherOptionAutoFocusType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { dismissableOptionWrapper: { flexDirection: "row", alignItems: "center" }, optionViewContainer: { flex: 1 }, dismissButton: obj2 };
obj2 = { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherCommandOption(option) {
  let autoFocusType;
  let channel;
  let command;
  let hasError;
  let items;
  let onDismiss;
  let onEndEditing;
  let onFocus;
  let onPressAttachmentOption;
  let optionValues;
  let tmp13;
  let tmp = option;
  let tmp2 = onEndEditing;
  let obj = option(onEndEditing[7]);
  const cResult = obj.c(154);
  option = option.option;
  const onStartEditing = option.onStartEditing;
  onEndEditing = option.onEndEditing;
  const onOptionValueChange = option.onOptionValueChange;
  const onPress = option.onPress;
  ({ onPressAttachmentOption, onDismiss } = option);
  ({ onFocus, channel, autoFocusType, command, optionValues, hasError } = option);
  const tmp4 = closure_7();
  let type = option.type;
  if (option(onEndEditing[8]).ApplicationCommandOptionType.STRING !== type) {
    if (tmp(tmp2[8]).ApplicationCommandOptionType.INTEGER !== type) {
      let tmp79;
      if (tmp(tmp2[8]).ApplicationCommandOptionType.NUMBER !== type) {
        if (tmp(tmp2[8]).ApplicationCommandOptionType.ATTACHMENT === type) {
          if (cResult[59] === onEndEditing) {
            if (cResult[60] === onOptionValueChange) {
              let tmp56;
              if (cResult[61] === option) {
                tmp56 = cResult[62];
              }
              if (cResult[63] === channel) {
                if (cResult[64] === hasError) {
                  if (cResult[65] === onPressAttachmentOption) {
                    if (cResult[66] === option) {
                      if (cResult[67] === tmp56) {
                        let tmp59;
                        if (cResult[68] === autoFocusType === onPress.OPTIONAL_OPTION_ADDED) {
                          tmp59 = cResult[69];
                        }
                        tmp13 = tmp59;
                      }
                    }
                  }
                }
              }
              let obj2 = { option, onSelectAttachment: tmp56, channel, autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED, hasError, onPress: onPressAttachmentOption };
              const tmp62 = onDismiss(onStartEditing(tmp2[12]), obj2, option.name);
              cResult[63] = channel;
              cResult[64] = hasError;
              cResult[65] = onPressAttachmentOption;
              cResult[66] = option;
              cResult[67] = tmp56;
              cResult[68] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
              cResult[69] = tmp62;
              tmp59 = tmp62;
            }
          }
          function ee(text) {
            let items1;
            onEndEditing(option);
            const tmp = option;
            const tmp3 = onOptionValueChange;
            if (null != text) {
              const items = [{ type: "text", text }];
              items1 = items;
              const obj = { type: "text", text };
            } else {
              items1 = [];
            }
            tmp3(tmp, items1);
          }
          cResult[59] = onEndEditing;
          cResult[60] = onOptionValueChange;
          cResult[61] = option;
          cResult[62] = ee;
          tmp56 = ee;
        } else if (tmp(tmp2[8]).ApplicationCommandOptionType.BOOLEAN === type) {
          let first;
          if (optionValues.current[option.name] != null) {
            first = tmp48[0];
          }
          if (cResult[70] === onPress) {
            if (cResult[71] === onEndEditing) {
              if (cResult[72] === onOptionValueChange) {
                let tmp51;
                if (cResult[73] === option) {
                  tmp51 = cResult[74];
                }
                if (cResult[75] === hasError) {
                  if (cResult[76] === option) {
                    if (cResult[77] === first) {
                      let tmp52;
                      if (cResult[78] === tmp51) {
                        tmp52 = cResult[79];
                      }
                      tmp13 = tmp52;
                    }
                  }
                }
                let obj3 = { option, initialValue: first, onPress: tmp51, hasError };
                const tmp55 = onDismiss(onStartEditing(tmp2[13]), obj3, option.name);
                cResult[75] = hasError;
                cResult[76] = option;
                cResult[77] = first;
                cResult[78] = tmp51;
                cResult[79] = tmp55;
                tmp52 = tmp55;
              }
            }
          }
          function oe(arg0) {
            onPress();
            onEndEditing(option);
            const items = [{ type: "text", text: arg0.toString() }];
            ({ type: "text", text: arg0.toString() });
            onOptionValueChange(option, items);
          }
          cResult[70] = onPress;
          cResult[71] = onEndEditing;
          cResult[72] = onOptionValueChange;
          cResult[73] = option;
          cResult[74] = oe;
          tmp51 = oe;
        } else if (tmp(tmp2[8]).ApplicationCommandOptionType.MENTIONABLE === type) {
          let first1;
          if (optionValues.current[option.name] != null) {
            first1 = tmp37[0];
          }
          if (cResult[80] === onOptionValueChange) {
            let tmp40;
            if (cResult[81] === option) {
              tmp40 = cResult[82];
            }
            if (cResult[83] === onEndEditing) {
              let tmp41;
              if (cResult[84] === option) {
                tmp41 = cResult[85];
              }
              if (cResult[86] === channel) {
                if (cResult[87] === onPress) {
                  if (cResult[88] === hasError) {
                    if (cResult[89] === option) {
                      if (cResult[90] === first1) {
                        if (cResult[91] === tmp40) {
                          if (cResult[92] === tmp41) {
                            let tmp44;
                            if (cResult[93] === autoFocusType === onPress.OPTIONAL_OPTION_ADDED) {
                              tmp44 = cResult[94];
                            }
                            tmp13 = tmp44;
                          }
                        }
                      }
                    }
                  }
                }
              }
              let obj4 = { option, initialValue: first1, onMentionablePress: tmp40, onActionSheetDismiss: tmp41, channel, autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED, hasError, onPress };
              const tmp47 = onDismiss(onStartEditing(tmp2[16]), obj4);
              cResult[86] = channel;
              cResult[87] = onPress;
              cResult[88] = hasError;
              cResult[89] = option;
              cResult[90] = first1;
              cResult[91] = tmp40;
              cResult[92] = tmp41;
              cResult[93] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
              cResult[94] = tmp47;
              tmp44 = tmp47;
            }
            function re() {
              return onEndEditing(option);
            }
            cResult[83] = onEndEditing;
            cResult[84] = option;
            cResult[85] = re;
            tmp41 = re;
          }
          function se(mentionable) {
            mentionable = mentionable.mentionable;
            if (null != mentionable) {
              const type = mentionable.type;
              if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
                const items = [{ type: "userMention", userId: mentionable.result.user.id }];
                const obj2 = { type: "userMention", userId: mentionable.result.user.id };
                onOptionValueChange(option, items);
              } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
                const items1 = [{ type: "roleMention", roleId: mentionable.result.id }];
                const obj3 = { type: "roleMention", roleId: mentionable.result.id };
                onOptionValueChange(option, items1);
              } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
                const result = mentionable.result;
                const text = result.text;
                const obj4 = utils_AutocompleteUtilsDefault;
                if (text === obj4.MENTION_EVERYONE().text) {
                  const items2 = [{ type: "textMention", text: "@everyone" }];
                  onOptionValueChange(option, items2);
                } else {
                  const items3 = [{ type: "text", text: result.text }];
                  const obj = { type: "text", text: result.text };
                  onOptionValueChange(option, items3);
                }
              }
            } else {
              onOptionValueChange(option, []);
            }
          }
          cResult[80] = onOptionValueChange;
          cResult[81] = option;
          cResult[82] = se;
          tmp40 = se;
        } else if (tmp(tmp2[8]).ApplicationCommandOptionType.ROLE === type) {
          let first2;
          if (optionValues.current[option.name] != null) {
            first2 = tmp26[0];
          }
          if (cResult[95] === onOptionValueChange) {
            let tmp29;
            if (cResult[96] === option) {
              tmp29 = cResult[97];
            }
            if (cResult[98] === onEndEditing) {
              let tmp30;
              if (cResult[99] === option) {
                tmp30 = cResult[100];
              }
              if (cResult[101] === channel) {
                if (cResult[102] === onPress) {
                  if (cResult[103] === hasError) {
                    if (cResult[104] === option) {
                      if (cResult[105] === first2) {
                        if (cResult[106] === tmp29) {
                          if (cResult[107] === tmp30) {
                            let tmp33;
                            if (cResult[108] === autoFocusType === onPress.OPTIONAL_OPTION_ADDED) {
                              tmp33 = cResult[109];
                            }
                            tmp13 = tmp33;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj5 = { option, initialValue: first2, onRolePress: tmp29, onActionSheetDismiss: tmp30, channel, autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED, hasError, onPress };
              const tmp36 = onDismiss(onStartEditing(tmp2[17]), obj5, option.name);
              cResult[101] = channel;
              cResult[102] = onPress;
              cResult[103] = hasError;
              cResult[104] = option;
              cResult[105] = first2;
              cResult[106] = tmp29;
              cResult[107] = tmp30;
              cResult[108] = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
              cResult[109] = tmp36;
              tmp33 = tmp36;
            }
            function me() {
              onEndEditing(option);
            }
            cResult[98] = onEndEditing;
            cResult[99] = option;
            cResult[100] = me;
            tmp30 = me;
          }
          function ue(role) {
            let items;
            role = role.role;
            const tmp = onOptionValueChange;
            const tmp2 = option;
            if (null == role) {
              items = [];
            } else {
              items = [{ type: "roleMention", roleId: role.id }];
              const obj = { type: "roleMention", roleId: role.id };
            }
            tmp(tmp2, items);
          }
          cResult[95] = onOptionValueChange;
          cResult[96] = option;
          cResult[97] = ue;
          tmp29 = ue;
        } else if (tmp(tmp2[8]).ApplicationCommandOptionType.USER === type) {
          let first3;
          if (optionValues.current[option.name] != null) {
            first3 = tmp16[0];
          }
          if (cResult[110] === onOptionValueChange) {
            let tmp19;
            if (cResult[111] === option) {
              tmp19 = cResult[112];
            }
            if (cResult[113] === onEndEditing) {
              let tmp20;
              if (cResult[114] === option) {
                tmp20 = cResult[115];
              }
              class Ee {
                constructor() {
                  return onEndEditing(option);
                }
              }
              if (cResult[116] === channel) {
                if (cResult[117] === onPress) {
                  if (cResult[118] === hasError) {
                    if (cResult[119] === option) {
                      if (cResult[120] === first3) {
                        if (cResult[121] === tmp19) {
                          if (cResult[122] === tmp20) {
                            let tmp23;
                            if (cResult[123] === tmp22) {
                              tmp23 = cResult[124];
                            }
                            tmp13 = tmp23;
                          }
                        }
                      }
                    }
                  }
                }
              }
              class Ae {
                constructor(user) {
                  let items;
                  user = user.user;
                  const tmp = onOptionValueChange;
                  const tmp2 = option;
                  if (null == user) {
                    items = [];
                  } else {
                    let id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    items = [{ type: "userMention", userId: id }];
                    const obj = { type: "userMention", userId: id };
                  }
                  tmp(tmp2, items);
                }
              }
              const obj6 = { option, initialValue: first3, onUserPress: tmp19, onActionSheetDismiss: tmp20, channel, autoFocus: tmp22, hasError, onPress };
              const tmp25 = onDismiss(onStartEditing(tmp2[18]), obj6, option.name);
              cResult[116] = channel;
              cResult[117] = onPress;
              cResult[118] = hasError;
              cResult[119] = option;
              cResult[120] = first3;
              cResult[121] = tmp19;
              cResult[122] = tmp20;
              cResult[123] = tmp22;
              cResult[124] = tmp25;
              tmp23 = tmp25;
            }
            class Ee {
              constructor() {
                return onEndEditing(option);
              }
            }
            cResult[113] = onEndEditing;
            class Ae {
              constructor(user) {
                let items;
                user = user.user;
                const tmp = onOptionValueChange;
                const tmp2 = option;
                if (null == user) {
                  items = [];
                } else {
                  let id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  items = [{ type: "userMention", userId: id }];
                  const obj = { type: "userMention", userId: id };
                }
                tmp(tmp2, items);
              }
            }
            cResult[114] = option;
            cResult[115] = Ee;
            tmp20 = Ee;
          }
          class Ae {
            constructor(user) {
              let items;
              user = user.user;
              const tmp = onOptionValueChange;
              const tmp2 = option;
              if (null == user) {
                items = [];
              } else {
                let id = user;
                if (typeof user !== "string") {
                  id = user.id;
                }
                items = [{ type: "userMention", userId: id }];
                const obj = { type: "userMention", userId: id };
              }
              tmp(tmp2, items);
            }
          }
          cResult[110] = onOptionValueChange;
          cResult[111] = option;
          cResult[112] = Ae;
          tmp19 = Ae;
        } else if (tmp(tmp2[8]).ApplicationCommandOptionType.CHANNEL === type) {
          let first4;
          class Ee {
            constructor() {
              return onEndEditing(option);
            }
          }
          if (optionValues.current[option.name] != null) {
            first4 = tmp6[0];
          }
          if (cResult[125] === onOptionValueChange) {
            let tmp9;
            if (cResult[126] === option) {
              tmp9 = cResult[127];
            }
            if (cResult[128] === onEndEditing) {
              let tmp10;
              if (cResult[129] === option) {
                tmp10 = cResult[130];
              }
              class Ee {
                constructor() {
                  return onEndEditing(option);
                }
              }
              if (cResult[131] === channel) {
                if (cResult[132] === onPress) {
                  if (cResult[133] === hasError) {
                    if (cResult[134] === option) {
                      if (cResult[135] === first4) {
                        if (cResult[136] === tmp9) {
                          if (cResult[137] === tmp10) {
                            if (cResult[138] === tmp12) {
                              tmp13 = cResult[139];
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              class Ae {
                constructor(user) {
                  let items;
                  user = user.user;
                  const tmp = onOptionValueChange;
                  const tmp2 = option;
                  if (null == user) {
                    items = [];
                  } else {
                    let id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    items = [{ type: "userMention", userId: id }];
                    const obj = { type: "userMention", userId: id };
                  }
                  tmp(tmp2, items);
                }
              }
              const obj7 = { option, initialValue: first4, onChannelPress: tmp9, onActionSheetDismiss: tmp10, channel, autoFocus: tmp12, hasError, onPress };
              const tmp15 = onDismiss(onStartEditing(tmp2[19]), obj7, option.name);
              cResult[131] = channel;
              cResult[132] = onPress;
              cResult[133] = hasError;
              cResult[134] = option;
              cResult[135] = first4;
              cResult[136] = tmp9;
              cResult[137] = tmp10;
              cResult[138] = tmp12;
              cResult[139] = tmp15;
              tmp13 = tmp15;
            }
            class Ee {
              constructor() {
                return onEndEditing(option);
              }
            }
            cResult[128] = onEndEditing;
            class Ae {
              constructor(user) {
                let items;
                user = user.user;
                const tmp = onOptionValueChange;
                const tmp2 = option;
                if (null == user) {
                  items = [];
                } else {
                  let id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  items = [{ type: "userMention", userId: id }];
                  const obj = { type: "userMention", userId: id };
                }
                tmp(tmp2, items);
              }
            }
            cResult[129] = option;
            cResult[130] = Pe;
            tmp10 = Pe;
          }
          class Ae {
            constructor(user) {
              let items;
              user = user.user;
              const tmp = onOptionValueChange;
              const tmp2 = option;
              if (null == user) {
                items = [];
              } else {
                let id = user;
                if (typeof user !== "string") {
                  id = user.id;
                }
                items = [{ type: "userMention", userId: id }];
                const obj = { type: "userMention", userId: id };
              }
              tmp(tmp2, items);
            }
          }
          cResult[125] = onOptionValueChange;
          cResult[126] = option;
          cResult[127] = De;
          tmp9 = De;
        } else {
          return null;
        }
      }
      if (null != onDismiss) {
        if (cResult[140] === tmp13) {
          let tmp80;
          if (cResult[141] === tmp4.optionViewContainer) {
            tmp80 = cResult[142];
          }
          if (cResult[143] === onDismiss) {
            let tmp83;
            if (cResult[144] === option) {
              tmp83 = cResult[145];
            }
            class O {
              constructor() {
                return onDismiss(option);
              }
            }
            let str = "react.memo_cache_sentinel";
            class Ae {
              constructor(user) {
                let items;
                user = user.user;
                const tmp = onOptionValueChange;
                const tmp2 = option;
                if (null == user) {
                  items = [];
                } else {
                  let id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  items = [{ type: "userMention", userId: id }];
                  const obj = { type: "userMention", userId: id };
                }
                tmp(tmp2, items);
              }
            }
            if (cResult[147] === tmp4.dismissButton) {
              let tmp87;
              if (cResult[148] === tmp83) {
                tmp87 = cResult[149];
              }
              if (cResult[150] === tmp4.dismissableOptionWrapper) {
                if (cResult[151] === tmp80) {
                  let tmp90;
                  if (cResult[152] === tmp87) {
                    tmp90 = cResult[153];
                  }
                  tmp79 = tmp90;
                }
              }
              class O {
                constructor() {
                  return onDismiss(option);
                }
              }
              const obj8 = { style: null, children: items };
              class Ae {
                constructor(user) {
                  let items;
                  user = user.user;
                  const tmp = onOptionValueChange;
                  const tmp2 = option;
                  if (null == user) {
                    items = [];
                  } else {
                    let id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    items = [{ type: "userMention", userId: id }];
                    const obj = { type: "userMention", userId: id };
                  }
                  tmp(tmp2, items);
                }
              }
              items = [tmp80, tmp87];
              const tmp92 = closure_6(onOptionValueChange, obj8);
              cResult[150] = tmp4.dismissableOptionWrapper;
              cResult[151] = tmp80;
              cResult[152] = tmp87;
              cResult[153] = tmp92;
              tmp90 = tmp92;
            }
            const obj9 = { style: tmp4.dismissButton, onPress: tmp83, children: tmp86 };
            const tmp89 = onDismiss(tmp(tmp2[21]).PressableOpacity, obj9);
            cResult[147] = tmp4.dismissButton;
            cResult[148] = tmp83;
            cResult[149] = tmp89;
            tmp87 = tmp89;
          }
          class O {
            constructor() {
              return onDismiss(option);
            }
          }
          cResult[143] = onDismiss;
          class Ae {
            constructor(user) {
              let items;
              user = user.user;
              const tmp = onOptionValueChange;
              const tmp2 = option;
              if (null == user) {
                items = [];
              } else {
                let id = user;
                if (typeof user !== "string") {
                  id = user.id;
                }
                items = [{ type: "userMention", userId: id }];
                const obj = { type: "userMention", userId: id };
              }
              tmp(tmp2, items);
            }
          }
          cResult[144] = option;
          cResult[145] = O;
          tmp83 = O;
        }
        class Ee {
          constructor() {
            return onEndEditing(option);
          }
        }
        const obj10 = { style: tmp4.optionViewContainer, children: null };
        class Ae {
          constructor(user) {
            let items;
            user = user.user;
            const tmp = onOptionValueChange;
            const tmp2 = option;
            if (null == user) {
              items = [];
            } else {
              let id = user;
              if (typeof user !== "string") {
                id = user.id;
              }
              items = [{ type: "userMention", userId: id }];
              const obj = { type: "userMention", userId: id };
            }
            tmp(tmp2, items);
          }
        }
        const tmp82 = onDismiss(onOptionValueChange, obj10);
        cResult[140] = tmp13;
        cResult[141] = tmp4.optionViewContainer;
        cResult[142] = tmp82;
        tmp80 = tmp82;
      }
      return tmp79;
    }
  }
  if (null != option.choices) {
    class O {
      constructor() {
        return onDismiss(option);
      }
    }
    if (cResult[0] === onEndEditing) {
      if (cResult[1] === onOptionValueChange) {
        let tmp70;
        if (cResult[2] === option) {
          tmp70 = cResult[3];
        }
        if (cResult[4] === onPress) {
          if (cResult[5] === onStartEditing) {
            let tmp71;
            if (cResult[6] === option) {
              tmp71 = cResult[7];
            }
            if (cResult[8] === onEndEditing) {
              let tmp72;
              if (cResult[9] === option) {
                tmp72 = cResult[10];
              }
              class O {
                constructor() {
                  return onDismiss(option);
                }
              }
              if (cResult[11] === hasError) {
                if (cResult[12] === option) {
                  if (cResult[13] === tmp69) {
                    if (cResult[14] === tmp70) {
                      if (cResult[15] === tmp71) {
                        if (cResult[16] === tmp72) {
                          let tmp76;
                          if (cResult[17] === tmp75) {
                            tmp76 = cResult[18];
                          }
                          tmp13 = tmp76;
                        }
                      }
                    }
                  }
                }
              }
              class R {
                constructor(displayName) {
                  onEndEditing(option);
                  let str;
                  const tmp = option;
                  const tmp3 = onOptionValueChange;
                  if (displayName != null) {
                    str = displayName.displayName;
                  }
                  if (str == null) {
                    str = "";
                  }
                  const items = [{ type: "text", text: str }];
                  tmp3(tmp, items);
                }
              }
              class Ae {
                constructor(user) {
                  let items;
                  user = user.user;
                  const tmp = onOptionValueChange;
                  const tmp2 = option;
                  if (null == user) {
                    items = [];
                  } else {
                    let id = user;
                    if (typeof user !== "string") {
                      id = user.id;
                    }
                    items = [{ type: "userMention", userId: id }];
                    const obj = { type: "userMention", userId: id };
                  }
                  tmp(tmp2, items);
                }
              }
              const obj11 = { option, initialValue: tmp69, onSelect: tmp70, onOpenChoicesSheet: tmp71, onDismissChoicesSheet: tmp72, autoFocus: tmp75, hasError };
              const tmp77 = onDismiss(onStartEditing(tmp2[9]), obj11, option.name);
              cResult[11] = hasError;
              cResult[12] = option;
              cResult[13] = tmp69;
              cResult[14] = tmp70;
              cResult[15] = tmp71;
              cResult[16] = tmp72;
              cResult[17] = tmp75;
              cResult[18] = tmp77;
              tmp76 = tmp77;
            }
            class O {
              constructor() {
                return onDismiss(option);
              }
            }
            class R {
              constructor(displayName) {
                onEndEditing(option);
                let str;
                const tmp = option;
                const tmp3 = onOptionValueChange;
                if (displayName != null) {
                  str = displayName.displayName;
                }
                if (str == null) {
                  str = "";
                }
                const items = [{ type: "text", text: str }];
                tmp3(tmp, items);
              }
            }
            class Ae {
              constructor(user) {
                let items;
                user = user.user;
                const tmp = onOptionValueChange;
                const tmp2 = option;
                if (null == user) {
                  items = [];
                } else {
                  let id = user;
                  if (typeof user !== "string") {
                    id = user.id;
                  }
                  items = [{ type: "userMention", userId: id }];
                  const obj = { type: "userMention", userId: id };
                }
                tmp(tmp2, items);
              }
            }
            cResult[9] = option;
            cResult[10] = tmp73;
            tmp72 = tmp73;
          }
        }
        class O {
          constructor() {
            return onDismiss(option);
          }
        }
        class R {
          constructor(displayName) {
            onEndEditing(option);
            let str;
            const tmp = option;
            const tmp3 = onOptionValueChange;
            if (displayName != null) {
              str = displayName.displayName;
            }
            if (str == null) {
              str = "";
            }
            const items = [{ type: "text", text: str }];
            tmp3(tmp, items);
          }
        }
        class Ae {
          constructor(user) {
            let items;
            user = user.user;
            const tmp = onOptionValueChange;
            const tmp2 = option;
            if (null == user) {
              items = [];
            } else {
              let id = user;
              if (typeof user !== "string") {
                id = user.id;
              }
              items = [{ type: "userMention", userId: id }];
              const obj = { type: "userMention", userId: id };
            }
            tmp(tmp2, items);
          }
        }
        cResult[5] = onStartEditing;
        cResult[6] = option;
        cResult[7] = F;
        tmp71 = F;
      }
    }
    class R {
      constructor(displayName) {
        onEndEditing(option);
        let str;
        const tmp = option;
        const tmp3 = onOptionValueChange;
        if (displayName != null) {
          str = displayName.displayName;
        }
        if (str == null) {
          str = "";
        }
        const items = [{ type: "text", text: str }];
        tmp3(tmp, items);
      }
    }
    class Ae {
      constructor(user) {
        let items;
        user = user.user;
        const tmp = onOptionValueChange;
        const tmp2 = option;
        if (null == user) {
          items = [];
        } else {
          let id = user;
          if (typeof user !== "string") {
            id = user.id;
          }
          items = [{ type: "userMention", userId: id }];
          const obj = { type: "userMention", userId: id };
        }
        tmp(tmp2, items);
      }
    }
    cResult[0] = onEndEditing;
    cResult[1] = onOptionValueChange;
    cResult[2] = option;
    cResult[3] = R;
    tmp70 = R;
  } else if (option.autocomplete) {
    class O {
      constructor() {
        return onDismiss(option);
      }
    }
    class R {
      constructor(displayName) {
        onEndEditing(option);
        let str;
        const tmp = option;
        const tmp3 = onOptionValueChange;
        if (displayName != null) {
          str = displayName.displayName;
        }
        if (str == null) {
          str = "";
        }
        const items = [{ type: "text", text: str }];
        tmp3(tmp, items);
      }
    }
    class U {
      constructor(displayName) {
        onEndEditing(option);
        let str;
        const tmp = option;
        const tmp3 = onOptionValueChange;
        if (displayName != null) {
          str = displayName.displayName;
        }
        if (str == null) {
          str = "";
        }
        const items = [{ type: "text", text: str }];
        tmp3(tmp, items);
      }
    }
    cResult[19] = onEndEditing;
    cResult[20] = onOptionValueChange;
    cResult[21] = option;
    cResult[22] = U;
  } else {
    class O {
      constructor() {
        return onDismiss(option);
      }
    }
    const guild_id = channel.guild_id;
    class R {
      constructor(displayName) {
        onEndEditing(option);
        let str;
        const tmp = option;
        const tmp3 = onOptionValueChange;
        if (displayName != null) {
          str = displayName.displayName;
        }
        if (str == null) {
          str = "";
        }
        const items = [{ type: "text", text: str }];
        tmp3(tmp, items);
      }
    }
    class U {
      constructor(displayName) {
        onEndEditing(option);
        let str;
        const tmp = option;
        const tmp3 = onOptionValueChange;
        if (displayName != null) {
          str = displayName.displayName;
        }
        if (str == null) {
          str = "";
        }
        const items = [{ type: "text", text: str }];
        tmp3(tmp, items);
      }
    }
    class Q {
      constructor() {
        return onEndEditing(option);
      }
    }
    cResult[41] = onEndEditing;
    cResult[42] = option;
    cResult[43] = Q;
  }
}) : (function AppLauncherCommandOption(option) {
  let autoFocusType;
  let channel;
  let command;
  let first;
  let first1;
  let first2;
  let first3;
  let first4;
  let first5;
  let first6;
  let first7;
  let hasError;
  let items;
  let items1;
  let onFocus;
  let onPress;
  let onPressAttachmentOption;
  let optionValues;
  let tmp49;
  let tmp62Result;
  option = option.option;
  ({ onStartEditing: importDefault, onEndEditing: dependencyMap, onOptionValueChange: View, onPress } = option);
  const onDismiss = option.onDismiss;
  ({ channel, autoFocusType, optionValues, hasError } = option);
  ({ onPressAttachmentOption, onFocus, command } = option);
  let tmp = closure_7();
  let type = option.type;
  let tmp2 = option;
  let tmp3 = dependencyMap;
  if (option(1997).ApplicationCommandOptionType.STRING !== type) {
    if (tmp2(1997).ApplicationCommandOptionType.INTEGER !== type) {
      let tmp28Result;
      let tmp13;
      if (tmp2(1997).ApplicationCommandOptionType.NUMBER !== type) {
        if (tmp2(1997).ApplicationCommandOptionType.ATTACHMENT === type) {
          let obj2 = {
            option,
            onSelectAttachment(text) {
                      let items1;
                      dependencyMap(option);
                      const tmp = option;
                      const tmp3 = View;
                      if (null != text) {
                        const items = [{ type: "text", text }];
                        items1 = items;
                        const obj = { type: "text", text };
                      } else {
                        items1 = [];
                      }
                      tmp3(tmp, items1);
                    },
            channel,
            autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
            hasError,
            onPress: onPressAttachmentOption
          };
          tmp28Result = onDismiss(AppLauncherAttachmentOptionDefault, obj2, option.name);
          tmp13 = onDismiss;
        } else if (tmp2(1997).ApplicationCommandOptionType.BOOLEAN === type) {
          let obj3 = {
            option,
            initialValue: first,
            onPress(arg0) {
                      onPress();
                      dependencyMap(option);
                      const items = [{ type: "text", text: arg0.toString() }];
                      ({ type: "text", text: arg0.toString() });
                      View(option, items);
                    },
            hasError
          };
          first = undefined;
          const tmp37 = AppLauncherBooleanOptionDefault;
          if (optionValues.current[option.name] != null) {
            first = tmp38[0];
          }
          tmp28Result = tmp35(tmp37, obj3, option.name);
          tmp13 = tmp35;
        } else if (tmp2(1997).ApplicationCommandOptionType.MENTIONABLE === type) {
          let obj4 = {
            option,
            initialValue: first1,
            onMentionablePress(mentionable) {
                      mentionable = mentionable.mentionable;
                      if (null != mentionable) {
                        const type = mentionable.type;
                        if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
                          const items = [{ type: "userMention", userId: mentionable.result.user.id }];
                          const obj2 = { type: "userMention", userId: mentionable.result.user.id };
                          View(option, items);
                        } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
                          const items1 = [{ type: "roleMention", roleId: mentionable.result.id }];
                          const obj3 = { type: "roleMention", roleId: mentionable.result.id };
                          View(option, items1);
                        } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
                          const result = mentionable.result;
                          const text = result.text;
                          const obj4 = utils_AutocompleteUtilsDefault;
                          if (text === obj4.MENTION_EVERYONE().text) {
                            const items2 = [{ type: "textMention", text: "@everyone" }];
                            View(option, items2);
                          } else {
                            const items3 = [{ type: "text", text: result.text }];
                            const obj = { type: "text", text: result.text };
                            View(option, items3);
                          }
                        }
                      } else {
                        View(option, []);
                      }
                    },
            onActionSheetDismiss() {
                      return dependencyMap(option);
                    },
            channel,
            autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
            hasError,
            onPress
          };
          first1 = undefined;
          const tmp30 = AppLauncherMentionableOptionDefault;
          if (optionValues.current[option.name] != null) {
            first1 = tmp31[0];
          }
          tmp28Result = tmp28(tmp30, obj4);
          tmp13 = tmp28;
        } else if (tmp2(1997).ApplicationCommandOptionType.ROLE === type) {
          const obj5 = {
            option,
            initialValue: first2,
            onRolePress(role) {
                      let items;
                      role = role.role;
                      const tmp = View;
                      const tmp2 = option;
                      if (null == role) {
                        items = [];
                      } else {
                        items = [{ type: "roleMention", roleId: role.id }];
                        const obj = { type: "roleMention", roleId: role.id };
                      }
                      tmp(tmp2, items);
                    },
            onActionSheetDismiss() {
                      dependencyMap(option);
                    },
            channel,
            autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
            hasError,
            onPress
          };
          first2 = undefined;
          const tmp23 = AppLauncherRoleOptionDefault;
          if (optionValues.current[option.name] != null) {
            first2 = tmp24[0];
          }
          tmp28Result = tmp21(tmp23, obj5, option.name);
          tmp13 = tmp21;
        } else if (tmp2(1997).ApplicationCommandOptionType.USER === type) {
          const obj6 = {
            option,
            initialValue: first3,
            onUserPress(user) {
                      let items;
                      user = user.user;
                      const tmp = View;
                      const tmp2 = option;
                      if (null == user) {
                        items = [];
                      } else {
                        let id = user;
                        if (typeof user !== "string") {
                          id = user.id;
                        }
                        items = [{ type: "userMention", userId: id }];
                        const obj = { type: "userMention", userId: id };
                      }
                      tmp(tmp2, items);
                    },
            onActionSheetDismiss() {
                      return dependencyMap(option);
                    },
            channel,
            autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
            hasError,
            onPress
          };
          first3 = undefined;
          const tmp16 = AppLauncherUserOptionDefault;
          if (optionValues.current[option.name] != null) {
            first3 = tmp17[0];
          }
          tmp28Result = tmp14(tmp16, obj6, option.name);
          tmp13 = tmp14;
        } else if (tmp2(1997).ApplicationCommandOptionType.CHANNEL === type) {
          let obj = {
            option,
            initialValue: first4,
            onChannelPress(channel) {
                      let items1;
                      channel = channel.channel;
                      const tmp = View;
                      const tmp2 = option;
                      if (null != channel) {
                        const items = [{ type: "channelMention", channelId: channel.id }];
                        items1 = items;
                        const obj = { type: "channelMention", channelId: channel.id };
                      } else {
                        items1 = [];
                      }
                      tmp(tmp2, items1);
                    },
            onActionSheetDismiss() {
                      dependencyMap(option);
                    },
            channel,
            autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
            hasError,
            onPress
          };
          first4 = undefined;
          const tmp7 = AppLauncherChannelOptionDefault;
          if (optionValues.current[option.name] != null) {
            first4 = tmp8[0];
          }
          tmp28Result = tmp5(tmp7, obj, option.name);
          tmp13 = tmp5;
        } else {
          return null;
        }
      }
      let tmp61 = tmp28Result;
      if (null != onDismiss) {
        const obj7 = { style: tmp.dismissableOptionWrapper, children: items };
        const obj8 = { style: tmp.optionViewContainer, children: tmp28Result };
        items = [tmp13(View, obj8), ];
        const obj9 = {
          style: tmp.dismissButton,
          onPress() {
                  return onDismiss(option);
                },
          children: tmp13(tmp2(7020).CircleXIcon, { size: "md" })
        };
        const PressableOpacity = tmp2(6910).PressableOpacity;
        items[1] = tmp13(PressableOpacity, obj9);
        tmp61 = closure_6(View, obj7);
      }
      return tmp61;
    }
  }
  if (null != option.choices) {
    const obj10 = {
      option,
      initialValue: first5,
      onSelect(displayName) {
          dependencyMap(option);
          let str;
          const tmp = option;
          const tmp3 = View;
          if (displayName != null) {
            str = displayName.displayName;
          }
          if (str == null) {
            str = "";
          }
          const items = [{ type: "text", text: str }];
          tmp3(tmp, items);
        },
      onOpenChoicesSheet() {
          onPress();
          importDefault(option);
        },
      onDismissChoicesSheet() {
          return dependencyMap(option);
        },
      autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
      hasError
    };
    first5 = undefined;
    const tmp56 = AppLauncherChoicesOptionDefault;
    if (optionValues.current[option.name] != null) {
      first5 = tmp57[0];
    }
    tmp62Result = tmp54(tmp56, obj10, option.name);
    tmp49 = tmp54;
  } else if (option.autocomplete) {
    const obj11 = {
      channel,
      option,
      activeCommand: command,
      optionValues,
      initialValue: first6,
      autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
      onSelect(displayName) {
          dependencyMap(option);
          let str;
          const tmp = option;
          const tmp3 = View;
          if (displayName != null) {
            str = displayName.displayName;
          }
          if (str == null) {
            str = "";
          }
          const items = [{ type: "text", text: str }];
          tmp3(tmp, items);
        },
      onOpenAutocompleteSheet() {
          onPress();
          importDefault(option);
        },
      onDismissAutocompleteSheet() {
          return dependencyMap(option);
        },
      hasError
    };
    first6 = undefined;
    const tmp63Result = AppLauncherAutocompleteOptionDefault;
    if (optionValues.current[option.name] != null) {
      first6 = tmp51[0];
    }
    tmp62Result = tmp62(tmp63Result, obj11, option.name);
    tmp49 = tmp62;
  } else {
    const obj12 = {
      option,
      guildId: channel.guild_id,
      initialValue: first7,
      onEndEditing() {
          return dependencyMap(option);
        },
      onChangeText(text) {
          importDefault(option);
          const items = [];
          const obj = { type: "text", text };
          items[0] = obj;
          View(option, items);
        },
      onFocus,
      autoFocus: items1.includes(autoFocusType),
      hasError,
      onPressIn: onPress
    };
    first7 = undefined;
    const tmp63Result2 = AppLauncherTextInputOptionDefault;
    if (optionValues.current[option.name] != null) {
      first7 = tmp45[0];
    }
    items1 = [, ];
    ({ FIRST_REQUIRED_OPTION: arr[0], OPTIONAL_OPTION_ADDED: arr[1] } = onPress);
    tmp62Result = tmp62(tmp63Result2, obj12, option.name);
    tmp49 = tmp62;
  }
  tmp13 = tmp49;
  tmp28Result = tmp62Result;
});
let result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default tmp4;
