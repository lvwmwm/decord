// Module ID: 14870
// Function ID: 113460
// Name: UnreadIndicator
// Dependencies: [31, 4551, 14860, 33, 4130, 689, 3834, 4476, 4542, 3991, 7678, 14871, 14849, 3987, 1212, 3843, 5515, 7961, 2]
// Exports: default, useGuildsBarAnimatedWrapperStyles

// Module 14870 (UnreadIndicator)
import result from "result";
import { IOS_POINTER_STYLE } from "IOS_POINTER_STYLE";
import GUILD_ITEM_SIZE from "GUILD_ITEM_SIZE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
class UnreadIndicator {
  constructor(arg0) {
    sharedId = global.sharedId;
    id = global.id;
    MOUNTED = global.transitionState;
    if (MOUNTED === undefined) {
      tmp = sharedId;
      tmp2 = MOUNTED;
      num = 7;
      MOUNTED = require("_createForOfIteratorHelperLoose").TransitionStates.MOUNTED;
    }
    cleanUp = global.cleanUp;
    c4 = undefined;
    GUILD_BAR_ITEM_SIZE = undefined;
    c6 = undefined;
    c7 = undefined;
    obj = require("map");
    token = obj.useToken(require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_SIZE);
    c4 = token;
    tmp4 = f113467(c6());
    GUILD_BAR_ITEM_SIZE = tmp4;
    tmp5 = MOUNTED === require("_createForOfIteratorHelperLoose").TransitionStates.MOUNTED;
    c6 = tmp5;
    num2 = 8;
    if (global.selected) {
      tmp6 = sharedId;
      tmp7 = MOUNTED;
      num2 = 8;
      if (MOUNTED !== require("_createForOfIteratorHelperLoose").TransitionStates.YEETED) {
        num2 = 40;
      }
    }
    c7 = num2;
    items = [, , ];
    items[0] = num2;
    items[1] = MOUNTED;
    items[2] = tmp4.unreadIndicator;
    fn = function h(targetOriginY) {
      if (c6) {
        let obj = { animations: {}, initialValues: {} };
      } else {
        obj = {};
        obj = { originY: sharedId(MOUNTED[8]).withSpring(targetOriginY.targetOriginY, outer1_10, "animate-always") };
        const obj3 = sharedId(MOUNTED[8]);
        obj.originX = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetOriginX, outer1_10, "animate-always");
        const obj4 = sharedId(MOUNTED[8]);
        obj.height = sharedId(MOUNTED[8]).withSpring(targetOriginY.targetHeight, outer1_10, "animate-always");
        obj.animations = obj;
        const obj1 = { height: 8, originY: token / 2, originX: -12 };
        obj.initialValues = obj1;
        const obj5 = sharedId(MOUNTED[8]);
      }
      return obj;
    };
    obj = { disableEntering: tmp5, sharedId, id };
    memo = cleanUp.useMemo(() => {
      const items = [_undefined.unreadIndicator, ];
      const obj = { height: num2, marginTop: num2 / 2 * -1 };
      let num = 0;
      if (MOUNTED === sharedId(MOUNTED[7]).TransitionStates.YEETED) {
        num = -4;
      }
      obj.marginLeft = num;
      items[1] = obj;
      return items;
    }, items);
    obj.withSpring = require("withSpring").withSpring;
    obj.BAR_SPRING_PHYSICS = jsxs;
    obj.guildItemSize = token;
    fn.__closure = obj;
    fn.__workletHash = 404454683979;
    fn.__initData = f113468;
    items1 = [, , , ];
    items1[0] = tmp5;
    items1[1] = sharedId;
    items1[2] = id;
    items1[3] = token;
    fn2 = function _(height) {
      let obj = {};
      obj = { originY: sharedId(MOUNTED[8]).withSpring(height.targetOriginY, outer1_10, "animate-always") };
      const obj3 = sharedId(MOUNTED[8]);
      obj.originX = sharedId(MOUNTED[8]).withSpring(height.targetOriginX, outer1_10, "animate-always");
      const obj4 = sharedId(MOUNTED[8]);
      obj.height = sharedId(MOUNTED[8]).withSpring(height.targetHeight, outer1_10, "animate-always");
      obj.animations = obj;
      obj.initialValues = { height: height.currentHeight, originY: height.currentOriginY, originX: height.currentOriginX };
      obj.callback = function callback(arg0) {
        let tmp = outer1_2 === sharedId(MOUNTED[7]).TransitionStates.YEETED && arg0;
        if (tmp) {
          tmp = null != outer1_3;
        }
        if (tmp) {
          sharedId(MOUNTED[9]).runOnJS(outer1_3)();
          const obj = sharedId(MOUNTED[9]);
        }
      };
      return obj;
    };
    obj1 = {};
    callback = cleanUp.useCallback(fn, items1);
    obj1.withSpring = require("withSpring").withSpring;
    obj1.BAR_SPRING_PHYSICS = jsxs;
    obj1.transitionState = MOUNTED;
    obj1.TransitionStates = require("_createForOfIteratorHelperLoose").TransitionStates;
    obj1.cleanUp = cleanUp;
    obj1.runOnJS = require("module_3991").runOnJS;
    fn2.__closure = obj1;
    fn2.__workletHash = 10632665703864;
    fn2.__initData = f113468;
    items2 = [, ];
    items2[0] = MOUNTED;
    items2[1] = cleanUp;
    callback1 = cleanUp.useCallback(fn2, items2);
    return c7(require("module_7678"), { collapsable: false, entering: callback, layout: callback1, style: memo, pointerEvents: "none" });
  }
}
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  return callback2(UnreadIndicator, { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp }, arg0);
}
({ GUILD_ITEM_HIT_SLOP: closure_5, useGuildWrapperSize: closure_6 } = GUILD_ITEM_SIZE);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { mass: 0.8, damping: 100, stiffness: 150 };
let closure_10 = { mass: 0.25, damping: 100, stiffness: 200 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  let obj = { draggedElement: { opacity: 0 }, selectedBackgroundOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, container: { position: "relative", overflow: "visible" } };
  obj = { position: "absolute", top: num / 2, left: -4, height: 8, width: 8, borderRadius: importDefault(689).radii.xs, backgroundColor: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE };
  obj.unreadIndicator = obj;
  obj = { position: "absolute", left: num + 16, top: 0, right: 8, height: num, transformOrigin: "0% 50%", display: "flex", flexDirection: "row", alignItems: "center" };
  obj.expandedChildrenWrapper = obj;
  return obj;
});
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, width, height) => {
  let obj = {};
  obj = { position: "relative", paddingTop: importDefault(689).modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingBottom: importDefault(689).modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingLeft: 12, height, width: width + closure_5.left + closure_5.right };
  obj.pressableWrapper = obj;
  obj = { position: "relative", width, height: width, overflow: "hidden", justifyContent: "center", alignItems: "center" };
  let str = "transparent";
  let str2 = "transparent";
  if (!arg1) {
    str2 = importDefault(689).colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  obj.backgroundColor = str2;
  obj.itemShape = obj;
  const obj1 = {};
  if (arg0) {
    if (!arg1) {
      str = importDefault(689).colors.BACKGROUND_SURFACE_HIGH;
    }
    let BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = importDefault(689).colors.BACKGROUND_BRAND;
  }
  obj1.backgroundColor = BACKGROUND_BRAND;
  obj.itemShapeSelected = obj1;
  return obj;
});
let closure_13 = { code: "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}" };
let closure_14 = { code: "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}" };
let closure_15 = { code: "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}" };
let result = require("GUILD_ITEM_SIZE").fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

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
  const selected = id.selected;
  const circle = id.circle;
  const hint = id.hint;
  let flag = id.draggable;
  ({ unread, children, externalChildren, expandedChildren, config, label } = id);
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
  ({ accessibilityActions, preventClipping, onAccessibilityAction } = id);
  if (preventClipping === undefined) {
    preventClipping = false;
  }
  const expanded = id.expanded;
  ({ zIndex, entering, exiting, layout } = id);
  if (zIndex === undefined) {
    zIndex = 0;
  }
  const sharedId = id.sharedId;
  let c13;
  let token;
  let c15;
  let token1;
  let c17;
  let closure_18;
  let c19;
  let tmp = dragState();
  c13 = tmp;
  let obj = id(circle[6]);
  token = obj.useToken(selected(circle[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp3 = zIndex(tmp);
  c15 = tmp3;
  const tmp4 = selected(circle[11])(config);
  let obj1 = id(circle[6]);
  token1 = obj1.useToken(selected(circle[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = id(circle[9]);
  class W {
    constructor() {
      obj = {};
      obj2 = id(circle[8]);
      if (circle) {
        tmp2 = c14;
        num = 2;
        result = c14 / 2;
      } else {
        result = c16;
      }
      obj.borderRadius = obj2.withSpring(result, styles, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: id(circle[8]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: styles };
  W.__closure = obj;
  W.__workletHash = 15930523896348;
  W.__initData = c15;
  const animatedStyle = obj2.useAnimatedStyle(W);
  const context = hint.useContext(id(circle[12]).HomeDrawerStateContext);
  let items = [isDragTarget, dragState, num, overState, zIndex, tmp];
  ({ guildsBarLabelDrawerStyle, guildsBarIconDrawerStyle, guildsBarUnreadDrawerStyle } = context);
  const items1 = [styles.pressableWrapper, isDragTarget, tmp3.draggedElement];
  const memo = hint.useMemo(() => {
    if (isDragTarget) {
      if ("dragging" === dragState) {
        let str2 = "hide";
      }
      const obj = {};
      if ("drag-target" === str2) {
        num = c13 + num;
      } else {
        num = 0;
        if ("hide" !== str2) {
          num = c13;
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
  const memo1 = hint.useMemo(() => {
    const items = [styles.pressableWrapper, , ];
    let draggedElement;
    if (isDragTarget) {
      draggedElement = _undefined.draggedElement;
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
  c17 = tmp10;
  const items2 = [tmp10, selected, sharedId, id];
  const memo2 = hint.useMemo(() => {
    if (!c17) {
      const obj = { selected, sharedId, id };
      return obj;
    }
  }, items2);
  const MobileHomeDrawerExperiment = id(circle[13]).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guilds_bar" }).enableHome;
  closure_18 = hint.useRef(undefined);
  const items3 = [expanded];
  const effect = hint.useEffect(() => {
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
  let tmp13 = null != accessibilityActions;
  if (tmp13) {
    tmp13 = accessibilityActions.length > 0;
  }
  c19 = tmp13;
  const items4 = [hint, flag, tmp13];
  const memo3 = hint.useMemo(() => {
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
    if (c19) {
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
  const tmp15 = selected(circle[10]);
  const tmp17 = num;
  if (enableHome) {
    tmp19 = guildsBarIconDrawerStyle;
  }
  obj1.style = tmp19;
  obj2 = {};
  const tmp18 = selected(circle[10]);
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
  const tmp21 = selected(circle[16]);
  const tmp24 = num;
  if (enableHome) {
    tmp26 = guildsBarUnreadDrawerStyle;
  }
  items7[1] = tmp26;
  obj3.style = items7;
  obj3.children = num(id(circle[7]).TransitionItem, { item: memo2, renderItem: c17 });
  items6[1] = tmp24(selected(circle[10]), obj3);
  const obj5 = { style: items8, cutouts };
  items8 = [styles.itemShape, animatedStyle];
  const obj6 = { pointerEvents: "none" };
  const items9 = [tmp3.selectedBackgroundOverlay, ];
  let itemShapeSelected = null;
  const obj4 = { item: memo2, renderItem: c17 };
  const tmp25 = selected(circle[10]);
  const tmp27 = overState;
  const tmp28 = num;
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items9[1] = itemShapeSelected;
  obj6.style = items9;
  const items10 = [tmp28(selected(circle[16]), obj6), !isDragTarget && children];
  obj5.children = items10;
  items6[2] = tmp27(id(circle[17]).ClipViewAnimated, obj5);
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
    tmp32Result = num(selected(circle[10]), obj7);
    const tmp32 = num;
    const tmp35 = selected(circle[10]);
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
  const token = require(3834) /* map */.useToken(importDefault(689).modules.mobile.GUILD_BAR_ITEM_SIZE);
  return callback4(flag, flag2, token, callback());
};
export { UnreadIndicator };
export { renderUnreadIndicator };
