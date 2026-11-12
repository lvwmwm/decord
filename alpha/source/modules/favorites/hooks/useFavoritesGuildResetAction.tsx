// Module ID: 18728
// Function ID: 18729
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 5286, 1072, 5068, 5117, 1099, 10875, 1113, 3629, 2]
// Exports: default

// Module 18728 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import intl3 from "intl" /* 1113 */;
import _modDef3629 from "module_3629" /* 3629 */;
import UserSettings from "UserSettings" /* 5068 */;
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10875 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
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
  let obj = { isAvailable: setting, label: intl.string(_modDef3629.YkET6R), subLabel: intl2.string(_modDef3629.ZzcwNk), perform: callback };
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
