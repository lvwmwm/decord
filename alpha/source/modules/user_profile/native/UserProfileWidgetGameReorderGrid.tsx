// Module ID: 14605
// Function ID: 14606
// Name: UserProfileWidgetGameReorderGrid
// Dependencies: [32, 19, 17, 21, 5043, 14591, 1654, 5253, 5256, 1707, 5259, 5303, 1112, 5052, 7328, 11544, 2]
// Exports: default

// Module 14605 (UserProfileWidgetGameReorderGrid)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1112 */;
import _mod1654 from "module_1654" /* 1654 */;
import _mod1707 from "module_1707" /* 1707 */;
import timing_timing from "timing/timing" /* 5253 */;
import timingPresets from "timingPresets" /* 5256 */;
import HapticUtils from "HapticUtils" /* 5259 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let set, set2, set3;

let tmp2;
let tmp3;
let View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ grid: { position: "relative", width: "100%" }, tile: { position: "absolute" }, unmeasured: { opacity: 0 } });
let items = [{ code: "(function getSlotOffset_UserProfileWidgetGameReorderGridTsx1(index,columns,itemWidth,itemHeight,gap){return{x:index%columns*(itemWidth+gap),y:Math.floor(index/columns)*(itemHeight+gap)};})" }];
[tmp2] = items;
function getSlotOffset(arg0, arg1, arg2, arg3, arg4) {
  const point = { x: arg0 % arg1 * (arg2 + arg4), y: Math.floor(arg0 / arg1) * (arg3 + arg4) };
  return point;
}
getSlotOffset.__workletHash = 11422838438734;
getSlotOffset.__initData = tmp2;
let items1 = [{ code: "(function moveItem_UserProfileWidgetGameReorderGridTsx2(ids,fromIndex,toIndex){if(fromIndex===toIndex||fromIndex<0||fromIndex>=ids.length){return ids;}const next=[...ids];const[moved]=next.splice(fromIndex,1);next.splice(Math.min(Math.max(toIndex,0),next.length),0,moved);return next;})" }];
[tmp3] = items1;
function moveItem(arg0, arg1, arg2) {
  if (arg1 !== arg2) {
    if (arg1 >= 0) {
      if (arg1 < arg0.length) {
        const items = [];
        HermesBuiltin.arraySpread(items, arg0, 0);
        const _Math = Math;
        const _Math2 = Math;
        items.splice(Math.min(Math.max(arg2, 0), items.length), 0, _slicedToArray(items.splice(arg1, 1), 1)[0]);
        return items;
      }
    }
  }
  return arg0;
}
moveItem.__workletHash = 7690236456202;
moveItem.__initData = tmp3;
let closure_10 = { code: "(function UserProfileWidgetGameReorderGridTsx3(){let[orderShared,gameId,getSlotOffset,columns,itemWidth,itemHeight,gap]=this.__closure;const slot=orderShared.get().indexOf(gameId);if(slot<0){return null;}const offset=getSlotOffset(slot,columns,itemWidth,itemHeight,gap);return{x:offset.x,y:offset.y,layoutKey:columns+\":\"+itemWidth+\":\"+itemHeight};})" };
let closure_11 = { code: "(function UserProfileWidgetGameReorderGridTsx4(target,previousTarget){let[isThisTileDragging,positionX,positionY,withTiming,timingStandard]=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(previousTarget==null||previousTarget.layoutKey!==target.layoutKey){positionX.set(target.x);positionY.set(target.y);return;}if(target.x!==previousTarget.x){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==previousTarget.y){positionY.set(withTiming(target.y,timingStandard));}})" };
let constants = { code: "(function UserProfileWidgetGameReorderGridTsx5(){let[orderShared,clamp,positionX,itemWidth,gap,columns,positionY,itemHeight,moveItem,gameId,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;const order=orderShared.get();const column=clamp(Math.floor((positionX.get()+itemWidth/2)/(itemWidth+gap)),0,columns-1);const row=Math.max(Math.floor((positionY.get()+itemHeight/2)/(itemHeight+gap)),0);const to=clamp(row*columns+column,0,order.length-1);const next=moveItem(order,order.indexOf(gameId),to);if(next!==order){orderShared.set(next);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}})" };
let closure_13 = { code: "(function UserProfileWidgetGameReorderGridTsx6(){let[scrollOffset]=this.__closure;return scrollOffset.get();})" };
let closure_14 = { code: "(function UserProfileWidgetGameReorderGridTsx7(offset,previousOffset){let[isThisTileDragging,positionY,reslot]=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();})" };
let closure_15 = { code: "(function handleStart_UserProfileWidgetGameReorderGridTsx8(source){let[isAnyDragActive,isThisTileDragging,activeGesture,dragStartIndex,orderShared,gameId,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(isAnyDragActive.get()){return;}isAnyDragActive.set(true);isThisTileDragging.set(true);activeGesture.set(source);dragStartIndex.set(orderShared.get().indexOf(gameId));dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_START);})" };
let closure_16 = { code: "(function handleChange_UserProfileWidgetGameReorderGridTsx9(source,event){let[activeGesture,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp]=this.__closure;if(activeGesture.get()!==source){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport=dragViewport.get();if(viewport==null){return;}const fromTop=event.absoluteY-viewport.pageY;const fromBottom=viewport.pageY+viewport.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}})" };
let closure_17 = { code: "(function handleFinalize_UserProfileWidgetGameReorderGridTsx10(source){let[activeGesture,autoScrollSpeed,dragViewport,orderShared,gameId,getSlotOffset,columns,itemWidth,itemHeight,gap,positionX,withTiming,timingStandard,positionY,scale,isThisTileDragging,isAnyDragActive,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,dragStartIndex,onCommitOrder]=this.__closure;if(activeGesture.get()!==source){return;}activeGesture.set(null);autoScrollSpeed.set(0);dragViewport.set(null);const order=orderShared.get();const slot=order.indexOf(gameId);if(slot>=0){const target=getSlotOffset(slot,columns,itemWidth,itemHeight,gap);positionX.set(withTiming(target.x,timingStandard));positionY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_END);if(slot>=0&&slot!==dragStartIndex.get()){scheduleOnRN(onCommitOrder,order);}})" };
let closure_18 = { code: "(function UserProfileWidgetGameReorderGridTsx11(){let[handleStart]=this.__closure;handleStart('handle');})" };
let closure_19 = { code: "(function UserProfileWidgetGameReorderGridTsx12(event){let[handleChange]=this.__closure;handleChange('handle',event);})" };
let closure_20 = { code: "(function UserProfileWidgetGameReorderGridTsx13(){let[handleFinalize]=this.__closure;handleFinalize('handle');})" };
let closure_21 = { code: "(function UserProfileWidgetGameReorderGridTsx14(){let[handleStart]=this.__closure;handleStart('cover');})" };
let closure_22 = { code: "(function UserProfileWidgetGameReorderGridTsx15(event){let[handleChange]=this.__closure;handleChange('cover',event);})" };
let closure_23 = { code: "(function UserProfileWidgetGameReorderGridTsx16(){let[handleFinalize]=this.__closure;handleFinalize('cover');})" };
let closure_24 = { code: "(function UserProfileWidgetGameReorderGridTsx17(){let[isThisTileDragging,dragOrigin,positionX,positionY,scale]=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};})" };
let closure_25 = react.memo(function ReorderableGameTile(gameId) {
  let closure_12;
  let columns;
  let count;
  let coverGesture;
  let handleGesture;
  let index;
  let intl;
  let intl2;
  let items15;
  let obj12;
  let obj9;
  let renderGame;
  let scrollOffset;
  let tmp10;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp56;
  let tmp57;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  gameId = gameId.gameId;
  ({ index, columns } = gameId);
  const itemWidth = gameId.itemWidth;
  const itemHeight = gameId.itemHeight;
  const gap = gameId.gap;
  const orderShared = gameId.orderShared;
  const isDragActive = gameId.isDragActive;
  const scrollRef = gameId.scrollRef;
  const autoScrollSpeed = gameId.autoScrollSpeed;
  const onCommitOrder = gameId.onCommitOrder;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  let sharedValue7;
  let callback;
  ({ count, scrollOffset, renderGame } = gameId);
  let tmp = scrollRef();
  let tmp3 = itemWidth;
  let tmp2 = columns;
  let tmp4 = columns(itemWidth[5])(gameId);
  let gameName = tmp4.gameName;
  let tmp5 = gameId;
  const isLoading = tmp4.isLoading;
  let obj = gameId(itemWidth[6]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = gameId(itemWidth[6]);
  const sharedValue1 = obj2.useSharedValue(null);
  let obj3 = gap;
  constants = gap.useRef(undefined);
  let obj4 = gameId(itemWidth[6]);
  const sharedValue2 = obj4.useSharedValue(null);
  const obj5 = gameId(itemWidth[6]);
  const sharedValue3 = obj5.useSharedValue(index);
  if (typeof autoScrollSpeed === "function") {
    let unmeasured;
    let point = { x: index % columns * (itemWidth + gap), y: Math.floor(index / columns) * (itemHeight + gap) };
    const tmp11 = globalThis;
    let _Math = Math;
    const tmp5Result = tmp5(tmp3[6]);
    sharedValue4 = tmp5Result.useSharedValue(point.x);
    const tmp5Result7 = tmp5(tmp3[6]);
    sharedValue5 = tmp5Result7.useSharedValue(point.y);
    const tmp5Result8 = tmp5(tmp3[6]);
    sharedValue6 = tmp5Result8.useSharedValue(point);
    let num = 1;
    const tmp5Result9 = tmp5(tmp3[6]);
    sharedValue7 = tmp5Result9.useSharedValue(1);
    let tmp17 = sharedValue;
    let items = [sharedValue, orderShared, gameId, tmp10, columns, itemWidth, itemHeight, gap];
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    const tmp18 = items;
    [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items;
    const tmp5Result10 = tmp5(tmp3[6]);
    class UserProfileWidgetGameReorderGridTsx3 {
      constructor() {
        const value = _undefined.get();
        const index = value.indexOf(c1);
        if (index < 0) {
          return null;
        } else {
          const point = { x: null, y: null, layoutKey: "" + c3 + ":" + c4 + ":" + c5 };
          ({ x: obj.x, y: obj.y } = _undefined2(index, c3, c4, c5, c6));
          const _HermesInternal = HermesInternal;
          _undefined2(index, c3, c4, c5, c6);
          return point;
        }
      }
    }
    let items1 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
    UserProfileWidgetGameReorderGridTsx3.__closure = items1;
    let num2 = 17308847588809;
    UserProfileWidgetGameReorderGridTsx3.__workletHash = 17308847588809;
    UserProfileWidgetGameReorderGridTsx3.__initData = tmp19;
    const tmp27 = sharedValue1;
    let items2 = [sharedValue1, sharedValue, sharedValue4, sharedValue5, , ];
    const useAnimatedReaction = tmp5Result10.useAnimatedReaction;
    items2[4] = tmp5(tmp3[7]).withTiming;
    items2[5] = tmp5(tmp3[8]).timingStandard;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    const tmp28 = items2;
    [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items2;
    class UserProfileWidgetGameReorderGridTsx4 {
      constructor(layoutKey, layoutKey2) {
        if (null != layoutKey) {
          if (!_undefined.get()) {
            if (null != layoutKey2) {
              if (layoutKey2.layoutKey === layoutKey.layoutKey) {
                if (layoutKey.x !== layoutKey2.x) {
                  const result = _undefined2.set(_undefined4(layoutKey.x, c4));
                }
                if (layoutKey.y !== layoutKey2.y) {
                  const result1 = _undefined3.set(_undefined4(layoutKey.y, c4));
                }
              }
            }
            const result2 = _undefined2.set(layoutKey.x);
            const result3 = _undefined3.set(layoutKey.y);
          }
        }
      }
    }
    let items3 = [tmp30, tmp31, tmp32, tmp33, tmp34];
    UserProfileWidgetGameReorderGridTsx4.__closure = items3;
    UserProfileWidgetGameReorderGridTsx4.__workletHash = 2705717682280;
    UserProfileWidgetGameReorderGridTsx4.__initData = tmp29;
    const animatedReaction = useAnimatedReaction(UserProfileWidgetGameReorderGridTsx3, UserProfileWidgetGameReorderGridTsx4);
    const tmp36 = constants;
    let items4 = [constants, orderShared, , , , , , , , , , , , ];
    const useCallback = obj3.useCallback;
    items4[2] = tmp5(tmp3[6]).clamp;
    items4[3] = sharedValue4;
    items4[4] = itemWidth;
    items4[5] = gap;
    items4[6] = columns;
    items4[7] = sharedValue5;
    items4[8] = itemHeight;
    const tmp37 = onCommitOrder;
    items4[9] = onCommitOrder;
    items4[10] = gameId;
    items4[11] = tmp5(tmp3[9]).scheduleOnRN;
    items4[12] = tmp5(tmp3[10]).triggerHapticFeedback;
    items4[13] = tmp5(tmp3[10]).HapticFeedbackTypes;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    let c7;
    let c8;
    let c9;
    let c10;
    let c11;
    let c12;
    const tmp38 = items4;
    [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items4;
    class UserProfileWidgetGameReorderGridTsx5 {
      constructor() {
        const value = _undefined.get();
        const tmp = _undefined2(Math.floor((_undefined3.get() + c3 / 2) / (c3 + c4)), 0, c5 - 1);
        const tmp2 = _undefined2(Math.max(Math.floor((_undefined4.get() + c7 / 2) / (c7 + c4)), 0) * c5 + tmp, 0, value.length - 1);
        const tmp3 = _undefined5(value, value.indexOf(c9), tmp2);
        const obj = _undefined;
        if (tmp3 !== value) {
          const result = obj.set(tmp3);
          _undefined6(c11, _undefined7.DRAG_AND_DROP_MOVE);
        }
      }
    }
    let items5 = [tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52];
    UserProfileWidgetGameReorderGridTsx5.__closure = items5;
    UserProfileWidgetGameReorderGridTsx5.__workletHash = 8277926820127;
    UserProfileWidgetGameReorderGridTsx5.__initData = tmp39;
    let items6 = [gameId, orderShared, columns, itemWidth, itemHeight, gap, sharedValue4, sharedValue5];
    callback = useCallback(UserProfileWidgetGameReorderGridTsx5, items6);
    const tmp54 = sharedValue2;
    let items7 = [sharedValue2, scrollOffset];
    c0 = undefined;
    const tmp55 = items7;
    [tmp56, tmp57] = items7;
    const tmp5Result11 = tmp5(tmp3[6]);
    class UserProfileWidgetGameReorderGridTsx6 {
      constructor() {
        return _undefined.get();
      }
    }
    let items8 = [tmp57];
    UserProfileWidgetGameReorderGridTsx6.__closure = items8;
    UserProfileWidgetGameReorderGridTsx6.__workletHash = 13189301387263;
    UserProfileWidgetGameReorderGridTsx6.__initData = tmp56;
    const tmp58 = sharedValue3;
    let items9 = [sharedValue3, sharedValue, sharedValue5, callback];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    const tmp59 = items9;
    [tmp60, tmp61, tmp62, tmp63] = items9;
    class UserProfileWidgetGameReorderGridTsx7 {
      constructor(arg0, arg1) {
        const value = null != arg1 && _undefined.get();
        if (value) {
          const result = _undefined2.set(_undefined2.get() + (arg0 - arg1));
          _undefined3();
        }
      }
    }
    let items10 = [tmp61, tmp62, tmp63];
    UserProfileWidgetGameReorderGridTsx7.__closure = items10;
    UserProfileWidgetGameReorderGridTsx7.__workletHash = 4010589370446;
    UserProfileWidgetGameReorderGridTsx7.__initData = tmp60;
    const animatedReaction1 = tmp5Result11.useAnimatedReaction(UserProfileWidgetGameReorderGridTsx6, UserProfileWidgetGameReorderGridTsx7);
    let items11 = [callback, scrollRef, sharedValue2, sharedValue3, autoScrollSpeed, gameId, columns, itemWidth, itemHeight, gap, orderShared, isDragActive, onCommitOrder, sharedValue, sharedValue1, sharedValue7, sharedValue4, sharedValue5, sharedValue6];
    const memo = obj3.useMemo(() => {
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
      let tmp31;
      let tmp32;
      let tmp34;
      let tmp35;
      let tmp36;
      let tmp37;
      let tmp38;
      let tmp39;
      let tmp40;
      let tmp41;
      let tmp42;
      let tmp43;
      let tmp44;
      let tmp45;
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
      let tmp60;
      let tmp61;
      let tmp62;
      let tmp63;
      let tmp64;
      let tmp65;
      let tmp67;
      let tmp68;
      let tmp69;
      let tmp70;
      let tmp71;
      let tmp72;
      let tmp74;
      let tmp75;
      let tmp76;
      let tmp77;
      let tmp78;
      let tmp79;
      const items = [closure_15, isDragActive, sharedValue, , , , , , , , , , , , , , , , , ];
      items[3] = sharedValue1;
      items[4] = sharedValue3;
      items[5] = orderShared;
      items[6] = gameId;
      items[7] = sharedValue6;
      items[8] = sharedValue4;
      items[9] = sharedValue5;
      items[10] = _mod1654.measure;
      items[11] = scrollRef;
      items[12] = sharedValue2;
      items[13] = sharedValue7;
      items[14] = timing_timing.withTiming;
      items[15] = 1.03;
      items[16] = timingPresets.timingStandard;
      items[17] = _mod1707.scheduleOnRN;
      items[18] = HapticUtils.triggerHapticFeedback;
      items[19] = HapticUtils.HapticFeedbackTypes;
      [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items;
      function handleStart(arg0) {
        const obj = _undefined;
        if (!_undefined.get()) {
          const result = obj.set(true);
          const result1 = _undefined2.set(true);
          const result2 = _undefined3.set(arg0);
          set = _undefined4.set;
          const value = _undefined5.get();
          const result3 = set(value.indexOf(c5));
          const point = { x: _undefined7.get(), y: _undefined8.get() };
          set2 = _undefined6.set;
          set2(point);
          const tmp17 = _undefined9(c10);
          let tmp19 = null;
          set3 = _undefined10.set;
          if (null != tmp17) {
            const obj2 = { pageY: null, height: null };
            ({ pageY: obj3.pageY, height: obj3.height } = tmp17);
            tmp19 = obj2;
          }
          set3(tmp19);
          const result4 = _undefined11.set(_undefined12(c14, c15));
          _undefined13(c17, _undefined14.DRAG_AND_DROP_START);
        }
      }
      const items1 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
      handleStart.__closure = items1;
      handleStart.__workletHash = 4403812282933;
      handleStart.__initData = tmp13;
      const items2 = [closure_16, tmp3, tmp7, tmp8, callback, tmp11, 80, autoScrollSpeed, ];
      items2[8] = _mod1654.clamp;
      [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items2;
      function handleChange(arg0, changeX) {
        if (_undefined.get() === arg0) {
          const result = _undefined2.set(_undefined2.get() + changeX.changeX);
          const result1 = _undefined3.set(_undefined3.get() + changeX.changeY);
          _undefined4();
          const value = _undefined5.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < c5) {
              const result2 = _undefined6.set(_undefined7(diff, 0, tmp21) / tmp21 - 1);
            } else if (diff1 < c5) {
              const result3 = _undefined6.set(1 - _undefined7(diff1, 0, tmp21) / tmp21);
            } else {
              const result4 = _undefined6.set(0);
            }
          }
        }
      }
      const items3 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
      handleChange.__closure = items3;
      handleChange.__workletHash = 11898298585101;
      handleChange.__initData = tmp34;
      const items4 = [closure_17, tmp3, autoScrollSpeed, tmp11, orderShared, gameId, getSlotOffset, columns, itemWidth, itemHeight, gap, tmp7, tmp9(5253).withTiming, tmp9(5256).timingStandard, tmp8, sharedValue7, sharedValue, isDragActive, tmp9(1707).scheduleOnRN, tmp9(5259).triggerHapticFeedback, tmp9(5259).HapticFeedbackTypes, sharedValue3, onCommitOrder];
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let c10;
      let c11;
      let c12;
      let c13;
      let c14;
      let c15;
      let c16;
      let c17;
      let c18;
      let c19;
      let c20;
      let c21;
      [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65] = items4;
      function handleFinalize(arg0) {
        const obj = _undefined;
        if (_undefined.get() === arg0) {
          const result = obj.set(null);
          const result1 = _undefined2.set(0);
          const result2 = _undefined3.set(null);
          const value = _undefined4.get();
          const index = value.indexOf(c4);
          if (index >= 0) {
            const point = _undefined5(index, c6, c7, c8, c9);
            const result3 = _undefined6.set(_undefined7(point.x, c12));
            const result4 = _undefined8.set(_undefined7(point.y, c12));
          }
          const result5 = _undefined9.set(_undefined7(1, c12));
          const result6 = _undefined10.set(false);
          const result7 = _undefined11.set(false);
          _undefined12(c18, _undefined13.DRAG_AND_DROP_END);
          let tmp25 = index >= 0;
          const tmp21 = _undefined12;
          if (tmp25) {
            tmp25 = index !== _undefined14.get();
          }
          if (tmp25) {
            tmp21(c21, value);
          }
        }
      }
      const items5 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65];
      handleFinalize.__closure = items5;
      handleFinalize.__workletHash = 8128370352400;
      handleFinalize.__initData = tmp43;
      const Gesture = tmp9(5303).Gesture;
      const items6 = [closure_18, handleStart];
      let c0;
      [tmp67, tmp68] = items6;
      const PanResult = Gesture.Pan();
      const tmp66 = closure_12;
      const withRefResult = PanResult.withRef(closure_12);
      class UserProfileWidgetGameReorderGridTsx11 {
        constructor() {
          _undefined("handle");
        }
      }
      const items7 = [tmp68];
      UserProfileWidgetGameReorderGridTsx11.__closure = items7;
      UserProfileWidgetGameReorderGridTsx11.__workletHash = 9813868869329;
      UserProfileWidgetGameReorderGridTsx11.__initData = tmp67;
      const items8 = [closure_19, handleChange];
      c0 = undefined;
      [tmp69, tmp70] = items8;
      const onStartResult = withRefResult.onStart(UserProfileWidgetGameReorderGridTsx11);
      class UserProfileWidgetGameReorderGridTsx12 {
        constructor(arg0) {
          _undefined("handle", arg0);
        }
      }
      const items9 = [tmp70];
      UserProfileWidgetGameReorderGridTsx12.__closure = items9;
      UserProfileWidgetGameReorderGridTsx12.__workletHash = 12447368564446;
      UserProfileWidgetGameReorderGridTsx12.__initData = tmp69;
      const items10 = [closure_20, handleFinalize];
      c0 = undefined;
      [tmp71, tmp72] = items10;
      const onChangeResult = onStartResult.onChange(UserProfileWidgetGameReorderGridTsx12);
      class UserProfileWidgetGameReorderGridTsx13 {
        constructor() {
          _undefined("handle");
        }
      }
      const items11 = [tmp72];
      UserProfileWidgetGameReorderGridTsx13.__closure = items11;
      UserProfileWidgetGameReorderGridTsx13.__workletHash = 10286079723219;
      UserProfileWidgetGameReorderGridTsx13.__initData = tmp71;
      const onFinalizeResult = onChangeResult.onFinalize(UserProfileWidgetGameReorderGridTsx13);
      const Gesture2 = tmp9(5303).Gesture;
      const PanResult1 = Gesture2.Pan();
      let result = PanResult1.activateAfterLongPress(100);
      let result1 = result.requireExternalGestureToFail(tmp66);
      const items12 = [closure_21, handleStart];
      c0 = undefined;
      [tmp74, tmp75] = items12;
      class UserProfileWidgetGameReorderGridTsx14 {
        constructor() {
          _undefined("cover");
        }
      }
      const items13 = [tmp75];
      UserProfileWidgetGameReorderGridTsx14.__closure = items13;
      UserProfileWidgetGameReorderGridTsx14.__workletHash = 10214830378899;
      UserProfileWidgetGameReorderGridTsx14.__initData = tmp74;
      const items14 = [closure_22, handleChange];
      c0 = undefined;
      [tmp76, tmp77] = items14;
      const onStartResult1 = result1.onStart(UserProfileWidgetGameReorderGridTsx14);
      class UserProfileWidgetGameReorderGridTsx15 {
        constructor(arg0) {
          _undefined("cover", arg0);
        }
      }
      const items15 = [tmp77];
      UserProfileWidgetGameReorderGridTsx15.__closure = items15;
      UserProfileWidgetGameReorderGridTsx15.__workletHash = 3828360208702;
      UserProfileWidgetGameReorderGridTsx15.__initData = tmp76;
      const items16 = [closure_23, handleFinalize];
      c0 = undefined;
      [tmp78, tmp79] = items16;
      const onChangeResult1 = onStartResult1.onChange(UserProfileWidgetGameReorderGridTsx15);
      class UserProfileWidgetGameReorderGridTsx16 {
        constructor() {
          _undefined("cover");
        }
      }
      const items17 = [tmp79];
      UserProfileWidgetGameReorderGridTsx16.__closure = items17;
      UserProfileWidgetGameReorderGridTsx16.__workletHash = 9475470708625;
      UserProfileWidgetGameReorderGridTsx16.__initData = tmp78;
      let obj = { coverGesture: onChangeResult1.onFinalize(UserProfileWidgetGameReorderGridTsx16), handleGesture: onFinalizeResult };
      return obj;
    }, items11);
    ({ coverGesture, handleGesture } = memo);
    let tmp66 = closure_24;
    let items12 = [closure_24, sharedValue, sharedValue6, sharedValue4, sharedValue5, sharedValue7];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    const tmp67 = items12;
    [tmp68, tmp69, tmp70, tmp71, tmp72, tmp73] = items12;
    const tmp5Result12 = tmp5(tmp3[6]);
    class UserProfileWidgetGameReorderGridTsx17 {
      constructor() {
        let items1;
        let x;
        let y;
        const value = _undefined.get();
        const point = _undefined2.get();
        let num = 0;
        if (value) {
          num = 10;
        }
        const rect = { zIndex: num, left: x, top: y, transform: items1 };
        if (value) {
          x = point.x;
        } else {
          x = _undefined3.get();
        }
        if (value) {
          y = point.y;
        } else {
          y = _undefined4.get();
        }
        if (value) {
          const items = [{ translateX: _undefined3.get() - point.x }, , ];
          const obj = { translateX: _undefined3.get() - point.x };
          items[1] = { translateY: _undefined4.get() - point.y };
          const obj2 = { translateY: _undefined4.get() - point.y };
          items[2] = { scale: _undefined5.get() };
          items1 = items;
          const obj3 = { scale: _undefined5.get() };
        } else {
          items1 = [{ scale: _undefined5.get() }];
          const obj4 = { scale: _undefined5.get() };
        }
        return rect;
      }
    }
    let items13 = [tmp69, tmp70, tmp71, tmp72, tmp73];
    UserProfileWidgetGameReorderGridTsx17.__closure = items13;
    UserProfileWidgetGameReorderGridTsx17.__workletHash = 4868178849326;
    UserProfileWidgetGameReorderGridTsx17.__initData = tmp68;
    let items14 = [];
    const animatedStyle = tmp5Result12.useAnimatedStyle(UserProfileWidgetGameReorderGridTsx17);
    if (index > 0) {
      const push = items14.push;
      const obj6 = { name: "moveup", label: intl.string(tmp5(tmp3[12]).t.eR2XSh) };
      intl = tmp5(tmp3[12]).intl;
      push(obj6);
    }
    if (index < count - 1) {
      const push2 = items14.push;
      const obj7 = { name: "movedown", label: intl2.string(tmp5(tmp3[12]).t.wWi0DL) };
      intl2 = tmp5(tmp3[12]).intl;
      push2(obj7);
    }
    const tmp77 = isDragActive;
    const obj8 = { gesture: coverGesture, children: tmp77(View, obj9) };
    const GestureDetector = tmp5(tmp3[11]).GestureDetector;
    View = tmp2(tmp3[6]).View;
    if (isLoading) {
      const intl3 = tmp5(tmp3[12]).intl;
      gameName = intl3.string(tmp5(tmp3[12]).t.ZTNur7);
    }
    obj9 = {
      accessible: true,
      accessibilityLabel: gameName,
      accessibilityActions: items14,
      onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if ("moveup" === actionName) {
            const value = orderShared.get();
            const index = value.indexOf(gameId);
            let num2 = 1;
            const clamp = _mod1654.clamp;
            _mod1654;
            const obj = orderShared;
            if ("moveup" === actionName) {
              num2 = -1;
            }
            const clampResult = clamp(index + num2, 0, value.length - 1);
            if (index >= 0) {
              if (index !== clampResult) {
                if (typeof moveItem === "function") {
                  let tmp10 = value;
                  if (index !== clampResult) {
                    tmp10 = value;
                    if (index >= 0) {
                      tmp10 = value;
                      if (index < value.length) {
                        const items = [];
                        HermesBuiltin.arraySpread(items, value, 0);
                        const _Math = Math;
                        const _Math2 = Math;
                        items.splice(Math.min(Math.max(clampResult, 0), items.length), 0, _slicedToArray(items.splice(index, 1), 1)[0]);
                        tmp10 = items;
                      }
                    }
                  }
                  const result = obj.set(tmp10);
                  onCommitOrder(tmp10);
                  const AccessibilityAnnouncer = tmp5(5052).AccessibilityAnnouncer;
                  const announce = AccessibilityAnnouncer.announce;
                  const intl = tmp5(1112).intl;
                  const obj2 = { from: index + 1, to: clampResult + 1 };
                  announce(intl.formatToPlainString(intl4.t.ndXhdC, obj2));
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            }
          }
        },
      style: items15,
      children: tmp77(orderShared, obj12)
    };
    items15 = [tmp.tile, , , ];
    const obj10 = { width: itemWidth };
    items15[1] = obj10;
    if (itemHeight > 0) {
      unmeasured = { height: itemHeight };
      const obj11 = { height: itemHeight };
    } else {
      unmeasured = tmp.unmeasured;
    }
    items15[2] = unmeasured;
    items15[3] = animatedStyle;
    const tmp78 = orderShared;
    obj12 = { "aria-hidden": true, children: renderGame(gameId, handleGesture) };
    return tmp77(GestureDetector, obj8);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_26 = { code: "(function UserProfileWidgetGameReorderGridTsx18({timeSincePreviousFrame:timeSincePreviousFrame}){let[autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset]=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);})" };
let closure_27 = { code: "(function UserProfileWidgetGameReorderGridTsx19(){let[autoScrollSpeed]=this.__closure;return autoScrollSpeed.get()!==0;})" };
let closure_28 = { code: "(function UserProfileWidgetGameReorderGridTsx20(isScrolling,wasScrolling){let[autoScrollElapsed,scheduleOnRN,setAutoScrollerActive]=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);scheduleOnRN(setAutoScrollerActive,isScrolling);})" };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameReorderGrid.tsx");

export default function UserProfileWidgetGameReorderGrid(gameIds) {
  let itemHeight;
  let itemWidth;
  let items8;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  gameIds = gameIds.gameIds;
  const columns = gameIds.columns;
  ({ itemWidth: dependencyMap, itemHeight } = gameIds);
  const gap = gameIds.gap;
  const scrollRef = gameIds.scrollRef;
  const renderGame = gameIds.renderGame;
  let sharedValue;
  let frameCallback;
  let onCommitOrder = gameIds.onCommitOrder;
  let tmp = sharedValue();
  let obj = gameIds(1654);
  sharedValue = obj.useSharedValue(gameIds);
  const obj2 = gameIds(1654);
  const sharedValue1 = obj2.useSharedValue(false);
  onCommitOrder = columns(7328)(onCommitOrder);
  const items = [gameIds, sharedValue1, sharedValue];
  const effect = gap.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(gameIds);
    }
  }, items);
  const obj4 = gameIds(1654);
  const scrollOffset = obj4.useScrollOffset(scrollRef);
  const obj5 = gameIds(1654);
  const sharedValue2 = obj5.useSharedValue(0);
  const obj6 = gameIds(1654);
  const sharedValue3 = obj6.useSharedValue(0);
  const items1 = [closure_26, sharedValue2, sharedValue3, 16.666666666666668, 700, , , , ];
  const useFrameCallback = gameIds(1654).useFrameCallback;
  items1[5] = gameIds(1654).scrollTo;
  items1[6] = scrollRef;
  items1[7] = columns(11544);
  items1[8] = scrollOffset;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items1;
  const obj3 = gap;
  class UserProfileWidgetGameReorderGridTsx18 {
    constructor(timeSincePreviousFrame) {
      timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
      const value = _undefined.get();
      if (0 !== value) {
        if (null != timeSincePreviousFrame) {
          if (timeSincePreviousFrame > 0) {
            const result = _undefined2.set(_undefined2.get() + timeSincePreviousFrame);
            const value2 = _undefined2.get();
            const obj = _undefined2;
            if (value2 >= c2) {
              const result1 = obj.set(0);
              const _Math = Math;
              _undefined3(c5, 0, Math.max(_undefined4(_undefined5.get() + value * c3 * value2 / 1000), 0), false);
            }
          }
        }
      }
    }
  }
  const items2 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  UserProfileWidgetGameReorderGridTsx18.__closure = items2;
  UserProfileWidgetGameReorderGridTsx18.__workletHash = 8778224357757;
  UserProfileWidgetGameReorderGridTsx18.__initData = tmp11;
  frameCallback = useFrameCallback(UserProfileWidgetGameReorderGridTsx18, false);
  const items3 = [frameCallback];
  const callback = obj3.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items3);
  const items4 = [closure_27, sharedValue2];
  c0 = undefined;
  [tmp23, tmp24] = items4;
  const tmp2Result = gameIds(1654);
  class UserProfileWidgetGameReorderGridTsx19 {
    constructor() {
      return 0 !== _undefined.get();
    }
  }
  const items5 = [tmp24];
  UserProfileWidgetGameReorderGridTsx19.__closure = items5;
  UserProfileWidgetGameReorderGridTsx19.__workletHash = 6136464905680;
  UserProfileWidgetGameReorderGridTsx19.__initData = tmp23;
  const items6 = [closure_28, sharedValue3, , ];
  const useAnimatedReaction = tmp2Result.useAnimatedReaction;
  items6[2] = gameIds(1707).scheduleOnRN;
  items6[3] = callback;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp25, tmp26, tmp27, tmp28] = items6;
  class UserProfileWidgetGameReorderGridTsx20 {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        const result = _undefined.set(0);
        _undefined2(c2, arg0);
      }
    }
  }
  const items7 = [tmp26, tmp27, tmp28];
  UserProfileWidgetGameReorderGridTsx20.__closure = items7;
  UserProfileWidgetGameReorderGridTsx20.__workletHash = 8510465560127;
  UserProfileWidgetGameReorderGridTsx20.__initData = tmp25;
  const animatedReaction = useAnimatedReaction(UserProfileWidgetGameReorderGridTsx19, UserProfileWidgetGameReorderGridTsx20);
  const rounded = Math.ceil(gameIds.length / columns);
  let num = 0;
  if (rounded > 0) {
    num = rounded * itemHeight + (rounded - 1) * gap;
  }
  const obj7 = { accessibilityRole: "list", style: items8, children: gameIds.map((gameId, index) => <closure_25 key={arg0} gameId={arg0} index={arg1} count={gameIds.length} columns={columns} itemWidth={dependencyMap} itemHeight={itemHeight} gap={gap} orderShared={sharedValue} isDragActive={sharedValue1} scrollRef={scrollRef} scrollOffset={scrollOffset} autoScrollSpeed={sharedValue2} onCommitOrder={onCommitOrder} renderGame={renderGame} />) };
  items8 = [tmp.grid, { height: num }];
  return renderGame(scrollRef, obj7);
};
