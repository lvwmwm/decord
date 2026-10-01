// Module ID: 7288
// Function ID: 7289
// Name: HeaderShared
// Dependencies: [19, 17, 7289, 21, 4836, 576, 4832, 4531, 5937, 5943, 7290, 1364, 7295, 1613, 1486, 7297, 5893, 558, 7300, 12840, 5435, 1177, 2]
// Exports: HeaderIconButton, getDefaultChannelStackHeaderProps, getDefaultStackHeaderProps, getRenderBackImage, getRenderHeaderTextButton, getRenderModalBackImage, getRenderModalCloseImage, renderHeader

// Module 7288 (HeaderShared)
import shallowEqualDefault from "shallowEqual" /* 558 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import useToken2 from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import _mod5943 from "module_5943" /* 5943 */;
import react_native from "react-native" /* 7289 */;
import PressableNavigatorModalIconDefault from "PressableNavigatorModalIcon" /* 7295 */;
import ChannelActionsDefault from "ChannelActions" /* 7300 */;
import ChannelHeaderDefault from "ChannelHeader" /* 12840 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
      variant = useToken(color(576).modules.mobile.HEADER_TITLE_TEXT_STYLE);
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
    const tmp7 = tmp5(5937)("os-drawn");
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
      let obj = { lineClamp: 1, variant: "text-xs/medium", color: str, style: tmp6.subtitleText, maxFontSizeMultiplier, children: subtitle };
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
  constructor(labelStyle) {
    let items;
    labelStyle = labelStyle.labelStyle;
    const merged = Object.assign(labelStyle, Object.assign({ labelStyle: 0 }));
    const obj = {
      labelStyle: items,
      displayMode: "default",
      backImage() {
        return null;
      },
      truncatedLabel: merged.label,
      accessibilityLabel: merged.label
    };
    items = [closure_8().backButtonLabel, labelStyle];
    closure_8();
    const HeaderBackButton = _mod5943.HeaderBackButton;
    const merged1 = Object.assign(merged);
    return metroRequire(HeaderBackButton, obj);
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
let obj = { headerRightContainer: { marginRight: 16 }, headerWrapper: obj2, actionButtonPressable: { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 }, actionButtonIcon: obj3, headerText: { textAlign: "center", fontSize: 18 }, subtitleText: { textAlign: "center" }, backButtonLabel: obj4, titleContainer: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", alignItems: "center", flexShrink: 0, flexGrow: 1, borderColor: nativeDefault.colors.MOBILE_HEADER_BORDER, borderBottomWidth: 1 };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.MOBILE_HEADER_ICON_DEFAULT };
obj4 = { color: nativeDefault.colors.TEXT_BRAND };
let merged = Object.assign(Text_Text.TextStyleSheet["text-md/semibold"]);
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const metroImportAll = createStyles(obj);
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
      const PressableNavigatorBackIcon = navigation(dependencyMap[10]).PressableNavigatorBackIcon;
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
  const obj3 = gradientTop;
  if (typeof headerTitle === "string") {
    tmp6 = renderGenericTitle;
  } else {
    tmp6 = headerTitle;
  }
  const tmp7 = tmp2(num[8])("custom-drawn");
  const layoutEffect = obj3.useLayoutEffect(() => {
    const obj = style(num[16]);
    return obj.DeprecatedLayoutAnimation({ duration: 0 });
  });
  let title;
  const obj4 = { style: memo, children: items1 };
  const tmp10 = closure_4;
  const tmp9 = closure_7;
  if (back != null) {
    title = back.title;
  }
  items1 = [, , , ];
  const obj5 = { label: title, canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
  navigation.isFocused() && navigation.canGoBack();
  items1[0] = fn(obj5);
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
    const obj6 = { canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
    navigation.isFocused() && navigation.canGoBack();
    headerRightResult = headerRight(obj6);
  }
  items1[2] = headerRightResult;
  items1[3] = tmp7;
  return tmp9(tmp10, obj4);
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
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export { GenericHeaderTitle };
export { renderGenericTitle };
export { HeaderTextButton };
export function getRenderHeaderTextButton(intl, onPress) {
  const label = intl;
  return (arg0) => {
    const obj = { label, onPress };
    const merged = Object.assign(arg0);
    return metroRequire(HeaderTextButton, obj);
  };
}
export const renderHeader = function renderHeader(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroRequire(memoResult, obj);
};
export function getRenderBackImage(navigation, arg1) {
  let closure_0 = navigation;
  let closure_1 = arg1;
  return (arg0) => {
    const obj = { navigation };
    const PressableNavigatorBackIcon = navigation(dependencyMap[10]).PressableNavigatorBackIcon;
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(c1);
    return closure_2_6(PressableNavigatorBackIcon, obj);
  };
}
export const getRenderModalBackImage = function getRenderModalBackImage(navigation) {
  _require = navigation;
  let obj = require("PlatformUtils");
  return obj.isAndroid() ? undefined : (() => {
    const obj = { navigation };
    return metroRequire(PressableNavigatorModalIconDefault, obj);
  });
};
export const getRenderModalCloseImage = function getRenderModalCloseImage(navigation) {
  _require = navigation;
  let obj = require("PlatformUtils");
  return obj.isAndroid() ? undefined : (() => {
    const obj = { navigation, type: "close" };
    return metroRequire(PressableNavigatorModalIconDefault, obj);
  });
};
export const Header = memoResult;
export function getDefaultStackHeaderProps(navigation) {
  let closure_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[10]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_6(PressableNavigatorBackIcon, obj);
    },
    headerTitle: renderGenericTitle,
    headerBackVisible: false
  };
}
export const getDefaultChannelStackHeaderProps = function getDefaultChannelStackHeaderProps(navigation, route) {
  const routes = navigation.getState().routes;
  let str = routes.findIndex((key) => key.key === route.key);
  if (str == null) {
    str = "none";
  }
  let obj = {
    headerLeft: (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[10]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_6(PressableNavigatorBackIcon, obj);
    },
    headerTitle() {
      const obj = { isNavigationScreen: true, screenIndex: str };
      const tmp = ChannelHeaderDefault;
      const merged = Object.assign(route.params);
      return metroRequire(tmp, obj);
    },
    headerRight() {
      const obj = { route, screenIndex: str };
      return metroRequire(HeaderChannelActions, obj);
    },
    headerBackVisible: false
  };
  route = navigation;
  let c1;
  return obj;
};
export const HeaderIconButton = function HeaderIconButton(color) {
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
};
