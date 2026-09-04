// Module ID: 15165
// Function ID: 15166
// Name: useEmojiByIdOrName
// Dependencies: [5419, 586, 2]
// Exports: default, useEmojiByIdOrName

// Module 15165 (useEmojiByIdOrName)
import closure_2 from "getEmojiToGroupId" /* 5419 */;

const require = arg1;
function useEmojiByIdOrName(guildId, emojiId) {
  const _require = guildId;
  dependencyMap = emojiId;
  const items = [closure_2];
  const items1 = [guildId, emojiId];
  return _require(586).useStateFromStores(items, () => {
    if (null == closure_1) {
      return null;
    } else {
      const disambiguatedEmojiContext = closure_1_2.getDisambiguatedEmojiContext(closure_0);
      let byId = disambiguatedEmojiContext.getById(tmp);
      if (byId == null) {
        byId = disambiguatedEmojiContext.getByName(tmp);
      }
      return byId;
    }
  }, items1);
}
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useEmojiByIdOrName.tsx");

export default useEmojiByIdOrName;
export { useEmojiByIdOrName };
