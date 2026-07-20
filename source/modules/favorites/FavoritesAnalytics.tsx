// Module ID: 10175
// Function ID: 78643
// Name: setNextFavoritesGuildViewSource
// Dependencies: [0, 0, 0, 0, 0]
// Exports: consumeNextFavoritesGuildViewSource, setNextFavoritesGuildViewSource, trackFavoritesGuildAddModalOpened, trackFavoritesGuildAddToFavorites, trackFavoritesGuildOrderUpdated, trackFavoritesGuildRemoveFromFavorites, trackFavoritesGuildUpsellModalOpened, trackFavoritesGuildViewed, trackFavoritesGuildVisibilitySettingToggled

// Module 10175 (setNextFavoritesGuildViewSource)
import closure_3 from "result";
import { AnalyticEvents } from "result";
import result from "result";

let closure_5 = "manual_browsing";
result = result.fileFinishedImporting("modules/favorites/FavoritesAnalytics.tsx");

export const setNextFavoritesGuildViewSource = function setNextFavoritesGuildViewSource(arg0) {
  if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
    let closure_5 = arg0;
  }
};
export function consumeNextFavoritesGuildViewSource() {
  let closure_5 = "manual_browsing";
  return closure_5;
}
export const trackFavoritesGuildAddToFavorites = function trackFavoritesGuildAddToFavorites(source, channel_type, total_favorites) {
  let obj = importDefault(dependencyMap[3]);
  obj = { source, channel_type, total_favorites };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_TO_FAVORITES, obj);
};
export const trackFavoritesGuildRemoveFromFavorites = function trackFavoritesGuildRemoveFromFavorites(channel_type, total_favorites) {
  let obj = importDefault(dependencyMap[3]);
  obj = { channel_type, total_favorites };
  obj.track(AnalyticEvents.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, obj);
};
export const trackFavoritesGuildOrderUpdated = function trackFavoritesGuildOrderUpdated() {
  importDefault(dependencyMap[3]).track(AnalyticEvents.FAVORITES_GUILD_ORDER_UPDATED);
};
export const trackFavoritesGuildVisibilitySettingToggled = function trackFavoritesGuildVisibilitySettingToggled(source, is_visible) {
  let obj = importDefault(dependencyMap[3]);
  obj = { source, is_visible };
  obj.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, obj);
};
export const trackFavoritesGuildUpsellModalOpened = function trackFavoritesGuildUpsellModalOpened(source) {
  let obj = importDefault(dependencyMap[3]);
  obj = { source };
  obj.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
};
export const trackFavoritesGuildAddModalOpened = function trackFavoritesGuildAddModalOpened(source) {
  let obj = importDefault(dependencyMap[3]);
  obj = { source };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
};
export const trackFavoritesGuildViewed = function trackFavoritesGuildViewed(manual_browsing, favoritesCount, enabled, isPremiumExactlyResult) {
  let obj = importDefault(dependencyMap[3]);
  obj = { source: manual_browsing, total_favorites: favoritesCount, is_xp_enabled: enabled, is_premium_tier_2: isPremiumExactlyResult };
  obj.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};
