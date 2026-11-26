// Module ID: 19070
// Function ID: 19071
// Name: trackFavoritesGuildViewed
// Dependencies: [1387, 4895, 1071, 1389, 2109, 1256, 10752, 2]
// Exports: default

// Module 19070 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PremiumConstants from "PremiumConstants" /* 1389 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 2109 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10752 */;
import UserStore from "UserStore" /* 1387 */;
import FavoriteStore from "FavoriteStore" /* 4895 */;
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
