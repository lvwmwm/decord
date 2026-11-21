// Module ID: 14969
// Function ID: 14970
// Name: DiscordLabsDefinitions
// Dependencies: [2]
// Exports: isDefinedLab

// Module 14969 (DiscordLabsDefinitions)
import size from "module_2" /* 2 */;

const items = [];
const set = new Set(items.map((labId) => labId.labId));
const result = size.fileFinishedImporting("modules/discord_labs/DiscordLabsDefinitions.tsx");

export function isDefinedLab(arg0) {
  return set.has(arg0);
}
