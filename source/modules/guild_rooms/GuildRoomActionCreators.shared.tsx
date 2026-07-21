// Module ID: 15923
// Function ID: 122083
// Name: _guildRoomConnect
// Dependencies: []
// Exports: createGuildRoomNote, deleteGuildRoomNote, fetchGuildRoom, guildRoomConnect, guildRoomDisconnect, guildRoomObjectUpdate, guildRoomToggleLayout, guildRoomUpdate, placePendingGuildRoomNote, selectGuildRoomLocalPosition, startPendingGuildRoomNote

// Module 15923 (_guildRoomConnect)
function _guildRoomConnect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _guildRoomConnect = obj;
  return obj(...arguments);
}
function _guildRoomDisconnect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _guildRoomDisconnect = obj;
  return obj(...arguments);
}
function _guildRoomUpdate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _guildRoomUpdate = obj;
  return obj(...arguments);
}
function guildRoomObjectCreate() {
  return _guildRoomObjectCreate(...arguments);
}
function _guildRoomObjectCreate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _guildRoomObjectCreate = obj;
  return obj(...arguments);
}
function _guildRoomObjectUpdate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _guildRoomObjectUpdate = obj;
  return obj(...arguments);
}
function guildRoomObjectDelete() {
  return _guildRoomObjectDelete(...arguments);
}
function _guildRoomObjectDelete() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _guildRoomObjectDelete = obj;
  return obj(...arguments);
}
function deletePendingGuildRoomNote(roomId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "GUILD_ROOM_PENDING_NOTE_DELETE", roomId };
  obj.dispatch(obj);
}
function _createGuildRoomNote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _createGuildRoomNote = obj;
  return obj(...arguments);
}
function _deleteGuildRoomNote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _deleteGuildRoomNote = obj;
  return obj(...arguments);
}
function _fetchGuildRoom() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchGuildRoom = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
let closure_7 = { max: -536870861, guildId: -299892737 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.shared.tsx");

export const guildRoomConnect = function guildRoomConnect() {
  return _guildRoomConnect(...arguments);
};
export const guildRoomDisconnect = function guildRoomDisconnect(arg0, arg1) {
  return _guildRoomDisconnect(...arguments);
};
export const guildRoomUpdate = function guildRoomUpdate() {
  return _guildRoomUpdate(...arguments);
};
export const selectGuildRoomLocalPosition = function selectGuildRoomLocalPosition(position) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "GUILD_ROOM_LOCAL_POSITION_REQUESTED", position };
  obj.dispatch(obj);
};
export const guildRoomToggleLayout = function guildRoomToggleLayout(channelId, clearLayout) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "GUILD_ROOM_TOGGLE_LAYOUT", roomId: channelId, clearLayout };
  obj.dispatch(obj);
};
export { guildRoomObjectCreate };
export const guildRoomObjectUpdate = function guildRoomObjectUpdate() {
  return _guildRoomObjectUpdate(...arguments);
};
export { guildRoomObjectDelete };
export const startPendingGuildRoomNote = function startPendingGuildRoomNote(roomId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "GUILD_ROOM_PENDING_NOTE_START", roomId };
  obj.dispatch(obj);
};
export const placePendingGuildRoomNote = function placePendingGuildRoomNote(roomId, position) {
  let obj = importDefault(dependencyMap[6]);
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
