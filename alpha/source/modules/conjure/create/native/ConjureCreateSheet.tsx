// Module ID: 11677
// Function ID: 11678
// Name: ConjureCreateSheet
// Dependencies: [5, 32, 19, 17, 10656, 21, 4966, 587, 11678, 11679, 11680, 11681, 10678, 5192, 10682, 11682, 1128, 3830, 7268, 11697, 11701, 11702, 7275, 7225, 7159, 6966, 6882, 5216, 11698, 11710, 5226, 2]
// Exports: default

// Module 11677 (ConjureCreateSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5192 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7268 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 11680 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 11697 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 11702 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10656 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;
let c2, c3, closure_4, install_scope;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ ensureConnection: metroImportDefault, sendUserMessage: metroImportAll, stageModelSettings: c9 } = ConjureConnectionStore);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const ConjureCreateSheet_str = "ConjureCreateSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, form: obj3, section: obj4, sectionHeading: obj5 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  let BottomSheetTitleHeader;
  let CONJURE_DEFAULT_TIER_SETTINGS;
  let TableRow;
  let TableRow2;
  let TableRow3;
  let Text;
  let _undefined;
  let c10;
  let c4;
  let c6;
  let choices;
  let first;
  let initialInstallScope;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
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
  let obj12;
  let obj13;
  let obj23;
  let obj4;
  let obj5;
  let obj9;
  let onChange;
  let onCreated;
  let str;
  let str2;
  let title;
  let tmp14;
  let tmp25;
  let tmp4;
  let tmp5Result5;
  let tmp5Result6;
  guildId = guildId.guildId;
  ({ initialInstallScope, onCreated } = guildId);
  str = undefined;
  _slicedToArray = undefined;
  let str3;
  c6 = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let disabled;
  let closure_9;
  c10 = undefined;
  let callback;
  let closure_12;
  closure_13 = undefined;
  let c14;
  let memo;
  let c16;
  let callback3;
  let closure_18;
  let tmp = closure_13();
  let obj = str3;
  const tmp2 = _slicedToArray;
  [str, tmp4] = str3.useState("");
  const tmp6 = str;
  let tmp7 = guildId(str[8]);
  const isConjureEligibleGuild = tmp7.isConjureEligibleGuild;
  let obj2 = guildId(str[9]);
  let result = isConjureEligibleGuild(obj2.useConjureEligibleGuilds("ConjureCreateSheet"), guildId);
  _asyncToGenerator = result;
  const useState = str3.useState;
  if (initialInstallScope == null) {
    initialInstallScope = null;
  }
  [str2, c4] = tmp2(useState(initialInstallScope), 2);
  str3 = "user";
  tmp2(useState(initialInstallScope), 2);
  if (result) {
    str3 = str2;
  }
  [CONJURE_DEFAULT_TIER_SETTINGS, c6] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp5(tmp6[10]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result5 = tmp2(obj.useState(false), 2);
  disabled = tmp2Result5[0];
  closure_9 = tmp2Result5[1];
  [tmp14, c10] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  const tmp16 = onCreated(tmp6[11])();
  const useCallback = obj.useCallback;
  guildId = _asyncToGenerator(async (guild_id, templateId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj8;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = undefined;
              closure_1_9(true);
              closure_1_10(null);
              install_scope = 2;
              c6 = 3;
              c7 = 1;
              const obj5 = { guild_id, install_scope };
              const obj6 = { value: obj8.createProject(obj5), done: false };
              obj8 = guild_id(str[12]);
              return obj6;
            }
          } else if (1 === c6) {
            install_scope = 0;
            closure_1_9(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              install_scope = 1;
              closure_3 = closure_4;
              const obj2 = guild_id(str[14]);
              closure_1_10(obj2.getConjureCreateErrorMessage(closure_3));
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              install_scope = 0;
              closure_1_9(false);
              c7 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              const obj9 = { templateId };
              CONJURE_DEFAULT_TIER_SETTINGS(closure_2, obj9);
              closure_2_9(closure_2, c7);
              guild_id(closure_2);
              const obj7 = onCreated(str[13]);
              obj7.hideActionSheet(closure_2_12);
              templateId(closure_2, guild_id);
              install_scope = 1;
            }
            install_scope = 0;
            closure_1_9(false);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          closure_4 = tmp25;
          if (0 === install_scope) {
            c7 = 3;
            throw tmp25;
          } else if (1 === tmp27) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  const items = [guildId, str3, CONJURE_DEFAULT_TIER_SETTINGS, onCreated];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = obj.useCallback;
  guildId = _asyncToGenerator(async (arg0, value) => {
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
            const tmp7 = "" === trimmed || first;
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
  const items1 = [callback, str, disabled];
  closure_12 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [guildId, str3, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, disabled];
  closure_13 = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
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
            const tmp78 = first;
            if (!tmp78) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj14.pickConjureArchive(), done: false };
              obj14 = guildId(closure_2[15]);
              return obj5;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const intl2 = guildId(closure_2[16]).intl;
          closure_129_10(intl2.string(tmp(closure_2[17])["Q+l4Hv"]));
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
              const obj18 = guildId(closure_2[15]);
              tmp = obj18.describeConjureArchiveRejection(guildId);
              if (null == tmp) {
                closure_129_9(true);
                closure_129_10(null);
                closure_2 = null;
                c3 = 3;
                const obj11 = { guild_id: closure_129_0, install_scope: closure_129_5 };
                c4 = 5;
                c5 = 1;
                const obj12 = { value: obj9.createProject(obj11), done: false };
                obj9 = guildId(closure_2[12]);
                return obj12;
              } else {
                closure_129_10(tmp);
              }
            }
          }
        } else if (3 === c4) {
          c3 = 0;
          closure_129_9(false);
          throw closure_2;
        } else {
          if (4 === c4) {
            c3 = 2;
            let closure_3 = closure_2;
            if (null != closure_2) {
              const obj7 = guildId(closure_2[12]);
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
              const obj6 = guildId(closure_2[14]);
              closure_129_10(obj6.getConjureCreateErrorMessage(closure_3));
            }
          } else if (5 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_9(false);
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_2 = value;
              CONJURE_DEFAULT_TIER_SETTINGS(closure_2);
              closure_1_9(closure_2, closure_129_7);
              const sendConjureArchiveImport = guildId(closure_2[15]).sendConjureArchiveImport;
              const tmp99 = guildId(closure_2[15]);
              const intl3 = guildId(closure_2[16]).intl;
              c4 = 6;
              c5 = 1;
              const obj16 = { value: sendConjureArchiveImport(closure_2, guildId, intl3.string(tmp(closure_2[17])["LUc7/5"])), done: false };
              return obj16;
            }
          } else if (6 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_9(false);
              c5 = 3;
              const obj17 = { value, done: true };
              return obj17;
            } else {
              const obj2 = tmp(closure_2[13]);
              obj2.hideActionSheet(closure_1_12);
              closure_129_1(closure_2, closure_129_0);
              c3 = 2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_9(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const intl = guildId(closure_2[16]).intl;
            closure_129_10(intl.string(tmp(closure_2[17])["Q+l4Hv"]));
          }
          c3 = 0;
          closure_129_9(false);
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
  let intl = tmp5(tmp6[16]).intl;
  const stringResult = intl.string(onCreated(tmp6[17]).NyVn6T);
  c14 = stringResult;
  memo = obj.useMemo(() => {
    let intl;
    let intl2;
    const obj = { guild: intl.string(onCreated(str[17]).LlLIJw), user: intl2.string(onCreated(str[17]).s1TsXl) };
    intl = guildId(str[16]).intl;
    intl2 = guildId(str[16]).intl;
    return obj;
  }, []);
  const items3 = [result, stringResult, memo];
  const callback1 = obj.useCallback(() => {
    let arr;
    let obj2;
    const obj = {
      key: "ConjureInstallScope",
      stackingBehavior: "stack",
      header: obj2,
      hasIcons: false,
      options: arr.map((item) => {
        let closure_0 = item;
        return {
          label: closure_15[item],
          onPress() {
            return closure_2_4(item);
          }
        };
      })
    };
    obj2 = { title };
    const showSimpleActionSheet = Sheet_showSimpleActionSheet.showSimpleActionSheet;
    arr = c3 ? ["guild", "user"] : ["user"];
    Sheet_showSimpleActionSheet;
    const result = showSimpleActionSheet(obj);
  }, items3);
  const tmp5Result = guildId(tmp6[10]);
  const landingModelChoicesResult = tmp5Result.landingModelChoices();
  c16 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback2 = obj.useCallback(() => {
    let ConjureEffortPickerSheet;
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: authStore(ConjureEffortPickerSheet, obj2) };
    obj2 = { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureLandingModelChoices.CONJURE_LANDING_TIER_SEATS, choices, onChange };
    ConjureEffortPickerSheet = ConjureEffortPicker.ConjureEffortPickerSheet;
    showActionSheet(obj);
  }, items4);
  const items5 = [onCreated];
  const tmp5Result4 = guildId(tmp6[20]);
  const conjureTemplatesResult = tmp5Result4.conjureTemplates();
  callback3 = obj.useCallback((projectId, id) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureCreateSheet_str);
    onCreated(projectId, id);
  }, items5);
  const items6 = [callback, guildId, callback3, CONJURE_DEFAULT_TIER_SETTINGS, disabled];
  closure_18 = obj.useCallback((wizard) => {
    let obj2;
    let closure_0 = wizard;
    if (null == wizard.wizard) {
      const tmp = first;
      if (!tmp) {
        const promise = callback((arg0) => {
          const obj = guildId(str[20]);
          return obj.startConjureTemplateProject(arg0, closure_0);
        }, wizard.id);
        promise.catch(() => {

        });
      }
    } else {
      let obj = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: authStore(ConjureTemplateWizardSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback3 };
      showActionSheet(obj);
    }
  }, items6);
  let intl2 = tmp5(tmp6[16]).intl;
  const items7 = [intl2.string(onCreated(tmp6[17])["9w+Chc"]), , ];
  let intl3 = tmp5(tmp6[16]).intl;
  items7[1] = intl3.string(onCreated(tmp6[17]).WAvmdq);
  const intl4 = tmp5(tmp6[16]).intl;
  items7[2] = intl4.string(onCreated(tmp6[17]).SKsrzl);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: c10(BottomSheetTitleHeader, obj4), children: tmp25(tmp26, obj5) };
  const ActionSheet = tmp5(tmp6[22]).ActionSheet;
  obj4 = { title: intl5.string(onCreated(tmp6[17])["+5XyCR"]) };
  BottomSheetTitleHeader = tmp5(tmp6[23]).BottomSheetTitleHeader;
  intl5 = tmp5(tmp6[16]).intl;
  tmp25 = callback;
  obj5 = { style: tmp.content, children: items9 };
  let obj6 = { style: tmp.form, children: items8 };
  let obj7 = { placeholder: intl6.string(onCreated(tmp6[17]).ab1sMf), autoComplete: "off", value: str, onChange: tmp4, disabled };
  const TextArea = tmp5(tmp6[24]).TextArea;
  intl6 = tmp5(tmp6[16]).intl;
  items8 = [c10(TextArea, obj7), , , , , , ];
  let obj8 = { hasIcons: false, children: c10(TableRow, obj9) };
  const TableRowGroup = tmp5(tmp6[25]).TableRowGroup;
  obj9 = { label: stringResult, trailing: c10(tmp5(tmp6[27]).Text, obj10), arrow: true, disabled, onPress: callback1 };
  TableRow = tmp5(tmp6[26]).TableRow;
  obj10 = { variant: "text-md/normal", color: "text-muted", children: memo[str3] };
  items8[1] = c10(TableRowGroup, obj8);
  let obj11 = { hasIcons: false, children: c10(TableRow2, obj12) };
  const TableRowGroup2 = tmp5(tmp6[25]).TableRowGroup;
  obj12 = { label: intl7.string(onCreated(tmp6[17]).aBPQxX), trailing: c10(Text, obj13), arrow: true, disabled, onPress: callback2 };
  TableRow2 = tmp5(tmp6[26]).TableRow;
  intl7 = tmp5(tmp6[16]).intl;
  obj13 = { variant: "text-md/normal", color: "text-muted", children: tmp5Result5.conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier) };
  Text = tmp5(tmp6[27]).Text;
  tmp5Result5 = guildId(tmp6[28]);
  items8[2] = c10(TableRowGroup2, obj11);
  let tmp24Result = null;
  if (null != tmp16) {
    let str4 = "text-muted";
    const Text2 = tmp5(tmp6[27]).Text;
    if (0 === tmp16) {
      str4 = "text-feedback-warning";
    }
    let obj14 = { variant: "text-sm/normal", color: str4, children: tmp5Result6.conjureAppSlotsLeftLabel(tmp16) };
    tmp5Result6 = guildId(tmp6[29]);
    tmp24Result = tmp24(Text2, obj14);
  }
  items8[3] = tmp24Result;
  let tmp24Result2 = null;
  if (null != tmp14) {
    let obj15 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp14 };
    tmp24Result2 = tmp24(tmp5(tmp6[27]).Text, obj15);
  }
  items8[4] = tmp24Result2;
  let obj16 = { variant: "text-xs/normal", color: "text-muted", children: intl8.string(tmp15(tmp6[17]).NvvCzX) };
  const Text3 = tmp5(tmp6[27]).Text;
  intl8 = tmp5(tmp6[16]).intl;
  items8[5] = c10(Text3, obj16);
  let obj17 = {
    variant: "primary",
    text: intl9.string(tmp5(tmp6[16]).t.CumH4u),
    disabled: "" === str.trim(),
    loading: disabled,
    onPress() {
      return closure_12();
    }
  };
  const Button = tmp5(tmp6[30]).Button;
  intl9 = tmp5(tmp6[16]).intl;
  items8[6] = c10(Button, obj17);
  items9 = [tmp25(tmp26, obj6), , , ];
  let obj18 = { style: tmp.section, children: items11 };
  const obj19 = { style: tmp.sectionHeading, children: items10 };
  const obj20 = { variant: "text-md/medium", color: "text-default", children: intl10.string(onCreated(tmp6[17]).I7nPgX) };
  const Text4 = tmp5(tmp6[27]).Text;
  intl10 = tmp5(tmp6[16]).intl;
  items10 = [tmp24(Text4, obj20), ];
  const obj21 = { variant: "text-sm/normal", color: "text-muted", children: intl11.string(onCreated(tmp6[17]).FXB8wQ) };
  const Text5 = tmp5(tmp6[27]).Text;
  intl11 = tmp5(tmp6[16]).intl;
  items10[1] = c10(Text5, obj21);
  items11 = [tmp25(tmp26, obj19), ];
  const obj22 = { hasIcons: false, children: c10(TableRow3, obj23) };
  const TableRowGroup3 = tmp5(tmp6[25]).TableRowGroup;
  obj23 = {
    label: intl12.string(onCreated(tmp6[17])["C8/T2E"]),
    arrow: true,
    disabled,
    onPress() {
      const promise = closure_13();
      promise.catch(() => {

      });
    }
  };
  TableRow3 = tmp5(tmp6[26]).TableRow;
  intl12 = tmp5(tmp6[16]).intl;
  items11[1] = c10(TableRowGroup3, obj22);
  items9[1] = tmp25(c6, obj18);
  const obj24 = { style: tmp.section, children: items13 };
  const obj25 = { style: tmp.sectionHeading, children: items12 };
  const obj26 = { variant: "text-md/medium", color: "text-default", children: intl13.string(onCreated(tmp6[17]).zzYLlW) };
  const Text6 = tmp5(tmp6[27]).Text;
  intl13 = tmp5(tmp6[16]).intl;
  items12 = [tmp24(Text6, obj26), ];
  const obj27 = { variant: "text-sm/normal", color: "text-muted", children: intl14.string(onCreated(tmp6[17])["N88+Ld"]) };
  const Text7 = tmp5(tmp6[27]).Text;
  intl14 = tmp5(tmp6[16]).intl;
  items12[1] = c10(Text7, obj27);
  items13 = [tmp25(tmp26, obj25), ];
  const obj28 = {
    hasIcons: false,
    children: conjureTemplatesResult.map((name) => {
      let intl;
      let obj2;
      let closure_0 = name;
      const obj = {
        label: name.name,
        subLabel: name.description,
        arrow: true,
        disabled,
        accessibilityLabel: intl.formatToPlainString(onCreated(str[17]).jGyR6p, obj2),
        onPress() {
          return closure_18(name);
        }
      };
      const TableRow = guildId(str[26]).TableRow;
      intl = guildId(str[16]).intl;
      obj2 = { name: name.name };
      return _undefined(TableRow, obj, name.id);
    })
  };
  const TableRowGroup4 = tmp5(tmp6[25]).TableRowGroup;
  items13[1] = c10(TableRowGroup4, obj28);
  items9[2] = tmp25(c6, obj24);
  const obj29 = { style: tmp.section, children: items15 };
  const obj30 = { style: tmp.sectionHeading, children: items14 };
  const obj31 = { variant: "text-md/medium", color: "text-default", children: intl15.string(onCreated(tmp6[17])["2XcV3x"]) };
  const Text8 = tmp5(tmp6[27]).Text;
  intl15 = tmp5(tmp6[16]).intl;
  items14 = [tmp24(Text8, obj31), ];
  const obj32 = { variant: "text-sm/normal", color: "text-muted", children: intl16.string(onCreated(tmp6[17]).JnJOAn) };
  const Text9 = tmp5(tmp6[27]).Text;
  intl16 = tmp5(tmp6[16]).intl;
  items14[1] = c10(Text9, obj32);
  items15 = [tmp25(tmp26, obj30), ];
  const obj33 = {
    hasIcons: false,
    children: items7.map((label) => {
      let closure_0 = label;
      const obj = {
        label,
        arrow: true,
        disabled,
        onPress() {
          return closure_12(label);
        }
      };
      return _undefined(guildId(str[26]).TableRow, obj, label);
    })
  };
  const TableRowGroup5 = tmp5(tmp6[25]).TableRowGroup;
  items15[1] = c10(TableRowGroup5, obj33);
  items9[3] = tmp25(c6, obj29);
  return c10(ActionSheet, obj3);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";
