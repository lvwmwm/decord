// Module ID: 14858
// Function ID: 113291
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 31, 27, 1838, 4970, 14859, 14860, 3991, 574, 4099, 3976, 22, 1184, 1212, 7677, 14849, 3834, 689, 3743, 9923, 682, 5048, 8042, 9339, 477, 1557, 4528, 14861, 14862, 14048, 5217, 2]
// Exports: default

// Module 14858 (_createForOfIteratorHelperLoose)
import withEqualityFn from "withEqualityFn";
import set from "set";
import { Dimensions } from "getGuildsBarGuildMenuItems";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildsNodeType } from "_isNativeReflectConstruct";
import importDefaultResult from "withEqualityFn";
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE";
import module_3991 from "module_3991";
import module_3991 from "module_3991";
import module_3991 from "module_3991";
import apply from "convertThemeToProto";
import apply from "convertThemeToProto";
import importDefaultResult1 from "debounce";

let closure_10;
let closure_11;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getGuildOrFolderLabel(overNode) {
  const type = overNode.type;
  if (GuildsNodeType.GUILD === type) {
    guild = guild.getGuild(overNode.id);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    if (null == name) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      name = intl2.string(require(1212) /* getSystemLocale */.t.fKYRlM);
    }
    return name;
  } else if (GuildsNodeType.FOLDER === type) {
    name = overNode.name;
    if (null == name) {
      const intl = require(1212) /* getSystemLocale */.intl;
      name = intl.string(require(1212) /* getSystemLocale */.t.ebAnWE);
    }
    return name;
  }
}
function getDropIndex(dragNode, overNode, overState) {
  let tmp = overNode;
  if ("self" === overState) {
    tmp = dragNode;
  }
  const tmp2 = _createForOfIteratorHelperLoose(store.getFlattenedGuildFolderList());
  const iter = tmp2();
  let iter2 = iter;
  let num = -1;
  let num2 = -1;
  if (!iter.done) {
    const sum = num + 1;
    num2 = sum;
    while (iter2.value.id !== tmp.id) {
      let iter3 = tmp2();
      iter2 = iter3;
      num = sum;
      num2 = sum;
      if (iter3.done) {
        break;
      }
    }
  }
  if ("after" !== overState) {
    if ("convert-after" !== overState) {
      return num2;
    }
  }
  return num2 + 1;
}
function triggerHapticsAndAnnouncementsIfNecessary(type) {
  let dragNode;
  let overNode;
  let overState;
  type = type.type;
  if ("drag-start" === type) {
    const tmp34 = getGuildOrFolderLabel(type.node);
    if (null != tmp34) {
      const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let obj = { itemName: tmp34 };
      AccessibilityAnnouncer.announce(intl4.formatToPlainString(require(1212) /* getSystemLocale */.t["vHD/Je"], obj));
    }
    lib(require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.DRAG_AND_DROP_START);
    lib.flush();
  } else if ("drag-move" === type) {
    type = undefined;
    if (null != _undefined) {
      type = _undefined.type;
    }
    let type1;
    if (null != _undefined) {
      type1 = _undefined.type;
    }
    if ("drag-move" === type1) {
      let tmp7 = getDropIndex(_undefined.dragNode, _undefined.overNode, _undefined.overState);
    } else {
      tmp7 = getDropIndex(type.dragNode, type.dragNode, "self");
    }
    let type2;
    if (null != _undefined) {
      type2 = _undefined.type;
    }
    let str2 = "self";
    let str3 = "self";
    if ("drag-start" !== type2) {
      overState = undefined;
      if (null != _undefined) {
        overState = _undefined.overState;
      }
      if (null != overState) {
        str2 = overState;
      }
      str3 = str2;
    }
    if (tmp7 !== tmp13) {
      lib(require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
      ({ dragNode, overNode, overState } = type);
      if ("convert-before" !== overState) {
        if ("convert-after" !== overState) {
          if ("drop-into" === overState) {
            let formatToPlainStringResult;
            if (overNode.type === GuildsNodeType.FOLDER) {
              const intl2 = require(1212) /* getSystemLocale */.intl;
              obj = { folderName: overNode.name };
              formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.uLDoxR, obj);
            }
            let formatToPlainStringResult1 = formatToPlainStringResult;
          } else if ("before" === overState) {
            const intl = require(1212) /* getSystemLocale */.intl;
            obj = { itemName: getGuildOrFolderLabel(overNode) };
            formatToPlainStringResult1 = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["A5aDw+"], obj);
          } else if ("after" === overState) {
            const intl6 = require(1212) /* getSystemLocale */.intl;
            const obj1 = { itemName: getGuildOrFolderLabel(overNode) };
            formatToPlainStringResult1 = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.w8FN92, obj1);
          }
        }
        if (null != formatToPlainStringResult1) {
          lib2(formatToPlainStringResult1);
        }
      }
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const obj2 = { itemName: getGuildOrFolderLabel(overNode) };
      formatToPlainStringResult1 = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.qiQ0QI, obj2);
    } else {
      const tmp17 = isConvertOverState(type.overState);
    }
    tmp13 = getDropIndex(type.dragNode, type.overNode, type.overState);
  } else if ("drag-drop" === type) {
    lib(require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.DRAG_AND_DROP_END);
    lib.flush();
    lib2.flush();
    const AccessibilityAnnouncer2 = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl5 = require(1212) /* getSystemLocale */.intl;
    AccessibilityAnnouncer2.announce(intl5.string(require(1212) /* getSystemLocale */.t.lMkmz7));
  }
  let tmp45;
  if ("drag-drop" !== type.type) {
    tmp45 = type;
  }
  _undefined = tmp45;
}
function isConvertOverState(overState) {
  let startsWithResult = null != overState;
  if (startsWithResult) {
    startsWithResult = overState.startsWith("convert");
  }
  return startsWithResult;
}
function getItemAndNodeFromTouchEvent(arg0, arg1, current) {
  let dragRegion;
  let scrollPosition;
  const state = importDefaultResult.getState();
  ({ dragRegion, scrollPosition } = state);
  const sum = scrollPosition.get() + arg0;
  let bound = sum;
  if (arg1) {
    const value = dragRegion.get();
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(Math.min(sum, value.max - 2), value.min + 2);
  }
  current = current.current;
  let sectionItemFromPosition;
  if (null != current) {
    sectionItemFromPosition = current.getSectionItemFromPosition(bound, arg3);
  }
  if (null == sectionItemFromPosition) {
    let obj = { item: undefined, positionPercentage: 0 };
    sectionItemFromPosition = obj;
  }
  const item = sectionItemFromPosition.item;
  if (null == item) {
    obj = { item };
    const _Math3 = Math;
    obj.overPercentage = Math.floor(100 * tmp9) / 100;
    obj.node = undefined;
    obj.pointerPosition = bound;
    return obj;
  } else {
    let element = tmp6 == item;
    let tmp10;
    if (!element) {
      element = item.section < constants.GUILDS;
      if (!element) {
        element = store.getFastListGuildFolders()[item.section - constants.GUILDS];
        if (tmp6 != element) {
          const type = item.type;
          if (require(7677) /* _isNativeReflectConstruct */.FastListItemTypes.SECTION !== type) {
            if (require(7677) /* _isNativeReflectConstruct */.FastListItemTypes.ITEM === type) {
              if (element.type !== GuildsNodeType.ROOT) {
                let tmp17 = element;
                if (element.type !== GuildsNodeType.FOLDER) {
                  if (tmp17.type === GuildsNodeType.GUILD) {
                    tmp10 = tmp17;
                  }
                } else {
                  tmp17 = tmp18;
                }
              }
            }
          }
        }
        if (tmp6 != element) {
          tmp10 = element;
        }
      }
    }
  }
}
({ FastListRenderSections: closure_10, useGuildWrapperSize: closure_11 } = GUILD_ITEM_SIZE);
let obj = {};
obj.pan = require("module_4294967295");
obj.itemMeasurements = module_3991.makeMutable([]);
obj.activeIndex = require("module_4294967295");
let closure_14 = require("debounce")(require("getAndroidLightImpactEffect").triggerHapticFeedback, 16);
let closure_15 = require("debounce")((intl) => {
  const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}, 500);
