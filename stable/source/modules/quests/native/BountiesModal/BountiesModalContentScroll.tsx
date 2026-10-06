// Module ID: 14530
// Function ID: 14531
// Name: BountiesModalContentScroll
// Dependencies: [32, 19, 17, 7119, 5757, 14531, 1086, 2048, 21, 1371, 588, 558, 576, 4837, 4570, 1485, 1619, 14532, 10670, 7116, 14527, 4838, 4841, 7135, 10684, 1122, 504, 14535, 14536, 1267, 7145, 14537, 9765, 5764, 5762, 10699, 14538, 14572, 10717, 14573, 8176, 14577, 5292, 14578, 14541, 4544, 14579, 2]

// Module 14530 (BountiesModalContentScroll)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1122 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1485 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import native from "native" /* 4544 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import timing from "timing" /* 4838 */;
import timingPresets from "timingPresets" /* 4841 */;
import QuestContent from "QuestContent" /* 5762 */;
import AdCreativeType from "AdCreativeType" /* 5764 */;
import QuestDataUtils from "QuestDataUtils" /* 7116 */;
import AnalyticsActions from "AnalyticsActions" /* 7135 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7145 */;
import QuestActionCreators from "QuestActionCreators" /* 9765 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 10684 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10699 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14527 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 14536 */;
import BountiesScrollVideoItem2 from "BountiesScrollVideoItem" /* 14538 */;
import BountiesScrollRecapPage from "BountiesScrollRecapPage" /* 14573 */;
import shared_ThemeTypes from "shared/ThemeTypes" /* 14579 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountyStore from "BountyStore" /* 7119 */;
import QuestConstants from "QuestConstants" /* 5757 */;
import BountiesModalConstants from "BountiesModalConstants" /* 14531 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1371 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4837 */;
import size_mod from "module_2" /* 2 */;

