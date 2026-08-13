// Module ID: 12200
// Function ID: 12201
// Name: useTrackFavoritesGuildAddModalOpened
// Dependencies: [19, 676, 698, 2]
// Exports: default

// Module 12200 (useTrackFavoritesGuildAddModalOpened)
import noop from "noop";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let obj = callback(outer1_1[2]);
    obj = { source: callback };
    obj.track(outer1_3.FAVORITES_GUILD_ADD_MODAL_OPENED, obj);
  }, items);
};
