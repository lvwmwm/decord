// Module ID: 6086
// Function ID: 6087
// Name: enableScreens
// Dependencies: [6087, 6088, 6102, 6103, 6112, 6117, 6119, 6121, 6125, 6134, 6132, 6128, 6110, 6093, 6136]

// Module 6086 (enableScreens)
import TabsHost from "TabsHost" /* 6088 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6093 */;
import react_native from "react-native" /* 6102 */;
import InnerScreen from "InnerScreen" /* 6103 */;
import react_native2 from "react-native" /* 6110 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6112 */;
import SearchBarDefault from "SearchBar" /* 6117 */;
import ScreenContainerDefault from "ScreenContainer" /* 6119 */;
import ScreenStackDefault from "ScreenStack" /* 6121 */;
import _modDef6125 from "module_6125" /* 6125 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6128 */;
import ScreenFooterDefault from "ScreenFooter" /* 6132 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6134 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6136 */;
import react_native3 from "react-native" /* 6087 */;

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
export const ScreenStackItem = _modDef6125;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
