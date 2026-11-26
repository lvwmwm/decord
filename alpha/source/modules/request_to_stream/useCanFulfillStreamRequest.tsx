// Module ID: 12302
// Function ID: 12303
// Name: useCanFulfillStreamRequest
// Dependencies: [2140, 6813, 502, 4892, 4914, 4975, 6014, 5851, 10350, 7768, 1379, 12279, 6015, 504, 2]
// Exports: default

// Module 12302 (useCanFulfillStreamRequest)
import ActivityTypes from "ActivityTypes" /* 6015 */;
import RunningGameStore from "RunningGameStore" /* 2140 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6813 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import PresenceStore from "PresenceStore" /* 6014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5851 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

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
  dependencyMap = undefined;
  const channel = obj2.getChannel(channel_id.channel_id);
  if (null == channel) {
    const items = [false, obj.NOT_IN_VOICE_CHANNEL];
    return items;
  } else {
    let items6;
    const channelId = obj4.getChannelId();
    channel_id = channel_id.channel_id;
    const application = channel_id.application;
    id = undefined;
    const tmp16 = null != obj.getCurrentUserActiveStream();
    const obj8 = flag(10350);
    const videoPermission = obj8.getVideoPermission(channel);
    if (application != null) {
      id = application.id;
    }
    tmp17(7768).ActivityGamePlatforms.DESKTOP;
    const tmp17Result = flag(1379);
    const isAndroidResult = tmp17Result.isAndroid();
    const ActivityGamePlatforms = tmp17(7768).ActivityGamePlatforms;
    dependencyMap = isAndroidResult ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.IOS;
    let tmp4 = id;
    const obj5 = { guildId: channel.guild_id, location: "canFulfillStreamRequest" };
    const obj6 = id(12279);
    const tmp5 = obj6.getConfig(obj5).enabled && null == id;
    if (null == id) {
      if (!tmp5) {
        const items1 = [false, obj.NOT_RUNNING_GAME];
        return items1;
      }
    }
    const activities = obj3.getActivities(AuthenticationStore.getId(), channel.guild_id);
    if (tmp16) {
      const items2 = [false, obj.ALREADY_STREAMING];
      items6 = items2;
    } else if (channelId === channel_id) {
      let items5;
      if (videoPermission) {
        if (!tmp9) {
          let items3;
          if (!tmp5) {
            items3 = [false, obj.NOT_RUNNING_GAME];
          }
          items5 = items3;
        }
        const items4 = [true, null];
        items3 = items4;
      } else {
        items5 = [false, obj.NO_PERMISSION];
      }
      items6 = items5;
    } else {
      items6 = [false, obj.NOT_IN_VOICE_CHANNEL];
    }
    return items6;
  }
}
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
