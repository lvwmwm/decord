// Module ID: 17460
// Function ID: 17461
// Name: FavoritesGuildToggleSetting
// Dependencies: [8556, 11677, 1113, 3577, 17461, 10961, 2]

// Module 17460 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10961 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17461 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
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
