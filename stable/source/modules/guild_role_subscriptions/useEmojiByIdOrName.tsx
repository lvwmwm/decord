// Module ID: 17586
// Function ID: 17587
// Name: useEmojiByIdOrName
// Dependencies: [6884, 504, 2]
// Exports: default, useEmojiByIdOrName

// Module 17586 (useEmojiByIdOrName)
import EmojiStore from "EmojiStore" /* 6884 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function useEmojiByIdOrName(guildId, emojiId) {
  _require = guildId;
  dependencyMap = emojiId;
  const items = [EmojiStore];
  const items1 = [guildId, emojiId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == emojiId) {
      return null;
    } else {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
      let byId = disambiguatedEmojiContext.getById(tmp);
      if (byId == null) {
        byId = disambiguatedEmojiContext.getByName(tmp);
      }
      return byId;
    }
  }, items1);
}
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useEmojiByIdOrName.tsx");

export default useEmojiByIdOrName;
export { useEmojiByIdOrName };
