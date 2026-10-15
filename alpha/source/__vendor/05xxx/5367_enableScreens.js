// Module ID: 5367
// Function ID: 5368
// Name: enableScreens
// Dependencies: [5368, 5369, 5383, 5384, 5393, 5398, 5400, 5402, 5406, 5415, 5413, 5409, 5391, 5374, 5417]

// Module 5367 (enableScreens)
import TabsHost from "TabsHost" /* 5369 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5374 */;
import react_native from "react-native" /* 5383 */;
import InnerScreen from "InnerScreen" /* 5384 */;
import react_native2 from "react-native" /* 5391 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5393 */;
import SearchBarDefault from "SearchBar" /* 5398 */;
import ScreenContainerDefault from "ScreenContainer" /* 5400 */;
import ScreenStackDefault from "ScreenStack" /* 5402 */;
import _modDef5406 from "module_5406" /* 5406 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5409 */;
import ScreenFooterDefault from "ScreenFooter" /* 5413 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5415 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5417 */;
import react_native3 from "react-native" /* 5368 */;

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
export const ScreenStackItem = _modDef5406;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
