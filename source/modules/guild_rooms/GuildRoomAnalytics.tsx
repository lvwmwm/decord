// Module ID: 15924
// Function ID: 122125
// Name: resolveGuildId
// Dependencies: []
// Exports: trackGuildRoomInteracted, trackGuildRoomLayoutToggled, trackGuildRoomObjectInteracted, trackGuildRoomOpened, trackGuildRoomSeatSelected, trackGuildRoomUserConnected, trackGuildRoomUserDisconnected, trackGuildRoomUserInteracted, trackGuildRoomUserUpdated

// Module 15924 (resolveGuildId)
function resolveGuildId(channelId, guildId) {
  let tmp = guildId;
  if (null == guildId) {
    const channel = channel.getChannel(channelId);
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
  const importDefault = channelId;
  const dependencyMap = arg1;
  function cleanup() {
    onChange.removeChangeListener(onChange);
    clearTimeout(closure_2);
  }
  function onChange() {
    const mediaSessionId = onChange.getMediaSessionId();
    if (null != mediaSessionId) {
      cleanup();
      const obj = {};
      const _Object = Object;
      obj.voice_state_count = Object.keys(store.getVoiceStatesForChannel(arg0)).length;
      obj.voice_media_session_id = mediaSessionId;
      arg1(obj);
    }
  }
  let closure_4 = onChange;
  const mediaSessionId = closure_4.getMediaSessionId();
  if (null == mediaSessionId) {
    const _setTimeout = setTimeout;
    const timeout = setTimeout(() => {
      cleanup();
      arg1({ voice_state_count: Object.keys(store.getVoiceStatesForChannel(arg0)).length });
    }, 2500);
    closure_4.addChangeListener(onChange);
  } else {
    const obj = {};
    const _Object = Object;
    obj.voice_state_count = Object.keys(store.getVoiceStatesForChannel(channelId)).length;
    obj.voice_media_session_id = mediaSessionId;
    arg1(obj);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const getSeatName = arg1(dependencyMap[5]).getSeatName;
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_rooms/GuildRoomAnalytics.tsx");

export const trackGuildRoomObjectInteracted = function trackGuildRoomObjectInteracted(interactionType) {
  const importDefault = interactionType.interactionType;
  const obj = Object.create(null);
  obj.interactionType = 0;
  const merged = Object.assign(interactionType, obj);
  const dependencyMap = merged;
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = interactionType(merged[7]);
    obj = {};
    const merged = Object.assign(callback(merged));
    obj["interaction_type"] = interactionType;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(constants.GUILD_ROOM_OBJECT_INTERACTED, obj);
  });
};
export const trackGuildRoomInteracted = function trackGuildRoomInteracted(interactionType) {
  const importDefault = interactionType.interactionType;
  const obj = Object.create(null);
  obj.interactionType = 0;
  const merged = Object.assign(interactionType, obj);
  const dependencyMap = merged;
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = interactionType(merged[7]);
    obj = {};
    const merged = Object.assign(callback(merged));
    obj["interaction_type"] = interactionType;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(constants.GUILD_ROOM_INTERACTED, obj);
  });
};
export const trackGuildRoomLayoutToggled = function trackGuildRoomLayoutToggled(arg0) {
  ({ location: closure_0, guildRoomOpen: closure_1 } = arg0);
  const obj = Object.create(null);
  obj.location = 0;
  obj.guildRoomOpen = 0;
  const merged = Object.assign(arg0, obj);
  let closure_2 = merged;
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = callback(closure_1[7]);
    obj = {};
    const merged = Object.assign(callback2(merged));
    obj["location"] = callback;
    obj["guild_room_open"] = closure_1;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(constants.GUILD_ROOM_LAYOUT_TOGGLED, obj);
  });
};
export const trackGuildRoomOpened = function trackGuildRoomOpened(location) {
  const importDefault = location.location;
  const obj = Object.create(null);
  obj.location = 0;
  const merged = Object.assign(location, obj);
  const dependencyMap = merged;
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = location(merged[7]);
    obj = {};
    const merged = Object.assign(callback(merged));
    obj["location"] = location;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(constants.GUILD_ROOM_OPENED, obj);
  });
};
export const trackGuildRoomSeatSelected = function trackGuildRoomSeatSelected(arg0) {
  ({ actualSeatPosition: closure_0, targetSeatPosition: closure_1 } = arg0);
  const obj = Object.create(null);
  obj.actualSeatPosition = 0;
  obj.targetSeatPosition = 0;
  const merged = Object.assign(arg0, obj);
  let closure_2 = merged;
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = items1(items2[7]);
    obj = {};
    let merged = Object.assign(callback2(merged));
    obj["seat_name"] = callback(items1.x, items1.y);
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
    const items1 = [];
    const items2 = [];
    const items3 = [];
    merged = items3;
    const items4 = [];
    const roomUsers = roomUsers.getRoomUsers(merged.channelId);
    const item = roomUsers.forEach((position) => {
      items1.push(arg1);
      items2.push(callback(position.position.x, position.position.y));
      items3.push(position.position.x);
      items4.push(position.position.y);
    });
    obj = { seated_user_ids: items1, seated_user_seat_names: items2, seated_user_x_positions: items3, seated_user_y_positions: items4 };
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(arg0);
    obj.trackWithMetadata(constants.GUILD_ROOM_SEAT_SELECTED, obj);
  });
};
export const trackGuildRoomUserInteracted = function trackGuildRoomUserInteracted(arg0) {
  ({ targetUserId: closure_0, interactionType: closure_1 } = arg0);
  const obj = Object.create(null);
  obj.targetUserId = 0;
  obj.interactionType = 0;
  const merged = Object.assign(arg0, obj);
  let closure_2 = merged;
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = callback(closure_1[7]);
    obj = {};
    const merged = Object.assign(callback2(merged));
    obj["target_user_id"] = callback;
    obj["interaction_type"] = closure_1;
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(constants.GUILD_ROOM_USER_INTERACTED, obj);
  });
};
export const trackGuildRoomUserConnected = function trackGuildRoomUserConnected(channelId) {
  const importDefault = channelId;
  withVoiceMetadata(channelId.channelId, (arg0) => {
    let obj = arg0(closure_1[7]);
    obj = {};
    const merged = Object.assign(callback(arg0));
    const merged1 = Object.assign(arg0);
    obj.trackWithMetadata(constants.GUILD_ROOM_USER_CONNECTED, obj);
  });
};
export const trackGuildRoomUserDisconnected = function trackGuildRoomUserDisconnected(channelId) {
  let obj = importDefault(dependencyMap[7]);
  obj = {};
  const merged = Object.assign(getBaseProperties(channelId));
  obj["voice_state_count"] = Object.keys(store.getVoiceStatesForChannel(channelId.channelId)).length;
  obj["voice_media_session_id"] = authStore.getMediaSessionId(channelId.channelId);
  obj.trackWithMetadata(AnalyticEvents.GUILD_ROOM_USER_DISCONNECTED, obj);
};
export const trackGuildRoomUserUpdated = function trackGuildRoomUserUpdated(update) {
  const importDefault = update.update;
  const obj = Object.create(null);
  obj.update = 0;
  const merged = Object.assign(update, obj);
  const dependencyMap = merged;
  withVoiceMetadata(merged.channelId, (arg0) => {
    let obj = update(merged[7]);
    obj = {};
    const merged = Object.assign(callback2(merged));
    const merged1 = Object.assign(callback(update));
    const merged2 = Object.assign(arg0);
    obj.trackWithMetadata(constants.GUILD_ROOM_USER_UPDATED, obj);
  });
};
