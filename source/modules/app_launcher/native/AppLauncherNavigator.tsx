// Module ID: 11191
// Function ID: 87123
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 11191
import closure_4 from "__exportStarResult1";
import importAllResult from "__exportStarResult1";
import { AppLauncherRouteName } from "__exportStarResult1";
import { AnalyticEvents } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_3 = [];
({ jsx: closure_8, jsxs: closure_9 } = __exportStarResult1);
__exportStarResult1 = __exportStarResult1.createNativeStackNavigator();
let obj = {};
obj = { backgroundColor: require("__exportStarResult1").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.navigator = obj;
let closure_11 = __exportStarResult1.createStyles(obj);
const result = __exportStarResult1.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default importAllResult.memo(function AppLauncherNavigator(arg0) {
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
  const arg1 = entrypoint;
  ({ expandBottomSheet, overrideParams } = arg0);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, contentStyle, keyboardCloseReasonRef, onActivityItemSelected, width } = arg0);
  const tmp = importDefault(dependencyMap[8]);
  let obj = arg1(dependencyMap[10]);
  let keyboardContextForType = obj.useKeyboardContextForType(arg1(dependencyMap[11]).KeyboardTypes.APP_LAUNCHER);
  if (null != overrideParams) {
    keyboardContextForType = overrideParams;
  }
  let obj1 = arg1(dependencyMap[12]);
  const accessibilityNativeStackOptions = obj1.useAccessibilityNativeStackOptions();
  const initialRouteName = keyboardContextForType.initialRouteName;
  let obj13 = callback(keyboardContextForType, closure_3);
  const items = [entrypoint];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let obj = entrypoint(closure_2[13]);
    obj = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(constants.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj);
  }, items);
  obj = { independent: true };
  obj = { value: tmp(importDefault(dependencyMap[9]).APP_LAUNCHER).analyticsLocations };
  obj1 = { initialRouteName };
  const obj2 = { "Bool(false)": 60, "Bool(false)": 0, "Bool(false)": 0 };
  const items1 = [callback3().navigator, contentStyle];
  obj2.contentStyle = items1;
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj1.screenOptions = obj2;
  const obj3 = { name: AppLauncherRouteName.HOME, component: importDefault(dependencyMap[15]) };
  const obj4 = { context };
  let initialSearchQuery;
  if (keyboardContextForType.initialRouteName === AppLauncherRouteName.HOME) {
    initialSearchQuery = keyboardContextForType.initialSearchQuery;
  }
  obj4.initialSearchQuery = initialSearchQuery;
  obj3.initialParams = obj4;
  const items2 = [callback2(__exportStarResult1.Screen, obj3), , , ];
  const obj5 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: importDefault(dependencyMap[16]) };
  const obj6 = { context };
  let obj7 = obj13;
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj7 = {};
  }
  const merged1 = Object.assign(obj7);
  obj6["expandBottomSheet"] = expandBottomSheet;
  obj5.initialParams = obj6;
  items2[1] = callback2(__exportStarResult1.Screen, obj5);
  const obj8 = { name: AppLauncherRouteName.COMMAND_VIEW, component: importDefault(dependencyMap[17]) };
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
  items2[2] = callback2(__exportStarResult1.Screen, obj8);
  const obj11 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: importDefault(dependencyMap[18]) };
  if (keyboardContextForType.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj13 = {};
  }
  const merged3 = Object.assign(obj13);
  obj11.initialParams = { context };
  items2[3] = callback2(__exportStarResult1.Screen, obj11);
  obj1.children = items2;
  obj.children = closure_9(__exportStarResult1.Navigator, obj1);
  obj.children = callback2(arg1(dependencyMap[8]).AnalyticsLocationProvider, obj);
  let tmp18 = "customId" in keyboardContextForType;
  const children = tmp6(arg1(dependencyMap[14]).NavigationContainer, obj);
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
  return callback2(arg1(dependencyMap[19]).AppLauncherContext.Provider, { value: obj15, children });
});
