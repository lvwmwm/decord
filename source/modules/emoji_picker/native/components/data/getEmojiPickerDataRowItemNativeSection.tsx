// Module ID: 9356
// Function ID: 73005
// Name: getEmojiPickerDataRowItemNativeSection
// Dependencies: [9355, 2]
// Exports: default

// Module 9356 (getEmojiPickerDataRowItemNativeSection)
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx");

export default function getEmojiPickerDataRowItemNativeSection(isSectionNitroLocked, hasPremiumInlineRoadblockHeader, hasPremiumInlineRoadblockFooter) {
  let emojiCount;
  let emojisDisabled;
  let emojisHidden;
  let guildId;
  let label;
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
  const obj = { type: require(9355) /* useEmojiPickerData */.EmojiPickerItemType.NATIVE_SECTION, title: label, guildId, emojiCount, emojisDisabled: items, emojisHidden: Array.from(emojisHidden), isSectionNitroLocked: flag, hasPremiumInlineRoadblockHeader, hasPremiumInlineRoadblockFooter };
  return obj;
};
