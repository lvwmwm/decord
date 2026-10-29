// Module ID: 17193
// Function ID: 17194
// Name: FavoritesGuildToggleSetting
// Dependencies: [8387, 11302, 1125, 3446, 17194, 10788, 2]

// Module 17193 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1125 */;
import _modDef3446 from "module_3446" /* 3446 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10788 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17194 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3446.OT1NK5);
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
