// Module ID: 8626
// Function ID: 8627
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [8624, 2]
// Exports: default

// Module 8626 (getEmojiPickerDataRowPremiumInlineRoadblock)
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: require(8624) /* useEmojiPickerData */.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};
