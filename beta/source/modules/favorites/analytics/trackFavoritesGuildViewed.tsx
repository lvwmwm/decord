// Module ID: 16568
// Function ID: 16569
// Name: trackFavoritesGuildViewed
// Dependencies: [1378, 2054, 1086, 1380, 9807, 1976, 1253, 9815, 2]
// Exports: default

// Module 16568 (trackFavoritesGuildViewed)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1976 */;
import FavoritesHooks from "FavoritesHooks" /* 9807 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 9815 */;
import UserStore from "UserStore" /* 1378 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
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
