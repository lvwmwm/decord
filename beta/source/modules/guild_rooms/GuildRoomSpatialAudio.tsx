// Module ID: 17785
// Function ID: 17786
// Name: GuildRoomSpatialAudio
// Dependencies: [502, 4916, 4920, 4921, 558, 568, 504, 4958, 2]
// Exports: computeLivingRoomWorldPoints, livingRoomWorldPointToMediaEnginePoint

// Module 17785 (GuildRoomSpatialAudio)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import GuildRoomsExperiment from "GuildRoomsExperiment" /* 4958 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildRoomStore from "GuildRoomStore" /* 4916 */;

require = fn;
const GuildRoomConstants = fn(4920);
({ GUILD_ROOM_BACKGROUND_CONFIG: closure_4, GUILD_ROOM_SPATIAL_AUDIO_MODE } = GuildRoomConstants);
let c5 = false;
let closure_6 = { x: 50, y: 50 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudio.tsx");

export const GUILD_ROOM_SPATIAL_AUDIO_ENABLED = false;
export const computeLivingRoomWorldPoints = function computeLivingRoomWorldPoints(channelId) {
  ({ users, currentUserId } = channelId);
  let aspectRatio;
  value = users.get(currentUserId);
  let position;
  if (value != null) {
    position = value.position;
  }
  if (position == null) {
    position = null;
  }
  const room = GuildRoomStore.getRoom(channelId.channelId);
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
  return Object.fromEntries(found.map((position) => {
    position = position.position;
    const items = [position.userId, ];
    let point = position;
    if (position == null) {
      point = closure_6;
    }
    items[1] = { worldX: (position.x - point.x) / 100 * aspectRatio * 8, worldY: 0, worldZ: 8 * ((position.y - point.y) / 100) };
    return items;
  }));
};
export const livingRoomWorldPointToMediaEnginePoint = function livingRoomWorldPointToMediaEnginePoint(worldX) {
  const point = { x: worldX.worldX, y: worldX.worldY, z: worldX.worldZ };
  return point;
};
export const useGuildRoomSpatialAudio = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ channelId, guildId, mode } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== guildId) {
    const obj2 = { guildId, location: "SpatialAudioPanel" };
    cResult[2] = guildId;
    cResult[3] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult = initialize;
  const interactionsEnabled = GuildRoomsExperiment.useGuildRoomsExperiment(tmp8).interactionsEnabled;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildRoomStore];
    cResult[4] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === c5) {
    if (cResult[6] === channelId) {
      if (cResult[7] === stateFromStores) {
        let tmp12 = cResult[8];
        let tmp13 = cResult[9];
      }
      const stateFromStores1 = tmp(504).useStateFromStores(tmp10, tmp12, tmp13);
      if (cResult[10] === tmp9) {
        if (cResult[11] === stateFromStores1) {
          let tmp15 = cResult[12];
        }
        return tmp15;
      }
      const obj3 = { available: tmp9, worldPoints: stateFromStores1 };
      cResult[10] = tmp9;
      cResult[11] = stateFromStores1;
      cResult[12] = obj3;
      tmp15 = obj3;
      const tmpResult4 = tmp(504);
    }
  }
  const fn2 = function v() {
    return {};
  };
  const items2 = [c5, channelId, stateFromStores];
  cResult[5] = c5;
  cResult[6] = channelId;
  cResult[7] = stateFromStores;
  cResult[8] = fn2;
  cResult[9] = items2;
  tmp13 = items2;
  tmp12 = fn2;
}) : ((arg0) => {
  ({ channelId, guildId } = arg0);
  const items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  const interactionsEnabled = GuildRoomsExperiment.useGuildRoomsExperiment({ guildId, location: "SpatialAudioPanel" }).interactionsEnabled;
  const obj3 = { available, worldPoints: null };
  const items1 = [GuildRoomStore];
  const items2 = [false, channelId, stateFromStores];
  obj3.worldPoints = initialize.useStateFromStores(items1, () => ({}), items2);
  return obj3;
});
