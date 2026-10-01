// Module ID: 15296
// Function ID: 15297
// Name: OrbsFlowTestModal
// Dependencies: [32, 19, 17, 21, 7339, 6421, 7288, 10386, 4836, 576, 5279, 4832, 15297, 4800, 10564, 1981, 1115, 6024, 5281, 10554, 10563, 6402, 6577, 15299, 2]

// Module 15296 (OrbsFlowTestModal)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import LayerScope2 from "LayerScope" /* 6577 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10386 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 15297 */;
import OrbCheckoutMenuDefault from "OrbCheckoutMenu" /* 15299 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function BalanceWidgetMenuSection() {
  let items;
  const tmp = closure_10();
  const obj = { spacing: 16, style: tmp.container, children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj2 = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Menu" };
  items[0] = metroImportDefault(Text_Text.Text, obj2);
  items[1] = metroImportDefault(BalanceWidgetMenuDefault, {});
  return metroImportAll(Stack, obj);
}
function BalanceWidgetPillSection() {
  let balance;
  let closure_1;
  let closure_3;
  let first1;
  let items2;
  let items3;
  const tmp = closure_10();
  [balance, closure_1] = react.useState(1000);
  [first1, _slicedToArray] = react.useState("1000");
  const items = [first1];
  const callback = react.useCallback((arg0) => {
    closure_3(arg0);
  }, []);
  const items1 = [balance];
  const callback1 = react.useCallback(() => {
    const parsed = parseInt(first1, 10);
    let tmp3 = !isNaN(parsed);
    isNaN(parsed);
    if (tmp3) {
      tmp3 = parsed >= 0;
    }
    if (tmp3) {
      closure_1(parsed);
    }
  }, items);
  const callback2 = react.useCallback(() => {
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let paths;
    let obj = { balance, primaryButtonConfig: obj2, secondaryButtonConfig: obj3 };
    obj2 = {
      buttonText: intl.string(intl3.t.cpT0Cq),
      onButtonPress() {
        const obj = closure_1_1(paths[13]);
        obj.hideActionSheet();
      }
    };
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    intl = intl3.intl;
    obj3 = {
      buttonText: intl2.string(intl3.t.WAI6xu),
      onButtonPress() {
        const obj = closure_1_1(paths[13]);
        obj.hideActionSheet();
      }
    };
    intl2 = intl3.intl;
    openLazy(() => {
      const promise = balance(paths[15])(paths[14], paths.paths);
      return promise.then((result) => result.default);
    }, "OrbsFlowTestModalBalanceWidgetMenuKey", obj);
  }, items1);
  let obj = { spacing: 16, style: tmp.container, children: items2 };
  const Stack = balance(first1[10]).Stack;
  let obj2 = { variant: "text-lg/semibold", style: tmp.title, children: "Balance Widget Pill" };
  items2 = [closure_7(balance(first1[11]).Text, obj2), closure_7(balance(first1[17]).TextInput, { value: first1, onChange: callback, placeholder: "Enter balance amount", keyboardType: "numeric" }), closure_7(balance(first1[18]).Button, { text: "Apply Balance", variant: "primary", onPress: callback1 }), ];
  let obj3 = { style: tmp.balancePillContainer, children: items3 };
  items3 = [closure_7(balance(first1[19]).BalanceWidgetPill, { balance }), closure_7(balance(first1[20]).BalanceWidgetPillButton, { balance, onPress: callback2 })];
  items2[3] = closure_8(closure_6, obj3);
  return closure_8(Stack, obj);
}
function OrbsFlowTest() {
  let items;
  let obj2;
  const tmp = closure_10();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj = { children: metroImportAll(hasOwnProperty, obj2) };
  obj2 = { style: tmp.wrap, contentContainerStyle: { paddingBottom: insets.bottom, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }, children: items };
  const LayerScope = LayerScope2.LayerScope;
  items = [metroImportDefault(BalanceWidgetMenuSection, {}), metroImportDefault(BalanceWidgetPillSection, {}), metroImportDefault(OrbCheckoutMenuDefault, {})];
  return metroImportDefault(LayerScope, obj);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { wrap: obj2, container: obj3, title: { marginBottom: 8 }, balancePillContainer: { flexDirection: "row", justifyContent: "center", marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
({ flexDirection: "row", justifyContent: "center", marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 });
let closure_10 = createStyles(obj);
const memoResult = react.memo(function OrbsFlowTestModal() {
  let closure_0;
  let obj3;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  let obj2 = {
    screenOptions(navigation) {
      let obj2;
      let obj = {
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[6]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_7(GenericHeaderTitle, obj);
        },
        headerLeft: obj2.getRenderModalCloseImage(navigation),
        headerTitleAlign: "center"
      };
      navigation = navigation.navigation;
      obj2 = HeaderShared;
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: closure_7(closure_9.Screen, obj3)
  };
  const Navigator = closure_9.Navigator;
  obj3 = {
    name: "OrbsFlowTest",
    options() {
      return { title: "Orbs Flow Test" };
    },
    component: OrbsFlowTest
  };
  return closure_7(Navigator, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/billing/native/OrbsFlowTestModal.tsx");

export default memoResult;
