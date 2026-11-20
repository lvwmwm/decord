// Module ID: 5749
// Function ID: 5750
// Name: enableScreens
// Dependencies: [5750, 5751, 5765, 5766, 5775, 5780, 5782, 5784, 5788, 5797, 5795, 5791, 5773, 5756, 5799]

// Module 5749 (enableScreens)
import TabsHost from "TabsHost" /* 5751 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5756 */;
import react_native from "react-native" /* 5765 */;
import InnerScreen from "InnerScreen" /* 5766 */;
import react_native2 from "react-native" /* 5773 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5775 */;
import SearchBarDefault from "SearchBar" /* 5780 */;
import ScreenContainerDefault from "ScreenContainer" /* 5782 */;
import ScreenStackDefault from "ScreenStack" /* 5784 */;
import _modDef5788 from "module_5788" /* 5788 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5791 */;
import ScreenFooterDefault from "ScreenFooter" /* 5795 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5797 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5799 */;
import react_native3 from "react-native" /* 5750 */;

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
export const ScreenStackItem = _modDef5788;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
