// Module ID: 17830
// Function ID: 17831
// Name: FavoritesGuildToggleSetting
// Dependencies: [9136, 12317, 1113, 3629, 17831, 10881, 2]

// Module 17830 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3629 from "module_3629" /* 3629 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10881 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17831 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3629.OT1NK5);
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
