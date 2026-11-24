// Module ID: 16764
// Function ID: 16765
// Name: FavoritesGuildToggleSetting
// Dependencies: [9414, 11815, 1112, 3804, 16765, 10597, 2]

// Module 16764 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3804 from "module_3804" /* 3804 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10597 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16765 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3804.OT1NK5);
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
