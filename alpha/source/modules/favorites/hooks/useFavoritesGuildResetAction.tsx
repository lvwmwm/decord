// Module ID: 17533
// Function ID: 17534
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4827, 1071, 4619, 4668, 1098, 11099, 1112, 3703, 2]
// Exports: default

// Module 17533 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import intl3 from "intl" /* 1112 */;
import _modDef3703 from "module_3703" /* 3703 */;
import UserSettings from "UserSettings" /* 4619 */;
import FavoritesUtils from "FavoritesUtils" /* 4668 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11099 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;
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
  let obj = { isAvailable: setting, label: intl.string(_modDef3703.YkET6R), subLabel: intl2.string(_modDef3703.ZzcwNk), perform: callback };
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
