// Module ID: 8179
// Function ID: 64591
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getInitialValuesFromInteractionOptions, getOptionalBoolean, getOptionalChannelId, getOptionalRoleId, getOptionalString, getOptionalUserId, normalizeNumericString

// Module 8179 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function filterEmpty(arr) {
  const require = arr;
  if (null == arr) {
    let items = [];
  } else {
    items = arr.filter((type) => {
      let str = type;
      if ("text" !== type.type) {
        return tmp;
      } else {
        if (arg1 <= 0) {
          let tmp3 = "" !== str.text.trim();
          const str2 = str.text;
        }
        str = "";
        tmp3 = "" !== str.text;
      }
    });
  }
  return items;
}
function getBoolean(arg0, arg1) {
  const arr = filterEmpty(arg0[arg1]);
  importDefault(dependencyMap[1])(1 === arr.length, "Contains multiple values");
  const first = arr[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  importDefault(dependencyMap[1])("text" === type, "First value is not text");
  return arr[0].text === TRUE_OPTION_NAME;
}
function getChannelId(guildId, arg1) {
  const arr = filterEmpty(guildId[arg1]);
  importDefault(dependencyMap[1])(1 === arr.length, "Contains multiple values");
  const first = arr[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  importDefault(dependencyMap[1])("channelMention" === type, "First value is not a channel mention");
  return arr[0].channelId;
}
function getUserId(arg0, arg1) {
  const arr = filterEmpty(arg0[arg1]);
  importDefault(dependencyMap[1])(1 === arr.length, "Contains multiple values");
  const first = arr[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  importDefault(dependencyMap[1])("userMention" === type, "First value is not a user mention");
  return arr[0].userId;
}
function getRoleId(arg0, arg1) {
  const arr = filterEmpty(arg0[arg1]);
  importDefault(dependencyMap[1])(1 === arr.length, "Contains multiple values");
  const first = arr[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  importDefault(dependencyMap[1])("roleMention" === type, "First value is not a role mention");
  return arr[0].roleId;
}
function getString(arg0, arg1) {
  const tmp = _createForOfIteratorHelperLoose(arg0[arg1]);
  const iter = tmp();
  let iter2 = iter;
  let str = "";
  let str2 = "";
  if (!iter.done) {
    while (true) {
      let value = iter2.value;
      let type = value.type;
      if ("text" !== type) {
        if ("textMention" !== type) {
          if ("userMention" === type) {
            let _HermesInternal4 = HermesInternal;
            let text = `${"<@" + value.userId + ">"}`;
          } else if ("channelMention" === type) {
            let _HermesInternal3 = HermesInternal;
            text = `${"<#" + value.channelId + ">"}`;
          } else if ("roleMention" === type) {
            let _HermesInternal2 = HermesInternal;
            text = `${"<@&" + value.roleId + ">"}`;
          } else if ("emoji" === type) {
            text = `${value.surrogate}`;
          } else {
            text = str;
            if ("customEmoji" === type) {
              let str3 = "";
              if (value.animated) {
                str3 = "a";
              }
              let str4 = value.name;
              let str5 = str4.replace(/:/g, "");
              let _HermesInternal = HermesInternal;
              let str6 = "<";
              let tmp3 = str3;
              let str7 = ":";
              let str8 = ":";
              let str9 = ">";
              text = str + "<" + str3 + ":" + str5.split("~")[0] + ":" + value.emojiId + ">";
            }
          }
        }
        let iter3 = tmp();
        str = text;
        iter2 = iter3;
        str2 = text;
        if (iter3.done) {
          break;
        }
      }
      text = str + value.text;
    }
  }
  return str2;
}
const TRUE_OPTION_NAME = require(dependencyMap[0]).TRUE_OPTION_NAME;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/application_commands/ApplicationCommandOptionUtils.tsx");

export { filterEmpty };
export { getBoolean };
export const getOptionalBoolean = function getOptionalBoolean(arg0, arg1) {
  let tmp = null;
  if (null != arg0[arg1]) {
    tmp = getBoolean(arg0, arg1);
  }
  return tmp;
};
export { getChannelId };
export const getOptionalChannelId = function getOptionalChannelId(guildId) {
  let tmp = null;
  if (null != guildId[arg1]) {
    tmp = getChannelId(guildId, arg1);
  }
  return tmp;
};
export { getUserId };
export const getOptionalUserId = function getOptionalUserId(arg0, arg1) {
  let tmp = null;
  if (null != arg0[arg1]) {
    tmp = getUserId(arg0, arg1);
  }
  return tmp;
};
export { getRoleId };
export const getOptionalRoleId = function getOptionalRoleId(arg0, arg1) {
  let tmp = null;
  if (null != arg0[arg1]) {
    tmp = getRoleId(arg0, arg1);
  }
  return tmp;
};
export { getString };
export const getOptionalString = function getOptionalString(optionValues, name) {
  let tmp = null;
  if (null != optionValues[name]) {
    tmp = getString(optionValues, name);
  }
  return tmp;
};
export const normalizeNumericString = function normalizeNumericString(locale, source) {
  let decimal;
  let group;
  if (locale !== locale) {
    en-US = require(dependencyMap[2]).numberParts[locale];
    if (null == en_US) {
      en-US = require(dependencyMap[2]).numberParts.en-US;
    }
    const _RegExp = RegExp;
    ({ group, decimal } = en_US);
    const regExp = new RegExp(importDefault(dependencyMap[3]).escape(group), "g");
    const _RegExp2 = RegExp;
    const obj = importDefault(dependencyMap[3]);
    const regExp1 = new RegExp(importDefault(dependencyMap[3]).escape(decimal), "g");
    const obj2 = importDefault(dependencyMap[3]);
  }
  return source.replace(regExp, "").replace(regExp1, ".");
};
export const getInitialValuesFromInteractionOptions = function getInitialValuesFromInteractionOptions(command, interactionOptions) {
  let done;
  const require = command;
  const obj = {};
  const importDefault = obj;
  function _loop(value) {
    const options = value.options;
    if (null != options) {
      const found = options.find((name) => name.name === name.name);
    }
    let num = 0;
    if (value.type !== value(closure_2[4]).ApplicationCommandOptionType.ATTACHMENT) {
      if (null == found) {
        obj[value.name] = value;
      } else {
        num = 0;
      }
    }
    return num;
  }
  const tmp = _createForOfIteratorHelperLoose(interactionOptions);
  let iter = tmp();
  if (!iter.done) {
    do {
      let _loopResult = _loop(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return obj;
};
