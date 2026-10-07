// Module ID: 9907
// Function ID: 9908
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [9905, 2]
// Exports: default

// Module 9907 (getEmojiPickerDataRowPremiumInlineRoadblock)
import useEmojiPickerData from "useEmojiPickerData" /* 9905 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  const obj = { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
  return obj;
};
