// Module ID: 5307
// Function ID: 5308
// Name: enableScreens
// Dependencies: [5308, 5309, 5323, 5324, 5333, 5338, 5340, 5342, 5346, 5355, 5353, 5349, 5331, 5314, 5357]

// Module 5307 (enableScreens)
import TabsHost from "TabsHost" /* 5309 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5314 */;
import react_native from "react-native" /* 5323 */;
import InnerScreen from "InnerScreen" /* 5324 */;
import react_native2 from "react-native" /* 5331 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5333 */;
import SearchBarDefault from "SearchBar" /* 5338 */;
import ScreenContainerDefault from "ScreenContainer" /* 5340 */;
import ScreenStackDefault from "ScreenStack" /* 5342 */;
import _modDef5346 from "module_5346" /* 5346 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5349 */;
import ScreenFooterDefault from "ScreenFooter" /* 5353 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5355 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5357 */;
import react_native3 from "react-native" /* 5308 */;

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
export const ScreenStackItem = _modDef5346;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
