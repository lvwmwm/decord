// Module ID: 15519
// Function ID: 119449
// Name: setTransitioningModalCount
// Dependencies: [31, 1456, 2]
// Exports: useIsProfileModalTransitioning, useReportProfileModalTransition

// Module 15519 (setTransitioningModalCount)
import result from "result";
import set from "set";

const require = arg1;
function setTransitioningModalCount(arg0) {
  const bound = Math.max(0, arg0);
  if (bound !== bound) {
    const item = set.forEach((arg0) => arg0());
  }
}
let c3 = 0;
let set = new Set();
const result = set.fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export const useReportProfileModalTransition = function useReportProfileModalTransition() {
  navigation = navigation(1456).useNavigation();
  let items = [navigation];
  const effect = React.useEffect(() => {
    function leave() {
      if (c0) {
        c0 = false;
        outer2_5(outer2_3 - 1);
      }
    }
    const navigation = false;
    const items = [
      navigation.addListener("transitionStart", function enter() {
        if (!c0) {
          c0 = true;
          outer2_5(outer2_3 + 1);
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
    let closure_0 = arg0;
    outer1_4.add(arg0);
    return () => outer2_4.delete(closure_0);
  }, () => outer1_3 > 0);
};
