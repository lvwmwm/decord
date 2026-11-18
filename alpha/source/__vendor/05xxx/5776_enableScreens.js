// Module ID: 5776
// Function ID: 5777
// Name: enableScreens
// Dependencies: [5777, 5778, 5792, 5793, 5802, 5807, 5809, 5811, 5815, 5824, 5822, 5818, 5800, 5783, 5826]

// Module 5776 (enableScreens)
import TabsHost from "TabsHost" /* 5778 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5783 */;
import react_native from "react-native" /* 5792 */;
import InnerScreen from "InnerScreen" /* 5793 */;
import react_native2 from "react-native" /* 5800 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5802 */;
import SearchBarDefault from "SearchBar" /* 5807 */;
import ScreenContainerDefault from "ScreenContainer" /* 5809 */;
import ScreenStackDefault from "ScreenStack" /* 5811 */;
import _modDef5815 from "module_5815" /* 5815 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5818 */;
import ScreenFooterDefault from "ScreenFooter" /* 5822 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5824 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5826 */;
import react_native3 from "react-native" /* 5777 */;

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
export const ScreenStackItem = _modDef5815;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
