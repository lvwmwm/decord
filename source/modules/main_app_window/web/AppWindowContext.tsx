// Module ID: 5134
// Function ID: 44501
// Name: getWindowDispatchForElement
// Dependencies: [57, 31, 653, 33, 1207, 5135, 1835, 5136, 2]
// Exports: AppWindowContextProvider, getAppWindowContextValue, getCurrentlyInteractingAppContext, getWindowDispatchForEvent, useAppContext, useRenderWindow, useWindowDispatch

// Module 5134 (getWindowDispatchForElement)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { jsx } from "jsxProd";
import getWindowId from "getWindowId";

const require = arg1;
function getWindowDispatchForElement(target) {
  const defaultView = target.ownerDocument.defaultView;
  if (null != defaultView) {
    let windowDispatch;
    const value = map.get(require(5135) /* getWindowId */.getWindowId(defaultView));
    if (null != value) {
      windowDispatch = value.windowDispatch;
    }
    return windowDispatch;
  }
}
function getCurrentlyInteractingAppWindowContext() {
  const currentlyInteractingWindowId = require(5136) /* INTERACTION_EVENTS */.getCurrentlyInteractingWindowId();
  let tmp2 = null;
  if (null != currentlyInteractingWindowId) {
    const value = map.get(currentlyInteractingWindowId);
    let tmp5 = null;
    if (null != value) {
      tmp5 = value;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
let componentDispatcher = new require("reportDevtoolsEvent").ComponentDispatcher();
const obj = { appContext: require("ME").AppContext.APP, renderWindow: window, windowDispatch: componentDispatcher };
obj.windowId = getWindowId.getMainWindowId();
const context = importAllResult.createContext(obj);
const map = new Map();
let result = require("ME").fileFinishedImporting("modules/main_app_window/web/AppWindowContext.tsx");

export default context;
export const MainWindowDispatch = componentDispatcher;
export { getWindowDispatchForElement };
export const getWindowDispatchForEvent = function getWindowDispatchForEvent(target) {
  target = undefined;
  if (null != target) {
    target = target.target;
  }
  let tmp2 = null;
  if (obj.isElement(target)) {
    const tmp4 = getWindowDispatchForElement(target.target);
    tmp2 = null;
    if (null != tmp4) {
      tmp2 = tmp4;
    }
  }
  return tmp2;
};
export { getCurrentlyInteractingAppWindowContext };
export const getAppWindowContextValue = function getAppWindowContextValue(arg0) {
  return map.get(arg0);
};
export const getCurrentlyInteractingAppContext = function getCurrentlyInteractingAppContext() {
  const tmp = getCurrentlyInteractingAppWindowContext();
  let appContext = null;
  if (null != tmp) {
    appContext = tmp.appContext;
  }
  return appContext;
};
export const AppWindowContextProvider = function AppWindowContextProvider(appContext) {
  return <context.Provider value={(function useWindowContextValue(appContext, renderWindow) {
    let closure_0 = appContext;
    let closure_1 = renderWindow;
    const tmp = outer1_2(outer1_3.useState(outer1_0(outer1_1[5]).getWindowId(renderWindow)), 2);
    const first = tmp[0];
    let closure_3 = tmp[1];
    const memo = outer1_3.useMemo(() => {
      const componentDispatcher = new outer2_0(outer2_1[4]).ComponentDispatcher();
      return componentDispatcher;
    }, []);
    const items = [appContext, renderWindow, memo, first];
    const memo1 = outer1_3.useMemo(() => ({ appContext: closure_0, renderWindow: closure_1, windowDispatch: memo, windowId: first }), items);
    const items1 = [renderWindow, first];
    const effect = outer1_3.useEffect(() => {
      if (null == first) {
        const _setInterval = setInterval;
        const interval = setInterval(() => {
          const windowId = outer3_0(outer3_1[5]).getWindowId(outer1_1);
          if (null != windowId) {
            outer1_3(windowId);
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        }, 10);
        return () => clearInterval(closure_0);
      }
    }, items1);
    const items2 = [memo1, renderWindow, first];
    const effect1 = outer1_3.useEffect(() => {
      function handleUnload() {
        outer3_6.delete(outer1_2);
      }
      const result = outer2_6.set(first, memo1);
      const listener = closure_1.addEventListener("unload", handleUnload);
      return () => outer1_1.removeEventListener("unload", handleUnload);
    }, items2);
    return memo1;
  })(arg0.appContext, arg0.renderWindow)}>{arg0.children}</context.Provider>;
};
export const useAppContext = function useAppContext() {
  return importAllResult.useContext(context).appContext;
};
export const useWindowDispatch = function useWindowDispatch() {
  return importAllResult.useContext(context).windowDispatch;
};
export const useRenderWindow = function useRenderWindow() {
  return importAllResult.useContext(context).renderWindow;
};
