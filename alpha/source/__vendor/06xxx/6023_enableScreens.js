// Module ID: 6023
// Function ID: 6024
// Name: enableScreens
// Dependencies: [6024, 6025, 6039, 6040, 6049, 6054, 6056, 6058, 6062, 6071, 6069, 6065, 6047, 6030, 6073]

// Module 6023 (enableScreens)
import TabsHost from "TabsHost" /* 6025 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6030 */;
import react_native from "react-native" /* 6039 */;
import InnerScreen from "InnerScreen" /* 6040 */;
import react_native2 from "react-native" /* 6047 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6049 */;
import SearchBarDefault from "SearchBar" /* 6054 */;
import ScreenContainerDefault from "ScreenContainer" /* 6056 */;
import ScreenStackDefault from "ScreenStack" /* 6058 */;
import _modDef6062 from "module_6062" /* 6062 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6065 */;
import ScreenFooterDefault from "ScreenFooter" /* 6069 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6071 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6073 */;
import react_native3 from "react-native" /* 6024 */;

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
export const ScreenStackItem = _modDef6062;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
