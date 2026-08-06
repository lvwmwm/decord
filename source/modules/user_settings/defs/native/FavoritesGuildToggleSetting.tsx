// Module ID: 14472
// Function ID: 14473
// Name: toggle
// Dependencies: [8005, 10364, 1236, 3030, 9629, 9638, 9628, 2]

// Module 14472 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3030).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9629) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue: require("computeIsFavoritesGuildEnabled").useIsFavoritesGuildEnabled,
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3030).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9629) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue: require("computeIsFavoritesGuildEnabled").useIsFavoritesGuildEnabled,
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
