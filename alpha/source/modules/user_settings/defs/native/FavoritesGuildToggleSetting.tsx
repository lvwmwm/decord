// Module ID: 17988
// Function ID: 17989
// Name: FavoritesGuildToggleSetting
// Dependencies: [9213, 12612, 1113, 3681, 17989, 11897, 2]

// Module 17988 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3681 from "module_3681" /* 3681 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11897 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17989 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3681.OT1NK5);
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
