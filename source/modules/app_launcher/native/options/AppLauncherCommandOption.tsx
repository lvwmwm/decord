// Module ID: 11275
// Function ID: 87740
// Name: AppLauncherCommandOption
// Dependencies: []
// Exports: default

// Module 11275 (AppLauncherCommandOption)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).AppLauncherOptionAutoFocusType;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { dismissableOptionWrapper: {}, optionViewContainer: { flex: 1 } };
obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.dismissButton = obj;
obj.option = { flex: 1 };
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOption.tsx");

export default function AppLauncherCommandOption(option) {
  let autoFocusType;
  let channel;
  let command;
  let hasError;
  let onFocus;
  let onPress;
  let onPressAttachmentOption;
  let optionValues;
  option = option.option;
  const arg1 = option;
  ({ onStartEditing: closure_1, onEndEditing: closure_2, onOptionValueChange: closure_3, onPress } = option);
  const constants = onPress;
  const onDismiss = option.onDismiss;
  ({ channel, autoFocusType, optionValues, hasError } = option);
  ({ onPressAttachmentOption, onFocus, command } = option);
  const tmp = callback2();
  const type = option.type;
  if (arg1(dependencyMap[6]).ApplicationCommandOptionType.STRING !== type) {
    if (arg1(dependencyMap[6]).ApplicationCommandOptionType.INTEGER !== type) {
      if (arg1(dependencyMap[6]).ApplicationCommandOptionType.NUMBER !== type) {
        if (arg1(dependencyMap[6]).ApplicationCommandOptionType.ATTACHMENT === type) {
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
            autoFocus: autoFocusType === constants.OPTIONAL_OPTION_ADDED,
            hasError,
            onPress: onPressAttachmentOption
          };
          let tmp28Result = onDismiss(importDefault(dependencyMap[10]), obj, option.name);
        } else if (arg1(dependencyMap[6]).ApplicationCommandOptionType.BOOLEAN === type) {
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
          tmp28Result = onDismiss(importDefault(dependencyMap[11]), obj, option.name);
          const tmp36 = onDismiss;
          const tmp39 = importDefault(dependencyMap[11]);
        } else if (arg1(dependencyMap[6]).ApplicationCommandOptionType.MENTIONABLE === type) {
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
              if (option(closure_2[13]).MentionableItemTypes.USER === type) {
                let obj = { type: "userMention", userId: mentionable.result.user.id };
                const items = [obj];
                callback3(option, items);
              } else if (option(closure_2[13]).MentionableItemTypes.ROLE === type) {
                obj = { type: "roleMention", roleId: mentionable.result.id };
                const items1 = [obj];
                callback3(option, items1);
              } else if (option(closure_2[13]).MentionableItemTypes.GLOBAL === type) {
                const result = mentionable.result;
                if (result.text === obj4.MENTION_EVERYONE().text) {
                  const items2 = [{}];
                  callback3(option, items2);
                } else {
                  obj = { type: "text", text: result.text };
                  const items3 = [obj];
                  callback3(option, items3);
                }
                const obj4 = callback(closure_2[14]);
              }
            } else {
              callback3(option, []);
            }
          };
          obj1.onActionSheetDismiss = function onActionSheetDismiss() {
            return callback2(option);
          };
          obj1.channel = channel;
          obj1.autoFocus = autoFocusType === constants.OPTIONAL_OPTION_ADDED;
          obj1.hasError = hasError;
          obj1.onPress = onPress;
          tmp28Result = onDismiss(importDefault(dependencyMap[12]), obj1);
          const tmp28 = onDismiss;
          const tmp31 = importDefault(dependencyMap[12]);
        } else if (arg1(dependencyMap[6]).ApplicationCommandOptionType.ROLE === type) {
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
          obj2.autoFocus = autoFocusType === constants.OPTIONAL_OPTION_ADDED;
          obj2.hasError = hasError;
          obj2.onPress = onPress;
          tmp28Result = onDismiss(importDefault(dependencyMap[15]), obj2, option.name);
          const tmp20 = onDismiss;
          const tmp23 = importDefault(dependencyMap[15]);
        } else if (arg1(dependencyMap[6]).ApplicationCommandOptionType.USER === type) {
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
          obj3.autoFocus = autoFocusType === constants.OPTIONAL_OPTION_ADDED;
          obj3.hasError = hasError;
          obj3.onPress = onPress;
          tmp28Result = onDismiss(importDefault(dependencyMap[16]), obj3, option.name);
          const tmp12 = onDismiss;
          const tmp15 = importDefault(dependencyMap[16]);
        } else if (arg1(dependencyMap[6]).ApplicationCommandOptionType.CHANNEL === type) {
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
          obj.autoFocus = autoFocusType === constants.OPTIONAL_OPTION_ADDED;
          obj.hasError = hasError;
          obj.onPress = onPress;
          tmp28Result = onDismiss(importDefault(dependencyMap[17]), obj, option.name);
          const tmp3 = onDismiss;
          const tmp6 = importDefault(dependencyMap[17]);
        } else {
          return null;
        }
      }
      let tmp63 = tmp28Result;
      if (null != onDismiss) {
        const obj4 = { style: tmp.dismissableOptionWrapper };
        const obj5 = { style: tmp.optionViewContainer, children: tmp28Result };
        const items = [onDismiss(View, obj5), ];
        const obj6 = {
          style: tmp.dismissButton,
          onPress() {
                  return onDismiss(option);
                }
        };
        const obj7 = { size: "md" };
        obj6.children = onDismiss(arg1(dependencyMap[19]).CircleXIcon, obj7);
        items[1] = onDismiss(arg1(dependencyMap[18]).PressableOpacity, obj6);
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
    obj8.onOpenChoicesSheet = function onOpenChoicesSheet() {
      onPress();
      callback(option);
    };
    obj8.onDismissChoicesSheet = function onDismissChoicesSheet() {
      return callback2(option);
    };
    obj8.autoFocus = autoFocusType === constants.OPTIONAL_OPTION_ADDED;
    obj8.hasError = hasError;
    tmp28Result = onDismiss(importDefault(dependencyMap[7]), obj8, option.name);
    const tmp55 = onDismiss;
    const tmp58 = importDefault(dependencyMap[7]);
  } else if (option.autocomplete) {
    const obj9 = { style: tmp.option, channel, option, activeCommand: command, optionValues };
    let first6;
    let tmp81Result = tmp81(tmp82[8]);
    if (null != optionValues.current[option.name]) {
      first6 = tmp52[0];
    }
    obj9.initialValue = first6;
    obj9.autoFocus = autoFocusType === constants.OPTIONAL_OPTION_ADDED;
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
    tmp81Result = tmp81(tmp82[9]);
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
    const items1 = [, ];
    ({ FIRST_REQUIRED_OPTION: arr[0], OPTIONAL_OPTION_ADDED: arr[1] } = constants);
    obj10.autoFocus = items1.includes(autoFocusType);
    obj10.hasError = hasError;
    obj10.onPressIn = onPress;
    tmp28Result = tmp80(tmp81Result, obj10, option.name);
  }
};
