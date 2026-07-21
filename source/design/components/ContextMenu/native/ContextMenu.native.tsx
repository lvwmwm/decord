// Module ID: 9294
// Function ID: 72577
// Name: ContextMenu
// Dependencies: []
// Exports: ContextMenu

// Module 9294 (ContextMenu)
let closure_3 = importAll(dependencyMap[0]);
({ Fragment: closure_4, jsx: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
let isFabricResult = arg1(dependencyMap[2]).isFabric();
if (isFabricResult) {
  isFabricResult = arg1(dependencyMap[3]).isIOS();
  const obj2 = arg1(dependencyMap[3]);
}
let closure_7 = { code: "function ContextMenuNativeTsx1(){const{_isFabricIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;let pageX;let pageY;let width;let height;if(_isFabricIOS){const tag=buttonTagSV.get();if(tag===-1)return;const m=measureInWindowForFWO(tag);if(m==null)return;pageX=m.x;pageY=m.y;width=m.width;height=m.height;}else{const m=measure(buttonRef);if(m==null)return;pageX=m.pageX;pageY=m.pageY;width=m.width;height=m.height;}const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){'worklet';let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}function autoPositionHorizontal(){'worklet';const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);}}" };
let closure_8 = { code: "function autoPositionVertical_ContextMenuNativeTsx2(offset){const{pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset}=this.__closure;let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}" };
let closure_9 = { code: "function autoPositionHorizontal_ContextMenuNativeTsx3(){const{pageX,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,minimumRightPosition}=this.__closure;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}" };
let closure_10 = { code: "function onPanGestureEnd_ContextMenuNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}" };
let closure_11 = { code: "function ContextMenuNativeTsx5(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_12 = { code: "function ContextMenuNativeTsx6(){const{runOnJS,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();}" };
let closure_13 = { code: "function ContextMenuNativeTsx7(){const{measureButtonAndShowMenu}=this.__closure;measureButtonAndShowMenu();}" };
let closure_14 = { code: "function ContextMenuNativeTsx8(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}" };
let closure_15 = { code: "function ContextMenuNativeTsx9(){const{runOnJS,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();}" };
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("design/components/ContextMenu/native/ContextMenu.native.tsx");

export const ContextMenu = function ContextMenu(triggerOnLongPress) {
  let children;
  let items;
  ({ children, items } = triggerOnLongPress);
  const arg1 = items;
  let flag = triggerOnLongPress.triggerOnLongPress;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let flag2 = triggerOnLongPress.triggerOnTap;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const dependencyMap = flag2;
  let flag3 = triggerOnLongPress.disableGesture;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let str = triggerOnLongPress.align;
  if (str === undefined) {
    str = "auto";
  }
  const React = str;
  const title = triggerOnLongPress.title;
  const onOpen = triggerOnLongPress.onOpen;
  const onClose = triggerOnLongPress.onClose;
  const keyboardShouldPersistTaps = triggerOnLongPress.keyboardShouldPersistTaps;
  let closure_7 = keyboardShouldPersistTaps;
  let returnRef = triggerOnLongPress.returnRef;
  let closure_8 = returnRef;
  let flag4 = triggerOnLongPress.enabled;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let closure_9 = flag4;
  const buttonRef = triggerOnLongPress.buttonRef;
  let closure_10 = buttonRef;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let height;
  let contextMenuState;
  let activeIndex;
  let activeContextMenu;
  let sharedValue1;
  let closure_21;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let obj = arg1(dependencyMap[4]);
  let animatedRef = obj.useAnimatedRef();
  if (null != buttonRef) {
    animatedRef = buttonRef;
  }
  closure_10 = animatedRef;
  let obj1 = arg1(dependencyMap[4]);
  const sharedValue = obj1.useSharedValue(-1);
  closure_11 = sharedValue;
  items = [animatedRef, sharedValue];
  const effect = React.useEffect(() => animatedRef.observe((arg0) => {
    if (null != arg0) {
      const result = closure_11.set(arg0);
    }
  }), items);
  const items1 = [items];
  const memo = React.useMemo(() => {
    const isArray = Array.isArray(items[0]);
    let obj = items;
    if (isArray) {
      let flatResult = obj.flat();
    } else {
      flatResult = obj;
    }
    let items = flatResult;
    items = [];
    if (isArray) {
      const item = items.forEach((arg0, arg1) => {
        if (arg1 > 0) {
          items.push(flatResult.indexOf(arg0[0]));
        }
      });
    }
    obj = { items: flatResult, dividerIndexes: items };
    return obj;
  }, items1);
  const items2 = memo.items;
  closure_12 = items2;
  const dividerIndexes = memo.dividerIndexes;
  closure_13 = dividerIndexes;
  closure_14 = length;
  obj = {};
  let obj3 = arg1(dependencyMap[3]);
  obj.ignoreKeyboard = obj3.isAndroid();
  const size = importDefault(dependencyMap[5])(obj);
  const width = size.width;
  closure_15 = width;
  height = size.height;
  const isFabricResult = onClose;
  const tmp5 = importDefault(dependencyMap[5]);
  contextMenuState = arg1(dependencyMap[6]).useContextMenuState();
  activeIndex = contextMenuState.activeIndex;
  const obj5 = arg1(dependencyMap[6]);
  const fontScale = arg1(dependencyMap[7]).useFontScale();
  if (undefined === returnRef) {
    returnRef = animatedRef;
  }
  closure_8 = returnRef;
  const obj6 = arg1(dependencyMap[7]);
  activeContextMenu = arg1(dependencyMap[6]).useActiveContextMenu();
  const obj7 = arg1(dependencyMap[6]);
  const result = (arg1(dependencyMap[8]).CONTEXT_MENU_ITEM_BASE_HEIGHT - 2 * arg1(dependencyMap[8]).CONTEXT_MENU_ITEM_PADDING) * fontScale;
  const result1 = 2 * arg1(dependencyMap[8]).CONTEXT_MENU_ITEM_PADDING;
  sharedValue1 = arg1(dependencyMap[4]).useSharedValue(Math.max(result + result1, arg1(dependencyMap[8]).CONTEXT_MENU_ITEM_BASE_HEIGHT));
  closure_21 = React.useRef(items2);
  const items3 = [items2];
  const layoutEffect = React.useLayoutEffect(() => {
    closure_21.current = items2;
  }, items3);
  const items4 = [activeContextMenu, contextMenuState];
  const layoutEffect1 = React.useLayoutEffect(() => {
    if (null == activeContextMenu) {
      const result = items(flag2[6]).resetContextMenuState(contextMenuState);
      const obj = items(flag2[6]);
    }
  }, items4);
  const items5 = [activeIndex, onClose];
  callback = React.useCallback((arg0) => {
    if (null != onClose) {
      onClose(arg0);
    }
    items(flag2[6]).hideContextMenu();
    const value = activeIndex.get();
    if (-1 !== value) {
      if (null != ref.current[value]) {
        obj2.action();
      }
    }
  }, items5);
  const items6 = [returnRef];
  callback1 = React.useCallback(() => {
    let obj = items(flag2[9]);
    obj = { ref: returnRef };
    const result = obj.setAccessibilityFocus(obj);
  }, items6);
  const items7 = [onOpen, contextMenuState, items2, title, keyboardShouldPersistTaps, callback, callback1, dividerIndexes];
  callback2 = React.useCallback((arg0, arg1, positionX, positionY, height, width) => {
    if (null != onOpen) {
      onOpen();
    }
    const obj = { key: items(flag2[10]).uid(), x: arg0, y: arg1, positionX, positionY, height, width, state: contextMenuState, items: items2, title, keyboardShouldPersistTaps, requestClose: callback, onClose: callback1, dividerIndexes };
    const obj2 = items(flag2[10]);
    items(flag2[6]).showContextMenu(obj);
    const obj3 = items(flag2[6]);
    if (obj4.isAndroid()) {
      const AccessibilityAnnouncer = items(flag2[11]).AccessibilityAnnouncer;
      const intl = items(flag2[12]).intl;
      AccessibilityAnnouncer.announce(intl.string(items(flag2[12]).t.ZqK0uI));
    }
  }, items7);
  class V {
    constructor() {
      if (onClose) {
        tmp8 = closure_11;
        value = closure_11.get();
        num2 = -1;
        if (-1 === value) {
          return;
        } else {
          tmp62 = items;
          tmp63 = closure_2;
          num9 = 13;
          obj5 = items(closure_2[13]);
          point = obj5.measureInWindowForFWO(value);
          tmp64 = null;
          if (null == point) {
            return;
          } else {
            x3 = point.x;
            items = x3;
            y3 = point.y;
            closure_1 = y3;
            ({ width, height: height2 } = point);
            closure_2 = height2;
            tmp6 = x3;
            tmp7 = y3;
            height = height2;
          }
        }
      } else {
        tmp = items;
        tmp2 = closure_2;
        num = 4;
        obj = items(closure_2[4]);
        tmp3 = useAnimatedRef;
        measureResult = obj.measure(useAnimatedRef);
        tmp5 = null;
        if (null == measureResult) {
          return;
        } else {
          items = measureResult.pageX;
          closure_1 = measureResult.pageY;
          ({ width, height } = measureResult);
          closure_2 = height;
        }
      }
      if (null != title) {
        tmp11 = length;
        num3 = 1;
        sum = length + 1;
      } else {
        sum = length;
      }
      num4 = 0;
      if (null != title) {
        num4 = 1;
      }
      sum1 = num4 + dividerIndexes.length;
      result = closure_20.get() * sum;
      sum2 = result + items(closure_2[8]).CONTEXT_MENU_DIVIDER_HEIGHT * sum1;
      sum3 = tmp7 + height;
      sum4 = sum3 + items(closure_2[8]).CONTEXT_MENU_OFFSET;
      closure_3 = sum4;
      diff = height - tmp7;
      sum5 = diff + items(closure_2[8]).CONTEXT_MENU_OFFSET;
      title = sum5;
      diff1 = height - sum4;
      diff2 = diff1 - items(closure_2[8]).CONTEXT_MENU_EDGE_OFFSET;
      onOpen = diff2;
      diff3 = tmp7 - items(closure_2[8]).CONTEXT_MENU_EDGE_OFFSET;
      onClose = diff3;
      keyboardShouldPersistTaps = diff2 < sum2;
      returnRef = diff3 < sum2;
      diff4 = width - tmp6 - width;
      bound = Math.max(diff4, items(closure_2[8]).CONTEXT_MENU_EDGE_OFFSET);
      closure_9 = bound;
      tmp24 = () => {
        function autoPositionVertical(arg0) {
          const CONTEXT_MENU_OFFSET = callback(closure_2[8]).CONTEXT_MENU_OFFSET;
          const obj = {};
          if (closure_7 === closure_8) {
            let str2 = "above";
            if (closure_5 > closure_6) {
              str2 = "below";
            }
            let str = str2;
          } else {
            str = "below";
            if (closure_7) {
              str = "above";
            }
          }
          let num = 0;
          if (null != arg0) {
            num = arg0;
          }
          obj.y = "above" === str ? closure_4 : closure_3 + num;
          obj.positionY = str;
          return obj;
        }
        autoPositionVertical.__closure = { pageY, height, CONTEXT_MENU_OFFSET: pageX(height[8]).CONTEXT_MENU_OFFSET, wouldOverflowBelow: closure_7, wouldOverflowAbove: closure_8, availableSpaceBelow: diff2, availableSpaceAbove: diff3, positionAboveOffset: sum5, positionBelowOffset: sum4 };
        autoPositionVertical.__workletHash = 15309589830995;
        autoPositionVertical.__initData = closure_8;
        return autoPositionVertical;
      }();
      tmp25 = () => {
        function autoPositionHorizontal() {
          const diff = callback - callback(closure_2[8]).CONTEXT_MENU_EDGE_OFFSET;
          const diff1 = closure_15 - callback(closure_2[8]).CONTEXT_MENU_EDGE_OFFSET;
          let tmp3 = callback;
          let str = "left";
          if (diff > diff1 - (callback + callback(closure_2[8]).CONTEXT_MENU_MIN_WIDTH)) {
            tmp3 = closure_9;
            str = "right";
          }
          const obj = { x: tmp3, positionX: str };
          return obj;
        }
        autoPositionHorizontal.__closure = { pageX, CONTEXT_MENU_EDGE_OFFSET: pageX(height[8]).CONTEXT_MENU_EDGE_OFFSET, screenWidth: closure_15, CONTEXT_MENU_MIN_WIDTH: pageX(height[8]).CONTEXT_MENU_MIN_WIDTH, minimumRightPosition: bound };
        autoPositionHorizontal.__workletHash = 14761866330436;
        autoPositionHorizontal.__initData = bound;
        return autoPositionHorizontal;
      }();
      if ("auto" === closure_3) {
        tmp24Result = tmp24();
        ({ y: y2, positionY: positionY2 } = tmp24Result);
        tmp25Result = tmp25();
        x2 = tmp25Result.x;
        tmp55 = items;
        tmp56 = closure_2;
        num8 = 4;
        obj4 = items(closure_2[4]);
        tmp57 = keyboardShouldPersistTaps;
        tmp58 = x2;
        tmp59 = sum2;
        tmp60 = width;
        tmp61 = obj4.runOnJS(keyboardShouldPersistTaps)(x2, y2, tmp25Result.positionX, positionY2, sum2, width);
      } else {
        tmp65 = closure_3;
        str2 = "above";
        if ("above" !== closure_3) {
          tmp66 = closure_3;
          str3 = "below";
          if ("below" !== closure_3) {
            tmp67 = closure_3;
            str4 = "left";
            str = "left";
            if ("left" === closure_3) {
              str = "right";
            }
            if ("left" === str) {
              tmp31 = items;
              tmp32 = closure_2;
              sum6 = tmp6 + width;
              sum7 = sum6 + items(closure_2[8]).CONTEXT_MENU_OFFSET;
            } else {
              tmp27 = items;
              tmp28 = closure_2;
              sum8 = bound + width;
              sum7 = sum8 + items(closure_2[8]).CONTEXT_MENU_OFFSET;
            }
            tmp33 = items;
            tmp34 = closure_2;
            num5 = -1;
            tmp24Result1 = tmp24(-1 * (items(closure_2[8]).CONTEXT_MENU_OFFSET + height));
            num6 = 4;
            ({ y, positionY } = tmp24Result1);
            obj2 = items(closure_2[4]);
            tmp36 = keyboardShouldPersistTaps;
            tmp37 = sum7;
            tmp38 = str;
            tmp39 = sum2;
            tmp40 = width;
            tmp41 = obj2.runOnJS(keyboardShouldPersistTaps)(sum7, y, str, positionY, sum2, width);
          }
        }
        tmp42 = closure_3;
        if ("above" === closure_3) {
          sum4 = sum5;
        }
        tmp25Result1 = tmp25();
        x = tmp25Result1.x;
        tmp44 = items;
        tmp45 = closure_2;
        num7 = 4;
        obj3 = items(closure_2[4]);
        tmp46 = keyboardShouldPersistTaps;
        tmp47 = x;
        tmp48 = sum4;
        tmp49 = tmp42;
        tmp50 = sum2;
        tmp51 = width;
        tmp52 = obj3.runOnJS(keyboardShouldPersistTaps)(x, sum4, tmp25Result1.positionX, tmp42, sum2, width);
      }
      return;
    }
  }
  obj = { _isFabricIOS: isFabricResult, buttonTagSV: sharedValue, measureInWindowForFWO: arg1(dependencyMap[13]).measureInWindowForFWO, measure: arg1(dependencyMap[4]).measure, buttonRef: animatedRef, title, itemCount: items2.length, dividerIndexes, approximateItemHeight: sharedValue1, CONTEXT_MENU_DIVIDER_HEIGHT: arg1(dependencyMap[8]).CONTEXT_MENU_DIVIDER_HEIGHT, CONTEXT_MENU_OFFSET: arg1(dependencyMap[8]).CONTEXT_MENU_OFFSET, screenHeight: height, CONTEXT_MENU_EDGE_OFFSET: arg1(dependencyMap[8]).CONTEXT_MENU_EDGE_OFFSET, screenWidth: width, CONTEXT_MENU_MIN_WIDTH: arg1(dependencyMap[8]).CONTEXT_MENU_MIN_WIDTH, menuAlign: str, runOnJS: arg1(dependencyMap[4]).runOnJS, showMenu: callback2 };
  V.__closure = obj;
  V.__workletHash = 6408542373252;
  V.__initData = closure_7;
  const items8 = [animatedRef, sharedValue, sharedValue1, title, items2.length, height, str, callback2, width, dividerIndexes];
  callback3 = React.useCallback(V, items8);
  const items9 = [flag, flag2, callback, flag4, contextMenuState, callback3];
  const items10 = [items2];
  const memo1 = React.useMemo(() => {
    const tmp = () => {
      function onPanGestureEnd() {
        const activeIndex = activeIndex.activeIndex;
        const value = activeIndex.get();
        callback(closure_2[4]).runOnJS(closure_22)(-1 === value);
      }
      onPanGestureEnd.__closure = { state: closure_17, runOnJS: callback(closure_2[4]).runOnJS, requestClose: closure_22 };
      onPanGestureEnd.__workletHash = 12851223476540;
      onPanGestureEnd.__initData = closure_10;
      return onPanGestureEnd;
    }();
    if (flag) {
      const Gesture2 = items(flag2[14]).Gesture;
      const PanResult = Gesture2.Pan();
      const fn4 = function i(absoluteX) {
        const result = callback(closure_2[6]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, closure_17);
      };
      let obj = { updateContextMenuState: items(flag2[6]).updateContextMenuState, state: contextMenuState };
      fn4.__closure = obj;
      fn4.__workletHash = 2460213213323;
      fn4.__initData = sharedValue;
      const enabledResult = Gesture2.Pan().enabled(flag4);
      const onUpdateResult = Gesture2.Pan().enabled(flag4).onUpdate(fn4);
      const Gesture3 = items(flag2[14]).Gesture;
      const onEndResult = Gesture2.Pan().enabled(flag4).onUpdate(fn4).onEnd(tmp);
      const LongPressResult = Gesture3.LongPress();
      const enabledResult1 = Gesture3.LongPress().enabled(flag4);
      const result = Gesture3.LongPress().enabled(flag4).minDuration(items(flag2[8]).CONTEXT_MENU_LONG_PRESS_DURATION_MS).shouldCancelWhenOutside(false);
      const fn5 = function n() {
        const obj = callback(closure_2[4]);
        callback(closure_2[4]).runOnJS(callback(closure_2[15]).triggerHapticFeedback)(callback(closure_2[8]).CONTEXT_MENU_OPEN_HAPTIC);
        callback2();
      };
      obj = { runOnJS: items(flag2[4]).runOnJS, triggerHapticFeedback: items(flag2[15]).triggerHapticFeedback, CONTEXT_MENU_OPEN_HAPTIC: items(flag2[8]).CONTEXT_MENU_OPEN_HAPTIC, measureButtonAndShowMenu: callback3 };
      fn5.__closure = obj;
      fn5.__workletHash = 13919366908951;
      fn5.__initData = items2;
      const minDurationResult = Gesture3.LongPress().enabled(flag4).minDuration(items(flag2[8]).CONTEXT_MENU_LONG_PRESS_DURATION_MS);
      const Gesture4 = items(flag2[14]).Gesture;
      return Gesture4.Simultaneous(result.onStart(fn5), onEndResult);
    } else {
      const Gesture = items(flag2[14]).Gesture;
      if (flag2) {
        const TapResult = Gesture.Tap();
        const fn3 = function o() {
          callback2();
        };
        const obj1 = { measureButtonAndShowMenu: callback3 };
        fn3.__closure = obj1;
        fn3.__workletHash = 13410382812897;
        fn3.__initData = dividerIndexes;
        let onStartResult1 = Gesture.Tap().enabled(flag4).onStart(fn3);
        const enabledResult2 = Gesture.Tap().enabled(flag4);
      } else {
        const PanResult1 = Gesture.Pan();
        const fn = function t() {
          const obj = callback(closure_2[4]);
          callback(closure_2[4]).runOnJS(callback(closure_2[15]).triggerHapticFeedback)(callback(closure_2[8]).CONTEXT_MENU_OPEN_HAPTIC);
          callback2();
        };
        const obj2 = { runOnJS: tmp3(tmp4[4]).runOnJS, triggerHapticFeedback: tmp3(tmp4[15]).triggerHapticFeedback, CONTEXT_MENU_OPEN_HAPTIC: tmp3(tmp4[8]).CONTEXT_MENU_OPEN_HAPTIC, measureButtonAndShowMenu: callback3 };
        fn.__closure = obj2;
        fn.__workletHash = 11906156003448;
        fn.__initData = width;
        const enabledResult3 = Gesture.Pan().enabled(flag4);
        const fn2 = function e(absoluteX) {
          const result = callback(closure_2[6]).updateContextMenuState(absoluteX.absoluteX, absoluteX.absoluteY, closure_17);
        };
        const obj3 = { updateContextMenuState: tmp3(tmp4[6]).updateContextMenuState, state: contextMenuState };
        fn2.__closure = obj3;
        fn2.__workletHash = 17473642675622;
        fn2.__initData = length;
        const onBeginResult = Gesture.Pan().enabled(flag4).onBegin(fn);
        onStartResult1 = Gesture.Pan().enabled(flag4).onBegin(fn).onUpdate(fn2).onEnd(tmp);
        const onUpdateResult1 = Gesture.Pan().enabled(flag4).onBegin(fn).onUpdate(fn2);
      }
      return onStartResult1;
    }
  }, items9);
  const items11 = [items2];
  const memo2 = React.useMemo(() => items2.map((label) => ({ name: label.label, label: label.label })), items10);
  const items12 = [callback3];
  const callback4 = React.useCallback((arg0) => {
    const items = arg0;
    const found = items2.find((label) => label.label === label.nativeEvent.actionName);
    if (!tmp) {
      found.action();
    }
  }, items11);
  [][0] = callback3;
  const callback5 = React.useCallback(() => {
    let isAndroidResult = items(flag2[3]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = items(flag2[16]).getIsScreenReaderEnabled();
      const obj2 = items(flag2[16]);
    }
    if (isAndroidResult) {
      items(flag2[4]).runOnUI(callback3)();
      const obj3 = items(flag2[4]);
    }
  }, items12);
  obj1 = { ref: animatedRef, onPress: callback5 };
  let tmp23;
  if (flag) {
    if (flag3) {
      tmp23 = tmp22;
    }
  }
  obj1.onLongPress = tmp23;
  obj1.accessibilityActions = memo2;
  obj1.onAccessibilityAction = callback4;
  if (flag3) {
    const obj2 = { children: children(obj1) };
    let tmp24Result = tmp24(title, obj2);
  } else {
    obj3 = { gesture: memo1, children: children(obj1) };
    tmp24Result = tmp24(arg1(dependencyMap[14]).GestureDetector, obj3);
  }
  return tmp24Result;
};
