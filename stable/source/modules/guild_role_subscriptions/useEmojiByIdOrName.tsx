// Module ID: 15325
// Function ID: 15326
// Name: useEmojiByIdOrName
// Dependencies: [5540, 504, 2]
// Exports: default, useEmojiByIdOrName

// Module 15325 (useEmojiByIdOrName)
import EmojiStore from "EmojiStore" /* 5540 */;

const require = fn;
function useEmojiByIdOrName(guildId, emojiId) {
  _require = guildId;
  dependencyMap = emojiId;
  const items = [EmojiStore];
  const items1 = [guildId, emojiId];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_1) {
      return null;
    } else {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
      let byId = disambiguatedEmojiContext.getById(tmp);
      if (byId == null) {
        byId = disambiguatedEmojiContext.getByName(tmp);
      }
      return byId;
    }
  }, items1);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useEmojiByIdOrName.tsx");

export default useEmojiByIdOrName;
export { useEmojiByIdOrName };
