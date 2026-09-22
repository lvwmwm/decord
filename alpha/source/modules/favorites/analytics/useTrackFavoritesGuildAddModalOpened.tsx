// Module ID: 11252
// Function ID: 11253
// Name: useTrackFavoritesGuildAddModalOpened
// Dependencies: [19, 1074, 1241, 2]
// Exports: default

// Module 11252 (useTrackFavoritesGuildAddModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(source) {
  const items = [source];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, { source });
  }, items);
};
