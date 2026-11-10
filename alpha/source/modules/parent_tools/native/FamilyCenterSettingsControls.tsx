// Module ID: 17155
// Function ID: 17156
// Name: FamilyCenterSettingsControls
// Dependencies: [19, 17, 7795, 1072, 21, 5142, 575, 5753, 1113, 2664, 6801, 17156, 2118, 17158, 7041, 8444, 17142, 1499, 17159, 6161, 7129, 5760, 10698, 7840, 5838, 17066, 7796, 17160, 2]
// Exports: default

// Module 17155 (FamilyCenterSettingsControls)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import _modDef2664 from "module_2664" /* 2664 */;
import Text_Text from "Text/Text" /* 5753 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7796 */;
import LayerActionCreators from "LayerActionCreators" /* 7840 */;
import useUserLinks from "useUserLinks" /* 8444 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10698 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 17160 */;
import react from "react" /* 19 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7795 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function SpendingLimitRow(teenId) {
  let fn;
  let intl3;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj3;
  let obj5;
  let obj7;
  let obj8;
  let subLabel;
  let tmp16;
  let tmp17;
  let tmp8;
  let trailing;
  teenId = teenId.teenId;
  let flag = teenId.hasLoaded;
  const cap = teenId.cap;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_10();
  let obj = teenId(17158);
  const spendingLimitDisplayState = obj.useSpendingLimitDisplayState(cap);
  const kind = spendingLimitDisplayState.kind;
  if ("off" === kind) {
    let obj2 = { trailing: closure_8(teenId(5753).Text, obj3) };
    const intl2 = tmp2(1113).intl;
    obj3 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(_modDef2664.YEnpaj) };
    intl2.string(_modDef2664.YEnpaj);
    tmp8 = obj2;
  } else if ("on" === kind) {
    const obj4 = { trailing: closure_8(teenId(5753).Text, obj5) };
    tmp8 = obj4;
    obj5 = { variant: "body-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
  } else if ("close-to-limit" === kind) {
    const obj6 = { trailing: closure_8(teenId(5753).Text, obj7), subLabel: closure_8(teenId(5753).Text, obj8) };
    tmp8 = obj6;
    obj7 = { variant: "body-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj8 = { variant: "body-sm/normal", style: tmp.subLabelWarning, children: spendingLimitDisplayState.remainingText };
  } else if ("spent" === kind) {
    const obj9 = { trailing: closure_8(teenId(5753).Text, obj10), subLabel: closure_8(teenId(5753).Text, obj11) };
    obj10 = { variant: "body-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    const intl = tmp2(1113).intl;
    obj11 = { variant: "body-sm/normal", style: tmp.subLabelCritical, children: intl.string(_modDef2664.Q2msVQ) };
    intl.string(_modDef2664.Q2msVQ);
    tmp8 = obj9;
  } else if ("blocked" === kind) {
    const obj12 = { trailing: closure_8(teenId(5753).Text, obj13), subLabel: closure_8(teenId(5753).Text, obj14) };
    const intl4 = tmp2(1113).intl;
    obj13 = { variant: "body-sm/normal", color: "text-muted", children: intl4.string(_modDef2664.kGFuGn) };
    intl4.string(_modDef2664.kGFuGn);
    const intl5 = tmp2(1113).intl;
    obj14 = { variant: "body-sm/normal", style: tmp.subLabelCritical, children: intl5.string(_modDef2664.FUu2b0) };
    intl5.string(_modDef2664.FUu2b0);
    tmp8 = obj12;
  }
  ({ trailing, subLabel } = tmp8);
  const obj15 = { label: intl3.string(_modDef2664.gMeekL), trailing: tmp16, subLabel: tmp17, onPress: fn, arrow: null != teenId, disabled: null == teenId };
  const TableRow = tmp2(7041).TableRow;
  intl3 = tmp2(1113).intl;
  tmp16 = undefined;
  const tmp15 = closure_8;
  if (flag) {
    tmp16 = trailing;
  }
  tmp17 = undefined;
  if (flag) {
    tmp17 = subLabel;
  }
  fn = undefined;
  if (null != teenId) {
    fn = () => {
      const obj = ModalActionCreatorsDefault;
      const obj2 = { teenId };
      obj.pushLazy(asyncRequire(17156, dependencyMap.paths), obj2, hasOwnProperty, { animation: "slide_from_right" });
    };
  }
  return tmp15(TableRow, obj15);
}
function FamilyCenterSettingsTeenControls() {
  let TableRowGroup;
  let activeLinkUserIds;
  let handleTimeControlsPress;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj11;
  let obj13;
  let obj8;
  let subLabel;
  let trailing;
  function handleOpenSettings() {
    navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
  }
  let tmp = closure_10();
  let obj = activeLinkUserIds(handleOpenSettings[15]);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  const obj2 = activeLinkUserIds(handleOpenSettings[16]);
  const selectedTeenUser = obj2.useSelectedTeenUser();
  const obj3 = activeLinkUserIds(handleOpenSettings[17]);
  importDefault = obj3.useNavigation();
  let rules;
  if (selectedTeenUser != null) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      rules = restrictedSchedule.rules;
    }
  }
  if (rules == null) {
    rules = [];
  }
  const tmp2Result = activeLinkUserIds(handleOpenSettings[13]);
  const spendingLimitFromUserSettings = tmp2Result.useSpendingLimitFromUserSettings();
  ({ subLabel, trailing } = require("useScheduleTimeControlsRowProps")(rules));
  const obj4 = { style: tmp.teenControlsContainer, children: items1 };
  require("useScheduleTimeControlsRowProps")(rules);
  const Stack = tmp2(tmp3[19]).Stack;
  const obj5 = { style: tmp.controlledSettingsHeader, children: items };
  const Stack2 = tmp2(tmp3[19]).Stack;
  const obj6 = { variant: "body-sm/semibold", children: intl.string(require("module_2664").ahKIJO) };
  const Text = tmp2(tmp3[7]).Text;
  intl = tmp2(tmp3[8]).intl;
  items = [closure_8(Text, obj6), ];
  const obj7 = { variant: "body-sm/medium", color: "text-muted", children: intl2.format(require("module_2664").X9rW0j, obj8) };
  const Text2 = tmp2(tmp3[7]).Text;
  intl2 = tmp2(tmp3[8]).intl;
  obj8 = {
    openSettingsHook(children, arg1) {
      const obj = { variant: "body-sm/medium", color: "text-link", onPress: handleOpenSettings, children };
      return metroImportAll(Text_Text.Text, obj, arg1);
    }
  };
  items[1] = closure_8(Text2, obj7);
  items1 = [closure_9(Stack2, obj5), , ];
  const obj9 = { style: tmp.controlsGroup, children: closure_9(TableRowGroup, obj11) };
  TableRowGroup = tmp2(tmp3[20]).TableRowGroup;
  const items2 = [closure_8(SpendingLimitRow, { cap: spendingLimitFromUserSettings }), ];
  const obj10 = { label: intl3.string(require("module_2664")["1Op+NP"]), subLabel, trailing, onPress: handleTimeControlsPress, arrow: rules.length > 0 };
  const TableRow = tmp2(tmp3[14]).TableRow;
  intl3 = tmp2(tmp3[8]).intl;
  handleTimeControlsPress = undefined;
  const tmp10 = View;
  const tmp6 = importDefault;
  if (rules.length > 0) {
    handleTimeControlsPress = function handleTimeControlsPress() {
      const obj = { selectedSubPage: metroRequire.SCREEN_TIME_CONTROLS };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    };
  }
  obj11 = { hasIcons: false, children: items2 };
  items2[1] = closure_8(TableRow, obj10);
  items1[1] = closure_8(tmp10, obj9);
  const obj12 = {
    text: intl4.formatToPlainString(tmp6(handleOpenSettings[9]).w0JA3P, obj13),
    onPress: function handleMessageParentClick() {
      let length;
      const tmp = openLinkedUsersChannelDefault;
      tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
        const presentFailedToast = activeLinkUserIds(handleOpenSettings[24]).presentFailedToast;
        activeLinkUserIds(handleOpenSettings[24]);
        const intl = activeLinkUserIds(handleOpenSettings[8]).intl;
        const obj = { count: length.length };
        return presentFailedToast(intl.formatToPlainString(navigation(handleOpenSettings[9]).D1BwNC, obj));
      });
    },
    shrink: true,
    grow: false,
    variant: "secondary",
    size: "sm"
  };
  const Button = tmp2(tmp3[21]).Button;
  intl4 = tmp2(tmp3[8]).intl;
  obj13 = { count: activeLinkUserIds.length };
  items1[2] = closure_8(Button, obj12);
  return closure_9(Stack, obj4);
}
function FamilyCenterSettingsParentalControls() {
  let TableRowGroup;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let selectedTeenUser;
  let subLabel;
  let trailing;
  const tmp = closure_10();
  let tmp2 = selectedTeenUser;
  let tmp3 = dependencyMap;
  let obj = selectedTeenUser(17142);
  selectedTeenUser = obj.useSelectedTeenUser();
  const obj2 = selectedTeenUser(17142);
  const shouldLoadSettingsForSelectedTeenUser = obj2.useShouldLoadSettingsForSelectedTeenUser();
  const obj3 = selectedTeenUser(1499);
  dependencyMap = obj3.useNavigation();
  let rules;
  if (selectedTeenUser != null) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      rules = restrictedSchedule.rules;
    }
  }
  if (rules == null) {
    rules = [];
  }
  const ParentalControlledSpendingLimit = tmp2(17066).ParentalControlledSpendingLimit;
  let id;
  const useControlledSetting = ParentalControlledSpendingLimit.useControlledSetting;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const controlledSetting = useControlledSetting(id);
  let id1;
  const useHasLoadedSettingsForTeen = tmp2(17142).useHasLoadedSettingsForTeen;
  tmp2(17142);
  if (selectedTeenUser != null) {
    id1 = selectedTeenUser.id;
  }
  let id2;
  const hasLoadedSettingsForTeen = useHasLoadedSettingsForTeen(id1);
  const useEffect = rules.useEffect;
  if (selectedTeenUser != null) {
    id2 = selectedTeenUser.id;
  }
  const items = [id2, shouldLoadSettingsForSelectedTeenUser];
  const effect = useEffect(() => {
    let id;
    if (selectedTeenUser != null) {
      id = tmp.id;
    }
    const tmp3 = null != id && shouldLoadSettingsForSelectedTeenUser;
    if (tmp3) {
      const obj = FamilyCenterActionCreatorsDefault;
      const teenSettingsAndConsents = obj.fetchTeenSettingsAndConsents(tmp.id);
    }
  }, items);
  ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(17159)(rules));
  const obj4 = { style: tmp.parentalControlsContainer, children: items1 };
  shouldLoadSettingsForSelectedTeenUser(17159)(rules);
  const Stack = tmp2(6161).Stack;
  const obj5 = { variant: "body-sm/semibold", children: intl.string(shouldLoadSettingsForSelectedTeenUser(2664).ahKIJO) };
  const Text = tmp2(5753).Text;
  intl = tmp2(1113).intl;
  items1 = [closure_8(Text, obj5), , ];
  const obj6 = { variant: "body-sm/medium", color: "text-muted", children: intl2.string(shouldLoadSettingsForSelectedTeenUser(2664).Sv236e) };
  const Text2 = tmp2(5753).Text;
  intl2 = tmp2(1113).intl;
  items1[1] = closure_8(Text2, obj6);
  const obj7 = { style: tmp.controlsGroup, children: closure_9(TableRowGroup, { hasIcons: false, children: items2 }) };
  TableRowGroup = tmp2(7129).TableRowGroup;
  const obj8 = {
    label: intl3.string(tmp2(1113).t["+o1pDZ"]),
    onPress() {
      const obj = { selectedSubPage: metroRequire.CONTENT_AND_SOCIAL };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    },
    arrow: true
  };
  const TableRow = tmp2(7041).TableRow;
  intl3 = tmp2(1113).intl;
  items2 = [closure_8(TableRow, obj8), , , ];
  const obj9 = {
    label: intl4.string(tmp2(1113).t.OAuOHD),
    onPress() {
      const obj = { selectedSubPage: metroRequire.DATA_AND_PRIVACY };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    },
    arrow: true
  };
  const TableRow2 = tmp2(7041).TableRow;
  intl4 = tmp2(1113).intl;
  items2[1] = closure_8(TableRow2, obj9);
  let id3;
  const tmp14 = shouldLoadSettingsForSelectedTeenUser;
  const tmp18 = View;
  if (selectedTeenUser != null) {
    id3 = selectedTeenUser.id;
  }
  let tmp17Result = null != id3;
  if (tmp17Result) {
    const obj10 = { cap: controlledSetting, teenId: selectedTeenUser.id, hasLoaded: hasLoadedSettingsForTeen };
    tmp17Result = tmp17(SpendingLimitRow, obj10);
  }
  items2[2] = tmp17Result;
  let id4;
  if (selectedTeenUser != null) {
    id4 = selectedTeenUser.id;
  }
  let tmp17Result2 = null != id4;
  if (tmp17Result2) {
    const obj11 = {
      label: intl5.string(tmp14(2664)["1Op+NP"]),
      subLabel,
      trailing,
      onPress: function handleScreenTimeControlsPress() {
          let tmp2;
          const obj = { selectedSubPage: metroRequire.SCREEN_TIME_CONTROLS, autoOpenCreate: tmp2 };
          tmp2 = 0 === rules.length;
          const navigate = navigation.navigate;
          const FAMILY_CENTER_PARENTAL_CONTROLS = UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS;
          if (tmp2) {
            let id;
            if (selectedTeenUser != null) {
              id = selectedTeenUser.id;
            }
            tmp2 = null != id;
          }
          navigate(FAMILY_CENTER_PARENTAL_CONTROLS, obj);
        },
      arrow: true
    };
    const TableRow3 = tmp2(7041).TableRow;
    intl5 = tmp2(1113).intl;
    tmp17Result2 = tmp17(TableRow3, obj11);
  }
  items2[3] = tmp17Result2;
  items1[2] = closure_8(tmp18, obj7);
  return closure_9(Stack, obj4);
}
const View = react_native.View;
({ CHANGE_SPENDING_LIMIT_MODAL_KEY: hasOwnProperty, FamilyCenterSubPages: metroRequire } = FamilyCenterConstants);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { teenControlsContainer: obj2, controlledSettingsHeader: obj3, parentalControlsContainer: obj4, controlsGroup: obj5, subLabelWarning: obj6, subLabelCritical: obj7 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj7 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default function FamilyCenterSettingsControls() {
  let tmp3Result = null;
  const tmp = useUserIsTeenAgeGroupDefault();
  const obj = useUserLinks;
  if (0 !== obj.useActiveLinkUserIds().length) {
    const obj2 = { children: metroImportAll(tmp ? FamilyCenterSettingsTeenControls : FamilyCenterSettingsParentalControls, {}) };
    tmp3Result = tmp3(View, obj2);
  }
  return tmp3Result;
};
