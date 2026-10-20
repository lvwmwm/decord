// Module ID: 5874
// Function ID: 5875
// Name: enableScreens
// Dependencies: [5875, 5876, 5890, 5891, 5900, 5905, 5907, 5909, 5913, 5922, 5920, 5916, 5898, 5881, 5924]

// Module 5874 (enableScreens)
import TabsHost from "TabsHost" /* 5876 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5881 */;
import react_native from "react-native" /* 5890 */;
import InnerScreen from "InnerScreen" /* 5891 */;
import react_native2 from "react-native" /* 5898 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5900 */;
import SearchBarDefault from "SearchBar" /* 5905 */;
import ScreenContainerDefault from "ScreenContainer" /* 5907 */;
import ScreenStackDefault from "ScreenStack" /* 5909 */;
import _modDef5913 from "module_5913" /* 5913 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5916 */;
import ScreenFooterDefault from "ScreenFooter" /* 5920 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5922 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5924 */;
import react_native3 from "react-native" /* 5875 */;

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
export const ScreenStackItem = _modDef5913;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
