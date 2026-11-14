// Module ID: 6276
// Function ID: 6277
// Name: enableScreens
// Dependencies: [6277, 6278, 6292, 6293, 6302, 6307, 6309, 6311, 6315, 6324, 6322, 6318, 6300, 6283, 6326]

// Module 6276 (enableScreens)
import TabsHost from "TabsHost" /* 6278 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6283 */;
import react_native from "react-native" /* 6292 */;
import InnerScreen from "InnerScreen" /* 6293 */;
import react_native2 from "react-native" /* 6300 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6302 */;
import SearchBarDefault from "SearchBar" /* 6307 */;
import ScreenContainerDefault from "ScreenContainer" /* 6309 */;
import ScreenStackDefault from "ScreenStack" /* 6311 */;
import _modDef6315 from "module_6315" /* 6315 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6318 */;
import ScreenFooterDefault from "ScreenFooter" /* 6322 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6324 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6326 */;
import react_native3 from "react-native" /* 6277 */;

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
export const ScreenStackItem = _modDef6315;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
