// Module ID: 16099
// Function ID: 124665
// Name: _guildRoomConnect
// Dependencies: [5, 1194, 16096, 653, 507, 12737, 686, 16100, 9312, 9319, 12738, 2]
// Exports: createGuildRoomNote, deleteGuildRoomNote, fetchGuildRoom, guildRoomConnect, guildRoomDisconnect, guildRoomLocalDisconnect, guildRoomObjectUpdate, guildRoomToggleLayout, guildRoomUpdate, placePendingGuildRoomNote, selectGuildRoomLocalPosition, startPendingGuildRoomNote

// Module 16099 (_guildRoomConnect)
import mapGuildRoomBaseObjectFields from "mapGuildRoomBaseObjectFields";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _guildRoomConnect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _guildRoomDisconnect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _guildRoomUpdate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function guildRoomObjectCreate() {
  return _guildRoomObjectCreate(...arguments);
}
function _guildRoomObjectCreate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _guildRoomObjectUpdate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function guildRoomObjectDelete() {
  return _guildRoomObjectDelete(...arguments);
}
function _guildRoomObjectDelete() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function deletePendingGuildRoomNote(roomId) {
  let obj = importDefault(686);
  obj = { type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId };
  obj.dispatch(obj);
}
function _createGuildRoomNote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteGuildRoomNote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchGuildRoom() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_7 = { x: 0, y: 0 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.shared.tsx");

export const guildRoomConnect = function guildRoomConnect() {
  return _guildRoomConnect(...arguments);
};
export const guildRoomDisconnect = function guildRoomDisconnect(arg0, arg1) {
  return _guildRoomDisconnect(...arguments);
};
export const guildRoomLocalDisconnect = function guildRoomLocalDisconnect(userId, oldChannelId) {
  let obj = importDefault(686);
  obj = { type: "GUILD_ROOM_DISCONNECT", userId, roomId: oldChannelId };
  obj.dispatch(obj);
};
export const guildRoomUpdate = function guildRoomUpdate() {
  return _guildRoomUpdate(...arguments);
};
export const selectGuildRoomLocalPosition = function selectGuildRoomLocalPosition(position) {
  let obj = importDefault(686);
  obj = { type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position };
  obj.dispatch(obj);
};
export const guildRoomToggleLayout = function guildRoomToggleLayout(channelId, clearLayout) {
  let obj = importDefault(686);
  obj = { type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: channelId, clearLayout };
  obj.dispatch(obj);
};
export { guildRoomObjectCreate };
export const guildRoomObjectUpdate = function guildRoomObjectUpdate() {
  return _guildRoomObjectUpdate(...arguments);
};
export { guildRoomObjectDelete };
export const startPendingGuildRoomNote = function startPendingGuildRoomNote(roomId) {
  let obj = importDefault(686);
  obj = { type: "GUILD_ROOM_PENDING_NOTE_START", roomId };
  obj.dispatch(obj);
};
export const placePendingGuildRoomNote = function placePendingGuildRoomNote(roomId, position) {
  let obj = importDefault(686);
  obj = { type: "GUILD_ROOM_PENDING_NOTE_PLACE", roomId, position };
  obj.dispatch(obj);
};
export { deletePendingGuildRoomNote };
export const createGuildRoomNote = function createGuildRoomNote() {
  return _createGuildRoomNote(...arguments);
};
export const deleteGuildRoomNote = function deleteGuildRoomNote() {
  return _deleteGuildRoomNote(...arguments);
};
export const fetchGuildRoom = function fetchGuildRoom() {
  return _fetchGuildRoom(...arguments);
};
