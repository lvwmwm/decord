// Module ID: 11104
// Function ID: 11105
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 1071, 7400, 7419, 1255, 2]
// Exports: default

// Module 11104 (useTrackFavoritesGuildUpsellModalOpened)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7400 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7419 */;
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
