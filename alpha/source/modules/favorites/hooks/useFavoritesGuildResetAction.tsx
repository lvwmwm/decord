// Module ID: 16541
// Function ID: 16542
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4648, 1074, 2020, 10567, 2067, 1101, 10566, 1115, 3358, 2]
// Exports: default

// Module 16541 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 2020 */;
import FavoritesUtils from "FavoritesUtils" /* 2067 */;
import _modDef3358 from "module_3358" /* 3358 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10566 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4648 */;

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
  obj2.label = intl.string(_modDef3358.YkET6R);
  const intl2 = tmp(1115).intl;
  obj2.subLabel = intl2.string(_modDef3358.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};
