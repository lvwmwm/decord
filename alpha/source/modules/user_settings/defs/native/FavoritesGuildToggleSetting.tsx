// Module ID: 16432
// Function ID: 16433
// Name: FavoritesGuildToggleSetting
// Dependencies: [8280, 11111, 1128, 3402, 16433, 10649, 2]

// Module 16432 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3402 from "module_3402" /* 3402 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10649 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16433 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3402.OT1NK5);
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
