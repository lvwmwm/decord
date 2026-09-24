// Module ID: 10009
// Function ID: 10010
// Name: usePlayingGameActivities
// Dependencies: [19, 502, 4830, 5530, 558, 568, 504, 10010, 2]

// Module 10009 (usePlayingGameActivities)
import isPlayingGameActivityDefault from "isPlayingGameActivity" /* 10010 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4830 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5530 */;

const require = globalThis.__r;

const require = fn;
let closure_7 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/hooks/usePlayingGameActivities.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(7);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined === arg2 || arg2)) {
    if (cResult[2] === arg1) {
      if (cResult[3] === arg0) {
        let tmp9 = cResult[4];
      }
      const stateFromStores = require("initialize").useStateFromStores(first, tmp9);
      if (cResult[5] !== stateFromStores) {
        const found = stateFromStores.filter(isPlayingGameActivityDefault);
        cResult[5] = stateFromStores;
        cResult[6] = found;
        let tmp10 = found;
      } else {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const fn = function f() {
    if (closure_2) {
      if (AuthenticationStore.getId() === closure_0) {
        let activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(tmp2, closure_1);
      }
    } else {
      return closure_7;
    }
  };
  cResult[1] = undefined === arg2 || arg2;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  tmp9 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const items = [SelfPresenceStore, PresenceStore, AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (flag) {
      if (AuthenticationStore.getId() === closure_0) {
        let activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(tmp2, closure_1);
      }
    } else {
      return closure_7;
    }
  });
  const items1 = [stateFromStores];
  return stateFromStores.useMemo(() => stateFromStores.filter(isPlayingGameActivityDefault), items1);
});
