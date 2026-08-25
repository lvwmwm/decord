// Module ID: 8850
// Function ID: 8851
// Name: getEmojiPickerDataRowItemNativeSection
// Dependencies: [8849, 2]
// Exports: default

// Module 8850 (getEmojiPickerDataRowItemNativeSection)
import set from "set" /* 2 */;
import useEmojiPickerData from "useEmojiPickerData" /* 8849 */;

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
