// Module ID: 15534
// Function ID: 15535
// Name: FavoritesGuildToggleSetting
// Dependencies: [7974, 10629, 1126, 3439, 10279, 15535, 10278, 2]

// Module 15534 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1126 */;
import _modDef3439 from "module_3439" /* 3439 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10278 */;
import FavoritesHooks from "FavoritesHooks" /* 10279 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15535 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3439.OT1NK5);
  },
  parent: MobileUserSettings.APPEARANCE,
  usePredicate() {
    const obj = FavoritesHooks;
    return obj.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
