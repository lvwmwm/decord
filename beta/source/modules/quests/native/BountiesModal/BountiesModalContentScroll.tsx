// Module ID: 15282
// Function ID: 15283
// Name: BountiesModalContentScroll
// Dependencies: [32, 19, 17, 7975, 5695, 15283, 1078, 2042, 21, 1369, 580, 558, 568, 4790, 4529, 1482, 1616, 15284, 11643, 7972, 15279, 4791, 4794, 7991, 11657, 1114, 504, 15287, 15288, 1259, 8001, 15289, 10600, 5702, 5700, 11672, 15290, 15323, 11942, 15324, 9027, 15328, 5230, 15329, 15293, 4518, 15330, 2]

// Module 15282 (BountiesModalContentScroll)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import ThemeContextProvider from "ThemeContextProvider" /* 4518 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import timing from "timing" /* 4791 */;
import timingPresets from "timingPresets" /* 4794 */;
import QuestContent from "QuestContent" /* 5700 */;
import AdCreativeType from "AdCreativeType" /* 5702 */;
import QuestDataUtils from "QuestDataUtils" /* 7972 */;
import AnalyticsActions from "AnalyticsActions" /* 7991 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8001 */;
import QuestActionCreators from "QuestActionCreators" /* 10600 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 11657 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11672 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15279 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 15288 */;
import BountiesScrollVideoItem from "BountiesScrollVideoItem" /* 15290 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 15324 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 15330 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7975 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestConstants = fn(5695);
({ BOUNTY_ORB_AMOUNT: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9 } = QuestConstants);
const BountiesModalConstants = fn(15283);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: closure_11 } = BountiesModalConstants);
const Constants = fn(1078);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const PlatformUtils = fn(1369);
let closure_17 = PlatformUtils.isAndroid();
let c18 = 0;
let c19 = 1;
let c20 = 2;
let c21 = 3;
let c22 = 0.5625;
let c23 = 97;
const PX_8 = nativeDefault.space.PX_8;
let c25 = 0.3;
let c26 = 0.8;
let closure_27 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"];
let c28 = 0.05;
let c29 = 0.1;
let ReactCompilerGating = fn(558);
let ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? ((trailingItem) => {
  const cResult = c.c(1);
  if (null == trailingItem.trailingItem) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { style: null };
      const obj3 = { height: PX_8 };
      obj2.style = obj3;
      const tmp7 = closure_1_15(timestampProducer, obj2);
      cResult[0] = tmp7;
      let first = tmp7;
    } else {
      first = cResult[0];
    }
  }
}) : ((trailingItem) => {
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    const obj = { style: null };
    const obj2 = { height: PX_8 };
    obj.style = obj2;
    tmp = closure_1_15(timestampProducer, obj);
  }
  return tmp;
});
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  const cResult = c.c(2);
  height = height.height;
  if (cResult[0] !== height) {
    const obj2 = { style: null };
    const obj3 = { height };
    obj2.style = obj3;
    const tmp5 = closure_1_15(timestampProducer, obj2);
    cResult[0] = height;
    cResult[1] = tmp5;
    let tmp2 = tmp5;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((height) => closure_1_15(timestampProducer, { style: { height: height.height } }));
const createStyles = fn(4790);
let closure_33 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1 }, recapPage: { position: "absolute", zIndex }, listWrapper: { position: "absolute", zIndex: zIndex2, overflow: "hidden" }, closeButton: { position: "absolute", zIndex: zIndex4 }, peekGradient: { position: "absolute", zIndex: zIndex3 } };
  return obj;
});
const __initData = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
const __initData2 = { code: "function BountiesModalContentScrollTsx3(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  const cResult = index(scrollY[12]).c(6);
  index = index.index;
  const slotHeight = index.slotHeight;
  scrollY = index.scrollY;
  ({ style, isPeekEnabled } = index);
  const children = index.children;
  let obj = index(scrollY[12]);
  const tmp = scrollY;
  const fn = function o() {
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === index) {
          num = c26;
        }
      }
    }
    const obj = { opacity: null };
    const items = [0, c25, 1];
    const items1 = [1, 1, num];
    obj.opacity = ReanimatedRexport.interpolate(absolute, items, items1, ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  const obj2 = index(scrollY[14]);
  fn.__closure = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY, interpolate: index(scrollY[14]).interpolate, FADE_DEADBAND, Extrapolation: index(scrollY[14]).Extrapolation };
  fn.__workletHash = 6532652233494;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === style) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp4) {
        let tmp5 = cResult[5];
      }
      return tmp5;
    }
    const obj4 = { style: tmp4, children };
    const tmp8 = closure_15(slotHeight(tmp[14]).View, obj4);
    cResult[3] = children;
    cResult[4] = tmp4;
    cResult[5] = tmp8;
    tmp5 = tmp8;
  }
  let items = [style, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = style;
  cResult[2] = items;
  tmp4 = items;
}) : ((index) => {
  index = index.index;
  const slotHeight = index.slotHeight;
  const scrollY = index.scrollY;
  const isPeekEnabled = index.isPeekEnabled;
  ({ style, children } = index);
  const fn = function c() {
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === index) {
          num = c26;
        }
      }
    }
    const obj = { opacity: null };
    const items = [0, c25, 1];
    const items1 = [1, 1, num];
    obj.opacity = ReanimatedRexport.interpolate(absolute, items, items1, ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  let obj = index(scrollY[14]);
  fn.__closure = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY, interpolate: index(scrollY[14]).interpolate, FADE_DEADBAND, Extrapolation: index(scrollY[14]).Extrapolation };
  fn.__workletHash = 9072488166423;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children };
  let items = [style, animatedStyle];
  obj3.style = items;
  return closure_15(slotHeight(scrollY[14]).View, obj3);
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((footerHeight) => {
  const cResult = c.c(5);
  ({ width, height } = useWindowDimensionsDefault());
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right;
  const diff1 = height - rect.top - footerHeight.footerHeight;
  let result = diff / c22;
  let result1 = diff;
  if (result > diff1) {
    result1 = diff1 * c22;
    result = diff1;
  }
  const top = rect.top;
  const rounded = Math.floor(rect.left + (diff - result1) / 2);
  const rounded1 = Math.floor(result1);
  const rounded2 = Math.floor(result);
  if (cResult[0] === rounded) {
    if (cResult[1] === rounded1) {
      if (cResult[2] === rounded2) {
        if (cResult[3] === top) {
          let tmp10 = cResult[4];
        }
        return tmp10;
      }
    }
  }
  const size = { top, left: rounded, width: rounded1, height: rounded2 };
  cResult[0] = rounded;
  cResult[1] = rounded1;
  cResult[2] = rounded2;
  cResult[3] = top;
  cResult[4] = size;
  tmp10 = size;
}) : ((footerHeight) => {
  footerHeight = footerHeight.footerHeight;
  let width;
  let height;
  let size = width(height[15])();
  width = size.width;
  height = size.height;
  const tmp = width(height[16])();
  closure_3 = tmp;
  const items = [width, height, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp);
  items[5] = footerHeight;
  return noop.useMemo(() => {
    const rect = closure_3;
    const diff = width - closure_3.left - closure_3.right;
    const diff1 = height - closure_3.top - footerHeight;
    let result = diff / c22;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c22;
      result = diff1;
    }
    const size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
    return size;
  }, items);
});
let closure_38 = { code: "function BountiesModalContentScrollTsx4(event_0){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event_0.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_0));}}" };
let closure_39 = { code: "function BountiesModalContentScrollTsx5(event_1){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_1));}" };
let closure_40 = { code: "function BountiesModalContentScrollTsx6(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
let closure_41 = { code: "function BountiesModalContentScrollTsx7(event_2){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event_2);}isScrollingInBoundsSharedValue.set(false);}" };
let closure_42 = { code: "function BountiesModalContentScrollTsx8(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
let closure_43 = { code: "function BountiesModalContentScrollTsx9(next,prev_0){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev_0){runOnJS(commitSwipe)(next);}}" };
let closure_44 = { code: "function BountiesModalContentScrollTsx10(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_45 = { code: "function BountiesModalContentScrollTsx11(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
let closure_46 = { code: "function BountiesModalContentScrollTsx12(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
let closure_47 = { code: "function BountiesModalContentScrollTsx13(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
let closure_48 = { code: "function BountiesModalContentScrollTsx14(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
let closure_49 = { code: "function BountiesModalContentScrollTsx15(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
let closure_50 = { code: "function BountiesModalContentScrollTsx16(){const{videoEndPeekScale,videoEndAppStoreProgress,BOUNTIES_MODAL_FOOTER_HEIGHT,videoLayout}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();const footerHeight_0=overlayProgress>0||scale<1?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+videoLayout.height*scale+footerHeight_0};}" };
let closure_51 = { code: "function BountiesModalContentScrollTsx17(){const{videoEndPeekScale,videoEndAppStoreProgress}=this.__closure;const scale_0=videoEndPeekScale.get();const overlayProgress_0=videoEndAppStoreProgress.get();return overlayProgress_0>0||scale_0<1;}" };
let closure_52 = { code: "function BountiesModalContentScrollTsx18(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
let closure_53 = { code: "function BountiesModalContentScrollTsx19(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
let closure_54 = { code: "function BountiesModalContentScrollTsx20(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
let closure_55 = { code: "function BountiesModalContentScrollTsx21(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_56 = { code: "function BountiesModalContentScrollTsx22(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress_0=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress_0,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
let closure_57 = { code: "function BountiesModalContentScrollTsx23(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
let closure_58 = { code: "function BountiesModalContentScrollTsx24(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
let closure_59 = { code: "function BountiesModalContentScrollTsx25(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
const __initData3 = { code: "function BountiesModalContentScrollTsx26(event_0){const{scrollY,isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;scrollY.set(event_0.contentOffset.y);if(isDraggingSharedValue.get()){isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_0));}}" };
const __initData4 = { code: "function BountiesModalContentScrollTsx27(event_1){const{isDraggingSharedValue,isScrollingInBoundsSharedValue,isScrollEventInBounds}=this.__closure;isDraggingSharedValue.set(true);isScrollingInBoundsSharedValue.set(isScrollEventInBounds(event_1));}" };
const __initData5 = { code: "function BountiesModalContentScrollTsx28(){const{isDraggingSharedValue,IS_ANDROID,isScrollingInBoundsSharedValue}=this.__closure;isDraggingSharedValue.set(false);if(!IS_ANDROID){isScrollingInBoundsSharedValue.set(false);}}" };
const __initData6 = { code: "function BountiesModalContentScrollTsx29(event_2){const{showRecapPullZone,runOnJS,handleRecapMomentumEnd,isScrollingInBoundsSharedValue}=this.__closure;if(showRecapPullZone){runOnJS(handleRecapMomentumEnd)(event_2);}isScrollingInBoundsSharedValue.set(false);}" };
const __initData7 = { code: "function BountiesModalContentScrollTsx30(){const{scrollY,slotHeight,lastBountyIndex}=this.__closure;return Math.min(Math.max(Math.round(scrollY.get()/slotHeight),0),lastBountyIndex);}" };
const __initData8 = { code: "function BountiesModalContentScrollTsx31(next,prev_0){const{runOnJS,commitSwipe}=this.__closure;if(next!==prev_0){runOnJS(commitSwipe)(next);}}" };
const __initData9 = { code: "function BountiesModalContentScrollTsx32(){const{showRecapPullZone,scrollY,lastBountyScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=lastBountyScrollOffset-RECAP_SNAP_EPSILON;}" };
const __initData10 = { code: "function BountiesModalContentScrollTsx33(show,previousShow){const{runOnJS,setShowRecapFooter}=this.__closure;if(show!==previousShow){runOnJS(setShowRecapFooter)(show);}}" };
const __initData11 = { code: "function BountiesModalContentScrollTsx34(){const{showRecapPullZone,scrollY,lastBountyScrollOffset}=this.__closure;return showRecapPullZone&&scrollY.get()>lastBountyScrollOffset;}" };
const __initData12 = { code: "function BountiesModalContentScrollTsx35(revealed,previousRevealed){const{runOnJS,setIsRecapPageRevealed}=this.__closure;if(revealed!==previousRevealed){runOnJS(setIsRecapPageRevealed)(revealed);}}" };
const __initData13 = { code: "function BountiesModalContentScrollTsx36(){const{showRecapPullZone,scrollY,fullRecapScrollOffset,RECAP_SNAP_EPSILON}=this.__closure;return showRecapPullZone&&scrollY.get()>=fullRecapScrollOffset-RECAP_SNAP_EPSILON;}" };
const __initData14 = { code: "function BountiesModalContentScrollTsx37(onTop,previousOnTop){const{runOnJS,setIsRecapPageOnTop}=this.__closure;if(onTop!==previousOnTop){runOnJS(setIsRecapPageOnTop)(onTop);}}" };
const __initData15 = { code: "function BountiesModalContentScrollTsx38(){const{videoEndPeekScale,videoEndAppStoreProgress,BOUNTIES_MODAL_FOOTER_HEIGHT,videoLayout}=this.__closure;const scale=videoEndPeekScale.get();const overlayProgress=videoEndAppStoreProgress.get();const footerHeight_0=overlayProgress>0||scale<1?0:BOUNTIES_MODAL_FOOTER_HEIGHT;return{height:videoLayout.top+videoLayout.height*scale+footerHeight_0};}" };
const __initData16 = { code: "function BountiesModalContentScrollTsx39(){const{videoEndPeekScale,videoEndAppStoreProgress}=this.__closure;const scale_0=videoEndPeekScale.get();const overlayProgress_0=videoEndAppStoreProgress.get();return overlayProgress_0>0||scale_0<1;}" };
const __initData17 = { code: "function BountiesModalContentScrollTsx40(hide,previousHide){const{runOnJS,setHideListFooterPadding}=this.__closure;if(hide!==previousHide){runOnJS(setHideListFooterPadding)(hide);}}" };
const __initData18 = { code: "function BountiesModalContentScrollTsx41(){const{getRevealProgress,scrollY,lastBountyScrollOffset,recapRevealHeight}=this.__closure;return getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight);}" };
const __initData19 = { code: "function BountiesModalContentScrollTsx42(){const{interpolate,recapPullProgress,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[0,1],[0,1],Extrapolation.CLAMP)};}" };
const __initData20 = { code: "function BountiesModalContentScrollTsx43(){const{interpolate,recapPullProgress,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;return{opacity:interpolate(recapPullProgress.get(),[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
const __initData21 = { code: "function BountiesModalContentScrollTsx44(){const{scrollY,lastBountyScrollOffset,slotHeight,recapPullProgress,getRevealProgress,recapRevealHeight,interpolate,FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS,Extrapolation}=this.__closure;const progress_0=scrollY.get()>=lastBountyScrollOffset-slotHeight/2?recapPullProgress.get():getRevealProgress(scrollY.get(),0,recapRevealHeight);return{opacity:interpolate(progress_0,[FOOTER_FADE_START_PROGRESS,FOOTER_FADE_END_PROGRESS],[1,0],Extrapolation.CLAMP)};}" };
const __initData22 = { code: "function BountiesModalContentScrollTsx45(){const{interpolate,scrollY,slotHeight,Extrapolation}=this.__closure;return{opacity:interpolate(scrollY.get(),[0,slotHeight],[1,0],Extrapolation.CLAMP)};}" };
const __initData23 = { code: "function BountiesModalContentScrollTsx46(){const{recapPullProgress,FOOTER_FADE_END_PROGRESS}=this.__closure;return recapPullProgress.get()<FOOTER_FADE_END_PROGRESS;}" };
const __initData24 = { code: "function BountiesModalContentScrollTsx47(pressable,previousPressable){const{runOnJS,setIsCloseButtonPressable}=this.__closure;if(pressable!==previousPressable){runOnJS(setIsCloseButtonPressable)(pressable);}}" };
ReactCompilerGating = fn(558);
let closure_82 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialBountyId) => {
  const cResult = initialBountyId(568).c(192);
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  scrollY();
  const height = sourceQuestContent(1482)().height;
  let ref = questHomeBounties.useRef(null);
  let obj = initialBountyId(568);
  let tmp6 = _slicedToArray;
  [tmp8, dependencyMap] = questHomeBounties.useState(initialBountyId(15284).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(nativeEvent) {
      dependencyMap(Math.ceil(nativeEvent.nativeEvent.layout.height));
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp8) {
    let obj3 = { footerHeight: tmp8 };
    cResult[1] = tmp8;
    cResult[2] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  const tmp11 = closure_37(tmp10);
  _slicedToArray = tmp11;
  let tmp7 = _slicedToArray(questHomeBounties.useState(initialBountyId(15284).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  questHomeBounties = initialBountyId(11643).useQuestHomeBounties().questHomeBounties;
  if (cResult[3] === initialBountyId) {
    if (cResult[4] === questHomeBounties) {
      let tmp12 = cResult[5];
    }
    const first1 = tmp6(obj2.useState(tmp12), 1)[0];
    closure_6 = tmp13;
    if (cResult[6] === initialBountyId) {
      if (cResult[7] === tmp13) {
        if (cResult[8] === sourceQuestContent) {
          let tmp14 = cResult[9];
          let tmp15 = cResult[10];
        }
        const effect = obj2.useEffect(tmp14, tmp15);
        const sharedValue = tmp(4529).useSharedValue(1);
        const tmpResult3 = tmp(4529);
        const sharedValue1 = tmp(4529).useSharedValue(0);
        class Oe {
          constructor() {
            if (closure_6) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[19]);
              tmp3 = globalThis;
              _Error = Error;
              tmp4 = new.target;
              str = "Bounty unexpectedly missing when opening the Bounties modal";
              tmp5 = new.target;
              error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
              obj1 = { tags: null, extra: null };
              obj1.tags = { source: "BountiesModalContentScroll" };
              obj5 = { bountyId: null, sourceQuestContent: null };
              tmp7 = initialBountyId;
              obj5.bountyId = initialBountyId;
              tmp8 = sourceQuestContent;
              obj5.sourceQuestContent = sourceQuestContent;
              obj1.extra = obj5;
              tmp9 = error;
              result = obj.captureQuestsException(error, obj1);
              tmp11 = closure_1;
              obj4 = closure_1(closure_2[20]);
              hideModalResult = obj4.hideModal();
            }
            return;
          }
        }
        [tmp20, closure_9] = tmp19;
        ref = obj2.useRef(null);
        const ref2 = obj2.useRef(0);
        if (cResult[11] === tmp11.height) {
          if (cResult[12] === tmp11.top) {
            if (cResult[13] === height) {
              let tmp22 = cResult[14];
            }
            if (cResult[15] !== height) {
              const tmp27 = ref(height);
              cResult[15] = height;
              cResult[16] = tmp27;
            }
            if (cResult[17] !== sharedValue1) {
              class Ne {
                constructor(arg0) {
                  closure_11.current = Date.now();
                  closure_10.current = initialBountyId;
                  tmp = closure_9(initialBountyId);
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[21]);
                  result = closure_8.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                  appId = initialBountyId.metadata.appId;
                  trackOverlayEventResult = initialBountyId.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM);
                  return;
                }
              }
              cResult[17] = sharedValue1;
              cResult[18] = Ne;
            } else {
              class Ne {
                constructor(arg0) {
                  closure_11.current = Date.now();
                  closure_10.current = initialBountyId;
                  tmp = closure_9(initialBountyId);
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[21]);
                  result = closure_8.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                  appId = initialBountyId.metadata.appId;
                  trackOverlayEventResult = initialBountyId.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM);
                  return;
                }
              }
            }
            if (cResult[19] === sharedValue1) {
              class Ne {
                constructor(arg0) {
                  closure_11.current = Date.now();
                  closure_10.current = initialBountyId;
                  tmp = closure_9(initialBountyId);
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[21]);
                  result = closure_8.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                  appId = initialBountyId.metadata.appId;
                  trackOverlayEventResult = initialBountyId.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM);
                  return;
                }
              }
              if (cResult[22] === tmp29) {
                class Ne {
                  constructor(arg0) {
                    closure_11.current = Date.now();
                    closure_10.current = initialBountyId;
                    tmp = closure_9(initialBountyId);
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[21]);
                    result = closure_8.set(obj.withTiming(1, closure_0(closure_2[22]).timingSlow));
                    appId = initialBountyId.metadata.appId;
                    trackOverlayEventResult = initialBountyId.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, tmp2(tmp3[23]).AppStoreOverlayVariant.CUSTOM);
                    return;
                  }
                }
              }
              let obj4 = { videoEndPeekTargetScale: tmp22, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible: tmp21, showVideoEndAppStoreOverlay: tmp28, dismissVideoEndAppStoreOverlay: null };
              class Oe {
                constructor() {
                  if (closure_6) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[19]);
                    tmp3 = globalThis;
                    _Error = Error;
                    tmp4 = new.target;
                    str = "Bounty unexpectedly missing when opening the Bounties modal";
                    tmp5 = new.target;
                    error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
                    obj1 = { tags: null, extra: null };
                    obj1.tags = { source: "BountiesModalContentScroll" };
                    obj5 = { bountyId: null, sourceQuestContent: null };
                    tmp7 = initialBountyId;
                    obj5.bountyId = initialBountyId;
                    tmp8 = sourceQuestContent;
                    obj5.sourceQuestContent = sourceQuestContent;
                    obj1.extra = obj5;
                    tmp9 = error;
                    result = obj.captureQuestsException(error, obj1);
                    tmp11 = closure_1;
                    obj4 = closure_1(closure_2[20]);
                    hideModalResult = obj4.hideModal();
                  }
                  return;
                }
              }
              cResult[22] = tmp29;
              cResult[23] = tmp21;
              cResult[24] = tmp28;
              cResult[25] = sharedValue;
              cResult[26] = tmp22;
              cResult[27] = obj4;
            }
            function be() {
              const current = ref.current;
              if (null != current) {
                ref.current = null;
                const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
                const appId = current.metadata.appId;
                const _Date = Date;
                current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
                const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
                const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                adContentId(null);
                const result1 = sharedValue.set(timing.withTiming(1, timingPresets.timingStandard));
                const result2 = sharedValue1.set(0);
              }
            }
            cResult[19] = sharedValue1;
            class Oe {
              constructor() {
                if (closure_6) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[19]);
                  tmp3 = globalThis;
                  _Error = Error;
                  tmp4 = new.target;
                  str = "Bounty unexpectedly missing when opening the Bounties modal";
                  tmp5 = new.target;
                  error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
                  obj1 = { tags: null, extra: null };
                  obj1.tags = { source: "BountiesModalContentScroll" };
                  obj5 = { bountyId: null, sourceQuestContent: null };
                  tmp7 = initialBountyId;
                  obj5.bountyId = initialBountyId;
                  tmp8 = sourceQuestContent;
                  obj5.sourceQuestContent = sourceQuestContent;
                  obj1.extra = obj5;
                  tmp9 = error;
                  result = obj.captureQuestsException(error, obj1);
                  tmp11 = closure_1;
                  obj4 = closure_1(closure_2[20]);
                  hideModalResult = obj4.hideModal();
                }
                return;
              }
            }
            cResult[21] = be;
            tmp29 = be;
          }
        }
        let obj5 = { windowHeight: height, videoTop: null, videoHeight: null };
        ({ top: obj7.videoTop, height: obj7.videoHeight } = tmp11);
        const tmp24 = ref2(obj5);
        cResult[11] = tmp11.height;
        cResult[12] = tmp11.top;
        cResult[13] = height;
        cResult[14] = tmp24;
        tmp22 = tmp24;
        const tmpResult4 = tmp(4529);
      }
    }
    class Oe {
      constructor() {
        if (closure_6) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[19]);
          tmp3 = globalThis;
          _Error = Error;
          tmp4 = new.target;
          str = "Bounty unexpectedly missing when opening the Bounties modal";
          tmp5 = new.target;
          error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
          obj1 = { tags: null, extra: null };
          obj1.tags = { source: "BountiesModalContentScroll" };
          obj5 = { bountyId: null, sourceQuestContent: null };
          tmp7 = initialBountyId;
          obj5.bountyId = initialBountyId;
          tmp8 = sourceQuestContent;
          obj5.sourceQuestContent = sourceQuestContent;
          obj1.extra = obj5;
          tmp9 = error;
          result = obj.captureQuestsException(error, obj1);
          tmp11 = closure_1;
          obj4 = closure_1(closure_2[20]);
          hideModalResult = obj4.hideModal();
        }
        return;
      }
    }
    let items = [0 === first1.length, initialBountyId, sourceQuestContent];
    cResult[6] = initialBountyId;
    cResult[7] = 0 === first1.length;
    cResult[8] = sourceQuestContent;
    cResult[9] = Oe;
    cResult[10] = items;
    tmp15 = items;
    tmp14 = Oe;
  }
  function pe() {
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
    if (findIndexResult < 0) {
      let items = [];
    } else {
      items = arr;
      if (0 !== findIndexResult) {
        const items1 = [];
        HermesBuiltin.arraySpread(arr.slice(0, findIndexResult), HermesBuiltin.arraySpread(arr.slice(findIndexResult), 0));
        items = items1;
        const arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(findIndexResult), 0);
      }
    }
    return items;
  }
  cResult[3] = initialBountyId;
  cResult[4] = questHomeBounties;
  cResult[5] = pe;
  tmp12 = pe;
}) : ((initialBountyId) => {
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  noop = undefined;
  c12 = undefined;
  closure_24 = undefined;
  c33 = undefined;
  let sharedValue2;
  let animatedStyle;
  let first4;
  closure_49 = undefined;
  let memo9;
  let derivedValue;
  let isPeekEnabled;
  let tmp = c33();
  dependencyMap = tmp;
  const height = sourceQuestContent(1482)().height;
  noop.useRef(null);
  [tmp7, c4] = height(noop.useState(initialBountyId(15284).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  const tmp9 = sharedValue2({ footerHeight: tmp7 });
  styles = tmp9;
  let tmp6 = height(noop.useState(initialBountyId(15284).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  const questHomeBounties = initialBountyId(11643).useQuestHomeBounties().questHomeBounties;
  const data = height(noop.useState(() => {
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
    if (findIndexResult < 0) {
      let items = [];
    } else {
      items = arr;
      if (0 !== findIndexResult) {
        const items1 = [];
        HermesBuiltin.arraySpread(arr.slice(0, findIndexResult), HermesBuiltin.arraySpread(arr.slice(findIndexResult), 0));
        items = items1;
        const arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(findIndexResult), 0);
      }
    }
    return items;
  }), 1)[0];
  closure_8 = tmp10;
  let items = [0 === data.length, initialBountyId, sourceQuestContent];
  const effect = noop.useEffect(() => {
    if (closure_8) {
      const _Error = Error;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj2 = { tags: { source: "BountiesModalContentScroll" }, extra: null };
      const obj3 = { bountyId: initialBountyId, sourceQuestContent };
      obj2.extra = obj3;
      const result = QuestDataUtils.captureQuestsException(error, obj2);
      BountiesModalActionCreatorsDefault.hideModal();
    }
  }, items);
  adContentId = closure_8;
  let obj2 = initialBountyId(11643);
  const sharedValue = initialBountyId(4529).useSharedValue(1);
  let obj3 = initialBountyId(4529);
  const sharedValue1 = initialBountyId(4529).useSharedValue(0);
  let obj4 = initialBountyId(4529);
  [tmp15, c12] = height(noop.useState(null), 2);
  const ref = noop.useRef(null);
  noop.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp16;
  let items1 = [height, , ];
  ({ top: arr3[1], height: arr3[2] } = tmp9);
  const memo = noop.useMemo(() => closure_2_11({ windowHeight: height, videoTop: styles.top, videoHeight: styles.height }), items1);
  const items2 = [height];
  const items3 = [sharedValue1];
  const memo1 = noop.useMemo(() => v65535(height), items2);
  const callback1 = noop.useCallback((current) => {
    closure_14.current = Date.now();
    closure_13.current = current;
    _undefined2(current);
    const result = sharedValue1.set(timing.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    current.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items3);
  const items4 = [sharedValue1, sharedValue];
  const callback2 = noop.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const _Date = Date;
      current.trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const result = AppStoreOverlayTelemetryManager.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined2(null);
      const result1 = sharedValue.set(timing.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items4);
  const items5 = [callback2, null != tmp15, callback1, sharedValue, memo];
  const memo2 = noop.useMemo(() => ({ videoEndPeekTargetScale: memo, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items5);
  const tmp14 = height(noop.useState(null), 2);
  const items6 = [data];
  const items7 = [data, closure_8];
  const stateFromStores = initialBountyId(504).useStateFromStores(items6, () => BountyStore.getCompletedBountyCount(first) * closure_9, items7);
  let obj5 = initialBountyId(504);
  const bountyRecurringSwipeUpNux = initialBountyId(15287).useBountyRecurringSwipeUpNux({ isEligible: tmp23 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height2 = tmp9.height;
  let sum = height2 + closure_24;
  c22 = sum;
  let diff = data.length - 1;
  BOUNTIES_MODAL_FOOTER_HEIGHT = diff;
  closure_24 = tmp27;
  let result = diff * sum;
  c26 = result;
  const sum1 = result + height2;
  const items8 = [sum1, result, height2];
  const memo3 = noop.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height2 }), items8);
  const obj6 = initialBountyId(15287);
  const handleRecapMomentumEnd = initialBountyId(15288).useBountiesRecapScroll({ listRef: ref, enabled: tmp27, offsets: memo3 }).handleRecapMomentumEnd;
  const items9 = [data, sum1, stateFromStores > 0, sum];
  const memo4 = noop.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    if (closure_24) {
      mapped.push(sum1);
    }
    return mapped;
  }, items9);
  const tmp32 = height(noop.useState(false), 2);
  const first1 = tmp32[0];
  ItemSeparatorComponent = tmp34;
  const tmp35 = height(noop.useState(false), 2);
  const first2 = tmp35[0];
  closure_32 = tmp37;
  const obj7 = initialBountyId(15288);
  [tmp39, tmp40] = height(noop.useState(true), 2);
  c33 = tmp40;
  const tmp38 = height(noop.useState(true), 2);
  [tmp42, tmp43] = height(noop.useState(false), 2);
  c34 = tmp43;
  const tmp44 = height(noop.useState(0), 2);
  const first3 = tmp44[0];
  closure_36 = tmp44[1];
  const tmp41 = height(noop.useState(false), 2);
  sharedValue2 = initialBountyId(4529).useSharedValue(false);
  const obj8 = initialBountyId(4529);
  const sharedValue3 = initialBountyId(4529).useSharedValue(false);
  const obj9 = initialBountyId(4529);
  const sharedValue4 = initialBountyId(4529).useSharedValue(0);
  const memo5 = noop.useMemo(() => initialBountyId(closure_2[29]).v4(), []);
  noop.useRef(0);
  noop.useRef(0);
  const effect1 = noop.useEffect(() => {
    closure_41.current = Date.now();
  }, []);
  const items10 = [memo5];
  const callback3 = noop.useCallback((current) => {
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = AnalyticsTypes.BountyScrollingType.MANUAL;
    }
    current = ref4.current;
    if (current !== current) {
      tmp3.current = current;
      const _Date = Date;
      const timestamp = Date.now();
      ref3.current = timestamp;
      const diff = timestamp - ref3.current;
      let result = { scrollingType: MANUAL, scrollingDirection: null, verticalScrollingPosition: null, scrollSessionId: null, timeWatchedPreScrollMs: null };
      if (current > current) {
        let UP = AnalyticsTypes.VerticalScrollingDirection.DOWN;
      } else {
        UP = AnalyticsTypes.VerticalScrollingDirection.UP;
      }
      result.scrollingDirection = UP;
      result.verticalScrollingPosition = current;
      result.scrollSessionId = memo5;
      result.timeWatchedPreScrollMs = diff;
      result = AnalyticsActions.trackBountyVerticalScroll(result);
    }
  }, items10);
  const items11 = [first3, dismissRecurringSwipeUpNux, callback2, callback3, hasRecurringSwipeUpNux];
  const callback4 = noop.useCallback((arg0) => {
    if (tmp) {
      dismissRecurringSwipeUpNux(ContentDismissActionType.USER_DISMISS);
    }
    closure_36(arg0);
    callback2();
    callback3(arg0);
  }, items11);
  const obj10 = initialBountyId(4529);
  const orbAmount = initialBountyId(15289).useBountiesRecapOrbCount({ scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height2, targetOrbAmount: stateFromStores, enabled: tmp27 });
  const items12 = [data, first3];
  const effect2 = noop.useEffect(() => {
    if (null != first[first3]) {
      const items = [tmp.id];
      QuestActionCreators.markAdContentSeen(AdCreativeType.AdCreativeType.BOUNTY, items);
    }
  }, items12);
  const items13 = [data, first3, sourceQuestContent];
  const items14 = [sourceQuestContent];
  const callback5 = noop.useCallback(() => {
    if (null != first[first3]) {
      const bountyVideoProgress = BountyStore.getBountyVideoProgress(tmp.id);
      let num;
      if (bountyVideoProgress != null) {
        num = bountyVideoProgress.maxTimestampSec;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (bountyVideoProgress != null) {
        num2 = bountyVideoProgress.duration;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const result = 1000 * tmp.rewardTimerSeconds;
      const obj2 = { adContentId: tmp.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      const obj3 = { content_name: null, content_id: null, video_progress: null, threshold_met: null, reward_timer_seconds: null };
      const obj = AnalyticsActions;
      obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
      obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_MOBILE;
      obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(num, num2);
      obj3.threshold_met = 1000 * num >= result;
      obj3.reward_timer_seconds = result / 1000;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj2);
    }
    BountiesModalActionCreatorsDefault.hideModal();
  }, items13);
  const onClose = noop.useCallback(() => {
    const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: constants.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
    const obj3 = { content_name: null, content_id: null };
    const obj = AnalyticsActions;
    obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL);
    obj3.content_id = QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL;
    obj2.properties = obj3;
    obj2.sourceQuestContent = sourceQuestContent;
    obj.trackAdContentEvent(obj2);
    BountiesModalActionCreatorsDefault.hideModal();
  }, items14);
  const obj11 = initialBountyId(15289);
  const obj13 = { onScroll: null, onBeginDrag: null, onEndDrag: null, onMomentumEnd: null };
  class Tt {
    constructor(arg0) {
      result = closure_39.set(initialBountyId.contentOffset.y);
      if (closure_38.get()) {
        tmp4 = isScrollEventInBounds;
        if (typeof isScrollEventInBounds === "function") {
          tmp5 = globalThis;
          _Math = Math;
          num = 0;
          tmp7 = initialBountyId.contentOffset.y >= 0 && initialBountyId.contentOffset.y <= tmp6;
          tmp3Result = tmp3(tmp7);
        } else {
          str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      return;
    }
  }
  Tt.__closure = { scrollY: sharedValue4, isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: first2 };
  Tt.__workletHash = 16550062427029;
  Tt.__initData = __initData3;
  obj13.onScroll = Tt;
  class At {
    constructor(arg0) {
      result = closure_38.set(true);
      if (typeof isScrollEventInBounds === "function") {
        tmp4 = initialBountyId;
        tmp5 = globalThis;
        _Math = Math;
        num = 0;
        tmp7 = initialBountyId.contentOffset.y >= 0 && initialBountyId.contentOffset.y <= tmp6;
        tmp3Result = tmp3(tmp7);
        return;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  At.__closure = { isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: first2 };
  At.__workletHash = 4736731816545;
  At.__initData = __initData4;
  obj13.onBeginDrag = At;
  class Rt {
    constructor() {
      result = closure_38.set(false);
      if (!closure_17) {
        tmp2 = closure_37;
        result1 = closure_37.set(false);
      }
      return;
    }
  }
  Rt.__closure = { isDraggingSharedValue: sharedValue3, IS_ANDROID: callback1, isScrollingInBoundsSharedValue: sharedValue2 };
  Rt.__workletHash = 1138792855760;
  Rt.__initData = __initData5;
  obj13.onEndDrag = Rt;
  function ft(arg0) {
    if (closure_24) {
      ReanimatedRexport.runOnJS(handleRecapMomentumEnd)(arg0);
    }
    const result = sharedValue2.set(false);
  }
  const obj12 = initialBountyId(4529);
  const obj14 = { scrollY: sharedValue4, isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: first2 };
  const obj15 = { isDraggingSharedValue: sharedValue3, IS_ANDROID: callback1, isScrollingInBoundsSharedValue: sharedValue2 };
  ft.__closure = { showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4529).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 };
  ft.__workletHash = 12889620623212;
  ft.__initData = __initData6;
  obj13.onMomentumEnd = ft;
  const obj16 = { showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4529).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 };
  const animatedScrollHandler = obj12.useAnimatedScrollHandler(obj13);
  function yt() {
    return Math.min(Math.max(Math.round(sharedValue4.get() / c22), 0), c23);
  }
  yt.__closure = { scrollY: sharedValue4, slotHeight: sum, lastBountyIndex: diff };
  yt.__workletHash = 2321200091780;
  yt.__initData = __initData7;
  class Dt {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp3 = closure_44;
        tmp4 = obj.runOnJS(closure_44)(initialBountyId);
      }
      return;
    }
  }
  const obj17 = initialBountyId(4529);
  Dt.__closure = { runOnJS: initialBountyId(4529).runOnJS, commitSwipe: callback4 };
  Dt.__workletHash = 13969036336836;
  Dt.__initData = __initData8;
  const animatedReaction = obj17.useAnimatedReaction(yt, Dt);
  const obj18 = { runOnJS: initialBountyId(4529).runOnJS, commitSwipe: callback4 };
  class It {
    constructor() {
      tmp = closure_24;
      if (closure_24) {
        tmp2 = closure_39;
        tmp4 = closure_26;
        tmp5 = closure_0;
        tmp6 = closure_2;
        value = closure_39.get();
        tmp = value >= closure_26 - closure_0(closure_2[28]).RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const obj19 = initialBountyId(4529);
  It.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(15288).RECAP_SNAP_EPSILON };
  It.__workletHash = 9483642326616;
  It.__initData = __initData9;
  class Ct {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp3 = closure_34;
        tmp4 = obj.runOnJS(closure_34)(initialBountyId);
      }
      return;
    }
  }
  const obj20 = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(15288).RECAP_SNAP_EPSILON };
  Ct.__closure = { runOnJS: initialBountyId(4529).runOnJS, setShowRecapFooter: tmp43 };
  Ct.__workletHash = 16849792087458;
  Ct.__initData = __initData10;
  const animatedReaction1 = obj19.useAnimatedReaction(It, Ct);
  const obj21 = { runOnJS: initialBountyId(4529).runOnJS, setShowRecapFooter: tmp43 };
  function mt() {
    let tmp = closure_24;
    if (closure_24) {
      tmp = sharedValue4.get() > c26;
    }
    return tmp;
  }
  mt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result };
  mt.__workletHash = 8683329587970;
  mt.__initData = __initData11;
  class Bt {
    constructor(arg0, arg1) {
      if (initialBountyId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp3 = closure_30;
        tmp4 = obj.runOnJS(closure_30)(initialBountyId);
      }
      return;
    }
  }
  const obj22 = initialBountyId(4529);
  Bt.__closure = { runOnJS: initialBountyId(4529).runOnJS, setIsRecapPageRevealed: tmp32[1] };
  Bt.__workletHash = 6558318546127;
  Bt.__initData = __initData12;
  const animatedReaction2 = obj22.useAnimatedReaction(mt, Bt);
  const obj23 = { runOnJS: initialBountyId(4529).runOnJS, setIsRecapPageRevealed: tmp32[1] };
  function wt() {
    let tmp = closure_24;
    if (closure_24) {
      value = sharedValue4.get();
      tmp = value >= sum1 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
    }
    return tmp;
  }
  const obj24 = initialBountyId(4529);
  wt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(15288).RECAP_SNAP_EPSILON };
  wt.__workletHash = 14769605032316;
  wt.__initData = __initData13;
  function xt(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_32)(arg0);
    }
  }
  const obj25 = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(15288).RECAP_SNAP_EPSILON };
  xt.__closure = { runOnJS: initialBountyId(4529).runOnJS, setIsRecapPageOnTop: tmp35[1] };
  xt.__workletHash = 2311489082799;
  xt.__initData = __initData14;
  const animatedReaction3 = obj24.useAnimatedReaction(wt, xt);
  const items15 = [height2, stateFromStores > 0];
  const memo6 = noop.useMemo(() => {
    let tmp = null;
    if (closure_24) {
      const obj = { height: height2 };
      tmp = closure_2_15(closure_32, obj);
    }
    return tmp;
  }, items15);
  const obj26 = { runOnJS: initialBountyId(4529).runOnJS, setIsRecapPageOnTop: tmp35[1] };
  class Vt {
    constructor() {
      value = closure_10.get();
      num = 0;
      if (closure_11.get() <= 0) {
        num2 = 1;
        num = 0;
        if (value >= 1) {
          num = c23;
        }
      }
      obj = { height: closure_5.top + closure_5.height * value + num };
      return obj;
    }
  }
  Vt.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1, BOUNTIES_MODAL_FOOTER_HEIGHT, videoLayout: tmp9 };
  Vt.__workletHash = 1951449511294;
  Vt.__initData = __initData15;
  animatedStyle = initialBountyId(4529).useAnimatedStyle(Vt);
  const items16 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr18[2], width: arr18[3] } = tmp9);
  const memo7 = noop.useMemo(() => {
    const items = [closure_2.listWrapper, , ];
    const rect = { top: 0, left: styles.left, width: styles.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items16);
  const tmp63 = height(noop.useState(false), 2);
  first4 = tmp63[0];
  closure_49 = tmp65;
  const obj27 = initialBountyId(4529);
  const obj28 = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1, BOUNTIES_MODAL_FOOTER_HEIGHT, videoLayout: tmp9 };
  function kt() {
    value = sharedValue.get();
    let tmp2 = sharedValue1.get() > 0;
    if (!tmp2) {
      tmp2 = value < 1;
    }
    return tmp2;
  }
  kt.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1 };
  kt.__workletHash = 3068435771559;
  kt.__initData = __initData16;
  function bt(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_49)(arg0);
    }
  }
  const obj29 = initialBountyId(4529);
  bt.__closure = { runOnJS: initialBountyId(4529).runOnJS, setHideListFooterPadding: tmp63[1] };
  bt.__workletHash = 4435232161253;
  bt.__initData = __initData17;
  const animatedReaction4 = obj29.useAnimatedReaction(kt, bt);
  const items17 = [first4, tmp9.top];
  const items18 = [, ];
  ({ width: arr20[0], height: arr20[1] } = tmp9);
  const memo8 = noop.useMemo(() => {
    const obj = { paddingTop: styles.top, paddingBottom: null };
    let num = 0;
    if (!first4) {
      num = c23;
    }
    obj.paddingBottom = num;
    return obj;
  }, items17);
  memo9 = noop.useMemo(() => {
    const size = { width: styles.width, height: styles.height };
    return size;
  }, items18);
  const items19 = [tmp.closeButton, , , ];
  ({ top: arr21[1], left: arr21[2], width: arr21[3] } = tmp9);
  const items20 = [first2, tmp.recapPage, , , , ];
  ({ top: arr22[2], left: arr22[3], width: arr22[4] } = tmp9);
  items20[5] = height;
  const memo10 = noop.useMemo(() => {
    const items = [closure_2.closeButton, ];
    const rect = { top: styles.top + nativeDefault.space.PX_8, left: null };
    const sum = styles.left + styles.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items19);
  const memo11 = noop.useMemo(() => {
    const items = [closure_2.recapPage, ];
    const size = { top: styles.top, left: styles.left, width: styles.width, height: height - styles.top };
    let tmp = null;
    if (first2) {
      const obj = { zIndex };
      tmp = obj;
    }
    const merged = Object.assign(tmp);
    items[1] = size;
    return items;
  }, items20);
  const obj30 = { runOnJS: initialBountyId(4529).runOnJS, setHideListFooterPadding: tmp63[1] };
  class Zt {
    constructor() {
      obj = closure_0(closure_2[28]);
      return obj.getRevealProgress(closure_39.get(), closure_26, height);
    }
  }
  const obj31 = initialBountyId(4529);
  Zt.__closure = { getRevealProgress: initialBountyId(15288).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height2 };
  Zt.__workletHash = 11341453871635;
  Zt.__initData = __initData18;
  derivedValue = obj31.useDerivedValue(Zt);
  const obj32 = { getRevealProgress: initialBountyId(15288).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height2 };
  function zt() {
    const obj = { opacity: null };
    value = derivedValue.get();
    obj.opacity = ReanimatedRexport.interpolate(value, [0, 1], [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  }
  const obj33 = initialBountyId(4529);
  zt.__closure = { interpolate: initialBountyId(4529).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4529).Extrapolation };
  zt.__workletHash = 120061230536;
  zt.__initData = __initData19;
  const animatedStyle1 = obj33.useAnimatedStyle(zt);
  const obj34 = { interpolate: initialBountyId(4529).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4529).Extrapolation };
  class Wt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[14]);
      value = closure_51.get();
      items = [, ];
      items[0] = c28;
      items[1] = c29;
      obj.opacity = obj2.interpolate(value, items, [1, 0], closure_0(closure_2[14]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const obj35 = initialBountyId(4529);
  Wt.__closure = { interpolate: initialBountyId(4529).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(4529).Extrapolation };
  Wt.__workletHash = 2307930075336;
  Wt.__initData = __initData20;
  const animatedStyle2 = obj35.useAnimatedStyle(Wt);
  const obj36 = { interpolate: initialBountyId(4529).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(4529).Extrapolation };
  const tmp73 = first1;
  class Kt {
    constructor() {
      obj = closure_39;
      if (closure_39.get() >= closure_26 - closure_22 / 2) {
        tmp5 = closure_51;
        value = closure_51.get();
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[28]);
        tmp3 = height;
        num = 0;
        value = obj2.getRevealProgress(obj.get(), 0, height);
      }
      obj1 = { opacity: null };
      obj4 = closure_0(closure_2[14]);
      items = [, ];
      items[0] = c28;
      items[1] = c29;
      obj1.opacity = obj4.interpolate(value, items, [1, 0], closure_0(closure_2[14]).Extrapolation.CLAMP);
      return obj1;
    }
  }
  const obj37 = initialBountyId(4529);
  Kt.__closure = { scrollY: sharedValue4, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(15288).getRevealProgress, recapRevealHeight: height2, interpolate: initialBountyId(4529).interpolate, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(4529).Extrapolation };
  Kt.__workletHash = 10371859077651;
  Kt.__initData = __initData21;
  const items21 = [tmp.peekGradient, , , , ];
  ({ left: arr23[1], width: arr23[2], top: arr23[3], height: arr23[4] } = tmp9);
  const animatedStyle3 = obj37.useAnimatedStyle(Kt);
  let tmp77 = tmp23;
  const memo12 = noop.useMemo(() => {
    const items = [closure_2.peekGradient, ];
    const rect = { left: styles.left, width: styles.width, top: styles.top + styles.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items21);
  if (data.length > 1) {
    tmp77 = hasRecurringSwipeUpNux;
  }
  if (tmp77) {
    tmp77 = !tmp16;
  }
  isPeekEnabled = tmp77;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp23;
  }
  const obj38 = { scrollY: sharedValue4, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(15288).getRevealProgress, recapRevealHeight: height2, interpolate: initialBountyId(4529).interpolate, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(4529).Extrapolation };
  class Xt {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[14]);
      value = closure_39.get();
      items = [0];
      items[1] = closure_22;
      obj.opacity = obj2.interpolate(value, items, [1, 0], closure_0(closure_2[14]).Extrapolation.CLAMP);
      return obj;
    }
  }
  const tmp5Result = initialBountyId(4529);
  Xt.__closure = { interpolate: initialBountyId(4529).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: initialBountyId(4529).Extrapolation };
  Xt.__workletHash = 17578041414706;
  Xt.__initData = __initData22;
  const animatedStyle4 = tmp5Result.useAnimatedStyle(Xt);
  const obj39 = { interpolate: initialBountyId(4529).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: initialBountyId(4529).Extrapolation };
  function jt() {
    return derivedValue.get() < c29;
  }
  jt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp73 };
  jt.__workletHash = 2114608155849;
  jt.__initData = __initData23;
  function qt(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(c33)(arg0);
    }
  }
  const tmp5Result2 = initialBountyId(4529);
  qt.__closure = { runOnJS: initialBountyId(4529).runOnJS, setIsCloseButtonPressable: tmp40 };
  qt.__workletHash = 2587138880527;
  qt.__initData = __initData24;
  const animatedReaction5 = tmp5Result2.useAnimatedReaction(jt, qt);
  const items22 = [sum, sharedValue4, memo9, tmp77, hasRecurringSwipeUpNux, sharedValue, sourceQuestContent, , , , , , ];
  ({ width: arr24[7], height: arr24[8] } = tmp9);
  items22[9] = first3;
  items22[10] = first1;
  items22[11] = first2;
  items22[12] = sharedValue2;
  const items23 = [first3, first1, first2, , , , , ];
  ({ width: arr25[3], height: arr25[4] } = tmp9);
  items23[5] = tmp77;
  items23[6] = null != tmp15;
  items23[7] = sharedValue;
  const callback6 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { index, slotHeight, scrollY: sharedValue4, style: memo9, isPeekEnabled, children: null };
    const size = { bounty: item, sourceQuestContent, width: styles.width, height: styles.height, index, isScrollIndicatorEnabled: null, isActive: null, isRecapPageRevealed: null, isRecapPageOnTop: null, isScrollingInBoundsSharedValue: null, shouldLoadHls: null, videoEndPeekScale: null, softDownloadCapsEnabled: true };
    let tmp3 = hasRecurringSwipeUpNux;
    if (hasRecurringSwipeUpNux) {
      tmp3 = 0 === index;
    }
    size.isScrollIndicatorEnabled = tmp3;
    size.isActive = index === first3;
    size.isRecapPageRevealed = first1;
    size.isRecapPageOnTop = first2;
    size.isScrollingInBoundsSharedValue = sharedValue2;
    let tmp6 = tmp5;
    if (index !== first3) {
      tmp6 = index === tmp4 + 1;
    }
    size.shouldLoadHls = tmp6;
    let tmp7;
    if (index === first3) {
      tmp7 = sharedValue;
    }
    size.videoEndPeekScale = tmp7;
    obj.children = closure_2_15(BountiesScrollVideoItem.BountiesScrollVideoItem, size, item.id);
    return closure_2_15(closure_36, obj);
  }, items22);
  [][0] = height2;
  const memo13 = obj.useMemo(() => {
    const size = { activeIndex: first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, width: styles.width, height: styles.height, isPeekEnabled, isVideoEndAppStoreOverlayVisible, videoEndPeekScale: sharedValue };
    return size;
  }, items23);
  if (0 === data.length) {
    return null;
  } else {
    let tmp84 = null;
    if (tmp42) {
      const obj41 = { orbAmount: stateFromStores };
      tmp84 = isVideoEndAppStoreOverlayVisible(tmp5(15323).BountiesScrollRecapFooter, obj41);
    }
    const obj42 = { value: memo2, children: null };
    const obj43 = { style: tmp.root, children: null };
    let tmp85Result = null;
    if (tmp27) {
      const obj44 = { style: null, pointerEvents: null, children: null };
      const items24 = [memo11, animatedStyle1];
      obj44.style = items24;
      let str = "none";
      if (first2) {
        str = "box-none";
      }
      obj44.pointerEvents = str;
      const obj45 = {
        adContentId,
        adCreativeType: tmp5(5702).AdCreativeType.BOUNTY,
        questContent: tmp5(5700).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
              return closure_2_15(BountiesScrollRecapPage.BountiesScrollRecapPage, { orbAmount, onClose, style: { flex: 1 } });
            }
      };
      obj44.children = tmp85(tmp5(11942).QuestContentImpressionTrackerNative, obj45);
      tmp85Result = tmp85(tmp2(4529).View, obj44);
    }
    const items25 = [tmp85Result, , , , , ];
    const obj46 = { style: memo7, children: null };
    const obj47 = {
      ref,
      data,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback6,
      extraData: memo13,
      overrideItemLayout: tmp82,
      ItemSeparatorComponent,
      ListFooterComponent: memo6,
      snapToOffsets: memo4,
      snapToEnd: false,
      decelerationRate: 0.85,
      showsVerticalScrollIndicator: false,
      drawDistance: sum,
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      scrollEnabled: !tmp16,
      contentContainerStyle: memo8
    };
    obj46.children = isVideoEndAppStoreOverlayVisible(tmp5(9027).AnimatedFlashList, obj47);
    items25[1] = isVideoEndAppStoreOverlayVisible(tmp2(4529).View, obj46);
    let tmp85Result4 = null;
    if (null != tmp15) {
      const obj48 = { metadata: tmp15.metadata, sheetHeight: memo1, revealProgress: sharedValue1, onDismiss: callback2, onInstallPress: tmp15.onInstallPress };
      tmp85Result4 = tmp85(tmp2(15328), obj48);
    }
    items25[2] = tmp85Result4;
    let tmp85Result5 = null;
    if (tmp77) {
      tmp85Result5 = null;
      if (data.length > 1) {
        const obj49 = { pointerEvents: "none", style: null, children: null };
        const items26 = [memo12, animatedStyle4];
        obj49.style = items26;
        const obj50 = { colors: sum1, style: styles.absoluteFill };
        obj49.children = tmp85(tmp2(5230), obj50);
        tmp85Result5 = tmp85(tmp2(4529).View, obj49);
      }
    }
    items25[3] = tmp85Result5;
    const obj51 = { style: null, pointerEvents: null, children: null };
    const items27 = [memo10, animatedStyle2];
    obj51.style = items27;
    let str2 = "none";
    if (tmp39) {
      str2 = "box-none";
    }
    obj51.pointerEvents = str2;
    let tmp85Result6 = null;
    if (tmp39) {
      const obj52 = { onPress: callback5 };
      tmp85Result6 = tmp85(tmp2(15329), obj52);
    }
    obj51.children = tmp85Result6;
    items25[4] = isVideoEndAppStoreOverlayVisible(tmp2(4529).View, obj51);
    const obj53 = { visible: tmp42, onContentLayout: callback, zIndex: height2, opacityStyle: animatedStyle3, children: tmp84 };
    items25[5] = isVideoEndAppStoreOverlayVisible(tmp2(15284), obj53);
    obj43.children = items25;
    obj42.children = memo(questHomeBounties, obj43);
    return isVideoEndAppStoreOverlayVisible(tmp5(15293).BountyVideoEndAppStoreProvider, obj42);
  }
  const obj40 = { runOnJS: initialBountyId(4529).runOnJS, setIsCloseButtonPressable: tmp40 };
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ bountyId, sourceQuestContent } = arg0);
  if (cResult[0] === bountyId) {
    if (cResult[1] === sourceQuestContent) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = closure_1_15(ThemeContextProvider.ThemeContextProvider, { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_1_15(closure_82, { initialBountyId: bountyId, sourceQuestContent }) });
  cResult[0] = bountyId;
  cResult[1] = sourceQuestContent;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  ({ bountyId, sourceQuestContent } = arg0);
  return closure_1_15(ThemeContextProvider.ThemeContextProvider, { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_1_15(closure_82, { initialBountyId: bountyId, sourceQuestContent }) });
});
