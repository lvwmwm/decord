// Module ID: 14541
// Function ID: 109552
// Name: BalanceWidgetMenuSection
// Dependencies: []

// Module 14541 (BalanceWidgetMenuSection)
function BalanceWidgetMenuSection() {
  const tmp = callback5();
  let obj = { spacing: 16, style: tmp.container };
  obj = { style: tmp.title };
  const items = [callback3(arg1(dependencyMap[11]).Text, obj), callback3(importDefault(dependencyMap[12]), {})];
  obj.children = items;
  return callback4(arg1(dependencyMap[10]).Stack, obj);
}
function BalanceWidgetPillSection() {
  const tmp = callback5();
  const tmp2 = callback2(importAllResult.useState(1000), 2);
  const first = tmp2[0];
  const arg1 = first;
  let closure_1 = tmp2[1];
  const tmp4 = callback2(importAllResult.useState("1000"), 2);
  const first1 = tmp4[0];
  const dependencyMap = first1;
  let callback2 = tmp4[1];
  const items = [first1];
  const callback = importAllResult.useCallback((arg0) => {
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
  callback2 = importAllResult.useCallback(() => {
    let obj = callback(first1[13]);
    obj = { balance: first };
    obj = {};
    const intl = first(first1[16]).intl;
    obj.buttonText = intl.string(first(first1[16]).t.cpT0Cq);
    obj.onButtonPress = function onButtonPress() {
      callback2(closure_2[13]).hideActionSheet();
    };
    obj.primaryButtonConfig = obj;
    const obj1 = {};
    const intl2 = first(first1[16]).intl;
    obj1.buttonText = intl2.string(first(first1[16]).t.WAI6xu);
    obj1.onButtonPress = function onButtonPress() {
      callback2(closure_2[13]).hideActionSheet();
    };
    obj.secondaryButtonConfig = obj1;
    obj.openLazy(() => callback(paths[15])(paths[14], paths.paths).then((arg0) => arg0.default), "OrbsFlowTestModalBalanceWidgetMenuKey", obj);
  }, items1);
  let obj = { spacing: 16, style: tmp.container };
  obj = { -9223372036854775808: "Array", 9223372036854775807: "isArray", 0: "Text", style: tmp.title };
  const items2 = [callback3(arg1(dependencyMap[11]).Text, obj), callback3(arg1(dependencyMap[17]).TextInput, { value: first1, onChange: callback, placeholder: "Enter balance amount", keyboardType: "numeric" }), , ];
  obj = { "Bool(true)": null, "Bool(true)": null, onPress: callback1 };
  items2[2] = callback3(arg1(dependencyMap[18]).Button, obj);
  const obj1 = { style: tmp.balancePillContainer };
  const items3 = [callback3(arg1(dependencyMap[19]).BalanceWidgetPill, { balance: first }), callback3(arg1(dependencyMap[20]).BalanceWidgetPillButton, { balance: first, onPress: callback2 })];
  obj1.children = items3;
  items2[3] = callback4(closure_6, obj1);
  obj.children = items2;
  return callback4(arg1(dependencyMap[10]).Stack, obj);
}
function OrbsFlowTest() {
  const insets = importDefault(dependencyMap[21])({ includeKeyboardHeight: true }).insets;
  let obj = {};
  obj = { style: callback5().wrap, contentContainerStyle: obj };
  obj = { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right };
  const items = [callback3(BalanceWidgetMenuSection, {}), callback3(BalanceWidgetPillSection, {}), callback3(importDefault(dependencyMap[23]), {})];
  obj.children = items;
  obj.children = callback4(closure_5, obj);
  return callback3(arg1(dependencyMap[22]).LayerScope, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let closure_9 = obj1.createNativeStackNavigator();
let obj2 = arg1(dependencyMap[8]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.wrap = obj;
obj1 = { padding: importDefault(dependencyMap[9]).space.PX_16 };
obj.container = obj1;
obj.title = { marginBottom: 8 };
obj2 = { marginBottom: importDefault(dependencyMap[9]).space.PX_16, gap: importDefault(dependencyMap[9]).space.PX_16 };
obj.balancePillContainer = obj2;
let closure_10 = obj2.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function OrbsFlowTestModal() {
  let obj = callback(dependencyMap[5]);
  const callback = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return callback2(callback(closure_2[6]).GenericHeaderTitle, obj);
        },
        headerLeft: callback(closure_2[6]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      const merged = Object.assign(callback);
      const merged1 = Object.assign(callback2(closure_2[7])());
      return obj;
    },
    children: callback3(closure_9.Screen, obj)
  };
  obj = {
    name: "OrbsFlowTest",
    options() {
      return { title: "Orbs Flow Test" };
    },
    component: OrbsFlowTest
  };
  return callback3(closure_9.Navigator, obj);
});
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_settings/billing/native/OrbsFlowTestModal.tsx");

export default memoResult;
