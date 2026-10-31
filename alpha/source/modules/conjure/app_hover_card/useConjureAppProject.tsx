// Module ID: 14403
// Function ID: 14404
// Name: useConjureAppProject
// Dependencies: [19, 6844, 6879, 10875, 504, 2]
// Exports: default

// Module 14403 (useConjureAppProject)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6844 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, dependencyMap;

let react = react_mod;
const canRemixProject = ConjureProjectStore2.canRemixProject;
let result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppProject.tsx");

export default function useConjureAppProject(arg0, guildId, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  let project;
  _require = arg0;
  dependencyMap = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const useIsConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled;
  const tmp3 = require("ConjureGuildExperiment");
  const tmp5 = useIsConjureGuildEnabled({ guildId, location: "ConjureAppHoverCard" }) && null != guildId;
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
  const items1 = [project];
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
  project = stateFromStoresObject.project;
  const isUnavailable = stateFromStoresObject.isUnavailable;
  const items3 = [project, tmp5, arg0, isUnavailable];
  return react.useMemo(() => {
    let tmp2;
    const obj = { project, remixProject: tmp2, isSettled: null == closure_0 || null != project || isUnavailable };
    tmp2 = null;
    if (closure_2) {
      tmp2 = null;
      if (null != project) {
        tmp2 = null;
        if (canRemixProject(project)) {
          tmp2 = tmp;
        }
      }
    }
    return obj;
  }, items3);
};
