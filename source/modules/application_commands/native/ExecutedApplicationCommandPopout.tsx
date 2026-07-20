// Module ID: 9482
// Function ID: 73892
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 9482 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = iter;
  let channel = option.channel;
  const importDefault = channel;
  ({ guild, commandOptionSpec, styles } = option);
  const importAll = styles;
  function getUserComponent(user, styles) {
    const obj = {
      style: styles.commandOptionMentionText,
      onPress() {
        let obj = lib(closure_3[18]);
        obj.hideActionSheet();
        obj = { userId: arg0.id };
        let id;
        if (null != lib) {
          id = lib.id;
        }
        obj.channelId = id;
        lib(closure_3[19])(obj);
      }
    };
    const items = [closure_20, channel(closure_3[20]).getUserTag(user, { decoration: "never" })];
    obj.children = items;
    return callback2(user(closure_3[17]).LegacyText, obj, "optionValue-" + user.name);
  }
  function getRoleComponent(role) {
    const items = [closure_20, role.name];
    return callback2(iter(closure_3[17]).LegacyText, { style: styles.commandOptionMentionText, children: items }, "optionValue-" + iter.name);
  }
  function getCommandValueText(intl) {
    return callback(iter(closure_3[21]).Text, { children: intl }, "optionValue-" + iter.name);
  }
  const text = `${option.parentOptionName} ${iter.name}`;
  const items = [];
  let name_localized;
  ({ messageId, analyticsLocations } = option);
  if (null != commandOptionSpec) {
    name_localized = commandOptionSpec.name_localized;
  }
  if (null == name_localized) {
    name_localized = iter.name;
  }
  if (null != option.option.value) {
    const _HermesInternal2 = HermesInternal;
    let str = ":";
    let combined = " " + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    combined = " " + name_localized;
  }
  if (option.option.type !== arg1(dependencyMap[16]).ApplicationCommandOptionType.SUB_COMMAND) {
    if (iter.type !== arg1(dependencyMap[16]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      if (null != iter.value) {
        const type = iter.type;
        if (arg1(dependencyMap[16]).ApplicationCommandOptionType.USER === type) {
          const user = authStore.getUser(iter.value.toString());
          let userComponent = null;
          if (null != user) {
            userComponent = getUserComponent(user, styles);
          }
          const str5 = iter.value;
        } else if (arg1(dependencyMap[16]).ApplicationCommandOptionType.CHANNEL === type) {
          channel = store.getChannel(iter.value.toString());
          userComponent = null;
          if (null != channel) {
            let obj = { style: styles.commandOptionMentionText };
            const items1 = [closure_18, ];
            let obj1 = arg1(dependencyMap[22]);
            items1[1] = obj1.computeChannelName(channel, authStore, closure_11);
            obj.children = items1;
            const _HermesInternal3 = HermesInternal;
            userComponent = callback2(arg1(dependencyMap[17]).LegacyText, obj, "optionValue-" + iter.name);
          }
          const str3 = iter.value;
        } else if (arg1(dependencyMap[16]).ApplicationCommandOptionType.ROLE === type) {
          let value = iter.value;
          let role;
          if (null != guild) {
            role = store2.getRole(guild.id, tmp14);
          }
          userComponent = null;
          if (null != role) {
            userComponent = getRoleComponent(role);
          }
        } else if (arg1(dependencyMap[16]).ApplicationCommandOptionType.MENTIONABLE === type) {
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
          if (arg1(dependencyMap[16]).ApplicationCommandOptionType.ATTACHMENT === type) {
            const intl = arg1(dependencyMap[23]).intl;
            userComponent = getCommandValueText(intl.string(arg1(dependencyMap[23]).t.nONJVc));
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
        const items2 = [callback(arg1(dependencyMap[17]).LegacyText, obj, "optionKey-" + iter.name), userComponent];
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
  obj1.children = callback(arg1(dependencyMap[17]).LegacyText, obj2, "optionKey-" + option.option.name);
  items.push(callback(React.Fragment, obj1, text));
  let tmp39 = items;
  if (null != option.option.options) {
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
        let tmp43 = closure_27;
        let obj3 = { option: value, channel, guild, messageId, parentOptionName: text, commandOptionSpec: fromEntriesResult[value.name], styles, analyticsLocations };
        combined1 = combined1.concat(closure_27(obj3));
        let iter3 = tmp42();
        iter2 = iter3;
        tmp39 = combined1;
        done = iter3.done;
      } while (!done);
    }
    const fromEntriesResult = Object.fromEntries(options.map((name) => {
      const items = [name.name, name];
      return items;
    }));
  }
  return tmp39;
}
function getCommandCopyText(name, arg1, id, name_localized) {
  let done;
  arg1 = name;
  const items = [];
  name_localized = undefined;
  if (null != name_localized) {
    name_localized = name_localized.name_localized;
  }
  if (null == name_localized) {
    name_localized = name.name;
  }
  if (null != name.value) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + name_localized + ":";
  } else {
    const _HermesInternal = HermesInternal;
    let str = "";
    combined = "" + name_localized;
  }
  if (name.type !== arg1(dependencyMap[16]).ApplicationCommandOptionType.SUB_COMMAND) {
    if (name.type !== arg1(dependencyMap[16]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      let sum = null;
      if (null != name.value) {
        const type = name.type;
        if (arg1(dependencyMap[16]).ApplicationCommandOptionType.USER === type) {
          const user = authStore.getUser(name.value.toString());
          sum = null;
          if (null != user) {
            let obj = { decoration: "never" };
            sum = closure_20 + importDefault(dependencyMap[20]).getUserTag(user, obj);
            const obj4 = importDefault(dependencyMap[20]);
          }
          const str6 = name.value;
        } else if (arg1(dependencyMap[16]).ApplicationCommandOptionType.CHANNEL === type) {
          const channel = store.getChannel(name.value.toString());
          sum = null;
          if (null != channel) {
            sum = closure_18 + arg1(dependencyMap[22]).computeChannelName(channel, authStore, closure_11);
            const obj3 = arg1(dependencyMap[22]);
          }
          const str5 = name.value;
        } else if (arg1(dependencyMap[16]).ApplicationCommandOptionType.ROLE === type) {
          let value = name.value;
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
          if (arg1(dependencyMap[16]).ApplicationCommandOptionType.MENTIONABLE === type) {
            str = name.value.toString();
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
                obj = importDefault(dependencyMap[20]);
                obj = { decoration: "never" };
                sum = closure_20 + obj.getUserTag(user1, obj);
              }
            }
            const str8 = name.value;
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
          name = found.name_localized;
          if (null == name) {
            name = found.name;
          }
          sum = name;
        } else {
          const _String = String;
          sum = String(name.value);
        }
      }
      items.push(combined + sum);
      return items;
    }
  }
  items.push(combined);
  let tmp36 = items;
  if (null != name.options) {
    let options;
    if (null != name_localized) {
      options = name_localized.options;
    }
    if (null == options) {
      options = [];
    }
    const tmp39 = _createForOfIteratorHelperLoose(name.options);
    let iter = tmp39();
    let combined1 = items;
    tmp36 = items;
    if (!iter.done) {
      do {
        value = iter.value;
        let tmp40 = closure_28;
        let tmp41 = value;
        let tmp42 = arg1;
        let tmp43 = id;
        combined1 = combined1.concat(closure_28(value, arg1, id, fromEntriesResult[value.name]));
        let iter2 = tmp39();
        iter = iter2;
        tmp36 = combined1;
        done = iter2.done;
      } while (!done);
    }
    const fromEntriesResult = Object.fromEntries(options.map((name) => {
      const items = [name.name, name];
      return items;
    }));
  }
  return tmp36;
}
function CommandContentContainer(channelId) {
  let data;
  let messageId;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ author: closure_1, applicationUser: closure_2, data } = channelId);
  const dependencyMap = data;
  ({ guildId: closure_4, messageType: closure_5, messageId } = channelId);
  let closure_11;
  const tmp = callback3();
  let closure_7 = tmp;
  const analyticsLocations = importDefault(dependencyMap[24])().analyticsLocations;
  let closure_8 = analyticsLocations;
  let obj = arg1(dependencyMap[25]);
  const items = [closure_7, closure_9];
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
  const channel = stateFromStoresObject.channel;
  closure_9 = channel;
  const guild = stateFromStoresObject.guild;
  let closure_10 = guild;
  const application_command = data.application_command;
  let name_localized;
  if (null != application_command) {
    name_localized = application_command.name_localized;
  }
  if (null == name_localized) {
    name_localized = data.name;
  }
  closure_11 = name_localized;
  const intl = arg1(dependencyMap[23]).intl;
  obj = {
    userHook() {
      let obj = {};
      const items = [closure_21.commandUserText, ];
      obj = {};
      let color = lib.colorString;
      if (null == color) {
        color = tmp.commandText.color;
      }
      obj.color = color;
      items[1] = obj;
      obj.style = items;
      obj.children = lib.nick;
      return closure_21(channelId(data[17]).LegacyText, obj, "user");
    },
    commandHook() {
      const obj = { variant: "text-sm/semibold" };
      if (closure_5 === constants.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let combined = "" + closure_19 + name_localized;
      } else {
        combined = name_localized;
      }
      obj.children = combined;
      return closure_21(channelId(data[21]).Text, obj, "command");
    },
    applicationHook() {
      let obj = { style: tmp.applicationNameText, variant: "text-sm/semibold" };
      obj = { style: tmp.applicationIcon };
      const tmp = lib(data[26]);
      obj.source = channelId(data[27]).ensureAvatarSource(avatarSource.getAvatarSource(closure_4));
      const items = [callback(tmp, obj, "icon-" + avatarSource.id), ` ${closure_2.username}`];
      obj.children = items;
      return callback2(channelId(data[21]).Text, obj, "application");
    }
  };
  const items2 = [channel, guild, messageId, , , , , , ];
  ({ name: arr3[3], options: arr3[4], application_command: arr3[5] } = data);
  items2[6] = name_localized;
  items2[7] = tmp;
  items2[8] = analyticsLocations;
  const memo = React.useMemo(() => {
    let done;
    let obj = { children: `/${closure_11}` };
    const items = [callback(channelId(data[17]).LegacyText, obj, "integrationName-" + data.name)];
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
      const tmp5 = callback3(data.options);
      let iter = tmp5();
      let combined = items;
      tmp = items;
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp6 = closure_27;
          obj = { option: value };
          let tmp7 = closure_9;
          obj.channel = closure_9;
          let tmp8 = closure_10;
          obj.guild = closure_10;
          let tmp9 = closure_6;
          obj.messageId = closure_6;
          obj.parentOptionName = "";
          obj.commandOptionSpec = fromEntriesResult[value.name];
          let tmp10 = closure_7;
          obj.styles = closure_7;
          let tmp11 = closure_8;
          obj.analyticsLocations = closure_8;
          combined = combined.concat(closure_27(obj));
          let iter2 = tmp5();
          iter = iter2;
          tmp = combined;
          done = iter2.done;
        } while (!done);
      }
      const fromEntriesResult = Object.fromEntries(options.map((name) => {
        const items = [name.name, name];
        return items;
      }));
    }
    return tmp;
  }, items2);
  obj = {};
  const obj1 = { Promise: -246006407672989600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, marginTop: 0.0000000000000000000000000000000000000000000000000000000000000000000741841232901058, flags: 0.158, style: tmp.commandText, children: intl.format(arg1(dependencyMap[23]).t.sj/RT9, obj) };
  const items3 = [callback(arg1(dependencyMap[21]).Text, obj1, "commandName-" + data.name), callback(arg1(dependencyMap[21]).Text, { style: tmp.commandOptionText, children: memo }, "commandOption-" + data.name)];
  obj.children = items3;
  return callback2(arg1(dependencyMap[28]).Card, obj);
}
function CommandActionsContainer(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const chatInputRef = channelId.chatInputRef;
  const importDefault = chatInputRef;
  const data = channelId.data;
  const importAll = data;
  let dependencyMap;
  let React;
  let closure_5;
  const options = data.options;
  const tmp = null != options && options.some((type) => type.type === channelId(channel[16]).ApplicationCommandOptionType.ATTACHMENT);
  let obj = arg1(dependencyMap[25]);
  const items = [closure_7, closure_9];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channel = channel.getChannel(channelId);
    const obj = { channel };
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    obj.guild = guild.getGuild(guild_id);
    return obj;
  }, items1);
  const channel = stateFromStoresObject.channel;
  dependencyMap = channel;
  const guild = stateFromStoresObject.guild;
  React = guild;
  const items2 = [data, channel, guild];
  closure_5 = React.useCallback(() => {
    let done;
    const application_command = data.application_command;
    let name_localized;
    if (null != application_command) {
      name_localized = application_command.name_localized;
    }
    if (null == name_localized) {
      name_localized = data.name;
    }
    const items = [closure_19 + name_localized];
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
      const tmp6 = callback3(data.options);
      let iter = tmp6();
      let combined = items;
      obj = items;
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp7 = closure_28;
          let tmp8 = closure_3;
          let tmp9 = closure_4;
          let tmp10 = value;
          combined = combined.concat(closure_28(value, closure_3, closure_4, fromEntriesResult[value.name]));
          let iter2 = tmp6();
          iter = iter2;
          obj = combined;
          done = iter2.done;
        } while (!done);
      }
      const fromEntriesResult = Object.fromEntries(options.map((name) => {
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
      const DCDClipboardManager = DCDClipboardManager.DCDClipboardManager;
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
      const query = closure_13.query(obj, obj, obj1);
    }
    const obj3 = channelId(channel[29]);
    channelId(channel[31]).presentCommandCopied();
  }, items2);
  const items3 = [];
  if (tmp2) {
    obj = {};
    const intl = arg1(dependencyMap[23]).intl;
    obj.label = intl.string(arg1(dependencyMap[23]).t.42H+Nb);
    obj.onPress = function onPress() {
      chatInputRef(channel[18]).hideActionSheet();
      callback();
    };
    items3.push(callback(arg1(dependencyMap[32]).TableRow, obj));
  }
  if (null != chatInputRef) {
    obj = {};
    const intl2 = arg1(dependencyMap[23]).intl;
    obj.label = intl2.string(arg1(dependencyMap[23]).t.lNWC7s);
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
              obj = { initialRouteName: constants.COMMAND_VIEW, analyticsLocation: channelId(channel[34]).ApplicationCommandTriggerLocations.RECALL };
              let obj1 = {};
              const sum = data.id + closure_14;
              obj1.commandId = sum + items1.join(closure_14);
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
        const obj3 = { initialRouteName: constants.COMMAND_VIEW, analyticsLocation: channelId(channel[34]).ApplicationCommandTriggerLocations.RECALL };
        ({ id: obj5.commandId, options: obj5.prefilledOptions } = data);
        obj3.preSelectedCommand = {};
        obj2.context = obj3;
        obj1.openCustomKeyboard(obj2);
        const obj4 = {};
      }
    };
    items3.push(callback(arg1(dependencyMap[32]).TableRow, obj));
  }
  let tmp12 = null;
  if (0 !== items3.length) {
    const obj1 = { spacing: 8 };
    const obj2 = {};
    const intl3 = arg1(dependencyMap[23]).intl;
    obj2.children = intl3.string(arg1(dependencyMap[23]).t.3eF5/L);
    const items4 = [callback(arg1(dependencyMap[21]).Text, obj2), ];
    const obj3 = { hasIcons: false, children: items3.map((children) => callback2(guild.Fragment, { children }, arg1)) };
    items4[1] = callback(arg1(dependencyMap[36]).TableRowGroup, obj3);
    obj1.children = items4;
    tmp12 = callback2(arg1(dependencyMap[35]).Stack, obj1);
  }
  return tmp12;
}
let closure_4 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_5, NativeModules: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const SUB_COMMAND_KEY_SEPARATOR = arg1(dependencyMap[9]).SUB_COMMAND_KEY_SEPARATOR;
const tmp3 = arg1(dependencyMap[10]);
({ MessageTypes: closure_15, WHITESPACE_RE: closure_16 } = tmp3);
const AppLauncherRouteName = arg1(dependencyMap[11]).AppLauncherRouteName;
const tmp2 = arg1(dependencyMap[1]);
({ CHANNEL_SENTINEL: closure_18, COMMAND_SENTINEL: closure_19, MENTION_SENTINEL: closure_20 } = arg1(dependencyMap[12]));
const tmp4 = arg1(dependencyMap[12]);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = arg1(dependencyMap[13]));
let obj = arg1(dependencyMap[14]);
obj = { container: {}, activityIndicator: { padding: 16 }, commandUserText: obj, applicationIcon: {}, applicationNameText: { textAlignVertical: "center" }, commandOptionText: { marginTop: 12 } };
obj = { fontFamily: tmp3.Fonts.PRIMARY_SEMIBOLD };
const tmp5 = arg1(dependencyMap[13]);
obj.commandOptionMentionText = { color: importDefault(dependencyMap[15]).colors.BACKGROUND_BRAND };
const obj1 = { color: importDefault(dependencyMap[15]).colors.BACKGROUND_BRAND };
obj.commandText = { fontSize: 16, color: importDefault(dependencyMap[15]).colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_24 = obj.createStyles(obj);
const obj2 = { fontSize: 16, color: importDefault(dependencyMap[15]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/application_commands/native/ExecutedApplicationCommandPopout.tsx");

export default function ExecutedCommandPopout(channelId) {
  let applicationUser;
  let author;
  let chatInputRef;
  let guildId;
  let messageType;
  let user;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  ({ user, chatInputRef, author, applicationUser, guildId, messageType } = channelId);
  const tmp = callback3();
  let obj = arg1(dependencyMap[25]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => message.getMessage(channelId, messageId));
  const importAll = stateFromStores;
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
      let tmp9 = type === channelId(closure_3[16]).ApplicationCommandType.CHAT;
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
      const messageInteractionData = stateFromStores(closure_3[38]).fetchMessageInteractionData(channelId, messageId);
      const obj = stateFromStores(closure_3[38]);
    }
  }, items1);
  obj = { value: importDefault(dependencyMap[24])(importDefault(dependencyMap[37]).EXECUTED_COMMAND).analyticsLocations };
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
  obj.children = callback(arg1(dependencyMap[39]).BottomSheet, obj);
  return callback(arg1(dependencyMap[24]).AnalyticsLocationProvider, obj);
};
