// Module ID: 14764
// Function ID: 111287
// Name: PreviewItem
// Dependencies: []

// Module 14764 (PreviewItem)
function PreviewItem(dragRegion) {
  let draggedNode;
  let dropComplete;
  dragRegion = dragRegion.dragRegion;
  const arg1 = dragRegion;
  const draggedHeight = dragRegion.draggedHeight;
  const importDefault = draggedHeight;
  ({ draggedNode, dropComplete } = dragRegion);
  const dependencyMap = dropComplete;
  const gestureState = dragRegion.gestureState;
  const listInsets = dragRegion.listInsets;
  const GuildsNodeType = listInsets;
  const overNode = dragRegion.overNode;
  let closure_5 = overNode;
  const overState = dragRegion.overState;
  const jsx = overState;
  const scrollPosition = dragRegion.scrollPosition;
  const callback2 = scrollPosition;
  const windowSize = dragRegion.windowSize;
  let closure_8 = windowSize;
  const dropPosition = dragRegion.dropPosition;
  let closure_9 = dropPosition;
  const tmp = callback2();
  const MobileHomeDrawerExperiment = arg1(dependencyMap[5]).MobileHomeDrawerExperiment;
  let obj = arg1(dependencyMap[6]);
  const fn = function x() {
    const value = scrollPosition.get();
    let num = 0;
    if (value < dragRegion.get().min) {
      num = dragRegion.get().min - scrollPosition.get();
    }
    return Math.max(num, listInsets.get().start);
  };
  fn.__closure = { scrollPosition, dragRegion, listInsets };
  fn.__workletHash = 17436881889698;
  fn.__initData = closure_9;
  const derivedValue = obj.useDerivedValue(fn);
  let closure_10 = derivedValue;
  let obj1 = arg1(dependencyMap[6]);
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
  fn2.__initData = closure_10;
  const derivedValue1 = obj1.useDerivedValue(fn2);
  let closure_11 = derivedValue1;
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
            tmp = null != closure_9;
          }
          if (tmp) {
            callback(closure_2[6]).runOnJS(closure_2)();
            const obj = callback(closure_2[6]);
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
        tmp18 = closure_12;
        fn.__initData = closure_12;
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
  obj = { dropPosition, scrollPosition, gestureState, draggedHeight, minY: derivedValue, maxY: derivedValue1, windowSize, withSpring: arg1(dependencyMap[7]).withSpring, DRAG_SPRING_PHYSICS: closure_8, runOnJS: arg1(dependencyMap[6]).runOnJS, dropComplete };
  G.__closure = obj;
  G.__workletHash = 5676492640532;
  G.__initData = closure_11;
  const items = [overState, overNode];
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(G);
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
  const importAllResult = gestureState;
  const obj3 = arg1(dependencyMap[6]);
  const tmp6 = jsx;
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
  obj.children = jsx(arg1(dependencyMap[9]).TransitionGroup, obj1);
  return tmp6(importDefault(dependencyMap[8]), obj);
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
  const arg1 = transitionState;
  cleanUp = cleanUp.cleanUp;
  const importDefault = cleanUp;
  let dependencyMap;
  let importAllResult;
  const tmp = callback2();
  const MobileHomeDrawerExperiment = arg1(dependencyMap[5]).MobileHomeDrawerExperiment;
  let enableHome = MobileHomeDrawerExperiment.useConfig({ location: "drag-preview" }).enableHome;
  let obj = arg1(dependencyMap[6]);
  let num = 1;
  if (transitionState === arg1(dependencyMap[9]).TransitionStates.ENTERED) {
    num = 0;
  }
  const sharedValue = obj.useSharedValue(num);
  dependencyMap = sharedValue;
  importAllResult = tmp3;
  if (enableHome) {
    enableHome = !tmp3;
  }
  if (enableHome) {
    enableHome = transitionState !== arg1(dependencyMap[9]).TransitionStates.YEETED;
  }
  let obj1 = arg1(dependencyMap[6]);
  const fn = function w() {
    let translateX;
    let translateY;
    const value = sharedValue.get();
    let num = 1;
    if (tmp3) {
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
    if (!tmp3) {
      if (num !== sharedValue.get()) {
        let obj = { "Bool(false)": "<string:27999297>", "Bool(false)": "<string:1166889216>" };
      }
      obj = {};
      let num4 = num;
      ({ translateX, translateY } = obj);
      if (tmp3) {
        num4 = 0;
      }
      obj.zIndex = num4;
      obj = {};
      let obj3 = transitionState(sharedValue[7]);
      obj.translateY = obj3.withSpring(translateY, closure_8, "animate-always");
      const items = [obj, , ];
      const obj1 = { translateX: transitionState(sharedValue[7]).withSpring(translateX, closure_8, "animate-always") };
      items[1] = obj1;
      const obj2 = {};
      const obj8 = transitionState(sharedValue[7]);
      const fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = callback === callback(closure_2[9]).TransitionStates.YEETED;
        }
        if (tmp) {
          tmp = closure_3;
        }
        if (tmp) {
          callback(closure_2[6]).runOnJS(closure_1)();
          const obj = callback(closure_2[6]);
        }
      };
      obj3 = { transitionState, TransitionStates: transitionState(sharedValue[9]).TransitionStates, isFolder: tmp3, runOnJS: transitionState(sharedValue[6]).runOnJS, cleanUp };
      fn.__closure = obj3;
      fn.__workletHash = 9409925192880;
      fn.__initData = closure_14;
      obj2.scale = obj8.withSpring(num2, closure_8, "animate-always", fn);
      items[2] = obj2;
      obj.transform = items;
      const obj6 = transitionState(sharedValue[7]);
      if (tmp3) {
        num = sharedValue.get();
      }
      obj.opacity = transitionState(sharedValue[7]).withSpring(num, closure_8, "animate-always");
      return obj;
    }
    obj = { "Bool(false)": -536870861, "Bool(false)": -299892737 };
  };
  obj = { isFolder: tmp3, visible: sharedValue, withSpring: arg1(dependencyMap[7]).withSpring, DRAG_SPRING_PHYSICS: closure_8, transitionState, TransitionStates: arg1(dependencyMap[9]).TransitionStates, runOnJS: arg1(dependencyMap[6]).runOnJS, cleanUp };
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
  const items = [tmp.animatedPreviewStyle, , ];
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
    let tmp14 = jsx(importDefault(dependencyMap[10]), obj1);
  } else {
    const obj2 = { guildId: node.id, isDragPreview: true, hideExpandedChildren: !enableHome };
    tmp14 = jsx(importDefault(dependencyMap[11]), obj2);
  }
  obj.children = tmp14;
  return jsx(importDefault(dependencyMap[8]), obj);
}
const importAllResult = importAll(dependencyMap[0]);
const GuildsNodeType = arg1(dependencyMap[1]).GuildsNodeType;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ dragPreview: {}, animatedPreviewStyle: { position: "absolute" }, dragPreviewHome: { right: 0 }, animatedPreviewStyleHome: { <string:24250455>: -536870861, isArray: -299892737 } });
let closure_8 = {};
let closure_9 = { code: "function GuildsBarDragPreviewTsx1(){const{scrollPosition,dragRegion,listInsets}=this.__closure;return Math.max(scrollPosition.get()<dragRegion.get().min?dragRegion.get().min-scrollPosition.get():0,listInsets.get().start);}" };
let closure_10 = { code: "function GuildsBarDragPreviewTsx2(){const{scrollPosition,windowSize,listInsets,dragRegion,draggedHeight}=this.__closure;return Math.min(scrollPosition.get()+(windowSize-listInsets.get().end)>dragRegion.get().max?dragRegion.get().max-draggedHeight-scrollPosition.get():windowSize-listInsets.get().end-draggedHeight,windowSize-listInsets.get().end-draggedHeight);}" };
let closure_11 = { code: "function GuildsBarDragPreviewTsx3(){const{dropPosition,scrollPosition,gestureState,draggedHeight,minY,maxY,windowSize,withSpring,DRAG_SPRING_PHYSICS,runOnJS,dropComplete}=this.__closure;let translateY=function(){if(dropPosition!=null){return dropPosition-scrollPosition.get();}return gestureState.get().absoluteY-draggedHeight/2;}();if(gestureState.get().mode!=null&&dropPosition==null){translateY=Math.min(Math.max(translateY,minY.get()),maxY.get());}else{translateY=Math.max(-draggedHeight,Math.min(translateY,windowSize));}return{top:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&dropPosition!=null){runOnJS(dropComplete)();}})};}" };
let closure_12 = { code: "function GuildsBarDragPreviewTsx4(finished){const{dropPosition,runOnJS,dropComplete}=this.__closure;if(finished&&dropPosition!=null){runOnJS(dropComplete)();}}" };
let closure_13 = { code: "function GuildsBarDragPreviewTsx5(){const{isFolder,visible,withSpring,DRAG_SPRING_PHYSICS,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;const targetScale=function(){if(isFolder){return visible.get()===1?1:0.3;}return visible.get()===1?1:0.33;}();const{translateX:translateX,translateY:translateY}=function(){if(isFolder){return{translateX:0,translateY:0};}if(visible.get()===1){return{translateX:0,translateY:0};}return{translateX:10,translateY:-10};}();return{zIndex:isFolder?0:1,transform:[{translateY:withSpring(translateY,DRAG_SPRING_PHYSICS,'animate-always')},{translateX:withSpring(translateX,DRAG_SPRING_PHYSICS,'animate-always')},{scale:withSpring(targetScale,DRAG_SPRING_PHYSICS,'animate-always',function(finished){if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}})}],opacity:withSpring(isFolder?visible.get():1,DRAG_SPRING_PHYSICS,'animate-always')};}" };
let closure_14 = { code: "function GuildsBarDragPreviewTsx6(finished){const{transitionState,TransitionStates,isFolder,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED&&isFolder){runOnJS(cleanUp)();}}" };
const obj2 = arg1(dependencyMap[4]);
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
  }, arg1(dependencyMap[12]).shallow);
  let tmp2 = null;
  if (null != tmp) {
    const obj = {};
    const merged = Object.assign(tmp);
    tmp2 = <PreviewItem {...obj} />;
  }
  return tmp2;
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarDragPreview.tsx");

export default memoResult;