let closure_16 = apply.throttle((data) => {
  let obj = importDefault(1184);
  obj = { category: "GuildsBarGesture", message: "handleGuildDrag started", data };
  obj.addBreadcrumb(obj);
}, 2000);
let closure_17 = apply.throttle((data) => {
  let obj = importDefault(1184);
  obj = { category: "GuildsBarGesture", message: "handleGestureEnd started", data };
  obj.addBreadcrumb(obj);
}, 3000);
let c18;
let closure_19 = { code: "function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){const{gestureState,pushScrollAccumulatedTime,MS_PER_FRAME_60FPS,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition}=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState.get().mode!=='drag'){return;}pushScrollAccumulatedTime.set(pushScrollAccumulatedTime.get()+timeSincePreviousFrame);if(pushScrollAccumulatedTime.get()<MS_PER_FRAME_60FPS){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=pushScrollAccumulatedTime.get()/1000;pushScrollAccumulatedTime.set(0);scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition.get()+timeInSeconds*scrollSpeed),0),false);}" };
let closure_20 = { code: "function useGuildsBarGestureTsx2(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==null||gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}" };
let closure_21 = { code: "function useGuildsBarGestureTsx3(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==='cancel'){runOnJS(handleGestureEnd)('cancel');}}" };
let closure_22 = { code: "function useGuildsBarGestureTsx4({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,runOnJS,handlePress}=this.__closure;if(gestureState.get().mode!=='cancel'){runOnJS(handlePress)(absoluteX,absoluteY);}}" };
let closure_23 = { code: "function useGuildsBarGestureTsx5(event,manager){const{gestureState}=this.__closure;if(gestureState.get().mode==='cancel'){manager.fail();}}" };
let closure_24 = { code: "function useGuildsBarGestureTsx6(event,manager){const{scrollPosition,gestureState,dragRegion,runOnJS,handleTouchesDown}=this.__closure;var _touch$absoluteY;const touch=event.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition.get();if(touch==null||gestureState.get().mode==='cancel'||pointerY<dragRegion.get().min||pointerY>dragRegion.get().max){manager.fail();}else if(event.changedTouches.length===1){runOnJS(handleTouchesDown)(touch.absoluteX,touch.absoluteY);}}" };
let closure_25 = { code: "function useGuildsBarGestureTsx7(){const{runOnJS,handleGestureEnd}=this.__closure;runOnJS(handleGestureEnd)('cancel');}" };
let closure_26 = { code: "function useGuildsBarGestureTsx8(){const{gestureState,runOnJS,handleGestureEnd}=this.__closure;if(gestureState.get().mode==='drag'){runOnJS(handleGestureEnd)('drop');}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleGestureEnd)('contextmenu-open');}else{runOnJS(handleGestureEnd)('cancel');}}" };
let closure_27 = { code: "function useGuildsBarGestureTsx9({absoluteX:absoluteX,absoluteY:absoluteY}){const{gestureState,listInsets,GESTURE_ACCELERATION_RANGE,windowSize,runOnJS,handleGuildDrag,handleContextMenuDrag}=this.__closure;if(gestureState.get().mode==='drag'){if(absoluteX!==gestureState.get().absoluteX||absoluteY!==gestureState.get().absoluteY){let{initialY:initialY}=gestureState.get();const minPushRange=listInsets.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange=windowSize-listInsets.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange&&absoluteY>initialY){initialY=absoluteY;}else if(initialY>maxPushRange&&absoluteY<initialY){initialY=absoluteY;}gestureState.set({...gestureState.get(),absoluteX:absoluteX,absoluteY:absoluteY,initialY:initialY});runOnJS(handleGuildDrag)(absoluteY);}}else if(gestureState.get().mode==='contextmenu'){runOnJS(handleContextMenuDrag)(absoluteX,absoluteY);}}" };
let closure_28 = { code: "function useGuildsBarGestureTsx10(event,manager){const{gestureState,dragDropInProgress,DRAG_GESTURE_MINIMUM_DISTANCE,runOnJS,handleContextMenuDrag,handleGuildDrag}=this.__closure;const touch=event.changedTouches[0];if(gestureState.get().mode!=='pressed'||touch==null){if(gestureState.get().mode==='cancel'||touch==null){manager.fail();dragDropInProgress.set(false);}return;}const diffX=touch.absoluteX-gestureState.get().initialX;const absDiffY=Math.abs(touch.absoluteY-gestureState.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState.set({...gestureState.get(),mode:'contextmenu',absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});dragDropInProgress.set(false);manager.activate();runOnJS(handleContextMenuDrag)(touch.absoluteX,touch.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState.set({...gestureState.get(),mode:'drag',initialX:touch.absoluteX,initialY:touch.absoluteY,absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});manager.activate();dragDropInProgress.set(true);runOnJS(handleGuildDrag)(touch.absoluteY);}}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx");

