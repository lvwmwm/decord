// Module ID: 18817
// Function ID: 18818
// Name: trackFavoritesGuildViewed
// Dependencies: [1383, 4866, 1072, 1385, 1983, 1252, 10842, 2]
// Exports: default

// Module 18817 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1983 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10842 */;
import UserStore from "UserStore" /* 1383 */;
import FavoriteStore from "FavoriteStore" /* 4866 */;
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
