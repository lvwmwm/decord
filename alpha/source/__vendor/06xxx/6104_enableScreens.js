// Module ID: 6104
// Function ID: 6105
// Name: enableScreens
// Dependencies: [6105, 6106, 6120, 6121, 6130, 6135, 6137, 6139, 6143, 6152, 6150, 6146, 6128, 6111, 6154]

// Module 6104 (enableScreens)
import TabsHost from "TabsHost" /* 6106 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6111 */;
import react_native from "react-native" /* 6120 */;
import InnerScreen from "InnerScreen" /* 6121 */;
import react_native2 from "react-native" /* 6128 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6130 */;
import SearchBarDefault from "SearchBar" /* 6135 */;
import ScreenContainerDefault from "ScreenContainer" /* 6137 */;
import ScreenStackDefault from "ScreenStack" /* 6139 */;
import _modDef6143 from "module_6143" /* 6143 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6146 */;
import ScreenFooterDefault from "ScreenFooter" /* 6150 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6152 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6154 */;
import react_native3 from "react-native" /* 6105 */;

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
export const ScreenStackItem = _modDef6143;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
