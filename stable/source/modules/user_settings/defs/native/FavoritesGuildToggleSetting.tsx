// Module ID: 15599
// Function ID: 15600
// Name: FavoritesGuildToggleSetting
// Dependencies: [8265, 11754, 1115, 3356, 10521, 15600, 10520, 2]

// Module 15599 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3356 from "module_3356" /* 3356 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10520 */;
import FavoritesHooks from "FavoritesHooks" /* 10521 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15600 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3356.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  usePredicate() {
    return FavoritesHooks.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
