// Module ID: 16679
// Function ID: 16680
// Name: useEmojiByIdOrName
// Dependencies: [6757, 504, 2]
// Exports: default, useEmojiByIdOrName

// Module 16679 (useEmojiByIdOrName)
import EmojiStore from "EmojiStore" /* 6757 */;
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
