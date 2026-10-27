// Module ID: 10818
// Function ID: 10819
// Name: openConjureHomeScreen
// Dependencies: [6859, 5151, 1896, 5210, 6808, 2]
// Exports: default, openConjureHomeScreenWhenReady

// Module 10818 (openConjureHomeScreen)
import RootNavigationRef from "RootNavigationRef" /* 5151 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6808 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6859 */;
import size from "module_2" /* 2 */;

let tmp;
const KeyboardManagerUtils = tmp(1896);
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
let c4 = 0;
let result = size.fileFinishedImporting("modules/conjure/home/native/openConjureHomeScreen.tsx");

export default function openConjureHomeScreen(projectId) {
  let sum;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const tmp3 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp3) {
    const tmpResult = KeyboardManagerUtils;
    const result = tmpResult.dismissGlobalKeyboard();
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideAllActionSheets();
    const obj2 = { projectId, requestId: sum };
    sum = c4 + 1;
    c4 = sum;
    rootNavigationRef.navigate("conjure", obj2, { pop: true });
  }
};
export const CONJURE_HOME_LINK_WAIT_MS = 10000;
export const openConjureHomeScreenWhenReady = function openConjureHomeScreenWhenReady(projectId) {
  let closure_2;
  let closure_0 = projectId;
  let c1 = false;
  const timeout = setTimeout(() => {
    const tmp = c1;
    if (!tmp) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const obj = RootNavigationRef;
      const result = obj.runWhenRootNavigationReady(() => {
        const obj = closure_0(closure_2[1]);
        const rootNavigationRef = obj.getRootNavigationRef();
        const tmp = closure_1_0;
        const tmp2 = closure_0;
        const tmp4 = null != rootNavigationRef && rootNavigationRef.isReady();
        if (tmp4) {
          const tmp2Result = tmp2(closure_2[2]);
          const result = tmp2Result.dismissGlobalKeyboard();
          const obj4 = c1(closure_2[3]);
          obj4.hideAllActionSheets();
          const obj2 = { projectId: tmp, requestId: sum };
          sum = sum + 1;
          rootNavigationRef.navigate("conjure", obj2, { pop: true });
        }
      });
    }
  }, 10000);
  let tmp = addPostConnectionCallback(() => {
    let tmp = c1;
    if (!tmp) {
      c1 = true;
      let tmp2 = globalThis;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      let obj = ConjureGuildExperiment;
      let result = obj.hasConjureGuildWithoutExposure("openConjureHomeScreen");
      if (result) {
        let obj2 = RootNavigationRef;
        const result1 = obj2.runWhenRootNavigationReady(() => {
          const obj = closure_0(closure_2[1]);
          const rootNavigationRef = obj.getRootNavigationRef();
          const tmp = closure_1_0;
          const tmp2 = closure_0;
          const tmp4 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp4) {
            const tmp2Result = tmp2(closure_2[2]);
            const result = tmp2Result.dismissGlobalKeyboard();
            const obj4 = c1(closure_2[3]);
            obj4.hideAllActionSheets();
            const obj2 = { projectId: tmp, requestId: sum };
            sum = sum + 1;
            rootNavigationRef.navigate("conjure", obj2, { pop: true });
          }
        });
      }
    }
  });
};
