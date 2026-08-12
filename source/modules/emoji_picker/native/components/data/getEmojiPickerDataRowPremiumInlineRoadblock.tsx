// Module ID: 8749
// Function ID: 8750
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [8747, 2]
// Exports: default

// Module 8749 (getEmojiPickerDataRowPremiumInlineRoadblock)
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: require(8747) /* useEmojiPickerData */.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};
