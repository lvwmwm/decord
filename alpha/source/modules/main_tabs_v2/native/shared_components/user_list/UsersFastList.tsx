// Module ID: 10863
// Function ID: 10864
// Name: UsersFastList
// Dependencies: [32, 19, 17, 10864, 21, 5141, 575, 10865, 7101, 9952, 1652, 5747, 1187, 7106, 10866, 1627, 7338, 10867, 10868, 10928, 10931, 14550, 14551, 7344, 2]
// Exports: UsersFastList

// Module 10863 (UsersFastList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5747 */;
import TableRow2 from "TableRow" /* 7101 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9952 */;
import useFastestListTableRowPlaceholderConfig from "useFastestListTableRowPlaceholderConfig" /* 10865 */;
import ThemedGradientDefault from "ThemedGradient" /* 10866 */;
import UserRowDefault from "UserRow" /* 10868 */;
import GroupDMRowDefault from "GroupDMRow" /* 10928 */;
import ChannelRowDefault from "ChannelRow" /* 10931 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10864 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

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
let closure_13 = { code: "(function UsersFastListTsx1(){let[scrollPosValue,stickyAt]=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;})" };
let closure_14 = { code: "(function UsersFastListTsx2(){let[isSticky,styles]=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};})" };
let closure_15 = { code: "(function UsersFastListTsx3(){let[isSticky]=this.__closure;return{opacity:isSticky.get()?1:0};})" };
let closure_16 = react.memo(function UserSectionInner(arg0) {
  let action;
  let actionTitle;
  let badge;
  let colorOverride;
  let disableStickySections;
  let disableThemedGradient;
  let items10;
  let items11;
  let items12;
  let items9;
  let obj12;
  let obj7;
  let onTitlePress;
  let scrollPosValue;
  let stickyAt;
  let title;
  let titleLeading;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ title, colorOverride } = arg0);
  ({ actionTitle, badge, disableThemedGradient, titleLeading, onTitlePress } = arg0);
  let animatedStyle;
  ({ action, scrollPosValue, stickyAt, disableStickySections } = arg0);
  const tmp = closure_10();
  let closure_2 = tmp;
  let obj = react;
  let items = [colorOverride];
  const memo = react.useMemo(() => {
    let tmp2 = null != colorOverride;
    if (tmp2) {
      tmp2 = { color: tmp };
      const obj = { color: tmp };
    }
    return tmp2;
  }, items);
  const obj2 = ClientThemesOverrides;
  const clientThemesOverride = obj2.useClientThemesOverride();
  const items1 = [, , , ];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = react.useMemo(() => {
    const items = [closure_2.section, null != onTitlePress && closure_2.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  const items2 = [closure_13, scrollPosValue, stickyAt];
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items2;
  const obj3 = _mod1652;
  class UsersFastListTsx1 {
    constructor() {
      let value;
      const obj = c0;
      if (c0 != null) {
        value = obj.get();
      }
      return null != value && null != c1 && value >= c1;
    }
  }
  const items3 = [tmp8, tmp9];
  UsersFastListTsx1.__closure = items3;
  UsersFastListTsx1.__workletHash = 5651317094590;
  UsersFastListTsx1.__initData = tmp7;
  const derivedValue = obj3.useDerivedValue(UsersFastListTsx1);
  const items4 = [closure_14, derivedValue, tmp];
  c0 = undefined;
  c1 = undefined;
  [tmp11, tmp12, tmp13] = items4;
  const tmp3Result = _mod1652;
  class UsersFastListTsx2 {
    constructor() {
      let backgroundColor = "transparent";
      if (_undefined.get()) {
        backgroundColor = _undefined2.stickyHeader.backgroundColor;
      }
      return { backgroundColor };
    }
  }
  const items5 = [tmp12, tmp13];
  UsersFastListTsx2.__closure = items5;
  UsersFastListTsx2.__workletHash = 3082250653169;
  UsersFastListTsx2.__initData = tmp11;
  animatedStyle = tmp3Result.useAnimatedStyle(UsersFastListTsx2);
  const items6 = [tmp.sectionHeader, animatedStyle];
  const memo2 = obj.useMemo(() => {
    const items = [closure_2.sectionHeader, animatedStyle];
    return items;
  }, items6);
  const items7 = [closure_15, derivedValue];
  c0 = undefined;
  [tmp16, tmp17] = items7;
  const tmp3Result2 = _mod1652;
  class UsersFastListTsx3 {
    constructor() {
      let opacity = 0;
      if (_undefined.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  const items8 = [tmp17];
  UsersFastListTsx3.__closure = items8;
  UsersFastListTsx3.__workletHash = 4870088856322;
  UsersFastListTsx3.__initData = tmp16;
  const animatedStyle1 = tmp3Result2.useAnimatedStyle(UsersFastListTsx3);
  if (null == title) {
    if (null == actionTitle) {
      const obj4 = { style: tmp.emptySection };
      return metroImportDefault(View, obj4);
    }
  }
  const obj5 = { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: memo, children: items9 };
  items9 = [title, ];
  let tmp20 = null;
  const Text = tmp3(5747).Text;
  if (null != badge) {
    const obj6 = { style: tmp.badgeWrapper, children: metroImportDefault(native.Badge, obj7) };
    obj7 = { style: tmp.badge, value: badge };
    tmp20 = metroImportDefault(View, obj6);
  }
  items9[1] = tmp20;
  const tmp19Result = metroImportAll(Text, obj5);
  let tmp19Result4 = tmp19Result;
  if (null != titleLeading) {
    const obj8 = { style: tmp.titleRow, children: items10 };
    items10 = [titleLeading, tmp19Result];
    tmp19Result4 = tmp19(View, obj8);
  }
  let tmp26 = tmp19Result4;
  if (null != onTitlePress) {
    const obj9 = { accessibilityRole: "button", style: tmp.titlePressable, onPress: onTitlePress, children: tmp19Result4 };
    tmp26 = metroImportDefault(tmp3(7106).PressableOpacity, obj9);
  }
  const obj10 = { style: memo1, children: items11 };
  items11 = [tmp26, ];
  let tmp29 = null;
  const tmp28 = View;
  if (null != actionTitle) {
    const obj11 = { onPress: action, children: metroImportDefault(Text_Text.Text, obj12) };
    const PressableOpacity = tmp3(7106).PressableOpacity;
    obj12 = { variant: "text-sm/semibold", color: "text-brand", children: actionTitle };
    tmp29 = metroImportDefault(PressableOpacity, obj11);
  }
  items11[1] = tmp29;
  const tmp19Result5 = metroImportAll(tmp28, obj10);
  let tmp19Result6 = tmp19Result5;
  if (!disableStickySections) {
    let tmp34 = !disableThemedGradient;
    const obj13 = { style: memo2, children: items12 };
    View = _modDef1652.View;
    if (!disableThemedGradient) {
      const obj14 = { style: animatedStyle1, children: metroImportDefault(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }) };
      const View2 = tmp33(1652).View;
      tmp34 = metroImportDefault(View2, obj14);
    }
    items12 = [tmp34, tmp19Result5];
    tmp19Result6 = tmp19(View, obj13);
  }
  return tmp19Result6;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = function UsersFastListInner(getSectionProps) {
  let getItemProps;
  let getItemSize;
  let inActionSheet;
  let insetEnd;
  let insetStart;
  let keyExtractor;
  let listHeaderSize;
  let listStyleOverride;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let renderListHeader;
  let sections;
  let tmp13Result;
  let tmp16;
  ({ sections, getItemProps } = getSectionProps);
  getSectionProps = getSectionProps.getSectionProps;
  ({ getItemSize, keyExtractor, insetStart, insetEnd } = getSectionProps);
  if (insetEnd === undefined) {
    insetEnd = 0;
  }
  let flag = getSectionProps.disableBottomSafeZone;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = getSectionProps.disableStickySections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const disableThemedGradient = getSectionProps.disableThemedGradient;
  const disableBackgroundOverlay = getSectionProps.disableBackgroundOverlay;
  ({ inActionSheet, listHeaderSize, onContentLengthChange, onScroll, onLayout, renderListHeader, listStyleOverride } = getSectionProps);
  let closure_7;
  let clientThemesOverride;
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
  const items1 = [getItemProps];
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
  const items2 = [getSectionProps, tmp6];
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
  const items3 = [tmp.list, disableBackgroundOverlay, clientThemesOverride, listStyleOverride];
  const memo = disableBackgroundOverlay.useMemo(() => {
    const items = [list.list, disableBackgroundOverlay && clientThemesOverride, listStyleOverride];
    return items;
  }, items3);
  const tmp12 = getSectionProps(flag2[7])();
  const tmp2Result = getSectionProps(flag2[21]);
  if ("legend" === tmp2Result.useConfig({ location: "Users List" }).list) {
    let obj2 = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, keyExtractor, ref: getSectionProps.ref, style: memo, itemSize: getItemSize, renderItem: callback1, renderListHeader, renderSectionHeader: callback, insetStart, insetEnd: sum, inActionSheet, onContentLengthChange, onScroll, onLayout, listHeaderSize };
    const tmp18 = closure_7;
    const tmp2Result3 = getSectionProps(flag2[22]);
    if (getItemSize == null) {
      getItemSize = tmp5;
    }
    tmp13Result = tmp18(tmp2Result3, obj2);
  } else {
    let tmp13 = closure_7;
    let obj3 = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, estimatedListSize: "windowSize", keyExtractor, ref: getSectionProps.ref, style: memo, itemSize: tmp16, renderItem: callback1, renderListHeader, renderSectionHeader: callback, insetStart, insetEnd: sum, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", inActionSheet, onContentLengthChange, onScroll, onLayout, placeholderConfig: tmp12, listId: "users-fast-list", listHeaderSize, listHeaderAlwaysMounted: true, scrollReporting: "callbacks", wrapChildren: true };
    tmp16 = getItemSize;
    const tmp2Result4 = getSectionProps(flag2[23]);
    if (getItemSize == null) {
      tmp16 = tmp5;
    }
    tmp13Result = tmp13(tmp2Result4, obj3);
  }
  return tmp13Result;
};
