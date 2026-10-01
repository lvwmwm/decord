// Module ID: 11645
// Function ID: 11646
// Name: AppLauncherCommandOption
// Dependencies: [19, 17, 1484, 21, 4836, 576, 1979, 11646, 11652, 11654, 11657, 11659, 11660, 11662, 5828, 11665, 11666, 11672, 5435, 6034, 2]
// Exports: default

// Module 11645 (AppLauncherCommandOption)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import utils_AutocompleteUtilsDefault from "utils/AutocompleteUtils" /* 5828 */;
import AppLauncherChoicesOptionDefault from "AppLauncherChoicesOption" /* 11646 */;
import AppLauncherAutocompleteOptionDefault from "AppLauncherAutocompleteOption" /* 11652 */;
import AppLauncherTextInputOptionDefault from "AppLauncherTextInputOption" /* 11654 */;
import AppLauncherAttachmentOptionDefault from "AppLauncherAttachmentOption" /* 11657 */;
import AppLauncherBooleanOptionDefault from "AppLauncherBooleanOption" /* 11659 */;
import AppLauncherMentionableOptionDefault from "AppLauncherMentionableOption" /* 11660 */;
import AppLauncherMentionableListActionSheet from "AppLauncherMentionableListActionSheet" /* 11662 */;
import AppLauncherRoleOptionDefault from "AppLauncherRoleOption" /* 11665 */;
import AppLauncherUserOptionDefault from "AppLauncherUserOption" /* 11666 */;
import AppLauncherChannelOptionDefault from "AppLauncherChannelOption" /* 11672 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = AppLauncherNativeConstants.AppLauncherOptionAutoFocusType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { dismissableOptionWrapper: { flexDirection: "row", alignItems: "center" }, optionViewContainer: { flex: 1 }, dismissButton: obj2, option: { flex: 1 } };
obj2 = { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default function AppLauncherCommandOption(option) {
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
  if (option(1979).ApplicationCommandOptionType.STRING !== type) {
    if (tmp2(1979).ApplicationCommandOptionType.INTEGER !== type) {
      let tmp28Result;
      let tmp13;
      if (tmp2(1979).ApplicationCommandOptionType.NUMBER !== type) {
        if (tmp2(1979).ApplicationCommandOptionType.ATTACHMENT === type) {
          let obj2 = {
            style: tmp.option,
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
        } else if (tmp2(1979).ApplicationCommandOptionType.BOOLEAN === type) {
          let obj3 = {
            style: tmp.option,
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
        } else if (tmp2(1979).ApplicationCommandOptionType.MENTIONABLE === type) {
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
        } else if (tmp2(1979).ApplicationCommandOptionType.ROLE === type) {
          const obj5 = {
            style: tmp.option,
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
        } else if (tmp2(1979).ApplicationCommandOptionType.USER === type) {
          const obj6 = {
            style: tmp.option,
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
        } else if (tmp2(1979).ApplicationCommandOptionType.CHANNEL === type) {
          let obj = {
            style: tmp.option,
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
          children: tmp13(tmp2(6034).CircleXIcon, { size: "md" })
        };
        const PressableOpacity = tmp2(5435).PressableOpacity;
        items[1] = tmp13(PressableOpacity, obj9);
        tmp61 = closure_6(View, obj7);
      }
      return tmp61;
    }
  }
  if (null != option.choices) {
    const obj10 = {
      style: tmp.option,
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
      style: tmp.option,
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
      style: tmp.option,
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
};
