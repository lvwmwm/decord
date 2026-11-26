// Module ID: 14980
// Function ID: 14981
// Name: DiscordLabsDefinitions
// Dependencies: [2]
// Exports: isDefinedLab

// Module 14980 (DiscordLabsDefinitions)
import size from "module_2" /* 2 */;

const items = [];
const set = new Set(items.map((labId) => labId.labId));
const result = size.fileFinishedImporting("modules/discord_labs/DiscordLabsDefinitions.tsx");

export function isDefinedLab(arg0) {
  return set.has(arg0);
}
