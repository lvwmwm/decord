// Module ID: 16599
// Function ID: 16600
// Name: FavoritesGuildToggleSetting
// Dependencies: [8318, 11181, 1128, 3412, 16600, 10817, 2]

// Module 16599 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10817 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16600 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
