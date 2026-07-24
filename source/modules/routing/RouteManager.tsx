// Module ID: 10840
// Function ID: 84124
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 4808, 10841, 653, 1198, 10842, 7231, 2]

// Module 10840 (_createForOfIteratorHelperLoose)
import convertRouteToNavigation from "convertRouteToNavigation";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getMatchData from "getMatchData";
import { Routes } from "ME";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let tmp2 = (() => {
  class RouteManager {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      set = new Set();
      this.rewrites = set;
      set1 = new Set();
      this.listeners = set1;
      this.routeChangeCount = 0;
      this.timer = -1;
      this.connected = false;
      this.handleConnectionChange = () => {
        const isConnectedResult = outer2_4.isConnected();
        let tmp2 = isConnectedResult;
        if (isConnectedResult) {
          tmp2 = !self.connected;
        }
        self.connected = isConnectedResult;
        if (tmp2) {
          self.routeChangeCount = 0;
          self.executeRouteRewrites(RouteManager(outer2_1[5]).getHistory().location, "REPLACE");
          const obj = RouteManager(outer2_1[5]);
        }
      };
      this.handleRouteChange = (pathname) => {
        if ("POP" !== arg1) {
          if (!self.executeRouteRewrites(pathname, tmp)) {
            if (!obj.convertRouteToNavigation(pathname)) {
              RouteManager(outer2_1[5]).replaceWith(outer2_6.ME);
            }
            obj = RouteManager(outer2_1[6]);
          }
        }
        const state = outer2_5.getState();
        if (state.basePath !== pathname.pathname) {
          state.resetPath(pathname.pathname);
        }
        const tmp14 = outer2_7(self.listeners);
        const iter = tmp14();
        let iter2 = iter;
        if (!iter.done) {
          const value = iter2.value;
          value(pathname, tmp);
          while (true) {
            while (true) {
              let tmp20 = tmp14;
              let iter3 = tmp14();
              iter2 = iter3;
              if (!iter3.done) {
                break;
              } else {
                break label0;
              }
            }
          }
        }
        self.routeChangeCount = 0;
      };
      this.handleKeybindRouteChange = (path) => {
        if (-1 !== self.timer) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self.timer);
        }
        if (null != path.path) {
          const _setTimeout = setTimeout;
          self.timer = setTimeout(self.flushRoute, 200);
        }
      };
      this.flushRoute = () => {
        clearTimeout(self.timer);
        const state = outer2_5.getState();
        if (null != state.path) {
          RouteManager(outer2_1[5]).transitionTo(state.path);
          const obj = RouteManager(outer2_1[5]);
        }
      };
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {
      this.cleanup();
      const history = RouteManager(outer1_1[5]).getHistory();
      this.unlistenHistory = history.listen(this.handleRouteChange);
      const obj = RouteManager(outer1_1[5]);
      const state = outer1_5.getState();
      state.resetPath(RouteManager(outer1_1[5]).getHistory().location.pathname);
      this.unlistenKeyboardChange = outer1_5.subscribe(this.handleKeybindRouteChange);
      outer1_4.addChangeListener(this.handleConnectionChange);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "executeRouteRewrites",
    value(arg0, arg1) {
      this.routeChangeCount = this.routeChangeCount + 1;
      if (this.routeChangeCount < 10) {
        const tmp8 = outer1_7(tmp.rewrites);
        const iter = tmp8();
        let iter2 = iter;
        if (!iter.done) {
          let obj = RouteManager(outer1_1[5]);
          const valueResult = iter2.value(arg0, arg1);
          while (null == valueResult) {
            let iter3 = tmp8();
            iter2 = iter3;
          }
          obj = { message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route" };
          obj = { replacePath: valueResult.path };
          obj.previousPath = obj.getHistory().location.pathname;
          obj.data = obj;
          RouteManager(outer1_1[7]).addBreadcrumb(obj);
          const obj2 = RouteManager(outer1_1[7]);
          RouteManager(outer1_1[5]).replaceWith(valueResult.path, valueResult.state);
          return true;
        }
        return false;
      } else {
        const _Error = Error;
        const error = new Error("RouteManager: Something has gone horribly wrong with rewrites");
        throw error;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "cleanup",
    value() {
      const self = this;
      const unlistenHistory = this.unlistenHistory;
      if (null != unlistenHistory) {
        unlistenHistory.call(self);
      }
      self.unlistenHistory = undefined;
      const unlistenKeyboardChange = self.unlistenKeyboardChange;
      if (null != unlistenKeyboardChange) {
        unlistenKeyboardChange.call(self);
      }
      self.unlistenKeyboardChange = undefined;
      outer1_4.removeChangeListener(self.handleConnectionChange);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addRouteChangeListener",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      if (null != this.unlistenHistory) {
        arg0(RouteManager(outer1_1[5]).getHistory().location, "REPLACE");
        const obj = RouteManager(outer1_1[5]);
      }
      const listeners = this.listeners;
      listeners.add(arg0);
      return () => self.removeRouteChangeListener(closure_1);
    }
  };
  items[4] = {
    key: "addRouteRewriter",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      if (null != this.unlistenHistory) {
        const obj = RouteManager(outer1_1[5]);
        const tmp3 = arg0(obj.getHistory().location, RouteManager(outer1_1[5]).getHistory().action);
        if (null != tmp3) {
          RouteManager(outer1_1[5]).replaceWith(tmp3.path, tmp3.state);
          const obj3 = RouteManager(outer1_1[5]);
        }
        const obj2 = RouteManager(outer1_1[5]);
      }
      const rewrites = this.rewrites;
      rewrites.add(arg0);
      return () => self.removeRouteRewriter(closure_1);
    }
  };
  items[5] = {
    key: "removeRouteChangeListener",
    value(arg0) {
      const listeners = this.listeners;
      listeners.delete(arg0);
    }
  };
  items[6] = {
    key: "removeRouteRewriter",
    value(arg0) {
      const rewrites = this.rewrites;
      rewrites.delete(arg0);
    }
  };
  items[7] = {
    key: "getHistory",
    value() {
      return RouteManager(outer1_1[5]).getHistory();
    }
  };
  return callback(RouteManager, items);
})();
tmp2 = new tmp2();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/routing/RouteManager.tsx");

export default tmp2;
