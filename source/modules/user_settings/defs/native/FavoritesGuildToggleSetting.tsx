// Module ID: 14568
// Function ID: 14569
// Name: toggle
// Dependencies: [8084, 10452, 1236, 3049, 9716, 9723, 9715, 2]

// Module 14568 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3049).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9716) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue: require("computeIsFavoritesGuildEnabled").useIsFavoritesGuildEnabled,
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3049).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9716) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue: require("computeIsFavoritesGuildEnabled").useIsFavoritesGuildEnabled,
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
