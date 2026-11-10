// Module ID: 13012
// Function ID: 13013
// Name: useConjureOwnProjectListState
// Dependencies: [19, 6844, 12985, 504, 2]
// Exports: default

// Module 13012 (useConjureOwnProjectListState)
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 12985 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

let importDefault, name;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureOwnProjectListState.tsx");

export default function useConjureOwnProjectListState(str) {
  let obj3;
  let ownedProjectsFetchState;
  const arr = useConjureHomeOwnProjectsDefault();
  const items = [ConjureProjectStore];
  const obj = arr(504);
  const stateFromStores = obj.useStateFromStores(items, () => ownedProjectsFetchState.getOwnedProjectsFetchState());
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  importDefault = toLocaleLowerCaseResult;
  const items1 = [arr, toLocaleLowerCaseResult];
  const memo = react.useMemo(() => {
    let found;
    if ("" === importDefault) {
      found = arr;
    } else {
      found = arr.filter((name) => {
        name = name.name;
        toLocaleLowerCaseResult = name.toLocaleLowerCase();
        return toLocaleLowerCaseResult.includes(closure_1_1);
      });
    }
    return found;
  }, items1);
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
};
