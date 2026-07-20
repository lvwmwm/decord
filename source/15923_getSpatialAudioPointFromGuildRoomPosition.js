// Module ID: 15923
// Function ID: 122152
// Name: getSpatialAudioPointFromGuildRoomPosition
// Dependencies: [42795008, 44236800, 44957696, 131072, 125239296, 100663296, 251658240]
// Exports: livingRoomWorldPointToMediaEnginePoint, useGuildRoomSpatialAudio

// Module 15923 (getSpatialAudioPointFromGuildRoomPosition)
function getSpatialAudioPointFromGuildRoomPosition(arg0) {
  let aspectRatio;
  let listenerHeight;
  let point = arg1;
  ({ aspectRatio, listenerHeight } = arg2);
  if (null == arg1) {
    point = closure_7;
  }
  const result = (arg0.y - point.y) / 100;
  const obj = { worldX: (arg0.x - point.x) / 100 * aspectRatio * 8, worldY: listenerHeight - 4 * result, worldZ: 8 * result };
  return obj;
}
function computeLivingRoomWorldPoints(listenerHeight) {
  let currentUserId;
  let users;
  ({ users, currentUserId } = listenerHeight);
  const arg1 = currentUserId;
  const importDefault = listenerHeight.listenerHeight;
  let dependencyMap;
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
  dependencyMap = tmp3;
  aspectRatio = closure_5[closure_0(undefined, closure_2[3]).GuildRoomBackgrounds.DEFAULT].aspectRatio;
  const items = [...users.values()];
  const found = items.filter((userId) => userId.userId !== currentUserId);
  return Object.fromEntries(found.map((userId) => {
    const items = [userId.userId, callback(userId.position, tmp3, { aspectRatio, listenerHeight })];
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
  let guildId;
  let listenerHeight;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ guildId, listenerHeight } = channelId);
  const importDefault = listenerHeight;
  let closure_3;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => tmp3.getId());
  const dependencyMap = stateFromStores;
  let experimental = importDefault(dependencyMap[5]).useExperiment({ guildId, location: "SpatialAudioPanel" }).experimental;
  if (experimental) {
    experimental = null != guildId;
  }
  let tmp3 = experimental;
  if (experimental) {
    tmp3 = channelId.mode === closure_6;
  }
  closure_3 = tmp3;
  obj = { available: experimental };
  const obj2 = importDefault(dependencyMap[5]);
  const items1 = [closure_4];
  const items2 = [tmp3, channelId, stateFromStores, listenerHeight];
  obj.worldPoints = arg1(dependencyMap[4]).useStateFromStores(items1, () => {
    if (tmp3) {
      if (null != channelId) {
        const obj = { users: roomUsers.getRoomUsers(channelId), currentUserId: stateFromStores, listenerHeight };
        const tmp3 = callback(obj);
      }
      return {};
    }
  }, items2);
  return obj;
};
