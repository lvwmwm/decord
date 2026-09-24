// Module ID: 17265
// Function ID: 17266
// Name: useSearchHostSurface
// Dependencies: [17211, 1485, 4526, 576, 2]
// Exports: useSearchHostSurfaceColor

// Module 17265 (useSearchHostSurface)
import nativeDefault from "native" /* 576 */;
import Link from "Link" /* 1485 */;
import useToken from "useToken" /* 4526 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 17211 */;
import size from "module_2" /* 2 */;

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSearchHostSurface.tsx");

export const useSearchHostSurfaceColor = function useSearchHostSurfaceColor() {
  const route = Link.useRoute();
  if (route.name === SearchNavigatorScreens.SEARCH_TABS) {
    let MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    MOBILE_ACTIONSHEET_BACKGROUND = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
  }
  return useToken.useToken(MOBILE_ACTIONSHEET_BACKGROUND);
};
