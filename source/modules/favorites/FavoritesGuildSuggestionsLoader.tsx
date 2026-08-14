// Module ID: 15486
// Function ID: 15487
// Name: FavoritesGuildSuggestionsLoaderInner
// Dependencies: [19, 15414, 21, 15487, 2]

// Module 15486 (FavoritesGuildSuggestionsLoaderInner)
import importAllResult from "noop";
import items from "items";
import { jsx } from "jsxProd";

let c3;
let c4;
let c5;
function FavoritesGuildSuggestionsLoaderInner() {
  const tmp = importDefault(15487)(4);
  importDefault = tmp;
  const items = [tmp];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    outer1_4(closure_0);
  }, items);
  const layoutEffect1 = importAllResult.useLayoutEffect(() => () => callback(closure_3), []);
  return null;
}
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: c4, useFavoritesGuildShouldShowSuggestions: c5 } = items);
const memoResult = importAllResult.memo(function FavoritesGuildSuggestionsLoader() {
  let tmp = null;
  if (callback()) {
    tmp = <FavoritesGuildSuggestionsLoaderInner />;
  }
  return tmp;
});
const result = require("jsxProd").fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default memoResult;
