// Module ID: 16515
// Function ID: 16516
// Name: useSearchHostSurface
// Dependencies: [16461, 558, 1492, 4535, 588, 2]

// Module 16515 (useSearchHostSurface)
import nativeDefault from "native" /* 588 */;
import Link from "Link" /* 1492 */;
import useToken2 from "useToken" /* 4535 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 16461 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let MOBILE_ACTIONSHEET_BACKGROUND;
  const obj = Link;
  const route = obj.useRoute();
  const useToken = useToken2.useToken;
  useToken2;
  if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
  }
  return useToken(MOBILE_ACTIONSHEET_BACKGROUND);
}) : (() => {
  let MOBILE_ACTIONSHEET_BACKGROUND;
  const obj = Link;
  const route = obj.useRoute();
  const useToken = useToken2.useToken;
  useToken2;
  if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
  }
  return useToken(MOBILE_ACTIONSHEET_BACKGROUND);
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSearchHostSurface.tsx");

export const useSearchHostSurfaceColor = tmp2;
