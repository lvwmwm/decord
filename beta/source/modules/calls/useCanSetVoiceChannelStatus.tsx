// Module ID: 16939
// Function ID: 16940
// Name: useCanSetVoiceChannelStatus
// Dependencies: [4469, 1085, 4474, 504, 2]
// Exports: _canSetVoiceChannelStatus, canSetVoiceChannelStatus, default

// Module 16939 (useCanSetVoiceChannelStatus)
import Constants from "Constants" /* 1085 */;
import PermissionStore_mod from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let PermissionStore = PermissionStore_mod;
const Permissions = Constants.Permissions;
let items = [, , ];
({ SET_VOICE_CHANNEL_STATUS: arr[0], CONNECT: arr[1], VIEW_CHANNEL: arr[2] } = Permissions);
let items1 = [Permissions.SET_VOICE_CHANNEL_STATUS];
const result = size.fileFinishedImporting("modules/calls/useCanSetVoiceChannelStatus.tsx");

export default function useCanSetVoiceChannelStatus(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  dependencyMap = arg2;
  let obj = require("get initialized");
  items = [PermissionStore];
  items1 = [arg0, flag, arg2];
  return obj.useStateFromStores(items, () => {
    let obj = flag ? items1 : items;
    return obj.every((permission) => {
      let canResult;
      if (null == closure_2) {
        canResult = closure_1.can(permission, context);
      } else {
        const obj2 = { permission, user: tmp, context };
        const obj = PermissionStore(closure_2_2[2]);
        canResult = obj.can(obj2);
      }
      return canResult;
    });
  }, items1);
};
export const _canSetVoiceChannelStatus = function _canSetVoiceChannelStatus(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg3;
  const obj = arg2 ? items1 : items;
  return obj.every((permission) => {
    let canResult;
    if (null == closure_2) {
      canResult = closure_1.can(permission, context);
    } else {
      const obj2 = { permission, user: tmp, context };
      const obj = PermissionStore(closure_2_2[2]);
      canResult = obj.can(obj2);
    }
    return canResult;
  });
};
export const canSetVoiceChannelStatus = function canSetVoiceChannelStatus(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let closure_0 = arg0;
  let closure_1 = PermissionStore;
  let closure_2 = arg2;
  const obj = flag ? items1 : items;
  return obj.every((permission) => {
    let canResult;
    if (null == closure_2) {
      canResult = closure_1.can(permission, context);
    } else {
      const obj2 = { permission, user: tmp, context };
      const obj = PermissionStore(closure_2_2[2]);
      canResult = obj.can(obj2);
    }
    return canResult;
  });
};
