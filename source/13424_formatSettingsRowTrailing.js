// Module ID: 13424
// Function ID: 101931
// Name: formatSettingsRowTrailing
// Dependencies: []
// Exports: renderSettingItem, renderSettingSearchResultItem, renderSettingSearchResultPlaceholderItem

// Module 13424 (formatSettingsRowTrailing)
function formatSettingsRowTrailing(trailing) {
  if (null != trailing) {
    let tmp = trailing;
    if ("string" === typeof trailing) {
      const obj = { text: trailing };
      tmp = callback3(arg1(dependencyMap[12]).TableRow.TrailingText, obj);
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
    tmp = closure_17();
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
    obj.children = jsx(arg1(dependencyMap[17]).ClydeIcon, obj1);
    return jsx(View, obj);
  }
}
function ForceSwitchIcons(children) {
  const context = importAllResult.useContext(arg1(dependencyMap[22]).AccessibilityPreferencesContext);
  const arg1 = context;
  const items = [context];
  const value = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(context);
    obj["switchIconsEnabled"] = true;
    return obj;
  }, items);
  return callback3(arg1(dependencyMap[22]).AccessibilityPreferencesContext.Provider, { value, children: children.children });
}
function SettingSearchResultBreadcrumbs(breadcrumbs) {
  breadcrumbs = breadcrumbs.breadcrumbs;
  let tmp = null;
  if (0 !== breadcrumbs.length) {
    const obj = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, children: breadcrumbs.join(" \u2192 ") };
    tmp = callback3(arg1(dependencyMap[32]).Text, obj);
  }
  return tmp;
}
function SettingSearchResultIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  arg1(dependencyMap[38]);
  if (null == IconComponent) {
    let obj = {};
    obj = { width: tmp2 };
    obj.style = obj;
    let tmp6 = callback3(View, obj);
  } else {
    obj = { IconComponent };
    tmp6 = callback3(arg1(dependencyMap[12]).TableRow.Icon, obj);
  }
  return tmp6;
}
function RouteSettingSearchResult(setting) {
  let IconComponent;
  let breadcrumbs;
  let settingData;
  let title;
  ({ settingData, title } = setting);
  const arg1 = title;
  setting = setting.setting;
  const importDefault = setting;
  const index = setting.index;
  const dependencyMap = index;
  const total = setting.total;
  let closure_3 = total;
  let closure_6;
  ({ IconComponent, breadcrumbs } = setting);
  let obj = arg1(dependencyMap[13]);
  const stackNavigation = obj.useStackNavigation();
  let closure_4 = stackNavigation;
  const screen = settingData.screen;
  let closure_5 = screen;
  const usePreNavigationAction = settingData.usePreNavigationAction;
  let preNavigationAction;
  if (null != usePreNavigationAction) {
    preNavigationAction = usePreNavigationAction();
  }
  closure_6 = preNavigationAction;
  const items = [preNavigationAction, index, stackNavigation, screen, setting, title, total];
  const callback = importAllResult.useCallback(() => {
    let obj = { selected: setting };
    state.setState(obj);
    obj = { setting, title, route: screen.route, searchResultPosition: index, numSearchResults: total };
    const result = title(index[39]).trackSettingSearchResultPress(obj);
    const obj2 = title(index[39]);
    obj = { navigation: stackNavigation, screen, preNavigationAction };
    const result1 = title(index[14]).onRouteSettingOnPress(obj);
  }, items);
  obj = { label: title, onPress: callback, arrow: true, icon: callback3(SettingSearchResultIcon, { IconComponent }), subLabel: callback3(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1 };
  return callback3(arg1(dependencyMap[12]).TableRow, obj);
}
function PressableSettingSearchResult(setting) {
  let IconComponent;
  let breadcrumbs;
  let settingData;
  let title;
  ({ settingData, title } = setting);
  const arg1 = title;
  setting = setting.setting;
  const importDefault = setting;
  const index = setting.index;
  const dependencyMap = index;
  const total = setting.total;
  let closure_3 = total;
  const onPress = settingData.onPress;
  let closure_4 = onPress;
  const items = [setting, title, index, total, onPress];
  ({ IconComponent, breadcrumbs } = setting);
  const callback = importAllResult.useCallback(() => {
    let obj = title(index[39]);
    obj = { setting, title, searchResultPosition: index, numSearchResults: total };
    const result = obj.trackSettingSearchResultPress(obj);
    const result1 = title(index[40]).dismissGlobalKeyboard();
    onPress();
  }, items);
  const obj = { label: title, onPress: callback, icon: callback3(SettingSearchResultIcon, { IconComponent }), subLabel: callback3(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1, arrow: settingData.withArrow };
  return callback3(arg1(dependencyMap[12]).TableRow, obj);
}
function StaticSettingSearchResult(title) {
  let IconComponent;
  let breadcrumbs;
  title = title.title;
  const arg1 = title;
  const setting = title.setting;
  const importDefault = setting;
  const index = title.index;
  const dependencyMap = index;
  const total = title.total;
  let closure_3 = total;
  let closure_4;
  const useTrailing = title.settingData.useTrailing;
  let trailing;
  ({ IconComponent, breadcrumbs } = title);
  if (null != useTrailing) {
    trailing = useTrailing();
  }
  closure_4 = trailing;
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
    tmp5 = callback3(arg1(dependencyMap[12]).TableRow.TrailingText, obj);
  }
  obj.trailing = tmp5;
  obj.start = 0 === index;
  obj.end = index === total - 1;
  return callback3(arg1(dependencyMap[12]).TableRow, obj);
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
  return callback3(arg1(dependencyMap[12]).TableRow, obj);
}
let closure_3 = [];
let closure_4 = ["keyIdentifier"];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_12, NodeType: closure_13 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = arg1(dependencyMap[8]));
let obj1 = arg1(dependencyMap[9]);
let obj = {};
obj = { marginTop: importDefault(dependencyMap[10]).space.PX_16, marginBottom: importDefault(dependencyMap[10]).space.PX_8 };
obj.slider = obj;
obj.sliderTitle = { <string:1353458075>: null, <string:1722561866>: null };
obj.radioSettingHighlight = { top: 26 };
obj1 = { ONE_DAY: false, maxWidth: false, useInappropriateConversationBannerForChannel: false, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND };
obj.defaultIcon = obj1;
const obj2 = { width: arg1(dependencyMap[11]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[11]).AvatarSizes.REFRESH_MEDIUM_32], height: arg1(dependencyMap[11]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[11]).AvatarSizes.REFRESH_MEDIUM_32], borderRadius: importDefault(dependencyMap[10]).radii.xl, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED };
obj.placeholderAvatar = obj2;
const tmp3 = arg1(dependencyMap[8]);
obj.placeholderUsername = { height: 20, borderRadius: importDefault(dependencyMap[10]).radii.md, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED };
let closure_17 = obj1.createStyles(obj);
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
  const arg1 = screen;
  ({ useDescription, useIsDisabled, IconComponent } = arg0);
  let dependencyMap;
  ({ useTitle, variant, start, end } = arg0);
  let obj = arg1(dependencyMap[13]);
  const stackNavigation = obj.useStackNavigation();
  const importDefault = stackNavigation;
  let preNavigationAction;
  const title = useTitle();
  if (null != usePreNavigationAction) {
    preNavigationAction = usePreNavigationAction();
  }
  dependencyMap = preNavigationAction;
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
    tmp9 = callback3(arg1(dependencyMap[12]).TableRow.Icon, obj);
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
  return callback3(arg1(dependencyMap[12]).TableRow, obj);
});
let closure_19 = importAllResult.memo((useSelectedGuildId) => {
  let obj = Object.create(null);
  obj.useSelectedGuildId = 0;
  const merged = Object.assign(useSelectedGuildId, obj);
  const selectedGuildId = useSelectedGuildId.useSelectedGuildId();
  const arg1 = selectedGuildId;
  obj = arg1(dependencyMap[15]);
  const items = [closure_11];
  let closure_1 = obj.useStateFromStores(items, () => guild.getGuild(selectedGuildId));
  const tmp4 = function useGuildTitle(selectedGuildId) {
    const items = [closure_11];
    const stateFromStores = selectedGuildId(tmp4[15]).useStateFromStores(items, () => guild.getGuild(arg0));
    if (selectedGuildId === closure_12) {
      const intl2 = selectedGuildId(tmp4[16]).intl;
      let stringResult = intl2.string(selectedGuildId(tmp4[16]).t.OMVg25);
    } else {
      stringResult = undefined;
      if (null != stateFromStores) {
        stringResult = stateFromStores.name;
      }
      if (null == stringResult) {
        const intl = selectedGuildId(tmp4[16]).intl;
        stringResult = intl.string(selectedGuildId(tmp4[16]).t.XBwns+);
      }
    }
    return stringResult;
  }(selectedGuildId);
  const dependencyMap = tmp4;
  const items1 = [tmp4];
  obj = {};
  const callback = importAllResult.useCallback(() => tmp4, items1);
  const merged1 = Object.assign(merged);
  obj["type"] = constants.PRESSABLE;
  obj["useTitle"] = callback;
  obj["withArrow"] = true;
  obj["IconComponent"] = importAllResult.memo(() => {
    if (null == callback) {
      let tmp7 = callback2(closure_27, {});
    } else {
      const obj = {};
      const tmp4 = callback(tmp4[18]);
      obj.size = selectedGuildId(tmp4[18]).GuildIconSizes.SMALL_32;
      obj.guild = callback;
      tmp7 = callback2(tmp4, obj);
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
  let obj = arg1(dependencyMap[19]);
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
    tmp9 = callback3(arg1(dependencyMap[12]).TableRow.Icon, obj1);
  }
  obj.icon = tmp9;
  obj.onPress = onPress;
  obj.disabled = isDisabled;
  obj.trailing = formatSettingsRowTrailing(trailing);
  obj.start = start;
  obj.end = end;
  const items = [callback3(arg1(dependencyMap[12]).TableRow, obj), ];
  if (highlightSettingItem) {
    const obj2 = { start, end };
    highlightSettingItem = callback3(importDefault(dependencyMap[20]), obj2);
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
  let obj = arg1(dependencyMap[19]);
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
    tmp7 = callback3(arg1(dependencyMap[12]).TableRow.Icon, obj);
  }
  obj.icon = tmp7;
  obj.value = value;
  obj.variant = variant;
  obj.disabled = isDisabled;
  obj.onValueChange = onValueChange;
  obj.start = start;
  obj.end = end;
  const tmp6Result = callback3(arg1(dependencyMap[21]).TableSwitchRow, obj);
  const obj1 = {};
  let tmp14 = tmp6Result;
  if (true === hasIcon) {
    const obj2 = { children: tmp6Result };
    tmp14 = callback3(ForceSwitchIcons, obj2);
  }
  const items = [tmp14, ];
  if (highlightSettingItem) {
    const obj3 = { start, end };
    highlightSettingItem = callback3(importDefault(dependencyMap[20]), obj3);
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
  let obj = arg1(dependencyMap[19]);
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const title = useTitle();
  const value = useValue();
  const options = useOptions();
  let combined = value;
  if ("number" === typeof value) {
    const _HermesInternal = HermesInternal;
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
      return callback2(callback(closure_2[24]).TableRadioRow, obj, value.value);
    })
  };
  const items = [callback3(arg1(dependencyMap[23]).TableRadioGroup, obj, combined), ];
  if (highlightSettingItem) {
    const obj1 = { 1726238916: null, 607091733: null, style: tmp.radioSettingHighlight };
    highlightSettingItem = callback3(importDefault(dependencyMap[20]), obj1);
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
  let arg1;
  ({ setting, useTitle } = arg0);
  let obj = arg1(dependencyMap[19]);
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  let trailing;
  const title = useTitle();
  if (null != useTrailing) {
    trailing = useTrailing();
  }
  arg1 = trailing;
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
      trailing(closure_2[25]).copy(trailing);
      const obj = trailing(closure_2[25]);
      const result = trailing(closure_2[26]).presentCopiedToClipboard();
      const obj2 = trailing(closure_2[26]);
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
    tmp11 = callback3(arg1(dependencyMap[12]).TableRow.Icon, obj1);
  }
  obj.icon = tmp11;
  let tmp15 = null;
  if (null != trailing) {
    const obj2 = { text: trailing };
    tmp15 = callback3(arg1(dependencyMap[12]).TableRow.TrailingText, obj2);
  }
  obj.trailing = tmp15;
  obj.start = start;
  obj.end = end;
  const items1 = [callback3(arg1(dependencyMap[12]).TableRow, obj), ];
  if (highlightSettingItem) {
    const obj3 = { start, end };
    highlightSettingItem = callback3(importDefault(dependencyMap[20]), obj3);
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
  let obj = arg1(dependencyMap[19]);
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
  obj1.children = callback3(importDefault(dependencyMap[27]), obj2);
  obj.subLabel = callback3(View, obj1);
  const items = [callback3(arg1(dependencyMap[12]).TableRow, obj), ];
  if (highlightSettingItem) {
    const obj3 = { start, end };
    highlightSettingItem = callback3(importDefault(dependencyMap[20]), obj3);
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
  let importDefault;
  let dependencyMap;
  let closure_3;
  let closure_4;
  let callback;
  let callback2;
  let importAllResult;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  ({ start, end, useProps } = useTrailing);
  const title = useTrailing.useTitle();
  const props = useProps();
  const onSlidingComplete = props.onSlidingComplete;
  const arg1 = onSlidingComplete;
  const step = props.step;
  let num = 0.1;
  if (undefined !== step) {
    num = step;
  }
  importDefault = num;
  const minimumValue = props.minimumValue;
  let num2 = 0;
  ({ startIcon, endIcon } = props);
  if (undefined !== minimumValue) {
    num2 = minimumValue;
  }
  dependencyMap = num2;
  const maximumValue = props.maximumValue;
  let num3 = 1;
  if (undefined !== maximumValue) {
    num3 = maximumValue;
  }
  closure_3 = num3;
  ({ valueLabel, defaultValue } = props);
  let num4 = 1;
  if (undefined !== defaultValue) {
    num4 = defaultValue;
  }
  closure_4 = num4;
  const onValueChange = props.onValueChange;
  callback = onValueChange;
  const tmp3 = callback2(props, closure_3);
  callback2 = tmp3;
  const tmp4 = callback5();
  let obj = arg1(dependencyMap[15]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => lib.locale);
  const tmp6 = callback(importAllResult.useState(() => {
    let value = tmp3.value;
    if (null == value) {
      value = num4;
    }
    return value;
  }), 2);
  const first = tmp6[0];
  importAllResult = first;
  closure_8 = tmp6[1];
  const tmp8 = callback(importAllResult.useState(false), 2);
  closure_9 = tmp8[1];
  const items1 = [onValueChange];
  callback = importAllResult.useCallback(() => {
    lib(true);
  }, []);
  const callback1 = importAllResult.useCallback((arg0) => {
    callback(arg0);
    if (null != onValueChange) {
      onValueChange(arg0);
    }
  }, items1);
  closure_10 = callback1;
  const items2 = [onSlidingComplete];
  const items3 = [callback1, onSlidingComplete];
  callback2 = importAllResult.useCallback((arg0) => {
    lib(false);
    if (null != onSlidingComplete) {
      onSlidingComplete(arg0);
    }
  }, items2);
  const callback3 = importAllResult.useCallback((arg0) => {
    callback1(arg0);
    if (null != onSlidingComplete) {
      onSlidingComplete(arg0);
    }
  }, items3);
  closure_11 = callback3;
  const items4 = [num4, callback3];
  const items5 = [callback3, num3, num, first];
  const callback4 = importAllResult.useCallback(() => callback3(num4), items4);
  const items6 = [callback3, num2, num, first];
  const callback5 = importAllResult.useCallback(() => {
    callback3(Math.min(num3, first + num));
    const result = onSlidingComplete(num2[28]).triggerHapticFeedback(num(num2[29]).IMPACT_LIGHT);
  }, items5);
  let trailing;
  const callback6 = importAllResult.useCallback(() => {
    callback3(Math.max(num2, first - num));
    const result = onSlidingComplete(num2[28]).triggerHapticFeedback(num(num2[29]).IMPACT_LIGHT);
  }, items6);
  if (null != useTrailing) {
    trailing = useTrailing();
  }
  obj = { start, end, shadow: "none", border: "none" };
  obj = {};
  const obj1 = { "Bool(false)": true, "Bool(false)": "/assets/design/components/Icon/native/redesign/generated/images" };
  const obj2 = { style: tmp4.sliderTitle };
  const items7 = [callback3(arg1(dependencyMap[32]).Text, { variant: "text-md/semibold", children: title }), trailing];
  obj2.children = items7;
  const items8 = [callback4(closure_8, obj2), ];
  let tmp20Result = null != first;
  if (tmp20Result) {
    const obj3 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>" };
    if (null == formatPercentResult) {
      let obj6 = arg1(dependencyMap[33]);
      const formatPercentResult = obj6.formatPercent(stateFromStores, first);
    }
    obj3.children = formatPercentResult;
    tmp20Result = callback3(arg1(dependencyMap[32]).Text, obj3);
    const tmp20 = callback3;
  }
  items8[1] = tmp20Result;
  obj1.children = items8;
  const items9 = [callback4(arg1(dependencyMap[31]).Stack, obj1), , ];
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
  obj5["startIcon"] = callback3(arg1(dependencyMap[36]).PressableOpacity, { accessible: false, onPress: callback6, children: startIcon });
  obj5["endIcon"] = callback3(arg1(dependencyMap[36]).PressableOpacity, { accessible: false, onPress: callback5, children: endIcon });
  obj4.children = callback3(arg1(dependencyMap[35]).Slider, obj5);
  items9[1] = callback3(closure_8, obj4);
  obj6 = {};
  let tmp30 = !tmp8[0];
  if (tmp30) {
    tmp30 = first === num4;
  }
  obj6.disabled = tmp30;
  obj6.variant = "secondary";
  const intl = arg1(dependencyMap[16]).intl;
  obj6.text = intl.string(arg1(dependencyMap[16]).t.3b//lO);
  obj6.onPress = callback4;
  items9[2] = callback3(arg1(dependencyMap[37]).Button, obj6);
  obj.children = items9;
  obj.children = callback4(arg1(dependencyMap[31]).Stack, obj);
  return callback3(arg1(dependencyMap[30]).Card, obj);
});
const obj3 = { height: 20, borderRadius: importDefault(dependencyMap[10]).radii.md, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED };
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

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
