// Module ID: 12643
// Function ID: 12644
// Name: useCanFulfillStreamRequest
// Dependencies: [2021, 6628, 502, 4821, 4843, 4901, 5698, 5700, 1087, 11534, 1384, 11295, 558, 576, 504, 2]

// Module 12643 (useCanFulfillStreamRequest)
import RunningGameStore from "RunningGameStore" /* 2021 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6628 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import PresenceStore from "PresenceStore" /* 5698 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5700 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_12;
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
    const obj8 = flag(11534);
    const videoPermission = obj8.getVideoPermission(channel);
    const tmp17 = flag;
    if (application != null) {
      id = application.id;
    }
    const tmp17Result = tmp17(1384);
    dependencyMap = tmp17Result.isAndroid() ? tmp3.ANDROID : tmp3.IOS;
    let tmp4 = id;
    const obj5 = { guildId: channel.guild_id, location: "canFulfillStreamRequest" };
    const obj6 = id(11295);
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
({ ActivityGamePlatforms: unpackModuleId, ActivityTypes: closure_12 } = Constants);
const StreamRequestUnfulfillableReason = { NOT_IN_VOICE_CHANNEL: "NOT_IN_VOICE_CHANNEL", NOT_RUNNING_GAME: "NOT_RUNNING_GAME", ALREADY_STREAMING: "ALREADY_STREAMING", NO_PERMISSION: "NO_PERMISSION", PENDING_REQUEST: "PENDING_REQUEST", EXPIRED: "EXPIRED" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanFulfillStreamRequest(arg0, arg1) {
  let closure_0;
  let first;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  let closure_1 = tmp4;
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore];
    cResult[0] = items;
    class R {
      constructor() {
        return canFulfillStreamRequest(closure_0, closure_1, closure_4, closure_6, closure_9, closure_3, closure_10, closure_7, closure_8);
      }
    }
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined !== arg1 && arg1)) {
    let tmp13;
    if (cResult[2] === arg0) {
      tmp13 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp13);
  }
  class R {
    constructor() {
      return canFulfillStreamRequest(closure_0, closure_1, closure_4, closure_6, closure_9, closure_3, closure_10, closure_7, closure_8);
    }
  }
  cResult[1] = undefined !== arg1 && arg1;
  cResult[2] = arg0;
  cResult[3] = R;
  tmp13 = R;
}) : (function useCanFulfillStreamRequest(arg0) {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => canFulfillStreamRequest(closure_0, flag, ApplicationStreamingStore, ChannelStore, PresenceStore, RunningGameStore, RTCConnectionStore, GuildStore, PermissionStore));
});
const result = size.fileFinishedImporting("modules/request_to_stream/useCanFulfillStreamRequest.tsx");

export default tmp3;
export { StreamRequestUnfulfillableReason };
export { canFulfillStreamRequest };
