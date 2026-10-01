// Module ID: 10438
// Function ID: 10439
// Name: useFavoritesGuildCategoryAddAction
// Dependencies: [19, 1074, 10439, 2070, 1115, 3361, 2]
// Exports: default

// Module 10438 (useFavoritesGuildCategoryAddAction)
import Constants from "Constants" /* 1074 */;
import _modDef3361 from "module_3361" /* 3361 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 10439 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  let intl;
  _require = id;
  const items = [id.id];
  const callback = react.useCallback(() => {
    const obj = { parentId: id.id, source: "favorites_add_to_category" };
    openFavoritesGuildAddChannelModalDefault(obj);
  }, items);
  let obj = require("FavoritesUtils");
  let tmp4 = null;
  const tmp2 = _require;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      const obj2 = { label: intl.string(_modDef3361["1QJmIL"]), perform: callback };
      intl = tmp2(1115).intl;
      tmp4 = obj2;
    }
  }
  return tmp4;
};
