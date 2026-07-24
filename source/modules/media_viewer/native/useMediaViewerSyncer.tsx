// Module ID: 8338
// Function ID: 65685
// Name: useMediaViewerSyncer
// Dependencies: [57, 31, 8339, 477, 3991, 8340, 1557, 8322, 8341, 8320, 4542, 2]
// Exports: useMediaViewerSyncer

// Module 8338 (useMediaViewerSyncer)
import _slicedToArray from "_slicedToArray";
import result from "result";
import THUMBNAIL_MARGIN from "THUMBNAIL_MARGIN";
import set from "set";
import set from "THUMBNAIL_MARGIN";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ THUMBNAIL_MARGIN: closure_5, THUMBNAIL_HEIGHT: closure_6, THUMBNAIL_MAX_WIDTH: closure_7, THUMBNAIL_MIN_WIDTH: closure_8, THUMBNAIL_WIDTH_MARGIN: closure_9 } = THUMBNAIL_MARGIN);
set = set.isAndroid();
let closure_11 = { code: "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}" };
let closure_12 = { code: "function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}" };
let closure_13 = { code: "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}" };
let closure_14 = { code: "function useMediaViewerSyncerTsx4(){const{thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');}" };
let closure_15 = { code: "function useMediaViewerSyncerTsx5(){const{thumbnailsScrolling,SCROLLING_MOMENTUM}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);}" };
let closure_16 = { code: "function useMediaViewerSyncerTsx6(){const{thumbnailsAnimateTo,variableWidthThumbnailsEnabled,runOnJS,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){runOnJS(scrollVarWidthThumbnails)(thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}}" };
let closure_17 = { code: "function useMediaViewerSyncerTsx7(){const{viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,runOnJS,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){runOnJS(lerpScrollVarWidthThumbnails)(viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}}" };
let closure_18 = { code: "function useMediaViewerSyncerTsx8(){const{thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput}=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');}" };
let closure_19 = { code: "function useMediaViewerSyncerTsx9(){const{viewerScrolling,headerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{overshootClamping:true})};}" };
let closure_20 = { code: "function useMediaViewerSyncerTsx10(){const{viewerScrolling,footerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{overshootClamping:true})};}" };
let closure_21 = { code: "function useMediaViewerSyncerTsx11(){const{interpolate,viewerPos,index}=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');}" };
let closure_22 = { code: "function useMediaViewerSyncerTsx13(){const{thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth}=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');}" };
let closure_23 = { code: "function useMediaViewerSyncerTsx14(){const{viewerScrolling,_width,withSpring,THUMBNAIL_HEIGHT,opacity}=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};}" };
let closure_24 = { code: "function useMediaViewerSyncerTsx15(){const{zoomed}=this.__closure;return!zoomed.get();}" };
let closure_25 = { code: "function useMediaViewerSyncerTsx16(){const{thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}" };
let closure_26 = { code: "function useMediaViewerSyncerTsx17(){const{thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}" };
let closure_27 = { code: "function useMediaViewerSyncerTsx18(){const{viewerScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');}" };
let closure_28 = { code: "function useMediaViewerSyncerTsx19(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}" };
let closure_29 = { code: "function useMediaViewerSyncerTsx20(pos){const{viewerPos}=this.__closure;viewerPos.set(pos);}" };
let closure_30 = { code: "function useMediaViewerSyncerTsx21(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}" };
let closure_31 = { code: "function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}" };
let closure_32 = { code: "function useMediaViewerSyncerTsx23(event){const{contentSizeLastChangedAt,IS_ANDROID,selectedIndex,scrollTo,ref,screenWidth,viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,onScrollWorklets}=this.__closure;const contentSizeChangedRecently=Date.now()-contentSizeLastChangedAt.get()<500;if(IS_ANDROID&&contentSizeChangedRecently&&event.contentOffset.x===0&&selectedIndex.get()!==0){scrollTo(ref,selectedIndex.get()*screenWidth,event.contentOffset.y,false);return;}if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;onScrollWorklets.onScroll(event.contentOffset.x/screenWidth);}" };
let closure_33 = { code: "function useMediaViewerSyncerTsx24(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}" };
let closure_34 = { code: "function useMediaViewerSyncerTsx25(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}" };
let result = set.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSyncer.tsx");

