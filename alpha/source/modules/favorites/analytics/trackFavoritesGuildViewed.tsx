// Module ID: 18095
// Function ID: 18096
// Name: trackFavoritesGuildViewed
// Dependencies: [1392, 4824, 1087, 1394, 1991, 1267, 10819, 2]
// Exports: default

// Module 18095 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1991 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10819 */;
import UserStore from "UserStore" /* 1392 */;
import FavoriteStore from "FavoriteStore" /* 4824 */;
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
