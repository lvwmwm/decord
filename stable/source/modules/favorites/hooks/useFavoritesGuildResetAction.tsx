// Module ID: 16481
// Function ID: 16482
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4609, 1074, 2019, 10521, 2066, 1101, 10520, 1115, 3356, 2]
// Exports: default

// Module 16481 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 2019 */;
import FavoritesUtils from "FavoritesUtils" /* 2066 */;
import _modDef3356 from "module_3356" /* 3356 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10520 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4609 */;

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
  obj2.label = intl.string(_modDef3356.YkET6R);
  const intl2 = tmp(1115).intl;
  obj2.subLabel = intl2.string(_modDef3356.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};
