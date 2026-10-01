// Module ID: 16513
// Function ID: 16514
// Name: useSearchHostSurface
// Dependencies: [16459, 1486, 4531, 576, 2]
// Exports: useSearchHostSurfaceColor

// Module 16513 (useSearchHostSurface)
import nativeDefault from "native" /* 576 */;
import Link from "Link" /* 1486 */;
import useToken2 from "useToken" /* 4531 */;
import SearchNavigatorConstants from "SearchNavigatorConstants" /* 16459 */;
import size from "module_2" /* 2 */;

const SearchNavigatorScreens = SearchNavigatorConstants.SearchNavigatorScreens;
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSearchHostSurface.tsx");

export const useSearchHostSurfaceColor = function useSearchHostSurfaceColor() {
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
};
