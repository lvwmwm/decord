// Module ID: 17667
// Function ID: 17668
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4946, 1071, 4738, 4787, 1098, 11224, 1112, 3802, 2]
// Exports: default

// Module 17667 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import intl3 from "intl" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import UserSettings from "UserSettings" /* 4738 */;
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11224 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
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
  let obj = { isAvailable: setting, label: intl.string(_modDef3802.YkET6R), subLabel: intl2.string(_modDef3802.ZzcwNk), perform: callback };
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
