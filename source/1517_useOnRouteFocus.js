// Module ID: 1517
// Function ID: 17424
// Name: useOnRouteFocus
// Dependencies: [31, 1478]
// Exports: default

// Module 1517 (useOnRouteFocus)
import result from "result";


export default function useOnRouteFocus(router) {
  router = router.router;
  const getState = router.getState;
  const key = router.key;
  const setState = router.setState;
  const onRouteFocus = key.useContext(router(getState[1])).onRouteFocus;
  const items = [getState, onRouteFocus, router, setState, key];
  return key.useCallback((arg0) => {
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
