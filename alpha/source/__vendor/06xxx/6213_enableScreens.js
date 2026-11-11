// Module ID: 6213
// Function ID: 6214
// Name: enableScreens
// Dependencies: [6214, 6215, 6229, 6230, 6239, 6244, 6246, 6248, 6252, 6261, 6259, 6255, 6237, 6220, 6263]

// Module 6213 (enableScreens)
import TabsHost from "TabsHost" /* 6215 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6220 */;
import react_native from "react-native" /* 6229 */;
import InnerScreen from "InnerScreen" /* 6230 */;
import react_native2 from "react-native" /* 6237 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6239 */;
import SearchBarDefault from "SearchBar" /* 6244 */;
import ScreenContainerDefault from "ScreenContainer" /* 6246 */;
import ScreenStackDefault from "ScreenStack" /* 6248 */;
import _modDef6252 from "module_6252" /* 6252 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6255 */;
import ScreenFooterDefault from "ScreenFooter" /* 6259 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6261 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6263 */;
import react_native3 from "react-native" /* 6214 */;

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
export const ScreenStackItem = _modDef6252;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
