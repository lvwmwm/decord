// Module ID: 12268
// Function ID: 12269
// Name: useNavigationTransitionEnded
// Dependencies: [32, 19, 1487, 558, 568, 1489, 2]

// Module 12268 (useNavigationTransitionEnded)
import c from "c" /* 568 */;
import Link from "Link" /* 1489 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const useAppLauncherNavigation = fn(1487).useAppLauncherNavigation;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp3;
  const tmp4 = useAppLauncherNavigation();
  closure_1 = tmp4;
  const obj2 = noop;
  const route = Link.useRoute();
  if (cResult[0] === tmp4) {
    if (cResult[1] === route) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = obj2.useEffect(tmp6, tmp7);
    return tmp2[0];
  }
  const fn = function s() {
    return state.addListener("transitionEnd", () => {
      state = state.getState();
      if (state.routes[state.index].key === key.key) {
        closure_1_0(true);
      }
    });
  };
  const items = [tmp4, route, tmp2[1]];
  cResult[0] = tmp4;
  cResult[1] = route;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
}) : (() => {
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp2;
  const tmp3 = useAppLauncherNavigation();
  closure_1 = tmp3;
  const route = Link.useRoute();
  const items = [tmp3, route, tmp[1]];
  const effect = noop.useEffect(() => state.addListener("transitionEnd", () => {
    state = state.getState();
    if (state.routes[state.index].key === key.key) {
      closure_1_0(true);
    }
  }), items);
  return tmp[0];
});
