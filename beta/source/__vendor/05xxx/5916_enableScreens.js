// Module ID: 5916
// Function ID: 5917
// Name: enableScreens
// Dependencies: [5917, 5918, 5932, 5933, 5942, 5947, 5949, 5951, 5955, 5964, 5962, 5958, 5940, 5923, 5966]

// Module 5916 (enableScreens)
import TabsHost from "TabsHost" /* 5918 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5923 */;
import react_native from "react-native" /* 5932 */;
import InnerScreen from "InnerScreen" /* 5933 */;
import react_native2 from "react-native" /* 5940 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5942 */;
import SearchBarDefault from "SearchBar" /* 5947 */;
import ScreenContainerDefault from "ScreenContainer" /* 5949 */;
import ScreenStackDefault from "ScreenStack" /* 5951 */;
import _modDef5955 from "module_5955" /* 5955 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5958 */;
import ScreenFooterDefault from "ScreenFooter" /* 5962 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5964 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5966 */;
import react_native3 from "react-native" /* 5917 */;

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
export const ScreenStackItem = _modDef5955;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
