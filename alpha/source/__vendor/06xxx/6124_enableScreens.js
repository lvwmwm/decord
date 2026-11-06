// Module ID: 6124
// Function ID: 6125
// Name: enableScreens
// Dependencies: [6125, 6126, 6140, 6141, 6150, 6155, 6157, 6159, 6163, 6172, 6170, 6166, 6148, 6131, 6174]

// Module 6124 (enableScreens)
import TabsHost from "TabsHost" /* 6126 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6131 */;
import react_native from "react-native" /* 6140 */;
import InnerScreen from "InnerScreen" /* 6141 */;
import react_native2 from "react-native" /* 6148 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6150 */;
import SearchBarDefault from "SearchBar" /* 6155 */;
import ScreenContainerDefault from "ScreenContainer" /* 6157 */;
import ScreenStackDefault from "ScreenStack" /* 6159 */;
import _modDef6163 from "module_6163" /* 6163 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6166 */;
import ScreenFooterDefault from "ScreenFooter" /* 6170 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6172 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6174 */;
import react_native3 from "react-native" /* 6125 */;

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
export const ScreenStackItem = _modDef6163;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
