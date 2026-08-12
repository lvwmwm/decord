// Module ID: 9760
// Function ID: 9761
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 676, 5767, 5787, 698, 2]
// Exports: default

// Module 9760 (useTrackFavoritesGuildUpsellModalOpened)
import noop from "noop";
import { AnalyticEvents } from "ME";

const result = require("context").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(arg0) {
  const importDefault = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(outer1_1[4]);
    obj = { source: callback };
    obj.track(outer1_3.FAVORITES_GUILD_UPSELL_MODAL_OPENED, obj);
  }, items);
  return { analyticsLocations: importDefault(5767)(importDefault(5787).FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};
