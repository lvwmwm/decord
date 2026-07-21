// Module ID: 9545
// Function ID: 74412
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 9545 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function everyoneMemberCount(extractEveryoneRoleResult, isThread) {
  const importDefault = extractEveryoneRoleResult;
  let closure_1 = 0;
  if (isThread.isThread()) {
    const memberCount = isThread.memberCount;
    let num = 0;
    if (null != memberCount) {
      num = memberCount;
    }
    let tmp3 = num;
  } else {
    const groups = props.getProps(isThread.getGuildId(), isThread.id).groups;
    const item = groups.forEach((id) => {
      let tmp = "@everyone" !== id;
      if (tmp) {
        tmp = id.id === constants.OFFLINE;
      }
      if (!tmp) {
        closure_1 = closure_1 + id.count;
      }
    });
    tmp3 = closure_1;
  }
  return tmp3;
}
function parsedItemUsesEveryoneRole(value) {
  if ("string" === typeof value.content) {
    if ("inlineCode" !== value.type) {
      if ("codeBlock" !== value.type) {
        let match;
        if (null != value.content) {
          match = str3.match(regExp);
        }
        if (null != match) {
          return callback(match, 1)[0];
        }
      }
    }
    return null;
  } else {
    const _Array = Array;
    if (Array.isArray(value.content)) {
      const tmp3 = _createForOfIteratorHelperLoose(value.content);
      const iter = tmp3();
      let iter2 = iter;
      if (!iter.done) {
        const tmp6 = parsedItemUsesEveryoneRole(iter2.value);
        while (null == tmp6) {
          let iter3 = tmp3();
          iter2 = iter3;
        }
        return tmp6;
      }
      return null;
    }
  }
  return null;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ Permissions: closure_5, StatusTypes: closure_6 } = arg1(dependencyMap[3]));
const regExp = new RegExp(/@(:?everyone|here)/);
const obj = {
  shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId) {
    const guildId = getGuildId.getGuildId();
    importDefault(dependencyMap[4])(guildId, "isGuildChannel with null guildId");
    let canResult = everyoneMemberCount(extractEveryoneRoleResult, getGuildId) > 30;
    if (canResult) {
      canResult = closure_4.can(constants.MENTION_EVERYONE, getGuildId);
    }
    return canResult;
  },
  everyoneMemberCount,
  extractEveryoneRole(arg0, getGuildId) {
    const tmp = _createForOfIteratorHelperLoose(importDefault(dependencyMap[5]).parsePreprocessor(getGuildId, arg0));
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      const tmp3 = parsedItemUsesEveryoneRole(iter2.value);
      while (null == tmp3) {
        let iter3 = tmp();
        iter2 = iter3;
      }
      return tmp3;
    }
    return null;
  }
};
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("utils/MentionGuardUtils.tsx");

export default obj;
