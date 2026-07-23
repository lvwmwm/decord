// Module ID: 11286
// Function ID: 87815
// Name: AppLauncherCommandOption
// Dependencies: [31, 27, 1455, 33, 4130, 689, 1881, 11287, 11293, 11295, 11298, 11300, 11301, 11303, 5044, 11306, 11307, 11310, 4660, 5776, 2]
// Exports: default

// Module 11286 (AppLauncherCommandOption)
import "result";
import { View } from "get ActivityIndicator";
import { AppLauncherOptionAutoFocusType as closure_4 } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { dismissableOptionWrapper: { flexDirection: "row", alignItems: "center" }, optionViewContainer: { flex: 1 } };
_createForOfIteratorHelperLoose = { marginLeft: 8, marginRight: -4, padding: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.dismissButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.option = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default function AppLauncherCommandOption(option) {
  let View;
  let autoFocusType;
  let channel;
  let command;
  let dependencyMap;
  let hasError;
  let importDefault;
  let onFocus;
  let onPress;
  let onPressAttachmentOption;
  let optionValues;
  option = option.option;
  ({ onStartEditing: importDefault, onEndEditing: dependencyMap, onOptionValueChange: View, onPress } = option);
  const onDismiss = option.onDismiss;
  ({ channel, autoFocusType, optionValues, hasError } = option);
  ({ onPressAttachmentOption, onFocus, command } = option);
  const tmp = _createForOfIteratorHelperLoose();
  let type = option.type;
  if (option(1881).ApplicationCommandOptionType.STRING !== type) {
    if (option(1881).ApplicationCommandOptionType.INTEGER !== type) {
      if (option(1881).ApplicationCommandOptionType.NUMBER !== type) {
        if (option(1881).ApplicationCommandOptionType.ATTACHMENT === type) {
          let obj = {
            style: tmp.option,
            option,
            onSelectAttachment(text) {
                      callback2(option);
                      if (null != text) {
                        const obj = { type: "text", text };
                        const items = [obj];
                        let items1 = items;
                      } else {
                        items1 = [];
                      }
                      closure_3(option, items1);
                    },
            channel,
            autoFocus: autoFocusType === onPress.OPTIONAL_OPTION_ADDED,
            hasError,
            onPress: onPressAttachmentOption
          };
          let tmp28Result = onDismiss(importDefault(11298), obj, option.name);
        } else if (option(1881).ApplicationCommandOptionType.BOOLEAN === type) {
          obj = { style: tmp.option, option };
          let first;
          if (null != optionValues.current[option.name]) {
            first = tmp40[0];
          }
          obj.initialValue = first;
          obj.onPress = function onPress(arg0) {
            onPress();
            callback2(option);
            const items = [{ type: "text", text: arg0.toString() }];
            callback3(option, items);
          };
          obj.hasError = hasError;
          tmp28Result = onDismiss(importDefault(11300), obj, option.name);
          const tmp36 = onDismiss;
          const tmp39 = importDefault(11300);
        } else if (option(1881).ApplicationCommandOptionType.MENTIONABLE === type) {
          const obj1 = { option };
          let first1;
          if (null != optionValues.current[option.name]) {
            first1 = tmp32[0];
          }
          obj1.initialValue = first1;
          obj1.onMentionablePress = function onMentionablePress(mentionable) {
            mentionable = mentionable.mentionable;
            if (null != mentionable) {
              const type = mentionable.type;
              if (option(outer1_2[13]).MentionableItemTypes.USER === type) {
                let obj = { type: "userMention", userId: mentionable.result.user.id };
                const items = [obj];
                callback3(option, items);
              } else if (option(outer1_2[13]).MentionableItemTypes.ROLE === type) {
                obj = { type: "roleMention", roleId: mentionable.result.id };
                const items1 = [obj];
                callback3(option, items1);
              } else if (option(outer1_2[13]).MentionableItemTypes.GLOBAL === type) {
                const result = mentionable.result;
                if (result.text === obj4.MENTION_EVERYONE().text) {
                  const items2 = [{ type: "textMention", text: "@everyone" }];
                  callback3(option, items2);
                } else {
                  obj = { type: "text", text: result.text };
                  const items3 = [obj];
                  callback3(option, items3);
                }
                obj4 = outer1_1(outer1_2[14]);
              }
            } else {
              callback3(option, []);
            }
          };
          obj1.onActionSheetDismiss = function onActionSheetDismiss() {
            return callback2(option);
          };
          obj1.channel = channel;
          obj1.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj1.hasError = hasError;
          obj1.onPress = onPress;
          tmp28Result = onDismiss(importDefault(11301), obj1);
          const tmp28 = onDismiss;
          const tmp31 = importDefault(11301);
        } else if (option(1881).ApplicationCommandOptionType.ROLE === type) {
          const obj2 = { style: tmp.option, option };
          let first2;
          if (null != optionValues.current[option.name]) {
            first2 = tmp24[0];
          }
          obj2.initialValue = first2;
          obj2.onRolePress = function onRolePress(role) {
            role = role.role;
            if (null == role) {
              let items = [];
            } else {
              const obj = { type: "roleMention", roleId: role.id };
              items = [obj];
            }
            closure_3(option, items);
          };
          obj2.onActionSheetDismiss = function onActionSheetDismiss() {
            callback2(option);
          };
          obj2.channel = channel;
          obj2.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj2.hasError = hasError;
          obj2.onPress = onPress;
          tmp28Result = onDismiss(importDefault(11306), obj2, option.name);
          const tmp20 = onDismiss;
          const tmp23 = importDefault(11306);
        } else if (option(1881).ApplicationCommandOptionType.USER === type) {
          const obj3 = { style: tmp.option, option };
          let first3;
          if (null != optionValues.current[option.name]) {
            first3 = tmp16[0];
          }
          obj3.initialValue = first3;
          obj3.onUserPress = function onUserPress(user) {
            user = user.user;
            if (null == user) {
              let items = [];
            } else {
              const obj = { type: "userMention" };
              let id = user;
              if ("string" !== typeof user) {
                id = user.id;
              }
              obj.userId = id;
              items = [obj];
            }
            closure_3(option, items);
          };
          obj3.onActionSheetDismiss = function onActionSheetDismiss() {
            return callback2(option);
          };
          obj3.channel = channel;
          obj3.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj3.hasError = hasError;
          obj3.onPress = onPress;
          tmp28Result = onDismiss(importDefault(11307), obj3, option.name);
          const tmp12 = onDismiss;
          const tmp15 = importDefault(11307);
        } else if (option(1881).ApplicationCommandOptionType.CHANNEL === type) {
          obj = { style: tmp.option, option };
          let first4;
          if (null != optionValues.current[option.name]) {
            first4 = tmp7[0];
          }
          obj.initialValue = first4;
          obj.onChannelPress = function onChannelPress(channel) {
            channel = channel.channel;
            if (null != channel) {
              const obj = { type: "channelMention", channelId: channel.id };
              const items = [obj];
              let items1 = items;
            } else {
              items1 = [];
            }
            closure_3(option, items1);
          };
          obj.onActionSheetDismiss = function onActionSheetDismiss() {
            callback2(option);
          };
          obj.channel = channel;
          obj.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
          obj.hasError = hasError;
          obj.onPress = onPress;
          tmp28Result = onDismiss(importDefault(11310), obj, option.name);
          const tmp3 = onDismiss;
          const tmp6 = importDefault(11310);
        } else {
          return null;
        }
      }
      let tmp63 = tmp28Result;
      if (null != onDismiss) {
        let obj4 = { style: tmp.dismissableOptionWrapper };
        const obj5 = { style: tmp.optionViewContainer, children: tmp28Result };
        let items = [onDismiss(View, obj5), ];
        const obj6 = {
          style: tmp.dismissButton,
          onPress() {
                  return onDismiss(option);
                }
        };
        const obj7 = { size: "md" };
        obj6.children = onDismiss(option(5776).CircleXIcon, obj7);
        items[1] = onDismiss(option(4660).PressableOpacity, obj6);
        obj4.children = items;
        tmp63 = callback(View, obj4);
      }
      return tmp63;
    }
  }
  if (null != option.choices) {
    const obj8 = { style: tmp.option, option };
    let first5;
    if (null != optionValues.current[option.name]) {
      first5 = tmp59[0];
    }
    obj8.initialValue = first5;
    obj8.onSelect = function onSelect(displayName) {
      callback2(option);
      const obj = { type: "text" };
      displayName = undefined;
      if (null != displayName) {
        displayName = displayName.displayName;
      }
      let str = "";
      if (null != displayName) {
        str = displayName;
      }
      obj.text = str;
      const items = [obj];
      closure_3(option, items);
    };
    obj8.onOpenChoicesSheet = function onOpenChoicesSheet(onDismissChoicesSheet, arg1) {
      onPress();
      callback(option);
    };
    obj8.onDismissChoicesSheet = function onDismissChoicesSheet() {
      return callback2(option);
    };
    obj8.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
    obj8.hasError = hasError;
    tmp28Result = onDismiss(importDefault(11287), obj8, option.name);
    const tmp55 = onDismiss;
    const tmp58 = importDefault(11287);
  } else if (option.autocomplete) {
    const obj9 = { style: tmp.option, channel, option, activeCommand: command, optionValues };
    let first6;
    let tmp81Result = tmp81(11293);
    if (null != optionValues.current[option.name]) {
      first6 = tmp52[0];
    }
    obj9.initialValue = first6;
    obj9.autoFocus = autoFocusType === onPress.OPTIONAL_OPTION_ADDED;
    obj9.onSelect = function onSelect(displayName) {
      callback2(option);
      const obj = { type: "text" };
      displayName = undefined;
      if (null != displayName) {
        displayName = displayName.displayName;
      }
      let str = "";
      if (null != displayName) {
        str = displayName;
      }
      obj.text = str;
      const items = [obj];
      closure_3(option, items);
    };
    obj9.onOpenAutocompleteSheet = function onOpenAutocompleteSheet() {
      onPress();
      callback(option);
    };
    obj9.onDismissAutocompleteSheet = function onDismissAutocompleteSheet() {
      return callback2(option);
    };
    obj9.hasError = hasError;
    tmp28Result = tmp80(tmp81Result, obj9, option.name);
  } else {
    const obj10 = { style: tmp.option, option, guildId: channel.guild_id };
    let first7;
    tmp81Result = tmp81(11295);
    if (null != optionValues.current[option.name]) {
      first7 = tmp48[0];
    }
    obj10.initialValue = first7;
    obj10.onEndEditing = function onEndEditing() {
      return callback2(option);
    };
    obj10.onChangeText = function onChangeText(text) {
      callback(option);
      const items = [{ type: "text", text }];
      callback3(option, items);
    };
    obj10.onFocus = onFocus;
    let items1 = [, ];
    ({ FIRST_REQUIRED_OPTION: arr[0], OPTIONAL_OPTION_ADDED: arr[1] } = onPress);
    obj10.autoFocus = items1.includes(autoFocusType);
    obj10.hasError = hasError;
    obj10.onPressIn = onPress;
    tmp28Result = tmp80(tmp81Result, obj10, option.name);
  }
};
