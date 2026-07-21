// Module ID: 1515
// Function ID: 17410
// Name: useOnAction
// Dependencies: []
// Exports: default

// Module 1515 (useOnAction)
let closure_3 = importAll(dependencyMap[0]);

export default function useOnAction(router) {
  router = router.router;
  const arg1 = router;
  const getState = router.getState;
  const importDefault = getState;
  const setState = router.setState;
  const dependencyMap = setState;
  const React = key;
  const actionListeners = router.actionListeners;
  const beforeRemoveListeners = router.beforeRemoveListeners;
  const routerConfigOptions = router.routerConfigOptions;
  const emitter = router.emitter;
  const context = React.useContext(importDefault(dependencyMap[1]));
  const onAction = context.onAction;
  const onRouteFocus = context.onRouteFocus;
  const addListener = context.addListener;
  const onDispatchAction = context.onDispatchAction;
  let closure_12 = React.useRef(routerConfigOptions);
  const effect = React.useEffect(() => {
    closure_12.current = routerConfigOptions;
  });
  const items = [actionListeners, beforeRemoveListeners, emitter, getState, router.key, onAction, onDispatchAction, onRouteFocus, router, setState];
  const callback = React.useCallback((target) => {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let set = arguments[1];
      }
      const tmp2 = getState();
      if (set.has(tmp2.key)) {
        return false;
      } else {
        set.add(tmp2.key);
        if ("string" !== typeof target.target) {
          const stateForAction = router.getStateForAction(tmp2, target, ref.current);
          let tmp9 = stateForAction;
          if (null === stateForAction) {
            tmp9 = stateForAction;
            if (target.target === tmp2.key) {
              tmp9 = tmp2;
            }
          }
          if (null !== tmp9) {
            onDispatchAction(target, tmp2 === tmp9);
            if (tmp2 !== tmp9) {
              const obj2 = router(setState[2]);
              if (obj2.shouldPreventRemove(emitter, beforeRemoveListeners, tmp2.routes, tmp9.routes, target)) {
                return true;
              } else {
                setState(tmp9);
              }
            }
            if (undefined !== onRouteFocus) {
              let result = router.shouldActionChangeFocus(target);
              if (result) {
                result = undefined !== key;
              }
              if (result) {
                onRouteFocus(key);
              }
            }
            return true;
          }
        }
        if (undefined !== onAction) {
          if (onAction(target, set)) {
            return true;
          }
        }
        let diff = actionListeners.length - 1;
        if (diff >= 0) {
          while (!actionListeners[diff](target, set)) {
            diff = diff - 1;
          }
          return true;
        }
        return false;
      }
    }
    set = new Set();
  }, items);
  importDefault(dependencyMap[2])({ getState, emitter, beforeRemoveListeners });
  const items1 = [addListener, callback];
  const effect1 = React.useEffect(() => {
    let tmp;
    if (null != addListener) {
      tmp = addListener("action", callback);
    }
    return tmp;
  }, items1);
  return callback;
};
