// Module ID: 14700
// Function ID: 110932
// Name: UnreadIndicator
// Dependencies: []
// Exports: default, useGuildsBarAnimatedWrapperStyles

// Module 14700 (UnreadIndicator)
class UnreadIndicator {
  constructor(arg0) {
    sharedId = global.sharedId;
    arg1 = sharedId;
    id = global.id;
    importDefault = id;
    MOUNTED = global.transitionState;
    if (MOUNTED === undefined) {
      tmp = arg1;
      tmp2 = dependencyMap;
      num = 7;
      MOUNTED = arg1(dependencyMap[7]).TransitionStates.MOUNTED;
    }
    dependencyMap = MOUNTED;
    cleanUp = global.cleanUp;
    importAll = cleanUp;
    closure_4 = undefined;
    GUILD_ITEM_HIT_SLOP = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    obj = arg1(dependencyMap[6]);
    token = obj.useToken(importDefault(dependencyMap[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
    closure_4 = token;
    tmp4 = f110939(closure_6());
    GUILD_ITEM_HIT_SLOP = tmp4;
    tmp5 = MOUNTED === arg1(dependencyMap[7]).TransitionStates.MOUNTED;
    closure_6 = tmp5;
    num2 = 8;
    if (global.selected) {
      tmp6 = arg1;
      tmp7 = dependencyMap;
      num2 = 8;
      if (MOUNTED !== arg1(dependencyMap[7]).TransitionStates.YEETED) {
        num2 = 40;
      }
    }
    closure_7 = num2;
    items = [, , ];
    items[0] = num2;
    items[1] = MOUNTED;
    items[2] = tmp4.unreadIndicator;
    fn = function h(targetOriginY) {
      if (tmp5) {
        let obj = { animations: {}, initialValues: {} };
      } else {
        obj = {};
        obj = { originY: sharedId(MOUNTED[8]).withSpring(targetOriginY.targetOriginY, closure_10, "animate-always") };
        const obj3 = sharedId(MOUNTED[8]);
        const tmp5 = sharedId;
        obj.originX = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetOriginX, closure_10, "animate-always");
        const obj4 = sharedId(MOUNTED[8]);
        obj.height = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetHeight, closure_10, "animate-always");
        obj.animations = obj;
        const obj1 = { originY: token / 2 };
        obj.initialValues = obj1;
        const obj5 = sharedId(MOUNTED[8]);
      }
      return obj;
    };
    obj = { disableEntering: tmp5, sharedId, id };
    memo = importAll.useMemo(() => {
      const items = [tmp4.unreadIndicator, ];
      const obj = { height: num2, marginTop: num2 / 2 * -1 };
      let num = 0;
      if (MOUNTED === sharedId(MOUNTED[7]).TransitionStates.YEETED) {
        num = -4;
      }
      obj.marginLeft = num;
      items[1] = obj;
      return items;
    }, items);
    obj.withSpring = arg1(dependencyMap[8]).withSpring;
    obj.BAR_SPRING_PHYSICS = jsxs;
    obj.guildItemSize = token;
    fn.__closure = obj;
    fn.__workletHash = 404454683979;
    fn.__initData = f110940;
    items1 = [, , , ];
    items1[0] = tmp5;
    items1[1] = sharedId;
    items1[2] = id;
    items1[3] = token;
    fn2 = function _(height) {
      let obj = {};
      obj = { originY: sharedId(MOUNTED[8]).withSpring(height.targetOriginY, closure_10, "animate-always") };
      const obj3 = sharedId(MOUNTED[8]);
      obj.originX = sharedId(MOUNTED[8]).withSpring(height.targetOriginX, closure_10, "animate-always");
      const obj4 = sharedId(MOUNTED[8]);
      obj.height = sharedId(MOUNTED[8]).withSpring(height.targetHeight, closure_10, "animate-always");
      obj.animations = obj;
      obj.initialValues = { height: height.currentHeight, originY: height.currentOriginY, originX: height.currentOriginX };
      obj.callback = function callback(arg0) {
        let tmp = closure_2 === callback(closure_2[7]).TransitionStates.YEETED && arg0;
        if (tmp) {
          tmp = null != closure_3;
        }
        if (tmp) {
          callback(closure_2[9]).runOnJS(closure_3)();
          const obj = callback(closure_2[9]);
        }
      };
      return obj;
    };
    obj1 = {};
    callback = importAll.useCallback(fn, items1);
    obj1.withSpring = arg1(dependencyMap[8]).withSpring;
    obj1.BAR_SPRING_PHYSICS = jsxs;
    obj1.transitionState = MOUNTED;
    obj1.TransitionStates = arg1(dependencyMap[7]).TransitionStates;
    obj1.cleanUp = cleanUp;
    obj1.runOnJS = arg1(dependencyMap[9]).runOnJS;
    fn2.__closure = obj1;
    fn2.__workletHash = 10632665703864;
    fn2.__initData = f110940;
    items2 = [, ];
    items2[0] = MOUNTED;
    items2[1] = cleanUp;
    callback1 = importAll.useCallback(fn2, items2);
    return closure_7(importDefault(dependencyMap[10]), { collapsable: false, entering: callback, layout: callback1, style: memo, pointerEvents: "none" });
  }
}
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  return callback2(UnreadIndicator, { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp }, arg0);
}
let closure_3 = importAll(dependencyMap[0]);
const IOS_POINTER_STYLE = arg1(dependencyMap[1]).IOS_POINTER_STYLE;
({ GUILD_ITEM_HIT_SLOP: closure_5, useGuildWrapperSize: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = { disableNewIOSPicker: "<string:1094704332>", webpackId: "ILLO_PINK_30", connectedEmbeddedActivity: "<string:2576980529>" };
let closure_10 = { disableNewIOSPicker: "ILLO_GREEN_50", webpackId: 0.5, connectedEmbeddedActivity: 13 };
const tmp3 = arg1(dependencyMap[3]);
let closure_11 = arg1(dependencyMap[4]).createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  let obj = { draggedElement: { opacity: 0 }, selectedBackgroundOverlay: { backgroundColor: "<string:408361903>", opacity: "<string:2920093709>", borderRadius: "<string:1058778651>", 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971358077182287, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022170280268213266 }, container: {} };
  obj = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009918204497696196, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002124165697442455, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000783016494387, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009580552205395272, "Bool(false)": 13340553835198480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, top: num / 2, borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_ACTIVE };
  obj.unreadIndicator = obj;
  obj = { <string:1373155427>: "NativeScreenSharePickerUpdate", <string:3679825084>: "r", <string:2613735068>: "isArray", <string:3714720548>: "Array", <string:1390895509>: "isArray", <string:611104751>: "st", <string:1861833059>: "isArray", <string:1638181730>: "HermesInternal", <string:2506380196>: "isArray", left: num + 16, height: num };
  obj.expandedChildrenWrapper = obj;
  return obj;
});
const obj = arg1(dependencyMap[4]);
let closure_12 = arg1(dependencyMap[4]).createStyles((arg0, arg1, width, height) => {
  let obj = {};
  obj = { position: "relative", paddingTop: importDefault(dependencyMap[5]).modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingBottom: importDefault(dependencyMap[5]).modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingLeft: 12, height, width: width + closure_5.left + closure_5.right };
  obj.pressableWrapper = obj;
  obj = { width, height: width };
  let str = "transparent";
  let str2 = "transparent";
  if (!arg1) {
    str2 = importDefault(dependencyMap[5]).colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  obj.backgroundColor = str2;
  obj.itemShape = obj;
  const obj1 = {};
  if (arg0) {
    if (!arg1) {
      str = importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH;
    }
    let BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND;
  }
  obj1.backgroundColor = BACKGROUND_BRAND;
  obj.itemShapeSelected = obj1;
  return obj;
});
let closure_13 = { code: "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}" };
let closure_14 = { code: "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}" };
let closure_15 = { code: "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}" };
const obj2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

export default function GuildsBarAnimatedItemWrapper(id) {
  let accessibilityActions;
  let children;
  let config;
  let cutouts;
  let entering;
  let exiting;
  let expandedChildren;
  let externalChildren;
  let guildsBarIconDrawerStyle;
  let guildsBarLabelDrawerStyle;
  let guildsBarUnreadDrawerStyle;
  let isDragTarget;
  let label;
  let layout;
  let onAccessibilityAction;
  let preventClipping;
  let unread;
  let zIndex;
  id = id.id;
  const arg1 = id;
  const selected = id.selected;
  const importDefault = selected;
  const circle = id.circle;
  const dependencyMap = circle;
  const hint = id.hint;
  const React = hint;
  let flag = id.draggable;
  ({ unread, children, externalChildren, expandedChildren, config, label } = id);
  if (flag === undefined) {
    flag = false;
  }
  const IOS_POINTER_STYLE = flag;
  ({ isDragTarget, cutouts } = id);
  if (isDragTarget === undefined) {
    isDragTarget = false;
  }
  const dragState = id.dragState;
  let flag2 = id.isDragPreview;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let num = id.draggedItemSize;
  if (num === undefined) {
    num = 0;
  }
  const overState = id.overState;
  const styles = id.styles;
  let closure_9 = styles;
  ({ accessibilityActions, preventClipping, onAccessibilityAction } = id);
  if (preventClipping === undefined) {
    preventClipping = false;
  }
  const expanded = id.expanded;
  let closure_10 = expanded;
  ({ zIndex, entering, exiting, layout } = id);
  if (zIndex === undefined) {
    zIndex = 0;
  }
  const callback3 = zIndex;
  const sharedId = id.sharedId;
  let closure_12 = sharedId;
  let closure_13;
  let closure_14;
  let closure_15;
  let UnreadIndicator;
  let renderUnreadIndicator;
  let closure_18;
  let tmp13;
  const tmp = dragState();
  closure_13 = tmp;
  let obj = arg1(dependencyMap[6]);
  const token = obj.useToken(importDefault(dependencyMap[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  closure_14 = token;
  const tmp3 = callback3(tmp);
  closure_15 = tmp3;
  const tmp4 = importDefault(dependencyMap[11])(config);
  let obj1 = arg1(dependencyMap[6]);
  const token1 = obj1.useToken(importDefault(dependencyMap[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  UnreadIndicator = token1;
  let obj2 = arg1(dependencyMap[9]);
  class W {
    constructor() {
      obj = {};
      obj2 = id(circle[8]);
      if (circle) {
        tmp2 = closure_14;
        num = 2;
        result = closure_14 / 2;
      } else {
        result = closure_16;
      }
      obj.borderRadius = obj2.withSpring(result, styles, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[8]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: closure_9 };
  W.__closure = obj;
  W.__workletHash = 15930523896348;
  W.__initData = closure_15;
  const animatedStyle = obj2.useAnimatedStyle(W);
  const context = React.useContext(arg1(dependencyMap[12]).HomeDrawerStateContext);
  const items = [isDragTarget, dragState, num, overState, zIndex, tmp];
  ({ guildsBarLabelDrawerStyle, guildsBarIconDrawerStyle, guildsBarUnreadDrawerStyle } = context);
  const items1 = [styles.pressableWrapper, isDragTarget, tmp3.draggedElement];
  const memo = React.useMemo(() => {
    if (isDragTarget) {
      if ("dragging" === dragState) {
        let str2 = "hide";
      }
      const obj = {};
      if ("drag-target" === str2) {
        let num = tmp + num;
      } else {
        num = 0;
        if ("hide" !== str2) {
          num = tmp;
        }
      }
      obj.height = num;
      let num2 = 0;
      if ("drag-target" === str2) {
        if ("before" === overState) {
          num2 = num;
        } else {
          num2 = 0;
        }
      }
      obj.top = num2;
      obj.zIndex = zIndex;
      return obj;
    }
    if (null != overState) {
      if ("self" !== overState) {
        let str5 = "drag-target";
      }
      str2 = str5;
    }
    str5 = "none";
  }, items);
  let tmp10 = !unread;
  const memo1 = React.useMemo(() => {
    const items = [styles.pressableWrapper, , ];
    let draggedElement;
    if (isDragTarget) {
      draggedElement = tmp3.draggedElement;
    }
    items[1] = draggedElement;
    items[2] = flag;
    return items;
  }, items1);
  if (tmp10) {
    tmp10 = !selected;
  }
  if (!tmp10) {
    tmp10 = isDragTarget;
  }
  if (!tmp10) {
    tmp10 = flag2;
  }
  renderUnreadIndicator = tmp10;
  const items2 = [tmp10, selected, sharedId, id];
  const memo2 = React.useMemo(() => {
    if (!tmp10) {
      const obj = { selected, sharedId, id };
      return obj;
    }
  }, items2);
  const MobileHomeDrawerExperiment = arg1(dependencyMap[13]).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds_bar" }).enableHome;
  closure_18 = React.useRef(undefined);
  const items3 = [expanded];
  const effect = React.useEffect(() => {
    if (undefined !== ref.current) {
      if (ref.current !== expanded) {
        let intl = id(circle[14]).intl;
        let string = intl.string;
        const t = id(circle[14]).t;
        string = string(expanded ? t.CUnsOR : t.jsudFd);
        intl = circle;
        const AccessibilityAnnouncer = id(circle[15]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(string);
        ref.current = expanded;
      }
    } else {
      ref.current = expanded;
    }
  }, items3);
  tmp13 = null != accessibilityActions;
  if (tmp13) {
    tmp13 = accessibilityActions.length > 0;
  }
  const items4 = [hint, flag, tmp13];
  const memo3 = React.useMemo(() => {
    const items = [];
    let tmp = null != hint;
    if (tmp) {
      tmp = hint.length > 0;
    }
    if (tmp) {
      items.push(hint);
    }
    if (flag) {
      const intl = id(circle[14]).intl;
      items.push(intl.string(id(circle[14]).t.BGMUFB));
    }
    if (tmp13) {
      const intl2 = id(circle[14]).intl;
      items.push(intl2.string(id(circle[14]).t.X2x0MF));
    }
    return items.join(". ");
  }, items4);
  obj = {};
  let container = null;
  if (enableHome) {
    container = tmp3.container;
  }
  const items5 = [container, memo];
  obj.style = items5;
  obj.layout = layout;
  obj.entering = entering;
  obj.exiting = exiting;
  obj.preventClipping = preventClipping;
  obj.collapsable = false;
  obj1 = {};
  let tmp19 = null;
  const tmp14 = overState;
  const tmp15 = importDefault(dependencyMap[10]);
  const tmp17 = num;
  if (enableHome) {
    tmp19 = guildsBarIconDrawerStyle;
  }
  obj1.style = tmp19;
  obj2 = {};
  const tmp18 = importDefault(dependencyMap[10]);
  const tmp20 = overState;
  const merged = Object.assign(tmp4);
  obj2["style"] = memo1;
  obj2["accessibilityLabel"] = label;
  obj2["accessible"] = true;
  obj2["accessibilityRole"] = "button";
  obj2["accessibilityState"] = { selected, expanded };
  obj2["hitSlop"] = isDragTarget;
  let tmp23;
  if (memo3.length > 0) {
    tmp23 = memo3;
  }
  obj2["accessibilityHint"] = tmp23;
  obj2["collapsable"] = false;
  obj2["accessibilityActions"] = accessibilityActions;
  obj2["onAccessibilityAction"] = onAccessibilityAction;
  const items6 = [externalChildren, , ];
  const obj3 = { pointerEvents: "none" };
  const items7 = [{ position: "absolute", width: tmp, height: tmp }, ];
  let tmp26 = null;
  const tmp21 = importDefault(dependencyMap[16]);
  const tmp24 = num;
  if (enableHome) {
    tmp26 = guildsBarUnreadDrawerStyle;
  }
  items7[1] = tmp26;
  obj3.style = items7;
  obj3.children = num(arg1(dependencyMap[7]).TransitionItem, { item: memo2, renderItem: renderUnreadIndicator });
  items6[1] = tmp24(importDefault(dependencyMap[10]), obj3);
  const obj5 = { style: items8, cutouts };
  const items8 = [styles.itemShape, animatedStyle];
  const obj6 = { pointerEvents: "none" };
  const items9 = [tmp3.selectedBackgroundOverlay, ];
  let itemShapeSelected = null;
  const obj4 = { item: memo2, renderItem: renderUnreadIndicator };
  const tmp25 = importDefault(dependencyMap[10]);
  const tmp27 = overState;
  const tmp28 = num;
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items9[1] = itemShapeSelected;
  obj6.style = items9;
  const items10 = [tmp28(importDefault(dependencyMap[16]), obj6), !isDragTarget && children];
  obj5.children = items10;
  items6[2] = tmp27(arg1(dependencyMap[17]).ClipViewAnimated, obj5);
  obj2["children"] = items6;
  obj1.children = tmp20(tmp21, obj2);
  const items11 = [tmp17(tmp18, obj1), ];
  let tmp32Result = null;
  if (enableHome) {
    const obj7 = {};
    const merged1 = Object.assign(tmp4);
    const items12 = [tmp3.expandedChildrenWrapper, guildsBarLabelDrawerStyle];
    obj7["style"] = items12;
    obj7["children"] = !isDragTarget && expandedChildren;
    tmp32Result = num(importDefault(dependencyMap[10]), obj7);
    const tmp32 = num;
    const tmp35 = importDefault(dependencyMap[10]);
  }
  items11[1] = tmp32Result;
  obj.children = items11;
  return tmp14(tmp15, obj);
};
export const useGuildsBarAnimatedWrapperStyles = function useGuildsBarAnimatedWrapperStyles(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.disableSelectedColor;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.disableBGColor;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const token = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  return callback4(flag, flag2, token, callback());
};
export { UnreadIndicator };
export { renderUnreadIndicator };
