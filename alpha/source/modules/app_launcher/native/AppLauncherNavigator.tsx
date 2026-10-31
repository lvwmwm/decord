// Module ID: 12269
// Function ID: 12270
// Name: AppLauncherNavigator
// Dependencies: [109, 19, 1496, 1072, 21, 9856, 5014, 575, 7326, 7351, 1498, 6025, 5209, 1623, 7169, 5760, 12270, 12317, 12344, 12390, 11500, 2]

// Module 12269 (AppLauncherNavigator)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1496 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5760 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9856 */;
import createStyles from "createStyles" /* 5014 */;
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
const memoResult = react.memo(function AppLauncherNavigator(bottomSheetExpandReasonRef) {
  let AnalyticsLocationProvider;
  let Navigator;
  let chatInputRef;
  let context;
  let expandBottomSheet;
  let initialSearchQuery;
  let items1;
  let items2;
  let keyboardCloseReasonRef;
  let obj11;
  let obj14;
  let obj17;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let tmp12;
  bottomSheetExpandReasonRef = bottomSheetExpandReasonRef.bottomSheetExpandReasonRef;
  const bottomSheetIndex = bottomSheetExpandReasonRef.bottomSheetIndex;
  const bottomSheetPosition = bottomSheetExpandReasonRef.bottomSheetPosition;
  ({ context, chatInputRef } = bottomSheetExpandReasonRef);
  const entrypoint = bottomSheetExpandReasonRef.entrypoint;
  ({ expandBottomSheet, keyboardCloseReasonRef } = bottomSheetExpandReasonRef);
  const onActivityItemSelected = bottomSheetExpandReasonRef.onActivityItemSelected;
  const width = bottomSheetExpandReasonRef.width;
  let overrideParams = bottomSheetExpandReasonRef.overrideParams;
  let customId;
  let referrerId;
  let c10;
  let memo;
  let tmp = bottomSheetIndex;
  const contentStyle = bottomSheetExpandReasonRef.contentStyle;
  const tmp3 = bottomSheetIndex(bottomSheetPosition[8]);
  const analyticsLocations = tmp3(bottomSheetIndex(bottomSheetPosition[9]).APP_LAUNCHER).analyticsLocations;
  let obj = bottomSheetExpandReasonRef(bottomSheetPosition[10]);
  const navigationContainerRef = obj.useNavigationContainerRef();
  let obj2 = bottomSheetExpandReasonRef(bottomSheetPosition[11]);
  const trackNavigationBackPress = obj2.useTrackNavigationBackPress(navigationContainerRef);
  const tmp7 = memo();
  const useKeyboardContextForType = bottomSheetExpandReasonRef(bottomSheetPosition[12]).useKeyboardContextForType;
  bottomSheetExpandReasonRef(bottomSheetPosition[12]);
  if (overrideParams == null) {
    overrideParams = useKeyboardContextForType(bottomSheetExpandReasonRef(bottomSheetPosition[13]).KeyboardTypes.APP_LAUNCHER);
  }
  const tmp4Result = bottomSheetExpandReasonRef(bottomSheetPosition[14]);
  const accessibilityNativeStackOptions = tmp4Result.useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj18 = entrypoint(overrideParams, chatInputRef);
  const items = [entrypoint];
  const layoutEffect = keyboardCloseReasonRef.useLayoutEffect(() => {
    const obj = AppAnalyticsUtils;
    const obj2 = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj2);
  }, items);
  const NavigationIndependentTree = tmp4(tmp2[10]).NavigationIndependentTree;
  const obj3 = { ref: navigationContainerRef, children: customId(AnalyticsLocationProvider, obj4) };
  const NavigationContainer = tmp4(tmp2[10]).NavigationContainer;
  obj4 = { value: analyticsLocations, children: tmp12(Navigator, obj6) };
  obj6 = { initialRouteName, screenOptions: obj7, children: items2 };
  obj7 = { contentStyle: items1, headerShown: false, fullScreenGestureEnabled: true };
  items1 = [tmp7.navigator, contentStyle];
  AnalyticsLocationProvider = tmp4(tmp2[8]).AnalyticsLocationProvider;
  Navigator = c10.Navigator;
  const merged = Object.assign(accessibilityNativeStackOptions);
  const Screen = c10.Screen;
  const obj8 = { name: onActivityItemSelected.HOME, component: tmp(bottomSheetPosition[16]), initialParams: obj9 };
  obj9 = { context, initialSearchQuery };
  initialSearchQuery = undefined;
  tmp12 = referrerId;
  if (overrideParams.initialRouteName === onActivityItemSelected.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  items2 = [customId(Screen, obj8), , , ];
  const Screen2 = tmp13.Screen;
  const obj10 = { name: onActivityItemSelected.APPLICATION_VIEW, component: tmp(bottomSheetPosition[17]), initialParams: obj11 };
  let obj12 = obj18;
  obj11 = { context, expandBottomSheet };
  if (initialRouteName !== onActivityItemSelected.APPLICATION_VIEW) {
    obj12 = {};
  }
  const merged1 = Object.assign(obj12);
  items2[1] = customId(Screen2, obj10);
  const Screen3 = tmp13.Screen;
  let tmp18;
  const obj13 = { name: onActivityItemSelected.COMMAND_VIEW, component: tmp(bottomSheetPosition[18]), initialParams: obj14 };
  if ("channel" === context.type) {
    tmp18 = context;
  }
  let obj15 = obj18;
  obj14 = { context: tmp18, expandBottomSheet };
  if (overrideParams.initialRouteName !== onActivityItemSelected.COMMAND_VIEW) {
    obj15 = {};
  }
  const merged2 = Object.assign(obj15);
  items2[2] = customId(Screen3, obj13);
  const Screen4 = tmp13.Screen;
  const obj16 = { name: onActivityItemSelected.APP_LIST_VIEW, component: tmp(bottomSheetPosition[19]), initialParams: obj17 };
  obj17 = { context };
  if (overrideParams.initialRouteName !== onActivityItemSelected.APP_LIST_VIEW) {
    obj18 = {};
  }
  const obj19 = { children: customId(NavigationContainer, obj3) };
  const merged3 = Object.assign(obj18);
  items2[3] = customId(Screen4, obj16);
  c10 = false;
  let tmp22 = "customId" in overrideParams;
  const children = tmp11(NavigationIndependentTree, obj19);
  if (!tmp22) {
    tmp22 = "referrerId" in overrideParams;
  }
  let flag = false;
  let tmp23;
  let tmp24;
  if (tmp22) {
    c10 = true;
    customId = overrideParams.customId;
    referrerId = overrideParams.referrerId;
    flag = true;
    tmp23 = referrerId;
    tmp24 = customId;
  }
  const items3 = [flag, tmp24, tmp23];
  memo = obj5.useMemo(() => {
    let tmp = null;
    if (c10) {
      tmp = { customId, referrerId };
      const obj = { customId, referrerId };
    }
    return tmp;
  }, items3);
  const items4 = [bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, memo, keyboardCloseReasonRef, onActivityItemSelected, width];
  const value = obj5.useMemo(() => ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: memo, keyboardCloseReasonRef, onActivityItemSelected, width }), items4);
  return customId(bottomSheetExpandReasonRef(bottomSheetPosition[20]).AppLauncherContext.Provider, { value, children });
});
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;
