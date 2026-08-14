// Module ID: 14638
// Function ID: 14639
// Name: toggle
// Dependencies: [8148, 10421, 1236, 3047, 9770, 14639, 9769, 2]

// Module 14638 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3047).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9770) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return importDefault(14639)(false);
  },
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3047).OT1NK5);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9770) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return importDefault(14639)(false);
  },
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
