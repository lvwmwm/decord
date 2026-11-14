// Module ID: 10193
// Function ID: 10194
// Name: useMediaViewerSyncer
// Dependencies: [32, 19, 10194, 1380, 8629, 1655, 10195, 1630, 1708, 10196, 8633, 5939, 5940, 10197, 2]
// Exports: useMediaViewerSyncer

// Module 10193 (useMediaViewerSyncer)
import _mod1655 from "module_1655" /* 1655 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8633 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 10194 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ THUMBNAIL_MARGIN: hasOwnProperty, THUMBNAIL_HEIGHT: metroRequire, THUMBNAIL_MAX_WIDTH: metroImportDefault, THUMBNAIL_MIN_WIDTH: metroImportAll, THUMBNAIL_WIDTH_MARGIN: c9 } = Constants);
let closure_10 = PlatformUtils.isAndroid();
let closure_11 = { code: "(function useMediaViewerSyncerTsx1(){let[thumbnailsScrolling,SCROLLING_DRAG,swipeSource]=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');})" };
let closure_12 = { code: "(function useMediaViewerSyncerTsx2(){let[thumbnailsScrolling,SCROLLING_DRAG]=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);})" };
let closure_13 = { code: "(function useMediaViewerSyncerTsx3(event){let[variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,scheduleOnRN,onSelectedIndexChange]=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(swipeSource.get()==='thumbnails'&&wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());scheduleOnRN(onSelectedIndexChange);}})" };
let closure_14 = { code: "(function useMediaViewerSyncerTsx4(){let[thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource]=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');})" };
let closure_15 = { code: "(function useMediaViewerSyncerTsx5(){let[thumbnailsScrolling,SCROLLING_MOMENTUM]=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);})" };
let closure_16 = { code: "(function useMediaViewerSyncerTsx6(){let[thumbnailsAnimateTo,variableWidthThumbnailsEnabled,scheduleOnRN,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize]=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){scheduleOnRN(scrollVarWidthThumbnails,thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}})" };
let closure_17 = { code: "(function useMediaViewerSyncerTsx7(){let[viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,scheduleOnRN,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize]=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){scheduleOnRN(lerpScrollVarWidthThumbnails,viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}})" };
let closure_18 = { code: "(function useMediaViewerSyncerTsx8(){let[thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput]=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');})" };
let closure_19 = { code: "(function useMediaViewerSyncerTsx9(){let[viewerScrolling,headerBufferSize,margin,withSpring,Reanimated3DefaultSpringConfig]=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{...Reanimated3DefaultSpringConfig,overshootClamping:true})};})" };
let closure_20 = { code: "(function useMediaViewerSyncerTsx10(){let[viewerScrolling,footerBufferSize,margin,withSpring,Reanimated3DefaultSpringConfig]=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{...Reanimated3DefaultSpringConfig,overshootClamping:true})};})" };
let closure_21 = { code: "(function useMediaViewerSyncerTsx11(){let[interpolate,viewerPos,index]=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');})" };
let closure_22 = { code: "(function useMediaViewerSyncerTsx13(){let[thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth]=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');})" };
let closure_23 = { code: "(function useMediaViewerSyncerTsx14(){let[viewerScrolling,_width,withSpring,Reanimated3DefaultSpringConfig,THUMBNAIL_HEIGHT,opacity]=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{...Reanimated3DefaultSpringConfig,overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};})" };
let closure_24 = { code: "(function useMediaViewerSyncerTsx15(){let[zoomed]=this.__closure;return!zoomed.get();})" };
let closure_25 = { code: "(function useMediaViewerSyncerTsx16(){let[gesturePagerEnabled,thumbnailsAnimateTo,scrollTo,ref,screenWidth]=this.__closure;if(gesturePagerEnabled||thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);})" };
let closure_26 = { code: "(function useMediaViewerSyncerTsx17(){let[gesturePagerEnabled,thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth]=this.__closure;if(gesturePagerEnabled||thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);})" };
let closure_27 = { code: "(function useMediaViewerSyncerTsx18(){let[selectedIndex]=this.__closure;return selectedIndex.get();})" };
let closure_28 = { code: "(function useMediaViewerSyncerTsx19(index){let[pagerIndex]=this.__closure;return pagerIndex.set(index);})" };
let closure_29 = { code: "(function useMediaViewerSyncerTsx20(){let[thumbnailsAnimateTo]=this.__closure;return thumbnailsAnimateTo.get();})" };
let closure_30 = { code: "(function useMediaViewerSyncerTsx21(target,previous){let[pagerIndex]=this.__closure;if(previous!==null&&target!==-1)pagerIndex.set(target);})" };
let closure_31 = { code: "(function useMediaViewerSyncerTsx22(){let[viewerScrolling,SCROLLING_DRAG,swipeSource,gesturePagerEnabled,thumbnailsAnimateTo]=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');if(gesturePagerEnabled)thumbnailsAnimateTo.set(-1);})" };
let closure_32 = { code: "(function useMediaViewerSyncerTsx23(){let[viewerScrolling,SCROLLING_DRAG]=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);})" };
let closure_33 = { code: "(function useMediaViewerSyncerTsx24(offsetX){let[viewerPos,screenWidth,swipeSource,resolveSelectedIndex,maxIndex,gesturePagerEnabled,pagerIndex,selectedIndex,scheduleOnRN,onSelectedIndexChange]=this.__closure;viewerPos.set(offsetX/screenWidth);if(swipeSource.get()!=='viewer')return;const nearest=resolveSelectedIndex({offsetX:offsetX,pageSize:screenWidth,maxIndex:maxIndex});if(nearest==null)return;if(gesturePagerEnabled)pagerIndex.set(nearest);if(selectedIndex.get()===nearest)return;selectedIndex.set(nearest);scheduleOnRN(onSelectedIndexChange);})" };
let closure_34 = { code: "(function useMediaViewerSyncerTsx25(){let[viewerScrolling,SCROLLING_MOMENTUM,swipeSource]=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');})" };
let closure_35 = { code: "(function useMediaViewerSyncerTsx26(){let[viewerScrolling,SCROLLING_MOMENTUM]=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);})" };
let closure_36 = { code: "(function isSpuriousContentSizeReset_useMediaViewerSyncerTsx27(offsetX){let[IS_ANDROID,contentSizeLastChangedAt,selectedIndex]=this.__closure;return IS_ANDROID&&Date.now()-contentSizeLastChangedAt.get()<500&&offsetX===0&&selectedIndex.get()!==0;})" };
let closure_37 = { code: "(function useMediaViewerSyncerTsx28(event){let[onScrollWorklets]=this.__closure;onScrollWorklets.onEndDrag();onScrollWorklets.onScroll(event.contentOffset.x);})" };
let closure_38 = { code: "(function useMediaViewerSyncerTsx29(event){let[isSpuriousContentSizeReset,scrollTo,ref,selectedIndex,screenWidth,viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,onScrollWorklets]=this.__closure;if(isSpuriousContentSizeReset(event.contentOffset.x)){scrollTo(ref,selectedIndex.get()*screenWidth,event.contentOffset.y,false);return;}if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;onScrollWorklets.onScroll(event.contentOffset.x);})" };
let closure_39 = { code: "(function useMediaViewerSyncerTsx30(event){let[isSpuriousContentSizeReset,onScrollWorklets]=this.__closure;if(!isSpuriousContentSizeReset(event.contentOffset.x)){onScrollWorklets.onScroll(event.contentOffset.x);}onScrollWorklets.onMomentumEnd();})" };
let closure_40 = { code: "(function useMediaViewerSyncerTsx31(){let[index,selectedIndex]=this.__closure;return index===selectedIndex.get();})" };
let closure_41 = { code: "(function useMediaViewerSyncerTsx32(result,previous){let[scheduleOnRN,setVisible]=this.__closure;if(previous==null||previous===result)return;scheduleOnRN(setVisible,result);})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSyncer.tsx");

export function useMediaViewerSyncer(sources) {
  sources = sources.sources;
  const initialIndex = sources.initialIndex;
  const onEndReached = sources.onEndReached;
  const onEndReachedThreshold = sources.onEndReachedThreshold;
  let memo;
  let items = [initialIndex];
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
    obj2 = _mod1655;
    obj3 = _mod1655;
    obj4 = _mod1655;
    obj5 = _mod1655;
    obj6 = _mod1655;
    obj7 = _mod1655;
    obj8 = _mod1655;
    obj9 = _mod1655;
    return obj;
  }, items);
  let items1 = [sources, memo, onEndReached, onEndReachedThreshold];
  return memo.useMemo(() => {
    let closure_129_3;
    let closure_129_4;
    let closure_129_5;
    let closure_129_6;
    let closure_129_7;
    let zoomed;
    const arr = sources;
    let items = [];
    let num = 0;
    let num2 = 0;
    if (0 < sources.length) {
      do {
        let tmp6;
        let tmp = require;
        let tmp2 = dependencyMap;
        let obj = MediaSourceUtil;
        size = obj.flattenSource(arr[num]);
        let tmp3 = num;
        let tmp4 = num2;
        if (null != size) {
          let _Math = Math;
          let _Math2 = Math;
          let tmp7 = metroRequire;
          let tmp8 = metroImportDefault;
          let tmp9 = metroImportAll;
          let tmp10 = hasOwnProperty;
          let sum = num2 + (Math.max(Math.min(size.width * (metroRequire / size.height), metroImportDefault), metroImportAll) + 2 * hasOwnProperty);
          let num3 = 0;
          if (0 !== num) {
            let _Math3 = Math;
            num3 = Math.floor(num2 + (sum - num2 - (items[0].end - items[0].start)) / 2);
          }
          let obj2 = { start: num2, end: sum, scrollStart: num3 };
          let arr2 = items.push(obj2);
          tmp6 = sum;
        } else {
          let obj3 = { start: num2, end: num2, scrollStart: num2 };
          let arr4 = items.push(obj3);
          tmp6 = num2;
        }
        num = num + 1;
        num2 = tmp6;
      } while (num < arr.length);
    }
    function onSelectedIndexChange() {
      const obj = swipeSource;
      if ("thumbnails" === swipeSource.get()) {
        const MediaViewerAnalytics = sources(onEndReached[4]).MediaViewerAnalytics;
        MediaViewerAnalytics.markActionPerformed(sources(onEndReached[4]).IncrementableMediaViewerActions.THUMBNAIL_SWIPE);
      } else if ("viewer" === obj.get()) {
        const MediaViewerAnalytics3 = sources(onEndReached[4]).MediaViewerAnalytics;
        MediaViewerAnalytics3.markActionPerformed(sources(onEndReached[4]).IncrementableMediaViewerActions.VIEWER_SWIPE);
      }
      const MediaViewerAnalytics2 = sources(onEndReached[4]).MediaViewerAnalytics;
      MediaViewerAnalytics2.markActionPerformed(sources(onEndReached[4]).IncrementableMediaViewerActions.SELECTED_ITEM_CHANGE);
    }
    const selectedIndex = memo.selectedIndex;
    ({ thumbnailsIndex: closure_129_3, thumbnailsScrolling: closure_129_4, thumbnailsAnimateTo: closure_129_5, viewerPos: closure_129_6, viewerScrolling: closure_129_7, zoomed } = memo);
    const swipeSource = memo.swipeSource;
    let c11 = false;
    const tmp13 = onEndReached;
    let tmp14 = onEndReachedThreshold;
    if (items.length > 0) {
      let end = items[0].end;
      const start = items[0].start;
    }
    let obj4 = {
      index: selectedIndex,
      sources: arr,
      zoomed,
      thumbnailScrollPositions: items,
      variableWidthThumbnailsEnabled: false,
      useThumbnailsProps(useThumbnailStyle, arg1) {
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp19;
        let tmp20;
        let tmp21;
        let tmp22;
        let tmp23;
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
        let tmp43;
        let tmp44;
        let tmp45;
        let tmp46;
        let tmp47;
        let tmp48;
        let tmp49;
        let tmp50;
        let tmp55;
        let tmp56;
        let tmp57;
        let tmp58;
        let tmp59;
        let tmp60;
        let tmp61;
        let tmp62;
        let tmp63;
        let tmp64;
        let tmp69;
        let tmp7;
        let tmp70;
        let tmp71;
        let tmp72;
        let tmp73;
        let tmp74;
        let tmp78;
        let tmp79;
        let tmp8;
        let tmp80;
        let tmp81;
        let tmp82;
        let tmp83;
        let tmp87;
        let tmp88;
        let tmp89;
        let tmp9;
        let tmp90;
        let tmp91;
        let tmp92;
        let tmp95;
        let tmp96;
        let useMediaViewerSyncerTsx1;
        let useMediaViewerSyncerTsx2;
        let useMediaViewerSyncerTsx3;
        let useMediaViewerSyncerTsx4;
        let useMediaViewerSyncerTsx5;
        let tmp = arr;
        let tmp2 = selectedIndex;
        let obj = arr(selectedIndex[5]);
        const animatedRef = obj.useAnimatedRef();
        let obj2 = arr(selectedIndex[6]);
        size = obj2.useMediaViewerDimensions();
        let width = size.width;
        const height = size.height;
        const rect = items(selectedIndex[7])();
        const tmp4 = arr(selectedIndex[5]);
        items = [c11, , , ];
        let tmp5 = closure_4;
        items[1] = closure_4;
        items[2] = 2;
        const tmp6 = swipeSource;
        items[3] = swipeSource;
        [tmp7, tmp8, tmp9, tmp10] = items;
        let obj3 = { onBeginDrag: useMediaViewerSyncerTsx1, onEndDrag: useMediaViewerSyncerTsx2, onScroll: useMediaViewerSyncerTsx3, onMomentumBegin: useMediaViewerSyncerTsx4, onMomentumEnd: useMediaViewerSyncerTsx5 };
        useMediaViewerSyncerTsx1 = function useMediaViewerSyncerTsx1() {
          const result = _undefined.set(_undefined.get() | c1);
          const result1 = _undefined2.set("thumbnails");
        };
        let items1 = [tmp8, tmp9, tmp10];
        useMediaViewerSyncerTsx1.__closure = items1;
        useMediaViewerSyncerTsx1.__workletHash = 3578295959116;
        useMediaViewerSyncerTsx1.__initData = tmp7;
        let items2 = [closure_1_12, tmp5, 2];
        [tmp11, tmp12, tmp13] = items2;
        useMediaViewerSyncerTsx2 = function useMediaViewerSyncerTsx2() {
          const result = _undefined.set(_undefined.get() & ~c1);
        };
        let items3 = [tmp12, tmp13];
        useMediaViewerSyncerTsx2.__closure = items3;
        useMediaViewerSyncerTsx2.__workletHash = 5863096789454;
        useMediaViewerSyncerTsx2.__initData = tmp11;
        let items4 = [closure_1_13, , , , , , , , , , , , ];
        const tmp14 = c11;
        items4[1] = c11;
        const tmp15 = items;
        items4[2] = items;
        items4[3] = useThumbnailStyle;
        items4[4] = tmp6;
        items4[5] = arg1;
        items4[6] = closure_3;
        items4[7] = closure_5;
        items4[8] = selectedIndex;
        const tmp18 = closure_7;
        items4[9] = closure_7;
        items4[10] = tmp5;
        const tmp16 = closure_3;
        const tmp17 = closure_5;
        const useAnimatedScrollHandler = tmp4.useAnimatedScrollHandler;
        items4[11] = tmp(tmp2[8]).scheduleOnRN;
        items4[12] = onSelectedIndexChange;
        let c9;
        let c10;
        c11 = undefined;
        [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items4;
        useMediaViewerSyncerTsx3 = function useMediaViewerSyncerTsx3(contentOffset) {
          let end;
          let num;
          let scrollStart;
          const x = contentOffset.contentOffset.x;
          if (c0) {
            num = 0;
            if (x >= 0) {
              if (contentOffset.contentOffset.x >= _undefined[_undefined.length - 1].end) {
                num = arr.length - 1;
              } else {
                let num4 = 0;
                num = 0;
                if (0 < _undefined.length) {
                  while (true) {
                    let arr2 = _undefined;
                    scrollStart = _undefined[num4].scrollStart;
                    end = scrollStart;
                    if (num4 < _undefined.length - 1) {
                      end = arr2[num4 + 1].scrollStart;
                    }
                    if (num4 === arr2.length - 1) {
                      end = arr2[num4].end;
                    }
                    if (contentOffset.contentOffset.x >= scrollStart) {
                      if (contentOffset.contentOffset.x < end) {
                        break;
                      }
                    }
                    let sum = num4 + 1;
                    num4 = sum;
                    num = 0;
                  }
                  num = num4 + (contentOffset.contentOffset.x - scrollStart) / (end - scrollStart);
                }
              }
            }
          } else {
            num = x / c2;
          }
          const obj = _undefined2;
          if ("thumbnails" === _undefined2.get()) {
            const _Math3 = Math;
            const _Math4 = Math;
            const _Math5 = Math;
            const result = _undefined3.set(Math.max(0, Math.min(Math.round(num), c4)));
          } else {
            const _Math = Math;
            const _Math2 = Math;
          }
          if (_undefined4.get() >= 0) {
            const value = _undefined3.get();
            const obj3 = _undefined3;
            if (value === _undefined4.get()) {
              const result1 = obj2.set(-1);
              const result2 = _undefined5.set(obj3.get());
            }
          } else {
            const tmp10 = 0 !== _undefined6.get() || 0 !== _undefined7.get();
            let tmp11 = "thumbnails" === obj.get() && tmp10;
            if (tmp11) {
              const value2 = _undefined3.get();
              tmp11 = value2 !== _undefined5.get();
            }
            if (tmp11) {
              const result3 = _undefined5.set(_undefined3.get());
              _undefined8(c11);
            }
          }
        };
        let items5 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
        useMediaViewerSyncerTsx3.__closure = items5;
        useMediaViewerSyncerTsx3.__workletHash = 9053422816345;
        useMediaViewerSyncerTsx3.__initData = tmp19;
        const items6 = [closure_1_14, tmp5, 4, tmp6];
        [tmp32, tmp33, tmp34, tmp35] = items6;
        useMediaViewerSyncerTsx4 = function useMediaViewerSyncerTsx4() {
          const result = _undefined.set(_undefined.get() | c1);
          const result1 = _undefined2.set("thumbnails");
        };
        const items7 = [tmp33, tmp34, tmp35];
        useMediaViewerSyncerTsx4.__closure = items7;
        useMediaViewerSyncerTsx4.__workletHash = 5839468219817;
        useMediaViewerSyncerTsx4.__initData = tmp32;
        const items8 = [closure_1_15, tmp5, 4];
        [tmp36, tmp37, tmp38] = items8;
        useMediaViewerSyncerTsx5 = function useMediaViewerSyncerTsx5() {
          const result = _undefined.set(_undefined.get() & ~c1);
        };
        const items9 = [tmp37, tmp38];
        useMediaViewerSyncerTsx5.__closure = items9;
        useMediaViewerSyncerTsx5.__workletHash = 1652224521449;
        useMediaViewerSyncerTsx5.__initData = tmp36;
        const items10 = [animatedRef];
        const animatedScrollHandler = useAnimatedScrollHandler(obj3);
        const callback = React.useCallback((arg0) => {
          if (!zoomed.get()) {
            const result = closure_1_5.set(arg0);
            const result1 = swipeSource.set("thumbnails");
          }
        }, []);
        const callback1 = React.useCallback((arg0) => {
          const scrollStart = items[arg0].scrollStart;
          const obj = sources(onEndReached[5]);
          obj.scrollTo(animatedRef, scrollStart, 0, true);
        }, items10);
        const tmpResult = tmp(tmp2[5]);
        const items11 = [closure_1_16, tmp17, tmp14, , , , , ];
        let useDerivedValue = tmpResult.useDerivedValue;
        items11[3] = tmp(tmp2[8]).scheduleOnRN;
        items11[4] = callback1;
        items11[5] = tmp(tmp2[5]).scrollTo;
        items11[6] = animatedRef;
        items11[7] = useThumbnailStyle;
        [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50] = items11;
        function useMediaViewerSyncerTsx6() {
          if (_undefined.get() >= 0) {
            const tmp = c1;
            if (tmp) {
              _undefined2(c3, _undefined.get());
            } else {
              _undefined3(c5, _undefined.get() * c6, 0, true);
            }
          }
        }
        const items12 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50];
        useMediaViewerSyncerTsx6.__closure = items12;
        useMediaViewerSyncerTsx6.__workletHash = 15708245169556;
        useMediaViewerSyncerTsx6.__initData = tmp43;
        let derivedValue = useDerivedValue(useMediaViewerSyncerTsx6);
        const items13 = [animatedRef];
        const callback2 = obj4.useCallback((arg0) => {
          const obj = sources(onEndReached[9]);
          const result = obj.lerpVarWidthThumbnailScrollBounds(items, arg0);
          const obj2 = sources(onEndReached[5]);
          obj2.scrollTo(animatedRef, result, 0, false);
        }, items13);
        const items14 = [closure_1_17, tmp18, tmp16, closure_6, tmp14, , , , , ];
        let useDerivedValue2 = tmp(tmp2[5]).useDerivedValue;
        tmp(tmp2[5]);
        items14[5] = tmp(tmp2[8]).scheduleOnRN;
        items14[6] = callback2;
        items14[7] = tmp(tmp2[5]).scrollTo;
        items14[8] = animatedRef;
        items14[9] = useThumbnailStyle;
        let c5;
        let c6;
        let c7;
        let c8;
        [tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64] = items14;
        function useMediaViewerSyncerTsx7() {
          let tmp = 0 !== _undefined.get();
          if (tmp) {
            const value = _undefined2.get();
            tmp = value !== _undefined3.get();
          }
          if (tmp) {
            const tmp5 = c3;
            if (tmp5) {
              _undefined4(c5, _undefined3.get());
            } else {
              _undefined5(c7, _undefined3.get() * c8, 0, false);
            }
          }
        }
        const items15 = [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64];
        useMediaViewerSyncerTsx7.__closure = items15;
        useMediaViewerSyncerTsx7.__workletHash = 12994437734345;
        useMediaViewerSyncerTsx7.__initData = tmp55;
        let derivedValue2 = useDerivedValue2(useMediaViewerSyncerTsx7);
        const mapped = animatedRef.map((item, index) => index);
        const mapped1 = animatedRef.map((item) => {
          const obj = animatedRef(selectedIndex[10]);
          size = obj.flattenSource(item);
          let num = 0;
          if (null != size) {
            const _Math = Math;
            const _Math2 = Math;
            num = (Math.max(Math.min(size.width * (closure_1_6 / size.height), closure_1_7), zoomed) - zoomed) / 2;
          }
          return num;
        });
        const items16 = [closure_1_18, tmp5, , , , ];
        const useDerivedValue3 = tmp(tmp2[5]).useDerivedValue;
        tmp(tmp2[5]);
        items16[2] = tmp(tmp2[5]).interpolate;
        items16[3] = closure_6;
        items16[4] = mapped;
        items16[5] = mapped1;
        [tmp69, tmp70, tmp71, tmp72, tmp73, tmp74] = items16;
        function useMediaViewerSyncerTsx8() {
          let num = 0;
          if (_undefined.get() <= 0) {
            num = -_undefined2(_undefined3.get(), c3, c4, "clamp");
          }
          return num;
        }
        const items17 = [tmp70, tmp71, tmp72, tmp73, tmp74];
        useMediaViewerSyncerTsx8.__closure = items17;
        useMediaViewerSyncerTsx8.__workletHash = 12401398180532;
        useMediaViewerSyncerTsx8.__initData = tmp69;
        const derivedValue3 = useDerivedValue3(useMediaViewerSyncerTsx8);
        const diff = (width - useThumbnailStyle) / 2 - rect.left;
        const items18 = [closure_1_19, tmp18, diff, derivedValue3, , ];
        let useAnimatedStyle = tmp(tmp2[5]).useAnimatedStyle;
        tmp(tmp2[5]);
        items18[4] = tmp(tmp2[11]).withSpring;
        items18[5] = tmp(tmp2[12]).Reanimated3DefaultSpringConfig;
        [tmp78, tmp79, tmp80, tmp81, tmp82, tmp83] = items18;
        function useMediaViewerSyncerTsx9() {
          let width;
          if (_undefined.get() > 0) {
            width = c1 + _undefined2.get();
          } else {
            const obj = { overshootClamping: true };
            const sum1 = c1 + _undefined2.get();
            const merged = Object.assign(c4);
            width = _undefined3(sum1, obj);
          }
          return { width };
        }
        const items19 = [tmp79, tmp80, tmp81, tmp82, tmp83];
        useMediaViewerSyncerTsx9.__closure = items19;
        useMediaViewerSyncerTsx9.__workletHash = 4710683641318;
        useMediaViewerSyncerTsx9.__initData = tmp78;
        const diff1 = (width - useThumbnailStyle) / 2 - rect.right;
        const animatedStyle = useAnimatedStyle(useMediaViewerSyncerTsx9);
        const items20 = [closure_1_20, tmp18, diff1, derivedValue3, , ];
        const useAnimatedStyle2 = tmp(tmp2[5]).useAnimatedStyle;
        tmp(tmp2[5]);
        items20[4] = tmp(tmp2[11]).withSpring;
        items20[5] = tmp(tmp2[12]).Reanimated3DefaultSpringConfig;
        let c1;
        let c2;
        let c3;
        let c4;
        [tmp87, tmp88, tmp89, tmp90, tmp91, tmp92] = items20;
        function useMediaViewerSyncerTsx10() {
          let width;
          if (_undefined.get() > 0) {
            width = c1 + _undefined2.get();
          } else {
            const obj = { overshootClamping: true };
            const sum1 = c1 + _undefined2.get();
            const merged = Object.assign(c4);
            width = _undefined3(sum1, obj);
          }
          return { width };
        }
        const items21 = [tmp88, tmp89, tmp90, tmp91, tmp92];
        useMediaViewerSyncerTsx10.__closure = items21;
        useMediaViewerSyncerTsx10.__workletHash = 411530805476;
        useMediaViewerSyncerTsx10.__initData = tmp87;
        const animatedStyle2 = useAnimatedStyle2(useMediaViewerSyncerTsx10);
        const callback3 = obj4.useCallback((width, arg1) => {
          let tmp13;
          let tmp14;
          let tmp15;
          let tmp16;
          let tmp17;
          let tmp18;
          let tmp19;
          let tmp22;
          let tmp23;
          let tmp24;
          let tmp25;
          let tmp26;
          let tmp27;
          let tmp28;
          let tmp5;
          let tmp6;
          let tmp7;
          let tmp8;
          items = [closure_2_21, , , ];
          const useDerivedValue = arr(selectedIndex[5]).useDerivedValue;
          const tmp3 = arr(selectedIndex[5]);
          items[1] = arr(selectedIndex[5]).interpolate;
          items[2] = closure_1_6;
          items[3] = arg1;
          [tmp5, tmp6, tmp7, tmp8] = items;
          function useMediaViewerSyncerTsx11() {
            items = [c2 - 1, c2, c2 + 1];
            return _undefined(_undefined2.get(), items, [0.4, 1, 0.4], "clamp");
          }
          let items1 = [tmp6, tmp7, tmp8];
          useMediaViewerSyncerTsx11.__closure = items1;
          useMediaViewerSyncerTsx11.__workletHash = 11429815859380;
          useMediaViewerSyncerTsx11.__initData = tmp5;
          const derivedValue = useDerivedValue(useMediaViewerSyncerTsx11);
          const bound = Math.max(Math.min(width.width * (closure_2_6 / width.height), closure_2_7), zoomed);
          const items2 = [closure_2_22, React, zoomed, , , , ];
          const useDerivedValue2 = tmp(tmp2[5]).useDerivedValue;
          arr(selectedIndex[5]);
          items2[3] = arr(selectedIndex[5]).interpolate;
          items2[4] = closure_1_6;
          items2[5] = arg1;
          items2[6] = bound;
          [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items2;
          function useMediaViewerSyncerTsx13() {
            let tmp8;
            if (_undefined.get() > 0) {
              tmp8 = c1;
            } else {
              items = [c4 - 1, c4, c4 + 1];
              const items1 = [c1, c5, c1];
              tmp8 = _undefined2(_undefined3.get(), items, items1, "clamp");
            }
            return tmp8;
          }
          const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
          useMediaViewerSyncerTsx13.__closure = items3;
          useMediaViewerSyncerTsx13.__workletHash = 8664414579897;
          useMediaViewerSyncerTsx13.__initData = tmp13;
          const derivedValue2 = useDerivedValue2(useMediaViewerSyncerTsx13);
          const items4 = [closure_2_23, closure_1_7, derivedValue2, , , , ];
          const useAnimatedStyle = tmp(tmp2[5]).useAnimatedStyle;
          arr(selectedIndex[5]);
          items4[3] = arr(selectedIndex[11]).withSpring;
          items4[4] = arr(selectedIndex[12]).Reanimated3DefaultSpringConfig;
          items4[5] = closure_2_6;
          items4[6] = derivedValue;
          let c0;
          let c1;
          let c2;
          let c3;
          let c4;
          let c5;
          [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items4;
          function useMediaViewerSyncerTsx14() {
            let value;
            if (_undefined.get() > 0) {
              value = _undefined2.get();
            } else {
              const obj = { overshootClamping: true };
              const value2 = _undefined2.get();
              const merged = Object.assign(c3);
              value = _undefined3(value2, obj);
            }
            size = { width: value, height, opacity: _undefined4.get() };
            return size;
          }
          const items5 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
          useMediaViewerSyncerTsx14.__closure = items5;
          useMediaViewerSyncerTsx14.__workletHash = 17583136742612;
          useMediaViewerSyncerTsx14.__initData = tmp22;
          return useAnimatedStyle(useMediaViewerSyncerTsx14);
        }, []);
        const items22 = [closure_1_24, zoomed];
        let c0;
        [tmp95, tmp96] = items22;
        function useMediaViewerSyncerTsx15() {
          return !_undefined.get();
        }
        const items23 = [tmp96];
        useMediaViewerSyncerTsx15.__closure = items23;
        useMediaViewerSyncerTsx15.__workletHash = 2105233452792;
        useMediaViewerSyncerTsx15.__initData = tmp95;
        const tmpResult10 = tmp(tmp2[5]);
        const obj5 = {
          ref: animatedRef,
          headerBufferStyle: animatedStyle,
          headerBufferSize: diff,
          footerBufferStyle: animatedStyle2,
          footerBufferSize: diff1,
          scrollEnabled: tmpResult10.useDerivedValue(useMediaViewerSyncerTsx15),
          onScroll: animatedScrollHandler,
          onSelect: callback,
          useThumbnailStyle: callback3,
          screenWidth: width,
          screenHeight: height,
          itemSize(arg0, arg1) {
            return swipeSource;
          }
        };
        return obj5;
      },
      useViewerProps(isMediaViewerImprovementsEnabled) {
        let tmp10;
        let tmp11;
        let tmp16;
        let tmp17;
        let tmp18;
        let tmp19;
        let tmp20;
        let tmp21;
        let tmp22;
        let tmp23;
        let tmp24;
        let tmp28;
        let tmp29;
        let tmp30;
        let tmp31;
        let tmp33;
        let tmp34;
        let tmp35;
        let tmp36;
        let tmp41;
        let tmp42;
        let tmp43;
        let tmp44;
        let tmp46;
        let tmp47;
        let tmp48;
        let tmp49;
        let tmp50;
        let tmp51;
        let tmp52;
        let tmp53;
        let tmp54;
        let tmp55;
        let tmp56;
        let tmp57;
        let tmp58;
        let tmp59;
        let tmp6;
        let tmp60;
        let tmp7;
        let tmp8;
        let tmp9;
        let useMediaViewerSyncerTsx28;
        let useMediaViewerSyncerTsx29;
        let useMediaViewerSyncerTsx30;
        let flag = isMediaViewerImprovementsEnabled;
        if (isMediaViewerImprovementsEnabled === undefined) {
          flag = false;
        }
        let sharedValue;
        let sharedValue1;
        let tmp = arr;
        let tmp2 = selectedIndex;
        let obj = arr(selectedIndex[5]);
        const animatedRef = obj.useAnimatedRef();
        let obj2 = arr(selectedIndex[6]);
        size = obj2.useMediaViewerDimensions();
        const width = size.width;
        const height = size.height;
        const tmp4 = arr(selectedIndex[5]);
        items = [closure_1_25, flag, , , , ];
        let tmp5 = sharedValue1;
        items[2] = sharedValue1;
        const useDerivedValue = tmp4.useDerivedValue;
        items[3] = arr(selectedIndex[5]).scrollTo;
        items[4] = animatedRef;
        items[5] = width;
        let c4;
        [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
        function useMediaViewerSyncerTsx16() {
          const tmp = c0 || -1 === _undefined.get();
          if (!tmp) {
            _undefined2(c3, _undefined.get() * c4, 0, false);
          }
        }
        let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
        useMediaViewerSyncerTsx16.__closure = items1;
        useMediaViewerSyncerTsx16.__workletHash = 6573013391362;
        useMediaViewerSyncerTsx16.__initData = tmp6;
        const derivedValue = useDerivedValue(useMediaViewerSyncerTsx16);
        let items2 = [closure_1_26, flag, c4, closure_7, tmp5, , , , ];
        const useDerivedValue2 = tmp(tmp2[5]).useDerivedValue;
        const tmp14 = c4;
        const tmp15 = closure_7;
        tmp(tmp2[5]);
        items2[5] = tmp(tmp2[5]).scrollTo;
        items2[6] = animatedRef;
        items2[7] = sharedValue;
        items2[8] = width;
        [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items2;
        function useMediaViewerSyncerTsx17() {
          const tmp = c0 || 0 === _undefined.get() || _undefined2.get() > 0 || -1 !== _undefined3.get();
          if (!tmp) {
            _undefined4(c5, _undefined5.get() * c7, 0, false);
          }
        }
        let items3 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
        useMediaViewerSyncerTsx17.__closure = items3;
        useMediaViewerSyncerTsx17.__workletHash = 2187986676335;
        useMediaViewerSyncerTsx17.__initData = tmp16;
        const derivedValue2 = useDerivedValue2(useMediaViewerSyncerTsx17);
        const tmp26 = width;
        const tmpResult6 = tmp(tmp2[5]);
        sharedValue = tmpResult6.useSharedValue(width.get());
        let items4 = [closure_1_27, width];
        [tmp28, tmp29] = items4;
        function useMediaViewerSyncerTsx18() {
          return _undefined.get();
        }
        let items5 = [tmp29];
        useMediaViewerSyncerTsx18.__closure = items5;
        useMediaViewerSyncerTsx18.__workletHash = 1549933561716;
        useMediaViewerSyncerTsx18.__initData = tmp28;
        let items6 = [closure_1_28, sharedValue];
        [tmp30, tmp31] = items6;
        function useMediaViewerSyncerTsx19(arg0) {
          return _undefined.set(arg0);
        }
        let items7 = [tmp31];
        useMediaViewerSyncerTsx19.__closure = items7;
        useMediaViewerSyncerTsx19.__workletHash = 15115490811137;
        useMediaViewerSyncerTsx19.__initData = tmp30;
        const tmpResult7 = tmp(tmp2[5]);
        let animatedReaction = tmpResult7.useAnimatedReaction(useMediaViewerSyncerTsx18, useMediaViewerSyncerTsx19);
        let items8 = [closure_1_29, tmp5];
        [tmp33, tmp34] = items8;
        function useMediaViewerSyncerTsx20() {
          return _undefined.get();
        }
        let items9 = [tmp34];
        useMediaViewerSyncerTsx20.__closure = items9;
        useMediaViewerSyncerTsx20.__workletHash = 8312319312479;
        useMediaViewerSyncerTsx20.__initData = tmp33;
        const items10 = [closure_1_30, sharedValue];
        [tmp35, tmp36] = items10;
        function useMediaViewerSyncerTsx21(arg0, arg1) {
          const tmp = null !== arg1 && -1 !== arg0;
          if (tmp) {
            const result = _undefined.set(arg0);
          }
        }
        const items11 = [tmp36];
        useMediaViewerSyncerTsx21.__closure = items11;
        useMediaViewerSyncerTsx21.__workletHash = 13508749823092;
        useMediaViewerSyncerTsx21.__initData = tmp35;
        const tmpResult8 = tmp(tmp2[5]);
        const animatedReaction1 = tmpResult8.useAnimatedReaction(useMediaViewerSyncerTsx20, useMediaViewerSyncerTsx21);
        const diff = flag.length - 1;
        const items12 = [flag, diff, sharedValue, width];
        memo = React.useMemo(() => {
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
          let tmp23;
          let tmp24;
          let tmp25;
          let tmp26;
          let tmp27;
          let tmp28;
          let tmp29;
          let tmp30;
          let tmp4;
          let tmp5;
          let tmp6;
          let tmp7;
          let tmp8;
          let tmp9;
          let useMediaViewerSyncerTsx22;
          let useMediaViewerSyncerTsx23;
          let useMediaViewerSyncerTsx24;
          let useMediaViewerSyncerTsx25;
          let useMediaViewerSyncerTsx26;
          items = [closure_3_31, , , , , ];
          let tmp = closure_2_7;
          items[1] = closure_2_7;
          items[2] = 2;
          items[3] = swipeSource;
          items[4] = flag;
          items[5] = closure_2_5;
          [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
          let obj = { onBeginDrag: useMediaViewerSyncerTsx22, onEndDrag: useMediaViewerSyncerTsx23, onScroll: useMediaViewerSyncerTsx24, onMomentumBegin: useMediaViewerSyncerTsx25, onMomentumEnd: useMediaViewerSyncerTsx26 };
          useMediaViewerSyncerTsx22 = function useMediaViewerSyncerTsx22() {
            const result = closure_1_0.set(closure_1_0.get() | closure_1_1);
            const result1 = closure_1_2.set("viewer");
            const tmp3 = closure_1_3;
            if (tmp3) {
              const result2 = closure_1_4.set(-1);
            }
          };
          const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
          useMediaViewerSyncerTsx22.__closure = items1;
          useMediaViewerSyncerTsx22.__workletHash = 3795573056345;
          useMediaViewerSyncerTsx22.__initData = tmp4;
          const items2 = [closure_3_32, tmp, 2];
          [tmp10, tmp11, tmp12] = items2;
          useMediaViewerSyncerTsx23 = function useMediaViewerSyncerTsx23() {
            const result = _undefined.set(_undefined.get() & ~c1);
          };
          const items3 = [tmp11, tmp12];
          useMediaViewerSyncerTsx23.__closure = items3;
          useMediaViewerSyncerTsx23.__workletHash = 15194033235480;
          useMediaViewerSyncerTsx23.__initData = tmp10;
          const items4 = [closure_3_33, closure_2_6, width, swipeSource, , , , , , , ];
          let tmp3 = flag;
          items4[4] = sources(onEndReached[13]).resolveSelectedIndex;
          items4[5] = c4;
          items4[6] = tmp3;
          items4[7] = sharedValue;
          items4[8] = selectedIndex;
          items4[9] = sources(onEndReached[8]).scheduleOnRN;
          items4[10] = onSelectedIndexChange;
          let c3;
          c4 = undefined;
          let c5;
          let c6;
          let c7;
          let c8;
          let c9;
          [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
          useMediaViewerSyncerTsx24 = function useMediaViewerSyncerTsx24(offsetX) {
            const result = _undefined.set(offsetX / c1);
            const tmp = c1;
            if ("viewer" === _undefined2.get()) {
              const obj = { offsetX, pageSize: tmp, maxIndex };
              const tmp5 = _undefined3(obj);
              if (null != tmp5) {
                const tmp7 = c5;
                if (tmp7) {
                  const result1 = _undefined4.set(tmp5);
                }
                const obj2 = _undefined5;
                if (_undefined5.get() !== tmp5) {
                  const result2 = obj2.set(tmp5);
                  _undefined6(c9);
                }
              }
            }
          };
          const items5 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
          useMediaViewerSyncerTsx24.__closure = items5;
          useMediaViewerSyncerTsx24.__workletHash = 5987632270997;
          useMediaViewerSyncerTsx24.__initData = tmp13;
          const items6 = [closure_3_34, tmp, 4, swipeSource];
          let c2;
          [tmp24, tmp25, tmp26, tmp27] = items6;
          useMediaViewerSyncerTsx25 = function useMediaViewerSyncerTsx25() {
            const result = _undefined.set(_undefined.get() | c1);
            const result1 = _undefined2.set("viewer");
          };
          const items7 = [tmp25, tmp26, tmp27];
          useMediaViewerSyncerTsx25.__closure = items7;
          useMediaViewerSyncerTsx25.__workletHash = 1223666194298;
          useMediaViewerSyncerTsx25.__initData = tmp24;
          const items8 = [closure_3_35, tmp, 4];
          let c0;
          let c1;
          [tmp28, tmp29, tmp30] = items8;
          useMediaViewerSyncerTsx26 = function useMediaViewerSyncerTsx26() {
            const result = _undefined.set(_undefined.get() & ~c1);
          };
          const items9 = [tmp29, tmp30];
          useMediaViewerSyncerTsx26.__closure = items9;
          useMediaViewerSyncerTsx26.__workletHash = 10664405077789;
          useMediaViewerSyncerTsx26.__initData = tmp28;
          return obj;
        }, items12);
        const tmpResult9 = tmp(tmp2[5]);
        sharedValue1 = tmpResult9.useSharedValue(0);
        const items13 = [closure_1_36, onSelectedIndexChange, sharedValue1, tmp26];
        [tmp41, tmp42, tmp43, tmp44] = items13;
        function isSpuriousContentSizeReset(arg0) {
          let tmp = c0;
          if (tmp) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp = timestamp - _undefined.get() < 500;
          }
          if (tmp) {
            tmp = 0 === arg0;
          }
          if (tmp) {
            tmp = 0 !== _undefined2.get();
          }
          return tmp;
        }
        const items14 = [tmp42, tmp43, tmp44];
        isSpuriousContentSizeReset.__closure = items14;
        isSpuriousContentSizeReset.__workletHash = 11879649291948;
        isSpuriousContentSizeReset.__initData = tmp41;
        const items15 = [closure_1_37, memo];
        const obj3 = { onBeginDrag: memo.onBeginDrag, onEndDrag: useMediaViewerSyncerTsx28, onScroll: useMediaViewerSyncerTsx29, onMomentumBegin: memo.onMomentumBegin, onMomentumEnd: useMediaViewerSyncerTsx30 };
        [tmp46, tmp47] = items15;
        useMediaViewerSyncerTsx28 = function useMediaViewerSyncerTsx28(contentOffset) {
          _undefined.onEndDrag();
          _undefined.onScroll(contentOffset.contentOffset.x);
        };
        const items16 = [tmp47];
        useMediaViewerSyncerTsx28.__closure = items16;
        useMediaViewerSyncerTsx28.__workletHash = 5917142690034;
        useMediaViewerSyncerTsx28.__initData = tmp46;
        const items17 = [closure_1_38, isSpuriousContentSizeReset, , , , , , , , ];
        const useAnimatedScrollHandler = tmp(tmp2[5]).useAnimatedScrollHandler;
        items17[2] = tmp(tmp2[5]).scrollTo;
        items17[3] = animatedRef;
        items17[4] = tmp26;
        items17[5] = width;
        items17[6] = tmp15;
        items17[7] = tmp14;
        items17[8] = tmp5;
        items17[9] = memo;
        let c2;
        let c3;
        c4 = undefined;
        let c5;
        let c6;
        let c7;
        let c8;
        [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57] = items17;
        useMediaViewerSyncerTsx29 = function useMediaViewerSyncerTsx29(contentOffset) {
          if (_undefined(contentOffset.contentOffset.x)) {
            _undefined2(c2, _undefined3.get() * c4, contentOffset.contentOffset.y, false);
          } else {
            const tmp2 = 0 === _undefined4.get() && 0 === _undefined5.get() && -1 === _undefined6.get();
            if (!tmp2) {
              _undefined7.onScroll(contentOffset.contentOffset.x);
            }
          }
        };
        const items18 = [tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57];
        useMediaViewerSyncerTsx29.__closure = items18;
        useMediaViewerSyncerTsx29.__workletHash = 5643521676828;
        useMediaViewerSyncerTsx29.__initData = tmp48;
        const items19 = [closure_1_39, isSpuriousContentSizeReset, memo];
        let c0;
        let c1;
        [tmp58, tmp59, tmp60] = items19;
        useMediaViewerSyncerTsx30 = function useMediaViewerSyncerTsx30(contentOffset) {
          if (!_undefined(contentOffset.contentOffset.x)) {
            _undefined2.onScroll(contentOffset.contentOffset.x);
          }
          _undefined2.onMomentumEnd();
        };
        const items20 = [tmp59, tmp60];
        useMediaViewerSyncerTsx30.__closure = items20;
        useMediaViewerSyncerTsx30.__workletHash = 6974344984471;
        useMediaViewerSyncerTsx30.__initData = tmp58;
        const items21 = [animatedRef, width, sharedValue1];
        const items22 = [width, height, animatedRef];
        const animatedScrollHandler = useAnimatedScrollHandler(obj3);
        const callback = obj6.useCallback(() => {
          const current = animatedRef.current;
          if (current != null) {
            current.scrollTo(tmp, false);
          }
          const result = sharedValue1.set(Date.now());
        }, items21);
        const effect = obj6.useEffect(() => {
          const current = animatedRef.current;
          if (current != null) {
            current.reset();
          }
        }, items22);
        const obj4 = {
          ref: animatedRef,
          onScroll: animatedScrollHandler,
          onScrollWorklets: memo,
          pagerIndex: sharedValue,
          onContentSizeChange: callback,
          useItemVisible: React.useCallback((arg0) => {
            let tmp10;
            let tmp11;
            let tmp12;
            let tmp2;
            let tmp3;
            let tmp7;
            let tmp8;
            let tmp9;
            let tmp = closure_2_3(React.useState(arg0 === width.get()), 2);
            [tmp2, tmp3] = tmp;
            items = [closure_2_40, arg0, width];
            [tmp7, tmp8, tmp9] = items;
            function useMediaViewerSyncerTsx31() {
              return c0 === _undefined.get();
            }
            const items1 = [tmp8, tmp9];
            useMediaViewerSyncerTsx31.__closure = items1;
            useMediaViewerSyncerTsx31.__workletHash = 13896134316430;
            useMediaViewerSyncerTsx31.__initData = tmp7;
            const items2 = [closure_2_41, , ];
            const useAnimatedReaction = arr(selectedIndex[5]).useAnimatedReaction;
            arr(selectedIndex[5]);
            items2[1] = arr(selectedIndex[8]).scheduleOnRN;
            items2[2] = tmp3;
            let c0;
            let c1;
            [tmp10, tmp11, tmp12] = items2;
            function useMediaViewerSyncerTsx32(arg0, arg1) {
              const tmp = null != arg1 && arg1 !== arg0;
              if (tmp) {
                _undefined(c1, arg0);
              }
            }
            const items3 = [tmp11, tmp12];
            useMediaViewerSyncerTsx32.__closure = items3;
            useMediaViewerSyncerTsx32.__workletHash = 13069678655971;
            useMediaViewerSyncerTsx32.__initData = tmp10;
            const animatedReaction = useAnimatedReaction(useMediaViewerSyncerTsx31, useMediaViewerSyncerTsx32);
            return tmp2;
          }, [])
        };
        return obj4;
      },
      onEndReached: tmp13,
      onEndReachedThreshold: tmp14
    };
    return obj4;
  }, items1);
}
