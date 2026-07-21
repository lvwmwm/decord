// Module ID: 11214
// Function ID: 87322
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: parseOptionValuesForSend, useApplicationCommandOptionValueParser

// Module 11214 (_createForOfIteratorHelperLoose)
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
function getUsers(getGuildId) {
  const guildId = getGuildId.getGuildId();
  if (getGuildId.isPrivate()) {
    let mapped = importDefault(dependencyMap[11])(getGuildId.recipients).map((userId) => ({ userId }));
    const arr3 = importDefault(dependencyMap[11])(getGuildId.recipients);
  } else if (null != guildId) {
    const tmp7 = importDefault(dependencyMap[11]);
    mapped = importDefault(dependencyMap[11])(members.getMembers(guildId)).map((userId) => ({ userId: userId.userId }));
    const tmp7Result = importDefault(dependencyMap[11])(members.getMembers(guildId));
  } else {
    mapped = importDefault(dependencyMap[11])([]);
  }
  const mapped1 = mapped.map((userId) => user.getUser(userId.userId));
  const found = mapped1.filter(arg1(dependencyMap[12]).isNotNullish);
  return found.map((id) => ({ id: id.id, text: id.tag }));
}
function getRoles(guild_id) {
  guild_id = guild_id.guild_id;
  if (null != guild_id) {
    let sortedRoles = sortedRoles.getSortedRoles(guild_id);
  } else {
    sortedRoles = [];
  }
  return importDefault(dependencyMap[11])(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
}
function getChannels(getGuildId, arr) {
  const guildId = getGuildId.getGuildId();
  const importDefault = guildId;
  if (null == guildId) {
    const items = [];
    if (tmp2) {
      items.push(getGuildId);
    }
    const tmp2 = null == arr || arr.includes(getGuildId.type);
    return importDefault(textChannelNameDisambiguations2[11])(items).map((id) => {
      const obj = { id: id.id, text: arg1(closure_2[13]).computeChannelName(id, closure_11, closure_10) };
      return obj;
    });
  } else {
    const textChannelNameDisambiguations2 = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId);
    const tmp9 = importDefault(textChannelNameDisambiguations2[11]);
    const tmp9Result = importDefault(textChannelNameDisambiguations2[11])(arr(textChannelNameDisambiguations2[14]).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const combined = importDefault(textChannelNameDisambiguations2[11])(arr(textChannelNameDisambiguations2[14]).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).flatMap((arg0) => channels.getChannels(guildId)[arg0].map((channel) => channel.channel)).concat(closure_5.computeAllActiveJoinedThreads(guildId));
    const found = combined.filter((type) => {
      let hasItem = null == arg1;
      if (!hasItem) {
        hasItem = arg1.includes(type.type);
      }
      return hasItem;
    });
    return found.map((id) => {
      const obj = { id: id.id };
      if (!callback(id.type)) {
        let channelName = arg1(closure_2[13]).computeChannelName(id, closure_11, closure_10);
        const obj2 = arg1(closure_2[13]);
      } else {
        channelName = undefined;
        if (null != closure_2[id.id]) {
          channelName = tmp2.name;
        }
      }
      obj.text = channelName;
      return obj;
    });
  }
}
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).isGuildSelectableChannelType;
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
const importDefaultResult = importDefault(dependencyMap[0]);
({ MENTION_SENTINEL: closure_12, CHANNEL_SENTINEL: closure_13 } = arg1(dependencyMap[10]));
let closure_14 = /^@(([^@#:]+)#([0-9]{4}))$/i;
function matchPrefix(arg0, str, sortBy) {
  str = arg0;
  if (str[0] !== arg0) {
    return null;
  } else {
    let closure_1 = str.substr(arg0.length);
    const found = sortBy.sortBy((text) => -text.text.length).filter((text) => {
      const formatted = closure_1.toLowerCase();
      return formatted === text.text.toLowerCase();
    });
    const mapped = found.map((id) => ({ text: id + id.text, id: id.id }));
    return mapped.first();
  }
}
class ApplicationCommandOptionValueParser {
  constructor(arg0) {
    arg1 = this;
    tmp = closure_3(this, ApplicationCommandOptionValueParser);
    this.parse = (text, type) => {
      const trimmed = text.trim();
      const self = trimmed;
      const arr = callback2(self.channel);
      let closure_2 = callback3(self.channel);
      let closure_3 = arr.map((text) => {
        const obj = {};
        const merged = Object.assign(text);
        obj["text"] = text.text.split("#")[0];
        return obj;
      });
      function matchUser() {
        let tmp = callback(closure_12, trimmed, arr);
        let id;
        if (null != tmp) {
          id = tmp.id;
        }
        if (null != id) {
          const obj = { type: "userMention", userId: tmp.id };
          const tmp9 = obj;
        } else {
          const tmp7 = callback(closure_12, trimmed, closure_3);
          let id1;
          if (null != tmp7) {
            id1 = tmp7.id;
          }
          tmp = tmp7;
        }
        return tmp9;
      }
      function matchRole() {
        const tmp = callback(closure_12, trimmed, closure_2);
        let id;
        if (null != tmp) {
          id = tmp.id;
        }
        if (null != id) {
          let obj = { type: "roleMention", roleId: tmp.id };
        } else if ("@everyone" === trimmed) {
          obj = {};
        }
        return obj;
      }
      if (type.type === self(closure_2[15]).ApplicationCommandOptionType.USER) {
        const matchUserResult = matchUser();
        if (null != matchUserResult) {
          return matchUserResult;
        } else {
          regex.lastIndex = 0;
          const match = regex.exec(trimmed);
          if (null != match) {
            const findByTagResult = closure_11.findByTag(match[2], match[3]);
            if (null != findByTagResult) {
              let obj = { type: "userMention", userId: findByTagResult.id };
              return obj;
            }
          }
        }
      }
      if (type.type === self(closure_2[15]).ApplicationCommandOptionType.ROLE) {
        const matchRoleResult = matchRole();
        if (null != matchRoleResult) {
          return matchRoleResult;
        }
      }
      if (type.type === self(closure_2[15]).ApplicationCommandOptionType.CHANNEL) {
        const tmp12 = callback(closure_13, trimmed, callback4(self.channel, type.channelTypes));
        if (null != tmp12) {
          if (null != tmp12.id) {
            obj = { type: "channelMention", channelId: tmp12.id };
            return obj;
          }
        }
      }
      if (type.type === self(closure_2[15]).ApplicationCommandOptionType.MENTIONABLE) {
        const matchRoleResult1 = matchRole();
        if (null != matchRoleResult1) {
          return matchRoleResult1;
        } else {
          const matchUserResult1 = matchUser();
          if (null != matchUserResult1) {
            return matchUserResult1;
          } else {
            regex.lastIndex = 0;
            const match1 = regex.exec(trimmed);
            if (null != match1) {
              const findByTagResult1 = closure_11.findByTag(match1[2], match1[3]);
              if (null != findByTagResult1) {
                const obj1 = { type: "userMention", userId: findByTagResult1.id };
                return obj1;
              }
            }
          }
        }
      }
      obj = { type: "text", text };
      return obj;
    };
    this.channel = global;
    return;
  }
}
const importDefaultResultResult = importDefaultResult(ApplicationCommandOptionValueParser);
const tmp3 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/chat_input/native/ApplicationCommandOptionValueParser.tsx");

export { getUsers };
export { getRoles };
export { getChannels };
export const ApplicationCommandOptionValueParser = importDefaultResultResult;
export const parseOptionValuesForSend = function parseOptionValuesForSend(channel, activeCommand, current) {
  let iter;
  if (null == activeCommand.options) {
    return {};
  } else {
    let obj = {};
    const parserState = activeCommand(dependencyMap[16]).createParserState(channel);
    const tmp8 = _createForOfIteratorHelperLoose(activeCommand.options);
    let iter2 = tmp8();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let tmp = current[value.name];
        if (null != tmp) {
          if ("text" === tmp[0].type) {
            let tmp9 = closure_0;
            let tmp10 = closure_2;
            if (value.type === closure_0(closure_2[15]).ApplicationCommandOptionType.STRING) {
              if (null == value.choices) {
                if (!value.autocomplete) {
                  obj = { type: "text" };
                  let tmp2 = closure_1;
                  let tmp3 = closure_2;
                  let obj2 = closure_1(closure_2[16]);
                  obj.text = obj2.parse(channel, tmp[0].text, parserState).content;
                  let items = [obj];
                  obj[value.name] = items;
                }
              }
            }
          }
          obj[value.name] = tmp;
        }
        iter = tmp8();
        iter2 = iter;
      } while (!iter.done);
    }
    return obj;
  }
};
export const useApplicationCommandOptionValueParser = function useApplicationCommandOptionValueParser(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const items = [channel];
  return React.useMemo(() => new closure_16(channel), items);
};
