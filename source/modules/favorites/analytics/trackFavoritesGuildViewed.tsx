// Module ID: 15817
// Function ID: 15818
// Name: trackFavoritesGuildViewed
// Dependencies: [1903, 1375, 676, 1905, 9711, 1926, 698, 9717, 2]
// Exports: default

// Module 15817 (trackFavoritesGuildViewed)
import mergeGuildAvatar from "mergeGuildAvatar";
import initializeFromUserSettings from "initializeFromUserSettings";
import { AnalyticEvents } from "ME";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  let obj = require(9711) /* useFavoritesAccess */;
  const obj2 = importDefault(1926);
  const isPremiumExactlyResult = importDefault(1926).isPremiumExactly(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
  obj = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = importDefault(698);
  obj[0] = require(9717) /* setNextFavoritesGuildViewSource */.consumeNextFavoritesGuildViewSource();
  obj[1] = favoritesCount.getFavoritesCount();
  obj[2] = obj.getFavoritesAccess().isExperimentEnabled;
  obj[3] = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};
