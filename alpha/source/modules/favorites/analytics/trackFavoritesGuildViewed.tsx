// Module ID: 18909
// Function ID: 18910
// Name: trackFavoritesGuildViewed
// Dependencies: [1388, 4675, 1072, 1390, 2110, 1256, 11190, 2]
// Exports: default

// Module 18909 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 2110 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 11190 */;
import UserStore from "UserStore" /* 1388 */;
import FavoriteStore from "FavoriteStore" /* 4675 */;
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
