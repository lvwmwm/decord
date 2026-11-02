// Module ID: 18862
// Function ID: 18863
// Name: profileModalTransition
// Dependencies: [19, 1497, 2]
// Exports: useIsProfileModalTransitioning, useReportProfileModalTransition

// Module 18862 (profileModalTransition)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let bound, navigation;

let c3 = 0;
const set = new Set();
const result = size.fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export function useReportProfileModalTransition() {
  const obj = navigation(1497);
  navigation = obj.useNavigation();
  let items = [navigation];
  const effect = react.useEffect(() => {
    const f115946 = (fn) => fn();
    function leave() {
      const tmp = c0;
      if (tmp) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item = closure_2_4.forEach(f115946);
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
            const item = closure_2_4.forEach(f115946);
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
          const item1 = closure_2_4.forEach(f115946);
        }
      }
    };
  }, items);
}
export function useIsProfileModalTransitioning() {
  return react.useSyncExternalStore((arg0) => {
    let closure_0 = arg0;
    set.add(arg0);
    return () => set.delete(closure_0);
  }, () => closure_1_3 > 0);
}
