// Module ID: 4522
// Function ID: 39752
// Name: mapAppearanceToNativeProp
// Dependencies: [29, 57, 31, 27, 33, 4516, 4523, 4489, 4481, 4491]
// Exports: default

// Module 4522 (mapAppearanceToNativeProp)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function mapAppearanceToNativeProp(scrollEdgeAppearance) {
  let compactInline;
  let inline;
  let tabBarBackgroundColor;
  let tabBarShadowColor;
  if (scrollEdgeAppearance) {
    const _Object = Object;
    const obj = {};
    ({ inline, compactInline, tabBarBackgroundColor, tabBarShadowColor } = scrollEdgeAppearance);
    obj.stacked = mapItemAppearanceToNativeProp(scrollEdgeAppearance.stacked);
    obj.inline = mapItemAppearanceToNativeProp(inline);
    obj.compactInline = mapItemAppearanceToNativeProp(compactInline);
    obj.tabBarBackgroundColor = callback(tabBarBackgroundColor);
    obj.tabBarShadowColor = callback(tabBarShadowColor);
    return Object.assign({}, scrollEdgeAppearance, obj);
  }
}
function mapItemAppearanceToNativeProp(compactInline) {
  let disabled;
  let focused;
  let selected;
  if (compactInline) {
    const _Object = Object;
    const obj = {};
    ({ selected, focused, disabled } = compactInline);
    obj.normal = mapItemStateAppearanceToNativeProp(compactInline.normal);
    obj.selected = mapItemStateAppearanceToNativeProp(selected);
    obj.focused = mapItemStateAppearanceToNativeProp(focused);
    obj.disabled = mapItemStateAppearanceToNativeProp(disabled);
    return Object.assign({}, compactInline, obj);
  }
}
function mapItemStateAppearanceToNativeProp(disabled) {
  let tabBarItemBadgeBackgroundColor;
  let tabBarItemIconColor;
  if (disabled) {
    const tabBarItemTitleFontWeight = disabled.tabBarItemTitleFontWeight;
    const obj = {};
    ({ tabBarItemIconColor, tabBarItemBadgeBackgroundColor } = disabled);
    obj.tabBarItemTitleFontColor = callback(disabled.tabBarItemTitleFontColor);
    obj.tabBarItemIconColor = callback(tabBarItemIconColor);
    obj.tabBarItemBadgeBackgroundColor = callback(tabBarItemBadgeBackgroundColor);
    let StringResult;
    if (undefined !== tabBarItemTitleFontWeight) {
      const _String = String;
      StringResult = String(tabBarItemTitleFontWeight);
    }
    obj.tabBarItemTitleFontWeight = StringResult;
    return Object.assign({}, disabled, obj);
  }
}
let closure_3 = ["onWillAppear", "onDidAppear", "onWillDisappear", "onDidDisappear", "isFocused", "freezeContents", "icon", "selectedIcon", "standardAppearance", "scrollEdgeAppearance", "scrollEdgeEffects", "experimental_userInterfaceStyle", "style"];
({ Image: closure_7, Platform, StyleSheet, findNodeHandle: closure_8, processColor: closure_9 } = get_ActivityIndicator);
const styles = StyleSheet.create({ fillParent: { position: "absolute", flex: 1, width: "100%", height: "100%" } });

