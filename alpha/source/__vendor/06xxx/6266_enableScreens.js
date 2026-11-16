// Module ID: 6266
// Function ID: 6267
// Name: enableScreens
// Dependencies: [6267, 6268, 6282, 6283, 6292, 6297, 6299, 6301, 6305, 6314, 6312, 6308, 6290, 6273, 6316]

// Module 6266 (enableScreens)
import TabsHost from "TabsHost" /* 6268 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6273 */;
import react_native from "react-native" /* 6282 */;
import InnerScreen from "InnerScreen" /* 6283 */;
import react_native2 from "react-native" /* 6290 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6292 */;
import SearchBarDefault from "SearchBar" /* 6297 */;
import ScreenContainerDefault from "ScreenContainer" /* 6299 */;
import ScreenStackDefault from "ScreenStack" /* 6301 */;
import _modDef6305 from "module_6305" /* 6305 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6308 */;
import ScreenFooterDefault from "ScreenFooter" /* 6312 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6314 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6316 */;
import react_native3 from "react-native" /* 6267 */;

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
export const ScreenStackItem = _modDef6305;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
