// Module ID: 16678
// Function ID: 16679
// Name: FavoritesGuildToggleSetting
// Dependencies: [8332, 11205, 1128, 3412, 16679, 10841, 2]

// Module 16678 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10841 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16679 */;
import SettingBuilders from "SettingBuilders" /* 11205 */;
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
