// Module ID: 7718
// Function ID: 61413
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 7718 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let _createForOfIteratorHelperLoose = Symbol_iterator;
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
      _createForOfIteratorHelperLoose = tmp;
    }
    const _arrayLikeToArray = 0;
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
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/polls/parsePollResultSystemMessageEmbed.tsx");

export default function parsePollResultSystemMessageEmbed(fields) {
  let iter;
  fields = undefined;
  if (null != fields) {
    fields = fields.fields;
  }
  if (null == fields) {
    return null;
  } else {
    let obj = {};
    obj = {};
    const tmp3 = _createForOfIteratorHelperLoose(fields.fields);
    let iter2 = tmp3();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let rawName = value.rawName;
        if ("poll_question_text" === rawName) {
          obj.questionText = value.rawValue;
        } else if ("victor_answer_id" === rawName) {
          obj.victorAnswerId = value.rawValue;
        } else if ("victor_answer_text" === rawName) {
          obj.victorAnswerText = value.rawValue;
        } else if ("victor_answer_votes" === rawName) {
          let _parseInt2 = parseInt;
          obj.victorAnswerVotes = parseInt(value.rawValue, 10);
        } else if ("total_votes" === rawName) {
          let _parseInt = parseInt;
          obj.totalVotes = parseInt(value.rawValue, 10);
        } else if ("victor_answer_emoji_id" === rawName) {
          obj.id = value.rawValue;
        } else if ("victor_answer_emoji_name" === rawName) {
          obj.name = value.rawValue;
        } else if ("victor_answer_emoji_animated" === rawName) {
          obj.animated = "true" === value.rawValue;
        }
        iter = tmp3();
        iter2 = iter;
      } while (!iter.done);
    }
    if (null != obj.name) {
      const animated = obj.animated;
      obj.animated = null != animated && animated;
      obj.victorEmoji = obj;
    }
    return obj;
  }
};
