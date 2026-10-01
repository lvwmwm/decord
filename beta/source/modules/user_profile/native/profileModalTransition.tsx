// Module ID: 16603
// Function ID: 16604
// Name: profileModalTransition
// Dependencies: [19, 1485, 2]
// Exports: useIsProfileModalTransitioning, useReportProfileModalTransition

// Module 16603 (profileModalTransition)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let bound, navigation;

let c3 = 0;
const set = new Set();
const result = size.fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export const useReportProfileModalTransition = function useReportProfileModalTransition() {
  const obj = navigation(1485);
  navigation = obj.useNavigation();
  let items = [navigation];
  const effect = react.useEffect(() => {
    const f105491 = (fn) => fn();
    function leave() {
      const tmp = c0;
      if (tmp) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item = closure_2_4.forEach(f105491);
        }
      }
    }
    let c0 = false;
    const items = [
      navigation.addListener("transitionStart", function enter() {
        const tmp = c0;
        if (!tmp) {
          c0 = true;
          const _Math = Math;
          bound = Math.max(0, bound + 1);
          if (bound !== bound) {
            const item = closure_2_4.forEach(f105491);
          }
        }
      }),
      navigation.addListener("transitionEnd", leave),
      navigation.addListener("gestureCancel", leave)
    ];
    return () => {
      const item = items.forEach((fn) => fn());
      const tmp2 = c0;
      if (tmp2) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item1 = closure_2_4.forEach(f105491);
        }
      }
    };
  }, items);
};
export const useIsProfileModalTransitioning = function useIsProfileModalTransitioning() {
  return react.useSyncExternalStore((arg0) => {
    let closure_0 = arg0;
    set.add(arg0);
    return () => set.delete(closure_0);
  }, () => closure_1_3 > 0);
};
