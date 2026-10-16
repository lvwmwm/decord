// Module ID: 5370
// Function ID: 5371
// Name: enableScreens
// Dependencies: [5371, 5372, 5386, 5387, 5396, 5401, 5403, 5405, 5409, 5418, 5416, 5412, 5394, 5377, 5420]

// Module 5370 (enableScreens)
import TabsHost from "TabsHost" /* 5372 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5377 */;
import react_native from "react-native" /* 5386 */;
import InnerScreen from "InnerScreen" /* 5387 */;
import react_native2 from "react-native" /* 5394 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5396 */;
import SearchBarDefault from "SearchBar" /* 5401 */;
import ScreenContainerDefault from "ScreenContainer" /* 5403 */;
import ScreenStackDefault from "ScreenStack" /* 5405 */;
import _modDef5409 from "module_5409" /* 5409 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5412 */;
import ScreenFooterDefault from "ScreenFooter" /* 5416 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5418 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5420 */;
import react_native3 from "react-native" /* 5371 */;

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
export const ScreenStackItem = _modDef5409;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
