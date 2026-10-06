// Module ID: 14859
// Function ID: 14860
// Name: FavoritesGuildToggleSetting
// Dependencies: [7421, 10874, 1127, 3364, 9807, 14860, 9806, 2]

// Module 14859 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1127 */;
import _modDef3364 from "module_3364" /* 3364 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9806 */;
import FavoritesHooks from "FavoritesHooks" /* 9807 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 14860 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3364.OT1NK5);
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
