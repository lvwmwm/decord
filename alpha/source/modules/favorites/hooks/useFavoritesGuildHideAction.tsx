// Module ID: 18899
// Function ID: 18900
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 5343, 1072, 11897, 5184, 1099, 1113, 3681, 2]
// Exports: default

// Module 18899 (useFavoritesGuildHideAction)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import _modDef3681 from "module_3681" /* 3681 */;
import FavoritesUtils from "FavoritesUtils" /* 5184 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11897 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5343 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let callback;
  let guildId;
  let intl;
  let intl2;
  let obj = { label: intl.string(_modDef3681["8FO0y9"]), subLabel: intl2.string(_modDef3681.FaHxWl), perform: callback };
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
