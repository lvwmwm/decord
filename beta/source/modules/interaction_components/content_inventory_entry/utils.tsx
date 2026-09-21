// Module ID: 8383
// Function ID: 8384
// Name: utils
// Dependencies: [1078, 1389, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 8383 (utils)
import Constants from "Constants" /* 1078 */;
import FlagUtils from "FlagUtils" /* 1389 */;
import size from "module_2" /* 2 */;

const MessageEmbedFlags = Constants.MessageEmbedFlags;
const result = size.fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return FlagUtils.hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};
