// Module ID: 15717
// Function ID: 15718
// Name: areGuildsBarFastListStatesEqual
// Dependencies: [2]
// Exports: default

// Module 15717 (areGuildsBarFastListStatesEqual)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
