// Module ID: 9539
// Function ID: 9540
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [9537, 2]
// Exports: default

// Module 9539 (getEmojiPickerDataRowPremiumInlineRoadblock)
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: require(9537) /* useEmojiPickerData */.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};
