// Module ID: 10298
// Function ID: 79504
// Name: DragHandle
// Dependencies: []
// Exports: default

// Module 10298 (DragHandle)
function DragHandle(onAccessibilityExpand) {
  onAccessibilityExpand = onAccessibilityExpand.onAccessibilityExpand;
  let tmp11;
  const tmp = callback4();
  let obj = arg1(dependencyMap[6]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let obj1 = arg1(dependencyMap[7]);
  const sharedValue = obj1.useSharedValue(0);
  const arg1 = sharedValue;
  let obj2 = arg1(dependencyMap[7]);
  const sharedValue1 = obj2.useSharedValue(0);
  const importDefault = sharedValue1;
  const tmp5 = callback(React.useState(0), 2);
  const first = tmp5[0];
  const dependencyMap = first;
  let callback = tmp5[1];
  const first1 = callback(React.useState(() => Date.now()), 1)[0];
  const React = first1;
  const items = [first1];
  const memo = React.useMemo(() => {
    const expandNUXState = sharedValue(first[8]).getExpandNUXState();
    if (expandNUXState.numTimesShown >= sharedValue(first[8]).MAX_TIMES_SHOWN) {
      return false;
    } else {
      const diff = first1 - expandNUXState.lastShownAtMs;
      return diff >= sharedValue(first[8]).ONE_DAY_MS;
    }
    const obj = sharedValue(first[8]);
  }, items);
  let obj3 = arg1(dependencyMap[9]);
  if (memo) {
    const items1 = [arg1(dependencyMap[10]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX];
    let items2 = items1;
  } else {
    items2 = [];
  }
  tmp11 = callback(obj3.useSelectedDismissibleContent(items2, undefined, true), 1)[0] === arg1(dependencyMap[10]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX;
  callback = React.useCallback((nativeEvent) => {
    const sharedValue = nativeEvent.nativeEvent.layout.height;
    callback((arg0) => {
      let tmp = arg0;
      if (arg0 !== height) {
        tmp = height;
      }
      return tmp;
    });
  }, []);
  let obj4 = arg1(dependencyMap[7]);
  const fn = function c() {
    const obj = { opacity: sharedValue1.get() };
    const items = [0.229, first];
    obj.height = sharedValue(first[7]).interpolate(sharedValue1.get(), [77601039, 1612144654], items);
    return obj;
  };
  obj = { textRevealProgress: sharedValue1, interpolate: arg1(dependencyMap[7]).interpolate, textHeight: first };
  fn.__closure = obj;
  fn.__workletHash = 11744264899632;
  fn.__initData = closure_12;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  class A {
    constructor() {
      obj = {};
      obj = { translateY: closure_0.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  A.__closure = { dragHandleBounceProgress: sharedValue };
  A.__workletHash = 16018166575562;
  A.__initData = closure_13;
  const items3 = [tmp11, sharedValue1, sharedValue];
  const animatedStyle1 = arg1(dependencyMap[7]).useAnimatedStyle(A);
  const effect = React.useEffect(() => {
    if (tmp11) {
      let obj = sharedValue(first[8]);
      const result = obj.markExpandNUXStateAsShown();
      const obj2 = sharedValue(first[7]);
      obj = { duration: sharedValue(first[8]).NUX_REVEAL_DURATION_MS };
      const result1 = sharedValue1.set(obj2.withDelay(sharedValue(first[8]).NUX_REVEAL_DELAY_MS, sharedValue(first[11]).withTiming(1, obj)));
      const obj3 = sharedValue(first[11]);
      const sum = sharedValue(first[8]).NUX_REVEAL_DELAY_MS + sharedValue(first[8]).NUX_REVEAL_DURATION_MS;
      const obj5 = sharedValue(first[7]);
      const obj6 = sharedValue(first[7]);
      obj = { duration: sharedValue(first[8]).DRAG_HANDLE_BOUNCE_DURATION_MS };
      const result2 = sharedValue.set(obj5.withDelay(sum, obj6.withRepeat(sharedValue(first[11]).withTiming(sharedValue(first[8]).DRAG_HANDLE_BOUNCE_DISTANCE, obj), -1, true)));
      return () => {
        callback(closure_2[7]).cancelAnimation(closure_1);
        const obj = callback(closure_2[7]);
        callback(closure_2[7]).cancelAnimation(callback);
      };
    }
  }, items3);
  if (tmp11) {
    obj = {};
    obj1 = {};
    const items4 = [tmp.dragHandleTextContainer, animatedStyle];
    obj1.style = items4;
    obj2 = { onLayout: callback, style: tmp.dragHandleText };
    const intl = arg1(dependencyMap[13]).intl;
    obj2.children = intl.string(arg1(dependencyMap[13]).t.vos6/N);
    obj1.children = callback2(arg1(dependencyMap[12]).Text, obj2);
    const items5 = [callback2(importDefault(dependencyMap[7]).View, obj1), ];
    obj3 = {};
    const items6 = [tmp.dragHandle, animatedStyle1];
    obj3.style = items6;
    items5[1] = callback2(importDefault(dependencyMap[7]).View, obj3);
    obj.children = items5;
    let tmp18 = callback3(closure_8, obj);
  } else {
    obj4 = { style: tmp.dragHandle };
    tmp18 = callback2(closure_6, obj4);
  }
  let tmp27 = tmp18;
  if (isScreenReaderEnabled) {
    tmp27 = tmp18;
    if (null != onAccessibilityExpand) {
      const obj5 = { onPress: onAccessibilityExpand, accessibilityRole: "button" };
      const intl2 = arg1(dependencyMap[13]).intl;
      obj5.accessibilityLabel = intl2.string(arg1(dependencyMap[13]).t.PbxI/x);
      obj5.children = tmp18;
      tmp27 = callback2(tmp11, obj5);
    }
  }
  return tmp27;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { dragHandleTextContainer: { overflow: "hidden" } };
obj = { libvpx: 6, Zt4Mf4: "label", explicitContentGuilds: "message", <string:1230109143>: "4.8.0", paddingBottom: importDefault(dependencyMap[5]).space.PX_4 };
obj.dragHandleText = obj;
const obj1 = { "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019806634022665753, "Null": -5260090822764542500000000000000000000000000000000000000000000000000000000000000000000000, "Null": -19736389607297532000000000000000000000000, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_ACCENT, borderRadius: importDefault(dependencyMap[5]).radii.xs, marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
obj.dragHandle = obj1;
let closure_10 = obj.createStyles(obj);
let obj4 = arg1(dependencyMap[4]);
const obj2 = { body: { flex: 1 } };
const tmp3 = arg1(dependencyMap[3]);
obj2.iconContainer = { marginRight: importDefault(dependencyMap[5]).space.PX_12 };
obj4 = { padding: importDefault(dependencyMap[5]).space.PX_12, flexDirection: "row" };
obj2.contentContainer = obj4;
const obj5 = { <string:2839314540>: "Array", <string:172088541>: "isArray", <string:1375732912>: "message", padding: importDefault(dependencyMap[5]).space.PX_12 };
obj2.contentContainerExpanded = obj5;
obj2.headerContainer = { flex: 1 };
obj2.labelContainer = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
let closure_11 = obj4.createStyles(obj2);
let closure_12 = { code: "function NotificationContentTsx1(){const{textRevealProgress,interpolate,textHeight}=this.__closure;return{opacity:textRevealProgress.get(),height:interpolate(textRevealProgress.get(),[0,1],[0,textHeight])};}" };
let closure_13 = { code: "function NotificationContentTsx2(){const{dragHandleBounceProgress}=this.__closure;return{transform:[{translateY:dragHandleBounceProgress.get()}]};}" };
const obj3 = { marginRight: importDefault(dependencyMap[5]).space.PX_12 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default function NotificationContent(arg0) {
  let accessoryLabelNode;
  let bodyStyle;
  let children;
  let expandedContentVisible;
  let header;
  let icon;
  let onAccessibilityExpand;
  let rightAccessory;
  let showDragHandle;
  ({ icon, accessoryLabelNode, header, showDragHandle } = arg0);
  ({ children, rightAccessory } = arg0);
  if (showDragHandle === undefined) {
    showDragHandle = false;
  }
  ({ expandedContentVisible, onAccessibilityExpand, bodyStyle } = arg0);
  if (expandedContentVisible === undefined) {
    expandedContentVisible = false;
  }
  const tmp = callback5();
  let obj = {};
  obj = { style: expandedContentVisible ? tmp.contentContainerExpanded : tmp.contentContainer };
  let tmp5 = null;
  if (null != icon) {
    obj = { style: tmp.iconContainer, children: icon };
    tmp5 = callback2(closure_6, obj);
  }
  const items = [tmp5, , ];
  const obj1 = { style: items1 };
  const items1 = [tmp.body, bodyStyle];
  const obj2 = { style: tmp.labelContainer };
  let tmp11 = null;
  if (null != accessoryLabelNode) {
    tmp11 = accessoryLabelNode;
  }
  const items2 = [tmp11, ];
  const obj3 = { style: tmp.headerContainer };
  if ("message" === header.type) {
    const obj4 = {};
    const merged = Object.assign(header);
    let tmp20 = callback2(importDefault(dependencyMap[14]), obj4);
    const tmp24 = importDefault(dependencyMap[14]);
  } else {
    const obj5 = {};
    const merged1 = Object.assign(header);
    tmp20 = callback2(arg1(dependencyMap[14]).SimpleNotificationHeader, obj5);
  }
  obj3.children = tmp20;
  items2[1] = callback2(closure_6, obj3);
  obj2.children = items2;
  const items3 = [closure_9(closure_6, obj2), children];
  obj1.children = items3;
  items[1] = closure_9(importDefault(dependencyMap[7]).View, obj1);
  items[2] = rightAccessory;
  obj.children = items;
  const items4 = [closure_9(closure_6, obj), ];
  let tmp28 = null;
  if (showDragHandle) {
    const obj6 = { onAccessibilityExpand };
    tmp28 = callback2(DragHandle, obj6);
  }
  items4[1] = tmp28;
  obj.children = items4;
  return closure_9(closure_8, obj);
};
