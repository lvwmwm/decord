// Module ID: 16106
// Function ID: 124761
// Name: getSpatialAudioPointFromGuildRoomPosition
// Dependencies: [1194, 16096, 16101, 16102, 566, 16097, 2]
// Exports: livingRoomWorldPointToMediaEnginePoint, useGuildRoomSpatialAudio

// Module 16106 (getSpatialAudioPointFromGuildRoomPosition)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import getName from "getName";

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
function computeLivingRoomWorldPoints(channelId) {
  let currentUserId;
  let users;
  ({ users, currentUserId } = channelId);
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
  room = room.getRoom(channelId.channelId);
  let background;
  if (null != room) {
    background = room.background;
  }
  if (null == background) {
    background = currentUserId(aspectRatio[3]).GuildRoomBackgrounds.DEFAULT;
  }
  aspectRatio = table[background].aspectRatio;
  let items = [...users.values()];
  const found = items.filter((userId) => userId.userId !== currentUserId);
  return Object.fromEntries(found.map((userId) => {
    const items = [userId.userId, outer1_8(userId.position, c1, { aspectRatio })];
    return items;
  }));
}
({ GUILD_ROOM_BACKGROUND_CONFIG: closure_5, GUILD_ROOM_SPATIAL_AUDIO_MODE: closure_6 } = getName);
let closure_7 = { x: 50, y: 50 };
const result = require("getName").fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudio.tsx");

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
  let interactionsEnabled = stateFromStores(16097).useExperiment({ guildId, location: "SpatialAudioPanel" }).interactionsEnabled;
  if (interactionsEnabled) {
    interactionsEnabled = null != guildId;
  }
  let tmp3 = interactionsEnabled;
  if (interactionsEnabled) {
    tmp3 = channelId.mode === closure_6;
  }
  dependencyMap = tmp3;
  obj = { available: interactionsEnabled };
  const obj2 = stateFromStores(16097);
  const items1 = [closure_4];
  const items2 = [tmp3, channelId, stateFromStores];
  obj.worldPoints = channelId(566).useStateFromStores(items1, () => {
    if (c2) {
      if (null != channelId) {
        const obj = { users: outer1_4.getRoomUsers(channelId), currentUserId: stateFromStores, channelId };
        outer1_9(obj);
      }
      return {};
    }
  }, items2);
  return obj;
};
