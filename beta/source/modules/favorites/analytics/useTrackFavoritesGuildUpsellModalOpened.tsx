// Module ID: 9690
// Function ID: 9691
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 1074, 6583, 6603, 1241, 2]
// Exports: default

// Module 9690 (useTrackFavoritesGuildUpsellModalOpened)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(source) {
  importDefault = source;
  const items = [source];
  const tmp = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations;
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { source };
    obj.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj2);
  }, items);
  return { analyticsLocations };
};
