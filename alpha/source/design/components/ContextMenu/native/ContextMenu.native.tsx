// Module ID: 9068
// Function ID: 9069
// Name: ContextMenu
// Dependencies: [19, 21, 1379, 1654, 6124, 9069, 5634, 1495, 9070, 5649, 6109, 9071, 5050, 1112, 9072, 1707, 5303, 5259, 5273, 2]
// Exports: ContextMenu

// Module 9068 (ContextMenu)
import intl2 from "intl" /* 1112 */;
import _mod1707 from "module_1707" /* 1707 */;
import HapticUtils from "HapticUtils" /* 5259 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5273 */;
import react_native from "react-native" /* 6109 */;
import ContextMenuConstants from "ContextMenuConstants" /* 9069 */;
import ContextMenuState from "ContextMenuState" /* 9070 */;
import UID from "UID" /* 9071 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size_mod from "module_2" /* 2 */;

let _Math, _Math2, _Math3, bound1, diff1, iter, label, nextResult, num4, num5, num6, str3, str4, sum3, sum4, tmp11, tmp12, tmp12Result, tmp13, tmp14, tmp20, tmp41Result, tmp41Result1, tmp49, tmp50, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72;

let closure_4;
let hasOwnProperty;
({ Fragment: closure_4, jsx: hasOwnProperty } = Fragment);
let closure_6 = PlatformUtils.isIOS();
let closure_7 = { code: "(function autoPositionHorizontal_ContextMenuNativeTsx1(){let[CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]=this.__closure;const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};})" };
let closure_8 = { code: "(function alignedPositionHorizontal_ContextMenuNativeTsx2(){let[menuAlign,pageX,width,CONTEXT_MENU_OFFSET,minimumRightPosition]=this.__closure;const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;return{x:x,positionX:positionX};})" };
let closure_9 = { code: "(function autoPositionVertical_ContextMenuNativeTsx3(offset){let[pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]=this.__closure;let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};})" };
let closure_10 = { code: "(function ContextMenuNativeTsx4(){let[_isIOS,buttonTagSV,measureInWindowForFWO,measure,buttonRef,screenWidth,CONTEXT_MENU_EDGE_OFFSET,_worklet_6415449136191_init_data,CONTEXT_MENU_MIN_WIDTH,_worklet_902167285228_init_data,menuAlign,CONTEXT_MENU_OFFSET,title,itemCount,dividerIndexes,subLabelSizes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,subLabelLineHeight,screenHeight,_worklet_17476909660843_init_data,scheduleOnRN,showMenu]=this.__closure;let pageX;let pageY;let width;let height;if(_isIOS){const tag=buttonTagSV.get();if(tag===-1)return;const m=measureInWindowForFWO(tag);if(m==null)return;pageX=m.x;pageY=m.y;width=m.width;height=m.height;}else{const m=measure(buttonRef);if(m==null)return;pageX=m.pageX;pageY=m.pageY;width=m.width;height=m.height;}const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);const autoPositionHorizontal=function autoPositionHorizontal_ContextMenuNativeTsx1Factory([_worklet_6415449136191_init_data,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]){const autoPositionHorizontal=function(){const maxOffset=Math.max(CONTEXT_MENU_EDGE_OFFSET,screenWidth-CONTEXT_MENU_EDGE_OFFSET-CONTEXT_MENU_MIN_WIDTH);const fitsLeft=pageX<=maxOffset;const fitsRight=minimumRightPosition<=maxOffset;const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(fitsLeft!==fitsRight?fitsRight:distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:Math.min(x,maxOffset),positionX:positionX};};autoPositionHorizontal.__closure=[CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition];autoPositionHorizontal.__workletHash=6415449136191;autoPositionHorizontal.__initData=_worklet_6415449136191_init_data;return autoPositionHorizontal;}([_worklet_6415449136191_init_data,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,pageX,minimumRightPosition]);const alignedPositionHorizontal=function alignedPositionHorizontal_ContextMenuNativeTsx2Factory([_worklet_902167285228_init_data,menuAlign,pageX,width,CONTEXT_MENU_OFFSET,minimumRightPosition]){const alignedPositionHorizontal=function(){const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;return{x:x,positionX:positionX};};alignedPositionHorizontal.__closure=[menuAlign,pageX,width,CONTEXT_MENU_OFFSET,minimumRightPosition];alignedPositionHorizontal.__workletHash=902167285228;alignedPositionHorizontal.__initData=_worklet_902167285228_init_data;return alignedPositionHorizontal;}([_worklet_902167285228_init_data,menuAlign,pageX,width,CONTEXT_MENU_OFFSET,minimumRightPosition]);const{x:x,positionX:positionX}=menuAlign==='left'||menuAlign==='right'?alignedPositionHorizontal():autoPositionHorizontal();const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuWidth=Math.max(screenWidth-CONTEXT_MENU_EDGE_OFFSET-x,CONTEXT_MENU_MIN_WIDTH);let subLabelLineCount=0;for(const{textWidth:textWidth,inset:inset}of subLabelSizes){subLabelLineCount+=Math.max(1,Math.ceil(textWidth/(menuWidth-inset)));}const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount+subLabelLineHeight*subLabelLineCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const autoPositionVertical=function autoPositionVertical_ContextMenuNativeTsx3Factory([_worklet_17476909660843_init_data,pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]){const autoPositionVertical=function(offset){let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow===wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};};autoPositionVertical.__closure=[pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset];autoPositionVertical.__workletHash=17476909660843;autoPositionVertical.__initData=_worklet_17476909660843_init_data;return autoPositionVertical;}([_worklet_17476909660843_init_data,pageY,height,CONTEXT_MENU_OFFSET,wouldOverflowBelow,wouldOverflowAbove,availableSpaceBelow,availableSpaceAbove,positionAboveOffset,positionBelowOffset]);if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}else{const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));scheduleOnRN(showMenu,x,y,positionX,positionY,menuHeight,width);}})" };
let closure_11 = { code: "(function onPanGestureEnd_ContextMenuNativeTsx5(){let[state,scheduleOnRN,requestClose]=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;scheduleOnRN(requestClose,isDismiss);})" };
let closure_12 = { code: "(function ContextMenuNativeTsx6(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let closure_13 = { code: "(function ContextMenuNativeTsx7(){let[scheduleOnRN,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu]=this.__closure;scheduleOnRN(triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();})" };
let length = { code: "(function ContextMenuNativeTsx8(){let[measureButtonAndShowMenu]=this.__closure;measureButtonAndShowMenu();})" };
let closure_15 = { code: "(function ContextMenuNativeTsx9(){let[scheduleOnRN,triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC,measureButtonAndShowMenu]=this.__closure;scheduleOnRN(triggerHapticFeedback,CONTEXT_MENU_OPEN_HAPTIC);measureButtonAndShowMenu();})" };
let closure_16 = { code: "(function ContextMenuNativeTsx10(e){let[updateContextMenuState,state]=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);})" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenu.native.tsx");

export function ContextMenu(triggerOnLongPress) {
  let children;
  let height;
  let items;
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
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp51;
  let tmp52Result;
  let tmpResult8;
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
  let scaledTextLineHeight;
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
  length = items3.length;
  const tmpResult7 = tmp(tmp2[4]);
  scaledTextLineHeight = tmpResult7.useScaledTextLineHeight(tmp(tmp2[5]).CONTEXT_MENU_ITEM_SUB_LABEL_VARIANT);
  let items4 = [items3, scaledTextLineHeight];
  const memo1 = title.useMemo(() => {
    ({ fontSize: items, lineHeight: flag } = items(flag2[6]).TextStyleSheet[items(undefined, flag2[5]).CONTEXT_MENU_ITEM_SUB_LABEL_VARIANT]);
    return items3.flatMap((subLabel) => {
      let diff;
      let result1;
      if (null == subLabel.subLabel) {
        return [];
      } else {
        let num;
        const result = 2 * ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING;
        const sum = result + ContextMenuConstants.CONTEXT_MENU_ITEM_GAP;
        if (null != tmp) {
          num = tmp11(9069).CONTEXT_MENU_ITEM_ICON_SIZE;
        } else {
          num = 0;
        }
        let num2 = 0;
        const sum1 = sum + num;
        if (null != tmp3) {
          num2 = tmp11(9069).CONTEXT_MENU_ITEM_GAP + tmp11(9069).CONTEXT_MENU_ITEM_ICON_SIZE;
        }
        const sum2 = sum1 + num2;
        const match = str.match(tmp11(9069).CONTEXT_MENU_ITEM_SUB_LABEL_FULL_WIDTH_CHARACTERS);
        let num3;
        if (match != null) {
          num3 = match.length;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const obj = { textWidth: result1 * (diff * ContextMenuConstants.CONTEXT_MENU_ITEM_SUB_LABEL_GLYPH_WIDTH + num3), inset: sum2 };
        result1 = closure_1_0 * (scaledTextLineHeight / flag);
        diff = str.length - num3;
        items = [obj];
        return items;
      }
    });
  }, items4);
  let obj2 = { ignoreKeyboard: tmpResult8.isAndroid() };
  let tmp8 = flag(tmp2[7]);
  tmpResult8 = tmp(tmp2[2]);
  ({ width, height } = tmp8(obj2));
  tmp8(obj2);
  const tmpResult9 = tmp(tmp2[8]);
  contextMenuState = tmpResult9.useContextMenuState();
  activeIndex = contextMenuState.activeIndex;
  const tmpResult10 = tmp(tmp2[9]);
  const fontScale = tmpResult10.useFontScale();
  if (undefined === returnRef) {
    returnRef = buttonRef;
  }
  const tmpResult11 = tmp(tmp2[8]);
  isContextMenuActive = tmpResult11.useIsContextMenuActive(contextMenuState);
  const useSharedValue = tmp(tmp2[3]).useSharedValue;
  tmp(tmp2[3]);
  let result = (tmp(tmp2[5]).CONTEXT_MENU_ITEM_BASE_HEIGHT - 2 * tmp(tmp2[5]).CONTEXT_MENU_ITEM_PADDING) * fontScale;
  let result1 = 2 * tmp(tmp2[5]).CONTEXT_MENU_ITEM_PADDING;
  const sharedValue1 = useSharedValue(max(result + result1, tmp(tmp2[5]).CONTEXT_MENU_ITEM_BASE_HEIGHT));
  ref = obj3.useRef(items3);
  let items5 = [isContextMenuActive, contextMenuState];
  const layoutEffect = obj3.useLayoutEffect(() => {
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
    ref.current = items3;
    size = { key: obj2.uid(), x, y, positionX, positionY, height, width, state: contextMenuState, items: items3, title, keyboardShouldPersistTaps, requestClose, onClose: callback1, dividerIndexes, ignoreKeyboardHide: flag4 };
    obj2 = UID;
    const obj3 = ContextMenuState;
    obj3.showContextMenu(size);
    const obj4 = PlatformUtils;
    if (obj4.isAndroid()) {
      const AccessibilityAnnouncer = tmp3(5050).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = tmp3(1112).intl;
      announce(intl.string(intl2.t.ZqK0uI));
    }
  }, items8);
  let items9 = [buttonRef, keyboardShouldPersistTaps, sharedValue, , , , , , , , , , , , , , , , , , , , , ];
  const useCallback = obj3.useCallback;
  items9[3] = tmp(tmp2[14]).measureInWindowForFWO;
  items9[4] = tmp(tmp2[3]).measure;
  items9[5] = buttonRef;
  items9[6] = width;
  items9[7] = tmp(tmp2[5]).CONTEXT_MENU_EDGE_OFFSET;
  items9[8] = flag4;
  items9[9] = tmp(tmp2[5]).CONTEXT_MENU_MIN_WIDTH;
  items9[10] = returnRef;
  items9[11] = str;
  items9[12] = tmp(tmp2[5]).CONTEXT_MENU_OFFSET;
  items9[13] = title;
  items9[14] = length;
  items9[15] = dividerIndexes;
  items9[16] = memo1;
  items9[17] = sharedValue1;
  items9[18] = tmp(tmp2[5]).CONTEXT_MENU_DIVIDER_HEIGHT;
  items9[19] = scaledTextLineHeight;
  items9[20] = height;
  items9[21] = flag5;
  items9[22] = tmp(tmp2[15]).scheduleOnRN;
  items9[23] = callback2;
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
  let c20;
  let c21;
  let c22;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items9;
  class ContextMenuNativeTsx4 {
    constructor() {
      tmp = closure_0;
      if (tmp) {
        tmp6 = closure_1;
        value = closure_1.get();
        num = -1;
        if (-1 === value) {
          return;
        } else {
          tmp70 = closure_2;
          tmp71 = closure_2(value);
          tmp72 = null;
          if (null == tmp71) {
            return;
          } else {
            ({ x: pageX, y: pageY, width, height } = tmp71);
          }
        }
      } else {
        tmp2 = closure_3;
        tmp3 = closure_4;
        tmp4 = closure_3(closure_4);
        tmp5 = null;
        if (null == tmp4) {
          return;
        } else {
          ({ pageX, pageY, width, height } = tmp4);
        }
      }
      tmp8 = closure_5;
      tmp9 = closure_6;
      bound = Math.max(closure_5 - pageX - width, closure_6);
      items = [, , , , , ];
      items[0] = closure_7;
      items[1] = closure_6;
      items[2] = closure_5;
      items[3] = closure_8;
      items[4] = pageX;
      items[5] = bound;
      tmp11 = closure_8;
      items1 = [, , , , , ];
      items1[0] = closure_9;
      items1[1] = closure_10;
      items1[2] = pageX;
      items1[3] = width;
      items1[4] = closure_11;
      items1[5] = bound;
      tmp12 = (function autoPositionHorizontal_ContextMenuNativeTsx1Factory(items) {
        let tmp;
        let tmp2;
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp6;
        [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items;
        function autoPositionHorizontal() {
          const bound = Math.max(closure_1_0, closure_1_1 - closure_1_0 - closure_1_2);
          let tmp6 = closure_1_4 <= bound;
          let tmp7 = closure_1_3;
          const tmp2 = closure_1_1;
          const tmp3 = closure_1_2;
          const tmp5 = closure_1_4;
          if (closure_1_3 <= bound === tmp6) {
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
        items = [tmp2, tmp3, tmp4, tmp5, tmp6];
        autoPositionHorizontal.__closure = items;
        autoPositionHorizontal.__workletHash = 6415449136191;
        autoPositionHorizontal.__initData = tmp;
        return autoPositionHorizontal;
      })(items);
      tmp13 = closure_10;
      tmp14 = (function alignedPositionHorizontal_ContextMenuNativeTsx2Factory(items1) {
        let tmp;
        let tmp2;
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp6;
        [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items1;
        function alignedPositionHorizontal() {
          let x;
          let positionX = "left";
          if ("left" === closure_1_0) {
            positionX = "right";
          }
          if ("left" === positionX) {
            x = closure_1_1 + closure_1_2 + closure_1_3;
          } else {
            x = closure_1_4 + closure_1_2 + closure_1_3;
          }
          return { x, positionX };
        }
        items = [tmp2, tmp3, tmp4, tmp5, tmp6];
        alignedPositionHorizontal.__closure = items;
        alignedPositionHorizontal.__workletHash = 902167285228;
        alignedPositionHorizontal.__initData = tmp;
        return alignedPositionHorizontal;
      })(items1);
      if ("left" !== closure_10) {
        str = "right";
        if ("right" !== tmp13) {
          tmp12Result = tmp12();
        }
        ({ x, positionX } = tmp12Result);
        tmp17 = null;
        tmp16 = closure_12;
        if (null != closure_12) {
          tmp19 = closure_13;
          num2 = 1;
          sum = closure_13 + 1;
        } else {
          sum = closure_13;
        }
        num3 = 0;
        if (null != tmp16) {
          num3 = 1;
        }
        tmp20 = closure_14;
        _Math = Math;
        sum1 = num3 + closure_14.length;
        num4 = 0;
        tmp24 = closure_15;
        bound1 = Math.max(tmp8 - tmp9 - x, tmp11);
        tmp23 = closure_15;
        iter = closure_15[Symbol.iterator]();
        num5 = 1;
        tmp25 = tmp23;
        nextResult = iter.next();
        tmp27 = iter;
        while (iter !== undefined) {
          tmp28 = num4;
          _Math2 = Math;
          _Math3 = Math;
          num4 = num4 + Math.max(1, Math.ceil(nextResult.textWidth / (bound1 - nextResult.inset)));
          continue;
        }
        tmp29 = closure_16;
        tmp30 = closure_17;
        tmp31 = closure_18;
        sum2 = closure_16.get() * sum + closure_17 * sum1 + closure_18 * num4;
        sum3 = pageY + height + closure_11;
        tmp35 = closure_19;
        sum4 = closure_19 - pageY + closure_11;
        tmp37 = closure_6;
        diff = closure_19 - sum3 - closure_6;
        diff1 = pageY - closure_6;
        tmp40 = closure_20;
        items2 = [, , , , , , , , , ];
        items2[0] = closure_20;
        items2[1] = pageY;
        items2[2] = height;
        items2[3] = closure_11;
        items2[4] = diff < sum2;
        items2[5] = diff1 < sum2;
        items2[6] = diff;
        items2[7] = diff1;
        items2[8] = sum4;
        items2[9] = sum3;
        tmp33 = closure_11;
        tmp41 = (function autoPositionVertical_ContextMenuNativeTsx3Factory(items2) {
          let tmp;
          let tmp10;
          let tmp2;
          let tmp3;
          let tmp4;
          let tmp5;
          let tmp6;
          let tmp7;
          let tmp8;
          let tmp9;
          [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items2;
          function autoPositionVertical(arg0) {
            let str;
            if (closure_1_0 === closure_1_1) {
              let str2 = "above";
              if (closure_1_2 > closure_1_3) {
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
            const tmp4 = "above" === str ? closure_1_4 : closure_1_5;
            if (arg0 == null) {
              num = 0;
            }
            return { y: tmp4 + num, positionY: str };
          }
          items = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
          autoPositionVertical.__closure = items;
          autoPositionVertical.__workletHash = 17476909660843;
          autoPositionVertical.__initData = tmp;
          return autoPositionVertical;
        })(items2);
        tmp42 = closure_10;
        str2 = "auto";
        if ("auto" === closure_10) {
          tmp41Result = tmp41();
          tmp63 = closure_21;
          tmp64 = closure_22;
          tmp65 = x;
          tmp66 = positionX;
          tmp67 = sum2;
          tmp68 = width;
          tmp69 = closure_21(closure_22, x, tmp41Result.y, positionX, tmp41Result.positionY, sum2, width);
        } else {
          str3 = "above";
          tmp43 = "above" === tmp42;
          if (!tmp43) {
            str4 = "below";
            if ("below" !== tmp42) {
              num6 = -1;
              tmp41Result1 = tmp41(-1 * (tmp33 + height));
              tmp45 = closure_21;
              tmp46 = closure_22;
              tmp47 = x;
              tmp48 = positionX;
              tmp49 = sum2;
              tmp50 = width;
              tmp51 = closure_21(closure_22, x, tmp41Result1.y, positionX, tmp41Result1.positionY, sum2, width);
            }
          }
          tmp53 = closure_22;
          tmp52 = closure_21;
          if (tmp43) {
            sum3 = sum4;
          }
          tmp54 = tmp53;
          tmp55 = x;
          tmp56 = sum3;
          tmp57 = positionX;
          tmp58 = tmp42;
          tmp59 = sum2;
          tmp60 = width;
          tmp52Result = tmp52(tmp53, x, sum3, positionX, tmp42, sum2, width);
        }
        return;
      }
      tmp12Result = tmp14();
      return;
    }
  }
  let items10 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
  ContextMenuNativeTsx4.__closure = items10;
  ContextMenuNativeTsx4.__workletHash = 10100660931029;
  ContextMenuNativeTsx4.__initData = tmp21;
  let items11 = [buttonRef, sharedValue, sharedValue1, title, length, memo1, scaledTextLineHeight, height, str, callback2, width, dividerIndexes];
  callback3 = useCallback(ContextMenuNativeTsx4, items11);
  const items12 = [flag, flag2, requestClose, flag5, contextMenuState, callback3];
  const items13 = [items3];
  const memo2 = obj3.useMemo(() => {
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
    items = [closure_11, , , ];
    items[1] = contextMenuState;
    items[2] = _mod1707.scheduleOnRN;
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
    onPanGestureEnd.__workletHash = 16518527967049;
    onPanGestureEnd.__initData = tmp4;
    const tmp8 = flag;
    if (tmp8) {
      const Gesture2 = tmp2(5303).Gesture;
      const PanResult = Gesture2.Pan();
      const items2 = [closure_12, , ];
      const onUpdate2 = PanResult.enabled(flag5).onUpdate;
      PanResult.enabled(flag5);
      items2[1] = ContextMenuState.updateContextMenuState;
      items2[2] = contextMenuState;
      c0 = undefined;
      c1 = undefined;
      [tmp36, tmp37, tmp38] = items2;
      const tmp32 = flag5;
      class ContextMenuNativeTsx6 {
        constructor(absoluteX) {
          _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
        }
      }
      items3 = [tmp37, tmp38];
      ContextMenuNativeTsx6.__closure = items3;
      ContextMenuNativeTsx6.__workletHash = 89879631185;
      ContextMenuNativeTsx6.__initData = tmp36;
      const onUpdate2Result = onUpdate2(ContextMenuNativeTsx6);
      const onEndResult = onUpdate2Result.onEnd(onPanGestureEnd);
      const Gesture3 = tmp2(5303).Gesture;
      const LongPressResult = Gesture3.LongPress();
      const enabledResult1 = LongPressResult.enabled(tmp32);
      const minDurationResult = enabledResult1.minDuration(ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS);
      const result = minDurationResult.shouldCancelWhenOutside(false);
      const items4 = [closure_13, , , , ];
      const onStart = result.onStart;
      items4[1] = _mod1707.scheduleOnRN;
      items4[2] = HapticUtils.triggerHapticFeedback;
      items4[3] = ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC;
      items4[4] = callback3;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      let c3;
      [tmp44, tmp45, tmp46, tmp47, tmp48] = items4;
      class ContextMenuNativeTsx7 {
        constructor() {
          _undefined(c1, c2);
          _undefined2();
        }
      }
      const items5 = [tmp45, tmp46, tmp47, tmp48];
      ContextMenuNativeTsx7.__closure = items5;
      ContextMenuNativeTsx7.__workletHash = 8112947832354;
      ContextMenuNativeTsx7.__initData = tmp44;
      const onStartResult = onStart(ContextMenuNativeTsx7);
      const Gesture4 = tmp2(5303).Gesture;
      return Gesture4.Simultaneous(onStartResult, onEndResult);
    } else {
      let onStartResult1;
      const Gesture = tmp2(5303).Gesture;
      if (flag2) {
        const items6 = [length, callback3];
        c0 = undefined;
        [tmp30, tmp31] = items6;
        const TapResult = Gesture.Tap();
        const enabledResult2 = TapResult.enabled(flag5);
        class ContextMenuNativeTsx8 {
          constructor() {
            _undefined();
          }
        }
        const items7 = [tmp31];
        class ContextMenuNativeTsx6 {
          constructor(absoluteX) {
            _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
          }
        }
        ContextMenuNativeTsx8.__workletHash = 2417298642999;
        ContextMenuNativeTsx8.__initData = tmp30;
        onStartResult1 = enabledResult2.onStart(ContextMenuNativeTsx8);
      } else {
        const PanResult1 = Gesture.Pan();
        const items8 = [closure_15, , , , ];
        const onBegin = PanResult1.enabled(flag5).onBegin;
        PanResult1.enabled(flag5);
        items8[1] = _mod1707.scheduleOnRN;
        items8[2] = HapticUtils.triggerHapticFeedback;
        items8[3] = ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC;
        class ContextMenuNativeTsx8 {
          constructor() {
            _undefined();
          }
        }
        c0 = undefined;
        c1 = undefined;
        class ContextMenuNativeTsx6 {
          constructor(absoluteX) {
            _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
          }
        }
        c3 = undefined;
        [tmp15, tmp16, tmp17, tmp18, tmp19] = items8;
        class ContextMenuNativeTsx9 {
          constructor() {
            _undefined(c1, closure_1_2);
            _undefined2();
          }
        }
        const items9 = [tmp16, tmp17, tmp18, tmp19];
        ContextMenuNativeTsx9.__closure = items9;
        ContextMenuNativeTsx9.__workletHash = 16873439989804;
        ContextMenuNativeTsx9.__initData = tmp15;
        const items10 = [closure_16, , ];
        const onUpdate = onBegin(ContextMenuNativeTsx9).onUpdate;
        onBegin(ContextMenuNativeTsx9);
        items10[1] = ContextMenuState.updateContextMenuState;
        items10[2] = contextMenuState;
        c0 = undefined;
        c1 = undefined;
        [r10099, tmp23, tmp24] = items10;
        class ContextMenuNativeTsx10 {
          constructor(absoluteX) {
            _undefined(absoluteX.absoluteX, absoluteX.absoluteY, c1);
          }
        }
        const items11 = [tmp23, tmp24];
        ContextMenuNativeTsx10.__closure = items11;
        ContextMenuNativeTsx10.__workletHash = 13412244797894;
        class ContextMenuNativeTsx7 {
          constructor() {
            _undefined(c1, c2);
            _undefined2();
          }
        }
        const onUpdateResult = onUpdate(ContextMenuNativeTsx10);
        onStartResult1 = onUpdateResult.onEnd(onPanGestureEnd);
      }
      return onStartResult1;
    }
  }, items12);
  const items14 = [items3];
  const memo3 = obj3.useMemo(() => {
    const found = items3.filter((disabled) => true !== disabled.disabled);
    return found.map((label) => {
      const obj = { name: label.label, label };
      if (null != label.subLabel) {
        const _HermesInternal = HermesInternal;
        label = "" + label.label + ", " + label.subLabel;
      } else {
        label = label.label;
      }
      return obj;
    });
  }, items13);
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
      const tmpResult2 = _mod1707;
      tmpResult2.scheduleOnUI(callback3);
    }
  }, items15);
  let obj4 = { ref: buttonRef, onPress: callback5, onLongPress: tmp51, accessibilityActions: memo3, onAccessibilityAction: callback4 };
  tmp51 = undefined;
  if (flag) {
    if (flag3) {
      tmp51 = tmp50;
    }
  }
  let tmp52 = onClose;
  if (flag3) {
    const obj5 = { children: children(obj4) };
    tmp52Result = tmp52(onOpen, obj5);
  } else {
    const obj6 = { gesture: memo2, children: children(obj4) };
    const GestureDetector = tmp(tmp2[16]).GestureDetector;
    tmp52Result = tmp52(GestureDetector, obj6);
  }
  return tmp52Result;
}
