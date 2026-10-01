// Module ID: 9373
// Function ID: 9374
// Name: useRequestToSpeakPermission
// Dependencies: [32, 19, 2045, 1074, 504, 4474, 7846, 2]
// Exports: useRequestToSpeakPermission

// Module 9373 (useRequestToSpeakPermission)
import Constants from "Constants" /* 1074 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7846 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const Permissions = Constants.Permissions;
let result = size.fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  let closure_2;
  let tmp4;
  let tmp5;
  _require = id;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(id), items1);
  const obj2 = stateFromStores(4474);
  const canEveryoneRoleResult = obj2.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  [tmp4, tmp5] = _slicedToArray(react.useState(canEveryoneRoleResult), 2);
  dependencyMap = tmp5;
  const tmp3 = _slicedToArray(react.useState(canEveryoneRoleResult), 2);
  if (canEveryoneRoleResult !== tmp4) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    tmp4,
    (arg0) => {
      if (null != stateFromStores) {
        tmp5(arg0);
        const obj = StageChannelActionCreators;
        const result = obj.setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
      }
    }
  ];
  return items2;
};
