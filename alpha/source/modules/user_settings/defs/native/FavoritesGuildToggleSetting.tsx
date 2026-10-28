// Module ID: 16954
// Function ID: 16955
// Name: FavoritesGuildToggleSetting
// Dependencies: [8365, 11248, 1125, 3445, 16955, 10883, 2]

// Module 16954 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1125 */;
import _modDef3445 from "module_3445" /* 3445 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10883 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16955 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3445.OT1NK5);
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
