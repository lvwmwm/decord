// Module ID: 15596
// Function ID: 15597
// Name: FavoritesGuildToggleSetting
// Dependencies: [7992, 10663, 1126, 3442, 10312, 15597, 10311, 2]

// Module 15596 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1126 */;
import _modDef3442 from "module_3442" /* 3442 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10311 */;
import FavoritesHooks from "FavoritesHooks" /* 10312 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15597 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
