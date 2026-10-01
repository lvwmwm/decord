// Module ID: 10326
// Function ID: 10327
// Name: UsersFastList
// Dependencies: [32, 19, 17, 9674, 21, 4836, 576, 10327, 5917, 7297, 4566, 4832, 1177, 5435, 5437, 1613, 6470, 9673, 10328, 10370, 10373, 6476, 2]

// Module 10326 (UsersFastList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import TableRow2 from "TableRow" /* 5917 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7297 */;
import useFastestListTableRowPlaceholderConfig from "useFastestListTableRowPlaceholderConfig" /* 10327 */;
import UserRowDefault from "UserRow" /* 10328 */;
import GroupDMRowDefault from "GroupDMRow" /* 10370 */;
import ChannelRowDefault from "ChannelRow" /* 10373 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UsersFastListConstants from "UsersFastListConstants" /* 9674 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
function Placeholder(arg0) {
  let end;
  let items;
  let obj3;
  let obj4;
  let start;
  ({ start, end } = arg0);
  let obj = useFastestListTableRowPlaceholderConfig;
  const fastestListTableRowPlaceholderStyles = obj.useFastestListTableRowPlaceholderStyles();
  const obj2 = { end, start, label: metroImportDefault(View, obj3), icon: metroImportDefault(View, obj4), height: "100%" };
  obj3 = { style: items };
  items = [
    fastestListTableRowPlaceholderStyles.placeholderUsername,
    _slicedToArray(react.useState(() => {
      const obj = { width: `${10 + 80 * Math.random() | 0}%` };
      return obj;
    }), 1)[0]
  ];
  const TableRow = TableRow2.TableRow;
  obj4 = { style: fastestListTableRowPlaceholderStyles.placeholderAvatar };
  return metroImportDefault(TableRow, obj2);
}
function PlaceholderSection() {
  return metroImportDefault(View, {});
}
let react = react_mod;
let View = react_native.View;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
const USERS_LIST_SECTION_BOTTOM_PADDING = UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionHeader: obj2, stickyHeader: obj3, list: obj4, emptySection: { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS }, section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS, textTransform: "none" }, interactiveSection: obj5, titlePressable: obj6, titleRow: obj7, badgeWrapper: { height: "100%" }, badge: rect };
obj2 = { flex: 1, overflow: "hidden", top: -1 * USERS_LIST_SECTION_BOTTOM_PADDING };
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj5 = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - nativeDefault.space.PX_8 };
obj6 = { paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
rect = { position: "absolute", left: nativeDefault.space.PX_4 + nativeDefault.space.PX_4 / 2, top: 5 };
let closure_10 = createStyles(obj);
const __initData = { code: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}" };
const __initData2 = { code: "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}" };
const __initData3 = { code: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}" };
let closure_16 = react.memo(function UserSectionInner(stickyAt) {
  let action;
  let actionTitle;
  let badge;
  let colorOverride;
  let disableStickySections;
  let disableThemedGradient;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj13;
  let obj8;
  let onTitlePress;
  let scrollPosValue;
  let title;
  let titleLeading;
  ({ title, colorOverride } = stickyAt);
  ({ actionTitle, badge, scrollPosValue } = stickyAt);
  stickyAt = stickyAt.stickyAt;
  ({ disableThemedGradient, titleLeading, onTitlePress } = stickyAt);
  let animatedStyle;
  ({ action, disableStickySections } = stickyAt);
  const tmp = closure_10();
  react = tmp;
  let items = [colorOverride];
  const memo = react.useMemo(() => {
    let tmp2 = null != colorOverride;
    if (tmp2) {
      tmp2 = { color: tmp };
      const obj = { color: tmp };
    }
    return tmp2;
  }, items);
  let obj = ClientThemesOverrides;
  const clientThemesOverride = obj.useClientThemesOverride();
  const items1 = [, , , ];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = react.useMemo(() => {
    const items = [closure_4.section, null != onTitlePress && closure_4.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  const fn = function w() {
    let value;
    const obj = scrollPosValue;
    if (scrollPosValue != null) {
      value = obj.get();
    }
    return null != value && null != stickyAt && value >= stickyAt;
  };
  fn.__closure = { scrollPosValue, stickyAt };
  fn.__workletHash = 15448160320615;
  fn.__initData = __initData;
  const obj2 = ReanimatedRexport;
  const derivedValue = obj2.useDerivedValue(fn);
  const obj3 = ReanimatedRexport;
  class C {
    constructor() {
      let backgroundColor = "transparent";
      if (derivedValue.get()) {
        backgroundColor = closure_4.stickyHeader.backgroundColor;
      }
      return { backgroundColor };
    }
  }
  C.__closure = { isSticky: derivedValue, styles: tmp };
  C.__workletHash = 6340072007400;
  C.__initData = __initData2;
  animatedStyle = obj3.useAnimatedStyle(C);
  const items2 = [tmp.sectionHeader, animatedStyle];
  const memo2 = react.useMemo(() => {
    const items = [closure_4.sectionHeader, animatedStyle];
    return items;
  }, items2);
  const obj4 = ReanimatedRexport;
  class H {
    constructor() {
      let opacity = 0;
      if (derivedValue.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  H.__closure = { isSticky: derivedValue };
  H.__workletHash = 13270974904859;
  H.__initData = __initData3;
  const animatedStyle1 = obj4.useAnimatedStyle(H);
  if (null == title) {
    if (null == actionTitle) {
      const obj5 = { style: tmp.emptySection };
      return metroImportDefault(View, obj5);
    }
  }
  const obj6 = { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: memo, children: items3 };
  items3 = [title, ];
  let tmp12 = null;
  const Text = tmp3(4832).Text;
  if (null != badge) {
    const obj7 = { style: tmp.badgeWrapper, children: metroImportDefault(native.Badge, obj8) };
    obj8 = { style: tmp.badge, value: badge };
    tmp12 = metroImportDefault(View, obj7);
  }
  items3[1] = tmp12;
  const tmp11Result = metroImportAll(Text, obj6);
  let tmp11Result4 = tmp11Result;
  if (null != titleLeading) {
    const obj9 = { style: tmp.titleRow, children: items4 };
    items4 = [titleLeading, tmp11Result];
    tmp11Result4 = tmp11(View, obj9);
  }
  let tmp18 = tmp11Result4;
  if (null != onTitlePress) {
    const obj10 = { accessibilityRole: "button", style: tmp.titlePressable, onPress: onTitlePress, children: tmp11Result4 };
    tmp18 = metroImportDefault(tmp3(5435).PressableOpacity, obj10);
  }
  const obj11 = { style: memo1, children: items5 };
  items5 = [tmp18, ];
  let tmp21 = null;
  const tmp20 = View;
  if (null != actionTitle) {
    const obj12 = { onPress: action, children: metroImportDefault(Text_Text.Text, obj13) };
    const PressableOpacity = tmp3(5435).PressableOpacity;
    obj13 = { variant: "text-sm/semibold", color: "text-brand", children: actionTitle };
    tmp21 = metroImportDefault(PressableOpacity, obj12);
  }
  items5[1] = tmp21;
  const tmp11Result5 = metroImportAll(tmp20, obj11);
  let tmp11Result6 = tmp11Result5;
  if (!disableStickySections) {
    let tmp26 = !disableThemedGradient;
    const obj14 = { style: memo2, children: items6 };
    View = ReanimatedRexportDefault.View;
    if (!disableThemedGradient) {
      const obj15 = { style: animatedStyle1, children: metroImportDefault(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }) };
      const View2 = tmp25(4566).View;
      tmp26 = metroImportDefault(View2, obj15);
    }
    items6 = [tmp26, tmp11Result5];
    tmp11Result6 = tmp11(View, obj14);
  }
  return tmp11Result6;
});
const forwardRefResult = react.forwardRef(function UsersFastListInner(getItemProps, ref) {
  let getItemSize;
  let inActionSheet;
  let insetEnd;
  let insetStart;
  let keyExtractor;
  let listHeaderSize;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let renderListHeader;
  let sections;
  getItemProps = getItemProps.getItemProps;
  const getSectionProps = getItemProps.getSectionProps;
  ({ getItemSize, insetEnd } = getItemProps);
  ({ sections, keyExtractor, insetStart } = getItemProps);
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
  let closure_7;
  let clientThemesOverride;
  ({ inActionSheet, listHeaderSize, onContentLengthChange, onScroll, onLayout, renderListHeader } = getItemProps);
  const tmp = closure_10();
  const list = tmp;
  let num = 0;
  if (!flag) {
    num = getSectionProps(flag2[15])().bottom;
  }
  const sum = insetEnd + num;
  const tmp5 = getSectionProps(flag2[16])();
  const tmp6 = getSectionProps(flag2[17])();
  closure_7 = tmp6;
  let obj = getItemProps(tmp3[9]);
  clientThemesOverride = obj.useClientThemesOverride();
  let items = [getSectionProps, flag2, disableThemedGradient];
  const items1 = [getItemProps];
  const callback = disableBackgroundOverlay.useCallback((arg0, arg1, scrollPosValue, stickyAt) => {
    const element = getSectionProps(arg0);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return metroImportDefault(PlaceholderSection, {});
    } else if ("section" === type) {
      const obj = { disableStickySections: flag2, disableThemedGradient, scrollPosValue, stickyAt };
      const merged = Object.assign(element.props);
      return metroImportDefault(closure_16, obj);
    } else {
      return null;
    }
  }, items);
  const items2 = [getSectionProps, tmp6];
  const callback1 = disableBackgroundOverlay.useCallback((flag2, arg1) => {
    const element = getItemProps(flag2, arg1);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("user" === type) {
      const obj2 = {};
      const tmp23 = UserRowDefault;
      const merged = Object.assign(element.props);
      return metroImportDefault(tmp23, obj2);
    } else if ("placeholder" === type) {
      const obj3 = {};
      const merged1 = Object.assign(element.props);
      return metroImportDefault(Placeholder, obj3);
    } else if ("gdm" === type) {
      const obj4 = {};
      const tmp13 = GroupDMRowDefault;
      const merged2 = Object.assign(element.props);
      return metroImportDefault(tmp13, obj4);
    } else if ("channel" === type) {
      const obj5 = {};
      const tmp7 = ChannelRowDefault;
      const merged3 = Object.assign(element.props);
      return metroImportDefault(tmp7, obj5);
    } else if ("custom" === type) {
      const obj = { children: element.component() };
      return metroImportDefault(React4, obj);
    } else {
      return null;
    }
  }, items1);
  const items3 = [tmp.list, disableBackgroundOverlay, clientThemesOverride, listStyleOverride];
  const callback2 = disableBackgroundOverlay.useCallback((arg0) => {
    const element = getSectionProps(arg0);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return closure_7;
    } else if ("section" === type) {
      let num2 = 0;
      if (!element.props.hideTitle) {
        num2 = null == element.props.title ? USERS_LIST_PADDING_BETWEEN_SECTIONS : closure_7;
      }
      return num2;
    } else {
      return 0;
    }
  }, items2);
  const memo = disableBackgroundOverlay.useMemo(() => {
    const items = [list.list, disableBackgroundOverlay && clientThemesOverride, listStyleOverride];
    return items;
  }, items3);
  let tmp13 = closure_7;
  let obj2 = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, estimatedListSize: "windowSize", keyExtractor, ref, style: memo, itemSize: getItemSize, renderItem: callback1, renderListHeader, renderSectionHeader: callback, insetStart, insetEnd: sum, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", inActionSheet, onContentLengthChange, onScroll, onLayout, placeholderConfig: getSectionProps(flag2[7])(), listId: "users-fast-list", listHeaderSize, listHeaderAlwaysMounted: true, scrollReporting: "callbacks", wrapChildren: true };
  const tmp12 = getSectionProps(flag2[7])();
  const tmp2Result = getSectionProps(flag2[21]);
  if (getItemSize == null) {
    getItemSize = tmp5;
  }
  return tmp13(tmp2Result, obj2);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = forwardRefResult;
