// Module ID: 13448
// Function ID: 13449
// Name: ShareAttachments
// Dependencies: [19, 17, 21, 4566, 5293, 1177, 4836, 576, 4837, 4683, 1115, 9657, 5450, 2]
// Exports: default

// Module 13448 (ShareAttachments)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import timing from "timing" /* 4837 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import utils_UploadUtils from "utils/UploadUtils" /* 5450 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 9657 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let GRADIENT_EASING_CONFIG = { duration: 300, easing: native.STANDARD_EASING };
let createStyles = createStyles_mod;
let obj2 = { containerRevamp: obj3, attachmentPreviewContentContainer: obj4, attachmentPreviewContentContainerRevamp: obj5, attachmentPreview: obj6, leftGradient: { width: 50, position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 100 }, rightGradient: { width: 50, position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 100 }, gradient: obj7 };
obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { height: 60, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden", borderRadius: nativeDefault.radii.sm };
obj7 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles(obj2);
const __initData = { code: "function ShareAttachmentsTsx1(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}" };
const __initData2 = { code: "function ShareAttachmentsTsx2(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}" };
const __initData3 = { code: "function ShareAttachmentsTsx3(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default function ShareAttachments(arg0) {
  let attachments;
  let closure_0;
  let isRevamp;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  ({ attachments, isRevamp } = arg0);
  if (isRevamp === undefined) {
    isRevamp = false;
  }
  let sharedValue1;
  let tmp = closure_9();
  _require = tmp;
  GRADIENT_EASING_CONFIG = require("ReanimatedRexport");
  const sharedValue = GRADIENT_EASING_CONFIG.useSharedValue(0);
  const obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = require("ReanimatedRexport");
  const fn = function y() {
    let obj;
    const withTiming = timing.withTiming;
    let num = 1;
    timing;
    if (sharedValue.get() <= 0) {
      num = 0;
    }
    obj = { opacity: withTiming(num, obj) };
    return obj;
  };
  fn.__closure = { withTiming: require("timing").withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG };
  fn.__workletHash = 3302668154466;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj6 = require("ReanimatedRexport");
  class S {
    constructor() {
      let obj;
      const withTiming = timing.withTiming;
      timing;
      const value = sharedValue.get();
      const sum = value + sharedValue2.get();
      let num = 1;
      if (sum >= sharedValue1.get()) {
        num = 0;
      }
      obj = { opacity: withTiming(num, obj) };
      return obj;
    }
  }
  S.__closure = { withTiming: require("timing").withTiming, contentOffset: sharedValue, layoutWidth: sharedValue2, contentWidth: sharedValue1, GRADIENT_EASING_CONFIG };
  S.__workletHash = 13996707009656;
  S.__initData = __initData2;
  ({ withTiming: require("timing").withTiming, contentOffset: sharedValue, layoutWidth: sharedValue2, contentWidth: sharedValue1, GRADIENT_EASING_CONFIG });
  const animatedStyle1 = obj6.useAnimatedStyle(S);
  const fn2 = function v(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.x);
    const result1 = sharedValue1.set(contentOffset.contentSize.width);
    const result2 = sharedValue2.set(contentOffset.layoutMeasurement.width);
  };
  fn2.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
  fn2.__workletHash = 12660577105859;
  fn2.__initData = __initData3;
  const items = [sharedValue2];
  const items1 = [sharedValue1];
  const obj8 = require("ReanimatedRexport");
  const animatedScrollHandler = obj8.useAnimatedScrollHandler(fn2);
  const callback = sharedValue2.useCallback((nativeEvent) => {
    const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
  }, items);
  const items2 = [tmp.gradient.color];
  const callback1 = sharedValue2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items1);
  const memo = sharedValue2.useMemo(() => {
    const obj = ColorUtils;
    return obj.hexWithOpacity(closure_0.gradient.color, 0);
  }, items2);
  let tmp20Result = null;
  if (0 !== attachments.length) {
    let containerRevamp;
    const tmp20 = closure_6;
    const tmp21 = View;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    const obj10 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: items3, style: items4, pointerEvents: "box-none" };
    items3 = [tmp.gradient.color, memo];
    items4 = [tmp.leftGradient, animatedStyle];
    const obj9 = { style: containerRevamp, children: items5 };
    items5 = [closure_5(LinearGradient, obj10), , ];
    const obj11 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: items6, style: items7, pointerEvents: "box-none" };
    items6 = [memo, tmp.gradient.color];
    items7 = [tmp.rightGradient, animatedStyle1];
    items5[1] = closure_5(LinearGradient, obj11);
    const items8 = [tmp.attachmentPreviewContentContainer, ];
    let prop;
    const ScrollView = sharedValue(tmp3[3]).ScrollView;
    const tmp15 = closure_5;
    if (isRevamp) {
      prop = tmp.attachmentPreviewContentContainerRevamp;
    }
    class S {
      constructor() {
        let obj;
        const withTiming = timing.withTiming;
        timing;
        const value = sharedValue.get();
        const sum = value + sharedValue2.get();
        let num = 1;
        if (sum >= sharedValue1.get()) {
          num = 0;
        }
        obj = { opacity: withTiming(num, obj) };
        return obj;
      }
    }
    items8[1] = prop;
    tmp19[0] = items8;
    tmp19[2] = animatedScrollHandler;
    tmp19[3] = callback;
    tmp19[4] = callback1;
    const intl = tmp2(tmp3[10]).intl;
    tmp19[8] = intl.string(require("intl").t.RhtzFe);
    tmp19[9] = attachments.map((uri, index) => {
      let obj3;
      let obj4;
      let tmp;
      const obj = { style: closure_0.attachmentPreview, children: hasOwnProperty(tmp, size) };
      size = { uri: uri.uri, width: 60, height: 60, isImage: obj3.isImage(uri.uri, uri.mimeType), isVideo: obj4.isVideo(uri.uri, uri.mimeType), fileName: uri.name, showPlayOnVideoPreview: true };
      tmp = AttachmentPreviewDefault;
      obj3 = utils_UploadUtils;
      obj4 = utils_UploadUtils;
      return hasOwnProperty(View, obj, index);
    });
    items5[2] = tmp15(ScrollView, tmp19);
    tmp20Result = tmp20(tmp21, obj9);
  }
  return tmp20Result;
};
