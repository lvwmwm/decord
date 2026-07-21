// Module ID: 9114
// Function ID: 71370
// Name: GenericHeaderTitle
// Dependencies: [31, 27, 5311, 1352, 1348, 4142, 9124, 653, 9125, 33, 4126, 9077, 689, 9126, 9128, 9129, 9135, 566, 5646, 22, 9136, 9262, 4337]
// Exports: HeaderIconButton, getDefaultChannelStackHeaderProps, getDefaultStackHeaderProps, getRenderHeaderTextButton, getRenderModalBackImage, getRenderModalCloseImage, renderHeader

// Module 9114 (GenericHeaderTitle)
import importAllResult from "module_31";
import keys from "keys";
import { MIN_HEADER_HEIGHT } from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getVoiceChannelKeyByChannelId from "getVoiceChannelKeyByChannelId";

let Platform;
class GenericHeaderTitle {
  constructor(arg0) {
    ({ title: closure_0, subtitle, color } = global);
    if (color === undefined) {
      color = "mobile-text-heading-primary";
    }
    closure_1 = color;
    str = global.subtitleColor;
    if (str === undefined) {
      str = "text-default";
    }
    ({ icon: closure_2, maxFontSizeMultiplier } = global);
    if (maxFontSizeMultiplier === undefined) {
      maxFontSizeMultiplier = 2;
    }
    closure_3 = maxFontSizeMultiplier;
    obj = { <string:1371629666>: true, <string:2120549492>: true, <string:3368122975>: true, <string:1764223313>: true, <string:3679956194>: true, <string:944643202>: true };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    View = undefined;
    closure_5 = undefined;
    renderTitleContainer = function renderTitleContainer(header) {
      if (null != closure_2) {
        let obj = { accessible: true, accessibilityRole: header, style: tmp4.titleContainer };
        const items = [closure_2, ];
        obj = { lineClamp: 1, variant: token, color, style: tmp4.headerText, maxFontSizeMultiplier, children: callback };
        items[1] = callback2(callback(closure_2[6]).Text, obj);
        obj.children = items;
        let tmp9 = callback3(token, obj);
      } else {
        obj = { accessibilityRole: header, lineClamp: 1, variant: token, color, style: token.headerText, maxFontSizeMultiplier, children: callback };
        tmp9 = callback2(callback(closure_2[6]).Text, obj);
      }
      return tmp9;
    };
    merged = Object.assign(global, obj);
    obj2 = require("ME");
    token = obj2.useToken(require("_isNativeReflectConstruct").modules.mobile.HEADER_TITLE_TEXT_STYLE);
    variant = merged.variant;
    if (null != variant) {
      token = variant;
    }
    View = token;
    tmp4 = closure_8();
    closure_5 = tmp4;
    tmp5 = require("SearchEntrypointAnalyticsLocations")("os-drawn");
    if (null == subtitle) {
      if (null == tmp5) {
        str3 = "header";
        renderTitleContainerResult = renderTitleContainer("header");
      }
      return renderTitleContainerResult;
    }
    obj = {};
    str2 = "header";
    tmp6 = jsxs;
    tmp7 = View;
    items = [, , ];
    items[0] = renderTitleContainer(str2);
    tmp8 = null;
    if (null != subtitle) {
      tmp9 = jsx;
      tmp10 = arg1;
      tmp11 = dependencyMap;
      num = 6;
      obj1 = { "Null": null, "Null": null };
      obj1.color = str;
      obj1.style = tmp4.subtitleText;
      obj1.maxFontSizeMultiplier = maxFontSizeMultiplier;
      obj1.children = subtitle;
      tmp8 = jsx(require("createChannelState").Text, obj1);
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
    tmp3 = closure_8();
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
    return jsx(require("module_33").HeaderBackButton, obj);
  }
}
function getRenderBackImage(navigation) {
  const arg1 = navigation;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["navigation"] = arg0;
    return callback(arg0(closure_2[10]).PressableNavigatorBackIcon, obj);
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
  return callback(importDefault(dependencyMap[18]), obj);
}
({ View: closure_4, Platform } = keys);
({ jsx: closure_6, jsxs: closure_7 } = _callSuper);
let obj = { headerRightContainer: { marginRight: 16 } };
obj = { backgroundColor: require("_isNativeReflectConstruct").colors.BACKGROUND_BASE_LOW, borderColor: require("_isNativeReflectConstruct").colors.MOBILE_HEADER_BORDER };
obj.headerWrapper = obj;
obj.actionButtonPressable = {};
_isNativeReflectConstruct = { tintColor: require("_isNativeReflectConstruct").colors.MOBILE_HEADER_ICON_DEFAULT };
obj.actionButtonIcon = _isNativeReflectConstruct;
obj.headerText = {};
obj.subtitleText = { textAlign: "center" };
const obj2 = {};
const merged = Object.assign(require("createChannelState").TextStyleSheet.text-md/semibold);
obj2["color"] = require("_isNativeReflectConstruct").colors.TEXT_BRAND;
obj.backButtonLabel = obj2;
obj.titleContainer = { gap: require("_isNativeReflectConstruct").space.PX_8 };
let closure_8 = _isNativeReflectConstruct.createStyles(obj);
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
  const arg1 = style;
  let importDefault;
  let dependencyMap;
  let importAllResult;
  const tmp = callback2();
  importDefault = tmp;
  let num = 0;
  if (shouldHandleSafeArea) {
    num = importDefault(dependencyMap[13])().top;
  }
  dependencyMap = num;
  let headerLeft = options.headerLeft;
  if (undefined === headerLeft) {
    headerLeft = getRenderBackImage(navigation);
  }
  ({ headerTitle, headerRight } = options);
  let obj = arg1(dependencyMap[14]);
  const text = obj.useTheme().colors.text;
  let obj1 = arg1(dependencyMap[15]);
  const gradientTop = obj1.useGradientTop();
  importAllResult = gradientTop;
  const items = [num, gradientTop, tmp, style];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.headerWrapper, gradientTop, { paddingTop: num, minHeight: num + closure_5 }, style];
    return items;
  }, items);
  if ("string" === typeof headerTitle) {
    let tmp7 = renderGenericTitle;
  } else {
    tmp7 = headerTitle;
  }
  const layoutEffect = importAllResult.useLayoutEffect(() => style(num[16]).DeprecatedLayoutAnimation({ duration: 0 }));
  obj = { style: memo };
  obj = {};
  let title;
  if (null != back) {
    title = back.title;
  }
  obj.label = title;
  const tmp10 = closure_7;
  const tmp11 = closure_4;
  const tmp8 = importDefault(dependencyMap[8])("custom-drawn");
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
  const tmp = !importDefault(dependencyMap[17])(back, back2, [1072372507]);
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
    tmp5Result = importDefault(dependencyMap[17])(back, back1);
    const tmp5 = importDefault(dependencyMap[17]);
  }
  return tmp5Result;
});
const result = getVoiceChannelKeyByChannelId.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export { GenericHeaderTitle };
export { renderGenericTitle };
export { HeaderTextButton };
export function getRenderHeaderTextButton(intl, closure_3) {
  closure_3 = intl;
  const importDefault = closure_3;
  return (arg0) => {
    const merged = Object.assign(arg0);
    return callback(closure_12, { label: arg0, onPress: arg1 });
  };
}
export const renderHeader = function renderHeader(arg0) {
  const merged = Object.assign(arg0);
  return callback(memoResult, {});
};
export { getRenderBackImage };
export const getRenderModalBackImage = function getRenderModalBackImage(navigation) {
  const arg1 = navigation;
  return arg1(dependencyMap[11]).isAndroid() ? undefined : () => callback2(callback(closure_2[12]), { navigation: arg0 });
};
export const getRenderModalCloseImage = function getRenderModalCloseImage(navigation) {
  const arg1 = navigation;
  return arg1(dependencyMap[11]).isAndroid() ? undefined : () => callback2(callback(closure_2[12]), { navigation: arg0, type: "close" });
};
export const Header = memoResult;
export const getDefaultStackHeaderProps = function getDefaultStackHeaderProps(navigation) {
  return { headerLeft: getRenderBackImage(navigation), headerTitle: renderGenericTitle, headerBackVisible: false };
};
export const getDefaultChannelStackHeaderProps = function getDefaultChannelStackHeaderProps(closure_1, closure_2) {
  const routes = closure_1.getState().routes;
  const findIndexResult = routes.findIndex((key) => key.key === arg1.key);
  let str = "none";
  if (null != findIndexResult) {
    str = findIndexResult;
  }
  const importDefault = str;
  return {
    headerLeft: getRenderBackImage(closure_1),
    headerTitle() {
      const obj = {};
      const merged = Object.assign(arg1.params);
      obj["isNavigationScreen"] = true;
      obj["screenIndex"] = str;
      return callback(str(closure_2[19]), obj);
    },
    headerRight() {
      return callback(closure_14, { route: arg1, screenIndex: str });
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
  obj.children = closure_6(arg1(dependencyMap[21]).Icon, obj);
  return closure_6(arg1(dependencyMap[20]).PressableOpacity, obj);
};
