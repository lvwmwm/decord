// Module ID: 9155
// Function ID: 9156
// Name: getEmojiPickerDataRowItemNativeSection
// Dependencies: [9154, 2]
// Exports: default

// Module 9155 (getEmojiPickerDataRowItemNativeSection)
import set from "set" /* 2 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9154 */;

const result = set.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx");

export default function getEmojiPickerDataRowItemNativeSection(isSectionNitroLocked) {
  let flag = isSectionNitroLocked.isSectionNitroLocked;
  ({ label, guildId, emojiCount, emojisDisabled, emojisHidden } = isSectionNitroLocked);
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(emojisDisabled);
  }
  const obj = { type: useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION, title: label, guildId, emojiCount, emojisDisabled: items, emojisHidden: Array.from(emojisHidden), isSectionNitroLocked: flag, hasPremiumInlineRoadblockHeader: arg1, hasPremiumInlineRoadblockFooter: arg2 };
  return obj;
};
