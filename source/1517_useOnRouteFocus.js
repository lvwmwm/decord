// Module ID: 1517
// Function ID: 17417
// Name: useOnRouteFocus
// Dependencies: []
// Exports: default

// Module 1517 (useOnRouteFocus)
let closure_2 = importAll(dependencyMap[0]);

export default function useOnRouteFocus(router) {
  router = router.router;
  const importDefault = router;
  const getState = router.getState;
  const dependencyMap = getState;
  const React = key;
  const setState = router.setState;
  const onRouteFocus = React.useContext(importDefault(dependencyMap[1])).onRouteFocus;
  const items = [getState, onRouteFocus, router, setState, router.key];
  return React.useCallback((arg0) => {
    const tmp = getState();
    const stateForRouteFocus = router.getStateForRouteFocus(tmp, arg0);
    if (stateForRouteFocus !== tmp) {
      setState(stateForRouteFocus);
    }
    let tmp5 = undefined !== onRouteFocus;
    if (tmp5) {
      tmp5 = undefined !== key;
    }
    if (tmp5) {
      onRouteFocus(key);
    }
  }, items);
};
