// Module ID: 6098
// Function ID: 6099
// Name: enableScreens
// Dependencies: [6099, 6100, 6114, 6115, 6124, 6129, 6131, 6133, 6137, 6146, 6144, 6140, 6122, 6105, 6148]

// Module 6098 (enableScreens)
import TabsHost from "TabsHost" /* 6100 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6105 */;
import react_native from "react-native" /* 6114 */;
import InnerScreen from "InnerScreen" /* 6115 */;
import react_native2 from "react-native" /* 6122 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6124 */;
import SearchBarDefault from "SearchBar" /* 6129 */;
import ScreenContainerDefault from "ScreenContainer" /* 6131 */;
import ScreenStackDefault from "ScreenStack" /* 6133 */;
import _modDef6137 from "module_6137" /* 6137 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6140 */;
import ScreenFooterDefault from "ScreenFooter" /* 6144 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6146 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6148 */;
import react_native3 from "react-native" /* 6099 */;

const InnerScreenDefault = InnerScreen;

for (const key10015 in TabsHost) {
  exports[key10015] = TabsHost[key10015];
  continue;
}
const InnerScreen_export = InnerScreen.InnerScreen;
const ScreenStackHeaderSubview_export = ScreenStackHeaderSubview.ScreenStackHeaderSubview;

export const enableScreens = react_native.enableScreens;
export const enableFreeze = react_native.enableFreeze;
export const screensEnabled = react_native.screensEnabled;
export const freezeEnabled = react_native.freezeEnabled;
export const Screen = InnerScreenDefault;
export { InnerScreen_export as InnerScreen };
export const ScreenContext = InnerScreen.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export { ScreenStackHeaderSubview_export as ScreenStackHeaderSubview };
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = SearchBarDefault;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef6137;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