export default function TabsScreen(onWillAppear) {
  let experimental_userInterfaceStyle;
  let freezeContents;
  let icon;
  let scrollEdgeAppearance;
  let scrollEdgeEffects;
  let selectedIcon;
  let standardAppearance;
  let style;
  const ref = onDidDisappear.useRef(null);
  const ref1 = onDidDisappear.useRef(-1);
  const effect = onDidDisappear.useEffect(() => {
    if (null != ref.current) {
      const tmp5 = outer1_8(ref.current);
      let num2 = -1;
      if (null != tmp5) {
        num2 = tmp5;
      }
      ref1.current = num2;
      const tmp2 = ref1;
    } else {
      ref1.current = -1;
    }
  }, []);
  const tmp4 = onWillDisappear(onDidDisappear.useState(false), 2);
  const first = tmp4[0];
  const dependencyMap = tmp4[1];
  onWillAppear = onWillAppear.onWillAppear;
  const onDidAppear = onWillAppear.onDidAppear;
  onWillDisappear = onWillAppear.onWillDisappear;
  onDidDisappear = onWillAppear.onDidDisappear;
  const isFocused = onWillAppear.isFocused;
  ({ freezeContents, selectedIcon, scrollEdgeEffects } = onWillAppear);
  ({ icon, standardAppearance, scrollEdgeAppearance, experimental_userInterfaceStyle, style } = onWillAppear);
  const tmp7 = onDidAppear(onWillAppear, onWillAppear);
  let obj = ref(4481);
  let flag = false;
  if (obj.freezeEnabled()) {
    flag = freezeContents;
    if (undefined === freezeContents) {
      if (ref(4491).featureFlags.experiment.controlledBottomTabs) {
        let tmp11 = tmp10;
        if (tmp10) {
          tmp11 = !tmp6;
        }
        flag = tmp11;
      } else {
        flag = tmp10;
      }
    }
  }
  const items = [onWillAppear];
  const items1 = [onDidAppear];
  const callback = onDidDisappear.useCallback((arg0) => {
    ref(4516).bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onWillAppear received");
    dependencyMap(true);
    if (null != onWillAppear) {
      onWillAppear(arg0);
    }
  }, items);
  const items2 = [onWillDisappear];
  const callback1 = onDidDisappear.useCallback((arg0) => {
    ref(4516).bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onDidAppear received");
    if (null != onDidAppear) {
      onDidAppear(arg0);
    }
  }, items1);
  const items3 = [onDidDisappear];
  const callback2 = onDidDisappear.useCallback((onDidDisappear) => {
    ref(4516).bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onWillDisappear received");
    if (null != onWillDisappear) {
      onWillDisappear(onDidDisappear);
    }
  }, items2);
  const callback3 = onDidDisappear.useCallback((arg0) => {
    ref(4516).bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onDidDisappear received");
    dependencyMap(false);
    if (null != onDidDisappear) {
      onDidDisappear(arg0);
    }
  }, items3);
  let obj1 = ref(4516);
  const current = ref1.current;
  let num2 = -1;
  if (null != current) {
    num2 = current;
  }
  obj1.bottomTabsDebugLog("TabsScreen [" + num2 + "] render; tabKey: " + tmp7.tabKey + " shouldFreeze: " + flag + ", isFocused: " + undefined !== isFocused && isFocused + " nativeViewIsVisible: " + first);
  obj = { collapsable: false, style: items4, onWillAppear: callback, onDidAppear: callback1, onWillDisappear: callback2, onDidDisappear: callback3, isFocused: tmp6 };
  items4 = [style, fillParent.fillParent];
  obj = {};
  const tmp17 = (function parseIconsToNativeProps(icon) {
    let android;
    if (null != icon) {
      android = icon.android;
    }
    if (!android) {
      let shared;
      if (null != icon) {
        shared = icon.shared;
      }
      android = shared;
    }
    if (android) {
      if ("imageSource" === android.type) {
        const assetSource = outer1_7.resolveAssetSource(android.imageSource);
        if (!assetSource) {
          const _console = console;
          console.error("[RNScreens] failed to resolve an asset for bottom tab icon");
        }
        let obj = { imageIconResource: assetSource };
      } else if ("drawableResource" === android.type) {
        obj = { drawableIconResourceName: android.name };
      } else {
        const _Error = Error;
        const error = new Error("[RNScreens] Incorrect icon format for Android. You must provide `imageSource` or `drawableResource`.");
        throw error;
      }
    } else {
      obj = {};
    }
    return Object.assign({}, obj);
  })(icon);
  const tmp18 = jsx;
  obj.standardAppearance = mapAppearanceToNativeProp(standardAppearance);
  obj.scrollEdgeAppearance = mapAppearanceToNativeProp(scrollEdgeAppearance);
  obj.ref = ref;
  let bottom;
  if (null != scrollEdgeEffects) {
    bottom = scrollEdgeEffects.bottom;
  }
  obj.bottomScrollEdgeEffect = bottom;
  let left;
  if (null != scrollEdgeEffects) {
    left = scrollEdgeEffects.left;
  }
  obj.leftScrollEdgeEffect = left;
  let right;
  if (null != scrollEdgeEffects) {
    right = scrollEdgeEffects.right;
  }
  obj.rightScrollEdgeEffect = right;
  let top;
  if (null != scrollEdgeEffects) {
    top = scrollEdgeEffects.top;
  }
  obj.topScrollEdgeEffect = top;
  obj.isTitleUndefined = null === tmp7.title || undefined === tmp7.title;
  obj.userInterfaceStyle = experimental_userInterfaceStyle;
  obj1 = { children: jsx(ref(4489).Freeze, obj2) };
  obj2 = { freeze: flag };
  ({ placeholder: obj6.placeholder, children: obj6.children } = tmp7);
  return tmp18(ref1(4523), Object.assign(obj, tmp17, obj, tmp7, obj1));
};
