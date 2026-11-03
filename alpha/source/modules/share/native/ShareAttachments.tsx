// Module ID: 15873
// Function ID: 15874
// Name: ShareAttachments
// Dependencies: [19, 17, 21, 1652, 5710, 1187, 5141, 575, 5377, 5138, 1113, 11248, 8344, 2]
// Exports: default

// Module 15873 (ShareAttachments)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import ColorUtils from "ColorUtils" /* 5138 */;
import LinearGradientDefault from "LinearGradient" /* 5710 */;
import utils_UploadUtils from "utils/UploadUtils" /* 8344 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 11248 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
let obj = { duration: 300, easing: native.STANDARD_EASING };
let createStyles = createStyles_mod;
let obj2 = { containerRevamp: obj3, attachmentPreviewContentContainer: obj4, attachmentPreviewContentContainerRevamp: obj5, attachmentPreview: obj6, leftGradient: { width: 50, position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 100 }, rightGradient: { width: 50, position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 100 }, gradient: obj7 };
obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { height: 60, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden", borderRadius: nativeDefault.radii.sm };
obj7 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles(obj2);
let closure_10 = { code: "(function ShareAttachmentsTsx1(){let[withTiming,contentOffset,GRADIENT_EASING_CONFIG]=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};})" };
let closure_11 = { code: "(function ShareAttachmentsTsx2(){let[withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG]=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};})" };
let closure_12 = { code: "(function ShareAttachmentsTsx3(event){let[contentOffset,contentWidth,layoutWidth]=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default function ShareAttachments(arg0) {
  let attachments;
  let closure_0;
  let intl;
  let isRevamp;
  let items10;
  let items11;
  let items12;
  let items13;
  let items9;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp9;
  ({ attachments, isRevamp } = arg0);
  if (isRevamp === undefined) {
    isRevamp = false;
  }
  let sharedValue2;
  let tmp = closure_9();
  _require = tmp;
  obj = require("module_1652");
  const sharedValue = obj.useSharedValue(0);
  const obj2 = require("module_1652");
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("module_1652");
  sharedValue2 = obj3.useSharedValue(0);
  const items = [closure_10, , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items[1] = require("timing/timing").withTiming;
  items[2] = sharedValue;
  items[3] = obj;
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items;
  class ShareAttachmentsTsx1 {
    constructor() {
      let num = 1;
      const tmp = c0;
      if (_undefined.get() <= 0) {
        num = 0;
      }
      obj = { opacity: tmp(num, c2) };
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12];
  ShareAttachmentsTsx1.__closure = items1;
  ShareAttachmentsTsx1.__workletHash = 2089299746555;
  ShareAttachmentsTsx1.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(ShareAttachmentsTsx1);
  const items2 = [closure_11, , , , , ];
  const useAnimatedStyle2 = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items2[1] = require("timing/timing").withTiming;
  items2[2] = sharedValue;
  items2[3] = sharedValue2;
  items2[4] = sharedValue1;
  items2[5] = obj;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  class ShareAttachmentsTsx2 {
    constructor() {
      const value = _undefined.get();
      const sum = value + _undefined2.get();
      let num = 1;
      const tmp = c0;
      if (sum >= _undefined3.get()) {
        num = 0;
      }
      obj = { opacity: tmp(num, c4) };
      return obj;
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  ShareAttachmentsTsx2.__closure = items3;
  ShareAttachmentsTsx2.__workletHash = 8432492365025;
  ShareAttachmentsTsx2.__initData = tmp15;
  const animatedStyle2 = useAnimatedStyle2(ShareAttachmentsTsx2);
  const items4 = [closure_12, sharedValue, sharedValue1, sharedValue2];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp22, tmp23, tmp24, tmp25] = items4;
  const tmp2Result2 = require("module_1652");
  class ShareAttachmentsTsx3 {
    constructor(contentOffset) {
      const result = _undefined.set(contentOffset.contentOffset.x);
      const result1 = _undefined2.set(contentOffset.contentSize.width);
      const result2 = _undefined3.set(contentOffset.layoutMeasurement.width);
    }
  }
  const items5 = [tmp23, tmp24, tmp25];
  ShareAttachmentsTsx3.__closure = items5;
  ShareAttachmentsTsx3.__workletHash = 11612093533242;
  ShareAttachmentsTsx3.__initData = tmp22;
  const items6 = [sharedValue2];
  const items7 = [sharedValue1];
  const animatedScrollHandler = tmp2Result2.useAnimatedScrollHandler(ShareAttachmentsTsx3);
  const callback = react.useCallback((nativeEvent) => {
    const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
  }, items6);
  const items8 = [tmp.gradient.color];
  const callback1 = react.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items7);
  const memo = react.useMemo(() => {
    obj = ColorUtils;
    return obj.hexWithOpacity(closure_0.gradient.color, 0);
  }, items8);
  let tmp36Result = null;
  if (0 !== attachments.length) {
    let containerRevamp;
    const tmp36 = closure_6;
    const tmp37 = View;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    let obj4 = { style: containerRevamp, children: items11 };
    const obj5 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: items9, style: items10, pointerEvents: "box-none" };
    items9 = [tmp.gradient.color, memo];
    items10 = [tmp.leftGradient, animatedStyle];
    items11 = [closure_5(LinearGradient, obj5), , ];
    const obj6 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: items12, style: items13, pointerEvents: "box-none" };
    items12 = [memo, tmp.gradient.color];
    items13 = [tmp.rightGradient, animatedStyle2];
    items11[1] = closure_5(LinearGradient, obj6);
    const items14 = [, ];
    const tmp32 = closure_5;
    class ShareAttachmentsTsx1 {
      constructor() {
        let num = 1;
        const tmp = c0;
        if (_undefined.get() <= 0) {
          num = 0;
        }
        obj = { opacity: tmp(num, c2) };
        return obj;
      }
    }
    let prop;
    const ScrollView = sharedValue1(tmp3[3]).ScrollView;
    if (isRevamp) {
      prop = tmp.attachmentPreviewContentContainerRevamp;
    }
    items14[1] = prop;
    const obj7 = {
      contentContainerStyle: items14,
      horizontal: true,
      onScroll: animatedScrollHandler,
      onLayout: callback,
      onContentSizeChange: callback1,
      scrollEventThrottle: 16,
      showsHorizontalScrollIndicator: false,
      accessibilityRole: "list",
      accessibilityLabel: intl.string(require("intl").t.RhtzFe),
      children: attachments.map((uri, index) => {
          let obj3;
          let obj4;
          let tmp;
          obj = { style: closure_0.attachmentPreview, children: hasOwnProperty(tmp, size) };
          size = { uri: uri.uri, width: 60, height: 60, isImage: obj3.isImage(uri.uri, uri.mimeType), isVideo: obj4.isVideo(uri.uri, uri.mimeType), fileName: uri.name, showPlayOnVideoPreview: true };
          tmp = AttachmentPreviewDefault;
          obj3 = utils_UploadUtils;
          obj4 = utils_UploadUtils;
          return hasOwnProperty(View, obj, index);
        })
    };
    intl = tmp2(tmp3[10]).intl;
    items11[2] = tmp32(ScrollView, obj7);
    tmp36Result = tmp36(tmp37, obj4);
  }
  return tmp36Result;
};
