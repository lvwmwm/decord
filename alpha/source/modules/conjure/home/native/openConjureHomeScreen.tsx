// Module ID: 10856
// Function ID: 10857
// Name: openConjureHomeScreen
// Dependencies: [6895, 5187, 9599, 1893, 5246, 6843, 2]
// Exports: default, openConjureHomeScreenWhenReady

// Module 10856 (openConjureHomeScreen)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import RootNavigationRef from "RootNavigationRef" /* 5187 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6843 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6895 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9599 */;
import size from "module_2" /* 2 */;

const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
const openConjureHomeScreen_str = "openConjureHomeScreen";
let c5 = 0;
let result = size.fileFinishedImporting("modules/conjure/home/native/openConjureHomeScreen.tsx");

export default function openConjureHomeScreen(projectId) {
  let sum;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let result = null != rootNavigationRef && rootNavigationRef.isReady();
  if (result) {
    const tmpResult = ConjureMobileExperiment;
    result = tmpResult.isConjureMobileEnabled(openConjureHomeScreen_str);
  }
  if (result) {
    const tmpResult2 = KeyboardManagerUtils;
    const result1 = tmpResult2.dismissGlobalKeyboard();
    const obj5 = ActionSheetActionCreatorsDefault;
    obj5.hideAllActionSheets();
    const obj2 = { projectId, requestId: sum };
    sum = c5 + 1;
    c5 = sum;
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
        let result = null != rootNavigationRef && rootNavigationRef.isReady();
        const tmp = closure_1_0;
        if (result) {
          const tmp2Result = closure_0(closure_2[2]);
          result = tmp2Result.isConjureMobileEnabled(openConjureHomeScreen_str);
        }
        if (result) {
          const tmp2Result2 = closure_0(closure_2[3]);
          const result1 = tmp2Result2.dismissGlobalKeyboard();
          const obj5 = c1(closure_2[4]);
          obj5.hideAllActionSheets();
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
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      let obj = ConjureGuildExperiment;
      let result = obj.hasConjureGuildWithoutExposure(openConjureHomeScreen_str);
      if (result) {
        let obj2 = RootNavigationRef;
        let result1 = obj2.runWhenRootNavigationReady(() => {
          const obj = closure_0(closure_2[1]);
          const rootNavigationRef = obj.getRootNavigationRef();
          let result = null != rootNavigationRef && rootNavigationRef.isReady();
          const tmp = closure_1_0;
          if (result) {
            const tmp2Result = closure_0(closure_2[2]);
            result = tmp2Result.isConjureMobileEnabled(openConjureHomeScreen_str);
          }
          if (result) {
            const tmp2Result2 = closure_0(closure_2[3]);
            const result1 = tmp2Result2.dismissGlobalKeyboard();
            const obj5 = c1(closure_2[4]);
            obj5.hideAllActionSheets();
            const obj2 = { projectId: tmp, requestId: sum };
            sum = sum + 1;
            rootNavigationRef.navigate("conjure", obj2, { pop: true });
          }
        });
      }
    }
  });
};
