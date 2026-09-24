// Module ID: 16488
// Function ID: 16489
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4612, 1078, 558, 568, 2023, 10642, 2070, 1105, 10641, 1119, 3360, 2]

// Module 16488 (useFavoritesGuildResetAction)
import c from "c" /* 568 */;
import UserSettings from "UserSettings" /* 2023 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import _modDef3360 from "module_3360" /* 3360 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10641 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4612 */;

require = fn;
const Routes = fn(1078).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const DeveloperMode = UserSettings.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      if (obj.isFavoritesGuildId(guildId.getGuildId())) {
        tmp(tmp2[8]).transitionTo(constants.ME);
        const tmpResult = tmp(tmp2[8]);
      }
      obj = FavoritesUtils;
      FavoritesActionCreators.resetFavoritesGuild();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (hasAccess) {
    hasAccess = obj2.useFavoritesAccess().hasAccess;
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(_modDef3360.YkET6R);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(_modDef3360.ZzcwNk);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    let tmp6 = stringResult1;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  if (cResult[3] !== hasAccess) {
    const obj3 = { isAvailable: hasAccess, label: tmp5, subLabel: tmp6, perform: first };
    cResult[3] = hasAccess;
    cResult[4] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (() => {
  const DeveloperMode = UserSettings.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  const callback = noop.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      tmp(tmp2[8]).transitionTo(constants.ME);
      const tmpResult = tmp(tmp2[8]);
    }
    obj = FavoritesUtils;
    FavoritesActionCreators.resetFavoritesGuild();
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  const obj2 = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = tmp(1119).intl;
  obj2.label = intl.string(_modDef3360.YkET6R);
  const intl2 = tmp(1119).intl;
  obj2.subLabel = intl2.string(_modDef3360.ZzcwNk);
  obj2.perform = callback;
  return obj2;
});
