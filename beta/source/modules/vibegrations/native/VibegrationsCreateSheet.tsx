// Module ID: 16243
// Function ID: 16244
// Name: VibegrationsCreateSheet
// Dependencies: [5, 32, 19, 17, 12644, 21, 4837, 588, 5372, 8493, 4801, 12449, 16244, 1127, 3718, 6617, 16245, 16246, 16249, 16250, 6624, 6571, 6507, 5997, 5916, 4833, 16247, 5282, 2]
// Exports: default

// Module 16243 (VibegrationsCreateSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4801 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5372 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6617 */;
import VibegrationsEffortPicker from "VibegrationsEffortPicker" /* 16246 */;
import VibegrationsTemplateWizardSheet from "VibegrationsTemplateWizardSheet" /* 16250 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12644 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const VibegrationsTemplateWizardSheetDefault = VibegrationsTemplateWizardSheet;
let c2, closure_12, install_scope;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ ensureConnection: metroImportDefault, sendUserMessage: metroImportAll, stageModelSettings: c9 } = VibegrationsConnectionStore);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const VibegrationsCreateSheet_str = "VibegrationsCreateSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, form: obj3, section: obj4, sectionHeading: obj5 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsCreateSheet.tsx");

export default function VibegrationsCreateSheet(guildId) {
  let BottomSheetTitleHeader;
  let TableRow;
  let TableRow2;
  let TableRow3;
  let Text;
  let VIBEGRATIONS_DEFAULT_TIER_SETTINGS;
  let _undefined;
  let c5;
  let c9;
  let choices;
  let closure_4;
  let first;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items8;
  let items9;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj15;
  let obj23;
  let obj5;
  let obj6;
  let onChange;
  let str;
  let title;
  let tmp13;
  let tmp25;
  let tmp4;
  guildId = guildId.guildId;
  const onCreated = guildId.onCreated;
  str = undefined;
  first = undefined;
  _slicedToArray = undefined;
  react = undefined;
  VIBEGRATIONS_DEFAULT_TIER_SETTINGS = undefined;
  let first1;
  let closure_8;
  c9 = undefined;
  let callback;
  let closure_11;
  closure_12 = undefined;
  let c13;
  let memo;
  let c15;
  let callback3;
  let closure_17;
  let tmp = c13();
  let obj = react;
  const tmp2 = _slicedToArray;
  [str, tmp4] = react.useState("");
  [first, _slicedToArray] = react.useState("guild");
  let tmp7 = _slicedToArray(react.useState(null), 2);
  [VIBEGRATIONS_DEFAULT_TIER_SETTINGS, c5] = tmp7;
  if (VIBEGRATIONS_DEFAULT_TIER_SETTINGS == null) {
    const tmp9 = str;
    VIBEGRATIONS_DEFAULT_TIER_SETTINGS = guildId(str[8]).VIBEGRATIONS_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result = tmp2(obj.useState(false), 2);
  first1 = tmp2Result[0];
  closure_8 = tmp2Result[1];
  [tmp13, c9] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  const useCallback = obj.useCallback;
  guildId = first((guild_id) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, value) {
      let obj7;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = undefined;
              closure_1_8(true);
              closure_1_9(null);
              c4 = 2;
              c5 = 3;
              c6 = 1;
              const obj5 = { guild_id, install_scope };
              const obj8 = { value: obj7.createProject(obj5), done: false };
              obj7 = guild_id(str[9]);
              return obj8;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1_8(false);
            throw install_scope;
          } else {
            if (2 === c5) {
              c4 = 1;
              closure_2 = install_scope;
              const obj2 = guild_id(str[11]);
              closure_1_9(obj2.getVibegrationsCreateErrorMessage(closure_2));
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_8(false);
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              first1(closure_1);
              _undefined(closure_1, c6);
              guild_id(closure_1);
              const obj6 = onCreated(str[10]);
              obj6.hideActionSheet(closure_2_12);
              closure_1(closure_1, guild_id);
              c4 = 1;
            }
            c4 = 0;
            closure_1_8(false);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          install_scope = tmp25;
          if (0 === c4) {
            c6 = 3;
            throw tmp25;
          } else if (1 === tmp27) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  let items = [guildId, first, VIBEGRATIONS_DEFAULT_TIER_SETTINGS, onCreated];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = obj.useCallback;
  guildId = first(function*(arg0, value) {
    closure_0 = arg0;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = closure_0;
            if (closure_0 == null) {
              closure_1 = c2;
            }
            const trimmed = closure_1.trim();
            const tmp7 = "" === trimmed || first1;
            if (!tmp7) {
              c3 = 1;
              c2 = 1;
              const obj4 = { value: callback((arg0) => closure_2_8(arg0, trimmed)), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  const items1 = [callback, str, first1];
  closure_11 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [guildId, first, VIBEGRATIONS_DEFAULT_TIER_SETTINGS, onCreated, first1];
  closure_12 = obj.useCallback(first(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let deleteProjectResult;
    let obj14;
    let obj9;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      let closure_2;
      try {
        let tmp;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guildId = undefined;
            tmp = undefined;
            closure_2 = undefined;
            const tmp78 = first1;
            if (!tmp78) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj14.pickVibegrationsArchive(), done: false };
              obj14 = guildId(closure_2[12]);
              return obj5;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const intl2 = guildId(closure_2[13]).intl;
          closure_129_9(intl2.string(tmp(closure_2[14])["02GpNr"]));
          c5 = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            guildId = value;
            c3 = 0;
            if (null != guildId) {
              const obj18 = guildId(closure_2[12]);
              tmp = obj18.describeVibegrationsArchiveRejection(guildId);
              if (null == tmp) {
                closure_129_8(true);
                closure_129_9(null);
                closure_2 = null;
                c3 = 3;
                const obj11 = { guild_id: closure_129_0, install_scope: closure_129_3 };
                c4 = 5;
                c5 = 1;
                const obj12 = { value: obj9.createProject(obj11), done: false };
                obj9 = guildId(closure_2[9]);
                return obj12;
              } else {
                closure_129_9(tmp);
              }
            }
          }
        } else if (3 === c4) {
          c3 = 0;
          closure_129_8(false);
          throw closure_2;
        } else {
          if (4 === c4) {
            c3 = 2;
            let closure_3 = closure_2;
            if (null != closure_2) {
              const obj7 = guildId(closure_2[9]);
              c4 = 7;
              c5 = 1;
              const obj13 = {
                value: deleteProjectResult.catch(() => {

                          }),
                done: false
              };
              deleteProjectResult = obj7.deleteProject(closure_2);
              return obj13;
            } else {
              const obj6 = guildId(closure_2[11]);
              closure_129_9(obj6.getVibegrationsCreateErrorMessage(closure_3));
            }
          } else if (5 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_8(false);
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_2 = value;
              first1(closure_2);
              _undefined(closure_2, closure_129_6);
              const sendVibegrationsArchiveImport = guildId(closure_2[12]).sendVibegrationsArchiveImport;
              const tmp99 = guildId(closure_2[12]);
              const intl3 = guildId(closure_2[13]).intl;
              c4 = 6;
              c5 = 1;
              const obj16 = { value: sendVibegrationsArchiveImport(closure_2, guildId, intl3.string(tmp(closure_2[14]).KjEtrZ)), done: false };
              return obj16;
            }
          } else if (6 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_8(false);
              c5 = 3;
              const obj17 = { value, done: true };
              return obj17;
            } else {
              const obj2 = tmp(closure_2[10]);
              obj2.hideActionSheet(closure_1_12);
              closure_129_1(closure_2, closure_129_0);
              c3 = 2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_8(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const intl = guildId(closure_2[13]).intl;
            closure_129_9(intl.string(tmp(closure_2[14])["02GpNr"]));
          }
          c3 = 0;
          closure_129_8(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp81) {
        closure_2 = tmp81;
        if (0 === c3) {
          c5 = 3;
          throw tmp81;
        } else if (1 === c3) {
          c4 = 1;
        } else if (2 === c3) {
          c4 = 3;
        } else {
          c4 = 4;
        }
      }
    }
  }), items2);
  let intl = guildId(str[13]).intl;
  const stringResult = intl.string(onCreated(str[14]).MLg0S8);
  c13 = stringResult;
  memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const obj = { guild: intl.string(onCreated(str[14]).LdgKdI), user: intl2.string(onCreated(str[14]).iqXIRN) };
    intl = guildId(str[13]).intl;
    intl2 = guildId(str[13]).intl;
    return obj;
  }, []);
  const items3 = [stringResult, memo];
  const callback1 = obj.useCallback(() => {
    let items;
    let obj2;
    const obj = {
      key: "VibegrationsInstallScope",
      header: obj2,
      hasIcons: false,
      options: items.map((item) => {
        let closure_0 = item;
        return {
          label: closure_14[item],
          onPress() {
            return closure_2_4(item);
          }
        };
      })
    };
    items = ["guild", "user"];
    obj2 = { title };
    const showSimpleActionSheet = Sheet_showSimpleActionSheet.showSimpleActionSheet;
    Sheet_showSimpleActionSheet;
    const result = showSimpleActionSheet(obj);
  }, items3);
  let obj2 = guildId(str[16]);
  const landingModelChoicesResult = obj2.landingModelChoices();
  c15 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, VIBEGRATIONS_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    let VibegrationsEffortPickerSheet;
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsEffortPicker.VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: authStore(VibegrationsEffortPickerSheet, obj2) };
    obj2 = { initialSettings: VIBEGRATIONS_DEFAULT_TIER_SETTINGS, tiers: VibegrationsTypes.VIBEGRATIONS_LANDING_TIER_SEATS, choices, onChange };
    VibegrationsEffortPickerSheet = VibegrationsEffortPicker.VibegrationsEffortPickerSheet;
    showActionSheet(obj);
  }, items4);
  let obj3 = guildId(str[18]);
  let result = obj3.vibegrationsTemplates();
  const items5 = [onCreated];
  callback3 = obj.useCallback((arg0, arg1) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(VibegrationsCreateSheet_str);
    onCreated(arg0, arg1);
  }, items5);
  const items6 = [callback, guildId, callback3, VIBEGRATIONS_DEFAULT_TIER_SETTINGS, first1];
  closure_17 = obj.useCallback((wizard) => {
    let obj2;
    let closure_0 = wizard;
    if (null == wizard.wizard) {
      const tmp = first1;
      if (!tmp) {
        const promise = callback((arg0) => {
          const obj = guildId(str[18]);
          return obj.startVibegrationsTemplateProject(arg0, closure_0);
        });
        promise.catch(() => {

        });
      }
    } else {
      let obj = { key: VibegrationsTemplateWizardSheet.VIBEGRATIONS_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: authStore(VibegrationsTemplateWizardSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { template: wizard, guildId, modelSettings: VIBEGRATIONS_DEFAULT_TIER_SETTINGS, onCreated: callback3 };
      showActionSheet(obj);
    }
  }, items6);
  let intl2 = guildId(str[13]).intl;
  const items7 = [intl2.string(onCreated(str[14])["E+Q26x"]), , ];
  let intl3 = guildId(str[13]).intl;
  items7[1] = intl3.string(onCreated(str[14])["06/jqP"]);
  const intl4 = guildId(str[13]).intl;
  items7[2] = intl4.string(onCreated(str[14])["3gSfUa"]);
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: callback(BottomSheetTitleHeader, obj5), children: tmp25(tmp26, obj6) };
  const ActionSheet = guildId(str[20]).ActionSheet;
  obj5 = { title: intl5.string(onCreated(str[14])["2tYpRK"]) };
  BottomSheetTitleHeader = guildId(str[21]).BottomSheetTitleHeader;
  intl5 = guildId(str[13]).intl;
  tmp25 = closure_11;
  obj6 = { style: tmp.content, children: items9 };
  let obj7 = { style: tmp.form, children: items8 };
  let obj8 = { placeholder: intl6.string(onCreated(str[14]).TU9IGR), autoComplete: "off", value: str, onChange: tmp4, disabled: first1 };
  const TextArea = guildId(str[22]).TextArea;
  intl6 = guildId(str[13]).intl;
  items8 = [callback(TextArea, obj8), , , , ];
  let obj9 = { hasIcons: false, children: callback(TableRow, obj10) };
  const TableRowGroup = guildId(str[23]).TableRowGroup;
  obj10 = { label: stringResult, trailing: callback(guildId(str[25]).Text, obj11), arrow: true, disabled: first1, onPress: callback1 };
  TableRow = guildId(str[24]).TableRow;
  obj11 = { variant: "text-md/normal", color: "text-muted", children: memo[first] };
  items8[1] = callback(TableRowGroup, obj9);
  let obj12 = { hasIcons: false, children: callback(TableRow2, obj13) };
  const TableRowGroup2 = guildId(str[23]).TableRowGroup;
  obj13 = { label: intl7.string(onCreated(str[14]).GDs9Vq), trailing: callback(Text, obj14), arrow: true, disabled: first1, onPress: callback2 };
  TableRow2 = guildId(str[24]).TableRow;
  intl7 = guildId(str[13]).intl;
  obj14 = { variant: "text-md/normal", color: "text-muted", children: obj15.vibegrationsTierDescription(VIBEGRATIONS_DEFAULT_TIER_SETTINGS.tier) };
  Text = guildId(str[25]).Text;
  obj15 = guildId(str[26]);
  items8[2] = callback(TableRowGroup2, obj12);
  let tmp24Result = null;
  if (null != tmp13) {
    let obj16 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp13 };
    tmp24Result = tmp24(tmp15(tmp16[25]).Text, obj16);
  }
  items8[3] = tmp24Result;
  let obj17 = {
    variant: "primary",
    text: intl8.string(tmp15(tmp16[13]).t.CumH4u),
    disabled: "" === str.trim(),
    loading: first1,
    onPress() {
      return closure_11();
    }
  };
  const Button = tmp15(tmp16[27]).Button;
  intl8 = tmp15(tmp16[13]).intl;
  items8[4] = callback(Button, obj17);
  items9 = [tmp25(tmp26, obj7), , , ];
  let obj18 = { style: tmp.section, children: items11 };
  const obj19 = { style: tmp.sectionHeading, children: items10 };
  const obj20 = { variant: "text-md/medium", color: "text-default", children: intl9.string(onCreated(str[14]).NRqfBN) };
  const Text2 = tmp15(tmp16[25]).Text;
  intl9 = tmp15(tmp16[13]).intl;
  items10 = [tmp24(Text2, obj20), ];
  const obj21 = { variant: "text-sm/normal", color: "text-muted", children: intl10.string(onCreated(str[14]).ROtSe7) };
  const Text3 = tmp15(tmp16[25]).Text;
  intl10 = tmp15(tmp16[13]).intl;
  items10[1] = callback(Text3, obj21);
  items11 = [tmp25(tmp26, obj19), ];
  const obj22 = { hasIcons: false, children: callback(TableRow3, obj23) };
  const TableRowGroup3 = tmp15(tmp16[23]).TableRowGroup;
  obj23 = {
    label: intl11.string(onCreated(str[14])["bxn/qp"]),
    arrow: true,
    disabled: first1,
    onPress() {
      const promise = closure_12();
      promise.catch(() => {

      });
    }
  };
  TableRow3 = tmp15(tmp16[24]).TableRow;
  intl11 = tmp15(tmp16[13]).intl;
  items11[1] = callback(TableRowGroup3, obj22);
  items9[1] = tmp25(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj18);
  const obj24 = { style: tmp.section, children: items13 };
  const obj25 = { style: tmp.sectionHeading, children: items12 };
  const obj26 = { variant: "text-md/medium", color: "text-default", children: intl12.string(onCreated(str[14]).FYK2xQ) };
  const Text4 = tmp15(tmp16[25]).Text;
  intl12 = tmp15(tmp16[13]).intl;
  items12 = [tmp24(Text4, obj26), ];
  const obj27 = { variant: "text-sm/normal", color: "text-muted", children: intl13.string(onCreated(str[14]).BTNdyX) };
  const Text5 = tmp15(tmp16[25]).Text;
  intl13 = tmp15(tmp16[13]).intl;
  items12[1] = callback(Text5, obj27);
  items13 = [tmp25(tmp26, obj25), ];
  const obj28 = {
    hasIcons: false,
    children: result.map((name) => {
      let intl;
      let obj2;
      let closure_0 = name;
      const obj = {
        label: name.name,
        subLabel: name.description,
        arrow: true,
        disabled: first1,
        accessibilityLabel: intl.formatToPlainString(onCreated(str[14]).ER1uQ4, obj2),
        onPress() {
          return closure_17(name);
        }
      };
      const TableRow = guildId(str[24]).TableRow;
      intl = guildId(str[13]).intl;
      obj2 = { name: name.name };
      return callback(TableRow, obj, name.id);
    })
  };
  const TableRowGroup4 = tmp15(tmp16[23]).TableRowGroup;
  items13[1] = callback(TableRowGroup4, obj28);
  items9[2] = tmp25(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj24);
  const obj29 = { style: tmp.section, children: items15 };
  const obj30 = { style: tmp.sectionHeading, children: items14 };
  const obj31 = { variant: "text-md/medium", color: "text-default", children: intl14.string(onCreated(str[14])["/SUK82"]) };
  const Text6 = tmp15(tmp16[25]).Text;
  intl14 = tmp15(tmp16[13]).intl;
  items14 = [tmp24(Text6, obj31), ];
  const obj32 = { variant: "text-sm/normal", color: "text-muted", children: intl15.string(onCreated(str[14])["+aBXyx"]) };
  const Text7 = tmp15(tmp16[25]).Text;
  intl15 = tmp15(tmp16[13]).intl;
  items14[1] = callback(Text7, obj32);
  items15 = [tmp25(tmp26, obj30), ];
  const obj33 = {
    hasIcons: false,
    children: items7.map((label) => {
      let closure_0 = label;
      const obj = {
        label,
        arrow: true,
        disabled: first1,
        onPress() {
          return closure_11(label);
        }
      };
      return callback(guildId(str[24]).TableRow, obj, label);
    })
  };
  const TableRowGroup5 = tmp15(tmp16[23]).TableRowGroup;
  items15[1] = callback(TableRowGroup5, obj33);
  items9[3] = tmp25(VIBEGRATIONS_DEFAULT_TIER_SETTINGS, obj29);
  return callback(ActionSheet, obj4);
};
export const VIBEGRATIONS_CREATE_SHEET_KEY = "VibegrationsCreateSheet";
