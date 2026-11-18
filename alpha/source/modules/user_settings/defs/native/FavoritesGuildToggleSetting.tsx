// Module ID: 16790
// Function ID: 16791
// Name: FavoritesGuildToggleSetting
// Dependencies: [8624, 11897, 1113, 3701, 16791, 11179, 2]

// Module 16790 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3701 from "module_3701" /* 3701 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11179 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16791 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3701.OT1NK5);
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
