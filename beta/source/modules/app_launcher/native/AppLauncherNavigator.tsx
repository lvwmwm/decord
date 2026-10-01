// Module ID: 11564
// Function ID: 11565
// Name: AppLauncherNavigator
// Dependencies: [109, 19, 1484, 1074, 21, 7339, 4836, 576, 6583, 6603, 4703, 1611, 6421, 5016, 1486, 11565, 11609, 11635, 11677, 10785, 2]

// Module 11564 (AppLauncherNavigator)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import AppLauncherHomeScreenDefault from "AppLauncherHomeScreen" /* 11565 */;
import AppLauncherApplicationViewScreenDefault from "AppLauncherApplicationViewScreen" /* 11609 */;
import AppLauncherCommandViewScreenDefault from "AppLauncherCommandViewScreen" /* 11635 */;
import AppLauncherViewAllScreenDefault from "AppLauncherViewAllScreen" /* 11677 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let closure_3 = ["initialRouteName"];
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = NativeStackView.createNativeStackNavigator();
let obj = { navigator: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(function AppLauncherNavigator(arg0) {
  let Navigator;
  let bottomSheetExpandReasonRef;
  let bottomSheetIndex;
  let bottomSheetPosition;
  let chatInputRef;
  let contentStyle;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initialSearchQuery;
  let items1;
  let items2;
  let keyboardCloseReasonRef;
  let obj10;
  let obj13;
  let obj16;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let onActivityItemSelected;
  let overrideParams;
  let tmp10;
  let width;
  ({ context, entrypoint } = arg0);
  ({ expandBottomSheet, overrideParams } = arg0);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, contentStyle, keyboardCloseReasonRef, onActivityItemSelected, width } = arg0);
  const tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations;
  const tmp4 = closure_11();
  const useKeyboardContextForType = entrypoint(4703).useKeyboardContextForType;
  entrypoint(4703);
  if (overrideParams == null) {
    overrideParams = useKeyboardContextForType(entrypoint(1611).KeyboardTypes.APP_LAUNCHER);
  }
  const tmp5Result = entrypoint(6421);
  const accessibilityNativeStackOptions = tmp5Result.useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj14 = _objectWithoutProperties(overrideParams, closure_3);
  const items = [entrypoint];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = AppAnalyticsUtils;
    const obj2 = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj2);
  }, items);
  const NavigationIndependentTree = tmp5(1486).NavigationIndependentTree;
  const NavigationContainer = tmp5(1486).NavigationContainer;
  let obj = { value: analyticsLocations, children: tmp10(Navigator, obj2) };
  obj2 = { initialRouteName, screenOptions: obj3, children: items2 };
  obj3 = { contentStyle: items1, headerShown: false, fullScreenGestureEnabled: true };
  items1 = [tmp4.navigator, contentStyle];
  const AnalyticsLocationProvider = tmp5(6583).AnalyticsLocationProvider;
  Navigator = closure_10.Navigator;
  const merged = Object.assign(accessibilityNativeStackOptions);
  const Screen = closure_10.Screen;
  const obj4 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: obj5 };
  obj5 = { context, initialSearchQuery };
  initialSearchQuery = undefined;
  tmp10 = closure_9;
  if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  items2 = [closure_8(Screen, obj4), , , ];
  const Screen2 = tmp11.Screen;
  const obj6 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: AppLauncherApplicationViewScreenDefault, initialParams: obj7 };
  let obj8 = obj14;
  obj7 = { context, expandBottomSheet };
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj8 = {};
  }
  const merged1 = Object.assign(obj8);
  items2[1] = closure_8(Screen2, obj6);
  const Screen3 = tmp11.Screen;
  let tmp16;
  const obj9 = { name: AppLauncherRouteName.COMMAND_VIEW, component: AppLauncherCommandViewScreenDefault, initialParams: obj10 };
  if ("channel" === context.type) {
    tmp16 = context;
  }
  let obj11 = obj14;
  obj10 = { context: tmp16, expandBottomSheet };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
    obj11 = {};
  }
  const merged2 = Object.assign(obj11);
  items2[2] = closure_8(Screen3, obj9);
  const Screen4 = tmp11.Screen;
  const obj12 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: AppLauncherViewAllScreenDefault, initialParams: obj13 };
  obj13 = { context };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj14 = {};
  }
  const obj15 = { children: closure_8(NavigationContainer, obj16) };
  obj16 = { children: closure_8(AnalyticsLocationProvider, obj) };
  const merged3 = Object.assign(obj14);
  items2[3] = closure_8(Screen4, obj12);
  let tmp20 = "customId" in overrideParams;
  const tmp9Result = closure_8(NavigationIndependentTree, obj15);
  if (!tmp20) {
    tmp20 = "referrerId" in overrideParams;
  }
  let tmp21 = null;
  if (tmp20) {
    const obj17 = { customId: null, referrerId: null };
    ({ customId: obj18.customId, referrerId: obj18.referrerId } = overrideParams);
    tmp21 = obj17;
  }
  const obj19 = { value: { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: tmp21, keyboardCloseReasonRef, onActivityItemSelected, width }, children: tmp9Result };
  return closure_8(entrypoint(10785).AppLauncherContext.Provider, obj19);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;
