// Module ID: 7779
// Function ID: 62090
// Name: isContentInventoryFallbackEmbed
// Dependencies: []
// Exports: isContentInventoryFallbackEmbed

// Module 7779 (isContentInventoryFallbackEmbed)
const MessageEmbedFlags = require(dependencyMap[0]).MessageEmbedFlags;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  flags = flags.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  return require(dependencyMap[1]).hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};
