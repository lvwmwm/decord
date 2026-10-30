// Module ID: 18774
// Function ID: 18775
// Name: trackFavoritesGuildViewed
// Dependencies: [1384, 4861, 1072, 1386, 1984, 1253, 10822, 2]
// Exports: default

// Module 18774 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1984 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10822 */;
import UserStore from "UserStore" /* 1384 */;
import FavoriteStore from "FavoriteStore" /* 4861 */;
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
