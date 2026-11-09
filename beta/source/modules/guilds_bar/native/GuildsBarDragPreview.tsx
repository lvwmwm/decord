// Module ID: 18784
// Function ID: 18785
// Name: GuildsBarDragPreview
// Dependencies: [19, 6827, 18695, 18692, 21, 5140, 18417, 1652, 5761, 1705, 5199, 5724, 575, 18703, 18724, 5055, 2]

// Module 18784 (GuildsBarDragPreview)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 5055 */;
import native from "native" /* 5199 */;
import SortedGuildStore from "SortedGuildStore" /* 6827 */;
import GuildsBarConstants from "GuildsBarConstants" /* 18692 */;
import react from "react" /* 19 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 18695 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let _undefined2, set, tmp3;

function PreviewItem(overState) {
  let dragRegion;
  let draggedHeight;
  let draggedNode;
  let dropComplete;
  let dropPosition;
  let gestureState;
  let listInsets;
  let overNode;
  let scrollPosition;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
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
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let windowSize;
  ({ dragRegion, draggedHeight, draggedNode, listInsets, overNode } = overState);
  overState = overState.overState;
  ({ scrollPosition, windowSize } = overState);
  ({ dropComplete, gestureState, dropPosition } = overState);
  let tmp = closure_8();
  const tmp2 = overNode;
  let obj = overNode(18417);
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  let obj2 = overNode(1652);
  let items = [closure_11, scrollPosition, dragRegion, listInsets];
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class GuildsBarDragPreviewTsx1 {
    constructor() {
      const _Math = Math;
      const value = _undefined.get();
      let num = 0;
      const obj = _undefined;
      const obj2 = _undefined2;
      if (value < _undefined2.get().min) {
        num = obj2.get().min - obj.get();
      }
      return max(num, _undefined3.get().start);
    }
  }
  let items1 = [tmp6, tmp7, tmp8];
  GuildsBarDragPreviewTsx1.__closure = items1;
  GuildsBarDragPreviewTsx1.__workletHash = 1882650321947;
  GuildsBarDragPreviewTsx1.__initData = tmp5;
  const derivedValue = obj2.useDerivedValue(GuildsBarDragPreviewTsx1);
  const items2 = [closure_12, scrollPosition, windowSize, listInsets, dragRegion, draggedHeight];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  const tmp2Result = tmp2(1652);
  class GuildsBarDragPreviewTsx2 {
    constructor() {
      let diff1;
      let tmp4;
      const _Math = Math;
      const value = _undefined.get();
      const sum = value + (c1 - _undefined2.get().end);
      const obj = _undefined;
      const obj3 = _undefined3;
      if (sum > _undefined3.get().max) {
        const diff = obj3.get().max - c4;
        diff1 = diff - obj.get();
        tmp4 = c4;
      } else {
        tmp4 = c4;
        diff1 = tmp2 - obj2.get().end - c4;
      }
      return min(diff1, c1 - _undefined2.get().end - tmp4);
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  GuildsBarDragPreviewTsx2.__closure = items3;
  GuildsBarDragPreviewTsx2.__workletHash = 14975465511473;
  GuildsBarDragPreviewTsx2.__initData = tmp10;
  const derivedValue1 = tmp2Result.useDerivedValue(GuildsBarDragPreviewTsx2);
  const items4 = [closure_14, dropPosition, scrollPosition, gestureState, draggedHeight, derivedValue, derivedValue1, windowSize, , , , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  tmp2(1652);
  items4[8] = tmp2(5761).withSpring;
  items4[9] = closure_10;
  items4[10] = closure_13;
  items4[11] = tmp2(1705).scheduleOnRN;
  items4[12] = dropComplete;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items4;
  class GuildsBarDragPreviewTsx4 {
    constructor() {
      let diff;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp = c0;
      if (null != c0) {
        diff = tmp - _undefined.get();
      } else {
        diff = _undefined2.get().absoluteY - c3 / 2;
      }
      if (null != _undefined2.get().mode) {
        let minResult;
        if (null == tmp) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(diff, _undefined3.get());
          minResult = min(bound, _undefined4.get());
        }
        const items = [c9, tmp, c10, c11];
        [tmp17, tmp18, tmp19, tmp20] = items;
        const obj = { top: _undefined5(minResult, c8, "animate-always", GuildsBarDragPreviewTsx3) };
        class GuildsBarDragPreviewTsx3 {
          constructor(arg0) {
            tmp = arg0;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = null;
              tmp = null != closure_0;
            }
            if (tmp) {
              tmp4 = closure_1;
              tmp5 = closure_2;
              tmp6 = closure_1(closure_2);
            }
            return;
          }
        }
        const items1 = [tmp18, tmp19, tmp20];
        GuildsBarDragPreviewTsx3.__closure = items1;
        GuildsBarDragPreviewTsx3.__workletHash = 1491691266645;
        GuildsBarDragPreviewTsx3.__initData = tmp17;
        return obj;
      }
      const tmp6 = -c3;
      minResult = Math.max(tmp6, Math.min(diff, c6));
    }
  }
  const items5 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
  GuildsBarDragPreviewTsx4.__closure = items5;
  GuildsBarDragPreviewTsx4.__workletHash = 1941615705344;
  GuildsBarDragPreviewTsx4.__initData = tmp18;
  const items6 = [overState, overNode];
  const animatedStyle = useAnimatedStyle(GuildsBarDragPreviewTsx4);
  const memo = react.useMemo(() => {
    let items;
    if ("convert-after" === overState) {
      if (null != overNode) {
        const element = { type: GuildsNodeType.FOLDER, id: -1, parentId: "flexDirection", name: "Array", color: "add", expanded: "<string:1090584580>", children: items };
        items = [tmp2];
        return element;
      }
    }
  }, items6);
  const items7 = [tmp.dragPreview, , ];
  let dragPreviewHome = null;
  const View = overState(1652).View;
  if (isHomeDrawerEnabled) {
    dragPreviewHome = tmp.dragPreviewHome;
  }
  items7[1] = dragPreviewHome;
  items7[2] = animatedStyle;
  const TransitionGroup = tmp2(5199).TransitionGroup;
  if (null != memo) {
    draggedNode = memo;
  }
  const items8 = [draggedNode];
  return <View style={items7} nativeID="guilds-bar-drag-preview">{null}</View>;
}
function getItemPreviewKey(id) {
  return "" + id.id;
}
function renderAnimatedItemPreview(arg0, node, transitionState, cleanUp) {
  return <AnimatedItemPreview key={arg0} node={arg1} transitionState={arg2} cleanUp={arg3} />;
}
function AnimatedItemPreview(cleanUp) {
  let node;
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
  let tmp24Result;
  let tmp27;
  let transitionState;
  ({ node, transitionState } = cleanUp);
  let sharedValue;
  cleanUp = cleanUp.cleanUp;
  const tmp2 = transitionState;
  let tmp = closure_8();
  let obj = transitionState(5724);
  const tmp4 = sharedValue;
  const tmp5 = closure_9(GUILD_ITEM_INSET_LEFT + obj.useToken(sharedValue(575).modules.mobile.GUILD_BAR_ITEM_SIZE) / 2);
  let obj2 = transitionState(18417);
  let isHomeDrawerEnabled = obj2.useIsHomeDrawerEnabled();
  const useSharedValue = transitionState(1652).useSharedValue;
  let num = 1;
  const tmp7 = transitionState(1652);
  if (transitionState === transitionState(5199).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const YEETED = tmp2(5199).TransitionStates.YEETED;
  const tmp9 = GuildsNodeType;
  if (isHomeDrawerEnabled) {
    isHomeDrawerEnabled = !tmp10;
  }
  let items = [closure_19, tmp10, sharedValue, , , , , , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  tmp2(1652);
  items[3] = tmp2(5761).withSpring;
  items[4] = closure_10;
  items[5] = closure_18;
  items[6] = transitionState;
  items[7] = tmp2(5199).TransitionStates;
  items[8] = tmp2(1705).scheduleOnRN;
  items[9] = cleanUp;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
  class GuildsBarDragPreviewTsx6 {
    constructor() {
      let _undefined;
      let items;
      let num2;
      let obj;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp = c0;
      const value = _undefined.get();
      let num = 1;
      if (c0) {
        let num3 = 0.3;
        if (num === value) {
          num3 = num;
        }
        num2 = num3;
        obj = tmp2;
      } else {
        num2 = 0.33;
        if (num === value) {
          num2 = num;
        }
        obj = tmp2;
      }
      if (!tmp) {
        let obj2;
        if (num !== obj.get()) {
          obj2 = { translateX: 10, translateY: -10 };
        }
        let num4 = num;
        const translateX = obj2.translateX;
        if (tmp) {
          num4 = 0;
        }
        const obj3 = { zIndex: num4, transform: items, opacity: tmp4(num, tmp5, "animate-always") };
        items = [{ translateY: _undefined2(obj2.translateY, c3, "animate-always") }, , ];
        const obj4 = { translateY: _undefined2(obj2.translateY, c3, "animate-always") };
        items[1] = { translateX: _undefined2(translateX, c3, "animate-always") };
        const items1 = [c4, c5, c6, tmp, c7, c8];
        c0 = undefined;
        _undefined = undefined;
        const obj5 = { translateX: _undefined2(translateX, c3, "animate-always") };
        _undefined2 = undefined;
        c3 = undefined;
        c4 = undefined;
        [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items1;
        const obj6 = { scale: _undefined2(num2, c3, "animate-always", GuildsBarDragPreviewTsx5) };
        class GuildsBarDragPreviewTsx5 {
          constructor(arg0) {
            tmp = arg0;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              tmp = closure_0 === closure_1.YEETED;
            }
            if (tmp) {
              tmp = closure_2;
            }
            if (tmp) {
              tmp4 = closure_3;
              tmp5 = closure_4;
              tmp6 = closure_3(closure_4);
            }
            return;
          }
        }
        const items2 = [tmp13, tmp14, tmp15, tmp16, tmp17];
        GuildsBarDragPreviewTsx5.__closure = items2;
        GuildsBarDragPreviewTsx5.__workletHash = 9896827730539;
        GuildsBarDragPreviewTsx5.__initData = tmp12;
        items[2] = obj6;
        if (tmp) {
          num = obj.get();
        }
        return obj3;
      }
      obj2 = { translateX: 0, translateY: 0 };
    }
  }
  let items1 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  GuildsBarDragPreviewTsx6.__closure = items1;
  GuildsBarDragPreviewTsx6.__workletHash = 9452285169812;
  GuildsBarDragPreviewTsx6.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(GuildsBarDragPreviewTsx6);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  });
  let items2 = [tmp.animatedPreviewStyle, , ];
  let prop = null;
  const View = tmp4(1652).View;
  if (isHomeDrawerEnabled) {
    prop = tmp5.animatedPreviewStyleHome;
  }
  items2[1] = prop;
  items2[2] = animatedStyle;
  if (node.type === tmp9.FOLDER) {
    let obj4 = { id: null, expanded: null, color: null, name: null, childNodes: null, isDragPreview: true, hideExpandedChildren: !isHomeDrawerEnabled };
    ({ id: obj5.id, expanded: obj5.expanded, color: obj5.color, name: obj5.name, children: obj5.childNodes } = node);
    tmp24Result = tmp24(tmp4(18703), obj4);
  } else {
    const obj8 = { guildId: node.id, isDragPreview: true, hideExpandedChildren: tmp27 };
    tmp27 = !isHomeDrawerEnabled;
    const tmp4Result = tmp4(18724);
    if (isHomeDrawerEnabled) {
      tmp27 = transitionState === YEETED;
    }
    tmp24Result = tmp24(tmp4Result, obj8);
  }
  return <View style={items2}>{tmp24Result}</View>;
}
const GuildsNodeType = SortedGuildStore.GuildsNodeType;
const GUILD_ITEM_INSET_LEFT = GuildsBarConstants.GUILD_ITEM_INSET_LEFT;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({ dragPreview: { position: "absolute", left: 0 }, animatedPreviewStyle: { position: "absolute" }, dragPreviewHome: { right: 0 } });
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
  let items;
  let rect;
  const obj = { animatedPreviewStyleHome: rect };
  rect = { left: 0, right: 0, transformOrigin: items };
  items = [arg0, "50%", 0];
  return obj;
});
let closure_10 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_11 = { code: "(function GuildsBarDragPreviewTsx1(){let[scrollPosition,dragRegion,listInsets]=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);})" };
let closure_12 = { code: "(function GuildsBarDragPreviewTsx2(){let[scrollPosition,windowSize,listInsets,dragRegion,draggedHeight]=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);})" };
let closure_13 = { code: "(function GuildsBarDragPreviewTsx3(finished){let[dropPosition,scheduleOnRN,dropComplete]=this.__closure;if(finished&&dropPosition!=null){scheduleOnRN(dropComplete);}})" };
let closure_14 = { code: "(function GuildsBarDragPreviewTsx4(){let[dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,_worklet_1491691266645_init_data,scheduleOnRN,dropComplete]=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function GuildsBarDragPreviewTsx3Factory([_worklet_1491691266645_init_data,dropPosition,scheduleOnRN,dropComplete]){const GuildsBarDragPreviewTsx3=function(finished){if(finished&&dropPosition!=null){scheduleOnRN(dropComplete);}};GuildsBarDragPreviewTsx3.__closure=[dropPosition,scheduleOnRN,dropComplete];GuildsBarDragPreviewTsx3.__workletHash=1491691266645;GuildsBarDragPreviewTsx3.__initData=_worklet_1491691266645_init_data;return GuildsBarDragPreviewTsx3;}([_worklet_1491691266645_init_data,dropPosition,scheduleOnRN,dropComplete]))};})" };
let closure_18 = { code: "(function GuildsBarDragPreviewTsx5(finished){let[transitionState,TransitionStates,isFolder,scheduleOnRN,cleanUp]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){scheduleOnRN(cleanUp);}})" };
let closure_19 = { code: "(function GuildsBarDragPreviewTsx6(){let[isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,_worklet_9896827730539_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function GuildsBarDragPreviewTsx5Factory([_worklet_9896827730539_init_data,transitionState,TransitionStates,isFolder,scheduleOnRN,cleanUp]){const GuildsBarDragPreviewTsx5=function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){scheduleOnRN(cleanUp);}};GuildsBarDragPreviewTsx5.__closure=[transitionState,TransitionStates,isFolder,scheduleOnRN,cleanUp];GuildsBarDragPreviewTsx5.__workletHash=9896827730539;GuildsBarDragPreviewTsx5.__initData=_worklet_9896827730539_init_data;return GuildsBarDragPreviewTsx5;}([_worklet_9896827730539_init_data,transitionState,TransitionStates,isFolder,scheduleOnRN,cleanUp]))}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};})" };
const memoResult = react.memo(function GuildsBarDragPreview() {
  const tmp = GuildsBarDnDStore((arg0) => {
    let dragRegion;
    let dragSpecs;
    let dropComplete;
    let dropSpecs;
    let gestureState;
    let listInsets;
    let node;
    let overNode;
    let overSpecs;
    let scrollPosition;
    let windowSize;
    ({ dragSpecs, overSpecs, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets, dropSpecs } = arg0);
    if (null != dropSpecs) {
      const overState = dropSpecs.overState;
      const obj3 = { draggedNode: null, draggedHeight: null, overState, overNode, dropPosition: dropSpecs.dropPosition, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets };
      ({ dragNode: obj2.draggedNode, itemSize: obj2.draggedHeight } = dropSpecs);
      overNode = undefined;
      if (overState.startsWith("convert")) {
        overNode = dropSpecs.overNode;
      }
      return obj3;
    } else {
      if (null != dragSpecs) {
        if (null != overSpecs) {
          const state = overSpecs.state;
          const obj = { draggedNode: null, draggedHeight: null, overState: state, overNode: node, dropPosition: "o", gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets };
          ({ node: obj.draggedNode, itemSize: obj.draggedHeight } = dragSpecs);
          node = undefined;
          if (state.startsWith("convert")) {
            node = overSpecs.node;
          }
          return obj;
        }
      }
      return null;
    }
  }, _slicedToArray.shallow);
  let tmp2 = null;
  if (null != tmp) {
    const merged = Object.assign(tmp);
    tmp2 = <PreviewItem />;
  }
  return tmp2;
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default memoResult;
