// Module ID: 17551
// Function ID: 17552
// Name: FavoritesGuildToggleSetting
// Dependencies: [8573, 11728, 1113, 3577, 17552, 11009, 2]

// Module 17551 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11009 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17552 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3577.OT1NK5);
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
