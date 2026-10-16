// Module ID: 16314
// Function ID: 16315
// Name: FavoritesGuildToggleSetting
// Dependencies: [8214, 11003, 1128, 3447, 16315, 10561, 2]

// Module 16314 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3447 from "module_3447" /* 3447 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10561 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16315 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3447.OT1NK5);
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
