// Module ID: 16885
// Function ID: 16886
// Name: FavoritesGuildToggleSetting
// Dependencies: [9513, 11914, 1112, 3856, 16886, 10696, 2]

// Module 16885 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3856 from "module_3856" /* 3856 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10696 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16886 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3856.OT1NK5);
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
