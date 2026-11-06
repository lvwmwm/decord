// Module ID: 13392
// Function ID: 13393
// Name: useCanFulfillStreamRequest
// Dependencies: [2137, 6794, 502, 5019, 5041, 5102, 5917, 5920, 12090, 9844, 1377, 11851, 5918, 504, 2]
// Exports: default

// Module 13392 (useCanFulfillStreamRequest)
import ActivityTypes from "ActivityTypes" /* 5918 */;
import RunningGameStore from "RunningGameStore" /* 2137 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6794 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import PresenceStore from "PresenceStore" /* 5917 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5920 */;
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
    const obj8 = flag(12090);
    const videoPermission = obj8.getVideoPermission(channel);
    if (application != null) {
      id = application.id;
    }
    tmp17(9844).ActivityGamePlatforms.DESKTOP;
    const tmp17Result = flag(1377);
    const isAndroidResult = tmp17Result.isAndroid();
    const ActivityGamePlatforms = tmp17(9844).ActivityGamePlatforms;
    dependencyMap = isAndroidResult ? ActivityGamePlatforms.ANDROID : ActivityGamePlatforms.IOS;
    let tmp4 = id;
    const obj5 = { guildId: channel.guild_id, location: "canFulfillStreamRequest" };
    const obj6 = id(11851);
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
