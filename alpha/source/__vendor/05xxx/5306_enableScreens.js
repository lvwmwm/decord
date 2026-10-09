// Module ID: 5306
// Function ID: 5307
// Name: enableScreens
// Dependencies: [5307, 5308, 5322, 5323, 5332, 5337, 5339, 5341, 5345, 5354, 5352, 5348, 5330, 5313, 5356]

// Module 5306 (enableScreens)
import TabsHost from "TabsHost" /* 5308 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5313 */;
import react_native from "react-native" /* 5322 */;
import InnerScreen from "InnerScreen" /* 5323 */;
import react_native2 from "react-native" /* 5330 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5332 */;
import SearchBarDefault from "SearchBar" /* 5337 */;
import ScreenContainerDefault from "ScreenContainer" /* 5339 */;
import ScreenStackDefault from "ScreenStack" /* 5341 */;
import _modDef5345 from "module_5345" /* 5345 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5348 */;
import ScreenFooterDefault from "ScreenFooter" /* 5352 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5354 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5356 */;
import react_native3 from "react-native" /* 5307 */;

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
export const ScreenStackItem = _modDef5345;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
