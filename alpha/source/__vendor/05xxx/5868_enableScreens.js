// Module ID: 5868
// Function ID: 5869
// Name: enableScreens
// Dependencies: [5869, 5870, 5884, 5885, 5894, 5899, 5901, 5903, 5907, 5916, 5914, 5910, 5892, 5875, 5918]

// Module 5868 (enableScreens)
import TabsHost from "TabsHost" /* 5870 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5875 */;
import react_native from "react-native" /* 5884 */;
import InnerScreen from "InnerScreen" /* 5885 */;
import react_native2 from "react-native" /* 5892 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5894 */;
import SearchBarDefault from "SearchBar" /* 5899 */;
import ScreenContainerDefault from "ScreenContainer" /* 5901 */;
import ScreenStackDefault from "ScreenStack" /* 5903 */;
import _modDef5907 from "module_5907" /* 5907 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5910 */;
import ScreenFooterDefault from "ScreenFooter" /* 5914 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5916 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5918 */;
import react_native3 from "react-native" /* 5869 */;

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
export const ScreenStackItem = _modDef5907;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
