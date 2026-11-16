// Module ID: 13778
// Function ID: 13779
// Name: useConjureSharedProject
// Dependencies: [19, 2165, 1388, 7017, 12439, 504, 12445, 2]
// Exports: default

// Module 13778 (useConjureSharedProject)
import ConjureProjectStore2 from "ConjureProjectStore" /* 7017 */;
import loadConjureSharedProjectDefault from "loadConjureSharedProject" /* 12445 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 12439 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require;

const canRemixProject = ConjureProjectStore2.canRemixProject;
const result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProject.tsx");

export default function useConjureSharedProject(arg0) {
  let closure_0;
  _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  let c1 = tmp;
  let stateFromStores;
  let projectId;
  let stateFromStores2;
  let stateFromStores3;
  let closure_7;
  let tmp2 = _require;
  let obj = require("get initialized");
  const items = [ConjureSharedProjectStore];
  const items1 = [arg0, tmp];
  stateFromStores = obj.useStateFromStores(items, () => ConjureSharedProjectStore.getStatus(closure_0, c1), items1);
  let obj2 = require("get initialized");
  const items2 = [projectId];
  const items3 = [arg0];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let application = ApplicationStore.getApplication(closure_0);
    if (application == null) {
      application = null;
    }
    return application;
  }, items3);
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  projectId = null;
  if ("ready" === type) {
    projectId = stateFromStores.projectId;
  }
  const items4 = [stateFromStores3];
  const items5 = [projectId];
  const tmp2Result = tmp2(stateFromStores[5]);
  stateFromStores2 = tmp2Result.useStateFromStores(items4, () => {
    let tmp2 = null;
    if (null != projectId) {
      let project = ConjureProjectStore.getProject(tmp);
      if (project == null) {
        project = null;
      }
      tmp2 = project;
    }
    return tmp2;
  }, items5);
  const items6 = [stateFromStores2];
  const tmp2Result2 = tmp2(stateFromStores[5]);
  stateFromStores3 = tmp2Result2.useStateFromStores(items6, () => {
    const currentUser = stateFromStores2.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  });
  let tmp10 = null == stateFromStores;
  if (!tmp10) {
    tmp10 = null != projectId && null == stateFromStores2;
  }
  closure_7 = tmp10;
  const items7 = [arg0, tmp, tmp10, stateFromStores3];
  const effect = stateFromStores1.useEffect(() => {
    const tmp = closure_7 && null != stateFromStores3;
    if (tmp) {
      loadConjureSharedProjectDefault(closure_0, c1);
    }
  }, items7);
  const items8 = [stateFromStores, stateFromStores1, stateFromStores2];
  return stateFromStores1.useMemo(() => {
    let ticketValid;
    if (null != stateFromStores) {
      let obj;
      if ("loading" !== stateFromStores.type) {
        if ("unavailable" !== stateFromStores.type) {
          if ("no_access" !== stateFromStores.type) {
            if ("expired" !== stateFromStores.type) {
              if (null == stateFromStores1) {
                obj = { type: "unavailable" };
              } else if ("info_only" === stateFromStores.type) {
                obj = { type: "info_only", application: stateFromStores1 };
                const obj2 = { type: "info_only", application: stateFromStores1 };
              } else if (null == stateFromStores2) {
                obj = { type: "loading" };
              } else {
                obj = { type: "ready", application: stateFromStores1, project: stateFromStores2, canRemix: ticketValid };
                ticketValid = tmp.ticketValid || canRemixProject(tmp2);
              }
            }
          }
        }
        obj = { type: stateFromStores.type };
        const obj3 = { type: stateFromStores.type };
      }
      return obj;
    }
    obj = { type: "loading" };
  }, items8);
};
