// Module ID: 12502
// Function ID: 12503
// Name: useConjureProjectCreator
// Dependencies: [19, 1392, 10699, 1128, 3830, 12503, 558, 576, 504, 12339, 5025, 2]
// Exports: getConjureProjectCreatorLabel

// Module 12502 (useConjureProjectCreator)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import UserUtils from "UserUtils" /* 5025 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12339 */;
import ListUtils from "ListUtils" /* 12503 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let set;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectPeople(id) {
  let first;
  let stateFromStoresArray;
  let tmp26;
  const tmp = id;
  const tmp2 = stateFromStoresArray;
  let obj = id(stateFromStoresArray[7]);
  const cResult = obj.c(20);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let owner_user_id;
  if (id != null) {
    owner_user_id = id.owner_user_id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureChatStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === owner_user_id) {
    let tmp8;
    let tmp9;
    if (cResult[2] === id) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = tmp(tmp2[8]);
    stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
    if (cResult[5] === stateFromStoresArray) {
      let tmp11;
      let tmp12;
      let tmp18;
      let tmp17;
      let tmp22;
      let tmp21;
      if (cResult[6] === owner_user_id) {
        tmp11 = cResult[7];
        tmp12 = cResult[8];
      }
      const effect = react.useEffect(tmp11, tmp12);
      const _Symbol = Symbol;
      class C {
        constructor() {
          if (null != owner_user_id) {
            const obj = conjureMessageAuthors;
            const messageAuthor = obj.requestMessageAuthor(tmp);
            const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
          }
        }
      }
      if (cResult[10] !== owner_user_id) {
        class P {
          constructor() {
            let user = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        const items1 = [owner_user_id];
        cResult[10] = owner_user_id;
        class C {
          constructor() {
            if (null != owner_user_id) {
              const obj = conjureMessageAuthors;
              const messageAuthor = obj.requestMessageAuthor(tmp);
              const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
            }
          }
        }
        cResult[11] = P;
        cResult[12] = items1;
        tmp18 = items1;
        tmp17 = P;
      } else {
        class P {
          constructor() {
            let user = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        tmp18 = cResult[12];
      }
      const tmpResult3 = tmp(tmp2[8]);
      const stateFromStores = tmpResult3.useStateFromStores(tmp16, tmp17, tmp18);
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            let user = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        const items2 = [UserStore];
        cResult[13] = items2;
        class C {
          constructor() {
            if (null != owner_user_id) {
              const obj = conjureMessageAuthors;
              const messageAuthor = obj.requestMessageAuthor(tmp);
              const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
            }
          }
        }
      } else {
        class P {
          constructor() {
            let user = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
      }
      if (cResult[14] !== stateFromStoresArray) {
        class P {
          constructor() {
            let user = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        const items3 = [stateFromStoresArray];
        cResult[14] = stateFromStoresArray;
        class C {
          constructor() {
            if (null != owner_user_id) {
              const obj = conjureMessageAuthors;
              const messageAuthor = obj.requestMessageAuthor(tmp);
              const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
            }
          }
        }
        cResult[15] = items3;
        cResult[16] = tmp23;
        tmp22 = tmp23;
        tmp21 = items3;
      } else {
        class P {
          constructor() {
            let user = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        tmp22 = cResult[16];
      }
      const tmpResult4 = tmp(tmp2[8]);
      const stateFromStoresArray1 = tmpResult4.useStateFromStoresArray(tmp20, tmp22, tmp21);
      if (stateFromStores == null) {
        class P {
          constructor() {
            let user = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
      }
      if (cResult[17] === stateFromStoresArray1) {
        class P {
          constructor() {
            let user = null;
            if (null != owner_user_id) {
              user = UserStore.getUser(tmp);
            }
            return user;
          }
        }
        return tmp26;
      }
      const obj2 = { creator: stateFromStores, collaborators: stateFromStoresArray1 };
      cResult[17] = stateFromStoresArray1;
      cResult[18] = stateFromStores;
      cResult[19] = obj2;
      tmp26 = obj2;
    }
    class C {
      constructor() {
        if (null != owner_user_id) {
          const obj = conjureMessageAuthors;
          const messageAuthor = obj.requestMessageAuthor(tmp);
          const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
        }
      }
    }
    const items4 = [owner_user_id, stateFromStoresArray];
    cResult[5] = stateFromStoresArray;
    cResult[6] = owner_user_id;
    cResult[7] = C;
    cResult[8] = items4;
    tmp12 = items4;
    tmp11 = C;
  }
  const fn = function n() {
    if (null == id) {
      return [];
    } else {
      const messages = ConjureChatStore.getMessages(tmp);
      const _Set = Set;
      const self = this;
      const self2 = this;
      const flatMapResult = messages.flatMap((user_id) => {
        if (null != user_id.user_id) {
          if (user_id.user_id !== owner_user_id) {
            const items = [user_id.user_id];
          }
          return [];
        }
      });
      let items = [];
      set = new Set(flatMapResult.reverse());
      HermesBuiltin.arraySpread(items, set, 0);
      return items;
    }
  };
  const items5 = [id, owner_user_id];
  cResult[1] = owner_user_id;
  cResult[2] = id;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp9 = items5;
  tmp8 = fn;
}) : (function useConjureProjectPeople(id) {
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let owner_user_id;
  if (id != null) {
    owner_user_id = id.owner_user_id;
  }
  let obj = id(stateFromStoresArray[8]);
  let items = [ConjureChatStore];
  const items1 = [id, owner_user_id];
  stateFromStoresArray = obj.useStateFromStoresArray(items, function() {
    if (null == id) {
      return [];
    } else {
      const messages = ConjureChatStore.getMessages(tmp);
      const _Set = Set;
      const self = this;
      const self2 = this;
      const flatMapResult = messages.flatMap((user_id) => {
        if (null != user_id.user_id) {
          if (user_id.user_id !== owner_user_id) {
            const items = [user_id.user_id];
          }
          return [];
        }
      });
      let items = [];
      set = new Set(flatMapResult.reverse());
      HermesBuiltin.arraySpread(items, set, 0);
      return items;
    }
  }, items1);
  const items2 = [owner_user_id, stateFromStoresArray];
  const effect = stateFromStores.useEffect(() => {
    if (null != owner_user_id) {
      const obj = conjureMessageAuthors;
      const messageAuthor = obj.requestMessageAuthor(tmp);
      const item = stateFromStoresArray.forEach(conjureMessageAuthors.requestMessageAuthor);
    }
  }, items2);
  const items3 = [stateFromStoresArray1];
  const items4 = [owner_user_id];
  const obj2 = id(stateFromStoresArray[8]);
  stateFromStores = obj2.useStateFromStores(items3, () => {
    let user = null;
    if (null != owner_user_id) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items4);
  const items5 = [stateFromStoresArray1];
  const items6 = [stateFromStoresArray];
  const obj3 = id(stateFromStoresArray[8]);
  stateFromStoresArray1 = obj3.useStateFromStoresArray(items5, () => {
    let user;
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  }, items6);
  const items7 = [stateFromStores, stateFromStoresArray1];
  return stateFromStores.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores == null) {
      tmp = null;
    }
    return { creator: tmp, collaborators: stateFromStoresArray1 };
  }, items7);
});
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
function getConjureProjectCreatorLabel(creator, names) {
  let formatToPlainStringResult;
  let obj2;
  if (0 === names.length) {
    const intl2 = intl3.intl;
    const obj3 = { creator };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3830.t5RWBS, obj3);
  } else {
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { creator, collaborators: obj2.getListSummaryLabel(names) };
    const prop = _modDef3830["b5uCe/"];
    obj2 = ListUtils;
    formatToPlainStringResult = formatToPlainString(prop, obj);
  }
  return formatToPlainStringResult;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectCreator(arg0) {
  let collaborators;
  let creator;
  let formatToPlainStringResult;
  let tmpResult2;
  let obj = react2;
  const cResult = obj.c(3);
  ({ creator, collaborators } = closure_6(arg0));
  closure_6(arg0);
  if (cResult[0] === collaborators) {
    let tmp5;
    if (cResult[1] === creator) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  let tmp6 = null;
  if (null != creator) {
    const obj2 = { creator, collaborators, label: formatToPlainStringResult };
    const tmpResult = UserUtils;
    const name = tmpResult.getName(creator);
    const mapped = collaborators.map((item) => {
      const obj = require("UserUtils");
      return obj.getName(item);
    });
    if (0 === mapped.length) {
      const intl2 = tmp(1128).intl;
      const obj3 = { creator: name };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3830.t5RWBS, obj3);
    } else {
      const intl = tmp(1128).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj4 = { creator: name, collaborators: tmpResult2.getListSummaryLabel(mapped) };
      const prop = _modDef3830["b5uCe/"];
      tmpResult2 = ListUtils;
      formatToPlainStringResult = formatToPlainString(prop, obj4);
    }
    tmp6 = obj2;
  }
  cResult[0] = collaborators;
  cResult[1] = creator;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function useConjureProjectCreator(arg0) {
  const tmp = closure_6(arg0);
  const creator = tmp.creator;
  const collaborators = tmp.collaborators;
  const items = [creator, collaborators];
  return react.useMemo(() => {
    let formatToPlainStringResult;
    let tmp4Result;
    let tmp2 = null;
    if (null != creator) {
      let obj = { creator, collaborators, label: formatToPlainStringResult };
      const obj2 = UserUtils;
      const name = obj2.getName(tmp);
      const mapped = collaborators.map((item) => {
        const obj = creator(closure_1_2[10]);
        return obj.getName(item);
      });
      if (0 === mapped.length) {
        const intl2 = tmp4(1128).intl;
        const obj3 = { creator: name };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef3830.t5RWBS, obj3);
      } else {
        const intl = tmp4(1128).intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj4 = { creator: name, collaborators: tmp4Result.getListSummaryLabel(mapped) };
        const prop = _modDef3830["b5uCe/"];
        tmp4Result = ListUtils;
        formatToPlainStringResult = formatToPlainString(prop, obj4);
      }
      tmp2 = obj;
    }
    return tmp2;
  }, items);
});
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectCreator.tsx");

export default tmp3;
export { getConjureProjectCreatorLabel };
export const useConjureProjectPeople = tmp2;
