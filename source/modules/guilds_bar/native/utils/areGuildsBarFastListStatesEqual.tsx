// Module ID: 15353
// Function ID: 15354
// Name: areGuildsBarFastListStatesEqual
// Dependencies: [2]
// Exports: default

// Module 15353 (areGuildsBarFastListStatesEqual)
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
