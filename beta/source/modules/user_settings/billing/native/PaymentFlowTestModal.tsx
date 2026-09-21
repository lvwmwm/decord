// Module ID: 15994
// Function ID: 15995
// Name: PaymentFlowTestModal
// Dependencies: [109, 19, 21, 8162, 558, 568, 7246, 8112, 11230, 15995, 2]

// Module 15994 (PaymentFlowTestModal)
import HeaderShared from "HeaderShared" /* 8112 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 11230 */;
import PaymentFlowTestDefault from "PaymentFlowTest" /* 15995 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["children"];
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(8162);
let closure_6 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = accessibilityNativeStackOptions(568).c(5);
  let obj = accessibilityNativeStackOptions(568);
  accessibilityNativeStackOptions = accessibilityNativeStackOptions(7246).useAccessibilityNativeStackOptions();
  if (cResult[0] !== accessibilityNativeStackOptions) {
    const fn = function l(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(closure_1_4(children, closure_1_3));
          return closure_1_5(accessibilityNativeStackOptions(closure_1_2[7]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(accessibilityNativeStackOptions);
      const merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    };
    cResult[0] = accessibilityNativeStackOptions;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {
      name: "PaymentFlowTest",
      options() {
          return { title: "Payment Flow Test" };
        },
      component: PaymentFlowTestDefault
    };
    const tmp9 = <closure_6.Screen name="PaymentFlowTest" options={function options() {
      return { title: "Payment Flow Test" };
    }} component={PaymentFlowTestDefault} />;
    cResult[2] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj4 = { screenOptions: tmp4, children: tmp5 };
    const tmp13 = <closure_6.Navigator screenOptions={tmp4}>{tmp5}</closure_6.Navigator>;
    cResult[3] = tmp4;
    cResult[4] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (() => {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_5(closure_1_0(closure_1_2[7]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: null
  };
  let obj = require("Navigator");
  ({ Navigator, Screen } = closure_6);
  obj2.children = <Screen name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={PaymentFlowTestDefault} />;
  return <Navigator screenOptions={function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const merged1 = Object.assign(merged);
        return closure_1_5(closure_1_0(closure_1_2[7]).GenericHeaderTitle, { title: children.children });
      },
      headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(closure_0);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}>{null}</Navigator>;
}));
