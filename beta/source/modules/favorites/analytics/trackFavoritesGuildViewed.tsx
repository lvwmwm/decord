// Module ID: 17218
// Function ID: 17219
// Name: trackFavoritesGuildViewed
// Dependencies: [1376, 2048, 1078, 1378, 10606, 1973, 1245, 10612, 2]
// Exports: default

// Module 17218 (trackFavoritesGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1973 */;
import FavoritesHooks from "FavoritesHooks" /* 10606 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10612 */;
import UserStore from "UserStore" /* 1376 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;

require = fn;
const AnalyticEvents = fn(1078).AnalyticEvents;
const PremiumTypes = fn(1378).PremiumTypes;
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
