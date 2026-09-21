// Module ID: 14885
// Function ID: 14886
// Name: CustomizeBadgesSheet
// Dependencies: [19, 17, 8434, 1376, 8466, 1078, 7398, 1378, 21, 4758, 580, 4726, 8184, 14886, 558, 568, 1119, 7209, 8182, 4712, 11445, 8178, 5824, 11452, 7205, 4497, 4759, 4762, 13380, 8183, 6891, 4472, 11446, 1616, 504, 4418, 7409, 7429, 7399, 9502, 9474, 8465, 1245, 8471, 4458, 1482, 11293, 14887, 4754, 5796, 7397, 7396, 6863, 2]
// Exports: default

// Module 14885 (CustomizeBadgesSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4472 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4712 */;
import HapticUtils from "HapticUtils" /* 4726 */;
import timing from "timing" /* 4759 */;
import timingPresets from "timingPresets" /* 4762 */;
import Card from "Card" /* 5824 */;
import EyeSlashIcon from "EyeSlashIcon" /* 7209 */;
import ContextMenu from "ContextMenu" /* 8182 */;
import ContextMenuState from "ContextMenuState" /* 8183 */;
import ContextMenuConstants from "ContextMenuConstants" /* 8184 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8465 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8471 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9474 */;
import openPremiumModalDefault from "openPremiumModal" /* 9502 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11293 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 11445 */;
import BadgeUtils from "BadgeUtils" /* 11452 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13380 */;
import BadgeGrid from "BadgeGrid" /* 14886 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8434 */;
import UserStore from "UserStore" /* 1376 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8466 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1078);
({ AnalyticEvents: closure_9, AnalyticsObjects: c10, AnalyticsPages: closure_11, AnalyticsSections: closure_12 } = Constants);
let closure_13 = fn(7398).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const PremiumUpsellTypes = fn(1378).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 1.05;
let c18 = 80;
let c19 = 16.666666666666668;
let createStyles = fn(4758);
let obj = { gridInset: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, grid: null, upsell: null, upsellCard: null, upsellContent: null, upsellCta: null, upsellText: null, message: null, messageText: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj.grid = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
let obj4 = { position: "relative", width: "100%", marginTop: nativeDefault.space.PX_8 };
obj.upsell = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
let obj5 = { marginHorizontal: 0, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
obj.upsellCard = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj.upsellContent = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj7 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj.upsellCta = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj.upsellText = { textAlign: "center" };
let obj8 = { marginTop: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
obj.message = { alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
obj.messageText = { textAlign: "center" };
let closure_20 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  const cResult = c.c(10);
  badge = badge.badge;
  ({ index, onHide } = badge);
  const children = badge.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.xSWJPo);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === badge) {
    if (cResult[2] === onHide) {
      let tmp6 = cResult[3];
    }
    if (cResult[4] !== index) {
      const result = index % tmp(14886).BADGE_GRID_COLUMNS;
      let str = "right";
      if (0 !== result) {
        let str2 = "above";
        if (result === tmp(14886).BADGE_GRID_COLUMNS - 1) {
          str2 = "left";
        }
        str = str2;
      }
      cResult[4] = index;
      cResult[5] = str;
      let tmp7 = str;
    } else {
      tmp7 = cResult[5];
    }
    if (cResult[6] === children) {
      if (cResult[7] === tmp6) {
        if (cResult[8] === tmp7) {
          let tmp9 = cResult[9];
        }
        return tmp9;
      }
    }
    const obj2 = { items: tmp6, align: tmp7, disableGesture: true, triggerOnLongPress: true, children };
    const tmp11 = closure_1_15(tmp(8182).ContextMenu, obj2);
    cResult[6] = children;
    cResult[7] = tmp6;
    cResult[8] = tmp7;
    cResult[9] = tmp11;
    tmp9 = tmp11;
  }
  const items = [
    {
      label: first,
      trailingIndicator: EyeSlashIcon.EyeSlashIcon,
      action() {
        return onHide(badge);
      }
    }
  ];
  cResult[1] = badge;
  cResult[2] = onHide;
  cResult[3] = items;
  tmp6 = items;
}) : ((arg0) => {
  ({ badge: require, onHide: importDefault } = arg0);
  ({ index, children } = arg0);
  const obj = { items: null, align: null, disableGesture: true, triggerOnLongPress: true, children: null };
  const obj2 = { label: null, trailingIndicator: null, action: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t.xSWJPo);
  obj2.trailingIndicator = EyeSlashIcon.EyeSlashIcon;
  obj2.action = function action() {
    return importDefault(_require);
  };
  const items = [obj2];
  obj.items = items;
  const result = index % BadgeGrid.BADGE_GRID_COLUMNS;
  let str = "right";
  if (0 !== result) {
    let str2 = "above";
    if (result === BadgeGrid.BADGE_GRID_COLUMNS - 1) {
      str2 = "left";
    }
    str = str2;
  }
  obj.align = str;
  obj.children = children;
  return closure_1_15(ContextMenu.ContextMenu, obj);
});
createStyles = fn(4758);
let obj10 = { position: { position: "absolute" }, fill: { flex: 1 }, card: { flex: 1, alignItems: "center", justifyContent: "center", padding: 0 }, indicator: null, indicatorButton: null, iconHidden: null };
let size = { position: "absolute", top: nativeDefault.space.PX_8, end: nativeDefault.space.PX_8, width: 32, height: 32, alignItems: "flex-end", justifyContent: "flex-start" };
obj10.indicator = size;
obj10.indicatorButton = { position: "absolute", top: 0, end: 0, width: 48, height: 48, alignItems: "center", justifyContent: "center" };
obj10.iconHidden = { opacity: 0.3 };
let closure_22 = createStyles.createStyles(obj10);
function getSlotOffset(arg0, arg1) {
  const point = { x: null, y: null };
  const result = arg0 % BadgeGrid.BADGE_GRID_COLUMNS;
  point.x = result * (arg1 + BadgeGrid.BADGE_GRID_GAP);
  const rounded = Math.floor(arg0 / BadgeGrid.BADGE_GRID_COLUMNS);
  point.y = rounded * (arg1 + BadgeGrid.BADGE_GRID_GAP);
  return point;
}
let obj9 = { alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
getSlotOffset.__closure = { BADGE_GRID_COLUMNS: fn(14886).BADGE_GRID_COLUMNS, BADGE_GRID_GAP: fn(14886).BADGE_GRID_GAP };
getSlotOffset.__workletHash = 8647997879684;
getSlotOffset.__initData = { code: "function getSlotOffset_CustomizeBadgesSheetTsx1(index,tileSize){const{BADGE_GRID_COLUMNS,BADGE_GRID_GAP}=this.__closure;const column=index%BADGE_GRID_COLUMNS;return{x:column*(tileSize+BADGE_GRID_GAP),y:Math.floor(index/BADGE_GRID_COLUMNS)*(tileSize+BADGE_GRID_GAP)};}" };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
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
      tmp6 = closure_1_15(tmp(4712).CircleInformationIcon, obj2);
    }
    cResult[0] = alwaysVisible;
    cResult[1] = tmp6;
    let tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  indicatorButton = flag;
  if (flag) {
    indicatorButton = null != onShowPress;
  }
  if (indicatorButton) {
    indicatorButton = !alwaysVisible;
  }
  let iconHidden;
  if (flag) {
    iconHidden = tmp4.iconHidden;
  }
  if (cResult[2] === badge) {
    if (cResult[3] === iconHidden) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] === badge.name) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === onShowPress) {
          if (cResult[8] === showAccessibilityLabel) {
            if (cResult[9] === indicatorButton) {
              if (cResult[10] === tmp4.indicator) {
                if (cResult[11] === tmp4.indicatorButton) {
                  if (cResult[13] === tmp4.card) {
                    if (cResult[14] === tmp10) {
                      if (cResult[15] === tmp13) {
                        let tmp21 = cResult[16];
                      }
                      return tmp21;
                    }
                  }
                  const obj3 = { variant: "secondary", border: "none", radius: 16, style: tmp4.card, children: null };
                  const items = [tmp10, cResult[12]];
                  obj3.children = items;
                  const tmp23 = value2(tmp(5824).Card, obj3);
                  cResult[13] = tmp4.card;
                  cResult[14] = tmp10;
                  cResult[15] = cResult[12];
                  cResult[16] = tmp23;
                  tmp21 = tmp23;
                }
              }
            }
          }
        }
      }
    }
    if (indicatorButton) {
      const obj4 = { style: tmp4.indicatorButton, children: null };
      const obj5 = { size: "sm", variant: "secondary-overlay", icon: null, accessibilityLabel: null, accessibilityHint: null, onPress: null };
      const obj6 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
      obj5.icon = closure_1_15(tmp(7209).EyeSlashIcon, obj6);
      let name = showAccessibilityLabel;
      if (showAccessibilityLabel == null) {
        name = badge.name;
      }
      obj5.accessibilityLabel = name;
      const intl = tmp(1119).intl;
      obj5.accessibilityHint = intl.string(tmp(1119).t.hHHpvU);
      obj5.onPress = onShowPress;
      obj4.children = closure_1_15(tmp(8178).IconButton, obj5);
      let tmp17Result = tmp17(style, obj4);
    } else {
      tmp17Result = null != tmp5;
      if (tmp17Result) {
        const obj7 = { style: tmp4.indicator, "aria-hidden": true, children: tmp5 };
        tmp17Result = closure_1_15(style, obj7);
      }
    }
    badge = badge.name;
    cResult[5] = badge;
    cResult[6] = tmp5;
    cResult[7] = onShowPress;
    cResult[8] = showAccessibilityLabel;
    cResult[9] = indicatorButton;
    ({ indicator: tmp3[10], indicatorButton } = tmp4);
    cResult[11] = indicatorButton;
    cResult[12] = tmp17Result;
  }
  const obj8 = { badge, size: null, style: null };
  obj8.size = BadgeGrid.BADGE_TILE_ICON_SIZE;
  obj8.style = iconHidden;
  const tmp12 = closure_1_15(BadgeCatalogIconDefault, obj8);
  cResult[2] = badge;
  cResult[3] = iconHidden;
  cResult[4] = tmp12;
  tmp10 = tmp12;
}) : ((arg0) => {
  ({ badge, alwaysVisible, showAccessibilityLabel, onShowPress } = arg0);
  const tmp = closure_22();
  let flag = badge.hidden;
  if (flag == null) {
    flag = false;
  }
  let tmp2 = null;
  if (alwaysVisible) {
    const obj = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    tmp2 = closure_1_15(CircleInformationIcon.CircleInformationIcon, obj);
  }
  const obj2 = { variant: "secondary", border: "none", radius: 16, style: tmp.card, children: null };
  const obj3 = { badge, size: BadgeGrid.BADGE_TILE_ICON_SIZE, style: null };
  let iconHidden;
  if (flag) {
    iconHidden = tmp.iconHidden;
  }
  obj3.style = iconHidden;
  const items = [closure_1_15(BadgeCatalogIconDefault, obj3), ];
  if (flag) {
    if (null != onShowPress) {
      if (!alwaysVisible) {
        const obj4 = { style: tmp.indicatorButton, children: null };
        const obj5 = { size: "sm", variant: "secondary-overlay", icon: null, accessibilityLabel: null, accessibilityHint: null, onPress: null };
        const obj6 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
        obj5.icon = tmp10(tmp8(7209).EyeSlashIcon, obj6);
        if (showAccessibilityLabel == null) {
          showAccessibilityLabel = badge.name;
        }
        obj5.accessibilityLabel = showAccessibilityLabel;
        const intl = tmp8(1119).intl;
        obj5.accessibilityHint = intl.string(tmp8(1119).t.hHHpvU);
        obj5.onPress = onShowPress;
        obj4.children = tmp10(tmp8(8178).IconButton, obj5);
        let tmp10Result = tmp10(style, obj4);
      }
      items[1] = tmp10Result;
      obj2.children = items;
      return value2(Card.Card, obj2);
    }
  }
  let tmp10Result2 = null != tmp2;
  if (tmp10Result2) {
    const obj7 = { style: tmp.indicator, "aria-hidden": true, children: tmp2 };
    tmp10Result2 = tmp10(style, obj7);
  }
  tmp10Result = tmp10Result2;
});
ReactCompilerGating = fn(558);
let gesture = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  const cResult = badge(alwaysVisible[15]).c(37);
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const tmp4 = closure_22();
  if (cResult[0] === index) {
    if (cResult[1] === tileSize) {
      let tmp5 = cResult[2];
    }
    ({ x, y } = tmp5);
    if (cResult[3] === badge) {
      if (cResult[4] === onPress) {
        let tmp9 = cResult[5];
      }
      closure_4 = tmp9;
      if (cResult[6] === tileSize) {
        if (cResult[7] === x) {
          if (cResult[8] === y) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] === tmp4.position) {
            if (cResult[11] === tmp10) {
              let tmp11 = cResult[12];
            }
            style = tmp11;
            if (badge.hidden) {
              if (cResult[13] === badge) {
                if (cResult[14] === index) {
                  if (cResult[16] === alwaysVisible) {
                    if (cResult[17] === badge) {
                      if (cResult[18] === tmp9) {
                        if (cResult[19] === tmp17) {
                          let tmp20 = cResult[20];
                        }
                        if (cResult[21] === tmp20) {
                          if (cResult[22] === tmp11) {
                            let tmp25 = cResult[23];
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
                  tmp23[2] = cResult[15];
                  tmp23[3] = tmp9;
                  const tmp24 = closure_15(closure_24, tmp23);
                  cResult[16] = alwaysVisible;
                  cResult[17] = badge;
                  cResult[18] = tmp9;
                  cResult[19] = cResult[15];
                  cResult[20] = tmp24;
                  tmp20 = tmp24;
                }
              }
              let intl = tmp(tmp2[16]).intl;
              class T {
                constructor() {
                  tmp = onPress(badge);
                  return;
                }
              }
              const obj2 = { badgeName: badge.name, position: index + 1 };
              formatToPlainStringResult = intl.formatToPlainString(badge.hidden ? formatToPlainStringResult["dXg/Dl"] : formatToPlainStringResult["21W3EN"], obj2);
              cResult[13] = badge;
              cResult[14] = index;
              cResult[15] = formatToPlainStringResult;
            } else {
              if (cResult[24] === alwaysVisible) {
                if (cResult[25] === badge) {
                  if (cResult[26] === tmp9) {
                    if (cResult[27] === index) {
                      if (cResult[28] === tmp11) {
                        let tmp12 = cResult[29];
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
                          t = closure_0(closure_2[16]).t;
                          obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
                          obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                          tmp8 = alwaysVisible;
                          stringResult = undefined;
                          if (alwaysVisible) {
                            intl2 = tmp6(tmp7[16]).intl;
                            tmp6Result = tmp6(tmp7[23]);
                            stringResult = intl2.string(tmp6Result.getAlwaysVisibleCopy(tmp9));
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
                            fn = () => { ... };
                          }
                          obj.onLongPress = fn;
                          obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                          obj.style = closure_5;
                          obj.children = tmp(f67928, { badge: tmp4, alwaysVisible: tmp8 });
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
                            t = closure_0(closure_2[16]).t;
                            obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
                            obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                            tmp8 = alwaysVisible;
                            stringResult = undefined;
                            if (alwaysVisible) {
                              intl2 = tmp6(tmp7[16]).intl;
                              tmp6Result = tmp6(tmp7[23]);
                              stringResult = intl2.string(tmp6Result.getAlwaysVisibleCopy(tmp9));
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
                              fn = () => { ... };
                            }
                            obj.onLongPress = fn;
                            obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                            obj.style = closure_5;
                            obj.children = tmp(f67928, { badge: tmp4, alwaysVisible: tmp8 });
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
                        cResult[31] = tmp15;
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
                  t = closure_0(closure_2[16]).t;
                  obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
                  obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
                  tmp8 = alwaysVisible;
                  stringResult = undefined;
                  if (alwaysVisible) {
                    intl2 = tmp6(tmp7[16]).intl;
                    tmp6Result = tmp6(tmp7[23]);
                    stringResult = intl2.string(tmp6Result.getAlwaysVisibleCopy(tmp9));
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
                    fn = () => { ... };
                  }
                  obj.onLongPress = fn;
                  obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
                  obj.style = closure_5;
                  obj.children = tmp(f67928, { badge: tmp4, alwaysVisible: tmp8 });
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
      const size = { left: null, top: null, width: null, height: null };
      class T {
        constructor() {
          tmp = onPress(badge);
          return;
        }
      }
      size.top = y;
      size.width = tileSize;
      size.height = tileSize;
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
    const point = { x: null, y: null };
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
        t = closure_0(closure_2[16]).t;
        obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
        obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
        tmp8 = alwaysVisible;
        stringResult = undefined;
        if (alwaysVisible) {
          intl2 = tmp6(tmp7[16]).intl;
          tmp6Result = tmp6(tmp7[23]);
          stringResult = intl2.string(tmp6Result.getAlwaysVisibleCopy(tmp9));
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
          fn = () => { ... };
        }
        obj.onLongPress = fn;
        obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
        obj.style = closure_5;
        obj.children = tmp(f67928, { badge: tmp4, alwaysVisible: tmp8 });
        return tmp(tmp2, obj);
      }
    }
    point.x = tmp6 * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP);
    class T {
      constructor() {
        tmp = onPress(badge);
        return;
      }
    }
    const rounded = Math.floor(index / tmp(tmp2[13]).BADGE_GRID_COLUMNS);
    point.y = rounded * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP);
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
        t = closure_0(closure_2[16]).t;
        obj1 = { badgeName: tmp4.name, position: tmp5 + 1 };
        obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj1);
        tmp8 = alwaysVisible;
        stringResult = undefined;
        if (alwaysVisible) {
          intl2 = tmp6(tmp7[16]).intl;
          tmp6Result = tmp6(tmp7[23]);
          stringResult = intl2.string(tmp6Result.getAlwaysVisibleCopy(tmp9));
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
          fn = () => { ... };
        }
        obj.onLongPress = fn;
        obj.delayLongPress = tmp6(tmp7[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
        obj.style = closure_5;
        obj.children = tmp(f67928, { badge: tmp4, alwaysVisible: tmp8 });
        return tmp(tmp2, obj);
      }
    }
  }
}) : ((badge) => {
  badge = badge.badge;
  const index = badge.index;
  ({ tileSize, alwaysVisible } = badge);
  let onPress = badge.onPress;
  const onHide = badge.onHide;
  let onShowPress;
  let items1;
  if (typeof getSlotOffset === "function") {
    let result = index % badge(alwaysVisible[13]).BADGE_GRID_COLUMNS;
    const _Math = Math;
    const result1 = result * (tileSize + badge(alwaysVisible[13]).BADGE_GRID_GAP);
    const rounded = Math.floor(index / badge(alwaysVisible[13]).BADGE_GRID_COLUMNS);
    const items = [badge, onPress];
    const result2 = rounded * (tileSize + badge(alwaysVisible[13]).BADGE_GRID_GAP);
    onShowPress = onPress.useCallback(() => {
      onPress(badge);
    }, items);
    items1 = [tmp.position, ];
    const size = { left: result1, top: result2, width: tileSize, height: tileSize };
    items1[1] = size;
    if (badge.hidden) {
      let obj = { style: items1, children: null };
      const obj2 = { badge, alwaysVisible, showAccessibilityLabel: null, onShowPress: null };
      let intl = tmp2(tmp3[16]).intl;
      let t = tmp2(tmp3[16]).t;
      const obj3 = { badgeName: badge.name, position: index + 1 };
      obj2.showAccessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], obj3);
      obj2.onShowPress = onShowPress;
      obj.children = closure_15(closure_24, obj2);
      return closure_15(items1, obj);
    } else {
      function renderTile(ref) {
        let onLongPress = ref;
        ref = undefined;
        if (ref != null) {
          ref = ref.ref;
        }
        const obj = { ref, accessibilityLabel: null };
        const intl = util.intl;
        const t = util.t;
        obj.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], { badgeName: badge.name, position: index + 1 });
        let stringResult;
        if (alwaysVisible) {
          const intl2 = tmp6(1119).intl;
          stringResult = intl2.string(tmp6(11452).getAlwaysVisibleCopy(tmp9));
          const tmp6Result = tmp6(11452);
        }
        const merged = Object.assign({ accessibilityRole: "button", accessibilityHint: stringResult });
        let accessibilityActions;
        if (ref != null) {
          accessibilityActions = ref.accessibilityActions;
        }
        obj.accessibilityActions = accessibilityActions;
        let prop;
        if (ref != null) {
          prop = ref.onAccessibilityAction;
        }
        obj.onAccessibilityAction = prop;
        if (alwaysVisible) {
          onPress = callback;
        } else if (ref != null) {
          onPress = ref.onPress;
        }
        obj.onPress = onPress;
        let fn;
        if (null != ref) {
          fn = (arg0) => {
            const result = badge(alwaysVisible[11]).triggerHapticFeedback(badge(alwaysVisible[12]).CONTEXT_MENU_OPEN_HAPTIC);
            onLongPress = onLongPress.onLongPress;
            if (onLongPress != null) {
              onLongPress(arg0);
            }
          };
        }
        obj.onLongPress = fn;
        obj.delayLongPress = ContextMenuConstants.CONTEXT_MENU_LONG_PRESS_DURATION_MS;
        obj.style = items1;
        obj.children = closure_2_15(closure_24, { badge, alwaysVisible });
        return closure_2_15(React4, obj);
      }
      if (!alwaysVisible) {
        if (null != onHide) {
          const obj4 = { badge, index, onHide, children: renderTile };
          let renderTileResult = closure_15(closure_21, obj4);
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
let __initData2 = { code: "function CustomizeBadgesSheetTsx5(){const{scrollOffset}=this.__closure;return scrollOffset.get();}" };
const __initData3 = { code: "function CustomizeBadgesSheetTsx6(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}" };
const __initData4 = { code: "function handleStart_CustomizeBadgesSheetTsx7(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_32 = { code: "function handleChange_CustomizeBadgesSheetTsx8(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport_0=dragViewport.get();if(viewport_0==null){return;}const fromTop=event.absoluteY-viewport_0.pageY;const fromBottom=viewport_0.pageY+viewport_0.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}}" };
const __initData5 = { code: "function handleFinalize_CustomizeBadgesSheetTsx9(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order_0=orderShared.get();const slot_0=order_0.indexOf(badgeId);if(slot_0>=0){const target_0=getSlotOffset(slot_0+slotOffset,tileSize);positionX.set(withTiming(target_0.x,timingStandard));positionY.set(withTiming(target_0.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order_0);}" };
let closure_34 = { code: "function CustomizeBadgesSheetTsx10(){const{handleStart}=this.__closure;handleStart();}" };
const __initData6 = { code: "function CustomizeBadgesSheetTsx11(event_0){const{handleChange}=this.__closure;handleChange(event_0);}" };
const __initData7 = { code: "function CustomizeBadgesSheetTsx12(){const{handleFinalize}=this.__closure;handleFinalize();}" };
const __initData8 = { code: "function CustomizeBadgesSheetTsx13(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}" };
const __initData9 = { code: "function CustomizeBadgesSheetTsx14(){const{orderShared,badgeId,getSlotOffset,slotOffset,tileSize}=this.__closure;const slot=orderShared.get().indexOf(badgeId);return slot<0?null:getSlotOffset(slot+slotOffset,tileSize);}" };
const __initData10 = { code: "function CustomizeBadgesSheetTsx15(target,previousTarget){const{isThisTileDragging,positionX,withTiming,timingStandard,positionY}=this.__closure;if(target==null||isThisTileDragging.get()){return;}if(target.x!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.x)){positionX.set(withTiming(target.x,timingStandard));}if(target.y!==(previousTarget===null||previousTarget===void 0?void 0:previousTarget.y)){positionY.set(withTiming(target.y,timingStandard));}}" };
const __initData11 = { code: "function CustomizeBadgesSheetTsx16(){const{orderShared,tileSize,BADGE_GRID_GAP,clamp,positionX,BADGE_GRID_COLUMNS,positionY,slotOffset,moveBadgeInDisplayOrder,badgeId,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const order=orderShared.get();const step=tileSize+BADGE_GRID_GAP;const column=clamp(Math.floor((positionX.get()+tileSize/2)/step),0,BADGE_GRID_COLUMNS-1);const row=Math.max(Math.floor((positionY.get()+tileSize/2)/step),0);const to=clamp(row*BADGE_GRID_COLUMNS+column-slotOffset,0,order.length-1);const next=moveBadgeInDisplayOrder(order,order.indexOf(badgeId),to);if(next!==order){orderShared.set(next);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_MOVE);}}" };
const __initData12 = { code: "function CustomizeBadgesSheetTsx17(){const{scrollOffset}=this.__closure;return scrollOffset.get();}" };
const __initData13 = { code: "function CustomizeBadgesSheetTsx18(offset,previousOffset){const{isThisTileDragging,positionY,reslot}=this.__closure;if(previousOffset==null||!isThisTileDragging.get()){return;}positionY.set(positionY.get()+(offset-previousOffset));reslot();}" };
let closure_43 = { code: "function handleStart_CustomizeBadgesSheetTsx19(){const{isAnyDragActive,isThisTileDragging,runOnJS,hideContextMenu,dragOrigin,positionX,positionY,measure,scrollRef,dragViewport,scale,withTiming,DRAG_SCALE,timingStandard,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(isAnyDragActive.get()&&!isThisTileDragging.get()){return;}runOnJS(hideContextMenu)();isAnyDragActive.set(true);isThisTileDragging.set(true);dragOrigin.set({x:positionX.get(),y:positionY.get()});const viewport=measure(scrollRef);dragViewport.set(viewport==null?null:{pageY:viewport.pageY,height:viewport.height});scale.set(withTiming(DRAG_SCALE,timingStandard));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_START);}" };
let closure_44 = { code: "function handleChange_CustomizeBadgesSheetTsx20(event){const{isThisTileDragging,positionX,positionY,reslot,dragViewport,AUTO_SCROLL_EDGE_SIZE,autoScrollSpeed,clamp}=this.__closure;if(!isThisTileDragging.get()){return;}positionX.set(positionX.get()+event.changeX);positionY.set(positionY.get()+event.changeY);reslot();const viewport_0=dragViewport.get();if(viewport_0==null){return;}const fromTop=event.absoluteY-viewport_0.pageY;const fromBottom=viewport_0.pageY+viewport_0.height-event.absoluteY;if(fromTop<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(-1+clamp(fromTop,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else if(fromBottom<AUTO_SCROLL_EDGE_SIZE){autoScrollSpeed.set(1-clamp(fromBottom,0,AUTO_SCROLL_EDGE_SIZE)/AUTO_SCROLL_EDGE_SIZE);}else{autoScrollSpeed.set(0);}}" };
let closure_45 = { code: "function handleFinalize_CustomizeBadgesSheetTsx21(){const{isThisTileDragging,autoScrollSpeed,dragViewport,orderShared,badgeId,getSlotOffset,slotOffset,tileSize,positionX,withTiming,timingStandard,positionY,scale,isAnyDragActive,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,onCommitOrder}=this.__closure;if(!isThisTileDragging.get()){return;}autoScrollSpeed.set(0);dragViewport.set(null);const order_0=orderShared.get();const slot_0=order_0.indexOf(badgeId);if(slot_0>=0){const target_0=getSlotOffset(slot_0+slotOffset,tileSize);positionX.set(withTiming(target_0.x,timingStandard));positionY.set(withTiming(target_0.y,timingStandard));}scale.set(withTiming(1,timingStandard));isThisTileDragging.set(false);isAnyDragActive.set(false);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.DRAG_AND_DROP_END);runOnJS(onCommitOrder)(order_0);}" };
let closure_46 = { code: "function CustomizeBadgesSheetTsx22(){const{handleFinalize}=this.__closure;handleFinalize();}" };
let closure_47 = { code: "function CustomizeBadgesSheetTsx23(event_0){const{handleChange}=this.__closure;handleChange(event_0);}" };
let closure_48 = { code: "function CustomizeBadgesSheetTsx24(){const{handleStart}=this.__closure;handleStart();}" };
const __initData14 = { code: "function CustomizeBadgesSheetTsx25(){const{isThisTileDragging,dragOrigin,positionX,positionY,scale}=this.__closure;const dragging=isThisTileDragging.get();const origin=dragOrigin.get();return{zIndex:dragging?10:0,left:dragging?origin.x:positionX.get(),top:dragging?origin.y:positionY.get(),transform:dragging?[{translateX:positionX.get()-origin.x},{translateY:positionY.get()-origin.y},{scale:scale.get()}]:[{scale:scale.get()}]};}" };
ReactCompilerGating = fn(558);
let closure_50 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((badge) => {
  const cResult = badge(tileSize[15]).c(75);
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
  const tmp4 = closure_22();
  const position = tmp4;
  const badge_id = badge.badge_id;
  if (cResult[0] === badge) {
    if (cResult[1] === onPress) {
      let tmp5 = cResult[2];
    }
    const tmp7 = index(tmp2[24])(tmp5);
    closure_14 = tmp7;
    const sharedValue = tmp(tmp2[25]).useSharedValue(false);
    let tmpResult = tmp(tmp2[25]);
    const sharedValue1 = tmp(tmp2[25]).useSharedValue(null);
    if (typeof closure_23 === "function") {
      let point = { x: null, y: null };
      let result = index % tmp(tmp2[13]).BADGE_GRID_COLUMNS;
      point.x = result * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP);
      let _Math = Math;
      let rounded = Math.floor(index / tmp(tmp2[13]).BADGE_GRID_COLUMNS);
      point.y = rounded * (tileSize + tmp(tmp2[13]).BADGE_GRID_GAP);
      const sharedValue2 = tmp(tmp2[25]).useSharedValue(point.x);
      const tmpResult10 = tmp(tmp2[25]);
      const sharedValue3 = tmp(tmp2[25]).useSharedValue(point.y);
      const tmpResult11 = tmp(tmp2[25]);
      const sharedValue4 = tmp(tmp2[25]).useSharedValue(point);
      const tmpResult12 = tmp(tmp2[25]);
      const sharedValue5 = tmp(tmp2[25]).useSharedValue(1);
      const tmpResult13 = tmp(tmp2[25]);
      const fn2 = function j() {
        value = orderShared.get();
        index = value.indexOf(badge_id);
        let tmp2 = null;
        if (index >= 0) {
          const sum = index + slotOffset;
          if (typeof getSlotOffset === "function") {
            const point = { x: null, y: null };
            const result = sum % BadgeGrid.BADGE_GRID_COLUMNS;
            point.x = result * (tmp6 + BadgeGrid.BADGE_GRID_GAP);
            const _Math = Math;
            const rounded = Math.floor(sum / BadgeGrid.BADGE_GRID_COLUMNS);
            point.y = rounded * (tmp6 + BadgeGrid.BADGE_GRID_GAP);
            tmp2 = point;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return tmp2;
      };
      let obj2 = { orderShared, badgeId: badge_id, getSlotOffset: tmp11, slotOffset, tileSize };
      fn2.__closure = obj2;
      fn2.__workletHash = 6182257637516;
      fn2.__initData = animatedStyle;
      class Z {
        constructor(arg0, arg1) {
          value = null == badge;
          if (!value) {
            tmp2 = closure_15;
            value = closure_15.get();
          }
          if (!value) {
            tmp3 = arg1;
            x = undefined;
            if (arg1 != null) {
              x = arg1.x;
            }
            if (badge.x !== x) {
              tmp5 = closure_17;
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj = closure_0(closure_2[26]);
              tmp8 = closure_0;
              tmp9 = closure_2;
              result = closure_17.set(obj.withTiming(badge.x, closure_0(closure_2[27]).timingStandard));
            }
            y = undefined;
            if (arg1 != null) {
              y = arg1.y;
            }
            if (badge.y !== y) {
              tmp12 = closure_18;
              tmp13 = closure_0;
              tmp14 = closure_2;
              obj2 = closure_0(closure_2[26]);
              tmp15 = closure_0;
              tmp16 = closure_2;
              result1 = closure_18.set(obj2.withTiming(badge.y, closure_0(closure_2[27]).timingStandard));
            }
          }
          return;
        }
      }
      let obj3 = { isThisTileDragging: sharedValue, positionX: sharedValue2, withTiming: tmp(tmp2[26]).withTiming, timingStandard: tmp(tmp2[27]).timingStandard, positionY: sharedValue3 };
      Z.__closure = obj3;
      Z.__workletHash = 4011295272705;
      Z.__initData = __initData;
      const animatedReaction = tmp(tmp2[25]).useAnimatedReaction(fn2, Z);
      if (cResult[3] === badge_id) {
        if (cResult[4] === orderShared) {
          if (cResult[5] === sharedValue2) {
            if (cResult[6] === sharedValue3) {
              if (cResult[7] === slotOffset) {
                if (cResult[8] === tileSize) {
                  let tmp22 = cResult[9];
                }
                closure_21 = tmp22;
                function re() {
                  return scrollOffset.get();
                }
                let obj4 = { scrollOffset };
                re.__closure = obj4;
                re.__workletHash = 10993823060256;
                re.__initData = __initData2;
                function ae(arg0, arg1) {
                  value = null != arg1;
                  if (value) {
                    value = sharedValue.get();
                  }
                  if (value) {
                    const result = sharedValue3.set(sharedValue3.get() + (arg0 - arg1));
                    closure_21();
                  }
                }
                let obj5 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot: tmp22 };
                ae.__closure = obj5;
                ae.__workletHash = 9803143874483;
                ae.__initData = __initData3;
                const animatedReaction1 = tmp(tmp2[25]).useAnimatedReaction(re, ae);
                if (cResult[10] === sharedValue4) {
                  if (cResult[11] === sharedValue1) {
                    if (cResult[12] === isDragActive) {
                      if (cResult[13] === sharedValue) {
                        if (cResult[14] === sharedValue2) {
                          if (cResult[15] === sharedValue3) {
                            if (cResult[16] === sharedValue5) {
                              if (cResult[17] === scrollRef) {
                                let tmp27 = cResult[18];
                              }
                              closure_22 = tmp27;
                              if (cResult[19] === autoScrollSpeed) {
                                if (cResult[20] === sharedValue1) {
                                  if (cResult[21] === sharedValue) {
                                    if (cResult[22] === sharedValue2) {
                                      if (cResult[23] === sharedValue3) {
                                        if (cResult[24] === tmp22) {
                                          let tmp30 = cResult[25];
                                        }
                                        closure_23 = tmp30;
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
                                                              if (cResult[37] === tileSize) {
                                                                let tmp34 = cResult[38];
                                                              }
                                                              closure_24 = tmp34;
                                                              if (cResult[39] === tmp30) {
                                                                if (cResult[40] === tmp34) {
                                                                  if (cResult[41] === tmp27) {
                                                                    gesture = tmp37;
                                                                    class De {
                                                                      constructor() {
                                                                        value = closure_15.get();
                                                                        point = closure_19.get();
                                                                        num = 0;
                                                                        if (value) {
                                                                          num = 10;
                                                                        }
                                                                        rect = { zIndex: num, left: null, top: null, transform: null };
                                                                        if (value) {
                                                                          x = point.x;
                                                                        } else {
                                                                          tmp2 = closure_17;
                                                                          x = closure_17.get();
                                                                        }
                                                                        rect.left = x;
                                                                        if (value) {
                                                                          y = point.y;
                                                                        } else {
                                                                          tmp3 = closure_18;
                                                                          y = closure_18.get();
                                                                        }
                                                                        rect.top = y;
                                                                        if (value) {
                                                                          obj1 = { translateX: null };
                                                                          tmp5 = closure_17;
                                                                          obj1.translateX = closure_17.get() - point.x;
                                                                          items = [, , ];
                                                                          items[0] = obj1;
                                                                          obj6 = { translateY: null };
                                                                          tmp6 = closure_18;
                                                                          obj6.translateY = closure_18.get() - point.y;
                                                                          items[1] = obj6;
                                                                          obj7 = { scale: null };
                                                                          tmp7 = closure_20;
                                                                          obj7.scale = closure_20.get();
                                                                          items[2] = obj7;
                                                                          items1 = items;
                                                                        } else {
                                                                          obj8 = { scale: null };
                                                                          tmp4 = closure_20;
                                                                          obj8.scale = closure_20.get();
                                                                          items1 = [];
                                                                          items1[0] = obj8;
                                                                        }
                                                                        rect.transform = items1;
                                                                        return rect;
                                                                      }
                                                                    }
                                                                    let obj6 = { isThisTileDragging: sharedValue, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, scale: sharedValue5 };
                                                                    De.__closure = obj6;
                                                                    De.__workletHash = 3612359203254;
                                                                    De.__initData = __initData8;
                                                                    animatedStyle = tmp(tmp2[25]).useAnimatedStyle(De);
                                                                    if (cResult[49] === badge_id) {
                                                                      if (cResult[50] === onCommitOrder) {
                                                                        if (cResult[51] === orderShared) {
                                                                          if (cResult[52] === slotOffset) {
                                                                            let tmp48 = cResult[53];
                                                                          }
                                                                          __initData = tmp48;
                                                                          if (cResult[54] === alwaysVisible) {
                                                                            if (cResult[55] === animatedStyle) {
                                                                              if (cResult[56] === badge) {
                                                                                if (cResult[57] === tmp48) {
                                                                                  if (cResult[58] === tmp7) {
                                                                                    if (cResult[59] === index) {
                                                                                      if (cResult[60] === isFirst) {
                                                                                        if (cResult[61] === isLast) {
                                                                                          if (cResult[62] === tmp4.fill) {
                                                                                            if (cResult[63] === tmp4.position) {
                                                                                              if (cResult[64] === tmp37) {
                                                                                                const _Symbol = Symbol;
                                                                                                class De {
                                                                                                  constructor() {
                                                                                                    value = closure_15.get();
                                                                                                    point = closure_19.get();
                                                                                                    num = 0;
                                                                                                    if (value) {
                                                                                                      num = 10;
                                                                                                    }
                                                                                                    rect = { zIndex: num, left: null, top: null, transform: null };
                                                                                                    if (value) {
                                                                                                      x = point.x;
                                                                                                    } else {
                                                                                                      tmp2 = closure_17;
                                                                                                      x = closure_17.get();
                                                                                                    }
                                                                                                    rect.left = x;
                                                                                                    if (value) {
                                                                                                      y = point.y;
                                                                                                    } else {
                                                                                                      tmp3 = closure_18;
                                                                                                      y = closure_18.get();
                                                                                                    }
                                                                                                    rect.top = y;
                                                                                                    if (value) {
                                                                                                      obj1 = { translateX: null };
                                                                                                      tmp5 = closure_17;
                                                                                                      obj1.translateX = closure_17.get() - point.x;
                                                                                                      items = [, , ];
                                                                                                      items[0] = obj1;
                                                                                                      obj6 = { translateY: null };
                                                                                                      tmp6 = closure_18;
                                                                                                      obj6.translateY = closure_18.get() - point.y;
                                                                                                      items[1] = obj6;
                                                                                                      obj7 = { scale: null };
                                                                                                      tmp7 = closure_20;
                                                                                                      obj7.scale = closure_20.get();
                                                                                                      items[2] = obj7;
                                                                                                      items1 = items;
                                                                                                    } else {
                                                                                                      obj8 = { scale: null };
                                                                                                      tmp4 = closure_20;
                                                                                                      obj8.scale = closure_20.get();
                                                                                                      items1 = [];
                                                                                                      items1[0] = obj8;
                                                                                                    }
                                                                                                    rect.transform = items1;
                                                                                                    return rect;
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
                                                                            }
                                                                          }
                                                                          class De {
                                                                            constructor() {
                                                                              value = closure_15.get();
                                                                              point = closure_19.get();
                                                                              num = 0;
                                                                              if (value) {
                                                                                num = 10;
                                                                              }
                                                                              rect = { zIndex: num, left: null, top: null, transform: null };
                                                                              if (value) {
                                                                                x = point.x;
                                                                              } else {
                                                                                tmp2 = closure_17;
                                                                                x = closure_17.get();
                                                                              }
                                                                              rect.left = x;
                                                                              if (value) {
                                                                                y = point.y;
                                                                              } else {
                                                                                tmp3 = closure_18;
                                                                                y = closure_18.get();
                                                                              }
                                                                              rect.top = y;
                                                                              if (value) {
                                                                                obj1 = { translateX: null };
                                                                                tmp5 = closure_17;
                                                                                obj1.translateX = closure_17.get() - point.x;
                                                                                items = [, , ];
                                                                                items[0] = obj1;
                                                                                obj6 = { translateY: null };
                                                                                tmp6 = closure_18;
                                                                                obj6.translateY = closure_18.get() - point.y;
                                                                                items[1] = obj6;
                                                                                obj7 = { scale: null };
                                                                                tmp7 = closure_20;
                                                                                obj7.scale = closure_20.get();
                                                                                items[2] = obj7;
                                                                                items1 = items;
                                                                              } else {
                                                                                obj8 = { scale: null };
                                                                                tmp4 = closure_20;
                                                                                obj8.scale = closure_20.get();
                                                                                items1 = [];
                                                                                items1[0] = obj8;
                                                                              }
                                                                              rect.transform = items1;
                                                                              return rect;
                                                                            }
                                                                          }
                                                                          let forResult = Symbol.for("react.early_return_sentinel");
                                                                          let items = [];
                                                                          if (!isFirst) {
                                                                            const obj7 = { name: "moveup", label: null };
                                                                            class De {
                                                                              constructor() {
                                                                                value = closure_15.get();
                                                                                point = closure_19.get();
                                                                                num = 0;
                                                                                if (value) {
                                                                                  num = 10;
                                                                                }
                                                                                rect = { zIndex: num, left: null, top: null, transform: null };
                                                                                if (value) {
                                                                                  x = point.x;
                                                                                } else {
                                                                                  tmp2 = closure_17;
                                                                                  x = closure_17.get();
                                                                                }
                                                                                rect.left = x;
                                                                                if (value) {
                                                                                  y = point.y;
                                                                                } else {
                                                                                  tmp3 = closure_18;
                                                                                  y = closure_18.get();
                                                                                }
                                                                                rect.top = y;
                                                                                if (value) {
                                                                                  obj1 = { translateX: null };
                                                                                  tmp5 = closure_17;
                                                                                  obj1.translateX = closure_17.get() - point.x;
                                                                                  items = [, , ];
                                                                                  items[0] = obj1;
                                                                                  obj6 = { translateY: null };
                                                                                  tmp6 = closure_18;
                                                                                  obj6.translateY = closure_18.get() - point.y;
                                                                                  items[1] = obj6;
                                                                                  obj7 = { scale: null };
                                                                                  tmp7 = closure_20;
                                                                                  obj7.scale = closure_20.get();
                                                                                  items[2] = obj7;
                                                                                  items1 = items;
                                                                                } else {
                                                                                  obj8 = { scale: null };
                                                                                  tmp4 = closure_20;
                                                                                  obj8.scale = closure_20.get();
                                                                                  items1 = [];
                                                                                  items1[0] = obj8;
                                                                                }
                                                                                rect.transform = items1;
                                                                                return rect;
                                                                              }
                                                                            }
                                                                            obj7.label = tmp52(tmp(tmp2[16]).t.eR2XSh);
                                                                            items.push(obj7);
                                                                          }
                                                                          if (!isLast) {
                                                                            const obj8 = { name: "movedown", label: null };
                                                                            class De {
                                                                              constructor() {
                                                                                value = closure_15.get();
                                                                                point = closure_19.get();
                                                                                num = 0;
                                                                                if (value) {
                                                                                  num = 10;
                                                                                }
                                                                                rect = { zIndex: num, left: null, top: null, transform: null };
                                                                                if (value) {
                                                                                  x = point.x;
                                                                                } else {
                                                                                  tmp2 = closure_17;
                                                                                  x = closure_17.get();
                                                                                }
                                                                                rect.left = x;
                                                                                if (value) {
                                                                                  y = point.y;
                                                                                } else {
                                                                                  tmp3 = closure_18;
                                                                                  y = closure_18.get();
                                                                                }
                                                                                rect.top = y;
                                                                                if (value) {
                                                                                  obj1 = { translateX: null };
                                                                                  tmp5 = closure_17;
                                                                                  obj1.translateX = closure_17.get() - point.x;
                                                                                  items = [, , ];
                                                                                  items[0] = obj1;
                                                                                  obj6 = { translateY: null };
                                                                                  tmp6 = closure_18;
                                                                                  obj6.translateY = closure_18.get() - point.y;
                                                                                  items[1] = obj6;
                                                                                  obj7 = { scale: null };
                                                                                  tmp7 = closure_20;
                                                                                  obj7.scale = closure_20.get();
                                                                                  items[2] = obj7;
                                                                                  items1 = items;
                                                                                } else {
                                                                                  obj8 = { scale: null };
                                                                                  tmp4 = closure_20;
                                                                                  obj8.scale = closure_20.get();
                                                                                  items1 = [];
                                                                                  items1[0] = obj8;
                                                                                }
                                                                                rect.transform = items1;
                                                                                return rect;
                                                                              }
                                                                            }
                                                                            obj8.label = tmp54(tmp(tmp2[16]).t.wWi0DL);
                                                                            items.push(obj8);
                                                                          }
                                                                          if (cResult[68] !== tmp48) {
                                                                            function xe(nativeEvent, onAccessibilityAction) {
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
                                                                            cResult[68] = tmp48;
                                                                            class De {
                                                                              constructor() {
                                                                                value = closure_15.get();
                                                                                point = closure_19.get();
                                                                                num = 0;
                                                                                if (value) {
                                                                                  num = 10;
                                                                                }
                                                                                rect = { zIndex: num, left: null, top: null, transform: null };
                                                                                if (value) {
                                                                                  x = point.x;
                                                                                } else {
                                                                                  tmp2 = closure_17;
                                                                                  x = closure_17.get();
                                                                                }
                                                                                rect.left = x;
                                                                                if (value) {
                                                                                  y = point.y;
                                                                                } else {
                                                                                  tmp3 = closure_18;
                                                                                  y = closure_18.get();
                                                                                }
                                                                                rect.top = y;
                                                                                if (value) {
                                                                                  obj1 = { translateX: null };
                                                                                  tmp5 = closure_17;
                                                                                  obj1.translateX = closure_17.get() - point.x;
                                                                                  items = [, , ];
                                                                                  items[0] = obj1;
                                                                                  obj6 = { translateY: null };
                                                                                  tmp6 = closure_18;
                                                                                  obj6.translateY = closure_18.get() - point.y;
                                                                                  items[1] = obj6;
                                                                                  obj7 = { scale: null };
                                                                                  tmp7 = closure_20;
                                                                                  obj7.scale = closure_20.get();
                                                                                  items[2] = obj7;
                                                                                  items1 = items;
                                                                                } else {
                                                                                  obj8 = { scale: null };
                                                                                  tmp4 = closure_20;
                                                                                  obj8.scale = closure_20.get();
                                                                                  items1 = [];
                                                                                  items1[0] = obj8;
                                                                                }
                                                                                rect.transform = items1;
                                                                                return rect;
                                                                              }
                                                                            }
                                                                            cResult[69] = xe;
                                                                            let tmp56 = xe;
                                                                          } else {
                                                                            tmp56 = cResult[69];
                                                                          }
                                                                          __initData2 = tmp56;
                                                                          class Ee {
                                                                            constructor(arg0) {
                                                                              closure_0 = badge;
                                                                              tmp = closure_15;
                                                                              tmp2 = badge;
                                                                              tmp3 = tileSize;
                                                                              obj = { gesture: closure_25, children: null };
                                                                              obj1 = { style: null, children: null };
                                                                              items = [, , ];
                                                                              items[0] = closure_12.position;
                                                                              size = { width: tileSize, height: tileSize };
                                                                              items[1] = size;
                                                                              items[2] = closure_26;
                                                                              obj1.style = items;
                                                                              ref = undefined;
                                                                              tmp4 = closure_12;
                                                                              tmp5 = alwaysVisible;
                                                                              if (badge != null) {
                                                                                ref = badge.ref;
                                                                              }
                                                                              obj8 = { ref, accessible: true, accessibilityLabel: null };
                                                                              tmp7 = closure_0;
                                                                              tmp8 = index;
                                                                              intl = tmp2(tmp3[16]).intl;
                                                                              t = tmp2(tmp3[16]).t;
                                                                              obj9 = { badgeName: tmp7.name, position: tmp8 + 1 };
                                                                              obj8.accessibilityLabel = intl.formatToPlainString(closure_0.hidden ? t["dXg/Dl"] : t["21W3EN"], obj9);
                                                                              tmp9 = alwaysVisible;
                                                                              stringResult = undefined;
                                                                              if (alwaysVisible) {
                                                                                intl2 = tmp2(tmp3[16]).intl;
                                                                                tmp2Result = tmp2(tmp3[23]);
                                                                                stringResult = intl2.string(tmp2Result.getAlwaysVisibleCopy(tmp10));
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
                                                                                return closure_29(arg0, closure_0);
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
                                                                                  const result = HapticUtils.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
                                                                                  onLongPress = onLongPress.onLongPress;
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
                                                                              obj.children = tmp(index(tileSize[25]).View, obj1);
                                                                              return tmp(badge(tileSize[30]).GestureDetector, obj);
                                                                            }
                                                                          }
                                                                          if (alwaysVisible) {
                                                                            forResult = Ee(null);
                                                                          }
                                                                          cResult[54] = alwaysVisible;
                                                                          cResult[55] = animatedStyle;
                                                                          class Oe {
                                                                            constructor(arg0) {
                                                                              actionName = badge.nativeEvent.actionName;
                                                                              tmp = "moveup" === actionName;
                                                                              if (tmp) {
                                                                                obj = orderShared;
                                                                                value = orderShared.get();
                                                                                tmp2 = badge_id;
                                                                                index = value.indexOf(badge_id);
                                                                                tmp4 = closure_0;
                                                                                tmp5 = closure_2;
                                                                                obj2 = closure_0(closure_2[25]);
                                                                                num = 1;
                                                                                num2 = 1;
                                                                                if (tmp) {
                                                                                  num2 = -1;
                                                                                }
                                                                                num3 = 0;
                                                                                clampResult = obj2.clamp(index + num2, 0, value.length - 1);
                                                                                tmp4Result = tmp4(tmp5[28]);
                                                                                result = tmp4Result.moveBadgeInDisplayOrder(value, index, clampResult);
                                                                                if (result !== value) {
                                                                                  result1 = obj.set(result);
                                                                                  tmp9 = onCommitOrder;
                                                                                  tmp10 = onCommitOrder(result);
                                                                                  AccessibilityAnnouncer = tmp4(tmp5[31]).AccessibilityAnnouncer;
                                                                                  intl = tmp4(tmp5[16]).intl;
                                                                                  obj1 = { from: null, to: null };
                                                                                  tmp11 = slotOffset;
                                                                                  obj1.from = index + slotOffset + 1;
                                                                                  obj1.to = clampResult + slotOffset + 1;
                                                                                  announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(tmp5[16]).t.qPHr0x, obj1));
                                                                                }
                                                                              } else {
                                                                                str = "movedown";
                                                                              }
                                                                              return;
                                                                            }
                                                                          }
                                                                          cResult[56] = badge;
                                                                          cResult[57] = tmp48;
                                                                          cResult[58] = tmp7;
                                                                          cResult[59] = index;
                                                                          cResult[60] = isFirst;
                                                                          cResult[61] = isLast;
                                                                          cResult[62] = tmp4.fill;
                                                                          cResult[63] = tmp4.position;
                                                                          class Z {
                                                                            constructor(arg0, arg1) {
                                                                              value = null == badge;
                                                                              if (!value) {
                                                                                tmp2 = closure_15;
                                                                                value = closure_15.get();
                                                                              }
                                                                              if (!value) {
                                                                                tmp3 = arg1;
                                                                                x = undefined;
                                                                                if (arg1 != null) {
                                                                                  x = arg1.x;
                                                                                }
                                                                                if (badge.x !== x) {
                                                                                  tmp5 = closure_17;
                                                                                  tmp6 = closure_0;
                                                                                  tmp7 = closure_2;
                                                                                  obj = closure_0(closure_2[26]);
                                                                                  tmp8 = closure_0;
                                                                                  tmp9 = closure_2;
                                                                                  result = closure_17.set(obj.withTiming(badge.x, closure_0(closure_2[27]).timingStandard));
                                                                                }
                                                                                y = undefined;
                                                                                if (arg1 != null) {
                                                                                  y = arg1.y;
                                                                                }
                                                                                if (badge.y !== y) {
                                                                                  tmp12 = closure_18;
                                                                                  tmp13 = closure_0;
                                                                                  tmp14 = closure_2;
                                                                                  obj2 = closure_0(closure_2[26]);
                                                                                  tmp15 = closure_0;
                                                                                  tmp16 = closure_2;
                                                                                  result1 = closure_18.set(obj2.withTiming(badge.y, closure_0(closure_2[27]).timingStandard));
                                                                                }
                                                                              }
                                                                              return;
                                                                            }
                                                                          }
                                                                          cResult[64] = tmp37;
                                                                          cResult[65] = tileSize;
                                                                          cResult[66] = Ee;
                                                                          cResult[67] = forResult;
                                                                        }
                                                                      }
                                                                    }
                                                                    class Oe {
                                                                      constructor(arg0) {
                                                                        actionName = badge.nativeEvent.actionName;
                                                                        tmp = "moveup" === actionName;
                                                                        if (tmp) {
                                                                          obj = orderShared;
                                                                          value = orderShared.get();
                                                                          tmp2 = badge_id;
                                                                          index = value.indexOf(badge_id);
                                                                          tmp4 = closure_0;
                                                                          tmp5 = closure_2;
                                                                          obj2 = closure_0(closure_2[25]);
                                                                          num = 1;
                                                                          num2 = 1;
                                                                          if (tmp) {
                                                                            num2 = -1;
                                                                          }
                                                                          num3 = 0;
                                                                          clampResult = obj2.clamp(index + num2, 0, value.length - 1);
                                                                          tmp4Result = tmp4(tmp5[28]);
                                                                          result = tmp4Result.moveBadgeInDisplayOrder(value, index, clampResult);
                                                                          if (result !== value) {
                                                                            result1 = obj.set(result);
                                                                            tmp9 = onCommitOrder;
                                                                            tmp10 = onCommitOrder(result);
                                                                            AccessibilityAnnouncer = tmp4(tmp5[31]).AccessibilityAnnouncer;
                                                                            intl = tmp4(tmp5[16]).intl;
                                                                            obj1 = { from: null, to: null };
                                                                            tmp11 = slotOffset;
                                                                            obj1.from = index + slotOffset + 1;
                                                                            obj1.to = clampResult + slotOffset + 1;
                                                                            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(tmp5[16]).t.qPHr0x, obj1));
                                                                          }
                                                                        } else {
                                                                          str = "movedown";
                                                                        }
                                                                        return;
                                                                      }
                                                                    }
                                                                    cResult[49] = badge_id;
                                                                    cResult[50] = onCommitOrder;
                                                                    cResult[51] = orderShared;
                                                                    cResult[52] = slotOffset;
                                                                    cResult[53] = Oe;
                                                                    tmp48 = Oe;
                                                                    const tmpResult16 = tmp(tmp2[25]);
                                                                  }
                                                                }
                                                              }
                                                              if (cResult[45] !== tmp30) {
                                                                function me(arg0) {
                                                                  closure_23(arg0);
                                                                }
                                                                { handleChange: null }.handleChange = tmp30;
                                                                class De {
                                                                  constructor() {
                                                                    value = closure_15.get();
                                                                    point = closure_19.get();
                                                                    num = 0;
                                                                    if (value) {
                                                                      num = 10;
                                                                    }
                                                                    rect = { zIndex: num, left: null, top: null, transform: null };
                                                                    if (value) {
                                                                      x = point.x;
                                                                    } else {
                                                                      tmp2 = closure_17;
                                                                      x = closure_17.get();
                                                                    }
                                                                    rect.left = x;
                                                                    if (value) {
                                                                      y = point.y;
                                                                    } else {
                                                                      tmp3 = closure_18;
                                                                      y = closure_18.get();
                                                                    }
                                                                    rect.top = y;
                                                                    if (value) {
                                                                      obj1 = { translateX: null };
                                                                      tmp5 = closure_17;
                                                                      obj1.translateX = closure_17.get() - point.x;
                                                                      items = [, , ];
                                                                      items[0] = obj1;
                                                                      obj6 = { translateY: null };
                                                                      tmp6 = closure_18;
                                                                      obj6.translateY = closure_18.get() - point.y;
                                                                      items[1] = obj6;
                                                                      obj7 = { scale: null };
                                                                      tmp7 = closure_20;
                                                                      obj7.scale = closure_20.get();
                                                                      items[2] = obj7;
                                                                      items1 = items;
                                                                    } else {
                                                                      obj8 = { scale: null };
                                                                      tmp4 = closure_20;
                                                                      obj8.scale = closure_20.get();
                                                                      items1 = [];
                                                                      items1[0] = obj8;
                                                                    }
                                                                    rect.transform = items1;
                                                                    return rect;
                                                                  }
                                                                }
                                                                me.__workletHash = 3880158985991;
                                                                me.__initData = __initData6;
                                                                cResult[45] = tmp30;
                                                                cResult[46] = me;
                                                                class Ee {
                                                                  constructor(arg0) {
                                                                    closure_0 = badge;
                                                                    tmp = closure_15;
                                                                    tmp2 = badge;
                                                                    tmp3 = tileSize;
                                                                    obj = { gesture: closure_25, children: null };
                                                                    obj1 = { style: null, children: null };
                                                                    items = [, , ];
                                                                    items[0] = closure_12.position;
                                                                    size = { width: tileSize, height: tileSize };
                                                                    items[1] = size;
                                                                    items[2] = closure_26;
                                                                    obj1.style = items;
                                                                    ref = undefined;
                                                                    tmp4 = closure_12;
                                                                    tmp5 = alwaysVisible;
                                                                    if (badge != null) {
                                                                      ref = badge.ref;
                                                                    }
                                                                    obj8 = { ref, accessible: true, accessibilityLabel: null };
                                                                    tmp7 = closure_0;
                                                                    tmp8 = index;
                                                                    intl = tmp2(tmp3[16]).intl;
                                                                    t = tmp2(tmp3[16]).t;
                                                                    obj9 = { badgeName: tmp7.name, position: tmp8 + 1 };
                                                                    obj8.accessibilityLabel = intl.formatToPlainString(closure_0.hidden ? t["dXg/Dl"] : t["21W3EN"], obj9);
                                                                    tmp9 = alwaysVisible;
                                                                    stringResult = undefined;
                                                                    if (alwaysVisible) {
                                                                      intl2 = tmp2(tmp3[16]).intl;
                                                                      tmp2Result = tmp2(tmp3[23]);
                                                                      stringResult = intl2.string(tmp2Result.getAlwaysVisibleCopy(tmp10));
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
                                                                      return closure_29(arg0, closure_0);
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
                                                                        const result = HapticUtils.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
                                                                        onLongPress = onLongPress.onLongPress;
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
                                                                    obj.children = tmp(index(tileSize[25]).View, obj1);
                                                                    return tmp(badge(tileSize[30]).GestureDetector, obj);
                                                                  }
                                                                }
                                                                const obj9 = { handleChange: null };
                                                              } else {
                                                                const tmp39 = cResult[46];
                                                              }
                                                              if (cResult[47] !== tmp34) {
                                                                function fe() {
                                                                  closure_24();
                                                                }
                                                                { handleFinalize: null }.handleFinalize = tmp34;
                                                                class De {
                                                                  constructor() {
                                                                    value = closure_15.get();
                                                                    point = closure_19.get();
                                                                    num = 0;
                                                                    if (value) {
                                                                      num = 10;
                                                                    }
                                                                    rect = { zIndex: num, left: null, top: null, transform: null };
                                                                    if (value) {
                                                                      x = point.x;
                                                                    } else {
                                                                      tmp2 = closure_17;
                                                                      x = closure_17.get();
                                                                    }
                                                                    rect.left = x;
                                                                    if (value) {
                                                                      y = point.y;
                                                                    } else {
                                                                      tmp3 = closure_18;
                                                                      y = closure_18.get();
                                                                    }
                                                                    rect.top = y;
                                                                    if (value) {
                                                                      obj1 = { translateX: null };
                                                                      tmp5 = closure_17;
                                                                      obj1.translateX = closure_17.get() - point.x;
                                                                      items = [, , ];
                                                                      items[0] = obj1;
                                                                      obj6 = { translateY: null };
                                                                      tmp6 = closure_18;
                                                                      obj6.translateY = closure_18.get() - point.y;
                                                                      items[1] = obj6;
                                                                      obj7 = { scale: null };
                                                                      tmp7 = closure_20;
                                                                      obj7.scale = closure_20.get();
                                                                      items[2] = obj7;
                                                                      items1 = items;
                                                                    } else {
                                                                      obj8 = { scale: null };
                                                                      tmp4 = closure_20;
                                                                      obj8.scale = closure_20.get();
                                                                      items1 = [];
                                                                      items1[0] = obj8;
                                                                    }
                                                                    rect.transform = items1;
                                                                    return rect;
                                                                  }
                                                                }
                                                                fe.__workletHash = 16882285685444;
                                                                fe.__initData = __initData7;
                                                                cResult[47] = tmp34;
                                                                cResult[48] = fe;
                                                                class Ee {
                                                                  constructor(arg0) {
                                                                    closure_0 = badge;
                                                                    tmp = closure_15;
                                                                    tmp2 = badge;
                                                                    tmp3 = tileSize;
                                                                    obj = { gesture: closure_25, children: null };
                                                                    obj1 = { style: null, children: null };
                                                                    items = [, , ];
                                                                    items[0] = closure_12.position;
                                                                    size = { width: tileSize, height: tileSize };
                                                                    items[1] = size;
                                                                    items[2] = closure_26;
                                                                    obj1.style = items;
                                                                    ref = undefined;
                                                                    tmp4 = closure_12;
                                                                    tmp5 = alwaysVisible;
                                                                    if (badge != null) {
                                                                      ref = badge.ref;
                                                                    }
                                                                    obj8 = { ref, accessible: true, accessibilityLabel: null };
                                                                    tmp7 = closure_0;
                                                                    tmp8 = index;
                                                                    intl = tmp2(tmp3[16]).intl;
                                                                    t = tmp2(tmp3[16]).t;
                                                                    obj9 = { badgeName: tmp7.name, position: tmp8 + 1 };
                                                                    obj8.accessibilityLabel = intl.formatToPlainString(closure_0.hidden ? t["dXg/Dl"] : t["21W3EN"], obj9);
                                                                    tmp9 = alwaysVisible;
                                                                    stringResult = undefined;
                                                                    if (alwaysVisible) {
                                                                      intl2 = tmp2(tmp3[16]).intl;
                                                                      tmp2Result = tmp2(tmp3[23]);
                                                                      stringResult = intl2.string(tmp2Result.getAlwaysVisibleCopy(tmp10));
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
                                                                      return closure_29(arg0, closure_0);
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
                                                                        const result = HapticUtils.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
                                                                        onLongPress = onLongPress.onLongPress;
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
                                                                    obj.children = tmp(index(tileSize[25]).View, obj1);
                                                                    return tmp(badge(tileSize[30]).GestureDetector, obj);
                                                                  }
                                                                }
                                                                const obj10 = { handleFinalize: null };
                                                              }
                                                              const Gesture = tmp(tmp2[30]).Gesture;
                                                              const PanResult = Gesture.Pan();
                                                              const minDistanceResult = Gesture.Pan().minDistance(8);
                                                              Gesture.Pan().minDistance(8).onStart(tmp38).onChange(tmp39);
                                                              cResult[39] = tmp30;
                                                              cResult[40] = tmp34;
                                                              cResult[42] = tmp44;
                                                              const onStartResult = Gesture.Pan().minDistance(8).onStart(tmp38);
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
                                        const obj11 = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset: tmp11, slotOffset, tileSize: null, positionX: sharedValue2, withTiming: tmp(tmp2[26]).withTiming, timingStandard: tmp(tmp2[27]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: null, runOnJS: tmp(tmp2[25]).runOnJS, triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes, onCommitOrder };
                                        tmp35.__closure = obj11;
                                        tmp35.__workletHash = 1571326119919;
                                        tmp35.__initData = __initData5;
                                        cResult[26] = autoScrollSpeed;
                                        cResult[27] = badge_id;
                                        cResult[28] = sharedValue1;
                                        class Z {
                                          constructor(arg0, arg1) {
                                            value = null == badge;
                                            if (!value) {
                                              tmp2 = closure_15;
                                              value = closure_15.get();
                                            }
                                            if (!value) {
                                              tmp3 = arg1;
                                              x = undefined;
                                              if (arg1 != null) {
                                                x = arg1.x;
                                              }
                                              if (badge.x !== x) {
                                                tmp5 = closure_17;
                                                tmp6 = closure_0;
                                                tmp7 = closure_2;
                                                obj = closure_0(closure_2[26]);
                                                tmp8 = closure_0;
                                                tmp9 = closure_2;
                                                result = closure_17.set(obj.withTiming(badge.x, closure_0(closure_2[27]).timingStandard));
                                              }
                                              y = undefined;
                                              if (arg1 != null) {
                                                y = arg1.y;
                                              }
                                              if (badge.y !== y) {
                                                tmp12 = closure_18;
                                                tmp13 = closure_0;
                                                tmp14 = closure_2;
                                                obj2 = closure_0(closure_2[26]);
                                                tmp15 = closure_0;
                                                tmp16 = closure_2;
                                                result1 = closure_18.set(obj2.withTiming(badge.y, closure_0(closure_2[27]).timingStandard));
                                              }
                                            }
                                            return;
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
                                        cResult[38] = tmp35;
                                        tmp34 = tmp35;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj12 = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot: tmp22, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue3, autoScrollSpeed: null, clamp: tmp(tmp2[25]).clamp };
                              tmp31.__closure = obj12;
                              tmp31.__workletHash = 11658962157301;
                              cResult[19] = autoScrollSpeed;
                              cResult[20] = sharedValue1;
                              cResult[21] = sharedValue;
                              cResult[22] = sharedValue2;
                              cResult[23] = sharedValue3;
                              cResult[24] = tmp22;
                              cResult[25] = tmp31;
                              tmp30 = tmp31;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                function handleStart() {
                  if (!isDragActive.get()) {
                    ReanimatedRexport.runOnJS(ContextMenuState.hideContextMenu)();
                    const result = isDragActive.set(true);
                    const result1 = sharedValue.set(true);
                    const point = { x: sharedValue2.get(), y: sharedValue3.get() };
                    const result2 = sharedValue4.set(point);
                    const measureResult = ReanimatedRexport.measure(scrollRef);
                    let tmp15 = null;
                    if (null != measureResult) {
                      ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
                      tmp15 = { pageY: null, height: null };
                      const obj3 = { pageY: null, height: null };
                    }
                    const result3 = sharedValue1.set(tmp15);
                    const result4 = sharedValue5.set(timing.withTiming(c17, tmp2(4762).timingStandard));
                    const tmp2Result = timing;
                    const tmp2Result2 = ReanimatedRexport;
                    ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.DRAG_AND_DROP_START);
                    const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
                  }
                }
                const obj13 = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: tmp(tmp2[25]).runOnJS, hideContextMenu: tmp(tmp2[29]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: tmp(tmp2[25]).measure, scrollRef, dragViewport: null, scale: null, withTiming: null, DRAG_SCALE: null, timingStandard: null, triggerHapticFeedback: null, HapticFeedbackTypes: null };
                class Z {
                  constructor(arg0, arg1) {
                    value = null == badge;
                    if (!value) {
                      tmp2 = closure_15;
                      value = closure_15.get();
                    }
                    if (!value) {
                      tmp3 = arg1;
                      x = undefined;
                      if (arg1 != null) {
                        x = arg1.x;
                      }
                      if (badge.x !== x) {
                        tmp5 = closure_17;
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        obj = closure_0(closure_2[26]);
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        result = closure_17.set(obj.withTiming(badge.x, closure_0(closure_2[27]).timingStandard));
                      }
                      y = undefined;
                      if (arg1 != null) {
                        y = arg1.y;
                      }
                      if (badge.y !== y) {
                        tmp12 = closure_18;
                        tmp13 = closure_0;
                        tmp14 = closure_2;
                        obj2 = closure_0(closure_2[26]);
                        tmp15 = closure_0;
                        tmp16 = closure_2;
                        result1 = closure_18.set(obj2.withTiming(badge.y, closure_0(closure_2[27]).timingStandard));
                      }
                    }
                    return;
                  }
                }
                obj13.scale = sharedValue5;
                obj13.withTiming = tmp(tmp2[26]).withTiming;
                obj13.DRAG_SCALE = sharedValue2;
                obj13.timingStandard = tmp(tmp2[27]).timingStandard;
                obj13.triggerHapticFeedback = tmp(tmp2[11]).triggerHapticFeedback;
                obj13.HapticFeedbackTypes = tmp(tmp2[11]).HapticFeedbackTypes;
                handleStart.__closure = obj13;
                handleStart.__workletHash = 11005478611755;
                handleStart.__initData = __initData4;
                cResult[10] = sharedValue4;
                cResult[11] = sharedValue1;
                cResult[12] = isDragActive;
                cResult[13] = sharedValue;
                cResult[14] = sharedValue2;
                cResult[15] = sharedValue3;
                cResult[16] = sharedValue5;
                cResult[17] = scrollRef;
                cResult[18] = handleStart;
                tmp27 = handleStart;
                const tmpResult15 = tmp(tmp2[25]);
              }
            }
          }
        }
      }
      const fn3 = function q() {
        value = orderShared.get();
        const sum = tileSize + BadgeGrid.BADGE_GRID_GAP;
        const rounded = Math.floor((sharedValue2.get() + tileSize / 2) / sum);
        const obj = orderShared;
        const bound = Math.max(Math.floor((sharedValue3.get() + tileSize / 2) / sum), 0);
        const clampResult = ReanimatedRexport.clamp(rounded, 0, BadgeGrid.BADGE_GRID_COLUMNS - 1);
        const clampResult1 = ReanimatedRexport.clamp(bound * BadgeGrid.BADGE_GRID_COLUMNS + clampResult - slotOffset, 0, value.length - 1);
        const result = PendingBadgeSettings.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
        if (result !== value) {
          const result1 = obj.set(result);
          const tmpResult = tmp(4497);
          tmp(4497).runOnJS(tmp(4726).triggerHapticFeedback)(tmp(4726).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
          const runOnJSResult = tmp(4497).runOnJS(tmp(4726).triggerHapticFeedback);
        }
      };
      const obj14 = { orderShared, tileSize, BADGE_GRID_GAP: tmp(tmp2[13]).BADGE_GRID_GAP, clamp: tmp(tmp2[25]).clamp, positionX: sharedValue2, BADGE_GRID_COLUMNS: tmp(tmp2[13]).BADGE_GRID_COLUMNS, positionY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp(tmp2[28]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp(tmp2[25]).runOnJS, triggerHapticFeedback: tmp(tmp2[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp(tmp2[11]).HapticFeedbackTypes };
      fn3.__closure = obj14;
      fn3.__workletHash = 1083237242858;
      fn3.__initData = items;
      cResult[3] = badge_id;
      cResult[4] = orderShared;
      cResult[5] = sharedValue2;
      cResult[6] = sharedValue3;
      cResult[7] = slotOffset;
      cResult[8] = tileSize;
      cResult[9] = fn3;
      tmp22 = fn3;
      const tmpResult14 = tmp(tmp2[25]);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const tmpResult9 = tmp(tmp2[25]);
  }
  let fn = function n() {
    onPress(badge);
  };
  cResult[0] = badge;
  cResult[1] = onPress;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((badge) => {
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
  closure_14 = index(tileSize[24])(() => {
    onPress(badge);
  });
  const sharedValue = badge(tileSize[25]).useSharedValue(false);
  let obj = badge(tileSize[25]);
  const sharedValue1 = badge(tileSize[25]).useSharedValue(null);
  if (typeof getSlotOffset === "function") {
    let point = { x: null, y: null };
    let result = index % tmp2(tmp[13]).BADGE_GRID_COLUMNS;
    point.x = result * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP);
    let _Math = Math;
    let rounded = Math.floor(index / tmp2(tmp[13]).BADGE_GRID_COLUMNS);
    point.y = rounded * (tileSize + tmp2(tmp[13]).BADGE_GRID_GAP);
    sharedValue2 = tmp2(tmp[25]).useSharedValue(point.x);
    let tmp2Result = tmp2(tmp[25]);
    sharedValue3 = tmp2(tmp[25]).useSharedValue(point.y);
    const tmp2Result7 = tmp2(tmp[25]);
    sharedValue4 = tmp2(tmp[25]).useSharedValue(point);
    const tmp2Result8 = tmp2(tmp[25]);
    sharedValue5 = tmp2(tmp[25]).useSharedValue(1);
    const tmp2Result9 = tmp2(tmp[25]);
    let fn = function w() {
      value = orderShared.get();
      index = value.indexOf(badge_id);
      let tmp2 = null;
      if (index >= 0) {
        const sum = index + slotOffset;
        if (typeof getSlotOffset === "function") {
          const point = { x: null, y: null };
          const result = sum % BadgeGrid.BADGE_GRID_COLUMNS;
          point.x = result * (tmp6 + BadgeGrid.BADGE_GRID_GAP);
          const _Math = Math;
          const rounded = Math.floor(sum / BadgeGrid.BADGE_GRID_COLUMNS);
          point.y = rounded * (tmp6 + BadgeGrid.BADGE_GRID_GAP);
          tmp2 = point;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return tmp2;
    };
    let obj3 = { orderShared, badgeId: badge_id, getSlotOffset: tmp5, slotOffset, tileSize };
    fn.__closure = obj3;
    fn.__workletHash = 5732066311771;
    fn.__initData = __initData9;
    class C {
      constructor(arg0, arg1) {
        value = null == badge;
        if (!value) {
          tmp2 = closure_15;
          value = closure_15.get();
        }
        if (!value) {
          tmp3 = arg1;
          x = undefined;
          if (arg1 != null) {
            x = arg1.x;
          }
          if (badge.x !== x) {
            tmp5 = closure_17;
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj = closure_0(closure_2[26]);
            tmp8 = closure_0;
            tmp9 = closure_2;
            result = closure_17.set(obj.withTiming(badge.x, closure_0(closure_2[27]).timingStandard));
          }
          y = undefined;
          if (arg1 != null) {
            y = arg1.y;
          }
          if (badge.y !== y) {
            tmp12 = closure_18;
            tmp13 = closure_0;
            tmp14 = closure_2;
            obj2 = closure_0(closure_2[26]);
            tmp15 = closure_0;
            tmp16 = closure_2;
            result1 = closure_18.set(obj2.withTiming(badge.y, closure_0(closure_2[27]).timingStandard));
          }
        }
        return;
      }
    }
    let obj4 = { isThisTileDragging: sharedValue, positionX: sharedValue2, withTiming: tmp2(tmp[26]).withTiming, timingStandard: tmp2(tmp[27]).timingStandard, positionY: sharedValue3 };
    C.__closure = obj4;
    C.__workletHash = 16081465994486;
    C.__initData = __initData10;
    const animatedReaction = tmp2(tmp[25]).useAnimatedReaction(fn, C);
    class U {
      constructor() {
        obj = orderShared;
        value = orderShared.get();
        tmp = closure_0;
        tmp2 = closure_2;
        sum = tileSize + closure_0(closure_2[13]).BADGE_GRID_GAP;
        obj2 = closure_0(closure_2[25]);
        rounded = Math.floor((closure_17.get() + tileSize / 2) / sum);
        clampResult = obj2.clamp(rounded, 0, closure_0(closure_2[13]).BADGE_GRID_COLUMNS - 1);
        bound = Math.max(Math.floor((closure_18.get() + tileSize / 2) / sum), 0);
        obj3 = closure_0(closure_2[25]);
        clampResult1 = obj3.clamp(bound * closure_0(closure_2[13]).BADGE_GRID_COLUMNS + clampResult - slotOffset, 0, value.length - 1);
        obj4 = closure_0(closure_2[28]);
        result = obj4.moveBadgeInDisplayOrder(value, value.indexOf(badge_id), clampResult1);
        if (result !== value) {
          result1 = obj.set(result);
          tmpResult = tmp(tmp2[25]);
          runOnJSResult = tmpResult.runOnJS(tmp(tmp2[11]).triggerHapticFeedback);
          tmp10Result = runOnJSResult(tmp(tmp2[11]).HapticFeedbackTypes.DRAG_AND_DROP_MOVE);
        }
        return;
      }
    }
    let obj5 = { orderShared, tileSize, BADGE_GRID_GAP: tmp2(tmp[13]).BADGE_GRID_GAP, clamp: tmp2(tmp[25]).clamp, positionX: sharedValue2, BADGE_GRID_COLUMNS: tmp2(tmp[13]).BADGE_GRID_COLUMNS, positionY: sharedValue3, slotOffset, moveBadgeInDisplayOrder: tmp2(tmp[28]).moveBadgeInDisplayOrder, badgeId: badge_id, runOnJS: tmp2(tmp[25]).runOnJS, triggerHapticFeedback: tmp2(tmp[11]).triggerHapticFeedback, HapticFeedbackTypes: tmp2(tmp[11]).HapticFeedbackTypes };
    U.__closure = obj5;
    U.__workletHash = 1742164926393;
    U.__initData = __initData11;
    let items = [badge_id, orderShared, slotOffset, tileSize, sharedValue2, sharedValue3];
    reslot = slotOffset.useCallback(U, items);
    const tmp2Result10 = tmp2(tmp[25]);
    class V {
      constructor() {
        return scrollOffset.get();
      }
    }
    let obj6 = { scrollOffset };
    V.__closure = obj6;
    V.__workletHash = 9584962527667;
    V.__initData = __initData12;
    class X {
      constructor(arg0, arg1) {
        value = null != arg1;
        if (value) {
          tmp2 = closure_15;
          value = closure_15.get();
        }
        if (value) {
          tmp3 = badge;
          tmp4 = closure_18;
          result = closure_18.set(closure_18.get() + (badge - arg1));
          tmp6 = closure_21;
          tmp7 = closure_21();
        }
        return;
      }
    }
    const obj7 = { isThisTileDragging: sharedValue, positionY: sharedValue3, reslot };
    X.__closure = obj7;
    X.__workletHash = 959241592972;
    X.__initData = __initData13;
    const animatedReaction1 = tmp2(tmp[25]).useAnimatedReaction(V, X);
    let items1 = [reslot, scrollRef, sharedValue1, autoScrollSpeed, badge_id, tileSize, slotOffset, orderShared, isDragActive, onCommitOrder, sharedValue, sharedValue5, sharedValue2, sharedValue3, sharedValue4];
    gesture = slotOffset.useMemo(() => {
      function handleStart() {
        if (!isDragActive.get()) {
          badge(tileSize[25]).runOnJS(badge(tileSize[29]).hideContextMenu)();
          const result = isDragActive.set(true);
          const result1 = sharedValue.set(true);
          const point = { x: closure_1_17.get(), y: sharedValue3.get() };
          const result2 = sharedValue4.set(point);
          const obj2 = badge(tileSize[25]);
          const measureResult = badge(tileSize[25]).measure(scrollRef);
          let tmp15 = null;
          if (null != measureResult) {
            ({ pageY: obj5.pageY, height: obj5.height } = measureResult);
            tmp15 = { pageY: null, height: null };
            const obj3 = { pageY: null, height: null };
          }
          const result3 = sharedValue1.set(tmp15);
          const obj4 = badge(tileSize[25]);
          const result4 = sharedValue5.set(badge(tileSize[26]).withTiming(sharedValue2, tmp2(tmp3[27]).timingStandard));
          const tmp2Result = badge(tileSize[26]);
          const tmp2Result2 = badge(tileSize[25]);
          badge(tileSize[25]).runOnJS(badge(tileSize[11]).triggerHapticFeedback)(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_START);
          const runOnJSResult = badge(tileSize[25]).runOnJS(badge(tileSize[11]).triggerHapticFeedback);
        }
      }
      handleStart.__closure = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: badge(tileSize[25]).runOnJS, hideContextMenu: badge(tileSize[29]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: badge(tileSize[25]).measure, scrollRef, dragViewport: sharedValue1, scale: sharedValue5, withTiming: badge(tileSize[26]).withTiming, DRAG_SCALE: sharedValue2, timingStandard: badge(tileSize[27]).timingStandard, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes };
      handleStart.__workletHash = 11781614290100;
      handleStart.__initData = __initData;
      function handleChange(changeX) {
        if (sharedValue.get()) {
          const result = sharedValue2.set(sharedValue2.get() + changeX.changeX);
          const result1 = closure_1_18.set(closure_1_18.get() + changeX.changeY);
          reslot();
          value = sharedValue1.get();
          if (null != value) {
            const diff = changeX.absoluteY - value.pageY;
            const diff1 = value.pageY + value.height - changeX.absoluteY;
            if (diff < sharedValue3) {
              const result2 = autoScrollSpeed.set(badge(tileSize[25]).clamp(diff, 0, tmp23) / tmp23 - 1);
              const obj2 = badge(tileSize[25]);
            } else if (diff1 < tmp23) {
              const result3 = autoScrollSpeed.set(1 - badge(tileSize[25]).clamp(diff1, 0, tmp23) / tmp23);
              const obj = badge(tileSize[25]);
            } else {
              const result4 = autoScrollSpeed.set(0);
            }
          }
        }
      }
      let obj = { isAnyDragActive: isDragActive, isThisTileDragging: sharedValue, runOnJS: badge(tileSize[25]).runOnJS, hideContextMenu: badge(tileSize[29]).hideContextMenu, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, measure: badge(tileSize[25]).measure, scrollRef, dragViewport: sharedValue1, scale: sharedValue5, withTiming: badge(tileSize[26]).withTiming, DRAG_SCALE: sharedValue2, timingStandard: badge(tileSize[27]).timingStandard, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes };
      handleChange.__closure = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue3, autoScrollSpeed, clamp: badge(tileSize[25]).clamp };
      handleChange.__workletHash = 879322197993;
      handleChange.__initData = __initData2;
      function handleFinalize() {
        if (sharedValue.get()) {
          const result = autoScrollSpeed.set(0);
          const result1 = sharedValue1.set(null);
          value = orderShared.get();
          index = value.indexOf(badge_id);
          if (index >= 0) {
            const sum = index + slotOffset;
            if (typeof closure_23 === "function") {
              const result2 = sum % badge(tileSize[13]).BADGE_GRID_COLUMNS;
              const _Math = Math;
              const result3 = result2 * (tmp58 + badge(tileSize[13]).BADGE_GRID_GAP);
              const rounded = Math.floor(sum / badge(tileSize[13]).BADGE_GRID_COLUMNS);
              const result4 = rounded * (tmp58 + badge(tileSize[13]).BADGE_GRID_GAP);
              const result5 = sharedValue2.set(badge(tileSize[26]).withTiming(result3, badge(tileSize[27]).timingStandard));
              const obj2 = badge(tileSize[26]);
              const result6 = sharedValue3.set(badge(tileSize[26]).withTiming(result4, badge(tileSize[27]).timingStandard));
              const obj3 = badge(tileSize[26]);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          const result7 = sharedValue5.set(badge(tileSize[26]).withTiming(1, badge(tileSize[27]).timingStandard));
          const result8 = sharedValue.set(false);
          const result9 = isDragActive.set(false);
          const obj4 = badge(tileSize[26]);
          const obj5 = badge(tileSize[25]);
          badge(tileSize[25]).runOnJS(badge(tileSize[11]).triggerHapticFeedback)(badge(tileSize[11]).HapticFeedbackTypes.DRAG_AND_DROP_END);
          const runOnJSResult = badge(tileSize[25]).runOnJS(badge(tileSize[11]).triggerHapticFeedback);
          badge(tileSize[25]).runOnJS(onCommitOrder)(value);
          const obj6 = badge(tileSize[25]);
        }
      }
      let obj2 = { isThisTileDragging: sharedValue, positionX: sharedValue2, positionY: sharedValue3, reslot, dragViewport: sharedValue1, AUTO_SCROLL_EDGE_SIZE: sharedValue3, autoScrollSpeed, clamp: badge(tileSize[25]).clamp };
      handleFinalize.__closure = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize: handleFinalize, positionX: sharedValue2, withTiming: badge(tileSize[26]).withTiming, timingStandard: badge(tileSize[27]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: isDragActive, runOnJS: badge(tileSize[25]).runOnJS, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes, onCommitOrder };
      handleFinalize.__workletHash = 4416604805365;
      handleFinalize.__initData = __initData3;
      const Gesture = badge(tileSize[30]).Gesture;
      let obj3 = { isThisTileDragging: sharedValue, autoScrollSpeed, dragViewport: sharedValue1, orderShared, badgeId: badge_id, getSlotOffset, slotOffset, tileSize: handleFinalize, positionX: sharedValue2, withTiming: badge(tileSize[26]).withTiming, timingStandard: badge(tileSize[27]).timingStandard, positionY: sharedValue3, scale: sharedValue5, isAnyDragActive: isDragActive, runOnJS: badge(tileSize[25]).runOnJS, triggerHapticFeedback: badge(tileSize[11]).triggerHapticFeedback, HapticFeedbackTypes: badge(tileSize[11]).HapticFeedbackTypes, onCommitOrder };
      const PanResult = Gesture.Pan();
      const fn = function s() {
        handleStart();
      };
      fn.__closure = { handleStart };
      fn.__workletHash = 12078596428673;
      fn.__initData = __initData6;
      const minDistanceResult = Gesture.Pan().minDistance(8);
      const fn2 = function n(arg0) {
        handleChange(arg0);
      };
      fn2.__closure = { handleChange };
      fn2.__workletHash = 9495907638982;
      fn2.__initData = __initData5;
      const onStartResult = Gesture.Pan().minDistance(8).onStart(fn);
      const fn3 = function t() {
        handleFinalize();
      };
      fn3.__closure = { handleFinalize };
      fn3.__workletHash = 12861679152071;
      fn3.__initData = __initData4;
      return Gesture.Pan().minDistance(8).onStart(fn).onChange(fn2).onFinalize(fn3);
    }, items1);
    const tmp2Result11 = tmp2(tmp[25]);
    function ae() {
      value = sharedValue.get();
      const point = sharedValue4.get();
      let num = 0;
      if (value) {
        num = 10;
      }
      const rect = { zIndex: num, left: null, top: null, transform: null };
      if (value) {
        let x = point.x;
      } else {
        x = sharedValue2.get();
      }
      rect.left = x;
      if (value) {
        let y = point.y;
      } else {
        y = sharedValue3.get();
      }
      rect.top = y;
      if (value) {
        const obj = { translateX: sharedValue2.get() - point.x };
        const items = [obj, , ];
        const obj2 = { translateY: sharedValue3.get() - point.y };
        items[1] = obj2;
        const obj3 = { scale: sharedValue5.get() };
        items[2] = obj3;
        let items1 = items;
      } else {
        const obj4 = { scale: sharedValue5.get() };
        items1 = [obj4];
      }
      rect.transform = items1;
      return rect;
    }
    const obj8 = { isThisTileDragging: sharedValue, dragOrigin: sharedValue4, positionX: sharedValue2, positionY: sharedValue3, scale: sharedValue5 };
    ae.__closure = obj8;
    ae.__workletHash = 10858650842867;
    ae.__initData = __initData14;
    getSlotOffset = tmp2(tmp[25]).useAnimatedStyle(ae);
    const items2 = [badge_id, orderShared, onCommitOrder, slotOffset];
    closure_24 = slotOffset.useCallback((nativeEvent) => {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("moveup" === actionName) {
        value = orderShared.get();
        index = value.indexOf(badge_id);
        let num2 = 1;
        if (tmp) {
          num2 = -1;
        }
        const clampResult = ReanimatedRexport.clamp(index + num2, 0, value.length - 1);
        const obj = orderShared;
        const result = PendingBadgeSettings.moveBadgeInDisplayOrder(value, index, clampResult);
        if (result !== value) {
          const result1 = obj.set(result);
          onCommitOrder(result);
          const AccessibilityAnnouncer = tmp4(4472).AccessibilityAnnouncer;
          const intl = tmp4(1119).intl;
          const obj3 = { from: index + slotOffset + 1, to: clampResult + slotOffset + 1 };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1119).t.qPHr0x, obj3));
        }
        const tmp4Result = PendingBadgeSettings;
      }
    }, items2);
    items3 = [];
    if (!isFirst) {
      const obj9 = { name: "moveup", label: null };
      let intl = tmp2(tmp[16]).intl;
      obj9.label = intl.string(tmp2(tmp[16]).t.eR2XSh);
      items3.push(obj9);
    }
    if (!isLast) {
      const obj10 = { name: "movedown", label: null };
      let intl2 = tmp2(tmp[16]).intl;
      obj10.label = intl2.string(tmp2(tmp[16]).t.wWi0DL);
      items3.push(obj10);
    }
    function renderTile(ref) {
      badge = ref;
      const obj = { gesture, children: null };
      const obj2 = { style: null, children: null };
      const items = [position.position, , ];
      const size = { width: tileSize, height: tileSize };
      items[1] = size;
      items[2] = closure_23;
      obj2.style = items;
      ref = undefined;
      if (ref != null) {
        ref = ref.ref;
      }
      const obj3 = { ref, accessible: true, accessibilityLabel: null };
      const intl = tmp2(tmp3[16]).intl;
      const t = tmp2(tmp3[16]).t;
      obj3.accessibilityLabel = intl.formatToPlainString(badge.hidden ? t["dXg/Dl"] : t["21W3EN"], { badgeName: badge.name, position: index + 1 });
      let stringResult;
      if (alwaysVisible) {
        const intl2 = tmp2(tmp3[16]).intl;
        stringResult = intl2.string(tmp2(tmp3[23]).getAlwaysVisibleCopy(tmp10));
        const tmp2Result = tmp2(tmp3[23]);
      }
      const merged = Object.assign({ accessibilityRole: "button", accessibilityHint: stringResult });
      let accessibilityActions;
      if (ref != null) {
        accessibilityActions = ref.accessibilityActions;
      }
      if (accessibilityActions == null) {
        accessibilityActions = [];
      }
      const items1 = [...items3];
      obj3.accessibilityActions = items1;
      obj3.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if ("moveup" !== actionName) {
          if ("movedown" !== actionName) {
            if (tmp != null) {
              const onAccessibilityAction = tmp.onAccessibilityAction;
              if (onAccessibilityAction != null) {
                const result = onAccessibilityAction(nativeEvent);
              }
            }
          }
        }
        closure_24(nativeEvent);
      };
      if (alwaysVisible) {
        onPress = closure_14;
      } else if (ref != null) {
        onPress = ref.onPress;
      }
      obj3.onPress = onPress;
      let fn;
      if (null != ref) {
        fn = (arg0) => {
          const result = HapticUtils.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
          onLongPress = onLongPress.onLongPress;
          if (onLongPress != null) {
            onLongPress(arg0);
          }
        };
      }
      obj3.onLongPress = fn;
      obj3.delayLongPress = badge(tileSize[12]).CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      obj3.style = position.fill;
      obj3.children = sharedValue(closure_24, { badge, alwaysVisible });
      obj2.children = sharedValue(alwaysVisible, obj3);
      obj.children = sharedValue(index(tileSize[25]).View, obj2);
      return sharedValue(badge(tileSize[30]).GestureDetector, obj);
    }
    if (alwaysVisible) {
      let renderTileResult = renderTile(null);
    } else {
      const obj11 = { badge, index, onHide, children: renderTile };
      renderTileResult = sharedValue(reslot, obj11);
    }
    return renderTileResult;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  let obj2 = badge(tileSize[25]);
}));
const __initData15 = { code: "function CustomizeBadgesSheetTsx26({timeSincePreviousFrame:timeSincePreviousFrame}){const{autoScrollSpeed,autoScrollElapsed,MS_PER_FRAME_60FPS,AUTO_SCROLL_PIXELS_PER_SECOND,scrollTo,scrollRef,roundToNearestPixel,scrollOffset}=this.__closure;const speed=autoScrollSpeed.get();if(speed===0||timeSincePreviousFrame==null||timeSincePreviousFrame<=0){return;}autoScrollElapsed.set(autoScrollElapsed.get()+timeSincePreviousFrame);const elapsed=autoScrollElapsed.get();if(elapsed<MS_PER_FRAME_60FPS){return;}autoScrollElapsed.set(0);const delta=speed*AUTO_SCROLL_PIXELS_PER_SECOND*elapsed/1000;scrollTo(scrollRef,0,Math.max(roundToNearestPixel(scrollOffset.get()+delta),0),false);}" };
const __initData16 = { code: "function CustomizeBadgesSheetTsx27(){const{autoScrollSpeed}=this.__closure;return autoScrollSpeed.get()!==0;}" };
const __initData17 = { code: "function CustomizeBadgesSheetTsx28(isScrolling,wasScrolling){const{autoScrollElapsed,runOnJS,setAutoScrollerActive}=this.__closure;if(wasScrolling==null||isScrolling===wasScrolling){return;}autoScrollElapsed.set(0);runOnJS(setAutoScrollerActive)(isScrolling);}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/CustomizeBadgesSheet.tsx");

export default function CustomizeBadgesSheet(analyticsLocations) {
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
  const tenureBadgeHideable = stateFromStores(stateFromStores1[32]).useConfig({ location: "CustomizeBadgesSheet" }).tenureBadgeHideable;
  const sum = Math.max(stateFromStores(stateFromStores1[33])().bottom, hiddenBadges) + 4;
  let obj = stateFromStores(stateFromStores1[32]);
  const items = [pendingBadgeDisplayOrder];
  stateFromStores = tenureBadgeHideable(stateFromStores1[34]).useStateFromStores(items, () => {
    const currentUser = pendingBadgeDisplayOrder.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = tenureBadgeHideable(stateFromStores1[34]);
  const items1 = [pendingBadgeDisplayOrder];
  stateFromStores1 = tenureBadgeHideable(stateFromStores1[34]).useStateFromStores(items1, () => stateFromStores(stateFromStores1[35]).canUsePremiumProfileCustomization(pendingBadgeDisplayOrder.getCurrentUser()));
  let obj3 = tenureBadgeHideable(stateFromStores1[34]);
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = stateFromStores(stateFromStores1[36])(analyticsLocations1, tmp2(tmp3[37]).BADGES_REORDER_ACTION_SHEET).analyticsLocations;
  context = analyticsLocations.useContext(tmp2(tmp3[38]));
  const items2 = [context, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    if (context != null) {
      context.close();
    }
    const obj2 = { analyticsLocation: { page: constants3.USER_SETTINGS, section: __initData.USER_PROFILE, object: constants2.BUTTON_CTA }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj2);
  }, items2);
  let obj4 = analyticsLocations;
  const tmp8 = stateFromStores(stateFromStores1[36]);
  const items3 = [pendingBadgeHiddenBadges];
  const items4 = [stateFromStores];
  stateFromStoresArray = tenureBadgeHideable(stateFromStores1[34]).useStateFromStoresArray(items3, () => BadgeDirectoryStore.getBadges(stateFromStores), items4);
  const tmp5Result = tenureBadgeHideable(stateFromStores1[34]);
  const items5 = [pendingBadgeHiddenBadges];
  const items6 = [stateFromStores];
  const stateFromStoresObject = tenureBadgeHideable(stateFromStores1[34]).useStateFromStoresObject(items5, () => {
    let hasCatalogForResult = null != stateFromStores;
    if (hasCatalogForResult) {
      hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
    }
    return { hasCatalog: hasCatalogForResult, hasCatalogError: BadgeDirectoryStore.hasCatalogFetchErrorFor(stateFromStores) };
  }, items6);
  hasCatalog = stateFromStoresObject.hasCatalog;
  const effect = analyticsLocations.useEffect(() => {
    const result = UserProfileAnalyticsUtils.trackUserProfileAction({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations });
  }, []);
  const items7 = [stateFromStores1, hasCatalog, analyticsLocations];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = hasCatalog;
    }
    if (tmp) {
      const obj2 = { type: PremiumUpsellTypes.BADGE_REORDERING_UPSELL, location: null, location_stack: null };
      const obj3 = { page: constants3.USER_SETTINGS, section: __initData.USER_PROFILE };
      obj2.location = obj3;
      obj2.location_stack = analyticsLocations;
      AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items7);
  const items8 = [stateFromStores];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(tmp) && !BadgeDirectoryStore.isCatalogStaleFor(tmp);
    }
  }, items8);
  const tmp5Result12 = tenureBadgeHideable(stateFromStores1[34]);
  const items9 = [hasCatalog];
  const stateFromStoresObject1 = tenureBadgeHideable(stateFromStores1[34]).useStateFromStoresObject(items9, () => {
    const pendingChanges = hasCatalog.getPendingChanges();
    return { pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder, pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
  }, []);
  pendingBadgeDisplayOrder = stateFromStoresObject1.pendingBadgeDisplayOrder;
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  const items10 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  memo = analyticsLocations.useMemo(() => PendingBadgeSettings.applyPendingBadgeSettings(stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items10);
  const items11 = [tenureBadgeHideable];
  analyticsLocations.useMemo(() => BadgeUtils.getUnhideableBadgeIds({ tenureBadgeHideable }), items11);
  const items12 = [memo];
  const memo1 = analyticsLocations.useMemo(() => BadgeUtils.groupCustomizableBadges(memo), items12);
  fixedBadges = memo1.fixedBadges;
  reorderableBadges = memo1.reorderableBadges;
  hiddenBadges = memo1.hiddenBadges;
  const items13 = [reorderableBadges];
  memo2 = analyticsLocations.useMemo(() => reorderableBadges.map((badge_id) => badge_id.badge_id), items13);
  const tmp5Result13 = tenureBadgeHideable(stateFromStores1[34]);
  sharedValue = tenureBadgeHideable(stateFromStores1[25]).useSharedValue(memo2);
  onCommitOrder = tmp2(tmp3[24])((arr) => {
    const result = tenureBadgeHideable(stateFromStores1[28]).setPendingBadgeDisplayOrder(arr);
  });
  const tmp5Result14 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue1 = tenureBadgeHideable(stateFromStores1[25]).useSharedValue(false);
  const items14 = [memo2, sharedValue1, sharedValue];
  const effect3 = analyticsLocations.useEffect(() => {
    if (!sharedValue1.get()) {
      const result = sharedValue.set(memo2);
    }
  }, items14);
  onPress = tmp2(tmp3[24])((badge_id) => {
    const mapped = hiddenBadges.map((badge_id) => badge_id.badge_id);
    if (mapped.includes(badge_id.badge_id)) {
      const obj = { badgeId: badge_id.badge_id, hidden: false, reorderableBadgeIds: memo2, hiddenBadgeIds: mapped, canReorder: stateFromStores1 };
      const result = PendingBadgeSettings.setPendingBadgeVisibility(obj);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl2 = util.intl;
      const obj3 = { badgeName: badge_id.name };
      AccessibilityAnnouncer.announce(intl2.formatToPlainString(util.t.mehuPg, obj3));
    } else if (set.has(badge_id.badge_id)) {
      const obj6 = { key: null, content: null };
      const _HermesInternal = HermesInternal;
      obj6.key = "BADGE_ALWAYS_VISIBLE-" + badge_id.badge_id;
      const intl = util.intl;
      const obj2 = ToastActionCreatorsDefault;
      obj6.content = intl.string(BadgeUtils.getAlwaysVisibleCopy(badge_id.badge_id));
      obj2.open(obj6);
    }
  });
  MS_PER_FRAME_60FPS = tmp2(tmp3[24])((badgeId) => {
    const obj = PendingBadgeSettings;
    const result = obj.setPendingBadgeVisibility({ badgeId: badgeId.badge_id, hidden: true, reorderableBadgeIds: memo2, hiddenBadgeIds: hiddenBadges.map((badge_id) => badge_id.badge_id), canReorder: stateFromStores1 });
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.q3t0Ht, { count: 1 }));
  });
  const tmp5Result15 = tenureBadgeHideable(stateFromStores1[25]);
  badgeTileSize = tenureBadgeHideable(stateFromStores1[13]).getBadgeTileSize(tmp2(tmp3[45])().width);
  const sum1 = fixedBadges.length + reorderableBadges.length + hiddenBadges.length;
  const rounded = Math.ceil(sum1 / tmp5(tmp3[13]).BADGE_GRID_COLUMNS);
  let num = 0;
  if (rounded > 0) {
    let result = rounded * badgeTileSize;
    const diff = rounded - 1;
    num = result + diff * tmp5(tmp3[13]).BADGE_GRID_GAP;
  }
  const tmp5Result16 = tenureBadgeHideable(stateFromStores1[13]);
  animatedRef = tenureBadgeHideable(stateFromStores1[25]).useAnimatedRef();
  const tmp5Result17 = tenureBadgeHideable(stateFromStores1[25]);
  scrollViewOffset = tenureBadgeHideable(stateFromStores1[25]).useScrollViewOffset(animatedRef);
  const tmp5Result18 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue2 = tenureBadgeHideable(stateFromStores1[25]).useSharedValue(0);
  const tmp5Result19 = tenureBadgeHideable(stateFromStores1[25]);
  sharedValue3 = tenureBadgeHideable(stateFromStores1[25]).useSharedValue(0);
  const tmp5Result20 = tenureBadgeHideable(stateFromStores1[25]);
  const fn = function q(timeSincePreviousFrame) {
    timeSincePreviousFrame = timeSincePreviousFrame.timeSincePreviousFrame;
    value = sharedValue2.get();
    if (0 !== value) {
      if (null != timeSincePreviousFrame) {
        if (timeSincePreviousFrame > 0) {
          const result = sharedValue3.set(sharedValue3.get() + timeSincePreviousFrame);
          value2 = sharedValue3.get();
          if (value2 >= c19) {
            const result1 = obj.set(0);
            const obj2 = ReanimatedRexport;
            const _Math = Math;
            obj2.scrollTo(animatedRef, 0, Math.max(roundToNearestPixelDefault(scrollViewOffset.get() + 700 * value * value2 / 1000), 0), false);
          }
          obj = sharedValue3;
        }
      }
    }
  };
  const tmp5Result21 = tenureBadgeHideable(stateFromStores1[25]);
  fn.__closure = { autoScrollSpeed: sharedValue2, autoScrollElapsed: sharedValue3, MS_PER_FRAME_60FPS, AUTO_SCROLL_PIXELS_PER_SECOND: 700, scrollTo: tenureBadgeHideable(stateFromStores1[25]).scrollTo, scrollRef: animatedRef, roundToNearestPixel: stateFromStores(stateFromStores1[46]), scrollOffset: scrollViewOffset };
  fn.__workletHash = 8686394877996;
  fn.__initData = __initData15;
  frameCallback = tmp5Result21.useFrameCallback(fn, false);
  const items15 = [frameCallback];
  callback1 = obj4.useCallback((arg0) => {
    frameCallback.setActive(arg0);
  }, items15);
  const obj5 = { autoScrollSpeed: sharedValue2, autoScrollElapsed: sharedValue3, MS_PER_FRAME_60FPS, AUTO_SCROLL_PIXELS_PER_SECOND: 700, scrollTo: tenureBadgeHideable(stateFromStores1[25]).scrollTo, scrollRef: animatedRef, roundToNearestPixel: stateFromStores(stateFromStores1[46]), scrollOffset: scrollViewOffset };
  const fn2 = function $() {
    return 0 !== sharedValue2.get();
  };
  fn2.__closure = { autoScrollSpeed: sharedValue2 };
  fn2.__workletHash = 9672319834497;
  fn2.__initData = __initData16;
  class K {
    constructor(arg0, arg1) {
      tmp = null != arg1 && analyticsLocations !== arg1;
      if (tmp) {
        tmp2 = closure_24;
        num = 0;
        result = closure_24.set(0);
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[25]);
        tmp6 = closure_26;
        tmp7 = obj.runOnJS(closure_26)(analyticsLocations);
      }
      return;
    }
  }
  const tmp5Result22 = tenureBadgeHideable(stateFromStores1[25]);
  K.__closure = { autoScrollElapsed: sharedValue3, runOnJS: tenureBadgeHideable(stateFromStores1[25]).runOnJS, setAutoScrollerActive: callback1 };
  K.__workletHash = 6850974884902;
  K.__initData = __initData17;
  const animatedReaction = tmp5Result22.useAnimatedReaction(fn2, K);
  if (hasCatalog) {
    const obj7 = { style: tmp.gridInset, children: null };
    let tmp40 = !stateFromStores1;
    if (!stateFromStores1) {
      const obj8 = { style: tmp.upsell, ctaText: null, cardStyle: null, contentStyle: null, ctaStyle: null, showLinearGradient: true, onPress: null, children: null };
      let intl2 = tmp5(tmp3[16]).intl;
      obj8.ctaText = intl2.string(tmp5(tmp3[16]).t.pj0XBN);
      ({ upsellCard: obj23.cardStyle, upsellContent: obj23.contentStyle, upsellCta: obj23.ctaStyle } = tmp);
      obj8.onPress = callback;
      const obj9 = { variant: "text-sm/normal", style: tmp.upsellText, children: null };
      const intl3 = tmp5(tmp3[16]).intl;
      obj9.children = intl3.string(tmp5(tmp3[16]).t.JrOki0);
      obj8.children = sharedValue(tmp5(tmp3[48]).Text, obj9);
      tmp40 = sharedValue(tmp2(tmp3[47]), obj8);
      const tmp2Result = tmp2(tmp3[47]);
    }
    const items16 = [tmp40, ];
    const obj10 = { accessibilityRole: "list", style: null, children: null };
    const items17 = [tmp.grid, ];
    const obj11 = { height: num };
    items17[1] = obj11;
    obj10.style = items17;
    const items18 = [
      fixedBadges.map((badge, index) => closure_2_15(closure_25, { badge, index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress }, badge.badge_id)),
      reorderableBadges.map((badge, index) => {
          if (stateFromStores1) {
            const obj2 = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, slotOffset: fixedBadges.length, isFirst: 0 === index, isLast: index === reorderableBadges.length - 1, alwaysVisible: set.has(badge.badge_id), orderShared: sharedValue, isDragActive: sharedValue1, scrollRef: animatedRef, scrollOffset: scrollViewOffset, autoScrollSpeed: sharedValue2, onCommitOrder, onHide, onPress };
            let tmpResult = tmp(closure_50, obj2, badge.badge_id);
          } else {
            const obj = { badge, index: fixedBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress, onHide };
            tmpResult = tmp(closure_25, obj, badge.badge_id);
          }
          return tmpResult;
        }),
      hiddenBadges.map((badge, index) => closure_2_15(closure_25, { badge, index: fixedBadges.length + reorderableBadges.length + index, tileSize: badgeTileSize, alwaysVisible: set.has(badge.badge_id), onPress }, badge.badge_id))
    ];
    obj10.children = items18;
    items16[1] = onCommitOrder(stateFromStoresArray, obj10);
    obj7.children = items16;
    let tmp35Result = tmp38(tmp39, obj7);
  } else {
    if (stateFromStoresObject.hasCatalogError) {
      const obj12 = { style: tmp.message, accessibilityRole: "alert", children: null };
      const obj13 = { variant: "text-md/normal", color: "text-muted", style: tmp.messageText, children: null };
      let intl = tmp5(tmp3[16]).intl;
      obj13.children = intl.string(tmp5(tmp3[16]).t["rTU7/z"]);
      obj12.children = tmp35(tmp5(tmp3[48]).Text, obj13);
      let obj14 = obj12;
    } else {
      obj14 = { style: tmp.message, children: tmp35(tmp5(tmp3[49]).ActivityIndicator, { animating: true, size: "large" }) };
    }
    tmp35Result = tmp35(stateFromStoresArray, obj14);
  }
  const obj15 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl4 = tmp5(tmp3[16]).intl;
  obj15.dismissAccessibilityLabel = intl4.string(tenureBadgeHideable(stateFromStores1[16]).t.x5SfWU);
  const obj16 = { title: null, subtitle: null };
  const intl5 = tmp5(tmp3[16]).intl;
  obj16.title = intl5.string(tenureBadgeHideable(stateFromStores1[16]).t.x5SfWU);
  const intl6 = tmp5(tmp3[16]).intl;
  const t = tmp5(tmp3[16]).t;
  obj16.subtitle = intl6.string(stateFromStores1 ? t["Vzc4+8"] : t.ZuXSRp);
  obj15.header = sharedValue(tenureBadgeHideable(stateFromStores1[51]).BottomSheetTitleHeader, obj16);
  obj15.children = sharedValue(tenureBadgeHideable(stateFromStores1[52]).BottomSheetScrollView, { ref: animatedRef, contentContainerStyle: { paddingBottom: sum }, children: tmp35Result });
  return sharedValue(tenureBadgeHideable(stateFromStores1[50]).BottomSheet, obj15);
};
