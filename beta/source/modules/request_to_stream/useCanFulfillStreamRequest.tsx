// Module ID: 11266
// Function ID: 11267
// Name: useCanFulfillStreamRequest
// Dependencies: [2000, 4858, 502, 2045, 2067, 4469, 4876, 4859, 1074, 9403, 1364, 504, 2]
// Exports: default

// Module 11266 (useCanFulfillStreamRequest)
import RunningGameStore from "RunningGameStore" /* 2000 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let unpackModuleId;
function canFulfillStreamRequest(channel_id, flag, ApplicationStreamingStore, ChannelStore, PresenceStore) {
  let closure_2;
  if (flag === undefined) {
    flag = false;
  }
  let obj = ApplicationStreamingStore;
  if (ApplicationStreamingStore === undefined) {
    obj = ApplicationStreamingStore;
  }
  let obj2 = ChannelStore;
  if (ChannelStore === undefined) {
    obj2 = ChannelStore;
  }
  let obj3 = PresenceStore;
  if (PresenceStore === undefined) {
    obj3 = PresenceStore;
  }
  let obj4 = RTCConnectionStore;
  if (RTCConnectionStore === undefined) {
    obj4 = RTCConnectionStore;
  }
  let id;
  let DESKTOP;
  const channel = obj2.getChannel(channel_id.channel_id);
  if (null == channel) {
    const items = [false, obj.NOT_IN_VOICE_CHANNEL];
    return items;
  } else {
    const channelId = obj4.getChannelId();
    channel_id = channel_id.channel_id;
    const application = channel_id.application;
    const tmp13 = null != obj.getCurrentUserActiveStream();
    const obj6 = flag(id[9]);
    const tmp15 = id;
    id = undefined;
    const videoPermission = obj6.getVideoPermission(channel);
    const tmp14 = flag;
    if (application != null) {
      id = application.id;
    }
    const tmp14Result = tmp14(tmp15[10]);
    DESKTOP = tmp14Result.isAndroid() ? tmp3.ANDROID : tmp3.IOS;
    if (null == id) {
      const items1 = [false, obj.NOT_RUNNING_GAME];
      return items1;
    } else {
      let items4;
      const activities = obj3.getActivities(AuthenticationStore.getId(), channel.guild_id);
      if (tmp13) {
        const items2 = [false, obj.ALREADY_STREAMING];
        items4 = items2;
      } else if (channelId === channel_id) {
        let tmp6;
        const items3 = [, ];
        if (videoPermission) {
          let tmp8;
          if (tmp19) {
            items3[0] = true;
            items3[1] = null;
            tmp8 = items3;
          } else {
            items3[0] = false;
            items3[1] = obj.NOT_RUNNING_GAME;
            tmp8 = items3;
          }
          tmp6 = tmp8;
        } else {
          items3[0] = false;
          items3[1] = obj.NO_PERMISSION;
          tmp6 = items3;
        }
        items4 = tmp6;
      } else {
        items4 = [false, ];
        let tmp4 = obj;
        items4[1] = obj.NOT_IN_VOICE_CHANNEL;
      }
      return items4;
    }
  }
}
({ ActivityGamePlatforms: c10, ActivityTypes: unpackModuleId } = Constants);
const StreamRequestUnfulfillableReason = { NOT_IN_VOICE_CHANNEL: "NOT_IN_VOICE_CHANNEL", NOT_RUNNING_GAME: "NOT_RUNNING_GAME", ALREADY_STREAMING: "ALREADY_STREAMING", NO_PERMISSION: "NO_PERMISSION", PENDING_REQUEST: "PENDING_REQUEST", EXPIRED: "EXPIRED" };
const result = size.fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default function useCanFulfillStreamRequest(arg0) {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => canFulfillStreamRequest(closure_0, flag, ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore));
};
export { StreamRequestUnfulfillableReason };
export { canFulfillStreamRequest };
