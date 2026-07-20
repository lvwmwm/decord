// Module ID: 5400
// Function ID: 46008
// Name: getWindowDispatchForElement
// Dependencies: []
// Exports: AppWindowContextProvider, getAppWindowContextValue, getCurrentlyInteractingAppContext, getWindowDispatchForEvent, useAppContext, useWindowDispatch

// Module 5400 (getWindowDispatchForElement)
function getWindowDispatchForElement(target) {
  const defaultView = target.ownerDocument.defaultView;
  if (null != defaultView) {
    let windowDispatch;
    const value = map.get(arg1(dependencyMap[5]).getWindowId(defaultView));
    if (null != value) {
      windowDispatch = value.windowDispatch;
    }
    return windowDispatch;
  }
}
function getCurrentlyInteractingAppWindowContext() {
  const currentlyInteractingWindowId = arg1(dependencyMap[7]).getCurrentlyInteractingWindowId();
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
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[3]).jsx;
const componentDispatcher = new arg1(dependencyMap[4]).ComponentDispatcher();
const obj = { appContext: arg1(dependencyMap[2]).AppContext.APP, renderWindow: window, windowDispatch: componentDispatcher, windowId: arg1(dependencyMap[5]).getMainWindowId() };
const context = importAllResult.createContext(obj);
const map = new Map();
const obj3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/main_app_window/web/AppWindowContext.tsx");

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
  return <context.Provider value={function useWindowContextValue(appContext, renderWindow) {
    const tmp = first(React.useState(appContext(renderWindow[5]).getWindowId(renderWindow)), 2);
    const first = tmp[0];
    const React = tmp[1];
    const memo = React.useMemo(() => {
      const componentDispatcher = new arg0(arg1[4]).ComponentDispatcher();
      return componentDispatcher;
    }, []);
    const items = [appContext, renderWindow, memo, first];
    const memo1 = React.useMemo(() => ({ appContext: arg0, renderWindow: arg1, windowDispatch: memo, windowId: first }), items);
    const items1 = [renderWindow, first];
    const effect = React.useEffect(() => {
      if (null == first) {
        const _setInterval = setInterval;
        const interval = setInterval(() => {
          const windowId = callback(closure_1[5]).getWindowId(closure_1);
          if (null != windowId) {
            callback2(windowId);
            const _clearInterval = clearInterval;
            clearInterval(callback);
          }
        }, 10);
        return () => clearInterval(closure_0);
      }
    }, items1);
    const items2 = [memo1, renderWindow, first];
    const effect1 = React.useEffect(() => {
      function handleUnload() {
        set.delete(closure_2);
      }
      const arg0 = handleUnload;
      const result = closure_6.set(first, memo1);
      const listener = arg1.addEventListener("unload", handleUnload);
      return () => closure_1.removeEventListener("unload", handleUnload);
    }, items2);
    return memo1;
  }(arg0.appContext, arg0.renderWindow)}>{arg0.children}</context.Provider>;
};
export const useAppContext = function useAppContext() {
  return importAllResult.useContext(context).appContext;
};
export const useWindowDispatch = function useWindowDispatch() {
  return importAllResult.useContext(context).windowDispatch;
};
