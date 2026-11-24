// Module ID: 17697
// Function ID: 17698
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4950, 1071, 4742, 4791, 1098, 10597, 1112, 3804, 2]
// Exports: default

// Module 17697 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import intl3 from "intl" /* 1112 */;
import _modDef3804 from "module_3804" /* 3804 */;
import UserSettings from "UserSettings" /* 4742 */;
import FavoritesUtils from "FavoritesUtils" /* 4791 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10597 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;
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
  let obj = { isAvailable: setting, label: intl.string(_modDef3804.YkET6R), subLabel: intl2.string(_modDef3804.ZzcwNk), perform: callback };
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
