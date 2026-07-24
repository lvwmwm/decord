// Module ID: 11277
// Function ID: 87776
// Name: useNavigationTransitionEnded
// Dependencies: [57, 31, 1455, 1457, 2]
// Exports: default

// Module 11277 (useNavigationTransitionEnded)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useAppLauncherNavigation } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";

let require = arg1;
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default function useNavigationTransitionEnded() {
  const tmp = route(React.useState(false), 2);
  const require = tmp2;
  const tmp3 = useAppLauncherNavigation();
  const dependencyMap = tmp3;
  route = require(1457) /* Link */.useRoute();
  const items = [tmp3, route, tmp[1]];
  const effect = React.useEffect(() => tmp3.addListener("transitionEnd", () => {
    const state = outer1_1.getState();
    if (state.routes[state.index].key === outer1_2.key) {
      outer1_0(true);
    }
  }), items);
  return tmp[0];
};
