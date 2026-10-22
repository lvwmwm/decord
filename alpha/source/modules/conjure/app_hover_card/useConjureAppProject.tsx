// Module ID: 13807
// Function ID: 13808
// Name: useConjureAppProject
// Dependencies: [19, 6759, 558, 576, 6794, 10690, 504, 2]

// Module 13807 (useConjureAppProject)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6759 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10690 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, dependencyMap;

let react = react_mod;
const canRemixProject = ConjureProjectStore2.canRemixProject;
const ConjureAppHoverCard = "ConjureAppHoverCard";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppProject(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let tmp5;
  _require = arg0;
  dependencyMap = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] !== arg1) {
    let obj2 = { guildId: tmp4, location: ConjureAppHoverCard };
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = tmp(6794);
  const tmp7 = tmpResult.useIsConjureGuildEnabled(tmp5) && null != arg1;
  if (cResult[2] === arg0) {
    let tmp8;
    let tmp9;
    let tmp13;
    let tmp16;
    let tmp15;
    if (cResult[3] === arg2) {
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    const effect = react.useEffect(tmp8, tmp9);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [ConjureProjectStore];
      cResult[6] = items;
      tmp13 = items;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== arg0) {
      const fn2 = function f() {
        let result;
        let tmp2 = null;
        if (null != closure_0) {
          let project = ConjureProjectStore.getProject(tmp);
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
      };
      const items1 = [arg0];
      cResult[7] = arg0;
      cResult[8] = fn2;
      cResult[9] = items1;
      tmp16 = items1;
      tmp15 = fn2;
    } else {
      tmp15 = cResult[8];
      tmp16 = cResult[9];
    }
    const tmpResult2 = tmp(504);
    const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp13, tmp15, tmp16);
    let project = stateFromStoresObject.project;
    if (cResult[10] === tmp7) {
      let tmp19;
      if (cResult[11] === project) {
        tmp19 = cResult[12];
      }
      if (cResult[13] === project) {
        if (cResult[14] === tmp19) {
          let tmp23;
          if (cResult[15] === (null == arg0 || null != project || tmp18)) {
            tmp23 = cResult[16];
          }
          return tmp23;
        }
      }
      const obj3 = { project, remixProject: tmp19, isSettled: null == arg0 || null != project || tmp18 };
      cResult[13] = project;
      cResult[14] = tmp19;
      cResult[15] = null == arg0 || null != project || tmp18;
      cResult[16] = obj3;
      tmp23 = obj3;
    }
    let tmp20 = null;
    if (tmp7) {
      tmp20 = null;
      if (null != project) {
        tmp20 = null;
        if (canRemixProject(project)) {
          tmp20 = project;
        }
      }
    }
    cResult[10] = tmp7;
    cResult[11] = project;
    cResult[12] = tmp20;
    tmp19 = tmp20;
  }
  const fn = function b() {
    const tmp = closure_1 && null != closure_0;
    if (tmp) {
      const items = [closure_0];
      const obj = ConjureActionCreators;
      const missingConjureProjects = obj.loadMissingConjureProjects(items);
    }
  };
  const items2 = [arg2, arg0];
  cResult[2] = arg0;
  cResult[3] = arg2;
  cResult[4] = fn;
  cResult[5] = items2;
  tmp9 = items2;
  tmp8 = fn;
}) : (function useConjureAppProject(arg0, guildId, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  let project;
  _require = arg0;
  dependencyMap = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const useIsConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled;
  let obj = { guildId, location: ConjureAppHoverCard };
  const tmp3 = require("ConjureGuildExperiment");
  const tmp5 = useIsConjureGuildEnabled(obj) && null != guildId;
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
});
let result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppProject.tsx");

export default tmp2;
