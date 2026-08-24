// Module ID: 8362
// Function ID: 8363
// Name: isContentInventoryFallbackEmbed
// Dependencies: [676, 1403, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 8362 (isContentInventoryFallbackEmbed)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlag from "hasFlag" /* 1403 */;

const MessageEmbedFlags = ME.MessageEmbedFlags;
const result = set.fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return hasFlag.hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};
