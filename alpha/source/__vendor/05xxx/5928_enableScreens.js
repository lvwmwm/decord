// Module ID: 5928
// Function ID: 5929
// Name: enableScreens
// Dependencies: [5929, 5930, 5944, 5945, 5954, 5959, 5961, 5963, 5967, 5976, 5974, 5970, 5952, 5935, 5978]

// Module 5928 (enableScreens)
import TabsHost from "TabsHost" /* 5930 */;
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 5935 */;
import react_native from "react-native" /* 5944 */;
import InnerScreen from "InnerScreen" /* 5945 */;
import react_native2 from "react-native" /* 5952 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 5954 */;
import SearchBarDefault from "SearchBar" /* 5959 */;
import ScreenContainerDefault from "ScreenContainer" /* 5961 */;
import ScreenStackDefault from "ScreenStack" /* 5963 */;
import _modDef5967 from "module_5967" /* 5967 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5970 */;
import ScreenFooterDefault from "ScreenFooter" /* 5974 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5976 */;
import useTransitionProgressDefault from "useTransitionProgress" /* 5978 */;
import react_native3 from "react-native" /* 5929 */;

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
export const ScreenStackItem = _modDef5967;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = react_native2.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = react_native2.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = useTransitionProgressDefault;
