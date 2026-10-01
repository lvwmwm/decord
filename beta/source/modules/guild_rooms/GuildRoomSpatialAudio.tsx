// Module ID: 17143
// Function ID: 17144
// Name: GuildRoomSpatialAudio
// Dependencies: [502, 4994, 4998, 4999, 504, 5036, 2]
// Exports: computeLivingRoomWorldPoints, livingRoomWorldPointToMediaEnginePoint, useGuildRoomSpatialAudio

// Module 17143 (GuildRoomSpatialAudio)
import get_initialized from "get initialized" /* 504 */;
import GuildRoomsExperiment from "GuildRoomsExperiment" /* 5036 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildRoomStore from "GuildRoomStore" /* 4994 */;
import GuildRoomConstants from "GuildRoomConstants" /* 4998 */;
import size from "module_2" /* 2 */;

let GUILD_ROOM_SPATIAL_AUDIO_MODE;
let closure_4;
({ GUILD_ROOM_BACKGROUND_CONFIG: closure_4, GUILD_ROOM_SPATIAL_AUDIO_MODE } = GuildRoomConstants);
let c5 = false;
let closure_6 = { x: 50, y: 50 };
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudio.tsx");

export const GUILD_ROOM_SPATIAL_AUDIO_ENABLED = false;
export const computeLivingRoomWorldPoints = function computeLivingRoomWorldPoints(channelId) {
  let currentUserId;
  let users;
  ({ users, currentUserId } = channelId);
  let aspectRatio;
  channelId = channelId.channelId;
  const value = users.get(currentUserId);
  let position;
  if (value != null) {
    position = value.position;
  }
  if (position == null) {
    position = null;
  }
  const room = GuildRoomStore.getRoom(channelId);
  let background;
  if (room != null) {
    background = room.background;
  }
  if (background == null) {
    background = currentUserId(position[3]).GuildRoomBackgrounds.DEFAULT;
  }
  aspectRatio = closure_4[background].aspectRatio;
  let items = [...users.values()];
  const found = items.filter((userId) => userId.userId !== currentUserId);
  return fromEntries(found.map((position) => {
    position = position.position;
    const items = [position.userId, ];
    let point = position;
    const tmp = aspectRatio;
    if (position == null) {
      point = closure_6;
    }
    const obj = { worldX: (position.x - point.x) / 100 * tmp * 8, worldY: 0, worldZ: 8 * ((position.y - point.y) / 100) };
    items[1] = obj;
    return items;
  }));
};
export const livingRoomWorldPointToMediaEnginePoint = function livingRoomWorldPointToMediaEnginePoint(worldX) {
  const point = { x: worldX.worldX, y: worldX.worldY, z: worldX.worldZ };
  return point;
};
export const useGuildRoomSpatialAudio = function useGuildRoomSpatialAudio(arg0) {
  let channelId;
  let guildId;
  let id;
  let items1;
  let items2;
  let obj4;
  ({ channelId, guildId } = arg0);
  const items = [AuthenticationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const obj2 = GuildRoomsExperiment;
  const interactionsEnabled = obj2.useGuildRoomsExperiment({ guildId, location: "SpatialAudioPanel" }).interactionsEnabled;
  const obj3 = { available, worldPoints: obj4.useStateFromStores(items1, () => ({}), items2) };
  items1 = [GuildRoomStore];
  items2 = [false, channelId, stateFromStores];
  obj4 = get_initialized;
  return obj3;
};
