// Module ID: 10304
// Function ID: 10305
// Name: getEmojiPickerDataRowItemNativeSection
// Dependencies: [10303, 2]
// Exports: default

// Module 10304 (getEmojiPickerDataRowItemNativeSection)
import set from "set" /* 2 */;
import useEmojiPickerData from "useEmojiPickerData" /* 10303 */;

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
