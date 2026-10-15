// Module ID: 9729
// Function ID: 9730
// Name: getEmojiPickerDataRowPremiumInlineRoadblock
// Dependencies: [9727, 2]
// Exports: default

// Module 9729 (getEmojiPickerDataRowPremiumInlineRoadblock)
import useEmojiPickerData from "useEmojiPickerData" /* 9727 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowPremiumInlineRoadblock.tsx");

export default function getEmojiPickerDataRowPremiumInlineRoadblock(position) {
  const obj = { type: useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK, position, isSectionNitroLocked: true };
  return obj;
};
