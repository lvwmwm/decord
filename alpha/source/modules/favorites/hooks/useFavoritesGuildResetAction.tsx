// Module ID: 15971
// Function ID: 15972
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4685, 1074, 2021, 9886, 2070, 1101, 9885, 1115, 3361, 2]
// Exports: default

// Module 15971 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 2021 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import _modDef3361 from "module_3361" /* 3361 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9885 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4685 */;

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
  obj2.label = intl.string(_modDef3361.YkET6R);
  const intl2 = tmp(1115).intl;
  obj2.subLabel = intl2.string(_modDef3361.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};
