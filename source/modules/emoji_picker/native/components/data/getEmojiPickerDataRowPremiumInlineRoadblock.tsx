// Module ID: 9351
// Function ID: 73012
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: []
// Exports: default

// Module 9351 (getEmojiPickerDataRowPremiumInlineRoadblock)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: require(dependencyMap[0]).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};
