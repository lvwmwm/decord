// Module ID: 19586
// Function ID: 19587
// Name: trackFavoritesGuildViewed
// Dependencies: [1388, 5158, 1072, 1390, 2110, 1256, 10971, 2]
// Exports: default

// Module 19586 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 2110 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10971 */;
import UserStore from "UserStore" /* 1388 */;
import FavoriteStore from "FavoriteStore" /* 5158 */;
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
