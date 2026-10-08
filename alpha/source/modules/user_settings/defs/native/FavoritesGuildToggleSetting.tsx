// Module ID: 15421
// Function ID: 15422
// Name: FavoritesGuildToggleSetting
// Dependencies: [7966, 11262, 1126, 3439, 10294, 15422, 10293, 2]

// Module 15421 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1126 */;
import _modDef3439 from "module_3439" /* 3439 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10293 */;
import FavoritesHooks from "FavoritesHooks" /* 10294 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15422 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3439.OT1NK5);
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
