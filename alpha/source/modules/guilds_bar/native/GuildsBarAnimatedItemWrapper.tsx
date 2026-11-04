// Module ID: 18624
// Function ID: 18625
// Name: GuildsBarAnimatedItemWrapper
// Dependencies: [19, 5778, 18612, 21, 5141, 575, 5732, 5207, 5771, 1705, 1652, 18625, 18335, 18338, 1113, 5150, 18626, 7101, 9656, 2]
// Exports: default, useGuildsBarAnimatedWrapperStyles

// Module 18624 (GuildsBarAnimatedItemWrapper)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import native from "native" /* 5207 */;
import useToken from "useToken" /* 5732 */;
import react_native from "react-native" /* 5778 */;
import react from "react" /* 19 */;
import GuildsBarConstants from "GuildsBarConstants" /* 18612 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, obj1, renderItem;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
class UnreadIndicator {
  constructor(selected) {
    let id;
    let num;
    let sharedId;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp26;
    let transitionState;
    let unreadIndicator;
    ({ sharedId, id, transitionState } = selected);
    selected = selected.selected;
    if (transitionState === undefined) {
      let tmp = transitionState;
      transitionState = transitionState(num[7]).TransitionStates.MOUNTED;
    }
    const cleanUp = selected.cleanUp;
    importDefault = undefined;
    num = undefined;
    let obj = transitionState(num[6]);
    const token = obj.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
    const tmp7 = closure_12(closure_7());
    const tmp5 = importDefault;
    importDefault = tmp7;
    num = 8;
    const MOUNTED = transitionState(num[7]).TransitionStates.MOUNTED;
    if (selected) {
      num = 8;
      if (transitionState !== transitionState(num[7]).TransitionStates.YEETED) {
        num = 40;
      }
    }
    let items = [num, transitionState, tmp7.unreadIndicator];
    const items1 = [closure_14, transitionState === MOUNTED, sharedId, id, , , ];
    const style = react.useMemo(() => {
      const items = [unreadIndicator.unreadIndicator, ];
      const obj = { height: num, marginTop: num / 2 * -1, marginLeft: num };
      num = 0;
      if (transitionState === native.TransitionStates.YEETED) {
        num = -4;
      }
      items[1] = obj;
      return items;
    }, items);
    const useCallback = react.useCallback;
    items1[4] = transitionState(num[8]).withSpring;
    items1[5] = closure_11;
    items1[6] = token;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
    const tmp9 = react;
    class GuildsBarAnimatedItemWrapperTsx1 {
      constructor(targetOriginY) {
        let obj3;
        let obj4;
        let obj5;
        const tmp = c0;
        if (tmp) {
          obj3 = { animations: {}, initialValues: {} };
          const obj2 = { animations: {}, initialValues: {} };
        } else {
          obj3 = { animations: obj4, initialValues: obj5 };
          obj4 = { originY: _undefined(targetOriginY.targetOriginY, c4, "animate-always"), originX: _undefined(targetOriginY.targetOriginX, c4, "animate-always"), height: _undefined(targetOriginY.targetHeight, c4, "animate-always") };
          obj5 = { height: 8, originY: c5 / 2, originX: -12 };
        }
        return obj3;
      }
    }
    const items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
    GuildsBarAnimatedItemWrapperTsx1.__closure = items2;
    GuildsBarAnimatedItemWrapperTsx1.__workletHash = 14383411265202;
    GuildsBarAnimatedItemWrapperTsx1.__initData = tmp12;
    const items3 = [transitionState === MOUNTED, sharedId, id, token];
    const items4 = [closure_15, , , , , , ];
    const entering = useCallback(GuildsBarAnimatedItemWrapperTsx1, items3);
    const useCallback2 = tmp9.useCallback;
    items4[1] = transitionState(num[8]).withSpring;
    items4[2] = closure_11;
    items4[3] = transitionState;
    items4[4] = transitionState(num[7]).TransitionStates;
    items4[5] = cleanUp;
    items4[6] = transitionState(num[9]).scheduleOnRN;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items4;
    class GuildsBarAnimatedItemWrapperTsx2 {
      constructor(arg0) {
        obj = { animations: null, initialValues: null, callback: null };
        obj1 = { originY: closure_0(selected.targetOriginY, closure_1, "animate-always"), originX: closure_0(selected.targetOriginX, closure_1, "animate-always"), height: closure_0(selected.targetHeight, closure_1, "animate-always") };
        obj.animations = obj1;
        obj.initialValues = { height: selected.currentHeight, originY: selected.currentOriginY, originX: selected.currentOriginX };
        obj.callback = function callback(arg0) {
          const tmp = closure_1_2 === constants.YEETED && arg0 && null != closure_1_4;
          if (tmp) {
            closure_1_5(closure_1_4);
          }
        };
        return obj;
      }
    }
    const items5 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
    GuildsBarAnimatedItemWrapperTsx2.__closure = items5;
    GuildsBarAnimatedItemWrapperTsx2.__workletHash = 14169006071008;
    GuildsBarAnimatedItemWrapperTsx2.__initData = tmp20;
    const items6 = [transitionState, cleanUp];
    const layout = useCallback2(GuildsBarAnimatedItemWrapperTsx2, items6);
    return closure_8(tmp5(num[10]).View, { collapsable: false, entering, layout, style, pointerEvents: "none" });
  }
}
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  const obj = { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp };
  return metroImportAll(UnreadIndicator, obj, arg0);
}
const IOS_POINTER_STYLE = react_native.IOS_POINTER_STYLE;
({ GUILD_ITEM_HIT_SLOP: hasOwnProperty, GUILD_ITEM_INSET_LEFT: metroRequire, useGuildWrapperSize: metroImportDefault } = GuildsBarConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = { mass: 0.8, damping: 100, stiffness: 150 };
let closure_11 = { mass: 0.25, damping: 100, stiffness: 200 };
let createStyles = createStyles_mod;
const authStore2 = createStyles.createStyles(() => {
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
    str2 = tmp(575).colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  if (arg0) {
    if (!arg1) {
      str = tmp(575).colors.BACKGROUND_SURFACE_HIGH;
    }
    BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = tmp(575).colors.BACKGROUND_BRAND;
  }
  return obj;
});
let closure_14 = { code: "(function GuildsBarAnimatedItemWrapperTsx1(values){let[disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize]=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};})" };
let closure_15 = { code: "(function GuildsBarAnimatedItemWrapperTsx2(values){let[withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,scheduleOnRN]=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){scheduleOnRN(cleanUp);}}};})" };
let closure_18 = { code: "(function GuildsBarAnimatedItemWrapperTsx3(){let[withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS]=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};})" };
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
  let hint;
  let isDragTarget;
  let items10;
  let items12;
  let items13;
  let items14;
  let items9;
  let label;
  let layout;
  let obj6;
  let ref;
  let str;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp29;
  let unread;
  let unreadStyle;
  let zIndex;
  id = id.id;
  const selected = id.selected;
  ({ unread, hint } = id);
  let flag = id.draggable;
  ({ circle, children, externalChildren, expandedChildren, config, label } = id);
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
  let flag3 = id.preventClipping;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const expanded = id.expanded;
  ({ zIndex, entering, exiting, layout } = id);
  if (zIndex === undefined) {
    zIndex = 0;
  }
  const sharedId = id.sharedId;
  flag2 = undefined;
  renderItem = undefined;
  closure_18 = undefined;
  let closure_19;
  let tmp = overState();
  closure_14 = tmp;
  let tmp2 = id;
  let tmp3 = hint;
  let obj = id(hint[6]);
  const tmp4 = selected;
  const token = obj.useToken(selected(hint[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = zIndex(tmp);
  let draggedElement = tmp6;
  const tmp7 = selected(hint[11])(config);
  let obj2 = id(hint[6]);
  const token1 = obj2.useToken(selected(hint[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let tmp9 = id(hint[10]);
  let items = [closure_18, , , , , ];
  const useAnimatedStyle = tmp9.useAnimatedStyle;
  items[1] = id(hint[8]).withSpring;
  items[2] = circle;
  items[3] = token1;
  items[4] = token;
  items[5] = onAccessibilityAction;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class GuildsBarAnimatedItemWrapperTsx3 {
    constructor() {
      let result;
      const tmp = c0;
      if (c1) {
        result = c3 / 2;
      } else {
        result = c2;
      }
      const obj = { borderRadius: tmp(result, c4, "animate-always") };
      return obj;
    }
  }
  let items1 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  GuildsBarAnimatedItemWrapperTsx3.__closure = items1;
  GuildsBarAnimatedItemWrapperTsx3.__workletHash = 2090076448645;
  GuildsBarAnimatedItemWrapperTsx3.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(GuildsBarAnimatedItemWrapperTsx3);
  const enableHome = flag.useContext(tmp2(tmp3[12]).HomeDrawerStateContext).enableHome;
  const tmp2Result = tmp2(tmp3[13]);
  const drawerOpen = tmp2Result.useDrawerOpen(enableHome);
  const items2 = [isDragTarget, dragState, num, overState, zIndex, tmp];
  const memo = flag.useMemo(() => {
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
  }, items2);
  const items3 = [styles.pressableWrapper, isDragTarget, tmp6.draggedElement];
  ({ style, unreadStyle } = memo);
  let tmp20 = !unread;
  const memo1 = flag.useMemo(() => {
    const items = [styles.pressableWrapper, , ];
    draggedElement = undefined;
    if (isDragTarget) {
      draggedElement = draggedElement.draggedElement;
    }
    items[1] = draggedElement;
    items[2] = IOS_POINTER_STYLE;
    return items;
  }, items3);
  if (!unread) {
    tmp20 = !selected;
  }
  if (!tmp20) {
    tmp20 = isDragTarget;
  }
  if (!tmp20) {
    tmp20 = flag2;
  }
  flag2 = tmp20;
  const items4 = [tmp20, selected, sharedId, id];
  const memo2 = obj3.useMemo(() => {
    const tmp = flag2;
    if (!tmp) {
      return { selected, sharedId, id };
    }
  }, items4);
  renderItem = obj3.useRef(undefined);
  const items5 = [expanded];
  const effect = obj3.useEffect(() => {
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
  }, items5);
  const tmp23 = tmp4(tmp3[16])(enableHome, drawerOpen);
  closure_18 = tmp23;
  const items6 = [accessibilityActions, tmp23];
  const memo3 = obj3.useMemo(() => {
    let items1;
    const tmp2 = closure_18;
    if (null == closure_18) {
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
  }, items6);
  const items7 = [tmp23, onAccessibilityAction];
  let tmp25 = null != memo3;
  const callback = obj3.useCallback((nativeEvent) => {
    if (null != closure_18) {
      if (nativeEvent.nativeEvent.actionName === closure_18.name) {
        closure_18.action();
      }
    }
    if (onAccessibilityAction != null) {
      tmp2(nativeEvent);
    }
  }, items7);
  if (tmp25) {
    let num2 = 0;
    tmp25 = memo3.length > 0;
  }
  closure_19 = tmp25;
  const items8 = [hint, flag, tmp25];
  const memo4 = obj3.useMemo(() => {
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
    const tmp9 = closure_19;
    if (tmp9) {
      const push2 = items.push;
      const intl2 = intl3.intl;
      push2(intl2.string(intl3.t.X2x0MF));
    }
    return items.join(". ");
  }, items8);
  const obj4 = { style: memo1, accessibilityLabel: label, accessible: true, focusable: true, accessibilityRole: "button", accessibilityState: { selected, expanded }, hitSlop: dragState, accessibilityHint: tmp29, collapsable: false, accessibilityActions: memo3, onAccessibilityAction: callback, children: items9 };
  const tmp4Result = tmp4(tmp3[17]);
  const merged = Object.assign(tmp7);
  tmp29 = undefined;
  if (memo4.length > 0) {
    tmp29 = memo4;
  }
  items9 = [externalChildren, , ];
  const obj5 = { pointerEvents: "none", style: unreadStyle, collapsable: false, children: styles(tmp2(tmp3[7]).TransitionItem, obj6) };
  obj6 = { item: memo2, renderItem };
  const tmp4Result4 = tmp4(tmp3[17]);
  items9[1] = styles(tmp4Result4, obj5);
  const obj7 = { style: items10, cutouts, children: items12 };
  items10 = [styles.itemShape, animatedStyle];
  const ClipViewAnimated = tmp2(tmp3[18]).ClipViewAnimated;
  const items11 = [tmp6.selectedBackgroundOverlay, ];
  let itemShapeSelected = null;
  const tmp4Result5 = tmp4(tmp3[17]);
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items11[1] = itemShapeSelected;
  items12 = [styles(tmp4Result5, { pointerEvents: "none", style: items11 }), !isDragTarget && children];
  items9[2] = accessibilityActions(ClipViewAnimated, obj7);
  let container = null;
  const tmp26Result = accessibilityActions(tmp4Result, obj4);
  const View = tmp4(tmp3[10]).View;
  if (enableHome) {
    container = tmp6.container;
  }
  const obj8 = { style: items13, layout, entering, exiting, preventClipping: flag3, collapsable: false, children: items14 };
  items13 = [container, style];
  items14 = [tmp26Result, ];
  let tmp30Result = null;
  if (enableHome) {
    const obj9 = { style: tmp6.expandedChildrenWrapper, collapsable: false, accessibilityElementsHidden: !drawerOpen, importantForAccessibility: str, children: !isDragTarget && expandedChildren };
    const tmp4Result6 = tmp4(tmp3[17]);
    const merged1 = Object.assign(tmp7);
    str = "no-hide-descendants";
    if (drawerOpen) {
      str = "auto";
    }
    tmp30Result = tmp30(tmp4Result6, obj9);
  }
  items14[1] = tmp30Result;
  return accessibilityActions(View, obj8);
};
export function useGuildsBarAnimatedWrapperStyles(arg0) {
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
}
export { UnreadIndicator };
export { renderUnreadIndicator };
