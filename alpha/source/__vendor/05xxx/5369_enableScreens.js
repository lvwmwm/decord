// Module ID: 5369
// Function ID: 5370
// Name: enableScreens
// Dependencies: [5370, 5371, 5385, 5386, 5395, 5400, 5402, 5404, 5408, 5417, 5415, 5411, 5393, 5376, 5419]

// Module 5369 (enableScreens)
import TabsHost from "TabsHost" /* 5371 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5376 */;
import react_native from "react-native" /* 5385 */;
import InnerScreen from "InnerScreen" /* 5386 */;
import react_native2 from "react-native" /* 5393 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5395 */;
import SearchBarDefault from "SearchBar" /* 5400 */;
import ScreenContainerDefault from "ScreenContainer" /* 5402 */;
import ScreenStackDefault from "ScreenStack" /* 5404 */;
import _modDef5408 from "module_5408" /* 5408 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5411 */;
import ScreenFooterDefault from "ScreenFooter" /* 5415 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5417 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5419 */;
import react_native3 from "react-native" /* 5370 */;

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
export const ScreenStackItem = _modDef5408;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
