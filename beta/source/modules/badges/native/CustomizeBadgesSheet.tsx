// Module ID: 14165
// Function ID: 14166
// Name: CustomizeBadgesSheet
// Dependencies: [19, 17, 7609, 1378, 7641, 1086, 6573, 1380, 21, 4837, 588, 4802, 7368, 14166, 558, 576, 1127, 6384, 7366, 4788, 10641, 4833, 7362, 5918, 10648, 6380, 4570, 4838, 4841, 12660, 7367, 6066, 4545, 10642, 1619, 504, 4491, 6584, 6604, 6574, 8690, 8660, 7640, 1253, 7646, 4531, 1485, 10491, 14167, 5890, 6572, 6571, 6038, 2]
// Exports: default

// Module 14165 (CustomizeBadgesSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl7 from "intl" /* 1127 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4545 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4788 */;
import HapticUtils from "HapticUtils" /* 4802 */;
import Text_Text from "Text/Text" /* 4833 */;
import timing from "timing" /* 4838 */;
import timingPresets from "timingPresets" /* 4841 */;
import Card_Card from "Card/Card" /* 5918 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 6384 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6573 */;
import ContextMenu2 from "ContextMenu" /* 7366 */;
import ContextMenuState from "ContextMenuState" /* 7367 */;
import ContextMenuConstants from "ContextMenuConstants" /* 7368 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7640 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7646 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8660 */;
import openPremiumModalDefault from "openPremiumModal" /* 8690 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10491 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 10641 */;
import BadgeUtils from "BadgeUtils" /* 10648 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12660 */;
import BadgeGrid from "BadgeGrid" /* 14166 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7609 */;
import UserStore from "UserStore" /* 1378 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7641 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, obj1, set, set2, set3, style;

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
({ Platform, Pressable: closure_4, View: hasOwnProperty } = react_native);
({ AnalyticEvents: c9, AnalyticsObjects: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12 } = Constants);
let closure_13 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let c17 = 1.05;
let c18 = 80;
let c19 = 16.666666666666668;
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
let closure_20 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  let first;
  let index;
  let onHide;
  function action() {
    return onHide(badge);
  }
  const obj = react2;
  const cResult = obj.c(10);
  badge = badge.badge;
  ({ index, onHide } = badge);
  const children = badge.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(intl7.t.xSWJPo);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === badge) {
    let tmp6;
    let tmp7;
    if (cResult[2] === onHide) {
      tmp6 = cResult[3];
    }
    if (cResult[4] !== index) {
      const result = index % tmp(14166).BADGE_GRID_COLUMNS;
      let str = "right";
      if (0 !== result) {
        let str2 = "above";
        if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
          str2 = "left";
        }
        str = str2;
      }
      cResult[4] = index;
      cResult[5] = str;
      tmp7 = str;
    } else {
      tmp7 = cResult[5];
    }
    if (cResult[6] === children) {
      if (cResult[7] === tmp6) {
        let tmp9;
        if (cResult[8] === tmp7) {
          tmp9 = cResult[9];
        }
        return tmp9;
      }
    }
    const obj2 = { items: tmp6, align: tmp7, disableGesture: true, triggerOnLongPress: true, children };
    const tmp11 = closure_15(ContextMenu2.ContextMenu, obj2);
    cResult[6] = children;
    cResult[7] = tmp6;
    cResult[8] = tmp7;
    cResult[9] = tmp11;
    tmp9 = tmp11;
  }
  const items = [{ label: first, trailingIndicator: EyeSlashIcon2.EyeSlashIcon, action }];
  cResult[1] = badge;
  cResult[2] = onHide;
  cResult[3] = items;
  tmp6 = items;
  ({ label: first, trailingIndicator: EyeSlashIcon2.EyeSlashIcon, action });
}) : ((arg0) => {
  let children;
  let closure_129_0;
  let closure_129_1;
  let index;
  let intl;
  let items;
  let str;
  ({ badge: closure_129_0, onHide: closure_129_1 } = arg0);
  ({ index, children } = arg0);
  const tmp = closure_15;
  let tmp2 = require;
  const tmp3 = dependencyMap;
  let obj = { items, align: str, disableGesture: true, triggerOnLongPress: true, children };
  let obj2 = {
    label: intl.string(intl7.t.xSWJPo),
    trailingIndicator: EyeSlashIcon2.EyeSlashIcon,
    action() {
      return closure_1_1(closure_1_0);
    }
  };
  const ContextMenu = ContextMenu2.ContextMenu;
  intl = intl7.intl;
  items = [obj2];
  let result = index % BadgeGrid.BADGE_GRID_COLUMNS;
  str = "right";
  if (0 !== result) {
    let num = 1;
    let str2 = "above";
    if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
      str2 = "left";
    }
    str = str2;
  }
  return tmp(ContextMenu, obj);
});
createStyles = createStyles_mod;
let obj9 = { position: { position: "absolute" }, fill: { flex: 1 }, card: { flex: 1, alignItems: "center", padding: 0 }, icon: obj10, name: obj11, indicator: size, indicatorButton: { position: "absolute", top: 0, end: 0, width: 48, height: 48, alignItems: "center", justifyContent: "center" }, iconHidden: { opacity: 0.3 } };
obj10 = { marginTop: nativeDefault.space.PX_24 };
const createStyles2 = createStyles.createStyles;
obj11 = { position: "absolute", start: 0, end: 0, bottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_4, textAlign: "center" };
size = { position: "absolute", top: nativeDefault.space.PX_8, end: nativeDefault.space.PX_8, width: 32, height: 32, alignItems: "flex-end", justifyContent: "flex-start" };
let closure_22 = createStyles2(obj9);
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let EyeSlashIcon;
  let IconButton;
  let alwaysVisible;
  let badge;
  let intl;
  let items;
  let name;
  let obj5;
  let obj6;
  let onShowPress;
  let showAccessibilityLabel;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(25);
  ({ badge, alwaysVisible, showAccessibilityLabel, onShowPress } = arg0);
  const tmp4 = closure_22();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  if (cResult[0] !== alwaysVisible) {
    let tmp6 = null;
    if (alwaysVisible) {
      const obj2 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
      const CircleInformationIcon = tmp(4788).CircleInformationIcon;
      tmp6 = closure_15(CircleInformationIcon, obj2);
    }
    cResult[0] = alwaysVisible;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.icon) {
    let tmp11;
    if (cResult[3] === (flag && tmp4.iconHidden)) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === badge) {
      let tmp12;
      if (cResult[6] === tmp11) {
        tmp12 = cResult[7];
      }
      let str = "text-default";
      if (flag) {
        str = "text-muted";
      }
      if (cResult[8] === badge.name) {
        if (cResult[9] === tmp4.name) {
          let tmp17;
          let tmp24Result;
          if (cResult[10] === str) {
            tmp17 = cResult[11];
          }
          if (cResult[12] === badge.name) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === onShowPress) {
                if (cResult[15] === showAccessibilityLabel) {
                  if (cResult[16] === (flag && null != onShowPress && !alwaysVisible)) {
                    if (cResult[17] === tmp4.indicator) {
                      let tmp20;
                      if (cResult[18] === tmp4.indicatorButton) {
                        tmp20 = cResult[19];
                      }
                      if (cResult[20] === tmp4.card) {
                        if (cResult[21] === tmp12) {
                          if (cResult[22] === tmp17) {
                            let tmp27;
                            if (cResult[23] === tmp20) {
                              tmp27 = cResult[24];
                            }
                            return tmp27;
                          }
                        }
                      }
                      const obj3 = { variant: "secondary", border: "none", radius: 16, style: tmp4.card, children: items };
                      items = [tmp12, tmp17, tmp20];
                      const tmp29 = authStore3(Card_Card.Card, obj3);
                      cResult[20] = tmp4.card;
                      cResult[21] = tmp12;
                      cResult[22] = tmp17;
                      cResult[23] = tmp20;
                      cResult[24] = tmp29;
                      tmp27 = tmp29;
                    }
                  }
                }
              }
            }
          }
          if (flag && null != onShowPress && !alwaysVisible) {
            const obj4 = { style: tmp4.indicatorButton, children: closure_15(IconButton, obj5) };
            obj5 = { size: "sm", variant: "secondary-overlay", icon: closure_15(EyeSlashIcon, obj6), accessibilityLabel: name, accessibilityHint: intl.string(intl7.t.hHHpvU), onPress: onShowPress };
            IconButton = tmp(7362).IconButton;
            obj6 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
            EyeSlashIcon = tmp(6384).EyeSlashIcon;
            name = showAccessibilityLabel;
            const tmp25 = hasOwnProperty;
            if (showAccessibilityLabel == null) {
              name = badge.name;
            }
            intl = tmp(1127).intl;
            tmp24Result = tmp24(tmp25, obj4);
          } else {
            tmp24Result = null != tmp5;
            if (tmp24Result) {
              const obj7 = { style: tmp4.indicator, "aria-hidden": true, children: tmp5 };
              tmp24Result = closure_15(hasOwnProperty, obj7);
            }
          }
          cResult[12] = badge.name;
          cResult[13] = tmp5;
          cResult[14] = onShowPress;
          cResult[15] = showAccessibilityLabel;
          cResult[16] = flag && null != onShowPress && !alwaysVisible;
          cResult[17] = tmp4.indicator;
          cResult[18] = tmp4.indicatorButton;
          cResult[19] = tmp24Result;
          tmp20 = tmp24Result;
        }
      }
      const obj8 = { variant: "text-xs/medium", color: str, lineClamp: 1, style: tmp4.name, "aria-hidden": true, children: badge.name };
      const tmp19 = closure_15(Text_Text.Text, obj8);
      cResult[8] = badge.name;
      cResult[9] = tmp4.name;
      cResult[10] = str;
      cResult[11] = tmp19;
      tmp17 = tmp19;
    }
    const obj9 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: tmp11 };
    const tmp15 = BadgeCatalogIconDefault;
    const tmp16 = closure_15(tmp15, obj9);
    cResult[5] = badge;
    cResult[6] = tmp11;
    cResult[7] = tmp16;
    tmp12 = tmp16;
  }
  const items1 = [tmp4.icon, flag && tmp4.iconHidden];
  cResult[2] = tmp4.icon;
  cResult[3] = flag && tmp4.iconHidden;
  cResult[4] = items1;
  tmp11 = items1;
}) : ((arg0) => {
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
  const tmp = closure_22();
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
  const Text = tmp8(4833).Text;
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
        IconButton = tmp8(7362).IconButton;
        obj7 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
        EyeSlashIcon = tmp8(6384).EyeSlashIcon;
        const tmp13 = hasOwnProperty;
        if (showAccessibilityLabel == null) {
          showAccessibilityLabel = badge.name;
        }
        intl = tmp8(1127).intl;
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
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let gesture = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  let alwaysVisible;
  let rounded;
  let tileSize;
  let tmp5;
  let x;
  let y;
  const tmp = badge;
  let tmp2 = alwaysVisible;
  let obj = badge(alwaysVisible[15]);
  const cResult = obj.c(37);
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const tmp4 = closure_22();
  if (cResult[0] === index) {
    if (cResult[1] === tileSize) {
      tmp5 = cResult[2];
    }
    ({ x, y } = tmp5);
    if (cResult[3] === badge) {
      let tmp9;
      if (cResult[4] === onPress) {
        tmp9 = cResult[5];
      }
      let closure_4 = tmp9;
      if (cResult[6] === tileSize) {
        if (cResult[7] === x) {
          let tmp10;
          if (cResult[8] === y) {
            tmp10 = cResult[9];
          }
          if (cResult[10] === tmp4.position) {
            let tmp11;
            if (cResult[11] === tmp10) {
              tmp11 = cResult[12];
            }
            style = tmp11;
            if (badge.hidden) {
              if (cResult[13] === badge) {
                let tmp17;
                if (cResult[14] === index) {
                  tmp17 = cResult[15];
                }
                if (cResult[16] === alwaysVisible) {
                  if (cResult[17] === badge) {
                    if (cResult[18] === tmp9) {
                      let tmp20;
                      if (cResult[19] === tmp17) {
                        tmp20 = cResult[20];
                      }
                      if (cResult[21] === tmp20) {
                        let tmp25;
                        if (cResult[22] === tmp11) {
                          tmp25 = cResult[23];
                        }
                        return tmp25;
                      }
                      class T {
                        constructor() {
                          tmp = onPress(badge);
                          return;
                        }
                      }
                      tmp28[0] = tmp11;
                      tmp28[1] = tmp20;
                      const tmp29 = closure_15(style, tmp28);
                      cResult[21] = tmp20;
                      cResult[22] = tmp11;
                      cResult[23] = tmp29;
                      tmp25 = tmp29;
                    }
                  }
                }
                class T {
                  constructor() {
                    tmp = onPress(badge);
                    return;
                  }
                }
                tmp23[0] = badge;
                tmp23[1] = alwaysVisible;
                tmp23[2] = tmp17;
                tmp23[3] = tmp9;
                const tmp24 = closure_15(closure_24, tmp23);
                cResult[16] = alwaysVisible;
                cResult[17] = badge;
                cResult[18] = tmp9;
                cResult[19] = tmp17;
                cResult[20] = tmp24;
                tmp20 = tmp24;
              }
              let intl = tmp(tmp2[16]).intl;
              let formatToPlainString = intl.formatToPlainString;
              let hidden = badge.hidden;
              class T {
                constructor() {
                  tmp = onPress(badge);
                  return;
                }
              }
              let obj2 = { badgeName: badge.name, position: index + 1 };
              const formatToPlainStringResult = formatToPlainString(hidden ? tmp18["dXg/Dl"] : tmp18["21W3EN"], obj2);
              cResult[13] = badge;
              cResult[14] = index;
              cResult[15] = formatToPlainStringResult;
              tmp17 = formatToPlainStringResult;
            } else {
              if (cResult[24] === alwaysVisible) {
                if (cResult[25] === badge) {
                  if (cResult[26] === tmp9) {
                    if (cResult[27] === index) {
                      let tmp12;
                      if (cResult[28] === tmp11) {
                        tmp12 = cResult[29];
                      }
                      class P {
                        constructor(arg0) {
                          closure_0 = badge;
                          tmp = jsx;
                          ref = undefined;
                          tmp2 = Pressable;
                          if (badge != null) {
                            ref = badge.ref;
                          }
                          obj = { ref, accessibilityLabel: null };
                          tmp4 = badge;
                          tmp6 = closure_0;
                          tmp7 = closure_2;
                          tmp5 = index;
                          intl = closure_0(closure_2[16]).intl;
                          formatToPlainString = intl.formatToPlainString;
                          hidden = badge.hidden;
                          t = closure_0(closure_2[16]).t;
                          obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
                          obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                          tmp8 = alwaysVisible;
                          stringResult = undefined;
                          if (alwaysVisible) {
                            intl2 = tmp6(tmp7[16]).intl;
                            string = intl2.string;
                            tmp6Result = tmp6(tmp7[24]);
                            stringResult = string(tmp6Result.getAlwaysVisibleCopy(tmp9));
                          }
                          obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
                          merged = Object.assign(obj5);
                          accessibilityActions = undefined;
                          if (badge != null) {
                            accessibilityActions = badge.accessibilityActions;
                          }
                          obj.accessibilityActions = accessibilityActions;
                          prop = undefined;
                          if (badge != null) {
                            prop = badge.onAccessibilityAction;
                          }
                          obj.onAccessibilityAction = prop;
                          if (tmp8) {
                            onPress = closure_4;
                          } else if (badge != null) {
                            onPress = badge.onPress;
                          }
                          obj.onPress = onPress;
                          fn = undefined;
                          if (null != badge) {
                            fn = () => { /* body not rendered: F142207 */ };
                          }
                          obj.onLongPress = fn;
                          obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                          obj.style = closure_5;
                          obj.children = tmp(f66779, { badge: tmp4, alwaysVisible: tmp8 });
                          return tmp(tmp2, obj);
                        }
                      }
                      if (cResult[30] !== tmp12) {
                        class P {
                          constructor(arg0) {
                            closure_0 = badge;
                            tmp = jsx;
                            ref = undefined;
                            tmp2 = Pressable;
                            if (badge != null) {
                              ref = badge.ref;
                            }
                            obj = { ref, accessibilityLabel: null };
                            tmp4 = badge;
                            tmp6 = closure_0;
                            tmp7 = closure_2;
                            tmp5 = index;
                            intl = closure_0(closure_2[16]).intl;
                            formatToPlainString = intl.formatToPlainString;
                            hidden = badge.hidden;
                            t = closure_0(closure_2[16]).t;
                            obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
                            obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                            tmp8 = alwaysVisible;
                            stringResult = undefined;
                            if (alwaysVisible) {
                              intl2 = tmp6(tmp7[16]).intl;
                              string = intl2.string;
                              tmp6Result = tmp6(tmp7[24]);
                              stringResult = string(tmp6Result.getAlwaysVisibleCopy(tmp9));
                            }
                            obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
                            merged = Object.assign(obj5);
                            accessibilityActions = undefined;
                            if (badge != null) {
                              accessibilityActions = badge.accessibilityActions;
                            }
                            obj.accessibilityActions = accessibilityActions;
                            prop = undefined;
                            if (badge != null) {
                              prop = badge.onAccessibilityAction;
                            }
                            obj.onAccessibilityAction = prop;
                            if (tmp8) {
                              onPress = closure_4;
                            } else if (badge != null) {
                              onPress = badge.onPress;
                            }
                            obj.onPress = onPress;
                            fn = undefined;
                            if (null != badge) {
                              fn = () => { /* body not rendered: F142207 */ };
                            }
                            obj.onLongPress = fn;
                            obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                            obj.style = closure_5;
                            obj.children = tmp(f66779, { badge: tmp4, alwaysVisible: tmp8 });
                            return tmp(tmp2, obj);
                          }
                        }
                        cResult[30] = tmp12;
                        class T {
                          constructor() {
                            tmp = onPress(badge);
                            return;
                          }
                        }
                        cResult[31] = tmp16;
                      }
                    }
                  }
                }
              }
              class P {
                constructor(arg0) {
                  closure_0 = badge;
                  tmp = jsx;
                  ref = undefined;
                  tmp2 = Pressable;
                  if (badge != null) {
                    ref = badge.ref;
                  }
                  obj = { ref, accessibilityLabel: null };
                  tmp4 = badge;
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  tmp5 = index;
                  intl = closure_0(closure_2[16]).intl;
                  formatToPlainString = intl.formatToPlainString;
                  hidden = badge.hidden;
                  t = closure_0(closure_2[16]).t;
                  obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
                  obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                  tmp8 = alwaysVisible;
                  stringResult = undefined;
                  if (alwaysVisible) {
                    intl2 = tmp6(tmp7[16]).intl;
                    string = intl2.string;
                    tmp6Result = tmp6(tmp7[24]);
                    stringResult = string(tmp6Result.getAlwaysVisibleCopy(tmp9));
                  }
                  obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
                  merged = Object.assign(obj5);
                  accessibilityActions = undefined;
                  if (badge != null) {
                    accessibilityActions = badge.accessibilityActions;
                  }
                  obj.accessibilityActions = accessibilityActions;
                  prop = undefined;
                  if (badge != null) {
                    prop = badge.onAccessibilityAction;
                  }
                  obj.onAccessibilityAction = prop;
                  if (tmp8) {
                    onPress = closure_4;
                  } else if (badge != null) {
                    onPress = badge.onPress;
                  }
                  obj.onPress = onPress;
                  fn = undefined;
                  if (null != badge) {
                    fn = () => { /* body not rendered: F142207 */ };
                  }
                  obj.onLongPress = fn;
                  obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                  obj.style = closure_5;
                  obj.children = tmp(f66779, { badge: tmp4, alwaysVisible: tmp8 });
                  return tmp(tmp2, obj);
                }
              }
              cResult[24] = alwaysVisible;
              class T {
                constructor() {
                  tmp = onPress(badge);
                  return;
                }
              }
              cResult[25] = badge;
              cResult[26] = tmp9;
              cResult[27] = index;
              cResult[28] = tmp11;
              cResult[29] = P;
              tmp12 = P;
            }
          }
          const items = [tmp4.position, ];
          class T {
            constructor() {
              tmp = onPress(badge);
              return;
            }
          }
          cResult[10] = tmp4.position;
          cResult[11] = tmp10;
          cResult[12] = items;
          tmp11 = items;
        }
      }
      size = { left: null, top: y, width: tileSize, height: tileSize };
      class T {
        constructor() {
          tmp = onPress(badge);
          return;
        }
      }
      cResult[6] = tileSize;
      cResult[7] = x;
      cResult[8] = y;
      cResult[9] = size;
      tmp10 = size;
    }
    class T {
      constructor() {
        tmp = onPress(badge);
        return;
      }
    }
    cResult[3] = badge;
    cResult[4] = onPress;
    cResult[5] = T;
    tmp9 = T;
  }
  if (typeof getSlotOffset === "function") {
    const point = { x: tmp6 * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP), y: rounded * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP) };
    class P {
      constructor(arg0) {
        closure_0 = badge;
        tmp = jsx;
        ref = undefined;
        tmp2 = Pressable;
        if (badge != null) {
          ref = badge.ref;
        }
        obj = { ref, accessibilityLabel: null };
        tmp4 = badge;
        tmp6 = closure_0;
        tmp7 = closure_2;
        tmp5 = index;
        intl = closure_0(closure_2[16]).intl;
        formatToPlainString = intl.formatToPlainString;
        hidden = badge.hidden;
        t = closure_0(closure_2[16]).t;
        obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
        obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
        tmp8 = alwaysVisible;
        stringResult = undefined;
        if (alwaysVisible) {
          intl2 = tmp6(tmp7[16]).intl;
          string = intl2.string;
          tmp6Result = tmp6(tmp7[24]);
          stringResult = string(tmp6Result.getAlwaysVisibleCopy(tmp9));
        }
        obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
        merged = Object.assign(obj5);
        accessibilityActions = undefined;
        if (badge != null) {
          accessibilityActions = badge.accessibilityActions;
        }
        obj.accessibilityActions = accessibilityActions;
        prop = undefined;
        if (badge != null) {
          prop = badge.onAccessibilityAction;
        }
        obj.onAccessibilityAction = prop;
        if (tmp8) {
          onPress = closure_4;
        } else if (badge != null) {
          onPress = badge.onPress;
        }
        obj.onPress = onPress;
        fn = undefined;
        if (null != badge) {
          fn = () => { /* body not rendered: F142207 */ };
        }
        obj.onLongPress = fn;
        obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
        obj.style = closure_5;
        obj.children = tmp(f66779, { badge: tmp4, alwaysVisible: tmp8 });
        return tmp(tmp2, obj);
      }
    }
    class T {
      constructor() {
        tmp = onPress(badge);
        return;
      }
    }
    rounded = Math.floor(index / tmp(tmp2[13]).BADGE_GRID_COLUMNS);
    cResult[0] = index;
    cResult[1] = tileSize;
    cResult[2] = point;
    tmp5 = point;
  } else {
    class P {
      constructor(arg0) {
        closure_0 = badge;
        tmp = jsx;
        ref = undefined;
        tmp2 = Pressable;
        if (badge != null) {
          ref = badge.ref;
        }
        obj = { ref, accessibilityLabel: null };
        tmp4 = badge;
        tmp6 = closure_0;
        tmp7 = closure_2;
        tmp5 = index;
        intl = closure_0(closure_2[16]).intl;
        formatToPlainString = intl.formatToPlainString;
        hidden = badge.hidden;
        t = closure_0(closure_2[16]).t;
        obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
        obj.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
        tmp8 = alwaysVisible;
        stringResult = undefined;
        if (alwaysVisible) {
          intl2 = tmp6(tmp7[16]).intl;
          string = intl2.string;
          tmp6Result = tmp6(tmp7[24]);
          stringResult = string(tmp6Result.getAlwaysVisibleCopy(tmp9));
        }
        obj5 = { accessibilityRole: "button", accessibilityHint: stringResult };
        merged = Object.assign(obj5);
        accessibilityActions = undefined;
        if (badge != null) {
          accessibilityActions = badge.accessibilityActions;
        }
        obj.accessibilityActions = accessibilityActions;
        prop = undefined;
        if (badge != null) {
          prop = badge.onAccessibilityAction;
        }
        obj.onAccessibilityAction = prop;
        if (tmp8) {
          onPress = closure_4;
        } else if (badge != null) {
          onPress = badge.onPress;
        }
        obj.onPress = onPress;
        fn = undefined;
        if (null != badge) {
          fn = () => { /* body not rendered: F142207 */ };
        }
        obj.onLongPress = fn;
        obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
        obj.style = closure_5;
        obj.children = tmp(f66779, { badge: tmp4, alwaysVisible: tmp8 });
        return tmp(tmp2, obj);
      }
    }
  }
}) : ((badge) => {
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
      let obj = { style: items1, children: closure_15(closure_24, obj2) };
      obj2 = { badge, alwaysVisible, showAccessibilityLabel: formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj3), onShowPress };
      let intl = tmp2(tmp3[16]).intl;
      formatToPlainString = intl.formatToPlainString;
      hidden = badge.hidden;
      t = tmp2(tmp3[16]).t;
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
        let obj = { ref, accessibilityLabel: formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj2), accessibilityActions, onAccessibilityAction: prop, onPress, onLongPress: fn, delayLongPress: ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS, style: items1, children: tmp(closure_24, { badge, alwaysVisible }) };
        const intl = intl7.intl;
        formatToPlainString = intl.formatToPlainString;
        hidden = badge.hidden;
        t = intl7.t;
        let stringResult;
        obj2 = { badgeName: badge.name, position: index + 1 };
        if (alwaysVisible) {
          const intl2 = tmp6(1127).intl;
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
          renderTileResult = closure_15(closure_21, obj4);
        }
        return renderTileResult;
      }
      renderTileResult = renderTile(null);
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}));
let closure_26 = { code: "function CustomizeBadgesSheetTsx2(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
let __initData = { code: "function CustomizeBadgesSheetTsx3(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}" };
const args = { code: "function CustomizeBadgesSheetTsx4(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
let closure_29 = { code: "function CustomizeBadgesSheetTsx5(){const{scrollOffset}=this.__closure;return scrollOffset.get();}" };
const __initData2 = { code: "function CustomizeBadgesSheetTsx6(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}" };
const __initData3 = { code: "function handleStart_CustomizeBadgesSheetTsx7(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_32 = { code: "function handleChange_CustomizeBadgesSheetTsx8(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport_0=dragViewport.get();if(viewport_0==null){return;}const fromTop=event.absoluteY-viewport_0.pageY;const fromBottom=viewport_0.pageY+viewport_0.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}}" };
const __initData4 = { code: "function handleFinalize_CustomizeBadgesSheetTsx9(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order_0=orderShared.get();const slot_0=order_0.indexOf(badgeId);if(slot_0>=0){const target_0=getSlotOffset(slot_0+slotOffset,tileSize);positionX.set(withTiming(target_0.x,timingStandard));positionY.set(withTiming(target_0.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order_0);}" };
let closure_34 = { code: "function CustomizeBadgesSheetTsx10(){const{handleStart}=this.__closure;handleStart();}" };
const __initData5 = { code: "function CustomizeBadgesSheetTsx11(event_0){const{handleChange}=this.__closure;handleChange(event_0);}" };
const __initData6 = { code: "function CustomizeBadgesSheetTsx12(){const{handleFinalize}=this.__closure;handleFinalize();}" };
const __initData7 = { code: "function CustomizeBadgesSheetTsx13(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}" };
const __initData8 = { code: "function CustomizeBadgesSheetTsx14(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
const __initData9 = { code: "function CustomizeBadgesSheetTsx15(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}" };
const __initData10 = { code: "function CustomizeBadgesSheetTsx16(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
const __initData11 = { code: "function CustomizeBadgesSheetTsx17(){const{scrollOffset}=this.__closure;return scrollOffset.get();}" };
const __initData12 = { code: "function CustomizeBadgesSheetTsx18(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}" };
let closure_43 = { code: "function handleStart_CustomizeBadgesSheetTsx19(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_44 = { code: "function handleChange_CustomizeBadgesSheetTsx20(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport_0=dragViewport.get();if(viewport_0==null){return;}const fromTop=event.absoluteY-viewport_0.pageY;const fromBottom=viewport_0.pageY+viewport_0.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}" };
let closure_45 = { code: "function handleFinalize_CustomizeBadgesSheetTsx21(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order_0=orderShared.get();const slot_0=order_0.indexOf(badgeId);if(slot_0>=0){const target_0=getSlotOffset(slot_0+slotOffset,tileSize);positionX.set(withTiming(target_0.x,timingStandard));positionY.set(withTiming(target_0.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order_0);}" };
let closure_46 = { code: "function CustomizeBadgesSheetTsx22(){const{handleFinalize}=this.__closure;handleFinalize();}" };
let closure_47 = { code: "function CustomizeBadgesSheetTsx23(event_0){const{handleChange}=this.__closure;handleChange(event_0);}" };
let closure_48 = { code: "function CustomizeBadgesSheetTsx24(){const{handleStart}=this.__closure;handleStart();}" };
const __initData13 = { code: "function CustomizeBadgesSheetTsx25(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}" };
let memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_50 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  let alwaysVisible;
  let animatedStyle;
  let closure_23;
  let closure_27;
  let isFirst;
  let isLast;
  let result;
  let rounded;
  let tileSize;
  const tmp = badge;
  let tmp2 = tileSize;
  let obj = badge(tileSize[15]);
  const cResult = obj.c(75);
  badge = badge.badge;
  let index = badge.index;
  tileSize = badge.tileSize;
  const slotOffset = badge.slotOffset;
  ({ isFirst, isLast, alwaysVisible } = badge);
  const orderShared = badge.orderShared;
  const isDragActive = badge.isDragActive;
  const scrollRef = badge.scrollRef;
  const scrollOffset = badge.scrollOffset;
  const autoScrollSpeed = badge.autoScrollSpeed;
  const onCommitOrder = badge.onCommitOrder;
  let onPress = badge.onPress;
  let tmp4 = closure_22();
  const position = tmp4;
  const badge_id = badge.badge_id;
  if (cResult[0] === badge) {
    let tmp5;
    if (cResult[1] === onPress) {
      tmp5 = cResult[2];
    }
    const tmp7 = index(tmp2[25])(tmp5);
    let closure_14 = tmp7;
    let tmpResult = tmp(tmp2[26]);
    const sharedValue = tmpResult.useSharedValue(false);
    const tmpResult9 = tmp(tmp2[26]);
    const sharedValue1 = tmpResult9.useSharedValue(null);
    if (typeof getSlotOffset === "function") {
      let items;
      let point = { x: result * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP), y: rounded * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP) };
      result = index % tmp(tmp2[13]).BADGE_GRID_COLUMNS;
      let _Math = Math;
      rounded = Math.floor(index / tmp(tmp2[13]).BADGE_GRID_COLUMNS);
      const tmpResult10 = tmp(tmp2[26]);
      const sharedValue2 = tmpResult10.useSharedValue(point.x);
      const tmpResult11 = tmp(tmp2[26]);
      const sharedValue3 = tmpResult11.useSharedValue(point.y);
      const tmpResult12 = tmp(tmp2[26]);
      const sharedValue4 = tmpResult12.useSharedValue(point);
      let num = 1;
      const tmpResult13 = tmp(tmp2[26]);
      const sharedValue5 = tmpResult13.useSharedValue(1);
      const fn2 = function j() {
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
      let obj2 = { orderShared, badgeId: badge_id, getSlotOffset: tmp11, slotOffset, tileSize };
      fn2.__closure = obj2;
      let num2 = 6182257637516;
      fn2.__workletHash = 6182257637516;
      fn2.__initData = animatedStyle;
      const tmpResult14 = tmp(tmp2[26]);
      class Z {
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
      let obj3 = { isThisTileDragging: sharedValue, positionX: sharedValue2, withTiming: tmp(tmp2[27]).withTiming, timingStandard: tmp(tmp2[28]).timingStandard, positionY: sharedValue3 };
      const useAnimatedReaction = tmpResult14.useAnimatedReaction;
      Z.__closure = obj3;
      Z.__workletHash = 4011295272705;
      Z.__initData = __initData;
      const animatedReaction = useAnimatedReaction(fn2, Z);
      if (cResult[3] === badge_id) {
        if (cResult[4] === orderShared) {
          if (cResult[5] === sharedValue2) {
            if (cResult[6] === sharedValue3) {
              if (cResult[7] === slotOffset) {
                let tmp23;
                if (cResult[8] === tileSize) {
                  tmp23 = cResult[9];
                }
                closure_21 = tmp23;
                function oe() {
                  return scrollOffset.get();
                }
                let obj4 = { scrollOffset };
                oe.__closure = obj4;
                oe.__workletHash = 10993823060256;
                oe.__initData = Re;
                function se(arg0, arg1) {
                  const value = null != arg1 && sharedValue.get();
                  if (value) {
                    const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
                    closure_21();
                  }
                }
                let obj5 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot: tmp23 };
                se.__closure = obj5;
                se.__workletHash = 9803143874483;
                se.__initData = __initData2;
                const tmpResult15 = tmp(tmp2[26]);
                const animatedReaction1 = tmpResult15.useAnimatedReaction(oe, se);
                if (cResult[10] === sharedValue4) {
                  if (cResult[11] === sharedValue1) {
                    if (cResult[12] === isDragActive) {
                      if (cResult[13] === sharedValue) {
                        if (cResult[14] === sharedValue2) {
                          if (cResult[15] === sharedValue3) {
                            if (cResult[16] === sharedValue5) {
                              let tmp28;
                              if (cResult[17] === scrollRef) {
                                tmp28 = cResult[18];
                              }
                              closure_22 = tmp28;
                              if (cResult[19] === autoScrollSpeed) {
                                if (cResult[20] === sharedValue1) {
                                  if (cResult[21] === sharedValue) {
                                    if (cResult[22] === sharedValue2) {
                                      if (cResult[23] === sharedValue3) {
                                        let tmp31;
                                        if (cResult[24] === tmp23) {
                                          tmp31 = cResult[25];
                                        }
                                        getSlotOffset = tmp31;
                                        if (cResult[26] === autoScrollSpeed) {
                                          if (cResult[27] === badge_id) {
                                            if (cResult[28] === sharedValue1) {
                                              if (cResult[29] === isDragActive) {
                                                if (cResult[30] === sharedValue) {
                                                  if (cResult[31] === onCommitOrder) {
                                                    if (cResult[32] === orderShared) {
                                                      if (cResult[33] === sharedValue2) {
                                                        if (cResult[34] === sharedValue3) {
                                                          if (cResult[35] === sharedValue5) {
                                                            if (cResult[36] === slotOffset) {
                                                              let tmp35;
                                                              if (cResult[37] === tileSize) {
                                                                tmp35 = cResult[38];
                                                              }
                                                              closure_24 = tmp35;
                                                              if (cResult[39] === tmp31) {
                                                                if (cResult[40] === tmp35) {
                                                                  let tmp38;
                                                                  if (cResult[41] === tmp28) {
                                                                    tmp38 = cResult[42];
                                                                  }
                                                                  gesture = tmp38;
                                                                  const tmpResult16 = tmp(tmp2[26]);
                                                                  class De {
                                                                    constructor() {
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
                                                                        items = [{ translateX: sharedValue2.get() - point.x }, , ];
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
                                                                  }
                                                                  let obj6 = { isThisTileDragging: sharedValue, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, scale: sharedValue5 };
                                                                  De.__closure = obj6;
                                                                  De.__workletHash = 3612359203254;
                                                                  De.__initData = __initData7;
                                                                  animatedStyle = tmpResult16.useAnimatedStyle(De);
                                                                  if (cResult[49] === badge_id) {
                                                                    if (cResult[50] === onCommitOrder) {
                                                                      if (cResult[51] === orderShared) {
                                                                        let tmp49;
                                                                        let tmp57;
                                                                        if (cResult[52] === slotOffset) {
                                                                          tmp49 = cResult[53];
                                                                        }
                                                                        __initData = tmp49;
                                                                        if (cResult[54] === alwaysVisible) {
                                                                          if (cResult[55] === animatedStyle) {
                                                                            if (cResult[56] === badge) {
                                                                              if (cResult[57] === tmp49) {
                                                                                if (cResult[58] === tmp7) {
                                                                                  if (cResult[59] === index) {
                                                                                    if (cResult[60] === isFirst) {
                                                                                      if (cResult[61] === isLast) {
                                                                                        if (cResult[62] === tmp4.fill) {
                                                                                          if (cResult[63] === tmp4.position) {
                                                                                            if (cResult[64] === tmp38) {
                                                                                              let tmp51;
                                                                                              if (cResult[65] === tileSize) {
                                                                                                tmp51 = cResult[67];
                                                                                              }
                                                                                              const _Symbol = Symbol;
                                                                                              class De {
                                                                                                constructor() {
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
                                                                                                    items = [{ translateX: sharedValue2.get() - point.x }, , ];
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
                                                                                              }
                                                                                              return tmp51;
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
                                                                        class De {
                                                                          constructor() {
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
                                                                              items = [{ translateX: sharedValue2.get() - point.x }, , ];
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
                                                                        }
                                                                        const forResult = Symbol.for("react.early_return_sentinel");
                                                                        items = [];
                                                                        if (!isFirst) {
                                                                          const push = items.push;
                                                                          const obj7 = { name: "moveup", label: tmp53(tmp(tmp2[16]).t.eR2XSh) };
                                                                          let intl = tmp(tmp2[16]).intl;
                                                                          class De {
                                                                            constructor() {
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
                                                                                items = [{ translateX: sharedValue2.get() - point.x }, , ];
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
                                                                          }
                                                                          push(obj7);
                                                                        }
                                                                        if (!isLast) {
                                                                          const push2 = items.push;
                                                                          const obj8 = { name: "movedown", label: tmp55(tmp(tmp2[16]).t.wWi0DL) };
                                                                          let intl2 = tmp(tmp2[16]).intl;
                                                                          class De {
                                                                            constructor() {
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
                                                                                items = [{ translateX: sharedValue2.get() - point.x }, , ];
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
                                                                          }
                                                                          push2(obj8);
                                                                        }
                                                                        if (cResult[68] !== tmp49) {
                                                                          class Re {
                                                                            constructor(nativeEvent, onAccessibilityAction) {
                                                                              const actionName = nativeEvent.nativeEvent.actionName;
                                                                              if ("moveup" !== actionName) {
                                                                                if ("movedown" !== actionName) {
                                                                                  if (onAccessibilityAction != null) {
                                                                                    onAccessibilityAction = onAccessibilityAction.onAccessibilityAction;
                                                                                    if (onAccessibilityAction != null) {
                                                                                      const result = onAccessibilityAction(nativeEvent);
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                              closure_27(nativeEvent);
                                                                            }
                                                                          }
                                                                          cResult[68] = tmp49;
                                                                          class De {
                                                                            constructor() {
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
                                                                                items = [{ translateX: sharedValue2.get() - point.x }, , ];
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
                                                                          }
                                                                          cResult[69] = Re;
                                                                          tmp57 = Re;
                                                                        } else {
                                                                          class Re {
                                                                            constructor(nativeEvent, onAccessibilityAction) {
                                                                              const actionName = nativeEvent.nativeEvent.actionName;
                                                                              if ("moveup" !== actionName) {
                                                                                if ("movedown" !== actionName) {
                                                                                  if (onAccessibilityAction != null) {
                                                                                    onAccessibilityAction = onAccessibilityAction.onAccessibilityAction;
                                                                                    if (onAccessibilityAction != null) {
                                                                                      const result = onAccessibilityAction(nativeEvent);
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                              closure_27(nativeEvent);
                                                                            }
                                                                          }
                                                                        }
                                                                        Re = tmp57;
                                                                        class Ee {
                                                                          constructor(arg0) {
                                                                            closure_0 = badge;
                                                                            tmp = closure_15;
                                                                            tmp2 = badge;
                                                                            tmp3 = tileSize;
                                                                            obj = { gesture: closure_25, children: null };
                                                                            GestureDetector = badge(tileSize[31]).GestureDetector;
                                                                            obj1 = { style: null, children: null };
                                                                            items = [, , ];
                                                                            items[0] = closure_12.position;
                                                                            size = { width: tileSize, height: tileSize };
                                                                            items[1] = size;
                                                                            items[2] = closure_26;
                                                                            obj1.style = items;
                                                                            ref = undefined;
                                                                            View = index(tileSize[26]).View;
                                                                            tmp4 = closure_12;
                                                                            tmp5 = alwaysVisible;
                                                                            if (badge != null) {
                                                                              ref = badge.ref;
                                                                            }
                                                                            obj8 = { ref, accessible: true, accessibilityLabel: null };
                                                                            tmp7 = closure_0;
                                                                            tmp8 = index;
                                                                            intl = tmp2(tmp3[16]).intl;
                                                                            formatToPlainString = intl.formatToPlainString;
                                                                            hidden = closure_0.hidden;
                                                                            t = tmp2(tmp3[16]).t;
                                                                            obj9 = { badgeName: tmp7.name, position: tmp8 + 1 };
                                                                            obj8.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj9);
                                                                            tmp9 = alwaysVisible;
                                                                            stringResult = undefined;
                                                                            if (alwaysVisible) {
                                                                              intl2 = tmp2(tmp3[16]).intl;
                                                                              string = intl2.string;
                                                                              tmp2Result = tmp2(tmp3[24]);
                                                                              stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp10));
                                                                            }
                                                                            obj10 = { accessibilityRole: "button", accessibilityHint: stringResult };
                                                                            merged = Object.assign(obj10);
                                                                            accessibilityActions = undefined;
                                                                            if (badge != null) {
                                                                              accessibilityActions = badge.accessibilityActions;
                                                                            }
                                                                            if (accessibilityActions == null) {
                                                                              accessibilityActions = [];
                                                                            }
                                                                            items1 = [...closure_28];
                                                                            obj8.accessibilityActions = items1;
                                                                            obj8.onAccessibilityAction = function onAccessibilityAction(arg0) {
                                                                              return Re(arg0, ref);
                                                                            };
                                                                            if (tmp9) {
                                                                              onPress = closure_14;
                                                                            } else if (badge != null) {
                                                                              onPress = badge.onPress;
                                                                            }
                                                                            obj8.onPress = onPress;
                                                                            fn = undefined;
                                                                            if (null != badge) {
                                                                              fn = (arg0) => {
                                                                                const obj = HapticUtils;
                                                                                const result = obj.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
                                                                                const onLongPress = ref.onLongPress;
                                                                                if (onLongPress != null) {
                                                                                  onLongPress(arg0);
                                                                                }
                                                                              };
                                                                            }
                                                                            obj8.onLongPress = fn;
                                                                            obj8.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                                                                            obj8.style = tmp4.fill;
                                                                            obj8.children = tmp(closure_24, { badge: tmp7, alwaysVisible: tmp9 });
                                                                            obj1.children = tmp(tmp5, obj8);
                                                                            obj.children = tmp(View, obj1);
                                                                            return tmp(GestureDetector, obj);
                                                                          }
                                                                        }
                                                                        if (alwaysVisible) {
                                                                          class Re {
                                                                            constructor(nativeEvent, onAccessibilityAction) {
                                                                              const actionName = nativeEvent.nativeEvent.actionName;
                                                                              if ("moveup" !== actionName) {
                                                                                if ("movedown" !== actionName) {
                                                                                  if (onAccessibilityAction != null) {
                                                                                    onAccessibilityAction = onAccessibilityAction.onAccessibilityAction;
                                                                                    if (onAccessibilityAction != null) {
                                                                                      const result = onAccessibilityAction(nativeEvent);
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                              closure_27(nativeEvent);
                                                                            }
                                                                          }
                                                                        }
                                                                        cResult[54] = alwaysVisible;
                                                                        cResult[55] = animatedStyle;
                                                                        class Oe {
                                                                          constructor(nativeEvent) {
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
                                                                                const AccessibilityAnnouncer = tmp4(4545).AccessibilityAnnouncer;
                                                                                const announce = AccessibilityAnnouncer.announce;
                                                                                const intl = tmp4(1127).intl;
                                                                                const obj2 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
                                                                                announce(intl.formatToPlainString(intl7.t.qPHr0x, obj2));
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                        cResult[56] = badge;
                                                                        cResult[57] = tmp49;
                                                                        cResult[58] = tmp7;
                                                                        cResult[59] = index;
                                                                        cResult[60] = isFirst;
                                                                        cResult[61] = isLast;
                                                                        cResult[62] = tmp4.fill;
                                                                        cResult[63] = tmp4.position;
                                                                        class Z {
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
                                                                        cResult[64] = tmp38;
                                                                        cResult[65] = tileSize;
                                                                        cResult[66] = Ee;
                                                                        cResult[67] = forResult;
                                                                        tmp51 = forResult;
                                                                      }
                                                                    }
                                                                  }
                                                                  class Oe {
                                                                    constructor(nativeEvent) {
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
                                                                          const AccessibilityAnnouncer = tmp4(4545).AccessibilityAnnouncer;
                                                                          const announce = AccessibilityAnnouncer.announce;
                                                                          const intl = tmp4(1127).intl;
                                                                          const obj2 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
                                                                          announce(intl.formatToPlainString(intl7.t.qPHr0x, obj2));
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  cResult[49] = badge_id;
                                                                  cResult[50] = onCommitOrder;
                                                                  cResult[51] = orderShared;
                                                                  cResult[52] = slotOffset;
                                                                  cResult[53] = Oe;
                                                                  tmp49 = Oe;
                                                                }
                                                              }
                                                              if (cResult[45] !== tmp31) {
                                                                class Re {
                                                                  constructor(nativeEvent, onAccessibilityAction) {
                                                                    const actionName = nativeEvent.nativeEvent.actionName;
                                                                    if ("moveup" !== actionName) {
                                                                      if ("movedown" !== actionName) {
                                                                        if (onAccessibilityAction != null) {
                                                                          onAccessibilityAction = onAccessibilityAction.onAccessibilityAction;
                                                                          if (onAccessibilityAction != null) {
                                                                            const result = onAccessibilityAction(nativeEvent);
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    closure_27(nativeEvent);
                                                                  }
                                                                }
                                                                class De {
                                                                  constructor() {
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
                                                                      items = [{ translateX: sharedValue2.get() - point.x }, , ];
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
                                                                }
                                                                tmp41.__workletHash = 3880158985991;
                                                                tmp41.__initData = __initData5;
                                                                cResult[45] = tmp31;
                                                                cResult[46] = tmp41;
                                                                class Ee {
                                                                  constructor(arg0) {
                                                                    closure_0 = badge;
                                                                    tmp = closure_15;
                                                                    tmp2 = badge;
                                                                    tmp3 = tileSize;
                                                                    obj = { gesture: closure_25, children: null };
                                                                    GestureDetector = badge(tileSize[31]).GestureDetector;
                                                                    obj1 = { style: null, children: null };
                                                                    items = [, , ];
                                                                    items[0] = closure_12.position;
                                                                    size = { width: tileSize, height: tileSize };
                                                                    items[1] = size;
                                                                    items[2] = closure_26;
                                                                    obj1.style = items;
                                                                    ref = undefined;
                                                                    View = index(tileSize[26]).View;
                                                                    tmp4 = closure_12;
                                                                    tmp5 = alwaysVisible;
                                                                    if (badge != null) {
                                                                      ref = badge.ref;
                                                                    }
                                                                    obj8 = { ref, accessible: true, accessibilityLabel: null };
                                                                    tmp7 = closure_0;
                                                                    tmp8 = index;
                                                                    intl = tmp2(tmp3[16]).intl;
                                                                    formatToPlainString = intl.formatToPlainString;
                                                                    hidden = closure_0.hidden;
                                                                    t = tmp2(tmp3[16]).t;
                                                                    obj9 = { badgeName: tmp7.name, position: tmp8 + 1 };
                                                                    obj8.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj9);
                                                                    tmp9 = alwaysVisible;
                                                                    stringResult = undefined;
                                                                    if (alwaysVisible) {
                                                                      intl2 = tmp2(tmp3[16]).intl;
                                                                      string = intl2.string;
                                                                      tmp2Result = tmp2(tmp3[24]);
                                                                      stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp10));
                                                                    }
                                                                    obj10 = { accessibilityRole: "button", accessibilityHint: stringResult };
                                                                    merged = Object.assign(obj10);
                                                                    accessibilityActions = undefined;
                                                                    if (badge != null) {
                                                                      accessibilityActions = badge.accessibilityActions;
                                                                    }
                                                                    if (accessibilityActions == null) {
                                                                      accessibilityActions = [];
                                                                    }
                                                                    items1 = [...closure_28];
                                                                    obj8.accessibilityActions = items1;
                                                                    obj8.onAccessibilityAction = function onAccessibilityAction(arg0) {
                                                                      return Re(arg0, ref);
                                                                    };
                                                                    if (tmp9) {
                                                                      onPress = closure_14;
                                                                    } else if (badge != null) {
                                                                      onPress = badge.onPress;
                                                                    }
                                                                    obj8.onPress = onPress;
                                                                    fn = undefined;
                                                                    if (null != badge) {
                                                                      fn = (arg0) => {
                                                                        const obj = HapticUtils;
                                                                        const result = obj.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
                                                                        const onLongPress = ref.onLongPress;
                                                                        if (onLongPress != null) {
                                                                          onLongPress(arg0);
                                                                        }
                                                                      };
                                                                    }
                                                                    obj8.onLongPress = fn;
                                                                    obj8.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                                                                    obj8.style = tmp4.fill;
                                                                    obj8.children = tmp(closure_24, { badge: tmp7, alwaysVisible: tmp9 });
                                                                    obj1.children = tmp(tmp5, obj8);
                                                                    obj.children = tmp(View, obj1);
                                                                    return tmp(GestureDetector, obj);
                                                                  }
                                                                }
                                                              } else {
                                                                class Re {
                                                                  constructor(nativeEvent, onAccessibilityAction) {
                                                                    const actionName = nativeEvent.nativeEvent.actionName;
                                                                    if ("moveup" !== actionName) {
                                                                      if ("movedown" !== actionName) {
                                                                        if (onAccessibilityAction != null) {
                                                                          onAccessibilityAction = onAccessibilityAction.onAccessibilityAction;
                                                                          if (onAccessibilityAction != null) {
                                                                            const result = onAccessibilityAction(nativeEvent);
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    closure_27(nativeEvent);
                                                                  }
                                                                }
                                                              }
                                                              if (cResult[47] !== tmp35) {
                                                                class Re {
                                                                  constructor(nativeEvent, onAccessibilityAction) {
                                                                    const actionName = nativeEvent.nativeEvent.actionName;
                                                                    if ("moveup" !== actionName) {
                                                                      if ("movedown" !== actionName) {
                                                                        if (onAccessibilityAction != null) {
                                                                          onAccessibilityAction = onAccessibilityAction.onAccessibilityAction;
                                                                          if (onAccessibilityAction != null) {
                                                                            const result = onAccessibilityAction(nativeEvent);
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    closure_27(nativeEvent);
                                                                  }
                                                                }
                                                                class De {
                                                                  constructor() {
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
                                                                      items = [{ translateX: sharedValue2.get() - point.x }, , ];
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
                                                                }
                                                                tmp43.__workletHash = 16882285685444;
                                                                tmp43.__initData = __initData6;
                                                                cResult[47] = tmp35;
                                                                cResult[48] = tmp43;
                                                                class Ee {
                                                                  constructor(arg0) {
                                                                    closure_0 = badge;
                                                                    tmp = closure_15;
                                                                    tmp2 = badge;
                                                                    tmp3 = tileSize;
                                                                    obj = { gesture: closure_25, children: null };
                                                                    GestureDetector = badge(tileSize[31]).GestureDetector;
                                                                    obj1 = { style: null, children: null };
                                                                    items = [, , ];
                                                                    items[0] = closure_12.position;
                                                                    size = { width: tileSize, height: tileSize };
                                                                    items[1] = size;
                                                                    items[2] = closure_26;
                                                                    obj1.style = items;
                                                                    ref = undefined;
                                                                    View = index(tileSize[26]).View;
                                                                    tmp4 = closure_12;
                                                                    tmp5 = alwaysVisible;
                                                                    if (badge != null) {
                                                                      ref = badge.ref;
                                                                    }
                                                                    obj8 = { ref, accessible: true, accessibilityLabel: null };
                                                                    tmp7 = closure_0;
                                                                    tmp8 = index;
                                                                    intl = tmp2(tmp3[16]).intl;
                                                                    formatToPlainString = intl.formatToPlainString;
                                                                    hidden = closure_0.hidden;
                                                                    t = tmp2(tmp3[16]).t;
                                                                    obj9 = { badgeName: tmp7.name, position: tmp8 + 1 };
                                                                    obj8.accessibilityLabel = formatToPlainString(hidden ? t["dXg/Dl"] : t["21W3EN"], obj9);
                                                                    tmp9 = alwaysVisible;
                                                                    stringResult = undefined;
                                                                    if (alwaysVisible) {
                                                                      intl2 = tmp2(tmp3[16]).intl;
                                                                      string = intl2.string;
                                                                      tmp2Result = tmp2(tmp3[24]);
                                                                      stringResult = string(tmp2Result.getAlwaysVisibleCopy(tmp10));
                                                                    }
                                                                    obj10 = { accessibilityRole: "button", accessibilityHint: stringResult };
                                                                    merged = Object.assign(obj10);
                                                                    accessibilityActions = undefined;
                                                                    if (badge != null) {
                                                                      accessibilityActions = badge.accessibilityActions;
                                                                    }
                                                                    if (accessibilityActions == null) {
                                                                      accessibilityActions = [];
                                                                    }
                                                                    items1 = [...closure_28];
                                                                    obj8.accessibilityActions = items1;
                                                                    obj8.onAccessibilityAction = function onAccessibilityAction(arg0) {
                                                                      return Re(arg0, ref);
                                                                    };
                                                                    if (tmp9) {
                                                                      onPress = closure_14;
                                                                    } else if (badge != null) {
                                                                      onPress = badge.onPress;
                                                                    }
                                                                    obj8.onPress = onPress;
                                                                    fn = undefined;
                                                                    if (null != badge) {
                                                                      fn = (arg0) => {
                                                                        const obj = HapticUtils;
                                                                        const result = obj.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
                                                                        const onLongPress = ref.onLongPress;
                                                                        if (onLongPress != null) {
                                                                          onLongPress(arg0);
                                                                        }
                                                                      };
                                                                    }
                                                                    obj8.onLongPress = fn;
                                                                    obj8.delayLongPress = tmp2(tmp3[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                                                                    obj8.style = tmp4.fill;
                                                                    obj8.children = tmp(closure_24, { badge: tmp7, alwaysVisible: tmp9 });
                                                                    obj1.children = tmp(tmp5, obj8);
                                                                    obj.children = tmp(View, obj1);
                                                                    return tmp(GestureDetector, obj);
                                                                  }
                                                                }
                                                              } else {
                                                                class Re {
                                                                  constructor(nativeEvent, onAccessibilityAction) {
                                                                    const actionName = nativeEvent.nativeEvent.actionName;
                                                                    if ("moveup" !== actionName) {
                                                                      if ("movedown" !== actionName) {
                                                                        if (onAccessibilityAction != null) {
                                                                          onAccessibilityAction = onAccessibilityAction.onAccessibilityAction;
                                                                          if (onAccessibilityAction != null) {
                                                                            const result = onAccessibilityAction(nativeEvent);
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    closure_27(nativeEvent);
                                                                  }
                                                                }
                                                              }
                                                              const Gesture = tmp(tmp2[31]).Gesture;
                                                              const PanResult = Gesture.Pan();
                                                              const minDistanceResult = PanResult.minDistance(8);
                                                              const onStartResult = minDistanceResult.onStart(tmp39);
                                                              onStartResult.onChange(tmp40);
                                                              cResult[39] = tmp31;
                                                              cResult[40] = tmp35;
                                                              cResult[42] = tmp46;
                                                              tmp38 = tmp46;
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
                                        tmp36.__closure = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize: null, positionX: sharedValue2, withTiming: tmp(tmp2[27]).withTiming, timingStandard: tmp(tmp2[28]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: null, runOnJS: tmp(tmp2[26]).runOnJS, triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes, onCommitOrder };
                                        tmp36.__workletHash = 1571326119919;
                                        tmp36.__initData = __initData4;
                                        cResult[26] = autoScrollSpeed;
                                        cResult[27] = badge_id;
                                        cResult[28] = sharedValue1;
                                        const obj11 = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize: null, positionX: sharedValue2, withTiming: tmp(tmp2[27]).withTiming, timingStandard: tmp(tmp2[28]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: null, runOnJS: tmp(tmp2[26]).runOnJS, triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes, onCommitOrder };
                                        class Z {
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
                                        cResult[29] = isDragActive;
                                        cResult[30] = sharedValue;
                                        cResult[31] = onCommitOrder;
                                        cResult[32] = orderShared;
                                        cResult[33] = sharedValue2;
                                        cResult[34] = sharedValue3;
                                        cResult[35] = sharedValue5;
                                        cResult[36] = slotOffset;
                                        cResult[37] = tileSize;
                                        cResult[38] = tmp36;
                                        tmp35 = tmp36;
                                      }
                                    }
                                  }
                                }
                              }
                              tmp32.__closure = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot: tmp23, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue3, autoScrollSpeed: null, clamp: tmp(tmp2[26]).clamp };
                              tmp32.__workletHash = 11658962157301;
                              cResult[19] = autoScrollSpeed;
                              cResult[20] = sharedValue1;
                              cResult[21] = sharedValue;
                              cResult[22] = sharedValue2;
                              cResult[23] = sharedValue3;
                              cResult[24] = tmp23;
                              cResult[25] = tmp32;
                              tmp31 = tmp32;
                              const obj12 = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot: tmp23, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue3, autoScrollSpeed: null, clamp: tmp(tmp2[26]).clamp };
                            }
                          }
                        }
                      }
                    }
                  }
                }
                function handleStart() {
                  const obj = isDragActive;
                  if (!isDragActive.get()) {
                    const obj2 = ReanimatedRexport;
                    obj2.runOnJS(ContextMenuState.hideContextMenu)();
                    const result = obj.set(true);
                    const result1 = sharedValue.set(true);
                    const point = { x: sharedValue2.get(), y: sharedValue3.get() };
                    set = sharedValue4.set;
                    const result2 = set(point);
                    const obj4 = ReanimatedRexport;
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
                    const tmp2Result = timing;
                    set3(tmp2Result.withTiming(c17, timingPresets.timingStandard));
                    const tmp2Result2 = ReanimatedRexport;
                    const runOnJSResult = tmp2Result2.runOnJS(HapticUtils.triggerHapticFeedback);
                    runOnJSResult(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_START);
                  }
                }
                const obj13 = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: tmp(tmp2[26]).runOnJS, hideContextMenu: tmp(tmp2[30]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: tmp(tmp2[26]).measure, scrollRef, dragViewport: null, scale: sharedValue5, withTiming: tmp(tmp2[27]).withTiming, DRAG_SCALE: sharedValue2, timingStandard: tmp(tmp2[28]).timingStandard, triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes };
                class Z {
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
                handleStart.__closure = obj13;
                handleStart.__workletHash = 11005478611755;
                handleStart.__initData = __initData3;
                cResult[10] = sharedValue4;
                cResult[11] = sharedValue1;
                cResult[12] = isDragActive;
                cResult[13] = sharedValue;
                cResult[14] = sharedValue2;
                cResult[15] = sharedValue3;
                cResult[16] = sharedValue5;
                cResult[17] = scrollRef;
                cResult[18] = handleStart;
                tmp28 = handleStart;
              }
            }
          }
        }
      }
      const fn3 = function q() {
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
      fn3.__closure = { orderShared, tileSize, BADGE_GRID_GAP: tmp(tmp2[13]).BADGE_GRID_GAP, clamp: tmp(tmp2[26]).clamp, positionX: sharedValue2, BADGE_GRID_COLUMNS: tmp(tmp2[13]).BADGE_GRID_COLUMNS, positionY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp(tmp2[29]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp(tmp2[26]).runOnJS, triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes };
      fn3.__workletHash = 1083237242858;
      fn3.__initData = items;
      cResult[3] = badge_id;
      cResult[4] = orderShared;
      cResult[5] = sharedValue2;
      cResult[6] = sharedValue3;
      cResult[7] = slotOffset;
      cResult[8] = tileSize;
      cResult[9] = fn3;
      tmp23 = fn3;
      const obj14 = { orderShared, tileSize, BADGE_GRID_GAP: tmp(tmp2[13]).BADGE_GRID_GAP, clamp: tmp(tmp2[26]).clamp, positionX: sharedValue2, BADGE_GRID_COLUMNS: tmp(tmp2[13]).BADGE_GRID_COLUMNS, positionY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp(tmp2[29]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp(tmp2[26]).runOnJS, triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes };
    } else {
      class Re {
        constructor(nativeEvent, onAccessibilityAction) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if ("moveup" !== actionName) {
            if ("movedown" !== actionName) {
              if (onAccessibilityAction != null) {
                onAccessibilityAction = onAccessibilityAction.onAccessibilityAction;
                if (onAccessibilityAction != null) {
                  const result = onAccessibilityAction(nativeEvent);
                }
              }
            }
          }
          closure_27(nativeEvent);
        }
      }
      throw new TypeError("Trying to call a non-function");
    }
  }
  let fn = function n() {
    onPress(badge);
  };
  cResult[0] = badge;
  cResult[1] = onPress;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((badge) => {
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
  gesture = undefined;
  getSlotOffset = undefined;
  closure_24 = undefined;
  let items3;
  ({ isFirst, isLast, onHide } = badge);
  const position = gesture();
  const badge_id = badge.badge_id;
  let tmp = tileSize;
  let closure_14 = index(tileSize[25])(() => {
    onPress(badge);
  });
  let tmp2 = badge;
  let obj = badge(tileSize[26]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = badge(tileSize[26]);
  const sharedValue1 = obj2.useSharedValue(null);
  if (typeof getSlotOffset === "function") {
    let renderTileResult;
    let point = { x: result * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP), y: rounded * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP) };
    result = index % tmp2(tmp[13]).BADGE_GRID_COLUMNS;
    let _Math = Math;
    rounded = Math.floor(index / tmp2(tmp[13]).BADGE_GRID_COLUMNS);
    let tmp2Result = tmp2(tmp[26]);
    sharedValue2 = tmp2Result.useSharedValue(point.x);
    const tmp2Result7 = tmp2(tmp[26]);
    sharedValue3 = tmp2Result7.useSharedValue(point.y);
    const tmp2Result8 = tmp2(tmp[26]);
    sharedValue4 = tmp2Result8.useSharedValue(point);
    let num = 1;
    const tmp2Result9 = tmp2(tmp[26]);
    sharedValue5 = tmp2Result9.useSharedValue(1);
    let fn = function w() {
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
    let num2 = 5732066311771;
    fn.__workletHash = 5732066311771;
    fn.__initData = __initData8;
    const tmp2Result10 = tmp2(tmp[26]);
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
    let obj4 = { isThisTileDragging: sharedValue, positionX: sharedValue2, withTiming: tmp2(tmp[27]).withTiming, timingStandard: tmp2(tmp[28]).timingStandard, positionY: sharedValue3 };
    const useAnimatedReaction = tmp2Result10.useAnimatedReaction;
    C.__closure = obj4;
    C.__workletHash = 16081465994486;
    let tmp15 = __initData9;
    C.__initData = __initData9;
    const animatedReaction = useAnimatedReaction(fn, C);
    class U {
      constructor() {
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
      }
    }
    let obj5 = { orderShared, tileSize, BADGE_GRID_GAP: tmp2(tmp[13]).BADGE_GRID_GAP, clamp: tmp2(tmp[26]).clamp, positionX: sharedValue2, BADGE_GRID_COLUMNS: tmp2(tmp[13]).BADGE_GRID_COLUMNS, positionY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp2(tmp[29]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp2(tmp[26]).runOnJS, triggerHapticFeedback: tmp2(tmp[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp2(tmp[11]).HapticFeedbackTypes };
    const useCallback = slotOffset.useCallback;
    U.__closure = obj5;
    U.__workletHash = 1742164926393;
    U.__initData = __initData10;
    let items = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
    reslot = useCallback(U, items);
    const tmp2Result11 = tmp2(tmp[26]);
    class V {
      constructor() {
        return scrollOffset.get();
      }
    }
    let obj6 = { scrollOffset };
    V.__closure = obj6;
    V.__workletHash = 9584962527667;
    V.__initData = __initData11;
    class X {
      constructor(arg0, arg1) {
        const value = null != arg1 && sharedValue.get();
        if (value) {
          const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
          callback();
        }
      }
    }
    const obj7 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot };
    X.__closure = obj7;
    X.__workletHash = 959241592972;
    X.__initData = __initData12;
    const animatedReaction1 = tmp2Result11.useAnimatedReaction(V, X);
    let items1 = [reslot, scrollRef, sharedValue1, autoScrollSpeed, badge_id, tileSize, slotOffset, orderShared, isDragActive, onCommitOrder, sharedValue, sharedValue5, sharedValue2, sharedValue3, sharedValue4];
    gesture = slotOffset.useMemo(() => {
      function handleStart() {
        const obj = isDragActive;
        if (!isDragActive.get()) {
          const obj2 = badge(tileSize[26]);
          obj2.runOnJS(badge(tileSize[30]).hideContextMenu)();
          const result = obj.set(true);
          const result1 = sharedValue.set(true);
          const point = { x: closure_1_17.get(), y: sharedValue3.get() };
          const result2 = set(point);
          const obj4 = badge(tileSize[26]);
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
          const tmp2Result = badge(tileSize[27]);
          set3(tmp2Result.withTiming(sharedValue2, badge(tileSize[28]).timingStandard));
          const tmp2Result2 = badge(tileSize[26]);
          const runOnJSResult = tmp2Result2.runOnJS(badge(tileSize[11]).triggerHapticFeedback);
          runOnJSResult(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_START);
        }
      }
      let obj = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: badge(tileSize[26]).runOnJS, hideContextMenu: badge(tileSize[30]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: badge(tileSize[26]).measure, scrollRef, dragViewport: sharedValue1, scale: sharedValue5, withTiming: badge(tileSize[27]).withTiming, DRAG_SCALE: sharedValue2, timingStandard: badge(tileSize[28]).timingStandard, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes };
      handleStart.__closure = obj;
      handleStart.__workletHash = 11781614290100;
      handleStart.__initData = __initData;
      function handleChange(changeX) {
        if (sharedValue.get()) {
          const result = sharedValue2.set(sharedValue2.get() + changeX.changeX);
          const result1 = closure_1_18.set(closure_1_18.get() + changeX.changeY);
          reslot();
          const value = sharedValue1.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < sharedValue3) {
              set2 = autoScrollSpeed.set;
              const obj2 = badge(tileSize[26]);
              set2(obj2.clamp(diff, 0, sharedValue3) / sharedValue3 - 1);
            } else if (diff1 < sharedValue3) {
              set = autoScrollSpeed.set;
              const obj = badge(tileSize[26]);
              const result2 = set(1 - obj.clamp(diff1, 0, tmp23) / tmp23);
            } else {
              const result3 = autoScrollSpeed.set(0);
            }
          }
        }
      }
      let obj2 = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue3, autoScrollSpeed, clamp: badge(tileSize[26]).clamp };
      handleChange.__closure = obj2;
      handleChange.__workletHash = 879322197993;
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
            if (typeof getSlotOffset === "function") {
              const result2 = sum % badge(tileSize[13]).BADGE_GRID_COLUMNS;
              const _Math = Math;
              const result3 = result2 * (tmp58 + badge(tileSize[13]).BADGE_GRID_GAP);
              const rounded = Math.floor(sum / badge(tileSize[13]).BADGE_GRID_COLUMNS);
              const result4 = rounded * (tmp58 + badge(tileSize[13]).BADGE_GRID_GAP);
              set = sharedValue2.set;
              const obj2 = badge(tileSize[27]);
              const result5 = set(obj2.withTiming(result3, badge(tileSize[28]).timingStandard));
              set2 = sharedValue3.set;
              const obj3 = badge(tileSize[27]);
              set2(obj3.withTiming(result4, badge(tileSize[28]).timingStandard));
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          set3 = sharedValue5.set;
          const obj4 = badge(tileSize[27]);
          set3(obj4.withTiming(1, badge(tileSize[28]).timingStandard));
          const result6 = obj.set(false);
          const result7 = isDragActive.set(false);
          const obj5 = badge(tileSize[26]);
          const runOnJSResult = obj5.runOnJS(badge(tileSize[11]).triggerHapticFeedback);
          runOnJSResult(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_END);
          const obj6 = badge(tileSize[26]);
          obj6.runOnJS(onCommitOrder)(value);
        }
      }
      let obj3 = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize: handleFinalize, positionX: sharedValue2, withTiming: badge(tileSize[27]).withTiming, timingStandard: badge(tileSize[28]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: isDragActive, runOnJS: badge(tileSize[26]).runOnJS, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes, onCommitOrder };
      handleFinalize.__closure = obj3;
      handleFinalize.__workletHash = 4416604805365;
      handleFinalize.__initData = __initData3;
      const Gesture = badge(tileSize[31]).Gesture;
      const fn = function s() {
        handleStart();
      };
      fn.__closure = { handleStart };
      fn.__workletHash = 12078596428673;
      fn.__initData = __initData6;
      const PanResult = Gesture.Pan();
      const fn2 = function n(arg0) {
        handleChange(arg0);
      };
      fn2.__closure = { handleChange };
      fn2.__workletHash = 9495907638982;
      fn2.__initData = __initData5;
      const minDistanceResult = PanResult.minDistance(8);
      const fn3 = function t() {
        handleFinalize();
      };
      fn3.__closure = { handleFinalize };
      fn3.__workletHash = 12861679152071;
      fn3.__initData = __initData4;
      const onStartResult = minDistanceResult.onStart(fn);
      const onChangeResult = onStartResult.onChange(fn2);
      return onChangeResult.onFinalize(fn3);
    }, items1);
    function se() {
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
    se.__closure = obj8;
    se.__workletHash = 10858650842867;
    const tmp23 = __initData13;
    se.__initData = __initData13;
    const tmp2Result12 = tmp2(tmp[26]);
    getSlotOffset = tmp2Result12.useAnimatedStyle(se);
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
          const AccessibilityAnnouncer = tmp4(4545).AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = tmp4(1127).intl;
          const obj2 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
          announce(intl.formatToPlainString(intl7.t.qPHr0x, obj2));
        }
      }
    }, items2);
    items3 = [];
    if (!isFirst) {
      const push = items3.push;
      const obj9 = { name: "moveup", label: intl.string(tmp2(tmp[16]).t.eR2XSh) };
      intl = tmp2(tmp[16]).intl;
      push(obj9);
    }
    if (!isLast) {
      const push2 = items3.push;
      const obj10 = { name: "movedown", label: intl2.string(tmp2(tmp[16]).t.wWi0DL) };
      intl2 = tmp2(tmp[16]).intl;
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
      const GestureDetector = badge(tileSize[31]).GestureDetector;
      obj2 = { style: items, children: tmp(tmp5, obj3) };
      items = [position.position, , ];
      size = { width: tileSize, height: tileSize };
      items[1] = size;
      items[2] = closure_23;
      ref = undefined;
      View = index(tileSize[26]).View;
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
        children: tmp(closure_24, { badge, alwaysVisible })
      };
      const intl = tmp2(tmp3[16]).intl;
      formatToPlainString = intl.formatToPlainString;
      hidden = badge.hidden;
      t = tmp2(tmp3[16]).t;
      let stringResult;
      obj4 = { badgeName: badge.name, position: index + 1 };
      if (alwaysVisible) {
        const intl2 = tmp2(tmp3[16]).intl;
        const string = intl2.string;
        const tmp2Result = badge(tileSize[24]);
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
      renderTileResult = sharedValue(reslot, obj11);
    }
    return renderTileResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}));
const __initData14 = { code: "function CustomizeBadgesSheetTsx26({timeSincePreviousFrame:timeSincePreviousFrame}){const{autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset}=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);}" };
const __initData15 = { code: "function CustomizeBadgesSheetTsx27(){const{autoScrollSpeed}=this.__closure;return autoScrollSpeed.get()!==0;}" };
const __initData16 = { code: "function CustomizeBadgesSheetTsx28(isScrolling,wasScrolling){const{autoScrollElapsed,runOnJS,setAutoScrollerActive}=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);runOnJS(setAutoScrollerActive)(isScrolling);}" };
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
  let onHide;
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
  let onPress;
  MS_PER_FRAME_60FPS = undefined;
  let badgeTileSize;
  let animatedRef;
  let scrollViewOffset;
  let sharedValue2;
  let sharedValue3;
  let frameCallback;
  let callback1;
  let tmp = badgeTileSize();
  let tmp2 = stateFromStores;
  let obj = stateFromStores(stateFromStores1[33]);
  const tenureBadgeHideable = obj.useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  const sum = Math.max(stateFromStores(stateFromStores1[34])().bottom, hiddenBadges) + 4;
  let obj2 = tenureBadgeHideable(stateFromStores1[35]);
  const items = [pendingBadgeDisplayOrder];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = pendingBadgeDisplayOrder.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj3 = tenureBadgeHideable(stateFromStores1[35]);
  const items1 = [pendingBadgeDisplayOrder];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const obj = stateFromStores(stateFromStores1[36]);
    return obj.canUsePremiumProfileCustomization(pendingBadgeDisplayOrder.getCurrentUser());
  });
  const tmp8 = stateFromStores(stateFromStores1[37]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = tmp8(analyticsLocations1, tmp2(tmp3[38]).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  let obj4 = analyticsLocations;
  context = analyticsLocations.useContext(tmp2(tmp3[39]));
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
  const tmp5Result = tenureBadgeHideable(stateFromStores1[35]);
  stateFromStoresArray = tmp5Result.useStateFromStoresArray(items3, () => BadgeDirectoryStore.getBadges(stateFromStores), items4);
  const items5 = [pendingBadgeHiddenBadges];
  const items6 = [stateFromStores];
  const tmp5Result12 = tenureBadgeHideable(stateFromStores1[35]);
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
  const tmp5Result13 = tenureBadgeHideable(stateFromStores1[35]);
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
  const tmp5Result14 = tenureBadgeHideable(stateFromStores1[26]);
  sharedValue = tmp5Result14.useSharedValue(memo2);
  onCommitOrder = tmp2(tmp3[25])((arr) => {
    const obj = tenureBadgeHideable(stateFromStores1[29]);
    const result = obj.setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result15 = tenureBadgeHideable(stateFromStores1[26]);
  sharedValue1 = tmp5Result15.useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect3 = analyticsLocations.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  onPress = tmp2(tmp3[25])((badge_id) => {
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
  MS_PER_FRAME_60FPS = tmp2(tmp3[25])((badgeId) => {
    const obj = PendingBadgeSettings;
    const obj2 = { badgeId: badgeId.badge_id, hidden: true, reorderableBadgeIds: memo2, hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id), canReorder: stateFromStores1 };
    const result = obj.setPendingBadgeVisibility(obj2);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl7.intl;
    announce(intl.formatToPlainString(intl7.t.q3t0Ht, { count: 1 }));
  });
  const width = tmp2(tmp3[46])().width;
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
  const tmp5Result17 = tenureBadgeHideable(stateFromStores1[26]);
  animatedRef = tmp5Result17.useAnimatedRef();
  const tmp5Result18 = tenureBadgeHideable(stateFromStores1[26]);
  scrollViewOffset = tmp5Result18.useScrollViewOffset(animatedRef);
  const tmp5Result19 = tenureBadgeHideable(stateFromStores1[26]);
  sharedValue2 = tmp5Result19.useSharedValue(0);
  const tmp5Result20 = tenureBadgeHideable(stateFromStores1[26]);
  sharedValue3 = tmp5Result20.useSharedValue(0);
  const fn = function q(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    const value = sharedValue2.get();
    if (0 !== value) {
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          const result = sharedValue3.set(sharedValue3.get() + timeSincePreviousFrame);
          const value2 = sharedValue3.get();
          const obj = sharedValue3;
          if (value2 >= c19) {
            const result1 = obj.set(0);
            const _Math = Math;
            const scrollTo = ReanimatedRexport.scrollTo;
            const tmp13 = roundToNearestPixelDefault;
            scrollTo(animatedRef, 0, max(tmp13(scrollViewOffset.get() + 700 * value * value2 / 1000), 0), false);
          }
        }
      }
    }
  };
  const tmp5Result21 = tenureBadgeHideable(stateFromStores1[26]);
  let obj5 = { autoScrollSpeed: sharedValue2, autoScrollElapsed: sharedValue3, MS_PER_FRAME_60FPS, AUTO_SCROLL_PIXELS_PER_SECOND: 700, scrollTo: tmp5(tmp3[26]).scrollTo, scrollRef: animatedRef, roundToNearestPixel: tmp2(tmp3[47]), scrollOffset: scrollViewOffset };
  fn.__closure = obj5;
  fn.__workletHash = 8686394877996;
  fn.__initData = __initData14;
  frameCallback = tmp5Result21.useFrameCallback(fn, false);
  const items15 = [frameCallback];
  callback1 = obj4.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items15);
  const fn2 = function $() {
    return 0 !== sharedValue2.get();
  };
  fn2.__closure = { autoScrollSpeed: sharedValue2 };
  fn2.__workletHash = 9672319834497;
  fn2.__initData = __initData15;
  const tmp5Result22 = tenureBadgeHideable(stateFromStores1[26]);
  class K {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        const result = sharedValue3.set(0);
        const obj = ReanimatedRexport;
        obj.runOnJS(callback1)(arg0);
      }
    }
  }
  K.__closure = { autoScrollElapsed: sharedValue3, runOnJS: tenureBadgeHideable(stateFromStores1[26]).runOnJS, setAutoScrollerActive: callback1 };
  K.__workletHash = 6850974884902;
  K.__initData = __initData16;
  ({ autoScrollElapsed: sharedValue3, runOnJS: tenureBadgeHideable(stateFromStores1[26]).runOnJS, setAutoScrollerActive: callback1 });
  const animatedReaction = tmp5Result22.useAnimatedReaction(fn2, K);
  if (hasCatalog) {
    let tmp40 = !stateFromStores1;
    const obj7 = { style: tmp.gridInset, children: items16 };
    if (tmp40) {
      const obj8 = { style: tmp.upsell, ctaText: intl2.string(tenureBadgeHideable(stateFromStores1[16]).t.pj0XBN), cardStyle: null, contentStyle: null, ctaStyle: null, showLinearGradient: true, onPress: callback, children: sharedValue(Text2, obj9) };
      const tmp2Result = tmp2(stateFromStores1[48]);
      intl2 = tmp5(tmp3[16]).intl;
      ({ upsellCard: obj23.cardStyle, upsellContent: obj23.contentStyle, upsellCta: obj23.ctaStyle } = tmp);
      obj9 = { variant: "text-sm/normal", style: tmp.upsellText, children: intl3.string(tenureBadgeHideable(stateFromStores1[16]).t.JrOki0) };
      Text2 = tmp5(tmp3[21]).Text;
      intl3 = tmp5(tmp3[16]).intl;
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
          return sharedValue(gesture, obj, badge.badge_id);
        }),
      reorderableBadges.map((badge, index) => {
          let tmpResult;
          if (stateFromStores1) {
            const obj2 = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, slotOffset: fixedBadges.length, isFirst: 0 === index, isLast: index === reorderableBadges.length - 1, alwaysVisible: set.has(badge.badge_id), orderShared: sharedValue, isDragActive: sharedValue1, scrollRef: animatedRef, scrollOffset: scrollViewOffset, autoScrollSpeed: sharedValue2, onCommitOrder, onHide, onPress };
            tmpResult = tmp(closure_50, obj2, badge.badge_id);
          } else {
            const obj = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress, onHide };
            tmpResult = tmp(gesture, obj, badge.badge_id);
          }
          return tmpResult;
        }),
      hiddenBadges.map((badge, index) => {
          const obj = { badge, index: fixedBadges.length + reorderableBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress };
          return sharedValue(gesture, obj, badge.badge_id);
        })
    ];
    items16[1] = onCommitOrder(stateFromStoresArray, obj10);
    tmp35Result = tmp38(tmp39, obj7);
  } else {
    let obj14;
    const tmp36 = stateFromStoresArray;
    if (hasCatalogError) {
      const obj12 = { style: tmp.message, accessibilityRole: "alert", children: sharedValue(Text, obj13) };
      obj13 = { variant: "text-md/normal", color: "text-muted", style: tmp.messageText, children: intl.string(tenureBadgeHideable(stateFromStores1[16]).t["rTU7/z"]) };
      Text = tmp5(tmp3[21]).Text;
      intl = tmp5(tmp3[16]).intl;
      obj14 = obj12;
    } else {
      obj14 = { style: tmp.message, children: sharedValue(tmp5(tmp3[49]).ActivityIndicator, { animating: true, size: "large" }) };
    }
    tmp35Result = tmp35(tmp36, obj14);
  }
  const obj15 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: intl4.string(tenureBadgeHideable(stateFromStores1[16]).t.x5SfWU), header: sharedValue(BottomSheetTitleHeader, obj16), children: sharedValue(tenureBadgeHideable(stateFromStores1[52]).BottomSheetScrollView, obj17) };
  BottomSheet = tmp5(tmp3[50]).BottomSheet;
  intl4 = tmp5(tmp3[16]).intl;
  obj16 = { title: intl5.string(tenureBadgeHideable(stateFromStores1[16]).t.x5SfWU), subtitle: string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp) };
  BottomSheetTitleHeader = tmp5(tmp3[51]).BottomSheetTitleHeader;
  intl5 = tmp5(tmp3[16]).intl;
  const intl6 = tmp5(tmp3[16]).intl;
  string = intl6.string;
  t = tmp5(tmp3[16]).t;
  obj17 = { ref: animatedRef, contentContainerStyle: { paddingBottom: sum }, children: tmp35Result };
  return sharedValue(BottomSheet, obj15);
};
