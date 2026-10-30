// Module ID: 10822
// Function ID: 10823
// Name: FavoritesGuildAnalytics
// Dependencies: [5040, 1072, 4883, 1253, 2]
// Exports: consumeNextFavoritesGuildViewSource, setNextFavoritesGuildViewSource, trackFavoritesGuildAddToFavorites, trackFavoritesGuildOrderUpdated, trackFavoritesGuildRemoveFromFavorites, trackFavoritesGuildVisibilitySettingToggled

// Module 10822 (FavoritesGuildAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
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
