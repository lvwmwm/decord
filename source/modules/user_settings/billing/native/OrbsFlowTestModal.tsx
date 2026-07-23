// Module ID: 14666
// Function ID: 111787
// Name: BalanceWidgetMenuSection
// Dependencies: [57, 31, 27, 33, 9113, 5519, 9122, 10161, 4130, 689, 4541, 4126, 14667, 4098, 9798, 1934, 1212, 7512, 4543, 9787, 9797, 5160, 5449, 14669, 2]

// Module 14666 (BalanceWidgetMenuSection)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function BalanceWidgetMenuSection() {
  const tmp = callback4();
  let obj = { spacing: 16, style: tmp.container };
  obj = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Menu" };
  const items = [callback2(require(4126) /* Text */.Text, obj), callback2(importDefault(14667), {})];
  obj.children = items;
  return callback3(require(4541) /* Stack */.Stack, obj);
}
function BalanceWidgetPillSection() {
  const tmp = callback4();
  let tmp2 = callback(importAllResult.useState(1000), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  const tmp4 = callback(importAllResult.useState("1000"), 2);
  const first1 = tmp4[0];
  callback = tmp4[1];
  const items = [first1];
  callback = importAllResult.useCallback((arg0) => {
    callback2(arg0);
  }, []);
  const items1 = [first];
  const callback1 = importAllResult.useCallback(() => {
    const parsed = parseInt(first1, 10);
    let tmp2 = !isNaN(parsed);
    if (tmp2) {
      tmp2 = parsed >= 0;
    }
    if (tmp2) {
      callback(parsed);
    }
  }, items);
  const callback2 = importAllResult.useCallback(() => {
    let obj = callback(first1[13]);
    obj = { balance: first };
    obj = {};
    const intl = first(first1[16]).intl;
    obj.buttonText = intl.string(first(first1[16]).t.cpT0Cq);
    obj.onButtonPress = function onButtonPress() {
      callback(first1[13]).hideActionSheet();
    };
    obj.primaryButtonConfig = obj;
    const obj1 = {};
    const intl2 = first(first1[16]).intl;
    obj1.buttonText = intl2.string(first(first1[16]).t.WAI6xu);
    obj1.onButtonPress = function onButtonPress() {
      callback(first1[13]).hideActionSheet();
    };
    obj.secondaryButtonConfig = obj1;
    obj.openLazy(() => first(first1[15])(first1[14], first1.paths).then((arg0) => arg0.default), "OrbsFlowTestModalBalanceWidgetMenuKey", obj);
  }, items1);
  let obj = { spacing: 16, style: tmp.container };
  obj = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Pill" };
  const items2 = [callback2(first(first1[11]).Text, obj), callback2(first(first1[17]).TextInput, { value: first1, onChange: callback, placeholder: "Enter balance amount", keyboardType: "numeric" }), , ];
  obj = { text: "Apply Balance", variant: "primary", onPress: callback1 };
  items2[2] = callback2(first(first1[18]).Button, obj);
  let obj1 = { style: tmp.balancePillContainer };
  const items3 = [callback2(first(first1[19]).BalanceWidgetPill, { balance: first }), callback2(first(first1[20]).BalanceWidgetPillButton, { balance: first, onPress: callback2 })];
  obj1.children = items3;
  items2[3] = callback3(closure_6, obj1);
  obj.children = items2;
  return callback3(first(first1[10]).Stack, obj);
}
function OrbsFlowTest() {
  const insets = importDefault(5160)({ includeKeyboardHeight: true }).insets;
  let obj = {};
  obj = { style: callback4().wrap, contentContainerStyle: obj };
  obj = { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right };
  const items = [callback2(BalanceWidgetMenuSection, {}), callback2(BalanceWidgetPillSection, {}), callback2(importDefault(14669), {})];
  obj.children = items;
  obj.children = callback3(closure_5, obj);
  return callback2(require(5449) /* Layer */.LayerScope, obj);
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.wrap = obj;
createNativeStackNavigator = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = createNativeStackNavigator;
obj.title = { marginBottom: 8 };
_createForOfIteratorHelperLoose = { flexDirection: "row", justifyContent: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.balancePillContainer = _createForOfIteratorHelperLoose;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function OrbsFlowTestModal() {
  let obj = _require(5519);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      let obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_7(callback(outer2_2[6]).GenericHeaderTitle, obj);
        },
        headerLeft: callback(outer1_2[6]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[7])());
      return obj;
    },
    children: callback2(createNativeStackNavigator.Screen, obj)
  };
  obj = {
    name: "OrbsFlowTest",
    options() {
      return { title: "Orbs Flow Test" };
    },
    component: OrbsFlowTest
  };
  return callback2(createNativeStackNavigator.Navigator, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/billing/native/OrbsFlowTestModal.tsx");

export default memoResult;
