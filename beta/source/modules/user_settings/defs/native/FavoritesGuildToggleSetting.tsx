// Module ID: 15595
// Function ID: 15596
// Name: FavoritesGuildToggleSetting
// Dependencies: [8270, 11630, 1119, 3360, 10642, 15596, 10641, 2]

// Module 15595 (FavoritesGuildToggleSetting)
import util from "util" /* 1119 */;
import _modDef3360 from "module_3360" /* 3360 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10641 */;
import FavoritesHooks from "FavoritesHooks" /* 10642 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15596 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3360.OT1NK5);
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
