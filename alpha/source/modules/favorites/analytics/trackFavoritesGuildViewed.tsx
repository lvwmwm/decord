// Module ID: 18240
// Function ID: 18241
// Name: trackFavoritesGuildViewed
// Dependencies: [1389, 4827, 1084, 1391, 1988, 1264, 10858, 2]
// Exports: default

// Module 18240 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1988 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10858 */;
import UserStore from "UserStore" /* 1389 */;
import FavoriteStore from "FavoriteStore" /* 4827 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  let obj3;
  const obj = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const obj2 = { source: obj3.consumeNextFavoritesGuildViewSource(), total_favorites: FavoriteStore.getFavoritesCountAgainstLimit(), is_xp_enabled: true, is_premium_tier_2: isPremiumExactlyResult };
  const track = AnalyticsUtilsDefault.track;
  const FAVORITES_GUILD_VIEWED = AnalyticEvents.FAVORITES_GUILD_VIEWED;
  AnalyticsUtilsDefault;
  obj3 = FavoritesGuildAnalytics;
  track(FAVORITES_GUILD_VIEWED, obj2);
};
