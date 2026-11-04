// Module ID: 18452
// Function ID: 18453
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 5172, 1072, 4966, 5015, 1099, 11009, 1113, 3577, 2]
// Exports: default

// Module 18452 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import intl3 from "intl" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import UserSettings from "UserSettings" /* 4966 */;
import FavoritesUtils from "FavoritesUtils" /* 5015 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11009 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
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
