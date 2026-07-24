// Module ID: 15340
// Function ID: 116933
// Name: _createForOfIteratorHelperLoose
// Dependencies: [2]
// Exports: default

// Module 15340 (_createForOfIteratorHelperLoose)
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
    _arrayLikeToArray = 0;
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
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/useFirstMessageOrEmbedContent.tsx");

export default function useFirstMessageOrEmbedContent(content) {
  let value;
  if (null == content) {
    return null;
  } else {
    content = content.content;
    let length;
    if (null != content) {
      length = content.length;
    }
    if (length > 0) {
      return content.content;
    } else {
      const embeds = content.embeds;
      let length1;
      if (null != embeds) {
        length1 = embeds.length;
      }
      if (length1 > 0) {
        const tmp4 = _createForOfIteratorHelperLoose(content.embeds);
        const iter = tmp4();
        let iter2 = iter;
        if (!iter.done) {
          while (true) {
            value = iter2.value;
            if (null != value.rawDescription) {
              if (value.rawDescription.length > 0) {
                break;
              }
            }
            let iter3 = tmp4();
            iter2 = iter3;
          }
          return value.rawDescription;
        }
      }
      return null;
    }
  }
};
