// Module ID: 11610
// Function ID: 11611
// Name: useNavigationTransitionEnded
// Dependencies: [32, 19, 1484, 1486, 2]
// Exports: default

// Module 11610 (useNavigationTransitionEnded)
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import Link from "Link" /* 1486 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default function useNavigationTransitionEnded() {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(false);
  let closure_0 = tmp3;
  const tmp4 = useAppLauncherNavigation();
  let closure_1 = tmp4;
  const obj = Link;
  const route = obj.useRoute();
  const items = [tmp4, route, tmp3];
  const effect = react.useEffect(() => {
    let key;
    let state;
    return state.addListener("transitionEnd", () => {
      state = state.getState();
      if (state.routes[state.index].key === key.key) {
        closure_1_0(true);
      }
    });
  }, items);
  return first;
};
