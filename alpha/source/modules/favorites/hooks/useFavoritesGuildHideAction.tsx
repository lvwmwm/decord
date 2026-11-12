// Module ID: 18727
// Function ID: 18728
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 5286, 1072, 10875, 5117, 1099, 1113, 3629, 2]
// Exports: default

// Module 18727 (useFavoritesGuildHideAction)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import _modDef3629 from "module_3629" /* 3629 */;
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10875 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let callback;
  let guildId;
  let intl;
  let intl2;
  let obj = { label: intl.string(_modDef3629["8FO0y9"]), subLabel: intl2.string(_modDef3629.FaHxWl), perform: callback };
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
