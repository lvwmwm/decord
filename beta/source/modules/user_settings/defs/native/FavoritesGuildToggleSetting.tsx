// Module ID: 15624
// Function ID: 15625
// Name: FavoritesGuildToggleSetting
// Dependencies: [7988, 10664, 1126, 3442, 10314, 15625, 10313, 2]

// Module 15624 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1126 */;
import _modDef3442 from "module_3442" /* 3442 */;
import SettingsConstants from "SettingsConstants" /* 7988 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10313 */;
import FavoritesHooks from "FavoritesHooks" /* 10314 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15625 */;
import SettingBuilders from "SettingBuilders" /* 10664 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3442.OT1NK5);
  },
  parent: MobileUserSettings.APPEARANCE,
  usePredicate() {
    const obj = FavoritesHooks;
    return obj.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
