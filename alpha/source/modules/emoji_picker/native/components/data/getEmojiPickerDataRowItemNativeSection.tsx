// Module ID: 9507
// Function ID: 9508
// Name: getEmojiPickerDataRowItemNativeSection
// Dependencies: [9506, 2]
// Exports: default

// Module 9507 (getEmojiPickerDataRowItemNativeSection)
import useEmojiPickerData from "useEmojiPickerData" /* 9506 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx");

export default function getEmojiPickerDataRowItemNativeSection(isSectionNitroLocked, hasPremiumInlineRoadblockHeader, hasPremiumInlineRoadblockFooter) {
  let arr;
  let emojiCount;
  let emojisDisabled;
  let emojisHidden;
  let guildId;
  let items;
  let label;
  let flag = isSectionNitroLocked.isSectionNitroLocked;
  ({ label, guildId, emojiCount, emojisDisabled, emojisHidden } = isSectionNitroLocked);
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    items = [];
  } else {
    const _Array = Array;
    items = Array.from(emojisDisabled);
  }
  const obj = { type: useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION, title: label, guildId, emojiCount, emojisDisabled: items, emojisHidden: arr, isSectionNitroLocked: flag, hasPremiumInlineRoadblockHeader, hasPremiumInlineRoadblockFooter };
  arr = Array.from(emojisHidden);
  return obj;
};
