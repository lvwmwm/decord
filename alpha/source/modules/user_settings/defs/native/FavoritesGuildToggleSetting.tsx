// Module ID: 16607
// Function ID: 16608
// Name: FavoritesGuildToggleSetting
// Dependencies: [8592, 11817, 1112, 3703, 16608, 11099, 2]

// Module 16607 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3703 from "module_3703" /* 3703 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11099 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16608 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3703.OT1NK5);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
