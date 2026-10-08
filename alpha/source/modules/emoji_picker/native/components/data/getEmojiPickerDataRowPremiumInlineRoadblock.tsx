// Module ID: 9441
// Function ID: 9442
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [9439, 2]
// Exports: default

// Module 9441 (getEmojiPickerDataRowPremiumInlineRoadblock)
import useEmojiPickerData from "useEmojiPickerData" /* 9439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  const obj = { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
  return obj;
};
