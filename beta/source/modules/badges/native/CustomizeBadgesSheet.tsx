// Module ID: 14177
// Function ID: 14178
// Name: CustomizeBadgesSheet
// Dependencies: [19, 17, 7605, 1372, 7637, 1074, 6572, 1374, 21, 4836, 576, 4801, 7360, 14178, 7358, 1115, 6387, 4787, 5919, 10652, 4832, 7363, 10659, 6383, 4566, 4837, 4840, 12658, 7359, 6073, 4541, 10653, 1613, 504, 4488, 6583, 6603, 6573, 8695, 8663, 7636, 1241, 7642, 4528, 1479, 10456, 14179, 5889, 6571, 6570, 6045, 2]
// Exports: default

// Module 14177 (CustomizeBadgesSheet)
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4787 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import Card_Card from "Card/Card" /* 5919 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 6387 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import ContextMenu2 from "ContextMenu" /* 7358 */;
import ContextMenuConstants from "ContextMenuConstants" /* 7360 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7636 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7642 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10652 */;
import BadgeUtils from "BadgeUtils" /* 10659 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12658 */;
import BadgeGrid from "BadgeGrid" /* 14178 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import UserStore from "UserStore" /* 1372 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, set, set2, set3;

let Platform;
let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
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
let unpackModuleId;
function HideBadgeMenu(arg0) {
  let children;
  let closure_129_0;
  let closure_129_1;
  let index;
  let intl;
  let items;
  let str;
  ({ badge: closure_129_0, onHide: closure_129_1 } = arg0);
  ({ index, children } = arg0);
  const obj = { items, align: str, disableGesture: true, triggerOnLongPress: true, children };
  const obj2 = {
    label: intl.string(intl7.t.xSWJPo),
    trailingIndicator: EyeSlashIcon2.EyeSlashIcon,
    action() {
      return closure_1_1(closure_1_0);
    }
  };
  const ContextMenu = ContextMenu2.ContextMenu;
  intl = intl7.intl;
  items = [obj2];
  const result = index % BadgeGrid.BADGE_GRID_COLUMNS;
  str = "right";
  const tmp = closure_15;
  if (0 !== result) {
    let str2 = "above";
    if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
      str2 = "left";
    }
    str = str2;
  }
  return tmp(ContextMenu, obj);
}
function BadgeTileContent(arg0) {
  let EyeSlashIcon;
  let IconButton;
  let alwaysVisible;
  let badge;
  let intl;
  let items;
  let obj6;
  let obj7;
  let onShowPress;
  let showAccessibilityLabel;
  ({ badge, alwaysVisible, showAccessibilityLabel, onShowPress } = arg0);
  const tmp = closure_21();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  let tmp2 = null;
  if (alwaysVisible) {
    const obj = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
    tmp2 = closure_15(CircleInformationIcon, obj);
  }
  const obj2 = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: null };
  const Card = Card_Card.Card;
  const obj3 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: items };
  items = [tmp.icon, flag && tmp.iconHidden];
  const tmp12 = BadgeCatalogIconDefault;
  const items1 = [closure_15(tmp12, obj3), , ];
  let str = "text-default";
  const Text = tmp8(4832).Text;
  const tmp7 = authStore3;
  if (flag) {
    str = "text-muted";
  }
  const obj4 = { variant: "text-xs/medium", color: str, lineClamp: 1, style: tmp.name, "aria-hidden": true, children: badge.name };
  items1[1] = closure_15(Text, obj4);
  if (flag) {
    if (null != onShowPress) {
      let tmp10Result;
      if (!alwaysVisible) {
        const obj5 = { style: tmp.indicatorButton, children: closure_15(IconButton, obj6) };
        obj6 = { size: "sm", variant: "secondary-overlay", icon: closure_15(EyeSlashIcon, obj7), accessibilityLabel: showAccessibilityLabel, accessibilityHint: intl.string(intl7.t.hHHpvU), onPress: onShowPress };
        IconButton = tmp8(7363).IconButton;
        obj7 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
        EyeSlashIcon = tmp8(6387).EyeSlashIcon;
        const tmp13 = hasOwnProperty;
        if (showAccessibilityLabel == null) {
          showAccessibilityLabel = badge.name;
        }
        intl = tmp8(1115).intl;
        tmp10Result = tmp10(tmp13, obj5);
      }
      items1[2] = tmp10Result;
      obj2.children = items1;
      return tmp7(Card, obj2);
    }
  }
  let tmp10Result2 = null != tmp2;
  if (tmp10Result2) {
    const obj8 = { style: tmp.indicator, "aria-hidden": true, children: tmp2 };
    tmp10Result2 = tmp10(hasOwnProperty, obj8);
  }
  tmp10Result = tmp10Result2;
}
({ Platform, Pressable: closure_4, View: hasOwnProperty } = react_native);
({ AnalyticEvents: c9, AnalyticsObjects: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12 } = Constants);
let closure_13 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let c17 = 80;
let c18 = 16.666666666666668;
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
let closure_19 = createStyles(obj);
createStyles = createStyles_mod;
let obj9 = { position: { position: "absolute" }, fill: { flex: 1 }, card: { flex: 1, alignItems: "center", padding: 0 }, icon: obj10, name: obj11, indicator: size, indicatorButton: { position: "absolute", top: 0, end: 0, width: 48, height: 48, alignItems: "center", justifyContent: "center" }, iconHidden: { opacity: 0.3 } };
obj10 = { marginTop: nativeDefault.space.PX_24 };
const createStyles2 = createStyles.createStyles;
obj11 = { position: "absolute", start: 0, end: 0, bottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_4, textAlign: "center" };
size = { position: "absolute", top: nativeDefault.space.PX_8, end: nativeDefault.space.PX_8, width: 32, height: 32, alignItems: "flex-end", justifyContent: "flex-start" };
let closure_21 = createStyles2(obj9);
function getSlotOffset(arg0, arg1) {
  let result;
  let rounded;
  const point = { x: result * (arg1 + BadgeGrid.BADGE_GRID_GAP), y: rounded * (arg1 + BadgeGrid.BADGE_GRID_GAP) };
  result = arg0 % BadgeGrid.BADGE_GRID_COLUMNS;
  rounded = Math.floor(arg0 / BadgeGrid.BADGE_GRID_COLUMNS);
  return point;
}
let obj12 = { BADGE_GRID_COLUMNS: BadgeGrid.BADGE_GRID_COLUMNS, BADGE_GRID_GAP: BadgeGrid.BADGE_GRID_GAP };
getSlotOffset.__closure = obj12;
getSlotOffset.__workletHash = 8647997879684;
getSlotOffset.__initData = { code: "function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){const{BADGE_GRID_COLUMNS,BADGE_GRID_GAP}=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};}" };
let closure_24 = react.memo((badge) => {
  let alwaysVisible;
  let formatToPlainString;
  let hidden;
  let obj2;
  let obj3;
  let t;
  let tileSize;
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const onHide = badge.onHide;
  let onShowPress;
  let items1;
  if (typeof getSlotOffset === "function") {
    let tmp2 = badge;
    let result = index % badge(alwaysVisible[13]).BADGE_GRID_COLUMNS;
    const tmp6 = globalThis;
    const _Math = Math;
    const result1 = result * (tileSize + badge(alwaysVisible[13]).BADGE_GRID_GAP);
    const rounded = Math.floor(index / badge(alwaysVisible[13]).BADGE_GRID_COLUMNS);
    const tmp9 = onPress;
    const items = [badge, onPress];
    const result2 = rounded * (tileSize + badge(alwaysVisible[13]).BADGE_GRID_GAP);
    onShowPress = onPress.useCallback(() => {
      onPress(badge);
    }, items);
    items1 = [tmp.position, ];
    size = { left: result1, top: result2, width: tileSize, height: tileSize };
    items1[1] = size;
    if (badge.hidden) {
      let obj = { style: items1, children: closure_15(BadgeTileContent, obj2) };
      obj2 = { badge, alwaysVisible, showAccessibilityLabel: formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj3), onShowPress };
      let intl = tmp2(tmp3[15]).intl;
      formatToPlainString = intl.formatToPlainString;
      hidden = badge.hidden;
      t = tmp2(tmp3[15]).t;
      obj3 = { badgeName: badge.name, position: index + 1 };
      return closure_15(items1, obj);
    } else {
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
        const tmp2 = React3;
        if (ref != null) {
          ref = ref.ref;
        }
        let obj = { ref, accessibilityLabel: formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj2), accessibilityActions, onAccessibilityAction: prop, onPress, onLongPress: fn, delayLongPress: ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS, style: items1, children: tmp(BadgeTileContent, { badge, alwaysVisible }) };
        const intl = intl7.intl;
        formatToPlainString = intl.formatToPlainString;
        hidden = badge.hidden;
        t = intl7.t;
        let stringResult;
        obj2 = { badgeName: badge.name, position: index + 1 };
        if (alwaysVisible) {
          const intl2 = tmp6(1115).intl;
          const string = intl2.string;
          const tmp6Result = BadgeUtils;
          stringResult = string(tmp6Result.getAlwaysVisibleCopy(tmp9));
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
          onPress = callback;
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
        return closure_15(tmp2, obj);
      }
      if (!alwaysVisible) {
        let renderTileResult;
        if (null != onHide) {
          const obj4 = { badge, index, onHide, children: renderTile };
          renderTileResult = closure_15(HideBadgeMenu, obj4);
        }
        return renderTileResult;
      }
      renderTileResult = renderTile(null);
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_25 = { code: "function CustomizeBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
const __initData = { code: "function CustomizeBadgesSheetTsx3(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}" };
const __initData2 = { code: "function CustomizeBadgesSheetTsx4(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
const __initData3 = { code: "function CustomizeBadgesSheetTsx5(){const{scrollOffset}=this.__closure;return scrollOffset.get();}" };
const __initData4 = { code: "function CustomizeBadgesSheetTsx6(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}" };
let closure_30 = { code: "function handleStart_CustomizeBadgesSheetTsx7(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_31 = { code: "function handleChange_CustomizeBadgesSheetTsx8(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport=dragViewport.get();if(viewport==null){return;}const fromTop=event.absoluteY-viewport.pageY;const fromBottom=viewport.pageY+viewport.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}" };
let closure_32 = { code: "function handleFinalize_CustomizeBadgesSheetTsx9(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order=orderShared.get();const slot=order.indexOf(badgeId);if(slot>=0){const target=getSlotOffset(slot+slotOffset,tileSize);positionX.set(withTiming(target.x,timingStandard));positionY.set(withTiming(target.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order);}" };
let closure_33 = { code: "function CustomizeBadgesSheetTsx10(){const{handleFinalize}=this.__closure;handleFinalize();}" };
let closure_34 = { code: "function CustomizeBadgesSheetTsx11(event){const{handleChange}=this.__closure;handleChange(event);}" };
let closure_35 = { code: "function CustomizeBadgesSheetTsx12(){const{handleStart}=this.__closure;handleStart();}" };
const __initData5 = { code: "function CustomizeBadgesSheetTsx13(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}" };
let closure_37 = react.memo((badge) => {
  let intl;
  let intl2;
  let isFirst;
  let isLast;
  let onHide;
  let result;
  let rounded;
  let tmp5;
  badge = badge.badge;
  let index = badge.index;
  const tileSize = badge.tileSize;
  const slotOffset = badge.slotOffset;
  const alwaysVisible = badge.alwaysVisible;
  const orderShared = badge.orderShared;
  const isDragActive = badge.isDragActive;
  const scrollRef = badge.scrollRef;
  const scrollOffset = badge.scrollOffset;
  const autoScrollSpeed = badge.autoScrollSpeed;
  const onCommitOrder = badge.onCommitOrder;
  let onPress = badge.onPress;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let reslot;
  let closure_22;
  let closure_23;
  closure_24 = undefined;
  let items3;
  ({ isFirst, isLast, onHide } = badge);
  const position = reslot();
  const badge_id = badge.badge_id;
  let tmp = tileSize;
  let closure_14 = index(tileSize[23])(() => {
    onPress(badge);
  });
  let tmp2 = badge;
  let obj = badge(tileSize[24]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = badge(tileSize[24]);
  const sharedValue1 = obj2.useSharedValue(null);
  if (typeof closure_22 === "function") {
    let renderTileResult;
    let point = { x: result * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP), y: rounded * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP) };
    result = index % tmp2(tmp[13]).BADGE_GRID_COLUMNS;
    let _Math = Math;
    rounded = Math.floor(index / tmp2(tmp[13]).BADGE_GRID_COLUMNS);
    let tmp2Result = tmp2(tmp[24]);
    sharedValue2 = tmp2Result.useSharedValue(point.x);
    const tmp2Result7 = tmp2(tmp[24]);
    sharedValue3 = tmp2Result7.useSharedValue(point.y);
    const tmp2Result8 = tmp2(tmp[24]);
    sharedValue4 = tmp2Result8.useSharedValue(point);
    let num = 1;
    const tmp2Result9 = tmp2(tmp[24]);
    sharedValue5 = tmp2Result9.useSharedValue(1);
    let fn = function v() {
      let result;
      let rounded;
      const value = orderShared.get();
      index = value.indexOf(badge_id);
      let tmp2 = null;
      if (index >= 0) {
        const sum = index + slotOffset;
        if (typeof getSlotOffset === "function") {
          const point = { x: result * (tileSize + BadgeGrid.BADGE_GRID_GAP), y: rounded * (tileSize + BadgeGrid.BADGE_GRID_GAP) };
          result = sum % BadgeGrid.BADGE_GRID_COLUMNS;
          const _Math = Math;
          rounded = Math.floor(sum / BadgeGrid.BADGE_GRID_COLUMNS);
          tmp2 = point;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return tmp2;
    };
    let obj3 = { orderShared, badgeId: badge_id, getSlotOffset: tmp5, slotOffset, tileSize };
    fn.__closure = obj3;
    let num2 = 6182257637516;
    fn.__workletHash = 6182257637516;
    fn.__initData = items3;
    const tmp2Result10 = tmp2(tmp[24]);
    class C {
      constructor(arg0, arg1) {
        const value = null == arg0 || sharedValue.get();
        if (!value) {
          let x1;
          const x = arg0.x;
          if (arg1 != null) {
            x1 = arg1.x;
          }
          if (x !== x1) {
            set = sharedValue2.set;
            const obj = timing;
            const result = set(obj.withTiming(arg0.x, timingPresets.timingStandard));
          }
          let y1;
          const y = arg0.y;
          if (arg1 != null) {
            y1 = arg1.y;
          }
          if (y !== y1) {
            set2 = sharedValue3.set;
            const obj2 = timing;
            set2(obj2.withTiming(arg0.y, timingPresets.timingStandard));
          }
        }
      }
    }
    let obj4 = { isThisTileDragging: sharedValue, positionX: sharedValue2, withTiming: tmp2(tmp[25]).withTiming, timingStandard: tmp2(tmp[26]).timingStandard, positionY: sharedValue3 };
    const useAnimatedReaction = tmp2Result10.useAnimatedReaction;
    C.__closure = obj4;
    C.__workletHash = 4011295272705;
    let tmp15 = __initData;
    C.__initData = __initData;
    const animatedReaction = useAnimatedReaction(fn, C);
    let fn2 = function $() {
      const value = orderShared.get();
      const sum = tileSize + BadgeGrid.BADGE_GRID_GAP;
      const clamp = ReanimatedRexport.clamp;
      ReanimatedRexport;
      const rounded = Math.floor((sharedValue2.get() + tileSize / 2) / sum);
      const clampResult = clamp(rounded, 0, BadgeGrid.BADGE_GRID_COLUMNS - 1);
      const bound = Math.max(Math.floor((sharedValue3.get() + tileSize / 2) / sum), 0);
      const obj2 = ReanimatedRexport;
      const clampResult1 = obj2.clamp(bound * BadgeGrid.BADGE_GRID_COLUMNS + clampResult - slotOffset, 0, value.length - 1);
      const obj3 = PendingBadgeSettings;
      const result = obj3.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
      const obj = orderShared;
      if (result !== value) {
        const result1 = obj.set(result);
        const tmpResult = ReanimatedRexport;
        const runOnJSResult = tmpResult.runOnJS(HapticUtils.triggerHapticFeedback);
        runOnJSResult(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
      }
    };
    let obj5 = { orderShared, tileSize, BADGE_GRID_GAP: tmp2(tmp[13]).BADGE_GRID_GAP, clamp: tmp2(tmp[24]).clamp, positionX: sharedValue2, BADGE_GRID_COLUMNS: tmp2(tmp[13]).BADGE_GRID_COLUMNS, positionY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp2(tmp[27]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp2(tmp[24]).runOnJS, triggerHapticFeedback: tmp2(tmp[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp2(tmp[11]).HapticFeedbackTypes };
    const useCallback = slotOffset.useCallback;
    fn2.__closure = obj5;
    fn2.__workletHash = 1083237242858;
    fn2.__initData = __initData2;
    let items = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
    reslot = useCallback(fn2, items);
    function ee() {
      return scrollOffset.get();
    }
    let obj6 = { scrollOffset };
    ee.__closure = obj6;
    ee.__workletHash = 10993823060256;
    ee.__initData = __initData3;
    const tmp2Result11 = tmp2(tmp[24]);
    class Q {
      constructor(arg0, arg1) {
        const value = null != arg1 && sharedValue.get();
        if (value) {
          const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
          callback();
        }
      }
    }
    const obj7 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot };
    Q.__closure = obj7;
    Q.__workletHash = 9803143874483;
    Q.__initData = __initData4;
    const animatedReaction1 = tmp2Result11.useAnimatedReaction(ee, Q);
    let items1 = [reslot, scrollRef, sharedValue1, autoScrollSpeed, badge_id, tileSize, slotOffset, orderShared, isDragActive, onCommitOrder, sharedValue, sharedValue5, sharedValue2, sharedValue3, sharedValue4];
    closure_22 = slotOffset.useMemo(() => {
      function handleStart() {
        const obj = isDragActive;
        if (!isDragActive.get()) {
          const obj2 = badge(tileSize[24]);
          obj2.runOnJS(badge(tileSize[28]).hideContextMenu)();
          const result = obj.set(true);
          const result1 = sharedValue.set(true);
          const point = { x: sharedValue2.get(), y: sharedValue3.get() };
          const result2 = set(point);
          const obj4 = badge(tileSize[24]);
          const measureResult = obj4.measure(scrollRef);
          let tmp15 = null;
          set2 = sharedValue1.set;
          if (null != measureResult) {
            const obj3 = { pageY: null, height: null };
            ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
            tmp15 = obj3;
          }
          set2(tmp15);
          set3 = sharedValue5.set;
          const tmp2Result = badge(tileSize[25]);
          set3(tmp2Result.withTiming(1.05, badge(tileSize[26]).timingStandard));
          const tmp2Result2 = badge(tileSize[24]);
          const runOnJSResult = tmp2Result2.runOnJS(badge(tileSize[11]).triggerHapticFeedback);
          runOnJSResult(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_START);
        }
      }
      let obj = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: badge(tileSize[24]).runOnJS, hideContextMenu: badge(tileSize[28]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: badge(tileSize[24]).measure, scrollRef, dragViewport: sharedValue1, scale: sharedValue5, withTiming: badge(tileSize[25]).withTiming, DRAG_SCALE: 1.05, timingStandard: badge(tileSize[26]).timingStandard, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes };
      handleStart.__closure = obj;
      handleStart.__workletHash = 11005478611755;
      handleStart.__initData = __initData;
      function handleChange(changeX) {
        if (sharedValue.get()) {
          const result = closure_1_17.set(closure_1_17.get() + changeX.changeX);
          const result1 = sharedValue3.set(sharedValue3.get() + changeX.changeY);
          reslot();
          const value = sharedValue1.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < sharedValue2) {
              set2 = autoScrollSpeed.set;
              const obj2 = badge(tileSize[24]);
              set2(obj2.clamp(diff, 0, sharedValue2) / sharedValue2 - 1);
            } else if (diff1 < sharedValue2) {
              set = autoScrollSpeed.set;
              const obj = badge(tileSize[24]);
              const result2 = set(1 - obj.clamp(diff1, 0, tmp23) / tmp23);
            } else {
              const result3 = autoScrollSpeed.set(0);
            }
          }
        }
      }
      let obj2 = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue2, autoScrollSpeed, clamp: badge(tileSize[24]).clamp };
      handleChange.__closure = obj2;
      handleChange.__workletHash = 6322461598588;
      handleChange.__initData = __initData2;
      function handleFinalize() {
        const obj = sharedValue;
        if (sharedValue.get()) {
          const result = autoScrollSpeed.set(0);
          const result1 = sharedValue1.set(null);
          const value = orderShared.get();
          index = value.indexOf(badge_id);
          if (index >= 0) {
            const sum = index + slotOffset;
            if (typeof closure_22 === "function") {
              const result2 = sum % badge(tileSize[13]).BADGE_GRID_COLUMNS;
              const _Math = Math;
              const result3 = result2 * (tmp58 + badge(tileSize[13]).BADGE_GRID_GAP);
              const rounded = Math.floor(sum / badge(tileSize[13]).BADGE_GRID_COLUMNS);
              const result4 = rounded * (tmp58 + badge(tileSize[13]).BADGE_GRID_GAP);
              set = sharedValue2.set;
              const obj2 = badge(tileSize[25]);
              const result5 = set(obj2.withTiming(result3, badge(tileSize[26]).timingStandard));
              set2 = sharedValue3.set;
              const obj3 = badge(tileSize[25]);
              set2(obj3.withTiming(result4, badge(tileSize[26]).timingStandard));
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          set3 = sharedValue5.set;
          const obj4 = badge(tileSize[25]);
          set3(obj4.withTiming(1, badge(tileSize[26]).timingStandard));
          const result6 = obj.set(false);
          const result7 = isDragActive.set(false);
          const obj5 = badge(tileSize[24]);
          const runOnJSResult = obj5.runOnJS(badge(tileSize[11]).triggerHapticFeedback);
          runOnJSResult(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_END);
          const obj6 = badge(tileSize[24]);
          obj6.runOnJS(onCommitOrder)(value);
        }
      }
      let obj3 = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize: handleFinalize, positionX: sharedValue2, withTiming: badge(tileSize[25]).withTiming, timingStandard: badge(tileSize[26]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: isDragActive, runOnJS: badge(tileSize[24]).runOnJS, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes, onCommitOrder };
      handleFinalize.__closure = obj3;
      handleFinalize.__workletHash = 3743829622400;
      handleFinalize.__initData = __initData3;
      const Gesture = badge(tileSize[29]).Gesture;
      const fn = function s() {
        handleStart();
      };
      fn.__closure = { handleStart };
      fn.__workletHash = 1384005013956;
      fn.__initData = __initData6;
      const PanResult = Gesture.Pan();
      const fn2 = function n(arg0) {
        handleChange(arg0);
      };
      fn2.__closure = { handleChange };
      fn2.__workletHash = 11082443717159;
      fn2.__initData = __initData5;
      const minDistanceResult = PanResult.minDistance(8);
      const fn3 = function t() {
        handleFinalize();
      };
      fn3.__closure = { handleFinalize };
      fn3.__workletHash = 11034838477574;
      fn3.__initData = __initData4;
      const onStartResult = minDistanceResult.onStart(fn);
      const onChangeResult = onStartResult.onChange(fn2);
      return onChangeResult.onFinalize(fn3);
    }, items1);
    function ie() {
      let items1;
      let x;
      let y;
      const value = sharedValue.get();
      const point = sharedValue4.get();
      let num = 0;
      if (value) {
        num = 10;
      }
      const rect = { zIndex: num, left: x, top: y, transform: items1 };
      if (value) {
        x = point.x;
      } else {
        x = sharedValue2.get();
      }
      if (value) {
        y = point.y;
      } else {
        y = sharedValue3.get();
      }
      if (value) {
        const items = [{ translateX: sharedValue2.get() - point.x }, , ];
        const obj = { translateX: sharedValue2.get() - point.x };
        items[1] = { translateY: sharedValue3.get() - point.y };
        const obj2 = { translateY: sharedValue3.get() - point.y };
        items[2] = { scale: sharedValue5.get() };
        items1 = items;
        const obj3 = { scale: sharedValue5.get() };
      } else {
        items1 = [{ scale: sharedValue5.get() }];
        const obj4 = { scale: sharedValue5.get() };
      }
      return rect;
    }
    const obj8 = { isThisTileDragging: sharedValue, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, scale: sharedValue5 };
    ie.__closure = obj8;
    ie.__workletHash = 3612359203254;
    const tmp23 = __initData5;
    ie.__initData = __initData5;
    const tmp2Result12 = tmp2(tmp[24]);
    closure_23 = tmp2Result12.useAnimatedStyle(ie);
    const items2 = [badge_id, orderShared, onCommitOrder, slotOffset];
    closure_24 = slotOffset.useCallback((nativeEvent) => {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("moveup" === actionName) {
        const value = orderShared.get();
        index = value.indexOf(badge_id);
        let num2 = 1;
        const clamp = ReanimatedRexport.clamp;
        ReanimatedRexport;
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
          const AccessibilityAnnouncer = tmp4(4541).AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = tmp4(1115).intl;
          const obj2 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
          announce(intl.formatToPlainString(intl7.t.qPHr0x, obj2));
        }
      }
    }, items2);
    items3 = [];
    if (!isFirst) {
      const push = items3.push;
      const obj9 = { name: "moveup", label: intl.string(tmp2(tmp[15]).t.eR2XSh) };
      intl = tmp2(tmp[15]).intl;
      push(obj9);
    }
    if (!isLast) {
      const push2 = items3.push;
      const obj10 = { name: "movedown", label: intl2.string(tmp2(tmp[15]).t.wWi0DL) };
      intl2 = tmp2(tmp[15]).intl;
      push2(obj10);
    }
    function renderTile(ref) {
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
      let tmp5;
      badge = ref;
      const tmp = sharedValue;
      let obj = { gesture, children: tmp(View, obj2) };
      const GestureDetector = badge(tileSize[29]).GestureDetector;
      obj2 = { style: items, children: tmp(tmp5, obj3) };
      items = [position.position, , ];
      size = { width: tileSize, height: tileSize };
      items[1] = size;
      items[2] = closure_23;
      ref = undefined;
      View = index(tileSize[24]).View;
      const tmp4 = position;
      tmp5 = alwaysVisible;
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
          closure_24(nativeEvent);
        },
        onPress,
        onLongPress: fn,
        delayLongPress: badge(tileSize[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS,
        style: tmp4.fill,
        children: tmp(closure_23, { badge, alwaysVisible })
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
        stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp10));
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
      items1 = [...items3];
      if (alwaysVisible) {
        onPress = closure_14;
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
      const obj11 = { badge, index, onHide, children: renderTile };
      renderTileResult = sharedValue(sharedValue5, obj11);
    }
    return renderTileResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const __initData6 = { code: "function CustomizeBadgesSheetTsx14({timeSincePreviousFrame:timeSincePreviousFrame}){const{autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset}=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);}" };
const __initData7 = { code: "function CustomizeBadgesSheetTsx15(){const{autoScrollSpeed}=this.__closure;return autoScrollSpeed.get()!==0;}" };
const __initData8 = { code: "function CustomizeBadgesSheetTsx16(isScrolling,wasScrolling){const{autoScrollElapsed,runOnJS,setAutoScrollerActive}=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);runOnJS(setAutoScrollerActive)(isScrolling);}" };
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
  let items16;
  let items17;
  let items18;
  let obj13;
  let obj16;
  let obj17;
  let obj9;
  let onPress;
  let string;
  let t;
  let tmp35Result;
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
  MS_PER_FRAME_60FPS = undefined;
  let onHide;
  let badgeTileSize;
  let animatedRef;
  let scrollViewOffset;
  let sharedValue2;
  let sharedValue3;
  let frameCallback;
  let callback1;
  let tmp = onHide();
  let tmp2 = stateFromStores;
  let obj = stateFromStores(stateFromStores1[31]);
  const tenureBadgeHideable = obj.useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  const sum = Math.max(stateFromStores(stateFromStores1[32])().bottom, hiddenBadges) + 4;
  let obj2 = tenureBadgeHideable(stateFromStores1[33]);
  const items = [pendingBadgeDisplayOrder];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = pendingBadgeDisplayOrder.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj3 = tenureBadgeHideable(stateFromStores1[33]);
  const items1 = [pendingBadgeDisplayOrder];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const obj = stateFromStores(stateFromStores1[34]);
    return obj.canUsePremiumProfileCustomization(pendingBadgeDisplayOrder.getCurrentUser());
  });
  const tmp8 = stateFromStores(stateFromStores1[35]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = tmp8(analyticsLocations1, tmp2(tmp3[36]).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  let obj4 = analyticsLocations;
  context = analyticsLocations.useContext(tmp2(tmp3[37]));
  const items2 = [context, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    let obj3;
    const obj = context;
    if (context != null) {
      obj.close();
    }
    const obj2 = { analyticsLocation: obj3, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj3 = { page: unpackModuleId.USER_SETTINGS, section: reorderableBadges.USER_PROFILE, object: set.BUTTON_CTA };
    const tmp2 = openPremiumModalDefault;
    tmp2(obj2);
  }, items2);
  const items3 = [pendingBadgeHiddenBadges];
  const items4 = [stateFromStores];
  const tmp5Result = tenureBadgeHideable(stateFromStores1[33]);
  stateFromStoresArray = tmp5Result.useStateFromStoresArray(items3, () => BadgeDirectoryStore.getBadges(stateFromStores), items4);
  const items5 = [pendingBadgeHiddenBadges];
  const items6 = [stateFromStores];
  const tmp5Result12 = tenureBadgeHideable(stateFromStores1[33]);
  const stateFromStoresObject = tmp5Result12.useStateFromStoresObject(items5, () => {
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
      obj3 = { page: unpackModuleId.USER_SETTINGS, section: reorderableBadges.USER_PROFILE };
      const obj = AnalyticsUtilsDefault;
      obj.track(memo.PREMIUM_UPSELL_VIEWED, obj2);
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
  const items9 = [hasCatalog];
  const tmp5Result13 = tenureBadgeHideable(stateFromStores1[33]);
  const stateFromStoresObject1 = tmp5Result13.useStateFromStoresObject(items9, () => {
    const pendingChanges = hasCatalog.getPendingChanges();
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
  const tmp5Result14 = tenureBadgeHideable(stateFromStores1[24]);
  sharedValue = tmp5Result14.useSharedValue(memo2);
  onCommitOrder = tmp2(tmp3[23])((arr) => {
    const obj = tenureBadgeHideable(stateFromStores1[27]);
    const result = obj.setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result15 = tenureBadgeHideable(stateFromStores1[24]);
  sharedValue1 = tmp5Result15.useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect3 = analyticsLocations.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  MS_PER_FRAME_60FPS = tmp2(tmp3[23])((badge_id) => {
    let obj3;
    let string;
    const mapped = hiddenBadges.map((badge_id) => badge_id.badge_id);
    if (mapped.includes(badge_id.badge_id)) {
      const obj = { badgeId: badge_id.badge_id, hidden: false, reorderableBadgeIds: memo2, hiddenBadgeIds: mapped, canReorder: stateFromStores1 };
      const obj4 = PendingBadgeSettings;
      const result = obj4.setPendingBadgeVisibility(obj);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl2 = intl7.intl;
      const obj2 = { badgeName: badge_id.name };
      announce(intl2.formatToPlainString(intl7.t.mehuPg, obj2));
    } else if (set.has(badge_id.badge_id)) {
      const _HermesInternal = HermesInternal;
      const obj5 = { key: "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id, content: string(obj3.getAlwaysVisibleCopy(badge_id.badge_id)) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      const intl = intl7.intl;
      string = intl.string;
      obj3 = BadgeUtils;
      open(obj5);
    }
  });
  onHide = tmp2(tmp3[23])((badgeId) => {
    const obj = PendingBadgeSettings;
    const obj2 = { badgeId: badgeId.badge_id, hidden: true, reorderableBadgeIds: memo2, hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id), canReorder: stateFromStores1 };
    const result = obj.setPendingBadgeVisibility(obj2);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl7.intl;
    announce(intl.formatToPlainString(intl7.t.q3t0Ht, { count: 1 }));
  });
  const width = tmp2(tmp3[44])().width;
  const tmp5Result16 = tenureBadgeHideable(stateFromStores1[13]);
  badgeTileSize = tmp5Result16.getBadgeTileSize(width);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp5(tmp3[13]).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp5(tmp3[13]).BADGE_GRID_GAP;
  }
  const tmp5Result17 = tenureBadgeHideable(stateFromStores1[24]);
  animatedRef = tmp5Result17.useAnimatedRef();
  const tmp5Result18 = tenureBadgeHideable(stateFromStores1[24]);
  scrollViewOffset = tmp5Result18.useScrollViewOffset(animatedRef);
  const tmp5Result19 = tenureBadgeHideable(stateFromStores1[24]);
  sharedValue2 = tmp5Result19.useSharedValue(0);
  const tmp5Result20 = tenureBadgeHideable(stateFromStores1[24]);
  sharedValue3 = tmp5Result20.useSharedValue(0);
  function ee(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    const value = sharedValue2.get();
    if (0 !== value) {
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          const result = sharedValue3.set(sharedValue3.get() + timeSincePreviousFrame);
          const value2 = sharedValue3.get();
          const obj = sharedValue3;
          if (value2 >= c18) {
            const result1 = obj.set(0);
            const _Math = Math;
            const scrollTo = ReanimatedRexport.scrollTo;
            const tmp13 = roundToNearestPixelDefault;
            scrollTo(animatedRef, 0, max(tmp13(scrollViewOffset.get() + 700 * value * value2 / 1000), 0), false);
          }
        }
      }
    }
  }
  const tmp5Result21 = tenureBadgeHideable(stateFromStores1[24]);
  let obj5 = { autoScrollSpeed: sharedValue2, autoScrollElapsed: sharedValue3, MS_PER_FRAME_60FPS, AUTO_SCROLL_PIXELS_PER_SECOND: 700, scrollTo: tmp5(tmp3[24]).scrollTo, scrollRef: animatedRef, roundToNearestPixel: tmp2(tmp3[45]), scrollOffset: scrollViewOffset };
  ee.__closure = obj5;
  ee.__workletHash = 8297629116909;
  ee.__initData = __initData6;
  frameCallback = tmp5Result21.useFrameCallback(ee, false);
  const items15 = [frameCallback];
  callback1 = obj4.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items15);
  function ie() {
    return 0 !== sharedValue2.get();
  }
  ie.__closure = { autoScrollSpeed: sharedValue2 };
  ie.__workletHash = 16801023005760;
  ie.__initData = __initData7;
  function te(arg0, arg1) {
    const tmp = null != arg1 && arg0 !== arg1;
    if (tmp) {
      const result = sharedValue3.set(0);
      const obj = ReanimatedRexport;
      obj.runOnJS(callback1)(arg0);
    }
  }
  const tmp5Result22 = tenureBadgeHideable(stateFromStores1[24]);
  te.__closure = { autoScrollElapsed: sharedValue3, runOnJS: tenureBadgeHideable(stateFromStores1[24]).runOnJS, setAutoScrollerActive: callback1 };
  te.__workletHash = 12755360860907;
  te.__initData = __initData8;
  ({ autoScrollElapsed: sharedValue3, runOnJS: tenureBadgeHideable(stateFromStores1[24]).runOnJS, setAutoScrollerActive: callback1 });
  const animatedReaction = tmp5Result22.useAnimatedReaction(ie, te);
  if (hasCatalog) {
    let tmp40 = !stateFromStores1;
    const obj7 = { style: tmp.gridInset, children: items16 };
    if (tmp40) {
      const obj8 = { style: tmp.upsell, ctaText: intl2.string(tenureBadgeHideable(stateFromStores1[15]).t.pj0XBN), cardStyle: null, contentStyle: null, ctaStyle: null, showLinearGradient: true, onPress: callback, children: sharedValue(Text2, obj9) };
      const tmp2Result = tmp2(stateFromStores1[46]);
      intl2 = tmp5(tmp3[15]).intl;
      ({ upsellCard: obj23.cardStyle, upsellContent: obj23.contentStyle, upsellCta: obj23.ctaStyle } = tmp);
      obj9 = { variant: "text-sm/normal", style: tmp.upsellText, children: intl3.string(tenureBadgeHideable(stateFromStores1[15]).t.JrOki0) };
      Text2 = tmp5(tmp3[20]).Text;
      intl3 = tmp5(tmp3[15]).intl;
      tmp40 = sharedValue(tmp2Result, obj8);
    }
    items16 = [tmp40, ];
    const obj10 = { accessibilityRole: "list", style: items17, children: items18 };
    items17 = [tmp.grid, ];
    const obj11 = { height: num };
    items17[1] = obj11;
    items18 = [
      fixedBadges.map((badge, index) => {
          const obj = { badge, index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress };
          return sharedValue(closure_24, obj, badge.badge_id);
        }),
      reorderableBadges.map((badge, index) => {
          let tmpResult;
          if (stateFromStores1) {
            const obj2 = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, slotOffset: fixedBadges.length, isFirst: 0 === index, isLast: index === reorderableBadges.length - 1, alwaysVisible: set.has(badge.badge_id), orderShared: sharedValue, isDragActive: sharedValue1, scrollRef: animatedRef, scrollOffset: scrollViewOffset, autoScrollSpeed: sharedValue2, onCommitOrder, onHide, onPress };
            tmpResult = tmp(closure_37, obj2, badge.badge_id);
          } else {
            const obj = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress, onHide };
            tmpResult = tmp(closure_24, obj, badge.badge_id);
          }
          return tmpResult;
        }),
      hiddenBadges.map((badge, index) => {
          const obj = { badge, index: fixedBadges.length + reorderableBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress };
          return sharedValue(closure_24, obj, badge.badge_id);
        })
    ];
    items16[1] = onCommitOrder(stateFromStoresArray, obj10);
    tmp35Result = tmp38(tmp39, obj7);
  } else {
    let obj14;
    const tmp36 = stateFromStoresArray;
    if (hasCatalogError) {
      const obj12 = { style: tmp.message, accessibilityRole: "alert", children: sharedValue(Text, obj13) };
      obj13 = { variant: "text-md/normal", color: "text-muted", style: tmp.messageText, children: intl.string(tenureBadgeHideable(stateFromStores1[15]).t["rTU7/z"]) };
      Text = tmp5(tmp3[20]).Text;
      intl = tmp5(tmp3[15]).intl;
      obj14 = obj12;
    } else {
      obj14 = { style: tmp.message, children: sharedValue(tmp5(tmp3[47]).ActivityIndicator, { animating: true, size: "large" }) };
    }
    tmp35Result = tmp35(tmp36, obj14);
  }
  const obj15 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: intl4.string(tenureBadgeHideable(stateFromStores1[15]).t.x5SfWU), header: sharedValue(BottomSheetTitleHeader, obj16), children: sharedValue(tenureBadgeHideable(stateFromStores1[50]).BottomSheetScrollView, obj17) };
  BottomSheet = tmp5(tmp3[48]).BottomSheet;
  intl4 = tmp5(tmp3[15]).intl;
  obj16 = { title: intl5.string(tenureBadgeHideable(stateFromStores1[15]).t.x5SfWU), subtitle: string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp) };
  BottomSheetTitleHeader = tmp5(tmp3[49]).BottomSheetTitleHeader;
  intl5 = tmp5(tmp3[15]).intl;
  const intl6 = tmp5(tmp3[15]).intl;
  string = intl6.string;
  t = tmp5(tmp3[15]).t;
  obj17 = { ref: animatedRef, contentContainerStyle: { paddingBottom: sum }, children: tmp35Result };
  return sharedValue(BottomSheet, obj15);
};