export const useMediaViewerSyncer = function useMediaViewerSyncer(sources) {
  sources = sources.sources;
  const initialIndex = sources.initialIndex;
  const onEndReached = sources.onEndReached;
  const onEndReachedThreshold = sources.onEndReachedThreshold;
  let items = [initialIndex];
  memo = memo.useMemo(() => {
    const obj = { selectedIndex: sources(onEndReached[4]).makeMutable(initialIndex) };
    const obj2 = sources(onEndReached[4]);
    obj.thumbnailsIndex = sources(onEndReached[4]).makeMutable(initialIndex);
    const obj3 = sources(onEndReached[4]);
    obj.thumbnailsScrolling = sources(onEndReached[4]).makeMutable(0);
    const obj4 = sources(onEndReached[4]);
    obj.thumbnailsAnimateTo = sources(onEndReached[4]).makeMutable(-1);
    const obj5 = sources(onEndReached[4]);
    obj.viewerPos = sources(onEndReached[4]).makeMutable(initialIndex);
    const obj6 = sources(onEndReached[4]);
    obj.viewerScrolling = sources(onEndReached[4]).makeMutable(0);
    const obj7 = sources(onEndReached[4]);
    obj.zoomed = sources(onEndReached[4]).makeMutable(false);
    const obj8 = sources(onEndReached[4]);
    obj.swipeSource = sources(onEndReached[4]).makeMutable(undefined);
    return obj;
  }, items);
  let items1 = [sources, memo, onEndReached, onEndReachedThreshold];
  return memo.useMemo(() => {
    let arr = sources;
    let items = [];
    let num = 0;
    let num2 = 0;
    if (0 < sources.length) {
      do {
        let tmp = sources;
        let tmp2 = onEndReached;
        let obj = sources(onEndReached[9]);
        let size = obj.flattenSource(arr[num2]);
        if (null != size) {
          let _Math = Math;
          let _Math2 = Math;
          let tmp5 = outer1_6;
          let tmp6 = outer1_7;
          let tmp7 = outer1_8;
          let tmp8 = outer1_5;
          let sum = Math.max(Math.min(size.width * (outer1_6 / size.height), outer1_7), outer1_8) + 2 * outer1_5;
          let sum1 = num + sum;
          let diff = sum1 - num;
          let num3 = 0;
          if (0 !== num2) {
            let _Math3 = Math;
            num3 = Math.floor(num + (diff - (items[0].end - items[0].start)) / 2);
          }
          obj = { start: num, end: sum1, scrollStart: num3 };
          arr = items.push(obj);
          let tmp4 = sum1;
          let tmp13 = sum;
          let tmp14 = num;
          let tmp15 = sum1;
          let tmp16 = diff;
        } else {
          obj = { start: num, end: num, scrollStart: num };
          arr = items.push(obj);
          tmp4 = num;
        }
        num2 = num2 + 1;
        num = tmp4;
      } while (num2 < arr.length);
    }
    return (function makeMediaViewerSyncer(sources) {
      let animProps;
      let _slicedToArray;
      let result;
      let closure_5;
      let closure_6;
      let closure_7;
      let onEndReached;
      let onEndReachedThreshold;
      let thumbnailScrollPositions;
      let zoomed;
      sources = sources.sources;
      ({ animProps, thumbnailScrollPositions } = sources);
      const selectedIndex = animProps.selectedIndex;
      ({ thumbnailsIndex: _slicedToArray, thumbnailsScrolling: result, thumbnailsAnimateTo: closure_5, viewerPos: closure_6, viewerScrolling: closure_7, zoomed } = animProps);
      const swipeSource = animProps.swipeSource;
      ({ onEndReached, onEndReachedThreshold } = sources);
      if (thumbnailScrollPositions.length > 0) {
        const end = thumbnailScrollPositions[0].end;
        const start = thumbnailScrollPositions[0].start;
      }
      return {
        index: selectedIndex,
        sources,
        zoomed,
        thumbnailScrollPositions,
        variableWidthThumbnailsEnabled: false,
        useThumbnailsProps(onSelect, maxIndex) {
          const sources = onSelect;
          let closure_1 = maxIndex;
          function onSelectedIndexChange() {
            if ("thumbnails" === outer1_9.get()) {
              const MediaViewerAnalytics = sources(onEndReached[7]).MediaViewerAnalytics;
              MediaViewerAnalytics.markActionPerformed(sources(onEndReached[7]).IncrementableMediaViewerActions.THUMBNAIL_SWIPE);
            } else if ("viewer" === outer1_9.get()) {
              const MediaViewerAnalytics3 = sources(onEndReached[7]).MediaViewerAnalytics;
              MediaViewerAnalytics3.markActionPerformed(sources(onEndReached[7]).IncrementableMediaViewerActions.VIEWER_SWIPE);
            }
            const MediaViewerAnalytics2 = sources(onEndReached[7]).MediaViewerAnalytics;
            MediaViewerAnalytics2.markActionPerformed(sources(onEndReached[7]).IncrementableMediaViewerActions.SELECTED_ITEM_CHANGE);
          }
          let obj = sources(onEndReached[4]);
          const animatedRef = obj.useAnimatedRef();
          let obj1 = sources(onEndReached[5]);
          let size = obj1.useMediaViewerDimensions();
          const width = size.width;
          const rect = initialIndex(onEndReached[6])();
          let obj2 = sources(onEndReached[4]);
          obj = { onBeginDrag: fn };
          fn = function y() {
            const result = mapped1.set(2 | mapped1.get());
            const result1 = outer1_9.set("thumbnails");
          };
          obj = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2, swipeSource };
          fn.__closure = obj;
          fn.__workletHash = 16224520186325;
          fn.__initData = outer3_11;
          class C {
            constructor() {
              result = scrollTo.set(-3 & scrollTo.get());
              return;
            }
          }
          C.__closure = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2 };
          C.__workletHash = 5779899826871;
          C.__initData = outer3_12;
          obj.onEndDrag = C;
          class E {
            constructor(arg0) {
              result = onSelect.contentOffset.x / closure_0;
              if ("thumbnails" === outer1_9.get()) {
                tmp3 = globalThis;
                _Math3 = Math;
                _Math4 = Math;
                _Math5 = Math;
                tmp4 = closure_1;
                num2 = 0;
                tmp5 = runOnJS;
                result1 = runOnJS.set(Math.max(0, Math.min(Math.round(result), closure_1)));
              } else {
                tmp2 = globalThis;
                _Math = Math;
                _Math2 = Math;
                num = 0.01;
              }
              if (scrollTo.get() >= 0) {
                tmp19 = runOnJS;
                tmp21 = scrollTo;
                value = runOnJS.get();
                if (value === scrollTo.get()) {
                  tmp22 = scrollTo;
                  num4 = -1;
                  result2 = scrollTo.set(-1);
                  tmp24 = outer1_2;
                  tmp25 = runOnJS;
                  result3 = outer1_2.set(runOnJS.get());
                }
              } else {
                tmp27 = closure_7;
                tmp8 = 0 !== closure_7.get();
                if (!tmp8) {
                  tmp7 = scrollTo;
                  tmp8 = 0 !== scrollTo.get();
                }
                if (tmp8) {
                  tmp9 = runOnJS;
                  tmp11 = outer1_2;
                  value1 = runOnJS.get();
                  tmp8 = value1 !== outer1_2.get();
                }
                if (tmp8) {
                  tmp12 = outer1_2;
                  tmp13 = runOnJS;
                  result4 = outer1_2.set(runOnJS.get());
                  tmp15 = sources;
                  tmp16 = onEndReached;
                  num3 = 4;
                  obj = sources(onEndReached[4]);
                  tmp17 = onSelectedIndexChange;
                  tmp18 = obj.runOnJS(onSelectedIndexChange)();
                }
              }
              return;
            }
          }
          obj1 = { variableWidthThumbnailsEnabled: false, thumbnailScrollPositions: closure_1, thumbnailSize: onSelect, swipeSource, maxIndex, thumbnailsIndex: mapped, thumbnailsAnimateTo: derivedValue2, selectedIndex: animatedRef, viewerScrolling: diff1, thumbnailsScrolling: mapped1, runOnJS: sources(onEndReached[4]).runOnJS, onSelectedIndexChange };
          E.__closure = obj1;
          E.__workletHash = 10605529664479;
          E.__initData = outer3_13;
          obj.onScroll = E;
          class P {
            constructor() {
              result = scrollTo.set(4 | scrollTo.get());
              result1 = outer1_9.set("thumbnails");
              return;
            }
          }
          P.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4, swipeSource };
          P.__workletHash = 4138169755088;
          P.__initData = outer3_14;
          obj.onMomentumBegin = P;
          class R {
            constructor() {
              result = scrollTo.set(-5 & scrollTo.get());
              return;
            }
          }
          R.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4 };
          R.__workletHash = 1471443652144;
          R.__initData = outer3_15;
          obj.onMomentumEnd = R;
          let items = [animatedRef];
          const callback = memo.useCallback((arg0) => {
            if (!onSelectedIndexChange.get()) {
              const result = derivedValue2.set(arg0);
              const result1 = outer1_9.set("thumbnails");
            }
          }, []);
          const callback1 = memo.useCallback((arg0) => {
            sources(onEndReached[4]).scrollTo(animatedRef, maxIndex[arg0].scrollStart, 0, true);
          }, items);
          let obj6 = sources(onEndReached[4]);
          let fn2 = function k() {
            if (derivedValue2.get() >= 0) {
              const obj = sources(onEndReached[4]);
              obj.scrollTo(animatedRef, derivedValue2.get() * closure_0, 0, true);
            }
          };
          obj2 = { thumbnailsAnimateTo: derivedValue2, variableWidthThumbnailsEnabled: false, runOnJS: sources(onEndReached[4]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: sources(onEndReached[4]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
          fn2.__closure = obj2;
          fn2.__workletHash = 1697086875584;
          fn2.__initData = outer3_16;
          let derivedValue = obj6.useDerivedValue(fn2);
          let items1 = [animatedRef];
          const callback2 = memo.useCallback((arg0) => {
            const result = sources(onEndReached[8]).lerpVarWidthThumbnailScrollBounds(closure_1, arg0);
            const obj = sources(onEndReached[8]);
            sources(onEndReached[4]).scrollTo(animatedRef, result, 0, false);
          }, items1);
          let obj8 = sources(onEndReached[4]);
          class Z {
            constructor() {
              tmp = 0 !== closure_7.get();
              if (tmp) {
                tmp2 = runOnJS;
                tmp4 = left;
                value = runOnJS.get();
                tmp = value !== left.get();
              }
              if (tmp) {
                tmp5 = sources;
                tmp6 = onEndReached;
                num = 4;
                obj = sources(onEndReached[4]);
                tmp7 = closure_2;
                tmp8 = left;
                tmp9 = closure_0;
                flag = false;
                tmp10 = obj;
                num2 = 0;
                scrollToResult = obj.scrollTo(closure_2, left.get() * closure_0, 0, false);
              }
              return;
            }
          }
          const animatedScrollHandler = obj2.useAnimatedScrollHandler(obj);
          Z.__closure = { viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos: diff, variableWidthThumbnailsEnabled: false, runOnJS: sources(onEndReached[4]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: sources(onEndReached[4]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
          Z.__workletHash = 10477949154269;
          Z.__initData = outer3_17;
          let derivedValue1 = obj8.useDerivedValue(Z);
          mapped = sources.map((arg0, arg1) => arg1);
          mapped1 = sources.map((closure_1) => {
            const size = sources(onEndReached[9]).flattenSource(closure_1);
            let num = 0;
            if (null != size) {
              const _Math = Math;
              const _Math2 = Math;
              num = (Math.max(Math.min(size.width * (outer4_6 / size.height), outer4_7), outer4_8) - outer4_8) / 2;
            }
            return num;
          });
          let obj3 = { viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos: diff, variableWidthThumbnailsEnabled: false, runOnJS: sources(onEndReached[4]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: sources(onEndReached[4]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
          function ee() {
            let num = 0;
            if (mapped1.get() <= 0) {
              const obj = sources(onEndReached[4]);
              num = -obj.interpolate(diff.get(), mapped, mapped1, "clamp");
            }
            return num;
          }
          const obj11 = sources(onEndReached[4]);
          ee.__closure = { thumbnailsScrolling: mapped1, interpolate: sources(onEndReached[4]).interpolate, viewerPos: diff, interpolateInput: mapped, interpolateOutput: mapped1 };
          ee.__workletHash = 10097839523885;
          ee.__initData = outer3_18;
          derivedValue2 = obj11.useDerivedValue(ee);
          diff = (width - onSelect) / 2 - rect.left;
          const obj4 = { thumbnailsScrolling: mapped1, interpolate: sources(onEndReached[4]).interpolate, viewerPos: diff, interpolateInput: mapped, interpolateOutput: mapped1 };
          function te() {
            let obj = {};
            if (diff1.get() > 0) {
              let sum = closure_6 + derivedValue2.get();
            } else {
              obj = { overshootClamping: true };
              sum = sources(onEndReached[10]).withSpring(closure_6 + derivedValue2.get(), obj);
              const obj2 = sources(onEndReached[10]);
            }
            obj.width = sum;
            return obj;
          }
          const obj13 = sources(onEndReached[4]);
          te.__closure = { viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: sources(onEndReached[10]).withSpring };
          te.__workletHash = 11328769587377;
          te.__initData = outer3_19;
          diff1 = (width - onSelect) / 2 - rect.right;
          const animatedStyle = obj13.useAnimatedStyle(te);
          let obj5 = { viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: sources(onEndReached[10]).withSpring };
          function ne() {
            let obj = {};
            if (diff1.get() > 0) {
              let sum = diff1 + derivedValue2.get();
            } else {
              obj = { overshootClamping: true };
              sum = sources(onEndReached[10]).withSpring(diff1 + derivedValue2.get(), obj);
              const obj2 = sources(onEndReached[10]);
            }
            obj.width = sum;
            return obj;
          }
          obj6 = { viewerScrolling: diff1, footerBufferSize: diff1, margin: derivedValue2, withSpring: sources(onEndReached[10]).withSpring };
          ne.__closure = obj6;
          ne.__workletHash = 10532164558483;
          ne.__initData = outer3_20;
          const animatedStyle1 = sources(onEndReached[4]).useAnimatedStyle(ne);
          const callback3 = memo.useCallback((width, index) => {
            let closure_0 = index;
            let obj = sources(onEndReached[4]);
            const fn = function i() { ... };
            obj = { interpolate: sources(onEndReached[4]).interpolate, viewerPos: diff, index };
            fn.__closure = obj;
            fn.__workletHash = 5784737783661;
            fn.__initData = outer4_21;
            const derivedValue = obj.useDerivedValue(fn);
            const bound = Math.max(Math.min(width.width * (outer4_6 / width.height), outer4_7), outer4_8);
            const fn2 = function l() { ... };
            obj = { thumbnailsScrolling: mapped1, THUMBNAIL_MIN_WIDTH: outer4_8, interpolate: sources(onEndReached[4]).interpolate, viewerPos: diff, index, sourceWidth: bound };
            fn2.__closure = obj;
            fn2.__workletHash = 12440745987072;
            fn2.__initData = outer4_22;
            const derivedValue1 = sources(onEndReached[4]).useDerivedValue(fn2);
            const obj3 = sources(onEndReached[4]);
            const fn3 = function u() { ... };
            const obj5 = sources(onEndReached[4]);
            fn3.__closure = { viewerScrolling: diff1, _width: derivedValue1, withSpring: sources(onEndReached[10]).withSpring, THUMBNAIL_HEIGHT: outer4_6, opacity: derivedValue };
            fn3.__workletHash = 513826663139;
            fn3.__initData = outer4_23;
            return obj5.useAnimatedStyle(fn3);
          }, []);
          const obj15 = sources(onEndReached[4]);
          function ie() {
            return !onSelectedIndexChange.get();
          }
          ie.__closure = { zoomed: onSelectedIndexChange };
          ie.__workletHash = 7667674289153;
          ie.__initData = outer3_24;
          obj8 = {
            ref: animatedRef,
            headerBufferStyle: animatedStyle,
            headerBufferSize: diff,
            footerBufferStyle: animatedStyle1,
            footerBufferSize: diff1,
            scrollEnabled: sources(onEndReached[4]).useDerivedValue(ie),
            onScroll: animatedScrollHandler,
            onSelect: callback,
            useThumbnailStyle: callback3,
            screenWidth: width,
            screenHeight: size.height,
            itemSize(arg0, arg1) {
              return outer4_9;
            }
          };
          return obj8;
        },
        useViewerProps() {
          let obj = sources(onEndReached[4]);
          const animatedRef = obj.useAnimatedRef();
          let obj1 = sources(onEndReached[5]);
          const size = obj1.useMediaViewerDimensions();
          let width = size.width;
          let obj2 = sources(onEndReached[4]);
          let fn = function i() {
            if (-1 !== outer1_5.get()) {
              const obj = sources(onEndReached[4]);
              obj.scrollTo(animatedRef, outer1_5.get() * width, 0, false);
            }
          };
          obj = { thumbnailsAnimateTo: closure_5, scrollTo: sources(onEndReached[4]).scrollTo, ref: animatedRef, screenWidth: width };
          fn.__closure = obj;
          fn.__workletHash = 11860326453239;
          fn.__initData = outer3_25;
          const derivedValue = obj2.useDerivedValue(fn);
          let fn2 = function l() {
            let tmp = 0 === outer1_4.get();
            if (!tmp) {
              tmp = outer1_7.get() > 0;
            }
            if (!tmp) {
              tmp = -1 !== outer1_5.get();
            }
            if (!tmp) {
              const obj = sources(onEndReached[4]);
              obj.scrollTo(animatedRef, sharedValue.get() * width, 0, false);
            }
          };
          obj = { thumbnailsScrolling: result, viewerScrolling: closure_7, thumbnailsAnimateTo: closure_5, scrollTo: sources(onEndReached[4]).scrollTo, ref: animatedRef, thumbnailsIndex: sharedValue, screenWidth: width };
          fn2.__closure = obj;
          fn2.__workletHash = 16855593341498;
          fn2.__initData = outer3_26;
          const derivedValue1 = sources(onEndReached[4]).useDerivedValue(fn2);
          memo = memo.useMemo(() => {
            const onBeginDrag = function o() { ... };
            let obj = { viewerScrolling: outer1_7, SCROLLING_DRAG: 2, swipeSource: outer1_9 };
            onBeginDrag.__closure = obj;
            onBeginDrag.__workletHash = 1082965969005;
            onBeginDrag.__initData = outer4_27;
            const onEndDrag = function l() { ... };
            onEndDrag.__closure = { viewerScrolling: outer1_7, SCROLLING_DRAG: 2 };
            onEndDrag.__workletHash = 1722948238280;
            onEndDrag.__initData = outer4_28;
            const onScroll = function i() { ... };
            obj = { viewerPos: outer1_6 };
            onScroll.__closure = obj;
            onScroll.__workletHash = 3817181878424;
            onScroll.__initData = outer4_29;
            const onMomentumBegin = function n() { ... };
            obj = { viewerScrolling: outer1_7, SCROLLING_MOMENTUM: 4, swipeSource: outer1_9 };
            onMomentumBegin.__closure = obj;
            onMomentumBegin.__workletHash = 16635271467463;
            onMomentumBegin.__initData = outer4_30;
            const onMomentumEnd = function t() { ... };
            onMomentumEnd.__closure = { viewerScrolling: outer1_7, SCROLLING_MOMENTUM: 4 };
            onMomentumEnd.__workletHash = 8806989101472;
            onMomentumEnd.__initData = outer4_31;
            return { onBeginDrag, onEndDrag, onScroll, onMomentumBegin, onMomentumEnd };
          }, []);
          const obj5 = sources(onEndReached[4]);
          sharedValue = sources(onEndReached[4]).useSharedValue(0);
          const obj7 = sources(onEndReached[4]);
          obj1 = { onBeginDrag: memo.onBeginDrag, onEndDrag: memo.onEndDrag };
          class S {
            constructor(arg0) {
              timestamp = Date.now();
              if (outer4_10) {
                num = 500;
                if (tmp2 < 500) {
                  num2 = 0;
                  if (0 === arg0.contentOffset.x) {
                    tmp3 = outer1_2;
                    if (0 !== outer1_2.get()) {
                      tmp10 = sources;
                      tmp11 = onEndReached;
                      num4 = 4;
                      obj = sources(onEndReached[4]);
                      tmp12 = closure_0;
                      tmp13 = outer1_2;
                      tmp14 = width;
                      flag = false;
                      tmp15 = obj;
                      scrollToResult = obj.scrollTo(closure_0, outer1_2.get() * width, arg0.contentOffset.y, false);
                    }
                    return;
                  }
                }
              }
              tmp4 = 0 === outer1_7.get();
              if (tmp4) {
                tmp5 = outer1_4;
                tmp4 = 0 === outer1_4.get();
              }
              if (tmp4) {
                tmp6 = outer1_5;
                num3 = -1;
                tmp4 = -1 === outer1_5.get();
              }
              if (!tmp4) {
                tmp7 = closure_2;
                tmp8 = width;
                onScrollResult = closure_2.onScroll(arg0.contentOffset.x / width);
              }
              return;
            }
          }
          obj2 = { contentSizeLastChangedAt: sharedValue, IS_ANDROID: outer3_10, selectedIndex: memo, scrollTo: sources(onEndReached[4]).scrollTo, ref: animatedRef, screenWidth: width, viewerScrolling: closure_7, thumbnailsScrolling: result, thumbnailsAnimateTo: closure_5, onScrollWorklets: memo };
          S.__closure = obj2;
          S.__workletHash = 7511342747846;
          S.__initData = outer3_32;
          obj1.onScroll = S;
          ({ onMomentumBegin: obj9.onMomentumBegin, onMomentumEnd: obj9.onMomentumEnd } = memo);
          const items = [animatedRef, width, sharedValue];
          const obj8 = sources(onEndReached[4]);
          const items1 = [width, size.height, animatedRef];
          const callback = memo.useCallback(() => {
            const current = animatedRef.current;
            if (null != current) {
              current.scrollTo(tmp, false);
            }
            const result = sharedValue.set(Date.now());
          }, items);
          const effect = memo.useEffect(() => {
            const current = animatedRef.current;
            if (null != current) {
              current.reset();
            }
          }, items1);
          const animatedScrollHandler = sources(onEndReached[4]).useAnimatedScrollHandler(obj1);
          return {
            ref: animatedRef,
            onScroll: sources(onEndReached[4]).useAnimatedScrollHandler(obj1),
            onContentSizeChange: callback,
            useItemVisible: memo.useCallback((index) => {
              let closure_0 = index;
              const tmp = onEndReachedThreshold(memo.useState(index === memo.get()), 2);
              const width = tmp2;
              let obj = sources(onEndReached[4]);
              const fn = function o() { ... };
              fn.__closure = { index, selectedIndex: memo };
              fn.__workletHash = 16337538404179;
              fn.__initData = outer4_33;
              const fn2 = function l() { ... };
              obj = { runOnJS: sources(onEndReached[4]).runOnJS, setVisible: tmp2 };
              fn2.__closure = obj;
              fn2.__workletHash = 17035713313425;
              fn2.__initData = outer4_34;
              const animatedReaction = obj.useAnimatedReaction(fn, fn2);
              return tmp[0];
            }, [])
          };
        },
        onEndReached,
        onEndReachedThreshold
      };
    })({ sources: arr, animProps: memo, thumbnailScrollPositions: items, onEndReached, onEndReachedThreshold });
  }, items1);
};
