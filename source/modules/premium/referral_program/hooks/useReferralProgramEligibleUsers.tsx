// Module ID: 12371
// Function ID: 96160
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 6689, 566, 44, 6690, 7889, 2]
// Exports: useReferralProgramEligibleUsers

// Module 12371 (_createForOfIteratorHelperLoose)
import invariant from "invariant";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
const result = require("result").fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx");

export const useReferralProgramEligibleUsers = function useReferralProgramEligibleUsers(searchQuery) {
  let importDefault;
  let limit;
  searchQuery = searchQuery.searchQuery;
  ({ selectedUsers: importDefault, limit } = searchQuery);
  let invariant;
  let stateFromStores;
  let _isNativeReflectConstruct;
  let closure_7;
  let first;
  let closure_9;
  let first1;
  let closure_11;
  let first2;
  let closure_13;
  function _getLocalReferrals() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  function getNextRows(result, limit) {
    return _getNextRows(...arguments);
  }
  function _getNextRows() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  let obj = searchQuery(limit[4]);
  const items = [_isNativeReflectConstruct];
  invariant = obj.useStateFromStores(items, () => store.getRecipientStatus());
  const items1 = [_isNativeReflectConstruct];
  stateFromStores = searchQuery(limit[4]).useStateFromStores(items1, () => store.getReferralsRemaining());
  const tmp2 = stateFromStores(React.useState(0), 2);
  React = tmp2[0];
  _isNativeReflectConstruct = tmp2[1];
  const tmp3 = stateFromStores(React.useState([]), 2);
  closure_7 = tmp3[1];
  const tmp4 = stateFromStores(React.useState(false), 2);
  first = tmp4[0];
  closure_9 = tmp4[1];
  const tmp6 = stateFromStores(React.useState(false), 2);
  first1 = tmp6[0];
  closure_11 = tmp6[1];
  const obj2 = searchQuery(limit[4]);
  const tmp9 = stateFromStores(React.useState(new Map()), 2);
  first2 = tmp9[0];
  closure_13 = tmp9[1];
  importDefault(limit[5])(null != stateFromStores, "Referrals remaining should not be null");
  obj = {
    limit,
    getNextRows,
    getLocalReferrals() {
      return _getLocalReferrals(...arguments);
    }
  };
  let closure_15 = React.useRef(obj);
  const effect = React.useEffect(() => {
    closure_15.current = obj;
  });
  const items2 = [searchQuery, stateFromStores];
  const effect1 = React.useEffect(() => {
    if (stateFromStores > 0) {
      tmp(0, tmp2);
    } else {
      tmp3();
    }
  }, items2);
  obj = {
    eligibleUsers: tmp3[0],
    fetchUsers() {
      return getNextRows(result, limit);
    },
    hasError: first1,
    isFetching: first,
    resendUsers: first2
  };
  return obj;
};
