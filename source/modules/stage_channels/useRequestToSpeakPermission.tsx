// Module ID: 12518
// Function ID: 12519
// Name: useRequestToSpeakPermission
// Dependencies: [32, 19, 1391, 676, 589, 4026, 8062, 2]
// Exports: useRequestToSpeakPermission

// Module 12518 (useRequestToSpeakPermission)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { Permissions } from "ME";

const require = arg1;
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  let tmp4;
  let tmp5;
  const _require = id;
  const items = [ensureGuildLoaded];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_5.getChannel(closure_0), items1);
  let obj = _require(589);
  const canEveryoneRoleResult = stateFromStores(4026).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const obj2 = stateFromStores(4026);
  [tmp4, tmp5] = callback(React.useState(canEveryoneRoleResult), 2);
  const dependencyMap = tmp5;
  if (canEveryoneRoleResult !== tmp4) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    tmp4,
    (arg0) => {
      if (null != stateFromStores) {
        tmp5(arg0);
        const result = id(id[6]).setEveryoneRolePermissionAllowed(tmp, outer1_6.REQUEST_TO_SPEAK, arg0);
        const obj = id(id[6]);
      }
    }
  ];
  return items2;
};
