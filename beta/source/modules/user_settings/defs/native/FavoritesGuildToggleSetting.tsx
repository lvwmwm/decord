// Module ID: 15585
// Function ID: 15586
// Name: FavoritesGuildToggleSetting
// Dependencies: [8238, 11594, 1119, 3328, 10606, 15586, 10605, 2]

// Module 15585 (FavoritesGuildToggleSetting)
import util from "util" /* 1119 */;
import _modDef3328 from "module_3328" /* 3328 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10605 */;
import FavoritesHooks from "FavoritesHooks" /* 10606 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15586 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3328.OT1NK5);
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
