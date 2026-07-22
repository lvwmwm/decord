// Module ID: 15934
// Function ID: 122161
// Name: _guildRoomConnect
// Dependencies: []
// Exports: guildRoomConnect, guildRoomUpdate

// Module 15934 (_guildRoomConnect)
function _guildRoomConnect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _guildRoomConnect = obj;
  return obj(...arguments);
}
function _guildRoomUpdate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _guildRoomUpdate = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.native.tsx");
for (const key10028 in arg1(arg6[1])) {
  let tmp3 = key10028;
  arg5[key10028] = arg1(arg6[1])[key10028];
}

export const guildRoomConnect = function guildRoomConnect() {
  return _guildRoomConnect(...arguments);
};
export const guildRoomUpdate = function guildRoomUpdate() {
  return _guildRoomUpdate(...arguments);
};
