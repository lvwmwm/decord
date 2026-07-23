// Module ID: 11278
// Function ID: 87734
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4566, 6755, 8185, 1212, 11279, 2]
// Exports: getValidationResults

// Module 11278 (_createForOfIteratorHelperLoose)
import { getValidationErrorText } from "TRUE_OPTION_NAME";

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
function validateOptionContent(allowEmptyValues) {
  let channelId;
  let commandOrigin;
  let content;
  let guildId;
  let option;
  ({ option, content, guildId, channelId, commandOrigin } = allowEmptyValues);
  if (commandOrigin === undefined) {
    commandOrigin = require(6755) /* ApplicationCommandSectionType */.CommandOrigin.CHAT;
  }
  let str = "";
  if (null != content) {
    let obj = require(8185) /* _createForOfIteratorHelperLoose */;
    obj = { content };
    str = obj.getString(obj, "content").trim();
    const str3 = obj.getString(obj, "content");
  }
  const required = option.required;
  if (null == content) {
    if (required) {
      obj = { success: false };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.error = intl2.string(require(1212) /* getSystemLocale */.t.JZJQL2);
      let obj1 = obj;
    } else {
      obj1 = { success: true };
    }
    return obj1;
  } else if ("" === str) {
    if (allowEmptyValues.allowEmptyValues) {
      const obj2 = { success: true };
      let tmp19 = obj2;
    } else {
      const obj3 = { success: false };
      if (required) {
        const intl = require(1212) /* getSystemLocale */.intl;
        obj3.error = intl.string(require(1212) /* getSystemLocale */.t.JZJQL2);
        tmp19 = obj3;
      } else {
        obj3.error = getValidationErrorText(option);
        tmp19 = obj3;
      }
    }
    return tmp19;
  } else {
    if (content.length > 1) {
      const obj4 = { type: "text", text: str };
      let first = obj4;
    } else {
      first = content[0];
    }
    const tmp8 = importDefault(11279);
    const tmp15 = tmp8[option.type](first, option, channelId, guildId, commandOrigin);
    if (!tmp16) {
      tmp15.error = getValidationErrorText(option);
    }
    return tmp15;
  }
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/application_commands/ApplicationCommandValidationUtils.tsx");

export const getValidationResults = function getValidationResults(activeCommand, optionValues, guild_id, id, allowEmptyValues) {
  let done;
  let obj = {};
  const options = activeCommand.options;
  if (null == options) {
    return obj;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(options);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp3 = validateOptionContent;
        obj = { option: value, content: optionValues[value.name], guildId: guild_id, channelId: id, allowEmptyValues };
        obj[value.name] = validateOptionContent(obj);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return obj;
  }
};
export { validateOptionContent };
