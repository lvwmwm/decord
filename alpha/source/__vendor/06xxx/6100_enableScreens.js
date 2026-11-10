// Module ID: 6100
// Function ID: 6101
// Name: enableScreens
// Dependencies: [6101, 6102, 6116, 6117, 6126, 6131, 6133, 6135, 6139, 6148, 6146, 6142, 6124, 6107, 6150]

// Module 6100 (enableScreens)
import TabsHost from "TabsHost" /* 6102 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6107 */;
import react_native from "react-native" /* 6116 */;
import InnerScreen from "InnerScreen" /* 6117 */;
import react_native2 from "react-native" /* 6124 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6126 */;
import SearchBarDefault from "SearchBar" /* 6131 */;
import ScreenContainerDefault from "ScreenContainer" /* 6133 */;
import ScreenStackDefault from "ScreenStack" /* 6135 */;
import _modDef6139 from "module_6139" /* 6139 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6142 */;
import ScreenFooterDefault from "ScreenFooter" /* 6146 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6148 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6150 */;
import react_native3 from "react-native" /* 6101 */;

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
export const ScreenStackItem = _modDef6139;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
