// Module ID: 11230
// Function ID: 11231
// Name: FavoritesGuildAnalytics
// Dependencies: [4946, 1071, 4787, 1255, 2]
// Exports: consumeNextFavoritesGuildViewSource, setNextFavoritesGuildViewSource, trackFavoritesGuildAddToFavorites, trackFavoritesGuildOrderUpdated, trackFavoritesGuildRemoveFromFavorites, trackFavoritesGuildVisibilitySettingToggled

// Module 11230 (FavoritesGuildAnalytics)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let manual_browsing = "manual_browsing";
const result = size.fileFinishedImporting("modules/favorites/analytics/FavoritesGuildAnalytics.tsx");

export function setNextFavoritesGuildViewSource(upsell_modal) {
  const obj = FavoritesUtils;
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    manual_browsing = upsell_modal;
  }
}
export function consumeNextFavoritesGuildViewSource() {
  manual_browsing = "manual_browsing";
  return manual_browsing;
}
export function trackFavoritesGuildAddToFavorites(source, type, total_favorites) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { source, channel_type: type, total_favorites };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_TO_FAVORITES, obj2);
}
export function trackFavoritesGuildRemoveFromFavorites(type, length) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { channel_type: type, total_favorites: length };
  obj.track(AnalyticEvents.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, obj2);
}
export function trackFavoritesGuildOrderUpdated() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.FAVORITES_GUILD_ORDER_UPDATED);
}
export function trackFavoritesGuildVisibilitySettingToggled(auto, is_visible) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { source: auto, is_visible };
  obj.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, obj2);
}
