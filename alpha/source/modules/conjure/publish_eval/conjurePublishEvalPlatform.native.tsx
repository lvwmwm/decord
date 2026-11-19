// Module ID: 19523
// Function ID: 19524
// Name: conjurePublishEvalPlatform
// Dependencies: [4969, 5473, 1113, 4089, 12226, 2]

// Module 19523 (conjurePublishEvalPlatform)
import intl2 from "intl" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import RootNavigationRef from "RootNavigationRef" /* 4969 */;
import ToastUtils from "ToastUtils" /* 5473 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12226 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const set = new Set(["conjure", "modal"]);
let c4 = false;
let obj = {
  watchNavigation(arg0) {
    let closure_0;
    _require = arg0;
    let tmp = c4;
    if (!tmp) {
      c4 = true;
      let tmp3 = dependencyMap;
      let obj = require("RootNavigationRef");
      const result = obj.runWhenRootNavigationReady(() => {
        let rootNavigationRef;
        const obj = rootNavigationRef(dependencyMap[0]);
        rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          rootNavigationRef.addListener("state", () => {
            const tmp = rootNavigationRef();
            const rootState = rootNavigationRef.getRootState();
            let tmp3;
            if (rootState != null) {
              tmp3 = rootState.routes[rootState.index];
            }
            const hasItem = null == tmp || null == tmp3 || set.has(tmp3.name);
            if (!hasItem) {
              const presentError = ToastUtils.presentError;
              ToastUtils;
              const intl = intl2.intl;
              presentError(intl.string(_modDef4089["PyD/rD"]));
              openConjureHomeScreenDefault(tmp);
            }
          });
        }
      });
    }
  },
  openProject(projectId) {
    _require = projectId;
    let obj = require("RootNavigationRef");
    const result = obj.runWhenRootNavigationReady(() => {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      let rootState;
      if (rootNavigationRef != null) {
        rootState = rootNavigationRef.getRootState();
      }
      let flag = false;
      if (null != rootState) {
        const routes = rootState.routes;
        const substr = routes.slice(0, rootState.index + 1);
        const findLastResult = substr.findLast((name) => "modal" !== name.name);
        let name;
        if (findLastResult != null) {
          name = findLastResult.name;
        }
        let tmp6 = "conjure" === name;
        if (tmp6) {
          const params = findLastResult.params;
          projectId = undefined;
          if (params != null) {
            projectId = params.projectId;
          }
          tmp6 = projectId === tmp;
        }
        flag = tmp6;
      }
      if (!flag) {
        openConjureHomeScreenDefault(closure_0);
      }
    });
  }
};
let result = size.fileFinishedImporting("modules/conjure/publish_eval/conjurePublishEvalPlatform.native.tsx");

export default obj;
