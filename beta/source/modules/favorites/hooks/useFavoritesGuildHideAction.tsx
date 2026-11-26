// Module ID: 17670
// Function ID: 17671
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 4946, 1071, 11224, 4787, 1098, 1112, 3802, 2]
// Exports: default

// Module 17670 (useFavoritesGuildHideAction)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11224 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let callback;
  let guildId;
  let intl;
  let intl2;
  let obj = { label: intl.string(_modDef3802["8FO0y9"]), subLabel: intl2.string(_modDef3802.FaHxWl), perform: callback };
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
