// Module ID: 16565
// Function ID: 16566
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4650, 1074, 2020, 10572, 2069, 1101, 10571, 1115, 3360, 2]
// Exports: default

// Module 16565 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 2020 */;
import FavoritesUtils from "FavoritesUtils" /* 2069 */;
import _modDef3360 from "module_3360" /* 3360 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10571 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4650 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = UserSettings.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  const callback = noop.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      tmp(tmp2[6]).transitionTo(constants.ME);
      const tmpResult = tmp(tmp2[6]);
    }
    obj = FavoritesUtils;
    FavoritesActionCreators.resetFavoritesGuild();
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  const obj2 = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = tmp(1115).intl;
  obj2.label = intl.string(_modDef3360.YkET6R);
  const intl2 = tmp(1115).intl;
  obj2.subLabel = intl2.string(_modDef3360.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};
