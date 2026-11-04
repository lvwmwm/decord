// Module ID: 6101
// Function ID: 6102
// Name: enableScreens
// Dependencies: [6102, 6103, 6117, 6118, 6127, 6132, 6134, 6136, 6140, 6149, 6147, 6143, 6125, 6108, 6151]

// Module 6101 (enableScreens)
import TabsHost from "TabsHost" /* 6103 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6108 */;
import react_native from "react-native" /* 6117 */;
import InnerScreen from "InnerScreen" /* 6118 */;
import react_native2 from "react-native" /* 6125 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6127 */;
import SearchBarDefault from "SearchBar" /* 6132 */;
import ScreenContainerDefault from "ScreenContainer" /* 6134 */;
import ScreenStackDefault from "ScreenStack" /* 6136 */;
import _modDef6140 from "module_6140" /* 6140 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6143 */;
import ScreenFooterDefault from "ScreenFooter" /* 6147 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6149 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6151 */;
import react_native3 from "react-native" /* 6102 */;

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
export const ScreenStackItem = _modDef6140;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
