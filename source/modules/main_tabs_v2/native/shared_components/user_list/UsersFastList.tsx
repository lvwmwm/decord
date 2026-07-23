// Module ID: 8825
// Function ID: 69580
// Name: Placeholder
// Dependencies: [57, 31, 27, 8826, 33, 4130, 689, 8827, 5165, 1324, 8829, 3991, 4126, 1273, 4660, 4662, 1557, 8832, 8833, 8834, 9095, 9098, 9244, 2]

// Module 8825 (Placeholder)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import PX_24 from "PX_24";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function Placeholder(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  let obj = require(8827) /* styles */;
  const fastestListTableRowPlaceholderStyles = obj.useFastestListTableRowPlaceholderStyles();
  obj = { end, start };
  const items = [fastestListTableRowPlaceholderStyles.placeholderUsername, callback(importAllResult.useState(() => ({ width: `${10 + 80 * Math.random() | 0}%` })), 1)[0]];
  obj.label = callback2(View, { style: items });
  obj = { style: fastestListTableRowPlaceholderStyles.placeholderAvatar };
  obj.icon = callback2(View, obj);
  obj.height = "100%";
  return callback2(require(5165) /* TableRowInner */.TableRow, obj);
}
function PlaceholderSection() {
  return callback2(View, {});
}
const USERS_LIST_PADDING_BETWEEN_SECTIONS = PX_24.USERS_LIST_PADDING_BETWEEN_SECTIONS;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
obj = { sectionHeader: obj };
obj = { flex: 1, overflow: "hidden", top: -1 * PX_24.USERS_LIST_SECTION_BOTTOM_PADDING };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.stickyHeader = _createForOfIteratorHelperLoose;
let obj2 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj.list = obj2;
obj.emptySection = { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS };
let obj3 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS, textTransform: "none" };
obj.section = obj3;
obj.badgeWrapper = { height: "100%" };
let obj4 = { position: "absolute", left: require("_createForOfIteratorHelperLoose").space.PX_4 + require("_createForOfIteratorHelperLoose").space.PX_4 / 2, top: 5 };
obj.badge = obj4;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = { code: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}" };
let closure_12 = { code: "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}" };
let closure_13 = { code: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}" };
let closure_14 = importAllResult.memo(function UserSectionInner(stickyAt) {
  let action;
  let actionTitle;
  let badge;
  let colorOverride;
  let disableStickySections;
  let disableThemedGradient;
  let scrollPosValue;
  let title;
  ({ title, colorOverride } = stickyAt);
  ({ actionTitle, badge, scrollPosValue } = stickyAt);
  stickyAt = stickyAt.stickyAt;
  ({ action, disableStickySections, disableThemedGradient } = stickyAt);
  let tmp = callback3();
  let _slicedToArray = tmp;
  const tmp2 = scrollPosValue(stickyAt[9])("UserSectionInner");
  let items = [colorOverride];
  const memo = clientThemesOverride.useMemo(() => {
    let tmp = null != colorOverride;
    if (tmp) {
      const obj = { color: colorOverride };
      tmp = obj;
    }
    return tmp;
  }, items);
  let obj = colorOverride(stickyAt[10]);
  clientThemesOverride = obj.useClientThemesOverride();
  const items1 = [tmp.section, clientThemesOverride];
  const memo1 = clientThemesOverride.useMemo(() => {
    const items = [tmp.section, clientThemesOverride];
    return items;
  }, items1);
  let obj1 = colorOverride(stickyAt[11]);
  class P {
    constructor() {
      value = undefined;
      if (null != scrollPosValue) {
        tmp2 = scrollPosValue;
        value = scrollPosValue.get();
      }
      tmp3 = null != value;
      if (tmp3) {
        tmp4 = stickyAt;
        tmp3 = null != stickyAt;
      }
      if (tmp3) {
        tmp5 = stickyAt;
        tmp3 = value >= stickyAt;
      }
      return tmp3;
    }
  }
  P.__closure = { scrollPosValue, stickyAt };
  P.__workletHash = 15448160320615;
  P.__initData = closure_11;
  const derivedValue = obj1.useDerivedValue(P);
  let obj2 = colorOverride(stickyAt[11]);
  const fn = function x() {
    const obj = {};
    let str = "transparent";
    if (derivedValue.get()) {
      str = tmp.stickyHeader.backgroundColor;
    }
    obj.backgroundColor = str;
    return obj;
  };
  fn.__closure = { isSticky: derivedValue, styles: tmp };
  fn.__workletHash = 6340072007400;
  fn.__initData = closure_12;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items2 = [tmp.sectionHeader, animatedStyle];
  const memo2 = clientThemesOverride.useMemo(() => {
    const items = [tmp.sectionHeader, animatedStyle];
    return items;
  }, items2);
  let obj3 = colorOverride(stickyAt[11]);
  const fn2 = function w() {
    const obj = {};
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    obj.opacity = num;
    return obj;
  };
  fn2.__closure = { isSticky: derivedValue };
  fn2.__workletHash = 13270974904859;
  fn2.__initData = closure_13;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  if (null == title) {
    if (null == actionTitle) {
      obj = { style: tmp.emptySection };
      return callback2(derivedValue, obj);
    }
  }
  obj = { style: memo1 };
  obj1 = { maxFontSizeMultiplier: 2, accessibilityRole: "header" };
  let str = "text-sm/semibold";
  if (tmp2) {
    str = "text-md/medium";
  }
  obj1.variant = str;
  let str2 = "interactive-text-default";
  if (tmp2) {
    str2 = "text-subtle";
  }
  obj1.color = str2;
  obj1.style = memo;
  const items3 = [title, ];
  let tmp12 = null;
  if (null != badge) {
    obj2 = { style: tmp.badgeWrapper };
    obj3 = { style: tmp.badge, value: badge };
    obj2.children = callback2(colorOverride(stickyAt[13]).Badge, obj3);
    tmp12 = callback2(derivedValue, obj2);
  }
  items3[1] = tmp12;
  obj1.children = items3;
  const items4 = [closure_8(colorOverride(stickyAt[12]).Text, obj1), ];
  let tmp18 = null;
  if (null != actionTitle) {
    const obj4 = { onPress: action };
    const obj5 = { variant: "text-sm/semibold", color: "text-brand", children: actionTitle };
    obj4.children = callback2(colorOverride(stickyAt[12]).Text, obj5);
    tmp18 = callback2(colorOverride(stickyAt[14]).PressableOpacity, obj4);
  }
  items4[1] = tmp18;
  obj.children = items4;
  const tmp10Result = closure_8(derivedValue, obj);
  let tmp25Result = tmp10Result;
  if (!disableStickySections) {
    const obj6 = { style: memo2 };
    let tmp28 = !disableThemedGradient;
    if (tmp28) {
      const obj7 = { style: animatedStyle1, children: callback2(scrollPosValue(stickyAt[15]), { absolute: true, tall: true, wide: true, mix: true }) };
      tmp28 = callback2(scrollPosValue(stickyAt[11]).View, obj7);
    }
    const items5 = [tmp28, tmp10Result];
    obj6.children = items5;
    tmp25Result = closure_8(scrollPosValue(stickyAt[11]).View, obj6);
    const tmp25 = closure_8;
  }
  return tmp25Result;
});
const forwardRefResult = importAllResult.forwardRef(function UsersFastListInner(getItemProps, ref) {
  let getItemSize;
  let inActionSheet;
  let insetEnd;
  let insetStart;
  let listHeaderSize;
  let onLayout;
  let onScroll;
  let renderListHeader;
  let sections;
  getItemProps = getItemProps.getItemProps;
  const getSectionProps = getItemProps.getSectionProps;
  ({ getItemSize, insetEnd } = getItemProps);
  ({ sections, insetStart } = getItemProps);
  if (insetEnd === undefined) {
    insetEnd = 0;
  }
  let flag = getItemProps.disableBottomSafeZone;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = getItemProps.disableStickySections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const disableThemedGradient = getItemProps.disableThemedGradient;
  const disableBackgroundOverlay = getItemProps.disableBackgroundOverlay;
  const listStyleOverride = getItemProps.listStyleOverride;
  let c6;
  let c7;
  let clientThemesOverride;
  ({ inActionSheet, listHeaderSize, onScroll, onLayout, renderListHeader } = getItemProps);
  let tmp = callback3();
  c6 = tmp;
  let num = 0;
  if (!flag) {
    num = getSectionProps(flag2[16])().bottom;
  }
  const sum = insetEnd + num;
  let tmp3 = getSectionProps(flag2[17])();
  const tmp4 = getSectionProps(flag2[18])();
  c7 = tmp4;
  let obj = getItemProps(flag2[10]);
  clientThemesOverride = obj.useClientThemesOverride();
  let items = [getSectionProps, flag2, disableThemedGradient];
  const items1 = [getItemProps];
  const callback = disableBackgroundOverlay.useCallback((arg0, arg1, arg2, arg3) => {
    const element = getSectionProps(arg0);
    let type;
    if (null != element) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return _undefined2(outer1_16, {});
    } else if ("section" === type) {
      const obj = {};
      const merged = Object.assign(element.props);
      obj["disableStickySections"] = flag2;
      obj["disableThemedGradient"] = disableThemedGradient;
      obj["scrollPosValue"] = arg2;
      obj["stickyAt"] = arg3;
      return _undefined2(outer1_14, obj);
    } else {
      return null;
    }
  }, items);
  const items2 = [getSectionProps, tmp4];
  const callback1 = disableBackgroundOverlay.useCallback((arg0, arg1) => {
    const element = getItemProps(arg0, arg1);
    let type;
    if (null != element) {
      type = element.type;
    }
    if ("user" === type) {
      let obj = {};
      const merged = Object.assign(element.props);
      return _undefined2(getSectionProps(flag2[19]), obj);
    } else if ("placeholder" === type) {
      obj = {};
      const merged1 = Object.assign(element.props);
      return _undefined2(outer1_15, obj);
    } else if ("gdm" === type) {
      const obj1 = {};
      const merged2 = Object.assign(element.props);
      return _undefined2(getSectionProps(flag2[20]), obj1);
    } else if ("channel" === type) {
      const obj2 = {};
      const merged3 = Object.assign(element.props);
      return _undefined2(getSectionProps(flag2[21]), obj2);
    } else if ("custom" === type) {
      obj = { children: element.component() };
      return _undefined2(outer1_9, obj);
    } else {
      return null;
    }
  }, items1);
  const items3 = [tmp.list, disableBackgroundOverlay, clientThemesOverride, listStyleOverride];
  const callback2 = disableBackgroundOverlay.useCallback((arg0) => {
    let type;
    const element = getSectionProps(arg0);
    if (null != element) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return c7;
    } else if ("section" === type) {
      if (element.props.hideTitle) {
        return 0;
      }
    } else {
      return 0;
    }
  }, items2);
  const memo = disableBackgroundOverlay.useMemo(() => {
    const items = [_undefined.list, , ];
    let tmp = disableBackgroundOverlay;
    if (disableBackgroundOverlay) {
      tmp = clientThemesOverride;
    }
    items[1] = tmp;
    items[2] = listStyleOverride;
    return items;
  }, items3);
  obj = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, estimatedListSize: "windowSize", ref, style: memo };
  const tmp10 = getSectionProps(flag2[7])();
  const tmp11 = c7;
  if (null != getItemSize) {
    tmp3 = getItemSize;
  }
  obj.itemSize = tmp3;
  obj.renderItem = callback1;
  obj.renderListHeader = renderListHeader;
  obj.renderSectionHeader = callback;
  obj.insetStart = insetStart;
  obj.insetEnd = sum;
  obj.keyboardDismissMode = "on-drag";
  obj.keyboardShouldPersistTaps = "always";
  obj.inActionSheet = inActionSheet;
  obj.onScroll = onScroll;
  obj.onLayout = onLayout;
  obj.placeholderConfig = tmp10;
  obj.listId = "users-fast-list";
  obj.listHeaderSize = listHeaderSize;
  obj.listHeaderAlwaysMounted = true;
  obj.scrollReporting = "callbacks";
  obj.wrapChildren = true;
  return tmp11(getSectionProps(flag2[22]), obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = forwardRefResult;
