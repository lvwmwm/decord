// Module ID: 15958
// Function ID: 15959
// Name: trackFavoritesGuildViewed
// Dependencies: [1922, 1394, 676, 1924, 9979, 1945, 698, 9985, 2]
// Exports: default

// Module 15958 (trackFavoritesGuildViewed)
import mergeGuildAvatar from "mergeGuildAvatar";
import initializeFromUserSettings from "initializeFromUserSettings";
import { AnalyticEvents } from "ME";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  let obj = require(9979) /* useFavoritesAccess */;
  const obj2 = importDefault(1945);
  const isPremiumExactlyResult = importDefault(1945).isPremiumExactly(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
  obj = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = importDefault(698);
  obj[0] = require(9985) /* setNextFavoritesGuildViewSource */.consumeNextFavoritesGuildViewSource();
  obj[1] = favoritesCountAgainstLimit.getFavoritesCountAgainstLimit();
  obj[2] = obj.getFavoritesAccess().isExperimentEnabled;
  obj[3] = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};
