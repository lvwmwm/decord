// Module ID: 10987
// Function ID: 10988
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 1072, 7420, 7445, 1252, 2]
// Exports: default

// Module 10987 (useTrackFavoritesGuildUpsellModalOpened)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7420 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7445 */;
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
