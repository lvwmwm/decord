// Module ID: 17566
// Function ID: 17567
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 5002, 1087, 558, 576, 4799, 4848, 1114, 10842, 1128, 3412, 2]

// Module 17566 (useFavoritesGuildResetAction)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import router_utils from "router_utils" /* 1114 */;
import intl3 from "intl" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import UserSettings from "UserSettings" /* 4799 */;
import FavoritesUtils from "FavoritesUtils" /* 4848 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10842 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildResetAction() {
  let first;
  let guildId;
  let tmp11;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(5);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = FavoritesUtils;
      if (obj.isFavoritesGuildId(guildId.getGuildId())) {
        const tmpResult = router_utils;
        tmpResult.transitionTo(constants.ME);
      }
      const tmpResult2 = FavoritesActionCreators;
      tmpResult2.resetFavoritesGuild();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(_modDef3412.YkET6R);
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(_modDef3412.ZzcwNk);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    tmp7 = stringResult1;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (cResult[3] !== setting) {
    const obj2 = { isAvailable: setting, label: tmp6, subLabel: tmp7, perform: first };
    cResult[3] = setting;
    cResult[4] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[4];
  }
  return tmp11;
}) : (function useFavoritesGuildResetAction() {
  let callback;
  let guildId;
  let intl;
  let intl2;
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = { isAvailable: setting, label: intl.string(_modDef3412.YkET6R), subLabel: intl2.string(_modDef3412.ZzcwNk), perform: callback };
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
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default tmp2;
