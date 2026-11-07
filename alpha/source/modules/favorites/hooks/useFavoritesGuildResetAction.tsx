// Module ID: 18519
// Function ID: 18520
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 5171, 1072, 4965, 5014, 1099, 10950, 1113, 3608, 2]
// Exports: default

// Module 18519 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import intl3 from "intl" /* 1113 */;
import _modDef3608 from "module_3608" /* 3608 */;
import UserSettings from "UserSettings" /* 4965 */;
import FavoritesUtils from "FavoritesUtils" /* 5014 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10950 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;
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
  let obj = { isAvailable: setting, label: intl.string(_modDef3608.YkET6R), subLabel: intl2.string(_modDef3608.ZzcwNk), perform: callback };
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
