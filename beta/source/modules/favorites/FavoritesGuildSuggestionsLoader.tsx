// Module ID: 16615
// Function ID: 16616
// Name: FavoritesGuildSuggestionsLoader
// Dependencies: [19, 16544, 21, 16616, 2]

// Module 16615 (FavoritesGuildSuggestionsLoader)
import useFavoritesGuildSuggestionCandidatesDefault from "useFavoritesGuildSuggestionCandidates" /* 16616 */;
import noop from "module_19" /* 19 */;

function FavoritesGuildSuggestionsLoaderInner() {
  const tmp = useFavoritesGuildSuggestionCandidatesDefault(4);
  importDefault = tmp;
  const items = [tmp];
  const layoutEffect = noop.useLayoutEffect(() => {
    React4(closure_0);
  }, items);
  return null;
}
const FavoritesGuildSuggestionsStore = fn(16544);
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: closure_4, useFavoritesGuildSuggestionsVisibility: hasOwnProperty } = FavoritesGuildSuggestionsStore);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default noop.memo(function FavoritesGuildSuggestionsLoader() {
  const tmp = closure_5();
  const isEligible = tmp.isEligible;
  const isSelected = tmp.isSelected;
  noop = noop.useRef(false);
  const items = [isEligible, isSelected];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (isSelected) {
      tmp.current = true;
    } else {
      const current = tmp.current;
      let tmp2 = !current;
      if (!current) {
        tmp2 = isEligible;
      }
      if (!tmp2) {
        tmp.current = false;
        React4(React3);
      }
    }
  }, items);
  let tmp3 = null;
  if (isSelected) {
    tmp3 = <FavoritesGuildSuggestionsLoaderInner />;
  }
  return tmp3;
});
