// Module ID: 11902
// Function ID: 11903
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 1072, 7928, 7947, 1256, 2]
// Exports: default

// Module 11902 (useTrackFavoritesGuildUpsellModalOpened)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7928 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7947 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened() {
  const tmp = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations;
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(constants.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
  }, []);
  return { analyticsLocations };
};
