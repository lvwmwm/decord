// Module ID: 8229
// Function ID: 64856
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4566, 44, 8230, 4118, 1881, 2]
// Exports: getInitialValuesFromInteractionOptions, getOptionalBoolean, getOptionalChannelId, getOptionalRoleId, getOptionalString, getOptionalUserId, normalizeNumericString

// Module 8229 (_createForOfIteratorHelperLoose)
import { TRUE_OPTION_NAME } from "TRUE_OPTION_NAME";

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
function filterEmpty(arr) {
  let closure_0 = arr;
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
  importDefault(44)(1 === arr.length, "Contains multiple values");
  const first = arr[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  importDefault(44)("text" === type, "First value is not text");
  return arr[0].text === TRUE_OPTION_NAME;
}
function getChannelId(guildId, arg1) {
  const arr = filterEmpty(guildId[arg1]);
  importDefault(44)(1 === arr.length, "Contains multiple values");
  const first = arr[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  importDefault(44)("channelMention" === type, "First value is not a channel mention");
  return arr[0].channelId;
}
function getUserId(arg0, arg1) {
  const arr = filterEmpty(arg0[arg1]);
  importDefault(44)(1 === arr.length, "Contains multiple values");
  const first = arr[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  importDefault(44)("userMention" === type, "First value is not a user mention");
  return arr[0].userId;
}
function getRoleId(arg0, arg1) {
  const arr = filterEmpty(arg0[arg1]);
  importDefault(44)(1 === arr.length, "Contains multiple values");
  const first = arr[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  importDefault(44)("roleMention" === type, "First value is not a role mention");
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
const result = require("numberParts").fileFinishedImporting("modules/application_commands/ApplicationCommandOptionUtils.tsx");

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
  if (locale !== closure_5) {
    closure_5 = locale;
    en_US = require(8230) /* numberParts */.numberParts[locale];
    if (null == en_US) {
      en_US = require(8230) /* numberParts */.numberParts["en-US"];
    }
    const _RegExp = RegExp;
    ({ group, decimal } = en_US);
    const regExp = new RegExp(importDefault(4118).escape(group), "g");
    const _RegExp2 = RegExp;
    const obj = importDefault(4118);
    const regExp1 = new RegExp(importDefault(4118).escape(decimal), "g");
    const obj2 = importDefault(4118);
  }
  return source.replace(regExp, "").replace(regExp1, ".");
};
export const getInitialValuesFromInteractionOptions = function getInitialValuesFromInteractionOptions(command, interactionOptions) {
  let done;
  let closure_0 = command;
  const obj = {};
  function _loop(value) {
    const command = value;
    const options = command.options;
    if (null != options) {
      const found = options.find((name) => name.name === value.name);
    }
    let num = 0;
    if (value.type !== command(outer1_2[4]).ApplicationCommandOptionType.ATTACHMENT) {
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
