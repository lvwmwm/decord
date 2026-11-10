// Module ID: 17665
// Function ID: 17666
// Name: FavoritesGuildToggleSetting
// Dependencies: [8507, 11694, 1113, 3608, 17666, 10959, 2]

// Module 17665 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3608 from "module_3608" /* 3608 */;
import SettingsConstants from "SettingsConstants" /* 8507 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10959 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17666 */;
import SettingBuilders from "SettingBuilders" /* 11694 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3608.OT1NK5);
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
