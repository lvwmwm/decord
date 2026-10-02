// Module ID: 7570
// Function ID: 7571
// Name: utils
// Dependencies: [1086, 1391, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 7570 (utils)
import Constants from "Constants" /* 1086 */;
import FlagUtils from "FlagUtils" /* 1391 */;
import size from "module_2" /* 2 */;

const MessageEmbedFlags = Constants.MessageEmbedFlags;
const result = size.fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  return hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};
