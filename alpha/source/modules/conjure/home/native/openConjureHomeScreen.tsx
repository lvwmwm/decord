// Module ID: 10467
// Function ID: 10468
// Name: openConjureHomeScreen
// Dependencies: [7595, 5430, 10447, 2017, 5489, 6990, 2]
// Exports: openConjureHomeScreenWhenReady

// Module 10467 (openConjureHomeScreen)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2017 */;
import RootNavigationRef from "RootNavigationRef" /* 5430 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6990 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 7595 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 10447 */;
import size from "module_2" /* 2 */;

function openConjureHomeScreen(projectId) {
  let sum;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.focusComposer;
  if (flag === undefined) {
    flag = false;
  }
  const entryPoint = obj.entryPoint;
  const obj2 = RootNavigationRef;
  const rootNavigationRef = obj2.getRootNavigationRef();
  let result = null != rootNavigationRef && rootNavigationRef.isReady();
  if (result) {
    const tmpResult = ConjureMobileExperiment;
    result = tmpResult.isConjureMobileEnabled(openConjureHomeScreen_str);
  }
  if (result) {
    const tmpResult2 = KeyboardManagerUtils;
    const result1 = tmpResult2.dismissGlobalKeyboard();
    const obj6 = ActionSheetActionCreatorsDefault;
    obj6.hideAllActionSheets();
    const obj3 = { projectId, requestId: sum };
    sum = c5 + 1;
    c5 = sum;
    if (null == projectId) {
      let obj8;
      if (flag) {
        obj8 = { focusComposer: flag };
        const obj4 = { focusComposer: flag };
      }
      const merged = Object.assign(obj8);
      if (null != projectId) {
        let obj7;
        if (null != entryPoint) {
          obj7 = { entryPoint };
          const obj5 = { entryPoint };
        }
        const merged1 = Object.assign(obj7);
        tmp9("conjure", obj3, { pop: true });
      }
      obj7 = {};
    }
    obj8 = {};
  }
}
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
const openConjureHomeScreen_str = "openConjureHomeScreen";
let c5 = 0;
let result = size.fileFinishedImporting("modules/conjure/home/native/openConjureHomeScreen.tsx");

export default openConjureHomeScreen;
export const CONJURE_HOME_LINK_WAIT_MS = 10000;
export function openConjureHomeScreenWhenReady(projectId) {
  let closure_2;
  const f129598 = () => {
    openConjureHomeScreen(projectId, { entryPoint: "deep_link" });
  };
  let closure_0 = projectId;
  let c1 = false;
  const timeout = setTimeout(() => {
    const tmp = c1;
    if (!tmp) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const obj = RootNavigationRef;
      const result = obj.runWhenRootNavigationReady(f129598);
    }
  }, 10000);
  let tmp = addPostConnectionCallback(() => {
    const tmp = c1;
    if (!tmp) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const obj = ConjureGuildExperiment;
      const result = obj.hasConjureGuildWithoutExposure(openConjureHomeScreen_str);
      if (result) {
        const obj2 = RootNavigationRef;
        const result1 = obj2.runWhenRootNavigationReady(f129598);
      }
    }
  });
}
