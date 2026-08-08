// Module ID: 8929
// Function ID: 8930
// Name: SharePreparingModal
// Dependencies: [19, 17, 21, 4303, 712, 4702, 8930, 8931, 1236, 5326, 5823, 4299, 2]
// Exports: default

// Module 8929 (SharePreparingModal)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: null, topBar: null, topBarEnd: null };
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.bottom = undefined;
createCacheKey[1] = obj1;
createCacheKey[2] = { justifyContent: "flex-end" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/share/native/SharePreparingModal.tsx");

export default function SharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  const tmp = createCacheKey();
  const items = [onCancel];
  const effect = React.useEffect(() => () => callback(), items);
  let obj = { style: tmp.content, children: null };
  const items1 = [callback(onCancel(4702).Backdrop, { blur: "none", "aria-hidden": true }), , , ];
  obj = { style: tmp.topBar, pointerEvents: "box-none", children: null };
  obj = { style: tmp.topBarEnd, children: null };
  const obj1 = { accessibilityLabel: null, icon: null, onPress: null };
  const intl = onCancel(1236).intl;
  obj1[0] = intl.string(onCancel(1236).t.cpT0Cq);
  obj1[1] = callback(onCancel(5326).XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj1[2] = onCancel;
  obj[1] = callback(importDefault(8931), obj1);
  obj[2] = callback(onCancel(8930).MediaModalOverlayHeaderWrapper, obj);
  items1[1] = callback(closure_4, obj);
  items1[2] = callback(onCancel(5823).ActivityIndicator, {});
  const obj2 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const intl2 = onCancel(1236).intl;
  obj2[2] = intl2.string(onCancel(1236).t.DwTQE5);
  items1[3] = callback(onCancel(4299).Text, obj2);
  obj[1] = items1;
  return callback2(closure_4, obj);
};
