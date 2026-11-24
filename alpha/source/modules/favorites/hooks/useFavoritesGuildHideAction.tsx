// Module ID: 17696
// Function ID: 17697
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 4950, 1071, 10597, 4791, 1098, 1112, 3804, 2]
// Exports: default

// Module 17696 (useFavoritesGuildHideAction)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import _modDef3804 from "module_3804" /* 3804 */;
import FavoritesUtils from "FavoritesUtils" /* 4791 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10597 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let callback;
  let guildId;
  let intl;
  let intl2;
  let obj = { label: intl.string(_modDef3804["8FO0y9"]), subLabel: intl2.string(_modDef3804.FaHxWl), perform: callback };
  callback = react.useCallback(() => {
    const obj = FavoritesActionCreators;
    const result = obj.setFavoritesGuildVisibility(false, "server_context_menu");
    const obj2 = FavoritesUtils;
    const tmp = require;
    const tmp2 = dependencyMap;
    if (obj2.isFavoritesGuildId(guildId.getGuildId())) {
      const tmpResult = tmp(tmp2[5]);
      tmpResult.transitionTo(constants.ME);
    }
  }, []);
  intl = intl3.intl;
  intl2 = intl3.intl;
  return obj;
};
