// Module ID: 6280
// Function ID: 6281
// Name: TabsHost
// Dependencies: [109, 19, 17, 21, 6281, 6285, 6286]
// Exports: default

// Module 6280 (TabsHost)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import RNSLog2 from "RNSLog" /* 6281 */;
import _mod6285 from "module_6285" /* 6285 */;
import _modDef6286 from "module_6286" /* 6286 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

let closure_3 = ["android", "ios"];
let closure_4 = ["children", "direction", "nativeContainerStyle", "onTabSelected", "navStateRequest"];
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const fillParent = StyleSheet.create({ fillParent: { flex: 1, width: "100%", height: "100%" } });

export default function TabsHost(arg0) {
  let android;
  let backgroundColor;
  let children;
  let direction;
  let ios;
  let items;
  let navStateRequest;
  let onTabSelected;
  let prop;
  const RNSLog = RNSLog2.RNSLog;
  RNSLog.log("TabsHost render");
  ({ android, ios } = arg0);
  const tmp2 = _objectWithoutProperties(arg0, closure_3);
  const nativeContainerStyle = tmp2.nativeContainerStyle;
  ({ children, direction, onTabSelected, navStateRequest } = tmp2);
  const tmp3 = _objectWithoutProperties(tmp2, closure_4);
  const ref = react.useRef(null);
  const obj = _mod6285;
  const obj2 = { style: items, navStateRequest, onTabSelected: obj.useTabsHost({ componentNodeRef: ref, onTabSelected }).onTabSelected, nativeContainerBackgroundColor: backgroundColor, ref, tabBarRespectsIMEInsets: prop, children };
  items = [fillParent.fillParent, { direction }];
  backgroundColor = undefined;
  const tmp5 = jsx;
  const tmp6 = _modDef6286;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  const merged = Object.assign(tmp3);
  prop = undefined;
  if (android != null) {
    prop = android.tabBarRespectsIMEInsets;
  }
  return tmp5(tmp6, obj2);
};
