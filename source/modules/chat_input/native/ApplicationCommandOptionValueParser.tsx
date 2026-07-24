// Module ID: 11148
// Function ID: 86760
// Name: _createForOfIteratorHelperLoose
// Dependencies: [7, 6, 31, 5039, 1352, 1907, 1917, 1910, 3767, 1849, 4567, 22, 1327, 4320, 4974, 1881, 6923, 2]
// Exports: parseOptionValuesForSend, useApplicationCommandOptionValueParser

// Module 11148 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import result from "result";
import closure_5 from "_isNativeReflectConstruct";
import { isGuildSelectableChannelType as closure_6 } from "_callSuper";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import regExp from "regExp";
import importDefaultResult from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
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
function getUsers(getGuildId) {
  const guildId = getGuildId.getGuildId();
  if (getGuildId.isPrivate()) {
    let mapped = importDefault(22)(getGuildId.recipients).map((userId) => ({ userId }));
    const arr3 = importDefault(22)(getGuildId.recipients);
  } else if (null != guildId) {
    const tmp7 = importDefault(22);
    mapped = importDefault(22)(members.getMembers(guildId)).map((userId) => ({ userId: userId.userId }));
    const tmp7Result = importDefault(22)(members.getMembers(guildId));
  } else {
    mapped = importDefault(22)([]);
  }
  const mapped1 = mapped.map((userId) => outer1_11.getUser(userId.userId));
  const found = mapped1.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  return found.map((id) => ({ id: id.id, text: id.tag }));
}
function getRoles(guild_id) {
  guild_id = guild_id.guild_id;
  if (null != guild_id) {
    sortedRoles = sortedRoles.getSortedRoles(guild_id);
  } else {
    sortedRoles = [];
  }
  return importDefault(22)(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
}
function getChannels(getGuildId, arr) {
  const _require = arr;
  const guildId = getGuildId.getGuildId();
  if (null == guildId) {
    const items = [];
    if (tmp2) {
      items.push(getGuildId);
    }
    tmp2 = null == arr || arr.includes(getGuildId.type);
    return guildId(22)(items).map((id) => {
      const obj = { id: id.id, text: arr(4320).computeChannelName(id, outer1_11, outer1_10) };
      return obj;
    });
  } else {
    const dependencyMap = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId);
    const tmp9 = guildId(22);
    const tmp9Result = guildId(22)(_require(4974).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const combined = guildId(22)(_require(4974).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).flatMap((arg0) => outer1_7.getChannels(guildId)[arg0].map((channel) => channel.channel)).concat(closure_5.computeAllActiveJoinedThreads(guildId));
    const found = combined.filter((type) => {
      let hasItem = null == arr;
      if (!hasItem) {
        hasItem = arr.includes(type.type);
      }
      return hasItem;
    });
    return found.map((id) => {
      const obj = { id: id.id };
      if (!outer1_6(id.type)) {
        let channelName = arr(4320).computeChannelName(id, outer1_11, outer1_10);
        const obj2 = arr(4320);
      } else {
        channelName = undefined;
        if (null != dependencyMap[id.id]) {
          channelName = tmp2.name;
        }
      }
      obj.text = channelName;
      return obj;
    });
  }
}
({ MENTION_SENTINEL: closure_12, CHANNEL_SENTINEL: closure_13 } = regExp);
const re14 = /^@(([^@#:]+)#([0-9]{4}))$/i;
function matchPrefix(arg0, str, sortBy) {
  let closure_0 = arg0;
  if (str[0] !== arg0) {
    return null;
  } else {
    let closure_1 = str.substr(arg0.length);
    const found = sortBy.sortBy((text) => -text.text.length).filter((text) => {
      const formatted = closure_1.toLowerCase();
      return formatted === text.text.toLowerCase();
    });
    const mapped = found.map((id) => ({ text: closure_0 + id.text, id: id.id }));
    return mapped.first();
  }
}
class ApplicationCommandOptionValueParser {
  constructor(arg0) {
    self = this;
    tmp = c3(this, ApplicationCommandOptionValueParser);
    this.parse = (text, type) => {
      const trimmed = text.trim();
      const arr = outer1_19(trimmed.channel);
      let closure_2 = outer1_20(trimmed.channel);
      let _isNativeReflectConstruct = arr.map((text) => {
        const obj = {};
        const merged = Object.assign(text);
        obj["text"] = text.text.split("#")[0];
        return obj;
      });
      function matchUser() {
        let tmp = outer2_15(outer2_12, trimmed, arr);
        let id;
        if (null != tmp) {
          id = tmp.id;
        }
        if (null != id) {
          const obj = { type: "userMention", userId: tmp.id };
          const tmp9 = obj;
        } else {
          const tmp7 = outer2_15(outer2_12, trimmed, _isNativeReflectConstruct);
          let id1;
          if (null != tmp7) {
            id1 = tmp7.id;
          }
          tmp = tmp7;
        }
        return tmp9;
      }
      function matchRole() {
        const tmp = outer2_15(outer2_12, trimmed, closure_2);
        let id;
        if (null != tmp) {
          id = tmp.id;
        }
        if (null != id) {
          let obj = { type: "roleMention", roleId: tmp.id };
        } else if ("@everyone" === trimmed) {
          obj = { type: "textMention", text: "@everyone" };
        }
        return obj;
      }
      if (type.type === self(outer1_2[15]).ApplicationCommandOptionType.USER) {
        const matchUserResult = matchUser();
        if (null != matchUserResult) {
          return matchUserResult;
        } else {
          outer1_14.lastIndex = 0;
          const match = outer1_14.exec(trimmed);
          if (null != match) {
            const findByTagResult = outer1_11.findByTag(match[2], match[3]);
            if (null != findByTagResult) {
              let obj = { type: "userMention", userId: findByTagResult.id };
              return obj;
            }
          }
        }
      }
      if (type.type === self(outer1_2[15]).ApplicationCommandOptionType.ROLE) {
        const matchRoleResult = matchRole();
        if (null != matchRoleResult) {
          return matchRoleResult;
        }
      }
      if (type.type === self(outer1_2[15]).ApplicationCommandOptionType.CHANNEL) {
        const tmp12 = outer1_15(outer1_13, trimmed, outer1_21(trimmed.channel, type.channelTypes));
        if (null != tmp12) {
          if (null != tmp12.id) {
            obj = { type: "channelMention", channelId: tmp12.id };
            return obj;
          }
        }
      }
      if (type.type === self(outer1_2[15]).ApplicationCommandOptionType.MENTIONABLE) {
        const matchRoleResult1 = matchRole();
        if (null != matchRoleResult1) {
          return matchRoleResult1;
        } else {
          const matchUserResult1 = matchUser();
          if (null != matchUserResult1) {
            return matchUserResult1;
          } else {
            outer1_14.lastIndex = 0;
            const match1 = outer1_14.exec(trimmed);
            if (null != match1) {
              const findByTagResult1 = outer1_11.findByTag(match1[2], match1[3]);
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
const importDefaultResultResult = require("_createForOfIteratorHelperLoose")(ApplicationCommandOptionValueParser);
const result = require("result").fileFinishedImporting("modules/chat_input/native/ApplicationCommandOptionValueParser.tsx");

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
    const parserState = require(6923) /* _createForOfIteratorHelperLoose */.createParserState(channel);
    const tmp8 = _createForOfIteratorHelperLoose(activeCommand.options);
    let iter2 = tmp8();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let tmp = current[value.name];
        if (null != tmp) {
          if ("text" === tmp[0].type) {
            let tmp9 = require;
            let tmp10 = dependencyMap;
            if (value.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.STRING) {
              if (null == value.choices) {
                if (!value.autocomplete) {
                  obj = { type: "text" };
                  let tmp2 = importDefault;
                  let tmp3 = dependencyMap;
                  let obj2 = importDefault(6923);
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
  const items = [channel];
  return React.useMemo(() => new outer1_16(channel), items);
};
