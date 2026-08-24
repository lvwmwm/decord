// Module ID: 9408
// Function ID: 9409
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [9406, 2]
// Exports: default

// Module 9408 (getEmojiPickerDataRowPremiumInlineRoadblock)
import set from "set" /* 2 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9406 */;

const result = set.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};
