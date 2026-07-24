// Module ID: 9589
// Function ID: 74675
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5658, 3758, 653, 44, 6923, 2]

// Module 9589 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
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
function everyoneMemberCount(extractEveryoneRoleResult, isThread) {
  let closure_0 = extractEveryoneRoleResult;
  let c1 = 0;
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
      let tmp = "@everyone" !== closure_0;
      if (tmp) {
        tmp = id.id === outer1_6.OFFLINE;
      }
      if (!tmp) {
        closure_1 = closure_1 + id.count;
      }
    });
    tmp3 = c1;
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
({ Permissions: closure_5, StatusTypes: closure_6 } = ME);
const regExp = new RegExp(/@(:?everyone|here)/);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/MentionGuardUtils.tsx");

export default {
  shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId) {
    const guildId = getGuildId.getGuildId();
    importDefault(44)(guildId, "isGuildChannel with null guildId");
    let canResult = everyoneMemberCount(extractEveryoneRoleResult, getGuildId) > 30;
    if (canResult) {
      canResult = closure_4.can(constants.MENTION_EVERYONE, getGuildId);
    }
    return canResult;
  },
  everyoneMemberCount,
  extractEveryoneRole(arg0, getGuildId) {
    const tmp = _createForOfIteratorHelperLoose(importDefault(6923).parsePreprocessor(getGuildId, arg0));
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
