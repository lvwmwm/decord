// Module ID: 18140
// Function ID: 18141
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 5040, 1072, 10811, 4883, 1100, 1114, 3447, 2]
// Exports: default

// Module 18140 (useFavoritesGuildHideAction)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10811 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let callback;
  let guildId;
  let intl;
  let intl2;
  let obj = { label: intl.string(_modDef3447["8FO0y9"]), subLabel: intl2.string(_modDef3447.FaHxWl), perform: callback };
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
