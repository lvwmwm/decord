// Module ID: 16300
// Function ID: 16301
// Name: FavoritesGuildToggleSetting
// Dependencies: [8213, 11006, 1128, 3447, 10561, 16301, 10560, 2]

// Module 16300 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1128 */;
import _modDef3447 from "module_3447" /* 3447 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10560 */;
import FavoritesHooks from "FavoritesHooks" /* 10561 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16301 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3447.OT1NK5);
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
