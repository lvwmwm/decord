// Module ID: 18837
// Function ID: 18838
// Name: useSearchHostSurface
// Dependencies: [18779, 1501, 5481, 575, 2]
// Exports: useSearchHostSurfaceColor

// Module 18837 (useSearchHostSurface)
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1501 */;
import useToken2 from "useToken" /* 5481 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 18779 */;
import size from "module_2" /* 2 */;

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSearchHostSurface.tsx");

export function useSearchHostSurfaceColor() {
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
}
