// Module ID: 14016
// Function ID: 106596
// Name: useEmojiByIdOrName
// Dependencies: []
// Exports: default, useEmojiByIdOrName

// Module 14016 (useEmojiByIdOrName)
function useEmojiByIdOrName(guildId, emojiId) {
  emojiId = guildId;
  const dependencyMap = emojiId;
  const items = [closure_2];
  const items1 = [guildId, emojiId];
  return emojiId(dependencyMap[1]).useStateFromStores(items, () => {
    if (null == arg1) {
      return null;
    } else {
      const disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(arg0);
      let byId = disambiguatedEmojiContext.getById(arg1);
      if (null == byId) {
        byId = disambiguatedEmojiContext.getByName(arg1);
      }
      return byId;
    }
  }, items1);
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_role_subscriptions/useEmojiByIdOrName.tsx");

export default useEmojiByIdOrName;
export { useEmojiByIdOrName };
