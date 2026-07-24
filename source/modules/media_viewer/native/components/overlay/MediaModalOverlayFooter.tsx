// Module ID: 12268
// Function ID: 95783
// Name: clamp
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 10887, 4131, 1273, 12269, 5217, 3992, 5121, 5446, 12270, 12260, 2]
// Exports: MediaModalOverlayFooter

// Module 12268 (clamp)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { drawerContainer: { overflow: "hidden", backgroundColor: undefined } };
_createForOfIteratorHelperLoose = { width: 40, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_600 };
_createForOfIteratorHelperLoose.drawerHeaderTab = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.drawerHeader = { backgroundColor: undefined };
_createForOfIteratorHelperLoose.messagePreviewContainer = { marginLeft: 6 };
_createForOfIteratorHelperLoose.thumbnailsContainer = { paddingTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { code: "function clamp_MediaModalOverlayFooterTsx1(value,min,max){return Math.max(Math.min(value,max),min);}" };
let closure_10 = (() => {
  function clamp(arg0, arg1, arg2) {
    return Math.max(Math.min(arg0, arg2), arg1);
  }
  clamp.__closure = {};
  clamp.__workletHash = 10219548303807;
  clamp.__initData = closure_9;
  return clamp;
})();
let closure_11 = { code: "function MediaModalOverlayFooterTsx2(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(false);}" };
let closure_12 = { code: "function MediaModalOverlayFooterTsx3(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(true);}" };
let closure_13 = { code: "function MediaModalOverlayFooterTsx4(){const{minFooterHeight,animationState,DRAWER_PANNING,animationDriver,COLLAPSED,interpolate,EXPANDED,EXPANDED_MORE,expandedHeight,MAX_DRAWER_VERTICAL_DRAG}=this.__closure;return{height:minFooterHeight>0&&(animationState.get()===DRAWER_PANNING||animationDriver.get()!==COLLAPSED)?interpolate(animationDriver.get(),[COLLAPSED,EXPANDED,EXPANDED_MORE],[minFooterHeight,Math.max(expandedHeight,minFooterHeight),Math.max(expandedHeight,minFooterHeight)+MAX_DRAWER_VERTICAL_DRAG],'clamp'):undefined,justifyContent:'flex-start'};}" };
let closure_14 = { code: "function MediaModalOverlayFooterTsx5(){const{interpolate,animationDriver,COLLAPSED,EXPANDED,thumbnailsElementHeight}=this.__closure;return{opacity:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[1,0],'clamp'),height:interpolate(animationDriver.get(),[EXPANDED,COLLAPSED],[0,thumbnailsElementHeight],'clamp')};}" };
let closure_15 = { code: "function MediaModalOverlayFooterTsx6(){const{interpolate,animationDriver,COLLAPSED,EXPANDED}=this.__closure;return{height:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[0,24],'clamp')};}" };
let closure_16 = { code: "function MediaModalOverlayFooterTsx7(){const{r,g,b,interpolate,animationDriver,COLLAPSED,EXPANDED,a,DISMISSED}=this.__closure;return{backgroundColor:\"rgba(\"+r+\", \"+g+\", \"+b+\", \"+interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[a,1],'clamp')+\")\",paddingVertical:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[8,0],'clamp'),transform:[{translateY:interpolate(animationDriver.get(),[DISMISSED,COLLAPSED],[100,0],'clamp')}]};}" };
let closure_17 = { code: "function MediaModalOverlayFooterTsx8(){const{runOnJS,onFullViewToggled}=this.__closure;runOnJS(onFullViewToggled)();}" };
let closure_18 = { code: "function MediaModalOverlayFooterTsx9(){const{full,animationDriver,withTiming,DISMISSED,STANDARD_EASING,COLLAPSED,runOnJS,onFullViewToggled}=this.__closure;if(!full){animationDriver.set(withTiming(DISMISSED,{duration:350,easing:STANDARD_EASING},'respect-motion-settings',function(){animationDriver.set(COLLAPSED);}));}else{runOnJS(onFullViewToggled)();}}" };
let closure_19 = { code: "function MediaModalOverlayFooterTsx10(){const{animationDriver,COLLAPSED}=this.__closure;animationDriver.set(COLLAPSED);}" };
let closure_20 = { code: "function MediaModalOverlayFooterTsx11(){const{animationDriver,COLLAPSE_DRAWER_ON_RELEASE,runOnJS,setFull,isCollapsed,COLLAPSED,animationState,withDelay,withTiming,NONE,STANDARD_EASING,EXPANDED}=this.__closure;if(animationDriver.get()<COLLAPSE_DRAWER_ON_RELEASE){runOnJS(setFull)(false);isCollapsed.set(true);if(animationDriver.get()===COLLAPSED){animationState.set(withDelay(150,withTiming(NONE,{duration:0})));}else{animationDriver.set(withTiming(COLLAPSED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function(){animationState.set(NONE);}));}}else{runOnJS(setFull)(true);animationDriver.set(withTiming(EXPANDED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function(){isCollapsed.set(false);animationState.set(NONE);}));}}" };
let closure_21 = { code: "function MediaModalOverlayFooterTsx12({translationY:translationY}){const{animationState,DRAWER_PANNING,clamp,expandedHeight,thumbnailsElementHeight,collapsedHeight,COLLAPSED,EXPANDED,animationDriver,COLLAPSE_DRAWER_DURING_DRAG,runOnJS,setFull,DRAWER_VERTICAL_DRAG_RESISTANCE,MAX_DRAWER_VERTICAL_DRAG,EXPANDED_MORE}=this.__closure;animationState.set(DRAWER_PANNING);if(translationY>0){const animValue=clamp(1-translationY/Math.abs(expandedHeight-(thumbnailsElementHeight+collapsedHeight)),COLLAPSED,EXPANDED);animationDriver.set(animValue);if(animValue<COLLAPSE_DRAWER_DURING_DRAG){runOnJS(setFull)(false);}}else{const scrollAmount=clamp(-translationY/DRAWER_VERTICAL_DRAG_RESISTANCE,0,MAX_DRAWER_VERTICAL_DRAG);animationDriver.set(EXPANDED+(EXPANDED_MORE-EXPANDED)*scrollAmount/MAX_DRAWER_VERTICAL_DRAG);}}" };
let closure_22 = { code: "function MediaModalOverlayFooterTsx13(){const{animationState,NONE}=this.__closure;animationState.set(NONE);}" };
let closure_23 = { code: "function MediaModalOverlayFooterTsx14(){const{isCollapsed,animationState,NONE}=this.__closure;isCollapsed.set(false);animationState.set(NONE);}" };
let closure_24 = { code: "function MediaModalOverlayFooterTsx15(){const{overlayEnabled,animationDriver}=this.__closure;return[overlayEnabled.get(),animationDriver.get()];}" };
let closure_25 = { code: "function MediaModalOverlayFooterTsx16([overlayEnabledValue,animationDriverValue]){const{DISMISSED_HIDE_OVERLAY,overlayEnabled}=this.__closure;if(overlayEnabledValue&&animationDriverValue<DISMISSED_HIDE_OVERLAY){overlayEnabled.set(false);}}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx");

export const MediaModalOverlayFooter = function MediaModalOverlayFooter(channelId) {
  let tmp = first1();
  const onFullViewToggled = channelId.onFullViewToggled;
  const overlayEnabled = channelId.overlayEnabled;
  const syncer = channelId.syncer;
  let tmp2 = syncer.sources.length > 1;
  let num = 20;
  if (tmp2) {
    num = 60;
  }
  let num2 = 0;
  if (tmp2) {
    num2 = 60;
  }
  let obj = onFullViewToggled(num[6]);
  const sharedValue = obj.useSharedValue(true);
  let obj1 = onFullViewToggled(num[6]);
  const sharedValue1 = obj1.useSharedValue(-1);
  const tmp5 = num2(sharedValue.useState(false), 2);
  const first = tmp5[0];
  let closure_7 = tmp5[1];
  const tmp7 = num2(sharedValue.useState(0), 2);
  first1 = tmp7[0];
  let closure_9 = tmp9;
  let tmp10 = num2(sharedValue.useState(0), 2);
  const first2 = tmp10[0];
  let closure_11 = tmp12;
  const tmp13 = num2(sharedValue.useState(0), 2);
  const first3 = tmp13[0];
  let closure_13 = tmp15;
  let items = [first3, first2];
  const effect = sharedValue.useEffect(() => {
    let obj = onFullViewToggled(num[7]);
    obj = { collapsedHeight: first3, expandedHeight: first2 };
    const result = obj.setMesssagePreviewHeight(obj);
  }, items);
  let items1 = [first, onFullViewToggled];
  const effect1 = sharedValue.useEffect(() => {
    onFullViewToggled(first);
  }, items1);
  let obj2 = onFullViewToggled(num[6]);
  const sharedValue2 = obj2.useSharedValue(0);
  let items2 = [sharedValue2, sharedValue1, sharedValue];
  const callback = sharedValue.useCallback(() => {
    let result = sharedValue1.set(1);
    callback(true);
    let obj = onFullViewToggled(num[8]);
    obj = { duration: 250, easing: onFullViewToggled(num[9]).STANDARD_EASING };
    const fn = function t() {
      const result = outer1_5.set(-1);
      const result1 = outer1_4.set(false);
    };
    obj = { animationState: sharedValue1, NONE: -1, isCollapsed: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 8443967716862;
    fn.__initData = closure_11;
    let result1 = sharedValue2.set(obj.withTiming(1, obj, "respect-motion-settings", fn));
  }, items2);
  const items3 = [sharedValue2, sharedValue1, sharedValue];
  const callback1 = sharedValue.useCallback(() => {
    let result = sharedValue1.set(0);
    callback(false);
    let obj = onFullViewToggled(num[8]);
    obj = { duration: 250, easing: onFullViewToggled(num[9]).STANDARD_EASING };
    const fn = function t() {
      const result = outer1_5.set(-1);
      const result1 = outer1_4.set(true);
    };
    obj = { animationState: sharedValue1, NONE: -1, isCollapsed: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 12593758327764;
    fn.__initData = first3;
    let result1 = sharedValue2.set(obj.withTiming(0, obj, "respect-motion-settings", fn));
  }, items3);
  const items4 = [sharedValue1, sharedValue, first2, first1, callback, callback1];
  const callback2 = sharedValue.useCallback(() => {
    if (sharedValue1.get() === -1) {
      let value = sharedValue.get();
      if (value) {
        value = first2 === first1;
      }
      if (!value) {
        if (sharedValue.get()) {
          callback();
        } else {
          callback1();
        }
      }
    }
  }, items4);
  const items5 = [tmp10[1]];
  const items6 = [tmp7[1]];
  const callback3 = sharedValue.useCallback((arg0) => {
    tmp12(arg0 + 17);
  }, items5);
  const callback4 = sharedValue.useCallback((arg0) => {
    tmp9(arg0 + 17);
  }, items6);
  let obj3 = onFullViewToggled(num[6]);
  function ee() {
    const obj = {};
    let interpolateResult;
    if (first3 > 0) {
      if (2 === sharedValue1.get()) {
        const obj2 = onFullViewToggled(num[6]);
        const value = sharedValue2.get();
        const items = [first3, , ];
        const _Math = Math;
        items[1] = Math.max(first2, first3);
        const _Math2 = Math;
        items[2] = Math.max(first2, first3) + 40;
        interpolateResult = obj2.interpolate(value, [0, 1, 2], items, "clamp");
      }
    }
    obj.height = interpolateResult;
    obj.justifyContent = "flex-start";
    return obj;
  }
  obj = { minFooterHeight: first3, animationState: sharedValue1, DRAWER_PANNING: 2, animationDriver: sharedValue2, COLLAPSED: 0, interpolate: onFullViewToggled(num[6]).interpolate, EXPANDED: 1, EXPANDED_MORE: 2, expandedHeight: first2, MAX_DRAWER_VERTICAL_DRAG: 40 };
  ee.__closure = obj;
  ee.__workletHash = 10727625692479;
  ee.__initData = closure_13;
  const animatedStyle = obj3.useAnimatedStyle(ee);
  let obj5 = onFullViewToggled(num[6]);
  function te() {
    const obj = { opacity: onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [0, 1], [1, 0], "clamp") };
    const obj2 = onFullViewToggled(num[6]);
    const items = [0, num2];
    obj.height = onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [1, 0], items, "clamp");
    return obj;
  }
  obj = { interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1, thumbnailsElementHeight: num2 };
  te.__closure = obj;
  te.__workletHash = 9896169174287;
  te.__initData = sharedValue2;
  const items7 = [tmp13[1], num, sharedValue, sharedValue1];
  const animatedStyle1 = obj5.useAnimatedStyle(te);
  const callback5 = sharedValue.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    let value = height > num;
    if (value) {
      value = sharedValue.get();
    }
    if (value) {
      value = sharedValue1.get() === -1;
    }
    if (value) {
      tmp15(height);
    }
  }, items7);
  let obj7 = onFullViewToggled(num[6]);
  function ae() {
    const obj = { height: onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [0, 1], [0, 24], "clamp") };
    return obj;
  }
  obj1 = { interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1 };
  ae.__closure = obj1;
  ae.__workletHash = 13288648164744;
  ae.__initData = callback;
  const animatedStyle2 = obj7.useAnimatedStyle(ae);
  const tmp28 = overlayEnabled(num[10])();
  const mediaModalFooterBackgroundColorRgba = tmp28.mediaModalFooterBackgroundColorRgba;
  const r = mediaModalFooterBackgroundColorRgba.r;
  let closure_18 = r;
  const g = mediaModalFooterBackgroundColorRgba.g;
  let closure_19 = g;
  const b = mediaModalFooterBackgroundColorRgba.b;
  let closure_20 = b;
  const a = mediaModalFooterBackgroundColorRgba.a;
  let closure_21 = a;
  let obj9 = onFullViewToggled(num[6]);
  function ie() {
    let obj = {};
    const items = [closure_21, 1];
    obj.backgroundColor = "rgba(" + closure_18 + ", " + closure_19 + ", " + closure_20 + ", " + onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [0, 1], items, "clamp") + ")";
    const obj2 = onFullViewToggled(num[6]);
    obj.paddingVertical = onFullViewToggled(num[6]).interpolate(sharedValue2.get(), [0, 1], [8, 0], "clamp");
    obj = {};
    const obj3 = onFullViewToggled(num[6]);
    const items1 = [-1, 0];
    obj.translateY = onFullViewToggled(num[6]).interpolate(sharedValue2.get(), items1, [100, 0], "clamp");
    const items2 = [obj];
    obj.transform = items2;
    return obj;
  }
  obj2 = { r, g, b, interpolate: onFullViewToggled(num[6]).interpolate, animationDriver: sharedValue2, COLLAPSED: 0, EXPANDED: 1, a, DISMISSED: -1 };
  ie.__closure = obj2;
  ie.__workletHash = 1645059598385;
  ie.__initData = callback1;
  const animatedStyle3 = obj9.useAnimatedStyle(ie);
  const ref = sharedValue.useRef(undefined);
  const ref1 = sharedValue.useRef(undefined);
  const tmp32 = num2(sharedValue.useState(true), 2);
  const first4 = tmp32[0];
  const items8 = [first1, first2, first, callback2];
  const memo = sharedValue.useMemo(() => {
    const Gesture = onFullViewToggled(num[11]).Gesture;
    const FlingResult = Gesture.Fling();
    const fn = function t() {
      onFullViewToggled(num[6]).runOnJS(outer1_17)();
    };
    const directionResult = Gesture.Fling().direction(onFullViewToggled(num[11]).Directions.UP);
    fn.__closure = { runOnJS: onFullViewToggled(num[6]).runOnJS, onFullViewToggled: callback2 };
    fn.__workletHash = 1612404502942;
    fn.__initData = callback2;
    const obj = { runOnJS: onFullViewToggled(num[6]).runOnJS, onFullViewToggled: callback2 };
    const onStartResult = directionResult.onStart(fn);
    let tmp = !first;
    if (tmp) {
      tmp = first2 > first1;
    }
    return directionResult.onStart(fn).withRef(ref).enabled(tmp);
  }, items8);
  const items9 = [sharedValue2, first, callback2, first4];
  const memo1 = sharedValue.useMemo(() => {
    const Gesture = onFullViewToggled(num[11]).Gesture;
    const FlingResult = Gesture.Fling();
    let fn = function t() {
      if (outer1_6) {
        onFullViewToggled(num[6]).runOnJS(outer1_17)();
        const obj4 = onFullViewToggled(num[6]);
      } else {
        let obj = onFullViewToggled(num[8]);
        obj = { duration: 350, easing: onFullViewToggled(8[9]).STANDARD_EASING };
        const fn = function t() {
          const result = outer2_14.set(0);
        };
        obj = { animationDriver: outer1_14, COLLAPSED: 0 };
        fn.__closure = obj;
        fn.__workletHash = 15839049590506;
        fn.__initData = closure_19;
        let result = outer1_14.set(obj.withTiming(-1, obj, "respect-motion-settings", fn));
      }
    };
    const directionResult = Gesture.Fling().direction(onFullViewToggled(num[11]).Directions.DOWN);
    fn.__closure = { full: first, animationDriver: sharedValue2, withTiming: onFullViewToggled(num[8]).withTiming, DISMISSED: -1, STANDARD_EASING: onFullViewToggled(num[9]).STANDARD_EASING, COLLAPSED: 0, runOnJS: onFullViewToggled(num[6]).runOnJS, onFullViewToggled: callback2 };
    fn.__workletHash = 16686210274151;
    fn.__initData = closure_18;
    let obj = { full: first, animationDriver: sharedValue2, withTiming: onFullViewToggled(num[8]).withTiming, DISMISSED: -1, STANDARD_EASING: onFullViewToggled(num[9]).STANDARD_EASING, COLLAPSED: 0, runOnJS: onFullViewToggled(num[6]).runOnJS, onFullViewToggled: callback2 };
    const onStartResult = directionResult.onStart(fn);
    return directionResult.onStart(fn).withRef(ref1).enabled(first4);
  }, items9);
  const items10 = [sharedValue2, sharedValue1, first1, first2, first, sharedValue, num2];
  const memo2 = sharedValue.useMemo(() => {
    const Gesture = onFullViewToggled(num[11]).Gesture;
    const PanResult = Gesture.Pan();
    const items = [-10, 10];
    const maxPointersResult = Gesture.Pan().maxPointers(1);
    let fn = function a(translationY) {
      translationY = translationY.translationY;
      const result = outer1_5.set(2);
      if (translationY > 0) {
        const _Math = Math;
        const tmp10 = first2(1 - translationY / Math.abs(outer1_10 - (outer1_3 + outer1_8)), 0, 1);
        const result1 = outer1_14.set(tmp10);
        if (tmp10 < 0.4) {
          onFullViewToggled(num[6]).runOnJS(outer1_7)(false);
          const obj = onFullViewToggled(num[6]);
        }
      } else {
        const result2 = outer1_14.set(1 + first2(-translationY / 3, 0, 40) / 40);
      }
    };
    let obj = { animationState: sharedValue1, DRAWER_PANNING: 2, clamp: first2, expandedHeight: first2, thumbnailsElementHeight: num2, collapsedHeight: first1, COLLAPSED: 0, EXPANDED: 1, animationDriver: sharedValue2, COLLAPSE_DRAWER_DURING_DRAG: 0.4, runOnJS: onFullViewToggled(num[6]).runOnJS, setFull: closure_7, DRAWER_VERTICAL_DRAG_RESISTANCE: 3, MAX_DRAWER_VERTICAL_DRAG: 40, EXPANDED_MORE: 2 };
    fn.__closure = obj;
    fn.__workletHash = 7012168718409;
    fn.__initData = closure_21;
    const activeOffsetYResult = Gesture.Pan().maxPointers(1).activeOffsetY(items);
    let fn2 = function t() {
      if (outer1_14.get() < 0.75) {
        let obj = onFullViewToggled(num[6]);
        obj.runOnJS(outer1_7)(false);
        let result = outer1_4.set(true);
        if (0 === outer1_14.get()) {
          let obj1 = onFullViewToggled(num[6]);
          let obj2 = onFullViewToggled(num[8]);
          obj = { duration: 0 };
          let result1 = outer1_5.set(obj1.withDelay(150, obj2.withTiming(-1, obj)));
        } else {
          const obj9 = onFullViewToggled(num[8]);
          obj = { duration: 150, easing: onFullViewToggled(num[9]).STANDARD_EASING };
          const fn2 = function a() {
            const result = outer2_5.set(-1);
          };
          obj1 = { animationState: outer1_5, NONE: -1 };
          fn2.__closure = obj1;
          fn2.__workletHash = 15486611138793;
          fn2.__initData = ref;
          const result2 = outer1_14.set(obj9.withTiming(0, obj, "respect-motion-settings", fn2));
        }
      } else {
        onFullViewToggled(num[6]).runOnJS(outer1_7)(true);
        const obj6 = onFullViewToggled(num[8]);
        obj2 = { duration: 150, easing: onFullViewToggled(num[9]).STANDARD_EASING };
        const fn = function t() {
          const result = outer2_4.set(false);
          const result1 = outer2_5.set(-1);
        };
        const obj3 = { isCollapsed: outer1_4, animationState: outer1_5, NONE: -1 };
        fn.__closure = obj3;
        fn.__workletHash = 8502240261161;
        fn.__initData = ref1;
        const result3 = outer1_14.set(obj6.withTiming(1, obj2, "respect-motion-settings", fn));
        const obj5 = onFullViewToggled(num[6]);
      }
    };
    obj = { animationDriver: sharedValue2, COLLAPSE_DRAWER_ON_RELEASE: 0.75, runOnJS: onFullViewToggled(num[6]).runOnJS, setFull: closure_7, isCollapsed: sharedValue, COLLAPSED: 0, animationState: sharedValue1, withDelay: onFullViewToggled(num[6]).withDelay, withTiming: onFullViewToggled(num[8]).withTiming, NONE: -1, STANDARD_EASING: onFullViewToggled(num[9]).STANDARD_EASING, EXPANDED: 1 };
    fn2.__closure = obj;
    fn2.__workletHash = 16268892990477;
    fn2.__initData = closure_20;
    const onUpdateResult = Gesture.Pan().maxPointers(1).activeOffsetY(items).onUpdate(fn);
    return Gesture.Pan().maxPointers(1).activeOffsetY(items).onUpdate(fn).onEnd(fn2).enabled(first);
  }, items10);
  let obj11 = onFullViewToggled(num[6]);
  function oe() {
    const items = [overlayEnabled.get(), sharedValue2.get()];
    return items;
  }
  oe.__closure = { overlayEnabled, animationDriver: sharedValue2 };
  oe.__workletHash = 12659996728578;
  oe.__initData = first4;
  function ne(arg0) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (tmp) {
      const result = overlayEnabled.set(false);
    }
  }
  ne.__closure = { DISMISSED_HIDE_OVERLAY: -0.25, overlayEnabled };
  ne.__workletHash = 11470550406895;
  ne.__initData = memo;
  const animatedReaction = obj11.useAnimatedReaction(oe, ne);
  const items11 = [memo2, memo1, memo];
  const memo3 = sharedValue.useMemo(() => {
    const Gesture = onFullViewToggled(num[11]).Gesture;
    return Gesture.Exclusive(memo, memo2, memo1);
  }, items11);
  obj3 = { gesture: memo3 };
  let obj4 = { style: animatedStyle3 };
  const items12 = [tmp28.MediaModalFooterUnderlay, ];
  obj5 = { bottom: true, left: true, right: true };
  let obj6 = { style: items13 };
  items13 = [animatedStyle2, tmp.drawerContainer];
  const tmp39 = first;
  const tmp41 = overlayEnabled(num[12]);
  obj7 = { tabStyle: tmp.drawerHeaderTab, style: tmp.drawerHeader };
  obj6.children = first(onFullViewToggled(num[14]).ActionSheetHeaderBar, obj7);
  const items14 = [first(overlayEnabled(num[12]), obj6), channelId.sliderElement, ];
  const obj8 = { onLayout: callback5, style: animatedStyle };
  obj9 = { style: tmp.messagePreviewContainer };
  const tmp42 = overlayEnabled(num[12]);
  obj9.children = first(overlayEnabled(num[15]), { channelId: channelId.channelId, messageId: channelId.messageId, onClose: channelId.onClose, onTapMessage: callback2, onMeasureFullHeight: callback3, onMeasureCollapsedHeight: callback4, full: first, canExpand: first2 > first1, setScrollViewIsAtTop: tmp32[1], flingUpRef: ref, flingDownRef: ref1, animationDriver: sharedValue2 });
  const items15 = [first(sharedValue1, obj9), ];
  if (tmp2) {
    obj11 = {};
    const items16 = [animatedStyle1, tmp.thumbnailsContainer];
    obj11.style = items16;
    const obj12 = { syncer };
    obj11.children = first(overlayEnabled(num[16]), obj12);
    tmp2 = first(overlayEnabled(num[12]), obj11);
    const tmp47 = overlayEnabled(num[12]);
  }
  items15[1] = tmp2;
  obj8.children = items15;
  items14[2] = closure_7(overlayEnabled(num[12]), obj8);
  obj5.children = items14;
  items12[1] = closure_7(onFullViewToggled(num[13]).SafeAreaPaddingView, obj5);
  obj4.children = items12;
  obj3.children = closure_7(tmp41, obj4);
  return tmp39(onFullViewToggled(num[11]).GestureDetector, obj3);
};
