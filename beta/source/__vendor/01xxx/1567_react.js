// Module ID: 1567
// Function ID: 1568
// Name: react
// Dependencies: [19, 1515]
// Exports: useOnRouteFocus

// Module 1567 (react)
import react2 from "react" /* 1515 */;
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
