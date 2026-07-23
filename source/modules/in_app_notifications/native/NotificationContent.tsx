// Module ID: 10311
// Function ID: 79577
// Name: DragHandle
// Dependencies: [57, 31, 27, 33, 4130, 689, 4528, 3991, 10312, 5802, 1334, 4131, 4126, 1212, 10313, 2]
// Exports: default

// Module 10311 (DragHandle)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function DragHandle(onAccessibilityExpand) {
  onAccessibilityExpand = onAccessibilityExpand.onAccessibilityExpand;
  let c5;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = sharedValue(first[6]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let obj1 = sharedValue(first[7]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = sharedValue(first[7]);
  const sharedValue1 = obj2.useSharedValue(0);
  const tmp5 = callback(first1.useState(0), 2);
  first = tmp5[0];
  callback = tmp5[1];
  first1 = callback(first1.useState(() => Date.now()), 1)[0];
  let items = [first1];
  const memo = first1.useMemo(() => {
    const expandNUXState = sharedValue(first[8]).getExpandNUXState();
    if (expandNUXState.numTimesShown >= sharedValue(first[8]).MAX_TIMES_SHOWN) {
      return false;
    } else {
      const diff = first1 - expandNUXState.lastShownAtMs;
      return diff >= sharedValue(first[8]).ONE_DAY_MS;
    }
    const obj = sharedValue(first[8]);
  }, items);
  let obj3 = sharedValue(first[9]);
  if (memo) {
    const items1 = [sharedValue(first[10]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const tmp11 = callback(obj3.useSelectedDismissibleContent(items2, undefined, true), 1)[0] === sharedValue(first[10]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX;
  c5 = tmp11;
  callback = first1.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    callback((arg0) => {
      let tmp = arg0;
      if (arg0 !== height) {
        tmp = height;
      }
      return tmp;
    });
  }, []);
  let obj4 = sharedValue(first[7]);
  const fn = function c() {
    const obj = { opacity: sharedValue1.get() };
    const items = [0, first];
    obj.height = sharedValue(first[7]).interpolate(sharedValue1.get(), [0, 1], items);
    return obj;
  };
  obj = { textRevealProgress: sharedValue1, interpolate: sharedValue(first[7]).interpolate, textHeight: first };
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
  const animatedStyle1 = sharedValue(first[7]).useAnimatedStyle(A);
  const effect = first1.useEffect(() => {
    if (c5) {
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
        sharedValue(first[7]).cancelAnimation(outer1_1);
        const obj = sharedValue(first[7]);
        sharedValue(first[7]).cancelAnimation(outer1_0);
      };
    }
  }, items3);
  if (tmp11) {
    obj = {};
    obj1 = {};
    const items4 = [tmp.dragHandleTextContainer, animatedStyle];
    obj1.style = items4;
    obj2 = { onLayout: callback, variant: "text-xs/normal", color: "text-subtle", style: tmp.dragHandleText };
    const intl = sharedValue(first[13]).intl;
    obj2.children = intl.string(sharedValue(first[13]).t["vos6/N"]);
    obj1.children = callback2(sharedValue(first[12]).Text, obj2);
    const items5 = [callback2(sharedValue1(first[7]).View, obj1), ];
    obj3 = {};
    const items6 = [tmp.dragHandle, animatedStyle1];
    obj3.style = items6;
    items5[1] = callback2(sharedValue1(first[7]).View, obj3);
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
      let obj5 = { onPress: onAccessibilityExpand, accessibilityRole: "button" };
      const intl2 = sharedValue(first[13]).intl;
      obj5.accessibilityLabel = intl2.string(sharedValue(first[13]).t["PbxI/x"]);
      obj5.children = tmp18;
      tmp27 = callback2(c5, obj5);
    }
  }
  return tmp27;
}
({ Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { dragHandleTextContainer: { overflow: "hidden" } };
_createForOfIteratorHelperLoose = { position: "absolute", left: 0, right: 0, textAlign: "center", paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.dragHandleText = _createForOfIteratorHelperLoose;
let obj1 = { width: 32, height: 4, alignSelf: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_ACCENT, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.dragHandle = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { body: { flex: 1 }, iconContainer: { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 } };
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "row" };
obj2.contentContainer = _createForOfIteratorHelperLoose;
let obj5 = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, paddingBottom: 0, flexDirection: "row" };
obj2.contentContainerExpanded = obj5;
obj2.headerContainer = { flex: 1 };
obj2.labelContainer = { flexDirection: "row", alignItems: "center" };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj2);
let closure_12 = { code: "function NotificationContentTsx1(){const{textRevealProgress,interpolate,textHeight}=this.__closure;return{opacity:textRevealProgress.get(),height:interpolate(textRevealProgress.get(),[0,1],[0,textHeight])};}" };
let closure_13 = { code: "function NotificationContentTsx2(){const{dragHandleBounceProgress}=this.__closure;return{transform:[{translateY:dragHandleBounceProgress.get()}]};}" };
let obj3 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

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
  const tmp = callback4();
  let obj = {};
  obj = { style: expandedContentVisible ? tmp.contentContainerExpanded : tmp.contentContainer };
  let tmp5 = null;
  if (null != icon) {
    obj = { style: tmp.iconContainer, children: icon };
    tmp5 = callback2(closure_6, obj);
  }
  const items = [tmp5, , ];
  const obj1 = { style: items1 };
  items1 = [tmp.body, bodyStyle];
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
    let tmp20 = callback2(importDefault(10313), obj4);
    const tmp24 = importDefault(10313);
  } else {
    const obj5 = {};
    const merged1 = Object.assign(header);
    tmp20 = callback2(require(10313) /* LocationText */.SimpleNotificationHeader, obj5);
  }
  obj3.children = tmp20;
  items2[1] = callback2(closure_6, obj3);
  obj2.children = items2;
  const items3 = [closure_9(closure_6, obj2), children];
  obj1.children = items3;
  items[1] = closure_9(importDefault(3991).View, obj1);
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
