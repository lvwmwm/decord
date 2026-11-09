// Module ID: 18503
// Function ID: 18504
// Name: useFavoritesGuildCategoryLongPress
// Dependencies: [19, 1072, 5014, 1113, 18504, 2]
// Exports: default

// Module 18503 (useFavoritesGuildCategoryLongPress)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FavoritesUtils from "FavoritesUtils" /* 5014 */;
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
