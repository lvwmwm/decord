// Module ID: 14752
// Function ID: 111238
// Name: areGuildsBarFastListStatesEqual
// Dependencies: []
// Exports: default

// Module 14752 (areGuildsBarFastListStatesEqual)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
