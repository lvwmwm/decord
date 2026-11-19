// Module ID: 17706
// Function ID: 17707
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4825, 1072, 4617, 4666, 1099, 11157, 1113, 3701, 2]
// Exports: default

// Module 17706 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import intl3 from "intl" /* 1113 */;
import _modDef3701 from "module_3701" /* 3701 */;
import UserSettings from "UserSettings" /* 4617 */;
import FavoritesUtils from "FavoritesUtils" /* 4666 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11157 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4825 */;
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
  let obj = { isAvailable: setting, label: intl.string(_modDef3701.YkET6R), subLabel: intl2.string(_modDef3701.ZzcwNk), perform: callback };
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
