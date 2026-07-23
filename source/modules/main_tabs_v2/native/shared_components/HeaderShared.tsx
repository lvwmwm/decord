// Module ID: 9122
// Function ID: 71435
// Name: GenericHeaderTitle
// Dependencies: [31, 27, 9123, 33, 4130, 689, 4126, 3834, 5088, 5094, 9124, 477, 9129, 1557, 1457, 8829, 5162, 620, 9131, 10111, 4660, 1273, 2]
// Exports: HeaderIconButton, getDefaultChannelStackHeaderProps, getDefaultStackHeaderProps, getRenderHeaderTextButton, getRenderModalBackImage, getRenderModalCloseImage, renderHeader

// Module 9122 (GenericHeaderTitle)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { MIN_HEADER_HEIGHT } from "MIN_HEADER_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
class GenericHeaderTitle {
  constructor(arg0) {
    ({ title, subtitle, color } = global);
    if (color === undefined) {
      color = "mobile-text-heading-primary";
    }
    c1 = color;
    str = global.subtitleColor;
    if (str === undefined) {
      str = "text-default";
    }
    ({ icon, maxFontSizeMultiplier } = global);
    if (maxFontSizeMultiplier === undefined) {
      maxFontSizeMultiplier = 2;
    }
    c3 = maxFontSizeMultiplier;
    obj = { title: 0, subtitle: 0, color: 0, subtitleColor: 0, icon: 0, maxFontSizeMultiplier: 0 };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    HEADER_TITLE_TEXT_STYLE = undefined;
    c5 = undefined;
    renderTitleContainer = function renderTitleContainer(header) {
      if (null != closure_2) {
        let obj = { accessible: true, accessibilityRole: header, style: _undefined.titleContainer };
        const items = [closure_2, ];
        obj = { lineClamp: 1, variant: token, color, style: _undefined.headerText, maxFontSizeMultiplier, children: closure_0 };
        items[1] = outer1_6(outer1_0(outer1_2[6]).Text, obj);
        obj.children = items;
        let tmp9 = outer1_7(token, obj);
      } else {
        obj = { accessibilityRole: header, lineClamp: 1, variant: token, color, style: _undefined.headerText, maxFontSizeMultiplier, children: closure_0 };
        tmp9 = outer1_6(outer1_0(outer1_2[6]).Text, obj);
      }
      return tmp9;
    };
    merged = Object.assign(global, obj);
    obj2 = require("map");
    token = obj2.useToken(require("_createForOfIteratorHelperLoose").modules.mobile.HEADER_TITLE_TEXT_STYLE);
    variant = merged.variant;
    if (null != variant) {
      token = variant;
    }
    HEADER_TITLE_TEXT_STYLE = token;
    tmp4 = c8();
    c5 = tmp4;
    tmp5 = require("useHeaderDebugOverlay")("os-drawn");
    if (null == subtitle) {
      if (null == tmp5) {
        str3 = "header";
        renderTitleContainerResult = renderTitleContainer("header");
      }
      return renderTitleContainerResult;
    }
    obj = { accessible: true, accessibilityRole: "header" };
    str2 = "header";
    tmp6 = jsxs;
    tmp7 = HEADER_TITLE_TEXT_STYLE;
    items = [, , ];
    items[0] = renderTitleContainer(str2);
    tmp8 = null;
    if (null != subtitle) {
      tmp9 = jsx;
      tmp10 = title;
      tmp11 = icon;
      num = 6;
      obj1 = { lineClamp: 1, variant: "text-xs/medium" };
      obj1.color = str;
      obj1.style = tmp4.subtitleText;
      obj1.maxFontSizeMultiplier = maxFontSizeMultiplier;
      obj1.children = subtitle;
      tmp8 = jsx(require("Text").Text, obj1);
    }
    items[1] = tmp8;
    items[2] = tmp5;
    obj.children = items;
    renderTitleContainerResult = tmp6(tmp7, obj);
    return;
  }
}
function renderGenericTitle(children) {
  return callback(GenericHeaderTitle, { title: children.children });
}
class HeaderTextButton {
  constructor(arg0) {
    obj = Object.create(null);
    obj.labelStyle = 0;
    merged = Object.assign(global, obj);
    tmp3 = c8();
    obj = {
      labelStyle: items,
      labelVisible: true,
      backImage() {
            return null;
          },
      truncatedLabel: merged.label,
      accessibilityLabel: merged.label
    };
    items = [, ];
    items[0] = tmp3.backButtonLabel;
    items[1] = global.labelStyle;
    merged1 = Object.assign(merged);
    return jsx(require("Background").HeaderBackButton, obj);
  }
}
function getRenderBackImage(navigation) {
  let closure_0 = navigation;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["navigation"] = navigation;
    return outer1_6(navigation(outer1_2[10]).PressableNavigatorBackIcon, obj);
  };
}
function HeaderChannelActions(arg0) {
  let route;
  let screenIndex;
  ({ route, screenIndex } = arg0);
  const obj = { containerStyle: callback2().headerRightContainer };
  const tmp = callback2();
  const merged = Object.assign(route.params);
  obj["screenIndex"] = screenIndex;
  return callback(importDefault(9131), obj);
}
({ View: closure_4, Platform } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { headerRightContainer: { marginRight: 16 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flexDirection: "row", alignItems: "center", flexShrink: 0, flexGrow: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_HEADER_BORDER, borderBottomWidth: 1 };
obj.headerWrapper = obj;
obj.actionButtonPressable = { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_HEADER_ICON_DEFAULT };
obj.actionButtonIcon = _createForOfIteratorHelperLoose;
obj.headerText = { textAlign: "center", fontSize: 18 };
obj.subtitleText = { textAlign: "center" };
let obj2 = {};
let merged = Object.assign(require("Text").TextStyleSheet["text-md/semibold"]);
obj2["color"] = require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND;
obj.backButtonLabel = obj2;
const obj3 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.titleContainer = obj3;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function HeaderInner(style) {
  let back;
  let headerRight;
  let headerTitle;
  let navigation;
  let options;
  let shouldHandleSafeArea;
  ({ navigation, options, back, shouldHandleSafeArea } = style);
  if (shouldHandleSafeArea === undefined) {
    shouldHandleSafeArea = true;
  }
  style = style.style;
  let importDefault;
  let num;
  let gradientTop;
  const tmp = callback2();
  importDefault = tmp;
  num = 0;
  if (shouldHandleSafeArea) {
    num = importDefault(num[13])().top;
  }
  let headerLeft = options.headerLeft;
  if (undefined === headerLeft) {
    headerLeft = getRenderBackImage(navigation);
  }
  ({ headerTitle, headerRight } = options);
  let obj = style(num[14]);
  const text = obj.useTheme().colors.text;
  let obj1 = style(num[15]);
  gradientTop = obj1.useGradientTop();
  let items = [num, gradientTop, tmp, style];
  const memo = gradientTop.useMemo(() => {
    const items = [_undefined.headerWrapper, gradientTop, { paddingTop: num, minHeight: num + outer1_5 }, style];
    return items;
  }, items);
  if ("string" === typeof headerTitle) {
    let tmp7 = renderGenericTitle;
  } else {
    tmp7 = headerTitle;
  }
  const layoutEffect = gradientTop.useLayoutEffect(() => style(num[16]).DeprecatedLayoutAnimation({ duration: 0 }));
  obj = { style: memo };
  obj = {};
  let title;
  if (null != back) {
    title = back.title;
  }
  obj.label = title;
  const tmp10 = closure_7;
  const tmp11 = closure_4;
  const tmp8 = importDefault(num[8])("custom-drawn");
  obj.canGoBack = navigation.isFocused() && navigation.canGoBack();
  obj.tintColor = text;
  const items1 = [headerLeft(obj), , , ];
  obj1 = {};
  if ("string" !== typeof headerTitle) {
    let name = options.title;
    if (null == name) {
      name = style.route.name;
    }
    headerTitle = name;
  }
  obj1.children = headerTitle;
  obj1.tintColor = text;
  items1[1] = tmp7(obj1);
  let headerRightResult;
  if (null != headerRight) {
    const obj2 = { canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
    headerRightResult = headerRight(obj2);
    const tmp15 = navigation.isFocused() && navigation.canGoBack();
  }
  items1[2] = headerRightResult;
  items1[3] = tmp8;
  obj.children = items1;
  return tmp10(tmp11, obj);
}, (back, back2) => {
  const tmp = !importDefault(620)(back, back2, ["back"]);
  let tmp5Result = !tmp;
  if (!tmp) {
    back = back.back;
    if (null == back) {
      back = {};
    }
    let back1 = back2.back;
    if (null == back1) {
      back1 = {};
    }
    tmp5Result = importDefault(620)(back, back1);
    const tmp5 = importDefault(620);
  }
  return tmp5Result;
});
const result = require("MIN_HEADER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export { GenericHeaderTitle };
export { renderGenericTitle };
export { HeaderTextButton };
export function getRenderHeaderTextButton(intl, outer1_3) {
  let closure_0 = intl;
  let closure_1 = outer1_3;
  return (arg0) => {
    const merged = Object.assign(arg0);
    return outer1_6(outer1_12, { label: closure_0, onPress: closure_1 });
  };
}
export const renderHeader = function renderHeader(arg0) {
  const merged = Object.assign(arg0);
  return callback(closure_9, {});
};
export { getRenderBackImage };
export const getRenderModalBackImage = function getRenderModalBackImage(navigation) {
  const _require = navigation;
  return _require(477).isAndroid() ? undefined : (() => outer1_6(outer1_1(outer1_2[12]), { navigation: closure_0 }));
};
export const getRenderModalCloseImage = function getRenderModalCloseImage(navigation) {
  const _require = navigation;
  return _require(477).isAndroid() ? undefined : (() => outer1_6(outer1_1(outer1_2[12]), { navigation: closure_0, type: "close" }));
};
export const Header = memoResult;
export const getDefaultStackHeaderProps = function getDefaultStackHeaderProps(navigation) {
  return { headerLeft: getRenderBackImage(navigation), headerTitle: renderGenericTitle, headerBackVisible: false };
};
export const getDefaultChannelStackHeaderProps = function getDefaultChannelStackHeaderProps(navigation, outer1_2) {
  let closure_0 = outer1_2;
  const routes = navigation.getState().routes;
  const findIndexResult = routes.findIndex((key) => key.key === outer1_2.key);
  let str = "none";
  if (null != findIndexResult) {
    str = findIndexResult;
  }
  return {
    headerLeft: getRenderBackImage(navigation),
    headerTitle() {
      const obj = {};
      const merged = Object.assign(outer1_2.params);
      obj["isNavigationScreen"] = true;
      obj["screenIndex"] = str;
      return outer1_6(str(outer1_2[19]), obj);
    },
    headerRight() {
      return outer1_6(outer1_14, { route: closure_0, screenIndex: str });
    },
    headerBackVisible: false
  };
};
export const HeaderIconButton = function HeaderIconButton(color) {
  let accessibilityLabel;
  let onPress;
  let resizeMode;
  let source;
  let tintColor = color.color;
  ({ accessibilityLabel, onPress, source, resizeMode } = color);
  const tmp = callback2();
  let obj = { accessibilityRole: "button", accessibilityLabel, style: tmp.actionButtonPressable, onPress };
  obj = {};
  if (null == tintColor) {
    tintColor = tmp.actionButtonIcon.tintColor;
  }
  obj.color = tintColor;
  obj.source = source;
  obj.resizeMode = resizeMode;
  obj.children = closure_6(require(1273) /* Button */.Icon, obj);
  return closure_6(require(4660) /* PressableBase */.PressableOpacity, obj);
};
