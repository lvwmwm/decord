// Module ID: 16578
// Function ID: 16579
// Name: SettingRenderer
// Dependencies: [32, 109, 19, 17, 2062, 16577, 4885, 11540, 21, 5014, 575, 1187, 6975, 504, 1497, 16579, 1113, 10685, 6957, 16581, 16582, 5624, 7370, 7369, 5028, 7058, 7061, 7358, 5711, 11948, 5260, 5261, 6977, 6027, 1895, 1375, 15853, 6980, 5634, 5596, 16583, 1888, 2]
// Exports: renderSettingItem, renderSettingSearchResultItem, renderSettingSearchResultPlaceholderItem

// Module 16578 (SettingRenderer)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1888 */;
import react2 from "react" /* 5028 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5261 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import GuildIcon from "GuildIcon" /* 6957 */;
import TableRadioRow from "TableRadioRow" /* 7061 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
import FormSwitch from "FormSwitch" /* 7370 */;
import ClydeIcon from "ClydeIcon" /* 10685 */;
import VolumeSliderDefault from "VolumeSlider" /* 11948 */;
import SettingRendererUtils from "SettingRendererUtils" /* 16579 */;
import useHighlightSettingItem from "useHighlightSettingItem" /* 16581 */;
import SettingListItemHighlightDefault from "SettingListItemHighlight" /* 16582 */;
import settings_tracking_Tracking from "settings/tracking/Tracking" /* 16583 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16577 */;
import GuildStore from "GuildStore" /* 4885 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11540 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let dependencyMap;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let obj3;
let obj4;
let size;
let tmp;
let tmp2;
const TableRow2 = tmp(6975);
const TableRadioGroup2 = tmp2(7058);
class GuildSelectDefaultIcon {
  constructor(size) {
    let obj2;
    let str = size.size;
    if (str === undefined) {
      str = "sm";
    }
    let num = 32;
    const tmp = closure_17();
    if ("xs" === str) {
      num = 24;
    }
    const obj = { style: obj2, children: authStore3(ClydeIcon.ClydeIcon, { color: "white", size: str }) };
    obj2 = { width: num, height: num, borderRadius: num / 3 };
    const merged = Object.assign(tmp.defaultIcon);
    return authStore3(View, obj);
  }
}
function DisabledActionDescriptionWithLink(children) {
  let description;
  let descriptionColor;
  let descriptionVariant;
  let items;
  ({ description, descriptionVariant, descriptionColor } = children);
  const tmp4 = authStore3(Text_Text.Text, { variant: "text-xs/medium", color: "text-link", children: children.disabledActionLabel });
  const tmp = authStore3;
  if (null == description) {
    return tmp4;
  } else {
    let tmpResult = description;
    if (!react.isValidElement(description)) {
      const Text = Text_Text.Text;
      if (descriptionVariant == null) {
        descriptionVariant = "text-xs/medium";
      }
      const obj = { variant: descriptionVariant, color: descriptionColor, children: description };
      if (descriptionColor == null) {
        descriptionColor = "text-subtle";
      }
      tmpResult = tmp(Text, obj);
    }
    const obj2 = { children: items };
    items = [tmp4, tmpResult];
    return authStore4(View, obj2);
  }
}
function ForceSwitchIcons(children) {
  children = children.children;
  const context = react.useContext(react2.AccessibilityPreferencesContext);
  const items = [context];
  const value = react.useMemo(() => {
    const obj = { switchIconsEnabled: true };
    const merged = Object.assign(context);
    return obj;
  }, items);
  return authStore3(react2.AccessibilityPreferencesContext.Provider, { value, children });
}
function SettingSearchResultBreadcrumbs(breadcrumbs) {
  breadcrumbs = breadcrumbs.breadcrumbs;
  let tmp = null;
  if (0 !== breadcrumbs.length) {
    const obj = { variant: "text-xs/medium", color: "text-muted", children: breadcrumbs.join(" \u2192 ") };
    const Text = Text_Text.Text;
    tmp = authStore3(Text, obj);
  }
  return tmp;
}
function SettingSearchResultIcon(IconComponent) {
  let obj3;
  let tmp6;
  IconComponent = IconComponent.IconComponent;
  useToken;
  if (null == IconComponent) {
    const obj2 = { style: obj3 };
    obj3 = { width: tmp4 };
    tmp6 = authStore3(View, obj2);
  } else {
    const obj = { IconComponent };
    tmp6 = authStore3(TableRow2.TableRow.Icon, obj);
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
  ({ IconComponent, breadcrumbs } = setting);
  let obj = title(index[14]);
  const stackNavigation = obj.useStackNavigation();
  const screen = settingData.screen;
  const usePreNavigationAction = settingData.usePreNavigationAction;
  let preNavigationAction;
  const tmp = title;
  const tmp2 = index;
  if (usePreNavigationAction != null) {
    preNavigationAction = usePreNavigationAction();
  }
  const items = [preNavigationAction, index, stackNavigation, screen, setting, title, total];
  const callback = react.useCallback(() => {
    const obj = { selected: setting };
    UserSettingSearchStore.setState(obj);
    const obj2 = settings_tracking_Tracking;
    const obj3 = { setting, title, route: screen.route, searchResultPosition: index, numSearchResults: total };
    const result = obj2.trackSettingSearchResultPress(obj3);
    const obj4 = SettingRendererUtils;
    const obj5 = { navigation: stackNavigation, screen, preNavigationAction };
    const result1 = obj4.onRouteSettingOnPress(obj5);
  }, items);
  let obj2 = { label: title, onPress: callback, arrow: true, icon: closure_14(SettingSearchResultIcon, { IconComponent }), subLabel: closure_14(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1 };
  const TableRow = tmp(tmp2[12]).TableRow;
  return closure_14(TableRow, obj2);
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
  const withArrow = settingData.withArrow;
  const callback = react.useCallback(() => {
    const obj = settings_tracking_Tracking;
    const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
    const result = obj.trackSettingSearchResultPress(obj2);
    const obj3 = KeyboardManagerUtils;
    const result1 = obj3.dismissGlobalKeyboard();
    onPress();
  }, items);
  let obj = { label: title, onPress: callback, icon: closure_14(SettingSearchResultIcon, { IconComponent }), subLabel: closure_14(SettingSearchResultBreadcrumbs, { breadcrumbs }), start: 0 === index, end: index === total - 1, arrow: withArrow };
  const TableRow = title(index[12]).TableRow;
  return closure_14(TableRow, obj);
}
function StaticSettingSearchResult(title) {
  let IconComponent;
  let breadcrumbs;
  let tmp3Result;
  let tmp6;
  title = title.title;
  const setting = title.setting;
  const index = title.index;
  const total = title.total;
  const useTrailing = title.settingData.useTrailing;
  let trailing;
  ({ IconComponent, breadcrumbs } = title);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const items = [index, setting, trailing, title, total];
  const callback = react.useCallback(() => {
    if (null != trailing) {
      const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
      const obj = settings_tracking_Tracking;
      const result = obj.trackSettingSearchResultPress(obj2);
      const obj3 = ClipboardUtils;
      obj3.copy(tmp);
      const obj4 = ToastUtils;
      const result1 = obj4.presentCopiedToClipboard();
    }
  }, items);
  let obj = { label: title, onPress: tmp6, icon: tmp3(SettingSearchResultIcon, { IconComponent }), subLabel: tmp3(SettingSearchResultBreadcrumbs, { breadcrumbs }), trailing: tmp3Result, start: 0 === index, end: index === total - 1 };
  tmp6 = undefined;
  const TableRow = title(index[12]).TableRow;
  const tmp4 = title;
  const tmp5 = index;
  if (null != trailing) {
    tmp6 = callback;
  }
  tmp3Result = null;
  if (null != trailing) {
    let obj2 = { text: trailing };
    tmp3Result = tmp3(tmp4(tmp5[12]).TableRow.TrailingText, obj2);
  }
  return closure_14(TableRow, obj);
}
function SettingSearchResultPlaceholder(arg0) {
  let end;
  let items;
  let obj2;
  let obj3;
  let start;
  ({ start, end } = arg0);
  const tmp = closure_17();
  let obj = { start, end, label: authStore3(View, obj2), icon: authStore3(View, obj3) };
  obj2 = { style: items };
  items = [
    tmp.placeholderUsername,
    _slicedToArray(react.useState(() => {
      const obj = { width: `${10 + 80 * Math.random() | 0}%` };
      return obj;
    }), 1)[0]
  ];
  const TableRow = TableRow2.TableRow;
  obj3 = { style: tmp.placeholderAvatar };
  return authStore3(TableRow, obj);
}
let closure_3 = ["onChangeEnd", "step", "startIcon", "endIcon", "minValue", "maxValue", "valueLabel", "defaultValue", "onChange"];
let closure_4 = ["settingData"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
const View = react_native.View;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_12, NodeType: map1 } = SettingRendererConstants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { slider: obj2, sliderTitle: { flexDirection: "row", justifyContent: "space-between" }, radioSettingHighlight: { top: 26 }, defaultIcon: obj3, placeholderAvatar: size, placeholderUsername: obj4 };
obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
size = { width: native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32], height: native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32], borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj4 = { height: 20, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_17 = createStyles(obj);
let closure_18 = react.memo(function RouteSetting(arg0) {
  let IconComponent;
  let accessibilityHint;
  let end;
  let onPress;
  let screen;
  let start;
  let tmp15Result;
  let tmp17;
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
  let obj = screen(preNavigationAction[14]);
  const stackNavigation = obj.useStackNavigation();
  let obj2 = screen(preNavigationAction[13]);
  const items = [LocaleStore];
  const stateFromStores = obj2.useStateFromStores(items, () => callback.locale);
  preNavigationAction = undefined;
  const title = useTitle();
  if (usePreNavigationAction != null) {
    preNavigationAction = usePreNavigationAction();
  }
  let description;
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  let trailing;
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const items1 = [stackNavigation, screen, preNavigationAction];
  let tmp11;
  const callback = react.useCallback(() => {
    const obj = SettingRendererUtils;
    const obj2 = { navigation: stackNavigation, screen, preNavigationAction };
    const result = obj.onRouteSettingOnPress(obj2);
  }, items1);
  if (typeof isDisabled === "object") {
    tmp11 = isDisabled;
  }
  let tmp12 = description;
  if (null != tmp11) {
    const obj3 = { disabledActionLabel: tmp11.label, description };
    tmp12 = closure_14(DisabledActionDescriptionWithLink, obj3);
  }
  const obj4 = { label: title, subLabel: tmp12, disabled: true === isDisabled, arrow: true, variant, icon: tmp15Result, trailing: tmp17, onPress, accessibilityHint, start, end };
  tmp15Result = null;
  const TableRow = tmp(tmp2[12]).TableRow;
  if (null != IconComponent) {
    const obj5 = { IconComponent };
    tmp15Result = tmp15(tmp(tmp2[12]).TableRow.Icon, obj5);
  }
  tmp17 = null;
  if (null != trailing) {
    let tmp18;
    if (null != trailing) {
      let tmp15Result2 = trailing;
      if (typeof trailing === "string") {
        const obj6 = { text: trailing };
        tmp15Result2 = tmp15(tmp(tmp2[12]).TableRow.TrailingText, obj6);
      }
      tmp18 = tmp15Result2;
    }
    tmp17 = tmp18;
  }
  onPress = undefined;
  if (tmp11 != null) {
    onPress = tmp11.onPress;
  }
  if (onPress == null) {
    onPress = callback;
  }
  accessibilityHint = undefined;
  if (tmp11 != null) {
    accessibilityHint = tmp11.accessibilityHint;
  }
  return closure_14(TableRow, obj4);
});
let closure_20 = react.memo(function GuildSelectorSetting(useSelectedGuildId) {
  let c2;
  let callback;
  let guild;
  let memoResult;
  let stringResult;
  useSelectedGuildId = useSelectedGuildId.useSelectedGuildId;
  const merged = Object.assign(useSelectedGuildId, Object.assign({ useSelectedGuildId: 0 }));
  dependencyMap = undefined;
  const selectedGuildId = useSelectedGuildId();
  let obj = selectedGuildId(504);
  const items = [GuildStore];
  let closure_1 = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  const items1 = [GuildStore];
  const obj2 = selectedGuildId(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => guild.getGuild(selectedGuildId));
  if (selectedGuildId === closure_12) {
    const intl2 = tmp3(1113).intl;
    stringResult = intl2.string(tmp3(1113).t["32u1Dx"]);
  } else {
    stringResult = undefined;
    if (stateFromStores != null) {
      stringResult = stateFromStores.name;
    }
    if (stringResult == null) {
      const intl = tmp3(1113).intl;
      stringResult = intl.string(tmp3(1113).t["XBwns+"]);
    }
  }
  dependencyMap = stringResult;
  const items2 = [stringResult];
  const obj3 = { type: constants.PRESSABLE, useTitle: callback, withArrow: true, IconComponent: memoResult };
  memoResult = react.memo(function SelectorGuildIcon() {
    let tmp7;
    if (null == closure_1) {
      tmp7 = authStore3(GuildSelectDefaultIcon, {});
    } else {
      const obj = { size: GuildIcon.GuildIconSizes.SMALL_32, guild: tmp };
      const tmp5 = GuildIconDefault;
      tmp7 = authStore3(tmp5, obj);
    }
    return tmp7;
  });
  callback = react.useCallback(() => c2, items2);
  const merged1 = Object.assign(merged);
  return closure_14(closure_21, obj3);
});
let closure_21 = react.memo(function PressableSetting(arg0) {
  let IconComponent;
  let end;
  let onPress;
  let setting;
  let start;
  let tmp11Result;
  let tmp13;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useTrailing;
  let variant;
  let withArrow;
  ({ useDescription, useIsDisabled, useTrailing, variant, start, end, IconComponent } = arg0);
  ({ setting, onPress, useTitle, withArrow } = arg0);
  const obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => callback.locale);
  let description;
  const title = useTitle();
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  let trailing;
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const obj3 = { label: title, subLabel: description, arrow: withArrow, variant, icon: tmp11Result, onPress, disabled: true === isDisabled, trailing: tmp13, start, end };
  tmp11Result = null;
  const TableRow = tmp(6975).TableRow;
  const tmp10 = closure_15;
  const tmp9 = authStore4;
  if (null != IconComponent) {
    const obj4 = { IconComponent, variant };
    tmp11Result = tmp11(tmp(6975).TableRow.Icon, obj4);
  }
  tmp13 = undefined;
  if (null != trailing) {
    let tmp11Result2 = trailing;
    if (typeof trailing === "string") {
      const obj5 = { text: trailing };
      tmp11Result2 = tmp11(tmp(6975).TableRow.TrailingText, obj5);
    }
    tmp13 = tmp11Result2;
  }
  const children = [authStore3(TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj6 = { start, end };
    highlightSettingItem = tmp11(SettingListItemHighlightDefault, obj6);
  }
  children[1] = highlightSettingItem;
  return tmp9(tmp10, { children });
});
let closure_23 = react.memo(function ToggleSetting(arg0) {
  let IconComponent;
  let end;
  let hasIcon;
  let obj7;
  let obj8;
  let obj9;
  let onValueChange;
  let setting;
  let start;
  let tmp17;
  let tmp18;
  let tmp9;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useValue;
  let variant;
  ({ useDescription, useIsDisabled, variant, start, end, IconComponent } = arg0);
  ({ setting, onValueChange, useTitle, useValue, hasIcon } = arg0);
  const obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => callback.locale);
  const title = useTitle();
  const value = useValue();
  let description;
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  const obj3 = { label: title, subLabel: description, icon: tmp9, variant, start, end };
  tmp9 = null;
  if (null != IconComponent) {
    const obj4 = { IconComponent, variant };
    tmp9 = authStore3(tmp(6975).TableRow.Icon, obj4);
  }
  if (typeof isDisabled === "object") {
    const obj6 = { subLabel: authStore3(DisabledActionDescriptionWithLink, obj7), accessible: true, trailing: authStore3(View, obj8) };
    const TableRow = tmp(6975).TableRow;
    const merged = Object.assign(obj3);
    obj7 = { disabledActionLabel: isDisabled.label, description, descriptionVariant: "text-md/semibold", descriptionColor: "mobile-text-heading-primary" };
    ({ accessibilityHint: obj5.accessibilityHint, onPress: obj5.onPress } = isDisabled);
    obj8 = { style: { opacity: 0.5 }, children: authStore3(FormSwitch.FormSwitch, obj9) };
    obj9 = { "aria-hidden": true, value, disabled: true };
    tmp17 = authStore3(TableRow, obj6);
    tmp18 = authStore3;
  } else {
    const obj10 = { disabled: isDisabled, onValueChange, value };
    const TableSwitchRow = tmp(7369).TableSwitchRow;
    const merged1 = Object.assign(obj3);
    tmp17 = authStore3(TableSwitchRow, obj10);
    tmp18 = authStore3;
  }
  let tmp18Result = tmp17;
  const tmp19 = authStore4;
  const tmp20 = closure_15;
  if (true === hasIcon) {
    const obj11 = { children: tmp17 };
    tmp18Result = tmp18(ForceSwitchIcons, obj11);
  }
  const children = [tmp18Result, ];
  if (highlightSettingItem) {
    const obj20 = { start, end };
    highlightSettingItem = tmp18(SettingListItemHighlightDefault, obj20);
  }
  children[1] = highlightSettingItem;
  return tmp19(tmp20, { children });
});
let closure_25 = react.memo(function RadioSetting(arg0) {
  let onValueChange;
  let setting;
  let useOptions;
  let useTitle;
  let useValue;
  ({ setting, useTitle, useValue, useOptions, onValueChange } = arg0);
  const tmp = closure_17();
  let obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => callback.locale);
  const title = useTitle();
  const value = useValue();
  const options = useOptions();
  let combined = value;
  if (typeof value === "number") {
    let _HermesInternal = HermesInternal;
    combined = "" + value;
  }
  const obj3 = {
    title,
    defaultValue: combined,
    onChange: onValueChange,
    hasIcons: options.some((icon) => null != icon.icon),
    children: options.map((label) => {
      let combined;
      if (typeof label.value === "number") {
        const _HermesInternal = HermesInternal;
        combined = "" + label.value;
      } else {
        combined = label.value;
      }
      const obj = { value: combined, label: label.label, subLabel: label.subLabel, disabled: label.disabled, icon: label.icon };
      return closure_1_14(TableRadioRow.TableRadioRow, obj, label.value);
    })
  };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  const children = [authStore3(TableRadioGroup, obj3, combined), ];
  const tmp10 = authStore4;
  const tmp11 = closure_15;
  const tmp12 = authStore3;
  if (highlightSettingItem) {
    const obj4 = { start: true, end: true, style: tmp.radioSettingHighlight };
    highlightSettingItem = tmp12(SettingListItemHighlightDefault, obj4);
  }
  children[1] = highlightSettingItem;
  return tmp10(tmp11, { children });
});
let closure_26 = react.memo(function StaticSetting(arg0) {
  let IconComponent;
  let end;
  let setting;
  let start;
  let tmp12Result;
  let tmp12Result2;
  let tmp13;
  let useDescription;
  let useIsDisabled;
  let useTitle;
  let useTrailing;
  let variant;
  ({ variant, useTrailing, useIsDisabled, useDescription, start, end, IconComponent } = arg0);
  let trailing;
  const tmp = trailing;
  ({ setting, useTitle } = arg0);
  let obj = trailing(16581);
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  let obj2 = trailing(504);
  const items = [LocaleStore];
  const stateFromStores = obj2.useStateFromStores(items, () => callback.locale);
  trailing = undefined;
  const title = useTitle();
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  let description;
  if (useDescription != null) {
    description = useDescription();
  }
  let isDisabled;
  if (useIsDisabled != null) {
    isDisabled = useIsDisabled();
  }
  const items1 = [trailing];
  const callback = react.useCallback(() => {
    if (null != trailing) {
      const obj = ClipboardUtils;
      obj.copy(tmp);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  }, items1);
  const obj3 = { label: title, subLabel: description, onPress: tmp13, variant, disabled: isDisabled, icon: tmp12Result, trailing: tmp12Result2, start, end };
  tmp13 = null;
  const TableRow = tmp(6975).TableRow;
  const tmp10 = closure_16;
  const tmp11 = closure_15;
  if (null != trailing) {
    tmp13 = callback;
  }
  tmp12Result = null;
  if (null != IconComponent) {
    const obj4 = { IconComponent, variant };
    tmp12Result = tmp12(tmp(6975).TableRow.Icon, obj4);
  }
  tmp12Result2 = null;
  if (null != trailing) {
    const obj5 = { text: trailing };
    tmp12Result2 = tmp12(tmp(6975).TableRow.TrailingText, obj5);
  }
  const children = [closure_14(TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj6 = { start, end };
    highlightSettingItem = tmp12(SettingListItemHighlightDefault, obj6);
  }
  children[1] = highlightSettingItem;
  return tmp10(tmp11, { children });
});
let closure_27 = react.memo(function VolumeSliderSetting(arg0) {
  let end;
  let maximum;
  let obj4;
  let onValueChange;
  let setting;
  let start;
  let useTitle;
  let useValue;
  ({ useValue, start, end } = arg0);
  ({ setting, useTitle, onValueChange, maximum } = arg0);
  const obj = useHighlightSettingItem;
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  const items = [LocaleStore];
  const tmp4 = closure_17();
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => callback.locale);
  const title = useTitle();
  let value;
  if (useValue != null) {
    value = useValue();
  }
  const obj3 = { label: title, start, end, subLabel: authStore3(View, obj4) };
  obj4 = { style: tmp4.slider, children: authStore3(VolumeSliderDefault, { value, maxVolume: maximum, onValueChange, accessibilityLabel: title }) };
  const TableRow = TableRow2.TableRow;
  const children = [authStore3(TableRow, obj3), ];
  const tmp10 = authStore3;
  const tmp8 = authStore4;
  const tmp9 = closure_15;
  if (highlightSettingItem) {
    const obj5 = { start, end };
    highlightSettingItem = tmp10(SettingListItemHighlightDefault, obj5);
  }
  children[1] = highlightSettingItem;
  return tmp8(tmp9, { children });
});
let closure_28 = react.memo(function SliderSetting(useTrailing) {
  let Slider;
  let Stack;
  let defaultValue;
  let end;
  let endIcon;
  let formatPercentResult;
  let intl;
  let items7;
  let obj5;
  let obj7;
  let start;
  let startIcon;
  let useProps;
  let useTitle;
  let valueLabel;
  useTrailing = useTrailing.useTrailing;
  let onChangeEnd;
  let num2;
  let num4;
  let num3;
  _objectWithoutProperties = undefined;
  let value;
  let closure_8;
  let onChange;
  let callback1;
  ({ useTitle, start, end, useProps } = useTrailing);
  let obj = onChangeEnd(num2[13]);
  const items = [onChange];
  const stateFromStores = obj.useStateFromStores(items, () => callback.locale);
  const title = useTitle();
  const props = useProps();
  onChangeEnd = props.onChangeEnd;
  const step = props.step;
  let num = 0.1;
  const tmp3 = onChange;
  if (undefined !== step) {
    num = step;
  }
  const minValue = props.minValue;
  num2 = 0;
  ({ startIcon, endIcon } = props);
  if (undefined !== minValue) {
    num2 = minValue;
  }
  const maxValue = props.maxValue;
  num3 = 1;
  num4 = 1;
  if (undefined !== maxValue) {
    num4 = maxValue;
  }
  ({ valueLabel, defaultValue } = props);
  if (undefined !== defaultValue) {
    num3 = defaultValue;
  }
  onChange = props.onChange;
  const tmp7 = _objectWithoutProperties(props, num4);
  _objectWithoutProperties = tmp7;
  const tmp8 = closure_17();
  const items1 = [tmp3];
  const tmpResult = onChangeEnd(num2[13]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => callback.locale);
  const tmp10 = onChange(value.useState(() => {
    value = value.value;
    if (value == null) {
      value = num3;
    }
    return value;
  }), 2);
  value = tmp10[0];
  closure_8 = tmp10[1];
  const items2 = [onChange];
  onChange = value.useCallback((arg0) => {
    closure_8(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items2);
  const items3 = [onChange, onChangeEnd];
  callback1 = value.useCallback((arg0) => {
    callback(arg0);
    if (onChangeEnd != null) {
      onChangeEnd(arg0);
    }
  }, items3);
  const items4 = [num3, callback1];
  const items5 = [callback1, num4, num, value];
  const callback2 = value.useCallback(() => callback1(num3), items4);
  const items6 = [callback1, num2, num, value];
  const callback3 = value.useCallback(() => {
    callback1(Math.min(num4, first + num));
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items5);
  let trailing;
  const callback4 = value.useCallback(() => {
    callback1(Math.max(num2, first - num));
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items6);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const obj2 = { start, end, shadow: "none", border: "none", children: closure_16(Stack, obj5) };
  const Card = tmp(tmp2[32]).Card;
  Stack = tmp(tmp2[33]).Stack;
  const obj3 = { style: tmp8.sliderTitle, children: items7 };
  const Stack2 = tmp(tmp2[33]).Stack;
  items7 = [closure_14(tmp(tmp2[21]).Text, { variant: "text-md/semibold", children: title }), trailing];
  const items8 = [closure_16(closure_8, obj3), ];
  let tmp18Result = null != value;
  const tmp20 = closure_8;
  if (tmp18Result) {
    const Text = tmp(tmp2[21]).Text;
    if (formatPercentResult == null) {
      const tmpResult3 = onChangeEnd(num2[34]);
      formatPercentResult = tmpResult3.formatPercent(stateFromStores1, value);
    }
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: formatPercentResult };
    tmp18Result = tmp18(Text, obj4);
  }
  items8[1] = tmp18Result;
  const items9 = [closure_16(Stack2, { direction: "horizontal", justify: "space-between", children: items8 }), , ];
  let slider;
  const tmpResult4 = onChangeEnd(num2[35]);
  if (tmpResult4.isAndroid()) {
    slider = tmp8.slider;
  }
  obj5 = { children: items9 };
  const obj6 = { style: slider, children: closure_14(Slider, obj7) };
  obj7 = { accessibilityLabel: title, step: num, onChange, value, minValue: num2, maxValue: num4, onChangeEnd, startIcon: closure_14(onChangeEnd(num2[37]).PressableOpacity, { accessible: false, onPress: callback4, children: startIcon }), endIcon: closure_14(onChangeEnd(num2[37]).PressableOpacity, { accessible: false, onPress: callback3, children: endIcon }) };
  Slider = tmp(tmp2[36]).Slider;
  const merged = Object.assign(tmp7);
  items9[1] = closure_14(tmp20, obj6);
  const obj8 = { disabled: value === num3, variant: "secondary", text: intl.string(onChangeEnd(num2[16]).t["3b//lO"]), onPress: callback2 };
  const Button = tmp(tmp2[38]).Button;
  intl = tmp(tmp2[16]).intl;
  items9[2] = closure_14(Button, obj8);
  return closure_14(Card, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

export { GuildSelectDefaultIcon };
export function renderSettingItem(item) {
  let end;
  let setting;
  let settingData;
  let start;
  ({ setting, settingData, start, end } = item);
  const type = settingData.type;
  if (map1.GUILD_SELECTOR === type) {
    const obj2 = { setting, start, end };
    const merged = Object.assign(settingData);
    return authStore3(closure_20, obj2);
  } else if (map1.ROUTE === type) {
    const obj3 = { start, end };
    const merged1 = Object.assign(settingData);
    return authStore3(closure_18, obj3);
  } else if (map1.PRESSABLE === type) {
    const obj4 = { start, end, setting };
    const merged2 = Object.assign(settingData);
    return authStore3(closure_21, obj4);
  } else if (map1.TOGGLE === type) {
    const obj5 = { start, end, setting };
    const merged3 = Object.assign(settingData);
    return authStore3(closure_23, obj5);
  } else if (map1.STATIC === type) {
    const obj6 = { start, end, setting };
    const merged4 = Object.assign(settingData);
    return authStore3(closure_26, obj6);
  } else if (map1.VOLUME_SLIDER === type) {
    const obj7 = { start, end, setting };
    const merged5 = Object.assign(settingData);
    return authStore3(closure_27, obj7);
  } else if (map1.RADIO === type) {
    const obj8 = { setting };
    const merged6 = Object.assign(settingData);
    return authStore3(closure_25, obj8);
  } else if (map1.SLIDER === type) {
    const obj = { start, end, setting };
    const merged7 = Object.assign(settingData);
    return authStore3(closure_28, obj);
  }
}
export function renderSettingSearchResultItem(settingData) {
  settingData = settingData.settingData;
  const tmp = _objectWithoutProperties(settingData, closure_4);
  const type = settingData.type;
  if (map1.ROUTE === type) {
    const obj2 = { settingData };
    const merged = Object.assign(tmp);
    return authStore3(RouteSettingSearchResult, obj2);
  } else if (map1.PRESSABLE === type) {
    const obj3 = { settingData };
    const merged1 = Object.assign(tmp);
    return authStore3(PressableSettingSearchResult, obj3);
  } else if (map1.STATIC === type) {
    const obj = { settingData };
    const merged2 = Object.assign(tmp);
    return authStore3(StaticSettingSearchResult, obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[SettingRenderer] Found unsupported renderer type for setting: " + settingData.setting);
    throw error;
  }
}
export function renderSettingSearchResultPlaceholderItem(start) {
  const obj = { start: start.start, end: start.end };
  return authStore3(SettingSearchResultPlaceholder, obj);
}
