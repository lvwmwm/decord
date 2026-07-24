// Module ID: 7881
// Function ID: 62483
// Name: isContentInventoryFallbackEmbed
// Dependencies: [653, 1360, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 7881 (isContentInventoryFallbackEmbed)
import { MessageEmbedFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  flags = flags.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  return require(1360) /* hasFlag */.hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};
