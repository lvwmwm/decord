// Module ID: 14891
// Function ID: 113532
// Name: PreviewItem
// Dependencies: [31, 4970, 14812, 33, 4130, 3987, 3991, 4542, 7589, 4476, 14822, 14843, 3743, 2]

// Module 14891 (PreviewItem)
import importAllResult from "result";
import { GuildsNodeType } from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function PreviewItem(dragRegion) {
  let draggedNode;
  let dropComplete;
  dragRegion = dragRegion.dragRegion;
  const draggedHeight = dragRegion.draggedHeight;
  ({ draggedNode, dropComplete } = dragRegion);
  const gestureState = dragRegion.gestureState;
  const listInsets = dragRegion.listInsets;
  const overNode = dragRegion.overNode;
  const overState = dragRegion.overState;
  const scrollPosition = dragRegion.scrollPosition;
  const windowSize = dragRegion.windowSize;
  const dropPosition = dragRegion.dropPosition;
  let tmp = scrollPosition();
  const MobileHomeDrawerExperiment = dragRegion(dropComplete[5]).MobileHomeDrawerExperiment;
  let obj = dragRegion(dropComplete[6]);
  let fn = function x() {
    const value = scrollPosition.get();
    let num = 0;
    if (value < dragRegion.get().min) {
      num = dragRegion.get().min - scrollPosition.get();
    }
    return Math.max(num, listInsets.get().start);
  };
  fn.__closure = { scrollPosition, dragRegion, listInsets };
  fn.__workletHash = 17436881889698;
  fn.__initData = dropPosition;
  const derivedValue = obj.useDerivedValue(fn);
  let obj1 = dragRegion(dropComplete[6]);
  const fn2 = function y() {
    const value = scrollPosition.get();
    const sum = value + (windowSize - listInsets.get().end);
    if (sum > dragRegion.get().max) {
      const diff = dragRegion.get().max - draggedHeight;
      let diff1 = diff - scrollPosition.get();
    } else {
      diff1 = windowSize - listInsets.get().end - draggedHeight;
    }
    return Math.min(diff1, windowSize - listInsets.get().end - draggedHeight);
  };
  fn2.__closure = { scrollPosition, windowSize, listInsets, dragRegion, draggedHeight };
  fn2.__workletHash = 4371355784;
  fn2.__initData = derivedValue;
  const derivedValue1 = obj1.useDerivedValue(fn2);
  class G {
    constructor() {
      if (null != dropPosition) {
        tmp4 = dropPosition;
        tmp5 = scrollPosition;
        diff = dropPosition - scrollPosition.get();
      } else {
        tmp = gestureState;
        tmp2 = draggedHeight;
        num = 2;
        diff = gestureState.get().absoluteY - draggedHeight / 2;
      }
      if (null != gestureState.get().mode) {
        tmp6 = dropPosition;
        if (null == dropPosition) {
          tmp9 = globalThis;
          _Math = Math;
          _Math2 = Math;
          tmp10 = closure_10;
          tmp12 = dragRegion;
          bound = Math.max(diff, closure_10.get());
          bound1 = Math.min(bound, dragRegion.get());
        }
        obj = {};
        tmp13 = dragRegion;
        tmp14 = dropComplete;
        num2 = 7;
        obj2 = dragRegion(dropComplete[7]);
        tmp15 = windowSize;
        fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = null != outer1_9;
          }
          if (tmp) {
            dragRegion(dropComplete[6]).runOnJS(outer1_2)();
            const obj = dragRegion(dropComplete[6]);
          }
        };
        obj = {};
        tmp16 = dropPosition;
        obj.dropPosition = dropPosition;
        num3 = 6;
        obj.runOnJS = dragRegion(dropComplete[6]).runOnJS;
        tmp17 = dropComplete;
        obj.dropComplete = dropComplete;
        fn.__closure = obj;
        num4 = 12640145939434;
        fn.__workletHash = 12640145939434;
        tmp18 = outer1_12;
        fn.__initData = outer1_12;
        str = "animate-always";
        tmp19 = obj2;
        tmp20 = bound1;
        tmp21 = fn;
        obj.top = obj2.withSpring(bound1, windowSize, "animate-always", fn);
        return obj;
      }
      tmp7 = -draggedHeight;
      bound1 = Math.max(tmp7, Math.min(diff, windowSize));
      return;
    }
  }
  obj = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: dragRegion(dropComplete[7]).withSpring, DRAG_SPRING_PHYSICS: windowSize, runOnJS: dragRegion(dropComplete[6]).runOnJS, dropComplete };
  G.__closure = obj;
  G.__workletHash = 5676492640532;
  G.__initData = derivedValue1;
  let items = [overState, overNode];
  const animatedStyle = dragRegion(dropComplete[6]).useAnimatedStyle(G);
  const memo = gestureState.useMemo(() => {
    if ("convert-after" === overState) {
      if (null != overNode) {
        const obj = { type: listInsets.FOLDER, id: -1, parentId: undefined, name: undefined, color: undefined, expanded: false };
        const items = [overNode];
        obj.children = items;
        return obj;
      }
    }
  }, items);
  obj = {};
  const items1 = [tmp.dragPreview, , ];
  let dragPreviewHome = null;
  const obj3 = dragRegion(dropComplete[6]);
  const tmp6 = overState;
  if (MobileHomeDrawerExperiment.useConfig({ location: "drag-preview" }).enableHome) {
    dragPreviewHome = tmp.dragPreviewHome;
  }
  items1[1] = dragPreviewHome;
  items1[2] = animatedStyle;
  obj.style = items1;
  obj.nativeID = "guilds-bar-drag-preview";
  obj1 = { renderItem: renderAnimatedItemPreview };
  if (null != memo) {
    draggedNode = memo;
  }
  const items2 = [draggedNode];
  obj1.items = items2;
  obj1.getItemKey = getItemPreviewKey;
  obj.children = overState(dragRegion(dropComplete[9]).TransitionGroup, obj1);
  return tmp6(draggedHeight(dropComplete[8]), obj);
}
function getItemPreviewKey(id) {
  return "" + id.id;
}
function renderAnimatedItemPreview(arg0, node, transitionState, cleanUp) {
  return <AnimatedItemPreview key={arg0} node={arg1} transitionState={arg2} cleanUp={arg3} />;
}
function AnimatedItemPreview(cleanUp) {
  let node;
  let transitionState;
  ({ node, transitionState } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let sharedValue;
  let importAllResult;
  let tmp = callback2();
  const MobileHomeDrawerExperiment = transitionState(sharedValue[5]).MobileHomeDrawerExperiment;
  let enableHome = MobileHomeDrawerExperiment.useConfig({ location: "drag-preview" }).enableHome;
  let obj = transitionState(sharedValue[6]);
  let num = 1;
  if (transitionState === transitionState(sharedValue[9]).TransitionStates.ENTERED) {
    num = 0;
  }
  sharedValue = obj.useSharedValue(num);
  importAllResult = tmp3;
  if (enableHome) {
    enableHome = !tmp3;
  }
  if (enableHome) {
    enableHome = transitionState !== transitionState(sharedValue[9]).TransitionStates.YEETED;
  }
  let obj1 = transitionState(sharedValue[6]);
  let fn = function w() {
    let translateX;
    let translateY;
    const value = sharedValue.get();
    let num = 1;
    if (c3) {
      let num3 = 0.3;
      if (num === value) {
        num3 = num;
      }
      let num2 = num3;
    } else {
      num2 = 0.33;
      if (num === value) {
        num2 = num;
      }
    }
    if (!c3) {
      if (num !== sharedValue.get()) {
        let obj = { translateX: 10, translateY: -10 };
      }
      obj = {};
      let num4 = num;
      ({ translateX, translateY } = obj);
      if (c3) {
        num4 = 0;
      }
      obj.zIndex = num4;
      obj = {};
      let obj3 = transitionState(sharedValue[7]);
      obj.translateY = obj3.withSpring(translateY, outer1_8, "animate-always");
      const items = [obj, , ];
      const obj1 = { translateX: transitionState(sharedValue[7]).withSpring(translateX, outer1_8, "animate-always") };
      items[1] = obj1;
      const obj2 = {};
      const obj8 = transitionState(sharedValue[7]);
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = outer1_0 === transitionState(sharedValue[9]).TransitionStates.YEETED;
        }
        if (tmp) {
          tmp = outer1_3;
        }
        if (tmp) {
          transitionState(sharedValue[6]).runOnJS(outer1_1)();
          const obj = transitionState(sharedValue[6]);
        }
      };
      obj3 = { transitionState, TransitionStates: transitionState(sharedValue[9]).TransitionStates, isFolder: c3, runOnJS: transitionState(sharedValue[6]).runOnJS, cleanUp };
      fn.__closure = obj3;
      fn.__workletHash = 9409925192880;
      fn.__initData = outer1_14;
      obj2.scale = obj8.withSpring(num2, outer1_8, "animate-always", fn);
      items[2] = obj2;
      obj.transform = items;
      const obj6 = transitionState(sharedValue[7]);
      if (c3) {
        num = sharedValue.get();
      }
      obj.opacity = transitionState(sharedValue[7]).withSpring(num, outer1_8, "animate-always");
      return obj;
    }
    obj = { translateX: 0, translateY: 0 };
  };
  obj = { isFolder: tmp3, visible: sharedValue, withSpring: transitionState(sharedValue[7]).withSpring, DRAG_SPRING_PHYSICS: closure_8, transitionState, TransitionStates: transitionState(sharedValue[9]).TransitionStates, runOnJS: transitionState(sharedValue[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 13465198693221;
  fn.__initData = closure_13;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (transitionState === transitionState(sharedValue[9]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  });
  obj = {};
  let items = [tmp.animatedPreviewStyle, , ];
  let prop = null;
  if (enableHome) {
    prop = tmp.animatedPreviewStyleHome;
  }
  items[1] = prop;
  items[2] = animatedStyle;
  obj.style = items;
  if (node.type === GuildsNodeType.FOLDER) {
    obj1 = {};
    ({ id: obj6.id, expanded: obj6.expanded, color: obj6.color, name: obj6.name, children: obj6.childNodes } = node);
    obj1.isDragPreview = true;
    obj1.hideExpandedChildren = !enableHome;
    let tmp14 = jsx(cleanUp(sharedValue[10]), {});
  } else {
    let obj2 = { guildId: node.id, isDragPreview: true, hideExpandedChildren: !enableHome };
    tmp14 = jsx(cleanUp(sharedValue[11]), { guildId: node.id, isDragPreview: true, hideExpandedChildren: !enableHome });
  }
  obj.children = tmp14;
  return jsx(cleanUp(sharedValue[8]), {});
}
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ dragPreview: { position: "absolute", left: 0 }, animatedPreviewStyle: { position: "absolute" }, dragPreviewHome: { right: 0 }, animatedPreviewStyleHome: { left: 0, right: 0 } });
let closure_8 = { mass: 0.5, damping: 80, stiffness: 320 };
let closure_9 = { code: "function GuildsBarDragPreviewTsx1(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}" };
let closure_10 = { code: "function GuildsBarDragPreviewTsx2(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}" };
let closure_11 = { code: "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})};}" };
let closure_12 = { code: "function GuildsBarDragPreviewTsx4(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}" };
let closure_13 = { code: "function GuildsBarDragPreviewTsx5(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}" };
let closure_14 = { code: "function GuildsBarDragPreviewTsx6(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}" };
const memoResult = importAllResult.memo(function GuildsBarDragPreview() {
  const tmp = callback((arg0) => {
    let dragRegion;
    let dragSpecs;
    let dropComplete;
    let dropSpecs;
    let gestureState;
    let listInsets;
    let overSpecs;
    let scrollPosition;
    let windowSize;
    ({ dragSpecs, overSpecs, gestureState, scrollPosition, dragRegion, windowSize, dropComplete, listInsets, dropSpecs } = arg0);
    if (null != dropSpecs) {
      const overState = dropSpecs.overState;
      let obj = {};
      ({ dragNode: obj2.draggedNode, itemSize: obj2.draggedHeight } = dropSpecs);
      obj.overState = overState;
      let overNode;
      if (overState.startsWith("convert")) {
        overNode = dropSpecs.overNode;
      }
      obj.overNode = overNode;
      obj.dropPosition = dropSpecs.dropPosition;
      obj.gestureState = gestureState;
      obj.scrollPosition = scrollPosition;
      obj.dragRegion = dragRegion;
      obj.windowSize = windowSize;
      obj.dropComplete = dropComplete;
      obj.listInsets = listInsets;
      return obj;
    } else {
      if (null != dragSpecs) {
        if (null != overSpecs) {
          const state = overSpecs.state;
          obj = {};
          ({ node: obj.draggedNode, itemSize: obj.draggedHeight } = dragSpecs);
          obj.overState = state;
          let node;
          if (state.startsWith("convert")) {
            node = overSpecs.node;
          }
          obj.overNode = node;
          obj.dropPosition = undefined;
          obj.gestureState = gestureState;
          obj.scrollPosition = scrollPosition;
          obj.dragRegion = dragRegion;
          obj.windowSize = windowSize;
          obj.dropComplete = dropComplete;
          obj.listInsets = listInsets;
          return obj;
        }
      }
      return null;
    }
  }, require(3743) /* isIterable */.shallow);
  let tmp2 = null;
  if (null != tmp) {
    let obj = {};
    const merged = Object.assign(tmp);
    tmp2 = <PreviewItem />;
  }
  return tmp2;
});
let result = require("withEqualityFn").fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default memoResult;
