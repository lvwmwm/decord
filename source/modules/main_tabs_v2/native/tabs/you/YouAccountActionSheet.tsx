// Module ID: 14978
// Function ID: 112756
// Name: YouStatusRadioGroup
// Dependencies: []

// Module 14978 (YouStatusRadioGroup)
function YouStatusRadioGroup() {
  const StatusSetting = arg1(dependencyMap[18]).StatusSetting;
  const setting = StatusSetting.useSetting();
  const arg1 = setting;
  const StatusExpiresAtSetting = arg1(dependencyMap[18]).StatusExpiresAtSetting;
  let closure_1 = StatusExpiresAtSetting.useSetting();
  const items = [setting];
  const callback = importAllResult.useCallback((nextStatus) => {
    callback(closure_3[19])({ prevStatus: setting, nextStatus });
    callback(closure_3[20]).hideActionSheet();
  }, items);
  const obj = {};
  const intl = arg1(dependencyMap[22]).intl;
  obj.title = intl.string(arg1(dependencyMap[22]).t.0DPAZH);
  obj.onChange = callback;
  obj.defaultValue = setting;
  obj.hasIcons = true;
  obj.children = function useStatusRadioRowProps() {
    return React.useMemo(() => {
      let obj = {};
      obj = { source: callback2(closure_3[14]), variant: "text-status-online" };
      obj.icon = callback3(callback(closure_3[13]).TableRowIcon, obj);
      obj.value = constants.ONLINE;
      const items = [obj, , , ];
      obj = {};
      const obj1 = { source: callback2(closure_3[15]), variant: "text-status-idle" };
      obj.icon = callback3(callback(closure_3[13]).TableRowIcon, obj1);
      obj.value = constants.IDLE;
      items[1] = obj;
      const obj2 = {};
      const obj3 = { source: callback2(closure_3[16]), variant: "text-status-dnd" };
      obj2.icon = callback3(callback(closure_3[13]).TableRowIcon, obj3);
      obj2.value = constants.DND;
      items[2] = obj2;
      const obj4 = {};
      const obj5 = { source: callback2(closure_3[17]), variant: "text-status-offline" };
      obj4.icon = callback3(callback(closure_3[13]).TableRowIcon, obj5);
      obj4.value = constants.INVISIBLE;
      items[3] = obj4;
      return items;
    }, []);
  }().map((value) => {
    let obj = {};
    const merged = Object.assign(value);
    obj["label"] = setting(closure_3[24]).getStatusLabel(value.value);
    let formatToPlainStringResult;
    if (value.value === setting) {
      if (null != closure_1) {
        if ("0" !== closure_1) {
          const intl = setting(closure_3[22]).intl;
          obj = {};
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(closure_1));
          obj.endTime = date.toLocaleString(setting(closure_3[22]).intl.currentLocale, {});
          formatToPlainStringResult = intl.formatToPlainString(setting(closure_3[22]).t.BWD8fs, obj);
        }
      }
    }
    obj["subLabel"] = formatToPlainStringResult;
    return closure_19(setting(closure_3[23]).TableRadioRow, obj, value.value);
  });
  return callback(arg1(dependencyMap[21]).TableRadioGroup, obj);
}
function ThemeRadioGroup() {
  const tmp = importDefault(dependencyMap[25])("ThemeRadioGroup");
  let obj = arg1(dependencyMap[26]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  obj = {};
  const callback = importAllResult.useCallback((arg0) => {
    const result = callback(closure_3[27]).resetBackgroundGradientPreset();
    const obj = callback(closure_3[27]);
    callback(closure_3[28]).resetCustomTheme();
    const obj2 = callback(closure_3[28]);
    callback2(closure_3[29]).updateTheme(arg0);
  }, []);
  obj = {};
  const intl = arg1(dependencyMap[22]).intl;
  obj.title = intl.string(arg1(dependencyMap[22]).t.Ksh3ik);
  obj.onChange = callback;
  obj.defaultValue = stateFromStores;
  obj.hasIcons = true;
  const obj1 = { icon: callback(arg1(dependencyMap[30]).ThemeLightIcon, {}) };
  let obj4 = arg1(dependencyMap[31]);
  obj1.label = obj4.getThemeName(constants.LIGHT, tmp);
  obj1.value = constants.LIGHT;
  const items1 = [callback(arg1(dependencyMap[23]).TableRadioRow, obj1), , , ];
  let tmp7 = tmp;
  if (tmp) {
    const obj2 = { icon: callback(arg1(dependencyMap[32]).ThemeGrayIcon, {}), label: arg1(dependencyMap[31]).getThemeName(constants.DARK, true), value: constants.DARK };
    tmp7 = callback(arg1(dependencyMap[23]).TableRadioRow, obj2);
    const obj7 = arg1(dependencyMap[31]);
  }
  items1[1] = tmp7;
  const obj3 = { icon: callback(arg1(dependencyMap[33]).ThemeDarkIcon, {}), label: arg1(dependencyMap[31]).getThemeName(constants.DARKER, tmp), value: constants.DARKER };
  items1[2] = callback(arg1(dependencyMap[23]).TableRadioRow, obj3);
  obj4 = { icon: callback(arg1(dependencyMap[34]).ThemeMidnightIcon, {}) };
  const obj9 = arg1(dependencyMap[31]);
  const tmp4 = callback;
  const tmp5 = closure_5;
  const tmp6 = closure_20;
  obj4.label = arg1(dependencyMap[31]).getThemeName(constants.MIDNIGHT, tmp);
  obj4.value = constants.MIDNIGHT;
  items1[3] = callback(arg1(dependencyMap[23]).TableRadioRow, obj4);
  obj.children = items1;
  obj.children = tmp6(arg1(dependencyMap[21]).TableRadioGroup, obj);
  return tmp4(tmp5, obj);
}
function YouAccountRadioGroup() {
  const tmp2 = callback2();
  let obj = arg1(dependencyMap[26]);
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const arg1 = stateFromStores;
  let obj1 = arg1(dependencyMap[37]);
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  const importDefault = multiAccountUsers;
  const tmp = importDefault(dependencyMap[25])("YouAccountRadioGroup");
  const items1 = [multiAccountUsers, ];
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  items1[1] = id;
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp2.account };
    obj = { style: tmp2.manage };
    obj1 = {
      onPress() {
          return multiAccountUsers(closure_3[38])();
        }
    };
    const obj2 = { variant: "text-sm/semibold" };
    let str2 = "text-link";
    if (tmp) {
      str2 = "text-brand";
    }
    obj2.color = str2;
    const intl = arg1(dependencyMap[22]).intl;
    obj2.children = intl.string(arg1(dependencyMap[22]).t.HxrBOZ);
    obj1.children = callback(arg1(dependencyMap[43]).Text, obj2);
    obj.children = callback(arg1(dependencyMap[42]).PressableOpacity, obj1);
    const items2 = [callback(closure_5, obj), ];
    const obj3 = {};
    const intl2 = arg1(dependencyMap[22]).intl;
    obj3.title = intl2.string(arg1(dependencyMap[22]).t.oMNyYN);
    obj3.onChange = tmp5;
    obj3.defaultValue = stateFromStores.id;
    obj3.hasIcons = true;
    obj3.children = arr2.map((value) => {
      const merged = Object.assign(value);
      return callback2(stateFromStores(closure_3[23]).TableRadioRow, {}, value.value);
    });
    items2[1] = callback(arg1(dependencyMap[21]).TableRadioGroup, obj3);
    obj.children = items2;
    tmp7Result = closure_20(closure_5, obj);
    const tmp10 = closure_5;
    const tmp11 = callback;
    const tmp14 = callback;
    const tmp7 = closure_20;
    const tmp8 = closure_5;
    const tmp9 = callback;
  }
  return tmp7Result;
}
function FocusModeSetting() {
  let obj = arg1(dependencyMap[44]);
  const focusModeEnabled = obj.useFocusModeEnabled();
  const FocusModeExpiresAtSetting = arg1(dependencyMap[18]).FocusModeExpiresAtSetting;
  let setting = FocusModeExpiresAtSetting.useSetting();
  if (!focusModeEnabled) {
    return null;
  } else {
    obj = { hasIcons: true };
    obj = {};
    const intl = arg1(dependencyMap[22]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[22]).t.wCxBOc);
    const intl2 = arg1(dependencyMap[22]).intl;
    obj.accessibilityHint = intl2.string(arg1(dependencyMap[22]).t.wCxBOc);
    const obj1 = { style: tmp.leadingIcon };
    obj.icon = callback(arg1(dependencyMap[47]).BellSlashIcon, obj1);
    obj.onValueChange = function onValueChange(arg0) {
      if (arg0) {
        let obj = {
          onSelect(quiet_mode_enabled) {
              callback(closure_3[44]).setFocusMode(quiet_mode_enabled, arg1);
              const obj = callback(closure_3[44]);
              callback2(closure_3[20]).hideActionSheet();
              const obj2 = callback2(closure_3[20]);
              const result = callback(closure_3[50]).showYouAccountActionSheet();
            }
        };
        callback2(paths[20]).openLazy(callback(paths[49])(paths[48], paths.paths), "FocusModeOptionsActionSheet", obj);
        const obj2 = callback2(paths[20]);
      } else {
        obj = callback(paths[44]);
        obj.setFocusMode(false);
      }
    };
    obj.value = focusModeEnabled;
    const intl3 = arg1(dependencyMap[22]).intl;
    obj.label = intl3.string(arg1(dependencyMap[22]).t.wCxBOc);
    if (null == setting) {
      const intl4 = arg1(dependencyMap[22]).intl;
      let stringResult = intl4.string(arg1(dependencyMap[22]).t.i0nsoY);
      obj.subLabel = stringResult;
      obj = tmp7(arg1(dependencyMap[46]).TableSwitchRow, obj);
      obj.children = obj;
      tmp4(arg1(dependencyMap[45]).TableRowGroup, obj);
    }
    const intl5 = arg1(dependencyMap[22]).intl;
    const obj2 = {};
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting));
    setting = date;
    obj2.endTime = date.toLocaleString(arg1(dependencyMap[22]).intl.currentLocale, {});
    stringResult = intl5.formatToPlainString(arg1(dependencyMap[22]).t.BWD8fs, obj2);
    const tmp4 = callback;
    const tmp7 = callback;
  }
}
function CustomStatus() {
  const tmp = callback2();
  let obj = arg1(dependencyMap[51]);
  const customStatusActivity = obj.useCustomStatusActivity();
  let obj1 = arg1(dependencyMap[52]);
  let state;
  const token = obj1.useToken(importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_ICON_SIZE);
  if (null != customStatusActivity) {
    state = customStatusActivity.state;
  }
  let tmp5 = null != state;
  if (tmp5) {
    tmp5 = "" !== customStatusActivity.state;
  }
  if (null != customStatusActivity) {
    let emoji = customStatusActivity.emoji;
  }
  if (!tmp5) {
    tmp5 = null != emoji;
  }
  let obj2 = arg1(dependencyMap[53]);
  let state1;
  if (null != customStatusActivity) {
    state1 = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state1);
  obj = { hasIcons: false };
  obj = { style: tmp.customStatusRow };
  obj1 = { style: tmp.customStatusEditButton, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[22]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[22]).t;
  if (tmp5) {
    let stringResult = string(t.2p9FMw);
  } else {
    stringResult = string(t./UonHN);
  }
  obj1.accessibilityLabel = stringResult;
  let formatToPlainStringResult;
  if (tmp5) {
    const intl2 = arg1(dependencyMap[22]).intl;
    obj2 = {};
    const emoji2 = customStatusActivity.emoji;
    let name;
    if (null != emoji2) {
      name = emoji2.name;
    }
    let str2 = "";
    if (null != name) {
      str2 = name;
    }
    obj2.emoji = str2;
    obj2.status = gameMentionsAsPlainText;
    formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[22]).t.GE7QzY, obj2);
  }
  obj1.accessibilityHint = formatToPlainStringResult;
  obj1.onPress = function onPress() {
    let obj = callback2(closure_3[20]);
    obj.hideActionSheet();
    obj = {};
    const items = [callback2(closure_3[40]).YOU_ACCOUNT_ACTION_SHEET];
    obj.analyticsLocations = items;
    const result = callback(closure_3[55]).openEditCustomStatusModal(obj);
  };
  emoji = undefined;
  if (null != customStatusActivity) {
    emoji = customStatusActivity.emoji;
  }
  if (null != emoji) {
    const obj3 = { emoji: customStatusActivity.emoji, size: token };
    let tmp20 = callback(importDefault(dependencyMap[56]), obj3);
  } else {
    const obj4 = { size: "md", style: tmp.leadingIcon };
    tmp20 = callback(arg1(dependencyMap[57]).ReactionIcon, obj4);
  }
  const items = [tmp20, ];
  const obj5 = { <string:1643205302>: null, <string:1415816450>: "text-sm/semibold", <string:4283523744>: "text-default", style: tmp.customStatusText };
  if (!tmp5) {
    const intl3 = arg1(dependencyMap[22]).intl;
    gameMentionsAsPlainText = intl3.string(arg1(dependencyMap[22]).t./UonHN);
  }
  obj5.children = gameMentionsAsPlainText;
  items[1] = callback(arg1(dependencyMap[43]).Text, obj5);
  obj1.children = items;
  const items1 = [closure_20(arg1(dependencyMap[42]).PressableOpacity, obj1), ];
  let tmp27 = null;
  if (null != customStatusActivity) {
    const obj6 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          callback2(closure_3[58])();
        },
      accessibilityRole: "button"
    };
    const intl4 = arg1(dependencyMap[22]).intl;
    obj6.accessibilityLabel = intl4.string(arg1(dependencyMap[22]).t.wfYTHe);
    obj6.style = tmp.customStatusRemoveButton;
    const obj7 = { style: tmp.trailingIcon, source: importDefault(dependencyMap[59]) };
    obj6.children = callback(closure_6, obj7);
    tmp27 = callback(arg1(dependencyMap[42]).PressableOpacity, obj6);
  }
  items1[1] = tmp27;
  obj.children = items1;
  obj.children = closure_20(arg1(dependencyMap[54]).Card, obj);
  return callback(arg1(dependencyMap[45]).TableRowGroup, obj);
}
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
const MultiAccountTokenStatus = arg1(dependencyMap[2]).MultiAccountTokenStatus;
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_14, AuthStates: closure_15, StatusTypes: closure_16, ThemeTypes: closure_17 } = arg1(dependencyMap[8]));
let closure_18 = arg1(dependencyMap[9]).MultiAccountSwitchLocation;
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_19, jsxs: closure_20 } = arg1(dependencyMap[10]));
let obj1 = arg1(dependencyMap[11]);
let obj = { account: { position: "relative" }, manage: {}, leadingIcon: { "Null": "isArray", "Null": "key", "Null": "Array" } };
obj = { tintColor: importDefault(dependencyMap[12]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.trailingIcon = obj;
obj1 = { gap: importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_PADDING };
obj.customStatusRow = obj1;
const obj2 = { "Bool(false)": 11289912320616628000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005532905043006873, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002404207391897851, "Bool(false)": -12680549038071390000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000264006681466, minHeight: importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_HEIGHT, padding: importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_PADDING, gap: importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_PADDING };
obj.customStatusEditButton = obj2;
const tmp4 = arg1(dependencyMap[10]);
obj.customStatusRemoveButton = { height: importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
obj.customStatusText = { flexShrink: 1 };
let closure_21 = obj1.createStyles(obj);
const obj3 = { height: importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_HEIGHT, paddingHorizontal: importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" };
const memoResult = importAllResult.memo((statusOnly) => {
  let flag = statusOnly.statusOnly;
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[26]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  const tmp2 = importDefault(dependencyMap[60])("theme_setting_in_account_sheet");
  let obj1 = arg1(dependencyMap[26]);
  const items1 = [closure_11];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => isDeveloper.isDeveloper);
  obj = { startExpanded: stateFromStores };
  obj = {};
  const intl = arg1(dependencyMap[22]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[22]).t;
  if (flag) {
    let stringResult = string(t.3Uj+2p);
  } else if (stateFromStores) {
    stringResult = string(t.ldCE/p);
  } else {
    stringResult = string(t.qP/i6k);
  }
  obj.title = stringResult;
  obj.header = callback(arg1(dependencyMap[62]).BottomSheetTitleHeader, obj);
  obj.showGradient = true;
  obj1 = { spacing: 24 };
  let tmp8 = tmp2;
  if (tmp2) {
    tmp8 = callback(ThemeRadioGroup, {});
  }
  const items2 = [tmp8, callback(YouStatusRadioGroup, {}), callback(FocusModeSetting, {}), callback(CustomStatus, {}), , ];
  let tmp11 = !flag && stateFromStores;
  if (tmp11) {
    tmp11 = callback(YouAccountRadioGroup, {});
  }
  items2[4] = tmp11;
  let tmp14 = !flag && stateFromStores1;
  if (tmp14) {
    tmp14 = callback(importDefault(dependencyMap[64]), { borderRadius: true, paths: true });
  }
  items2[5] = tmp14;
  obj1.children = items2;
  obj.children = closure_20(arg1(dependencyMap[63]).Stack, obj1);
  return callback(arg1(dependencyMap[61]).ActionSheet, obj);
});
const result = arg1(dependencyMap[65]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouAccountActionSheet.tsx");

export default memoResult;
