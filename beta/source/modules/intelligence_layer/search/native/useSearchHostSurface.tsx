// Module ID: 18766
// Function ID: 18767
// Name: useSearchHostSurface
// Dependencies: [18708, 1498, 5596, 575, 2]
// Exports: useSearchHostSurfaceColor

// Module 18766 (useSearchHostSurface)
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1498 */;
import useToken2 from "useToken" /* 5596 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 18708 */;
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
