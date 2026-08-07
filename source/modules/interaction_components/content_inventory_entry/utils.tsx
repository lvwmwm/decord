// Module ID: 8152
// Function ID: 8153
// Name: isContentInventoryFallbackEmbed
// Dependencies: [676, 1384, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 8152 (isContentInventoryFallbackEmbed)
import { MessageEmbedFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return require(1384) /* hasFlag */.hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};
