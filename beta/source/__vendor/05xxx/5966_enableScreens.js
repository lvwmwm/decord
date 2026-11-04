// Module ID: 5966
// Function ID: 5967
// Name: enableScreens
// Dependencies: [5967, 5968, 5982, 5983, 5992, 5997, 5999, 6001, 6005, 6014, 6012, 6008, 5990, 5973, 6016]

// Module 5966 (enableScreens)
import TabsHost from "TabsHost" /* 5968 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5973 */;
import react_native from "react-native" /* 5982 */;
import InnerScreen from "InnerScreen" /* 5983 */;
import react_native2 from "react-native" /* 5990 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5992 */;
import SearchBarDefault from "SearchBar" /* 5997 */;
import ScreenContainerDefault from "ScreenContainer" /* 5999 */;
import ScreenStackDefault from "ScreenStack" /* 6001 */;
import _modDef6005 from "module_6005" /* 6005 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6008 */;
import ScreenFooterDefault from "ScreenFooter" /* 6012 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6014 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6016 */;
import react_native3 from "react-native" /* 5967 */;

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
export const ScreenStackItem = _modDef6005;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
