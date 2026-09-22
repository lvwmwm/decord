// Module ID: 16458
// Function ID: 16459
// Name: useFavoritesGuildCategoryLongPress
// Dependencies: [19, 1074, 2067, 1115, 16459, 2]
// Exports: default

// Module 16458 (useFavoritesGuildCategoryLongPress)
import util from "util" /* 1115 */;
import FavoritesUtils from "FavoritesUtils" /* 2067 */;
import noop from "module_19" /* 19 */;

require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx");

export default function useFavoritesGuildCategoryLongPress(getGuildId) {
  let isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(getGuildId.getGuildId());
  if (isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = getGuildId.type === ChannelTypes.GUILD_CATEGORY;
  }
  require = isFavoritesGuildIdResult;
  const id = getGuildId.id;
  const items = [isFavoritesGuildIdResult, id];
  return noop.useMemo(() => {
    let tmp = null;
    if (isFavoritesGuildIdResult) {
      const obj = { label: null, perform: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.Xm41aV);
      obj.perform = function perform() {
        return id(dependencyMap[4])(closure_1_1);
      };
      tmp = obj;
    }
    return tmp;
  }, items);
};
