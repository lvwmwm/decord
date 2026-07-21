// Module ID: 14759
// Function ID: 111262
// Name: areGuildsBarFastListStatesEqual
// Dependencies: [284214097]
// Exports: default

// Module 14759 (areGuildsBarFastListStatesEqual)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
