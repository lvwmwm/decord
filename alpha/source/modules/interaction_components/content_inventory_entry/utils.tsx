// Module ID: 8222
// Function ID: 8223
// Name: utils
// Dependencies: [1085, 1402, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 8222 (utils)
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1402 */;
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
