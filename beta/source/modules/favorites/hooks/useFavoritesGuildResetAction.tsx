// Module ID: 15771
// Function ID: 15772
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4655, 1074, 2021, 9685, 2070, 1101, 9684, 1115, 3361, 2]
// Exports: default

// Module 15771 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import UserSettings from "UserSettings" /* 2021 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import _modDef3361 from "module_3361" /* 3361 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  let guildId;
  let intl;
  let intl2;
  const DeveloperMode = UserSettings.DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let obj = FavoritesHooks;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  const callback = react.useCallback(() => {
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      const tmpResult = router_utils;
      tmpResult.transitionTo(constants.ME);
    }
    const tmpResult2 = FavoritesActionCreators;
    tmpResult2.resetFavoritesGuild();
  }, []);
  if (setting) {
    setting = hasAccess;
  }
  const obj2 = { isAvailable: setting, label: intl.string(_modDef3361.YkET6R), subLabel: intl2.string(_modDef3361.ZzcwNk), perform: callback };
  intl = tmp(1115).intl;
  intl2 = tmp(1115).intl;
  return obj2;
};
