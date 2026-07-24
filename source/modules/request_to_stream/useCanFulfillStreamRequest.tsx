// Module ID: 10945
// Function ID: 85009
// Name: canFulfillStreamRequest
// Dependencies: [4150, 4149, 1194, 1348, 1838, 3758, 4217, 4202, 653, 10714, 477, 566, 2]
// Exports: default

// Module 10945 (canFulfillStreamRequest)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
const require = arg1;
function canFulfillStreamRequest(channel_id, arg1) {
  let flag = arg1;
  let obj = arg2;
  let obj2 = arg3;
  let obj3 = arg4;
  let obj4 = arg6;
  if (arg1 === undefined) {
    flag = false;
  }
  if (obj === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = closure_5;
  }
  if (obj3 === undefined) {
    obj3 = closure_8;
  }
  if (obj4 === undefined) {
    obj4 = closure_9;
  }
  let id;
  let DESKTOP;
  const channel = obj2.getChannel(channel_id.channel_id);
  if (null == channel) {
    const items = [false, obj.NOT_IN_VOICE_CHANNEL];
    return items;
  } else {
    const channelId = obj4.getChannelId();
    const tmp18 = null != obj.getCurrentUserActiveStream();
    const application = channel_id.application;
    id = undefined;
    const videoPermission = flag(id[9]).getVideoPermission(channel);
    if (null != application) {
      id = application.id;
    }
    DESKTOP = constants.DESKTOP;
    const obj6 = flag(id[9]);
    DESKTOP = flag(id[10]).isAndroid() ? tmp6.ANDROID : tmp6.IOS;
    if (null == id) {
      const items1 = [false, obj.NOT_RUNNING_GAME];
      return items1;
    } else {
      const activities = obj3.getActivities(id.getId(), channel.guild_id);
      if (tmp18) {
        const items2 = [false, obj.ALREADY_STREAMING];
        let items4 = items2;
      } else if (channelId === channel_id.channel_id) {
        const items3 = [, ];
        if (!videoPermission) {
          items3[0] = false;
          items3[1] = obj.NO_PERMISSION;
        }
        if (tmp24) {
          items3[0] = true;
          items3[1] = null;
          let tmp11 = items3;
        } else {
          items3[0] = false;
          items3[1] = obj.NOT_RUNNING_GAME;
          tmp11 = items3;
        }
      } else {
        items4 = [false, obj.NOT_IN_VOICE_CHANNEL];
      }
      return items4;
    }
    const obj5 = flag(id[10]);
  }
}
({ ActivityGamePlatforms: closure_10, ActivityTypes: closure_11 } = ME);
let obj = { NOT_IN_VOICE_CHANNEL: "NOT_IN_VOICE_CHANNEL", NOT_RUNNING_GAME: "NOT_RUNNING_GAME", ALREADY_STREAMING: "ALREADY_STREAMING", NO_PERMISSION: "NO_PERMISSION", PENDING_REQUEST: "PENDING_REQUEST", EXPIRED: "EXPIRED" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default function useCanFulfillStreamRequest(arg0) {
  let flag = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [closure_3, closure_5, closure_8, _isNativeReflectConstruct, closure_9, _createForOfIteratorHelperLoose, closure_7];
  return _require(flag[11]).useStateFromStores(items, () => outer1_13(closure_0, flag, outer1_3, outer1_5, outer1_8, outer1_2, outer1_9, outer1_6, outer1_7));
};
export const StreamRequestUnfulfillableReason = obj;
export { canFulfillStreamRequest };
