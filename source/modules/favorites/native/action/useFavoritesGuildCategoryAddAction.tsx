// Module ID: 11856
// Function ID: 91839
// Name: useFavoritesGuildCategoryAddAction
// Dependencies: [5, 31, 653, 11857, 1935, 1841, 1212, 2945, 2]
// Exports: default

// Module 11856 (useFavoritesGuildCategoryAddAction)
import isFavoritesGuildId from "isFavoritesGuildId";
import result from "result";
import { ChannelTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryAddAction.tsx");

export default function useFavoritesGuildCategoryAddAction(id) {
  const _require = id;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [id.id];
  callback = React.useCallback(callback(tmp), items);
  let obj = _require(1841);
  let tmp3 = null;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp3 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      obj = {};
      const intl = _require(1212).intl;
      obj.label = intl.string(importDefault(2945)["1QJmIL"]);
      obj.perform = callback;
      tmp3 = obj;
    }
  }
  return tmp3;
};
