// Module ID: 17145
// Function ID: 17146
// Name: GuildRoomSpatialAudio
// Dependencies: [502, 4995, 4999, 5000, 558, 576, 504, 5037, 2]
// Exports: computeLivingRoomWorldPoints, livingRoomWorldPointToMediaEnginePoint

// Module 17145 (GuildRoomSpatialAudio)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import GuildRoomsExperiment from "GuildRoomsExperiment" /* 5037 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildRoomStore from "GuildRoomStore" /* 4995 */;
import GuildRoomConstants from "GuildRoomConstants" /* 4999 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let GUILD_ROOM_SPATIAL_AUDIO_MODE;
let closure_4;
({ GUILD_ROOM_BACKGROUND_CONFIG: closure_4, GUILD_ROOM_SPATIAL_AUDIO_MODE } = GuildRoomConstants);
let c5 = false;
let closure_6 = { x: 50, y: 50 };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let guildId;
  let id;
  let mode;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(13);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== guildId) {
    const obj2 = { guildId, location: "SpatialAudioPanel" };
    cResult[2] = guildId;
    cResult[3] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult3 = GuildRoomsExperiment;
  const interactionsEnabled = tmpResult3.useGuildRoomsExperiment(tmp8).interactionsEnabled;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildRoomStore];
    cResult[4] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === available) {
    if (cResult[6] === channelId) {
      let tmp12;
      let tmp13;
      if (cResult[7] === stateFromStores) {
        tmp12 = cResult[8];
        tmp13 = cResult[9];
      }
      const tmpResult4 = get_initialized;
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12, tmp13);
      if (cResult[10] === available) {
        let tmp15;
        if (cResult[11] === stateFromStores1) {
          tmp15 = cResult[12];
        }
        return tmp15;
      }
      const obj3 = { available, worldPoints: stateFromStores1 };
      cResult[10] = available;
      cResult[11] = stateFromStores1;
      cResult[12] = obj3;
      tmp15 = obj3;
    }
  }
  const fn2 = function v() {
    return {};
  };
  const items2 = [available, channelId, stateFromStores];
  cResult[5] = available;
  cResult[6] = channelId;
  cResult[7] = stateFromStores;
  cResult[8] = fn2;
  cResult[9] = items2;
  tmp13 = items2;
  tmp12 = fn2;
}) : ((arg0) => {
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
});
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
export const useGuildRoomSpatialAudio = tmp3;
