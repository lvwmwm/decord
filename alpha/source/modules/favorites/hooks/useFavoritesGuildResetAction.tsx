// Module ID: 18141
// Function ID: 18142
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 5040, 1072, 4834, 4883, 1100, 10811, 1114, 3447, 2]
// Exports: default

// Module 18141 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import intl3 from "intl" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import UserSettings from "UserSettings" /* 4834 */;
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10811 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
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
  let obj = { isAvailable: setting, label: intl.string(_modDef3447.YkET6R), subLabel: intl2.string(_modDef3447.ZzcwNk), perform: callback };
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
