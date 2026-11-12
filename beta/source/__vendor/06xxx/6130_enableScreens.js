// Module ID: 6130
// Function ID: 6131
// Name: enableScreens
// Dependencies: [6131, 6132, 6146, 6147, 6156, 6161, 6163, 6165, 6169, 6178, 6176, 6172, 6154, 6137, 6180]

// Module 6130 (enableScreens)
import TabsHost from "TabsHost" /* 6132 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6137 */;
import react_native from "react-native" /* 6146 */;
import InnerScreen from "InnerScreen" /* 6147 */;
import react_native2 from "react-native" /* 6154 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6156 */;
import SearchBarDefault from "SearchBar" /* 6161 */;
import ScreenContainerDefault from "ScreenContainer" /* 6163 */;
import ScreenStackDefault from "ScreenStack" /* 6165 */;
import _modDef6169 from "module_6169" /* 6169 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6172 */;
import ScreenFooterDefault from "ScreenFooter" /* 6176 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6178 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6180 */;
import react_native3 from "react-native" /* 6131 */;

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
export const ScreenStackItem = _modDef6169;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
