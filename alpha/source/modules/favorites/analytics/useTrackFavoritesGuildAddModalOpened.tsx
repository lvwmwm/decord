// Module ID: 14352
// Function ID: 14353
// Name: useTrackFavoritesGuildAddModalOpened
// Dependencies: [19, 1072, 1253, 2]
// Exports: default

// Module 14352 (useTrackFavoritesGuildAddModalOpened)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(source) {
  const items = [source];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { source };
    obj.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, obj2);
  }, items);
};
