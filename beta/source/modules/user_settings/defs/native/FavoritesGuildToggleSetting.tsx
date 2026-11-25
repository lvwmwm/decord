// Module ID: 16738
// Function ID: 16739
// Name: FavoritesGuildToggleSetting
// Dependencies: [8712, 11942, 1112, 3802, 16739, 11224, 2]

// Module 16738 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11224 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16739 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3802.OT1NK5);
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
