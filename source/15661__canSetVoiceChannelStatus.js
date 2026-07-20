// Module ID: 15661
// Function ID: 119677
// Name: _canSetVoiceChannelStatus
// Dependencies: [0, 0, 0, 0, 0]
// Exports: canSetVoiceChannelStatus, default

// Module 15661 (_canSetVoiceChannelStatus)
import closure_3 from "result";
import { Permissions } from "result";
import result from "result";

function _canSetVoiceChannelStatus(arg0, closure_3, flag, arg3) {
  closure_3 = arg0;
  const importAll = closure_3;
  const dependencyMap = arg3;
  return flag ? items1 : items.every((permission) => {
    if (null == arg3) {
      let canResult = arg1.can(permission, permission);
    } else {
      let obj = arg1(arg3[2]);
      obj = { permission, user: arg3, context: permission };
      canResult = obj.can(obj);
    }
    return canResult;
  });
}
const items = [, , ];
({ SET_VOICE_CHANNEL_STATUS: arr[0], CONNECT: arr[1], VIEW_CHANNEL: arr[2] } = Permissions);
const items1 = [Permissions.SET_VOICE_CHANNEL_STATUS];
result = result.fileFinishedImporting("modules/calls/useCanSetVoiceChannelStatus.tsx");

export default function useCanSetVoiceChannelStatus(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const importAll = flag;
  const dependencyMap = arg2;
  const items = [closure_3];
  const items1 = [arg0, flag, arg2];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(arg0, closure_3, flag, arg2), items1);
};
export { _canSetVoiceChannelStatus };
export const canSetVoiceChannelStatus = function canSetVoiceChannelStatus(arg0, flag) {
  if (flag === undefined) {
    flag = false;
  }
  return _canSetVoiceChannelStatus(arg0, closure_3, flag, arg2);
};
