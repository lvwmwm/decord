// Module ID: 11519
// Function ID: 11520
// Name: useFavoritesGuildCategoryAddAction
// Dependencies: [19, 1071, 11520, 4917, 1112, 3857, 2]
// Exports: default

// Module 11519 (useFavoritesGuildCategoryAddAction)
import Constants from "Constants" /* 1071 */;
import _modDef3857 from "module_3857" /* 3857 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 11520 */;
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
      const obj2 = { label: intl.string(_modDef3857["1QJmIL"]), perform: callback };
      intl = tmp2(1112).intl;
      tmp4 = obj2;
    }
  }
  return tmp4;
};
