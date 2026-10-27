// Module ID: 1584
// Function ID: 1585
// Name: react
// Dependencies: [19, 1532]
// Exports: useOnRouteFocus

// Module 1584 (react)
import react2 from "react" /* 1532 */;
import react from "react" /* 19 */;


export const useOnRouteFocus = function useOnRouteFocus(router) {
  router = router.router;
  const getState = router.getState;
  const key = router.key;
  const setState = router.setState;
  const onRouteFocus = react.useContext(react2.NavigationBuilderContext).onRouteFocus;
  const items = [getState, onRouteFocus, router, setState, key];
  return react.useCallback((arg0) => {
    const tmp = getState();
    const stateForRouteFocus = router.getStateForRouteFocus(tmp, arg0);
    if (stateForRouteFocus !== tmp) {
      setState(stateForRouteFocus);
    }
    let tmp6 = undefined !== onRouteFocus;
    const tmp5 = onRouteFocus;
    if (tmp6) {
      tmp6 = undefined !== key;
    }
    if (tmp6) {
      tmp5(key);
    }
  }, items);
};
