// Module ID: 10888
// Function ID: 10889
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 1084, 558, 576, 7289, 7314, 1264, 2]

// Module 10888 (useTrackFavoritesGuildUpsellModalOpened)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7289 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7314 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackFavoritesGuildUpsellModalOpened() {
  let tmp3;
  let tmp4;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(4);
  const tmp2 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp3 = fn;
    tmp4 = items;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const effect = react.useEffect(tmp3, tmp4);
  if (cResult[2] !== analyticsLocations) {
    const obj2 = { analyticsLocations };
    cResult[2] = analyticsLocations;
    cResult[3] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function useTrackFavoritesGuildUpsellModalOpened() {
  const tmp = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations;
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(constants.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
  }, []);
  return { analyticsLocations };
});
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default tmp2;
