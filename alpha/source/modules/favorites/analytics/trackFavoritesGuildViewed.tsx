// Module ID: 18854
// Function ID: 18855
// Name: trackFavoritesGuildViewed
// Dependencies: [1386, 4765, 1071, 1388, 2108, 1255, 11230, 2]
// Exports: default

// Module 18854 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 2108 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 11230 */;
import UserStore from "UserStore" /* 1386 */;
import FavoriteStore from "FavoriteStore" /* 4765 */;
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
