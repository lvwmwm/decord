// Module ID: 14442
// Function ID: 14443
// Name: FamilyCenterSettingsControls
// Dependencies: [19, 17, 6958, 1074, 21, 4836, 576, 4832, 1115, 2487, 5039, 14443, 1981, 14445, 5917, 8105, 14429, 1485, 14446, 5279, 5999, 5281, 7006, 4849, 14354, 6959, 14447, 2]
// Exports: default

// Module 14442 (FamilyCenterSettingsControls)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef2487 from "module_2487" /* 2487 */;
import Text_Text from "Text/Text" /* 4832 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 6959 */;
import LayerActionCreators from "LayerActionCreators" /* 7006 */;
import useUserLinks from "useUserLinks" /* 8105 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14447 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
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
  let tmp8;
  let trailing;
  teenId = teenId.teenId;
  const cap = teenId.cap;
  const tmp = closure_9();
  let obj = teenId(14445);
  const spendingLimitDisplayState = obj.useSpendingLimitDisplayState(cap);
  const kind = spendingLimitDisplayState.kind;
  if ("off" === kind) {
    let obj2 = { trailing: closure_7(teenId(4832).Text, obj3) };
    const intl2 = tmp2(1115).intl;
    obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(_modDef2487.YEnpaj) };
    intl2.string(_modDef2487.YEnpaj);
    tmp8 = obj2;
  } else if ("on" === kind) {
    const obj4 = { trailing: closure_7(teenId(4832).Text, obj5) };
    tmp8 = obj4;
    obj5 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
  } else if ("close-to-limit" === kind) {
    const obj6 = { trailing: closure_7(teenId(4832).Text, obj7), subLabel: closure_7(teenId(4832).Text, obj8) };
    tmp8 = obj6;
    obj7 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    obj8 = { variant: "text-sm/normal", style: tmp.subLabelWarning, children: spendingLimitDisplayState.remainingText };
  } else if ("spent" === kind) {
    const obj9 = { trailing: closure_7(teenId(4832).Text, obj10), subLabel: closure_7(teenId(4832).Text, obj11) };
    obj10 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    const intl = tmp2(1115).intl;
    obj11 = { variant: "text-sm/normal", style: tmp.subLabelCritical, children: intl.string(_modDef2487.Q2msVQ) };
    intl.string(_modDef2487.Q2msVQ);
    tmp8 = obj9;
  } else if ("blocked" === kind) {
    const obj12 = { trailing: closure_7(teenId(4832).Text, obj13), subLabel: closure_7(teenId(4832).Text, obj14) };
    const intl4 = tmp2(1115).intl;
    obj13 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef2487.kGFuGn) };
    intl4.string(_modDef2487.kGFuGn);
    const intl5 = tmp2(1115).intl;
    obj14 = { variant: "text-sm/normal", style: tmp.subLabelCritical, children: intl5.string(_modDef2487.FUu2b0) };
    intl5.string(_modDef2487.FUu2b0);
    tmp8 = obj12;
  }
  ({ trailing, subLabel } = tmp8);
  const obj15 = { label: intl3.string(_modDef2487.gMeekL), trailing, subLabel, onPress: fn, arrow: null != teenId, disabled: null == teenId };
  const TableRow = tmp2(5917).TableRow;
  intl3 = tmp2(1115).intl;
  fn = undefined;
  const tmp15 = closure_7;
  if (null != teenId) {
    fn = () => {
      const obj = ModalActionCreatorsDefault;
      const obj2 = { teenId };
      obj.pushLazy(asyncRequire(14443, dependencyMap.paths), obj2, undefined, { animation: "slide_from_right" });
    };
  }
  return tmp15(TableRow, obj15);
}
function FamilyCenterSettingsTeenControls() {
  let TableRowGroup;
  let activeLinkUserIds;
  let fn;
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
  const tmp = closure_9();
  let obj = activeLinkUserIds(handleOpenSettings[15]);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let obj2 = activeLinkUserIds(handleOpenSettings[16]);
  const selectedTeenUser = obj2.useSelectedTeenUser();
  let obj3 = activeLinkUserIds(handleOpenSettings[17]);
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
  const obj6 = { variant: "text-sm/semibold", children: intl.string(require("module_2487").ahKIJO) };
  const Text = tmp2(tmp3[7]).Text;
  intl = tmp2(tmp3[8]).intl;
  items = [closure_7(Text, obj6), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", children: intl2.format(require("module_2487").X9rW0j, obj8) };
  const Text2 = tmp2(tmp3[7]).Text;
  intl2 = tmp2(tmp3[8]).intl;
  obj8 = {
    openSettingsHook(children, arg1) {
      const obj = { variant: "text-sm/medium", color: "text-link", onPress: handleOpenSettings, children };
      return metroImportDefault(Text_Text.Text, obj, arg1);
    }
  };
  items[1] = closure_7(Text2, obj7);
  items1 = [closure_8(Stack2, obj5), , ];
  const obj9 = { style: tmp.controlsGroup, children: closure_8(TableRowGroup, obj11) };
  TableRowGroup = tmp2(tmp3[20]).TableRowGroup;
  const items2 = [closure_7(SpendingLimitRow, { cap: spendingLimitFromUserSettings }), ];
  const obj10 = { label: intl3.string(require("module_2487")["1Op+NP"]), subLabel, trailing, onPress: fn, arrow: rules.length > 0 };
  const TableRow = tmp2(tmp3[14]).TableRow;
  intl3 = tmp2(tmp3[8]).intl;
  fn = undefined;
  const tmp10 = View;
  const tmp6 = importDefault;
  if (rules.length > 0) {
    fn = () => {
      const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    };
  }
  obj11 = { hasIcons: false, children: items2 };
  items2[1] = closure_7(TableRow, obj10);
  items1[1] = closure_7(tmp10, obj9);
  const obj12 = {
    text: intl4.formatToPlainString(tmp6(handleOpenSettings[9]).w0JA3P, obj13),
    onPress() {
      const obj = LayerActionCreators;
      obj.popLayer();
      const obj2 = ChannelActionCreatorsDefault;
      const obj3 = { recipientIds: activeLinkUserIds };
      obj2.openPrivateChannel(obj3);
    },
    shrink: true,
    grow: false,
    variant: "secondary",
    size: "sm"
  };
  const Button = tmp2(tmp3[21]).Button;
  intl4 = tmp2(tmp3[8]).intl;
  obj13 = { count: activeLinkUserIds.length };
  items1[2] = closure_7(Button, obj12);
  return closure_8(Stack, obj4);
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
  const tmp = closure_9();
  let tmp2 = selectedTeenUser;
  let tmp3 = dependencyMap;
  let obj = selectedTeenUser(14429);
  selectedTeenUser = obj.useSelectedTeenUser();
  const obj2 = selectedTeenUser(14429);
  const shouldLoadSettingsForSelectedTeenUser = obj2.useShouldLoadSettingsForSelectedTeenUser();
  const obj3 = selectedTeenUser(1485);
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
  const ParentalControlledSpendingLimit = tmp2(14354).ParentalControlledSpendingLimit;
  let id;
  const useControlledSetting = ParentalControlledSpendingLimit.useControlledSetting;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  let id1;
  const controlledSetting = useControlledSetting(id);
  const useEffect = rules.useEffect;
  if (selectedTeenUser != null) {
    id1 = selectedTeenUser.id;
  }
  const items = [id1, shouldLoadSettingsForSelectedTeenUser];
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
  ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(14446)(rules));
  const obj4 = { style: tmp.parentalControlsContainer, children: items1 };
  shouldLoadSettingsForSelectedTeenUser(14446)(rules);
  const Stack = tmp2(5279).Stack;
  const obj5 = { variant: "text-sm/semibold", children: intl.string(shouldLoadSettingsForSelectedTeenUser(2487).ahKIJO) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items1 = [closure_7(Text, obj5), , ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(shouldLoadSettingsForSelectedTeenUser(2487).Sv236e) };
  const Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items1[1] = closure_7(Text2, obj6);
  const obj7 = { style: tmp.controlsGroup, children: closure_8(TableRowGroup, { hasIcons: false, children: items2 }) };
  TableRowGroup = tmp2(5999).TableRowGroup;
  const obj8 = {
    label: intl3.string(tmp2(1115).t["+o1pDZ"]),
    onPress() {
      const obj = { selectedSubPage: FamilyCenterSubPages.CONTENT_AND_SOCIAL };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    },
    arrow: true
  };
  const TableRow = tmp2(5917).TableRow;
  intl3 = tmp2(1115).intl;
  items2 = [closure_7(TableRow, obj8), , , ];
  const obj9 = {
    label: intl4.string(tmp2(1115).t.OAuOHD),
    onPress() {
      const obj = { selectedSubPage: FamilyCenterSubPages.DATA_AND_PRIVACY };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    },
    arrow: true
  };
  const TableRow2 = tmp2(5917).TableRow;
  intl4 = tmp2(1115).intl;
  items2[1] = closure_7(TableRow2, obj9);
  let id2;
  const tmp11 = shouldLoadSettingsForSelectedTeenUser;
  const tmp15 = View;
  if (selectedTeenUser != null) {
    id2 = selectedTeenUser.id;
  }
  let tmp14Result = null != id2;
  if (tmp14Result) {
    const obj10 = { cap: controlledSetting, teenId: selectedTeenUser.id };
    tmp14Result = tmp14(SpendingLimitRow, obj10);
  }
  items2[2] = tmp14Result;
  let id3;
  if (selectedTeenUser != null) {
    id3 = selectedTeenUser.id;
  }
  let tmp14Result2 = null != id3;
  if (tmp14Result2) {
    const obj11 = {
      label: intl5.string(tmp11(2487)["1Op+NP"]),
      subLabel,
      trailing,
      onPress() {
          let tmp2;
          const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS, autoOpenCreate: tmp2 };
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
    const TableRow3 = tmp2(5917).TableRow;
    intl5 = tmp2(1115).intl;
    tmp14Result2 = tmp14(TableRow3, obj11);
  }
  items2[3] = tmp14Result2;
  items1[2] = closure_7(tmp15, obj7);
  return closure_8(Stack, obj4);
}
const View = react_native.View;
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { teenControlsContainer: obj2, controlledSettingsHeader: obj3, parentalControlsContainer: obj4, controlsGroup: obj5, subLabelWarning: obj6, subLabelCritical: obj7 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6 = { color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj7 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default function FamilyCenterSettingsControls() {
  let tmp3Result = null;
  const tmp = useUserIsTeenAgeGroupDefault();
  const obj = useUserLinks;
  if (0 !== obj.useActiveLinkUserIds().length) {
    const obj2 = { children: metroImportDefault(tmp ? FamilyCenterSettingsTeenControls : FamilyCenterSettingsParentalControls, {}) };
    tmp3Result = tmp3(View, obj2);
  }
  return tmp3Result;
};
