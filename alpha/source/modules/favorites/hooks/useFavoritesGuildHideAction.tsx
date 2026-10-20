// Module ID: 17297
// Function ID: 17298
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 4971, 1087, 558, 576, 10638, 4825, 1114, 1128, 3402, 2]

// Module 17297 (useFavoritesGuildHideAction)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import _modDef3402 from "module_3402" /* 3402 */;
import FavoritesUtils from "FavoritesUtils" /* 4825 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10638 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const intl3 = tmp(1128);
const Routes = Constants.Routes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildHideAction() {
  let first;
  let guildId;
  let intl;
  let intl2;
  let tmp5;
  let tmp = require;
  let tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = FavoritesActionCreators;
      const result = obj.setFavoritesGuildVisibility(false, "server_context_menu");
      const obj2 = FavoritesUtils;
      const tmp = require;
      const tmp2 = dependencyMap;
      if (obj2.isFavoritesGuildId(guildId.getGuildId())) {
        const tmpResult = tmp(tmp2[7]);
        tmpResult.transitionTo(constants.ME);
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { label: intl.string(_modDef3402["8FO0y9"]), subLabel: intl2.string(_modDef3402.FaHxWl), perform: first };
    intl = intl3.intl;
    intl2 = intl3.intl;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useFavoritesGuildHideAction() {
  let callback;
  let guildId;
  let intl;
  let intl2;
  let obj = { label: intl.string(_modDef3402["8FO0y9"]), subLabel: intl2.string(_modDef3402.FaHxWl), perform: callback };
  callback = react.useCallback(() => {
    const obj = FavoritesActionCreators;
    const result = obj.setFavoritesGuildVisibility(false, "server_context_menu");
    const obj2 = FavoritesUtils;
    const tmp = require;
    const tmp2 = dependencyMap;
    if (obj2.isFavoritesGuildId(guildId.getGuildId())) {
      const tmpResult = tmp(tmp2[7]);
      tmpResult.transitionTo(constants.ME);
    }
  }, []);
  intl = intl3.intl;
  intl2 = intl3.intl;
  return obj;
});
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default tmp2;
