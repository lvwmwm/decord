// Module ID: 9865
// Function ID: 9866
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 676, 5834, 5854, 698, 2]
// Exports: default

// Module 9865 (useTrackFavoritesGuildUpsellModalOpened)
import contextDefault from "context" /* 5834 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5854 */;
import closure_2 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(arg0) {
  importDefault = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(closure_1_1[4]);
    obj = { source: callback };
    obj.track(closure_1_3.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
  }, items);
  return { analyticsLocations: contextDefault(QUICK_SWITCHERDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};
