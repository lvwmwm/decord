// Module ID: 14625
// Function ID: 14626
// Name: toggle
// Dependencies: [8123, 10493, 1236, 3047, 9755, 9762, 9754, 2]

// Module 14625 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3047).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9755) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue: require("computeIsFavoritesGuildEnabled").useIsFavoritesGuildEnabled,
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3047).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9755) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue: require("computeIsFavoritesGuildEnabled").useIsFavoritesGuildEnabled,
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
