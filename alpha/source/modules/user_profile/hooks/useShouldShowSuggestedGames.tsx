// Module ID: 12139
// Function ID: 12140
// Name: useShouldShowSuggestedGames
// Dependencies: [32, 19, 12140, 12090, 2]
// Exports: useShouldShowSuggestedGames

// Module 12139 (useShouldShowSuggestedGames)
import WidgetUtils from "WidgetUtils" /* 12090 */;
import useHasSavedWidget from "useHasSavedWidget" /* 12140 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowSuggestedGames.tsx");

export function useShouldShowSuggestedGames(widget) {
  let closure_0;
  let first;
  [first, closure_0] = react.useState(false);
  const obj2 = useHasSavedWidget;
  const hasSavedWidget = obj2.useHasSavedWidget(widget.type);
  let tmp5 = !hasSavedWidget;
  const obj3 = WidgetUtils;
  const isGameLimitReachedResult = obj3.isGameLimitReached(widget);
  const obj = react;
  if (!hasSavedWidget) {
    tmp5 = !first;
  }
  if (tmp5) {
    tmp5 = !isGameLimitReachedResult;
  }
  const obj4 = {
    shouldShowSuggestions: tmp5,
    handleDismissSuggestions: obj.useCallback(() => {
      closure_0(true);
    }, [])
  };
  return obj4;
}
