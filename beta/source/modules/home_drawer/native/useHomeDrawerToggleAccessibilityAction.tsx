// Module ID: 15932
// Function ID: 15933
// Name: useHomeDrawerToggleAccessibilityAction
// Dependencies: [19, 1115, 4692, 4541, 2]
// Exports: default

// Module 15932 (useHomeDrawerToggleAccessibilityAction)
import intl2 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c3 = "toggle-home-drawer";
const result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerToggleAccessibilityAction.tsx");

export default function useHomeDrawerToggleAccessibilityAction(arg0, arg1) {
  let name;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let tmp = closure_0;
    if (tmp) {
      let stringResult;
      let intl = intl2.intl;
      let string = intl.string;
      let t = intl2.t;
      if (closure_1) {
        stringResult = string(t.h8xFEv);
      } else {
        stringResult = string(t["Rgk/2h"]);
      }
      let obj = {
        name,
        label: stringResult,
        action() {
            let stringResult;
            const obj = closure_0(closure_1[2]);
            obj.setHomeDrawerState(!closure_1_1);
            const intl = closure_0(closure_1[1]).intl;
            const string = intl.string;
            const t = closure_0(closure_1[1]).t;
            const tmp = closure_0;
            const tmp2 = closure_1;
            if (closure_1_1) {
              stringResult = string(t["0s/g+O"]);
            } else {
              stringResult = string(t.hfxfVb);
            }
            const AccessibilityAnnouncer = tmp(tmp2[3]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(stringResult);
          }
      };
      return obj;
    } else {
      let tmp2 = null;
      return null;
    }
  }, items);
};
export const TOGGLE_HOME_DRAWER_A11Y_ACTION = "toggle-home-drawer";
