// Module ID: 16936
// Function ID: 16937
// Name: FavoritesGuildToggleSetting
// Dependencies: [9555, 11962, 1112, 3857, 16937, 10741, 2]

// Module 16936 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3857 from "module_3857" /* 3857 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10741 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16937 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3857.OT1NK5);
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
