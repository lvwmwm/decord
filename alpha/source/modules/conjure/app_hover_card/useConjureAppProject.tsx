// Module ID: 14652
// Function ID: 14653
// Name: useConjureAppProject
// Dependencies: [19, 6899, 6934, 10996, 504, 2]
// Exports: default

// Module 14652 (useConjureAppProject)
import ConjureActionCreators from "ConjureActionCreators" /* 10996 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6899 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c3;
let closure_4;
let react = react_mod;
let ConjureProjectStore = ConjureProjectStore_mod;
({ canRemixProject: c3, isProjectOwner: closure_4 } = ConjureProjectStore);
ConjureProjectStore = ConjureProjectStore_mod;
let result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppProject.tsx");

export default function useConjureAppProject(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let tmp4 = arg1;
  const useIsConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled;
  const tmp3 = require("ConjureGuildExperiment");
  const tmp5 = useIsConjureGuildEnabled({ guildId: tmp4, location: "ConjureAppHoverCard" }) && null != arg1;
  react = tmp5;
  let items = [arg2, arg0];
  const effect = react.useEffect(() => {
    const tmp = closure_1 && null != closure_0;
    if (tmp) {
      const items = [closure_0];
      const obj = ConjureActionCreators;
      const missingConjureProjects = obj.loadMissingConjureProjects(items);
    }
  }, items);
  const items1 = [ConjureProjectStore];
  const items2 = [arg0];
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let result;
    let tmp2 = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
      if (project == null) {
        project = null;
      }
      tmp2 = project;
    }
    const obj = { project: tmp2, isUnavailable: result };
    result = null != tmp;
    if (result) {
      const obj2 = ConjureActionCreators;
      result = obj2.isConjureProjectUnavailable(tmp);
    }
    return obj;
  }, items2);
  let project = stateFromStoresObject.project;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  const items3 = [project, tmp5, arg0, isUnavailable];
  return react.useMemo(() => {
    let tmp2;
    let tmp4;
    const obj = { project, remixProject: tmp2, editProject: tmp4, isSettled: null == closure_0 || null != project || isUnavailable };
    tmp2 = null;
    if (closure_2) {
      tmp2 = null;
      if (null != project) {
        tmp2 = null;
        if (_false(project)) {
          tmp2 = tmp;
        }
      }
    }
    tmp4 = null;
    if (null != project) {
      tmp4 = null;
      if (React3(project)) {
        tmp4 = tmp;
      }
    }
    return obj;
  }, items3);
};
