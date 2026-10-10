// Module ID: 18092
// Function ID: 18093
// Name: JankNavigationReporter
// Dependencies: [4977, 16419, 16423, 16424, 4979, 2]

// Module 18092 (JankNavigationReporter)
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import getJankScreenName from "getJankScreenName" /* 16419 */;
import react_nativeDefault from "react-native" /* 16423 */;
import getJankSurfaceName from "getJankSurfaceName" /* 16424 */;
import size from "module_2" /* 2 */;

const getJankScreenNameDefault = getJankScreenName;

class JankNavigationReporter {
  constructor() {
    return Object.assign({ _isAttached: false, _routeKeyAtDispatch: "Boolean", _screensBeforeDispatch: "color" });
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
      if (obj3 != null) {
        const result = obj3.beginScreenTransition();
      }
    }
  }
  handleStateSettled() {
    let chatScreens;
    let closure_129_0;
    let expectedScreenIds;
    let focusedRoute;
    const self = this;
    this._screensBeforeDispatch = undefined;
    const _screensBeforeDispatch = this._screensBeforeDispatch;
    const tmp3 = getJankScreenNameDefault();
    ({ screen: closure_129_0, expectedScreenIds } = tmp3);
    ({ focusedRoute, chatScreens } = tmp3);
    const obj = getJankSurfaceName;
    const result = obj.composeJankSurfaceName(() => closure_1_0);
    const obj2 = react_nativeDefault;
    if (obj2 != null) {
      obj2.nameCurrentScreen(result, expectedScreenIds);
    }
    if (self.shouldSettleInJS(focusedRoute, _screensBeforeDispatch, { expectedScreenIds, chatScreens })) {
      const tmpResult = react_nativeDefault;
      if (tmpResult != null) {
        tmpResult.settleCurrentScreen();
      }
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
          const tmp4Result = tmp4(4979);
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
let result = size.fileFinishedImporting("modules/jank_stats/native/JankNavigationReporter.android.tsx");

export default Object.assign({ _isAttached: false, _routeKeyAtDispatch: "Boolean", _screensBeforeDispatch: "color" });
