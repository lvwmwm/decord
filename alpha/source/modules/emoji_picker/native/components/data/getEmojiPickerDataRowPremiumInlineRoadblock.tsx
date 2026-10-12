// Module ID: 9509
// Function ID: 9510
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [9507, 2]
// Exports: default

// Module 9509 (getEmojiPickerDataRowPremiumInlineRoadblock)
import useEmojiPickerData from "useEmojiPickerData" /* 9507 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  const obj = { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
  return obj;
};
