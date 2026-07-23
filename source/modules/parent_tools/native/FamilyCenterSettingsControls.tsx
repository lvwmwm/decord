// Module ID: 13809
// Function ID: 105792
// Name: SpendingLimitRow
// Dependencies: [31, 27, 6770, 653, 33, 4130, 689, 4126, 1212, 2198, 4337, 13810, 1934, 13812, 5165, 7123, 13796, 6829, 1456, 13813, 4541, 5503, 4543, 6822, 4140, 13728, 6771, 13814, 2]
// Exports: default

// Module 13809 (SpendingLimitRow)
import result from "result";
import { View } from "useUserIsTeenAgeGroup";
import { FamilyCenterSubPages } from "items";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function SpendingLimitRow(teenId) {
  let subLabel;
  let trailing;
  teenId = teenId.teenId;
  let obj = teenId(13812);
  const tmp = _createForOfIteratorHelperLoose();
  ({ trailing, subLabel } = (function getSpendingLimitRowProps(kind, subLabelWarning) {
    function renderTrailing(monthlyText) {
      const obj = { variant: "text-sm/normal", color: "text-muted", children: monthlyText };
      return outer2_7(teenId(outer2_2[7]).Text, obj);
    }
    function renderSubLabel(intl2, subLabelCritical) {
      return outer2_7(teenId(outer2_2[7]).Text, { variant: "text-sm/normal", style: subLabelCritical, children: intl2 });
    }
    kind = kind.kind;
    if ("off" === kind) {
      let obj = {};
      const intl4 = teenId(outer1_2[8]).intl;
      obj.trailing = renderTrailing(intl4.string(outer1_1(outer1_2[9]).YEnpaj));
      return obj;
    } else if ("on" === kind) {
      obj = { trailing: renderTrailing(kind.monthlyText) };
      return obj;
    } else if ("close-to-limit" === kind) {
      const obj1 = { trailing: renderTrailing(kind.monthlyText), subLabel: renderSubLabel(kind.remainingText, subLabelWarning.subLabelWarning) };
      return obj1;
    } else if ("spent" === kind) {
      const obj2 = { trailing: renderTrailing(kind.monthlyText) };
      const intl3 = teenId(outer1_2[8]).intl;
      obj2.subLabel = renderSubLabel(intl3.string(outer1_1(outer1_2[9]).Q2msVQ), subLabelWarning.subLabelCritical);
      return obj2;
    } else if ("blocked" === kind) {
      obj = {};
      const intl = teenId(outer1_2[8]).intl;
      obj.trailing = renderTrailing(intl.string(outer1_1(outer1_2[9]).kGFuGn));
      const intl2 = teenId(outer1_2[8]).intl;
      obj.subLabel = renderSubLabel(intl2.string(outer1_1(outer1_2[9]).FUu2b0), subLabelWarning.subLabelCritical);
      return obj;
    }
  })(obj.useSpendingLimitDisplayState(teenId.cap), _createForOfIteratorHelperLoose()));
  obj = {};
  let intl = teenId(1212).intl;
  obj.label = intl.string(importDefault(2198).gMeekL);
  obj.trailing = trailing;
  obj.subLabel = subLabel;
  let fn;
  if (null != teenId) {
    fn = () => {
      let obj = outer1_1(outer1_2[10]);
      obj = { teenId };
      obj = { animation: "slide_from_right" };
      obj.pushLazy(teenId(outer1_2[12])(outer1_2[11], outer1_2.paths), obj, undefined, obj);
    };
  }
  obj.onPress = fn;
  obj.arrow = null != teenId;
  obj.disabled = null == teenId;
  return closure_7(teenId(5165).TableRow, obj);
}
function FamilyCenterSettingsTeenControls() {
  let subLabel;
  let trailing;
  function handleOpenSettings() {
    navigation.navigate(outer1_6.CONTENT_AND_SOCIAL);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = activeLinkUserIds(handleOpenSettings[15]);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let obj1 = activeLinkUserIds(handleOpenSettings[16]);
  const selectedTeenUser = obj1.useSelectedTeenUser();
  let obj2 = activeLinkUserIds(handleOpenSettings[17]);
  let isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterSettingsControls" });
  let obj3 = activeLinkUserIds(handleOpenSettings[18]);
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
  let obj4 = activeLinkUserIds(handleOpenSettings[13]);
  const spendingLimitFromUserSettings = obj4.useSpendingLimitFromUserSettings();
  ({ subLabel, trailing } = importDefault(handleOpenSettings[19])(rules));
  obj = { style: tmp.teenControlsContainer };
  obj = { style: tmp.controlledSettingsHeader };
  obj1 = { variant: "text-sm/semibold" };
  const intl = activeLinkUserIds(handleOpenSettings[8]).intl;
  obj1.children = intl.string(importDefault(handleOpenSettings[9]).ahKIJO);
  const items = [callback(activeLinkUserIds(handleOpenSettings[7]).Text, obj1), ];
  obj2 = { variant: "text-sm/medium", color: "text-muted" };
  const intl2 = activeLinkUserIds(handleOpenSettings[8]).intl;
  obj3 = {
    openSettingsHook(children) {
      const obj = { variant: "text-sm/medium", color: "text-link", onPress: handleOpenSettings, children };
      return outer1_7(activeLinkUserIds(handleOpenSettings[7]).Text, obj, arg1);
    }
  };
  obj2.children = intl2.format(importDefault(handleOpenSettings[9]).X9rW0j, obj3);
  items[1] = callback(activeLinkUserIds(handleOpenSettings[7]).Text, obj2);
  obj.children = items;
  const items1 = [callback2(activeLinkUserIds(handleOpenSettings[20]).Stack, obj), , ];
  if (isFamilyCenterV3Enabled) {
    obj4 = { style: tmp.controlsGroup };
    const obj5 = { hasIcons: false };
    const obj6 = { cap: spendingLimitFromUserSettings };
    const items2 = [callback(SpendingLimitRow, obj6), ];
    const obj7 = {};
    const intl3 = activeLinkUserIds(handleOpenSettings[8]).intl;
    obj7.label = intl3.string(importDefault(handleOpenSettings[9])["1Op+NP"]);
    obj7.subLabel = subLabel;
    obj7.trailing = trailing;
    let fn;
    if (rules.length > 0) {
      fn = () => {
        navigation.navigate(outer1_6.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: outer1_5.SCREEN_TIME_CONTROLS });
      };
    }
    obj7.onPress = fn;
    obj7.arrow = rules.length > 0;
    items2[1] = callback(activeLinkUserIds(handleOpenSettings[14]).TableRow, obj7);
    obj5.children = items2;
    obj4.children = callback2(activeLinkUserIds(handleOpenSettings[21]).TableRowGroup, obj5);
    isFamilyCenterV3Enabled = callback(View, obj4);
    const tmp14 = callback;
    const tmp7 = callback;
    const tmp8 = View;
    const tmp9 = callback2;
  }
  items1[1] = isFamilyCenterV3Enabled;
  const obj8 = { text: null, onPress: null, shrink: true, grow: false, variant: "secondary", size: "sm" };
  const intl4 = activeLinkUserIds(handleOpenSettings[8]).intl;
  obj8.text = intl4.formatToPlainString(importDefault(handleOpenSettings[9]).w0JA3P, { count: activeLinkUserIds.length });
  obj8.onPress = function onPress() {
    let obj = activeLinkUserIds(handleOpenSettings[23]);
    obj.popLayer();
    obj = { recipientIds: activeLinkUserIds };
    navigation(handleOpenSettings[24]).openPrivateChannel(obj);
  };
  items1[2] = callback(activeLinkUserIds(handleOpenSettings[22]).Button, obj8);
  obj.children = items1;
  return callback2(activeLinkUserIds(handleOpenSettings[20]).Stack, obj);
}
function FamilyCenterSettingsParentalControls() {
  let subLabel;
  let trailing;
  function handleSettingsClick(CONTENT_AND_SOCIAL) {
    navigation.navigate(outer1_6.FAMILY_CENTER_PARENTAL_CONTROLS, { selectedSubPage: CONTENT_AND_SOCIAL });
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = selectedTeenUser(13796);
  selectedTeenUser = obj.useSelectedTeenUser();
  let obj1 = selectedTeenUser(13796);
  const shouldLoadSettingsForSelectedTeenUser = obj1.useShouldLoadSettingsForSelectedTeenUser();
  let obj2 = selectedTeenUser(6829);
  let isFamilyCenterV3Enabled = obj2.useIsFamilyCenterV3Enabled({ location: "FamilyCenterSettingsControls" });
  let obj3 = selectedTeenUser(1456);
  const dependencyMap = obj3.useNavigation();
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
  const ParentalControlledSpendingLimit = selectedTeenUser(13728).ParentalControlledSpendingLimit;
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
  const effect = rules.useEffect(() => {
    let id;
    if (null != selectedTeenUser) {
      id = selectedTeenUser.id;
    }
    if (tmp3) {
      const teenSettingsAndConsents = shouldLoadSettingsForSelectedTeenUser(navigation[26]).fetchTeenSettingsAndConsents(selectedTeenUser.id);
      const obj = shouldLoadSettingsForSelectedTeenUser(navigation[26]);
    }
  }, items);
  ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(13813)(rules));
  obj = { style: tmp.parentalControlsContainer };
  obj = { variant: "text-sm/semibold" };
  const intl = selectedTeenUser(1212).intl;
  obj.children = intl.string(shouldLoadSettingsForSelectedTeenUser(2198).ahKIJO);
  const items1 = [callback(selectedTeenUser(4126).Text, obj), , ];
  obj1 = { variant: "text-sm/medium", color: "text-muted" };
  const intl2 = selectedTeenUser(1212).intl;
  obj1.children = intl2.string(shouldLoadSettingsForSelectedTeenUser(2198).Sv236e);
  items1[1] = callback(selectedTeenUser(4126).Text, obj1);
  obj2 = { style: tmp.controlsGroup };
  obj3 = { hasIcons: false };
  const obj4 = {};
  const intl3 = selectedTeenUser(1212).intl;
  obj4.label = intl3.string(selectedTeenUser(1212).t["+o1pDZ"]);
  obj4.onPress = function onPress() {
    handleSettingsClick(outer1_5.CONTENT_AND_SOCIAL);
  };
  obj4.arrow = true;
  const items2 = [callback(selectedTeenUser(5165).TableRow, obj4), , , ];
  const obj5 = {};
  const intl4 = selectedTeenUser(1212).intl;
  obj5.label = intl4.string(selectedTeenUser(1212).t.OAuOHD);
  obj5.onPress = function onPress() {
    handleSettingsClick(outer1_5.DATA_AND_PRIVACY);
  };
  obj5.arrow = true;
  items2[1] = callback(selectedTeenUser(5165).TableRow, obj5);
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
    const intl5 = selectedTeenUser(1212).intl;
    obj7.label = intl5.string(shouldLoadSettingsForSelectedTeenUser(2198)["1Op+NP"]);
    obj7.subLabel = subLabel;
    obj7.trailing = trailing;
    obj7.onPress = function onPress() {
      const obj = { selectedSubPage: outer1_5.SCREEN_TIME_CONTROLS };
      let tmp2 = 0 === rules.length;
      if (tmp2) {
        let id;
        if (null != selectedTeenUser) {
          id = selectedTeenUser.id;
        }
        tmp2 = null != id;
      }
      obj.autoOpenCreate = tmp2;
      navigation.navigate(outer1_6.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    };
    obj7.arrow = true;
    isFamilyCenterV3Enabled = callback(selectedTeenUser(5165).TableRow, obj7);
  }
  items2[3] = isFamilyCenterV3Enabled;
  obj3.children = items2;
  obj2.children = closure_8(selectedTeenUser(5503).TableRowGroup, obj3);
  items1[2] = callback(handleSettingsClick, obj2);
  obj.children = items1;
  return closure_8(selectedTeenUser(4541).Stack, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.teenControlsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.controlledSettingsHeader = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.parentalControlsContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.controlsGroup = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.subLabelWarning = { color: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
let obj4 = { color: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
_createForOfIteratorHelperLoose.subLabelCritical = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default function FamilyCenterSettingsControls() {
  let obj = require(7123) /* useUserIdsForLinkStatus */;
  if (0 === obj.useActiveLinkUserIds().length) {
    return null;
  } else {
    obj = { children: closure_7(tmp ? FamilyCenterSettingsTeenControls : FamilyCenterSettingsParentalControls, {}) };
    closure_7(View, obj);
    const tmp3 = View;
  }
};
