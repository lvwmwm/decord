// Module ID: 16457
// Function ID: 16458
// Name: useFavoritesGuildCategoryLongPress
// Dependencies: [19, 1078, 558, 568, 2070, 1119, 16458, 2]

// Module 16457 (useFavoritesGuildCategoryLongPress)
import util from "util" /* 1119 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import openFavoritesGuildCategoryActionSheetDefault from "openFavoritesGuildCategoryActionSheet" /* 16458 */;
import noop from "module_19" /* 19 */;

require = fn;
const ChannelTypes = fn(1078).ChannelTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId) => {
  const cResult = id(568).c(5);
  if (cResult[0] !== getGuildId) {
    let isFavoritesGuildIdResult = tmp(2070).isFavoritesGuildId(getGuildId.getGuildId());
    if (isFavoritesGuildIdResult) {
      isFavoritesGuildIdResult = getGuildId.type === ChannelTypes.GUILD_CATEGORY;
    }
    cResult[0] = getGuildId;
    cResult[1] = isFavoritesGuildIdResult;
    let tmp4 = isFavoritesGuildIdResult;
    const tmpResult = tmp(2070);
  } else {
    tmp4 = cResult[1];
  }
  id = getGuildId.id;
  if (cResult[2] === id) {
    if (cResult[3] === tmp4) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  let tmp8 = null;
  if (tmp4) {
    const obj2 = { label: null, perform: null };
    const intl = tmp(1119).intl;
    obj2.label = intl.string(tmp(1119).t.Xm41aV);
    obj2.perform = function perform() {
      return openFavoritesGuildCategoryActionSheetDefault(id);
    };
    tmp8 = obj2;
  }
  cResult[2] = id;
  cResult[3] = tmp4;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((getGuildId) => {
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
        return id(dependencyMap[6])(closure_1_1);
      };
      tmp = obj;
    }
    return tmp;
  }, items);
});
