// Module ID: 9326
// Function ID: 72889
// Name: getTopAndNewlyAddedEmojis
// Dependencies: []
// Exports: default

// Module 9326 (getTopAndNewlyAddedEmojis)
function getTopAndNewlyAddedEmojis(emojiStoreInstance) {
  let guildId;
  let pickerIntention;
  emojiStoreInstance = emojiStoreInstance.emojiStoreInstance;
  if (emojiStoreInstance === undefined) {
    emojiStoreInstance = closure_2;
  }
  ({ guildId, pickerIntention } = emojiStoreInstance);
  const obj = {};
  if (pickerIntention !== EmojiIntention.REACTION) {
    let topEmoji = emojiStoreInstance.getTopEmoji(guildId);
  } else {
    topEmoji = closure_4;
  }
  obj.topEmojis = topEmoji;
  if (pickerIntention !== EmojiIntention.REACTION) {
    let newlyAddedEmoji = emojiStoreInstance.getNewlyAddedEmoji(guildId);
  } else {
    newlyAddedEmoji = closure_4;
  }
  obj.newlyAddedEmojis = newlyAddedEmoji;
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
const EmojiIntention = arg1(dependencyMap[1]).EmojiIntention;
let closure_4 = [];
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx");

export default function useTopAndNewlyAddedEmojis(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg0, arg1];
  return arg1(dependencyMap[2]).useStateFromStoresObject(items, () => callback({ emojiStoreInstance: closure_2, guildId: arg0, pickerIntention: arg1 }), items1);
};
export { getTopAndNewlyAddedEmojis };
