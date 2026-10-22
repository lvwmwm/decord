// Module ID: 16577
// Function ID: 16578
// Name: FavoritesGuildToggleSetting
// Dependencies: [8317, 11172, 1128, 3412, 16578, 10809, 2]

// Module 16577 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import SettingsConstants from "SettingsConstants" /* 8317 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10809 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16578 */;
import SettingBuilders from "SettingBuilders" /* 11172 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3412.OT1NK5);
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
