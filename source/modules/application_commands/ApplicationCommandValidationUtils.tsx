// Module ID: 11268
// Function ID: 87684
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getValidationResults

// Module 11268 (_createForOfIteratorHelperLoose)
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
function validateOptionContent(allowEmptyValues) {
  let channelId;
  let commandOrigin;
  let content;
  let guildId;
  let option;
  ({ option, content, guildId, channelId, commandOrigin } = allowEmptyValues);
  if (commandOrigin === undefined) {
    commandOrigin = require(dependencyMap[1]).CommandOrigin.CHAT;
  }
  let str = "";
  if (null != content) {
    let obj = require(dependencyMap[2]);
    obj = { content };
    str = obj.getString(obj, "content").trim();
    const str3 = obj.getString(obj, "content");
  }
  const required = option.required;
  if (null == content) {
    if (required) {
      obj = { success: false };
      const intl2 = require(dependencyMap[3]).intl;
      obj.error = intl2.string(require(dependencyMap[3]).t.JZJQL2);
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
        const intl = require(dependencyMap[3]).intl;
        obj3.error = intl.string(require(dependencyMap[3]).t.JZJQL2);
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
    const tmp8 = importDefault(dependencyMap[4]);
    const tmp15 = tmp8[option.type](first, option, channelId, guildId, commandOrigin);
    if (!tmp16) {
      tmp15.error = getValidationErrorText(option);
    }
    return tmp15;
  }
}
const getValidationErrorText = require(dependencyMap[0]).getValidationErrorText;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/application_commands/ApplicationCommandValidationUtils.tsx");

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
        let tmp3 = closure_6;
        obj = { option: value, content: optionValues[value.name], guildId: guild_id, channelId: id, allowEmptyValues };
        obj[value.name] = closure_6(obj);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return obj;
  }
};
export { validateOptionContent };
