// Module ID: 6054
// Function ID: 6055
// Name: enableScreens
// Dependencies: [6055, 6056, 6070, 6071, 6080, 6085, 6087, 6089, 6093, 6102, 6100, 6096, 6078, 6061, 6104]

// Module 6054 (enableScreens)
import TabsHost from "TabsHost" /* 6056 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6061 */;
import react_native from "react-native" /* 6070 */;
import InnerScreen from "InnerScreen" /* 6071 */;
import react_native2 from "react-native" /* 6078 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 6080 */;
import SearchBarDefault from "SearchBar" /* 6085 */;
import ScreenContainerDefault from "ScreenContainer" /* 6087 */;
import ScreenStackDefault from "ScreenStack" /* 6089 */;
import _modDef6093 from "module_6093" /* 6093 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6096 */;
import ScreenFooterDefault from "ScreenFooter" /* 6100 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6102 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6104 */;
import react_native3 from "react-native" /* 6055 */;

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
export const ScreenStackItem = _modDef6093;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
