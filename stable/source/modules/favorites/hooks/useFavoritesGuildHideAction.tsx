// Module ID: 16235
// Function ID: 16236
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 4458, 1074, 10353, 10352, 1982, 1100, 1114, 3236, 2]
// Exports: default

// Module 16235 (useFavoritesGuildHideAction)
import router_utils from "router_utils" /* 1100 */;
import _modDef3236 from "module_3236" /* 3236 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10352 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  hasAccess = hasAccess(10353).useFavoritesAccess().hasAccess;
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
  const intl = hasAccess(1114).intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3236["8FO0y9"];
  } else {
    ojM1xJ = tmp(1114).t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1114).intl;
    stringResult = intl2.string(_modDef3236.FaHxWl);
  }
  obj2.subLabel = stringResult;
  obj2.perform = callback;
  return obj2;
};
