// Module ID: 15679
// Function ID: 119783
// Name: _canSetVoiceChannelStatus
// Dependencies: [0, 0, 0, 0, 0]
// Exports: canSetVoiceChannelStatus, default

// Module 15679 (_canSetVoiceChannelStatus)
import __exportStarResult1 from "__exportStarResult1";
import { Permissions } from "__exportStarResult1";

function _canSetVoiceChannelStatus(arg0, __exportStarResult1, flag, arg3) {
  __exportStarResult1 = arg0;
  const importAll = __exportStarResult1;
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
const result = require("__exportStarResult1").fileFinishedImporting("modules/calls/useCanSetVoiceChannelStatus.tsx");

export default function useCanSetVoiceChannelStatus(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const importAll = flag;
  const dependencyMap = arg2;
  const items = [__exportStarResult1];
  const items1 = [arg0, flag, arg2];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(arg0, __exportStarResult1, flag, arg2), items1);
};
export { _canSetVoiceChannelStatus };
export const canSetVoiceChannelStatus = function canSetVoiceChannelStatus(arg0, flag) {
  if (flag === undefined) {
    flag = false;
  }
  return _canSetVoiceChannelStatus(arg0, __exportStarResult1, flag, arg2);
};
