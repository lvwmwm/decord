// Module ID: 14180
// Function ID: 109075
// Name: useEmojiByIdOrName
// Dependencies: [4991, 566, 2]
// Exports: default, useEmojiByIdOrName

// Module 14180 (useEmojiByIdOrName)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function useEmojiByIdOrName(guildId, emojiId) {
  const _require = guildId;
  const dependencyMap = emojiId;
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId, emojiId];
  return _require(566).useStateFromStores(items, () => {
    if (null == closure_1) {
      return null;
    } else {
      const disambiguatedEmojiContext = outer1_2.getDisambiguatedEmojiContext(closure_0);
      let byId = disambiguatedEmojiContext.getById(closure_1);
      if (null == byId) {
        byId = disambiguatedEmojiContext.getByName(closure_1);
      }
      return byId;
    }
  }, items1);
}
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useEmojiByIdOrName.tsx");

export default useEmojiByIdOrName;
export { useEmojiByIdOrName };
