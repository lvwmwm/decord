// Module ID: 16994
// Function ID: 16995
// Name: CustomizeBadgesSheet
// Dependencies: [19, 17, 8476, 1385, 8481, 1072, 5504, 1387, 21, 5243, 575, 5491, 9084, 16995, 9082, 1113, 7569, 7567, 5974, 7381, 15165, 5866, 10046, 7932, 7724, 1652, 5485, 5488, 15729, 1705, 9083, 5535, 5252, 10012, 1627, 504, 2171, 7852, 7871, 5834, 9513, 10891, 8480, 1252, 8486, 5952, 5503, 10509, 16996, 7354, 7847, 5507, 2]
// Exports: default

// Module 16994 (CustomizeBadgesSheet)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5504 */;
import Text_Text from "Text/Text" /* 5866 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 5974 */;
import Card_Card from "Card/Card" /* 7381 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 7567 */;
import native from "native" /* 7932 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8480 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8486 */;
import ContextMenu2 from "ContextMenu" /* 9082 */;
import ContextMenuState from "ContextMenuState" /* 9083 */;
import ContextMenuConstants from "ContextMenuConstants" /* 9084 */;
import openPremiumModalDefault from "openPremiumModal" /* 9513 */;
import BadgeUtils from "BadgeUtils" /* 10046 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10891 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 15165 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 15729 */;
import BadgeGrid from "BadgeGrid" /* 16995 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8476 */;
import UserStore from "UserStore" /* 1385 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8481 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let gesture, set, set2;

let Platform;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_4;
let metroImportAll;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let tmp7;
let tmp8;
let tmp9;
let unpackModuleId;
function BadgeVisibilityMenu(badge) {
  let EyeSlashIcon;
  let children;
  let index;
  let items;
  let str;
  badge = badge.badge;
  const onSetHidden = badge.onSetHidden;
  let flag = badge.hidden;
  ({ index, children } = badge);
  if (flag == null) {
    flag = false;
  }
  const ContextMenu = ContextMenu2.ContextMenu;
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  const obj = {
    label: string(flag ? t.RXOPc3 : t.xSWJPo),
    trailingIndicator: EyeSlashIcon,
    action() {
      return onSetHidden(badge, !flag);
    }
  };
  const tmp = gesture;
  if (flag) {
    EyeSlashIcon = tmp2(7569).EyeIcon;
  } else {
    EyeSlashIcon = tmp2(7567).EyeSlashIcon;
  }
  const obj2 = { items, align: str, disableGesture: true, triggerOnLongPress: true, children };
  items = [obj];
  const result = index % tmp2(16995).BADGE_GRID_COLUMNS;
  str = "right";
  if (0 !== result) {
    let str2 = "above";
    if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
      str2 = "left";
    }
    str = str2;
  }
  return tmp(ContextMenu, obj2);
}
function BadgeTileContent(badge) {
  let items;
  let items1;
  let tmp2;
  badge = badge.badge;
  const alwaysVisible = badge.alwaysVisible;
  const tmp = closure_18();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  if (alwaysVisible) {
    const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
    tmp2 = gesture(CircleInformationIcon, obj2);
  } else {
    tmp2 = null;
    if (flag) {
      const obj = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
      const EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
      tmp2 = gesture(EyeSlashIcon, obj);
    }
  }
  const obj3 = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: items1 };
  const Card = Card_Card.Card;
  const obj4 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: items };
  items = [tmp.icon, flag && tmp.iconHidden];
  const tmp15 = BadgeCatalogIconDefault;
  items1 = [gesture(tmp15, obj4), , ];
  let str = "text-default";
  const Text = Text_Text.Text;
  const tmp11 = closure_15;
  if (flag) {
    str = "text-muted";
  }
  const obj5 = { variant: "body-xs/medium", color: str, lineClamp: 1, style: tmp.name, "aria-hidden": true, children: badge.name };
  items1[1] = gesture(Text, obj5);
  let tmp14Result = null != tmp2;
  if (tmp14Result) {
    const obj6 = { style: tmp.indicator, "aria-hidden": true, children: tmp2 };
    tmp14Result = tmp14(React3, obj6);
  }
  items1[2] = tmp14Result;
  return tmp11(Card, obj3);
}
({ Platform, View: closure_4 } = react_native);
({ AnalyticEvents: metroImportAll, AnalyticsObjects: c9, AnalyticsPages: c10, AnalyticsSections: unpackModuleId } = Constants);
const constants3 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { gridInset: obj2, grid: obj3, upsell: obj4, upsellCard: obj5, upsellContent: obj6, upsellCta: obj7, upsellText: { textAlign: "center" }, message: obj8, messageText: { textAlign: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
obj4 = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj6 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj7 = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj8 = { alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
let closure_16 = createStyles(obj);
createStyles = createStyles_mod;
let obj9 = { position: { position: "absolute" }, fill: { flex: 1 }, card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 }, icon: obj10, name: obj11, indicator: size, iconHidden: { opacity: 0.3 } };
obj10 = { marginBottom: nativeDefault.space.PX_12 };
const createStyles2 = createStyles.createStyles;
obj11 = { position: "absolute", start: 0, end: 0, bottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, textAlign: "center" };
size = { position: "absolute", top: nativeDefault.space.PX_8, end: nativeDefault.space.PX_8, width: 32, height: 32, alignItems: "flex-end", justifyContent: "flex-start" };
let closure_18 = createStyles2(obj9);
let items = [{ code: "(function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){let[BADGE_GRID_COLUMNS,BADGE_GRID_GAP]=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};})" }, BadgeGrid.BADGE_GRID_COLUMNS, BadgeGrid.BADGE_GRID_GAP];
let c0;
let c1;
[tmp7, tmp8, tmp9] = items;
function getSlotOffset(arg0, arg1) {
  const point = { x: arg0 % c0 * (arg1 + c1), y: Math.floor(arg0 / c0) * (arg1 + c1) };
  return point;
}
let items1 = [tmp8, tmp9];
getSlotOffset.__closure = items1;
getSlotOffset.__workletHash = 10148916703645;
getSlotOffset.__initData = tmp7;
let closure_21 = react.memo(function FixedBadgeTile(badge) {
  let alwaysVisible;
  let tileSize;
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const onSetHidden = badge.onSetHidden;
  let closure_4;
  let items1;
  if (typeof getSlotOffset === "function") {
    function renderTile(ref) {
      let accessibilityActions;
      let fn;
      let formatToPlainString;
      let hidden;
      let obj2;
      let prop;
      let t;
      let closure_0 = ref;
      ref = undefined;
      const PressableScale = native.PressableScale;
      if (ref != null) {
        ref = ref.ref;
      }
      let obj = { ref, accessibilityLabel: formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj2), accessibilityActions, onAccessibilityAction: prop, onPress, onLongPress: fn, delayLongPress: ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS, style: items1, children: tmp(BadgeTileContent, { badge, alwaysVisible }) };
      const intl = tmp2(1113).intl;
      formatToPlainString = intl.formatToPlainString;
      hidden = badge.hidden;
      t = tmp2(1113).t;
      let stringResult;
      obj2 = { badgeName: badge.name, position: index + 1 };
      if (alwaysVisible) {
        const intl2 = tmp2(1113).intl;
        const string = intl2.string;
        const tmp2Result = BadgeUtils;
        stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp8));
      }
      const obj3 = { accessibilityRole: "button", accessibilityHint: stringResult };
      const merged = Object.assign(obj3);
      accessibilityActions = undefined;
      if (ref != null) {
        accessibilityActions = ref.accessibilityActions;
      }
      prop = undefined;
      if (ref != null) {
        prop = ref.onAccessibilityAction;
      }
      if (alwaysVisible) {
        onPress = closure_4;
      } else if (ref != null) {
        onPress = ref.onPress;
      }
      fn = undefined;
      if (null != ref) {
        fn = (arg0) => {
          const obj = badge(alwaysVisible[11]);
          const result = obj.triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
          onLongPress = onLongPress.onLongPress;
          if (onLongPress != null) {
            onLongPress(arg0);
          }
        };
      }
      return gesture(PressableScale, obj);
    }
    const tmp2 = closure_147_0;
    const _Math = Math;
    let result = index % closure_147_0 * (tileSize + closure_147_1);
    const items = [badge, onPress];
    const result1 = Math.floor(index / closure_147_0) * (tileSize + closure_147_1);
    closure_4 = onPress.useCallback(() => {
      onPress(badge);
    }, items);
    items1 = [tmp.position, ];
    size = { left: result, top: result1, width: tileSize, height: tileSize };
    items1[1] = size;
    if (!alwaysVisible) {
      let renderTileResult;
      const tmp8 = null;
      if (null != onSetHidden) {
        let obj = { badge, index, onSetHidden, children: renderTile };
        renderTileResult = closure_14(BadgeVisibilityMenu, obj);
      }
      return renderTileResult;
    }
    renderTileResult = renderTile(null);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_22 = { code: "(function CustomizeBadgesSheetTsx2(){let[orderShared,badgeId,getSlotOffset,slotOffset,tileSize]=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);})" };
let closure_23 = { code: "(function CustomizeBadgesSheetTsx3(target,previousTarget){let[isThisTileDragging,positionX,withTiming,timingStandard,positionY]=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}})" };
let closure_24 = { code: "(function CustomizeBadgesSheetTsx4(){let[orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}})" };
let closure_25 = { code: "(function CustomizeBadgesSheetTsx5(){let[scrollOffset]=this.__closure;return scrollOffset.get();})" };
let closure_26 = { code: "(function CustomizeBadgesSheetTsx6(offset,previousOffset){let[isThisTileDragging,positionY,reslot]=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();})" };
let closure_27 = { code: "(function handleStart_CustomizeBadgesSheetTsx7(){let[isAnyDragActive,isThisTileDragging,scheduleOnRN,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}scheduleOnRN(hideContextMenu);isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_START);})" };
let closure_28 = { code: "(function handleChange_CustomizeBadgesSheetTsx8(event){let[isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp]=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport=dragViewport.get();if(viewport==null){return;}const fromTop=event.absoluteY-viewport.pageY;const fromBottom=viewport.pageY+viewport.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}})" };
let closure_29 = { code: "(function handleFinalize_CustomizeBadgesSheetTsx9(){let[isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder]=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order=orderShared.get();const slot=order.indexOf(badgeId);if(slot>=0){const target=getSlotOffset(slot+slotOffset,tileSize);positionX.set(withTiming(target.x,timingStandard));positionY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.DRAG_AND_DROP_END);scheduleOnRN(onCommitOrder,order);})" };
let closure_30 = { code: "(function CustomizeBadgesSheetTsx10(){let[handleStart]=this.__closure;handleStart();})" };
let closure_31 = { code: "(function CustomizeBadgesSheetTsx11(event){let[handleChange]=this.__closure;handleChange(event);})" };
let closure_32 = { code: "(function CustomizeBadgesSheetTsx12(){let[handleFinalize]=this.__closure;handleFinalize();})" };
let closure_33 = { code: "(function CustomizeBadgesSheetTsx13(){let[isThisTileDragging,dragOrigin,positionX,positionY,scale]=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};})" };
let closure_34 = react.memo(function DraggableBadgeTile(badge) {
  let intl;
  let intl2;
  let isFirst;
  let isLast;
  let onSetHidden;
  let scrollOffset;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp50;
  let tmp51;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  badge = badge.badge;
  let index = badge.index;
  const tileSize = badge.tileSize;
  const slotOffset = badge.slotOffset;
  const alwaysVisible = badge.alwaysVisible;
  const orderShared = badge.orderShared;
  const isDragActive = badge.isDragActive;
  const scrollRef = badge.scrollRef;
  const autoScrollSpeed = badge.autoScrollSpeed;
  const onCommitOrder = badge.onCommitOrder;
  let onPress = badge.onPress;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let callback;
  gesture = undefined;
  closure_22 = undefined;
  closure_23 = undefined;
  let items15;
  ({ isFirst, isLast, scrollOffset, onSetHidden } = badge);
  const position = sharedValue4();
  const badge_id = badge.badge_id;
  let tmp = tileSize;
  let closure_13 = index(tileSize[24])(() => {
    onPress(badge);
  });
  let tmp2 = badge;
  let obj = badge(tileSize[25]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = badge(tileSize[25]);
  const sharedValue1 = obj2.useSharedValue(null);
  if (typeof sharedValue5 === "function") {
    let renderTileResult;
    let point = { x: index % badge * (tileSize + index), y: Math.floor(index / badge) * (tileSize + index) };
    const tmp6 = badge;
    const tmp7 = index;
    let tmp8 = globalThis;
    const _Math = Math;
    let tmp2Result = tmp2(tmp[25]);
    sharedValue2 = tmp2Result.useSharedValue(point.x);
    const tmp2Result7 = tmp2(tmp[25]);
    sharedValue3 = tmp2Result7.useSharedValue(point.y);
    const tmp2Result8 = tmp2(tmp[25]);
    sharedValue4 = tmp2Result8.useSharedValue(point);
    let num = 1;
    const tmp2Result9 = tmp2(tmp[25]);
    sharedValue5 = tmp2Result9.useSharedValue(1);
    let tmp14 = closure_22;
    let items = [closure_22, orderShared, badge_id, tmp5, slotOffset, tileSize];
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    const tmp15 = items;
    [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
    const tmp2Result10 = tmp2(tmp[25]);
    class CustomizeBadgesSheetTsx2 {
      constructor() {
        const value = _undefined.get();
        index = value.indexOf(c1);
        let tmp2 = null;
        if (index >= 0) {
          tmp2 = _undefined2(index + c3, c4);
        }
        return tmp2;
      }
    }
    let items1 = [tmp17, tmp18, tmp19, tmp20, tmp21];
    CustomizeBadgesSheetTsx2.__closure = items1;
    let num2 = 10350129315381;
    CustomizeBadgesSheetTsx2.__workletHash = 10350129315381;
    CustomizeBadgesSheetTsx2.__initData = tmp16;
    const tmp22 = closure_23;
    let items2 = [closure_23, sharedValue, sharedValue2, , , ];
    const useAnimatedReaction = tmp2Result10.useAnimatedReaction;
    items2[3] = tmp2(tmp[26]).withTiming;
    items2[4] = tmp2(tmp[27]).timingStandard;
    items2[5] = sharedValue3;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    const tmp23 = items2;
    [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items2;
    class CustomizeBadgesSheetTsx3 {
      constructor(arg0, arg1) {
        const value = null == arg0 || _undefined.get();
        if (!value) {
          let x1;
          const x = arg0.x;
          if (arg1 != null) {
            x1 = arg1.x;
          }
          if (x !== x1) {
            const result = _undefined2.set(_undefined3(arg0.x, c3));
          }
          let y1;
          const y = arg0.y;
          if (arg1 != null) {
            y1 = arg1.y;
          }
          if (y !== y1) {
            const result1 = _undefined4.set(_undefined3(arg0.y, c3));
          }
        }
      }
    }
    let items3 = [tmp25, tmp26, tmp27, tmp28, tmp29];
    CustomizeBadgesSheetTsx3.__closure = items3;
    CustomizeBadgesSheetTsx3.__workletHash = 7747025592280;
    CustomizeBadgesSheetTsx3.__initData = tmp24;
    const animatedReaction = useAnimatedReaction(CustomizeBadgesSheetTsx2, CustomizeBadgesSheetTsx3);
    const tmp31 = items15;
    let items4 = [items15, orderShared, tileSize, , , , , , , , , , , ];
    const useCallback = slotOffset.useCallback;
    items4[3] = tmp2(tmp[13]).BADGE_GRID_GAP;
    items4[4] = tmp2(tmp[25]).clamp;
    items4[5] = sharedValue2;
    items4[6] = tmp2(tmp[13]).BADGE_GRID_COLUMNS;
    items4[7] = sharedValue3;
    items4[8] = slotOffset;
    items4[9] = tmp2(tmp[28]).moveBadgeInDisplayOrder;
    items4[10] = badge_id;
    items4[11] = tmp2(tmp[29]).scheduleOnRN;
    items4[12] = tmp2(tmp[11]).triggerHapticFeedback;
    items4[13] = tmp2(tmp[11]).HapticFeedbackTypes;
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
    let c12;
    const tmp32 = items4;
    [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items4;
    class CustomizeBadgesSheetTsx4 {
      constructor() {
        const value = _undefined.get();
        const sum = c1 + c2;
        const tmp2 = _undefined2(Math.floor((_undefined3.get() + c1 / 2) / sum), 0, c5 - 1);
        const tmp3 = _undefined2(Math.max(Math.floor((_undefined4.get() + c1 / 2) / sum), 0) * c5 + tmp2 - c7, 0, value.length - 1);
        const tmp4 = _undefined5(value, value.indexOf(c9), tmp3);
        const obj = _undefined;
        if (tmp4 !== value) {
          const result = obj.set(tmp4);
          _undefined6(c11, _undefined7.DRAG_AND_DROP_MOVE);
        }
      }
    }
    let items5 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46];
    CustomizeBadgesSheetTsx4.__closure = items5;
    CustomizeBadgesSheetTsx4.__workletHash = 12359820987198;
    CustomizeBadgesSheetTsx4.__initData = tmp33;
    let items6 = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
    callback = useCallback(CustomizeBadgesSheetTsx4, items6);
    const tmp48 = closure_25;
    let items7 = [closure_25, scrollOffset];
    c0 = undefined;
    const tmp49 = items7;
    [tmp50, tmp51] = items7;
    const tmp2Result11 = tmp2(tmp[25]);
    class CustomizeBadgesSheetTsx5 {
      constructor() {
        return _undefined.get();
      }
    }
    let items8 = [tmp51];
    CustomizeBadgesSheetTsx5.__closure = items8;
    CustomizeBadgesSheetTsx5.__workletHash = 9461720859225;
    CustomizeBadgesSheetTsx5.__initData = tmp50;
    const tmp52 = closure_26;
    let items9 = [closure_26, sharedValue, sharedValue3, callback];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    const tmp53 = items9;
    [tmp54, tmp55, tmp56, tmp57] = items9;
    class CustomizeBadgesSheetTsx6 {
      constructor(arg0, arg1) {
        const value = null != arg1 && _undefined.get();
        if (value) {
          const result = _undefined2.set(_undefined2.get() + (arg0 - arg1));
          _undefined3();
        }
      }
    }
    let items10 = [tmp55, tmp56, tmp57];
    CustomizeBadgesSheetTsx6.__closure = items10;
    CustomizeBadgesSheetTsx6.__workletHash = 1713421095914;
    CustomizeBadgesSheetTsx6.__initData = tmp54;
    const animatedReaction1 = tmp2Result11.useAnimatedReaction(CustomizeBadgesSheetTsx5, CustomizeBadgesSheetTsx6);
    let items11 = [callback, scrollRef, sharedValue1, autoScrollSpeed, badge_id, tileSize, slotOffset, orderShared, isDragActive, onCommitOrder, sharedValue, sharedValue5, sharedValue2, sharedValue3, sharedValue4];
    gesture = obj7.useMemo(() => {
      let tmp10;
      let tmp11;
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
      let tmp22;
      let tmp23;
      let tmp24;
      let tmp25;
      let tmp27;
      let tmp28;
      let tmp29;
      let tmp30;
      let tmp31;
      let tmp32;
      let tmp33;
      let tmp34;
      let tmp35;
      let tmp36;
      let tmp37;
      let tmp38;
      let tmp39;
      let tmp40;
      let tmp41;
      let tmp42;
      let tmp43;
      let tmp44;
      let tmp45;
      let tmp46;
      let tmp47;
      let tmp48;
      let tmp49;
      let tmp50;
      let tmp51;
      let tmp52;
      let tmp53;
      let tmp54;
      let tmp55;
      let tmp56;
      let tmp57;
      let tmp58;
      let tmp59;
      let tmp60;
      let tmp9;
      const items = [closure_27, isDragActive, , , , , , , , , , , , , , , ];
      let tmp2 = sharedValue;
      items[2] = sharedValue;
      items[3] = _mod1705.scheduleOnRN;
      items[4] = ContextMenuState.hideContextMenu;
      items[5] = sharedValue4;
      items[6] = sharedValue2;
      items[7] = sharedValue3;
      items[8] = _mod1652.measure;
      items[9] = scrollRef;
      items[10] = sharedValue1;
      items[11] = sharedValue5;
      items[12] = timing_timing.withTiming;
      items[13] = 1.05;
      items[14] = timingPresets.timingStandard;
      items[15] = HapticUtils.triggerHapticFeedback;
      items[16] = HapticUtils.HapticFeedbackTypes;
      [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items;
      function handleStart() {
        const obj = _undefined;
        if (!_undefined.get()) {
          _undefined3(c3);
          const result = obj.set(true);
          const result1 = _undefined2.set(true);
          const point = { x: _undefined5.get(), y: _undefined6.get() };
          set = _undefined4.set;
          const result2 = set(point);
          const tmp14 = _undefined7(c8);
          let tmp16 = null;
          set2 = _undefined8.set;
          const tmp2 = _undefined3;
          if (null != tmp14) {
            const obj2 = { pageY: null, height: null };
            ({ pageY: obj3.pageY, height: obj3.height } = tmp14);
            tmp16 = obj2;
          }
          set2(tmp16);
          const result3 = _undefined9.set(_undefined10(c12, c13));
          tmp2(c14, _undefined11.DRAG_AND_DROP_START);
        }
      }
      const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
      handleStart.__closure = items1;
      handleStart.__workletHash = 76261641207;
      handleStart.__initData = tmp9;
      const items2 = [closure_28, tmp2, sharedValue2, tmp6, callback, tmp7, 80, autoScrollSpeed, ];
      items2[8] = _mod1652.clamp;
      [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items2;
      function handleChange(changeX) {
        if (_undefined.get()) {
          const result = _undefined2.set(_undefined2.get() + changeX.changeX);
          const result1 = _undefined3.set(_undefined3.get() + changeX.changeY);
          _undefined4();
          const value = _undefined5.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < c5) {
              const result2 = _undefined6.set(_undefined7(diff, 0, tmp21) / tmp21 - 1);
            } else if (diff1 < c5) {
              const result3 = _undefined6.set(1 - _undefined7(diff1, 0, tmp21) / tmp21);
            } else {
              const result4 = _undefined6.set(0);
            }
          }
        }
      }
      const items3 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
      handleChange.__closure = items3;
      handleChange.__workletHash = 3274388629829;
      handleChange.__initData = tmp27;
      const items4 = [closure_29, tmp2, autoScrollSpeed, tmp7, orderShared, badge_id, getSlotOffset, slotOffset, tileSize, sharedValue2, tmp3(5485).withTiming, tmp3(5488).timingStandard, tmp6, sharedValue5, isDragActive, tmp3(1705).scheduleOnRN, tmp3(5491).triggerHapticFeedback, tmp3(5491).HapticFeedbackTypes, onCommitOrder];
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let c10;
      let c11;
      let c12;
      let c13;
      let c14;
      let c15;
      let c16;
      let c17;
      [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54] = items4;
      function handleFinalize() {
        const obj = _undefined;
        if (_undefined.get()) {
          const result = _undefined2.set(0);
          const result1 = _undefined3.set(null);
          const value = _undefined4.get();
          index = value.indexOf(c4);
          if (index >= 0) {
            const point = _undefined5(index + c6, c7);
            const result2 = _undefined6.set(_undefined7(point.x, c10));
            const result3 = _undefined8.set(_undefined7(point.y, c10));
          }
          const result4 = _undefined9.set(_undefined7(1, c10));
          const result5 = obj.set(false);
          const result6 = _undefined10.set(false);
          _undefined11(c15, _undefined12.DRAG_AND_DROP_END);
          _undefined11(c17, value);
        }
      }
      const items5 = [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54];
      handleFinalize.__closure = items5;
      handleFinalize.__workletHash = 3320936971344;
      handleFinalize.__initData = tmp36;
      const Gesture = tmp3(5535).Gesture;
      const items6 = [closure_30, handleStart];
      let c0;
      [tmp55, tmp56] = items6;
      const PanResult = Gesture.Pan();
      const minDistanceResult = PanResult.minDistance(8);
      class CustomizeBadgesSheetTsx10 {
        constructor() {
          _undefined();
        }
      }
      const items7 = [tmp56];
      CustomizeBadgesSheetTsx10.__closure = items7;
      CustomizeBadgesSheetTsx10.__workletHash = 13419120968383;
      CustomizeBadgesSheetTsx10.__initData = tmp55;
      const items8 = [closure_31, handleChange];
      c0 = undefined;
      [tmp57, tmp58] = items8;
      const onStartResult = minDistanceResult.onStart(CustomizeBadgesSheetTsx10);
      class CustomizeBadgesSheetTsx11 {
        constructor(arg0) {
          _undefined(arg0);
        }
      }
      const items9 = [tmp58];
      CustomizeBadgesSheetTsx11.__closure = items9;
      CustomizeBadgesSheetTsx11.__workletHash = 13081817689214;
      CustomizeBadgesSheetTsx11.__initData = tmp57;
      const items10 = [closure_32, handleFinalize];
      c0 = undefined;
      [tmp59, tmp60] = items10;
      const onChangeResult = onStartResult.onChange(CustomizeBadgesSheetTsx11);
      class CustomizeBadgesSheetTsx12 {
        constructor() {
          _undefined();
        }
      }
      const items11 = [tmp60];
      CustomizeBadgesSheetTsx12.__closure = items11;
      CustomizeBadgesSheetTsx12.__workletHash = 2105939311037;
      CustomizeBadgesSheetTsx12.__initData = tmp59;
      return onChangeResult.onFinalize(CustomizeBadgesSheetTsx12);
    }, items11);
    const tmp59 = closure_33;
    const items12 = [closure_33, sharedValue, sharedValue4, sharedValue2, sharedValue3, sharedValue5];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    const tmp60 = items12;
    [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66] = items12;
    const tmp2Result12 = tmp2(tmp[25]);
    class CustomizeBadgesSheetTsx13 {
      constructor() {
        let items1;
        let x;
        let y;
        const value = _undefined.get();
        const point = _undefined2.get();
        let num = 0;
        if (value) {
          num = 10;
        }
        const rect = { zIndex: num, left: x, top: y, transform: items1 };
        if (value) {
          x = point.x;
        } else {
          x = _undefined3.get();
        }
        if (value) {
          y = point.y;
        } else {
          y = _undefined4.get();
        }
        if (value) {
          const items = [{ translateX: _undefined3.get() - point.x }, , ];
          const obj = { translateX: _undefined3.get() - point.x };
          items[1] = { translateY: _undefined4.get() - point.y };
          const obj2 = { translateY: _undefined4.get() - point.y };
          items[2] = { scale: _undefined5.get() };
          items1 = items;
          const obj3 = { scale: _undefined5.get() };
        } else {
          items1 = [{ scale: _undefined5.get() }];
          const obj4 = { scale: _undefined5.get() };
        }
        return rect;
      }
    }
    const items13 = [tmp62, tmp63, tmp64, tmp65, tmp66];
    CustomizeBadgesSheetTsx13.__closure = items13;
    CustomizeBadgesSheetTsx13.__workletHash = 12364432991215;
    CustomizeBadgesSheetTsx13.__initData = tmp61;
    closure_22 = tmp2Result12.useAnimatedStyle(CustomizeBadgesSheetTsx13);
    const items14 = [badge_id, orderShared, onCommitOrder, slotOffset];
    closure_23 = obj7.useCallback((nativeEvent) => {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("moveup" === actionName) {
        const value = orderShared.get();
        index = value.indexOf(badge_id);
        let num2 = 1;
        const clamp = _mod1652.clamp;
        _mod1652;
        const obj = orderShared;
        if ("moveup" === actionName) {
          num2 = -1;
        }
        const clampResult = clamp(index + num2, 0, value.length - 1);
        const tmp4Result = PendingBadgeSettings;
        const result = tmp4Result.moveBadgeInDisplayOrder(value, index, clampResult);
        if (result !== value) {
          const result1 = obj.set(result);
          onCommitOrder(result);
          const AccessibilityAnnouncer = tmp4(5252).AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = tmp4(1113).intl;
          const obj2 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
          announce(intl.formatToPlainString(intl7.t.qPHr0x, obj2));
        }
      }
    }, items14);
    items15 = [];
    if (!isFirst) {
      let obj3 = { name: "moveup", label: intl.string(tmp2(tmp[15]).t.eR2XSh) };
      const push = items15.push;
      intl = tmp2(tmp[15]).intl;
      push(obj3);
    }
    if (!isLast) {
      let obj4 = { name: "movedown", label: intl2.string(tmp2(tmp[15]).t.wWi0DL) };
      const push2 = items15.push;
      intl2 = tmp2(tmp[15]).intl;
      push2(obj4);
    }
    function renderTile(ref) {
      let PressableScale;
      let View;
      let fn;
      let formatToPlainString;
      let hidden;
      let items;
      let items1;
      let obj2;
      let obj3;
      let obj4;
      let t;
      badge = ref;
      const tmp = sharedValue;
      let obj = { gesture, children: tmp(View, obj2) };
      const GestureDetector = badge(tileSize[31]).GestureDetector;
      obj2 = { style: items, children: tmp(PressableScale, obj3) };
      items = [position.position, , ];
      size = { width: tileSize, height: tileSize };
      items[1] = size;
      items[2] = closure_22;
      View = index(tileSize[25]).View;
      ref = undefined;
      PressableScale = badge(tileSize[23]).PressableScale;
      const tmp4 = position;
      if (ref != null) {
        ref = ref.ref;
      }
      obj3 = {
        ref,
        accessible: true,
        accessibilityLabel: formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj4),
        accessibilityActions: items1,
        onAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if ("moveup" !== actionName) {
            if ("movedown" !== actionName) {
              if (ref != null) {
                const onAccessibilityAction = tmp.onAccessibilityAction;
                if (onAccessibilityAction != null) {
                  const result = onAccessibilityAction(nativeEvent);
                }
              }
            }
          }
          closure_23(nativeEvent);
        },
        onPress,
        onLongPress: fn,
        delayLongPress: badge(tileSize[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS,
        style: tmp4.fill,
        children: tmp(callback, { badge, alwaysVisible })
      };
      const intl = tmp2(tmp3[15]).intl;
      formatToPlainString = intl.formatToPlainString;
      hidden = badge.hidden;
      t = tmp2(tmp3[15]).t;
      let stringResult;
      obj4 = { badgeName: badge.name, position: index + 1 };
      if (alwaysVisible) {
        const intl2 = tmp2(tmp3[15]).intl;
        const string = intl2.string;
        const tmp2Result = badge(tileSize[22]);
        stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp9));
      }
      const obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
      const merged = Object.assign(obj5);
      let accessibilityActions;
      if (ref != null) {
        accessibilityActions = ref.accessibilityActions;
      }
      if (accessibilityActions == null) {
        accessibilityActions = [];
      }
      items1 = [...items15];
      if (alwaysVisible) {
        onPress = closure_13;
      } else if (ref != null) {
        onPress = ref.onPress;
      }
      fn = undefined;
      if (null != ref) {
        fn = (arg0) => {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
          const onLongPress = ref.onLongPress;
          if (onLongPress != null) {
            onLongPress(arg0);
          }
        };
      }
      return tmp(GestureDetector, obj);
    }
    if (alwaysVisible) {
      renderTileResult = renderTile(null);
    } else {
      let obj5 = { badge, index, onSetHidden, children: renderTile };
      renderTileResult = sharedValue(sharedValue3, obj5);
    }
    return renderTileResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_35 = { code: "(function CustomizeBadgesSheetTsx14({timeSincePreviousFrame:timeSincePreviousFrame}){let[autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset]=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);})" };
let closure_36 = { code: "(function CustomizeBadgesSheetTsx15(){let[autoScrollSpeed]=this.__closure;return autoScrollSpeed.get()!==0;})" };
let closure_37 = { code: "(function CustomizeBadgesSheetTsx16(isScrolling,wasScrolling){let[autoScrollElapsed,scheduleOnRN,setAutoScrollerActive]=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);scheduleOnRN(setAutoScrollerActive,isScrolling);})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/CustomizeBadgesSheet.tsx");

export default function CustomizeBadgesSheet(analyticsLocations) {
  let BottomSheetTitleHeader;
  let Text;
  let Text2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items22;
  let items23;
  let items24;
  let obj11;
  let obj14;
  let obj15;
  let obj7;
  let string;
  let t;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp53Result;
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  let stateFromStores;
  let stateFromStores1;
  analyticsLocations = undefined;
  let context;
  let stateFromStoresArray;
  let hasCatalog;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  let memo;
  set = undefined;
  let fixedBadges;
  let reorderableBadges;
  let hiddenBadges;
  let memo2;
  let sharedValue;
  let onCommitOrder;
  let sharedValue1;
  closure_18 = undefined;
  let onPress;
  let closure_20;
  let onSetHidden;
  let badgeTileSize;
  let animatedRef;
  let scrollOffset;
  let sharedValue2;
  let frameCallback;
  let tmp = onCommitOrder();
  let tmp2 = stateFromStores;
  let obj = stateFromStores(stateFromStores1[33]);
  const tenureBadgeHideable = obj.useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  const sum = Math.max(stateFromStores(stateFromStores1[34])().bottom, reorderableBadges) + 4;
  let obj2 = tenureBadgeHideable(stateFromStores1[35]);
  const items = [hasCatalog];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = hasCatalog.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj3 = tenureBadgeHideable(stateFromStores1[35]);
  const items1 = [hasCatalog];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const obj = stateFromStores(stateFromStores1[36]);
    return obj.canUsePremiumProfileCustomization(hasCatalog.getCurrentUser());
  });
  const tmp8 = stateFromStores(stateFromStores1[37]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = tmp8(analyticsLocations1, tmp2(tmp3[38]).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  context = analyticsLocations.useContext(tmp2(tmp3[39]));
  const items2 = [context, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    let obj3;
    const obj = context;
    if (context != null) {
      obj.close();
    }
    const obj2 = { analyticsLocation: obj3, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj3 = { page: authStore.USER_SETTINGS, section: unpackModuleId.USER_PROFILE, object: memo.BUTTON_CTA };
    const tmp2 = openPremiumModalDefault;
    tmp2(obj2);
  }, items2);
  const items3 = [pendingBadgeDisplayOrder];
  const items4 = [stateFromStores];
  const tmp5Result = tenureBadgeHideable(stateFromStores1[35]);
  stateFromStoresArray = tmp5Result.useStateFromStoresArray(items3, () => BadgeDirectoryStore.getBadges(stateFromStores), items4);
  const items5 = [pendingBadgeDisplayOrder];
  const items6 = [stateFromStores];
  const tmp5Result13 = tenureBadgeHideable(stateFromStores1[35]);
  const stateFromStoresObject = tmp5Result13.useStateFromStoresObject(items5, () => {
    const hasCatalogForResult = null != stateFromStores && BadgeDirectoryStore.hasCatalogFor(tmp);
    const obj = { hasCatalog: hasCatalogForResult, hasCatalogError: BadgeDirectoryStore.hasCatalogFetchErrorFor(stateFromStores) };
    return obj;
  }, items6);
  hasCatalog = stateFromStoresObject.hasCatalog;
  const hasCatalogError = stateFromStoresObject.hasCatalogError;
  const effect = analyticsLocations.useEffect(() => {
    const obj = UserProfileAnalyticsUtils;
    const obj2 = { action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations };
    const result = obj.trackUserProfileAction(obj2);
  }, []);
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect1 = analyticsLocations.useEffect(() => {
    let obj3;
    const tmp = !stateFromStores1 && hasCatalog;
    if (tmp) {
      const obj2 = { type: PremiumUpsellTypes.BADGE_REORDERING_UPSELL, location: obj3, location_stack: analyticsLocations };
      obj3 = { page: authStore.USER_SETTINGS, section: unpackModuleId.USER_PROFILE };
      const obj = AnalyticsUtilsDefault;
      obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      const tmp2 = BadgeDirectoryStore.hasCatalogFor(stateFromStores) && !BadgeDirectoryStore.isCatalogStaleFor(stateFromStores);
      if (!tmp2) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp);
      }
    }
  }, items8);
  const items9 = [stateFromStoresArray];
  const tmp5Result14 = tenureBadgeHideable(stateFromStores1[35]);
  const stateFromStoresObject1 = tmp5Result14.useStateFromStoresObject(items9, () => {
    const pendingChanges = stateFromStoresArray.getPendingChanges();
    return { pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder, pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = analyticsLocations.useMemo(() => {
    const obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettings(stateFromStoresArray, obj2);
  }, items10);
  const items11 = [tenureBadgeHideable];
  set = analyticsLocations.useMemo(() => {
    const obj = BadgeUtils;
    const obj2 = { tenureBadgeHideable };
    return obj.getUnhideableBadgeIds(obj2);
  }, items11);
  const items12 = [memo];
  const memo1 = analyticsLocations.useMemo(() => {
    const obj = BadgeUtils;
    return obj.groupCustomizableBadges(memo);
  }, items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = analyticsLocations.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp5Result15 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue = tmp5Result15.useSharedValue(memo2);
  onCommitOrder = tmp2(tmp3[24])((arr) => {
    const obj = tenureBadgeHideable(stateFromStores1[28]);
    const result = obj.setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result16 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue1 = tmp5Result16.useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect3 = analyticsLocations.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  closure_18 = tmp2(tmp3[24])((badgeId) => {
    const obj = PendingBadgeSettings;
    const obj2 = { badgeId: badgeId.badge_id, hidden: false, reorderableBadgeIds: memo2, hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id), canReorder: stateFromStores1 };
    const result = obj.setPendingBadgeVisibility(obj2);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl7.intl;
    const obj3 = { badgeName: badgeId.name };
    announce(intl.formatToPlainString(intl7.t.mehuPg, obj3));
  });
  onPress = tmp2(tmp3[24])((badge_id) => {
    let obj2;
    let string;
    let closure_0 = badge_id;
    if (hiddenBadges.some((badge_id) => badge_id.badge_id === badge_id.badge_id)) {
      closure_18(badge_id);
    } else if (set.has(badge_id.badge_id)) {
      const _HermesInternal = HermesInternal;
      const open = ToastActionCreatorsDefault.open;
      const obj = { text: string(obj2.getAlwaysVisibleCopy(badge_id.badge_id)) };
      ToastActionCreatorsDefault;
      const combined = "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id;
      const intl = intl7.intl;
      string = intl.string;
      obj2 = BadgeUtils;
      open(combined, obj);
    }
  });
  closure_20 = tmp2(tmp3[24])((badgeId) => {
    const obj = PendingBadgeSettings;
    const obj2 = { badgeId: badgeId.badge_id, hidden: true, reorderableBadgeIds: memo2, hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id), canReorder: stateFromStores1 };
    const result = obj.setPendingBadgeVisibility(obj2);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl7.intl;
    announce(intl.formatToPlainString(intl7.t.q3t0Ht, { count: 1 }));
  });
  onSetHidden = tmp2(tmp3[24])((arg0, arg1) => {
    const tmp = arg1;
    if (tmp) {
      closure_20(arg0);
    } else {
      closure_18(arg0);
    }
  });
  const tmp5Result17 = tenureBadgeHideable(stateFromStores1[46]);
  const bottomSheetWidth = tmp5Result17.useBottomSheetWidth();
  const tmp5Result18 = tenureBadgeHideable(stateFromStores1[13]);
  badgeTileSize = tmp5Result18.getBadgeTileSize(bottomSheetWidth);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp5(tmp3[13]).BADGE_GRID_COLUMNS);
  let num = 0;
  const obj4 = analyticsLocations;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp5(tmp3[13]).BADGE_GRID_GAP;
  }
  const tmp5Result19 = tenureBadgeHideable(stateFromStores1[25]);
  animatedRef = tmp5Result19.useAnimatedRef();
  const tmp5Result20 = tenureBadgeHideable(stateFromStores1[25]);
  scrollOffset = tmp5Result20.useScrollOffset(animatedRef);
  const tmp5Result21 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue2 = tmp5Result21.useSharedValue(0);
  const tmp5Result22 = tenureBadgeHideable(stateFromStores1[25]);
  const sharedValue3 = tmp5Result22.useSharedValue(0);
  const items15 = [closure_35, sharedValue2, sharedValue3, 16.666666666666668, 700, , , , ];
  const useFrameCallback = tenureBadgeHideable(stateFromStores1[25]).useFrameCallback;
  items15[5] = tenureBadgeHideable(stateFromStores1[25]).scrollTo;
  items15[6] = animatedRef;
  items15[7] = tmp2(stateFromStores1[47]);
  items15[8] = scrollOffset;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items15;
  class CustomizeBadgesSheetTsx14 {
    constructor(timeSincePreviousFrame) {
      timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
      const value = _undefined.get();
      if (0 !== value) {
        if (null != timeSincePreviousFrame) {
          if (timeSincePreviousFrame > 0) {
            const result = _undefined2.set(_undefined2.get() + timeSincePreviousFrame);
            const value2 = _undefined2.get();
            const obj = _undefined2;
            if (value2 >= c2) {
              const result1 = obj.set(0);
              const _Math = Math;
              _undefined3(c5, 0, Math.max(_undefined4(_undefined5.get() + value * c3 * value2 / 1000), 0), false);
            }
          }
        }
      }
    }
  }
  const items16 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
  CustomizeBadgesSheetTsx14.__closure = items16;
  CustomizeBadgesSheetTsx14.__workletHash = 4169091470516;
  CustomizeBadgesSheetTsx14.__initData = tmp34;
  frameCallback = useFrameCallback(CustomizeBadgesSheetTsx14, false);
  const items17 = [frameCallback];
  const callback1 = obj4.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items17);
  const items18 = [closure_36, sharedValue2];
  c0 = undefined;
  [tmp46, tmp47] = items18;
  const tmp5Result24 = tenureBadgeHideable(stateFromStores1[25]);
  class CustomizeBadgesSheetTsx15 {
    constructor() {
      return 0 !== _undefined.get();
    }
  }
  const items19 = [tmp47];
  CustomizeBadgesSheetTsx15.__closure = items19;
  CustomizeBadgesSheetTsx15.__workletHash = 17434103373145;
  CustomizeBadgesSheetTsx15.__initData = tmp46;
  const items20 = [closure_37, sharedValue3, , ];
  const useAnimatedReaction = tmp5Result24.useAnimatedReaction;
  items20[2] = tenureBadgeHideable(stateFromStores1[29]).scheduleOnRN;
  items20[3] = callback1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp48, tmp49, tmp50, tmp51] = items20;
  class CustomizeBadgesSheetTsx16 {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        const result = _undefined.set(0);
        _undefined2(c2, arg0);
      }
    }
  }
  const items21 = [tmp49, tmp50, tmp51];
  CustomizeBadgesSheetTsx16.__closure = items21;
  CustomizeBadgesSheetTsx16.__workletHash = 12780194212895;
  CustomizeBadgesSheetTsx16.__initData = tmp48;
  const animatedReaction = useAnimatedReaction(CustomizeBadgesSheetTsx15, CustomizeBadgesSheetTsx16);
  if (hasCatalog) {
    let tmp58 = !stateFromStores1;
    const obj5 = { style: tmp.gridInset, children: items22 };
    if (tmp58) {
      const obj6 = { style: tmp.upsell, ctaText: intl2.string(tenureBadgeHideable(stateFromStores1[15]).t.pj0XBN), cardStyle: null, contentStyle: null, ctaStyle: null, showLinearGradient: true, onPress: callback, children: memo2(Text2, obj7) };
      const tmp2Result = tmp2(stateFromStores1[48]);
      intl2 = tmp5(tmp3[15]).intl;
      ({ upsellCard: obj20.cardStyle, upsellContent: obj20.contentStyle, upsellCta: obj20.ctaStyle } = tmp);
      obj7 = { variant: "body-sm/normal", style: tmp.upsellText, children: intl3.string(tenureBadgeHideable(stateFromStores1[15]).t.JrOki0) };
      Text2 = tmp5(tmp3[21]).Text;
      intl3 = tmp5(tmp3[15]).intl;
      tmp58 = memo2(tmp2Result, obj6);
    }
    items22 = [tmp58, ];
    const obj8 = { accessibilityRole: "list", style: items23, children: items24 };
    items23 = [tmp.grid, ];
    const obj9 = { height: num };
    items23[1] = obj9;
    items24 = [
      fixedBadges.map((badge, index) => {
          const obj = { badge, index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress };
          return gesture(closure_21, obj, badge.badge_id);
        }),
      reorderableBadges.map((badge, index) => {
          let tmpResult;
          if (stateFromStores1) {
            const obj2 = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, slotOffset: fixedBadges.length, isFirst: 0 === index, isLast: index === reorderableBadges.length - 1, alwaysVisible: set.has(badge.badge_id), orderShared: sharedValue, isDragActive: sharedValue1, scrollRef: animatedRef, scrollOffset, autoScrollSpeed: sharedValue2, onCommitOrder, onSetHidden, onPress };
            tmpResult = tmp(closure_34, obj2, badge.badge_id);
          } else {
            const obj = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress, onSetHidden };
            tmpResult = tmp(onSetHidden, obj, badge.badge_id);
          }
          return tmpResult;
        }),
      hiddenBadges.map((badge, index) => {
          const obj = { badge, index: fixedBadges.length + reorderableBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress, onSetHidden };
          return gesture(onSetHidden, obj, badge.badge_id);
        })
    ];
    items22[1] = sharedValue(context, obj8);
    tmp53Result = tmp56(tmp57, obj5);
  } else {
    let obj12;
    const tmp54 = context;
    if (hasCatalogError) {
      const obj10 = { style: tmp.message, accessibilityRole: "alert", children: memo2(Text, obj11) };
      obj11 = { variant: "body-md/normal", color: "text-muted", style: tmp.messageText, children: intl.string(tenureBadgeHideable(stateFromStores1[15]).t["rTU7/z"]) };
      Text = tmp5(tmp3[21]).Text;
      intl = tmp5(tmp3[15]).intl;
      obj12 = obj10;
    } else {
      obj12 = { style: tmp.message, children: memo2(tmp5(tmp3[49]).ActivityIndicator, { animating: true, size: "large" }) };
    }
    tmp53Result = tmp53(tmp54, obj12);
  }
  const obj13 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: intl4.string(tenureBadgeHideable(stateFromStores1[15]).t.x5SfWU), header: memo2(BottomSheetTitleHeader, obj14), children: memo2(tenureBadgeHideable(stateFromStores1[51]).BottomSheetScrollView, obj15) };
  const BottomSheet = tmp5(tmp3[46]).BottomSheet;
  intl4 = tmp5(tmp3[15]).intl;
  obj14 = { title: intl5.string(tenureBadgeHideable(stateFromStores1[15]).t.x5SfWU), subtitle: string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp) };
  BottomSheetTitleHeader = tmp5(tmp3[50]).BottomSheetTitleHeader;
  intl5 = tmp5(tmp3[15]).intl;
  const intl6 = tmp5(tmp3[15]).intl;
  string = intl6.string;
  t = tmp5(tmp3[15]).t;
  obj15 = { ref: animatedRef, contentContainerStyle: { paddingBottom: sum }, children: tmp53Result };
  return memo2(BottomSheet, obj13);
};
