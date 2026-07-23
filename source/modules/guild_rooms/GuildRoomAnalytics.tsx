// Module ID: 16053
// Function ID: 124385
// Name: resolveGuildId
// Dependencies: [1194, 1348, 4202, 4146, 16049, 16054, 653, 4324, 2]
// Exports: trackGuildRoomInteracted, trackGuildRoomLayoutToggled, trackGuildRoomObjectInteracted, trackGuildRoomOpened, trackGuildRoomSeatSelected, trackGuildRoomUserConnected, trackGuildRoomUserDisconnected, trackGuildRoomUserInteracted, trackGuildRoomUserUpdated

// Module 16053 (resolveGuildId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { getSeatName } from "items";
import { AnalyticEvents } from "ME";

function resolveGuildId(channelId, guildId) {
  let tmp = guildId;
  if (null == guildId) {
    channel = channel.getChannel(channelId);
    guildId = undefined;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let tmp5;
    if (null != guildId) {
      tmp5 = guildId;
    }
    tmp = tmp5;
  }
  return tmp;
}
function getUpdateProperties(updateType) {
  let obj = { update_type: updateType.updateType, update_reason: updateType.updateReason };
  updateType = updateType.updateType;
  if ("position" === updateType) {
    obj = {};
    const merged = Object.assign(obj);
    const items = [updateType.position.x, updateType.position.y];
    obj["position_v2"] = items;
    return obj;
  } else if ("status_id" === updateType) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj["status_id"] = updateType.statusId;
    return obj;
  } else if ("status_text" === updateType) {
    const obj1 = {};
    const merged2 = Object.assign(obj);
    obj1["status_text"] = updateType.statusText;
    return obj1;
  }
}
function getBaseProperties(guildId) {
  let channelId;
  let userId;
  ({ userId, channelId } = guildId);
  if (null == userId) {
    userId = id.getId();
  }
  const roomUsers = authStore.getRoomUsers(channelId);
  const obj = { user_id: userId, guild_id: resolveGuildId(channelId, guildId.guildId), channel_id: channelId, guild_room_user_count: roomUsers.size, guild_room_user_connected: roomUsers.has(userId) };
  return obj;
}
function withVoiceMetadata(channelId, arg1) {
  let closure_0 = channelId;
  let closure_1 = arg1;
  function cleanup() {
    onChange.removeChangeListener(onChange);
    clearTimeout(_isNativeReflectConstruct);
  }
  function onChange() {
    const mediaSessionId = onChange.getMediaSessionId();
    if (null != mediaSessionId) {
      cleanup();
      const obj = {};
      const _Object = Object;
      obj.voice_state_count = Object.keys(outer1_5.getVoiceStatesForChannel(closure_0)).length;
      obj.voice_media_session_id = mediaSessionId;
      callback(obj);
    }
  }
  let mediaSessionId = onChange.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    const timeout = setTimeout(() => {
      cleanup();
      callback({ voice_state_count: Object.keys(outer1_5.getVoiceStatesForChannel(closure_0)).length });
    }, 2500);
    onChange.addChangeListener(onChange);
  } else {
    let obj = {};
    let _Object = Object;
    obj.voice_state_count = Object.keys(store.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    arg1(obj);
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_rooms/GuildRoomAnalytics.tsx");

export const trackGuildRoomObjectInteracted = function trackGuildRoomObjectInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let obj = Object.create(null);
  obj.interactionType = 0;
  let merged = Object.assign(interactionType, obj);
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = interactionType(merged[7]);
    obj = {};
    merged = Object.assign(outer1_11(merged));
    obj["interaction_type"] = interactionType;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_OBJECT_INTERACTED, obj);
  });
};
export const trackGuildRoomInteracted = function trackGuildRoomInteracted(interactionType) {
  interactionType = interactionType.interactionType;
  let obj = Object.create(null);
  obj.interactionType = 0;
  let merged = Object.assign(interactionType, obj);
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = interactionType(merged[7]);
    obj = {};
    merged = Object.assign(outer1_11(merged));
    obj["interaction_type"] = interactionType;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_INTERACTED, obj);
  });
};
export const trackGuildRoomLayoutToggled = function trackGuildRoomLayoutToggled(arg0) {
  let dependencyMap;
  let importDefault;
  ({ location: importDefault, guildRoomOpen: dependencyMap } = arg0);
  let obj = Object.create(null);
  obj.location = 0;
  obj.guildRoomOpen = 0;
  let merged = Object.assign(arg0, obj);
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = outer1_0(outer1_1[7]);
    obj = {};
    merged = Object.assign(outer1_11(merged));
    obj["location"] = closure_0;
    obj["guild_room_open"] = closure_1;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_LAYOUT_TOGGLED, obj);
  });
};
export const trackGuildRoomOpened = function trackGuildRoomOpened(location) {
  location = location.location;
  let obj = Object.create(null);
  obj.location = 0;
  let merged = Object.assign(location, obj);
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = location(merged[7]);
    obj = {};
    merged = Object.assign(outer1_11(merged));
    obj["location"] = location;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_OPENED, obj);
  });
};
export const trackGuildRoomSeatSelected = function trackGuildRoomSeatSelected(arg0) {
  let dependencyMap;
  let importDefault;
  ({ actualSeatPosition: importDefault, targetSeatPosition: dependencyMap } = arg0);
  let obj = Object.create(null);
  obj.actualSeatPosition = 0;
  obj.targetSeatPosition = 0;
  let merged = Object.assign(arg0, obj);
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = outer1_0(outer1_1[7]);
    obj = {};
    const merged = Object.assign(outer1_11(items3));
    obj["seat_name"] = outer1_7(items1.x, items1.y);
    const items = [, ];
    ({ x: arr[0], y: arr[1] } = items1);
    obj["seat_position_v2"] = items;
    let x;
    if (null != items2) {
      x = items2.x;
    }
    if (items1.x !== x) {
      let str = "default";
    } else {
      let y;
      if (null != items2) {
        y = items2.y;
      }
      str = "user_selected";
    }
    obj["update_reason"] = str;
    items1 = [];
    items2 = [];
    items3 = [];
    const items4 = [];
    const roomUsers = outer1_6.getRoomUsers(items3.channelId);
    const item = roomUsers.forEach((position) => {
      items1.push(arg1);
      items2.push(outer2_7(position.position.x, position.position.y));
      items3.push(position.position.x);
      items4.push(position.position.y);
    });
    obj = { seated_user_ids: items1, seated_user_seat_names: items2, seated_user_x_positions: items3, seated_user_y_positions: items4 };
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_SEAT_SELECTED, obj);
  });
};
export const trackGuildRoomUserInteracted = function trackGuildRoomUserInteracted(arg0) {
  let dependencyMap;
  let importDefault;
  ({ targetUserId: importDefault, interactionType: dependencyMap } = arg0);
  let obj = Object.create(null);
  obj.targetUserId = 0;
  obj.interactionType = 0;
  let merged = Object.assign(arg0, obj);
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = outer1_0(outer1_1[7]);
    obj = {};
    merged = Object.assign(outer1_11(merged));
    obj["target_user_id"] = closure_0;
    obj["interaction_type"] = closure_1;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_INTERACTED, obj);
  });
};
export const trackGuildRoomUserConnected = function trackGuildRoomUserConnected(channelId) {
  let closure_0 = channelId;
  withVoiceMetadata(channelId.channelId, (arg0) => {
    let obj = channelId(outer1_1[7]);
    obj = {};
    const merged = Object.assign(outer1_11(channelId));
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_CONNECTED, obj);
  });
};
export const trackGuildRoomUserDisconnected = function trackGuildRoomUserDisconnected(channelId) {
  let obj = importDefault(4324);
  obj = {};
  const merged = Object.assign(getBaseProperties(channelId));
  obj["voice_state_count"] = Object.keys(store.getVoiceStatesForChannel(channelId.channelId)).length;
  obj["voice_media_session_id"] = authStore.getMediaSessionId(channelId.channelId);
  obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_DISCONNECTED, obj);
};
export const trackGuildRoomUserUpdated = function trackGuildRoomUserUpdated(update) {
  update = update.update;
  let obj = Object.create(null);
  obj.update = 0;
  let merged = Object.assign(update, obj);
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = update(merged[7]);
    obj = {};
    merged = Object.assign(outer1_11(merged));
    const merged1 = Object.assign(outer1_10(update));
    const merged2 = Object.assign(arg0);
    obj.trackWithMetadata(outer1_8.GUILD_ROOM_USER_UPDATED, obj);
  });
};
