// Module ID: 14945
// Function ID: 113962
// Name: areGuildsBarFastListStatesEqual
// Dependencies: [2]
// Exports: default

// Module 14945 (areGuildsBarFastListStatesEqual)
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
