// Module ID: 5871
// Function ID: 5872
// Name: enableScreens
// Dependencies: [5872, 5873, 5887, 5888, 5897, 5902, 5904, 5906, 5910, 5919, 5917, 5913, 5895, 5878, 5921]

// Module 5871 (enableScreens)
import TabsHost from "TabsHost" /* 5873 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5878 */;
import react_native from "react-native" /* 5887 */;
import InnerScreen from "InnerScreen" /* 5888 */;
import react_native2 from "react-native" /* 5895 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5897 */;
import SearchBarDefault from "SearchBar" /* 5902 */;
import ScreenContainerDefault from "ScreenContainer" /* 5904 */;
import ScreenStackDefault from "ScreenStack" /* 5906 */;
import _modDef5910 from "module_5910" /* 5910 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5913 */;
import ScreenFooterDefault from "ScreenFooter" /* 5917 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5919 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5921 */;
import react_native3 from "react-native" /* 5872 */;

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
export const ScreenStackItem = _modDef5910;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
