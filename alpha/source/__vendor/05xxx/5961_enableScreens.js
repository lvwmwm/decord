// Module ID: 5961
// Function ID: 5962
// Name: enableScreens
// Dependencies: [5962, 5963, 5977, 5978, 5987, 5992, 5994, 5996, 6000, 6009, 6007, 6003, 5985, 5968, 6011]

// Module 5961 (enableScreens)
import TabsHost from "TabsHost" /* 5963 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5968 */;
import react_native from "react-native" /* 5977 */;
import InnerScreen from "InnerScreen" /* 5978 */;
import react_native2 from "react-native" /* 5985 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5987 */;
import SearchBarDefault from "SearchBar" /* 5992 */;
import ScreenContainerDefault from "ScreenContainer" /* 5994 */;
import ScreenStackDefault from "ScreenStack" /* 5996 */;
import _modDef6000 from "module_6000" /* 6000 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 6003 */;
import ScreenFooterDefault from "ScreenFooter" /* 6007 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6009 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6011 */;
import react_native3 from "react-native" /* 5962 */;

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
export const ScreenStackItem = _modDef6000;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