let absoluteFill, adContentId, dependencyMap, footerHeight, initialBountyId, set;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ BOUNTY_ORB_AMOUNT: metroImportAll, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: c9 } = QuestConstants);
({ getBountyVideoEndAppStoreSheetHeight: c10, getBountyVideoEndPeekTargetScale: unpackModuleId } = BountiesModalConstants);
({ AnalyticEvents: closure_12, ComponentActions: map1 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? ((trailingItem) => {
  let obj3;
  const obj = react2;
  const cResult = obj.c(1);
  let tmp2 = null;
  if (null != trailingItem.trailingItem) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { style: obj3 };
      obj3 = { height: PX_8 };
      const tmp8 = closure_15(metroRequire, obj2);
      cResult[0] = tmp8;
      first = tmp8;
    } else {
      first = cResult[0];
    }
    tmp2 = first;
  }
  return tmp2;
}) : ((trailingItem) => {
  let obj2;
  let tmp = null;
  if (null != trailingItem.trailingItem) {
    const obj = { style: obj2 };
    obj2 = { height: PX_8 };
    tmp = closure_15(metroRequire, obj);
  }
  return tmp;
});
function isScrollEventInBounds(contentOffset) {
  return contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp;
}
isScrollEventInBounds.__closure = {};
isScrollEventInBounds.__workletHash = 14148486927190;
isScrollEventInBounds.__initData = { code: "function isScrollEventInBounds_BountiesModalContentScrollTsx1(event){const maxOffset=Math.max(0,event.contentSize.height-event.layoutMeasurement.height);return event.contentOffset.y>=0&&event.contentOffset.y<=maxOffset;}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  let obj3;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  height = height.height;
  if (cResult[0] !== height) {
    const obj2 = { style: obj3 };
    obj3 = { height };
    const tmp5 = closure_15(metroRequire, obj2);
    cResult[0] = height;
    cResult[1] = tmp5;
    tmp2 = tmp5;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((height) => {
  const obj = { style: { height: height.height } };
  return closure_15(metroRequire, obj);
});
let closure_33 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1 }, recapPage: obj2, listWrapper: obj3, closeButton: obj4, peekGradient: obj5 };
  return obj;
});
const __initData = { code: "function BountiesModalContentScrollTsx2(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
const __initData2 = { code: "function BountiesModalContentScrollTsx3(){const{scrollY,index,slotHeight,isPeekEnabled,PEEK_OPACITY,interpolate,FADE_DEADBAND,Extrapolation}=this.__closure;const signedDistance=(scrollY.get()-index*slotHeight)/slotHeight;const distance=Math.abs(signedDistance);const peekOpacity=isPeekEnabled&&signedDistance<0&&index===1?PEEK_OPACITY:0;const opacity=interpolate(distance,[0,FADE_DEADBAND,1],[1,1,peekOpacity],Extrapolation.CLAMP);return{opacity:opacity};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  let isPeekEnabled;
  let scrollY;
  let style;
  let tmp = scrollY;
  let obj = index(scrollY[12]);
  const cResult = obj.c(6);
  index = index.index;
  const slotHeight = index.slotHeight;
  scrollY = index.scrollY;
  ({ style, isPeekEnabled } = index);
  const children = index.children;
  let obj2 = index(scrollY[14]);
  const fn = function o() {
    let items;
    let items1;
    let obj2;
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    const tmp = index;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === tmp) {
          num = c26;
        }
      }
    }
    const obj = { opacity: obj2.interpolate(absolute, items, items1, ReanimatedRexport.Extrapolation.CLAMP) };
    items = [0, c25, 1];
    items1 = [1, 1, num];
    obj2 = ReanimatedRexport;
    return obj;
  };
  fn.__closure = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY, interpolate: index(scrollY[14]).interpolate, FADE_DEADBAND, Extrapolation: index(scrollY[14]).Extrapolation };
  fn.__workletHash = 6532652233494;
  fn.__initData = __initData;
  ({ scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY, interpolate: index(scrollY[14]).interpolate, FADE_DEADBAND, Extrapolation: index(scrollY[14]).Extrapolation });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp4;
    if (cResult[1] === style) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp5;
      if (cResult[4] === tmp4) {
        tmp5 = cResult[5];
      }
      return tmp5;
    }
    const obj4 = { style: tmp4, children };
    const tmp8 = closure_15(slotHeight(tmp[14]).View, obj4);
    let num = 3;
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
  let children;
  let items;
  let style;
  index = index.index;
  const slotHeight = index.slotHeight;
  const scrollY = index.scrollY;
  const isPeekEnabled = index.isPeekEnabled;
  ({ style, children } = index);
  let obj = index(scrollY[14]);
  const fn = function c() {
    let items;
    let items1;
    let obj2;
    const result = (scrollY.get() - index * slotHeight) / slotHeight;
    const absolute = Math.abs(result);
    let num = 0;
    const tmp = index;
    if (isPeekEnabled) {
      num = 0;
      if (result < 0) {
        num = 0;
        if (1 === tmp) {
          num = c26;
        }
      }
    }
    const obj = { opacity: obj2.interpolate(absolute, items, items1, ReanimatedRexport.Extrapolation.CLAMP) };
    items = [0, c25, 1];
    items1 = [1, 1, num];
    obj2 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { scrollY, index, slotHeight, isPeekEnabled, PEEK_OPACITY, interpolate: index(scrollY[14]).interpolate, FADE_DEADBAND, Extrapolation: index(scrollY[14]).Extrapolation };
  fn.__closure = obj2;
  fn.__workletHash = 9072488166423;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children };
  items = [style, animatedStyle];
  return closure_15(slotHeight(scrollY[14]).View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((footerHeight) => {
  let height;
  let width;
  const obj = react2;
  const cResult = obj.c(5);
  footerHeight = footerHeight.footerHeight;
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right;
  const diff1 = height - rect.top - footerHeight;
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
        let tmp10;
        if (cResult[3] === top) {
          tmp10 = cResult[4];
        }
        return tmp10;
      }
    }
  }
  size = { top, left: rounded, width: rounded1, height: rounded2 };
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
  size = width(height[15])();
  width = size.width;
  height = size.height;
  const tmp = width(height[16])();
  let closure_3 = tmp;
  const items = [width, height, , , , ];
  ({ top: arr[2], left: arr[3], right: arr[4] } = tmp);
  items[5] = footerHeight;
  return react.useMemo(() => {
    const rect = closure_3;
    const diff = width - closure_3.left - closure_3.right;
    const diff1 = height - closure_3.top - footerHeight;
    let result = diff / c22;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c22;
      result = diff1;
    }
    size = { top: rect.top, left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result) };
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_82 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialBountyId) => {
  let closure_9;
  let isPeekEnabled;
  let isRecapPageOnTop;
  let isRecapPageRevealed;
  let isScrollingInBoundsSharedValue;
  let onClose;
  let orbAmount;
  let questHomeBounties;
  let ref3;
  let ref4;
  let scrollSessionId;
  let slotHeight;
  let style;
  let styles;
  let tmp10;
  let tmp20;
  let tmp29;
  let tmp8;
  let tmp = initialBountyId;
  let tmp2 = dependencyMap;
  let obj = initialBountyId(576);
  const cResult = obj.c(192);
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  const tmp4 = scrollY();
  const height = sourceQuestContent(1485)().height;
  let obj2 = questHomeBounties;
  let ref = questHomeBounties.useRef(null);
  let tmp6 = _slicedToArray;
  let tmp7 = _slicedToArray(questHomeBounties.useState(initialBountyId(14532).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp8, dependencyMap] = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(nativeEvent) {
      dependencyMap(Math.ceil(nativeEvent.nativeEvent.layout.height));
    };
    let num = 0;
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp8) {
    let obj3 = { footerHeight: tmp8 };
    let num2 = 1;
    cResult[1] = tmp8;
    cResult[2] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  const tmp11 = closure_37(tmp10);
  _slicedToArray = tmp11;
  const tmpResult = tmp(10670);
  questHomeBounties = tmpResult.useQuestHomeBounties().questHomeBounties;
  if (cResult[3] === initialBountyId) {
    let tmp12;
    if (cResult[4] === questHomeBounties) {
      tmp12 = cResult[5];
    }
    const first1 = tmp6(obj2.useState(tmp12), 1)[0];
    let closure_6 = tmp13;
    if (cResult[6] === initialBountyId) {
      if (cResult[7] === 0 === first1.length) {
        let tmp14;
        let tmp15;
        if (cResult[8] === sourceQuestContent) {
          tmp14 = cResult[9];
          tmp15 = cResult[10];
        }
        const effect = obj2.useEffect(tmp14, tmp15);
        const tmpResult3 = tmp(4570);
        const sharedValue = tmpResult3.useSharedValue(1);
        const tmpResult4 = tmp(4570);
        const sharedValue1 = tmpResult4.useSharedValue(0);
        class Oe {
          constructor() {
            let obj2;
            const tmp = closure_6;
            if (tmp) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const captureQuestsException = QuestDataUtils.captureQuestsException;
              QuestDataUtils;
              const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
              const obj = { tags: { source: "BountiesModalContentScroll" }, extra: obj2 };
              obj2 = { bountyId: initialBountyId, sourceQuestContent };
              const result = captureQuestsException(error, obj);
              const obj3 = BountiesModalActionCreatorsDefault;
              obj3.hideModal();
            }
          }
        }
        [tmp20, closure_9] = tmp19;
        ref = obj2.useRef(null);
        const ref2 = obj2.useRef(0);
        if (cResult[11] === tmp11.height) {
          if (cResult[12] === tmp11.top) {
            let tmp22;
            if (cResult[13] === height) {
              tmp22 = cResult[14];
            }
            if (cResult[15] !== height) {
              cResult[15] = height;
              const tmp27 = ref(height);
              class Ve {
                constructor() {
                  const current = ref.current;
                  if (null != current) {
                    ref.current = null;
                    const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const _Date = Date;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
                    const obj = AppStoreOverlayTelemetryManager;
                    const result = obj.clearAppStoreOverlayOpen();
                    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                    ComponentDispatch.dispatch(map1.QUEST_APP_STORE_OVERLAY_FINISHED);
                    adContentId(null);
                    set = sharedValue.set;
                    const obj2 = timing;
                    const result1 = set(obj2.withTiming(1, timingPresets.timingStandard));
                    const result2 = sharedValue1.set(0);
                  }
                }
              }
              cResult[16] = tmp27;
            }
            if (cResult[17] !== sharedValue1) {
              class Ne {
                constructor(current) {
                  ref2.current = Date.now();
                  ref.current = current;
                  adContentId(current);
                  set = sharedValue1.set;
                  const obj = timing;
                  const result = set(obj.withTiming(1, timingPresets.timingSlow));
                  const appId = current.metadata.appId;
                  const trackOverlayEvent = current.trackOverlayEvent;
                  const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                  trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                }
              }
              cResult[17] = sharedValue1;
              class Ve {
                constructor() {
                  const current = ref.current;
                  if (null != current) {
                    ref.current = null;
                    const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const _Date = Date;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
                    const obj = AppStoreOverlayTelemetryManager;
                    const result = obj.clearAppStoreOverlayOpen();
                    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                    ComponentDispatch.dispatch(map1.QUEST_APP_STORE_OVERLAY_FINISHED);
                    adContentId(null);
                    set = sharedValue.set;
                    const obj2 = timing;
                    const result1 = set(obj2.withTiming(1, timingPresets.timingStandard));
                    const result2 = sharedValue1.set(0);
                  }
                }
              }
            } else {
              class Ne {
                constructor(current) {
                  ref2.current = Date.now();
                  ref.current = current;
                  adContentId(current);
                  set = sharedValue1.set;
                  const obj = timing;
                  const result = set(obj.withTiming(1, timingPresets.timingSlow));
                  const appId = current.metadata.appId;
                  const trackOverlayEvent = current.trackOverlayEvent;
                  const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                  trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                }
              }
            }
            if (cResult[19] === sharedValue1) {
              class Ne {
                constructor(current) {
                  ref2.current = Date.now();
                  ref.current = current;
                  adContentId(current);
                  set = sharedValue1.set;
                  const obj = timing;
                  const result = set(obj.withTiming(1, timingPresets.timingSlow));
                  const appId = current.metadata.appId;
                  const trackOverlayEvent = current.trackOverlayEvent;
                  const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                  trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                }
              }
              if (cResult[22] === tmp29) {
                class Ne {
                  constructor(current) {
                    ref2.current = Date.now();
                    ref.current = current;
                    adContentId(current);
                    set = sharedValue1.set;
                    const obj = timing;
                    const result = set(obj.withTiming(1, timingPresets.timingSlow));
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
                  }
                }
              }
              let obj4 = { videoEndPeekTargetScale: null, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible: null != tmp20, showVideoEndAppStoreOverlay: tmp28, dismissVideoEndAppStoreOverlay: null };
              class Ve {
                constructor() {
                  const current = ref.current;
                  if (null != current) {
                    ref.current = null;
                    const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
                    const appId = current.metadata.appId;
                    const trackOverlayEvent = current.trackOverlayEvent;
                    const _Date = Date;
                    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
                    const obj = AppStoreOverlayTelemetryManager;
                    const result = obj.clearAppStoreOverlayOpen();
                    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                    ComponentDispatch.dispatch(map1.QUEST_APP_STORE_OVERLAY_FINISHED);
                    adContentId(null);
                    set = sharedValue.set;
                    const obj2 = timing;
                    const result1 = set(obj2.withTiming(1, timingPresets.timingStandard));
                    const result2 = sharedValue1.set(0);
                  }
                }
              }
              class Oe {
                constructor() {
                  let obj2;
                  const tmp = closure_6;
                  if (tmp) {
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const captureQuestsException = QuestDataUtils.captureQuestsException;
                    QuestDataUtils;
                    const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
                    const obj = { tags: { source: "BountiesModalContentScroll" }, extra: obj2 };
                    obj2 = { bountyId: initialBountyId, sourceQuestContent };
                    const result = captureQuestsException(error, obj);
                    const obj3 = BountiesModalActionCreatorsDefault;
                    obj3.hideModal();
                  }
                }
              }
              cResult[22] = tmp29;
              cResult[23] = null != tmp20;
              cResult[24] = tmp28;
              cResult[25] = sharedValue;
              cResult[26] = tmp22;
              cResult[27] = obj4;
            }
            class Ve {
              constructor() {
                const current = ref.current;
                if (null != current) {
                  ref.current = null;
                  const QUEST_APP_STORE_OVERLAY_CLOSED = constants.QUEST_APP_STORE_OVERLAY_CLOSED;
                  const appId = current.metadata.appId;
                  const trackOverlayEvent = current.trackOverlayEvent;
                  const _Date = Date;
                  trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
                  const obj = AppStoreOverlayTelemetryManager;
                  const result = obj.clearAppStoreOverlayOpen();
                  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                  ComponentDispatch.dispatch(map1.QUEST_APP_STORE_OVERLAY_FINISHED);
                  adContentId(null);
                  set = sharedValue.set;
                  const obj2 = timing;
                  const result1 = set(obj2.withTiming(1, timingPresets.timingStandard));
                  const result2 = sharedValue1.set(0);
                }
              }
            }
            cResult[19] = sharedValue1;
            class Oe {
              constructor() {
                let obj2;
                const tmp = closure_6;
                if (tmp) {
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  const captureQuestsException = QuestDataUtils.captureQuestsException;
                  QuestDataUtils;
                  const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
                  const obj = { tags: { source: "BountiesModalContentScroll" }, extra: obj2 };
                  obj2 = { bountyId: initialBountyId, sourceQuestContent };
                  const result = captureQuestsException(error, obj);
                  const obj3 = BountiesModalActionCreatorsDefault;
                  obj3.hideModal();
                }
              }
            }
            cResult[21] = Ve;
            tmp29 = Ve;
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
      }
    }
    class Oe {
      constructor() {
        let obj2;
        const tmp = closure_6;
        if (tmp) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const captureQuestsException = QuestDataUtils.captureQuestsException;
          QuestDataUtils;
          const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
          const obj = { tags: { source: "BountiesModalContentScroll" }, extra: obj2 };
          obj2 = { bountyId: initialBountyId, sourceQuestContent };
          const result = captureQuestsException(error, obj);
          const obj3 = BountiesModalActionCreatorsDefault;
          obj3.hideModal();
        }
      }
    }
    let items = [tmp13, initialBountyId, sourceQuestContent];
    cResult[6] = initialBountyId;
    cResult[7] = 0 === first1.length;
    cResult[8] = sourceQuestContent;
    cResult[9] = Oe;
    cResult[10] = items;
    tmp15 = items;
    tmp14 = Oe;
  }
  function pe() {
    let items;
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
    if (findIndexResult < 0) {
      items = [];
    } else {
      items = arr;
      if (0 !== findIndexResult) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, questHomeBounties.slice(findIndexResult), 0);
        HermesBuiltin.arraySpread(items1, questHomeBounties.slice(0, findIndexResult), arraySpreadResult);
        items = items1;
      }
    }
    return items;
  }
  cResult[3] = initialBountyId;
  cResult[4] = questHomeBounties;
  cResult[5] = pe;
  tmp12 = pe;
}) : ((initialBountyId) => {
  let QuestContentImpressionTrackerNative;
  let _undefined;
  let _undefined2;
  let c12;
  let c23;
  let c4;
  let closure_2;
  let closure_30;
  let ft;
  let items24;
  let items25;
  let items26;
  let items27;
  let lastBounty;
  let obj41;
  let obj43;
  let obj45;
  let obj49;
  let slotHeight;
  let str;
  let str2;
  let styles;
  let tmp15;
  let tmp39;
  let tmp40;
  let tmp42;
  let tmp43;
  let tmp7;
  let tmp87Result6;
  let tmp88;
  let tmp89;
  initialBountyId = initialBountyId.initialBountyId;
  const sourceQuestContent = initialBountyId.sourceQuestContent;
  react = undefined;
  c12 = undefined;
  let closure_24;
  let c33;
  let sharedValue2;
  let animatedStyle;
  let first4;
  closure_49 = undefined;
  let memo9;
  let derivedValue;
  let isPeekEnabled;
  let tmp = c33();
  dependencyMap = tmp;
  let tmp2 = sourceQuestContent;
  let tmp3 = dependencyMap;
  const height = sourceQuestContent(1485)().height;
  let obj = react;
  react.useRef(null);
  const tmp5 = initialBountyId;
  let tmp6 = height(react.useState(initialBountyId(14532).BOUNTIES_MODAL_BASE_FOOTER_HEIGHT), 2);
  [tmp7, c4] = tmp6;
  const callback = react.useCallback((nativeEvent) => {
    _undefined(Math.ceil(nativeEvent.nativeEvent.layout.height));
  }, []);
  const tmp9 = sharedValue2({ footerHeight: tmp7 });
  absoluteFill = tmp9;
  let obj2 = initialBountyId(10670);
  const questHomeBounties = obj2.useQuestHomeBounties().questHomeBounties;
  const data = height(react.useState(() => {
    let items;
    const findIndexResult = questHomeBounties.findIndex((id) => id.id === initialBountyId);
    if (findIndexResult < 0) {
      items = [];
    } else {
      items = arr;
      if (0 !== findIndexResult) {
        const items1 = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, questHomeBounties.slice(findIndexResult), 0);
        HermesBuiltin.arraySpread(items1, questHomeBounties.slice(0, findIndexResult), arraySpreadResult);
        items = items1;
      }
    }
    return items;
  }), 1)[0];
  let closure_8 = tmp10;
  let items = [tmp10, initialBountyId, sourceQuestContent];
  const effect = react.useEffect(function() {
    let obj2;
    const tmp = closure_8;
    if (tmp) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const captureQuestsException = QuestDataUtils.captureQuestsException;
      QuestDataUtils;
      const error = new Error("Bounty unexpectedly missing when opening the Bounties modal");
      const obj = { tags: { source: "BountiesModalContentScroll" }, extra: obj2 };
      obj2 = { bountyId: initialBountyId, sourceQuestContent };
      const result = captureQuestsException(error, obj);
      const obj3 = BountiesModalActionCreatorsDefault;
      obj3.hideModal();
    }
  }, items);
  adContentId = closure_8;
  let obj3 = initialBountyId(4570);
  const sharedValue = obj3.useSharedValue(1);
  let obj4 = initialBountyId(4570);
  const sharedValue1 = obj4.useSharedValue(0);
  [tmp15, c12] = height(react.useState(null), 2);
  const tmp14 = height(react.useState(null), 2);
  const ref = react.useRef(null);
  const ref2 = react.useRef(0);
  const isVideoEndAppStoreOverlayVisible = tmp16;
  let items1 = [height, , ];
  ({ top: arr3[1], height: arr3[2] } = tmp9);
  const memo = react.useMemo(() => {
    const obj = { windowHeight: height, videoTop: styles.top, videoHeight: styles.height };
    return unpackModuleId(obj);
  }, items1);
  const items2 = [height];
  const items3 = [sharedValue1];
  const memo1 = react.useMemo(() => authStore(height), items2);
  const callback1 = react.useCallback((current) => {
    ref2.current = Date.now();
    ref.current = current;
    _undefined2(current);
    set = sharedValue1.set;
    const obj = timing;
    const result = set(obj.withTiming(1, timingPresets.timingSlow));
    const appId = current.metadata.appId;
    const trackOverlayEvent = current.trackOverlayEvent;
    const QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED = _undefined2.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED;
    trackOverlayEvent(QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM);
  }, items3);
  const items4 = [sharedValue1, sharedValue];
  const callback2 = react.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      ref.current = null;
      const QUEST_APP_STORE_OVERLAY_CLOSED = _undefined2.QUEST_APP_STORE_OVERLAY_CLOSED;
      const appId = current.metadata.appId;
      const trackOverlayEvent = current.trackOverlayEvent;
      const _Date = Date;
      trackOverlayEvent(QUEST_APP_STORE_OVERLAY_CLOSED, appId, AnalyticsActions.AppStoreOverlayVariant.CUSTOM, Date.now() - ref2.current);
      const obj = AppStoreOverlayTelemetryManager;
      const result = obj.clearAppStoreOverlayOpen();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(map1.QUEST_APP_STORE_OVERLAY_FINISHED);
      _undefined2(null);
      set = sharedValue.set;
      const obj2 = timing;
      const result1 = set(obj2.withTiming(1, timingPresets.timingStandard));
      const result2 = sharedValue1.set(0);
    }
  }, items4);
  const items5 = [callback2, tmp16, callback1, sharedValue, memo];
  const memo2 = react.useMemo(() => ({ videoEndPeekTargetScale: memo, videoEndPeekScale: sharedValue, isVideoEndAppStoreOverlayVisible, showVideoEndAppStoreOverlay: callback1, dismissVideoEndAppStoreOverlay: callback2 }), items5);
  let obj5 = initialBountyId(504);
  const items6 = [data];
  const items7 = [data, closure_8];
  const stateFromStores = obj5.useStateFromStores(items6, () => BountyStore.getCompletedBountyCount(first) * adContentId, items7);
  const obj6 = initialBountyId(14535);
  const bountyRecurringSwipeUpNux = obj6.useBountyRecurringSwipeUpNux({ isEligible: tmp23 });
  let hasRecurringSwipeUpNux = bountyRecurringSwipeUpNux.hasRecurringSwipeUpNux;
  const dismissRecurringSwipeUpNux = bountyRecurringSwipeUpNux.dismissRecurringSwipeUpNux;
  const height2 = tmp9.height;
  let sum = height2 + closure_24;
  c22 = sum;
  let diff = data.length - 1;
  BOUNTIES_MODAL_FOOTER_HEIGHT = diff;
  closure_24 = tmp27;
  let result = diff * sum;
  let c26 = result;
  const sum1 = result + height2;
  const items8 = [sum1, result, height2];
  const memo3 = react.useMemo(() => ({ lastBounty, fullRecap: sum1, revealHeight: height2 }), items8);
  const obj7 = initialBountyId(14536);
  const handleRecapMomentumEnd = obj7.useBountiesRecapScroll({ listRef: ref, enabled: tmp27, offsets: memo3 }).handleRecapMomentumEnd;
  const items9 = [data, sum1, stateFromStores > 0, sum];
  const memo4 = react.useMemo(() => {
    const mapped = first.map((item, index) => index * slotHeight);
    const tmp = closure_24;
    if (tmp) {
      mapped.push(sum1);
    }
    return mapped;
  }, items9);
  const tmp32 = height(react.useState(false), 2);
  const first1 = tmp32[0];
  ItemSeparatorComponent = tmp34;
  const tmp35 = height(react.useState(false), 2);
  const first2 = tmp35[0];
  closure_32 = tmp37;
  [tmp39, tmp40] = height(react.useState(true), 2);
  c33 = tmp40;
  height(react.useState(true), 2);
  [tmp42, tmp43] = height(react.useState(false), 2);
  let c34 = tmp43;
  height(react.useState(false), 2);
  const tmp44 = height(react.useState(0), 2);
  const first3 = tmp44[0];
  closure_36 = tmp44[1];
  const obj8 = initialBountyId(4570);
  sharedValue2 = obj8.useSharedValue(false);
  const obj9 = initialBountyId(4570);
  const sharedValue3 = obj9.useSharedValue(false);
  const obj10 = initialBountyId(4570);
  const sharedValue4 = obj10.useSharedValue(0);
  const memo5 = react.useMemo(() => {
    const obj = initialBountyId(closure_2[29]);
    return obj.v4();
  }, []);
  const ref3 = react.useRef(0);
  const ref4 = react.useRef(0);
  const effect1 = react.useEffect(() => {
    ref3.current = Date.now();
  }, []);
  const items10 = [memo5];
  const callback3 = react.useCallback((current) => {
    let UP;
    let MANUAL = arg1;
    if (arg1 === undefined) {
      MANUAL = AnalyticsTypes.BountyScrollingType.MANUAL;
    }
    current = ref4.current;
    if (current !== current) {
      ref4.current = current;
      const _Date = Date;
      const timestamp = Date.now();
      ref3.current = timestamp;
      const diff = timestamp - ref3.current;
      const obj = { scrollingType: MANUAL, scrollingDirection: UP, verticalScrollingPosition: current, scrollSessionId: memo5, timeWatchedPreScrollMs: diff };
      const trackBountyVerticalScroll = AnalyticsActions.trackBountyVerticalScroll;
      AnalyticsActions;
      if (current > current) {
        UP = AnalyticsTypes.VerticalScrollingDirection.DOWN;
      } else {
        UP = AnalyticsTypes.VerticalScrollingDirection.UP;
      }
      const result = trackBountyVerticalScroll(obj);
    }
  }, items10);
  const items11 = [first3, dismissRecurringSwipeUpNux, callback2, callback3, hasRecurringSwipeUpNux];
  const callback4 = react.useCallback((arg0) => {
    const tmp = 0 === first3 && arg0 > 0 && hasRecurringSwipeUpNux;
    if (tmp) {
      dismissRecurringSwipeUpNux(ContentDismissActionType.USER_DISMISS);
    }
    closure_36(arg0);
    callback2();
    callback3(arg0);
  }, items11);
  const obj11 = initialBountyId(14537);
  const orbAmount = obj11.useBountiesRecapOrbCount({ scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height2, targetOrbAmount: stateFromStores, enabled: tmp27 });
  const items12 = [data, first3];
  const effect2 = react.useEffect(() => {
    if (null != first[first3]) {
      const items = [first[first3].id];
      const obj = QuestActionCreators;
      obj.markAdContentSeen(AdCreativeType.AdCreativeType.BOUNTY, items);
    }
  }, items12);
  const items13 = [data, first3, sourceQuestContent];
  const items14 = [sourceQuestContent];
  const callback5 = react.useCallback(() => {
    let obj2;
    let obj3;
    let obj4;
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
      const obj = { adContentId: first[first3].id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: _undefined2.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE), content_id: QuestContent.QuestContent.VIDEO_MODAL_MOBILE, video_progress: obj4.formatVideoProgressRatio(num, num2), threshold_met: 1000 * num >= result, reward_timer_seconds: result / 1000 };
      obj3 = AnalyticsTypes;
      obj4 = VideoQuestUtils;
      trackAdContentEvent(obj);
    }
    const obj5 = BountiesModalActionCreatorsDefault;
    obj5.hideModal();
  }, items13);
  const onClose = react.useCallback(() => {
    let obj2;
    let obj3;
    const tmp = AnalyticsActions;
    const trackAdContentEvent = tmp.trackAdContentEvent;
    const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: _undefined2.AD_VIDEO_MODAL_CLOSED, properties: obj2, sourceQuestContent };
    obj2 = { content_name: obj3.getQuestContentName(QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL), content_id: QuestContent.QuestContent.BOUNTIES_END_INTERSTITIAL };
    obj3 = AnalyticsTypes;
    trackAdContentEvent(obj);
    const obj4 = BountiesModalActionCreatorsDefault;
    obj4.hideModal();
  }, items14);
  const obj13 = { onScroll: Tt, onBeginDrag: At, onEndDrag: Rt, onMomentumEnd: ft };
  const obj12 = initialBountyId(4570);
  class Tt {
    constructor(contentOffset) {
      const result = sharedValue4.set(contentOffset.contentOffset.y);
      if (sharedValue3.get()) {
        if (typeof isScrollEventInBounds === "function") {
          const _Math = Math;
          const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
          tmp3(tmp7);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  const obj14 = { scrollY: sharedValue4, isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: first2 };
  Tt.__closure = obj14;
  Tt.__workletHash = 16550062427029;
  Tt.__initData = __initData3;
  class At {
    constructor(contentOffset) {
      const result = sharedValue3.set(true);
      if (typeof isScrollEventInBounds === "function") {
        const _Math = Math;
        const tmp7 = contentOffset.contentOffset.y >= 0 && contentOffset.contentOffset.y <= tmp6;
        tmp3(tmp7);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  At.__closure = { isDraggingSharedValue: sharedValue3, isScrollingInBoundsSharedValue: sharedValue2, isScrollEventInBounds: first2 };
  At.__workletHash = 4736731816545;
  At.__initData = __initData4;
  class Rt {
    constructor() {
      const result = sharedValue3.set(false);
      const tmp2 = closure_17;
      if (!tmp2) {
        const result1 = sharedValue2.set(false);
      }
    }
  }
  const obj15 = { isDraggingSharedValue: sharedValue3, IS_ANDROID: callback1, isScrollingInBoundsSharedValue: sharedValue2 };
  Rt.__closure = obj15;
  Rt.__workletHash = 1138792855760;
  Rt.__initData = __initData5;
  ft = function ft(arg0) {
    const tmp = closure_24;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(handleRecapMomentumEnd)(arg0);
    }
    const result = sharedValue2.set(false);
  };
  ft.__closure = { showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4570).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 };
  ft.__workletHash = 12889620623212;
  ft.__initData = __initData6;
  ({ showRecapPullZone: stateFromStores > 0, runOnJS: initialBountyId(4570).runOnJS, handleRecapMomentumEnd, isScrollingInBoundsSharedValue: sharedValue2 });
  const animatedScrollHandler = obj12.useAnimatedScrollHandler(obj13);
  const obj17 = initialBountyId(4570);
  class Ct {
    constructor() {
      return Math.min(Math.max(Math.round(sharedValue4.get() / c22), 0), c23);
    }
  }
  Ct.__closure = { scrollY: sharedValue4, slotHeight: sum, lastBountyIndex: diff };
  Ct.__workletHash = 2321200091780;
  Ct.__initData = __initData7;
  class Dt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback4)(arg0);
      }
    }
  }
  Dt.__closure = { runOnJS: initialBountyId(4570).runOnJS, commitSwipe: callback4 };
  Dt.__workletHash = 13969036336836;
  Dt.__initData = __initData8;
  ({ runOnJS: initialBountyId(4570).runOnJS, commitSwipe: callback4 });
  const animatedReaction = obj17.useAnimatedReaction(Ct, Dt);
  const tmp57 = initialBountyId(4570);
  class It {
    constructor() {
      let tmp = closure_24;
      if (tmp) {
        const value = sharedValue4.get();
        tmp = value >= c26 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
      }
      return tmp;
    }
  }
  const useAnimatedReaction = tmp57.useAnimatedReaction;
  It.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(14536).RECAP_SNAP_EPSILON };
  It.__workletHash = 9483642326616;
  It.__initData = __initData9;
  function yt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(c34)(arg0);
    }
  }
  ({ showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result, RECAP_SNAP_EPSILON: initialBountyId(14536).RECAP_SNAP_EPSILON });
  yt.__closure = { runOnJS: initialBountyId(4570).runOnJS, setShowRecapFooter: tmp43 };
  yt.__workletHash = 16849792087458;
  yt.__initData = __initData10;
  ({ runOnJS: initialBountyId(4570).runOnJS, setShowRecapFooter: tmp43 });
  const animatedReaction1 = useAnimatedReaction(It, yt);
  function mt() {
    const tmp = closure_24 && sharedValue4.get() > c26;
    return tmp;
  }
  mt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, lastBountyScrollOffset: result };
  mt.__workletHash = 8683329587970;
  mt.__initData = __initData11;
  const obj21 = initialBountyId(4570);
  class Bt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_30)(arg0);
      }
    }
  }
  Bt.__closure = { runOnJS: initialBountyId(4570).runOnJS, setIsRecapPageRevealed: tmp32[1] };
  Bt.__workletHash = 6558318546127;
  Bt.__initData = __initData12;
  ({ runOnJS: initialBountyId(4570).runOnJS, setIsRecapPageRevealed: tmp32[1] });
  const animatedReaction2 = obj21.useAnimatedReaction(mt, Bt);
  function wt() {
    let tmp = closure_24;
    if (tmp) {
      const value = sharedValue4.get();
      tmp = value >= sum1 - useBountiesRecapScroll.RECAP_SNAP_EPSILON;
    }
    return tmp;
  }
  const useAnimatedReaction2 = initialBountyId(4570).useAnimatedReaction;
  const tmp60 = initialBountyId(4570);
  wt.__closure = { showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(14536).RECAP_SNAP_EPSILON };
  wt.__workletHash = 14769605032316;
  wt.__initData = __initData13;
  function xt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_32)(arg0);
    }
  }
  ({ showRecapPullZone: stateFromStores > 0, scrollY: sharedValue4, fullRecapScrollOffset: sum1, RECAP_SNAP_EPSILON: initialBountyId(14536).RECAP_SNAP_EPSILON });
  xt.__closure = { runOnJS: initialBountyId(4570).runOnJS, setIsRecapPageOnTop: tmp35[1] };
  xt.__workletHash = 2311489082799;
  xt.__initData = __initData14;
  ({ runOnJS: initialBountyId(4570).runOnJS, setIsRecapPageOnTop: tmp35[1] });
  const animatedReaction21 = useAnimatedReaction2(wt, xt);
  const items15 = [height2, stateFromStores > 0];
  const memo6 = react.useMemo(() => {
    let tmp = null;
    if (closure_24) {
      const obj = { height: height2 };
      tmp = isVideoEndAppStoreOverlayVisible(closure_32, obj);
    }
    return tmp;
  }, items15);
  function kt() {
    const value = sharedValue.get();
    let num = 0;
    if (sharedValue1.get() <= 0) {
      num = 0;
      if (value >= 1) {
        num = c23;
      }
    }
    return { height: styles.top + styles.height * value + num };
  }
  const obj26 = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1, BOUNTIES_MODAL_FOOTER_HEIGHT, videoLayout: tmp9 };
  kt.__closure = obj26;
  kt.__workletHash = 1951449511294;
  kt.__initData = __initData15;
  const obj25 = initialBountyId(4570);
  animatedStyle = obj25.useAnimatedStyle(kt);
  const items16 = [animatedStyle, tmp.listWrapper, , ];
  ({ left: arr18[2], width: arr18[3] } = tmp9);
  const memo7 = react.useMemo(() => {
    const items = [closure_2.listWrapper, , ];
    const rect = { top: 0, left: styles.left, width: styles.width };
    items[1] = rect;
    items[2] = animatedStyle;
    return items;
  }, items16);
  const tmp65 = height(react.useState(false), 2);
  first4 = tmp65[0];
  closure_49 = tmp67;
  function bt() {
    const value = sharedValue.get();
    const tmp2 = sharedValue1.get() > 0 || value < 1;
    return tmp2;
  }
  bt.__closure = { videoEndPeekScale: sharedValue, videoEndAppStoreProgress: sharedValue1 };
  bt.__workletHash = 3068435771559;
  bt.__initData = __initData16;
  const obj27 = initialBountyId(4570);
  class Vt {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_49)(arg0);
      }
    }
  }
  Vt.__closure = { runOnJS: initialBountyId(4570).runOnJS, setHideListFooterPadding: tmp65[1] };
  Vt.__workletHash = 4435232161253;
  Vt.__initData = __initData17;
  ({ runOnJS: initialBountyId(4570).runOnJS, setHideListFooterPadding: tmp65[1] });
  const animatedReaction3 = obj27.useAnimatedReaction(bt, Vt);
  const items17 = [first4, tmp9.top];
  const items18 = [, ];
  ({ width: arr20[0], height: arr20[1] } = tmp9);
  const memo8 = react.useMemo(() => {
    let num;
    const obj = { paddingTop: styles.top, paddingBottom: num };
    num = 0;
    if (!first4) {
      num = c23;
    }
    return obj;
  }, items17);
  memo9 = react.useMemo(() => {
    size = { width: styles.width, height: styles.height };
    return size;
  }, items18);
  const items19 = [tmp.closeButton, , , ];
  ({ top: arr21[1], left: arr21[2], width: arr21[3] } = tmp9);
  const items20 = [first2, tmp.recapPage, , , , ];
  ({ top: arr22[2], left: arr22[3], width: arr22[4] } = tmp9);
  items20[5] = height;
  const memo10 = react.useMemo(() => {
    let diff;
    const items = [closure_2.closeButton, ];
    const rect = { top: styles.top + nativeDefault.space.PX_8, left: diff - nativeDefault.space.PX_8 };
    const sum = styles.left + styles.width;
    diff = sum - nativeDefault.space.PX_32;
    items[1] = rect;
    return items;
  }, items19);
  const memo11 = react.useMemo(() => {
    const items = [closure_2.recapPage, ];
    size = { top: styles.top, left: styles.left, width: styles.width, height: height - styles.top };
    let tmp = null;
    if (first2) {
      tmp = { zIndex };
      const obj = { zIndex };
    }
    const merged = Object.assign(tmp);
    items[1] = size;
    return items;
  }, items20);
  const obj29 = initialBountyId(4570);
  class Zt {
    constructor() {
      const obj = useBountiesRecapScroll;
      return obj.getRevealProgress(sharedValue4.get(), c26, height2);
    }
  }
  Zt.__closure = { getRevealProgress: initialBountyId(14536).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height2 };
  Zt.__workletHash = 11341453871635;
  Zt.__initData = __initData18;
  ({ getRevealProgress: initialBountyId(14536).getRevealProgress, scrollY: sharedValue4, lastBountyScrollOffset: result, recapRevealHeight: height2 });
  derivedValue = obj29.useDerivedValue(Zt);
  function zt() {
    let interpolate;
    let value;
    const obj = { opacity: interpolate(value, [0, 1], [0, 1], ReanimatedRexport.Extrapolation.CLAMP) };
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = derivedValue.get();
    return obj;
  }
  const obj31 = initialBountyId(4570);
  zt.__closure = { interpolate: initialBountyId(4570).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4570).Extrapolation };
  zt.__workletHash = 120061230536;
  zt.__initData = __initData19;
  ({ interpolate: initialBountyId(4570).interpolate, recapPullProgress: derivedValue, Extrapolation: initialBountyId(4570).Extrapolation });
  const animatedStyle1 = obj31.useAnimatedStyle(zt);
  const obj33 = initialBountyId(4570);
  class Wt {
    constructor() {
      let interpolate;
      let items;
      let value;
      const obj = { opacity: interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = derivedValue.get();
      items = [c28, c29];
      return obj;
    }
  }
  Wt.__closure = { interpolate: initialBountyId(4570).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(4570).Extrapolation };
  Wt.__workletHash = 2307930075336;
  Wt.__initData = __initData20;
  ({ interpolate: initialBountyId(4570).interpolate, recapPullProgress: derivedValue, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(4570).Extrapolation });
  const animatedStyle2 = obj33.useAnimatedStyle(Wt);
  const obj35 = initialBountyId(4570);
  const tmp75 = first1;
  class Kt {
    constructor() {
      let items;
      let obj4;
      let revealProgress;
      const obj = sharedValue4;
      if (sharedValue4.get() >= c26 - c22 / 2) {
        revealProgress = derivedValue.get();
      } else {
        const obj2 = useBountiesRecapScroll;
        revealProgress = obj2.getRevealProgress(obj.get(), 0, height2);
      }
      const obj3 = { opacity: obj4.interpolate(revealProgress, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      items = [c28, c29];
      obj4 = ReanimatedRexport;
      return obj3;
    }
  }
  Kt.__closure = { scrollY: sharedValue4, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(14536).getRevealProgress, recapRevealHeight: height2, interpolate: initialBountyId(4570).interpolate, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(4570).Extrapolation };
  Kt.__workletHash = 10371859077651;
  Kt.__initData = __initData21;
  const items21 = [tmp.peekGradient, , , , ];
  ({ left: arr23[1], width: arr23[2], top: arr23[3], height: arr23[4] } = tmp9);
  ({ scrollY: sharedValue4, lastBountyScrollOffset: result, slotHeight: sum, recapPullProgress: derivedValue, getRevealProgress: initialBountyId(14536).getRevealProgress, recapRevealHeight: height2, interpolate: initialBountyId(4570).interpolate, FOOTER_FADE_START_PROGRESS: handleRecapMomentumEnd, FOOTER_FADE_END_PROGRESS: first1, Extrapolation: initialBountyId(4570).Extrapolation });
  const animatedStyle3 = obj35.useAnimatedStyle(Kt);
  let tmp79 = tmp23;
  const memo12 = react.useMemo(() => {
    const items = [closure_2.peekGradient, ];
    const rect = { left: styles.left, width: styles.width, top: styles.top + styles.height, bottom: 0 };
    items[1] = rect;
    return items;
  }, items21);
  if (data.length > 1) {
    tmp79 = hasRecurringSwipeUpNux;
  }
  if (tmp79) {
    tmp79 = !tmp16;
  }
  isPeekEnabled = tmp79;
  if (hasRecurringSwipeUpNux) {
    hasRecurringSwipeUpNux = tmp23;
  }
  const tmp5Result = tmp5(4570);
  class Xt {
    constructor() {
      let interpolate;
      let items;
      let value;
      const obj = { opacity: interpolate(value, items, [1, 0], ReanimatedRexport.Extrapolation.CLAMP) };
      interpolate = ReanimatedRexport.interpolate;
      ReanimatedRexport;
      value = sharedValue4.get();
      items = [0, c22];
      return obj;
    }
  }
  Xt.__closure = { interpolate: tmp5(4570).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: tmp5(4570).Extrapolation };
  Xt.__workletHash = 17578041414706;
  Xt.__initData = __initData22;
  ({ interpolate: tmp5(4570).interpolate, scrollY: sharedValue4, slotHeight: sum, Extrapolation: tmp5(4570).Extrapolation });
  const animatedStyle4 = tmp5Result.useAnimatedStyle(Xt);
  function jt() {
    return derivedValue.get() < c29;
  }
  jt.__closure = { recapPullProgress: derivedValue, FOOTER_FADE_END_PROGRESS: tmp75 };
  jt.__workletHash = 2114608155849;
  jt.__initData = __initData23;
  function qt(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(c33)(arg0);
    }
  }
  const tmp5Result2 = tmp5(4570);
  qt.__closure = { runOnJS: tmp5(4570).runOnJS, setIsCloseButtonPressable: tmp40 };
  qt.__workletHash = 2587138880527;
  qt.__initData = __initData24;
  ({ runOnJS: tmp5(4570).runOnJS, setIsCloseButtonPressable: tmp40 });
  const animatedReaction4 = tmp5Result2.useAnimatedReaction(jt, qt);
  const items22 = [sum, sharedValue4, memo9, tmp79, hasRecurringSwipeUpNux, sharedValue, sourceQuestContent, , , , , , ];
  ({ width: arr24[7], height: arr24[8] } = tmp9);
  items22[9] = first3;
  items22[10] = first1;
  items22[11] = first2;
  items22[12] = sharedValue2;
  const items23 = [first3, first1, first2, , , , , ];
  ({ width: arr25[3], height: arr25[4] } = tmp9);
  items23[5] = tmp79;
  items23[6] = null != tmp15;
  items23[7] = sharedValue;
  const callback6 = obj.useCallback((arg0) => {
    let BountiesScrollVideoItem;
    let index;
    let item;
    let tmp3;
    let tmp6;
    let tmp7;
    ({ item, index } = arg0);
    const obj = { index, slotHeight, scrollY: sharedValue4, style: memo9, isPeekEnabled, children: isVideoEndAppStoreOverlayVisible(BountiesScrollVideoItem, size, item.id) };
    size = { bounty: item, sourceQuestContent, width: styles.width, height: styles.height, index, isScrollIndicatorEnabled: tmp3, isActive: index === first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, isScrollingInBoundsSharedValue: sharedValue2, shouldLoadHls: tmp6, videoEndPeekScale: tmp7, softDownloadCapsEnabled: true };
    tmp3 = hasRecurringSwipeUpNux;
    BountiesScrollVideoItem = BountiesScrollVideoItem2.BountiesScrollVideoItem;
    const tmp2 = closure_36;
    if (hasRecurringSwipeUpNux) {
      tmp3 = 0 === index;
    }
    tmp7 = undefined;
    tmp6 = tmp5 || index === tmp4 + 1;
    if (index === first3) {
      tmp7 = sharedValue;
    }
    return isVideoEndAppStoreOverlayVisible(tmp2, obj);
  }, items22);
  [][0] = height2;
  const memo13 = obj.useMemo(() => {
    size = { activeIndex: first3, isRecapPageRevealed: first1, isRecapPageOnTop: first2, width: styles.width, height: styles.height, isPeekEnabled, isVideoEndAppStoreOverlayVisible, videoEndPeekScale: sharedValue };
    return size;
  }, items23);
  if (0 === data.length) {
    return null;
  } else {
    let tmp86 = null;
    if (tmp42) {
      const obj39 = { orbAmount: stateFromStores };
      tmp86 = isVideoEndAppStoreOverlayVisible(tmp5(14572).BountiesScrollRecapFooter, obj39);
    }
    const obj40 = { value: memo2, children: tmp88(tmp89, obj41) };
    let tmp87Result = null;
    obj41 = { style: tmp.root, children: items25 };
    const BountyVideoEndAppStoreProvider = tmp5(14541).BountyVideoEndAppStoreProvider;
    tmp88 = memo;
    tmp89 = questHomeBounties;
    if (stateFromStores > 0) {
      const obj42 = { style: items24, pointerEvents: str, children: isVideoEndAppStoreOverlayVisible(QuestContentImpressionTrackerNative, obj43) };
      items24 = [memo11, animatedStyle1];
      str = "none";
      const View = tmp2(4570).View;
      if (first2) {
        str = "box-none";
      }
      obj43 = {
        adContentId,
        adCreativeType: tmp5(5764).AdCreativeType.BOUNTY,
        questContent: tmp5(5762).QuestContent.BOUNTIES_END_INTERSTITIAL,
        overrideVisibility: first2,
        sourceQuestContent,
        children() {
              const obj = { orbAmount, onClose, style: { flex: 1 } };
              return isVideoEndAppStoreOverlayVisible(BountiesScrollRecapPage.BountiesScrollRecapPage, obj);
            }
      };
      QuestContentImpressionTrackerNative = tmp5(10717).QuestContentImpressionTrackerNative;
      tmp87Result = tmp87(View, obj42);
    }
    items25 = [tmp87Result, , , , , ];
    const obj44 = { style: memo7, children: isVideoEndAppStoreOverlayVisible(tmp5(8176).AnimatedFlashList, obj45) };
    const View2 = tmp2(4570).View;
    obj45 = {
      ref,
      data,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: callback6,
      extraData: memo13,
      overrideItemLayout: tmp84,
      ItemSeparatorComponent,
      ListFooterComponent: memo6,
      snapToOffsets: memo4,
      snapToEnd: false,
      decelerationRate: 0.85,
      showsVerticalScrollIndicator: false,
      drawDistance: sum,
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      scrollEnabled: null == tmp15,
      contentContainerStyle: memo8
    };
    items25[1] = isVideoEndAppStoreOverlayVisible(View2, obj44);
    let tmp87Result4 = null;
    if (null != tmp15) {
      const obj46 = { metadata: tmp15.metadata, sheetHeight: memo1, revealProgress: sharedValue1, onDismiss: callback2, onInstallPress: null, onOverlaySurfaceClick: null, onCarouselScroll: null };
      ({ onInstallPress: obj48.onInstallPress, onOverlaySurfaceClick: obj48.onOverlaySurfaceClick, onCarouselScroll: obj48.onCarouselScroll } = tmp15);
      tmp87Result4 = tmp87(tmp2(14577), obj46);
    }
    items25[2] = tmp87Result4;
    let tmp87Result5 = null;
    if (tmp79) {
      tmp87Result5 = null;
      if (data.length > 1) {
        const obj47 = { pointerEvents: "none", style: items26, children: isVideoEndAppStoreOverlayVisible(tmp2(5292), obj49) };
        items26 = [memo12, animatedStyle4];
        const View3 = tmp2(4570).View;
        obj49 = { colors: sum1, style: absoluteFill.absoluteFill };
        tmp87Result5 = tmp87(View3, obj47);
      }
    }
    items25[3] = tmp87Result5;
    const obj50 = { style: items27, pointerEvents: str2, children: tmp87Result6 };
    items27 = [memo10, animatedStyle2];
    str2 = "none";
    const View4 = tmp2(4570).View;
    if (tmp39) {
      str2 = "box-none";
    }
    tmp87Result6 = null;
    if (tmp39) {
      const obj51 = { onPress: callback5 };
      tmp87Result6 = tmp87(tmp2(14578), obj51);
    }
    items25[4] = isVideoEndAppStoreOverlayVisible(View4, obj50);
    const obj52 = { visible: tmp42, onContentLayout: callback, zIndex: height2, opacityStyle: animatedStyle3, children: tmp86 };
    const tmp2Result = tmp2(14532);
    items25[5] = isVideoEndAppStoreOverlayVisible(tmp2Result, obj52);
    return isVideoEndAppStoreOverlayVisible(BountyVideoEndAppStoreProvider, obj40);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bountyId;
  let sourceQuestContent;
  const obj = react2;
  const cResult = obj.c(3);
  ({ bountyId, sourceQuestContent } = arg0);
  if (cResult[0] === bountyId) {
    let tmp4;
    if (cResult[1] === sourceQuestContent) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_15(closure_82, { initialBountyId: bountyId, sourceQuestContent }) };
  const ThemeContextProvider = tmp(4544).ThemeContextProvider;
  const tmp5 = closure_15(ThemeContextProvider, obj2);
  cResult[0] = bountyId;
  cResult[1] = sourceQuestContent;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let bountyId;
  let sourceQuestContent;
  ({ bountyId, sourceQuestContent } = arg0);
  const obj = { theme: shared_ThemeTypes.ThemeTypes.DARK, children: closure_15(closure_82, { initialBountyId: bountyId, sourceQuestContent }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return closure_15(ThemeContextProvider, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContentScroll.tsx");

export default tmp7;
