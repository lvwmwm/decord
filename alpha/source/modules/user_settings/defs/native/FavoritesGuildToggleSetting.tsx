// Module ID: 17589
// Function ID: 17590
// Name: FavoritesGuildToggleSetting
// Dependencies: [8578, 11737, 1113, 3577, 17590, 11015, 2]

// Module 17589 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 11015 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17590 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
