// Module ID: 17673
// Function ID: 17674
// Name: FavoritesGuildToggleSetting
// Dependencies: [8536, 11716, 1113, 3608, 17674, 10982, 2]

// Module 17673 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1113 */;
import _modDef3608 from "module_3608" /* 3608 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10982 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17674 */;
import SettingBuilders from "SettingBuilders" /* 11716 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3608.OT1NK5);
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
