// Module ID: 5866
// Function ID: 5867
// Name: AppWindowContext
// Dependencies: [32, 19, 1074, 21, 1110, 5867, 2014, 5868, 2]
// Exports: AppWindowContextProvider, getAppWindowContextValue, getCurrentlyInteractingAppContext, getCurrentlyInteractingAppWindowContext, getWindowDispatchForElement, getWindowDispatchForEvent, useAppContext, useRenderWindow, useWindowDispatch

// Module 5866 (AppWindowContext)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import DOMUtils from "DOMUtils" /* 2014 */;
import WindowInteractingUtils from "WindowInteractingUtils" /* 5868 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import WindowIdUtils_mod from "WindowIdUtils" /* 5867 */;
import size from "module_2" /* 2 */;

let WindowIdUtils;
let react = react_mod;
const AppContext = Constants.AppContext;
const jsx = Fragment.jsx;
let componentDispatcher = new ComponentDispatchUtils.ComponentDispatcher();
let obj = { appContext: AppContext.APP, renderWindow: window, windowDispatch: componentDispatcher, windowId: WindowIdUtils.getMainWindowId() };
const createContext = react.createContext;
WindowIdUtils = WindowIdUtils_mod;
let context = createContext(obj);
const map = new Map();
let result = size.fileFinishedImporting("modules/main_app_window/web/AppWindowContext.tsx");

export default context;
export const MainWindowDispatch = componentDispatcher;
export const getWindowDispatchForElement = function getWindowDispatchForElement(ownerDocument) {
  const defaultView = ownerDocument.ownerDocument.defaultView;
  if (null != defaultView) {
    const obj = WindowIdUtils;
    const value = map.get(obj.getWindowId(defaultView));
    let windowDispatch;
    if (value != null) {
      windowDispatch = value.windowDispatch;
    }
    return windowDispatch;
  }
};
export const getWindowDispatchForEvent = function getWindowDispatchForEvent(target) {
  target = undefined;
  const isElement = DOMUtils.isElement;
  DOMUtils;
  if (target != null) {
    target = target.target;
  }
  let tmp5 = null;
  if (isElement(target)) {
    const defaultView = target.target.ownerDocument.defaultView;
    let tmp6;
    if (null != defaultView) {
      const tmpResult = WindowIdUtils;
      const value = map.get(tmpResult.getWindowId(defaultView));
      let windowDispatch;
      if (value != null) {
        windowDispatch = value.windowDispatch;
      }
      tmp6 = windowDispatch;
    }
    if (tmp6 == null) {
      tmp6 = null;
    }
    tmp5 = tmp6;
  }
  return tmp5;
};
export const getCurrentlyInteractingAppWindowContext = function getCurrentlyInteractingAppWindowContext() {
  const obj = WindowInteractingUtils;
  const currentlyInteractingWindowId = obj.getCurrentlyInteractingWindowId();
  let tmp2 = null;
  if (null != currentlyInteractingWindowId) {
    let value = map.get(currentlyInteractingWindowId);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  return tmp2;
};
export const getAppWindowContextValue = function getAppWindowContextValue(arg0) {
  return map.get(arg0);
};
export const getCurrentlyInteractingAppContext = function getCurrentlyInteractingAppContext() {
  const obj = WindowInteractingUtils;
  const currentlyInteractingWindowId = obj.getCurrentlyInteractingWindowId();
  let tmp2 = null;
  if (null != currentlyInteractingWindowId) {
    let value = map.get(currentlyInteractingWindowId);
    if (value == null) {
      value = null;
    }
    tmp2 = value;
  }
  let appContext = null;
  if (null != tmp2) {
    appContext = tmp2.appContext;
  }
  return appContext;
};
export const AppWindowContextProvider = function AppWindowContextProvider(children) {
  let appContext;
  let c5;
  let closure_3;
  let renderWindow;
  ({ appContext, renderWindow } = children);
  let windowId;
  react = undefined;
  children = children.children;
  const useState = react.useState;
  let obj = appContext(renderWindow[5]);
  const tmp = windowId(useState(obj.getWindowId(renderWindow)), 2);
  windowId = tmp[0];
  react = tmp[1];
  const memo = react.useMemo(() => {
    const componentDispatcher = new appContext(renderWindow[4]).ComponentDispatcher();
    return componentDispatcher;
  }, []);
  const items = [appContext, renderWindow, memo, windowId];
  const value = react.useMemo(() => ({ appContext, renderWindow, windowDispatch: memo, windowId }), items);
  context = value;
  const items1 = [renderWindow, windowId];
  const effect = react.useEffect(() => {
    let closure_0;
    if (null == first) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        const obj = WindowIdUtils;
        windowId = obj.getWindowId(renderWindow);
        if (null != windowId) {
          closure_3(windowId);
          const _clearInterval = clearInterval;
          clearInterval(closure_0);
        }
      }, 10);
      return () => clearInterval(closure_0);
    }
  }, items1);
  const items2 = [value, renderWindow, windowId];
  const effect1 = react.useEffect(() => {
    function handleUnload() {
      map.delete(windowId);
    }
    const result = map.set(first, c5);
    const listener = renderWindow.addEventListener("unload", handleUnload);
    return () => renderWindow.removeEventListener("unload", handleUnload);
  }, items2);
  return memo(context.Provider, { value, children });
};
export const useAppContext = function useAppContext() {
  return react.useContext(context).appContext;
};
export const useWindowDispatch = function useWindowDispatch() {
  return react.useContext(context).windowDispatch;
};
export const useRenderWindow = function useRenderWindow() {
  return react.useContext(context).renderWindow;
};
