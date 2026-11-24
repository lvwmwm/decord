// Module ID: 11224
// Function ID: 11225
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 1071, 7520, 7539, 1255, 2]
// Exports: default

// Module 11224 (useTrackFavoritesGuildUpsellModalOpened)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7520 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
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
