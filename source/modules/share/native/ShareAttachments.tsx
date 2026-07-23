// Module ID: 12910
// Function ID: 100189
// Name: ShareAttachments
// Dependencies: [31, 27, 33, 3991, 4554, 1273, 4130, 689, 4131, 3974, 1212, 9836, 4674, 2]
// Exports: default

// Module 12910 (ShareAttachments)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { duration: 300, easing: require("Button").STANDARD_EASING };
obj = {};
obj.containerRevamp = { marginHorizontal: -require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.attachmentPreviewContentContainer = _createForOfIteratorHelperLoose;
let obj1 = { marginHorizontal: -require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.attachmentPreviewContentContainerRevamp = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj4 = { height: 60, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.attachmentPreview = obj4;
obj.leftGradient = { width: 50, position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 100 };
obj.rightGradient = { width: 50, position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 100 };
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.gradient = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function ShareAttachmentsTsx1(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}" };
let closure_11 = { code: "function ShareAttachmentsTsx2(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}" };
let closure_12 = { code: "function ShareAttachmentsTsx3(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}" };
const obj5 = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let result = require("jsxProd").fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default function ShareAttachments(arg0) {
  let attachments;
  let isRevamp;
  ({ attachments, isRevamp } = arg0);
  if (isRevamp === undefined) {
    isRevamp = false;
  }
  let _require;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let tmp = callback2();
  _require = tmp;
  let obj = _require(sharedValue1[3]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = _require(sharedValue1[3]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = _require(sharedValue1[3]);
  sharedValue2 = obj2.useSharedValue(0);
  let obj3 = _require(sharedValue1[3]);
  const fn = function y() {
    const obj = {};
    let num = 1;
    if (sharedValue.get() <= 0) {
      num = 0;
    }
    obj.opacity = _undefined(sharedValue1[8]).withTiming(num, outer1_8);
    return obj;
  };
  obj = { withTiming: _require(sharedValue1[8]).withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG: obj };
  fn.__closure = obj;
  fn.__workletHash = 3302668154466;
  fn.__initData = closure_10;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  class S {
    constructor() {
      obj = {};
      obj2 = c0(useSharedValue[8]);
      value = c1.get();
      sum = value + useSharedValue.get();
      num = 1;
      if (sum >= useSharedValue.get()) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, outer1_8);
      return obj;
    }
  }
  obj = { withTiming: _require(sharedValue1[8]).withTiming, contentOffset: sharedValue, layoutWidth: sharedValue2, contentWidth: sharedValue1, GRADIENT_EASING_CONFIG: obj };
  S.__closure = obj;
  S.__workletHash = 13996707009656;
  S.__initData = closure_11;
  const animatedStyle1 = _require(sharedValue1[3]).useAnimatedStyle(S);
  const obj6 = _require(sharedValue1[3]);
  const fn2 = function v(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.x);
    const result1 = sharedValue1.set(contentOffset.contentSize.width);
    const result2 = sharedValue2.set(contentOffset.layoutMeasurement.width);
  };
  fn2.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
  fn2.__workletHash = 12660577105859;
  fn2.__initData = closure_12;
  const items = [sharedValue2];
  const obj8 = _require(sharedValue1[3]);
  const items1 = [sharedValue1];
  const callback = sharedValue2.useCallback((nativeEvent) => {
    const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
  }, items);
  const items2 = [tmp.gradient.color];
  const callback1 = sharedValue2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items1);
  const memo = sharedValue2.useMemo(() => _undefined(sharedValue1[9]).hexWithOpacity(_undefined.gradient.color, 0), items2);
  let tmp19Result = null;
  if (0 !== attachments.length) {
    obj1 = {};
    let containerRevamp;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    obj1.style = containerRevamp;
    obj2 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
    const items3 = [tmp.gradient.color, memo];
    obj2.colors = items3;
    const items4 = [tmp.leftGradient, animatedStyle];
    obj2.style = items4;
    obj2.pointerEvents = "box-none";
    const items5 = [callback(LinearGradient, obj2), , ];
    obj3 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
    const items6 = [memo, tmp.gradient.color];
    obj3.colors = items6;
    const items7 = [tmp.rightGradient, animatedStyle1];
    obj3.style = items7;
    obj3.pointerEvents = "box-none";
    items5[1] = callback(LinearGradient, obj3);
    const obj4 = {};
    const items8 = [tmp.attachmentPreviewContentContainer, ];
    class S {
      constructor() {
        obj = {};
        obj2 = c0(useSharedValue[8]);
        value = c1.get();
        sum = value + useSharedValue.get();
        num = 1;
        if (sum >= useSharedValue.get()) {
          num = 0;
        }
        obj.opacity = obj2.withTiming(num, outer1_8);
        return obj;
      }
    }
    if (isRevamp) {
      const attachmentPreviewContentContainerRevamp = tmp.attachmentPreviewContentContainerRevamp;
    }
    items8[1] = attachmentPreviewContentContainerRevamp;
    obj4.contentContainerStyle = items8;
    obj4.horizontal = true;
    obj4.onScroll = animatedScrollHandler;
    obj4.onLayout = callback;
    obj4.onContentSizeChange = callback1;
    obj4.scrollEventThrottle = 16;
    obj4.showsHorizontalScrollIndicator = false;
    obj4.accessibilityRole = "list";
    const intl = _require(sharedValue1[10]).intl;
    obj4.accessibilityLabel = intl.string(_require(sharedValue1[10]).t.RhtzFe);
    obj4.children = attachments.map((uri) => {
      let obj = { style: _undefined.attachmentPreview };
      obj = { uri: uri.uri, width: 60, height: 60 };
      const tmp = sharedValue(sharedValue1[11]);
      obj.isImage = _undefined(sharedValue1[12]).isImage(uri.uri, uri.mimeType);
      const obj3 = _undefined(sharedValue1[12]);
      obj.isVideo = _undefined(sharedValue1[12]).isVideo(uri.uri, uri.mimeType);
      obj.fileName = uri.name;
      obj.showPlayOnVideoPreview = true;
      obj.children = outer1_5(tmp, obj);
      return outer1_5(outer1_4, obj, arg1);
    });
    items5[2] = callback(sharedValue(sharedValue1[3]).ScrollView, obj4);
    obj1.children = items5;
    tmp19Result = closure_6(View, obj1);
    const tmp13 = callback;
    const tmp19 = closure_6;
    const tmp20 = View;
  }
  return tmp19Result;
};
