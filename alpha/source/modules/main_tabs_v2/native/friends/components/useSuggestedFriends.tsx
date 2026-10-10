// Module ID: 16458
// Function ID: 16459
// Name: useSuggestedFriends
// Dependencies: [32, 19, 7350, 12422, 558, 576, 573, 4962, 12, 2]

// Module 16458 (useSuggestedFriends)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import FriendsScreenConstants from "FriendsScreenConstants" /* 12422 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7350 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useStateFromStores = tmp(573);
const SuggestedFriendSource = FriendsScreenConstants.SuggestedFriendSource;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSuggestedFriends(arg0) {
  let arr4;
  let arr5;
  let suggestions;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  let obj = arg0;
  let obj2 = react2;
  const cResult = obj2.c(15);
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FriendSuggestionStore];
    const fn = function c() {
      return suggestions.getSuggestions();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[2] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  [arr4, tmp9] = react.useState(tmp7);
  _slicedToArray(react.useState(tmp7), 2);
  if (flag == null) {
    flag = true;
  }
  if (flag) {
    let tmp12;
    let tmp14;
    let tmp16;
    let tmp17;
    if (cResult[4] === arr4) {
      let tmp11;
      if (cResult[5] === stateFromStoresArray) {
        tmp11 = cResult[6];
      }
      arr5 = tmp11;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function p(source) {
        return source.source === constants.USER_SUGGESTIONS;
      };
      cResult[7] = fn2;
      tmp12 = fn2;
    } else {
      tmp12 = cResult[7];
    }
    const _Symbol2 = Symbol;
    const found = arr4.filter(tmp12);
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(user) {
          let name;
          const obj = { user: user.user, friendSuggestionName: name, source: constants.USER_SUGGESTIONS, contactNames: user.contactNames };
          name = user.name;
          return obj;
        }
      }
      cResult[8] = G;
      tmp14 = G;
    } else {
      class G {
        constructor(user) {
          let name;
          const obj = { user: user.user, friendSuggestionName: name, source: constants.USER_SUGGESTIONS, contactNames: user.contactNames };
          name = user.name;
          return obj;
        }
      }
    }
    const _Symbol3 = Symbol;
    const mapped = stateFromStoresArray.map(tmp14);
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(user) {
          return user.user.id;
        }
      }
      cResult[9] = C;
      tmp16 = C;
    } else {
      class C {
        constructor(user) {
          return user.user.id;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(user, user2) {
          const obj = UserUtilsDefault;
          const name = obj.getName(user.user);
          const localeCompare = name.localeCompare;
          const obj2 = UserUtilsDefault;
          return localeCompare(obj2.getName(user2.user));
        }
      }
      cResult[10] = I;
      tmp17 = I;
    } else {
      class I {
        constructor(user, user2) {
          const obj = UserUtilsDefault;
          const name = obj.getName(user.user);
          const localeCompare = name.localeCompare;
          const obj2 = UserUtilsDefault;
          return localeCompare(obj2.getName(user2.user));
        }
      }
    }
    const obj4 = _modDef12;
    const unionByResult = obj4.unionBy(found, mapped, tmp16);
    const sorted = unionByResult.sort(tmp17);
    cResult[4] = arr4;
    cResult[5] = stateFromStoresArray;
    cResult[6] = sorted;
    tmp11 = sorted;
  } else {
    class I {
      constructor(user, user2) {
        const obj = UserUtilsDefault;
        const name = obj.getName(user.user);
        const localeCompare = name.localeCompare;
        const obj2 = UserUtilsDefault;
        return localeCompare(obj2.getName(user2.user));
      }
    }
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(user, user2) {
          const obj = UserUtilsDefault;
          const name = obj.getName(user.user);
          const localeCompare = name.localeCompare;
          const obj2 = UserUtilsDefault;
          return localeCompare(obj2.getName(user2.user));
        }
      }
      cResult[3] = tmp10;
      arr5 = tmp10;
    } else {
      class I {
        constructor(user, user2) {
          const obj = UserUtilsDefault;
          const name = obj.getName(user.user);
          const localeCompare = name.localeCompare;
          const obj2 = UserUtilsDefault;
          return localeCompare(obj2.getName(user2.user));
        }
      }
    }
  }
  const tmp20 = flag ? arr5.length : stateFromStoresArray.length;
  if (cResult[11] === arr4) {
    class I {
      constructor(user, user2) {
        const obj = UserUtilsDefault;
        const name = obj.getName(user.user);
        const localeCompare = name.localeCompare;
        const obj2 = UserUtilsDefault;
        return localeCompare(obj2.getName(user2.user));
      }
    }
  }
  const obj3 = { added: arr4, setAdded: tmp9, friendSuggestions: arr5, numFriendSuggestions: tmp20 };
  cResult[11] = arr4;
  cResult[12] = arr5;
  cResult[13] = tmp20;
  cResult[14] = obj3;
}) : (function useSuggestedFriends(arg0) {
  let added;
  let stateFromStoresArray;
  let suggestions;
  let tmp3;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  let flag = obj.isConnected;
  let obj2 = stateFromStoresArray(flag[6]);
  const items = [FriendSuggestionStore];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => suggestions.getSuggestions());
  [added, tmp3] = react.useState([]);
  const obj3 = react;
  if (flag == null) {
    flag = true;
  }
  const items1 = [added, stateFromStoresArray, flag];
  const memo = obj3.useMemo(() => {
    const tmp = flag;
    if (tmp) {
      const found = first.filter((source) => source.source === constants.USER_SUGGESTIONS);
      const mapped = stateFromStoresArray.map((user) => {
        let name;
        const obj = { user: user.user, friendSuggestionName: name, source: constants.USER_SUGGESTIONS, contactNames: user.contactNames };
        name = user.name;
        return obj;
      });
      let obj = _modDef12;
      const unionByResult = obj.unionBy(found, mapped, (user) => user.user.id);
      return unionByResult.sort((user, user2) => {
        const obj = added(flag[7]);
        const name = obj.getName(user.user);
        const localeCompare = name.localeCompare;
        const obj2 = added(flag[7]);
        return localeCompare(obj2.getName(user2.user));
      });
    } else {
      return [];
    }
  }, items1);
  return { added, setAdded: tmp3, friendSuggestions: memo, numFriendSuggestions: flag ? memo.length : stateFromStoresArray.length };
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/useSuggestedFriends.tsx");

export default tmp2;
