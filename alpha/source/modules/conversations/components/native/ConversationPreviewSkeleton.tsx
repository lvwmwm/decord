// Module ID: 10012
// Function ID: 10013
// Name: ConversationPreviewSkeleton
// Dependencies: [19, 17, 5775, 21, 5141, 575, 1652, 5377, 2]
// Exports: default

// Module 10012 (ConversationPreviewSkeleton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5377 */;
import ConversationConstants from "ConversationConstants" /* 5775 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
let closure_9 = { code: "(function ConversationPreviewSkeletonTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  let obj4;
  let row;
  let tmp4;
  let tmp5;
  _require = closure_8();
  let obj = require("module_1652");
  const sharedValue = obj.useSharedValue(0.4);
  let items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = _mod1652.withRepeat;
    _mod1652;
    const obj = timing_timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  let obj2 = require("module_1652");
  let items1 = [closure_9, sharedValue];
  let c0;
  [tmp4, tmp5] = items1;
  class ConversationPreviewSkeletonTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  let items2 = [tmp5];
  ConversationPreviewSkeletonTsx1.__closure = items2;
  ConversationPreviewSkeletonTsx1.__workletHash = 5339375401250;
  ConversationPreviewSkeletonTsx1.__initData = tmp4;
  const animatedStyle = obj2.useAnimatedStyle(ConversationPreviewSkeletonTsx1);
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
  View = sharedValue(1652).View;
  return closure_6(View, obj3);
};
