// Module ID: 17247
// Function ID: 17248
// Name: FavoritesGuildToggleSetting
// Dependencies: [8424, 11505, 1114, 3447, 17248, 10811, 2]

// Module 17247 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10811 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17248 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3447.OT1NK5);
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
