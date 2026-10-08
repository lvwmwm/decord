// Module ID: 11226
// Function ID: 11227
// Name: useFriendsSinceDate
// Dependencies: [2128, 4717, 1085, 558, 576, 573, 6862, 2]

// Module 11226 (useFriendsSinceDate)
import Constants from "Constants" /* 1085 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const RelationshipTypes = Constants.RelationshipTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendsSinceDate(arg0) {
  let closure_0;
  let createdAtDate;
  let locale;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function c() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [RelationshipStore];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    class F {
      constructor() {
        let since = null;
        const obj = RelationshipStore;
        const tmp = closure_0;
        if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
          since = obj.getSince(tmp);
        }
        return since;
      }
    }
    const items2 = [arg0];
    cResult[3] = arg0;
    cResult[4] = F;
    cResult[5] = items2;
    tmp11 = items2;
    tmp10 = F;
  } else {
    class F {
      constructor() {
        let since = null;
        const obj = RelationshipStore;
        const tmp = closure_0;
        if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
          since = obj.getSince(tmp);
        }
        return since;
      }
    }
    tmp11 = cResult[5];
  }
  const tmpResult3 = tmp(573);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[6] === stateFromStores1) {
    class F {
      constructor() {
        let since = null;
        const obj = RelationshipStore;
        const tmp = closure_0;
        if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
          since = obj.getSince(tmp);
        }
        return since;
      }
    }
    return createdAtDate;
  }
  const tmpResult4 = tmp(6862);
  createdAtDate = tmpResult4.getCreatedAtDate(stateFromStores1, stateFromStores);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = createdAtDate;
}) : (function useFriendsSinceDate(arg0) {
  let closure_0;
  let locale;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [RelationshipStore];
  const items2 = [arg0];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let since = null;
    const obj = RelationshipStore;
    const tmp = closure_0;
    if (RelationshipStore.getRelationshipType(closure_0) === RelationshipTypes.FRIEND) {
      since = obj.getSince(tmp);
    }
    return since;
  }, items2);
  const obj3 = require("ConnectionsUtils");
  return obj3.getCreatedAtDate(stateFromStores1, stateFromStores);
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useFriendsSinceDate.tsx");

export const useFriendsSinceDate = tmp2;
