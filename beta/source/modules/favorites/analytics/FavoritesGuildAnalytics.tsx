// Module ID: 9815
// Function ID: 9816
// Name: FavoritesGuildAnalytics
// Dependencies: [4657, 1086, 2076, 1253, 2]
// Exports: consumeNextFavoritesGuildViewSource, setNextFavoritesGuildViewSource, trackFavoritesGuildAddToFavorites, trackFavoritesGuildOrderUpdated, trackFavoritesGuildRemoveFromFavorites, trackFavoritesGuildVisibilitySettingToggled

// Module 9815 (FavoritesGuildAnalytics)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import FavoritesUtils from "FavoritesUtils" /* 2076 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let manual_browsing = "manual_browsing";
const result = size.fileFinishedImporting("modules/favorites/analytics/FavoritesGuildAnalytics.tsx");

export const setNextFavoritesGuildViewSource = function setNextFavoritesGuildViewSource(intro_dc) {
  const obj = FavoritesUtils;
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    manual_browsing = intro_dc;
  }
};
export function consumeNextFavoritesGuildViewSource() {
  manual_browsing = "manual_browsing";
  return manual_browsing;
}
export const trackFavoritesGuildAddToFavorites = function trackFavoritesGuildAddToFavorites(source, type, total_favorites) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { source, channel_type: type, total_favorites };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_TO_FAVORITES, obj2);
};
export const trackFavoritesGuildRemoveFromFavorites = function trackFavoritesGuildRemoveFromFavorites(type, length) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { channel_type: type, total_favorites: length };
  obj.track(AnalyticEvents.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, obj2);
};
export const trackFavoritesGuildOrderUpdated = function trackFavoritesGuildOrderUpdated() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FAVORITES_GUILD_ORDER_UPDATED);
};
export const trackFavoritesGuildVisibilitySettingToggled = function trackFavoritesGuildVisibilitySettingToggled(auto, is_visible) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { source: auto, is_visible };
  obj.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, obj2);
};
