// Module ID: 15248
// Function ID: 15249
// Name: toggle
// Dependencies: [7906, 11400, 1233, 3178, 10153, 15249, 10152, 2]

// Module 15248 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 3178 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import getNextPositionFromChannels from "getNextPositionFromChannels" /* 10152 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10153 */;
import computeIsFavoritesGuildVisibleDefault from "computeIsFavoritesGuildVisible" /* 15249 */;
import createToggle from "createToggle" /* 11400 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.OT1NK5);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  usePredicate() {
    return useFavoritesAccess.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return computeIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: getNextPositionFromChannels.setFavoritesGuildVisibilityFromSettings
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.OT1NK5);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  usePredicate() {
    return useFavoritesAccess.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return computeIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: getNextPositionFromChannels.setFavoritesGuildVisibilityFromSettings
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
