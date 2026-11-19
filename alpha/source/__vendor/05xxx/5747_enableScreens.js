// Module ID: 5747
// Function ID: 5748
// Name: enableScreens
// Dependencies: [5748, 5749, 5763, 5764, 5773, 5778, 5780, 5782, 5786, 5795, 5793, 5789, 5771, 5754, 5797]

// Module 5747 (enableScreens)
import TabsHost from "TabsHost" /* 5749 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5754 */;
import react_native from "react-native" /* 5763 */;
import InnerScreen from "InnerScreen" /* 5764 */;
import react_native2 from "react-native" /* 5771 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5773 */;
import SearchBarDefault from "SearchBar" /* 5778 */;
import ScreenContainerDefault from "ScreenContainer" /* 5780 */;
import ScreenStackDefault from "ScreenStack" /* 5782 */;
import _modDef5786 from "module_5786" /* 5786 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5789 */;
import ScreenFooterDefault from "ScreenFooter" /* 5793 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5795 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5797 */;
import react_native3 from "react-native" /* 5748 */;

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
export const ScreenStackItem = _modDef5786;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
