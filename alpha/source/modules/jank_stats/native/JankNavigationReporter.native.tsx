// Module ID: 18815
// Function ID: 18816
// Name: JankNavigationReporter
// Dependencies: [5149, 17396, 17400, 17401, 5151, 2]

// Module 18815 (JankNavigationReporter)
import RootNavigationRef from "RootNavigationRef" /* 5149 */;
import getJankScreenName from "getJankScreenName" /* 17396 */;
import react_nativeDefault from "react-native" /* 17400 */;
import getJankSurfaceName from "getJankSurfaceName" /* 17401 */;
import size from "module_2" /* 2 */;

const getJankScreenNameDefault = getJankScreenName;

class JankNavigationReporter {
  constructor() {
    return Object.assign({ _isAttached: false, _routeKeyAtDispatch: "Boolean", _screensBeforeDispatch: "applicationId" });
  }
  attach() {
    const self = this;
    if (!this._isAttached) {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("__unsafe_action__", (data) => {
          self.handleDispatch(data.data.noop);
        });
        rootNavigationRef.addListener("state", () => {
          self.handleStateSettled();
        });
        tmp._isAttached = true;
      }
    }
  }
  handleDispatch(noop) {
    const tmp = noop;
    if (!tmp) {
      const self = this;
      if (null == this._screensBeforeDispatch) {
        const obj = { expectedScreenIds: null, chatScreens: null };
        ({ expectedScreenIds: obj.expectedScreenIds, chatScreens: obj.chatScreens } = getJankScreenNameDefault());
        self._screensBeforeDispatch = obj;
        getJankScreenNameDefault();
      }
      const obj2 = RootNavigationRef;
      const rootNavigationRef = obj2.getRootNavigationRef();
      let key;
      if (rootNavigationRef != null) {
        const getCurrentRoute = rootNavigationRef.getCurrentRoute;
        if (getCurrentRoute != null) {
          const currentRoute = getCurrentRoute();
          if (currentRoute != null) {
            key = currentRoute.key;
          }
        }
      }
      self._routeKeyAtDispatch = key;
      const obj3 = react_nativeDefault;
      const result = obj3.beginScreenTransition();
    }
  }
  handleStateSettled() {
    let chatScreens;
    let closure_129_0;
    let expectedScreenIds;
    let focusedRoute;
    this._screensBeforeDispatch = undefined;
    const _screensBeforeDispatch = this._screensBeforeDispatch;
    const tmp3 = getJankScreenNameDefault();
    ({ screen: closure_129_0, expectedScreenIds } = tmp3);
    ({ focusedRoute, chatScreens } = tmp3);
    const obj = getJankSurfaceName;
    const result = obj.composeJankSurfaceName(() => closure_1_0);
    const obj2 = react_nativeDefault;
    obj2.nameCurrentScreen(result, expectedScreenIds);
    if (this.shouldSettleInJS(focusedRoute, _screensBeforeDispatch, { expectedScreenIds, chatScreens })) {
      const tmpResult = react_nativeDefault;
      tmpResult.settleCurrentScreen();
    }
  }
  shouldSettleInJS(focusedRoute, _screensBeforeDispatch, chatScreens2) {
    let key;
    if (focusedRoute != null) {
      key = focusedRoute.key;
    }
    let tmp2 = null != key;
    if (tmp2) {
      const self = this;
      tmp2 = focusedRoute.key === this._routeKeyAtDispatch;
    }
    if (!tmp2) {
      let name;
      if (focusedRoute != null) {
        name = focusedRoute.name;
      }
      let tmp6 = name === getJankScreenName.CHAT_PANEL_ROUTE;
      const tmp4 = require;
      if (tmp6) {
        let chatScreens;
        if (_screensBeforeDispatch != null) {
          chatScreens = _screensBeforeDispatch.chatScreens;
        }
        let isChatLockedOpen = null != chatScreens && _screensBeforeDispatch.chatScreens === chatScreens2.chatScreens && _screensBeforeDispatch.expectedScreenIds === chatScreens2.expectedScreenIds;
        if (!isChatLockedOpen) {
          const tmp4Result = tmp4(5151);
          isChatLockedOpen = tmp4Result.getChatLayout().isChatLockedOpen;
        }
        tmp6 = isChatLockedOpen;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  }
}
const prototype = JankNavigationReporter.prototype;
const prototype2 = JankNavigationReporter.prototype;
let result = size.fileFinishedImporting("modules/jank_stats/native/JankNavigationReporter.native.tsx");

export default Object.assign({ _isAttached: false, _routeKeyAtDispatch: "Boolean", _screensBeforeDispatch: "applicationId" });
