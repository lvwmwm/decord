// Module ID: 17177
// Function ID: 17178
// Name: JankNavigationReporter
// Dependencies: [4693, 15642, 15638, 15643, 4695, 2]

// Module 17177 (JankNavigationReporter)
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import getJankScreenName from "getJankScreenName" /* 15638 */;
import react_nativeDefault from "react-native" /* 15642 */;
import getJankSurfaceName from "getJankSurfaceName" /* 15643 */;
import size from "module_2" /* 2 */;

const getJankScreenNameDefault = getJankScreenName;

class JankNavigationReporter {
  constructor() {
    return Object.assign({ _isAttached: false, _routeKeyAtDispatch: "r" });
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
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
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
      const self = this;
      this._routeKeyAtDispatch = key;
      const obj2 = react_nativeDefault;
      if (obj2 != null) {
        const result = obj2.beginScreenTransition();
      }
    }
  }
  handleStateSettled() {
    let expectedScreenIds;
    let focusedRoute;
    const tmp3 = getJankScreenNameDefault();
    const screen = tmp3.screen;
    ({ expectedScreenIds, focusedRoute } = tmp3);
    const obj = getJankSurfaceName;
    const result = obj.composeJankSurfaceName(() => screen);
    const obj2 = react_nativeDefault;
    if (obj2 != null) {
      obj2.nameCurrentScreen(result, expectedScreenIds);
    }
    if (this.shouldSettleInJS(focusedRoute)) {
      const tmpResult = react_nativeDefault;
      if (tmpResult != null) {
        tmpResult.settleCurrentScreen();
      }
    }
  }
  shouldSettleInJS(focusedRoute) {
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
      let isChatLockedOpen = name === getJankScreenName.CHAT_PANEL_ROUTE;
      const tmp4 = require;
      if (isChatLockedOpen) {
        const tmp4Result = tmp4(4695);
        isChatLockedOpen = tmp4Result.getChatLayout().isChatLockedOpen;
      }
      tmp2 = isChatLockedOpen;
    }
    return tmp2;
  }
}
const prototype = JankNavigationReporter.prototype;
const prototype2 = JankNavigationReporter.prototype;
let result = size.fileFinishedImporting("modules/jank_stats/native/JankNavigationReporter.android.tsx");

export default Object.assign({ _isAttached: false, _routeKeyAtDispatch: "r" });
