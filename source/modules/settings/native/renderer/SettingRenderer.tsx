// Module ID: 13605
// Function ID: 104489
// Name: formatSettingsRowTrailing
// Dependencies: [57, 29, 31, 27, 1921, 13603, 1838, 10128, 33, 4130, 689, 1273, 5165, 1456, 13606, 566, 1212, 9776, 5513, 14625, 14626, 5502, 3849, 7654, 7653, 5490, 3830, 10745, 4099, 4100, 5167, 4541, 4126, 1827, 477, 13142, 4660, 4543, 3834, 5795, 1820, 2]
// Exports: renderSettingItem, renderSettingSearchResultItem, renderSettingSearchResultPlaceholderItem

// Module 13605 (formatSettingsRowTrailing)
import _slicedToArray from "_slicedToArray";
import IMPACT_LIGHT from "IMPACT_LIGHT";
import importAllResult from "Stack";
import { View } from "VolumeSlider";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";
import closure_11 from "_createForOfIteratorHelperLoose";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import jsxProd from "shortenAndLocalizeNumber";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function formatSettingsRowTrailing(trailing) {
  if (null != trailing) {
    let tmp = trailing;
    if ("string" === typeof trailing) {
      const obj = { text: trailing };
      tmp = callback3(require(5165) /* TableRowInner */.TableRow.TrailingText, obj);
    }
    return tmp;
  }
}
class GuildSelectDefaultIcon {
  constructor(arg0) {
    str = global.size;
    if (str === undefined) {
      str = "sm";
    }
    num = 32;
    tmp = c17();
    if ("xs" === str) {
      num = 24;
    }
    obj = {};
    obj = {};
    merged = Object.assign(tmp.defaultIcon);
    obj["width"] = num;
    obj["height"] = num;
    obj["borderRadius"] = num / 3;
    obj.style = obj;
    obj1 = { color: "white" };
    obj1.size = str;
    obj.children = jsx(require("ClydeIcon").ClydeIcon, obj1);
    return jsx(View, obj);
  }
}
function ForceSwitchIcons(children) {
  context = importAllResult.useContext(context(3849).AccessibilityPreferencesContext);
  const items = [context];
  const value = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(context);
    obj["switchIconsEnabled"] = true;
    return obj;
  }, items);
  return callback3(context(3849).AccessibilityPreferencesContext.Provider, { value, children: children.children });
}
function SettingSearchResultBreadcrumbs(breadcrumbs) {
  breadcrumbs = breadcrumbs.breadcrumbs;
  let tmp = null;
  if (0 !== breadcrumbs.length) {
    const obj = { variant: "text-xs/medium", color: "text-muted", children: breadcrumbs.join(" \u2192 ") };
    tmp = callback3(require(4126) /* Text */.Text, obj);
  }
  return tmp;
}
function SettingSearchResultIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  require(3834) /* map */;
  if (null == IconComponent) {
    let obj = {};
    obj = { width: tmp2 };
    obj.style = obj;
    let tmp6 = callback3(View, obj);
  } else {
    obj = { IconComponent };
    tmp6 = callback3(require(5165) /* TableRowInner */.TableRow.Icon, obj);
  }
  return tmp6;
}
function RouteSettingSearchResult(setting) {
  let IconComponent;
  let breadcrumbs;
  let settingData;
  let title;
  ({ settingData, title } = setting);
  setting = setting.setting;
  const index = setting.index;
  const total = setting.total;
  let preNavigationAction;
  ({ IconComponent, breadcrumbs } = setting);
  let obj = title(index[13]);
  const stackNavigation = obj.useStackNavigation();
  const screen = settingData.screen;
  const usePreNavigationAction = settingData.usePreNavigationAction;
  preNavigationAction = undefined;
  if (null != usePreNavigationAction) {
    preNavigationAction = usePreNavigationAction();
  }
  const items = [preNavigationAction, index, stackNavigation, screen, setting, title, total];
  const callback = importAllResult.useCallback(() => {
    let obj = { selected: setting };
    outer1_10.setState(obj);
    obj = { setting, title, route: screen.route, searchResultPosition: index, numSearchResults: total };
    const result = title(index[39]).trackSettingSearchResultPress(obj);
    const obj2 = title(index[39]);
    obj = { navigation: stackNavigation, screen, preNavigationAction };
    const result1 = title(index[14]).onRouteSettingOnPress(obj);
  }, items);
  obj = { label: title, onPress: callback, arrow: true, icon: callback3(SettingSearchResultIcon, { IconComponent }), subLabel: callback3(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1 };
  return callback3(title(index[12]).TableRow, obj);
}
function PressableSettingSearchResult(setting) {
  let IconComponent;
  let breadcrumbs;
  let settingData;
  let title;
  ({ settingData, title } = setting);
  setting = setting.setting;
  const index = setting.index;
  const total = setting.total;
  const onPress = settingData.onPress;
  const items = [setting, title, index, total, onPress];
  ({ IconComponent, breadcrumbs } = setting);
  const callback = importAllResult.useCallback(() => {
    let obj = title(index[39]);
    obj = { setting, title, searchResultPosition: index, numSearchResults: total };
    const result = obj.trackSettingSearchResultPress(obj);
    const result1 = title(index[40]).dismissGlobalKeyboard();
    onPress();
  }, items);
  let obj = { label: title, onPress: callback, icon: callback3(SettingSearchResultIcon, { IconComponent }), subLabel: callback3(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1, arrow: settingData.withArrow };
  return callback3(title(index[12]).TableRow, obj);
}
function StaticSettingSearchResult(title) {
  let IconComponent;
  let breadcrumbs;
  title = title.title;
  const setting = title.setting;
  const index = title.index;
  const total = title.total;
  let trailing;
  const useTrailing = title.settingData.useTrailing;
  trailing = undefined;
  ({ IconComponent, breadcrumbs } = title);
  if (null != useTrailing) {
    trailing = useTrailing();
  }
  const items = [index, setting, trailing, title, total];
  const callback = importAllResult.useCallback(() => {
    if (null != trailing) {
      let obj = title(index[39]);
      obj = { setting, title, searchResultPosition: index, numSearchResults: total };
      const result = obj.trackSettingSearchResultPress(obj);
      title(index[25]).copy(trailing);
      const obj3 = title(index[25]);
      const result1 = title(index[26]).presentCopiedToClipboard();
      const obj4 = title(index[26]);
    }
  }, items);
  let obj = { label: title };
  let tmp4;
  if (null != trailing) {
    tmp4 = callback;
  }
  obj.onPress = tmp4;
  obj.icon = callback3(SettingSearchResultIcon, { IconComponent });
  obj.subLabel = callback3(SettingSearchResultBreadcrumbs, { breadcrumbs });
  let tmp5 = null;
  if (null != trailing) {
    obj = { text: trailing };
    tmp5 = callback3(title(index[12]).TableRow.TrailingText, obj);
  }
  obj.trailing = tmp5;
  obj.start = 0 === index;
  obj.end = index === total - 1;
  return callback3(title(index[12]).TableRow, obj);
}
function SettingSearchResultPlaceholder(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  const tmp = callback5();
  let obj = { start, end };
  const items = [tmp.placeholderUsername, callback(importAllResult.useState(() => ({ width: `${10 + 80 * Math.random() | 0}%` })), 1)[0]];
  obj.label = callback3(View, { style: items });
  obj = { style: tmp.placeholderAvatar };
  obj.icon = callback3(View, obj);
  return callback3(require(5165) /* TableRowInner */.TableRow, obj);
}
let closure_3 = ["onSlidingComplete", "step", "startIcon", "endIcon", "minimumValue", "maximumValue", "valueLabel", "defaultValue", "onValueChange"];
let closure_4 = ["settingData"];
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_12, NodeType: closure_13 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let obj = {};
obj = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.slider = obj;
obj.sliderTitle = { flexDirection: "row", justifyContent: "space-between" };
obj.radioSettingHighlight = { top: 26 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
obj.defaultIcon = _createForOfIteratorHelperLoose;
let obj2 = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], height: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.REFRESH_MEDIUM_32], borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
obj.placeholderAvatar = obj2;
obj.placeholderUsername = { height: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = importAllResult.memo((arg0) => {
  let IconComponent;
  let end;
  let screen;
  let start;
  let useDescription;
  let useIsDisabled;
  let usePreNavigationAction;
  let useTitle;
  let useTrailing;
  let variant;
  ({ useTrailing, usePreNavigationAction, screen } = arg0);
  ({ useDescription, useIsDisabled, IconComponent } = arg0);
  let preNavigationAction;
  ({ useTitle, variant, start, end } = arg0);
  let obj = screen(preNavigationAction[13]);
  const stackNavigation = obj.useStackNavigation();
  preNavigationAction = undefined;
  const title = useTitle();
  if (null != usePreNavigationAction) {
    preNavigationAction = usePreNavigationAction();
  }
  let description;
  if (null != useDescription) {
    description = useDescription();
  }
  let isDisabled;
  if (null != useIsDisabled) {
    isDisabled = useIsDisabled();
  }
  let trailing;
  if (null != useTrailing) {
    trailing = useTrailing();
  }
  const items = [stackNavigation, screen, preNavigationAction];
  const callback = importAllResult.useCallback(() => {
    let obj = screen(preNavigationAction[14]);
    obj = { navigation: stackNavigation, screen, preNavigationAction };
    const result = obj.onRouteSettingOnPress(obj);
  }, items);
  obj = { label: title, subLabel: description, disabled: isDisabled, arrow: true, variant };
  let tmp9 = null;
  if (null != IconComponent) {
    obj = { IconComponent };
    tmp9 = callback3(screen(preNavigationAction[12]).TableRow.Icon, obj);
  }
  obj.icon = tmp9;
  let tmp13 = null;
  if (null != trailing) {
    tmp13 = formatSettingsRowTrailing(trailing);
  }
  obj.trailing = tmp13;
  obj.onPress = callback;
  obj.start = start;
  obj.end = end;
  return callback3(screen(preNavigationAction[12]).TableRow, obj);
});
let closure_19 = importAllResult.memo((useSelectedGuildId) => {
  let obj = Object.create(null);
  obj.useSelectedGuildId = 0;
  const merged = Object.assign(useSelectedGuildId, obj);
  const selectedGuildId = useSelectedGuildId.useSelectedGuildId();
  obj = selectedGuildId(566);
  let items = [closure_11];
  let closure_1 = obj.useStateFromStores(items, () => outer1_11.getGuild(selectedGuildId));
  let tmp4 = (function useGuildTitle(selectedGuildId) {
    let closure_0 = selectedGuildId;
    const items = [outer1_11];
    const stateFromStores = selectedGuildId(tmp4[15]).useStateFromStores(items, () => outer2_11.getGuild(closure_0));
    if (selectedGuildId === outer1_12) {
      const intl2 = selectedGuildId(tmp4[16]).intl;
      let stringResult = intl2.string(selectedGuildId(tmp4[16]).t.OMVg25);
    } else {
      stringResult = undefined;
      if (null != stateFromStores) {
        stringResult = stateFromStores.name;
      }
      if (null == stringResult) {
        const intl = selectedGuildId(tmp4[16]).intl;
        stringResult = intl.string(selectedGuildId(tmp4[16]).t["XBwns+"]);
      }
    }
    return stringResult;
  })(selectedGuildId);
  const dependencyMap = tmp4;
  const items1 = [tmp4];
  obj = {};
  const callback = importAllResult.useCallback(() => closure_2, items1);
  const merged1 = Object.assign(merged);
  obj["type"] = constants.PRESSABLE;
  obj["useTitle"] = callback;
  obj["withArrow"] = true;
  obj["IconComponent"] = importAllResult.memo(() => {
    if (null == callback) {
      let tmp7 = outer1_14(outer1_27, {});
    } else {
      const obj = {};
      tmp4 = callback(tmp4[18]);
      obj.size = selectedGuildId(tmp4[18]).GuildIconSizes.SMALL_32;
      obj.guild = callback;
      tmp7 = outer1_14(tmp4, obj);
    }
    return tmp7;
  });
  return callback3(closure_20, obj);
});
let closure_20 = importAllResult.memo((arg0) => {
  let IconComponent;
  let end;
  let onPress;
  let setting;
  let start;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useTrailing;
  let variant;
  let withArrow;
  ({ useDescription, useIsDisabled, useTrailing, variant, start, end, IconComponent } = arg0);
  ({ setting, onPress, useTitle, withArrow } = arg0);
  let obj = require(14625) /* useHighlightSettingItem */;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  let description;
  const title = useTitle();
  if (null != useDescription) {
    description = useDescription();
  }
  let isDisabled;
  if (null != useIsDisabled) {
    isDisabled = useIsDisabled();
  }
  let trailing;
  if (null != useTrailing) {
    trailing = useTrailing();
  }
  obj = {};
  obj = { label: title, subLabel: description, arrow: withArrow, variant };
  let tmp9 = null;
  if (null != IconComponent) {
    const obj1 = { IconComponent, variant };
    tmp9 = callback3(require(5165) /* TableRowInner */.TableRow.Icon, obj1);
  }
  obj.icon = tmp9;
  obj.onPress = onPress;
  obj.disabled = isDisabled;
  obj.trailing = formatSettingsRowTrailing(trailing);
  obj.start = start;
  obj.end = end;
  const items = [callback3(require(5165) /* TableRowInner */.TableRow, obj), ];
  if (highlightSettingItem) {
    const obj2 = { start, end };
    highlightSettingItem = callback3(importDefault(14626), obj2);
  }
  items[1] = highlightSettingItem;
  obj.children = items;
  return closure_16(closure_15, obj);
});
let closure_21 = importAllResult.memo((arg0) => {
  let IconComponent;
  let end;
  let hasIcon;
  let onValueChange;
  let setting;
  let start;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useValue;
  let variant;
  ({ useDescription, useIsDisabled, variant, start, end, IconComponent } = arg0);
  ({ setting, onValueChange, useTitle, useValue, hasIcon } = arg0);
  let obj = require(14625) /* useHighlightSettingItem */;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  let description;
  const value = useValue();
  if (null != useDescription) {
    description = useDescription();
  }
  let isDisabled;
  if (null != useIsDisabled) {
    isDisabled = useIsDisabled();
  }
  obj = { label: title, subLabel: description };
  let tmp7 = null;
  if (null != IconComponent) {
    obj = { IconComponent, variant };
    tmp7 = callback3(require(5165) /* TableRowInner */.TableRow.Icon, obj);
  }
  obj.icon = tmp7;
  obj.value = value;
  obj.variant = variant;
  obj.disabled = isDisabled;
  obj.onValueChange = onValueChange;
  obj.start = start;
  obj.end = end;
  const tmp6Result = callback3(require(5502) /* TableSwitchRow */.TableSwitchRow, obj);
  const obj1 = {};
  let tmp14 = tmp6Result;
  if (true === hasIcon) {
    const obj2 = { children: tmp6Result };
    tmp14 = callback3(ForceSwitchIcons, obj2);
  }
  const items = [tmp14, ];
  if (highlightSettingItem) {
    const obj3 = { start, end };
    highlightSettingItem = callback3(importDefault(14626), obj3);
  }
  items[1] = highlightSettingItem;
  obj1.children = items;
  return closure_16(closure_15, obj1);
});
let closure_22 = importAllResult.memo((arg0) => {
  let onValueChange;
  let setting;
  let useOptions;
  let useTitle;
  let useValue;
  ({ setting, useTitle, useValue, useOptions, onValueChange } = arg0);
  let obj = require(14625) /* useHighlightSettingItem */;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  const value = useValue();
  const options = useOptions();
  let combined = value;
  if ("number" === typeof value) {
    let _HermesInternal = HermesInternal;
    combined = "" + value;
  }
  obj = {};
  obj = {
    title,
    defaultValue: combined,
    onChange: onValueChange,
    hasIcons: false,
    children: options.map((value) => {
      if ("number" === typeof value.value) {
        const _HermesInternal = HermesInternal;
        let combined = "" + value.value;
      } else {
        combined = value.value;
      }
      const obj = { value: combined };
      ({ label: obj.label, subLabel: obj.subLabel, disabled: obj.disabled } = value);
      return outer1_14(outer1_0(outer1_2[24]).TableRadioRow, obj, value.value);
    })
  };
  const items = [callback3(require(7654) /* context */.TableRadioGroup, obj, combined), ];
  if (highlightSettingItem) {
    const obj1 = { start: true, end: true, style: tmp.radioSettingHighlight };
    highlightSettingItem = callback3(importDefault(14626), obj1);
  }
  items[1] = highlightSettingItem;
  obj.children = items;
  return closure_16(closure_15, obj);
});
let closure_23 = importAllResult.memo((arg0) => {
  let IconComponent;
  let end;
  let setting;
  let start;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useTrailing;
  let variant;
  ({ variant, useTrailing, useIsDisabled, useDescription, start, end, IconComponent } = arg0);
  let trailing;
  ({ setting, useTitle } = arg0);
  let obj = trailing(14625);
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  trailing = undefined;
  const title = useTitle();
  if (null != useTrailing) {
    trailing = useTrailing();
  }
  let description;
  if (null != useDescription) {
    description = useDescription();
  }
  let isDisabled;
  if (null != useIsDisabled) {
    isDisabled = useIsDisabled();
  }
  const items = [trailing];
  obj = {};
  const callback = importAllResult.useCallback(() => {
    if (null != trailing) {
      trailing(outer1_2[25]).copy(trailing);
      const obj = trailing(outer1_2[25]);
      const result = trailing(outer1_2[26]).presentCopiedToClipboard();
      const obj2 = trailing(outer1_2[26]);
    }
  }, items);
  obj = { label: title, subLabel: description };
  let tmp10 = null;
  if (null != trailing) {
    tmp10 = callback;
  }
  obj.onPress = tmp10;
  obj.variant = variant;
  obj.disabled = isDisabled;
  let tmp11 = null;
  if (null != IconComponent) {
    const obj1 = { IconComponent, variant };
    tmp11 = callback3(trailing(5165).TableRow.Icon, obj1);
  }
  obj.icon = tmp11;
  let tmp15 = null;
  if (null != trailing) {
    let obj2 = { text: trailing };
    tmp15 = callback3(trailing(5165).TableRow.TrailingText, obj2);
  }
  obj.trailing = tmp15;
  obj.start = start;
  obj.end = end;
  const items1 = [callback3(trailing(5165).TableRow, obj), ];
  if (highlightSettingItem) {
    const obj3 = { start, end };
    highlightSettingItem = callback3(importDefault(14626), obj3);
  }
  items1[1] = highlightSettingItem;
  obj.children = items1;
  return closure_16(closure_15, obj);
});
let closure_24 = importAllResult.memo((arg0) => {
  let end;
  let maximum;
  let onValueChange;
  let setting;
  let start;
  let useTitle;
  let useValue;
  ({ useValue, start, end } = arg0);
  ({ setting, useTitle, onValueChange, maximum } = arg0);
  let obj = require(14625) /* useHighlightSettingItem */;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  let value;
  const title = useTitle();
  if (null != useValue) {
    value = useValue();
  }
  obj = {};
  obj = { label: title, start, end };
  const obj1 = { style: callback5().slider };
  const obj2 = { value, maxVolume: maximum, onValueChange };
  obj1.children = callback3(importDefault(10745), obj2);
  obj.subLabel = callback3(View, obj1);
  const items = [callback3(require(5165) /* TableRowInner */.TableRow, obj), ];
  if (highlightSettingItem) {
    const obj3 = { start, end };
    highlightSettingItem = callback3(importDefault(14626), obj3);
  }
  items[1] = highlightSettingItem;
  obj.children = items;
  return closure_16(closure_15, obj);
});
let closure_25 = importAllResult.memo((useTrailing) => {
  let defaultValue;
  let end;
  let endIcon;
  let start;
  let startIcon;
  let useProps;
  let valueLabel;
  useTrailing = useTrailing.useTrailing;
  let num;
  let num2;
  let num3;
  let num4;
  let onValueChange;
  let callback2;
  let first;
  let closure_8;
  let _isNativeReflectConstruct;
  let callback1;
  let callback3;
  ({ start, end, useProps } = useTrailing);
  const title = useTrailing.useTitle();
  const props = useProps();
  const onSlidingComplete = props.onSlidingComplete;
  const step = props.step;
  num = 0.1;
  if (undefined !== step) {
    num = step;
  }
  const minimumValue = props.minimumValue;
  num2 = 0;
  ({ startIcon, endIcon } = props);
  if (undefined !== minimumValue) {
    num2 = minimumValue;
  }
  const maximumValue = props.maximumValue;
  num3 = 1;
  if (undefined !== maximumValue) {
    num3 = maximumValue;
  }
  ({ valueLabel, defaultValue } = props);
  num4 = 1;
  if (undefined !== defaultValue) {
    num4 = defaultValue;
  }
  onValueChange = props.onValueChange;
  const tmp3 = callback2(props, num3);
  callback2 = tmp3;
  const tmp4 = callback5();
  let obj = onSlidingComplete(num2[15]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => lib.locale);
  const tmp6 = onValueChange(first.useState(() => {
    let value = _undefined.value;
    if (null == value) {
      value = num4;
    }
    return value;
  }), 2);
  first = tmp6[0];
  closure_8 = tmp6[1];
  const tmp8 = onValueChange(first.useState(false), 2);
  _isNativeReflectConstruct = tmp8[1];
  const items1 = [onValueChange];
  const callback = first.useCallback(() => {
    lib(true);
  }, []);
  callback1 = first.useCallback((arg0) => {
    callback(arg0);
    if (null != onValueChange) {
      onValueChange(arg0);
    }
  }, items1);
  const items2 = [onSlidingComplete];
  const items3 = [callback1, onSlidingComplete];
  callback2 = first.useCallback((arg0) => {
    lib(false);
    if (null != onSlidingComplete) {
      onSlidingComplete(arg0);
    }
  }, items2);
  callback3 = first.useCallback((arg0) => {
    callback1(arg0);
    if (null != onSlidingComplete) {
      onSlidingComplete(arg0);
    }
  }, items3);
  const items4 = [num4, callback3];
  const items5 = [callback3, num3, num, first];
  const callback4 = first.useCallback(() => callback3(num4), items4);
  const items6 = [callback3, num2, num, first];
  callback5 = first.useCallback(() => {
    callback3(Math.min(num3, first + num));
    const result = onSlidingComplete(num2[28]).triggerHapticFeedback(num(num2[29]).IMPACT_LIGHT);
  }, items5);
  let trailing;
  const callback6 = first.useCallback(() => {
    callback3(Math.max(num2, first - num));
    const result = onSlidingComplete(num2[28]).triggerHapticFeedback(num(num2[29]).IMPACT_LIGHT);
  }, items6);
  if (null != useTrailing) {
    trailing = useTrailing();
  }
  obj = { start, end, shadow: "none", border: "none" };
  obj = {};
  const obj1 = { direction: "horizontal", justify: "space-between" };
  const obj2 = { style: tmp4.sliderTitle };
  const items7 = [callback3(onSlidingComplete(num2[32]).Text, { variant: "text-md/semibold", children: title }), trailing];
  obj2.children = items7;
  const items8 = [callback4(closure_8, obj2), ];
  let tmp20Result = null != first;
  if (tmp20Result) {
    const obj3 = { variant: "text-sm/medium", color: "text-muted" };
    if (null == formatPercentResult) {
      let obj6 = onSlidingComplete(num2[33]);
      formatPercentResult = obj6.formatPercent(stateFromStores, first);
    }
    obj3.children = formatPercentResult;
    tmp20Result = callback3(onSlidingComplete(num2[32]).Text, obj3);
    const tmp20 = callback3;
  }
  items8[1] = tmp20Result;
  obj1.children = items8;
  const items9 = [callback4(onSlidingComplete(num2[31]).Stack, obj1), , ];
  const obj4 = {};
  let slider;
  if (obj9.isAndroid()) {
    slider = tmp4.slider;
  }
  obj4.style = slider;
  const obj5 = {};
  const merged = Object.assign(tmp3);
  obj5["accessibilityLabel"] = title;
  obj5["step"] = num;
  obj5["onValueChange"] = callback1;
  obj5["value"] = first;
  obj5["minimumValue"] = num2;
  obj5["maximumValue"] = num3;
  obj5["onSlidingStart"] = callback;
  obj5["onSlidingComplete"] = callback2;
  obj5["startIcon"] = callback3(onSlidingComplete(num2[36]).PressableOpacity, { accessible: false, onPress: callback6, children: startIcon });
  obj5["endIcon"] = callback3(onSlidingComplete(num2[36]).PressableOpacity, { accessible: false, onPress: callback5, children: endIcon });
  obj4.children = callback3(onSlidingComplete(num2[35]).Slider, obj5);
  items9[1] = callback3(closure_8, obj4);
  obj6 = {};
  let tmp30 = !tmp8[0];
  if (tmp30) {
    tmp30 = first === num4;
  }
  obj6.disabled = tmp30;
  obj6.variant = "secondary";
  const intl = onSlidingComplete(num2[16]).intl;
  obj6.text = intl.string(onSlidingComplete(num2[16]).t["3b//lO"]);
  obj6.onPress = callback4;
  items9[2] = callback3(onSlidingComplete(num2[37]).Button, obj6);
  obj.children = items9;
  obj.children = callback4(onSlidingComplete(num2[31]).Stack, obj);
  return callback3(onSlidingComplete(num2[30]).Card, obj);
});
let obj3 = { height: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
let result = require("result").fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

export { GuildSelectDefaultIcon };
export const renderSettingItem = function renderSettingItem(item) {
  let end;
  let setting;
  let settingData;
  let start;
  ({ setting, settingData, start, end } = item);
  const type = settingData.type;
  if (constants.GUILD_SELECTOR === type) {
    let obj = {};
    const merged = Object.assign(settingData);
    obj["setting"] = setting;
    obj["start"] = start;
    obj["end"] = end;
    return callback3(closure_19, obj);
  } else if (constants.ROUTE === type) {
    obj = {};
    const merged1 = Object.assign(settingData);
    obj["start"] = start;
    obj["end"] = end;
    return callback3(closure_18, obj);
  } else if (constants.PRESSABLE === type) {
    const obj1 = {};
    const merged2 = Object.assign(settingData);
    obj1["start"] = start;
    obj1["end"] = end;
    obj1["setting"] = setting;
    return callback3(closure_20, obj1);
  } else if (constants.TOGGLE === type) {
    const obj2 = {};
    const merged3 = Object.assign(settingData);
    obj2["start"] = start;
    obj2["end"] = end;
    obj2["setting"] = setting;
    return callback3(closure_21, obj2);
  } else if (constants.STATIC === type) {
    const obj3 = {};
    const merged4 = Object.assign(settingData);
    obj3["start"] = start;
    obj3["end"] = end;
    obj3["setting"] = setting;
    return callback3(closure_23, obj3);
  } else if (constants.VOLUME_SLIDER === type) {
    const obj4 = {};
    const merged5 = Object.assign(settingData);
    obj4["start"] = start;
    obj4["end"] = end;
    obj4["setting"] = setting;
    return callback3(closure_24, obj4);
  } else if (constants.RADIO === type) {
    const obj5 = {};
    const merged6 = Object.assign(settingData);
    obj5["setting"] = setting;
    return callback3(closure_22, obj5);
  } else if (constants.SLIDER === type) {
    obj = {};
    const merged7 = Object.assign(settingData);
    obj["start"] = start;
    obj["end"] = end;
    obj["setting"] = setting;
    return callback3(closure_25, obj);
  }
};
export const renderSettingSearchResultItem = function renderSettingSearchResultItem(item) {
  const settingData = item.settingData;
  const tmp = callback2(item, closure_4);
  const type = settingData.type;
  if (constants.ROUTE === type) {
    let obj = { settingData };
    const merged = Object.assign(tmp);
    return callback3(RouteSettingSearchResult, obj);
  } else if (constants.PRESSABLE === type) {
    obj = { settingData };
    const merged1 = Object.assign(tmp);
    return callback3(PressableSettingSearchResult, obj);
  } else if (constants.STATIC === type) {
    obj = { settingData };
    const merged2 = Object.assign(tmp);
    return callback3(StaticSettingSearchResult, obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[SettingRenderer] Found unsupported renderer type for setting: " + item.setting);
    throw error;
  }
};
export const renderSettingSearchResultPlaceholderItem = function renderSettingSearchResultPlaceholderItem(item) {
  return callback3(SettingSearchResultPlaceholder, { start: item.start, end: item.end });
};
