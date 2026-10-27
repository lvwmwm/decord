// Module ID: 8782
// Function ID: 8783
// Name: useMediaViewerSyncer
// Dependencies: [32, 19, 8783, 1381, 8753, 5053, 8784, 1630, 8785, 8757, 5248, 8786, 558, 576, 2]

// Module 8782 (useMediaViewerSyncer)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5053 */;
import spring from "spring" /* 5248 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8753 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8757 */;
import portraitThumbnailHelpers from "portraitThumbnailHelpers" /* 8785 */;
import resolveSelectedIndex from "resolveSelectedIndex" /* 8786 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 8783 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function makeMediaViewerSyncer(sources) {
  let __initData10;
  let __initData11;
  let __initData12;
  let __initData13;
  let __initData14;
  let __initData15;
  let __initData16;
  let __initData17;
  let __initData18;
  let __initData19;
  let __initData20;
  let __initData6;
  let __initData7;
  let __initData8;
  let __initData9;
  let _false;
  let _undefined;
  let animProps;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let onEndReached;
  let onEndReachedThreshold;
  let thumbnailScrollPositions;
  let zoomed;
  sources = sources.sources;
  ({ animProps, thumbnailScrollPositions } = sources);
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  zoomed = undefined;
  function onSelectedIndexChange() {
    const obj = swipeSource;
    if ("thumbnails" === swipeSource.get()) {
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      MediaViewerAnalytics.markActionPerformed(MediaViewerAnalyticsManager.IncrementableMediaViewerActions.THUMBNAIL_SWIPE);
    } else if ("viewer" === obj.get()) {
      const MediaViewerAnalytics3 = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      MediaViewerAnalytics3.markActionPerformed(MediaViewerAnalyticsManager.IncrementableMediaViewerActions.VIEWER_SWIPE);
    }
    const MediaViewerAnalytics2 = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    MediaViewerAnalytics2.markActionPerformed(MediaViewerAnalyticsManager.IncrementableMediaViewerActions.SELECTED_ITEM_CHANGE);
  }
  let selectedIndex = animProps.selectedIndex;
  ({ thumbnailsIndex: c3, thumbnailsScrolling: c4, thumbnailsAnimateTo: c5, viewerPos: c6, viewerScrolling: c7, zoomed } = animProps);
  const swipeSource = animProps.swipeSource;
  let c11 = false;
  ({ onEndReached, onEndReachedThreshold } = sources);
  if (thumbnailScrollPositions.length > 0) {
    const end = thumbnailScrollPositions[0].end;
    const start = thumbnailScrollPositions[0].start;
  }
  let obj = {
    index: selectedIndex,
    sources,
    zoomed,
    thumbnailScrollPositions,
    variableWidthThumbnailsEnabled: false,
    useThumbnailsProps(onSelect, maxIndex) {
      let THUMBNAIL_MIN_WIDTH;
      let derivedValue2;
      let diff1;
      let fn;
      let mapped;
      let mapped1;
      sources = onSelect;
      thumbnailScrollPositions = maxIndex;
      let obj = sources(selectedIndex[5]);
      const animatedRef = obj.useAnimatedRef();
      let obj2 = sources(selectedIndex[6]);
      size = obj2.useMediaViewerDimensions();
      let width = size.width;
      const height = size.height;
      const rect = thumbnailScrollPositions(selectedIndex[7])();
      let obj3 = { onBeginDrag: R, onEndDrag: V, onScroll: E, onMomentumBegin: P, onMomentumEnd: fn };
      const tmp2 = sources(selectedIndex[5]);
      class R {
        constructor() {
          const result = mapped1.set(2 | mapped1.get());
          const result1 = swipeSource.set("thumbnails");
        }
      }
      let obj4 = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2, swipeSource };
      R.__closure = obj4;
      R.__workletHash = 16224520186325;
      R.__initData = _false;
      class V {
        constructor() {
          const result = mapped1.set(-3 & mapped1.get());
        }
      }
      V.__closure = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2 };
      V.__workletHash = 5779899826871;
      V.__initData = __initData;
      class E {
        constructor(contentOffset) {
          const result = contentOffset.contentOffset.x / onSelect;
          const obj = swipeSource;
          if ("thumbnails" === swipeSource.get()) {
            const _Math3 = Math;
            const _Math4 = Math;
            const _Math5 = Math;
            const result1 = mapped.set(Math.max(0, Math.min(Math.round(result), maxIndex)));
          } else {
            const _Math = Math;
            const _Math2 = Math;
          }
          if (derivedValue2.get() >= 0) {
            const value = mapped.get();
            const obj4 = mapped;
            if (value === derivedValue2.get()) {
              const result2 = obj2.set(-1);
              const result3 = selectedIndex.set(obj4.get());
            }
          } else {
            const tmp8 = 0 !== diff1.get() || 0 !== mapped1.get();
            let tmp9 = "thumbnails" === obj.get() && tmp8;
            if (tmp9) {
              const value2 = mapped.get();
              tmp9 = value2 !== selectedIndex.get();
            }
            if (tmp9) {
              const result4 = selectedIndex.set(mapped.get());
              const obj3 = ReanimatedRexport;
              obj3.runOnJS(onSelectedIndexChange)();
            }
          }
        }
      }
      let obj5 = { variableWidthThumbnailsEnabled: _false, thumbnailScrollPositions, thumbnailSize: onSelect, swipeSource, maxIndex, thumbnailsIndex: mapped, thumbnailsAnimateTo: derivedValue2, selectedIndex: animatedRef, viewerScrolling: diff1, thumbnailsScrolling: mapped1, runOnJS: sources(selectedIndex[5]).runOnJS, onSelectedIndexChange };
      const useAnimatedScrollHandler = tmp2.useAnimatedScrollHandler;
      E.__closure = obj5;
      E.__workletHash = 6212589685153;
      E.__initData = __initData2;
      class P {
        constructor() {
          const result = mapped1.set(4 | mapped1.get());
          const result1 = swipeSource.set("thumbnails");
        }
      }
      P.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4, swipeSource };
      P.__workletHash = 4138169755088;
      P.__initData = __initData3;
      fn = function h() {
        const result = mapped1.set(-5 & mapped1.get());
      };
      fn.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4 };
      fn.__workletHash = 1471443652144;
      fn.__initData = __initData4;
      let items = [animatedRef];
      const animatedScrollHandler = useAnimatedScrollHandler(obj3);
      const callback = thumbnailsScrolling.useCallback((arg0) => {
        if (!THUMBNAIL_MIN_WIDTH.get()) {
          const result = derivedValue2.set(arg0);
          const result1 = swipeSource.set("thumbnails");
        }
      }, []);
      const callback1 = thumbnailsScrolling.useCallback((arg0) => {
        const scrollStart = thumbnailScrollPositions[arg0].scrollStart;
        const obj = ReanimatedRexport;
        obj.scrollTo(animatedRef, scrollStart, 0, true);
      }, items);
      const obj6 = sources(selectedIndex[5]);
      class L {
        constructor() {
          const obj = derivedValue2;
          if (derivedValue2.get() >= 0) {
            const obj2 = ReanimatedRexport;
            obj2.scrollTo(animatedRef, obj.get() * onSelect, 0, true);
          }
        }
      }
      L.__closure = { thumbnailsAnimateTo: derivedValue2, variableWidthThumbnailsEnabled: _false, runOnJS: sources(selectedIndex[5]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
      L.__workletHash = 1697086875584;
      L.__initData = __initData5;
      ({ thumbnailsAnimateTo: derivedValue2, variableWidthThumbnailsEnabled: _false, runOnJS: sources(selectedIndex[5]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect });
      let derivedValue = obj6.useDerivedValue(L);
      let items1 = [animatedRef];
      const callback2 = thumbnailsScrolling.useCallback((arg0) => {
        const obj = portraitThumbnailHelpers;
        const result = obj.lerpVarWidthThumbnailScrollBounds(thumbnailScrollPositions, arg0);
        const obj2 = ReanimatedRexport;
        obj2.scrollTo(animatedRef, result, 0, false);
      }, items1);
      const obj8 = sources(selectedIndex[5]);
      class B {
        constructor() {
          let tmp = 0 !== diff1.get();
          if (tmp) {
            const value = mapped.get();
            tmp = value !== viewerPos.get();
          }
          if (tmp) {
            const obj = ReanimatedRexport;
            obj.scrollTo(animatedRef, viewerPos.get() * onSelect, 0, false);
          }
        }
      }
      B.__closure = { viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos, variableWidthThumbnailsEnabled: _false, runOnJS: sources(selectedIndex[5]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
      B.__workletHash = 10477949154269;
      B.__initData = __initData6;
      ({ viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos, variableWidthThumbnailsEnabled: _false, runOnJS: sources(selectedIndex[5]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect });
      let derivedValue1 = obj8.useDerivedValue(B);
      mapped = sources.map((item, index) => index);
      mapped1 = sources.map((item) => {
        const obj = onSelect(animatedRef[9]);
        size = obj.flattenSource(item);
        let num = 0;
        if (null != size) {
          const _Math = Math;
          const _Math2 = Math;
          num = (Math.max(Math.min(size.width * (diff / size.height), diff1), THUMBNAIL_MIN_WIDTH) - THUMBNAIL_MIN_WIDTH) / 2;
        }
        return num;
      });
      const obj10 = sources(selectedIndex[5]);
      class J {
        constructor() {
          let num = 0;
          if (mapped1.get() <= 0) {
            const obj = ReanimatedRexport;
            num = -obj.interpolate(viewerPos.get(), mapped, mapped1, "clamp");
          }
          return num;
        }
      }
      J.__closure = { thumbnailsScrolling: mapped1, interpolate: sources(selectedIndex[5]).interpolate, viewerPos, interpolateInput: mapped, interpolateOutput: mapped1 };
      J.__workletHash = 10097839523885;
      J.__initData = __initData7;
      ({ thumbnailsScrolling: mapped1, interpolate: sources(selectedIndex[5]).interpolate, viewerPos, interpolateInput: mapped, interpolateOutput: mapped1 });
      derivedValue2 = obj10.useDerivedValue(J);
      const diff = (width - onSelect) / 2 - rect.left;
      viewerPos = diff;
      const obj12 = sources(selectedIndex[5]);
      class X {
        constructor() {
          let width;
          if (diff1.get() > 0) {
            width = diff + derivedValue2.get();
          } else {
            const obj = spring;
            width = obj.withSpring(diff + derivedValue2.get(), { overshootClamping: true });
          }
          return { width };
        }
      }
      X.__closure = { viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: sources(selectedIndex[10]).withSpring };
      X.__workletHash = 11328769587377;
      X.__initData = __initData8;
      ({ viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: sources(selectedIndex[10]).withSpring });
      diff1 = (width - onSelect) / 2 - rect.right;
      const animatedStyle = obj12.useAnimatedStyle(X);
      const obj14 = sources(selectedIndex[5]);
      class F {
        constructor() {
          let width;
          if (diff1.get() > 0) {
            width = diff1 + derivedValue2.get();
          } else {
            const obj = spring;
            width = obj.withSpring(diff1 + derivedValue2.get(), { overshootClamping: true });
          }
          return { width };
        }
      }
      F.__closure = { viewerScrolling: diff1, footerBufferSize: diff1, margin: derivedValue2, withSpring: sources(selectedIndex[10]).withSpring };
      F.__workletHash = 10532164558483;
      F.__initData = __initData9;
      ({ viewerScrolling: diff1, footerBufferSize: diff1, margin: derivedValue2, withSpring: sources(selectedIndex[10]).withSpring });
      const animatedStyle1 = obj14.useAnimatedStyle(F);
      const callback3 = thumbnailsScrolling.useCallback((width, index) => {
        let height;
        onSelect = index;
        let obj = onSelect(animatedRef[5]);
        const fn = function i() {
          const items = [index - 1, index, index + 1];
          const obj = sources(selectedIndex[5]);
          return obj.interpolate(diff.get(), items, [0.4, 1, 0.4], "clamp");
        };
        fn.__closure = { interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index };
        fn.__workletHash = 5784737783661;
        fn.__initData = __initData;
        ({ interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index });
        const derivedValue = obj.useDerivedValue(fn);
        const bound = Math.max(Math.min(width.width * (diff / width.height), diff1), THUMBNAIL_MIN_WIDTH);
        const fn2 = function o() {
          let interpolateResult;
          if (mapped1.get() > 0) {
            interpolateResult = zoomed;
          } else {
            const items = [index - 1, index, index + 1];
            const items1 = [zoomed, bound, zoomed];
            const obj = sources(selectedIndex[5]);
            interpolateResult = obj.interpolate(diff.get(), items, items1, "clamp");
          }
          return interpolateResult;
        };
        const obj3 = onSelect(animatedRef[5]);
        fn2.__closure = { thumbnailsScrolling: mapped1, THUMBNAIL_MIN_WIDTH, interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index, sourceWidth: bound };
        fn2.__workletHash = 12440745987072;
        fn2.__initData = __initData2;
        ({ thumbnailsScrolling: mapped1, THUMBNAIL_MIN_WIDTH, interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index, sourceWidth: bound });
        const derivedValue1 = obj3.useDerivedValue(fn2);
        const fn3 = function u() {
          let withSpringResult;
          if (diff1.get() > 0) {
            withSpringResult = derivedValue1.get();
          } else {
            const obj = sources(selectedIndex[10]);
            withSpringResult = obj.withSpring(derivedValue1.get(), { overshootClamping: true });
          }
          size = { width: withSpringResult, height, opacity: derivedValue.get() };
          return size;
        };
        const obj5 = onSelect(animatedRef[5]);
        fn3.__closure = { viewerScrolling: diff1, _width: derivedValue1, withSpring: onSelect(animatedRef[10]).withSpring, THUMBNAIL_HEIGHT: diff, opacity: derivedValue };
        fn3.__workletHash = 513826663139;
        fn3.__initData = __initData3;
        ({ viewerScrolling: diff1, _width: derivedValue1, withSpring: onSelect(animatedRef[10]).withSpring, THUMBNAIL_HEIGHT: diff, opacity: derivedValue });
        return obj5.useAnimatedStyle(fn3);
      }, []);
      let fn2 = function q() {
        return !THUMBNAIL_MIN_WIDTH.get();
      };
      const obj17 = { zoomed };
      fn2.__closure = obj17;
      fn2.__workletHash = 7667674289153;
      fn2.__initData = __initData10;
      const obj16 = sources(selectedIndex[5]);
      const obj18 = {
        ref: animatedRef,
        headerBufferStyle: animatedStyle,
        headerBufferSize: diff,
        footerBufferStyle: animatedStyle1,
        footerBufferSize: diff1,
        scrollEnabled: obj16.useDerivedValue(fn2),
        onScroll: animatedScrollHandler,
        onSelect: callback,
        useThumbnailStyle: callback3,
        screenWidth: width,
        screenHeight: height,
        itemSize(arg0, arg1) {
          return swipeSource;
        }
      };
      return obj18;
    },
    useViewerProps(isMediaViewerImprovementsEnabled) {
      let fn7;
      let maxIndex;
      let thumbnailsAnimateTo;
      let viewerScrolling;
      let flag = isMediaViewerImprovementsEnabled;
      if (isMediaViewerImprovementsEnabled === undefined) {
        flag = false;
      }
      let sharedValue;
      thumbnailsScrolling = undefined;
      let memo;
      let isSpuriousContentSizeReset;
      let obj = sources(selectedIndex[5]);
      const animatedRef = obj.useAnimatedRef();
      let obj2 = sources(selectedIndex[6]);
      size = obj2.useMediaViewerDimensions();
      const width = size.width;
      const height = size.height;
      let obj3 = sources(selectedIndex[5]);
      let fn = function l() {
        const tmp = flag || -1 === thumbnailsAnimateTo.get();
        if (!tmp) {
          const obj = ReanimatedRexport;
          obj.scrollTo(animatedRef, thumbnailsAnimateTo.get() * width, 0, false);
        }
      };
      fn.__closure = { gesturePagerEnabled: flag, thumbnailsAnimateTo: memo, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, screenWidth: width };
      fn.__workletHash = 2613111977339;
      fn.__initData = __initData11;
      ({ gesturePagerEnabled: flag, thumbnailsAnimateTo: memo, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, screenWidth: width });
      const derivedValue = obj3.useDerivedValue(fn);
      let fn2 = function s() {
        const tmp = flag || 0 === maxIndex.get() || viewerScrolling.get() > 0 || -1 !== thumbnailsAnimateTo.get();
        if (!tmp) {
          const obj = ReanimatedRexport;
          obj.scrollTo(animatedRef, sharedValue.get() * width, 0, false);
        }
      };
      const obj5 = sources(selectedIndex[5]);
      fn2.__closure = { gesturePagerEnabled: flag, thumbnailsScrolling, viewerScrolling: isSpuriousContentSizeReset, thumbnailsAnimateTo: memo, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailsIndex: sharedValue, screenWidth: width };
      fn2.__workletHash = 14956555189814;
      fn2.__initData = __initData12;
      ({ gesturePagerEnabled: flag, thumbnailsScrolling, viewerScrolling: isSpuriousContentSizeReset, thumbnailsAnimateTo: memo, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailsIndex: sharedValue, screenWidth: width });
      const derivedValue1 = obj5.useDerivedValue(fn2);
      const obj7 = sources(selectedIndex[5]);
      sharedValue = obj7.useSharedValue(width.get());
      let fn3 = function b() {
        return width.get();
      };
      fn3.__closure = { selectedIndex: width };
      fn3.__workletHash = 8868337511821;
      fn3.__initData = __initData13;
      let fn4 = function f(arg0) {
        return sharedValue.set(arg0);
      };
      fn4.__closure = { pagerIndex: sharedValue };
      fn4.__workletHash = 493937534680;
      fn4.__initData = __initData14;
      const obj8 = sources(selectedIndex[5]);
      let animatedReaction = obj8.useAnimatedReaction(fn3, fn4);
      let fn5 = function x() {
        return memo.get();
      };
      fn5.__closure = { thumbnailsAnimateTo: memo };
      fn5.__workletHash = 2755126692038;
      fn5.__initData = __initData15;
      const fn6 = function w(arg0, arg1) {
        const tmp = null !== arg1 && -1 !== arg0;
        if (tmp) {
          const result = sharedValue.set(arg0);
        }
      };
      fn6.__closure = { pagerIndex: sharedValue };
      fn6.__workletHash = 12394178261965;
      fn6.__initData = __initData16;
      const obj9 = sources(selectedIndex[5]);
      const animatedReaction1 = obj9.useAnimatedReaction(fn5, fn6);
      const diff = flag.length - 1;
      thumbnailsScrolling = diff;
      const items = [flag, diff, sharedValue, width];
      memo = thumbnailsScrolling.useMemo(() => {
        let fn;
        let fn2;
        let fn3;
        let fn4;
        let fn5;
        let obj = { onBeginDrag: fn, onEndDrag: fn2, onScroll: fn3, onMomentumBegin: fn4, onMomentumEnd: fn5 };
        fn = function s() {
          const result = isSpuriousContentSizeReset.set(2 | isSpuriousContentSizeReset.get());
          const result1 = swipeSource.set("viewer");
          const tmp3 = flag;
          if (tmp3) {
            const result2 = memo.set(-1);
          }
        };
        let obj2 = { viewerScrolling, SCROLLING_DRAG: 2, swipeSource, gesturePagerEnabled: flag, thumbnailsAnimateTo };
        fn.__closure = obj2;
        fn.__workletHash = 8518089138784;
        fn.__initData = __initData;
        fn2 = function l() {
          const result = viewerScrolling.set(-3 & viewerScrolling.get());
        };
        fn2.__closure = { viewerScrolling, SCROLLING_DRAG: 2 };
        fn2.__workletHash = 16302777003905;
        fn2.__initData = __initData2;
        fn3 = function i(offsetX) {
          const result = sharedValue1.set(offsetX / closure_1_2);
          const tmp = closure_1_2;
          if ("viewer" === swipeSource.get()) {
            const obj2 = { offsetX, pageSize: tmp, maxIndex };
            const obj3 = sources(selectedIndex[11]);
            const tmp10 = selectedIndex;
            selectedIndex = obj3.resolveSelectedIndex(obj2);
            const tmp9 = sources;
            if (null != selectedIndex) {
              const tmp3 = flag;
              if (tmp3) {
                const result1 = sharedValue.set(selectedIndex);
              }
              const obj = width;
              if (width.get() !== selectedIndex) {
                const result2 = obj.set(selectedIndex);
                const tmp9Result = tmp9(tmp10[5]);
                tmp9Result.runOnJS(onSelectedIndexChange)();
              }
            }
          }
        };
        let obj3 = { viewerPos, screenWidth: width, swipeSource, resolveSelectedIndex: resolveSelectedIndex.resolveSelectedIndex, maxIndex, gesturePagerEnabled: flag, pagerIndex: sharedValue, selectedIndex, runOnJS: ReanimatedRexport.runOnJS, onSelectedIndexChange };
        fn3.__closure = obj3;
        fn3.__workletHash = 11551682753261;
        fn3.__initData = __initData3;
        fn4 = function n() {
          const result = viewerScrolling.set(4 | viewerScrolling.get());
          const result1 = closure_1_9.set("viewer");
        };
        fn4.__closure = { viewerScrolling, SCROLLING_MOMENTUM: 4, swipeSource };
        fn4.__workletHash = 16196642042435;
        fn4.__initData = __initData4;
        fn5 = function t() {
          const result = viewerScrolling.set(-5 & viewerScrolling.get());
        };
        fn5.__closure = { viewerScrolling, SCROLLING_MOMENTUM: 4 };
        fn5.__workletHash = 9245618526500;
        fn5.__initData = __initData5;
        return obj;
      }, items);
      const obj10 = sources(selectedIndex[5]);
      const sharedValue1 = obj10.useSharedValue(0);
      isSpuriousContentSizeReset = function isSpuriousContentSizeReset(arg0) {
        let tmp = closure_10;
        if (tmp) {
          const _Date = Date;
          const timestamp = Date.now();
          tmp = timestamp - sharedValue1.get() < 500;
        }
        if (tmp) {
          tmp = 0 === arg0;
        }
        if (tmp) {
          tmp = 0 !== selectedIndex.get();
        }
        return tmp;
      };
      const obj11 = { IS_ANDROID: onSelectedIndexChange, contentSizeLastChangedAt: sharedValue1, selectedIndex: width };
      isSpuriousContentSizeReset.__closure = obj11;
      isSpuriousContentSizeReset.__workletHash = 15250440053717;
      isSpuriousContentSizeReset.__initData = __initData17;
      let tmp10 = sources(selectedIndex[5]);
      const obj12 = { onBeginDrag: memo.onBeginDrag, onEndDrag: M, onScroll: fn7, onMomentumBegin: memo.onMomentumBegin, onMomentumEnd: I };
      class M {
        constructor(contentOffset) {
          memo.onEndDrag();
          memo.onScroll(contentOffset.contentOffset.x);
        }
      }
      M.__closure = { onScrollWorklets: memo };
      M.__workletHash = 9872882137515;
      M.__initData = __initData18;
      fn7 = function v(contentOffset) {
        if (typeof isSpuriousContentSizeReset === "function") {
          let tmp2 = closure_10;
          if (tmp2) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp2 = timestamp - sharedValue1.get() < 500;
          }
          if (tmp2) {
            tmp2 = 0 === tmp;
          }
          if (tmp2) {
            tmp2 = 0 !== selectedIndex.get();
          }
          if (tmp2) {
            const obj = ReanimatedRexport;
            obj.scrollTo(animatedRef, selectedIndex.get() * width, contentOffset.contentOffset.y, false);
          } else {
            const tmp8 = 0 === viewerScrolling.get() && 0 === maxIndex.get() && -1 === thumbnailsAnimateTo.get();
            if (!tmp8) {
              memo.onScroll(contentOffset.contentOffset.x);
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      const useAnimatedScrollHandler = tmp10.useAnimatedScrollHandler;
      fn7.__closure = { isSpuriousContentSizeReset, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, selectedIndex: width, screenWidth: width, viewerScrolling: isSpuriousContentSizeReset, thumbnailsScrolling, thumbnailsAnimateTo: memo, onScrollWorklets: memo };
      fn7.__workletHash = 11837192464005;
      fn7.__initData = __initData19;
      ({ isSpuriousContentSizeReset, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, selectedIndex: width, screenWidth: width, viewerScrolling: isSpuriousContentSizeReset, thumbnailsScrolling, thumbnailsAnimateTo: memo, onScrollWorklets: memo });
      class I {
        constructor(contentOffset) {
          if (typeof isSpuriousContentSizeReset === "function") {
            let tmp2 = closure_10;
            if (tmp2) {
              const _Date = Date;
              const timestamp = Date.now();
              tmp2 = timestamp - sharedValue1.get() < 500;
            }
            if (tmp2) {
              tmp2 = 0 === tmp;
            }
            if (tmp2) {
              tmp2 = 0 !== selectedIndex.get();
            }
            if (!tmp2) {
              memo.onScroll(contentOffset.contentOffset.x);
            }
            memo.onMomentumEnd();
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      I.__closure = { isSpuriousContentSizeReset, onScrollWorklets: memo };
      I.__workletHash = 17580250323854;
      I.__initData = __initData20;
      const items1 = [animatedRef, width, sharedValue1];
      const items2 = [width, height, animatedRef];
      const animatedScrollHandler = useAnimatedScrollHandler(obj12);
      const callback = thumbnailsScrolling.useCallback(() => {
        const current = animatedRef.current;
        if (current != null) {
          current.scrollTo(tmp, false);
        }
        const result = sharedValue1.set(Date.now());
      }, items1);
      const effect = thumbnailsScrolling.useEffect(() => {
        const current = animatedRef.current;
        if (current != null) {
          current.reset();
        }
      }, items2);
      const obj14 = {
        ref: animatedRef,
        onScroll: animatedScrollHandler,
        onScrollWorklets: memo,
        pagerIndex: sharedValue,
        onContentSizeChange: callback,
        useItemVisible: thumbnailsScrolling.useCallback((index) => {
          let closure_0 = index;
          let tmp = sharedValue(maxIndex.useState(index === width.get()), 2);
          let closure_1 = tmp3;
          const first = tmp[0];
          let obj = flag(width[5]);
          const fn = function l() {
            return index === width.get();
          };
          fn.__closure = { index, selectedIndex: width };
          fn.__workletHash = 4782151967479;
          fn.__initData = __initData6;
          const fn2 = function o(arg0, arg1) {
            const tmp = null != arg1 && arg1 !== arg0;
            if (tmp) {
              const obj = sources(selectedIndex[5]);
              obj.runOnJS(closure_1)(arg0);
            }
          };
          fn2.__closure = { runOnJS: flag(width[5]).runOnJS, setVisible: tmp[1] };
          fn2.__workletHash = 9343933858295;
          fn2.__initData = __initData7;
          ({ runOnJS: flag(width[5]).runOnJS, setVisible: tmp[1] });
          const animatedReaction = obj.useAnimatedReaction(fn, fn2);
          return first;
        }, [])
      };
      return obj14;
    },
    onEndReached,
    onEndReachedThreshold
  };
  return obj;
}
function buildThumbnailScrollPositions(sources) {
  const items = [];
  let num = 0;
  let num2 = 0;
  if (0 < sources.length) {
    do {
      let tmp6;
      let obj = MediaSourceUtil;
      size = obj.flattenSource(sources[num]);
      if (null != size) {
        let _Math = Math;
        let _Math2 = Math;
        let sum = num2 + (Math.max(Math.min(size.width * (metroRequire / size.height), metroImportDefault), metroImportAll) + 2 * hasOwnProperty);
        let num3 = 0;
        if (0 !== num) {
          let _Math3 = Math;
          num3 = Math.floor(num2 + (sum - num2 - (items[0].end - items[0].start)) / 2);
        }
        let obj2 = { start: num2, end: sum, scrollStart: num3 };
        let arr = items.push(obj2);
        tmp6 = sum;
      } else {
        let obj3 = { start: num2, end: num2, scrollStart: num2 };
        let arr3 = items.push(obj3);
        tmp6 = num2;
      }
      num = num + 1;
      num2 = tmp6;
    } while (num < sources.length);
  }
  return items;
}
({ THUMBNAIL_MARGIN: hasOwnProperty, THUMBNAIL_HEIGHT: metroRequire, THUMBNAIL_MAX_WIDTH: metroImportDefault, THUMBNAIL_MIN_WIDTH: metroImportAll, THUMBNAIL_WIDTH_MARGIN: c9 } = Constants);
let closure_10 = PlatformUtils.isAndroid();
let closure_11 = { code: "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}" };
let closure_12 = { code: "function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}" };
let closure_13 = { code: "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(swipeSource.get()==='thumbnails'&&wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}" };
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
let closure_25 = { code: "function useMediaViewerSyncerTsx16(){const{gesturePagerEnabled,thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(gesturePagerEnabled||thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}" };
let closure_26 = { code: "function useMediaViewerSyncerTsx17(){const{gesturePagerEnabled,thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(gesturePagerEnabled||thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}" };
let closure_27 = { code: "function useMediaViewerSyncerTsx18(){const{selectedIndex}=this.__closure;return selectedIndex.get();}" };
let closure_28 = { code: "function useMediaViewerSyncerTsx19(index){const{pagerIndex}=this.__closure;return pagerIndex.set(index);}" };
let closure_29 = { code: "function useMediaViewerSyncerTsx20(){const{thumbnailsAnimateTo}=this.__closure;return thumbnailsAnimateTo.get();}" };
let closure_30 = { code: "function useMediaViewerSyncerTsx21(target,previous){const{pagerIndex}=this.__closure;if(previous!==null&&target!==-1)pagerIndex.set(target);}" };
let closure_31 = { code: "function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_DRAG,swipeSource,gesturePagerEnabled,thumbnailsAnimateTo}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');if(gesturePagerEnabled)thumbnailsAnimateTo.set(-1);}" };
let closure_32 = { code: "function useMediaViewerSyncerTsx23(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}" };
let closure_33 = { code: "function useMediaViewerSyncerTsx24(offsetX){const{viewerPos,screenWidth,swipeSource,resolveSelectedIndex,maxIndex,gesturePagerEnabled,pagerIndex,selectedIndex,runOnJS,onSelectedIndexChange}=this.__closure;viewerPos.set(offsetX/screenWidth);if(swipeSource.get()!=='viewer')return;const nearest=resolveSelectedIndex({offsetX:offsetX,pageSize:screenWidth,maxIndex:maxIndex});if(nearest==null)return;if(gesturePagerEnabled)pagerIndex.set(nearest);if(selectedIndex.get()===nearest)return;selectedIndex.set(nearest);runOnJS(onSelectedIndexChange)();}" };
let closure_34 = { code: "function useMediaViewerSyncerTsx25(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}" };
let closure_35 = { code: "function useMediaViewerSyncerTsx26(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}" };
let closure_36 = { code: "function isSpuriousContentSizeReset_useMediaViewerSyncerTsx27(offsetX){const{IS_ANDROID,contentSizeLastChangedAt,selectedIndex}=this.__closure;return IS_ANDROID&&Date.now()-contentSizeLastChangedAt.get()<500&&offsetX===0&&selectedIndex.get()!==0;}" };
let closure_37 = { code: "function useMediaViewerSyncerTsx28(event){const{onScrollWorklets}=this.__closure;onScrollWorklets.onEndDrag();onScrollWorklets.onScroll(event.contentOffset.x);}" };
let closure_38 = { code: "function useMediaViewerSyncerTsx29(event){const{isSpuriousContentSizeReset,scrollTo,ref,selectedIndex,screenWidth,viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,onScrollWorklets}=this.__closure;if(isSpuriousContentSizeReset(event.contentOffset.x)){scrollTo(ref,selectedIndex.get()*screenWidth,event.contentOffset.y,false);return;}if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;onScrollWorklets.onScroll(event.contentOffset.x);}" };
let closure_39 = { code: "function useMediaViewerSyncerTsx30(event){const{isSpuriousContentSizeReset,onScrollWorklets}=this.__closure;if(!isSpuriousContentSizeReset(event.contentOffset.x)){onScrollWorklets.onScroll(event.contentOffset.x);}onScrollWorklets.onMomentumEnd();}" };
let closure_40 = { code: "function useMediaViewerSyncerTsx31(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}" };
let closure_41 = { code: "function useMediaViewerSyncerTsx32(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaViewerSyncer(arg0) {
  let initialIndex;
  let onEndReached;
  let onEndReachedThreshold;
  let sources;
  let tmp4;
  let tmpResult;
  let tmpResult10;
  let tmpResult11;
  let tmpResult12;
  let tmpResult13;
  let tmpResult14;
  let tmpResult8;
  let tmpResult9;
  const obj = react2;
  const cResult = obj.c(7);
  ({ sources, initialIndex, onEndReached, onEndReachedThreshold } = arg0);
  if (cResult[0] !== initialIndex) {
    const obj2 = { selectedIndex: tmpResult.makeMutable(initialIndex), thumbnailsIndex: tmpResult8.makeMutable(initialIndex), thumbnailsScrolling: tmpResult9.makeMutable(0), thumbnailsAnimateTo: tmpResult10.makeMutable(-1), viewerPos: tmpResult11.makeMutable(initialIndex), viewerScrolling: tmpResult12.makeMutable(0), zoomed: tmpResult13.makeMutable(false), swipeSource: tmpResult14.makeMutable(undefined) };
    tmpResult = ReanimatedRexport;
    tmpResult8 = ReanimatedRexport;
    tmpResult9 = ReanimatedRexport;
    tmpResult10 = ReanimatedRexport;
    tmpResult11 = ReanimatedRexport;
    tmpResult12 = ReanimatedRexport;
    tmpResult13 = ReanimatedRexport;
    cResult[0] = initialIndex;
    cResult[1] = obj2;
    tmp4 = obj2;
    tmpResult14 = ReanimatedRexport;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === onEndReached) {
      if (cResult[4] === onEndReachedThreshold) {
        let tmp5;
        if (cResult[5] === sources) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
    }
  }
  const obj3 = { sources, animProps: tmp4, thumbnailScrollPositions: buildThumbnailScrollPositions(sources), onEndReached, onEndReachedThreshold };
  const tmp6 = makeMediaViewerSyncer(obj3);
  cResult[2] = tmp4;
  cResult[3] = onEndReached;
  cResult[4] = onEndReachedThreshold;
  cResult[5] = sources;
  cResult[6] = tmp6;
  tmp5 = tmp6;
}) : (function useMediaViewerSyncer(sources) {
  sources = sources.sources;
  const initialIndex = sources.initialIndex;
  const onEndReached = sources.onEndReached;
  const onEndReachedThreshold = sources.onEndReachedThreshold;
  let memo;
  const items = [initialIndex];
  memo = memo.useMemo(() => {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    const obj = { selectedIndex: obj2.makeMutable(initialIndex), thumbnailsIndex: obj3.makeMutable(initialIndex), thumbnailsScrolling: obj4.makeMutable(0), thumbnailsAnimateTo: obj5.makeMutable(-1), viewerPos: obj6.makeMutable(initialIndex), viewerScrolling: obj7.makeMutable(0), zoomed: obj8.makeMutable(false), swipeSource: obj9.makeMutable(undefined) };
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    obj5 = ReanimatedRexport;
    obj6 = ReanimatedRexport;
    obj7 = ReanimatedRexport;
    obj8 = ReanimatedRexport;
    obj9 = ReanimatedRexport;
    return obj;
  }, items);
  const items1 = [sources, memo, onEndReached, onEndReachedThreshold];
  return memo.useMemo(() => {
    const obj = { sources, animProps: memo, thumbnailScrollPositions: buildThumbnailScrollPositions(sources), onEndReached, onEndReachedThreshold };
    return makeMediaViewerSyncer(obj);
  }, items1);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSyncer.tsx");

export const useMediaViewerSyncer = tmp3;
