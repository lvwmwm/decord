// Module ID: 10153
// Function ID: 10154
// Name: ExecutedApplicationCommandPopout
// Dependencies: [19, 17, 5015, 4863, 4920, 4885, 6061, 4956, 1383, 9762, 6035, 1072, 1496, 6036, 21, 5014, 575, 1992, 1187, 5258, 8750, 5068, 5624, 5652, 1113, 7326, 504, 6439, 9290, 8419, 5717, 1412, 6977, 10154, 5711, 6975, 1623, 5683, 6027, 7060, 7351, 8701, 5272, 2]
// Exports: default

// Module 10153 (ExecutedApplicationCommandPopout)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1412 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1496 */;
import KeyboardTypes from "KeyboardTypes" /* 1623 */;
import Server from "Server" /* 1992 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import useChannelName from "useChannelName" /* 5652 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5683 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6035 */;
import InteractionActionCreatorsAll from "InteractionActionCreators" /* 8701 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import react_nativeDefault from "react-native" /* 10154 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import GuildStore from "GuildStore" /* 4885 */;
import MessageStore from "MessageStore" /* 6061 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9762 */;
import Constants from "Constants" /* 1072 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 6036 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
function getCommandOptionComponents(option) {
  let analyticsLocations;
  let combined;
  let commandOptionSpec;
  let guild;
  let items1;
  let items2;
  let messageId;
  let styles;
  const iter = option.option;
  const channel = option.channel;
  ({ guild, commandOptionSpec, styles } = option);
  const text = `${option.parentOptionName} ${iter.name}`;
  let items = [];
  let name_localized;
  ({ messageId, analyticsLocations } = option);
  if (commandOptionSpec != null) {
    name_localized = commandOptionSpec.name_localized;
  }
  if (name_localized == null) {
    name_localized = iter.name;
  }
  if (null != iter.value) {
    const _HermesInternal2 = HermesInternal;
    combined = " " + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = " " + name_localized;
  }
  if (iter.type !== iter(1992).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== iter(1992).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      if (null != iter.value) {
        let userComponent;
        function getUserComponent(user, styles) {
          let items;
          let obj = {
            style: styles.commandOptionMentionText,
            onPress() {
              let id;
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = { userId: user.id, channelId: id };
              id = undefined;
              const tmp2 = showUserProfileActionSheetDefault;
              if (channel != null) {
                id = channel.id;
              }
              tmp2(obj2);
            },
            children: items
          };
          items = [closure_1_21, ];
          const LegacyText = iter(dependencyMap[18]).LegacyText;
          let obj2 = channel(dependencyMap[21]);
          items[1] = obj2.getUserTag(user, { decoration: "never" });
          return closure_1_23(LegacyText, obj, "optionValue-" + user.name);
        }
        function getCommandValueText(intl) {
          const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl };
          return authStore6(Text_Text.Text, obj, "optionValue-" + iter.name);
        }
        const type = iter.type;
        if (iter(1992).ApplicationCommandOptionType.USER === type) {
          const str5 = iter.value;
          const user = UserStore.getUser(str5.toString());
          userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
        } else if (iter(1992).ApplicationCommandOptionType.CHANNEL === type) {
          const str3 = iter.value;
          const channel1 = ChannelStore.getChannel(str3.toString());
          userComponent = null;
          if (null != channel1) {
            let obj = { style: styles.commandOptionMentionText, children: items1 };
            items1 = [closure_19, ];
            let LegacyText = tmp6(1187).LegacyText;
            const tmp6Result = iter(5652);
            items1[1] = tmp6Result.computeChannelName(channel1, UserStore, RelationshipStore);
            const _HermesInternal3 = HermesInternal;
            userComponent = closure_23(LegacyText, obj, "optionValue-" + iter.name);
          }
        } else {
          function getRoleComponent(role) {
            let items;
            const obj = { style: styles.commandOptionMentionText, children: items };
            items = [closure_21, role.name];
            return closure_23(native.LegacyText, obj, "optionValue-" + iter.name);
          }
          if (iter(1992).ApplicationCommandOptionType.ROLE === type) {
            const value = iter.value;
            let role;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, tmp14);
            }
            userComponent = null;
            if (null != role) {
              userComponent = getRoleComponent(role);
            }
          } else if (iter(1992).ApplicationCommandOptionType.MENTIONABLE === type) {
            const str2 = iter.value;
            const str1 = str2.toString();
            let role1;
            if (null != guild) {
              role1 = GuildRoleStore.getRole(guild.id, str1);
            }
            if (null != role1) {
              userComponent = getRoleComponent(role1);
            } else {
              const user1 = UserStore.getUser(str1);
              userComponent = null;
              if (null != user1) {
                userComponent = getUserComponent(user1, styles);
              }
            }
          } else {
            userComponent = null;
            if (iter(1992).ApplicationCommandOptionType.ATTACHMENT === type) {
              const intl = tmp6(1113).intl;
              userComponent = getCommandValueText(intl.string(tmp6(1113).t.nONJVc));
            }
          }
        }
        let str6 = true;
        if (null == userComponent) {
          let found;
          if (commandOptionSpec != null) {
            const choices = commandOptionSpec.choices;
            if (choices != null) {
              found = choices.find((value) => value.value === iter.value);
            }
          }
          const str7 = iter.value;
          let str9 = str7.toString();
          if (null != found) {
            let name = found.name_localized;
            if (name == null) {
              name = found.name;
            }
            str9 = name;
          }
          const tmp27 = str9.length > 0 && !regex.test(str9[0]);
          userComponent = getCommandValueText(str9);
          str6 = tmp27;
        }
        const push = items.push;
        const Fragment = react.Fragment;
        const LegacyText2 = tmp6(1187).LegacyText;
        const tmp30 = closure_23;
        const tmp32 = closure_22;
        if (str6) {
          str6 = " ";
        }
        let obj2 = { children: items2 };
        const _HermesInternal4 = HermesInternal;
        const obj3 = { children: combined + str6 };
        items2 = [tmp32(LegacyText2, obj3, "optionKey-" + iter.name), userComponent];
        push(tmp30(Fragment, obj2, text));
      }
      return items;
    }
  }
  const push2 = items.push;
  const Fragment2 = react.Fragment;
  const obj4 = { children: closure_22(iter(1187).LegacyText, { children: combined }, "optionKey-" + iter.name) };
  push2(closure_22(Fragment2, obj4, text));
  if (null != iter.options) {
    let options1;
    const _Object = Object;
    if (commandOptionSpec != null) {
      options1 = commandOptionSpec.options;
    }
    if (options1 == null) {
      options1 = [];
    }
    const options = iter.options;
    const fromEntriesResult = fromEntries(options1.map((name) => {
      const items = [name.name, name];
      return items;
    }));
    const iter2 = options[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let obj5 = { option: nextResult, channel, guild, messageId, parentOptionName: text, commandOptionSpec: fromEntriesResult[nextResult.name], styles, analyticsLocations };
      items = items.concat(getCommandOptionComponents(obj5));
      continue;
    }
  }
  return items;
}
function getCommandCopyText(item10021, channel, guild, name_localized) {
  let combined;
  let closure_0 = item10021;
  let items = [];
  name_localized = undefined;
  if (name_localized != null) {
    name_localized = name_localized.name_localized;
  }
  if (name_localized == null) {
    name_localized = item10021.name;
  }
  if (null != item10021.value) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + name_localized;
  }
  if (item10021.type !== Server.ApplicationCommandOptionType.SUB_COMMAND) {
    if (item10021.type !== Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      let sum = null;
      if (null != item10021.value) {
        const type = item10021.type;
        if (Server.ApplicationCommandOptionType.USER === type) {
          const str5 = item10021.value;
          const user = UserStore.getUser(str5.toString());
          sum = null;
          if (null != user) {
            const obj3 = UserUtilsDefault;
            sum = closure_21 + obj3.getUserTag(user, { decoration: "never" });
          }
        } else if (Server.ApplicationCommandOptionType.CHANNEL === type) {
          const str4 = item10021.value;
          channel = ChannelStore.getChannel(str4.toString());
          sum = null;
          if (null != channel) {
            const tmp5Result = useChannelName;
            sum = closure_19 + tmp5Result.computeChannelName(channel, UserStore, RelationshipStore);
          }
        } else if (Server.ApplicationCommandOptionType.ROLE === type) {
          const value = item10021.value;
          let role;
          if (null != guild) {
            role = GuildRoleStore.getRole(guild.id, tmp15);
          }
          sum = null;
          if (null != role) {
            sum = closure_21 + role.name;
          }
        } else {
          sum = null;
          if (Server.ApplicationCommandOptionType.MENTIONABLE === type) {
            const str6 = item10021.value;
            const str1 = str6.toString();
            let role1;
            if (null != guild) {
              role1 = GuildRoleStore.getRole(guild.id, str1);
            }
            if (null != role1) {
              sum = closure_21 + role1.name;
            } else {
              const user1 = UserStore.getUser(str1);
              sum = null;
              if (null != user1) {
                const obj = UserUtilsDefault;
                sum = closure_21 + obj.getUserTag(user1, { decoration: "never" });
              }
            }
          }
        }
      }
      if (null == sum) {
        let StringResult;
        let found;
        if (name_localized != null) {
          const choices = name_localized.choices;
          if (choices != null) {
            found = choices.find((value) => value.value === value.value);
          }
        }
        if (null != found) {
          let name = found.name_localized;
          if (name == null) {
            name = found.name;
          }
          StringResult = name;
        } else {
          const _String = String;
          StringResult = String(item10021.value);
        }
        sum = StringResult;
      }
      items.push(combined + sum);
      return items;
    }
  }
  items.push(combined);
  if (null != item10021.options) {
    let options1;
    const _Object = Object;
    if (name_localized != null) {
      options1 = name_localized.options;
    }
    if (options1 == null) {
      options1 = [];
    }
    const options = item10021.options;
    for (const item10117 of options) {
      items = items.concat(getCommandCopyText(item10117, channel, guild, tmp34[item10117.name]));
      continue;
    }
  }
  return items;
}
function CommandContentContainer(channelId) {
  let Children;
  let avatarSource;
  let closure_5;
  let data;
  let items4;
  let messageId;
  channelId = channelId.channelId;
  const author = channelId.author;
  ({ applicationUser: importAll, data } = channelId);
  const guildId = channelId.guildId;
  ({ messageType: closure_5, messageId } = channelId);
  const user = channelId.user;
  let guild;
  let closure_12;
  let processColorStringsArray;
  let closure_14;
  let tmp = closure_25();
  const styles = tmp;
  let tmp3 = data;
  let tmp2 = author;
  const analyticsLocations = author(data[25])().analyticsLocations;
  let obj = channelId(data[26]);
  let items = [analyticsLocations, guild];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getGuild;
    let guild_id;
    channel = ChannelStore.getChannel(channelId);
    const obj = { channel, guild: getGuild(guild_id) };
    guild_id = undefined;
    getGuild = GuildStore.getGuild;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return obj;
  }, items1);
  let channel = stateFromStoresObject.channel;
  guild = stateFromStoresObject.guild;
  let application_command = data.application_command;
  let name_localized;
  if (application_command != null) {
    name_localized = application_command.name_localized;
  }
  if (name_localized == null) {
    name_localized = data.name;
  }
  let obj2 = { userId: user.id, guildId };
  let tmp7 = tmp2(tmp3[27])(obj2);
  const tmp4Result = channelId(tmp3[28]);
  closure_12 = tmp4Result.useDisplayNameStylesFont({ displayNameStyles: tmp7 });
  const items2 = [styles];
  const tmp4Result4 = channelId(tmp3[26]);
  const stateFromStores = tmp4Result4.useStateFromStores(items2, () => styles.roleStyle);
  const tmp4Result5 = channelId(tmp3[29]);
  processColorStringsArray = tmp4Result5.useProcessColorStringsArray(author.colorStrings);
  const tmp4Result6 = channelId(tmp3[29]);
  closure_14 = tmp4Result6.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, user.id, stateFromStores, processColorStringsArray);
  const intl = tmp4(tmp3[24]).intl;
  let obj3 = {
    userHook() {
      let items;
      let tmp3;
      let tmp2;
      const Text = Text_Text.Text;
      const tmp = authStore6;
      if (closure_14) {
        tmp2 = processColorStringsArray;
      }
      let color = author.colorString;
      const obj = { variant: "text-md/semibold", gradientColors: tmp2, style: items, children: tmp3.nick };
      tmp3 = author;
      if (color == null) {
        color = styles.commandText.color;
      }
      items = [{ color }, ];
      let tmp6 = null != closure_12;
      if (tmp6) {
        tmp6 = { fontFamily: tmp5 };
        const obj2 = { fontFamily: tmp5 };
      }
      items[1] = tmp6;
      return tmp(Text, obj, "user");
    },
    commandHook() {
      let children;
      const Text = Text_Text.Text;
      const tmp = authStore6;
      if (closure_5 === constants.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        children = "" + closure_20 + name_localized;
      } else {
        children = name_localized;
      }
      return tmp(Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children }, "command");
    },
    applicationHook() {
      let items;
      let obj3;
      const obj = { style: styles.application, children: items };
      const obj2 = { style: styles.applicationIcon, source: obj3.ensureAvatarSource(importAll.getAvatarSource(guildId)) };
      const tmp = FastImageDefault;
      obj3 = utils_AvatarUtils;
      items = [authStore6(tmp, obj2, "icon-" + importAll.id), ];
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: importAll.username };
      items[1] = authStore6(Text_Text.Text, obj4);
      return closure_23(metroRequire, obj, "application");
    }
  };
  const items3 = [channel, guild, messageId, , , , , , ];
  ({ name: arr4[3], options: arr4[4], application_command: arr4[5] } = data);
  items3[6] = name_localized;
  items3[7] = tmp;
  items3[8] = analyticsLocations;
  const formatResult = intl.format(channelId(tmp3[24]).t["sj/RT9"], obj3);
  const memo = guildId.useMemo(() => {
    let items = [];
    const obj = { children: `/${name_localized}` };
    items[0] = authStore6(native.LegacyText, obj, "integrationName-" + data.name);
    let combined = items;
    if (null != data.options) {
      const application_command = tmp.application_command;
      let options1;
      const _Object = Object;
      if (application_command != null) {
        options1 = application_command.options;
      }
      if (options1 == null) {
        options1 = [];
      }
      const options = tmp.options;
      const fromEntriesResult = fromEntries(options1.map((name) => {
        const items = [name.name, name];
        return items;
      }));
      const iter = options[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj2 = { option: nextResult, channel, guild, messageId, parentOptionName: "", commandOptionSpec: fromEntriesResult[nextResult.name], styles, analyticsLocations };
        combined = combined.concat(getCommandOptionComponents(obj2));
        continue;
      }
    }
    return combined;
  }, items3);
  let obj4 = { children: items4 };
  const obj5 = {
    style: tmp.commandName,
    accessible: true,
    children: Children.map(formatResult, (children, arg1) => {
      let tmp = children;
      if (typeof children === "string") {
        const obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
        tmp = closure_1_22(channelId(data[22]).Text, obj, arg1);
      }
      return tmp;
    })
  };
  Children = guildId.Children;
  const Card = tmp4(tmp3[32]).Card;
  items4 = [closure_22(messageId, obj5, "commandName-" + data.name), ];
  const obj6 = { style: tmp.commandOptionText, variant: "text-md/medium", color: "text-default", children: memo };
  items4[1] = closure_22(channelId(tmp3[22]).Text, obj6, "commandOption-" + data.name);
  return closure_23(Card, obj4);
}
function CommandActionsContainer(channelId) {
  let intl;
  let intl2;
  let intl3;
  let items4;
  channelId = channelId.channelId;
  const chatInputRef = channelId.chatInputRef;
  const data = channelId.data;
  let channel;
  let guild;
  let closure_5;
  let options = data.options;
  let someResult;
  if (options != null) {
    someResult = options.some((type) => type.type === channelId(channel[17]).ApplicationCommandOptionType.ATTACHMENT);
  }
  const tmp3 = channel;
  let obj = channelId(channel[26]);
  let items = [ChannelStore, GuildStore];
  let items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getGuild;
    let guild_id;
    channel = ChannelStore.getChannel(channelId);
    const obj = { channel, guild: getGuild(guild_id) };
    guild_id = undefined;
    getGuild = GuildStore.getGuild;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return obj;
  }, items1);
  channel = stateFromStoresObject.channel;
  guild = stateFromStoresObject.guild;
  let items2 = [data, channel, guild];
  closure_5 = guild.useCallback(() => {
    let items1;
    const application_command = data.application_command;
    let name_localized;
    if (application_command != null) {
      name_localized = application_command.name_localized;
    }
    if (name_localized == null) {
      name_localized = tmp.name;
    }
    let items = [closure_20 + name_localized];
    let combined = items;
    if (null != data.options) {
      const application_command2 = tmp.application_command;
      let options1;
      const _Object = Object;
      if (application_command2 != null) {
        options1 = application_command2.options;
      }
      if (options1 == null) {
        options1 = [];
      }
      const options = tmp.options;
      for (const item10021 of options) {
        combined = combined.concat(getCommandCopyText(item10021, channel, guild, tmp3[item10021.name]));
        continue;
      }
    }
    const setItem = react_nativeDefault.setItem;
    react_nativeDefault;
    const json = JSON.stringify(data);
    const result = setItem(json, "application/x-discord-interaction-data", combined.join(" "));
    if (null != channel) {
      const query = ApplicationCommandIndexStore.query;
      const obj = { channel: tmp17, type: "channel" };
      const obj2 = { commandTypes: items1 };
      items1 = [Server.ApplicationCommandType.CHAT];
      const query1 = query(obj, obj2, { allowFetch: true });
    }
    const obj4 = ToastUtils;
    obj4.presentCommandCopied();
  }, items2);
  const items3 = [];
  if (!someResult) {
    const push = items3.push;
    let obj2 = {
      label: intl.string(tmp2(tmp3[24]).t["42H+Nb"]),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          closure_5();
        }
    };
    const TableRow = tmp2(tmp3[35]).TableRow;
    intl = tmp2(tmp3[24]).intl;
    push(closure_22(TableRow, obj2));
  }
  if (null != chatInputRef) {
    let tmp7 = closure_22;
    const push2 = items3.push;
    let obj3 = {
      label: intl2.string(tmp2(tmp3[24]).t.lNWC7s),
      onPress() {
          let obj13;
          let obj3;
          let obj5;
          let obj7;
          let sum;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (null != data.options) {
            if (data.options.length > 0) {
              const items = [Server.ApplicationCommandOptionType.SUB_COMMAND, Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP];
              if (items.includes(data.options[0].type)) {
                const items1 = [data.options[0].name];
                const options1 = tmp3.options[0].options;
                let hasItem = null != options1 && options1.length > 0;
                if (hasItem) {
                  const items2 = [Server.ApplicationCommandOptionType.SUB_COMMAND, Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP];
                  hasItem = items2.includes(options1[0].type);
                }
                let options = options1;
                if (hasItem) {
                  items1.push(options1[0].name);
                  options = options1[0].options;
                }
                if (chatInputRef != null) {
                  const current2 = chatInputRef.current;
                  if (current2 != null) {
                    const openCustomKeyboard2 = current2.openCustomKeyboard;
                    const obj2 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj3 };
                    obj3 = { initialRouteName: AppLauncherRouteName.COMMAND_VIEW, analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL, preSelectedCommand: obj5 };
                    obj5 = { commandId: sum + items1.join(SUB_COMMAND_KEY_SEPARATOR), prefilledOptions: options };
                    sum = tmp3.id + SUB_COMMAND_KEY_SEPARATOR;
                    openCustomKeyboard2(obj2);
                  }
                }
              }
            }
          }
          if (chatInputRef != null) {
            const current = chatInputRef.current;
            if (current != null) {
              const openCustomKeyboard = current.openCustomKeyboard;
              const obj6 = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj7 };
              obj7 = { initialRouteName: AppLauncherRouteName.COMMAND_VIEW, analyticsLocation: ApplicationCommandTypes.ApplicationCommandTriggerLocations.RECALL, preSelectedCommand: obj13 };
              obj13 = { commandId: null, prefilledOptions: null };
              ({ id: obj4.commandId, options: obj4.prefilledOptions } = data);
              openCustomKeyboard(obj6);
            }
          }
        }
    };
    const TableRow2 = tmp2(tmp3[35]).TableRow;
    intl2 = tmp2(tmp3[24]).intl;
    push2(closure_22(TableRow2, obj3));
  }
  let tmp9 = null;
  if (0 !== items3.length) {
    let tmp10 = closure_23;
    let obj4 = { spacing: 8, children: items4 };
    let tmp11 = closure_22;
    const Stack = tmp2(tmp3[38]).Stack;
    let obj5 = { variant: "text-sm/semibold", color: "text-subtle", children: intl3.string(tmp2(tmp3[24]).t["3eF5/L"]) };
    const Text = tmp2(tmp3[22]).Text;
    intl3 = tmp2(tmp3[24]).intl;
    items4 = [closure_22(Text, obj5), ];
    let obj6 = {
      hasIcons: false,
      children: items3.map((children, index) => {
          const obj = { children };
          return closure_1_22(guild.Fragment, obj, index);
        })
    };
    const TableRowGroup = tmp2(tmp3[39]).TableRowGroup;
    items4[1] = closure_22(TableRowGroup, obj6);
    tmp9 = closure_23(Stack, obj4);
  }
  return tmp9;
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const SUB_COMMAND_KEY_SEPARATOR = ApplicationCommandConstants.SUB_COMMAND_KEY_SEPARATOR;
({ MessageTypes: closure_16, WHITESPACE_RE: closure_17 } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
({ CHANNEL_SENTINEL: closure_19, COMMAND_SENTINEL: closure_20, MENTION_SENTINEL: closure_21 } = ChannelAutocompleteConstants);
let Fragment = Fragment_mod;
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingVertical: 8, paddingHorizontal: 16, gap: 16 }, activityIndicator: { padding: 16 }, application: obj2, applicationIcon: size, commandName: { flexDirection: "row", flexWrap: "wrap", alignItems: "center" }, commandOptionText: { marginTop: 12 }, commandOptionMentionText: obj3, commandText: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
size = { width: 18, height: 18, borderRadius: nativeDefault.radii.round };
obj3 = { color: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_25 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default function ExecutedCommandPopout(channelId) {
  let applicationUser;
  let author;
  let chatInputRef;
  let guildId;
  let interactionData2;
  let interactionData3;
  let messageType;
  let obj3;
  let tmp9Result;
  let user;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
  const tmp = closure_25();
  let tmp3 = dependencyMap;
  let obj = channelId(504);
  const items = [MessageStore];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  const items1 = [channelId, messageId, ];
  let interactionData;
  const tmp5 = messageId(7326);
  const analyticsLocations = tmp5(messageId(7351).EXECUTED_COMMAND).analyticsLocations;
  const useEffect = react.useEffect;
  if (stateFromStores != null) {
    interactionData = stateFromStores.interactionData;
  }
  items1[2] = interactionData;
  const effect = useEffect(() => {
    let interactionData;
    if (stateFromStores != null) {
      interactionData = tmp.interactionData;
    }
    let tmp3 = null == interactionData;
    if (!tmp3) {
      let type;
      if (stateFromStores != null) {
        type = tmp.interactionData.type;
      }
      let tmp7 = type === Server.ApplicationCommandType.CHAT;
      if (tmp7) {
        let application_command;
        if (stateFromStores != null) {
          application_command = tmp.interactionData.application_command;
        }
        tmp7 = undefined === application_command;
      }
      tmp3 = tmp7;
    }
    if (tmp3) {
      const obj = InteractionActionCreatorsAll;
      const messageInteractionData = obj.fetchMessageInteractionData(channelId, messageId);
    }
  }, items1);
  const obj2 = { value: analyticsLocations, children: closure_22(BottomSheet, obj3) };
  const AnalyticsLocationProvider = tmp2(7326).AnalyticsLocationProvider;
  let interactionData1;
  obj3 = { startExpanded: true, bodyStyles: tmp.container, children: tmp9Result };
  BottomSheet = tmp2(5272).BottomSheet;
  if (stateFromStores != null) {
    interactionData1 = stateFromStores.interactionData;
  }
  if (null != interactionData1) {
    const obj4 = { guildId, user, channelId, messageId, author, applicationUser, data: interactionData2, messageType };
    interactionData2 = undefined;
    const tmp13 = closure_23;
    const tmp14 = closure_24;
    const tmp15 = CommandContentContainer;
    if (stateFromStores != null) {
      interactionData2 = stateFromStores.interactionData;
    }
    const items2 = [tmp9(tmp15, obj4), ];
    const obj5 = { channelId, chatInputRef, data: interactionData3 };
    interactionData3 = undefined;
    const tmp17 = CommandActionsContainer;
    if (stateFromStores != null) {
      interactionData3 = stateFromStores.interactionData;
    }
    const obj6 = { children: items2 };
    items2[1] = closure_22(tmp17, obj5);
    tmp9Result = tmp13(tmp14, obj6);
  } else {
    const obj7 = { style: tmp.activityIndicator, size: "large" };
    tmp9Result = tmp9(closure_5, obj7);
  }
  return closure_22(AnalyticsLocationProvider, obj2);
};
