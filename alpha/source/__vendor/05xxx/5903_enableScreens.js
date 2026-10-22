// Module ID: 5903
// Function ID: 5904
// Name: enableScreens
// Dependencies: [5904, 5905, 5919, 5920, 5929, 5934, 5936, 5938, 5942, 5951, 5949, 5945, 5927, 5910, 5953]

// Module 5903 (enableScreens)
import TabsHost from "TabsHost" /* 5905 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5910 */;
import react_native from "react-native" /* 5919 */;
import InnerScreen from "InnerScreen" /* 5920 */;
import react_native2 from "react-native" /* 5927 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5929 */;
import SearchBarDefault from "SearchBar" /* 5934 */;
import ScreenContainerDefault from "ScreenContainer" /* 5936 */;
import ScreenStackDefault from "ScreenStack" /* 5938 */;
import _modDef5942 from "module_5942" /* 5942 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5945 */;
import ScreenFooterDefault from "ScreenFooter" /* 5949 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5951 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5953 */;
import react_native3 from "react-native" /* 5904 */;

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
export const ScreenStackItem = _modDef5942;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
