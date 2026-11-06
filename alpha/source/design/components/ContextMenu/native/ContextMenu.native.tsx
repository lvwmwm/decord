// Module ID: 10012
// Function ID: 10013
// Name: ContextMenu
// Dependencies: [19, 21, 1377, 1652, 1493, 10013, 5796, 10014, 6179, 10015, 5177, 1113, 10016, 1705, 5450, 5406, 5420, 2]
// Exports: ContextMenu

// Module 10012 (ContextMenu)
import intl2 from "intl" /* 1113 */;
import _mod1705 from "module_1705" /* 1705 */;
import HapticUtils from "HapticUtils" /* 5406 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5420 */;
import react_native from "react-native" /* 6179 */;
import ContextMenuState from "ContextMenuState" /* 10013 */;
import ContextMenuConstants from "ContextMenuConstants" /* 10014 */;
import UID from "UID" /* 10015 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size_mod from "module_2" /* 2 */;

let _undefined, _undefined2, _undefined3;

let closure_4;
let hasOwnProperty;
({ Fragment: closure_4, jsx: hasOwnProperty } = Fragment);
let closure_6 = PlatformUtils.isIOS();
let closure_8 = { code: "(function autoPositionHorizontal_ContextMenuNativeTsx2(){let[CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]=this.__closure;const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};})" };
let closure_9 = { code: "(function ContextMenuNativeTsx3(){let[_isIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,_worklet_6531739149033_init_data,_worklet_15634429266076_init_data,CONTEXT_MENU_MIN_WIDTH,menuAlign,scheduleOnRN,showMenu]=this.__closure;let pageX;let pageY;let width;let height;if(_isIOS){const tag=buttonTagSV.get();if(tag===-1)return;const m=measureInWindowForFWO(tag);if(m==null)return;pageX=m.x;pageY=m.y;width=m.width;height=m.height;}else{const m=measure(buttonRef);if(m==null)return;pageX=m.pageX;pageY=m.pageY;width=m.width;height=m.height;}const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);const autoPositionVertical=function autoPositionVertical_ContextMenuNativeTsx1Factory([_worklet_6531739149033_init_data,pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]){const autoPositionVertical=function(offset){let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};};autoPositionVertical.__closure=[pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset];autoPositionVertical.__workletHash=6531739149033;autoPositionVertical.__initData=_worklet_6531739149033_init_data;return autoPositionVertical;}([_worklet_6531739149033_init_data,pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]);const autoPositionHorizontal=function autoPositionHorizontal_ContextMenuNativeTsx2Factory([_worklet_15634429266076_init_data,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]){const autoPositionHorizontal=function(){const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};};autoPositionHorizontal.__closure=[CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition];autoPositionHorizontal.__workletHash=15634429266076;autoPositionHorizontal.__initData=_worklet_15634429266076_init_data;return autoPositionHorizontal;}([_worklet_15634429266076_init_data,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]);if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}})" };
let closure_10 = { code: "(function onPanGestureEnd_ContextMenuNativeTsx4(){let[state,scheduleOnRN,requestClose]=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;scheduleOnRN(requestClose,isDismiss);})" };
let closure_11 = { code: "(function ContextMenuNativeTsx5(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let closure_12 = { code: "(function ContextMenuNativeTsx6(){let[scheduleOnRN,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu]=this.__closure;scheduleOnRN(triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();})" };
let closure_13 = { code: "(function ContextMenuNativeTsx7(){let[measureButtonAndShowMenu]=this.__closure;measureButtonAndShowMenu();})" };
let closure_14 = { code: "(function ContextMenuNativeTsx8(){let[scheduleOnRN,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu]=this.__closure;scheduleOnRN(triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();})" };
let closure_15 = { code: "(function ContextMenuNativeTsx9(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenu.native.tsx");

export function ContextMenu(triggerOnLongPress) {
  let children;
  let height;
  let items;
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
  let tmp39;
  let tmp40;
  let tmp47;
  let tmp48Result;
  let tmpResult6;
  let width;
  ({ children, items } = triggerOnLongPress);
  let flag = triggerOnLongPress.triggerOnLongPress;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = triggerOnLongPress.triggerOnTap;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = triggerOnLongPress.disableGesture;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let str = triggerOnLongPress.align;
  if (str === undefined) {
    str = "auto";
  }
  const title = triggerOnLongPress.title;
  const onOpen = triggerOnLongPress.onOpen;
  const onClose = triggerOnLongPress.onClose;
  const keyboardShouldPersistTaps = triggerOnLongPress.keyboardShouldPersistTaps;
  let flag4 = triggerOnLongPress.ignoreKeyboardHide;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let returnRef = triggerOnLongPress.returnRef;
  let flag5 = triggerOnLongPress.enabled;
  if (flag5 === undefined) {
    flag5 = true;
  }
  let buttonRef = triggerOnLongPress.buttonRef;
  let sharedValue;
  let items3;
  let dividerIndexes;
  let contextMenuState;
  let activeIndex;
  let isContextMenuActive;
  let ref;
  let requestClose;
  let callback1;
  let callback3;
  let tmp = items;
  let tmp2 = flag2;
  let obj = items(flag2[3]);
  if (buttonRef == null) {
    buttonRef = obj.useAnimatedRef();
  }
  let tmpResult = tmp(tmp2[3]);
  sharedValue = tmpResult.useSharedValue(-1);
  let obj3 = title;
  let items1 = [buttonRef, sharedValue];
  const effect = title.useEffect(() => buttonRef.observe((arg0) => {
    if (null != arg0) {
      const result = sharedValue.set(arg0);
    }
  }), items1);
  let items2 = [items];
  const memo = title.useMemo(() => {
    const isArray = Array.isArray(items[0]);
    let items1 = items;
    if (isArray) {
      items1 = arr.flat();
    }
    dividerIndexes = [];
    if (isArray) {
      const item = arr.forEach((item, index) => {
        if (index > 0) {
          dividerIndexes.push(items1.indexOf(item[0]));
        }
      });
    }
    return { items: items1, dividerIndexes };
  }, items2);
  items3 = memo.items;
  dividerIndexes = memo.dividerIndexes;
  let obj2 = { ignoreKeyboard: tmpResult6.isAndroid() };
  let tmp6 = flag(tmp2[4]);
  tmpResult6 = tmp(tmp2[2]);
  ({ width, height } = tmp6(obj2));
  tmp6(obj2);
  const tmpResult7 = tmp(tmp2[5]);
  contextMenuState = tmpResult7.useContextMenuState();
  activeIndex = contextMenuState.activeIndex;
  const tmpResult8 = tmp(tmp2[6]);
  const fontScale = tmpResult8.useFontScale();
  if (undefined === returnRef) {
    returnRef = buttonRef;
  }
  const tmpResult9 = tmp(tmp2[5]);
  isContextMenuActive = tmpResult9.useIsContextMenuActive(contextMenuState);
  const useSharedValue = tmp(tmp2[3]).useSharedValue;
  tmp(tmp2[3]);
  let result = (tmp(tmp2[7]).CONTEXT_MENU_ITEM_BASE_HEIGHT - 2 * tmp(tmp2[7]).CONTEXT_MENU_ITEM_PADDING) * fontScale;
  const result1 = 2 * tmp(tmp2[7]).CONTEXT_MENU_ITEM_PADDING;
  const sharedValue1 = useSharedValue(max(result + result1, tmp(tmp2[7]).CONTEXT_MENU_ITEM_BASE_HEIGHT));
  ref = obj3.useRef(items3);
  let items4 = [items3];
  const layoutEffect = obj3.useLayoutEffect(() => {
    ref.current = items3;
  }, items4);
  let items5 = [isContextMenuActive, contextMenuState];
  const layoutEffect1 = obj3.useLayoutEffect(() => {
    const tmp = isContextMenuActive;
    if (!tmp) {
      const obj = ContextMenuState;
      const result = obj.resetContextMenuState(contextMenuState);
    }
  }, items5);
  let items6 = [activeIndex, onClose];
  requestClose = obj3.useCallback((arg0) => {
    if (onClose != null) {
      tmp(arg0);
    }
    const obj = ContextMenuState;
    obj.hideContextMenu();
    const value = activeIndex.get();
    if (-1 !== value) {
      if (ref.current[value] != null) {
        ref.current[value].action();
      }
    }
  }, items6);
  let items7 = [returnRef];
  callback1 = obj3.useCallback(() => {
    const obj = react_native;
    const obj2 = { ref: returnRef };
    const result = obj.setAccessibilityFocus(obj2);
  }, items7);
  let items8 = [onOpen, contextMenuState, items3, title, keyboardShouldPersistTaps, flag4, requestClose, callback1, dividerIndexes];
  const callback2 = obj3.useCallback((x, y, positionX, positionY, height, width) => {
    let obj2;
    if (onOpen != null) {
      tmp();
    }
    size = { key: obj2.uid(), x, y, positionX, positionY, height, width, state: contextMenuState, items: items3, title, keyboardShouldPersistTaps, requestClose, onClose: callback1, dividerIndexes, ignoreKeyboardHide: flag4 };
    obj2 = UID;
    const obj3 = ContextMenuState;
    obj3.showContextMenu(size);
    const obj4 = PlatformUtils;
    if (obj4.isAndroid()) {
      const AccessibilityAnnouncer = tmp3(5177).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = tmp3(1113).intl;
      announce(intl.string(intl2.t.ZqK0uI));
    }
  }, items8);
  let items9 = [flag5, keyboardShouldPersistTaps, sharedValue, , , , , , , , , , , , , , , , , , ];
  const useCallback = obj3.useCallback;
  items9[3] = tmp(tmp2[12]).measureInWindowForFWO;
  items9[4] = tmp(tmp2[3]).measure;
  items9[5] = buttonRef;
  items9[6] = title;
  items9[7] = items3.length;
  items9[8] = dividerIndexes;
  items9[9] = sharedValue1;
  items9[10] = tmp(tmp2[7]).CONTEXT_MENU_DIVIDER_HEIGHT;
  items9[11] = tmp(tmp2[7]).CONTEXT_MENU_OFFSET;
  items9[12] = height;
  items9[13] = tmp(tmp2[7]).CONTEXT_MENU_EDGE_OFFSET;
  items9[14] = width;
  items9[15] = flag4;
  items9[16] = returnRef;
  items9[17] = tmp(tmp2[7]).CONTEXT_MENU_MIN_WIDTH;
  items9[18] = str;
  items9[19] = tmp(tmp2[13]).scheduleOnRN;
  items9[20] = callback2;
  let c0;
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
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items9;
  class ContextMenuNativeTsx3 {
    constructor() {
      let height;
      let pageX;
      let pageY;
      let sum;
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
      let width;
      const tmp = c0;
      if (tmp) {
        let tmp6 = _undefined;
        const value = _undefined.get();
        let num = -1;
        if (-1 !== value) {
          const tmp72 = _undefined2(value);
          if (null != tmp72) {
            ({ x: pageX, y: pageY, width, height } = tmp72);
          }
        }
      } else {
        let tmp2 = _undefined3;
        let tmp3 = c4;
        let tmp4 = _undefined3(c4);
        let tmp5 = null;
        if (null != tmp4) {
          ({ pageX, pageY, width, height } = tmp4);
        }
      }
      const tmp8 = c5;
      if (null != c5) {
        sum = c6 + 1;
      } else {
        sum = c6;
      }
      let num3 = 0;
      if (null != tmp8) {
        num3 = 1;
      }
      const sum1 = num3 + _undefined4.length;
      const sum2 = _undefined5.get() * sum + c9 * sum1;
      let sum3 = pageY + height + c10;
      const sum4 = c11 - pageY + c10;
      const diff = c11 - sum3 - c12;
      const diff1 = pageY - c12;
      let bound = Math.max(c13 - pageX - width, c12);
      items = [c14, pageY, height, c10, diff < sum2, diff1 < sum2, diff, diff1, sum4, sum3];
      c5 = undefined;
      [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items;
      function autoPositionVertical(arg0) {
        let str;
        if (c0 === c1) {
          let str2 = "above";
          if (c2 > c3) {
            str2 = "below";
          }
          str = str2;
        } else {
          str = "below";
          if (tmp) {
            str = "above";
          }
        }
        let num = arg0;
        const tmp4 = "above" === str ? c4 : c5;
        if (arg0 == null) {
          num = 0;
        }
        return { y: tmp4 + num, positionY: str };
      }
      const items1 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
      autoPositionVertical.__closure = items1;
      autoPositionVertical.__workletHash = 6531739149033;
      autoPositionVertical.__initData = tmp21;
      const items2 = [c15, c12, c13, c16, pageX, bound];
      c0 = undefined;
      _undefined = undefined;
      _undefined2 = undefined;
      _undefined3 = undefined;
      c4 = undefined;
      [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items2;
      function autoPositionHorizontal() {
        const bound = Math.max(c0, c1 - c0 - c2);
        let tmp6 = c4 <= bound;
        let tmp7 = c3;
        const tmp2 = c1;
        const tmp3 = c2;
        const tmp5 = c4;
        if (c3 <= bound === tmp6) {
          tmp6 = tmp7 - tmp > tmp2 - tmp - (tmp7 + tmp3);
        }
        let str = "left";
        if (tmp6) {
          str = "right";
          tmp7 = tmp5;
        }
        const obj = { x: Math.min(tmp7, bound), positionX: str };
        return obj;
      }
      items3 = [tmp32, tmp33, tmp34, tmp35, tmp36];
      autoPositionHorizontal.__closure = items3;
      autoPositionHorizontal.__workletHash = 15634429266076;
      autoPositionHorizontal.__initData = tmp31;
      if ("auto" === c17) {
        let str6;
        if (tmp25 === tmp26) {
          let str7 = "above";
          if (tmp27 > tmp28) {
            str7 = "below";
          }
          str6 = str7;
        } else {
          str6 = "below";
          if (tmp25) {
            str6 = "above";
          }
        }
        const _Math3 = Math;
        const bound1 = Math.max(tmp32, tmp33 - tmp32 - tmp34);
        let tmp62 = tmp36 <= bound1;
        if (tmp35 <= bound1 === tmp62) {
          tmp62 = tmp35 - tmp32 > tmp33 - tmp32 - (tmp35 + tmp34);
        }
        let str9 = "left";
        if (tmp62) {
          str9 = "right";
        }
        const _Math4 = Math;
        _undefined6(c19, Math.min(tmp35, bound1), tmp30, str9, str6, sum2, width);
      } else {
        if ("above" !== c17) {
          let str = "below";
          if ("below" !== c17) {
            let sum5;
            let str3;
            let str2 = "left";
            if ("left" === c17) {
              str2 = "right";
            }
            if ("left" === str2) {
              sum5 = pageX + width + tmp13;
            } else {
              sum5 = bound + width + tmp13;
            }
            const result = -1 * (tmp13 + height);
            if (tmp25 === tmp26) {
              let str4 = "above";
              if (tmp27 > tmp28) {
                str4 = "below";
              }
              str3 = str4;
            } else {
              str3 = "below";
              if (tmp25) {
                str3 = "above";
              }
            }
            let tmp40 = tmp30;
            if ("above" === str3) {
              tmp40 = tmp29;
            }
            _undefined6(c19, sum5, tmp40 + result, str2, str3, sum2, width);
          }
        }
        if ("above" === c17) {
          sum3 = sum4;
        }
        const _Math = Math;
        const bound2 = Math.max(tmp32, tmp33 - tmp32 - tmp34);
        let tmp50 = tmp36 <= bound2;
        if (tmp35 <= bound2 === tmp50) {
          tmp50 = tmp35 - tmp32 > tmp33 - tmp32 - (tmp35 + tmp34);
        }
        let str5 = "left";
        let tmp51 = tmp35;
        if (tmp50) {
          str5 = "right";
          tmp51 = tmp36;
        }
        const _Math2 = Math;
        _undefined6(c19, Math.min(tmp51, bound2), sum3, str5, c17, sum2, width);
      }
    }
  }
  let items10 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40];
  ContextMenuNativeTsx3.__closure = items10;
  ContextMenuNativeTsx3.__workletHash = 1550332207580;
  ContextMenuNativeTsx3.__initData = tmp20;
  let items11 = [buttonRef, sharedValue, sharedValue1, title, items3.length, height, str, callback2, width, dividerIndexes];
  callback3 = useCallback(ContextMenuNativeTsx3, items11);
  const items12 = [flag, flag2, requestClose, flag5, contextMenuState, callback3];
  const items13 = [items3];
  const memo1 = obj3.useMemo(() => {
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp23;
    let tmp24;
    let tmp30;
    let tmp31;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp4;
    let tmp44;
    let tmp45;
    let tmp46;
    let tmp47;
    let tmp48;
    let tmp5;
    let tmp6;
    let tmp7;
    items = [closure_10, , , ];
    items[1] = contextMenuState;
    items[2] = _mod1705.scheduleOnRN;
    items[3] = callback;
    let c0;
    let c1;
    let c2;
    [tmp4, tmp5, tmp6, tmp7] = items;
    function onPanGestureEnd() {
      activeIndex = _undefined.activeIndex;
      _undefined2(c2, -1 === activeIndex.get());
    }
    const items1 = [tmp5, tmp6, tmp7];
    onPanGestureEnd.__closure = items1;
    onPanGestureEnd.__workletHash = 6633715277896;
    onPanGestureEnd.__initData = tmp4;
    const tmp8 = flag;
    if (tmp8) {
      const Gesture2 = tmp2(5450).Gesture;
      const PanResult = Gesture2.Pan();
      const items2 = [closure_11, , ];
      const onUpdate2 = PanResult.enabled(flag5).onUpdate;
      PanResult.enabled(flag5);
      items2[1] = ContextMenuState.updateContextMenuState;
      items2[2] = contextMenuState;
      c0 = undefined;
      c1 = undefined;
      [tmp36, tmp37, tmp38] = items2;
      const tmp32 = flag5;
      class ContextMenuNativeTsx5 {
        constructor(absoluteX) {
          _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
        }
      }
      items3 = [tmp37, tmp38];
      ContextMenuNativeTsx5.__closure = items3;
      ContextMenuNativeTsx5.__workletHash = 5295895820498;
      ContextMenuNativeTsx5.__initData = tmp36;
      const onUpdate2Result = onUpdate2(ContextMenuNativeTsx5);
      const onEndResult = onUpdate2Result.onEnd(onPanGestureEnd);
      const Gesture3 = tmp2(5450).Gesture;
      const LongPressResult = Gesture3.LongPress();
      const enabledResult1 = LongPressResult.enabled(tmp32);
      const minDurationResult = enabledResult1.minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS);
      const result = minDurationResult.shouldCancelWhenOutside(false);
      const items4 = [closure_12, , , , ];
      const onStart = result.onStart;
      items4[1] = _mod1705.scheduleOnRN;
      items4[2] = HapticUtils.triggerHapticFeedback;
      items4[3] = ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC;
      items4[4] = callback3;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      let c3;
      [tmp44, tmp45, tmp46, tmp47, tmp48] = items4;
      class ContextMenuNativeTsx6 {
        constructor() {
          _undefined(c1, c2);
          _undefined2();
        }
      }
      const items5 = [tmp45, tmp46, tmp47, tmp48];
      ContextMenuNativeTsx6.__closure = items5;
      ContextMenuNativeTsx6.__workletHash = 14138010151587;
      ContextMenuNativeTsx6.__initData = tmp44;
      const onStartResult = onStart(ContextMenuNativeTsx6);
      const Gesture4 = tmp2(5450).Gesture;
      return Gesture4.Simultaneous(onStartResult, onEndResult);
    } else {
      let onStartResult1;
      const Gesture = tmp2(5450).Gesture;
      if (flag2) {
        const items6 = [closure_13, callback3];
        c0 = undefined;
        [tmp30, tmp31] = items6;
        const TapResult = Gesture.Tap();
        const enabledResult2 = TapResult.enabled(flag5);
        class ContextMenuNativeTsx7 {
          constructor() {
            _undefined();
          }
        }
        const items7 = [tmp31];
        class ContextMenuNativeTsx5 {
          constructor(absoluteX) {
            _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
          }
        }
        ContextMenuNativeTsx7.__workletHash = 7507777918904;
        ContextMenuNativeTsx7.__initData = tmp30;
        onStartResult1 = enabledResult2.onStart(ContextMenuNativeTsx7);
      } else {
        const PanResult1 = Gesture.Pan();
        const items8 = [closure_14, , , , ];
        const onBegin = PanResult1.enabled(flag5).onBegin;
        PanResult1.enabled(flag5);
        items8[1] = _mod1705.scheduleOnRN;
        items8[2] = HapticUtils.triggerHapticFeedback;
        items8[3] = ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC;
        class ContextMenuNativeTsx7 {
          constructor() {
            _undefined();
          }
        }
        c0 = undefined;
        c1 = undefined;
        class ContextMenuNativeTsx5 {
          constructor(absoluteX) {
            _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
          }
        }
        c3 = undefined;
        [tmp15, tmp16, tmp17, tmp18, tmp19] = items8;
        class ContextMenuNativeTsx8 {
          constructor() {
            _undefined(c1, closure_1_2);
            _undefined2();
          }
        }
        const items9 = [tmp16, tmp17, tmp18, tmp19];
        ContextMenuNativeTsx8.__closure = items9;
        ContextMenuNativeTsx8.__workletHash = 1255029642413;
        ContextMenuNativeTsx8.__initData = tmp15;
        const items10 = [closure_15, , ];
        const onUpdate = onBegin(ContextMenuNativeTsx8).onUpdate;
        onBegin(ContextMenuNativeTsx8);
        items10[1] = ContextMenuState.updateContextMenuState;
        items10[2] = contextMenuState;
        c0 = undefined;
        c1 = undefined;
        [r10099, tmp23, tmp24] = items10;
        class ContextMenuNativeTsx9 {
          constructor(absoluteX) {
            _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
          }
        }
        const items11 = [tmp23, tmp24];
        ContextMenuNativeTsx9.__closure = items11;
        ContextMenuNativeTsx9.__workletHash = 16373593377246;
        class ContextMenuNativeTsx6 {
          constructor() {
            _undefined(c1, c2);
            _undefined2();
          }
        }
        const onUpdateResult = onUpdate(ContextMenuNativeTsx9);
        onStartResult1 = onUpdateResult.onEnd(onPanGestureEnd);
      }
      return onStartResult1;
    }
  }, items12);
  const items14 = [items3];
  const memo2 = obj3.useMemo(() => items3.map((label) => ({ name: label.label, label: label.label })), items13);
  const items15 = [callback3];
  const callback4 = obj3.useCallback((arg0) => {
    let closure_0 = arg0;
    const found = items3.find((label) => label.label === nativeEvent.nativeEvent.actionName);
    if (found != null) {
      const action = found.action;
      if (action != null) {
        action();
      }
    }
  }, items14);
  [][0] = callback3;
  const callback5 = obj3.useCallback(() => {
    const obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      const tmpResult = useIsScreenReaderEnabled;
      isAndroidResult = tmpResult.getIsScreenReaderEnabled();
    }
    if (isAndroidResult) {
      const tmpResult2 = _mod1705;
      tmpResult2.scheduleOnUI(callback3);
    }
  }, items15);
  let obj4 = { ref: buttonRef, onPress: callback5, onLongPress: tmp47, accessibilityActions: memo2, onAccessibilityAction: callback4 };
  tmp47 = undefined;
  if (flag) {
    if (flag3) {
      tmp47 = tmp46;
    }
  }
  const tmp48 = onClose;
  if (flag3) {
    let tmp50 = onOpen;
    const obj5 = { children: children(obj4) };
    tmp48Result = tmp48(onOpen, obj5);
  } else {
    const obj6 = { gesture: memo1, children: children(obj4) };
    const GestureDetector = tmp(tmp2[14]).GestureDetector;
    tmp48Result = tmp48(GestureDetector, obj6);
  }
  return tmp48Result;
}
