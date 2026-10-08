// Module ID: 14778
// Function ID: 14779
// Name: SettingRenderer
// Dependencies: [32, 109, 19, 17, 2128, 14777, 2086, 11263, 21, 5090, 587, 1200, 6184, 504, 1502, 14779, 558, 576, 1126, 10157, 6161, 14781, 14782, 5086, 6883, 6882, 4794, 6265, 6264, 6872, 4765, 10868, 5055, 5056, 6186, 5373, 1900, 1381, 14118, 6189, 5375, 4778, 14783, 1893, 2]
// Exports: renderSettingItem, renderSettingSearchResultItem, renderSettingSearchResultPlaceholderItem

// Module 14778 (SettingRenderer)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import useToken from "useToken" /* 4778 */;
import react3 from "react" /* 4794 */;
import HapticUtils from "HapticUtils" /* 5055 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5056 */;
import Text_Text from "Text/Text" /* 5086 */;
import GuildIcon from "GuildIcon" /* 6161 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import FormSwitch from "FormSwitch" /* 6883 */;
import VolumeSliderDefault from "VolumeSlider" /* 10868 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14779 */;
import useHighlightSettingItem from "useHighlightSettingItem" /* 14781 */;
import SettingListItemHighlightDefault from "SettingListItemHighlight" /* 14782 */;
import settings_tracking_Tracking from "settings/tracking/Tracking" /* 14783 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14777 */;
import GuildStore from "GuildStore" /* 2086 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11263 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require, dependencyMap;

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
const TableRow2 = tmp(6184);
const TableRadioGroup2 = tmp2(6265);
const ClydeIcon = tmp(10157);
const f118347 = () => _undefined.locale;
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
  let obj2 = { label: title, onPress: callback, arrow: true, icon: closure_14(closure_31, { IconComponent }), subLabel: closure_14(closure_30, { breadcrumbs }), start: 0 === index, end: index === total - 1 };
  const TableRow = tmp(tmp2[12]).TableRow;
  return closure_14(TableRow, obj2);
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
  let obj = { label: title, onPress: tmp6, icon: tmp3(closure_31, { IconComponent }), subLabel: tmp3(closure_30, { breadcrumbs }), trailing: tmp3Result, start: 0 === index, end: index === total - 1 };
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
let closure_3 = ["onSlidingComplete", "step", "startIcon", "endIcon", "minimumValue", "maximumValue", "valueLabel", "defaultValue", "onValueChange"];
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
  const stateFromStores = obj2.useStateFromStores(items, f118347);
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
    tmp12 = closure_14(closure_23, obj3);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildTitle(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (arg0 === closure_12) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(require("intl").t["32u1Dx"]);
      cResult[3] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[3];
    }
    tmp9 = tmp12;
  } else {
    let name;
    const tmp14 = cResult[4];
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    if (tmp14 !== name) {
      let name1;
      if (stateFromStores != null) {
        name1 = stateFromStores.name;
      }
      if (name1 == null) {
        const intl = tmp(1126).intl;
        name1 = intl.string(tmp(1126).t["XBwns+"]);
      }
      let name2;
      if (stateFromStores != null) {
        name2 = stateFromStores.name;
      }
      cResult[4] = name2;
      cResult[5] = name1;
      tmp9 = name1;
    } else {
      tmp9 = cResult[5];
    }
  }
  return tmp9;
}) : (function useGuildTitle(arg0) {
  let closure_0;
  let stringResult;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  if (arg0 === closure_12) {
    const intl2 = tmp(1126).intl;
    stringResult = intl2.string(tmp(1126).t["32u1Dx"]);
  } else {
    stringResult = undefined;
    if (stateFromStores != null) {
      stringResult = stateFromStores.name;
    }
    if (stringResult == null) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t["XBwns+"]);
    }
  }
  return stringResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSelectDefaultIcon(size) {
  const obj = react2;
  const cResult = obj.c(9);
  size = size.size;
  let str = "sm";
  if (undefined !== size) {
    str = size;
  }
  const tmp4 = closure_17();
  let num = 32;
  if ("xs" === str) {
    num = 24;
  }
  const result = num / 3;
  if (cResult[0] === result) {
    if (cResult[1] === num) {
      let tmp6;
      let tmp8;
      if (cResult[2] === tmp4.defaultIcon) {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== str) {
        const obj2 = { color: "white", size: str };
        const tmp10 = authStore2(ClydeIcon.ClydeIcon, obj2);
        cResult[4] = str;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        let tmp11;
        if (cResult[7] === tmp8) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj3 = { style: tmp6, children: tmp8 };
      const tmp14 = authStore2(View, obj3);
      cResult[6] = tmp6;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
  }
  const obj4 = { width: num, height: num, borderRadius: result };
  const merged = Object.assign(tmp4.defaultIcon);
  cResult[0] = result;
  cResult[1] = num;
  cResult[2] = tmp4.defaultIcon;
  cResult[3] = obj4;
  tmp6 = obj4;
}) : (function GuildSelectDefaultIcon(size) {
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
  const obj = { style: obj2, children: authStore2(ClydeIcon.ClydeIcon, { color: "white", size: str }) };
  obj2 = { width: num, height: num, borderRadius: num / 3 };
  const merged = Object.assign(tmp.defaultIcon);
  return authStore2(View, obj);
});
let closure_20 = tmp5;
let closure_21 = react.memo(function GuildSelectorSetting(useSelectedGuildId) {
  let callback;
  let closure_2;
  let memoResult;
  useSelectedGuildId = useSelectedGuildId.useSelectedGuildId;
  const merged = Object.assign(useSelectedGuildId, Object.assign({ useSelectedGuildId: 0 }));
  const selectedGuildId = useSelectedGuildId();
  let obj = selectedGuildId(504);
  const items = [GuildStore];
  let closure_1 = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  const tmp3 = closure_19(selectedGuildId);
  dependencyMap = tmp3;
  const items1 = [tmp3];
  const obj2 = { type: constants.PRESSABLE, useTitle: callback, withArrow: true, IconComponent: memoResult };
  memoResult = react.memo(function SelectorGuildIcon() {
    let tmp7;
    if (null == closure_1) {
      tmp7 = authStore2(closure_20, {});
    } else {
      const obj = { size: GuildIcon.GuildIconSizes.SMALL_32, guild: tmp };
      const tmp5 = GuildIconDefault;
      tmp7 = authStore2(tmp5, obj);
    }
    return tmp7;
  });
  callback = react.useCallback(() => closure_2, items1);
  const merged1 = Object.assign(merged);
  return closure_14(closure_22, obj2);
});
let closure_22 = react.memo(function PressableSetting(arg0) {
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
  const stateFromStores = obj2.useStateFromStores(items, f118347);
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
  const TableRow = tmp(6184).TableRow;
  const tmp10 = authStore3;
  const tmp9 = authStore4;
  if (null != IconComponent) {
    const obj4 = { IconComponent, variant };
    tmp11Result = tmp11(tmp(6184).TableRow.Icon, obj4);
  }
  tmp13 = undefined;
  if (null != trailing) {
    let tmp11Result2 = trailing;
    if (typeof trailing === "string") {
      const obj5 = { text: trailing };
      tmp11Result2 = tmp11(tmp(6184).TableRow.TrailingText, obj5);
    }
    tmp13 = tmp11Result2;
  }
  const children = [authStore2(TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj6 = { start, end };
    highlightSettingItem = tmp11(SettingListItemHighlightDefault, obj6);
  }
  children[1] = highlightSettingItem;
  return tmp9(tmp10, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisabledActionDescriptionWithLink(arg0) {
  let description;
  let descriptionColor;
  let descriptionVariant;
  let disabledActionLabel;
  let items;
  let str2;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(9);
  ({ disabledActionLabel, description, descriptionVariant, descriptionColor } = arg0);
  if (cResult[0] !== disabledActionLabel) {
    const obj2 = { variant: "text-xs/medium", color: "text-link", children: disabledActionLabel };
    const tmp6 = authStore2(Text_Text.Text, obj2);
    cResult[0] = disabledActionLabel;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (null == description) {
    return tmp4;
  } else {
    if (cResult[2] === description) {
      if (cResult[3] === descriptionColor) {
        let tmp7;
        if (cResult[4] === descriptionVariant) {
          tmp7 = cResult[5];
        }
        if (cResult[6] === tmp7) {
          let tmp11;
          if (cResult[7] === tmp4) {
            tmp11 = cResult[8];
          }
          return tmp11;
        }
        const obj3 = { children: items };
        items = [tmp4, tmp7];
        const tmp14 = authStore4(View, obj3);
        cResult[6] = tmp7;
        cResult[7] = tmp4;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
    }
    let tmp10Result = description;
    if (!react.isValidElement(description)) {
      let str = descriptionVariant;
      const Text = tmp(5086).Text;
      const tmp10 = authStore2;
      if (descriptionVariant == null) {
        str = "text-xs/medium";
      }
      const obj4 = { variant: str, color: str2, children: description };
      str2 = descriptionColor;
      if (descriptionColor == null) {
        str2 = "text-subtle";
      }
      tmp10Result = tmp10(Text, obj4);
    }
    cResult[2] = description;
    cResult[3] = descriptionColor;
    cResult[4] = descriptionVariant;
    cResult[5] = tmp10Result;
    tmp7 = tmp10Result;
  }
}) : (function DisabledActionDescriptionWithLink(children) {
  let description;
  let descriptionColor;
  let descriptionVariant;
  let items;
  ({ description, descriptionVariant, descriptionColor } = children);
  const tmp4 = authStore2(Text_Text.Text, { variant: "text-xs/medium", color: "text-link", children: children.disabledActionLabel });
  const tmp = authStore2;
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
});
let closure_24 = react.memo(function ToggleSetting(arg0) {
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
  const stateFromStores = obj2.useStateFromStores(items, f118347);
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
    tmp9 = authStore2(tmp(6184).TableRow.Icon, obj4);
  }
  if (typeof isDisabled === "object") {
    const obj6 = { subLabel: authStore2(closure_23, obj7), accessible: true, trailing: authStore2(View, obj8) };
    const TableRow = tmp(6184).TableRow;
    const merged = Object.assign(obj3);
    obj7 = { disabledActionLabel: isDisabled.label, description, descriptionVariant: "text-md/semibold", descriptionColor: "mobile-text-heading-primary" };
    ({ accessibilityHint: obj5.accessibilityHint, onPress: obj5.onPress } = isDisabled);
    obj8 = { style: { opacity: 0.5 }, children: authStore2(FormSwitch.FormSwitch, obj9) };
    obj9 = { "aria-hidden": true, value, disabled: true };
    tmp17 = authStore2(TableRow, obj6);
    tmp18 = authStore2;
  } else {
    const obj10 = { disabled: isDisabled, onValueChange, value };
    const TableSwitchRow = tmp(6882).TableSwitchRow;
    const merged1 = Object.assign(obj3);
    tmp17 = authStore2(TableSwitchRow, obj10);
    tmp18 = authStore2;
  }
  let tmp18Result = tmp17;
  const tmp19 = authStore4;
  const tmp20 = authStore3;
  if (true === hasIcon) {
    const obj11 = { children: tmp17 };
    tmp18Result = tmp18(closure_25, obj11);
  }
  const children = [tmp18Result, ];
  if (highlightSettingItem) {
    const obj20 = { start, end };
    highlightSettingItem = tmp18(SettingListItemHighlightDefault, obj20);
  }
  children[1] = highlightSettingItem;
  return tmp19(tmp20, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForceSwitchIcons(children) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  children = children.children;
  const context = react.useContext(react3.AccessibilityPreferencesContext);
  if (cResult[0] !== context) {
    const obj2 = { switchIconsEnabled: true };
    const merged = Object.assign(context);
    cResult[0] = context;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    let tmp9;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = authStore2(react3.AccessibilityPreferencesContext.Provider, { value: tmp5, children });
  cResult[2] = children;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function ForceSwitchIcons(children) {
  children = children.children;
  const context = react.useContext(react3.AccessibilityPreferencesContext);
  const items = [context];
  const value = react.useMemo(() => {
    const obj = { switchIconsEnabled: true };
    const merged = Object.assign(context);
    return obj;
  }, items);
  return authStore2(react3.AccessibilityPreferencesContext.Provider, { value, children });
});
let closure_26 = react.memo(function RadioSetting(arg0) {
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
  const stateFromStores = obj2.useStateFromStores(items, f118347);
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
      return closure_1_14(require("TableRadioRow").TableRadioRow, obj, label.value);
    })
  };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  const children = [authStore2(TableRadioGroup, obj3, combined), ];
  const tmp10 = authStore4;
  const tmp11 = authStore3;
  const tmp12 = authStore2;
  if (highlightSettingItem) {
    const obj4 = { start: true, end: true, style: tmp.radioSettingHighlight };
    highlightSettingItem = tmp12(SettingListItemHighlightDefault, obj4);
  }
  children[1] = highlightSettingItem;
  return tmp10(tmp11, { children });
});
let closure_27 = react.memo(function StaticSetting(arg0) {
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
  let obj = trailing(14781);
  let highlightSettingItem = obj.useHighlightSettingItem(setting);
  let obj2 = trailing(504);
  const items = [LocaleStore];
  const stateFromStores = obj2.useStateFromStores(items, f118347);
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
  const TableRow = tmp(6184).TableRow;
  const tmp10 = closure_16;
  const tmp11 = closure_15;
  if (null != trailing) {
    tmp13 = callback;
  }
  tmp12Result = null;
  if (null != IconComponent) {
    const obj4 = { IconComponent, variant };
    tmp12Result = tmp12(tmp(6184).TableRow.Icon, obj4);
  }
  tmp12Result2 = null;
  if (null != trailing) {
    const obj5 = { text: trailing };
    tmp12Result2 = tmp12(tmp(6184).TableRow.TrailingText, obj5);
  }
  const children = [closure_14(TableRow, obj3), ];
  if (highlightSettingItem) {
    const obj6 = { start, end };
    highlightSettingItem = tmp12(SettingListItemHighlightDefault, obj6);
  }
  children[1] = highlightSettingItem;
  return tmp10(tmp11, { children });
});
let closure_28 = react.memo(function VolumeSliderSetting(arg0) {
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
  const stateFromStores = obj2.useStateFromStores(items, f118347);
  const title = useTitle();
  let value;
  if (useValue != null) {
    value = useValue();
  }
  const obj3 = { label: title, start, end, subLabel: authStore2(View, obj4) };
  obj4 = { style: tmp4.slider, children: authStore2(VolumeSliderDefault, { value, maxVolume: maximum, onValueChange, accessibilityLabel: title }) };
  const TableRow = TableRow2.TableRow;
  const children = [authStore2(TableRow, obj3), ];
  const tmp10 = authStore2;
  const tmp8 = authStore4;
  const tmp9 = authStore3;
  if (highlightSettingItem) {
    const obj5 = { start, end };
    highlightSettingItem = tmp10(SettingListItemHighlightDefault, obj5);
  }
  children[1] = highlightSettingItem;
  return tmp8(tmp9, { children });
});
let closure_29 = react.memo(function SliderSetting(useTrailing) {
  let Slider;
  let Stack;
  let _undefined;
  let c9;
  let defaultValue;
  let end;
  let endIcon;
  let formatPercentResult;
  let intl;
  let items8;
  let obj6;
  let obj7;
  let start;
  let startIcon;
  let tmp13;
  let useProps;
  let useTitle;
  let valueLabel;
  useTrailing = useTrailing.useTrailing;
  let onSlidingComplete;
  let num2;
  let num4;
  let num3;
  let onValueChange;
  _objectWithoutProperties = undefined;
  let value;
  let closure_8;
  c9 = undefined;
  let callback1;
  let callback3;
  const tmp2 = num2;
  ({ useTitle, start, end, useProps } = useTrailing);
  let obj = onSlidingComplete(num2[13]);
  const items = [c9];
  const stateFromStores = obj.useStateFromStores(items, f118347);
  const title = useTitle();
  const props = useProps();
  onSlidingComplete = props.onSlidingComplete;
  const step = props.step;
  let num = 0.1;
  const tmp3 = c9;
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
  num4 = 1;
  if (undefined !== maximumValue) {
    num4 = maximumValue;
  }
  ({ valueLabel, defaultValue } = props);
  if (undefined !== defaultValue) {
    num3 = defaultValue;
  }
  onValueChange = props.onValueChange;
  const tmp7 = _objectWithoutProperties(props, num4);
  _objectWithoutProperties = tmp7;
  const tmp8 = closure_17();
  const items1 = [tmp3];
  const tmpResult = onSlidingComplete(tmp2[13]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => _undefined.locale);
  const tmp10 = onValueChange(value.useState(() => {
    value = value.value;
    if (value == null) {
      value = num3;
    }
    return value;
  }), 2);
  value = tmp10[0];
  closure_8 = tmp10[1];
  [tmp13, c9] = onValueChange(value.useState(false), 2);
  const items2 = [onValueChange];
  onValueChange(value.useState(false), 2);
  const callback = value.useCallback(() => {
    _undefined(true);
  }, []);
  callback1 = value.useCallback((arg0) => {
    closure_8(arg0);
    if (onValueChange != null) {
      onValueChange(arg0);
    }
  }, items2);
  const items3 = [onSlidingComplete];
  const items4 = [callback1, onSlidingComplete];
  const callback2 = value.useCallback((arg0) => {
    _undefined(false);
    if (onSlidingComplete != null) {
      tmp2(arg0);
    }
  }, items3);
  callback3 = value.useCallback((arg0) => {
    callback1(arg0);
    if (onSlidingComplete != null) {
      onSlidingComplete(arg0);
    }
  }, items4);
  const items5 = [num3, callback3];
  const items6 = [callback3, num4, num, value];
  const callback4 = value.useCallback(() => callback3(num3), items5);
  const items7 = [callback3, num2, num, value];
  const callback5 = value.useCallback(() => {
    callback3(Math.min(num4, first + num));
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items6);
  let trailing;
  const callback6 = value.useCallback(() => {
    callback3(Math.max(num2, first - num));
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items7);
  if (useTrailing != null) {
    trailing = useTrailing();
  }
  const obj2 = { start, end, shadow: "none", border: "none", children: closure_16(Stack, obj7) };
  const Card = tmp(tmp2[34]).Card;
  Stack = tmp(tmp2[35]).Stack;
  const obj3 = { style: tmp8.sliderTitle, children: items8 };
  const Stack2 = tmp(tmp2[35]).Stack;
  items8 = [closure_14(tmp(tmp2[23]).Text, { variant: "text-md/semibold", children: title }), trailing];
  const items9 = [closure_16(closure_8, obj3), ];
  let tmp22Result = null != value;
  const tmp24 = closure_8;
  if (tmp22Result) {
    const Text = tmp(tmp2[23]).Text;
    if (formatPercentResult == null) {
      const tmpResult3 = onSlidingComplete(tmp2[36]);
      formatPercentResult = tmpResult3.formatPercent(stateFromStores1, value);
    }
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: formatPercentResult };
    tmp22Result = tmp22(Text, obj4);
  }
  items9[1] = tmp22Result;
  const items10 = [closure_16(Stack2, { direction: "horizontal", justify: "space-between", children: items9 }), , ];
  let slider;
  const tmpResult4 = onSlidingComplete(tmp2[37]);
  if (tmpResult4.isAndroid()) {
    slider = tmp8.slider;
  }
  const obj5 = { style: slider, children: closure_14(Slider, obj6) };
  obj6 = { accessibilityLabel: title, step: num, onValueChange: callback1, value, minimumValue: num2, maximumValue: num4, onSlidingStart: callback, onSlidingComplete: callback2, startIcon: closure_14(onSlidingComplete(tmp2[39]).PressableOpacity, { accessible: false, onPress: callback6, children: startIcon }), endIcon: closure_14(onSlidingComplete(tmp2[39]).PressableOpacity, { accessible: false, onPress: callback5, children: endIcon }) };
  Slider = tmp(tmp2[38]).Slider;
  const merged = Object.assign(tmp7);
  items10[1] = closure_14(tmp24, obj5);
  let tmp28 = !tmp13;
  const Button = tmp(tmp2[40]).Button;
  if (!tmp13) {
    tmp28 = value === num3;
  }
  obj7 = { children: items10 };
  const obj8 = { disabled: tmp28, variant: "secondary", text: intl.string(onSlidingComplete(tmp2[18]).t["3b//lO"]), onPress: callback4 };
  intl = tmp(tmp2[18]).intl;
  items10[2] = closure_14(Button, obj8);
  return closure_14(Card, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingSearchResultBreadcrumbs(breadcrumbs) {
  const obj = react2;
  const cResult = obj.c(4);
  breadcrumbs = breadcrumbs.breadcrumbs;
  let tmp4 = null;
  if (0 !== breadcrumbs.length) {
    let tmp5;
    let tmp7;
    if (cResult[0] !== breadcrumbs) {
      const joined = breadcrumbs.join(" \u2192 ");
      cResult[0] = breadcrumbs;
      cResult[1] = joined;
      tmp5 = joined;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] !== tmp5) {
      const obj2 = { variant: "text-xs/medium", color: "text-muted", children: tmp5 };
      const tmp9 = authStore2(Text_Text.Text, obj2);
      cResult[2] = tmp5;
      cResult[3] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    tmp4 = tmp7;
  }
  return tmp4;
}) : (function SettingSearchResultBreadcrumbs(breadcrumbs) {
  breadcrumbs = breadcrumbs.breadcrumbs;
  let tmp = null;
  if (0 !== breadcrumbs.length) {
    const obj = { variant: "text-xs/medium", color: "text-muted", children: breadcrumbs.join(" \u2192 ") };
    const Text = Text_Text.Text;
    tmp = authStore2(Text, obj);
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingSearchResultIcon(IconComponent) {
  let obj4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  IconComponent = IconComponent.IconComponent;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  if (null == IconComponent) {
    let tmp8;
    if (cResult[0] !== token) {
      const obj3 = { style: obj4 };
      obj4 = { width: token };
      const tmp11 = authStore2(View, obj3);
      cResult[0] = token;
      cResult[1] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[1];
    }
    tmp5 = tmp8;
  } else if (cResult[2] !== IconComponent) {
    const obj5 = { IconComponent };
    const tmp7 = authStore2(TableRow2.TableRow.Icon, obj5);
    cResult[2] = IconComponent;
    cResult[3] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[3];
  }
  return tmp5;
}) : (function SettingSearchResultIcon(IconComponent) {
  let obj3;
  let tmp6;
  IconComponent = IconComponent.IconComponent;
  useToken;
  if (null == IconComponent) {
    const obj2 = { style: obj3 };
    obj3 = { width: tmp4 };
    tmp6 = authStore2(View, obj2);
  } else {
    const obj = { IconComponent };
    tmp6 = authStore2(TableRow2.TableRow.Icon, obj);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function PressableSettingSearchResult(index) {
  let IconComponent;
  let breadcrumbs;
  let setting;
  let settingData;
  let title;
  let obj = title(index[17]);
  const cResult = obj.c(18);
  const tmp = title;
  ({ settingData, IconComponent, title } = index);
  ({ breadcrumbs, setting } = index);
  const tmp2 = index;
  index = index.index;
  const total = index.total;
  const onPress = settingData.onPress;
  const withArrow = settingData.withArrow;
  if (cResult[0] === index) {
    if (cResult[1] === onPress) {
      if (cResult[2] === setting) {
        if (cResult[3] === title) {
          let tmp4;
          let tmp5;
          let tmp9;
          if (cResult[4] === total) {
            tmp4 = cResult[5];
          }
          if (cResult[6] !== IconComponent) {
            let obj2 = { IconComponent };
            const tmp8 = closure_14(closure_31, obj2);
            cResult[6] = IconComponent;
            cResult[7] = tmp8;
            tmp5 = tmp8;
          } else {
            tmp5 = cResult[7];
          }
          if (cResult[8] !== breadcrumbs) {
            let obj3 = { breadcrumbs };
            const tmp12 = closure_14(closure_30, obj3);
            cResult[8] = breadcrumbs;
            cResult[9] = tmp12;
            tmp9 = tmp12;
          } else {
            tmp9 = cResult[9];
          }
          if (cResult[10] === tmp4) {
            if (cResult[11] === tmp5) {
              if (cResult[12] === tmp9) {
                if (cResult[13] === 0 === index) {
                  if (cResult[14] === index === total - 1) {
                    if (cResult[15] === title) {
                      let tmp15;
                      if (cResult[16] === withArrow) {
                        tmp15 = cResult[17];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
          }
          const obj4 = { label: title, onPress: tmp4, icon: tmp5, subLabel: tmp9, start: 0 === index, end: index === total - 1, arrow: withArrow };
          const tmp17 = closure_14(tmp(tmp2[12]).TableRow, obj4);
          cResult[10] = tmp4;
          cResult[11] = tmp5;
          cResult[12] = tmp9;
          cResult[13] = 0 === index;
          cResult[14] = index === total - 1;
          cResult[15] = title;
          cResult[16] = withArrow;
          cResult[17] = tmp17;
          tmp15 = tmp17;
        }
      }
    }
  }
  const fn = function n() {
    const obj = settings_tracking_Tracking;
    const obj2 = { setting, title, searchResultPosition: index, numSearchResults: total };
    const result = obj.trackSettingSearchResultPress(obj2);
    const obj3 = KeyboardManagerUtils;
    const result1 = obj3.dismissGlobalKeyboard();
    onPress();
  };
  cResult[0] = index;
  cResult[1] = onPress;
  cResult[2] = setting;
  cResult[3] = title;
  cResult[4] = total;
  cResult[5] = fn;
  tmp4 = fn;
}) : (function PressableSettingSearchResult(setting) {
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
  let obj = { label: title, onPress: callback, icon: closure_14(closure_31, { IconComponent }), subLabel: closure_14(closure_30, { breadcrumbs }), start: 0 === index, end: index === total - 1, arrow: withArrow };
  const TableRow = title(index[12]).TableRow;
  return closure_14(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingSearchResultPlaceholder(arg0) {
  let end;
  let first;
  let items;
  let start;
  let obj = react2;
  const cResult = obj.c(11);
  ({ start, end } = arg0);
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = { width: `${10 + 80 * Math.random() | 0}%` };
      return obj;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = _slicedToArray(react.useState(first), 1)[0];
  if (cResult[1] === tmp4.placeholderUsername) {
    let tmp7;
    let tmp9;
    if (cResult[2] === first1) {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.placeholderAvatar) {
      const obj2 = { style: tmp4.placeholderAvatar };
      const tmp12 = authStore2(View, obj2);
      cResult[4] = tmp4.placeholderAvatar;
      cResult[5] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === end) {
      if (cResult[7] === start) {
        if (cResult[8] === tmp7) {
          let tmp13;
          if (cResult[9] === tmp9) {
            tmp13 = cResult[10];
          }
          return tmp13;
        }
      }
    }
    const obj3 = { start, end, label: tmp7, icon: tmp9 };
    const tmp15 = authStore2(TableRow2.TableRow, obj3);
    cResult[6] = end;
    cResult[7] = start;
    cResult[8] = tmp7;
    cResult[9] = tmp9;
    cResult[10] = tmp15;
    tmp13 = tmp15;
  }
  const obj4 = { style: items };
  items = [tmp4.placeholderUsername, first1];
  const tmp8 = authStore2(View, obj4);
  cResult[1] = tmp4.placeholderUsername;
  cResult[2] = first1;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function SettingSearchResultPlaceholder(arg0) {
  let end;
  let items;
  let obj2;
  let obj3;
  let start;
  ({ start, end } = arg0);
  const tmp = closure_17();
  let obj = { start, end, label: authStore2(View, obj2), icon: authStore2(View, obj3) };
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
  return authStore2(TableRow, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingRenderer.tsx");

export const GuildSelectDefaultIcon = tmp5;
export const renderSettingItem = function renderSettingItem(item) {
  let end;
  let setting;
  let settingData;
  let start;
  ({ setting, settingData, start, end } = item);
  const type = settingData.type;
  if (map1.GUILD_SELECTOR === type) {
    const obj2 = { setting, start, end };
    const merged = Object.assign(settingData);
    return authStore2(closure_21, obj2);
  } else if (map1.ROUTE === type) {
    const obj3 = { start, end };
    const merged1 = Object.assign(settingData);
    return authStore2(closure_18, obj3);
  } else if (map1.PRESSABLE === type) {
    const obj4 = { start, end, setting };
    const merged2 = Object.assign(settingData);
    return authStore2(closure_22, obj4);
  } else if (map1.TOGGLE === type) {
    const obj5 = { start, end, setting };
    const merged3 = Object.assign(settingData);
    return authStore2(closure_24, obj5);
  } else if (map1.STATIC === type) {
    const obj6 = { start, end, setting };
    const merged4 = Object.assign(settingData);
    return authStore2(closure_27, obj6);
  } else if (map1.VOLUME_SLIDER === type) {
    const obj7 = { start, end, setting };
    const merged5 = Object.assign(settingData);
    return authStore2(closure_28, obj7);
  } else if (map1.RADIO === type) {
    const obj8 = { setting };
    const merged6 = Object.assign(settingData);
    return authStore2(closure_26, obj8);
  } else if (map1.SLIDER === type) {
    const obj = { start, end, setting };
    const merged7 = Object.assign(settingData);
    return authStore2(closure_29, obj);
  }
};
export const renderSettingSearchResultItem = function renderSettingSearchResultItem(settingData) {
  settingData = settingData.settingData;
  const tmp = _objectWithoutProperties(settingData, closure_4);
  const type = settingData.type;
  if (map1.ROUTE === type) {
    const obj2 = { settingData };
    const merged = Object.assign(tmp);
    return authStore2(RouteSettingSearchResult, obj2);
  } else if (map1.PRESSABLE === type) {
    const obj3 = { settingData };
    const merged1 = Object.assign(tmp);
    return authStore2(closure_33, obj3);
  } else if (map1.STATIC === type) {
    const obj = { settingData };
    const merged2 = Object.assign(tmp);
    return authStore2(StaticSettingSearchResult, obj);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[SettingRenderer] Found unsupported renderer type for setting: " + settingData.setting);
    throw error;
  }
};
export const renderSettingSearchResultPlaceholderItem = function renderSettingSearchResultPlaceholderItem(start) {
  const obj = { start: start.start, end: start.end };
  return authStore2(closure_35, obj);
};
