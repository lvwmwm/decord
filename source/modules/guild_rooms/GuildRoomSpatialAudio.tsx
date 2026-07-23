// Module ID: 16059
// Function ID: 124437
// Name: getSpatialAudioPointFromGuildRoomPosition
// Dependencies: [1194, 16049, 16054, 16055, 566, 16050, 2]
// Exports: livingRoomWorldPointToMediaEnginePoint, useGuildRoomSpatialAudio

// Module 16059 (getSpatialAudioPointFromGuildRoomPosition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import items from "items";

let closure_5;
let closure_6;
const require = arg1;
function getSpatialAudioPointFromGuildRoomPosition(arg0, arg1, aspectRatio) {
  let point = arg1;
  if (null == arg1) {
    point = closure_7;
  }
  const obj = { worldX: (arg0.x - point.x) / 100 * aspectRatio.aspectRatio * 8, worldY: 0, worldZ: 8 * ((arg0.y - point.y) / 100) };
  return obj;
}
function computeLivingRoomWorldPoints(arg0) {
  let currentUserId;
  let users;
  ({ users, currentUserId } = arg0);
  let c1;
  let aspectRatio;
  const value = users.get(currentUserId);
  let position;
  if (null != value) {
    position = value.position;
  }
  let tmp3 = null;
  if (null != position) {
    tmp3 = position;
  }
  c1 = tmp3;
  aspectRatio = table[currentUserId(undefined, aspectRatio[3]).GuildRoomBackgrounds.DEFAULT].aspectRatio;
  let items = [...users.values()];
  const found = items.filter((userId) => userId.userId !== currentUserId);
  return Object.fromEntries(found.map((userId) => {
    const items = [userId.userId, outer1_8(userId.position, c1, { aspectRatio })];
    return items;
  }));
}
({ GUILD_ROOM_BACKGROUND_CONFIG: closure_5, GUILD_ROOM_SPATIAL_AUDIO_MODE: closure_6 } = items);
let closure_7 = { x: 50, y: 50 };
const result = require("items").fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudio.tsx");

export { computeLivingRoomWorldPoints };
export const livingRoomWorldPointToMediaEnginePoint = function livingRoomWorldPointToMediaEnginePoint(worldX) {
  return { x: worldX.worldX, y: worldX.worldY, z: worldX.worldZ };
};
export const useGuildRoomSpatialAudio = function useGuildRoomSpatialAudio(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let dependencyMap;
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getId());
  let experimental = stateFromStores(16050).useExperiment({ guildId, location: "SpatialAudioPanel" }).experimental;
  if (experimental) {
    experimental = null != guildId;
  }
  let tmp3 = experimental;
  if (experimental) {
    tmp3 = channelId.mode === closure_6;
  }
  dependencyMap = tmp3;
  obj = { available: experimental };
  const obj2 = stateFromStores(16050);
  const items1 = [closure_4];
  const items2 = [tmp3, channelId, stateFromStores];
  obj.worldPoints = channelId(566).useStateFromStores(items1, () => {
    if (c2) {
      if (null != channelId) {
        const obj = { users: outer1_4.getRoomUsers(channelId), currentUserId: stateFromStores };
        outer1_9(obj);
      }
      return {};
    }
  }, items2);
  return obj;
};
