// Module ID: 10569
// Function ID: 10570
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [10567, 2]
// Exports: default

// Module 10569 (getEmojiPickerDataRowPremiumInlineRoadblock)
import useEmojiPickerData from "useEmojiPickerData" /* 10567 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  return { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
};
