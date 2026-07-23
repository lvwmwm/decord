// Module ID: 9495
// Function ID: 73973
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 1348, 1910, 1838, 4349, 3767, 1849, 7920, 4566, 653, 1455, 4567, 33, 4130, 689, 1881, 1273, 4098, 8492, 3969, 4126, 4320, 1212, 5464, 566, 5085, 1395, 5167, 477, 9496, 3830, 5165, 1555, 6755, 4541, 5503, 5484, 7799, 5187, 2]
// Exports: default

// Module 9495 (_createForOfIteratorHelperLoose)
import presentAddedFriendToast from "presentAddedFriendToast";
import get_ActivityIndicator from "ensureAvatarSource";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { SUB_COMMAND_KEY_SEPARATOR } from "TRUE_OPTION_NAME";
import ME from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import MENTION_SENTINEL from "MENTION_SENTINEL";
import jsxProd from "KeyboardTypes";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_5;
let closure_6;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getCommandOptionComponents(option) {
  let analyticsLocations;
  let commandOptionSpec;
  let done;
  let guild;
  let messageId;
  let styles;
  const iter = option.option;
  let channel = option.channel;
  ({ guild, commandOptionSpec, styles } = option);
  function getUserComponent(user, styles) {
    let obj = {
      style: styles.commandOptionMentionText,
      onPress() {
        let obj = channel(outer2_3[18]);
        obj.hideActionSheet();
        obj = { userId: user.id };
        let id;
        if (null != outer1_1) {
          id = outer1_1.id;
        }
        obj.channelId = id;
        channel(outer2_3[19])(obj);
      }
    };
    const items = [outer1_20, channel(outer1_3[20]).getUserTag(user, { decoration: "never" })];
    obj.children = items;
    return outer1_22(user(outer1_3[17]).LegacyText, obj, "optionValue-" + user.name);
  }
  function getRoleComponent(role) {
    const items = [outer1_20, role.name];
    return outer1_22(iter(outer1_3[17]).LegacyText, { style: styles.commandOptionMentionText, children: items }, "optionValue-" + iter.name);
  }
  function getCommandValueText(intl) {
    const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: intl };
    return outer1_21(iter(outer1_3[21]).Text, obj, "optionValue-" + iter.name);
  }
  const text = `${option.parentOptionName} ${iter.name}`;
  let items = [];
  let name_localized;
  ({ messageId, analyticsLocations } = option);
  if (null != commandOptionSpec) {
    name_localized = commandOptionSpec.name_localized;
  }
  if (null == name_localized) {
    name_localized = iter.name;
  }
  if (null != iter.value) {
    const _HermesInternal2 = HermesInternal;
    let str = ":";
    let combined = " " + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = " " + name_localized;
  }
  if (iter.type !== iter(1881).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== iter(1881).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      if (null != iter.value) {
        const type = iter.type;
        if (iter(1881).ApplicationCommandOptionType.USER === type) {
          const user = authStore.getUser(iter.value.toString());
          let userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
          const str5 = iter.value;
        } else if (iter(1881).ApplicationCommandOptionType.CHANNEL === type) {
          channel = store.getChannel(iter.value.toString());
          userComponent = null;
          if (null != channel) {
            let obj = { style: styles.commandOptionMentionText };
            const items1 = [closure_18, ];
            let obj1 = iter(4320);
            items1[1] = obj1.computeChannelName(channel, authStore, closure_11);
            obj.children = items1;
            const _HermesInternal3 = HermesInternal;
            userComponent = callback2(iter(1273).LegacyText, obj, "optionValue-" + iter.name);
          }
          const str3 = iter.value;
        } else if (iter(1881).ApplicationCommandOptionType.ROLE === type) {
          let value = iter.value;
          let role;
          if (null != guild) {
            role = store2.getRole(guild.id, tmp14);
          }
          userComponent = null;
          if (null != role) {
            userComponent = getRoleComponent(role);
          }
        } else if (iter(1881).ApplicationCommandOptionType.MENTIONABLE === type) {
          str = iter.value.toString();
          let role1;
          if (null != guild) {
            role1 = store2.getRole(guild.id, str);
          }
          if (null != role1) {
            userComponent = getRoleComponent(role1);
          } else {
            const user1 = authStore.getUser(str);
            userComponent = null;
            if (null != user1) {
              userComponent = getUserComponent(user1, styles);
            }
          }
          const str2 = iter.value;
        } else {
          userComponent = null;
          if (iter(1881).ApplicationCommandOptionType.ATTACHMENT === type) {
            const intl = iter(1212).intl;
            userComponent = getCommandValueText(intl.string(iter(1212).t.nONJVc));
          }
        }
        let str6 = true;
        if (null == userComponent) {
          let found;
          if (null != commandOptionSpec) {
            const choices = commandOptionSpec.choices;
            if (null != choices) {
              found = choices.find((value) => value.value === iter.value);
            }
          }
          let str1 = iter.value.toString();
          if (null != found) {
            let name = found.name_localized;
            if (null == name) {
              name = found.name;
            }
            str1 = name;
          }
          let tmp29 = str1.length > 0;
          if (tmp29) {
            tmp29 = !regex.test(str1[0]);
          }
          userComponent = getCommandValueText(str1);
          str6 = tmp29;
          const str7 = iter.value;
        }
        obj = {};
        obj = {};
        if (str6) {
          str6 = " ";
        }
        obj.children = combined + str6;
        const _HermesInternal4 = HermesInternal;
        const items2 = [callback(iter(1273).LegacyText, obj, "optionKey-" + iter.name), userComponent];
        obj.children = items2;
        items.push(callback2(React.Fragment, obj, text));
        const tmp31 = callback2;
        const tmp33 = callback;
      }
      return items;
    }
  }
  obj1 = {};
  const obj2 = { children: combined };
  obj1.children = callback(iter(1273).LegacyText, obj2, "optionKey-" + iter.name);
  items.push(callback(React.Fragment, obj1, text));
  let tmp39 = items;
  if (null != iter.options) {
    let options;
    if (null != commandOptionSpec) {
      options = commandOptionSpec.options;
    }
    if (null == options) {
      options = [];
    }
    const tmp42 = _createForOfIteratorHelperLoose(iter.options);
    let iter2 = tmp42();
    let combined1 = items;
    tmp39 = items;
    if (!iter2.done) {
      do {
        value = iter2.value;
        let tmp43 = getCommandOptionComponents;
        let obj3 = { option: value, channel, guild, messageId, parentOptionName: text, commandOptionSpec: fromEntriesResult[value.name], styles, analyticsLocations };
        combined1 = combined1.concat(getCommandOptionComponents(obj3));
        let iter3 = tmp42();
        iter2 = iter3;
        tmp39 = combined1;
        done = iter3.done;
      } while (!done);
    }
    fromEntriesResult = Object.fromEntries(options.map((name) => {
      const items = [name.name, name];
      return items;
    }));
  }
  return tmp39;
}
function getCommandCopyText(value, arg1, id, name_localized) {
  let done;
  const _require = value;
  let items = [];
  name_localized = undefined;
  if (null != name_localized) {
    name_localized = name_localized.name_localized;
  }
  if (null == name_localized) {
    name_localized = value.name;
  }
  if (null != value.value) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    let str = "";
    combined = "" + name_localized;
  }
  if (value.type !== _require(1881).ApplicationCommandOptionType.SUB_COMMAND) {
    if (value.type !== _require(1881).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      let sum = null;
      if (null != value.value) {
        const type = value.type;
        if (_require(1881).ApplicationCommandOptionType.USER === type) {
          const user = authStore.getUser(value.value.toString());
          sum = null;
          if (null != user) {
            let obj = { decoration: "never" };
            sum = closure_20 + importDefault(3969).getUserTag(user, obj);
            const obj4 = importDefault(3969);
          }
          const str6 = value.value;
        } else if (_require(1881).ApplicationCommandOptionType.CHANNEL === type) {
          const channel = store.getChannel(value.value.toString());
          sum = null;
          if (null != channel) {
            sum = closure_18 + _require(4320).computeChannelName(channel, authStore, closure_11);
            const obj3 = _require(4320);
          }
          const str5 = value.value;
        } else if (_require(1881).ApplicationCommandOptionType.ROLE === type) {
          value = value.value;
          let role;
          if (null != id) {
            role = store2.getRole(id.id, tmp16);
          }
          sum = null;
          if (null != role) {
            sum = closure_20 + role.name;
          }
        } else {
          sum = null;
          if (_require(1881).ApplicationCommandOptionType.MENTIONABLE === type) {
            str = value.value.toString();
            let role1;
            if (null != id) {
              role1 = store2.getRole(id.id, str);
            }
            if (null != role1) {
              sum = closure_20 + role1.name;
            } else {
              const user1 = authStore.getUser(str);
              sum = null;
              if (null != user1) {
                obj = importDefault(3969);
                obj = { decoration: "never" };
                sum = closure_20 + obj.getUserTag(user1, obj);
              }
            }
            const str8 = value.value;
          }
        }
      }
      if (null == sum) {
        let found;
        if (null != name_localized) {
          const choices = name_localized.choices;
          if (null != choices) {
            found = choices.find((value) => value.value === value.value);
          }
        }
        if (null != found) {
          let name = found.name_localized;
          if (null == name) {
            name = found.name;
          }
          sum = name;
        } else {
          const _String = String;
          sum = String(value.value);
        }
      }
      items.push(combined + sum);
      return items;
    }
  }
  items.push(combined);
  let tmp36 = items;
  if (null != value.options) {
    let options;
    if (null != name_localized) {
      options = name_localized.options;
    }
    if (null == options) {
      options = [];
    }
    const tmp39 = _createForOfIteratorHelperLoose(value.options);
    let iter = tmp39();
    let combined1 = items;
    tmp36 = items;
    if (!iter.done) {
      do {
        value = iter.value;
        let tmp40 = getCommandCopyText;
        let tmp41 = value;
        let tmp42 = arg1;
        let tmp43 = id;
        combined1 = combined1.concat(getCommandCopyText(value, arg1, id, fromEntriesResult[value.name]));
        let iter2 = tmp39();
        iter = iter2;
        tmp36 = combined1;
        done = iter2.done;
      } while (!done);
    }
    fromEntriesResult = Object.fromEntries(options.map((name) => {
      const items = [name.name, name];
      return items;
    }));
  }
  return tmp36;
}
function CommandContentContainer(channelId) {
  let presentAddedFriendToast;
  let closure_5;
  let data;
  let importAll;
  let importDefault;
  let messageId;
  channelId = channelId.channelId;
  ({ author: importDefault, applicationUser: importAll, data } = channelId);
  ({ guildId: presentAddedFriendToast, messageType: closure_5, messageId } = channelId);
  let name_localized;
  let tmp = _createForOfIteratorHelperLoose();
  let _isNativeReflectConstruct = tmp;
  const analyticsLocations = importDefault(data[24])().analyticsLocations;
  let obj = channelId(data[25]);
  let items = [_isNativeReflectConstruct, channel];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channel = tmp.getChannel(channelId);
    const obj = { channel };
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    obj.guild = channel.getGuild(guild_id);
    return obj;
  }, items1);
  channel = stateFromStoresObject.channel;
  const guild = stateFromStoresObject.guild;
  let application_command = data.application_command;
  name_localized = undefined;
  if (null != application_command) {
    name_localized = application_command.name_localized;
  }
  if (null == name_localized) {
    name_localized = data.name;
  }
  const intl = channelId(data[23]).intl;
  obj = {
    userHook() {
      let obj = {};
      const items = [outer1_21.commandUserText, ];
      obj = {};
      let color = closure_1.colorString;
      if (null == color) {
        color = tmp.commandText.color;
      }
      obj.color = color;
      items[1] = obj;
      obj.style = items;
      obj.children = closure_1.nick;
      return outer1_21(channelId(data[17]).LegacyText, obj, "user");
    },
    commandHook() {
      const obj = { variant: "text-sm/semibold" };
      if (closure_5 === outer1_15.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let combined = "" + outer1_19 + name_localized;
      } else {
        combined = name_localized;
      }
      obj.children = combined;
      return outer1_21(channelId(data[21]).Text, obj, "command");
    },
    applicationHook() {
      let obj = { style: tmp.applicationNameText, variant: "text-sm/semibold" };
      obj = { style: tmp.applicationIcon };
      tmp = outer1_1(data[26]);
      obj.source = channelId(data[27]).ensureAvatarSource(avatarSource.getAvatarSource(presentAddedFriendToast));
      const items = [outer1_21(tmp, obj, "icon-" + avatarSource.id), ` ${closure_2.username}`];
      obj.children = items;
      return outer1_22(channelId(data[21]).Text, obj, "application");
    }
  };
  const items2 = [channel, guild, messageId, , , , , , ];
  ({ name: arr3[3], options: arr3[4], application_command: arr3[5] } = data);
  items2[6] = name_localized;
  items2[7] = tmp;
  items2[8] = analyticsLocations;
  const memo = React.useMemo(() => {
    let done;
    let obj = { children: `/${name_localized}` };
    let items = [outer1_21(channelId(data[17]).LegacyText, obj, "integrationName-" + data.name)];
    let tmp = items;
    if (null != data.options) {
      const application_command = data.application_command;
      let options;
      if (null != application_command) {
        options = application_command.options;
      }
      if (null == options) {
        options = [];
      }
      const tmp5 = outer1_25(data.options);
      let iter = tmp5();
      let combined = items;
      tmp = items;
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp6 = outer1_27;
          obj = { option: value };
          let tmp7 = channel;
          obj.channel = channel;
          let tmp8 = guild;
          obj.guild = guild;
          let tmp9 = messageId;
          obj.messageId = messageId;
          obj.parentOptionName = "";
          obj.commandOptionSpec = fromEntriesResult[value.name];
          let tmp10 = _isNativeReflectConstruct;
          obj.styles = _isNativeReflectConstruct;
          let tmp11 = analyticsLocations;
          obj.analyticsLocations = analyticsLocations;
          combined = combined.concat(outer1_27(obj));
          let iter2 = tmp5();
          iter = iter2;
          tmp = combined;
          done = iter2.done;
        } while (!done);
      }
      fromEntriesResult = Object.fromEntries(options.map((name) => {
        const items = [name.name, name];
        return items;
      }));
    }
    return tmp;
  }, items2);
  obj = {};
  const obj1 = { style: tmp.commandText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl.format(channelId(data[23]).t["sj/RT9"], obj) };
  const items3 = [callback(channelId(data[21]).Text, obj1, "commandName-" + data.name), ];
  const obj2 = { style: tmp.commandOptionText, variant: "text-md/medium", color: "text-default", children: memo };
  items3[1] = callback(channelId(data[21]).Text, obj2, "commandOption-" + data.name);
  obj.children = items3;
  return callback2(channelId(data[28]).Card, obj);
}
function CommandActionsContainer(channelId) {
  channelId = channelId.channelId;
  const chatInputRef = channelId.chatInputRef;
  const data = channelId.data;
  let channel;
  let guild;
  let closure_5;
  let options = data.options;
  const tmp = null != options && options.some((type) => type.type === channelId(channel[16]).ApplicationCommandOptionType.ATTACHMENT);
  let obj = channelId(channel[25]);
  let items = [_isNativeReflectConstruct, closure_9];
  let items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channel = outer1_7.getChannel(channelId);
    const obj = { channel };
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    obj.guild = outer1_9.getGuild(guild_id);
    return obj;
  }, items1);
  channel = stateFromStoresObject.channel;
  guild = stateFromStoresObject.guild;
  let items2 = [data, channel, guild];
  closure_5 = guild.useCallback(() => {
    let done;
    const application_command = data.application_command;
    let name_localized;
    if (null != application_command) {
      name_localized = application_command.name_localized;
    }
    if (null == name_localized) {
      name_localized = data.name;
    }
    let items = [outer1_19 + name_localized];
    let obj = items;
    if (null != data.options) {
      const application_command2 = data.application_command;
      let options;
      if (null != application_command2) {
        options = application_command2.options;
      }
      if (null == options) {
        options = [];
      }
      const tmp6 = outer1_25(data.options);
      let iter = tmp6();
      let combined = items;
      obj = items;
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp7 = outer1_28;
          let tmp8 = channel;
          let tmp9 = guild;
          let tmp10 = value;
          combined = combined.concat(outer1_28(value, channel, guild, fromEntriesResult[value.name]));
          let iter2 = tmp6();
          iter = iter2;
          obj = combined;
          done = iter2.done;
        } while (!done);
      }
      fromEntriesResult = Object.fromEntries(options.map((name) => {
        const items = [name.name, name];
        return items;
      }));
    }
    if (obj3.isAndroid()) {
      if (null != chatInputRef(channel[30])) {
        const _JSON2 = JSON;
        const json = JSON.stringify(data);
        const result = chatInputRef(channel[30]).setItem(json, "application/x-discord-interaction-data", obj.join(" "));
        const obj4 = chatInputRef(channel[30]);
      }
    } else {
      const DCDClipboardManager = outer1_6.DCDClipboardManager;
      const _JSON = JSON;
      const json1 = JSON.stringify(data);
      const result1 = DCDClipboardManager.setItem(json1, "application/x-discord-interaction-data", obj.join(" "));
    }
    if (null != channel) {
      obj = { channel, type: "channel" };
      obj = {};
      const items1 = [channelId(channel[16]).ApplicationCommandType.CHAT];
      obj.commandTypes = items1;
      const obj1 = { allowFetch: true };
      const query = outer1_13.query(obj, obj, obj1);
    }
    obj3 = channelId(channel[29]);
    channelId(channel[31]).presentCommandCopied();
  }, items2);
  const items3 = [];
  if (tmp2) {
    obj = {};
    const intl = channelId(channel[23]).intl;
    obj.label = intl.string(channelId(channel[23]).t["42H+Nb"]);
    obj.onPress = function onPress() {
      chatInputRef(channel[18]).hideActionSheet();
      callback();
    };
    items3.push(callback(channelId(channel[32]).TableRow, obj));
  }
  if (null != chatInputRef) {
    obj = {};
    const intl2 = channelId(channel[23]).intl;
    obj.label = intl2.string(channelId(channel[23]).t.lNWC7s);
    obj.onPress = function onPress() {
      let obj = chatInputRef(channel[18]);
      obj.hideActionSheet();
      if (null != data.options) {
        if (data.options.length > 0) {
          const items = [channelId(channel[16]).ApplicationCommandOptionType.SUB_COMMAND, channelId(channel[16]).ApplicationCommandOptionType.SUB_COMMAND_GROUP];
          if (items.includes(data.options[0].type)) {
            const items1 = [data.options[0].name];
            let options = data.options[0].options;
            let hasItem = null != options && options.length > 0;
            if (hasItem) {
              const items2 = [channelId(channel[16]).ApplicationCommandOptionType.SUB_COMMAND, channelId(channel[16]).ApplicationCommandOptionType.SUB_COMMAND_GROUP];
              hasItem = items2.includes(options[0].type);
            }
            if (hasItem) {
              items1.push(options[0].name);
              options = options[0].options;
            }
            let tmp19 = null == chatInputRef;
            if (!tmp19) {
              const current2 = chatInputRef.current;
              tmp19 = null == current2;
              const obj6 = current2;
            }
            if (!tmp19) {
              obj = { type: channelId(channel[33]).KeyboardTypes.APP_LAUNCHER };
              obj = { initialRouteName: outer1_17.COMMAND_VIEW, analyticsLocation: channelId(channel[34]).ApplicationCommandTriggerLocations.RECALL };
              let obj1 = {};
              const sum = data.id + outer1_14;
              obj1.commandId = sum + items1.join(outer1_14);
              obj1.prefilledOptions = options;
              obj.preSelectedCommand = obj1;
              obj.context = obj;
              obj6.openCustomKeyboard(obj);
            }
          }
        }
      }
      let tmp6 = null == chatInputRef;
      if (!tmp6) {
        const current = chatInputRef.current;
        tmp6 = null == current;
        obj1 = current;
      }
      if (!tmp6) {
        const obj2 = { type: channelId(channel[33]).KeyboardTypes.APP_LAUNCHER };
        const obj3 = { initialRouteName: outer1_17.COMMAND_VIEW, analyticsLocation: channelId(channel[34]).ApplicationCommandTriggerLocations.RECALL };
        ({ id: obj5.commandId, options: obj5.prefilledOptions } = data);
        obj3.preSelectedCommand = {};
        obj2.context = obj3;
        obj1.openCustomKeyboard(obj2);
        const obj4 = {};
      }
    };
    items3.push(callback(channelId(channel[32]).TableRow, obj));
  }
  let tmp12 = null;
  if (0 !== items3.length) {
    let obj1 = { spacing: 8 };
    let obj2 = { variant: "text-sm/semibold", color: "text-subtle" };
    const intl3 = channelId(channel[23]).intl;
    obj2.children = intl3.string(channelId(channel[23]).t["3eF5/L"]);
    const items4 = [callback(channelId(channel[21]).Text, obj2), ];
    let obj3 = { hasIcons: false, children: items3.map((children) => outer1_21(guild.Fragment, { children }, arg1)) };
    items4[1] = callback(channelId(channel[36]).TableRowGroup, obj3);
    obj1.children = items4;
    tmp12 = callback2(channelId(channel[35]).Stack, obj1);
  }
  return tmp12;
}
({ ActivityIndicator: closure_5, NativeModules: closure_6 } = get_ActivityIndicator);
({ MessageTypes: closure_15, WHITESPACE_RE: closure_16 } = ME);
({ CHANNEL_SENTINEL: closure_18, COMMAND_SENTINEL: closure_19, MENTION_SENTINEL: closure_20 } = MENTION_SENTINEL);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingVertical: 8, paddingHorizontal: 16, gap: 16 }, activityIndicator: { padding: 16 }, commandUserText: _createForOfIteratorHelperLoose, applicationIcon: { width: 18, height: 18, borderRadius: 9, alignSelf: "center" }, applicationNameText: { textAlignVertical: "center" }, commandOptionText: { marginTop: 12 } };
_createForOfIteratorHelperLoose = { fontFamily: ME.Fonts.PRIMARY_SEMIBOLD, commandOptionMentionText: { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND } };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.commandText = { fontSize: 16, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { fontSize: 16, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default function ExecutedCommandPopout(channelId) {
  let applicationUser;
  let author;
  let chatInputRef;
  let guildId;
  let messageType;
  let user;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(566);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getMessage(channelId, messageId));
  const items1 = [channelId, messageId, ];
  let interactionData;
  if (null != stateFromStores) {
    interactionData = stateFromStores.interactionData;
  }
  items1[2] = interactionData;
  const effect = React.useEffect(() => {
    let interactionData;
    if (null != stateFromStores) {
      interactionData = stateFromStores.interactionData;
    }
    let tmp3 = null == interactionData;
    if (!tmp3) {
      let type;
      if (null != stateFromStores) {
        type = stateFromStores.interactionData.type;
      }
      let tmp9 = type === channelId(outer1_3[16]).ApplicationCommandType.CHAT;
      if (tmp9) {
        let application_command;
        if (null != stateFromStores) {
          application_command = stateFromStores.interactionData.application_command;
        }
        tmp9 = undefined === application_command;
      }
      tmp3 = tmp9;
    }
    if (tmp3) {
      const messageInteractionData = stateFromStores(outer1_3[38]).fetchMessageInteractionData(channelId, messageId);
      const obj = stateFromStores(outer1_3[38]);
    }
  }, items1);
  obj = { value: messageId(5464)(messageId(5484).EXECUTED_COMMAND).analyticsLocations };
  obj = { startExpanded: true, bodyStyles: tmp.container };
  let interactionData1;
  if (null != stateFromStores) {
    interactionData1 = stateFromStores.interactionData;
  }
  if (null != interactionData1) {
    const obj1 = {};
    const obj2 = { guildId, user, channelId, messageId, author, applicationUser };
    let interactionData2;
    if (null != stateFromStores) {
      interactionData2 = stateFromStores.interactionData;
    }
    obj2.data = interactionData2;
    obj2.messageType = messageType;
    const items2 = [callback(CommandContentContainer, obj2), ];
    const obj3 = { channelId, chatInputRef };
    let interactionData3;
    if (null != stateFromStores) {
      interactionData3 = stateFromStores.interactionData;
    }
    obj3.data = interactionData3;
    items2[1] = callback(CommandActionsContainer, obj3);
    obj1.children = items2;
    let tmp13Result = closure_22(closure_23, obj1);
    const tmp13 = closure_22;
    const tmp14 = closure_23;
    const tmp15 = callback;
    const tmp16 = CommandContentContainer;
    const tmp18 = callback;
    const tmp19 = CommandActionsContainer;
  } else {
    const obj4 = { style: tmp.activityIndicator, size: "large" };
    tmp13Result = callback(closure_5, obj4);
  }
  obj.children = tmp13Result;
  obj.children = callback(channelId(5187).BottomSheet, obj);
  return callback(channelId(5464).AnalyticsLocationProvider, obj);
};
