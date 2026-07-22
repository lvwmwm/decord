// Module ID: 10801
// Function ID: 83883
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 10801 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const Routes = arg1(dependencyMap[4]).Routes;
let tmp2 = () => {
  class RouteManager {
    constructor() {
      RouteManager = this;
      tmp = closure_2(this, RouteManager);
      set = new Set();
      this.rewrites = set;
      set1 = new Set();
      this.listeners = set1;
      this.routeChangeCount = 0;
      this.timer = -1;
      this.connected = false;
      this.handleConnectionChange = () => {
        const isConnectedResult = connected.isConnected();
        let tmp2 = isConnectedResult;
        if (isConnectedResult) {
          tmp2 = !self.connected;
        }
        self.connected = isConnectedResult;
        if (tmp2) {
          self.routeChangeCount = 0;
          self.executeRouteRewrites(self(closure_1[5]).getHistory().location, "REPLACE");
          const obj = self(closure_1[5]);
        }
      };
      this.handleRouteChange = (pathname) => {
        if ("POP" !== arg1) {
          if (!self.executeRouteRewrites(pathname, tmp)) {
            if (!obj.convertRouteToNavigation(pathname)) {
              self(closure_1[5]).replaceWith(constants.ME);
            }
            const obj = self(closure_1[6]);
          }
        }
        const state = store.getState();
        if (state.basePath !== pathname.pathname) {
          state.resetPath(pathname.pathname);
        }
        const tmp14 = callback(self.listeners);
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
        const state = store.getState();
        if (null != state.path) {
          self(closure_1[5]).transitionTo(state.path);
          const obj = self(closure_1[5]);
        }
      };
      return;
    }
  }
  const arg1 = RouteManager;
  let obj = {
    key: "initialize",
    value() {
      this.cleanup();
      const history = RouteManager(closure_1[5]).getHistory();
      this.unlistenHistory = history.listen(this.handleRouteChange);
      const obj = RouteManager(closure_1[5]);
      const state = closure_5.getState();
      state.resetPath(RouteManager(closure_1[5]).getHistory().location.pathname);
      this.unlistenKeyboardChange = closure_5.subscribe(this.handleKeybindRouteChange);
      closure_4.addChangeListener(this.handleConnectionChange);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "executeRouteRewrites",
    value(arg0, arg1) {
      this.routeChangeCount = this.routeChangeCount + 1;
      if (this.routeChangeCount < 10) {
        const tmp8 = callback2(tmp.rewrites);
        const iter = tmp8();
        let iter2 = iter;
        if (!iter.done) {
          let obj = RouteManager(closure_1[5]);
          const valueResult = iter2.value(arg0, arg1);
          while (null == valueResult) {
            let iter3 = tmp8();
            iter2 = iter3;
          }
          obj = { message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route" };
          obj = { replacePath: valueResult.path };
          obj.previousPath = obj.getHistory().location.pathname;
          obj.data = obj;
          RouteManager(closure_1[7]).addBreadcrumb(obj);
          const obj2 = RouteManager(closure_1[7]);
          RouteManager(closure_1[5]).replaceWith(valueResult.path, valueResult.state);
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
      closure_4.removeChangeListener(self.handleConnectionChange);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addRouteChangeListener",
    value(arg0) {
      const RouteManager = this;
      if (null != this.unlistenHistory) {
        arg0(RouteManager(arg0[5]).getHistory().location, "REPLACE");
        const obj = RouteManager(arg0[5]);
      }
      const listeners = this.listeners;
      listeners.add(arg0);
      return () => self.removeRouteChangeListener(arg0);
    }
  };
  items[4] = {
    key: "addRouteRewriter",
    value(arg0) {
      const RouteManager = this;
      if (null != this.unlistenHistory) {
        const obj = RouteManager(arg0[5]);
        const tmp3 = arg0(obj.getHistory().location, RouteManager(arg0[5]).getHistory().action);
        if (null != tmp3) {
          RouteManager(arg0[5]).replaceWith(tmp3.path, tmp3.state);
          const obj3 = RouteManager(arg0[5]);
        }
        const obj2 = RouteManager(arg0[5]);
      }
      const rewrites = this.rewrites;
      rewrites.add(arg0);
      return () => self.removeRouteRewriter(arg0);
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
      return RouteManager(closure_1[5]).getHistory();
    }
  };
  return callback(RouteManager, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/routing/RouteManager.tsx");

export default tmp2;
