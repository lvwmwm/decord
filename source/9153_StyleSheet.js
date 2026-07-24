// Module ID: 9153
// Function ID: 71627
// Name: StyleSheet
// Dependencies: [57, 31, 27, 33, 1457, 9154, 5526, 9155, 4478]
// Exports: default

// Module 9153 (StyleSheet)
import _slicedToArray from "_slicedToArray";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ I18nManager: closure_4, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const styles = StyleSheet.create({ row: { flexDirection: "row", alignItems: "center" } });

export default function HeaderConfig(arg0) {
  let UNSTABLE_headerInsets;
  let canGoBack;
  let fontSize;
  let fontWeight;
  let headerBackButtonMenuEnabled;
  let headerBackImageSource;
  let headerBackTitle;
  let headerBackTitleStyle;
  let headerBackTitleVisible;
  let headerBackVisible;
  let headerBackground;
  let headerBlurEffect;
  let headerLargeStyle;
  let headerLargeTitle;
  let headerLargeTitleShadowVisible;
  let headerLargeTitleStyle;
  let headerLeft;
  let headerRight;
  let headerSearchBarOptions;
  let headerShadowVisible;
  let headerShown;
  let headerStyle;
  let headerTintColor;
  let headerTitle;
  let headerTitleAlign;
  let headerTitleStyle;
  let headerTopInsetEnabled;
  let headerTransparent;
  let route;
  let title;
  let tmp10;
  let tmp8;
  let tmp9;
  ({ headerBackImageSource, headerBackTitle, headerBackTitleVisible } = arg0);
  let tmp = undefined === headerBackTitleVisible;
  ({ headerBackButtonMenuEnabled, headerBackTitleStyle } = arg0);
  if (!tmp) {
    tmp = headerBackTitleVisible;
  }
  ({ headerBackVisible, headerShadowVisible, headerLargeTitle, headerBackground, headerLeft, headerRight, headerTintColor, headerTitle, headerTitleAlign, headerTransparent, headerSearchBarOptions, UNSTABLE_headerInsets, canGoBack } = arg0);
  ({ headerLargeStyle, headerLargeTitleShadowVisible, headerLargeTitleStyle, headerShown, headerStyle, headerBlurEffect, headerTitleStyle, headerTopInsetEnabled, route, title } = arg0);
  let obj = require(1457) /* Link */;
  const colors = obj.useTheme().colors;
  let text = headerTintColor;
  if (null == headerTintColor) {
    text = colors.text;
  }
  const tmp2 = StyleSheet.flatten(headerBackTitleStyle) || {};
  const tmp3 = StyleSheet.flatten(headerLargeTitleStyle) || {};
  const tmp4 = StyleSheet.flatten(headerTitleStyle) || {};
  const tmp5 = StyleSheet.flatten(headerStyle) || {};
  let obj1 = require(9154) /* processFonts */;
  const items = [tmp2.fontFamily, tmp3.fontFamily, tmp4.fontFamily];
  const tmp6 = StyleSheet.flatten(headerLargeStyle) || {};
  [tmp8, tmp9, tmp10] = callback(obj1.processFonts(items), 3);
  let obj2 = require(5526) /* Background */;
  headerTitle = obj2.getHeaderTitle({ title, headerTitle }, route.name);
  const color = tmp4.color;
  if (null != color) {
    headerTintColor = color;
  }
  if (null == headerTintColor) {
    headerTintColor = colors.text;
  }
  ({ fontSize, fontWeight } = tmp4);
  obj = { color: headerTintColor };
  if (null != tmp4.fontFamily) {
    obj.fontFamily = tmp4.fontFamily;
  }
  if (null != fontSize) {
    obj.fontSize = fontSize;
  }
  if (null != fontWeight) {
    obj.fontWeight = fontWeight;
  }
  let headerLeftResult;
  if (null != headerLeft) {
    obj = { tintColor: text, canGoBack, label: headerBackTitle };
    headerLeftResult = headerLeft(obj);
  }
  let headerRightResult;
  if (null != headerRight) {
    obj1 = { tintColor: text, canGoBack };
    headerRightResult = headerRight(obj1);
  }
  let headerTitleResult = null;
  if ("function" === typeof headerTitle) {
    obj2 = { tintColor: text, children: headerTitle };
    headerTitleResult = headerTitle(obj2);
  }
  importDefault(9155)();
  let isSearchBarAvailableForCurrentPlatform = "boolean" === typeof require(4478) /* enableScreens */.isSearchBarAvailableForCurrentPlatform;
  if (isSearchBarAvailableForCurrentPlatform) {
    isSearchBarAvailableForCurrentPlatform = require(4478) /* enableScreens */.isSearchBarAvailableForCurrentPlatform;
  }
  let tmp19 = isSearchBarAvailableForCurrentPlatform;
  if (isSearchBarAvailableForCurrentPlatform) {
    tmp19 = null != headerSearchBarOptions;
  }
  if (null != headerSearchBarOptions) {
    if (!isSearchBarAvailableForCurrentPlatform) {
      const _Error = Error;
      const error = new Error("The current version of 'react-native-screens' doesn't support SearchBar in the header. Please update to the latest version to use this option.");
      throw error;
    }
  }
  let tmp26 = null != headerBackground;
  if (!tmp26) {
    tmp26 = headerTransparent;
  }
  if (!tmp26) {
    let flag = tmp19;
    if (!tmp19) {
      flag = headerLargeTitle;
    }
    if (flag) {
      flag = false;
    }
    tmp26 = flag;
  }
  const obj3 = { backButtonInCustomView: headerBackVisible ? null != headerLeftResult : null != headerTitleResult };
  let backgroundColor = tmp5.backgroundColor;
  if (null == backgroundColor) {
    let str3 = "transparent";
    if (null == headerBackground) {
      str3 = "transparent";
      if (!headerTransparent) {
        str3 = colors.card;
      }
    }
    backgroundColor = str3;
  }
  obj3.backgroundColor = backgroundColor;
  if (require(4478) /* enableScreens */.isNewBackTitleImplementation) {
    let str4 = headerBackTitle;
  } else {
    str4 = " ";
  }
  obj3.backTitle = str4;
  obj3.backTitleVisible = tmp;
  obj3.backTitleFontFamily = tmp8;
  obj3.backTitleFontSize = tmp2.fontSize;
  obj3.blurEffect = headerBlurEffect;
  obj3.color = text;
  let str5 = "ltr";
  if (constants.getConstants().isRTL) {
    str5 = "rtl";
  }
  obj3.direction = str5;
  obj3.disableBackButtonMenu = false === headerBackButtonMenuEnabled;
  obj3.hidden = false === headerShown;
  obj3.hideBackButton = false === headerBackVisible;
  let tmp28 = false === headerShadowVisible || null != headerBackground;
  if (!tmp28) {
    if (headerTransparent) {
      headerTransparent = true !== headerShadowVisible;
    }
    tmp28 = headerTransparent;
  }
  obj3.hideShadow = tmp28;
  obj3.largeTitle = headerLargeTitle;
  obj3.largeTitleBackgroundColor = tmp6.backgroundColor;
  obj3.largeTitleColor = tmp3.color;
  obj3.largeTitleFontFamily = tmp9;
  ({ fontSize: obj8.largeTitleFontSize, fontWeight: obj8.largeTitleFontWeight } = tmp3);
  obj3.largeTitleHideShadow = false === headerLargeTitleShadowVisible;
  obj3.title = headerTitle;
  obj3.titleColor = headerTintColor;
  obj3.titleFontFamily = tmp10;
  obj3.titleFontSize = fontSize;
  obj3.titleFontWeight = fontWeight;
  obj3.topInsetEnabled = headerTopInsetEnabled;
  let top;
  if (null != UNSTABLE_headerInsets) {
    top = UNSTABLE_headerInsets.top;
  }
  let tmp30;
  if (undefined !== top) {
    tmp30 = !UNSTABLE_headerInsets.top;
  }
  obj3.disableTopInsetApplication = tmp30;
  let left;
  if (null != UNSTABLE_headerInsets) {
    left = UNSTABLE_headerInsets.left;
  }
  let tmp32;
  if (undefined !== left) {
    tmp32 = !UNSTABLE_headerInsets.left;
  }
  obj3.disableLeftInsetApplication = tmp32;
  let right;
  if (null != UNSTABLE_headerInsets) {
    right = UNSTABLE_headerInsets.right;
  }
  let tmp34;
  if (undefined !== right) {
    tmp34 = !UNSTABLE_headerInsets.right;
  }
  obj3.disableRightInsetApplication = tmp34;
  let bottom;
  if (null != UNSTABLE_headerInsets) {
    bottom = UNSTABLE_headerInsets.bottom;
  }
  let tmp36;
  if (undefined !== bottom) {
    tmp36 = !UNSTABLE_headerInsets.bottom;
  }
  obj3.disableBottomInsetApplication = tmp36;
  obj3.translucent = true === tmp26;
  const obj4 = {};
  if (null != headerLeftResult) {
    const obj5 = {};
    const obj6 = { style: row.row };
    const items1 = [headerLeftResult, ];
    let tmp46 = null;
    if ("center" !== headerTitleAlign) {
      let tmp47 = headerTitleResult;
      if (!tmp14) {
        const obj7 = { tintColor: text, style: obj, children: headerTitle };
        tmp47 = callback2(require(5526) /* Background */.HeaderTitle, obj7);
      }
      tmp46 = tmp47;
    }
    items1[1] = tmp46;
    obj6.children = items1;
    obj5.children = closure_9(View, obj6);
    let tmp40Result = callback2(require(4478) /* enableScreens */.ScreenStackHeaderLeftView, obj5);
    const tmp40 = callback2;
    const tmp43 = closure_9;
    const tmp44 = View;
  } else {
    tmp40Result = null;
  }
  const items2 = [tmp40Result, ];
  let tmp52Result = null;
  if ("center" === headerTitleAlign) {
    const obj8 = {};
    if (!tmp14) {
      const obj9 = { tintColor: text, style: obj, children: headerTitle };
      headerTitleResult = callback2(require(5526) /* Background */.HeaderTitle, obj9);
    }
    obj8.children = headerTitleResult;
    tmp52Result = callback2(require(4478) /* enableScreens */.ScreenStackHeaderCenterView, obj8);
    const tmp52 = callback2;
  }
  items2[1] = tmp52Result;
  obj4.children = items2;
  const items3 = [closure_9(closure_8, obj4), , , ];
  let tmp58 = null;
  if (undefined !== headerBackImageSource) {
    const obj10 = { source: headerBackImageSource };
    tmp58 = callback2(require(4478) /* enableScreens */.ScreenStackHeaderBackButtonImage, obj10);
  }
  items3[1] = tmp58;
  let tmp62 = null;
  if (null != headerRightResult) {
    const obj11 = { children: headerRightResult };
    tmp62 = callback2(require(4478) /* enableScreens */.ScreenStackHeaderRightView, obj11);
  }
  items3[2] = tmp62;
  let tmp66 = null;
  if (tmp19) {
    const obj12 = {};
    const _Object = Object;
    obj12.children = callback2(require(4478) /* enableScreens */.SearchBar, Object.assign({}, headerSearchBarOptions));
    tmp66 = callback2(require(4478) /* enableScreens */.ScreenStackHeaderSearchBarView, obj12);
  }
  items3[3] = tmp66;
  obj3.children = items3;
  return closure_9(require(4478) /* enableScreens */.ScreenStackHeaderConfig, obj3);
};
