// Module ID: 5407
// Function ID: 5408
// Name: enableScreens
// Dependencies: [5408, 5409, 5423, 5424, 5433, 5438, 5440, 5442, 5446, 5455, 5453, 5449, 5431, 5414, 5457]

// Module 5407 (enableScreens)
import TabsHost from "TabsHost" /* 5409 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5414 */;
import react_native from "react-native" /* 5423 */;
import InnerScreen from "InnerScreen" /* 5424 */;
import react_native2 from "react-native" /* 5431 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5433 */;
import SearchBarDefault from "SearchBar" /* 5438 */;
import ScreenContainerDefault from "ScreenContainer" /* 5440 */;
import ScreenStackDefault from "ScreenStack" /* 5442 */;
import _modDef5446 from "module_5446" /* 5446 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5449 */;
import ScreenFooterDefault from "ScreenFooter" /* 5453 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5455 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5457 */;
import react_native3 from "react-native" /* 5408 */;

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
export const ScreenStackItem = _modDef5446;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
