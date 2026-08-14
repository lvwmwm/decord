// Module ID: 11541
// Function ID: 11542
// Dependencies: [109, 19, 1498, 676, 21, 8633, 4342, 712, 5789, 5809, 4207, 1626, 5844, 4549, 1500, 11542, 11588, 11614, 11653, 9611, 2]

// Module 11541
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "context";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
let closure_3 = ["initialRouteName"];
let c5 = importAllResult;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let obj = { navigator: null };
obj = { backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function AppLauncherNavigator(arg0) {
  let bottomSheetExpandReasonRef;
  let bottomSheetIndex;
  let bottomSheetPosition;
  let chatInputRef;
  let contentStyle;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let keyboardCloseReasonRef;
  let onActivityItemSelected;
  let overrideParams;
  let width;
  ({ context, entrypoint } = arg0);
  ({ expandBottomSheet, overrideParams } = arg0);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, contentStyle, keyboardCloseReasonRef, onActivityItemSelected, width } = arg0);
  const tmp3 = importDefault(5789);
  let obj = entrypoint(4207);
  if (overrideParams == null) {
    overrideParams = obj.useKeyboardContextForType(entrypoint(1626).KeyboardTypes.APP_LAUNCHER);
  }
  const tmp4 = callback2();
  const accessibilityNativeStackOptions = entrypoint(5844).useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj12 = callback(overrideParams, closure_3);
  const items = [entrypoint];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let obj = entrypoint(outer1_2[13]);
    obj = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(outer1_7.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
  }, items);
  obj = { value: tmp3(importDefault(5809).APP_LAUNCHER).analyticsLocations, children: null };
  obj = { initialRouteName, screenOptions: null, children: null };
  const items1 = [tmp4.navigator, contentStyle];
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj[1] = { contentStyle: items1, headerShown: false, fullScreenGestureEnabled: true };
  const obj2 = { name: AppLauncherRouteName.HOME, component: importDefault(11542), initialParams: null };
  const obj3 = { context, initialSearchQuery: null };
  let initialSearchQuery;
  if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  obj3[1] = initialSearchQuery;
  obj2[2] = obj3;
  const items2 = [closure_8(createNativeStackNavigator.Screen, obj2), , , ];
  const obj4 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: importDefault(11588), initialParams: null };
  const obj5 = { context };
  let obj6 = obj12;
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj6 = {};
  }
  const merged1 = Object.assign(obj6);
  obj5.expandBottomSheet = expandBottomSheet;
  obj4[2] = obj5;
  items2[1] = closure_8(createNativeStackNavigator.Screen, obj4);
  const obj7 = { name: AppLauncherRouteName.COMMAND_VIEW, component: importDefault(11614), initialParams: null };
  let tmp15;
  if ("channel" === context.type) {
    tmp15 = context;
  }
  const obj8 = { context: tmp15 };
  let obj9 = obj12;
  if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
    obj9 = {};
  }
  const merged2 = Object.assign(obj9);
  obj8.expandBottomSheet = expandBottomSheet;
  obj7[2] = obj8;
  items2[2] = closure_8(createNativeStackNavigator.Screen, obj7);
  const obj10 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: importDefault(11653), initialParams: null };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj12 = {};
  }
  const obj13 = { children: null };
  const obj14 = { children: null };
  const merged3 = Object.assign(obj12);
  obj10[2] = { context };
  items2[3] = closure_8(createNativeStackNavigator.Screen, obj10);
  obj[2] = items2;
  obj[1] = closure_9(createNativeStackNavigator.Navigator, obj);
  obj14[0] = closure_8(entrypoint(5789).AnalyticsLocationProvider, obj);
  obj13[0] = closure_8(entrypoint(1500).NavigationContainer, obj14);
  let tmp19 = "customId" in overrideParams;
  const children = tmp8(tmp5(1500).NavigationIndependentTree, obj13);
  if (!tmp19) {
    tmp19 = "referrerId" in overrideParams;
  }
  let entrypointParams = null;
  if (tmp19) {
    ({ customId: obj19[0], referrerId: obj19[1] } = overrideParams);
    entrypointParams = { customId: null, referrerId: null };
    const obj15 = { customId: null, referrerId: null };
  }
  return closure_8(entrypoint(9611).AppLauncherContext.Provider, { value: { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams, keyboardCloseReasonRef, onActivityItemSelected, width }, children });
});
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;
