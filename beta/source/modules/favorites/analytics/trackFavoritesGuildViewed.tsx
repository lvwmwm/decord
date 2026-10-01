// Module ID: 16566
// Function ID: 16567
// Name: trackFavoritesGuildViewed
// Dependencies: [1372, 2048, 1074, 1374, 9685, 1970, 1241, 9696, 2]
// Exports: default

// Module 16566 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1970 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 9696 */;
import UserStore from "UserStore" /* 1372 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  let obj4;
  const obj = FavoritesHooks;
  const isExperimentEnabled = obj.getFavoritesAccess().isExperimentEnabled;
  const obj2 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj2.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const obj3 = { source: obj4.consumeNextFavoritesGuildViewSource(), total_favorites: FavoriteStore.getFavoritesCountAgainstLimit(), is_xp_enabled: isExperimentEnabled, is_premium_tier_2: isPremiumExactlyResult };
  const track = AnalyticsUtilsDefault.track;
  const FAVORITES_GUILD_VIEWED = AnalyticEvents.FAVORITES_GUILD_VIEWED;
  AnalyticsUtilsDefault;
  obj4 = FavoritesGuildAnalytics;
  track(FAVORITES_GUILD_VIEWED, obj3);
};
