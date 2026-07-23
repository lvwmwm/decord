// Module ID: 10658
// Function ID: 83191
// Name: useRequestToSpeakPermission
// Dependencies: [57, 31, 1348, 653, 566, 3763, 7482, 2]
// Exports: useRequestToSpeakPermission

// Module 10658 (useRequestToSpeakPermission)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getChannel(closure_0), items1);
  let obj = _require(566);
  const canEveryoneRoleResult = stateFromStores(3763).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const tmp3 = callback(React.useState(canEveryoneRoleResult), 2);
  const first = tmp3[0];
  const dependencyMap = tmp5;
  if (canEveryoneRoleResult !== first) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    first,
    (arg0) => {
      if (null != stateFromStores) {
        tmp5(arg0);
        const result = id(tmp5[6]).setEveryoneRolePermissionAllowed(stateFromStores, outer1_6.REQUEST_TO_SPEAK, arg0);
        const obj = id(tmp5[6]);
      }
    }
  ];
  return items2;
};
