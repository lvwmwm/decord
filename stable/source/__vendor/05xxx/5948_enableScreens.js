// Module ID: 5948
// Function ID: 5949
// Name: enableScreens
// Dependencies: [5949, 5950, 5964, 5965, 5974, 5979, 5981, 5983, 5987, 5996, 5994, 5990, 5972, 5955, 5998]

// Module 5948 (enableScreens)
import TabsHost from "TabsHost" /* 5950 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5955 */;
import react_native from "react-native" /* 5964 */;
import InnerScreen from "InnerScreen" /* 5965 */;
import react_native2 from "react-native" /* 5972 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5974 */;
import SearchBarDefault from "SearchBar" /* 5979 */;
import ScreenContainerDefault from "ScreenContainer" /* 5981 */;
import ScreenStackDefault from "ScreenStack" /* 5983 */;
import _modDef5987 from "module_5987" /* 5987 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5990 */;
import ScreenFooterDefault from "ScreenFooter" /* 5994 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5996 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5998 */;
import react_native3 from "react-native" /* 5949 */;

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
export const ScreenStackItem = _modDef5987;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
