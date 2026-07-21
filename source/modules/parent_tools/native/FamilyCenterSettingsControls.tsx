// Module ID: 13688
// Function ID: 103603
// Name: SpendingLimitRow
// Dependencies: []
// Exports: default

// Module 13688 (SpendingLimitRow)
function SpendingLimitRow(teenId) {
  let subLabel;
  let trailing;
  teenId = teenId.teenId;
  const arg1 = teenId;
  let obj = arg1(dependencyMap[13]);
  const tmp = callback3();
  ({ trailing, subLabel } = function getSpendingLimitRowProps(kind, subLabelWarning) {
    function renderTrailing(monthlyText) {
      return callback2(callback(closure_2[7]).Text, { children: monthlyText });
    }
    function renderSubLabel(intl2, subLabelCritical) {
      return callback2(callback(closure_2[7]).Text, { variant: "text-sm/normal", style: subLabelCritical, children: intl2 });
    }
    kind = kind.kind;
    if ("off" === kind) {
      let obj = {};
      const intl4 = teenId(closure_2[8]).intl;
      obj.trailing = renderTrailing(intl4.string(callback(closure_2[9]).YEnpaj));
      return obj;
    } else if ("on" === kind) {
      obj = { trailing: renderTrailing(kind.monthlyText) };
      return obj;
    } else if ("close-to-limit" === kind) {
      const obj1 = { trailing: renderTrailing(kind.monthlyText), subLabel: renderSubLabel(kind.remainingText, subLabelWarning.subLabelWarning) };
      return obj1;
    } else if ("spent" === kind) {
      const obj2 = { trailing: renderTrailing(kind.monthlyText) };
      const intl3 = teenId(closure_2[8]).intl;
      obj2.subLabel = renderSubLabel(intl3.string(callback(closure_2[9]).Q2msVQ), subLabelWarning.subLabelCritical);
      return obj2;
    } else if ("blocked" === kind) {
      obj = {};
      const intl = teenId(closure_2[8]).intl;
      obj.trailing = renderTrailing(intl.string(callback(closure_2[9]).kGFuGn));
      const intl2 = teenId(closure_2[8]).intl;
      obj.subLabel = renderSubLabel(intl2.string(callback(closure_2[9]).FUu2b0), subLabelWarning.subLabelCritical);
      return obj;
    }
  }(obj.useSpendingLimitDisplayState(teenId.cap), callback3()));
  obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.label = intl.string(importDefault(dependencyMap[9]).gMeekL);
  obj.trailing = trailing;
  obj.subLabel = subLabel;
  let fn;
  if (null != teenId) {
    fn = () => {
      let obj = callback(paths[10]);
      obj = { teenId };
      obj = { animation: "slide_from_right" };
      obj.pushLazy(teenId(paths[12])(paths[11], paths.paths), obj, undefined, obj);
    };
  }
  obj.onPress = fn;
  obj.arrow = null != teenId;
  obj.disabled = null == teenId;
  return closure_7(arg1(dependencyMap[14]).TableRow, obj);
}
function FamilyCenterSettingsTeenControls() {
  let subLabel;
  let trailing;
  function handleOpenSettings() {
    navigation.navigate(constants2.CONTENT_AND_SOCIAL);
  }
  const tmp = callback3();
  let obj = arg1(handleOpenSettings[15]);
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const arg1 = activeLinkUserIds;
  let obj1 = arg1(handleOpenSettings[16]);
  const selectedTeenUser = obj1.useSelectedTeenUser();
  let obj2 = arg1(handleOpenSettings[17]);
  let isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterSettingsControls" });
  let obj3 = arg1(handleOpenSettings[18]);
  const importDefault = obj3.useNavigation();
  let rules;
  if (null != selectedTeenUser) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (null != restrictedSchedule) {
      rules = restrictedSchedule.rules;
    }
  }
  if (null == rules) {
    rules = [];
  }
  let obj4 = arg1(handleOpenSettings[13]);
  const spendingLimitFromUserSettings = obj4.useSpendingLimitFromUserSettings();
  ({ subLabel, trailing } = importDefault(handleOpenSettings[19])(rules));
  obj = { style: tmp.teenControlsContainer };
  obj = { style: tmp.controlledSettingsHeader };
  obj1 = { variant: "text-sm/semibold" };
  const intl = arg1(handleOpenSettings[8]).intl;
  obj1.children = intl.string(importDefault(handleOpenSettings[9]).ahKIJO);
  const items = [callback(arg1(handleOpenSettings[7]).Text, obj1), ];
  obj2 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
  const intl2 = arg1(handleOpenSettings[8]).intl;
  obj3 = {
    openSettingsHook(children) {
      return callback(activeLinkUserIds(handleOpenSettings[7]).Text, { onPress: handleOpenSettings, children }, arg1);
    }
  };
  obj2.children = intl2.format(importDefault(handleOpenSettings[9]).X9rW0j, obj3);
  items[1] = callback(arg1(handleOpenSettings[7]).Text, obj2);
  obj.children = items;
  const items1 = [callback2(arg1(handleOpenSettings[20]).Stack, obj), , ];
  if (isFamilyCenterV3Enabled) {
    obj4 = { style: tmp.controlsGroup };
    const obj5 = { hasIcons: false };
    const obj6 = { cap: spendingLimitFromUserSettings };
    const items2 = [callback(SpendingLimitRow, obj6), ];
    const obj7 = {};
    const intl3 = arg1(handleOpenSettings[8]).intl;
    obj7.label = intl3.string(importDefault(handleOpenSettings[9]).1Op+NP);
    obj7.subLabel = subLabel;
    obj7.trailing = trailing;
    let fn;
    if (rules.length > 0) {
      fn = () => {
        navigation.navigate(constants2.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: constants.SCREEN_TIME_CONTROLS });
      };
    }
    obj7.onPress = fn;
    obj7.arrow = rules.length > 0;
    items2[1] = callback(arg1(handleOpenSettings[14]).TableRow, obj7);
    obj5.children = items2;
    obj4.children = callback2(arg1(handleOpenSettings[21]).TableRowGroup, obj5);
    isFamilyCenterV3Enabled = callback(View, obj4);
    const tmp14 = callback;
    const tmp7 = callback;
    const tmp8 = View;
    const tmp9 = callback2;
  }
  items1[1] = isFamilyCenterV3Enabled;
  const obj8 = { __initData: "accessibilityLabel", marginBottom: "r", np: "isArray", replace: 24, header: 24, channelId: null };
  const intl4 = arg1(handleOpenSettings[8]).intl;
  obj8.text = intl4.formatToPlainString(importDefault(handleOpenSettings[9]).w0JA3P, { count: activeLinkUserIds.length });
  obj8.onPress = function onPress() {
    let obj = activeLinkUserIds(handleOpenSettings[23]);
    obj.popLayer();
    obj = { recipientIds: activeLinkUserIds };
    navigation(handleOpenSettings[24]).openPrivateChannel(obj);
  };
  items1[2] = callback(arg1(handleOpenSettings[22]).Button, obj8);
  obj.children = items1;
  return callback2(arg1(handleOpenSettings[20]).Stack, obj);
}
function FamilyCenterSettingsParentalControls() {
  let subLabel;
  let trailing;
  function handleSettingsClick(CONTENT_AND_SOCIAL) {
    navigation.navigate(constants2.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: CONTENT_AND_SOCIAL });
  }
  const tmp = callback3();
  let obj = arg1(closure_2[16]);
  const selectedTeenUser = obj.useSelectedTeenUser();
  const arg1 = selectedTeenUser;
  let obj1 = arg1(closure_2[16]);
  const shouldLoadSettingsForSelectedTeenUser = obj1.useShouldLoadSettingsForSelectedTeenUser();
  const importDefault = shouldLoadSettingsForSelectedTeenUser;
  let obj2 = arg1(closure_2[17]);
  let isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterSettingsControls" });
  let obj3 = arg1(closure_2[18]);
  closure_2 = obj3.useNavigation();
  let rules;
  if (null != selectedTeenUser) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (null != restrictedSchedule) {
      rules = restrictedSchedule.rules;
    }
  }
  if (null == rules) {
    rules = [];
  }
  const React = rules;
  const ParentalControlledSpendingLimit = arg1(closure_2[25]).ParentalControlledSpendingLimit;
  let id;
  if (null != selectedTeenUser) {
    id = selectedTeenUser.id;
  }
  let id1;
  const controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(id);
  if (null != selectedTeenUser) {
    id1 = selectedTeenUser.id;
  }
  const items = [id1, shouldLoadSettingsForSelectedTeenUser];
  const effect = React.useEffect(() => {
    let id;
    if (null != selectedTeenUser) {
      id = selectedTeenUser.id;
    }
    if (tmp3) {
      const teenSettingsAndConsents = shouldLoadSettingsForSelectedTeenUser(closure_2[26]).fetchTeenSettingsAndConsents(selectedTeenUser.id);
      const obj = shouldLoadSettingsForSelectedTeenUser(closure_2[26]);
    }
  }, items);
  ({ subLabel, trailing } = importDefault(closure_2[19])(rules));
  obj = { style: tmp.parentalControlsContainer };
  obj = { variant: "text-sm/semibold" };
  const intl = arg1(closure_2[8]).intl;
  obj.children = intl.string(importDefault(closure_2[9]).ahKIJO);
  const items1 = [callback(arg1(closure_2[7]).Text, obj), , ];
  obj1 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
  const intl2 = arg1(closure_2[8]).intl;
  obj1.children = intl2.string(importDefault(closure_2[9]).Sv236e);
  items1[1] = callback(arg1(closure_2[7]).Text, obj1);
  obj2 = { style: tmp.controlsGroup };
  obj3 = { hasIcons: false };
  const obj4 = {};
  const intl3 = arg1(closure_2[8]).intl;
  obj4.label = intl3.string(arg1(closure_2[8]).t.+o1pDZ);
  obj4.onPress = function onPress() {
    handleSettingsClick(constants.CONTENT_AND_SOCIAL);
  };
  obj4.arrow = true;
  const items2 = [callback(arg1(closure_2[14]).TableRow, obj4), , , ];
  const obj5 = {};
  const intl4 = arg1(closure_2[8]).intl;
  obj5.label = intl4.string(arg1(closure_2[8]).t.OAuOHD);
  obj5.onPress = function onPress() {
    handleSettingsClick(constants.DATA_AND_PRIVACY);
  };
  obj5.arrow = true;
  items2[1] = callback(arg1(closure_2[14]).TableRow, obj5);
  let tmp15 = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    let id2;
    if (null != selectedTeenUser) {
      id2 = selectedTeenUser.id;
    }
    tmp15 = null != id2;
  }
  if (tmp15) {
    const obj6 = { cap: controlledSetting, teenId: selectedTeenUser.id };
    tmp15 = callback(SpendingLimitRow, obj6);
  }
  items2[2] = tmp15;
  if (isFamilyCenterV3Enabled) {
    let id3;
    if (null != selectedTeenUser) {
      id3 = selectedTeenUser.id;
    }
    isFamilyCenterV3Enabled = null != id3;
  }
  if (isFamilyCenterV3Enabled) {
    const obj7 = {};
    const intl5 = arg1(closure_2[8]).intl;
    obj7.label = intl5.string(importDefault(closure_2[9]).1Op+NP);
    obj7.subLabel = subLabel;
    obj7.trailing = trailing;
    obj7.onPress = function onPress() {
      const obj = { selectedSubPage: constants.SCREEN_TIME_CONTROLS };
      let tmp2 = 0 === rules.length;
      if (tmp2) {
        let id;
        if (null != selectedTeenUser) {
          id = selectedTeenUser.id;
        }
        tmp2 = null != id;
      }
      obj.autoOpenCreate = tmp2;
      navigation.navigate(constants2.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    };
    obj7.arrow = true;
    isFamilyCenterV3Enabled = callback(arg1(closure_2[14]).TableRow, obj7);
  }
  items2[3] = isFamilyCenterV3Enabled;
  obj3.children = items2;
  obj2.children = closure_8(arg1(closure_2[21]).TableRowGroup, obj3);
  items1[2] = callback(handleSettingsClick, obj2);
  obj.children = items1;
  return closure_8(arg1(closure_2[20]).Stack, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const FamilyCenterSubPages = arg1(dependencyMap[2]).FamilyCenterSubPages;
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.teenControlsContainer = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.controlledSettingsHeader = { gap: importDefault(dependencyMap[6]).space.PX_4 };
const obj1 = { gap: importDefault(dependencyMap[6]).space.PX_4 };
obj.parentalControlsContainer = { gap: importDefault(dependencyMap[6]).space.PX_4 };
const obj2 = { gap: importDefault(dependencyMap[6]).space.PX_4 };
obj.controlsGroup = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const obj3 = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
obj.subLabelWarning = { color: importDefault(dependencyMap[6]).colors.ICON_FEEDBACK_WARNING };
const obj4 = { color: importDefault(dependencyMap[6]).colors.ICON_FEEDBACK_WARNING };
obj.subLabelCritical = { color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_CRITICAL };
let closure_9 = obj.createStyles(obj);
const obj5 = { color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_CRITICAL };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default function FamilyCenterSettingsControls() {
  let obj = arg1(dependencyMap[15]);
  if (0 === obj.useActiveLinkUserIds().length) {
    return null;
  } else {
    obj = { children: closure_7(tmp ? FamilyCenterSettingsTeenControls : FamilyCenterSettingsParentalControls, {}) };
    closure_7(View, obj);
    const tmp3 = View;
  }
};
