// Module ID: 15909
// Function ID: 15910
// Name: FavoritesGuildSuggestionsLoader
// Dependencies: [19, 15834, 21, 15910, 2]

// Module 15909 (FavoritesGuildSuggestionsLoader)
import Fragment from "Fragment" /* 21 */;
import useFavoritesGuildSuggestionCandidatesDefault from "useFavoritesGuildSuggestionCandidates" /* 15910 */;
import react_mod from "react" /* 19 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 15834 */;
import size from "module_2" /* 2 */;

let importDefault;

let c3;
let closure_4;
let hasOwnProperty;
function FavoritesGuildSuggestionsLoaderInner() {
  let closure_0;
  const tmp = useFavoritesGuildSuggestionCandidatesDefault(4);
  importDefault = tmp;
  const items = [tmp];
  const layoutEffect = react.useLayoutEffect(() => {
    React3(closure_0);
  }, items);
  return null;
}
let react = react_mod;
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: closure_4, useFavoritesGuildSuggestionsVisibility: hasOwnProperty } = FavoritesGuildSuggestionsStore);
const jsx = Fragment.jsx;
const memoResult = react.memo(function FavoritesGuildSuggestionsLoader() {
  let ref;
  const tmp = closure_5();
  const isEligible = tmp.isEligible;
  const isSelected = tmp.isSelected;
  react = react.useRef(false);
  const items = [isEligible, isSelected];
  const layoutEffect = react.useLayoutEffect(() => {
    if (isSelected) {
      ref.current = true;
    } else {
      const tmp2 = !ref.current && isEligible;
      if (!tmp2) {
        ref.current = false;
        React3(_false);
      }
    }
  }, items);
  let tmp3 = null;
  if (isSelected) {
    tmp3 = <FavoritesGuildSuggestionsLoaderInner />;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default memoResult;
