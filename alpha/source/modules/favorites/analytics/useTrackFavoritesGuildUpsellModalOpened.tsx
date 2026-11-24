// Module ID: 10602
// Function ID: 10603
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 1071, 6253, 6254, 1255, 2]
// Exports: default

// Module 10602 (useTrackFavoritesGuildUpsellModalOpened)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6254 */;
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
