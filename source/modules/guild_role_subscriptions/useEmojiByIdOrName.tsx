// Module ID: 14477
// Function ID: 14478
// Name: useEmojiByIdOrName
// Dependencies: [5176, 589, 2]
// Exports: default, useEmojiByIdOrName

// Module 14477 (useEmojiByIdOrName)
import getEmojiToGroupId from "getEmojiToGroupId";

const require = arg1;
function useEmojiByIdOrName(guildId, emojiId) {
  const _require = guildId;
  const dependencyMap = emojiId;
  const items = [getEmojiToGroupId];
  const items1 = [guildId, emojiId];
  return _require(589).useStateFromStores(items, () => {
    if (null == closure_1) {
      return null;
    } else {
      const disambiguatedEmojiContext = outer1_2.getDisambiguatedEmojiContext(closure_0);
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
