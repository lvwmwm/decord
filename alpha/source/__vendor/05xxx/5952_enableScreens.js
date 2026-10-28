// Module ID: 5952
// Function ID: 5953
// Name: enableScreens
// Dependencies: [5953, 5954, 5968, 5969, 5978, 5983, 5985, 5987, 5991, 6000, 5998, 5994, 5976, 5959, 6002]

// Module 5952 (enableScreens)
import TabsHost from "TabsHost" /* 5954 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5959 */;
import react_native from "react-native" /* 5968 */;
import InnerScreen from "InnerScreen" /* 5969 */;
import react_native2 from "react-native" /* 5976 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5978 */;
import SearchBarDefault from "SearchBar" /* 5983 */;
import ScreenContainerDefault from "ScreenContainer" /* 5985 */;
import ScreenStackDefault from "ScreenStack" /* 5987 */;
import _modDef5991 from "module_5991" /* 5991 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5994 */;
import ScreenFooterDefault from "ScreenFooter" /* 5998 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 6000 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 6002 */;
import react_native3 from "react-native" /* 5953 */;

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
export const ScreenStackItem = _modDef5991;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
