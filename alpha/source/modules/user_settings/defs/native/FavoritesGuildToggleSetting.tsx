// Module ID: 16725
// Function ID: 16726
// Name: FavoritesGuildToggleSetting
// Dependencies: [8331, 11212, 1125, 3413, 16726, 10848, 2]

// Module 16725 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1125 */;
import _modDef3413 from "module_3413" /* 3413 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10848 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16726 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3413.OT1NK5);
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
