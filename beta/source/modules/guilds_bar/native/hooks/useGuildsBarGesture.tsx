// Module ID: 18729
// Function ID: 18730
// Name: useGuildsBarGesture
// Dependencies: [5, 19, 17, 5041, 6860, 18730, 18727, 1652, 551, 5408, 5177, 12, 1242, 1113, 7337, 18452, 5756, 575, 5085, 12646, 1259, 6990, 6096, 10030, 1377, 1627, 5422, 18731, 18732, 10030, 17431, 5452, 1705, 2]
// Exports: default

// Module 18729 (useGuildsBarGesture)
import react_native from "react-native" /* 17 */;
import intl15 from "intl" /* 1113 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import react_native2 from "react-native" /* 1259 */;
import _mod1705 from "module_1705" /* 1705 */;
import shared from "shared" /* 5177 */;
import HapticUtils from "HapticUtils" /* 5408 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5422 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import SortedGuildStore2 from "SortedGuildStore" /* 6860 */;
import FastList from "FastList" /* 7337 */;
import ContextMenuState from "ContextMenuState" /* 10030 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5041 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 18730 */;
import GuildsBarConstants from "GuildsBarConstants" /* 18727 */;
import "module_1652";
import module_1652_mod from "module_1652" /* 1652 */;
import debounce from "debounce" /* 551 */;
import module_12_mod from "module_12" /* 12 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const SortedGuildStore = SortedGuildStore2;
let _undefined, closure_1, closure_2, importDefault, set, set2;

let c10;
let module_1652;
let unpackModuleId;
function getDropIndex(dragNode, dragNode2, overState) {
  let tmp = dragNode2;
  if ("self" === overState) {
    tmp = dragNode;
  }
  const flattenedGuildFolderList = SortedGuildStore.getFlattenedGuildFolderList();
  let num = -1;
  for (const item10012 of flattenedGuildFolderList) {
    num = num + 1;
    if (item10012.id === tmp.id) {
      obj.return();
      break;
    }
    let str = "after";
    if ("after" !== overState) {
      let str2 = "convert-after";
      if ("convert-after" !== overState) {
        return num;
      }
    }
    return num + 1;
  }
}
function triggerHapticsAndAnnouncementsIfNecessary(type) {
  let dragNode;
  let overNode;
  let overState2;
  type = type.type;
  if ("drag-start" === type) {
    let tmp40;
    const node = type.node;
    const type4 = node.type;
    if (GuildsNodeType.GUILD === type4) {
      const guild = GuildStore.getGuild(node.id);
      let name1;
      if (guild != null) {
        name1 = guild.name;
      }
      if (name1 == null) {
        const intl11 = intl15.intl;
        name1 = intl11.string(intl15.t.fKYRlM);
      }
      tmp40 = name1;
    } else if (tmp39.FOLDER === type4) {
      let name4 = node.name;
      if (name4 == null) {
        const intl10 = intl15.intl;
        name4 = intl10.string(intl15.t.ebAnWE);
      }
      tmp40 = name4;
    }
    if (null != tmp40) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl12 = intl15.intl;
      const obj2 = { itemName: tmp40 };
      announce(intl12.formatToPlainString(intl15.t["vHD/Je"], obj2));
    }
    closure_15(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_START);
    closure_15.flush();
  } else if ("drag-move" === type) {
    let tmp7;
    let tmp8;
    let type1;
    if (_undefined != null) {
      type1 = _undefined.type;
    }
    let type6;
    if (_undefined != null) {
      type6 = _undefined.type;
    }
    if ("drag-move" === type6) {
      tmp7 = getDropIndex(_undefined.dragNode, _undefined.overNode, _undefined.overState);
      tmp8 = getDropIndex;
    } else {
      tmp7 = getDropIndex(type.dragNode, type.dragNode, "self");
      tmp8 = getDropIndex;
    }
    let type7;
    const tmp8Result = tmp8(type.dragNode, type.overNode, type.overState);
    if (_undefined != null) {
      type7 = _undefined.type;
    }
    let str3 = "self";
    if ("drag-start" !== type7) {
      let str4;
      if (_undefined != null) {
        str4 = _undefined.overState;
      }
      if (str4 == null) {
        str4 = "self";
      }
      str3 = str4;
    }
    if (tmp7 !== tmp8Result) {
      let tmp35;
      closure_15(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
      ({ dragNode, overNode, overState: overState2 } = type);
      if ("convert-before" !== overState2) {
        let formatToPlainStringResult1;
        if ("convert-after" !== overState2) {
          if ("drop-into" === overState2) {
            let formatToPlainStringResult;
            if (overNode.type === GuildsNodeType.FOLDER) {
              const intl6 = tmp18(1113).intl;
              const obj3 = { folderName: overNode.name };
              formatToPlainStringResult = intl6.formatToPlainString(tmp18(1113).t.uLDoxR, obj3);
            }
            formatToPlainStringResult1 = formatToPlainStringResult;
          } else if ("before" === overState2) {
            let tmp28;
            const intl3 = tmp18(1113).intl;
            const formatToPlainString = intl3.formatToPlainString;
            const type2 = overNode.type;
            const prop = tmp18(1113).t["A5aDw+"];
            if (GuildsNodeType.GUILD === type2) {
              const guild1 = GuildStore.getGuild(overNode.id);
              let name5;
              if (guild1 != null) {
                name5 = guild1.name;
              }
              if (name5 == null) {
                const intl5 = tmp18(1113).intl;
                name5 = intl5.string(tmp18(1113).t.fKYRlM);
              }
              tmp28 = name5;
            } else if (tmp27.FOLDER === type2) {
              let name2 = overNode.name;
              if (name2 == null) {
                const intl4 = tmp18(1113).intl;
                name2 = intl4.string(tmp18(1113).t.ebAnWE);
              }
              tmp28 = name2;
            }
            const obj4 = { itemName: tmp28 };
            formatToPlainStringResult1 = formatToPlainString(prop, obj4);
          } else if ("after" === overState2) {
            let tmp21;
            const intl14 = tmp18(1113).intl;
            const formatToPlainString3 = intl14.formatToPlainString;
            const type5 = overNode.type;
            const w8FN92 = tmp18(1113).t.w8FN92;
            if (GuildsNodeType.GUILD === type5) {
              const guild2 = GuildStore.getGuild(overNode.id);
              let name6;
              if (guild2 != null) {
                name6 = guild2.name;
              }
              if (name6 == null) {
                const intl2 = tmp18(1113).intl;
                name6 = intl2.string(tmp18(1113).t.fKYRlM);
              }
              tmp21 = name6;
            } else if (tmp67.FOLDER === type5) {
              let name = overNode.name;
              if (name == null) {
                const intl = tmp18(1113).intl;
                name = intl.string(tmp18(1113).t.ebAnWE);
              }
              tmp21 = name;
            }
            obj = { itemName: tmp21 };
            formatToPlainStringResult1 = formatToPlainString3(w8FN92, obj);
          }
        }
        if (null != formatToPlainStringResult1) {
          closure_16(formatToPlainStringResult1);
        }
      }
      const intl7 = tmp18(1113).intl;
      const formatToPlainString2 = intl7.formatToPlainString;
      const type3 = overNode.type;
      const qiQ0QI = tmp18(1113).t.qiQ0QI;
      if (GuildsNodeType.GUILD === type3) {
        const guild3 = GuildStore.getGuild(overNode.id);
        let name7;
        if (guild3 != null) {
          name7 = guild3.name;
        }
        if (name7 == null) {
          const intl9 = tmp18(1113).intl;
          name7 = intl9.string(tmp18(1113).t.fKYRlM);
        }
        tmp35 = name7;
      } else if (tmp34.FOLDER === type3) {
        let name3 = overNode.name;
        if (name3 == null) {
          const intl8 = tmp18(1113).intl;
          name3 = intl8.string(tmp18(1113).t.ebAnWE);
        }
        tmp35 = name3;
      }
      const obj5 = { itemName: tmp35 };
      formatToPlainStringResult1 = formatToPlainString2(qiQ0QI, obj5);
    } else {
      const overState = type.overState;
      null != overState && overState.startsWith("convert");
      null != str3 && str3.startsWith("convert");
    }
  } else if ("drag-drop" === type) {
    closure_15(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_END);
    closure_15.flush();
    closure_16.flush();
    const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
    const announce2 = AccessibilityAnnouncer2.announce;
    const intl13 = intl15.intl;
    announce2(intl13.string(intl15.t.lMkmz7));
  }
  let tmp58;
  if ("drag-drop" !== type.type) {
    tmp58 = type;
  }
  _undefined = tmp58;
}
function getItemAndNodeFromTouchEvent(arg0, arg1, fastListRef, map) {
  let dragRegion;
  let scrollPosition;
  const state = GuildsBarDnDStore.getState();
  ({ dragRegion, scrollPosition } = state);
  const sum = scrollPosition.get() + arg0;
  let bound = sum;
  if (arg1) {
    const range = dragRegion.get();
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.max(Math.min(sum, range.max - 2), range.min + 2);
  }
  const current = fastListRef.current;
  let sectionItemFromPosition;
  if (current != null) {
    sectionItemFromPosition = current.getSectionItemFromPosition(bound, map);
  }
  if (sectionItemFromPosition == null) {
    sectionItemFromPosition = { item: "description", positionPercentage: false };
  }
  const item = sectionItemFromPosition.item;
  let tmp6;
  const positionPercentage = sectionItemFromPosition.positionPercentage;
  if (null != item) {
    let tmp7;
    if (null != item) {
      if (item.section >= constants.GUILDS) {
        const element = SortedGuildStore.getFastListGuildFolders()[item.section - tmp8.GUILDS];
        if (null != element) {
          const type = item.type;
          const tmp10 = require;
          if (FastList.FastListItemTypes.SECTION === type) {
            if (null != element) {
              tmp7 = element;
            }
          } else if (tmp10(7337).FastListItemTypes.ITEM === type) {
            if (element.type !== GuildsNodeType.ROOT) {
              let tmp13 = element;
              if (element.type !== GuildsNodeType.FOLDER) {
                if (tmp13.type === GuildsNodeType.GUILD) {
                  tmp7 = tmp13;
                }
              } else {
                tmp13 = tmp14;
              }
            }
          }
        }
      }
    }
    tmp6 = tmp7;
  }
  obj = { item, overPercentage: Math.floor(100 * positionPercentage) / 100, node: tmp6, pointerPosition: bound };
  return obj;
}
const Dimensions = react_native.Dimensions;
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ FastListRenderSections: c10, useGuildWrapperSize: unpackModuleId } = GuildsBarConstants);
let c12 = 160;
let obj = { pan: module_1652.makeMutable(-1), itemMeasurements: module_1652.makeMutable([]), activeIndex: module_1652.makeMutable(-1) };
module_1652 = module_1652_mod;
let closure_15 = debounce(HapticUtils.triggerHapticFeedback, 16);
let closure_16 = debounce((intl) => {
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}, 500);
let module_12 = module_12_mod;
let closure_17 = module_12.throttle((data) => {
  obj = SentryUtilsDefault;
  const obj2 = { category: "GuildsBarGesture", message: "handleGuildDrag started", data };
  obj.addBreadcrumb(obj2);
}, 2000);
module_12 = module_12_mod;
let closure_18 = module_12.throttle((data) => {
  obj = SentryUtilsDefault;
  const obj2 = { category: "GuildsBarGesture", message: "handleGestureEnd started", data };
  obj.addBreadcrumb(obj2);
}, 3000);
let c20;
let closure_23 = { code: "(function useGuildsBarGestureTsx1({timeSincePreviousFrame:timeSincePreviousFrame}){let[gestureState,pushScrollAccumulatedTime,MS_PER_FRAME_60FPS,pushScroll,scrollTo,scrollerRef,roundToNearestPixel,scrollPosition]=this.__closure;if(timeSincePreviousFrame==null||timeSincePreviousFrame<=0||gestureState.get().mode!=='drag'){return;}pushScrollAccumulatedTime.set(pushScrollAccumulatedTime.get()+timeSincePreviousFrame);if(pushScrollAccumulatedTime.get()<MS_PER_FRAME_60FPS){return;}const scrollSpeed=1000*pushScroll.get();const timeInSeconds=pushScrollAccumulatedTime.get()/1000;pushScrollAccumulatedTime.set(0);scrollTo(scrollerRef,0,Math.max(roundToNearestPixel(scrollPosition.get()+timeInSeconds*scrollSpeed),0),false);})" };
let closure_24 = { code: "(function useGuildsBarGestureTsx2(event,manager){let[scrollPosition,gestureState,dragRegion,scheduleOnRN,handleTouchesDown]=this.__closure;var _touch$absoluteY;const touch=event.changedTouches[0];const pointerY=((_touch$absoluteY=touch===null||touch===void 0?void 0:touch.absoluteY)!==null&&_touch$absoluteY!==void 0?_touch$absoluteY:0)+scrollPosition.get();if(touch==null||gestureState.get().mode==='cancel'||pointerY<dragRegion.get().min||pointerY>dragRegion.get().max){manager.fail();}else if(event.changedTouches.length===1){scheduleOnRN(handleTouchesDown,touch.absoluteX,touch.absoluteY);}})" };
let closure_25 = { code: "(function useGuildsBarGestureTsx3(event,manager){let[gestureState]=this.__closure;if(gestureState.get().mode==='cancel'){manager.fail();}})" };
let closure_26 = { code: "(function useGuildsBarGestureTsx4({absoluteX:absoluteX,absoluteY:absoluteY}){let[gestureState,scheduleOnRN,handlePress]=this.__closure;if(gestureState.get().mode!=='cancel'){scheduleOnRN(handlePress,absoluteX,absoluteY);}})" };
let closure_27 = { code: "(function useGuildsBarGestureTsx5(){let[gestureState,scheduleOnRN,handleGestureEnd]=this.__closure;if(gestureState.get().mode==='cancel'){scheduleOnRN(handleGestureEnd,'cancel');}})" };
let closure_28 = { code: "(function useGuildsBarGestureTsx6(){let[gestureState,scheduleOnRN,handleGestureEnd]=this.__closure;if(gestureState.get().mode==null||gestureState.get().mode==='cancel'){scheduleOnRN(handleGestureEnd,'cancel');}})" };
let closure_29 = { code: "(function useGuildsBarGestureTsx7(event,manager){let[gestureState,dragDropInProgress,DRAG_GESTURE_MINIMUM_DISTANCE,scheduleOnRN,handleContextMenuDrag,handleGuildDrag]=this.__closure;const touch=event.changedTouches[0];if(gestureState.get().mode!=='pressed'||touch==null){if(gestureState.get().mode==='cancel'||touch==null){manager.fail();dragDropInProgress.set(false);}return;}const diffX=touch.absoluteX-gestureState.get().initialX;const absDiffY=Math.abs(touch.absoluteY-gestureState.get().absoluteY);if(diffX>DRAG_GESTURE_MINIMUM_DISTANCE&&diffX>absDiffY){gestureState.set({...gestureState.get(),mode:'contextmenu',absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});dragDropInProgress.set(false);manager.activate();scheduleOnRN(handleContextMenuDrag,touch.absoluteX,touch.absoluteY);}else if(absDiffY>DRAG_GESTURE_MINIMUM_DISTANCE){gestureState.set({...gestureState.get(),mode:'drag',initialX:touch.absoluteX,initialY:touch.absoluteY,absoluteX:touch.absoluteX,absoluteY:touch.absoluteY});manager.activate();dragDropInProgress.set(true);scheduleOnRN(handleGuildDrag,touch.absoluteY);}})" };
let closure_30 = { code: "(function useGuildsBarGestureTsx8({absoluteX:absoluteX,absoluteY:absoluteY}){let[gestureState,listInsets,GESTURE_ACCELERATION_RANGE,windowSize,scheduleOnRN,handleGuildDrag,handleContextMenuDrag]=this.__closure;if(gestureState.get().mode==='drag'){if(absoluteX!==gestureState.get().absoluteX||absoluteY!==gestureState.get().absoluteY){let{initialY:initialY}=gestureState.get();const minPushRange=listInsets.get().start+GESTURE_ACCELERATION_RANGE;const maxPushRange=windowSize-listInsets.get().end-GESTURE_ACCELERATION_RANGE;if(initialY<minPushRange&&absoluteY>initialY){initialY=absoluteY;}else if(initialY>maxPushRange&&absoluteY<initialY){initialY=absoluteY;}gestureState.set({...gestureState.get(),absoluteX:absoluteX,absoluteY:absoluteY,initialY:initialY});scheduleOnRN(handleGuildDrag,absoluteY);}}else if(gestureState.get().mode==='contextmenu'){scheduleOnRN(handleContextMenuDrag,absoluteX,absoluteY);}})" };
let closure_31 = { code: "(function useGuildsBarGestureTsx9(){let[gestureState,scheduleOnRN,handleGestureEnd]=this.__closure;if(gestureState.get().mode==='drag'){scheduleOnRN(handleGestureEnd,'drop');}else if(gestureState.get().mode==='contextmenu'){scheduleOnRN(handleGestureEnd,'contextmenu-open');}else{scheduleOnRN(handleGestureEnd,'cancel');}})" };
let closure_32 = { code: "(function useGuildsBarGestureTsx10(){let[scheduleOnRN,handleGestureEnd]=this.__closure;scheduleOnRN(handleGestureEnd,'cancel');})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarGesture.tsx");

export default function useGuildsBarGesture() {
  let fastListRef;
  let frameCallback;
  let gesture;
  let listInsets;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let token;
  let tmp = gesture;
  let tmp2 = token;
  obj = gesture(token[15]);
  gesture = obj.useHomeDrawerState().gesture;
  let tmp3 = listInsets();
  importDefault = tmp3;
  let obj2 = gesture(token[16]);
  token = obj2.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj3 = gesture(token[7]);
  const scrollerRef = obj3.useAnimatedRef();
  let obj4 = fastListRef;
  fastListRef = fastListRef.useRef(null);
  let obj5 = gesture(token[7]);
  const sharedValue = obj5.useSharedValue(0);
  let obj6 = gesture(token[7]);
  const sharedValue1 = obj6.useSharedValue(0);
  let tmp9 = frameCallback((gestureState) => ({ gestureState: gestureState.gestureState, scrollPosition: gestureState.scrollPosition, dragRegion: gestureState.dragRegion, windowSize: gestureState.windowSize, listInsets: gestureState.listInsets, dragDropInProgress: gestureState.dragDropInProgress }), gesture(token[18]).shallow);
  let gestureState = tmp9.gestureState;
  let scrollPosition = tmp9.scrollPosition;
  let dragRegion = tmp9.dragRegion;
  const windowSize = tmp9.windowSize;
  listInsets = tmp9.listInsets;
  const dragDropInProgress = tmp9.dragDropInProgress;
  const persistantKeys = frameCallback((arg0) => {
    let dragSpecs;
    let dropSpecs;
    ({ dropSpecs, dragSpecs } = arg0);
    set = new Set();
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
    scrollPosition = undefined;
    if (current != null) {
      scrollPosition = current.computeScrollPosition(windowSize.GUILDS);
    }
    const current2 = tmp.current;
    let sections;
    if (current2 != null) {
      sections = current2.props.sections;
    }
    if (sections == null) {
      sections = [];
    }
    const diff = sections.length - 1;
    let num = sections[diff];
    if (num == null) {
      num = 0;
    }
    const current3 = tmp.current;
    let scrollPosition1;
    if (current3 != null) {
      scrollPosition1 = current3.computeScrollPosition(diff, tmp5);
    }
    let num2;
    if (scrollPosition != null) {
      num2 = scrollPosition.scrollPosition;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let num3 = Infinity;
    if (null != scrollPosition1) {
      num3 = scrollPosition1.scrollPosition + scrollPosition1.size;
    }
    dragRegion = GuildsBarDnDStore.getState().dragRegion;
    const range = dragRegion.get();
    const tmp7 = num2 === range.min && num3 === range.max;
    if (!tmp7) {
      const range1 = { min: num2, max: num3 };
      const result = dragRegion.set(range1);
    }
  });
  let tmp12 = gesture(token[7]);
  let items = [closure_23, gestureState, sharedValue1, 16.666666666666668, sharedValue, , , , ];
  const useFrameCallback = tmp12.useFrameCallback;
  items[5] = gesture(token[7]).scrollTo;
  items[6] = scrollerRef;
  items[7] = require("roundToNearestPixel");
  items[8] = scrollPosition;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
  function useGuildsBarGestureTsx1(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    if (null != timeSincePreviousFrame) {
      if (timeSincePreviousFrame > 0) {
        if ("drag" === _undefined.get().mode) {
          const result = _undefined2.set(_undefined2.get() + timeSincePreviousFrame);
          if (_undefined2.get() >= c2) {
            const result1 = 1000 * _undefined3.get();
            const result2 = obj.get() / 1000;
            const result3 = obj.set(0);
            const _Math = Math;
            _undefined4(c5, 0, Math.max(_undefined5(_undefined6.get() + result2 * result1), 0), false);
          }
        }
      }
    }
  }
  let items1 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  useGuildsBarGestureTsx1.__closure = items1;
  useGuildsBarGestureTsx1.__workletHash = 2533042180415;
  useGuildsBarGestureTsx1.__initData = tmp13;
  frameCallback = useFrameCallback(useGuildsBarGestureTsx1, false);
  let items2 = [sharedValue, sharedValue1, frameCallback];
  const callback = obj4.useCallback((event) => {
    let item;
    let obj5;
    let overSpecs;
    let str11;
    obj = GuildsBarDnDStore;
    const state1 = GuildsBarDnDStore.getState();
    const dragSpecs = state1.dragSpecs;
    ({ overSpecs, gestureState, dragDropInProgress } = state1);
    const setStateShallow = state1.setStateShallow;
    const result = sharedValue.set(0);
    const result1 = sharedValue1.set(0);
    let obj2 = frameCallback;
    if (frameCallback.isActive) {
      obj2.setActive(false);
    }
    if ("cancel" === event) {
      let obj3 = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      const tmp10 = callback4(obj3);
    } else {
      let tmp5 = importDefault;
      let tmp7 = SentryUtilsDefault;
      let obj4 = { category: "GuildsBarGesture", message: "handleGestureEnd started", data: obj5 };
      obj5 = { event, dragSpecs, overSpecs, gestureState: gestureState.get() };
      const addBreadcrumb = tmp7.addBreadcrumb;
      addBreadcrumb(obj4);
    }
    if ("drop" === event) {
      if (null != overSpecs) {
        if (null != dragSpecs) {
          let tmp11;
          let layoutStart;
          const item2 = dragSpecs.item;
          const item3 = overSpecs.item;
          const type2 = item2.type;
          if (FastList.FastListItemTypes.SECTION === type2) {
            const type = item3.type;
            if (FastList.FastListItemTypes.SECTION === type) {
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
              tmp11 = str2;
            }
          }
          let num = 0;
          if ("after" === tmp11) {
            num = dragSpecs.item.layoutSize;
          }
          if ("after" === overSpecs.state) {
            layoutStart = overSpecs.item.layoutStart + dragSpecs.itemSize;
          } else {
            layoutStart = overSpecs.item.layoutStart;
          }
          closure_1 = layoutStart - num;
          const node = dragSpecs.node;
          const node2 = overSpecs.node;
          const tmp12 = "after" === overSpecs.state;
          let c4 = tmp12;
          let closure_5 = "convert-before" === overSpecs.state || "convert-after" === overSpecs.state || "drop-into" === overSpecs.state;
          let state = overSpecs.state;
          const tmp13 = "convert-before" === overSpecs.state || "convert-after" === overSpecs.state || "drop-into" === overSpecs.state;
          if ("self" !== state) {
            if (null != state) {
              let id = node2.id;
              let id1 = id;
              if (node.type === GuildsNodeType.FOLDER) {
                if (node2.type === GuildsNodeType.GUILD) {
                  if (null != node2.parentId) {
                    id1 = node2.parentId;
                  }
                  const tmp37Result = react_native2;
                  tmp37Result.batchUpdates(() => {
                    let str;
                    let tmp17;
                    const tmp2 = id1;
                    if (node.id !== id1) {
                      const tmp3 = closure_2_1;
                      const tmp5 = closure_2_1(token[21]);
                      const id = tmp.id;
                      let tmp7 = closure_5;
                      const moveById = tmp5.moveById;
                      if (!tmp7) {
                        tmp7 = c4;
                      }
                      const tmp8 = tmp5;
                      moveById(id, tmp2, tmp7, closure_5);
                      scrollerRef(function*(arg0, value) {
                        let v3;
                        if (c0 === 2) {
                          c0 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            return { value: "HermesInternal", done: "HermesInternal" };
                          }
                        } else {
                          let c3;
                          try {
                            c0 = 2;
                            if (0 === c1) {
                              if (arg0 === 1) {
                                c0 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c0 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                c3 = 1;
                                c1 = 2;
                                const obj2 = c0(closure_2[22]);
                                c0 = 1;
                                const obj5 = { value: obj2.saveGuildFolders(compatibleGuildFolders.getCompatibleGuildFolders()), done: false };
                                return obj5;
                              }
                            } else {
                              if (1 === tmp3) {
                                c3 = 0;
                              } else if (arg0 === 1) {
                                c0 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c3 = 0;
                                c0 = 3;
                                obj = { value, done: true };
                                return obj;
                              } else {
                                c3 = 0;
                              }
                              c0 = 3;
                              return { value: "HermesInternal", done: "HermesInternal" };
                            }
                          } catch (tmp8) {
                            closure_2 = tmp8;
                            if (0 === c3) {
                              c0 = 3;
                              throw tmp8;
                            } else {
                              c1 = 1;
                            }
                          }
                        }
                      })();
                    }
                    state = state.getState();
                    obj = { dragNode: tmp, overNode: node2, dropPosition, dragRecyclerKey: str, itemSize: tmp17.itemSize, overState: state };
                    const item = dragSpecs.item;
                    str = undefined;
                    const dropStart = state.dropStart;
                    tmp17 = dragSpecs;
                    if (item != null) {
                      str = item.recyclerKey;
                    }
                    if (str == null) {
                      str = "";
                    }
                    dropStart(obj);
                  });
                  const obj7 = { type: "drag-drop", dragNode: node, overNode: node2, overState: state };
                  triggerHapticsAndAnnouncementsIfNecessary(obj7);
                }
              }
              const tmp19 = node2.type === GuildsNodeType.FOLDER && node2.expanded && tmp12;
              if (tmp19) {
                c4 = false;
                const first = node2.children[0];
                id1 = undefined;
                if (first != null) {
                  id1 = first.id;
                }
                if (id1 == null) {
                  id1 = id;
                }
              }
            }
          }
          const state2 = obj.getState();
          const obj8 = { dragNode: node, overNode: node, dropPosition: null, itemSize: null, dragRecyclerKey: str11, overState: "self" };
          ({ itemTop: obj6.dropPosition, itemSize: obj6.itemSize, item } = dragSpecs);
          str11 = undefined;
          let dropStart = state2.dropStart;
          if (item != null) {
            str11 = item.recyclerKey;
          }
          if (str11 == null) {
            str11 = "";
          }
          dropStart(obj8);
          const obj9 = { type: "drag-drop", dragNode: node, overNode: node, overState: "self" };
          let tmp17 = triggerHapticsAndAnnouncementsIfNecessary(obj9);
        }
      }
    }
    if ("contextmenu-open" === event) {
      const ContextMenuStore = ContextMenuState.ContextMenuStore;
      const menu = ContextMenuStore.getState().menu;
      if (null != menu) {
        const activeIndex = menu.state.activeIndex;
        const close = menu.requestClose(-1 === activeIndex.get());
      }
    }
    setStateShallow({ dragSpecs: "Array", overSpecs: "flexDirection" });
    const value = gestureState.get();
    if (null != value.mode) {
      const obj10 = { mode: null };
      set = gestureState.set;
      const merged = Object.assign(value);
      const result2 = set(obj10);
      const result3 = dragDropInProgress.set(false);
    }
  }, items2);
  const callback1 = obj4.useCallback((arg0, arg1) => {
    const state = GuildsBarDnDStore.getState();
    ({ gestureState, dragDropInProgress } = state);
    const item = getItemAndNodeFromTouchEvent(arg1, false, fastListRef).item;
    const value = gestureState.get();
    const tmp3 = null == item && null == value.mode;
    if (tmp3) {
      obj = { mode: "cancel" };
      set = gestureState.set;
      const merged = Object.assign(value);
      const result = set(obj);
      const result1 = dragDropInProgress.set(false);
    }
  }, []);
  let items3 = [callback, token];
  const callback2 = obj4.useCallback((absoluteX, absoluteY) => {
    let dragSpecs;
    let item;
    let name;
    let node;
    let tmp10Result6;
    let tmp2ResultResult;
    const state = dragRegion.getState();
    ({ dragSpecs, scrollPosition, gestureState, dragDropInProgress } = state);
    const setStateShallow = state.setStateShallow;
    obj = closure_1(token[12]);
    let obj2 = { category: "GuildsBarGesture", message: "handlePress started", data: { absoluteX, absoluteY } };
    obj.addBreadcrumb(obj2);
    ({ item, node } = getItemAndNodeFromTouchEvent(absoluteY, false, fastListRef));
    getItemAndNodeFromTouchEvent(absoluteY, false, fastListRef);
    const tmp2 = closure_1;
    if (null != item) {
      if (null != node) {
        const obj3 = { node, item, itemTop: null, itemSize: null };
        ({ layoutStart: obj4.itemTop, layoutSize: obj4.itemSize } = item);
        const height = sharedValue.get("window").height;
        let sum = height;
        const obj5 = gesture(token[24]);
        if (obj5.isAndroid()) {
          const tmp10Result = gesture(token[25]);
          const rect = tmp10Result.getSafeAreaInsets();
          sum = height + (rect.top + rect.bottom);
        }
        let activeIndex = callback.activeIndex;
        let result = activeIndex.set(-1);
        const tmp10Result5 = gesture(token[26]);
        const tmp12 = callback;
        if (tmp10Result5.getIsScreenReaderEnabled()) {
          const obj6 = { type: "drag-start", node };
          triggerHapticsAndAnnouncementsIfNecessary(obj6);
        } else {
          let tmp15;
          const type = node.type;
          if (scrollPosition.GUILD === type) {
            const guild = sharedValue1.getGuild(node.id);
            const obj7 = { key: node.id, title: name, items: tmp2ResultResult };
            name = undefined;
            if (guild != null) {
              name = guild.name;
            }
            if (null != guild) {
              const tmp2Result = tmp2(token[27]);
              tmp2ResultResult = tmp2Result(guild.id, gestureState.getGuildsTree().version);
            } else {
              tmp2ResultResult = [];
            }
            tmp15 = obj7;
          } else if (tmp14.FOLDER === type) {
            ({ id: obj14.key, name: obj14.title } = node);
            const obj8 = { key: null, title: null, items: tmp10Result6.getGuildFolderMenuItems(node.id) };
            tmp15 = obj8;
            tmp10Result6 = gesture(token[28]);
          }
          const items = tmp15.items;
          if (items.length > 0) {
            const sum1 = item.layoutStart - scrollPosition.get() + 6;
            let str2 = "below";
            if (0.65 * sum < sum1) {
              str2 = "above";
            }
            let diff = sum1;
            if ("below" !== str2) {
              diff = sum - sum1 - token;
            }
            size = {
              key: "" + tmp21,
              title: tmp22,
              items,
              x: 12 + token + 12,
              y: diff,
              positionX: "left",
              positionY: str2,
              width: token,
              height: token,
              state: tmp12,
              dividerIndexes: [],
              keyboardShouldPersistTaps: "never",
              requestClose(arg0) {
                        const tmp = arg0;
                        if (!tmp) {
                          const activeIndex = obj.activeIndex;
                          obj = items[activeIndex.get(activeIndex)];
                          if (obj != null) {
                            obj.action();
                          }
                        }
                        const activeIndex2 = obj.activeIndex;
                        const result = activeIndex2.set(-1);
                        const obj2 = ContextMenuState;
                        obj2.hideContextMenu();
                        callback("contextmenu-close");
                      },
              onClose() {

                      }
            };
            const _HermesInternal = HermesInternal;
            const showContextMenu = gesture(tmp3[23]).showContextMenu;
            gesture(token[23]);
            showContextMenu(size);
          }
        }
        const obj9 = { dragSpecs: obj3, overSpecs: "Array", windowSize: sum };
        setStateShallow(obj9);
        const obj10 = { mode: "pressed", initialY: absoluteY, initialX: absoluteX, absoluteY, absoluteX };
        const result1 = gestureState.set(obj10);
        const tmp10Result8 = gesture(token[9]);
        const result2 = tmp10Result8.triggerHapticFeedback(tmp10(tmp3[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }
    const obj11 = { mode: null };
    set = gestureState.set;
    const merged = Object.assign(gestureState.get());
    const result3 = set(obj11);
    const result4 = dragDropInProgress.set(false);
  }, items3);
  const callback3 = obj4.useCallback((arg0, arg1) => {
    obj = gesture(token[23]);
    const result = obj.updateContextMenuState(arg0, arg1, callback);
  }, []);
  let items4 = [sharedValue, sharedValue1, frameCallback, tmp3];
  const callback4 = obj4.useCallback(function(arg0) {
    let closure_129_3;
    let item;
    let item2;
    let node;
    let node2;
    let obj2;
    let overPercentage;
    let overPercentage2;
    const state = GuildsBarDnDStore.getState();
    let overSpecs = state.overSpecs;
    ({ dragSpecs: obj2, windowSize } = state);
    ({ setStateShallow: closure_129_3, listInsets, gestureState } = state);
    obj = { overSpecs, dragSpecs: obj2, windowSize, gestureState: gestureState.get() };
    callback3(obj);
    if (null != obj2) {
      let num14;
      const value = gestureState.get();
      const obj10 = useIsScreenReaderEnabled;
      let isScreenReaderEnabled = obj10.getIsScreenReaderEnabled();
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null == obj2.node;
      }
      if (!isScreenReaderEnabled) {
        isScreenReaderEnabled = null != overSpecs;
      }
      if (!isScreenReaderEnabled) {
        obj2 = { type: "drag-start", node: obj2.node };
        triggerHapticsAndAnnouncementsIfNecessary(obj2);
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      let tmp9 = null != overSpecs && "self" !== overSpecs.state;
      if (tmp9) {
        let result = map.set(obj2.item.recyclerKey, 0);
        const result1 = map.set(overSpecs.item.recyclerKey, 2 * obj2.itemSize);
      }
      const tmp16 = getItemAndNodeFromTouchEvent;
      ({ item, overPercentage, node } = getItemAndNodeFromTouchEvent(arg0, true, fastListRef, map));
      let id;
      getItemAndNodeFromTouchEvent(arg0, true, fastListRef, map);
      if (overSpecs != null) {
        id = overSpecs.node.id;
      }
      let id1;
      if (node != null) {
        id1 = node.id;
      }
      if (id !== id1) {
        const ContextMenuStore = tmp66(10030).ContextMenuStore;
        if (null != ContextMenuStore.getState().menu) {
          const tmp66Result = ContextMenuState;
          tmp66Result.hideContextMenu();
        }
        node2 = node;
        overPercentage2 = overPercentage;
        item2 = item;
        if (null != item) {
          let recyclerKey;
          if (overSpecs != null) {
            recyclerKey = overSpecs.item.recyclerKey;
          }
          node2 = node;
          overPercentage2 = overPercentage;
          item2 = item;
          if (recyclerKey !== item.recyclerKey) {
            map.clear();
            if (obj2.item.recyclerKey !== item.recyclerKey) {
              let str2 = obj2.item.recyclerKey;
              set = map.set;
              if (str2 == null) {
                str2 = "";
              }
              const result2 = set(str2, 0);
              const result3 = map.set(item.recyclerKey, 2 * closure_1);
            }
            ({ item: item2, overPercentage: overPercentage2, node: node2 } = tmp16(arg0, true, fastListRef, map));
            tmp16(arg0, true, fastListRef, map);
          }
        }
        const node3 = obj2.node;
        const item3 = obj2.item;
        let str3;
        if (null != item3) {
          if (null != item2) {
            if (null != node3) {
              if (null != node2) {
                str3 = "self";
                if (node3.id !== node2.id) {
                  const type2 = item3.type;
                  if (FastList.FastListItemTypes.SECTION === type2) {
                    let type = item2.type;
                    if (FastList.FastListItemTypes.SECTION === type) {
                      if (item2.recyclerKey !== item3.recyclerKey) {
                        let str6 = "after";
                        if (overPercentage2 < 0.5) {
                          str6 = "before";
                        }
                      }
                    }
                  }
                  if (node3.type === GuildsNodeType.FOLDER) {
                    if ("after" === tmp37) {
                      if (node2.type !== GuildsNodeType.FOLDER) {
                        if (node2.type !== GuildsNodeType.FOLDER) {
                          if (null != node2.parentId) {
                            let guildsTree = SortedGuildStore.getGuildsTree();
                            const node1 = guildsTree.getNode(node2.parentId);
                          }
                        }
                      }
                    }
                  }
                  str3 = tmp37;
                  if ("self" !== tmp37) {
                    str3 = tmp37;
                    if (null != tmp37) {
                      if (node3.type === GuildsNodeType.GUILD) {
                        if (node2.type === GuildsNodeType.GUILD) {
                          if (null == node2.parentId) {
                            str3 = tmp37;
                            if (overPercentage2 > 0.35) {
                              str3 = tmp37;
                              if (overPercentage2 < 0.65) {
                                if ("before" === tmp37) {
                                  str3 = "convert-before";
                                } else {
                                  str3 = tmp37;
                                  if ("after" === tmp37) {
                                    str3 = "convert-after";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      str3 = tmp37;
                      if (node3.type === GuildsNodeType.GUILD) {
                        str3 = tmp37;
                        if (node2.type === GuildsNodeType.FOLDER) {
                          str3 = tmp37;
                          if (!node2.expanded) {
                            str3 = tmp37;
                            if (overPercentage2 > 0.35) {
                              str3 = tmp37;
                              if (overPercentage2 < 0.65) {
                                str3 = "drop-into";
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (null == str3) {
          node2 = obj2.node;
          item2 = obj2.item;
          str3 = "self";
        }
        const tmp44 = null != node2 && null != overSpecs;
        if (tmp44) {
          let obj3 = { type: "drag-move", dragNode: obj2.node, overNode: node2, overState: str3 };
          triggerHapticsAndAnnouncementsIfNecessary(obj3);
        }
        let tmp48 = null == node2 || null == item2;
        if (!tmp48) {
          let node4;
          if (overSpecs != null) {
            node4 = overSpecs.node;
          }
          let tmp50 = node4 === node2;
          if (tmp50) {
            let item1;
            if (overSpecs != null) {
              item1 = overSpecs.item;
            }
            tmp50 = item1 === item2;
          }
          if (tmp50) {
            let state1;
            if (overSpecs != null) {
              state1 = overSpecs.state;
            }
            tmp50 = state1 === str3;
          }
          tmp48 = tmp50;
        }
        if (!tmp48) {
          overSpecs = { node: node2, item: item2, state: str3, percentage: overPercentage2 };
          const obj4 = { node: node2, item: item2, state: str3, percentage: overPercentage2 };
        }
      } else {
        let percentage;
        if (overSpecs != null) {
          percentage = overSpecs.percentage;
        }
      }
      const sum = listInsets.get().start + c12;
      const diff = windowSize - listInsets.get().end - c12;
      if (arg0 < sum) {
        const _Math4 = Math;
        const _Math5 = Math;
        const _Math6 = Math;
        num14 = -1 * Math.max(Math.min(Math.min(value.initialY, sum) - arg0, tmp53) / tmp53, 0);
      } else {
        num14 = 0;
        if (arg0 > diff) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          num14 = Math.max(Math.min(arg0 - Math.max(value.initialY, diff), tmp53) / tmp53, 0);
        }
      }
      const result4 = sharedValue.set(num14);
      let isActive = 0 === num14;
      if (isActive) {
        const obj8 = frameCallback;
        if (frameCallback.isActive) {
          const result5 = sharedValue1.set(0);
          obj8.setActive(false);
        }
        const tmp66Result2 = react_native2;
        tmp66Result2.batchUpdates(() => {
          if (null != obj2) {
            if (obj2.node.type === constants.FOLDER) {
              if (obj2.node.expanded) {
                obj = closure_2_1(token[21]);
                const result = obj.toggleGuildFolderExpand(obj2.node.id);
                guildsTree = guildsTree.getGuildsTree();
                const node = guildsTree.getNode(obj2.node.id);
                let tmp9 = node !== obj2.node;
                if (tmp9) {
                  let type;
                  if (node != null) {
                    type = node.type;
                  }
                  tmp9 = type === tmp16.FOLDER;
                }
                if (tmp9) {
                  obj2 = { node };
                  const merged = Object.assign(obj2);
                }
              }
            }
          }
          const obj3 = { overSpecs, dragSpecs: obj2, windowSize };
          closure_1_3(obj3);
        });
      }
      if (!isActive) {
        isActive = frameCallback.isActive;
      }
      if (!isActive) {
        frameCallback.setActive(true);
      }
    }
  }, items4);
  let items5 = [callback4];
  const tmpResult = tmp(tmp2[30]);
  const onFastListScrollWorklet = tmpResult.useExternalScrollEventHandler({ id: "guilds" });
  let items6 = [dragDropInProgress, dragRegion, gestureState, callback3, callback, callback4, callback2, callback1, listInsets, scrollPosition, scrollerRef, windowSize, gesture];
  const onFastListScroll = obj4.useCallback(() => {
    gestureState = GuildsBarDnDStore.getState().gestureState;
    const value = gestureState.get();
    if ("drag" === value.mode) {
      callback4(value.absoluteY);
    }
  }, items5);
  const gesture1 = obj4.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp25;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp33;
    let tmp34;
    let tmp35;
    let tmp36;
    let tmp37;
    let tmp38;
    let tmp39;
    let tmp41;
    let tmp42;
    let tmp43;
    let tmp44;
    let tmp45;
    let tmp46;
    let tmp47;
    let tmp48;
    let tmp5;
    let tmp50;
    let tmp51;
    let tmp52;
    let tmp53;
    let tmp55;
    let tmp56;
    let tmp57;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp = require;
    const Gesture = LegacyBaseButton.Gesture;
    const Simultaneous = Gesture.Simultaneous;
    const Gesture2 = LegacyBaseButton.Gesture;
    const items = [closure_24, scrollPosition, , , , ];
    items[2] = gestureState;
    items[3] = dragRegion;
    const onTouchesDown = Gesture2.LongPress().onTouchesDown;
    Gesture2.LongPress();
    items[4] = _mod1705.scheduleOnRN;
    items[5] = callback1;
    [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
    function useGuildsBarGestureTsx2(changedTouches, fail) {
      const first = changedTouches.changedTouches[0];
      let num;
      if (first != null) {
        num = first.absoluteY;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + _undefined.get();
      if (null != first) {
        if ("cancel" !== _undefined2.get().mode) {
          obj = _undefined3;
          if (sum >= _undefined3.get().min) {
            if (sum <= obj.get().max) {
              if (1 === changedTouches.changedTouches.length) {
                _undefined4(c4, first.absoluteX, first.absoluteY);
              }
            }
          }
        }
      }
      fail.fail();
    }
    const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
    useGuildsBarGestureTsx2.__closure = items1;
    useGuildsBarGestureTsx2.__workletHash = 16716177180999;
    useGuildsBarGestureTsx2.__initData = tmp5;
    const items2 = [closure_25, tmp4];
    [tmp11, tmp12] = items2;
    function useGuildsBarGestureTsx3(arg0, fail) {
      if ("cancel" === _undefined.get().mode) {
        fail.fail();
      }
    }
    const items3 = [tmp12];
    useGuildsBarGestureTsx3.__closure = items3;
    useGuildsBarGestureTsx3.__workletHash = 1106386279759;
    useGuildsBarGestureTsx3.__initData = tmp11;
    const onTouchesDownResult = onTouchesDown(useGuildsBarGestureTsx2);
    const items4 = [closure_26, tmp4, , ];
    const onStart = onTouchesDownResult.onTouchesMove(useGuildsBarGestureTsx3).onStart;
    onTouchesDownResult.onTouchesMove(useGuildsBarGestureTsx3);
    items4[2] = _mod1705.scheduleOnRN;
    items4[3] = callback2;
    [tmp14, tmp15, tmp16, tmp17] = items4;
    function useGuildsBarGestureTsx4(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      if ("cancel" !== _undefined.get().mode) {
        _undefined2(c2, absoluteX, absoluteY);
      }
    }
    const items5 = [tmp15, tmp16, tmp17];
    useGuildsBarGestureTsx4.__closure = items5;
    useGuildsBarGestureTsx4.__workletHash = 406167137139;
    useGuildsBarGestureTsx4.__initData = tmp14;
    const items6 = [closure_27, tmp4, , ];
    const onEnd = onStart(useGuildsBarGestureTsx4).onEnd;
    onStart(useGuildsBarGestureTsx4);
    items6[2] = _mod1705.scheduleOnRN;
    items6[3] = callback;
    [tmp20, tmp21, tmp22, tmp23] = items6;
    function useGuildsBarGestureTsx5() {
      if ("cancel" === _undefined.get().mode) {
        _undefined2(c2, "cancel");
      }
    }
    const items7 = [tmp21, tmp22, tmp23];
    useGuildsBarGestureTsx5.__closure = items7;
    useGuildsBarGestureTsx5.__workletHash = 2590862377263;
    useGuildsBarGestureTsx5.__initData = tmp20;
    const items8 = [closure_28, tmp4, , ];
    const onTouchesCancelled = onEnd(useGuildsBarGestureTsx5).onTouchesCancelled;
    onEnd(useGuildsBarGestureTsx5);
    items8[2] = _mod1705.scheduleOnRN;
    items8[3] = callback;
    [tmp25, tmp26, tmp27, tmp28] = items8;
    function useGuildsBarGestureTsx6() {
      let tmp = null != _undefined.get().mode;
      obj = _undefined;
      if (tmp) {
        tmp = "cancel" !== obj.get().mode;
      }
      if (!tmp) {
        _undefined2(c2, "cancel");
      }
    }
    const items9 = [tmp26, tmp27, tmp28];
    useGuildsBarGestureTsx6.__closure = items9;
    useGuildsBarGestureTsx6.__workletHash = 14544908011091;
    useGuildsBarGestureTsx6.__initData = tmp25;
    const onTouchesCancelledResult = onTouchesCancelled(useGuildsBarGestureTsx6);
    const Gesture3 = LegacyBaseButton.Gesture;
    const PanResult = Gesture3.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    let result = manualActivationResult.simultaneousWithExternalGesture(scrollerRef, gesture);
    let result1 = result.shouldCancelWhenOutside(false);
    const items10 = [closure_29, tmp4, dragDropInProgress, 10, , , ];
    const onTouchesMove = result1.onTouchesMove;
    items10[4] = _mod1705.scheduleOnRN;
    items10[5] = callback3;
    items10[6] = callback4;
    [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items10;
    function useGuildsBarGestureTsx7(arg0, activate) {
      const first = arg0.changedTouches[0];
      if ("pressed" === _undefined.get().mode) {
        if (null != first) {
          const diff = first.absoluteX - obj.get().initialX;
          const _Math = Math;
          const absolute = Math.abs(first.absoluteY - obj.get().absoluteY);
          const tmp11 = c2;
          if (diff > c2) {
            if (diff > absolute) {
              const obj5 = { mode: "contextmenu" };
              set = _undefined.set;
              const merged = Object.assign(obj.get());
              ({ absoluteX: obj2.absoluteX, absoluteY: obj2.absoluteY } = first);
              const result = set(obj5);
              const result1 = _undefined2.set(false);
              activate.activate();
              _undefined3(c4, first.absoluteX, first.absoluteY);
            }
          }
          if (absolute > tmp11) {
            const obj6 = { mode: "drag" };
            set2 = _undefined.set;
            const merged1 = Object.assign(obj.get());
            ({ absoluteX: obj3.initialX, absoluteY: obj3.initialY, absoluteX: obj3.absoluteX, absoluteY: obj3.absoluteY } = first);
            set2(obj6);
            activate.activate();
            const result2 = _undefined2.set(true);
            _undefined3(c5, first.absoluteY);
          }
        }
      }
      const tmp3 = "cancel" !== obj.get().mode && null != first;
      if (!tmp3) {
        activate.fail();
        const result3 = _undefined2.set(false);
      }
    }
    const items11 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39];
    useGuildsBarGestureTsx7.__closure = items11;
    useGuildsBarGestureTsx7.__workletHash = 11364152475385;
    useGuildsBarGestureTsx7.__initData = tmp33;
    const items12 = [closure_30, tmp4, listInsets, c12, windowSize, , , ];
    const onUpdate = onTouchesMove(useGuildsBarGestureTsx7).onUpdate;
    onTouchesMove(useGuildsBarGestureTsx7);
    items12[5] = _mod1705.scheduleOnRN;
    items12[6] = callback4;
    items12[7] = callback3;
    let c3;
    let c4;
    let c5;
    let c6;
    [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48] = items12;
    function useGuildsBarGestureTsx8(arg0) {
      let absoluteX;
      let absoluteY;
      ({ absoluteX, absoluteY } = arg0);
      if ("drag" === _undefined.get().mode) {
        if (absoluteX !== _undefined.get().absoluteX) {
          let initialY = obj.get().initialY;
          const sum = _undefined2.get().start + c2;
          let tmp6 = initialY < sum;
          const diff = c3 - _undefined2.get().end - c2;
          if (tmp6) {
            tmp6 = absoluteY > initialY;
          }
          if (!tmp6) {
            tmp6 = initialY > diff && absoluteY < initialY;
          }
          if (tmp6) {
            initialY = absoluteY;
          }
          const obj2 = { absoluteX, absoluteY, initialY };
          set = _undefined.set;
          const merged = Object.assign(obj.get());
          const result = set(obj2);
          _undefined3(c5, absoluteY);
        }
      } else if ("contextmenu" === _undefined.get().mode) {
        _undefined3(c6, absoluteX, absoluteY);
      }
    }
    const items13 = [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48];
    useGuildsBarGestureTsx8.__closure = items13;
    useGuildsBarGestureTsx8.__workletHash = 17309616979285;
    useGuildsBarGestureTsx8.__initData = tmp41;
    const items14 = [closure_31, tmp4, , ];
    const onEnd2 = onUpdate(useGuildsBarGestureTsx8).onEnd;
    onUpdate(useGuildsBarGestureTsx8);
    items14[2] = _mod1705.scheduleOnRN;
    items14[3] = callback;
    let c2;
    [tmp50, tmp51, tmp52, tmp53] = items14;
    function useGuildsBarGestureTsx9() {
      obj = _undefined;
      if ("drag" === _undefined.get().mode) {
        _undefined2(c2, "drop");
      } else if ("contextmenu" === obj.get().mode) {
        _undefined2(c2, "contextmenu-open");
      } else {
        _undefined2(c2, "cancel");
      }
    }
    const items15 = [tmp51, tmp52, tmp53];
    useGuildsBarGestureTsx9.__closure = items15;
    useGuildsBarGestureTsx9.__workletHash = 16673204581970;
    useGuildsBarGestureTsx9.__initData = tmp50;
    const items16 = [closure_32, , ];
    const onTouchesCancelled2 = onEnd2(useGuildsBarGestureTsx9).onTouchesCancelled;
    onEnd2(useGuildsBarGestureTsx9);
    items16[1] = _mod1705.scheduleOnRN;
    items16[2] = callback;
    let c0;
    let c1;
    [tmp55, tmp56, tmp57] = items16;
    function useGuildsBarGestureTsx10() {
      _undefined(c1, "cancel");
    }
    const items17 = [tmp56, tmp57];
    useGuildsBarGestureTsx10.__closure = items17;
    useGuildsBarGestureTsx10.__workletHash = 6608047538864;
    useGuildsBarGestureTsx10.__initData = tmp55;
    return Simultaneous(onTouchesCancelledResult, onTouchesCancelled2(useGuildsBarGestureTsx10));
  }, items6);
  const effect1 = obj4.useEffect(() => {
    let ref;
    return GuildsBarDnDStore.subscribe((dragSpecs) => {
      if (null == dragSpecs.dragSpecs) {
        if (null == dragSpecs.dropSpecs) {
          const current = ref.current;
          if (current != null) {
            current.setDisableRecycling(false);
          }
        }
      }
      const current2 = ref.current;
      if (current2 != null) {
        current2.setDisableRecycling(true);
      }
    });
  }, []);
  return { scrollPosition, gesture: gesture1, scrollerRef, fastListRef, persistantKeys, onFastListScroll, onFastListScrollWorklet };
};
