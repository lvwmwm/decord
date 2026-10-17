// Module ID: 16380
// Function ID: 16381
// Name: FavoritesGuildToggleSetting
// Dependencies: [8260, 11065, 1128, 3465, 16381, 10624, 2]

// Module 16380 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3465 from "module_3465" /* 3465 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10624 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16381 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3465.OT1NK5);
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
