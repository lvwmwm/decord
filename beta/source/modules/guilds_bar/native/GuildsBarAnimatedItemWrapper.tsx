// Module ID: 15930
// Function ID: 15931
// Name: GuildsBarAnimatedItemWrapper
// Dependencies: [19, 5290, 15918, 21, 4836, 576, 4531, 4540, 5280, 4566, 6494, 15931, 15655, 15658, 1115, 4541, 15932, 5901, 8276, 2]
// Exports: default, useGuildsBarAnimatedWrapperStyles

// Module 15930 (GuildsBarAnimatedItemWrapper)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useToken from "useToken" /* 4531 */;
import native from "native" /* 4540 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import spring from "spring" /* 5280 */;
import styleConstants from "styleConstants" /* 5290 */;
import react from "react" /* 19 */;
import GuildsBarConstants from "GuildsBarConstants" /* 15918 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let draggedElement, renderItem;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
class UnreadIndicator {
  constructor(sharedId) {
    sharedId = sharedId.sharedId;
    const id = sharedId.id;
    let MOUNTED = sharedId.transitionState;
    const selected = sharedId.selected;
    if (MOUNTED === undefined) {
      let tmp = sharedId;
      let tmp2 = MOUNTED;
      MOUNTED = sharedId(MOUNTED[7]).TransitionStates.MOUNTED;
    }
    const cleanUp = sharedId.cleanUp;
    let num;
    let tmp3 = sharedId;
    let obj = sharedId(MOUNTED[6]);
    const token = obj.useToken(id(MOUNTED[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
    const tmp7 = closure_12(num());
    const unreadIndicator = tmp7;
    const tmp8 = MOUNTED === sharedId(MOUNTED[7]).TransitionStates.MOUNTED;
    let closure_6 = tmp8;
    num = 8;
    const tmp5 = id;
    if (selected) {
      num = 8;
      if (MOUNTED !== tmp3(MOUNTED[7]).TransitionStates.YEETED) {
        num = 40;
      }
    }
    let items = [num, MOUNTED, tmp7.unreadIndicator];
    const fn = function h(targetOriginY) {
      let obj3;
      let obj4;
      let obj5;
      let obj6;
      let obj7;
      let obj8;
      const tmp = closure_6;
      if (tmp) {
        obj3 = { animations: {}, initialValues: {} };
        const obj2 = { animations: {}, initialValues: {} };
      } else {
        obj3 = { animations: obj7, initialValues: obj8 };
        obj7 = { originY: obj4.withSpring(targetOriginY.targetOriginY, BAR_SPRING_PHYSICS, "animate-always"), originX: obj5.withSpring(targetOriginY.targetOriginX, BAR_SPRING_PHYSICS, "animate-always"), height: obj6.withSpring(targetOriginY.targetHeight, BAR_SPRING_PHYSICS, "animate-always") };
        obj4 = spring;
        obj5 = spring;
        obj6 = spring;
        obj8 = { height: 8, originY: token / 2, originX: -12 };
      }
      return obj3;
    };
    let obj2 = { disableEntering: tmp8, sharedId, id, withSpring: tmp3(tmp4[8]).withSpring, BAR_SPRING_PHYSICS, guildItemSize: token };
    const style = cleanUp.useMemo(() => {
      const items = [unreadIndicator.unreadIndicator, ];
      const obj = { height: num, marginTop: num / 2 * -1, marginLeft: num };
      num = 0;
      if (MOUNTED === native.TransitionStates.YEETED) {
        num = -4;
      }
      items[1] = obj;
      return items;
    }, items);
    const useCallback = cleanUp.useCallback;
    fn.__closure = obj2;
    fn.__workletHash = 404454683979;
    fn.__initData = __initData;
    const items1 = [tmp8, sharedId, id, token];
    const fn2 = function p(height) {
      let obj2;
      let obj3;
      let obj4;
      let obj5;
      const obj = {
        animations: obj2,
        initialValues: { height: height.currentHeight, originY: height.currentOriginY, originX: height.currentOriginX },
        callback(arg0) {
          let tmp3 = closure_1_2 === sharedId(MOUNTED[7]).TransitionStates.YEETED && arg0;
          const tmp = sharedId;
          const tmp2 = MOUNTED;
          if (tmp3) {
            tmp3 = null != cleanUp;
          }
          if (tmp3) {
            const tmpResult = tmp(tmp2[9]);
            tmpResult.runOnJS(cleanUp)();
          }
        }
      };
      obj2 = { originY: obj3.withSpring(height.targetOriginY, BAR_SPRING_PHYSICS, "animate-always"), originX: obj4.withSpring(height.targetOriginX, BAR_SPRING_PHYSICS, "animate-always"), height: obj5.withSpring(height.targetHeight, BAR_SPRING_PHYSICS, "animate-always") };
      obj3 = spring;
      obj4 = spring;
      obj5 = spring;
      return obj;
    };
    let obj3 = { withSpring: tmp3(tmp4[8]).withSpring, BAR_SPRING_PHYSICS, transitionState: MOUNTED, TransitionStates: tmp3(tmp4[7]).TransitionStates, cleanUp, runOnJS: tmp3(tmp4[9]).runOnJS };
    const entering = useCallback(fn, items1);
    const useCallback2 = cleanUp.useCallback;
    fn2.__closure = obj3;
    fn2.__workletHash = 10632665703864;
    fn2.__initData = __initData2;
    const items2 = [MOUNTED, cleanUp];
    const layout = useCallback2(fn2, items2);
    return closure_8(tmp5(MOUNTED[10]), { collapsable: false, entering, layout, style, pointerEvents: "none" });
  }
}
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  const obj = { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp };
  return metroImportAll(UnreadIndicator, obj, arg0);
}
const IOS_POINTER_STYLE = styleConstants.IOS_POINTER_STYLE;
({ GUILD_ITEM_HIT_SLOP: hasOwnProperty, GUILD_ITEM_INSET_LEFT: metroRequire, useGuildWrapperSize: metroImportDefault } = GuildsBarConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = { mass: 0.8, damping: 100, stiffness: 150 };
const unpackModuleId = { mass: 0.25, damping: 100, stiffness: 200 };
let createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles(() => {
  let rect;
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  const obj = { draggedElement: { opacity: 0 }, selectedBackgroundOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, container: { position: "relative", overflow: "visible" }, unreadIndicator: size, expandedChildrenWrapper: rect };
  size = { position: "absolute", top: num / 2, left: -4, height: 8, width: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.TEXT_STRONG };
  rect = { position: "absolute", left: num + 16, top: 0, right: 8, height: num, display: "flex", flexDirection: "row", alignItems: "center" };
  return obj;
});
createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((arg0, arg1, width, height) => {
  let BACKGROUND_BRAND;
  let size1;
  let str2;
  const obj = { pressableWrapper: size, itemShape: size1, itemShapeSelected: { backgroundColor: BACKGROUND_BRAND } };
  size = { position: "relative", paddingTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingLeft: metroRequire, height, width: width + hasOwnProperty.left + hasOwnProperty.right };
  size1 = { position: "relative", width, height: width, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: str2 };
  let str = "transparent";
  str2 = "transparent";
  if (!arg1) {
    str2 = tmp(576).colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  if (arg0) {
    if (!arg1) {
      str = tmp(576).colors.BACKGROUND_SURFACE_HIGH;
    }
    BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = tmp(576).colors.BACKGROUND_BRAND;
  }
  return obj;
});
const authStore2 = { code: "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}" };
const __initData2 = { code: "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}" };
let closure_18 = { code: "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

export default function GuildsBarAnimatedItemWrapper(id) {
  let children;
  let circle;
  let config;
  let cutouts;
  let entering;
  let exiting;
  let expandedChildren;
  let externalChildren;
  let isDragTarget;
  let items10;
  let items11;
  let items12;
  let items7;
  let items8;
  let label;
  let layout;
  let obj9;
  let str;
  let style;
  let tmp22;
  let unread;
  let unreadStyle;
  let zIndex;
  id = id.id;
  const selected = id.selected;
  ({ unread, circle } = id);
  const hint = id.hint;
  let flag = id.draggable;
  ({ children, externalChildren, expandedChildren, config, label } = id);
  if (flag === undefined) {
    flag = false;
  }
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
  const accessibilityActions = id.accessibilityActions;
  const onAccessibilityAction = id.onAccessibilityAction;
  const expanded = id.expanded;
  ({ zIndex, entering, exiting, layout } = id);
  if (zIndex === undefined) {
    zIndex = 0;
  }
  const sharedId = id.sharedId;
  flag2 = undefined;
  let ref;
  let closure_21;
  let closure_22;
  let tmp = num();
  let closure_15 = tmp;
  let tmp2 = id;
  let tmp3 = circle;
  let obj = id(circle[6]);
  const tmp4 = selected;
  const token = obj.useToken(selected(circle[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = expanded(tmp);
  renderItem = tmp6;
  const tmp7 = selected(circle[11])(config);
  let obj2 = id(circle[6]);
  const token1 = obj2.useToken(selected(circle[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  const obj3 = id(circle[9]);
  class X {
    constructor() {
      let result;
      const withSpring = spring.withSpring;
      spring;
      if (circle) {
        result = token / 2;
      } else {
        result = token1;
      }
      const obj = { borderRadius: withSpring(result, closure_10, "animate-always") };
      return obj;
    }
  }
  X.__closure = { withSpring: id(circle[8]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: accessibilityActions };
  X.__workletHash = 15930523896348;
  X.__initData = token1;
  ({ withSpring: id(circle[8]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: accessibilityActions });
  const animatedStyle = obj3.useAnimatedStyle(X);
  const enableHome = hint.useContext(id(circle[12]).HomeDrawerStateContext).enableHome;
  const obj6 = id(circle[13]);
  const drawerOpen = obj6.useDrawerOpen(enableHome);
  let items = [isDragTarget, dragState, num, overState, zIndex, tmp];
  const memo = hint.useMemo(() => {
    let num2;
    let str2;
    let tmp3;
    const tmp = isDragTarget;
    if (tmp) {
      if ("dragging" === dragState) {
        tmp3 = overState;
        str2 = "hide";
      }
      if ("drag-target" === str2) {
        num = height + num;
      } else {
        num = 0;
        if ("hide" !== str2) {
          num = height;
        }
      }
      const obj = { height: num, top: num2, zIndex };
      num2 = 0;
      if ("drag-target" === str2) {
        if ("before" === tmp3) {
          num2 = num;
        } else {
          num2 = 0;
        }
      }
      const obj2 = { style: obj, unreadStyle: size };
      size = { position: "absolute", width: height, height };
      return obj2;
    }
    if (null != overState) {
      let str5;
      if ("self" !== overState) {
        str5 = "drag-target";
      }
      str2 = str5;
      tmp3 = tmp4;
    }
    str5 = "none";
  }, items);
  let items1 = [styles.pressableWrapper, isDragTarget, tmp6.draggedElement];
  ({ style, unreadStyle } = memo);
  let tmp13 = !unread;
  const memo1 = hint.useMemo(() => {
    const items = [styles.pressableWrapper, , ];
    draggedElement = undefined;
    if (isDragTarget) {
      draggedElement = draggedElement.draggedElement;
    }
    items[1] = draggedElement;
    items[2] = IOS_POINTER_STYLE;
    return items;
  }, items1);
  if (!unread) {
    tmp13 = !selected;
  }
  if (!tmp13) {
    tmp13 = isDragTarget;
  }
  if (!tmp13) {
    tmp13 = flag2;
  }
  flag2 = tmp13;
  const items2 = [tmp13, selected, sharedId, id];
  const memo2 = obj5.useMemo(() => {
    const tmp = flag2;
    if (!tmp) {
      return { selected, sharedId, id };
    }
  }, items2);
  ref = obj5.useRef(undefined);
  const items3 = [expanded];
  const effect = obj5.useEffect(() => {
    if (undefined !== ref.current) {
      if (ref.current !== expanded) {
        const intl = intl3.intl;
        const string = intl.string;
        const t = intl3.t;
        const stringResult = string(expanded ? t.CUnsOR : t.jsudFd);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(stringResult);
        ref.current = expanded;
      }
    } else {
      ref.current = expanded;
    }
  }, items3);
  const tmp16 = tmp4(tmp3[16])(enableHome, drawerOpen);
  closure_21 = tmp16;
  const items4 = [accessibilityActions, tmp16];
  const memo3 = obj5.useMemo(() => {
    let items1;
    const tmp2 = closure_21;
    if (null == closure_21) {
      items1 = accessibilityActions;
    } else {
      let items = accessibilityActions;
      if (accessibilityActions == null) {
        items = [];
      }
      items1 = [];
      const obj = { name: null, label: null };
      ({ name: obj.name, label: obj.label } = tmp2);
      items1[HermesBuiltin.arraySpread(items1, items, 0)] = obj;
    }
    return items1;
  }, items4);
  const items5 = [tmp16, onAccessibilityAction];
  let tmp18 = null != memo3;
  const callback = obj5.useCallback((nativeEvent) => {
    if (null != closure_21) {
      if (nativeEvent.nativeEvent.actionName === closure_21.name) {
        closure_21.action();
      }
    }
    if (onAccessibilityAction != null) {
      tmp2(nativeEvent);
    }
  }, items5);
  if (tmp18) {
    let num2 = 0;
    tmp18 = memo3.length > 0;
  }
  closure_22 = tmp18;
  const items6 = [hint, flag, tmp18];
  const memo4 = obj5.useMemo(() => {
    const items = [];
    const tmp = null != hint && arr.length > 0;
    if (tmp) {
      items.push(hint);
    }
    const tmp3 = flag;
    if (tmp3) {
      const push = items.push;
      const intl = intl3.intl;
      push(intl.string(intl3.t.BGMUFB));
    }
    const tmp9 = closure_22;
    if (tmp9) {
      const push2 = items.push;
      const intl2 = intl3.intl;
      push2(intl2.string(intl3.t.X2x0MF));
    }
    return items.join(". ");
  }, items6);
  const obj7 = { style: memo1, accessibilityLabel: label, accessible: true, focusable: true, accessibilityRole: "button", accessibilityState: { selected, expanded }, hitSlop: isDragTarget, accessibilityHint: tmp22, collapsable: false, accessibilityActions: memo3, onAccessibilityAction: callback, children: items7 };
  const tmp4Result = tmp4(tmp3[17]);
  const merged = Object.assign(tmp7);
  tmp22 = undefined;
  if (memo4.length > 0) {
    tmp22 = memo4;
  }
  items7 = [externalChildren, , ];
  const obj8 = { pointerEvents: "none", style: unreadStyle, collapsable: false, children: overState(tmp2(tmp3[7]).TransitionItem, obj9) };
  obj9 = { item: memo2, renderItem };
  const tmp4Result5 = tmp4(tmp3[17]);
  items7[1] = overState(tmp4Result5, obj8);
  const obj10 = { style: items8, cutouts, children: items10 };
  items8 = [styles.itemShape, animatedStyle];
  const ClipViewAnimated = tmp2(tmp3[18]).ClipViewAnimated;
  const items9 = [tmp6.selectedBackgroundOverlay, ];
  let itemShapeSelected = null;
  const tmp4Result6 = tmp4(tmp3[17]);
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items9[1] = itemShapeSelected;
  items10 = [overState(tmp4Result6, { pointerEvents: "none", style: items9 }), !isDragTarget && children];
  items7[2] = styles(ClipViewAnimated, obj10);
  let container = null;
  const tmp19Result = styles(tmp4Result, obj7);
  const tmp4Result7 = tmp4(tmp3[10]);
  if (enableHome) {
    container = tmp6.container;
  }
  const obj11 = { style: items11, layout, entering, exiting, collapsable: false, children: items12 };
  items11 = [container, style];
  items12 = [tmp19Result, ];
  let tmp23Result = null;
  if (enableHome) {
    const obj12 = { style: tmp6.expandedChildrenWrapper, collapsable: false, accessibilityElementsHidden: !drawerOpen, importantForAccessibility: str, children: !isDragTarget && expandedChildren };
    const tmp4Result8 = tmp4(tmp3[17]);
    const merged1 = Object.assign(tmp7);
    str = "no-hide-descendants";
    if (drawerOpen) {
      str = "auto";
    }
    tmp23Result = tmp23(tmp4Result8, obj12);
  }
  items12[1] = tmp23Result;
  return styles(tmp4Result7, obj11);
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
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  return closure_13(flag, flag2, token, metroImportDefault());
};
export { UnreadIndicator };
export { renderUnreadIndicator };
