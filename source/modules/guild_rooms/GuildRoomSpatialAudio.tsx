// Module ID: 15942
// Function ID: 122264
// Name: getSpatialAudioPointFromGuildRoomPosition
// Dependencies: [42795008, 44236800, 44957696, 131072, 125239296, 100663296, 251658240]
// Exports: livingRoomWorldPointToMediaEnginePoint, useGuildRoomSpatialAudio

// Module 15942 (getSpatialAudioPointFromGuildRoomPosition)
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
  const arg1 = currentUserId;
  let importDefault;
  let dependencyMap;
  const value = users.get(currentUserId);
  let position;
  if (null != value) {
    position = value.position;
  }
  let tmp3 = null;
  if (null != position) {
    tmp3 = position;
  }
  importDefault = tmp3;
  dependencyMap = closure_5[closure_0(undefined, closure_2[3]).GuildRoomBackgrounds.DEFAULT].aspectRatio;
  const items = [...users.values()];
  const found = items.filter((userId) => userId.userId !== currentUserId);
  return Object.fromEntries(found.map((userId) => {
    const items = [userId.userId, callback(userId.position, tmp3, { aspectRatio })];
    return items;
  }));
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ GUILD_ROOM_BACKGROUND_CONFIG: closure_5, GUILD_ROOM_SPATIAL_AUDIO_MODE: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = {};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudio.tsx");

export { computeLivingRoomWorldPoints };
export const livingRoomWorldPointToMediaEnginePoint = function livingRoomWorldPointToMediaEnginePoint(worldX) {
  return { x: worldX.worldX, y: worldX.worldY, z: worldX.worldZ };
};
export const useGuildRoomSpatialAudio = function useGuildRoomSpatialAudio(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const guildId = channelId.guildId;
  let dependencyMap;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const importDefault = stateFromStores;
  let experimental = importDefault(dependencyMap[5]).useExperiment({ guildId, location: "SpatialAudioPanel" }).experimental;
  if (experimental) {
    experimental = null != guildId;
  }
  let tmp3 = experimental;
  if (experimental) {
    tmp3 = channelId.mode === closure_6;
  }
  dependencyMap = tmp3;
  obj = { available: experimental };
  const obj2 = importDefault(dependencyMap[5]);
  const items1 = [closure_4];
  const items2 = [tmp3, channelId, stateFromStores];
  obj.worldPoints = arg1(dependencyMap[4]).useStateFromStores(items1, () => {
    if (tmp3) {
      if (null != channelId) {
        const obj = { users: roomUsers.getRoomUsers(channelId), currentUserId: stateFromStores };
        const tmp3 = callback(obj);
      }
      return {};
    }
  }, items2);
  return obj;
};
