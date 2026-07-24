// Module ID: 10224
// Function ID: 78948
// Name: setNextFavoritesGuildViewSource
// Dependencies: [3947, 653, 5077, 675, 2]
// Exports: consumeNextFavoritesGuildViewSource, setNextFavoritesGuildViewSource, trackFavoritesGuildAddModalOpened, trackFavoritesGuildAddToFavorites, trackFavoritesGuildOrderUpdated, trackFavoritesGuildRemoveFromFavorites, trackFavoritesGuildUpsellModalOpened, trackFavoritesGuildViewed, trackFavoritesGuildVisibilitySettingToggled

// Module 10224 (setNextFavoritesGuildViewSource)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
let manual_browsing = "manual_browsing";
const result = require("isFavoritesGuildId").fileFinishedImporting("modules/favorites/FavoritesAnalytics.tsx");

export const setNextFavoritesGuildViewSource = function setNextFavoritesGuildViewSource(arg0) {
  if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
    let closure_5 = arg0;
  }
};
export function consumeNextFavoritesGuildViewSource() {
  const manual_browsing = "manual_browsing";
  return manual_browsing;
}
export const trackFavoritesGuildAddToFavorites = function trackFavoritesGuildAddToFavorites(source, channel_type, total_favorites) {
  let obj = importDefault(675);
  obj = { source, channel_type, total_favorites };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_TO_FAVORITES, obj);
};
export const trackFavoritesGuildRemoveFromFavorites = function trackFavoritesGuildRemoveFromFavorites(c3, total_favorites) {
  let obj = importDefault(675);
  obj = { channel_type: c3, total_favorites };
  obj.track(AnalyticEvents.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, obj);
};
export const trackFavoritesGuildOrderUpdated = function trackFavoritesGuildOrderUpdated() {
  importDefault(675).track(AnalyticEvents.FAVORITES_GUILD_ORDER_UPDATED);
};
export const trackFavoritesGuildVisibilitySettingToggled = function trackFavoritesGuildVisibilitySettingToggled(source, closure_0) {
  let obj = importDefault(675);
  obj = { source, is_visible: closure_0 };
  obj.track(AnalyticEvents.FAVORITES_GUILD_SETTING_TOGGLED, obj);
};
export const trackFavoritesGuildUpsellModalOpened = function trackFavoritesGuildUpsellModalOpened(source) {
  let obj = importDefault(675);
  obj = { source };
  obj.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
};
export const trackFavoritesGuildAddModalOpened = function trackFavoritesGuildAddModalOpened(source) {
  let obj = importDefault(675);
  obj = { source };
  obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
};
export const trackFavoritesGuildViewed = function trackFavoritesGuildViewed(manual_browsing, favoritesCount, enabled, isPremiumExactlyResult) {
  let obj = importDefault(675);
  obj = { source: manual_browsing, total_favorites: favoritesCount, is_xp_enabled: enabled, is_premium_tier_2: isPremiumExactlyResult };
  obj.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj);
};
