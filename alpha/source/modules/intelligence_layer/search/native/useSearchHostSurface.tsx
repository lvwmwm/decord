// Module ID: 17832
// Function ID: 17833
// Name: useSearchHostSurface
// Dependencies: [17774, 558, 1506, 4913, 587, 2]

// Module 17832 (useSearchHostSurface)
import nativeDefault from "native" /* 587 */;
import Link from "Link" /* 1506 */;
import useToken2 from "useToken" /* 4913 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 17774 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchHostSurfaceColor() {
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
}) : (function useSearchHostSurfaceColor() {
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
