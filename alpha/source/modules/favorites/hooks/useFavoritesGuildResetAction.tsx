// Module ID: 16478
// Function ID: 16479
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4577, 1074, 2019, 10482, 2066, 1101, 10481, 1115, 3324, 2]
// Exports: default

// Module 16478 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 2019 */;
import FavoritesUtils from "FavoritesUtils" /* 2066 */;
import _modDef3324 from "module_3324" /* 3324 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10481 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4577 */;

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
  obj2.label = intl.string(_modDef3324.YkET6R);
  const intl2 = tmp(1115).intl;
  obj2.subLabel = intl2.string(_modDef3324.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};
