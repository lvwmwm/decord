// Module ID: 14871
// Function ID: 14872
// Name: FavoritesGuildToggleSetting
// Dependencies: [7417, 11006, 1115, 3361, 9685, 14872, 9684, 2]

// Module 14871 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1115 */;
import _modDef3361 from "module_3361" /* 3361 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 14872 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3361.OT1NK5);
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
