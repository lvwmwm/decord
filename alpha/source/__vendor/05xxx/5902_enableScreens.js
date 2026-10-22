// Module ID: 5902
// Function ID: 5903
// Name: enableScreens
// Dependencies: [5903, 5904, 5918, 5919, 5928, 5933, 5935, 5937, 5941, 5950, 5948, 5944, 5926, 5909, 5952]

// Module 5902 (enableScreens)
import TabsHost from "TabsHost" /* 5904 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5909 */;
import react_native from "react-native" /* 5918 */;
import InnerScreen from "InnerScreen" /* 5919 */;
import react_native2 from "react-native" /* 5926 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5928 */;
import SearchBarDefault from "SearchBar" /* 5933 */;
import ScreenContainerDefault from "ScreenContainer" /* 5935 */;
import ScreenStackDefault from "ScreenStack" /* 5937 */;
import _modDef5941 from "module_5941" /* 5941 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5944 */;
import ScreenFooterDefault from "ScreenFooter" /* 5948 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5950 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5952 */;
import react_native3 from "react-native" /* 5903 */;

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
export const ScreenStackItem = _modDef5941;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
