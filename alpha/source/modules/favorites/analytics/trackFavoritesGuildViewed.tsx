// Module ID: 18715
// Function ID: 18716
// Name: trackFavoritesGuildViewed
// Dependencies: [1389, 4860, 1084, 1391, 1989, 1264, 10798, 2]
// Exports: default

// Module 18715 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1989 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10798 */;
import UserStore from "UserStore" /* 1389 */;
import FavoriteStore from "FavoriteStore" /* 4860 */;
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
