// Module ID: 5312
// Function ID: 5313
// Name: enableScreens
// Dependencies: [5313, 5314, 5328, 5329, 5338, 5343, 5345, 5347, 5351, 5360, 5358, 5354, 5336, 5319, 5362]

// Module 5312 (enableScreens)
import TabsHost from "TabsHost" /* 5314 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5319 */;
import react_native from "react-native" /* 5328 */;
import InnerScreen from "InnerScreen" /* 5329 */;
import react_native2 from "react-native" /* 5336 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5338 */;
import SearchBarDefault from "SearchBar" /* 5343 */;
import ScreenContainerDefault from "ScreenContainer" /* 5345 */;
import ScreenStackDefault from "ScreenStack" /* 5347 */;
import _modDef5351 from "module_5351" /* 5351 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5354 */;
import ScreenFooterDefault from "ScreenFooter" /* 5358 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5360 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5362 */;
import react_native3 from "react-native" /* 5313 */;

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
export const ScreenStackItem = _modDef5351;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
