// Module ID: 10932
// Function ID: 10933
// Name: openConjureHomeScreen
// Dependencies: [6919, 5188, 9631, 1894, 5247, 6866, 2]
// Exports: openConjureHomeScreenWhenReady

// Module 10932 (openConjureHomeScreen)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import RootNavigationRef from "RootNavigationRef" /* 5188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6866 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6919 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9631 */;
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
      let obj5;
      if (flag) {
        obj5 = { focusComposer: flag };
        const obj4 = { focusComposer: flag };
      }
      const merged = Object.assign(obj5);
      tmp9("conjure", obj3, { pop: true });
    }
    obj5 = {};
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
  const f150450 = () => {
    openConjureHomeScreen(projectId);
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
      const result = obj.runWhenRootNavigationReady(f150450);
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
        const result1 = obj2.runWhenRootNavigationReady(f150450);
      }
    }
  });
}
