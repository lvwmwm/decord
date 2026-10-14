// Module ID: 15971
// Function ID: 15972
// Name: FavoritesGuildToggleSetting
// Dependencies: [8000, 10767, 1126, 3442, 10323, 15972, 10322, 2]

// Module 15971 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1126 */;
import _modDef3442 from "module_3442" /* 3442 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10322 */;
import FavoritesHooks from "FavoritesHooks" /* 10323 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15972 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
