// Module ID: 5212
// Function ID: 5213
// Name: enableScreens
// Dependencies: [5213, 5214, 5228, 5229, 5238, 5243, 5245, 5247, 5251, 5260, 5258, 5254, 5236, 5219, 5262]

// Module 5212 (enableScreens)
import TabsHost from "TabsHost" /* 5214 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5219 */;
import react_native from "react-native" /* 5228 */;
import InnerScreen from "InnerScreen" /* 5229 */;
import react_native2 from "react-native" /* 5236 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5238 */;
import SearchBarDefault from "SearchBar" /* 5243 */;
import ScreenContainerDefault from "ScreenContainer" /* 5245 */;
import ScreenStackDefault from "ScreenStack" /* 5247 */;
import _modDef5251 from "module_5251" /* 5251 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5254 */;
import ScreenFooterDefault from "ScreenFooter" /* 5258 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5260 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5262 */;
import react_native3 from "react-native" /* 5213 */;

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
export const ScreenStackItem = _modDef5251;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
