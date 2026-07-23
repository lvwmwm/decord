// Module ID: 11201
// Function ID: 87173
// Dependencies: [29, 31, 1455, 653, 33, 9113, 4130, 689, 5464, 5484, 3996, 1555, 5519, 4324, 1457, 11202, 11247, 11276, 11315, 10884, 2]

// Module 11201
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
let closure_3 = ["initialRouteName"];
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
obj.navigator = obj;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
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
  const tmp = importDefault(5464);
  let obj = entrypoint(3996);
  let keyboardContextForType = obj.useKeyboardContextForType(entrypoint(1555).KeyboardTypes.APP_LAUNCHER);
  if (null != overrideParams) {
    keyboardContextForType = overrideParams;
  }
  let obj1 = entrypoint(5519);
  const accessibilityNativeStackOptions = obj1.useAccessibilityNativeStackOptions();
  const initialRouteName = keyboardContextForType.initialRouteName;
  let obj13 = callback(keyboardContextForType, closure_3);
  const items = [entrypoint];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let obj = entrypoint(outer1_2[13]);
    obj = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(outer1_7.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
  }, items);
  obj = { independent: true };
  obj = { value: tmp(importDefault(5484).APP_LAUNCHER).analyticsLocations };
  obj1 = { initialRouteName };
  const obj2 = { contentStyle: null, headerShown: false, fullScreenGestureEnabled: true };
  const items1 = [callback3().navigator, contentStyle];
  obj2.contentStyle = items1;
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj1.screenOptions = obj2;
  const obj3 = { name: AppLauncherRouteName.HOME, component: importDefault(11202) };
  const obj4 = { context };
  let initialSearchQuery;
  if (keyboardContextForType.initialRouteName === AppLauncherRouteName.HOME) {
    initialSearchQuery = keyboardContextForType.initialSearchQuery;
  }
  obj4.initialSearchQuery = initialSearchQuery;
  obj3.initialParams = obj4;
  const items2 = [callback2(createNativeStackNavigator.Screen, obj3), , , ];
  const obj5 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: importDefault(11247) };
  const obj6 = { context };
  let obj7 = obj13;
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj7 = {};
  }
  const merged1 = Object.assign(obj7);
  obj6["expandBottomSheet"] = expandBottomSheet;
  obj5.initialParams = obj6;
  items2[1] = callback2(createNativeStackNavigator.Screen, obj5);
  const obj8 = { name: AppLauncherRouteName.COMMAND_VIEW, component: importDefault(11276) };
  const obj9 = {};
  let tmp13;
  if ("channel" === context.type) {
    tmp13 = context;
  }
  obj9.context = tmp13;
  let obj10 = obj13;
  if (keyboardContextForType.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
    obj10 = {};
  }
  const merged2 = Object.assign(obj10);
  obj9["expandBottomSheet"] = expandBottomSheet;
  obj8.initialParams = obj9;
  items2[2] = callback2(createNativeStackNavigator.Screen, obj8);
  const obj11 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: importDefault(11315) };
  if (keyboardContextForType.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj13 = {};
  }
  const merged3 = Object.assign(obj13);
  obj11.initialParams = { context };
  items2[3] = callback2(createNativeStackNavigator.Screen, obj11);
  obj1.children = items2;
  obj.children = closure_9(createNativeStackNavigator.Navigator, obj1);
  obj.children = callback2(entrypoint(5464).AnalyticsLocationProvider, obj);
  let tmp18 = "customId" in keyboardContextForType;
  const children = tmp6(entrypoint(1457).NavigationContainer, obj);
  if (!tmp18) {
    tmp18 = "referrerId" in keyboardContextForType;
  }
  let tmp19 = null;
  if (tmp18) {
    ({ customId: obj18.customId, referrerId: obj18.referrerId } = keyboardContextForType);
    tmp19 = {};
    const obj14 = {};
  }
  const obj15 = { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: tmp19, keyboardCloseReasonRef, onActivityItemSelected, width };
  return callback2(entrypoint(10884).AppLauncherContext.Provider, { value: obj15, children });
});
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;
