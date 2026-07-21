// Module ID: 15344
// Function ID: 116871
// Name: setTransitioningModalCount
// Dependencies: [0, 0, 0]
// Exports: useIsProfileModalTransitioning, useReportProfileModalTransition

// Module 15344 (setTransitioningModalCount)
import __exportStarResult1 from "__exportStarResult1";

function setTransitioningModalCount(arg0) {
  const bound = Math.max(0, arg0);
  if (bound !== closure_3) {
    closure_3 = bound;
    const item = set.forEach((arg0) => arg0());
  }
}
let closure_3 = 0;
const set = new Set();
const result = require("__exportStarResult1").fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export const useReportProfileModalTransition = function useReportProfileModalTransition() {
  const navigation = arg1(dependencyMap[1]).useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const effect = React.useEffect(() => {
    function leave() {
      if (closure_0) {
        closure_0 = false;
        callback(closure_3 - 1);
      }
    }
    const navigation = false;
    const items = [
      navigation.addListener("transitionStart", function enter() {
        if (!closure_0) {
          closure_0 = true;
          callback(closure_3 + 1);
        }
      }),
      navigation.addListener("transitionEnd", leave),
      navigation.addListener("gestureCancel", leave)
    ];
    return () => {
      const item = items.forEach((arg0) => arg0());
      leave();
    };
  }, items);
};
export const useIsProfileModalTransitioning = function useIsProfileModalTransitioning() {
  return React.useSyncExternalStore((arg0) => {
    set.add(arg0);
    return () => set.delete(arg0);
  }, () => closure_3 > 0);
};
