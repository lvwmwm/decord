// Module ID: 17840
// Function ID: 17841
// Name: useConjureOwnProjectListState
// Dependencies: [19, 6773, 558, 576, 17841, 504, 2]

// Module 17840 (useConjureOwnProjectListState)
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 17841 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, name;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureOwnProjectListState(str, arg1) {
  let closure_0;
  let closure_1;
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(15);
  const arr = useConjureHomeOwnProjectsDefault(arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function s() {
      let guildProjectsFetchState;
      if (null != closure_0) {
        guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
      } else {
        guildProjectsFetchState = ConjureProjectStore.getOwnedProjectsFetchState();
      }
      return guildProjectsFetchState;
    };
    const items1 = [arg1];
    cResult[1] = arg1;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== str) {
    const trimmed = str.trim();
    let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
    cResult[4] = str;
    cResult[5] = toLocaleLowerCaseResult;
    tmp9 = toLocaleLowerCaseResult;
  } else {
    tmp9 = cResult[5];
  }
  importDefault = tmp9;
  if (cResult[6] === tmp9) {
    let arr4;
    let tmp12;
    if (cResult[7] === arr) {
      arr4 = cResult[8];
    }
    if (arr4.length > 0) {
      let tmp16;
      if (cResult[9] !== arr4) {
        const obj2 = { kind: "projects", projects: arr4 };
        cResult[9] = arr4;
        cResult[10] = obj2;
        tmp16 = obj2;
      } else {
        tmp16 = cResult[10];
      }
      tmp12 = tmp16;
    } else if (arr.length > 0) {
      let tmp15;
      const _Symbol4 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { kind: "no_match" };
        cResult[11] = obj3;
        tmp15 = obj3;
      } else {
        tmp15 = cResult[11];
      }
      tmp12 = tmp15;
    } else if ("error" === stateFromStores) {
      let tmp14;
      const _Symbol3 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { kind: "error" };
        cResult[12] = obj4;
        tmp14 = obj4;
      } else {
        tmp14 = cResult[12];
      }
      tmp12 = tmp14;
    } else if ("success" !== stateFromStores) {
      let tmp13;
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { kind: "loading" };
        cResult[13] = obj5;
        tmp13 = obj5;
      } else {
        tmp13 = cResult[13];
      }
      tmp12 = tmp13;
    } else {
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { kind: "empty" };
        cResult[14] = obj6;
        tmp12 = obj6;
      } else {
        tmp12 = cResult[14];
      }
    }
    return tmp12;
  }
  let found = arr;
  if ("" !== tmp9) {
    found = arr.filter((name) => {
      name = name.name;
      const toLocaleLowerCaseResult = name.toLocaleLowerCase();
      return toLocaleLowerCaseResult.includes(closure_1);
    });
  }
  cResult[6] = tmp9;
  cResult[7] = arr;
  cResult[8] = found;
  arr4 = found;
}) : (function useConjureOwnProjectListState(str, arg1) {
  let arr;
  let closure_0;
  let obj3;
  _require = arg1;
  arr = arr(17841)(arg1);
  const items = [ConjureProjectStore];
  const items1 = [arg1];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildProjectsFetchState;
    if (null != closure_0) {
      guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
    } else {
      guildProjectsFetchState = ConjureProjectStore.getOwnedProjectsFetchState();
    }
    return guildProjectsFetchState;
  }, items1);
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  dependencyMap = toLocaleLowerCaseResult;
  const items2 = [arr, toLocaleLowerCaseResult];
  const memo = react.useMemo(() => {
    let found;
    if ("" === dependencyMap) {
      found = arr;
    } else {
      found = arr.filter((name) => {
        name = name.name;
        toLocaleLowerCaseResult = name.toLocaleLowerCase();
        return toLocaleLowerCaseResult.includes(closure_1_2);
      });
    }
    return found;
  }, items2);
  if (memo.length > 0) {
    obj3 = { kind: "projects", projects: memo };
    const obj2 = { kind: "projects", projects: memo };
  } else if (arr.length > 0) {
    obj3 = { kind: "no_match" };
  } else if ("error" === stateFromStores) {
    obj3 = { kind: "error" };
  } else {
    obj3 = "success" !== stateFromStores ? { kind: "loading" } : { kind: "empty" };
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/conjure/home/useConjureOwnProjectListState.tsx");

export default tmp2;
