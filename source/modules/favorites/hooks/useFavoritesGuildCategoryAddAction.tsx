// Module ID: 12196
// Function ID: 12197
// Name: useFavoritesGuildCategoryAddAction
// Dependencies: [19, 676, 12197, 1913, 1236, 3047, 2]
// Exports: default

// Module 12196 (useFavoritesGuildCategoryAddAction)
import noop from "noop";
import { ChannelTypes } from "ME";

const require = arg1;
const result = require("openFavoritesGuildAddChannelModal").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  const _require = id;
  const items = [id.id];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[2])({ parentId: id.id, source: "favorites_add_to_category" });
  }, items);
  let obj = _require(1913);
  let tmp4 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      obj = { label: null, perform: null };
      const intl = _require(1236).intl;
      obj[0] = intl.string(importDefault(3047)["1QJmIL"]);
      obj[1] = callback;
      tmp4 = obj;
    }
  }
  return tmp4;
};
