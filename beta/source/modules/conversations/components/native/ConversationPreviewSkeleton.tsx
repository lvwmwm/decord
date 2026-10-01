// Module ID: 7369
// Function ID: 7370
// Name: ConversationPreviewSkeleton
// Dependencies: [19, 17, 7015, 21, 4836, 576, 4566, 4837, 2]
// Exports: default

// Module 7369 (ConversationPreviewSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import ConversationConstants from "ConversationConstants" /* 7015 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let View = react_native.View;
let closure_5 = ConversationConstants.MOBILE_PREVIEW_MESSAGE_COUNT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacing: obj3, avatar: size, lines: obj4, lineName: size1, lineText: obj5 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_26 };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
size1 = { height: 10, width: "35%", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj5 = { height: 10, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_8 = createStyles(obj);
const __initData = { code: "function ConversationPreviewSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  let obj4;
  let row;
  _require = closure_8();
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0.4);
  let items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  let obj2 = require("ReanimatedRexport");
  const fn = function p() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 11432452203963;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = {
    style: animatedStyle,
    "aria-hidden": true,
    children: Array.from(obj4, (arg0, arg1) => {
      let items1;
      let items2;
      const items = [row.row, ];
      const obj = { style: items, children: items1 };
      const tmp4 = arg1 > 0 && row.rowSpacing;
      items[1] = tmp4;
      items1 = [, ];
      const obj2 = { style: row.avatar };
      items1[0] = metroRequire(View, obj2);
      const obj3 = { style: row.lines, children: items2 };
      items2 = [, ];
      const obj4 = { style: row.lineName };
      items2[0] = metroRequire(View, obj4);
      const obj5 = { style: row.lineText };
      items2[1] = metroRequire(View, obj5);
      items1[1] = metroImportDefault(View, obj3);
      return metroImportDefault(View, obj, arg1);
    })
  };
  obj4 = { length: closure_5 };
  View = sharedValue(4566).View;
  return closure_6(View, obj3);
};
