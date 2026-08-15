// Module ID: 14670
// Function ID: 14671
// Name: toggle
// Dependencies: [8198, 10669, 1236, 3079, 9979, 14671, 9978, 2]

// Module 14670 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3079).OT1NK5);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate() {
    return require(9979) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return importDefault(14671)(false);
  },
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(3079).OT1NK5);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate() {
    return require(9979) /* useFavoritesAccess */.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return importDefault(14671)(false);
  },
  onValueChange: require("getNextPositionFromChannels").setFavoritesGuildVisibilityFromSettings
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
