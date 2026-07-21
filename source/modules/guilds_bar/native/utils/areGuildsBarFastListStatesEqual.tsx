// Module ID: 14762
// Function ID: 111296
// Name: areGuildsBarFastListStatesEqual
// Dependencies: []
// Exports: default

// Module 14762 (areGuildsBarFastListStatesEqual)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
