// Module ID: 9357
// Function ID: 73007
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [9355, 2]
// Exports: default

// Module 9357 (getEmojiPickerDataRowPremiumInlineRoadblock)
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: require(9355) /* useEmojiPickerData */.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};
