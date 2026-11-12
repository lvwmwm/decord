// Module ID: 17825
// Function ID: 17826
// Name: FavoritesGuildToggleSetting
// Dependencies: [9135, 12311, 1113, 3629, 17826, 10875, 2]

// Module 17825 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3629 from "module_3629" /* 3629 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10875 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17826 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3629.OT1NK5);
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
