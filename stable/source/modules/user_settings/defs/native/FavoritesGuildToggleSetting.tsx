// Module ID: 16717
// Function ID: 16718
// Name: FavoritesGuildToggleSetting
// Dependencies: [8364, 11240, 1128, 3444, 16718, 10876, 2]

// Module 16717 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3444 from "module_3444" /* 3444 */;
import SettingsConstants from "SettingsConstants" /* 8364 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10876 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16718 */;
import SettingBuilders from "SettingBuilders" /* 11240 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3444.OT1NK5);
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
