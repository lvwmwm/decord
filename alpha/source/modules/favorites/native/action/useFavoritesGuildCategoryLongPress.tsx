// Module ID: 17498
// Function ID: 17499
// Name: useFavoritesGuildCategoryLongPress
// Dependencies: [19, 1087, 558, 576, 4846, 1128, 17499, 2]

// Module 17498 (useFavoritesGuildCategoryLongPress)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import FavoritesUtils from "FavoritesUtils" /* 4846 */;
import openFavoritesGuildCategoryActionSheetDefault from "openFavoritesGuildCategoryActionSheet" /* 17499 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildCategoryLongPress(getGuildId) {
  let id;
  let intl;
  let tmp4;
  const obj = id(576);
  const cResult = obj.c(5);
  if (cResult[0] !== getGuildId) {
    const tmpResult = id(4846);
    const isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(getGuildId.getGuildId()) && getGuildId.type === ChannelTypes.GUILD_CATEGORY;
    cResult[0] = getGuildId;
    cResult[1] = isFavoritesGuildIdResult;
    tmp4 = isFavoritesGuildIdResult;
  } else {
    tmp4 = cResult[1];
  }
  id = getGuildId.id;
  if (cResult[2] === id) {
    let tmp7;
    if (cResult[3] === tmp4) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  let tmp8 = null;
  if (tmp4) {
    const obj2 = {
      label: intl.string(id(1128).t.Xm41aV),
      perform() {
          return openFavoritesGuildCategoryActionSheetDefault(id);
        }
    };
    intl = tmp(1128).intl;
    tmp8 = obj2;
  }
  cResult[2] = id;
  cResult[3] = tmp4;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function useFavoritesGuildCategoryLongPress(getGuildId) {
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
            return id(dependencyMap[6])(closure_1_1);
          }
      };
      intl = intl2.intl;
      tmp = obj;
    }
    return tmp;
  }, items);
});
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx");

export default tmp2;
