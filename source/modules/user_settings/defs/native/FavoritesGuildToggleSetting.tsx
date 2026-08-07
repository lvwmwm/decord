// Module ID: 14488
// Function ID: 14489
// Name: toggle
// Dependencies: [8022, 10380, 1236, 3030, 9645, 9654, 9644, 2]

// Module 14488 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3030).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9645) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
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
    return require(9645) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue: require("computeIsFavoritesGuildEnabled").useIsFavoritesGuildEnabled,
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
