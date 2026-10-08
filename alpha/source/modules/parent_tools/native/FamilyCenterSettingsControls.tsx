// Module ID: 14991
// Function ID: 14992
// Name: FamilyCenterSettingsControls
// Dependencies: [19, 17, 7248, 1085, 21, 5090, 587, 5086, 1126, 2565, 5940, 14992, 1999, 558, 576, 14994, 6184, 7711, 14978, 1502, 7295, 7001, 14995, 5373, 6267, 5375, 14903, 7249, 14996, 2]

// Module 14991 (FamilyCenterSettingsControls)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import _modDef2565 from "module_2565" /* 2565 */;
import Text_Text from "Text/Text" /* 5086 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7001 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7248 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7249 */;
import LayerActionCreators from "LayerActionCreators" /* 7295 */;
import useUserLinks from "useUserLinks" /* 7711 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14996 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function getSpendingLimitRowProps(spendingLimitDisplayState, subLabelWarning) {
  let obj10;
  let obj11;
  let obj12;
  let obj13;
  let obj3;
  const kind = spendingLimitDisplayState.kind;
  if ("off" === kind) {
    const obj2 = { trailing: metroImportDefault(Text_Text.Text, obj3) };
    const intl4 = intl6.intl;
    obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(_modDef2565.YEnpaj) };
    intl4.string(_modDef2565.YEnpaj);
    return obj2;
  } else if ("on" === kind) {
    const obj4 = { trailing: metroImportDefault(Text_Text.Text, obj5) };
    return obj4;
  } else if ("close-to-limit" === kind) {
    const obj6 = { trailing: metroImportDefault(Text_Text.Text, obj7), subLabel: metroImportDefault(Text_Text.Text, obj8) };
    return obj6;
  } else if ("spent" === kind) {
    const obj9 = { trailing: metroImportDefault(Text_Text.Text, obj10), subLabel: metroImportDefault(Text_Text.Text, obj11) };
    obj10 = { variant: "text-sm/normal", color: "text-muted", children: spendingLimitDisplayState.monthlyText };
    const intl3 = intl6.intl;
    obj11 = { variant: "text-sm/normal", style: subLabelWarning.subLabelCritical, children: intl3.string(_modDef2565.Q2msVQ) };
    intl3.string(_modDef2565.Q2msVQ);
    return obj9;
  } else if ("blocked" === kind) {
    const obj = { trailing: metroImportDefault(Text_Text.Text, obj12), subLabel: metroImportDefault(Text_Text.Text, obj13) };
    const intl = intl6.intl;
    obj12 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(_modDef2565.kGFuGn) };
    intl.string(_modDef2565.kGFuGn);
    const intl2 = intl6.intl;
    obj13 = { variant: "text-sm/normal", style: subLabelWarning.subLabelCritical, children: intl2.string(_modDef2565.FUu2b0) };
    intl2.string(_modDef2565.FUu2b0);
    return obj;
  }
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpendingLimitRow(teenId) {
  let subLabel;
  let trailing;
  let obj = teenId(576);
  const cResult = obj.c(13);
  teenId = teenId.teenId;
  const cap = teenId.cap;
  const tmp4 = closure_9();
  let obj2 = teenId(14994);
  const spendingLimitDisplayState = obj2.useSpendingLimitDisplayState(cap);
  if (cResult[0] === spendingLimitDisplayState) {
    let tmp6;
    let tmp11;
    if (cResult[1] === tmp4) {
      tmp6 = cResult[2];
    }
    ({ trailing, subLabel } = tmp6);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(_modDef2565.gMeekL);
      cResult[3] = stringResult;
      tmp11 = stringResult;
    } else {
      tmp11 = cResult[3];
    }
    if (cResult[4] === null == teenId) {
      let tmp14;
      if (cResult[5] === teenId) {
        tmp14 = cResult[6];
      }
      if (cResult[7] === null == teenId) {
        if (cResult[8] === subLabel) {
          if (cResult[9] === tmp14) {
            if (cResult[10] === null != teenId) {
              let tmp16;
              if (cResult[11] === trailing) {
                tmp16 = cResult[12];
              }
              return tmp16;
            }
          }
        }
      }
      const obj3 = { label: tmp11, trailing, subLabel, onPress: tmp14, arrow: null != teenId, disabled: null == teenId };
      const tmp18 = closure_7(teenId(6184).TableRow, obj3);
      cResult[7] = null == teenId;
      cResult[8] = subLabel;
      cResult[9] = tmp14;
      cResult[10] = null != teenId;
      cResult[11] = trailing;
      cResult[12] = tmp18;
      tmp16 = tmp18;
    }
    let fn;
    if (null != teenId) {
      fn = () => {
        const obj = ModalActionCreatorsDefault;
        const obj2 = { teenId };
        obj.pushLazy(asyncRequire(14992, dependencyMap.paths), obj2, undefined, { animation: "slide_from_right" });
      };
    }
    cResult[4] = null == teenId;
    cResult[5] = teenId;
    cResult[6] = fn;
    tmp14 = fn;
  }
  const tmp7 = getSpendingLimitRowProps(spendingLimitDisplayState, tmp4);
  cResult[0] = spendingLimitDisplayState;
  cResult[1] = tmp4;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function SpendingLimitRow(teenId) {
  let fn;
  let intl;
  let subLabel;
  let trailing;
  teenId = teenId.teenId;
  const cap = teenId.cap;
  const tmp = closure_9();
  let obj = teenId(14994);
  ({ trailing, subLabel } = getSpendingLimitRowProps(obj.useSpendingLimitDisplayState(cap), tmp));
  let obj2 = { label: intl.string(_modDef2565.gMeekL), trailing, subLabel, onPress: fn, arrow: null != teenId, disabled: null == teenId };
  getSpendingLimitRowProps(obj.useSpendingLimitDisplayState(cap), tmp);
  const TableRow = teenId(6184).TableRow;
  intl = teenId(1126).intl;
  fn = undefined;
  const tmp4 = closure_7;
  if (null != teenId) {
    fn = () => {
      const obj = ModalActionCreatorsDefault;
      const obj2 = { teenId };
      obj.pushLazy(asyncRequire(14992, dependencyMap.paths), obj2, undefined, { animation: "slide_from_right" });
    };
  }
  return tmp4(TableRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterSettingsTeenControls() {
  let activeLinkUserIds;
  let arr2;
  let controlledSettingsHeader;
  let intl;
  let items;
  let items1;
  let items2;
  let onPress;
  let subLabel;
  let teenControlsContainer;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp19;
  let tmp21;
  let trailing;
  let obj = activeLinkUserIds(576);
  const cResult = obj.c(40);
  const tmp4 = closure_9();
  let obj2 = activeLinkUserIds(7711);
  activeLinkUserIds = obj2.useActiveLinkUserIds();
  let obj3 = activeLinkUserIds(14978);
  const selectedTeenUser = obj3.useSelectedTeenUser();
  const obj4 = activeLinkUserIds(1502);
  navigation = obj4.useNavigation();
  let rules;
  const first = cResult[0];
  if (selectedTeenUser != null) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      rules = restrictedSchedule.rules;
    }
  }
  if (first !== rules) {
    let rules1;
    if (selectedTeenUser != null) {
      const restrictedSchedule2 = selectedTeenUser.restrictedSchedule;
      if (restrictedSchedule2 != null) {
        rules1 = restrictedSchedule2.rules;
      }
    }
    if (rules1 == null) {
      rules1 = [];
    }
    let rules2;
    if (selectedTeenUser != null) {
      const restrictedSchedule3 = selectedTeenUser.restrictedSchedule;
      if (restrictedSchedule3 != null) {
        rules2 = restrictedSchedule3.rules;
      }
    }
    cResult[0] = rules2;
    cResult[1] = rules1;
    arr2 = rules1;
  } else {
    arr2 = cResult[1];
  }
  const tmpResult = activeLinkUserIds(14994);
  const spendingLimitFromUserSettings = tmpResult.useSpendingLimitFromUserSettings();
  if (cResult[2] !== activeLinkUserIds) {
    function handleMessageParentClick() {
      const obj = LayerActionCreators;
      obj.popLayer();
      const obj2 = ChannelActionCreatorsDefault;
      const obj3 = { recipientIds: activeLinkUserIds };
      obj2.openPrivateChannel(obj3);
    }
    cResult[2] = activeLinkUserIds;
    cResult[3] = handleMessageParentClick;
    tmp11 = handleMessageParentClick;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== navigation) {
    function handleOpenSettings() {
      navigation.navigate(UserSettingsSections.CONTENT_AND_SOCIAL);
    }
    cResult[4] = navigation;
    cResult[5] = handleOpenSettings;
    tmp12 = handleOpenSettings;
  } else {
    tmp12 = cResult[5];
  }
  dependencyMap = tmp12;
  if (cResult[6] !== navigation) {
    function handleTimeControlsPress() {
      const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    }
    cResult[6] = navigation;
    cResult[7] = handleTimeControlsPress;
    tmp13 = handleTimeControlsPress;
  } else {
    tmp13 = cResult[7];
  }
  ({ subLabel, trailing } = navigation(14995)(arr2));
  ({ teenControlsContainer, controlledSettingsHeader } = tmp4);
  navigation(14995)(arr2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { variant: "text-sm/semibold", children: intl.string(navigation(2565).ahKIJO) };
    const Text = tmp(5086).Text;
    intl = tmp(1126).intl;
    const tmp18 = closure_7(Text, obj5);
    cResult[8] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== tmp12) {
    const intl2 = tmp(1126).intl;
    const obj6 = {
      openSettingsHook(children, arg1) {
          const obj = { variant: "text-sm/medium", color: "text-link", onPress, children };
          return metroImportDefault(Text_Text.Text, obj, arg1);
        }
    };
    const formatResult = intl2.format(navigation(2565).X9rW0j, obj6);
    cResult[9] = tmp12;
    cResult[10] = formatResult;
    tmp19 = formatResult;
  } else {
    tmp19 = cResult[10];
  }
  if (cResult[11] !== tmp19) {
    const obj7 = { variant: "text-sm/medium", color: "text-muted", children: tmp19 };
    const tmp23 = closure_7(activeLinkUserIds(5086).Text, obj7);
    cResult[11] = tmp19;
    cResult[12] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[12];
  }
  if (cResult[13] === tmp4.controlledSettingsHeader) {
    let tmp24;
    let tmp26;
    let tmp30;
    if (cResult[14] === tmp21) {
      tmp24 = cResult[15];
    }
    const controlsGroup = tmp4.controlsGroup;
    if (cResult[16] !== spendingLimitFromUserSettings) {
      const obj8 = { cap: spendingLimitFromUserSettings };
      const tmp29 = closure_7(closure_11, obj8);
      cResult[16] = spendingLimitFromUserSettings;
      cResult[17] = tmp29;
      tmp26 = tmp29;
    } else {
      tmp26 = cResult[17];
    }
    const _Symbol = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult = intl3.string(navigation(2565)["1Op+NP"]);
      cResult[18] = stringResult;
      tmp30 = stringResult;
    } else {
      tmp30 = cResult[18];
    }
    let tmp32;
    if (arr2.length > 0) {
      tmp32 = tmp13;
    }
    if (cResult[19] === subLabel) {
      if (cResult[20] === tmp32) {
        if (cResult[21] === arr2.length > 0) {
          let tmp34;
          if (cResult[22] === trailing) {
            tmp34 = cResult[23];
          }
          if (cResult[24] === tmp26) {
            let tmp37;
            if (cResult[25] === tmp34) {
              tmp37 = cResult[26];
            }
            if (cResult[27] === tmp4.controlsGroup) {
              let tmp40;
              let tmp44;
              if (cResult[28] === tmp37) {
                tmp40 = cResult[29];
              }
              if (cResult[30] !== activeLinkUserIds.length) {
                const intl4 = tmp(1126).intl;
                const obj9 = { count: activeLinkUserIds.length };
                const formatToPlainStringResult = intl4.formatToPlainString(navigation(2565).w0JA3P, obj9);
                cResult[30] = activeLinkUserIds.length;
                cResult[31] = formatToPlainStringResult;
                tmp44 = formatToPlainStringResult;
              } else {
                tmp44 = cResult[31];
              }
              if (cResult[32] === tmp11) {
                let tmp46;
                if (cResult[33] === tmp44) {
                  tmp46 = cResult[34];
                }
                if (cResult[35] === tmp4.teenControlsContainer) {
                  if (cResult[36] === tmp40) {
                    if (cResult[37] === tmp46) {
                      let tmp49;
                      if (cResult[38] === tmp24) {
                        tmp49 = cResult[39];
                      }
                      return tmp49;
                    }
                  }
                }
                const obj10 = { style: teenControlsContainer, children: items };
                items = [tmp24, tmp40, tmp46];
                const tmp51 = closure_8(activeLinkUserIds(5373).Stack, obj10);
                cResult[35] = tmp4.teenControlsContainer;
                cResult[36] = tmp40;
                cResult[37] = tmp46;
                cResult[38] = tmp24;
                cResult[39] = tmp51;
                tmp49 = tmp51;
              }
              const obj11 = { text: tmp44, onPress: tmp11, shrink: true, grow: false, variant: "secondary", size: "sm" };
              const tmp48 = closure_7(activeLinkUserIds(5375).Button, obj11);
              cResult[32] = tmp11;
              cResult[33] = tmp44;
              cResult[34] = tmp48;
              tmp46 = tmp48;
            }
            const obj12 = { style: controlsGroup, children: tmp37 };
            const tmp43 = closure_7(View, obj12);
            cResult[27] = tmp4.controlsGroup;
            cResult[28] = tmp37;
            cResult[29] = tmp43;
            tmp40 = tmp43;
          }
          const obj13 = { hasIcons: false, children: items1 };
          items1 = [tmp26, tmp34];
          const tmp39 = closure_8(activeLinkUserIds(6267).TableRowGroup, obj13);
          cResult[24] = tmp26;
          cResult[25] = tmp34;
          cResult[26] = tmp39;
          tmp37 = tmp39;
        }
      }
    }
    const obj14 = { label: tmp30, subLabel, trailing, onPress: tmp32, arrow: arr2.length > 0 };
    const tmp36 = closure_7(activeLinkUserIds(6184).TableRow, obj14);
    cResult[19] = subLabel;
    cResult[20] = tmp32;
    cResult[21] = arr2.length > 0;
    cResult[22] = trailing;
    cResult[23] = tmp36;
    tmp34 = tmp36;
  }
  const obj15 = { style: controlledSettingsHeader, children: items2 };
  items2 = [tmp16, tmp21];
  const tmp25 = closure_8(activeLinkUserIds(5373).Stack, obj15);
  cResult[13] = tmp4.controlledSettingsHeader;
  cResult[14] = tmp21;
  cResult[15] = tmp25;
  tmp24 = tmp25;
}) : (function FamilyCenterSettingsTeenControls() {
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
  const tmp = closure_9();
  let obj = activeLinkUserIds(handleOpenSettings[17]);
  activeLinkUserIds = obj.useActiveLinkUserIds();
  let obj2 = activeLinkUserIds(handleOpenSettings[18]);
  const selectedTeenUser = obj2.useSelectedTeenUser();
  let obj3 = activeLinkUserIds(handleOpenSettings[19]);
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
  const tmp2Result = activeLinkUserIds(handleOpenSettings[15]);
  const spendingLimitFromUserSettings = tmp2Result.useSpendingLimitFromUserSettings();
  ({ subLabel, trailing } = require("useScheduleTimeControlsRowProps")(rules));
  const obj4 = { style: tmp.teenControlsContainer, children: items1 };
  require("useScheduleTimeControlsRowProps")(rules);
  const Stack = tmp2(tmp3[23]).Stack;
  const obj5 = { style: tmp.controlledSettingsHeader, children: items };
  const Stack2 = tmp2(tmp3[23]).Stack;
  const obj6 = { variant: "text-sm/semibold", children: intl.string(require("module_2565").ahKIJO) };
  const Text = tmp2(tmp3[7]).Text;
  intl = tmp2(tmp3[8]).intl;
  items = [closure_7(Text, obj6), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", children: intl2.format(require("module_2565").X9rW0j, obj8) };
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
  TableRowGroup = tmp2(tmp3[24]).TableRowGroup;
  const items2 = [closure_7(closure_11, { cap: spendingLimitFromUserSettings }), ];
  const obj10 = { label: intl3.string(require("module_2565")["1Op+NP"]), subLabel, trailing, onPress: handleTimeControlsPress, arrow: rules.length > 0 };
  const TableRow = tmp2(tmp3[16]).TableRow;
  intl3 = tmp2(tmp3[8]).intl;
  handleTimeControlsPress = undefined;
  const tmp10 = View;
  const tmp6 = importDefault;
  if (rules.length > 0) {
    handleTimeControlsPress = function handleTimeControlsPress() {
      const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    };
  }
  obj11 = { hasIcons: false, children: items2 };
  items2[1] = closure_7(TableRow, obj10);
  items1[1] = closure_7(tmp10, obj9);
  const obj12 = {
    text: intl4.formatToPlainString(tmp6(handleOpenSettings[9]).w0JA3P, obj13),
    onPress: function handleMessageParentClick() {
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
  const Button = tmp2(tmp3[25]).Button;
  intl4 = tmp2(tmp3[8]).intl;
  obj13 = { count: activeLinkUserIds.length };
  items1[2] = closure_7(Button, obj12);
  return closure_8(Stack, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterSettingsParentalControls() {
  let arr;
  let intl;
  let intl2;
  let intl5;
  let items;
  let items1;
  let selectedTeenUser;
  let subLabel;
  let trailing;
  const tmp = selectedTeenUser;
  let tmp2 = navigation;
  let obj = selectedTeenUser(navigation[14]);
  const cResult = obj.c(41);
  const tmp4 = closure_9();
  const obj2 = selectedTeenUser(navigation[18]);
  selectedTeenUser = obj2.useSelectedTeenUser();
  const obj3 = selectedTeenUser(navigation[18]);
  const shouldLoadSettingsForSelectedTeenUser = obj3.useShouldLoadSettingsForSelectedTeenUser();
  const obj4 = selectedTeenUser(navigation[19]);
  navigation = obj4.useNavigation();
  let rules;
  const first = cResult[0];
  if (selectedTeenUser != null) {
    const restrictedSchedule = selectedTeenUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      rules = restrictedSchedule.rules;
    }
  }
  if (first !== rules) {
    let rules1;
    if (selectedTeenUser != null) {
      const restrictedSchedule2 = selectedTeenUser.restrictedSchedule;
      if (restrictedSchedule2 != null) {
        rules1 = restrictedSchedule2.rules;
      }
    }
    if (rules1 == null) {
      rules1 = [];
    }
    let rules2;
    if (selectedTeenUser != null) {
      const restrictedSchedule3 = selectedTeenUser.restrictedSchedule;
      if (restrictedSchedule3 != null) {
        rules2 = restrictedSchedule3.rules;
      }
    }
    cResult[0] = rules2;
    cResult[1] = rules1;
    arr = rules1;
  } else {
    arr = cResult[1];
  }
  const ParentalControlledSpendingLimit = tmp(tmp2[26]).ParentalControlledSpendingLimit;
  let id;
  const useControlledSetting = ParentalControlledSpendingLimit.useControlledSetting;
  if (selectedTeenUser != null) {
    id = selectedTeenUser.id;
  }
  const controlledSetting = useControlledSetting(id);
  if (cResult[2] === selectedTeenUser) {
    let tmp13;
    if (cResult[3] === shouldLoadSettingsForSelectedTeenUser) {
      tmp13 = cResult[4];
    }
    let id1;
    if (selectedTeenUser != null) {
      id1 = selectedTeenUser.id;
    }
    if (cResult[5] === shouldLoadSettingsForSelectedTeenUser) {
      let tmp15;
      let tmp18;
      if (cResult[6] === id1) {
        tmp15 = cResult[7];
      }
      const effect = arr.useEffect(tmp13, tmp15);
      if (cResult[8] !== navigation) {
        function handleSettingsClick(selectedSubPage) {
          const obj = { selectedSubPage };
          navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
        }
        cResult[8] = navigation;
        cResult[9] = handleSettingsClick;
        tmp18 = handleSettingsClick;
      } else {
        tmp18 = cResult[9];
      }
      let closure_4 = tmp18;
      if (cResult[10] === navigation) {
        if (cResult[11] === arr.length) {
          let tmp21;
          let tmp26;
          let tmp29;
          let tmp32;
          let tmp34;
          let tmp37;
          let tmp39;
          let id2;
          const tmp19 = cResult[12];
          if (selectedTeenUser != null) {
            id2 = selectedTeenUser.id;
          }
          if (tmp19 === id2) {
            tmp21 = cResult[13];
          }
          ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(tmp2[22])(arr));
          const _Symbol = Symbol;
          const parentalControlsContainer = tmp4.parentalControlsContainer;
          shouldLoadSettingsForSelectedTeenUser(tmp2[22])(arr);
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "text-sm/semibold", children: intl.string(shouldLoadSettingsForSelectedTeenUser(tmp2[9]).ahKIJO) };
            const Text = tmp(tmp2[7]).Text;
            intl = tmp(tmp2[8]).intl;
            const tmp28 = closure_7(Text, obj5);
            cResult[14] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(shouldLoadSettingsForSelectedTeenUser(tmp2[9]).Sv236e) };
            const Text2 = tmp(tmp2[7]).Text;
            intl2 = tmp(tmp2[8]).intl;
            const tmp31 = closure_7(Text2, obj6);
            cResult[15] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[15];
          }
          const _Symbol3 = Symbol;
          const controlsGroup = tmp4.controlsGroup;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[8]).intl;
            const stringResult = intl3.string(tmp(tmp2[8]).t["+o1pDZ"]);
            cResult[16] = stringResult;
            tmp32 = stringResult;
          } else {
            tmp32 = cResult[16];
          }
          if (cResult[17] !== tmp18) {
            const obj7 = {
              label: tmp32,
              onPress() {
                          return closure_4(FamilyCenterSubPages.CONTENT_AND_SOCIAL);
                        },
              arrow: true
            };
            const tmp36 = closure_7(tmp(tmp2[16]).TableRow, obj7);
            cResult[17] = tmp18;
            cResult[18] = tmp36;
            tmp34 = tmp36;
          } else {
            tmp34 = cResult[18];
          }
          const _Symbol4 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[8]).intl;
            const stringResult1 = intl4.string(tmp(tmp2[8]).t.OAuOHD);
            cResult[19] = stringResult1;
            tmp37 = stringResult1;
          } else {
            tmp37 = cResult[19];
          }
          if (cResult[20] !== tmp18) {
            const obj8 = {
              label: tmp37,
              onPress() {
                          return closure_4(FamilyCenterSubPages.DATA_AND_PRIVACY);
                        },
              arrow: true
            };
            const tmp41 = closure_7(tmp(tmp2[16]).TableRow, obj8);
            cResult[20] = tmp18;
            cResult[21] = tmp41;
            tmp39 = tmp41;
          } else {
            tmp39 = cResult[21];
          }
          if (cResult[22] === controlledSetting) {
            let tmp42;
            if (cResult[23] === selectedTeenUser) {
              tmp42 = cResult[24];
            }
            if (cResult[25] === tmp21) {
              if (cResult[26] === subLabel) {
                if (cResult[27] === trailing) {
                  let tmp49;
                  let id3;
                  const tmp47 = cResult[28];
                  if (selectedTeenUser != null) {
                    id3 = selectedTeenUser.id;
                  }
                  if (tmp47 === id3) {
                    tmp49 = cResult[29];
                  }
                  if (cResult[30] === tmp34) {
                    if (cResult[31] === tmp39) {
                      if (cResult[32] === tmp42) {
                        let tmp54;
                        if (cResult[33] === tmp49) {
                          tmp54 = cResult[34];
                        }
                        if (cResult[35] === tmp4.controlsGroup) {
                          let tmp57;
                          if (cResult[36] === tmp54) {
                            tmp57 = cResult[37];
                          }
                          if (cResult[38] === tmp4.parentalControlsContainer) {
                            let tmp61;
                            if (cResult[39] === tmp57) {
                              tmp61 = cResult[40];
                            }
                            return tmp61;
                          }
                          const obj9 = { style: parentalControlsContainer, children: items };
                          items = [tmp26, tmp29, tmp57];
                          const tmp63 = closure_8(tmp(tmp2[23]).Stack, obj9);
                          cResult[38] = tmp4.parentalControlsContainer;
                          cResult[39] = tmp57;
                          cResult[40] = tmp63;
                          tmp61 = tmp63;
                        }
                        const obj10 = { style: controlsGroup, children: tmp54 };
                        const tmp60 = closure_7(closure_4, obj10);
                        cResult[35] = tmp4.controlsGroup;
                        cResult[36] = tmp54;
                        cResult[37] = tmp60;
                        tmp57 = tmp60;
                      }
                    }
                  }
                  const obj11 = { hasIcons: false, children: items1 };
                  items1 = [tmp34, tmp39, tmp42, tmp49];
                  const tmp56 = closure_8(tmp(tmp2[24]).TableRowGroup, obj11);
                  cResult[30] = tmp34;
                  cResult[31] = tmp39;
                  cResult[32] = tmp42;
                  cResult[33] = tmp49;
                  cResult[34] = tmp56;
                  tmp54 = tmp56;
                }
              }
            }
            let id4;
            if (selectedTeenUser != null) {
              id4 = selectedTeenUser.id;
            }
            let tmp51 = null != id4;
            if (tmp51) {
              const obj12 = { label: intl5.string(shouldLoadSettingsForSelectedTeenUser(tmp2[9])["1Op+NP"]), subLabel, trailing, onPress: tmp21, arrow: true };
              const TableRow = tmp(tmp2[16]).TableRow;
              intl5 = tmp(tmp2[8]).intl;
              tmp51 = closure_7(TableRow, obj12);
            }
            cResult[25] = tmp21;
            cResult[26] = subLabel;
            cResult[27] = trailing;
            let id5;
            if (selectedTeenUser != null) {
              id5 = selectedTeenUser.id;
            }
            cResult[28] = id5;
            cResult[29] = tmp51;
            tmp49 = tmp51;
          }
          let id6;
          if (selectedTeenUser != null) {
            id6 = selectedTeenUser.id;
          }
          let tmp44 = null != id6;
          if (tmp44) {
            const obj13 = { cap: controlledSetting, teenId: selectedTeenUser.id };
            tmp44 = closure_7(closure_11, obj13);
          }
          cResult[22] = controlledSetting;
          cResult[23] = selectedTeenUser;
          cResult[24] = tmp44;
          tmp42 = tmp44;
        }
      }
      cResult[10] = navigation;
      cResult[11] = arr.length;
      let id7;
      if (selectedTeenUser != null) {
        id7 = selectedTeenUser.id;
      }
      function handleScreenTimeControlsPress() {
        let tmp2;
        const obj = { selectedSubPage: FamilyCenterSubPages.SCREEN_TIME_CONTROLS, autoOpenCreate: tmp2 };
        tmp2 = 0 === arr.length;
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
      }
      cResult[12] = id7;
      cResult[13] = handleScreenTimeControlsPress;
      tmp21 = handleScreenTimeControlsPress;
    }
    const items2 = [id1, shouldLoadSettingsForSelectedTeenUser];
    cResult[5] = shouldLoadSettingsForSelectedTeenUser;
    cResult[6] = id1;
    cResult[7] = items2;
    tmp15 = items2;
  }
  const fn = function _() {
    let id;
    if (selectedTeenUser != null) {
      id = tmp.id;
    }
    const tmp3 = null != id && shouldLoadSettingsForSelectedTeenUser;
    if (tmp3) {
      const obj = FamilyCenterActionCreatorsDefault;
      const teenSettingsAndConsents = obj.fetchTeenSettingsAndConsents(tmp.id);
    }
  };
  cResult[2] = selectedTeenUser;
  cResult[3] = shouldLoadSettingsForSelectedTeenUser;
  cResult[4] = fn;
  tmp13 = fn;
}) : (function FamilyCenterSettingsParentalControls() {
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
  let obj = selectedTeenUser(14978);
  selectedTeenUser = obj.useSelectedTeenUser();
  const obj2 = selectedTeenUser(14978);
  const shouldLoadSettingsForSelectedTeenUser = obj2.useShouldLoadSettingsForSelectedTeenUser();
  const obj3 = selectedTeenUser(1502);
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
  const ParentalControlledSpendingLimit = tmp2(14903).ParentalControlledSpendingLimit;
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
  ({ subLabel, trailing } = shouldLoadSettingsForSelectedTeenUser(14995)(rules));
  const obj4 = { style: tmp.parentalControlsContainer, children: items1 };
  shouldLoadSettingsForSelectedTeenUser(14995)(rules);
  const Stack = tmp2(5373).Stack;
  const obj5 = { variant: "text-sm/semibold", children: intl.string(shouldLoadSettingsForSelectedTeenUser(2565).ahKIJO) };
  const Text = tmp2(5086).Text;
  intl = tmp2(1126).intl;
  items1 = [closure_7(Text, obj5), , ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(shouldLoadSettingsForSelectedTeenUser(2565).Sv236e) };
  const Text2 = tmp2(5086).Text;
  intl2 = tmp2(1126).intl;
  items1[1] = closure_7(Text2, obj6);
  const obj7 = { style: tmp.controlsGroup, children: closure_8(TableRowGroup, { hasIcons: false, children: items2 }) };
  TableRowGroup = tmp2(6267).TableRowGroup;
  const obj8 = {
    label: intl3.string(tmp2(1126).t["+o1pDZ"]),
    onPress() {
      const obj = { selectedSubPage: FamilyCenterSubPages.CONTENT_AND_SOCIAL };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    },
    arrow: true
  };
  const TableRow = tmp2(6184).TableRow;
  intl3 = tmp2(1126).intl;
  items2 = [closure_7(TableRow, obj8), , , ];
  const obj9 = {
    label: intl4.string(tmp2(1126).t.OAuOHD),
    onPress() {
      const obj = { selectedSubPage: FamilyCenterSubPages.DATA_AND_PRIVACY };
      navigation.navigate(UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS, obj);
    },
    arrow: true
  };
  const TableRow2 = tmp2(6184).TableRow;
  intl4 = tmp2(1126).intl;
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
    tmp14Result = tmp14(closure_11, obj10);
  }
  items2[2] = tmp14Result;
  let id3;
  if (selectedTeenUser != null) {
    id3 = selectedTeenUser.id;
  }
  let tmp14Result2 = null != id3;
  if (tmp14Result2) {
    const obj11 = {
      label: intl5.string(tmp11(2565)["1Op+NP"]),
      subLabel,
      trailing,
      onPress: function handleScreenTimeControlsPress() {
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
    const TableRow3 = tmp2(6184).TableRow;
    intl5 = tmp2(1126).intl;
    tmp14Result2 = tmp14(TableRow3, obj11);
  }
  items2[3] = tmp14Result2;
  items1[2] = closure_7(tmp15, obj7);
  return closure_8(Stack, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterSettingsControls() {
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = useUserIsTeenAgeGroupDefault();
  let tmp3 = null;
  const obj2 = useUserLinks;
  if (0 !== obj2.useActiveLinkUserIds().length) {
    let tmp4;
    if (cResult[0] !== tmp2) {
      const obj3 = { children: metroImportDefault(tmp2 ? closure_12 : closure_13, {}) };
      const tmp5Result = metroImportDefault(View, obj3);
      cResult[0] = tmp2;
      cResult[1] = tmp5Result;
      tmp4 = tmp5Result;
    } else {
      tmp4 = cResult[1];
    }
    tmp3 = tmp4;
  }
  return tmp3;
}) : (function FamilyCenterSettingsControls() {
  let tmp3Result = null;
  const tmp = useUserIsTeenAgeGroupDefault();
  const obj = useUserLinks;
  if (0 !== obj.useActiveLinkUserIds().length) {
    const obj2 = { children: metroImportDefault(tmp ? closure_12 : closure_13, {}) };
    tmp3Result = tmp3(View, obj2);
  }
  return tmp3Result;
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterSettingsControls.tsx");

export default tmp4;
