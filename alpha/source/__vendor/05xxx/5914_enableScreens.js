// Module ID: 5914
// Function ID: 5915
// Name: enableScreens
// Dependencies: [5915, 5916, 5930, 5931, 5940, 5945, 5947, 5949, 5953, 5962, 5960, 5956, 5938, 5921, 5964]

// Module 5914 (enableScreens)
import TabsHost from "TabsHost" /* 5916 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5921 */;
import react_native from "react-native" /* 5930 */;
import InnerScreen from "InnerScreen" /* 5931 */;
import react_native2 from "react-native" /* 5938 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5940 */;
import SearchBarDefault from "SearchBar" /* 5945 */;
import ScreenContainerDefault from "ScreenContainer" /* 5947 */;
import ScreenStackDefault from "ScreenStack" /* 5949 */;
import _modDef5953 from "module_5953" /* 5953 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5956 */;
import ScreenFooterDefault from "ScreenFooter" /* 5960 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5962 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5964 */;
import react_native3 from "react-native" /* 5915 */;

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
export const ScreenStackItem = _modDef5953;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
