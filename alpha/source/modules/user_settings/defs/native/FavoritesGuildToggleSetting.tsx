// Module ID: 16413
// Function ID: 16414
// Name: FavoritesGuildToggleSetting
// Dependencies: [8276, 11099, 1128, 3402, 16414, 10638, 2]

// Module 16413 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3402 from "module_3402" /* 3402 */;
import SettingsConstants from "SettingsConstants" /* 8276 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10638 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16414 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
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
