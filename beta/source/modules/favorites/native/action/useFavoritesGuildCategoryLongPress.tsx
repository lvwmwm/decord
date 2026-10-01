// Module ID: 15740
// Function ID: 15741
// Name: useFavoritesGuildCategoryLongPress
// Dependencies: [19, 1074, 2070, 1115, 15741, 2]
// Exports: default

// Module 15740 (useFavoritesGuildCategoryLongPress)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx");

export default function useFavoritesGuildCategoryLongPress(getGuildId) {
  let obj = FavoritesUtils;
  let isFavoritesGuildIdResult = obj.isFavoritesGuildId(getGuildId.getGuildId());
  if (isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = getGuildId.type === ChannelTypes.GUILD_CATEGORY;
  }
  require = isFavoritesGuildIdResult;
  const id = getGuildId.id;
  const items = [isFavoritesGuildIdResult, id];
  return react.useMemo(() => {
    let intl;
    let tmp = null;
    if (require) {
      const obj = {
        label: intl.string(intl2.t.Xm41aV),
        perform() {
            return id(dependencyMap[4])(closure_1_1);
          }
      };
      intl = intl2.intl;
      tmp = obj;
    }
    return tmp;
  }, items);
};
