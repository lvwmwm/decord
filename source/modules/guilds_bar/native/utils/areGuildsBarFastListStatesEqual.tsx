// Module ID: 16178
// Function ID: 16179
// Name: areGuildsBarFastListStatesEqual
// Dependencies: [2]
// Exports: default

// Module 16178 (areGuildsBarFastListStatesEqual)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
