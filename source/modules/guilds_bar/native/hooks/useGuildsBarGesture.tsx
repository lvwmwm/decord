// Module ID: 14688
// Function ID: 110763
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14688 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    const guild = guild.getGuild(overNode.id);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    if (null == name) {
      const intl2 = arg1(dependencyMap[13]).intl;
      name = intl2.string(arg1(dependencyMap[13]).t.fKYRlM);
    }
    return name;
  } else if (GuildsNodeType.FOLDER === type) {
    name = overNode.name;
    if (null == name) {
      const intl = arg1(dependencyMap[13]).intl;
      name = intl.string(arg1(dependencyMap[13]).t.ebAnWE);
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
      const AccessibilityAnnouncer = arg1(dependencyMap[10]).AccessibilityAnnouncer;
      const intl4 = arg1(dependencyMap[13]).intl;
      let obj = { itemName: tmp34 };
      AccessibilityAnnouncer.announce(intl4.formatToPlainString(arg1(dependencyMap[13]).t.vHD/Je, obj));
    }
    lib(arg1(dependencyMap[9]).HapticFeedbackTypes.DRAG_AND_DROP_START);
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
      lib(arg1(dependencyMap[9]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
      ({ dragNode, overNode, overState } = type);
      if ("convert-before" !== overState) {
        if ("convert-after" !== overState) {
          if ("drop-into" === overState) {
            let formatToPlainStringResult;
            if (overNode.type === GuildsNodeType.FOLDER) {
              const intl2 = arg1(dependencyMap[13]).intl;
              obj = { folderName: overNode.name };
              formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[13]).t.uLDoxR, obj);
            }
            let formatToPlainStringResult1 = formatToPlainStringResult;
          } else if ("before" === overState) {
            const intl = arg1(dependencyMap[13]).intl;
            obj = { itemName: getGuildOrFolderLabel(overNode) };
            formatToPlainStringResult1 = intl.formatToPlainString(arg1(dependencyMap[13]).t.A5aDw+, obj);
          } else if ("after" === overState) {
            const intl6 = arg1(dependencyMap[13]).intl;
            const obj1 = { itemName: getGuildOrFolderLabel(overNode) };
            formatToPlainStringResult1 = intl6.formatToPlainString(arg1(dependencyMap[13]).t.w8FN92, obj1);
          }
        }
        if (null != formatToPlainStringResult1) {
          lib2(formatToPlainStringResult1);
        }
      }
      const intl3 = arg1(dependencyMap[13]).intl;
      const obj2 = { itemName: getGuildOrFolderLabel(overNode) };
      formatToPlainStringResult1 = intl3.formatToPlainString(arg1(dependencyMap[13]).t.qiQ0QI, obj2);
    } else {
      const tmp17 = isConvertOverState(type.overState);
    }
    const tmp13 = getDropIndex(type.dragNode, type.overNode, type.overState);
  } else if ("drag-drop" === type) {
    lib(arg1(dependencyMap[9]).HapticFeedbackTypes.DRAG_AND_DROP_END);
    lib.flush();
    lib2.flush();
    const AccessibilityAnnouncer2 = arg1(dependencyMap[10]).AccessibilityAnnouncer;
    const intl5 = arg1(dependencyMap[13]).intl;
    AccessibilityAnnouncer2.announce(intl5.string(arg1(dependencyMap[13]).t.lMkmz7));
  }
  let tmp45;
  if ("drag-drop" !== type.type) {
    tmp45 = type;
  }
  const _undefined = tmp45;
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
        element = store.getFastListGuildFolders()[item.section - closure_10.GUILDS];
        if (tmp6 != element) {
          const type = item.type;
          if (arg1(dependencyMap[14]).FastListItemTypes.SECTION !== type) {
            if (arg1(dependencyMap[14]).FastListItemTypes.ITEM === type) {
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const Dimensions = arg1(dependencyMap[2]).Dimensions;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const GuildsNodeType = arg1(dependencyMap[4]).GuildsNodeType;
const importDefaultResult = importDefault(dependencyMap[5]);
({ FastListRenderSections: closure_10, useGuildWrapperSize: closure_11 } = arg1(dependencyMap[6]));
const obj = {};
const tmp3 = arg1(dependencyMap[6]);
obj.pan = require("module_4294967295");
const obj2 = arg1(dependencyMap[7]);
obj.itemMeasurements = arg1(dependencyMap[7]).makeMutable([]);
const obj3 = arg1(dependencyMap[7]);
obj.activeIndex = require("module_4294967295");
const obj4 = arg1(dependencyMap[7]);
let closure_14 = importDefault(dependencyMap[8])(arg1(dependencyMap[9]).triggerHapticFeedback, 16);
let closure_15 = importDefault(dependencyMap[8])((intl) => {
  const AccessibilityAnnouncer = arg1(dependencyMap[10]).AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}, 500);
const importDefaultResult1 = importDefault(dependencyMap[8]);
let closure_16 = arg1(dependencyMap[11]).throttle((data) => {
  let obj = importDefault(dependencyMap[12]);
  obj = { <string:1768156336>: true, <string:483457390>: true, data };
  obj.addBreadcrumb(obj);
}, 2000);
const obj5 = arg1(dependencyMap[11]);
let closure_17 = arg1(dependencyMap[11]).throttle((data) => {
  let obj = importDefault(dependencyMap[12]);
  obj = { <string:1768156336>: "ce5302624e28acc38af07d238a4e16fe", <string:483457390>: "BellZIcon", data };
  obj.addBreadcrumb(obj);
}, 3000);
let closure_18;
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
const obj6 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx");

export default function useGuildsBarGesture() {
  let gesture = React.useContext(arg1(dependencyMap[15]).HomeDrawerStateContext).gesture;
  const arg1 = gesture;
  const tmp = listInsets();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[16]);
  const token = obj.useToken(importDefault(dependencyMap[17]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const dependencyMap = token;
  const scrollerRef = arg1(dependencyMap[7]).useAnimatedRef();
  let closure_3 = scrollerRef;
  const fastListRef = React.useRef(null);
  const React = fastListRef;
  const obj2 = arg1(dependencyMap[7]);
  const sharedValue = arg1(dependencyMap[7]).useSharedValue(0);
  const Dimensions = sharedValue;
  const obj3 = arg1(dependencyMap[7]);
  const sharedValue1 = arg1(dependencyMap[7]).useSharedValue(0);
  let closure_6 = sharedValue1;
  const tmp7 = importDefaultResult((gestureState) => ({ gestureState: gestureState.gestureState, scrollPosition: gestureState.scrollPosition, dragRegion: gestureState.dragRegion, windowSize: gestureState.windowSize, listInsets: gestureState.listInsets, dragDropInProgress: gestureState.dragDropInProgress }), arg1(dependencyMap[18]).shallow);
  const gestureState = tmp7.gestureState;
  let closure_7 = gestureState;
  const scrollPosition = tmp7.scrollPosition;
  const GuildsNodeType = scrollPosition;
  const dragRegion = tmp7.dragRegion;
  let importDefaultResult = dragRegion;
  const windowSize = tmp7.windowSize;
  const listInsets = tmp7.listInsets;
  const dragDropInProgress = tmp7.dragDropInProgress;
  importDefaultResult = dragDropInProgress;
  const persistantKeys = importDefaultResult((arg0) => {
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
  }, arg1(dependencyMap[18]).shallow);
  const effect = React.useEffect(() => {
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
    const dragRegion = dragRegion.getState().dragRegion;
    const value = dragRegion.get();
    if (!tmp10) {
      const obj = { min: num, max: num2 };
      const result = dragRegion.set(obj);
    }
  });
  const obj4 = arg1(dependencyMap[7]);
  const fn = function z(timeSincePreviousFrame) {
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
  obj = { gestureState, pushScrollAccumulatedTime: sharedValue1, MS_PER_FRAME_60FPS: 16.666666666666668, pushScroll: sharedValue, scrollTo: arg1(dependencyMap[7]).scrollTo, scrollerRef, roundToNearestPixel: importDefault(dependencyMap[19]), scrollPosition };
  fn.__closure = obj;
  fn.__workletHash = 14384524602726;
  fn.__initData = closure_19;
  const frameCallback = arg1(dependencyMap[7]).useFrameCallback(fn, false);
  obj = frameCallback;
  const items = [sharedValue, sharedValue1, frameCallback];
  const callback = React.useCallback((event) => {
    let dragDropInProgress;
    let gestureState;
    let item;
    let overSpecs;
    let state = dragRegion.getState();
    const dragSpecs = state.dragSpecs;
    const gesture = dragSpecs;
    ({ overSpecs, gestureState, dragDropInProgress } = state);
    const result = sharedValue.set(0);
    const result1 = sharedValue1.set(0);
    if (frameCallback.isActive) {
      frameCallback.setActive(false);
    }
    if ("cancel" === event) {
      let obj = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      callback3(obj);
    } else {
      let obj1 = tmp(token[12]);
      obj = { <string:1768156336>: "ce5302624e28acc38af07d238a4e16fe", <string:483457390>: "BellZIcon" };
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
          const token = node;
          const node2 = overSpecs.node;
          const scrollerRef = node2;
          let closure_4 = tmp17;
          let tmp18 = "convert-before" === overSpecs.state;
          if (!tmp18) {
            tmp18 = "convert-after" === overSpecs.state;
          }
          if (!tmp18) {
            tmp18 = "drop-into" === overSpecs.state;
          }
          const sharedValue = tmp18;
          state = overSpecs.state;
          const sharedValue1 = state;
          if ("self" !== state) {
            if (null != state) {
              let id = node2.id;
              gestureState = id;
              if (node.type === scrollPosition.FOLDER) {
                if (node2.type === scrollPosition.GUILD) {
                  if (null != node2.parentId) {
                    gestureState = node2.parentId;
                  }
                  gesture(token[20]).batchUpdates(() => {
                    if (node.id !== id) {
                      let obj = callback(node[21]);
                      const id = node.id;
                      let tmp7 = tmp18;
                      if (!tmp18) {
                        tmp7 = closure_4;
                      }
                      obj.moveById(id, id, tmp7, tmp18);
                      // CreateGeneratorClosureLongIndex (0x67)
                      node2(tmp)();
                    }
                    const state = state.getState();
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
                  callback(obj2);
                  const obj9 = gesture(token[20]);
                }
              }
              if (node2.type === scrollPosition.FOLDER) {
                if (node2.expanded) {
                  if (tmp17) {
                    closure_4 = false;
                    const first = node2.children[0];
                    id = undefined;
                    if (null != first) {
                      id = first.id;
                    }
                    gestureState = id;
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
          callback(obj4);
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
  let closure_14 = callback;
  const callback1 = React.useCallback((arg0, arg1) => {
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
  let closure_15 = callback1;
  const items1 = [callback, token];
  const callback2 = React.useCallback((absoluteX, absoluteY) => {
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
    obj = { <string:1768156336>: "__packager_asset", <string:483457390>: "isArray", data: { absoluteX, absoluteY } };
    obj.addBreadcrumb(obj);
    ({ item, node } = callback2(absoluteY, false, fastListRef));
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
        const activeIndex = frameCallback.activeIndex;
        const result = activeIndex.set(-1);
        let obj6 = gesture(token[26]);
        if (obj6.getIsScreenReaderEnabled()) {
          const obj1 = { type: "drag-start", node };
          callback(obj1);
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
            const gesture = items;
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
                  const activeIndex = closure_13.activeIndex;
                  if (null != items[activeIndex.get(activeIndex)]) {
                    obj.action();
                  }
                }
                const activeIndex2 = closure_13.activeIndex;
                const result = activeIndex2.set(-1);
                items(closure_2[23]).hideContextMenu();
                callback("contextmenu-close");
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
  let closure_16 = callback2;
  const callback3 = React.useCallback((absoluteX, absoluteY) => {
    const result = gesture(token[23]).updateContextMenuState(absoluteX, absoluteY, frameCallback);
  }, []);
  let closure_17 = callback3;
  const items2 = [sharedValue, sharedValue1, frameCallback, tmp];
  const callback4 = React.useCallback((arg0) => {
    let gestureState;
    let item;
    let item2;
    let listInsets;
    let node;
    let node2;
    let overPercentage;
    let overPercentage2;
    const state = dragRegion.getState();
    const overSpecs = state.overSpecs;
    let gesture = overSpecs;
    const dragSpecs = state.dragSpecs;
    const windowSize = state.windowSize;
    const token = windowSize;
    ({ setStateShallow: closure_3, listInsets, gestureState } = state);
    let obj = { overSpecs, dragSpecs, windowSize, gestureState: gestureState.get() };
    callback2(obj);
    if (null != dragSpecs) {
      const value = gestureState.get();
      let isScreenReaderEnabled = gesture(token[26]).getIsScreenReaderEnabled();
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null == tmp.node;
      }
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null != overSpecs;
      }
      if (!isScreenReaderEnabled) {
        obj = { type: "drag-start", node: tmp.node };
        callback(obj);
      }
      const _Map = Map;
      const map = new Map();
      let tmp12 = null != overSpecs;
      if (tmp12) {
        tmp12 = "self" !== overSpecs.state;
      }
      if (tmp12) {
        const result = map.set(tmp.item.recyclerKey, 0);
        const result1 = map.set(overSpecs.item.recyclerKey, 2 * tmp.itemSize);
      }
      const obj8 = gesture(token[26]);
      ({ item, overPercentage, node } = callback2(arg0, true, fastListRef, map));
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
            if (tmp.item.recyclerKey !== item.recyclerKey) {
              recyclerKey = tmp.item.recyclerKey;
              let str3 = "";
              if (null != recyclerKey) {
                str3 = recyclerKey;
              }
              const result2 = map.set(str3, 0);
              const result3 = map.set(item.recyclerKey, 2 * tmp);
            }
            ({ item: item2, overPercentage: overPercentage2, node: node2 } = callback2(arg0, true, fastListRef, tmp11));
            const tmp39 = callback2(arg0, true, fastListRef, tmp11);
          }
        }
        const tmp45 = function getOverState(node, node2, item, item2, overPercentage2) {
          if (null != item) {
            if (null != item2) {
              if (null != node) {
                if (null != node2) {
                  if (node.id === node2.id) {
                    return "self";
                  } else {
                    const type2 = item.type;
                    if (obj1(windowSize[14]).FastListItemTypes.SECTION === type2) {
                      const type = item2.type;
                      if (obj1(windowSize[14]).FastListItemTypes.SECTION === type) {
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
                    if (node.type === constants.FOLDER) {
                      if ("after" === tmp3) {
                        if (!tmp10) {
                          if (null != node2.parentId) {
                            const guildsTree = store.getGuildsTree();
                            node = guildsTree.getNode(node2.parentId);
                          }
                        }
                      }
                    }
                    if ("self" !== tmp3) {
                      if (null != tmp3) {
                        if (node.type === constants.GUILD) {
                          if (node2.type === constants.GUILD) {
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
                        if (node.type === constants.GUILD) {
                          if (node2.type === constants.FOLDER) {
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
        }(tmp.node, node2, tmp.item, item2, overPercentage2);
        let node3 = node2;
        let str4 = tmp45;
        if (null == tmp45) {
          node3 = tmp.node;
          item2 = tmp.item;
          str4 = "self";
        }
        if (tmp48) {
          obj = { type: "drag-move", dragNode: tmp.node, overNode: node3, overState: str4 };
          callback(obj);
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
          const obj1 = { node: node3, item: item2, state: str4, percentage: overPercentage2 };
          gesture = obj1;
        }
        const tmp48 = null != node3 && null != overSpecs;
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
          if (null != dragSpecs) {
            if (dragSpecs.node.type === constants.FOLDER) {
              if (dragSpecs.node.expanded) {
                let obj = dragSpecs(windowSize[21]);
                const result = obj.toggleGuildFolderExpand(dragSpecs.node.id);
                const guildsTree = store.getGuildsTree();
                const node = guildsTree.getNode(dragSpecs.node.id);
                let tmp9 = node !== dragSpecs.node;
                if (tmp9) {
                  let type;
                  if (null != node) {
                    type = node.type;
                  }
                  tmp9 = type === constants.FOLDER;
                }
                if (tmp9) {
                  obj = {};
                  const merged = Object.assign(dragSpecs);
                  obj["node"] = node;
                  const dragSpecs = obj;
                }
              }
            }
          }
          obj = { overSpecs: obj1, dragSpecs, windowSize };
          callback(obj);
        });
        const obj7 = gesture(token[20]);
      }
      const result5 = sharedValue1.set(0);
      frameCallback.setActive(false);
      const tmp21 = callback2(arg0, true, fastListRef, map);
    }
  }, items2);
  let closure_18 = callback4;
  const obj5 = arg1(dependencyMap[7]);
  const items3 = [callback4];
  const onFastListScrollWorklet = arg1(dependencyMap[29]).useExternalScrollEventHandler({ id: "guilds" });
  const items4 = [dragDropInProgress, dragRegion, gestureState, callback3, callback, callback4, callback2, callback1, listInsets, scrollPosition, scrollerRef, windowSize, gesture];
  const onFastListScroll = React.useCallback(() => {
    const gestureState = dragRegion.getState().gestureState;
    const value = gestureState.get();
    if ("drag" === value.mode) {
      callback4(value.absoluteY);
    }
  }, items3);
  gesture = React.useMemo(() => {
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
      const sum = num + closure_8.get();
      if (null != first) {
        if ("cancel" !== store.get().mode) {
          if (sum >= store2.get().min) {
            if (sum <= store2.get().max) {
              if (1 === changedTouches.changedTouches.length) {
                callback(closure_2[7]).runOnJS(closure_15)(first.absoluteX, first.absoluteY);
                const obj = callback(closure_2[7]);
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
    fn.__initData = closure_24;
    const LongPressResult = Gesture2.LongPress();
    const fn2 = function u(arg0, fail) {
      if ("cancel" === store.get().mode) {
        fail.fail();
      }
    };
    fn2.__closure = { gestureState };
    fn2.__workletHash = 8960390413776;
    fn2.__initData = closure_23;
    const onTouchesDownResult = Gesture2.LongPress().onTouchesDown(fn);
    const fn3 = function s(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      if ("cancel" !== store.get().mode) {
        callback(closure_2[7]).runOnJS(closure_16)(absoluteX, absoluteY);
        const obj = callback(closure_2[7]);
      }
    };
    obj = { gestureState, runOnJS: gesture(token[7]).runOnJS, handlePress: callback2 };
    fn3.__closure = obj;
    fn3.__workletHash = 2121892092583;
    fn3.__initData = closure_22;
    const onTouchesMoveResult = Gesture2.LongPress().onTouchesDown(fn).onTouchesMove(fn2);
    const fn4 = function o() {
      if ("cancel" === store.get().mode) {
        callback(closure_2[7]).runOnJS(closure_14)("cancel");
        const obj = callback(closure_2[7]);
      }
    };
    const onStartResult = Gesture2.LongPress().onTouchesDown(fn).onTouchesMove(fn2).onStart(fn3);
    fn4.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn4.__workletHash = 2371934536573;
    fn4.__initData = closure_21;
    const obj1 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const fn5 = function a() {
      let tmp = null != store.get().mode;
      if (tmp) {
        tmp = "cancel" !== store.get().mode;
      }
      if (!tmp) {
        callback(closure_2[7]).runOnJS(closure_14)("cancel");
        const obj = callback(closure_2[7]);
      }
    };
    const onEndResult = onStartResult.onEnd(fn4);
    fn5.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn5.__workletHash = 8240921685123;
    fn5.__initData = closure_20;
    const obj2 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const Gesture3 = gesture(token[30]).Gesture;
    const onTouchesCancelledResult = onEndResult.onTouchesCancelled(fn5);
    const PanResult = Gesture3.Pan();
    const result = Gesture3.Pan().manualActivation(true).simultaneousWithExternalGesture(scrollerRef, gesture);
    const result1 = result.shouldCancelWhenOutside(false);
    const fn6 = function n(arg0, activate) {
      const first = arg0.changedTouches[0];
      if ("pressed" === store.get().mode) {
        if (null != first) {
          const diff = first.absoluteX - store.get().initialX;
          const _Math = Math;
          const absolute = Math.abs(first.absoluteY - store.get().absoluteY);
          if (diff > 10) {
            if (diff > absolute) {
              let obj = {};
              const merged = Object.assign(store.get());
              obj["mode"] = "contextmenu";
              obj["absoluteX"] = first.absoluteX;
              obj["absoluteY"] = first.absoluteY;
              const result = store.set(obj);
              const result1 = store4.set(false);
              activate.activate();
              callback(closure_2[7]).runOnJS(closure_17)(first.absoluteX, first.absoluteY);
              const obj2 = callback(closure_2[7]);
            }
          }
          if (absolute > 10) {
            obj = {};
            const merged1 = Object.assign(store.get());
            obj["mode"] = "drag";
            obj["initialX"] = first.absoluteX;
            obj["initialY"] = first.absoluteY;
            obj["absoluteX"] = first.absoluteX;
            obj["absoluteY"] = first.absoluteY;
            const result2 = store.set(obj);
            activate.activate();
            const result3 = store4.set(true);
            callback(closure_2[7]).runOnJS(closure_18)(first.absoluteY);
            const obj4 = callback(closure_2[7]);
          }
        }
      }
      let tmp3 = "cancel" !== store.get().mode;
      if (tmp3) {
        tmp3 = null != first;
      }
      if (!tmp3) {
        activate.fail();
        const result4 = store4.set(false);
      }
    };
    const manualActivationResult = Gesture3.Pan().manualActivation(true);
    fn6.__closure = { gestureState, dragDropInProgress, DRAG_GESTURE_MINIMUM_DISTANCE: 10, runOnJS: gesture(token[7]).runOnJS, handleContextMenuDrag: callback3, handleGuildDrag: callback4 };
    fn6.__workletHash = 15225957003871;
    fn6.__initData = closure_28;
    const obj3 = { gestureState, dragDropInProgress, DRAG_GESTURE_MINIMUM_DISTANCE: 10, runOnJS: gesture(token[7]).runOnJS, handleContextMenuDrag: callback3, handleGuildDrag: callback4 };
    const fn7 = function r(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      if ("drag" === store.get().mode) {
        if (absoluteX !== store.get().absoluteX) {
          let initialY = store.get().initialY;
          const sum = store3.get().start + 160;
          let tmp9 = initialY < sum;
          const diff = closure_10 - store3.get().end - 160;
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
          const merged = Object.assign(store.get());
          obj["absoluteX"] = absoluteX;
          obj["absoluteY"] = absoluteY;
          obj["initialY"] = initialY;
          const result = store.set(obj);
          callback(closure_2[7]).runOnJS(closure_18)(absoluteY);
          const obj2 = callback(closure_2[7]);
        }
      } else if ("contextmenu" === store.get().mode) {
        callback(closure_2[7]).runOnJS(closure_17)(absoluteX, absoluteY);
        const obj3 = callback(closure_2[7]);
      }
    };
    const onTouchesMoveResult1 = result1.onTouchesMove(fn6);
    fn7.__closure = { gestureState, listInsets, GESTURE_ACCELERATION_RANGE: 160, windowSize, runOnJS: gesture(token[7]).runOnJS, handleGuildDrag: callback4, handleContextMenuDrag: callback3 };
    fn7.__workletHash = 14488930469604;
    fn7.__initData = closure_27;
    const obj4 = { gestureState, listInsets, GESTURE_ACCELERATION_RANGE: 160, windowSize, runOnJS: gesture(token[7]).runOnJS, handleGuildDrag: callback4, handleContextMenuDrag: callback3 };
    const fn8 = function t() {
      if ("drag" === store.get().mode) {
        callback(closure_2[7]).runOnJS(closure_14)("drop");
        const obj3 = callback(closure_2[7]);
      } else if ("contextmenu" === store.get().mode) {
        callback(closure_2[7]).runOnJS(closure_14)("contextmenu-open");
        const obj2 = callback(closure_2[7]);
      } else {
        callback(closure_2[7]).runOnJS(closure_14)("cancel");
        const obj = callback(closure_2[7]);
      }
    };
    const onUpdateResult = onTouchesMoveResult1.onUpdate(fn7);
    fn8.__closure = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn8.__workletHash = 9863070264039;
    fn8.__initData = closure_26;
    const obj5 = { gestureState, runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    const fn9 = function e() {
      callback(closure_2[7]).runOnJS(closure_14)("cancel");
    };
    const onEndResult1 = onUpdateResult.onEnd(fn8);
    fn9.__closure = { runOnJS: gesture(token[7]).runOnJS, handleGestureEnd: callback };
    fn9.__workletHash = 9715999020978;
    fn9.__initData = closure_25;
    return Gesture.Simultaneous(onTouchesCancelledResult, onEndResult1.onTouchesCancelled(fn9));
  }, items4);
  const effect1 = React.useEffect(() => dragRegion.subscribe((dragSpecs) => {
    if (null == dragSpecs.dragSpecs) {
      if (null == dragSpecs.dropSpecs) {
        const current = ref.current;
        if (null != current) {
          current.setDisableRecycling(false);
        }
      }
    }
    const current2 = ref.current;
    if (null != current2) {
      current2.setDisableRecycling(true);
    }
  }), []);
  return { scrollPosition, gesture, scrollerRef, fastListRef, persistantKeys, onFastListScroll, onFastListScrollWorklet };
};
