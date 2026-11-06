// Module ID: 17578
// Function ID: 17579
// Name: FavoritesGuildToggleSetting
// Dependencies: [8524, 11703, 1113, 3606, 17579, 10967, 2]

// Module 17578 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3606 from "module_3606" /* 3606 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10967 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17579 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3606.OT1NK5);
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
