// Module ID: 15551
// Function ID: 15552
// Name: areGuildsBarFastListStatesEqual
// Dependencies: [2]
// Exports: default

// Module 15551 (areGuildsBarFastListStatesEqual)
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
