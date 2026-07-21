// Module ID: 8817
// Function ID: 69516
// Name: Placeholder
// Dependencies: []

// Module 8817 (Placeholder)
function Placeholder(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  let obj = arg1(dependencyMap[7]);
  const fastestListTableRowPlaceholderStyles = obj.useFastestListTableRowPlaceholderStyles();
  obj = { end, start };
  const items = [fastestListTableRowPlaceholderStyles.placeholderUsername, callback(importAllResult.useState(() => ({ width: `${10 + 80 * Math.random() | 0}%` })), 1)[0]];
  obj.label = callback2(View, { style: items });
  obj = { style: fastestListTableRowPlaceholderStyles.placeholderAvatar };
  obj.icon = callback2(View, obj);
  obj.height = "100%";
  return callback2(arg1(dependencyMap[8]).TableRow, obj);
}
function PlaceholderSection() {
  return callback2(View, {});
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const tmp2 = arg1(dependencyMap[3]);
const USERS_LIST_PADDING_BETWEEN_SECTIONS = tmp2.USERS_LIST_PADDING_BETWEEN_SECTIONS;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = { sectionHeader: obj };
obj = { 9223372036854775807: 10, 9223372036854775807: 10, top: -1 * tmp2.USERS_LIST_SECTION_BOTTOM_PADDING };
obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.stickyHeader = obj1;
const obj2 = { "Null": "\u{1F469}\u{1F3FD}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", "Null": true, "Null": null, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.list = obj2;
obj.emptySection = { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS };
const obj3 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS };
obj.section = obj3;
obj.badgeWrapper = { height: "100%" };
const obj4 = { left: importDefault(dependencyMap[6]).space.PX_4 + importDefault(dependencyMap[6]).space.PX_4 / 2 };
obj.badge = obj4;
let closure_10 = obj1.createStyles(obj);
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
  const arg1 = colorOverride;
  ({ actionTitle, badge, scrollPosValue } = stickyAt);
  const importDefault = scrollPosValue;
  stickyAt = stickyAt.stickyAt;
  const dependencyMap = stickyAt;
  ({ action, disableStickySections, disableThemedGradient } = stickyAt);
  const tmp = callback3();
  let closure_3 = tmp;
  const tmp2 = importDefault(dependencyMap[9])("UserSectionInner");
  const items = [colorOverride];
  const memo = importAllResult.useMemo(() => {
    let tmp = null != colorOverride;
    if (tmp) {
      const obj = { color: colorOverride };
      tmp = obj;
    }
    return tmp;
  }, items);
  let obj = arg1(dependencyMap[10]);
  const clientThemesOverride = obj.useClientThemesOverride();
  const items1 = [tmp.section, clientThemesOverride];
  const memo1 = importAllResult.useMemo(() => {
    const items = [tmp.section, clientThemesOverride];
    return items;
  }, items1);
  let obj1 = arg1(dependencyMap[11]);
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
  const View = derivedValue;
  let obj2 = arg1(dependencyMap[11]);
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
  const USERS_LIST_PADDING_BETWEEN_SECTIONS = animatedStyle;
  const items2 = [tmp.sectionHeader, animatedStyle];
  const memo2 = importAllResult.useMemo(() => {
    const items = [tmp.sectionHeader, animatedStyle];
    return items;
  }, items2);
  let obj3 = arg1(dependencyMap[11]);
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
      return callback2(View, obj);
    }
  }
  obj = { style: memo1 };
  obj1 = { "Null": 2417, "Null": 487680 };
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
    obj2.children = callback2(arg1(dependencyMap[13]).Badge, obj3);
    tmp12 = callback2(View, obj2);
  }
  items3[1] = tmp12;
  obj1.children = items3;
  const items4 = [closure_8(arg1(dependencyMap[12]).Text, obj1), ];
  let tmp18 = null;
  if (null != actionTitle) {
    const obj4 = { onPress: action };
    const obj5 = { children: actionTitle };
    obj4.children = callback2(arg1(dependencyMap[12]).Text, obj5);
    tmp18 = callback2(arg1(dependencyMap[14]).PressableOpacity, obj4);
  }
  items4[1] = tmp18;
  obj.children = items4;
  const tmp10Result = closure_8(View, obj);
  let tmp25Result = tmp10Result;
  if (!disableStickySections) {
    const obj6 = { style: memo2 };
    let tmp28 = !disableThemedGradient;
    if (tmp28) {
      const obj7 = { style: animatedStyle1, children: callback2(importDefault(dependencyMap[15]), {}) };
      tmp28 = callback2(importDefault(dependencyMap[11]).View, obj7);
    }
    const items5 = [tmp28, tmp10Result];
    obj6.children = items5;
    tmp25Result = closure_8(importDefault(dependencyMap[11]).View, obj6);
    const tmp25 = closure_8;
  }
  return tmp25Result;
});
const tmp3 = arg1(dependencyMap[4]);
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
  ref = getItemProps;
  const getSectionProps = getItemProps.getSectionProps;
  const importDefault = getSectionProps;
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
  const dependencyMap = flag2;
  const disableThemedGradient = getItemProps.disableThemedGradient;
  let closure_3 = disableThemedGradient;
  const disableBackgroundOverlay = getItemProps.disableBackgroundOverlay;
  const listStyleOverride = getItemProps.listStyleOverride;
  const View = listStyleOverride;
  let USERS_LIST_PADDING_BETWEEN_SECTIONS;
  let tmp4;
  let clientThemesOverride;
  ({ inActionSheet, listHeaderSize, onScroll, onLayout, renderListHeader } = getItemProps);
  const tmp = callback3();
  USERS_LIST_PADDING_BETWEEN_SECTIONS = tmp;
  let num = 0;
  if (!flag) {
    num = importDefault(dependencyMap[16])().bottom;
  }
  const sum = insetEnd + num;
  let tmp3 = importDefault(dependencyMap[17])();
  tmp4 = importDefault(dependencyMap[18])();
  let obj = ref(dependencyMap[10]);
  clientThemesOverride = obj.useClientThemesOverride();
  const items = [getSectionProps, flag2, disableThemedGradient];
  const items1 = [getItemProps];
  const callback = importAllResult.useCallback((arg0, arg1, arg2, arg3) => {
    const element = getSectionProps(arg0);
    let type;
    if (null != element) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return tmp4(closure_16, {});
    } else if ("section" === type) {
      const obj = {};
      const merged = Object.assign(element.props);
      obj["disableStickySections"] = flag2;
      obj["disableThemedGradient"] = disableThemedGradient;
      obj["scrollPosValue"] = arg2;
      obj["stickyAt"] = arg3;
      return obj(closure_14, obj);
    } else {
      return null;
    }
  }, items);
  const items2 = [getSectionProps, tmp4];
  const callback1 = importAllResult.useCallback((arg0, arg1) => {
    const element = getItemProps(arg0, arg1);
    let type;
    if (null != element) {
      type = element.type;
    }
    if ("user" === type) {
      let obj = {};
      const merged = Object.assign(element.props);
      return tmp4(getSectionProps(flag2[19]), obj);
    } else if ("placeholder" === type) {
      obj = {};
      const merged1 = Object.assign(element.props);
      return tmp4(closure_15, obj);
    } else if ("gdm" === type) {
      const obj1 = {};
      const merged2 = Object.assign(element.props);
      return tmp4(getSectionProps(flag2[20]), obj1);
    } else if ("channel" === type) {
      const obj2 = {};
      const merged3 = Object.assign(element.props);
      return tmp4(getSectionProps(flag2[21]), obj2);
    } else if ("custom" === type) {
      obj = { children: element.component() };
      return tmp4(closure_9, obj);
    } else {
      return null;
    }
  }, items1);
  const items3 = [tmp.list, disableBackgroundOverlay, clientThemesOverride, listStyleOverride];
  const callback2 = importAllResult.useCallback((arg0) => {
    let type;
    const element = getSectionProps(arg0);
    if (null != element) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return tmp4;
    } else if ("section" === type) {
      if (element.props.hideTitle) {
        return 0;
      }
    } else {
      return 0;
    }
  }, items2);
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.list, , ];
    let tmp = disableBackgroundOverlay;
    if (disableBackgroundOverlay) {
      tmp = clientThemesOverride;
    }
    items[1] = tmp;
    items[2] = listStyleOverride;
    return items;
  }, items3);
  obj = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, estimatedListSize: "windowSize", ref, style: memo };
  const tmp10 = importDefault(dependencyMap[7])();
  const tmp11 = tmp4;
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
  return tmp11(importDefault(dependencyMap[22]), obj);
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = forwardRefResult;
