// Module ID: 12252
// Function ID: 93969
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useReferralProgramEligibleUsers

// Module 12252 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx");

export const useReferralProgramEligibleUsers = function useReferralProgramEligibleUsers(searchQuery) {
  let limit;
  searchQuery = searchQuery.searchQuery;
  const arg1 = searchQuery;
  ({ selectedUsers: closure_1, limit } = searchQuery);
  const dependencyMap = limit;
  let closure_3;
  let callback;
  let closure_6;
  let closure_7;
  let _arrayLikeToArray;
  let closure_9;
  let first1;
  let closure_11;
  let first2;
  let closure_13;
  function _getLocalReferrals() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _getLocalReferrals = obj;
    return obj(...arguments);
  }
  function getNextRows(closure_5, limit) {
    return _getNextRows(...arguments);
  }
  function _getNextRows() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _getNextRows = obj;
    return obj(...arguments);
  }
  let obj = arg1(dependencyMap[4]);
  const items = [closure_6];
  closure_3 = obj.useStateFromStores(items, () => store.getRecipientStatus());
  const items1 = [closure_6];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items1, () => store.getReferralsRemaining());
  callback = stateFromStores;
  const tmp2 = callback(React.useState(0), 2);
  const React = tmp2[0];
  closure_6 = tmp2[1];
  const tmp3 = callback(React.useState([]), 2);
  closure_7 = tmp3[1];
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  _arrayLikeToArray = first;
  closure_9 = tmp4[1];
  const tmp6 = callback(React.useState(false), 2);
  first1 = tmp6[0];
  closure_11 = tmp6[1];
  const obj2 = arg1(dependencyMap[4]);
  const tmp9 = callback(React.useState(new Map()), 2);
  first2 = tmp9[0];
  closure_13 = tmp9[1];
  importDefault(dependencyMap[5])(null != stateFromStores, "Referrals remaining should not be null");
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
      return getNextRows(closure_5, limit);
    },
    hasError: first1,
    isFetching: first,
    resendUsers: first2
  };
  return obj;
};