export default function useGuildsBarGesture() {
  gesture = fastListRef.useContext(gesture(token[15]).HomeDrawerStateContext).gesture;
  let tmp = listInsets();
  const importDefault = tmp;
  let obj = gesture(token[16]);
  token = obj.useToken(importDefault(token[17]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const scrollerRef = gesture(token[7]).useAnimatedRef();
  fastListRef = fastListRef.useRef(null);
  let obj2 = gesture(token[7]);
  let sharedValue = gesture(token[7]).useSharedValue(0);
  let obj3 = gesture(token[7]);
  const sharedValue1 = gesture(token[7]).useSharedValue(0);
  let tmp7 = dragDropInProgress((gestureState) => ({ gestureState: gestureState.gestureState, scrollPosition: gestureState.scrollPosition, dragRegion: gestureState.dragRegion, windowSize: gestureState.windowSize, listInsets: gestureState.listInsets, dragDropInProgress: gestureState.dragDropInProgress }), gesture(token[18]).shallow);
  let gestureState = tmp7.gestureState;
  let scrollPosition = tmp7.scrollPosition;
  let dragRegion = tmp7.dragRegion;
  let windowSize = tmp7.windowSize;
  listInsets = tmp7.listInsets;
  dragDropInProgress = tmp7.dragDropInProgress;
  const persistantKeys = dragDropInProgress((arg0) => {
    let dragSpecs;
    let dropSpecs;
    ({ dropSpecs, dragSpecs } = arg0);
    const set = new Set();
    if (null != dragSpecs) {
      set.add(dragSpecs.item.recyclerKey);
    }
    if (null != dropSpecs) {
      set.add(dropSpecs.dragRecyclerKey);
    }
    let arr;
    if (set.size > 0) {
      const _Array = Array;
      arr = Array.from(set);
    }
    return arr;
  }, gesture(token[18]).shallow);
  const effect = fastListRef.useEffect(() => {
    const current = fastListRef.current;
    let scrollPosition;
    if (null != current) {
      scrollPosition = current.computeScrollPosition(windowSize.GUILDS);
    }
    const current2 = fastListRef.current;
    let sections;
    if (null != current2) {
      sections = current2.props.sections;
    }
    if (null == sections) {
      sections = [];
    }
    const diff = sections.length - 1;
    const current3 = fastListRef.current;
    let scrollPosition1;
    if (null != current3) {
      scrollPosition1 = current3.computeScrollPosition(diff, tmp6);
    }
    let scrollPosition2;
    if (null != scrollPosition) {
      scrollPosition2 = scrollPosition.scrollPosition;
    }
    let num = 0;
    if (null != scrollPosition2) {
      num = scrollPosition2;
    }
    let num2 = Infinity;
    if (null != scrollPosition1) {
      num2 = scrollPosition1.scrollPosition + scrollPosition1.size;
    }
    dragRegion = dragRegion.getState().dragRegion;
    const value = dragRegion.get();
    if (!tmp10) {
      const obj = { min: num, max: num2 };
      const result = dragRegion.set(obj);
    }
  });
  let obj4 = gesture(token[7]);
  let fn = function z(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    if (null != timeSincePreviousFrame) {
      if (timeSincePreviousFrame > 0) {
        if ("drag" === gestureState.get().mode) {
          const result = sharedValue1.set(sharedValue1.get() + timeSincePreviousFrame);
          if (sharedValue1.get() >= 16.666666666666668) {
            const result1 = 1000 * sharedValue.get();
            const result2 = sharedValue1.get() / 1000;
            const result3 = sharedValue1.set(0);
            const obj = gesture(token[7]);
            const _Math = Math;
            obj.scrollTo(scrollerRef, 0, Math.max(tmp(token[19])(scrollPosition.get() + result2 * result1), 0), false);
            const tmp14 = tmp(token[19]);
          }
        }
      }
    }
  };
  obj = { gestureState, pushScrollAccumulatedTime: sharedValue1, MS_PER_FRAME_60FPS: 16.666666666666668, pushScroll: sharedValue, scrollTo: gesture(token[7]).scrollTo, scrollerRef, roundToNearestPixel: importDefault(token[19]), scrollPosition };
  fn.__closure = obj;
  fn.__workletHash = 14384524602726;
  fn.__initData = closure_19;
  const frameCallback = gesture(token[7]).useFrameCallback(fn, false);
  let items = [sharedValue, sharedValue1, frameCallback];
  const callback = fastListRef.useCallback((event) => {
    let dragDropInProgress;
    let gestureState;
    let item;
    let overSpecs;
    let state = dragRegion.getState();
    const dragSpecs = state.dragSpecs;
    ({ overSpecs, gestureState, dragDropInProgress } = state);
    const result = sharedValue.set(0);
    const result1 = state.set(0);
    if (frameCallback.isActive) {
      frameCallback.setActive(false);
    }
    if ("cancel" === event) {
      let obj = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      callback3(obj);
    } else {
      let obj1 = tmp(token[12]);
      obj = { category: "GuildsBarGesture", message: "handleGestureEnd started" };
      obj1 = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      obj.data = obj1;
      obj1.addBreadcrumb(obj);
    }
    if ("drop" === event) {
      if (null != overSpecs) {
        if (null != dragSpecs) {
          const item2 = dragSpecs.item;
          const item3 = overSpecs.item;
          const type2 = item2.type;
          if (gesture(token[14]).FastListItemTypes.SECTION === type2) {
            const type = item3.type;
            if (gesture(token[14]).FastListItemTypes.SECTION === type) {
              let str = "before";
              let str2 = "before";
              if (item3.section >= item2.section) {
                let str3 = "after";
                let str4 = "after";
                if (item3.section <= item2.section) {
                  if (item3.item >= item2.item) {
                    if (item3.item <= item2.item) {
                      let str5;
                      if (item3.item === item2.item) {
                        str5 = "self";
                      }
                      str3 = str5;
                    }
                    str = str3;
                  }
                  str4 = str;
                }
                str2 = str4;
              }
              const tmp12 = str2;
            }
          }
          let num2 = 0;
          if ("after" === tmp12) {
            num2 = dragSpecs.item.layoutSize;
          }
          if ("after" === overSpecs.state) {
            let layoutStart = overSpecs.item.layoutStart + dragSpecs.itemSize;
          } else {
            layoutStart = overSpecs.item.layoutStart;
          }
          const node = dragSpecs.node;
          const node2 = overSpecs.node;
          let c4 = tmp17;
          let tmp18 = "convert-before" === overSpecs.state;
          if (!tmp18) {
            tmp18 = "convert-after" === overSpecs.state;
          }
          if (!tmp18) {
            tmp18 = "drop-into" === overSpecs.state;
          }
          sharedValue = tmp18;
          state = overSpecs.state;
          if ("self" !== state) {
            if (null != state) {
              let id = node2.id;
              if (node.type === scrollPosition.FOLDER) {
                if (node2.type === scrollPosition.GUILD) {
                  if (null != node2.parentId) {
                    id = node2.parentId;
                  }
                  gesture(token[20]).batchUpdates(() => {
                    if (node.id !== id) {
                      let obj = callback(token[21]);
                      id = node.id;
                      let tmp7 = closure_5;
                      if (!closure_5) {
                        tmp7 = c4;
                      }
                      obj.moveById(id, id, tmp7, closure_5);
                      // CreateGeneratorClosureLongIndex (0x67)
                      scrollerRef(tmp)();
                    }
                    const state = dragRegion.getState();
                    obj = { dragNode: node, overNode: node2, dropPosition: callback };
                    const item = dragSpecs.item;
                    let recyclerKey;
                    if (null != item) {
                      recyclerKey = item.recyclerKey;
                    }
                    let str = "";
                    if (null != recyclerKey) {
                      str = recyclerKey;
                    }
                    obj.dragRecyclerKey = str;
                    obj.itemSize = dragSpecs.itemSize;
                    obj.overState = state;
                    state.dropStart(obj);
                  });
                  const obj2 = { type: "drag-drop", dragNode: node, overNode: node2, overState: state };
                  outer1_33(obj2);
                  const obj9 = gesture(token[20]);
                }
              }
              if (node2.type === scrollPosition.FOLDER) {
                if (node2.expanded) {
                  if (tmp17) {
                    c4 = false;
                    const first = node2.children[0];
                    id = undefined;
                    if (null != first) {
                      id = first.id;
                    }
                  }
                }
              }
            }
          }
          const state1 = dragRegion.getState();
          const obj3 = { dragNode: node, overNode: node };
          ({ itemTop: obj7.dropPosition, itemSize: obj7.itemSize, item } = dragSpecs);
          let recyclerKey;
          if (null != item) {
            recyclerKey = item.recyclerKey;
          }
          let str11 = "";
          if (null != recyclerKey) {
            str11 = recyclerKey;
          }
          obj3.dragRecyclerKey = str11;
          obj3.overState = "self";
          state1.dropStart(obj3);
          const obj4 = { type: "drag-drop", dragNode: node, overNode: node, overState: "self" };
          outer1_33(obj4);
        }
      }
    }
    if ("contextmenu-open" === event) {
      const ContextMenuStore = gesture(token[23]).ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      if (null != menu) {
        const activeIndex = menu.state.activeIndex;
        const close = menu.requestClose(-1 === activeIndex.get());
      }
    }
    state.setStateShallow({ dragSpecs: undefined, overSpecs: undefined });
    const value = gestureState.get();
    if (null != value.mode) {
      const obj5 = {};
      const merged = Object.assign(value);
      obj5["mode"] = null;
      const result2 = gestureState.set(obj5);
      const result3 = dragDropInProgress.set(false);
    }
  }, items);
  const callback1 = fastListRef.useCallback((arg0, arg1) => {
    let dragDropInProgress;
    let gestureState;
    const state = dragRegion.getState();
    ({ gestureState, dragDropInProgress } = state);
    const value = gestureState.get();
    if (tmp3) {
      const obj = {};
      const merged = Object.assign(value);
      obj["mode"] = "cancel";
      const result = gestureState.set(obj);
      const result1 = dragDropInProgress.set(false);
    }
  }, []);
  const items1 = [callback, token];
  const callback2 = fastListRef.useCallback((absoluteX, absoluteY) => {
    let dragDropInProgress;
    let dragSpecs;
    let gestureState;
    let item;
    let node;
    let scrollPosition;
    let setStateShallow;
    let tmp = absoluteX;
    const state = dragRegion.getState();
    ({ dragSpecs, scrollPosition, gestureState, dragDropInProgress, setStateShallow } = state);
    let obj = tmp(token[12]);
    obj = { category: "GuildsBarGesture", message: "handlePress started", data: { absoluteX, absoluteY } };
    obj.addBreadcrumb(obj);
    ({ item, node } = outer1_35(absoluteY, false, fastListRef));
    if (null != item) {
      if (null != node) {
        obj = { node, item };
        ({ layoutStart: obj4.itemTop, layoutSize: obj4.itemSize } = item);
        const height = sharedValue.get("window").height;
        let obj4 = gesture(token[24]);
        let str2 = height;
        if (obj4.isAndroid()) {
          let obj5 = gesture(token[25]);
          const rect = obj5.getSafeAreaInsets();
          str2 = height + (rect.top + rect.bottom);
        }
        let activeIndex = frameCallback.activeIndex;
        let result = activeIndex.set(-1);
        let obj6 = gesture(token[26]);
        if (obj6.getIsScreenReaderEnabled()) {
          const obj1 = { type: "drag-start", node };
          outer1_33(obj1);
        } else {
          const type = node.type;
          if (scrollPosition.GUILD === type) {
            let version = sharedValue1.getGuild(node.id);
            const obj2 = { key: node.id };
            let name;
            if (null != version) {
              name = version.name;
            }
            obj2.title = name;
            if (null != version) {
              version = gestureState.getGuildsTree().version;
              let items = tmp(token[27])(version.id, version);
              const tmp24 = tmp(token[27]);
            } else {
              items = [];
            }
            obj2.items = items;
          } else {
            let tmp19;
            if (scrollPosition.FOLDER === type) {
              const obj3 = {};
              ({ id: obj12.key, name: obj12.title } = node);
              obj3.items = gesture(token[28]).getGuildFolderMenuItems(node.id);
              tmp19 = obj3;
              const obj13 = gesture(token[28]);
            }
            items = tmp19.items;
            if (items.length > 0) {
              obj4 = {};
              const _HermesInternal = HermesInternal;
              obj4.key = "" + tmp27;
              obj4.title = tmp28;
              obj4.items = items;
              obj4.x = 12 + token + 12;
              obj4.y = item.layoutStart - scrollPosition.get();
              obj4.positionX = "left";
              obj4.positionY = "below";
              obj4.width = token;
              obj4.height = token;
              obj4.state = frameCallback;
              obj4.dividerIndexes = [];
              obj4.keyboardShouldPersistTaps = "never";
              obj4.requestClose = function requestClose(arg0) {
                if (!arg0) {
                  const activeIndex = frameCallback.activeIndex;
                  const obj = items[activeIndex.get(activeIndex)];
                  if (null != obj) {
                    obj.action();
                  }
                }
                const activeIndex2 = frameCallback.activeIndex;
                const result = activeIndex2.set(-1);
                gesture(token[23]).hideContextMenu();
                outer1_14("contextmenu-close");
              };
              obj4.onClose = function onClose() {

              };
              gesture(token[23]).showContextMenu(obj4);
              const obj14 = gesture(token[23]);
            }
          }
        }
        obj5 = { dragSpecs: obj, overSpecs: undefined, windowSize: str2 };
        setStateShallow(obj5);
        obj6 = {};
        str2 = "pressed";
        obj6.mode = "pressed";
        obj6.initialY = absoluteY;
        obj6.initialX = tmp;
        obj6.absoluteY = absoluteY;
        obj6.absoluteX = tmp;
        const result1 = gestureState.set(obj6);
        gestureState = gesture;
        tmp = token;
        setStateShallow = gesture(token[9]);
        const result2 = setStateShallow.triggerHapticFeedback(gesture(token[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }
    const obj7 = {};
    const merged = Object.assign(gestureState.get());
    obj7["mode"] = null;
    const result3 = gestureState.set(obj7);
    const result4 = dragDropInProgress.set(false);
  }, items1);
  const callback3 = fastListRef.useCallback((absoluteX, absoluteY) => {
    const result = gesture(token[23]).updateContextMenuState(absoluteX, absoluteY, frameCallback);
  }, []);
  const items2 = [sharedValue, sharedValue1, frameCallback, tmp];
  const callback4 = fastListRef.useCallback((arg0) => {
    let gestureState;
    let item;
    let item2;
    let listInsets;
    let node;
    let node2;
    let overPercentage;
    let overPercentage2;
    let scrollerRef;
    const state = dragRegion.getState();
    const overSpecs = state.overSpecs;
    let obj1 = overSpecs;
    const dragSpecs = state.dragSpecs;
    const windowSize = state.windowSize;
    ({ setStateShallow: scrollerRef, listInsets, gestureState } = state);
    let obj = { overSpecs, dragSpecs, windowSize, gestureState: gestureState.get() };
    callback2(obj);
    if (null != dragSpecs) {
      const value = gestureState.get();
      let isScreenReaderEnabled = gesture(token[26]).getIsScreenReaderEnabled();
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null == dragSpecs.node;
      }
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null != overSpecs;
      }
      if (!isScreenReaderEnabled) {
        obj = { type: "drag-start", node: dragSpecs.node };
        outer1_33(obj);
      }
      const _Map = Map;
      const map = new Map();
      let tmp12 = null != overSpecs;
      if (tmp12) {
        tmp12 = "self" !== overSpecs.state;
      }
      if (tmp12) {
        let result = map.set(dragSpecs.item.recyclerKey, 0);
        const result1 = map.set(overSpecs.item.recyclerKey, 2 * dragSpecs.itemSize);
      }
      const obj8 = gesture(token[26]);
      ({ item, overPercentage, node } = outer1_35(arg0, true, fastListRef, map));
      let id;
      if (null != overSpecs) {
        id = overSpecs.node.id;
      }
      let id1;
      if (null != node) {
        id1 = node.id;
      }
      if (id !== id1) {
        const ContextMenuStore = gesture(token[23]).ContextMenuStore;
        if (null != ContextMenuStore.getState().menu) {
          gesture(token[23]).hideContextMenu();
          const obj4 = gesture(token[23]);
        }
        item2 = item;
        overPercentage2 = overPercentage;
        node2 = node;
        if (null != item) {
          let recyclerKey;
          if (null != overSpecs) {
            recyclerKey = overSpecs.item.recyclerKey;
          }
          item2 = item;
          overPercentage2 = overPercentage;
          node2 = node;
          if (recyclerKey !== item.recyclerKey) {
            map.clear();
            if (dragSpecs.item.recyclerKey !== item.recyclerKey) {
              recyclerKey = dragSpecs.item.recyclerKey;
              let str3 = "";
              if (null != recyclerKey) {
                str3 = recyclerKey;
              }
              const result2 = map.set(str3, 0);
              const result3 = map.set(item.recyclerKey, 2 * dragSpecs);
            }
            ({ item: item2, overPercentage: overPercentage2, node: node2 } = outer1_35(arg0, true, fastListRef, tmp11));
            const tmp39 = outer1_35(arg0, true, fastListRef, tmp11);
          }
        }
        const tmp45 = (function getOverState(node, node2, item, item2, overPercentage2) {
          if (null != item) {
            if (null != item2) {
              if (null != node) {
                if (null != node2) {
                  if (node.id === node2.id) {
                    return "self";
                  } else {
                    const type2 = item.type;
                    if (gesture(token[14]).FastListItemTypes.SECTION === type2) {
                      const type = item2.type;
                      if (gesture(token[14]).FastListItemTypes.SECTION === type) {
                        let str = "self";
                        if (item2.recyclerKey !== item.recyclerKey) {
                          let str2 = "after";
                          if (overPercentage2 < 0.5) {
                            str2 = "before";
                          }
                          str = str2;
                        }
                      }
                    }
                    if (node.type === scrollPosition.FOLDER) {
                      if ("after" === tmp3) {
                        if (!tmp10) {
                          if (null != node2.parentId) {
                            const guildsTree = gestureState.getGuildsTree();
                            node = guildsTree.getNode(node2.parentId);
                          }
                        }
                      }
                    }
                    if ("self" !== tmp3) {
                      if (null != tmp3) {
                        if (node.type === scrollPosition.GUILD) {
                          if (node2.type === scrollPosition.GUILD) {
                            if (null == node2.parentId) {
                              if (overPercentage2 > 0.35) {
                                if (overPercentage2 < 0.65) {
                                  if ("before" === tmp3) {
                                    return "convert-before";
                                  } else if ("after" === tmp3) {
                                    return "convert-after";
                                  }
                                }
                              }
                            }
                            return tmp3;
                          }
                        }
                        if (node.type === scrollPosition.GUILD) {
                          if (node2.type === scrollPosition.FOLDER) {
                            if (!node2.expanded) {
                              if (overPercentage2 > 0.35) {
                                if (overPercentage2 < 0.65) {
                                  return "drop-into";
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    return tmp3;
                  }
                }
              }
            }
          }
        })(dragSpecs.node, node2, dragSpecs.item, item2, overPercentage2);
        let node3 = node2;
        let str4 = tmp45;
        if (null == tmp45) {
          node3 = dragSpecs.node;
          item2 = dragSpecs.item;
          str4 = "self";
        }
        if (tmp48) {
          obj = { type: "drag-move", dragNode: dragSpecs.node, overNode: node3, overState: str4 };
          outer1_33(obj);
        }
        let tmp52 = null == node3 || null == item2;
        if (!tmp52) {
          node = undefined;
          if (null != overSpecs) {
            node = overSpecs.node;
          }
          let tmp54 = node === node3;
          if (tmp54) {
            item = undefined;
            if (null != overSpecs) {
              item = overSpecs.item;
            }
            tmp54 = item === item2;
          }
          if (tmp54) {
            let state1;
            if (null != overSpecs) {
              state1 = overSpecs.state;
            }
            tmp54 = state1 === str4;
          }
          tmp52 = tmp54;
        }
        if (!tmp52) {
          obj1 = { node: node3, item: item2, state: str4, percentage: overPercentage2 };
        }
        tmp48 = null != node3 && null != overSpecs;
      } else {
        let percentage;
        if (null != overSpecs) {
          percentage = overSpecs.percentage;
        }
      }
      const sum = listInsets.get().start + 160;
      const diff = windowSize - listInsets.get().end - 160;
      if (arg0 < sum) {
        const _Math4 = Math;
        const _Math5 = Math;
        const _Math6 = Math;
        let num8 = -1 * Math.max(Math.min(Math.min(value.initialY, sum) - arg0, 160) / 160, 0);
      } else {
        num8 = 0;
        if (arg0 > diff) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          num8 = Math.max(Math.min(arg0 - Math.max(value.initialY, diff), 160) / 160, 0);
        }
      }
      const result4 = sharedValue.set(num8);
      let isActive = 0 === num8;
      if (!isActive) {
        if (!isActive) {
          isActive = frameCallback.isActive;
        }
        if (!isActive) {
          frameCallback.setActive(true);
        }
        gesture(token[20]).batchUpdates(() => {
          if (null != obj) {
            if (obj.node.type === scrollPosition.FOLDER) {
              if (obj.node.expanded) {
                obj = dragSpecs(token[21]);
                const result = obj.toggleGuildFolderExpand(obj.node.id);
                const guildsTree = gestureState.getGuildsTree();
                const node = guildsTree.getNode(obj.node.id);
                let tmp9 = node !== obj.node;
                if (tmp9) {
                  let type;
                  if (null != node) {
                    type = node.type;
                  }
                  tmp9 = type === scrollPosition.FOLDER;
                }
                if (tmp9) {
                  obj = {};
                  const merged = Object.assign(obj);
                  obj["node"] = node;
                }
              }
            }
          }
          obj = { overSpecs: obj1, dragSpecs: obj, windowSize };
          callback(obj);
        });
        const obj7 = gesture(token[20]);
      }
      const result5 = sharedValue1.set(0);
      frameCallback.setActive(false);
      const tmp21 = outer1_35(arg0, true, fastListRef, map);
    }
  }, items2);
  let obj5 = gesture(token[7]);
  const items3 = [callback4];
  const onFastListScrollWorklet = gesture(token[29]).useExternalScrollEventHandler({ id: "guilds" });
  const items4 = [dragDropInProgress, dragRegion, gestureState, callback3, callback, callback4, callback2, callback1, listInsets, scrollPosition, scrollerRef, windowSize, gesture];
  const onFastListScroll = fastListRef.useCallback(() => {
    const gestureState = dragRegion.getState().gestureState;
    const value = gestureState.get();
    if ("drag" === value.mode) {
      callback4(value.absoluteY);
    }
  }, items3);
  gesture = fastListRef.useMemo(() => {
    const Gesture = gesture(token[30]).Gesture;
    const Gesture2 = gesture(token[30]).Gesture;
    const fn = function c(changedTouches, fail) {
      const first = changedTouches.changedTouches[0];
      let absoluteY;
      if (null != first) {
        absoluteY = first.absoluteY;
      }
      let num = 0;
      if (null != absoluteY) {
        num = absoluteY;
      }
      const sum = num + outer1_8.get();
      if (null != first) {
        if ("cancel" !== outer1_7.get().mode) {
          if (sum >= outer1_9.get().min) {
            if (sum <= outer1_9.get().max) {
              if (1 === changedTouches.changedTouches.length) {
                gesture(token[7]).runOnJS(outer1_15)(first.absoluteX, first.absoluteY);
                const obj = gesture(token[7]);
              }
            }
          }
        }
      }
      fail.fail();
    };
    let obj = { scrollPosition, gestureState, dragRegion, runOnJS: gesture(token[7]).runOnJS, handleTouchesDown: callback1 };
    fn.__closure = obj;
    fn.__workletHash = 5430653816983;
    fn.__initData = outer1_24;
    const LongPressResult = Gesture2.LongPress();
    const fn2 = function u(arg0, fail) {
      if ("cancel" === outer1_7.get().mode) {
        fail.fail();
      }
    };
    fn2.__closure = { gestureState };
    fn2.__workletHash = 8960390413776;
    fn2.__initData = outer1_23;
    const onTouchesDownResult = Gesture2.LongPress().onTouchesDown(fn);
    const fn3 = function s(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      if ("cancel" !== outer1_7.get().mode) {
        gesture(token[7]).runOnJS(outer1_16)(absoluteX, absoluteY);
        const obj = gesture(token[7]);
      }
    };
    obj = { gestureState, runOnJS: gesture(token[7]).runOnJS, handlePress: callback2 };
    fn3.__closure = obj;
    fn3.__workletHash = 2121892092583;
    fn3.__initData = outer1_22;
    const onTouchesMoveResult = Gesture2.LongPress().onTouchesDown(fn).onTouchesMove(fn2);
    const fn4 = function o() {
      if ("cancel" === outer1_7.get().mode) {
        gesture(token[7]).runOnJS(outer1_14)("cancel");
        const obj = gesture(token[7]);
      }
    };
    const onStartResult = Gesture2.LongPress().onTouchesDown(fn).onTouchesMove(fn2).onStart(fn3);
    fn4.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn4.__workletHash = 2371934536573;
    fn4.__initData = outer1_21;
    const obj1 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const fn5 = function a() {
      let tmp = null != outer1_7.get().mode;
      if (tmp) {
        tmp = "cancel" !== outer1_7.get().mode;
      }
      if (!tmp) {
        gesture(token[7]).runOnJS(outer1_14)("cancel");
        const obj = gesture(token[7]);
      }
    };
    const onEndResult = onStartResult.onEnd(fn4);
    fn5.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn5.__workletHash = 8240921685123;
    fn5.__initData = outer1_20;
    let obj2 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const Gesture3 = gesture(token[30]).Gesture;
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    const PanResult = Gesture3.Pan();
    let result = Gesture3.Pan().manualActivation(true).simultaneousWithExternalGesture(scrollerRef, gesture);
    let result1 = result.shouldCancelWhenOutside(false);
    const fn6 = function n(arg0, activate) {
      const first = arg0.changedTouches[0];
      if ("pressed" === outer1_7.get().mode) {
        if (null != first) {
          const diff = first.absoluteX - outer1_7.get().initialX;
          const _Math = Math;
          const absolute = Math.abs(first.absoluteY - outer1_7.get().absoluteY);
          if (diff > 10) {
            if (diff > absolute) {
              let obj = {};
              const merged = Object.assign(outer1_7.get());
              obj["mode"] = "contextmenu";
              obj["absoluteX"] = first.absoluteX;
              obj["absoluteY"] = first.absoluteY;
              const result = outer1_7.set(obj);
              const result1 = outer1_12.set(false);
              activate.activate();
              gesture(token[7]).runOnJS(outer1_17)(first.absoluteX, first.absoluteY);
              const obj2 = gesture(token[7]);
            }
          }
          if (absolute > 10) {
            obj = {};
            const merged1 = Object.assign(outer1_7.get());
            obj["mode"] = "drag";
            obj["initialX"] = first.absoluteX;
            obj["initialY"] = first.absoluteY;
            obj["absoluteX"] = first.absoluteX;
            obj["absoluteY"] = first.absoluteY;
            const result2 = outer1_7.set(obj);
            activate.activate();
            const result3 = outer1_12.set(true);
            gesture(token[7]).runOnJS(outer1_18)(first.absoluteY);
            const obj4 = gesture(token[7]);
          }
        }
      }
      let tmp3 = "cancel" !== outer1_7.get().mode;
      if (tmp3) {
        tmp3 = null != first;
      }
      if (!tmp3) {
        activate.fail();
        const result4 = outer1_12.set(false);
      }
    };
    const manualActivationResult = Gesture3.Pan().manualActivation(true);
    fn6.__closure = { gestureState, dragDropInProgress, DRAG_GESTURE_MINIMUM_DISTANCE: 10, runOnJS: gesture(token[7]).runOnJS, handleContextMenuDrag: callback3, handleGuildDrag: callback4 };
    fn6.__workletHash = 15225957003871;
    fn6.__initData = outer1_28;
    let obj3 = { gestureState, dragDropInProgress, DRAG_GESTURE_MINIMUM_DISTANCE: 10, runOnJS: gesture(token[7]).runOnJS, handleContextMenuDrag: callback3, handleGuildDrag: callback4 };
    const fn7 = function r(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      if ("drag" === outer1_7.get().mode) {
        if (absoluteX !== outer1_7.get().absoluteX) {
          let initialY = outer1_7.get().initialY;
          const sum = outer1_11.get().start + 160;
          let tmp9 = initialY < sum;
          const diff = outer1_10 - outer1_11.get().end - 160;
          if (tmp9) {
            tmp9 = absoluteY > initialY;
          }
          if (!tmp9) {
            tmp9 = initialY > diff && absoluteY < initialY;
            const tmp10 = initialY > diff && absoluteY < initialY;
          }
          if (tmp9) {
            initialY = absoluteY;
          }
          const obj = {};
          const merged = Object.assign(outer1_7.get());
          obj["absoluteX"] = absoluteX;
          obj["absoluteY"] = absoluteY;
          obj["initialY"] = initialY;
          const result = outer1_7.set(obj);
          gesture(token[7]).runOnJS(outer1_18)(absoluteY);
          const obj2 = gesture(token[7]);
        }
      } else if ("contextmenu" === outer1_7.get().mode) {
        gesture(token[7]).runOnJS(outer1_17)(absoluteX, absoluteY);
        const obj3 = gesture(token[7]);
      }
    };
    const onTouchesMoveResult1 = result1.onTouchesMove(fn6);
    fn7.__closure = { gestureState, listInsets, GESTURE_ACCELERATION_RANGE: 160, windowSize, runOnJS: gesture(token[7]).runOnJS, handleGuildDrag: callback4, handleContextMenuDrag: callback3 };
    fn7.__workletHash = 14488930469604;
    fn7.__initData = outer1_27;
    let obj4 = { gestureState, listInsets, GESTURE_ACCELERATION_RANGE: 160, windowSize, runOnJS: gesture(token[7]).runOnJS, handleGuildDrag: callback4, handleContextMenuDrag: callback3 };
    const fn8 = function t() {
      if ("drag" === outer1_7.get().mode) {
        gesture(token[7]).runOnJS(outer1_14)("drop");
        const obj3 = gesture(token[7]);
      } else if ("contextmenu" === outer1_7.get().mode) {
        gesture(token[7]).runOnJS(outer1_14)("contextmenu-open");
        const obj2 = gesture(token[7]);
      } else {
        gesture(token[7]).runOnJS(outer1_14)("cancel");
        const obj = gesture(token[7]);
      }
    };
    const onUpdateResult = onTouchesMoveResult1.onUpdate(fn7);
    fn8.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn8.__workletHash = 9863070264039;
    fn8.__initData = outer1_26;
    const obj5 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const fn9 = function e() {
      gesture(token[7]).runOnJS(outer1_14)("cancel");
    };
    const onEndResult1 = onUpdateResult.onEnd(fn8);
    fn9.__closure = { runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn9.__workletHash = 9715999020978;
    fn9.__initData = outer1_25;
    return Gesture.Simultaneous(onTouchesCancelledResult, onEndResult1.onTouchesCancelled(fn9));
  }, items4);
  const effect1 = fastListRef.useEffect(() => dragRegion.subscribe((dragSpecs) => {
    if (null == dragSpecs.dragSpecs) {
      if (null == dragSpecs.dropSpecs) {
        const current = outer1_4.current;
        if (null != current) {
          current.setDisableRecycling(false);
        }
      }
    }
    const current2 = outer1_4.current;
    if (null != current2) {
      current2.setDisableRecycling(true);
    }
  }), []);
  return { scrollPosition, gesture, scrollerRef, fastListRef, persistantKeys, onFastListScroll, onFastListScrollWorklet };
};
