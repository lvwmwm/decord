// Module ID: 17872
// Function ID: 17873
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 5076, 1071, 4868, 4917, 1098, 10742, 1112, 3857, 2]
// Exports: default

// Module 17872 (useFavoritesGuildResetAction)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import intl3 from "intl" /* 1112 */;
import _modDef3857 from "module_3857" /* 3857 */;
import UserSettings from "UserSettings" /* 4868 */;
import FavoritesUtils from "FavoritesUtils" /* 4917 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10742 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;
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
  let obj = { isAvailable: setting, label: intl.string(_modDef3857.YkET6R), subLabel: intl2.string(_modDef3857.ZzcwNk), perform: callback };
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
