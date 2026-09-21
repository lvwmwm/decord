// Module ID: 16635
// Function ID: 16636
// Name: useHomeDrawerToggleAccessibilityAction
// Dependencies: [19, 1115, 4613, 4467, 2]
// Exports: default

// Module 16635 (useHomeDrawerToggleAccessibilityAction)
import util from "util" /* 1115 */;
import noop from "module_19" /* 19 */;

require = fn;
let c3 = "toggle-home-drawer";
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx");

export default function useHomeDrawerToggleAccessibilityAction(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => {
    if (closure_0) {
      let intl = util.intl;
      let string = intl.string;
      let t = util.t;
      if (dependencyMap) {
        let stringResult = string(t.h8xFEv);
      } else {
        stringResult = string(t["Rgk/2h"]);
      }
      const obj = {
        name,
        label: stringResult,
        action() {
            closure_0(4613).setHomeDrawerState(!dependencyMap);
            const intl = closure_0(1115).intl;
            const string = intl.string;
            const t = closure_0(1115).t;
            if (dependencyMap) {
              let stringResult = string(t["0s/g+O"]);
            } else {
              stringResult = string(t.hfxfVb);
            }
            const AccessibilityAnnouncer = closure_0(4467).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(stringResult);
          }
      };
      return obj;
    } else {
      return null;
    }
  }, items);
};
export const TOGGLE_HOME_DRAWER_A11Y_ACTION = "toggle-home-drawer";
