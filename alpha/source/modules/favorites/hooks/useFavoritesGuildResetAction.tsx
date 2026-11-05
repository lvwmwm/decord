// Module ID: 18482
// Function ID: 18483
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 5174, 1072, 4968, 5017, 1099, 11015, 1113, 3577, 2]
// Exports: default

// Module 18482 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import intl3 from "intl" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import UserSettings from "UserSettings" /* 4968 */;
import FavoritesUtils from "FavoritesUtils" /* 5017 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11015 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5174 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  let callback;
  let guildId;
  let intl;
  let intl2;
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { isAvailable: setting, label: intl.string(_modDef3577.YkET6R), subLabel: intl2.string(_modDef3577.ZzcwNk), perform: callback };
  callback = react.useCallback(() => {
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      const tmpResult = router_utils;
      tmpResult.transitionTo(constants.ME);
    }
    const tmpResult2 = FavoritesActionCreators;
    tmpResult2.resetFavoritesGuild();
  }, []);
  intl = intl3.intl;
  intl2 = intl3.intl;
  return obj;
};
