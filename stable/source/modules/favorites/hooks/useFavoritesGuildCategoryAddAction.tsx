// Module ID: 11111
// Function ID: 11112
// Name: useFavoritesGuildCategoryAddAction
// Dependencies: [19, 1074, 11112, 1982, 1114, 3236, 2]
// Exports: default

// Module 11111 (useFavoritesGuildCategoryAddAction)
import _modDef3236 from "module_3236" /* 3236 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 11112 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  _require = id;
  const items = [id.id];
  const callback = noop.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ parentId: id.id, source: "favorites_add_to_category" });
  }, items);
  let tmp4 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      const obj2 = { label: null, perform: null };
      const intl = require("util").intl;
      obj2.label = intl.string(_modDef3236["1QJmIL"]);
      obj2.perform = callback;
      tmp4 = obj2;
    }
  }
  return tmp4;
};
