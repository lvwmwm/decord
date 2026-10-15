// Module ID: 16267
// Function ID: 16268
// Name: FavoritesGuildToggleSetting
// Dependencies: [8210, 10991, 1126, 3444, 10546, 16268, 10545, 2]

// Module 16267 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1126 */;
import _modDef3444 from "module_3444" /* 3444 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10545 */;
import FavoritesHooks from "FavoritesHooks" /* 10546 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16268 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3444.OT1NK5);
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
