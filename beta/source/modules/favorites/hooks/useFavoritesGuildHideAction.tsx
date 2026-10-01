// Module ID: 15770
// Function ID: 15771
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 4655, 1074, 9685, 9684, 2070, 1101, 1115, 3361, 2]
// Exports: default

// Module 15770 (useFavoritesGuildHideAction)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import _modDef3361 from "module_3361" /* 3361 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let callback;
  let hasAccess;
  let ojM1xJ;
  let string;
  let stringResult;
  let tmp = hasAccess;
  let obj = hasAccess(9685);
  hasAccess = obj.useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  let obj2 = { isPreview: !hasAccess, label: string(ojM1xJ), subLabel: stringResult, perform: callback };
  callback = react.useCallback(() => {
    const tmp = hasAccess;
    if (tmp) {
      const obj = FavoritesActionCreators;
      const result = obj.setFavoritesGuildVisibility(false, "server_context_menu");
    }
    const obj2 = FavoritesUtils;
    if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
      const obj3 = router_utils;
      obj3.transitionTo(Routes.ME);
    }
  }, items);
  const intl = hasAccess(1115).intl;
  string = intl.string;
  if (hasAccess) {
    ojM1xJ = _modDef3361["8FO0y9"];
  } else {
    ojM1xJ = tmp(1115).t.ojM1xJ;
  }
  stringResult = undefined;
  if (hasAccess) {
    const intl2 = tmp(1115).intl;
    stringResult = intl2.string(_modDef3361.FaHxWl);
  }
  return obj2;
};
