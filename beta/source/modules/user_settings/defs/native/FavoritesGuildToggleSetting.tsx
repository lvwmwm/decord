// Module ID: 17949
// Function ID: 17950
// Name: FavoritesGuildToggleSetting
// Dependencies: [9202, 12408, 1113, 3679, 17950, 10944, 2]

// Module 17949 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3679 from "module_3679" /* 3679 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10944 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17950 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3679.OT1NK5);
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
