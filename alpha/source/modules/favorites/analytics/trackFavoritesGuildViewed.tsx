// Module ID: 17318
// Function ID: 17319
// Name: trackFavoritesGuildViewed
// Dependencies: [1372, 2047, 1074, 1374, 10572, 1969, 1241, 10581, 2]
// Exports: default

// Module 17318 (trackFavoritesGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1969 */;
import FavoritesHooks from "FavoritesHooks" /* 10572 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10581 */;
import UserStore from "UserStore" /* 1372 */;
import FavoriteStore from "FavoriteStore" /* 2047 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumTypes = fn(1374).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  const obj = FavoritesHooks;
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const obj4 = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = AnalyticsUtilsDefault;
  obj4.source = FavoritesGuildAnalytics.consumeNextFavoritesGuildViewSource();
  obj4.total_favorites = FavoriteStore.getFavoritesCountAgainstLimit();
  obj4.is_xp_enabled = obj.getFavoritesAccess().isExperimentEnabled;
  obj4.is_premium_tier_2 = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj4);
};
