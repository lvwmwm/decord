// Module ID: 17312
// Function ID: 17313
// Name: FavoritesGuildToggleSetting
// Dependencies: [8432, 11540, 1113, 3450, 17313, 10831, 2]

// Module 17312 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3450 from "module_3450" /* 3450 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10831 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17313 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3450.OT1NK5);
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
