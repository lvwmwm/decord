// Module ID: 15210
// Function ID: 15211
// Name: MediaModalOverlayFooter
// Dependencies: [32, 19, 17, 21, 5306, 575, 1655, 12451, 5548, 1187, 15211, 5598, 1708, 7415, 5901, 15212, 15202, 2]
// Exports: MediaModalOverlayFooter

// Module 15210 (MediaModalOverlayFooter)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _mod1708 from "module_1708" /* 1708 */;
import timing_timing from "timing/timing" /* 5548 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import useMessagePreviewHeight from "useMessagePreviewHeight" /* 12451 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_0, closure_1, closure_2, flag, flag2, flag3, num3, obj1, result2, result3, set, str, str2, tmp23, tmp39, translationY;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
let tmp3;
const _mod1655 = tmp(1655);
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { drawerContainer: { overflow: "hidden", backgroundColor: "__esModule" }, drawerHeaderTab: obj2, drawerHeader: { backgroundColor: "r" }, messagePreviewContainer: { marginLeft: 6 }, thumbnailsContainer: { paddingTop: 8 } };
obj2 = { width: 40, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
let closure_8 = createStyles.createStyles(obj);
let c9 = -1;
let items = [{ code: "(function clamp_MediaModalOverlayFooterTsx1(value,min,max){return Math.max(Math.min(value,max),min);})" }];
[tmp3] = items;
function clamp(arg0, arg1, arg2) {
  return Math.max(Math.min(arg0, arg2), arg1);
}
clamp.__workletHash = 14120503051550;
clamp.__initData = tmp3;
let closure_11 = { code: "(function MediaModalOverlayFooterTsx2(){let[animationState,NONE,isCollapsed]=this.__closure;animationState.set(NONE);isCollapsed.set(false);})" };
let closure_12 = { code: "(function MediaModalOverlayFooterTsx3(){let[animationState,NONE,isCollapsed]=this.__closure;animationState.set(NONE);isCollapsed.set(true);})" };
let closure_13 = { code: "(function MediaModalOverlayFooterTsx4(){let[minFooterHeight,animationState,DRAWER_PANNING,animationDriver,COLLAPSED,interpolate,EXPANDED,EXPANDED_MORE,expandedHeight,MAX_DRAWER_VERTICAL_DRAG]=this.__closure;return{height:minFooterHeight>0&&(animationState.get()===DRAWER_PANNING||animationDriver.get()!==COLLAPSED)?interpolate(animationDriver.get(),[COLLAPSED,EXPANDED,EXPANDED_MORE],[minFooterHeight,Math.max(expandedHeight,minFooterHeight),Math.max(expandedHeight,minFooterHeight)+MAX_DRAWER_VERTICAL_DRAG],'clamp'):undefined,justifyContent:'flex-start'};})" };
let closure_14 = { code: "(function MediaModalOverlayFooterTsx5(){let[interpolate,animationDriver,COLLAPSED,EXPANDED,thumbnailsElementHeight]=this.__closure;return{opacity:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[1,0],'clamp'),height:interpolate(animationDriver.get(),[EXPANDED,COLLAPSED],[0,thumbnailsElementHeight],'clamp')};})" };
let closure_15 = { code: "(function MediaModalOverlayFooterTsx6(){let[interpolate,animationDriver,COLLAPSED,EXPANDED]=this.__closure;return{height:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[0,24],'clamp')};})" };
let closure_16 = { code: "(function MediaModalOverlayFooterTsx7(){let[r,g,b,interpolate,animationDriver,COLLAPSED,EXPANDED,a,DISMISSED]=this.__closure;return{backgroundColor:\"rgba(\"+r+\", \"+g+\", \"+b+\", \"+interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[a,1],'clamp')+\")\",paddingVertical:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[8,0],'clamp'),transform:[{translateY:interpolate(animationDriver.get(),[DISMISSED,COLLAPSED],[100,0],'clamp')}]};})" };
let closure_17 = { code: "(function MediaModalOverlayFooterTsx8(){let[scheduleOnRN,onFullViewToggled]=this.__closure;scheduleOnRN(onFullViewToggled);})" };
let closure_18 = { code: "(function MediaModalOverlayFooterTsx9(){let[animationDriver,COLLAPSED]=this.__closure;animationDriver.set(COLLAPSED);})" };
let closure_19 = { code: "(function MediaModalOverlayFooterTsx10(){let[full,animationDriver,withTiming,DISMISSED,STANDARD_EASING,_worklet_4032472095819_init_data,COLLAPSED,scheduleOnRN,onFullViewToggled]=this.__closure;if(!full){animationDriver.set(withTiming(DISMISSED,{duration:350,easing:STANDARD_EASING},'respect-motion-settings',function MediaModalOverlayFooterTsx9Factory([_worklet_4032472095819_init_data,animationDriver,COLLAPSED]){const MediaModalOverlayFooterTsx9=function(){animationDriver.set(COLLAPSED);};MediaModalOverlayFooterTsx9.__closure=[animationDriver,COLLAPSED];MediaModalOverlayFooterTsx9.__workletHash=4032472095819;MediaModalOverlayFooterTsx9.__initData=_worklet_4032472095819_init_data;return MediaModalOverlayFooterTsx9;}([_worklet_4032472095819_init_data,animationDriver,COLLAPSED])));}else{scheduleOnRN(onFullViewToggled);}})" };
let closure_20 = { code: "(function MediaModalOverlayFooterTsx11({translationY:translationY}){let[animationState,DRAWER_PANNING,clamp,expandedHeight,thumbnailsElementHeight,collapsedHeight,COLLAPSED,EXPANDED,animationDriver,COLLAPSE_DRAWER_DURING_DRAG,scheduleOnRN,setFull,DRAWER_VERTICAL_DRAG_RESISTANCE,MAX_DRAWER_VERTICAL_DRAG,EXPANDED_MORE]=this.__closure;animationState.set(DRAWER_PANNING);if(translationY>0){const animValue=clamp(1-translationY/Math.abs(expandedHeight-(thumbnailsElementHeight+collapsedHeight)),COLLAPSED,EXPANDED);animationDriver.set(animValue);if(animValue<COLLAPSE_DRAWER_DURING_DRAG){scheduleOnRN(setFull,false);}}else{const scrollAmount=clamp(-translationY/DRAWER_VERTICAL_DRAG_RESISTANCE,0,MAX_DRAWER_VERTICAL_DRAG);animationDriver.set(EXPANDED+(EXPANDED_MORE-EXPANDED)*scrollAmount/MAX_DRAWER_VERTICAL_DRAG);}})" };
let closure_21 = { code: "(function MediaModalOverlayFooterTsx12(){let[animationState,NONE]=this.__closure;animationState.set(NONE);})" };
let closure_22 = { code: "(function MediaModalOverlayFooterTsx13(){let[isCollapsed,animationState,NONE]=this.__closure;isCollapsed.set(false);animationState.set(NONE);})" };
let closure_23 = { code: "(function MediaModalOverlayFooterTsx14(){let[animationDriver,COLLAPSE_DRAWER_ON_RELEASE,scheduleOnRN,setFull,isCollapsed,COLLAPSED,animationState,withDelay,withTiming,NONE,STANDARD_EASING,_worklet_16272811070801_init_data,EXPANDED,_worklet_10401061559415_init_data]=this.__closure;if(animationDriver.get()<COLLAPSE_DRAWER_ON_RELEASE){scheduleOnRN(setFull,false);isCollapsed.set(true);if(animationDriver.get()===COLLAPSED){animationState.set(withDelay(150,withTiming(NONE,{duration:0})));}else{animationDriver.set(withTiming(COLLAPSED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function MediaModalOverlayFooterTsx12Factory([_worklet_16272811070801_init_data,animationState,NONE]){const MediaModalOverlayFooterTsx12=function(){animationState.set(NONE);};MediaModalOverlayFooterTsx12.__closure=[animationState,NONE];MediaModalOverlayFooterTsx12.__workletHash=16272811070801;MediaModalOverlayFooterTsx12.__initData=_worklet_16272811070801_init_data;return MediaModalOverlayFooterTsx12;}([_worklet_16272811070801_init_data,animationState,NONE])));}}else{scheduleOnRN(setFull,true);animationDriver.set(withTiming(EXPANDED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function MediaModalOverlayFooterTsx13Factory([_worklet_10401061559415_init_data,isCollapsed,animationState,NONE]){const MediaModalOverlayFooterTsx13=function(){isCollapsed.set(false);animationState.set(NONE);};MediaModalOverlayFooterTsx13.__closure=[isCollapsed,animationState,NONE];MediaModalOverlayFooterTsx13.__workletHash=10401061559415;MediaModalOverlayFooterTsx13.__initData=_worklet_10401061559415_init_data;return MediaModalOverlayFooterTsx13;}([_worklet_10401061559415_init_data,isCollapsed,animationState,NONE])));}})" };
let closure_24 = { code: "(function MediaModalOverlayFooterTsx15(){let[overlayEnabled,animationDriver]=this.__closure;return[overlayEnabled.get(),animationDriver.get()];})" };
let closure_25 = { code: "(function MediaModalOverlayFooterTsx16([overlayEnabledValue,animationDriverValue]){let[DISMISSED_HIDE_OVERLAY,overlayEnabled]=this.__closure;if(overlayEnabledValue&&animationDriverValue<DISMISSED_HIDE_OVERLAY){overlayEnabled.set(false);}})" };
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx");

export function MediaModalOverlayFooter(channelId) {
  let a;
  let b;
  let easing;
  let first2;
  let g;
  let items24;
  let items25;
  let items27;
  let items28;
  let obj11;
  let obj13;
  let obj6;
  let obj8;
  let overlayEnabled;
  let r;
  let syncer;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp78;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp83;
  let tmp = closure_8();
  const onFullViewToggled = channelId.onFullViewToggled;
  ({ overlayEnabled, syncer } = channelId);
  let tmp86Result = syncer.sources.length > 1;
  let num = 20;
  const sliderElement = channelId.sliderElement;
  if (tmp86Result) {
    num = 60;
  }
  let num2 = 0;
  if (tmp86Result) {
    num2 = 60;
  }
  const tmp3 = onFullViewToggled;
  let tmp4 = num2;
  let obj = onFullViewToggled(num2[6]);
  const sharedValue = obj.useSharedValue(true);
  let obj2 = onFullViewToggled(num2[6]);
  const sharedValue1 = obj2.useSharedValue(first2);
  let obj3 = sharedValue1;
  const tmp7 = sharedValue;
  const tmp8 = sharedValue(sharedValue1.useState(false), 2);
  const full = tmp8[0];
  let closure_6 = tmp8[1];
  const tmp10 = sharedValue(sharedValue1.useState(0), 2);
  const first1 = tmp10[0];
  const tmp12 = tmp10[1];
  closure_8 = tmp12;
  const tmp13 = sharedValue(sharedValue1.useState(0), 2);
  first2 = tmp13[0];
  const tmp15 = tmp13[1];
  const easing2 = tmp15;
  let tmp16 = sharedValue(sharedValue1.useState(0), 2);
  const first3 = tmp16[0];
  const tmp18 = tmp16[1];
  closure_12 = tmp18;
  let items = [first3, first2];
  const effect = sharedValue1.useEffect(() => {
    const obj = useMessagePreviewHeight;
    const obj2 = { collapsedHeight: first3, expandedHeight: first2 };
    const result = obj.setMesssagePreviewHeight(obj2);
  }, items);
  let items1 = [full, onFullViewToggled];
  const effect1 = sharedValue1.useEffect(() => {
    onFullViewToggled(first);
  }, items1);
  const obj4 = onFullViewToggled(num2[6]);
  const sharedValue2 = obj4.useSharedValue(0);
  let items2 = [sharedValue2, sharedValue1, sharedValue];
  const callback = sharedValue1.useCallback(() => {
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let result = sharedValue1.set(1);
    closure_6(true);
    set = sharedValue2.set;
    const withTiming = timing_timing.withTiming;
    const items = [closure_11, sharedValue1, c9, sharedValue];
    let c0;
    let c1;
    let c2;
    [tmp5, tmp6, tmp7, tmp8] = items;
    const obj = { duration: 250, easing: native.STANDARD_EASING };
    class MediaModalOverlayFooterTsx2 {
      constructor() {
        result = closure_0.set(closure_1);
        result1 = closure_2.set(false);
        return;
      }
    }
    const items1 = [tmp6, tmp7, tmp8];
    MediaModalOverlayFooterTsx2.__closure = items1;
    MediaModalOverlayFooterTsx2.__workletHash = 4574821225607;
    MediaModalOverlayFooterTsx2.__initData = tmp5;
    let result1 = set(withTiming(1, obj, "respect-motion-settings", MediaModalOverlayFooterTsx2));
  }, items2);
  let items3 = [sharedValue2, sharedValue1, sharedValue];
  const callback1 = sharedValue1.useCallback(() => {
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let result = sharedValue1.set(0);
    closure_6(false);
    set = sharedValue2.set;
    const withTiming = timing_timing.withTiming;
    const items = [closure_12, sharedValue1, c9, sharedValue];
    let c0;
    let c1;
    let c2;
    [tmp5, tmp6, tmp7, tmp8] = items;
    const obj = { duration: 250, easing: native.STANDARD_EASING };
    class MediaModalOverlayFooterTsx3 {
      constructor() {
        result = closure_0.set(closure_1);
        result1 = closure_2.set(true);
        return;
      }
    }
    const items1 = [tmp6, tmp7, tmp8];
    MediaModalOverlayFooterTsx3.__closure = items1;
    MediaModalOverlayFooterTsx3.__workletHash = 15699059534605;
    MediaModalOverlayFooterTsx3.__initData = tmp5;
    let result1 = set(withTiming(0, obj, "respect-motion-settings", MediaModalOverlayFooterTsx3));
  }, items3);
  let items4 = [sharedValue1, sharedValue, first2, first1, callback, callback1];
  const callback2 = sharedValue1.useCallback(() => {
    if (sharedValue1.get() === c9) {
      let value = sharedValue.get();
      const obj = sharedValue;
      if (value) {
        value = first2 === first1;
      }
      if (!value) {
        if (obj.get()) {
          callback();
        } else {
          callback1();
        }
      }
    }
  }, items4);
  const items5 = [tmp15];
  const items6 = [tmp12];
  const callback3 = sharedValue1.useCallback((arg0) => {
    easing2(arg0 + 17);
  }, items5);
  const callback4 = sharedValue1.useCallback((arg0) => {
    closure_8(arg0 + 17);
  }, items6);
  const tmp27 = onFullViewToggled(num2[6]);
  const items7 = [sharedValue2, first3, sharedValue1, 2, sharedValue2, 0, , , , , ];
  const useAnimatedStyle = tmp27.useAnimatedStyle;
  items7[6] = onFullViewToggled(num2[6]).interpolate;
  items7[7] = 1;
  items7[8] = 2;
  items7[9] = first2;
  items7[10] = 40;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  c9 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items7;
  class MediaModalOverlayFooterTsx4 {
    constructor() {
      let height;
      if (c0 > 0) {
        if (_undefined.get() === c2) {
          const value = _undefined2.get();
          const items = [c4, c6, c7];
          const items1 = [c0, , ];
          const _Math = Math;
          items1[1] = Math.max(c8, c0);
          const _Math2 = Math;
          items1[2] = Math.max(c8, c0) + c9;
          height = _undefined3(value, items, items1, "clamp");
        }
      }
      return { height, justifyContent: "flex-start" };
    }
  }
  const items8 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  MediaModalOverlayFooterTsx4.__closure = items8;
  MediaModalOverlayFooterTsx4.__workletHash = 14957520672262;
  MediaModalOverlayFooterTsx4.__initData = tmp28;
  const animatedStyle = useAnimatedStyle(MediaModalOverlayFooterTsx4);
  const items9 = [callback, , , , , ];
  const useAnimatedStyle2 = tmp3(tmp4[6]).useAnimatedStyle;
  tmp3(tmp4[6]);
  items9[1] = tmp3(tmp4[6]).interpolate;
  items9[2] = sharedValue2;
  items9[3] = 0;
  items9[4] = 1;
  items9[5] = num2;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items9;
  class MediaModalOverlayFooterTsx5 {
    constructor() {
      let items;
      let items1;
      let items2;
      const obj = { opacity: _undefined(_undefined2.get(), items, [1, 0], "clamp"), height: _undefined(_undefined2.get(), items1, items2, "clamp") };
      items = [c2, c3];
      items1 = [c3, c2];
      items2 = [0, c4];
      return obj;
    }
  }
  const items10 = [tmp42, tmp43, tmp44, tmp45, tmp46];
  MediaModalOverlayFooterTsx5.__closure = items10;
  MediaModalOverlayFooterTsx5.__workletHash = 3232524289494;
  MediaModalOverlayFooterTsx5.__initData = tmp41;
  const items11 = [tmp18, num, sharedValue, sharedValue1];
  const animatedStyle2 = useAnimatedStyle2(MediaModalOverlayFooterTsx5);
  const callback5 = obj3.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const value = height > num && sharedValue.get() && sharedValue1.get() === c9;
    if (value) {
      closure_12(height);
    }
  }, items11);
  const items12 = [callback1, , , , ];
  const useAnimatedStyle3 = tmp3(tmp4[6]).useAnimatedStyle;
  tmp3(tmp4[6]);
  items12[1] = tmp3(tmp4[6]).interpolate;
  items12[2] = sharedValue2;
  items12[3] = 0;
  items12[4] = 1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp50, tmp51, tmp52, tmp53, tmp54] = items12;
  class MediaModalOverlayFooterTsx6 {
    constructor() {
      let items;
      const obj = { height: _undefined(_undefined2.get(), items, [0, 24], "clamp") };
      items = [c2, c3];
      return obj;
    }
  }
  const items13 = [tmp51, tmp52, tmp53, tmp54];
  MediaModalOverlayFooterTsx6.__closure = items13;
  MediaModalOverlayFooterTsx6.__workletHash = 1997603737745;
  MediaModalOverlayFooterTsx6.__initData = tmp50;
  const animatedStyle3 = useAnimatedStyle3(MediaModalOverlayFooterTsx6);
  const tmp57 = num(tmp4[10])();
  ({ r, g, b, a } = tmp57.mediaModalFooterBackgroundColorRgba);
  const MediaModalFooterUnderlay = tmp57.MediaModalFooterUnderlay;
  const items14 = [callback2, r, g, b, , , , , , ];
  const useAnimatedStyle4 = tmp3(tmp4[6]).useAnimatedStyle;
  tmp3(tmp4[6]);
  items14[4] = tmp3(tmp4[6]).interpolate;
  items14[5] = sharedValue2;
  items14[6] = 0;
  items14[7] = 1;
  items14[8] = a;
  items14[9] = -1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68] = items14;
  class MediaModalOverlayFooterTsx7 {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      const obj = { backgroundColor: "rgba(" + c0 + ", " + c1 + ", " + c2 + ", " + _undefined(_undefined2.get(), items, items1, "clamp") + ")", paddingVertical: _undefined(_undefined2.get(), items2, [8, 0], "clamp"), transform: items4 };
      items = [c5, c6];
      items1 = [c7, 1];
      items2 = [c5, c6];
      const obj2 = { translateY: _undefined(_undefined2.get(), items3, [100, 0], "clamp") };
      items3 = [c8, c5];
      items4 = [obj2];
      return obj;
    }
  }
  const items15 = [tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68];
  MediaModalOverlayFooterTsx7.__closure = items15;
  MediaModalOverlayFooterTsx7.__workletHash = 8200199729064;
  MediaModalOverlayFooterTsx7.__initData = tmp59;
  const animatedStyle4 = useAnimatedStyle4(MediaModalOverlayFooterTsx7);
  const ref = obj3.useRef(undefined);
  const ref1 = obj3.useRef(undefined);
  const tmp7Result = tmp7(obj3.useState(true), 2);
  const first4 = tmp7Result[0];
  const items16 = [first1, first2, full, callback2];
  const tmp74 = tmp7Result[1];
  const memo = obj3.useMemo(() => {
    let tmp2;
    let tmp3;
    let tmp4;
    const Gesture = LegacyBaseButton.Gesture;
    const FlingResult = Gesture.Fling();
    const items = [closure_17, , ];
    const onStart = FlingResult.direction(LegacyBaseButton.Directions.UP).onStart;
    FlingResult.direction(LegacyBaseButton.Directions.UP);
    items[1] = _mod1708.scheduleOnRN;
    items[2] = callback2;
    let c0;
    let c1;
    [tmp2, tmp3, tmp4] = items;
    class MediaModalOverlayFooterTsx8 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items1 = [tmp3, tmp4];
    MediaModalOverlayFooterTsx8.__closure = items1;
    MediaModalOverlayFooterTsx8.__workletHash = 6219016168710;
    MediaModalOverlayFooterTsx8.__initData = tmp2;
    const onStartResult = onStart(MediaModalOverlayFooterTsx8);
    let tmp6 = !first;
    const enabled = onStartResult.withRef(ref).enabled;
    onStartResult.withRef(ref);
    if (!first) {
      tmp6 = first2 > first1;
    }
    return enabled(tmp6);
  }, items16);
  const items17 = [sharedValue2, full, callback2, first4];
  const memo1 = obj3.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    const FlingResult = Gesture.Fling();
    let items = [closure_19, first, sharedValue2, , , , , , , ];
    const onStart = FlingResult.direction(LegacyBaseButton.Directions.DOWN).onStart;
    FlingResult.direction(LegacyBaseButton.Directions.DOWN);
    items[3] = timing_timing.withTiming;
    items[4] = -1;
    items[5] = native.STANDARD_EASING;
    items[6] = closure_18;
    items[7] = 0;
    items[8] = _mod1708.scheduleOnRN;
    items[9] = callback2;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
    class MediaModalOverlayFooterTsx10 {
      constructor() {
        tmp = closure_0;
        if (tmp) {
          tmp15 = closure_7;
          tmp16 = closure_8;
          tmp17 = closure_7(closure_8);
        } else {
          tmp3 = closure_3;
          obj = { duration: 350, easing: null };
          tmp4 = closure_4;
          obj.easing = closure_4;
          tmp5 = closure_5;
          items = [, , ];
          items[0] = closure_5;
          items[1] = closure_1;
          tmp6 = closure_6;
          items[2] = closure_6;
          closure_0 = undefined;
          closure_1 = undefined;
          tmp7 = items;
          [tmp8, tmp9, tmp10] = items;
          class MediaModalOverlayFooterTsx9 {
            constructor() {
              result = closure_0.set(closure_1);
              return;
            }
          }
          items1 = [, ];
          items1[0] = tmp9;
          items1[1] = tmp10;
          MediaModalOverlayFooterTsx9.__closure = items1;
          num = 4032472095819;
          MediaModalOverlayFooterTsx9.__workletHash = 4032472095819;
          MediaModalOverlayFooterTsx9.__initData = tmp8;
          str = "respect-motion-settings";
          tmp11 = tmp3;
          tmp12 = obj;
          tmp13 = MediaModalOverlayFooterTsx9;
          tmp2 = closure_1;
          result = closure_1.set(closure_2(tmp3, obj, "respect-motion-settings", MediaModalOverlayFooterTsx9));
        }
        return;
      }
    }
    let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
    MediaModalOverlayFooterTsx10.__closure = items1;
    MediaModalOverlayFooterTsx10.__workletHash = 7803883424385;
    MediaModalOverlayFooterTsx10.__initData = tmp2;
    const onStartResult = onStart(MediaModalOverlayFooterTsx10);
    const withRefResult = onStartResult.withRef(ref1);
    return withRefResult.enabled(first4);
  }, items17);
  const items18 = [sharedValue2, sharedValue1, first1, first2, full, sharedValue, first4, num2];
  const memo2 = obj3.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp24;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp29;
    let tmp30;
    let tmp31;
    let tmp32;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp7;
    let tmp8;
    let tmp9;
    const tmp = require;
    const tmp2 = dependencyMap;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const maxPointersResult = PanResult.maxPointers(1);
    let items = [closure_20, sharedValue1, 2, clamp, first2, num2, first1, 0, 1, sharedValue2, 0.4, , , , , ];
    const onUpdate = maxPointersResult.activeOffsetY(10).onUpdate;
    const tmp4 = sharedValue1;
    maxPointersResult.activeOffsetY(10);
    items[11] = _mod1708.scheduleOnRN;
    items[12] = closure_6;
    items[13] = 3;
    items[14] = 40;
    items[15] = 2;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    c9 = undefined;
    let c10;
    let c11;
    let c12;
    let c13;
    let c14;
    [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items;
    const tmp5 = sharedValue2;
    class MediaModalOverlayFooterTsx11 {
      constructor(arg0) {
        translationY = arg0.translationY;
        result = closure_0.set(closure_1);
        if (translationY > 0) {
          tmp9 = closure_2;
          tmp10 = globalThis;
          _Math = Math;
          tmp11 = closure_3;
          tmp12 = closure_4;
          tmp13 = closure_5;
          num = 1;
          tmp14 = closure_6;
          tmp15 = closure_7;
          tmp16 = closure_2(1 - translationY / Math.abs(closure_3 - (closure_4 + closure_5)), closure_6, closure_7);
          tmp17 = closure_8;
          result1 = closure_8.set(tmp16);
          tmp19 = closure_9;
          if (tmp16 < closure_9) {
            tmp20 = closure_10;
            tmp21 = closure_11;
            flag = false;
            tmp22 = closure_10(closure_11, false);
          }
        } else {
          tmp2 = closure_2;
          tmp3 = closure_12;
          tmp4 = closure_13;
          tmp5 = closure_8;
          tmp6 = closure_7;
          tmp7 = closure_14;
          result2 = closure_8.set(closure_7 + (closure_14 - closure_7) * closure_2(-translationY / closure_12, 0, closure_13) / closure_13);
        }
        return;
      }
    }
    let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
    MediaModalOverlayFooterTsx11.__closure = items1;
    MediaModalOverlayFooterTsx11.__workletHash = 8297493939230;
    MediaModalOverlayFooterTsx11.__initData = tmp7;
    let items2 = [closure_23, tmp5, 0.75, , , , , , , , , , , , ];
    const onEnd = onUpdate(MediaModalOverlayFooterTsx11).onEnd;
    onUpdate(MediaModalOverlayFooterTsx11);
    items2[3] = _mod1708.scheduleOnRN;
    items2[4] = closure_6;
    items2[5] = sharedValue;
    items2[6] = 0;
    items2[7] = tmp4;
    items2[8] = _mod1655.withDelay;
    items2[9] = timing_timing.withTiming;
    items2[10] = c9;
    items2[11] = native.STANDARD_EASING;
    items2[12] = closure_21;
    items2[13] = 1;
    items2[14] = closure_22;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items2;
    class MediaModalOverlayFooterTsx14 {
      constructor() {
        obj = closure_0;
        if (closure_0.get() < closure_1) {
          tmp9 = closure_2;
          tmp10 = closure_3;
          flag = false;
          tmp11 = closure_2(closure_3, false);
          tmp12 = closure_4;
          flag2 = true;
          result = closure_4.set(true);
          tmp14 = closure_5;
          if (obj.get() === closure_5) {
            tmp22 = closure_6;
            tmp23 = closure_7;
            tmp24 = closure_8;
            tmp25 = closure_9;
            num3 = 150;
            result1 = closure_6.set(closure_7(150, closure_8(closure_9, { duration: 0 })));
          } else {
            obj1 = { duration: 150, easing: null };
            tmp36 = closure_10;
            obj1.easing = closure_10;
            tmp37 = closure_11;
            items = [, , ];
            items[0] = closure_11;
            tmp38 = closure_6;
            items[1] = closure_6;
            tmp39 = closure_9;
            items[2] = closure_9;
            closure_0 = undefined;
            closure_1 = undefined;
            tmp40 = items;
            [tmp15, tmp16, tmp17] = items;
            class MediaModalOverlayFooterTsx12 {
              constructor() {
                result = closure_0.set(closure_1);
                return;
              }
            }
            items1 = [, ];
            items1[0] = tmp16;
            items1[1] = tmp17;
            MediaModalOverlayFooterTsx12.__closure = items1;
            num2 = 16272811070801;
            MediaModalOverlayFooterTsx12.__workletHash = 16272811070801;
            MediaModalOverlayFooterTsx12.__initData = tmp15;
            str2 = "respect-motion-settings";
            tmp18 = tmp14;
            tmp19 = obj1;
            tmp20 = MediaModalOverlayFooterTsx12;
            result2 = obj.set(closure_8(tmp14, obj1, "respect-motion-settings", MediaModalOverlayFooterTsx12));
          }
        } else {
          tmp27 = closure_2;
          tmp28 = closure_3;
          flag3 = true;
          tmp29 = closure_2(closure_3, true);
          tmp30 = closure_12;
          obj4 = { duration: 150, easing: null };
          tmp31 = closure_10;
          obj4.easing = closure_10;
          tmp32 = closure_13;
          items2 = [, , , ];
          items2[0] = closure_13;
          tmp33 = closure_4;
          items2[1] = closure_4;
          class MediaModalOverlayFooterTsx12 {
            constructor() {
              result = closure_0.set(closure_1);
              return;
            }
          }
          items2[2] = closure_6;
          tmp34 = closure_9;
          items2[3] = closure_9;
          closure_0 = undefined;
          closure_1 = undefined;
          closure_2 = undefined;
          tmp35 = items2;
          [tmp, tmp2, tmp3, tmp4] = items2;
          class MediaModalOverlayFooterTsx13 {
            constructor() {
              result = closure_0.set(false);
              result1 = closure_1.set(closure_2);
              return;
            }
          }
          items3 = [, , ];
          items3[0] = tmp2;
          items3[1] = tmp3;
          items3[2] = tmp4;
          MediaModalOverlayFooterTsx13.__closure = items3;
          num = 10401061559415;
          MediaModalOverlayFooterTsx13.__workletHash = 10401061559415;
          MediaModalOverlayFooterTsx13.__initData = tmp;
          str = "respect-motion-settings";
          tmp5 = tmp30;
          tmp6 = obj4;
          tmp7 = MediaModalOverlayFooterTsx13;
          result3 = obj.set(closure_8(tmp30, obj4, "respect-motion-settings", MediaModalOverlayFooterTsx13));
        }
        return;
      }
    }
    let items3 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
    MediaModalOverlayFooterTsx14.__closure = items3;
    MediaModalOverlayFooterTsx14.__workletHash = 8663569570701;
    MediaModalOverlayFooterTsx14.__initData = tmp24;
    let tmp40 = first;
    const enabled = onEnd(MediaModalOverlayFooterTsx14).enabled;
    onEnd(MediaModalOverlayFooterTsx14);
    if (first) {
      tmp40 = first4;
    }
    return enabled(tmp40);
  }, items18);
  const items19 = [closure_24, overlayEnabled, sharedValue2];
  c0 = undefined;
  c1 = undefined;
  [tmp78, tmp79, tmp80] = items19;
  const tmp3Result6 = tmp3(tmp4[6]);
  class MediaModalOverlayFooterTsx15 {
    constructor() {
      const items = [_undefined.get(), _undefined2.get()];
      return items;
    }
  }
  const items20 = [tmp79, tmp80];
  MediaModalOverlayFooterTsx15.__closure = items20;
  MediaModalOverlayFooterTsx15.__workletHash = 11714064845531;
  MediaModalOverlayFooterTsx15.__initData = tmp78;
  const items21 = [closure_25, -0.25, overlayEnabled];
  c0 = undefined;
  c1 = undefined;
  [tmp81, tmp82, tmp83] = items21;
  class MediaModalOverlayFooterTsx16 {
    constructor(arg0) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      if (tmp) {
        const result = _undefined.set(false);
      }
    }
  }
  const items22 = [tmp82, tmp83];
  MediaModalOverlayFooterTsx16.__closure = items22;
  MediaModalOverlayFooterTsx16.__workletHash = 2620357650006;
  MediaModalOverlayFooterTsx16.__initData = tmp81;
  const animatedReaction = tmp3Result6.useAnimatedReaction(MediaModalOverlayFooterTsx15, MediaModalOverlayFooterTsx16);
  const items23 = [memo2, memo1, memo];
  const memo3 = obj3.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    return Gesture.Exclusive(memo, memo2, memo1);
  }, items23);
  const obj5 = { gesture: memo3, children: first1(View, obj6) };
  const GestureDetector = tmp3(tmp4[11]).GestureDetector;
  obj6 = { style: animatedStyle4, children: items24 };
  items24 = [MediaModalFooterUnderlay, ];
  View = tmp56(tmp4[6]).View;
  const SafeAreaPaddingView = tmp3(tmp4[13]).SafeAreaPaddingView;
  const obj7 = { style: items25, children: closure_6(tmp3(tmp4[14]).ActionSheetHeaderBar, obj8) };
  items25 = [animatedStyle3, tmp.drawerContainer];
  const View2 = tmp56(tmp4[6]).View;
  obj8 = { tabStyle: tmp.drawerHeaderTab, style: tmp.drawerHeader };
  const items26 = [closure_6(View2, obj7), sliderElement, ];
  const obj9 = { onLayout: callback5, style: animatedStyle, children: items27 };
  const obj10 = { style: tmp.messagePreviewContainer, children: closure_6(num(tmp4[15]), obj11) };
  const View3 = tmp56(tmp4[6]).View;
  obj11 = { channelId: channelId.channelId, messageId: channelId.messageId, onClose: channelId.onClose, onTapMessage: callback2, onMeasureFullHeight: callback3, onMeasureCollapsedHeight: callback4, full, canExpand: first2 > first1, setScrollViewIsAtTop: tmp74, flingUpRef: ref, flingDownRef: ref1, animationDriver: sharedValue2, entranceAnimationDriver: channelId.entranceAnimationDriver };
  items27 = [closure_6(full, obj10), ];
  if (tmp86Result) {
    const obj12 = { style: items28, children: closure_6(num(tmp4[16]), obj13) };
    items28 = [animatedStyle2, tmp.thumbnailsContainer];
    const View4 = tmp56(tmp4[6]).View;
    obj13 = { syncer };
    tmp86Result = tmp86(View4, obj12);
  }
  const rect = { bottom: true, left: true, right: true, children: items26 };
  items27[1] = tmp86Result;
  items26[2] = first1(View3, obj9);
  items24[1] = first1(SafeAreaPaddingView, rect);
  return closure_6(GestureDetector, obj5);
}
