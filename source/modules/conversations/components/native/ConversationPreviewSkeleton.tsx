// Module ID: 9327
// Function ID: 72802
// Name: ConversationPreviewSkeleton
// Dependencies: [31, 27, 6832, 33, 4130, 689, 3991, 4131, 2]
// Exports: default

// Module 9327 (ConversationPreviewSkeleton)
import result from "result";
import { View } from "get ActivityIndicator";
import { MOBILE_PREVIEW_MESSAGE_COUNT as closure_5 } from "CONVERSATION_COLORS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.row = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.rowSpacing = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_26 };
const obj2 = { width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
_createForOfIteratorHelperLoose.avatar = obj2;
const obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_26 };
_createForOfIteratorHelperLoose.lines = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const obj4 = { height: 10, width: "35%", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
_createForOfIteratorHelperLoose.lineName = obj4;
const obj3 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.lineText = { height: 10, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { code: "function ConversationPreviewSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj5 = { height: 10, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
let result = require("CONVERSATION_COLORS").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  const _require = _createForOfIteratorHelperLoose();
  let obj = _require(3991);
  const sharedValue = obj.useSharedValue(0.4);
  let items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = lib(outer1_2[6]);
    const result = sharedValue.set(obj.withRepeat(lib(outer1_2[7]).withTiming(1, { duration: 700 }), -1, true));
  }, items);
  const fn = function p() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 11432452203963;
  fn.__initData = closure_9;
  const animatedStyle = _require(3991).useAnimatedStyle(fn);
  obj = { style: animatedStyle, "aria-hidden": true };
  obj = { length: closure_5 };
  obj.children = Array.from(obj, (arg0, arg1) => {
    let obj = {};
    const items = [lib.row, ];
    let rowSpacing = arg1 > 0;
    if (rowSpacing) {
      rowSpacing = lib.rowSpacing;
    }
    items[1] = rowSpacing;
    obj.style = items;
    obj = { style: lib.avatar };
    const items1 = [outer1_6(outer1_4, obj), ];
    obj = { style: lib.lines };
    const items2 = [outer1_6(outer1_4, { style: lib.lineName }), outer1_6(outer1_4, { style: lib.lineText })];
    obj.children = items2;
    items1[1] = outer1_7(outer1_4, obj);
    obj.children = items1;
    return outer1_7(outer1_4, obj, arg1);
  });
  return callback(sharedValue(3991).View, obj);
};
