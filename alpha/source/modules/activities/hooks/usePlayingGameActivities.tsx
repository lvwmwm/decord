// Module ID: 9291
// Function ID: 9292
// Name: usePlayingGameActivities
// Dependencies: [19, 502, 5761, 6570, 504, 9292, 2]
// Exports: default

// Module 9291 (usePlayingGameActivities)
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 9292 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_7 = [];
const result = size.fileFinishedImporting("modules/activities/hooks/usePlayingGameActivities.tsx");

export default function usePlayingGameActivities(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2;
    const tmp = flag;
    if (tmp) {
      let activities;
      if (AuthenticationStore.getId() === closure_0) {
        activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(tmp4, closure_1);
      }
      tmp2 = activities;
    } else {
      tmp2 = closure_7;
    }
    return tmp2;
  });
  const items1 = [stateFromStores];
  return stateFromStores.useMemo(() => stateFromStores.filter(isPlayingGameActivityDefault), items1);
};
