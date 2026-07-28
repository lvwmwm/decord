// Module ID: 15905
// Function ID: 122650
// Name: _canSetVoiceChannelStatus
// Dependencies: [3793, 482, 3798, 566, 2]
// Exports: canSetVoiceChannelStatus, default

// Module 15905 (_canSetVoiceChannelStatus)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
function _canSetVoiceChannelStatus(arg0, _isNativeReflectConstruct, flag, arg3) {
  let closure_0 = arg0;
  let closure_1 = _isNativeReflectConstruct;
  let closure_2 = arg3;
  return flag ? items1 : items.every((permission) => {
    if (null == table) {
      let canResult = lib.can(permission, closure_0);
    } else {
      let obj = lib(table[2]);
      obj = { permission, user: table, context: closure_0 };
      canResult = obj.can(obj);
    }
    return canResult;
  });
}
let items = [, , ];
({ SET_VOICE_CHANNEL_STATUS: arr[0], CONNECT: arr[1], VIEW_CHANNEL: arr[2] } = Permissions);
let items1 = [Permissions.SET_VOICE_CHANNEL_STATUS];
const result = require("calculateElevatedPermissions").fileFinishedImporting("modules/calls/useCanSetVoiceChannelStatus.tsx");

export default function useCanSetVoiceChannelStatus(arg0) {
  let flag = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = arg2;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0, flag, arg2];
  return _require(566).useStateFromStores(items, () => outer1_6(closure_0, outer1_3, flag, closure_2), items1);
};
export { _canSetVoiceChannelStatus };
export const canSetVoiceChannelStatus = function canSetVoiceChannelStatus(arg0, flag) {
  if (flag === undefined) {
    flag = false;
  }
  return _canSetVoiceChannelStatus(arg0, _isNativeReflectConstruct, flag, arg2);
};
