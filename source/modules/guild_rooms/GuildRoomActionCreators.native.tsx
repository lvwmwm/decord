// Module ID: 16098
// Function ID: 124656
// Name: _guildRoomConnect
// Dependencies: [5, 16099, 2]
// Exports: guildRoomConnect, guildRoomUpdate

// Module 16098 (_guildRoomConnect)
import asyncGeneratorStep from "asyncGeneratorStep";

function _guildRoomConnect() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _guildRoomUpdate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.native.tsx");
for (const key10028 in require("_guildRoomConnect")) {
  let tmp3 = key10028;
  arg5[key10028] = require("_guildRoomConnect")[key10028];
  continue;
}

export const guildRoomConnect = function guildRoomConnect() {
  return _guildRoomConnect(...arguments);
};
export const guildRoomUpdate = function guildRoomUpdate() {
  return _guildRoomUpdate(...arguments);
};
