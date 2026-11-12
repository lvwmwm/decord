// Module ID: 9935
// Function ID: 9936
// Name: HeaderShared
// Dependencies: [19, 17, 9936, 21, 5170, 575, 5756, 7098, 5783, 7076, 1377, 9937, 9942, 1627, 1500, 9944, 558, 9947, 14840, 1187, 2]
// Exports: HeaderIconButton, getDefaultChannelStackHeaderProps, getDefaultStackHeaderProps, getRenderBackImage, getRenderHeaderTextButton, getRenderModalBackImage, getRenderModalCloseImage, renderHeader

// Module 9935 (HeaderShared)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useToken2 from "useToken" /* 5756 */;
import Pressables from "Pressables" /* 7076 */;
import react_native from "react-native" /* 9936 */;
import PressableNavigatorModalIconDefault from "PressableNavigatorModalIcon" /* 9942 */;
import ChannelActionsDefault from "ChannelActions" /* 9947 */;
import ChannelHeaderDefault from "ChannelHeader" /* 14840 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let Platform;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp2;
const Text_Text = tmp2(5783);
class GenericHeaderTitle {
  constructor(subtitleColor) {
    let children;
    let color;
    let maxFontSizeMultiplier;
    let require;
    let subtitle;
    ({ title: require, subtitle, color } = subtitleColor);
    if (color === undefined) {
      color = "mobile-text-heading-primary";
    }
    let str = subtitleColor.subtitleColor;
    if (str === undefined) {
      str = "text-default";
    }
    ({ icon: dependencyMap, maxFontSizeMultiplier } = subtitleColor);
    if (maxFontSizeMultiplier === undefined) {
      maxFontSizeMultiplier = 2;
    }
    let closure_5;
    const merged = Object.assign(subtitleColor, Object.assign({ title: 0, subtitle: 0, color: 0, subtitleColor: 0, icon: 0, maxFontSizeMultiplier: 0 }));
    const useToken = useToken2.useToken;
    let variant = merged.variant;
    const tmp5 = color;
    if (variant == null) {
      variant = useToken(color(575).modules.mobile.HEADER_TITLE_TEXT_STYLE);
    }
    function renderTitleContainer(header) {
      let items;
      let tmp10;
      if (null != dependencyMap) {
        const obj2 = { accessible: true, accessibilityRole: header, style: closure_5.titleContainer, children: items };
        items = [tmp, ];
        const obj3 = { lineClamp: 1, variant, color, style: closure_5.headerText, maxFontSizeMultiplier, children: require };
        items[1] = metroRequire(Text_Text.Text, obj3);
        tmp10 = metroImportDefault(React3, obj2);
      } else {
        const obj = { accessibilityRole: header, lineClamp: 1, variant, color, style: closure_5.headerText, maxFontSizeMultiplier, children: require };
        tmp10 = metroRequire(Text_Text.Text, obj);
      }
      return tmp10;
    }
    const tmp6 = closure_8();
    closure_5 = tmp6;
    const tmp7 = tmp5(7098)("os-drawn");
    if (null == subtitle) {
      let renderTitleContainerResult;
      if (null == tmp7) {
        renderTitleContainerResult = renderTitleContainer("header");
      }
      return renderTitleContainerResult;
    }
    let items = [renderTitleContainer("header"), , ];
    let tmp10 = null;
    const tmp8 = closure_7;
    const tmp9 = variant;
    if (null != subtitle) {
      let obj = { lineClamp: 1, variant: "body-xs/medium", color: str, style: tmp6.subtitleText, maxFontSizeMultiplier, children: subtitle };
      tmp10 = closure_6(Text_Text.Text, obj);
    }
    items[1] = tmp10;
    items[2] = tmp7;
    renderTitleContainerResult = tmp8(tmp9, { accessible: true, accessibilityRole: "header", children: items });
  }
}
function renderGenericTitle(children) {
  const obj = { title: children.children };
  return metroRequire(GenericHeaderTitle, obj);
}
class HeaderTextButton {
  constructor(arg0) {
    let accessibilityLabel;
    let closure_129_0;
    let disabled;
    let items;
    let label;
    let labelStyle;
    let obj2;
    let style;
    let testID;
    let tmp6;
    ({ label, onPress: closure_129_0, disabled, accessibilityLabel } = arg0);
    ({ labelStyle, testID, style } = arg0);
    const tmp = closure_8();
    const PressableHighlight = Pressables.PressableHighlight;
    if (accessibilityLabel == null) {
      accessibilityLabel = label;
    }
    const obj = {
      accessibilityRole: "button",
      accessibilityLabel,
      accessibilityState: obj2,
      disabled,
      testID,
      onPress: function handlePress() {
        if (null != closure_1_0) {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => closure_1_0());
        }
      },
      hitSlop: tmp6,
      androidRippleConfig: { borderless: false, foreground: true },
      style: items,
      children: metroRequire(Text_Text.Text, { variant: "body-md/semibold", color: "text-brand", lineClamp: 1, maxFontSizeMultiplier: 1, style: labelStyle, children: label })
    };
    obj2 = undefined;
    if (true === disabled) {
      obj2 = { disabled: true };
    }
    tmp6 = undefined;
    const tmp3Result = PlatformUtils;
    if (tmp3Result.isAndroid()) {
      tmp6 = rect;
    }
    items = [tmp.headerTextButton, , , ];
    let prop = null;
    const tmp3Result2 = PlatformUtils;
    if (tmp3Result2.isAndroid()) {
      prop = tmp.headerTextButtonAndroid;
    }
    items[1] = prop;
    let prop1 = null;
    if (true === disabled) {
      prop1 = tmp.headerTextButtonDisabled;
    }
    items[2] = prop1;
    items[3] = style;
    return metroRequire(PressableHighlight, obj);
  }
}
function HeaderChannelActions(arg0) {
  let route;
  let screenIndex;
  ({ route, screenIndex } = arg0);
  const obj = { containerStyle: closure_8().headerRightContainer, screenIndex };
  const tmp2 = ChannelActionsDefault;
  const merged = Object.assign(route.params);
  return metroRequire(tmp2, obj);
}
({ View: closure_4, Platform } = react_native2);
const MIN_HEADER_HEIGHT = react_native.MIN_HEADER_HEIGHT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerRightContainer: { marginRight: 16 }, headerWrapper: obj2, actionButtonPressable: { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 }, actionButtonIcon: obj3, headerText: { textAlign: "center", fontSize: 18 }, subtitleText: { textAlign: "center" }, headerTextButton: obj4, headerTextButtonAndroid: { marginVertical: 3, marginHorizontal: 3 }, headerTextButtonDisabled: { opacity: 0.5 }, titleContainer: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", alignItems: "center", flexShrink: 0, flexGrow: 1, borderColor: nativeDefault.colors.MOBILE_HEADER_BORDER, borderBottomWidth: 1 };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.MOBILE_HEADER_ICON_DEFAULT };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const metroImportAll = createStyles(obj);
const rect = { top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
const memoResult = react.memo(function HeaderInner(route) {
  let back;
  let headerRight;
  let headerTitle;
  let headerWrapper;
  let items1;
  let options;
  let shouldHandleSafeArea;
  let tmp6;
  ({ navigation, options, back, shouldHandleSafeArea } = route);
  route = route.route;
  if (shouldHandleSafeArea === undefined) {
    shouldHandleSafeArea = true;
  }
  const style = route.style;
  let gradientTop;
  const tmp = closure_8();
  importDefault = tmp;
  let num = 0;
  const tmp2 = importDefault;
  if (shouldHandleSafeArea) {
    num = require("useSafeAreaInsets")().top;
  }
  let fn = options.headerLeft;
  if (undefined === fn) {
    fn = (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[11]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_6(PressableNavigatorBackIcon, obj);
    };
  }
  ({ headerTitle, headerRight } = options);
  let obj = style(tmp3[14]);
  const text = obj.useTheme().colors.text;
  const obj2 = style(num[15]);
  gradientTop = obj2.useGradientTop();
  let items = [num, gradientTop, tmp, style];
  const memo = gradientTop.useMemo(() => {
    const items = [headerWrapper.headerWrapper, gradientTop, , ];
    const obj = { paddingTop: num, minHeight: num + MIN_HEADER_HEIGHT };
    items[2] = obj;
    items[3] = style;
    return items;
  }, items);
  if (typeof headerTitle === "string") {
    tmp6 = renderGenericTitle;
  } else {
    tmp6 = headerTitle;
  }
  let title;
  const obj3 = { style: memo, children: items1 };
  const tmp7 = tmp2(num[7])("custom-drawn");
  const tmp8 = closure_7;
  const tmp9 = closure_4;
  if (back != null) {
    title = back.title;
  }
  items1 = [, , , ];
  const obj4 = { label: title, canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
  navigation.isFocused() && navigation.canGoBack();
  items1[0] = fn(obj4);
  if (typeof headerTitle !== "string") {
    let name = options.title;
    if (name == null) {
      name = route.name;
    }
    headerTitle = name;
  }
  items1[1] = tmp6({ children: headerTitle, tintColor: text });
  let headerRightResult;
  if (headerRight != null) {
    const obj5 = { canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
    navigation.isFocused() && navigation.canGoBack();
    headerRightResult = headerRight(obj5);
  }
  items1[2] = headerRightResult;
  items1[3] = tmp7;
  return tmp8(tmp9, obj3);
}, (back, back2) => {
  let tmpResultResult = shallowEqualDefault(back, back2, ["back"]);
  if (tmpResultResult) {
    back = back.back;
    const tmpResult = shallowEqualDefault;
    if (back == null) {
      back = {};
    }
    let back1 = back2.back;
    if (back1 == null) {
      back1 = {};
    }
    tmpResultResult = tmpResult(back, back1);
  }
  return tmpResultResult;
});
const map1 = memoResult;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export { GenericHeaderTitle };
export { renderGenericTitle };
export { HeaderTextButton };
export function getRenderHeaderTextButton(intl, onPress) {
  const label = intl;
  return function renderHeaderTextButton(arg0) {
    const obj = { label, onPress };
    const merged = Object.assign(arg0);
    return metroRequire(HeaderTextButton, obj);
  };
}
export function renderHeader(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroRequire(map1, obj);
}
export function getRenderBackImage(navigation, arg1) {
  let closure_0 = navigation;
  let closure_1 = arg1;
  return (arg0) => {
    const obj = { navigation };
    const PressableNavigatorBackIcon = navigation(dependencyMap[11]).PressableNavigatorBackIcon;
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(c1);
    return closure_2_6(PressableNavigatorBackIcon, obj);
  };
}
export function getRenderModalBackImage(navigation) {
  _require = navigation;
  let obj = require("PlatformUtils");
  return obj.isAndroid() ? undefined : (() => {
    const obj = { navigation };
    return metroRequire(PressableNavigatorModalIconDefault, obj);
  });
}
export function getRenderModalCloseImage(navigation) {
  _require = navigation;
  let obj = require("PlatformUtils");
  return obj.isAndroid() ? undefined : (() => {
    const obj = { navigation, type: "close" };
    return metroRequire(PressableNavigatorModalIconDefault, obj);
  });
}
export const Header = memoResult;
export function getDefaultStackHeaderProps(navigation) {
  let closure_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[11]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_6(PressableNavigatorBackIcon, obj);
    },
    headerTitle: renderGenericTitle,
    headerBackVisible: false
  };
}
export function getDefaultChannelStackHeaderProps(navigation, route) {
  const routes = navigation.getState().routes;
  let str = routes.findIndex((key) => key.key === route.key);
  if (str == null) {
    str = "none";
  }
  let obj = {
    headerLeft: (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[11]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_6(PressableNavigatorBackIcon, obj);
    },
    headerTitle: function renderHeader() {
      const obj = { isNavigationScreen: true, screenIndex: str };
      const tmp = ChannelHeaderDefault;
      const merged = Object.assign(route.params);
      return metroRequire(tmp, obj);
    },
    headerRight: function renderActions() {
      const obj = { route, screenIndex: str };
      return metroRequire(HeaderChannelActions, obj);
    },
    headerBackVisible: false
  };
  route = navigation;
  let c1;
  return obj;
}
export function HeaderIconButton(color) {
  let Icon;
  let accessibilityLabel;
  let onPress;
  let resizeMode;
  let source;
  let tintColor = color.color;
  ({ accessibilityLabel, onPress, source, resizeMode } = color);
  const tmp = closure_8();
  const obj = { accessibilityRole: "button", accessibilityLabel, style: tmp.actionButtonPressable, onPress, children: metroRequire(Icon, { color: tintColor, source, resizeMode }) };
  const PressableOpacity = Pressables.PressableOpacity;
  Icon = native.Icon;
  if (tintColor == null) {
    tintColor = tmp.actionButtonIcon.tintColor;
  }
  return metroRequire(PressableOpacity, obj);
}
