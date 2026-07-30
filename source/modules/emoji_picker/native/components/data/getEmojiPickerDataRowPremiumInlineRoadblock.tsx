// Module ID: 9377
// Function ID: 9378
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [9375, 2]
// Exports: default

// Module 9377 (getEmojiPickerDataRowPremiumInlineRoadblock)
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: require(9375) /* useEmojiPickerData */.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};
