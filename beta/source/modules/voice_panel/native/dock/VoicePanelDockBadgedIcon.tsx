// Module ID: 19606
// Function ID: 19607
// Name: VoicePanelDockBadgedIcon
// Dependencies: [19, 17, 11381, 21, 1187, 18739, 5140, 5199, 5370, 1705, 1652, 9593, 2]
// Exports: default

// Module 19606 (VoicePanelDockBadgedIcon)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1187 */;
import native2 from "native" /* 5199 */;
import react from "react" /* 19 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11381 */;
import Fragment from "Fragment" /* 21 */;
import GuildsBarActivityIndicator from "GuildsBarActivityIndicator" /* 18739 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let set, set2, tmp2;

let DOCK_TILE_SIZE;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let tmp;
const _mod1705 = tmp(1705);
const timing_timing = tmp(5370);
function StreamBadge(progress) {
  let items1;
  let tmp3Result;
  progress = progress.progress;
  const state = progress.state;
  const cleanUp = progress.cleanUp;
  const animatedBadgeStyle = progress.animatedBadgeStyle;
  let tmp = closure_13();
  let items = [cleanUp, progress, state];
  const effect = react.useEffect(() => {
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp = require;
    if (state === native2.TransitionStates.YEETED) {
      set2 = progress.set;
      const items = [closure_14, , ];
      const withTiming = timing_timing.withTiming;
      const tmpResult = timing_timing;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = cleanUp;
      let c0;
      let c1;
      [tmp12, tmp13, tmp14] = items;
      class VoicePanelDockBadgedIconTsx1 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp4 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp13, tmp14];
      VoicePanelDockBadgedIconTsx1.__closure = items1;
      VoicePanelDockBadgedIconTsx1.__workletHash = 2048844705662;
      VoicePanelDockBadgedIconTsx1.__initData = tmp12;
      set2(withTiming(0, React3, "respect-motion-settings", VoicePanelDockBadgedIconTsx1));
    } else {
      set = progress.set;
      const tmpResult2 = timing_timing;
      const result = set(tmpResult2.withTiming(1, React3));
    }
  }, items);
  const tmp3 = closure_5;
  const tmp4 = cleanUp;
  const obj = { style: items1, children: tmp3Result };
  items1 = [tmp.badge, animatedBadgeStyle];
  tmp3Result = null;
  const View = state(cleanUp[10]).View;
  const tmp5 = closure_12;
  if (null != closure_12) {
    const obj3 = { style: tmp.badgeIndicator, IconComponent: null, source: null, isCurrentUserConnected: true };
    ({ icon: obj2.IconComponent, source: obj2.source } = tmp5);
    tmp3Result = tmp3(progress(tmp4[5]).GuildsBarActivityIndicatorBase, obj3);
  }
  return tmp3(View, obj);
}
const StyleSheet = react_native.StyleSheet;
({ DOCK_FADE_TIMING: closure_4, DOCK_TILE_SIZE } = VoicePanelDockConstants);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const sum = DOCK_TILE_SIZE - native.BADGE_SIZE + 4;
const sum1 = DOCK_TILE_SIZE - native.BADGE_SIZE + 3;
const sum2 = native.BADGE_SIZE + 4;
let closure_9 = sum2 / 2;
let closure_10 = sum + native.BADGE_SIZE / 2;
let closure_11 = sum1 + native.BADGE_SIZE / 2;
const mediaIcon = GuildsBarActivityIndicator.getMediaIcon({ audio: false, video: false, screenshare: true, isCurrentUserConnected: true });
let createStyles = createStyles_mod;
let obj = { clip: obj2, badge: size, badgeIndicator: { top: 0, right: 0, backgroundColor: "transparent" } };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { position: "absolute", left: sum - native.BADGE_PADDING, top: sum1 - native.BADGE_PADDING, width: native.BADGE_SIZE + 2 * native.BADGE_PADDING, height: native.BADGE_SIZE + 2 * native.BADGE_PADDING };
let closure_13 = createStyles(obj);
let closure_14 = { code: "(function VoicePanelDockBadgedIconTsx1(finished){let[scheduleOnRN,cleanUp]=this.__closure;if(finished){scheduleOnRN(cleanUp);}})" };
let closure_16 = { code: "(function VoicePanelDockBadgedIconTsx2(){let[interpolate,progress,STREAM_BADGE_FADE_PORTION,Extrapolation,STREAM_BADGE_HIDDEN_SCALE]=this.__closure;return{opacity:interpolate(progress.get(),[1-STREAM_BADGE_FADE_PORTION,1],[0,1],Extrapolation.CLAMP),transform:[{scale:STREAM_BADGE_HIDDEN_SCALE+(1-STREAM_BADGE_HIDDEN_SCALE)*progress.get()}]};})" };
let closure_17 = { code: "(function VoicePanelDockBadgedIconTsx3(){let[progress,interpolate,STREAM_BADGE_FADE_PORTION,Extrapolation,STREAM_BADGE_HIDDEN_SCALE,CUTOUT_SIZE,CutoutShape,CUTOUT_CENTER_X,CUTOUT_CENTER_Y,CUTOUT_CORNER_RADIUS]=this.__closure;const arrival=progress.get();if(arrival===0){return{cutouts:[]};}const opacity=interpolate(arrival,[1-STREAM_BADGE_FADE_PORTION,1],[0,1],Extrapolation.CLAMP);const scale=(STREAM_BADGE_HIDDEN_SCALE+(1-STREAM_BADGE_HIDDEN_SCALE)*arrival)*opacity;const size=CUTOUT_SIZE*scale;return{cutouts:[{shape:CutoutShape.RoundedRect,x:CUTOUT_CENTER_X-size/2,y:CUTOUT_CENTER_Y-size/2,width:size,height:size,cornerRadius:CUTOUT_CORNER_RADIUS*scale}]};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockBadgedIcon.tsx");

export default function VoicePanelDockBadgedIcon(streaming) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp7;
  let tmp8;
  let tmp9;
  streaming = streaming.streaming;
  let sharedValue;
  let animatedStyle;
  const children = streaming.children;
  const tmp = closure_13();
  let num = 0;
  const useSharedValue = sharedValue(1652).useSharedValue;
  const tmp4 = sharedValue(1652);
  if (streaming) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [closure_16, , , , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  sharedValue(1652);
  items[1] = sharedValue(1652).interpolate;
  items[2] = sharedValue;
  items[3] = 0.7;
  items[4] = sharedValue(1652).Extrapolation;
  items[5] = 0.8;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class VoicePanelDockBadgedIconTsx2 {
    constructor() {
      let diff;
      let items;
      let items1;
      const obj = { opacity: _undefined(_undefined2.get(), items, [0, 1], _undefined3.CLAMP), transform: items1 };
      items = [1 - c2, 1];
      const obj2 = { scale: c4 + diff * _undefined2.get() };
      diff = 1 - c4;
      items1 = [obj2];
      return obj;
    }
  }
  let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12];
  VoicePanelDockBadgedIconTsx2.__closure = items1;
  VoicePanelDockBadgedIconTsx2.__workletHash = 13214924592294;
  VoicePanelDockBadgedIconTsx2.__initData = tmp7;
  animatedStyle = useAnimatedStyle(VoicePanelDockBadgedIconTsx2);
  const items2 = [closure_17, sharedValue, , , , , , , , , ];
  const useAnimatedProps = tmp2(1652).useAnimatedProps;
  sharedValue(1652);
  items2[2] = sharedValue(1652).interpolate;
  items2[3] = 0.7;
  items2[4] = sharedValue(1652).Extrapolation;
  items2[5] = 0.8;
  items2[6] = sum2;
  items2[7] = sharedValue(9593).CutoutShape;
  items2[8] = closure_10;
  items2[9] = closure_11;
  items2[10] = closure_9;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items2;
  class VoicePanelDockBadgedIconTsx3 {
    constructor() {
      let items1;
      let result2;
      const value = _undefined.get();
      if (0 === value) {
        return { cutouts: [] };
      } else {
        const items = [1 - c2, 1];
        const result = (c4 + (1 - c4) * value) * _undefined2(value, items, [0, 1], _undefined3.CLAMP);
        const result1 = c5 * result;
        size = { shape: _undefined4.RoundedRect, x: c7 - result2, y: c8 - result2, width: result1, height: result1, cornerRadius: c9 * result };
        result2 = result1 / 2;
        const obj2 = { cutouts: items1 };
        items1 = [size];
        return obj2;
      }
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  VoicePanelDockBadgedIconTsx3.__closure = items3;
  VoicePanelDockBadgedIconTsx3.__workletHash = 6139173483455;
  VoicePanelDockBadgedIconTsx3.__initData = tmp15;
  const items4 = [animatedStyle, sharedValue];
  const animatedProps = useAnimatedProps(VoicePanelDockBadgedIconTsx3);
  const callback = react.useCallback((arg0, arg1, state, cleanUp) => {
    const obj = { progress: sharedValue, animatedBadgeStyle: animatedStyle, state, cleanUp };
    return hasOwnProperty(StreamBadge, obj, arg0);
  }, items4);
  let obj = { style: tmp.clip, animatedProps, children };
  const items5 = [closure_5(tmp2(9593).ClipViewAnimated, obj), ];
  const TransitionItem = tmp2(5199).TransitionItem;
  let obj2 = { children: items5 };
  items5[1] = closure_5(TransitionItem, { item: streaming, renderItem: callback });
  return closure_7(RoundedRect, obj2);
};
