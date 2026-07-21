// Module ID: 9283
// Function ID: 72539
// Name: ConversationPreviewSkeleton
// Dependencies: []
// Exports: default

// Module 9283 (ConversationPreviewSkeleton)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).MOBILE_PREVIEW_MESSAGE_COUNT;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[5]).space.PX_8, marginTop: importDefault(dependencyMap[5]).space.PX_4 };
obj.row = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.rowSpacing = { marginTop: importDefault(dependencyMap[5]).space.PX_26 };
const obj1 = { marginTop: importDefault(dependencyMap[5]).space.PX_26 };
obj.avatar = { borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
obj.lines = { flex: 1, gap: importDefault(dependencyMap[5]).space.PX_4 };
const obj4 = { y: 141317.025, isArray: 0.00000000000000000000000000000000000000000000000000000000000004133483696512167, borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
obj.lineName = obj4;
const obj3 = { flex: 1, gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.lineText = { height: 10, borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
let closure_8 = obj.createStyles(obj);
let closure_9 = { code: "function ConversationPreviewSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj5 = { height: 10, borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  const callback = callback3();
  let obj = callback(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(0.4);
  const importDefault = sharedValue;
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = lib(closure_2[6]);
    const result = sharedValue.set(obj.withRepeat(lib(closure_2[7]).withTiming(1, { duration: 700 }), -1, true));
  }, items);
  const fn = function p() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 11432452203963;
  fn.__initData = closure_9;
  const animatedStyle = callback(dependencyMap[6]).useAnimatedStyle(fn);
  obj = { style: animatedStyle, aria-hidden: true };
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
    const items1 = [callback(closure_4, obj), ];
    obj = { style: lib.lines };
    const items2 = [callback(closure_4, { style: lib.lineName }), callback(closure_4, { style: lib.lineText })];
    obj.children = items2;
    items1[1] = callback2(closure_4, obj);
    obj.children = items1;
    return callback2(closure_4, obj, arg1);
  });
  return callback2(importDefault(dependencyMap[6]).View, obj);
};
