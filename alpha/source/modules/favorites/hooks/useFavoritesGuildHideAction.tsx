// Module ID: 16564
// Function ID: 16565
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 4650, 1074, 10572, 10571, 2069, 1101, 1115, 3360, 2]
// Exports: default

// Module 16564 (useFavoritesGuildHideAction)
import router_utils from "router_utils" /* 1101 */;
import _modDef3360 from "module_3360" /* 3360 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10571 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4650 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  hasAccess = hasAccess(10572).useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  const obj2 = { isPreview: !hasAccess, label: null, subLabel: null, perform: null };
  const callback = noop.useCallback(() => {
    if (hasAccess) {
      const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
    }
    if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
      router_utils.transitionTo(Routes.ME);
    }
  }, items);
  const intl = hasAccess(1115).intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3360["8FO0y9"];
  } else {
    ojM1xJ = tmp(1115).t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1115).intl;
    stringResult = intl2.string(_modDef3360.FaHxWl);
  }
  obj2.subLabel = stringResult;
  obj2.perform = callback;
  return obj2;
};
