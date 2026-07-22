// Module ID: 4518
// Function ID: 39719
// Name: mapAppearanceToNativeProp
// Dependencies: []
// Exports: default

// Module 4518 (mapAppearanceToNativeProp)
let Platform;
let StyleSheet;
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
    obj.tabBarBackgroundColor = callback3(tabBarBackgroundColor);
    obj.tabBarShadowColor = callback3(tabBarShadowColor);
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
    obj.tabBarItemTitleFontColor = callback3(disabled.tabBarItemTitleFontColor);
    obj.tabBarItemIconColor = callback3(tabBarItemIconColor);
    obj.tabBarItemBadgeBackgroundColor = callback3(tabBarItemBadgeBackgroundColor);
    let StringResult;
    if (undefined !== tabBarItemTitleFontWeight) {
      const _String = String;
      StringResult = String(tabBarItemTitleFontWeight);
    }
    obj.tabBarItemTitleFontWeight = StringResult;
    return Object.assign({}, disabled, obj);
  }
}
let closure_3 = [637665283, 1875181571, -576389117, 1288175618, 1022033921, -330170365, -632067075, -1727772154, -1988410960, 793837572, 130892966, -444334079, 1004339202];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ Image: closure_7, Platform, StyleSheet, findNodeHandle: closure_8, processColor: closure_9 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const styles = StyleSheet.create({ fillParent: { type: "Masterpass tokenization is already in progress.", content: null, isShortcut: "MASTERPASS_ACCOUNT_TOKENIZATION_FAILED", position: "Could not tokenize user's Masterpass account." } });

export default function TabsScreen(onWillAppear) {
  let experimental_userInterfaceStyle;
  let freezeContents;
  let icon;
  let scrollEdgeAppearance;
  let scrollEdgeEffects;
  let selectedIcon;
  let standardAppearance;
  let style;
  const ref = React.useRef(null);
  const arg1 = ref;
  const ref1 = React.useRef(-1);
  const importDefault = ref1;
  const effect = React.useEffect(() => {
    if (null != ref.current) {
      const tmp5 = callback2(ref.current);
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
  const tmp4 = callback2(React.useState(false), 2);
  const first = tmp4[0];
  let closure_2 = tmp4[1];
  onWillAppear = onWillAppear.onWillAppear;
  let closure_3 = onWillAppear;
  const onDidAppear = onWillAppear.onDidAppear;
  let callback = onDidAppear;
  const onWillDisappear = onWillAppear.onWillDisappear;
  let callback2 = onWillDisappear;
  const onDidDisappear = onWillAppear.onDidDisappear;
  const React = onDidDisappear;
  const isFocused = onWillAppear.isFocused;
  ({ freezeContents, selectedIcon, scrollEdgeEffects } = onWillAppear);
  ({ icon, standardAppearance, scrollEdgeAppearance, experimental_userInterfaceStyle, style } = onWillAppear);
  const tmp7 = callback(onWillAppear, closure_3);
  let obj = arg1(closure_2[8]);
  let flag = false;
  if (obj.freezeEnabled()) {
    flag = freezeContents;
    if (undefined === freezeContents) {
      if (arg1(closure_2[9]).featureFlags.experiment.controlledBottomTabs) {
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
  callback = React.useCallback((arg0) => {
    ref(callback[5]).bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onWillAppear received");
    callback(true);
    if (null != onWillAppear) {
      onWillAppear(arg0);
    }
  }, items);
  const items2 = [onWillDisappear];
  const callback1 = React.useCallback((arg0) => {
    ref(closure_2[5]).bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onDidAppear received");
    if (null != onDidAppear) {
      onDidAppear(arg0);
    }
  }, items1);
  const items3 = [onDidDisappear];
  callback2 = React.useCallback((arg0) => {
    ref(closure_2[5]).bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onWillDisappear received");
    if (null != onWillDisappear) {
      onWillDisappear(arg0);
    }
  }, items2);
  const callback3 = React.useCallback((arg0) => {
    ref(callback[5]).bottomTabsDebugLog("TabsScreen [" + ref1.current + "] onDidDisappear received");
    callback(false);
    if (null != onDidDisappear) {
      onDidDisappear(arg0);
    }
  }, items3);
  let obj1 = arg1(closure_2[5]);
  const current = ref1.current;
  let num2 = -1;
  if (null != current) {
    num2 = current;
  }
  obj1.bottomTabsDebugLog("TabsScreen [" + num2 + "] render; tabKey: " + tmp7.tabKey + " shouldFreeze: " + flag + ", isFocused: " + undefined !== isFocused && isFocused + " nativeViewIsVisible: " + first);
  obj = { collapsable: false, style: items4, onWillAppear: callback, onDidAppear: callback1, onWillDisappear: callback2, onDidDisappear: callback3, isFocused: tmp6 };
  const items4 = [style, fillParent.fillParent];
  obj = {};
  const tmp17 = function parseIconsToNativeProps(icon) {
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
        const assetSource = closure_7.resolveAssetSource(android.imageSource);
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
  }(icon);
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
  obj1 = { children: jsx(arg1(closure_2[7]).Freeze, obj2) };
  const obj2 = { freeze: flag };
  ({ placeholder: obj6.placeholder, children: obj6.children } = tmp7);
  return tmp18(importDefault(closure_2[6]), Object.assign(obj, tmp17, obj, tmp7, obj1));
};
