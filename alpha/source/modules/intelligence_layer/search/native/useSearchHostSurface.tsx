// Module ID: 19527
// Function ID: 19528
// Name: useSearchHostSurface
// Dependencies: [19469, 1503, 5902, 575, 2]
// Exports: useSearchHostSurfaceColor

// Module 19527 (useSearchHostSurface)
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1503 */;
import useToken2 from "useToken" /* 5902 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 19469 */;
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
