// Module ID: 11745
// Function ID: 11746
// Name: ConjureCreateSheet
// Dependencies: [5, 32, 19, 17, 21, 4971, 587, 11746, 11747, 11748, 11749, 11750, 5210, 10724, 11751, 11757, 1128, 3830, 10720, 7291, 11770, 11774, 11775, 7298, 7248, 7180, 6987, 6903, 5234, 11771, 11783, 5244, 2]
// Exports: default

// Module 11745 (ConjureCreateSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 11748 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 11770 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 11775 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;
let c3, c4, modelSettings;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjureCreateSheet_str = "ConjureCreateSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, form: obj3, section: obj4, sectionHeading: obj5 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  let BottomSheetTitleHeader;
  let CONJURE_DEFAULT_TIER_SETTINGS;
  let TableRow;
  let TableRow2;
  let Text;
  let c10;
  let c6;
  let choices;
  let first;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl4;
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
  let obj20;
  let obj4;
  let obj5;
  let obj9;
  let onChange;
  let str;
  let tmp14;
  let tmp4;
  let tmp5Result5;
  let tmp5Result6;
  guildId = guildId.guildId;
  let initialInstallScope = guildId.initialInstallScope;
  let onCreated = guildId.onCreated;
  _slicedToArray = undefined;
  let str2;
  c6 = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let disabled;
  let closure_9;
  c10 = undefined;
  let callback;
  let closure_12;
  let callback3;
  let closure_14;
  let c15;
  let callback2;
  let closure_17;
  let tmp = c10();
  let obj = str2;
  const tmp2 = _slicedToArray;
  [str, tmp4] = str2.useState("");
  const tmp6 = onCreated;
  let tmp7 = guildId(onCreated[7]);
  const isConjureEligibleGuild = tmp7.isConjureEligibleGuild;
  let obj2 = guildId(onCreated[8]);
  let result = isConjureEligibleGuild(obj2.useConjureEligibleGuilds("ConjureCreateSheet"), guildId);
  _slicedToArray = result;
  let tmp9 = initialInstallScope;
  if (initialInstallScope == null) {
    str2 = "user";
    if (result) {
      str2 = "guild";
    }
    tmp9 = str2;
  }
  str2 = tmp9;
  [CONJURE_DEFAULT_TIER_SETTINGS, c6] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp5(tmp6[9]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result3 = tmp2(obj.useState(false), 2);
  disabled = tmp2Result3[0];
  closure_9 = tmp2Result3[1];
  [tmp14, c10] = tmp2(obj.useState(null), 2);
  const tmp15 = initialInstallScope;
  tmp2(obj.useState(null), 2);
  const tmp16 = initialInstallScope(tmp6[10])();
  const useCallback = obj.useCallback;
  str((guildId, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      if (modelSettings === 2) {
        modelSettings = 3;
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
          modelSettings = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              modelSettings = 3;
              throw value;
            } else if (arg0 === 2) {
              modelSettings = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              closure_1 = undefined;
              closure_1_9(true);
              closure_1_10(null);
              c5 = 2;
              const obj5 = { guildId, modelSettings };
              const tmp53 = initialInstallScope(onCreated[11]);
              const merged = Object.assign(closure_1);
              c6 = 3;
              modelSettings = 1;
              const obj6 = { value: tmp53(obj5), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_1_9(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              c5 = 1;
              closure_2 = closure_4;
              const obj3 = guildId(onCreated[13]);
              closure_1_10(obj3.getConjureCreateErrorMessage(closure_2));
            } else if (arg0 === 1) {
              modelSettings = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_1_9(false);
              modelSettings = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              guildId(closure_1);
              const obj = initialInstallScope(onCreated[12]);
              obj.hideActionSheet(closure_2_9);
              closure_2(closure_1, guildId);
              c5 = 1;
            }
            c5 = 0;
            closure_1_9(false);
            modelSettings = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp38) {
          closure_4 = tmp38;
          if (0 === c5) {
            modelSettings = 3;
            throw tmp38;
          } else if (1 === tmp40) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  let items = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = obj.useCallback;
  str(function*(arg0, value) {
    closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = closure_0;
            if (closure_0 == null) {
              closure_1 = c3;
            }
            const trimmed = closure_1.trim();
            const tmp7 = "" === trimmed || first;
            if (!tmp7) {
              let installScope = closure_1;
              const tmp8 = callback;
              if (closure_1 == null) {
                installScope = null;
              }
              const obj4 = { installScope, prompt: trimmed };
              c4 = 1;
              c3 = 1;
              const obj5 = {
                value: tmp8((arg0) => {
                            const obj = closure_2_0(installScope[14]);
                            return obj.startConjurePrompt(arg0, trimmed);
                          }, obj4),
                done: false
              };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  const items1 = [callback, initialInstallScope, str, disabled];
  closure_12 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const useCallback3 = obj.useCallback;
  let closure_0 = str(function*(arg0, value) {
    let closure_2;
    let deleteProjectResult;
    let obj13;
    if (c6 === 2) {
      c6 = 3;
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
      let closure_3;
      try {
        let closure_1;
        let tmp;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = undefined;
            tmp = undefined;
            closure_3 = undefined;
            const tmp109 = first;
            if (!tmp109) {
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj13.pickConjureArchive(), done: false };
              obj13 = installScope(onCreated[15]);
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          const intl2 = installScope(onCreated[16]).intl;
          closure_1_10(intl2.string(initialInstallScope(onCreated[17])["Q+l4Hv"]));
          c6 = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_1 = value;
            c4 = 0;
            if (null != closure_1) {
              const obj17 = installScope(onCreated[15]);
              tmp = obj17.describeConjureArchiveRejection(closure_1);
              if (null == tmp) {
                closure_1_9(true);
                closure_1_10(null);
                closure_3 = null;
                c4 = 3;
                const obj10 = { guildId: installScope, installScope, modelSettings };
                c5 = 5;
                c6 = 1;
                const obj11 = { value: initialInstallScope(onCreated[11])(obj10), done: false };
                return obj11;
              } else {
                closure_1_10(tmp);
              }
            }
          }
        } else if (3 === c5) {
          c4 = 0;
          closure_1_9(false);
          throw closure_3;
        } else {
          if (4 === c5) {
            c4 = 2;
            let closure_4 = closure_3;
            if (null != closure_3) {
              const obj7 = installScope(onCreated[18]);
              c5 = 7;
              c6 = 1;
              const obj12 = {
                value: deleteProjectResult.catch(() => {

                          }),
                done: false
              };
              deleteProjectResult = obj7.deleteProject(closure_3);
              return obj12;
            } else {
              const obj6 = installScope(onCreated[13]);
              closure_1_10(obj6.getConjureCreateErrorMessage(closure_4));
            }
          } else if (5 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_9(false);
              c6 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              closure_3 = value;
              const sendConjureArchiveImport = installScope(onCreated[15]).sendConjureArchiveImport;
              const tmp93 = installScope(onCreated[15]);
              const intl3 = installScope(onCreated[16]).intl;
              c5 = 6;
              c6 = 1;
              const obj15 = { value: sendConjureArchiveImport(closure_3, closure_1, intl3.string(initialInstallScope(onCreated[17])["LUc7/5"])), done: false };
              return obj15;
            }
          } else if (6 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_9(false);
              c6 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              const obj2 = initialInstallScope(onCreated[12]);
              obj2.hideActionSheet(closure_2_9);
              tmp(closure_3, installScope);
              c4 = 2;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_9(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const intl = installScope(onCreated[16]).intl;
            closure_1_10(intl.string(initialInstallScope(onCreated[17])["Q+l4Hv"]));
          }
          c4 = 0;
          closure_1_9(false);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp82) {
        closure_3 = tmp82;
        if (0 === c4) {
          c6 = 3;
          throw tmp82;
        } else if (1 === c4) {
          c5 = 1;
        } else if (2 === c4) {
          c5 = 3;
        } else {
          c5 = 4;
        }
      }
    }
  });
  const items2 = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, disabled];
  callback3 = useCallback3(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [result, callback3, initialInstallScope, disabled];
  closure_14 = obj.useCallback(str(function*(arg0, value) {
    let c2;
    let intl;
    let items;
    let obj5;
    let v3;
    if (initialInstallScope === 2) {
      initialInstallScope = 3;
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
        initialInstallScope = 2;
        if (0 === onCreated) {
          if (arg0 === 1) {
            initialInstallScope = 3;
            throw value;
          } else if (arg0 === 2) {
            initialInstallScope = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp19 = first;
            if (!tmp19) {
              let _null = initialInstallScope;
              if (initialInstallScope == null) {
                let tmp7 = "user";
                if (c4) {
                  tmp7 = null;
                }
                _null = tmp7;
              }
              if (null == _null) {
                const obj4 = {
                  key: "ConjureImportInstallScope",
                  stackingBehavior: "stack",
                  header: obj5,
                  hasIcons: false,
                  options: items.map((item) => {
                                let s1TsXl;
                                let closure_0 = item;
                                const intl = _null(closure_1_2[16]).intl;
                                const string = intl.string;
                                if ("guild" === item) {
                                  s1TsXl = v3(tmp[17]).LlLIJw;
                                } else {
                                  s1TsXl = v3(tmp[17]).s1TsXl;
                                }
                                const obj = {
                                  label: string(s1TsXl),
                                  onPress() {
                                    return closure_2_13(item);
                                  }
                                };
                                return obj;
                              })
                };
                obj5 = { title: intl.string(initialInstallScope(onCreated[17]).NyVn6T) };
                const showSimpleActionSheet = _null(onCreated[19]).showSimpleActionSheet;
                const tmp12 = _null(onCreated[19]);
                intl = _null(onCreated[16]).intl;
                items = ["guild", "user"];
                const result = showSimpleActionSheet(obj4);
              } else {
                onCreated = 1;
                initialInstallScope = 1;
                const obj6 = { value: callback3(tmp8), done: false };
                return obj6;
              }
            }
          }
        } else if (arg0 === 1) {
          initialInstallScope = 3;
          throw value;
        } else if (arg0 === 2) {
          initialInstallScope = 3;
          let obj = { value, done: true };
          return obj;
        }
        initialInstallScope = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp15) {
        initialInstallScope = 3;
        throw tmp15;
      }
    }
  }), items3);
  const tmp5Result = guildId(tmp6[9]);
  const landingModelChoicesResult = tmp5Result.landingModelChoices();
  c15 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback1 = obj.useCallback(() => {
    let ConjureEffortPickerSheet;
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: metroImportDefault(ConjureEffortPickerSheet, obj2) };
    obj2 = { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureLandingModelChoices.CONJURE_LANDING_TIER_SEATS, choices, onChange };
    ConjureEffortPickerSheet = ConjureEffortPicker.ConjureEffortPickerSheet;
    showActionSheet(obj);
  }, items4);
  const items5 = [onCreated];
  const tmp5Result4 = guildId(tmp6[21]);
  const conjureTemplatesResult = tmp5Result4.conjureTemplates();
  callback2 = obj.useCallback((projectId, id) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureCreateSheet_str);
    onCreated(projectId, id);
  }, items5);
  const items6 = [callback, guildId, callback2, CONJURE_DEFAULT_TIER_SETTINGS, tmp9, disabled];
  closure_17 = obj.useCallback((wizard) => {
    let obj3;
    let closure_0 = wizard;
    if (null == wizard.wizard) {
      const tmp = first;
      if (!tmp) {
        let obj = { installScope: str2, templateId: wizard.id };
        const promise = callback((arg0) => {
          const obj = guildId(onCreated[21]);
          return obj.startConjureTemplateProject(arg0, closure_0);
        }, obj);
        promise.catch(() => {

        });
      }
    } else {
      const obj2 = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: metroImportDefault(ConjureTemplateWizardSheetDefault, obj3) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj3 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback2 };
      showActionSheet(obj2);
    }
  }, items6);
  let intl = tmp5(tmp6[16]).intl;
  const items7 = [intl.string(initialInstallScope(tmp6[17])["9w+Chc"]), , ];
  let intl2 = tmp5(tmp6[16]).intl;
  items7[1] = intl2.string(initialInstallScope(tmp6[17]).WAvmdq);
  let intl3 = tmp5(tmp6[16]).intl;
  items7[2] = intl3.string(initialInstallScope(tmp6[17]).SKsrzl);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: CONJURE_DEFAULT_TIER_SETTINGS(BottomSheetTitleHeader, obj4), children: tmp23(tmp24, obj5) };
  const ActionSheet = tmp5(tmp6[23]).ActionSheet;
  obj4 = { title: intl4.string(initialInstallScope(tmp6[17])["+5XyCR"]) };
  BottomSheetTitleHeader = tmp5(tmp6[24]).BottomSheetTitleHeader;
  intl4 = tmp5(tmp6[16]).intl;
  obj5 = { style: tmp.content, children: items9 };
  let obj6 = { style: tmp.form, children: items8 };
  let obj7 = { placeholder: intl5.string(initialInstallScope(tmp6[17]).ab1sMf), autoComplete: "off", value: str, onChange: tmp4, disabled };
  const TextArea = tmp5(tmp6[25]).TextArea;
  intl5 = tmp5(tmp6[16]).intl;
  items8 = [CONJURE_DEFAULT_TIER_SETTINGS(TextArea, obj7), , , , , ];
  let obj8 = { hasIcons: false, children: CONJURE_DEFAULT_TIER_SETTINGS(TableRow, obj9) };
  const TableRowGroup = tmp5(tmp6[26]).TableRowGroup;
  obj9 = { label: intl6.string(initialInstallScope(tmp6[17]).aBPQxX), trailing: CONJURE_DEFAULT_TIER_SETTINGS(Text, obj10), arrow: true, disabled, onPress: callback1 };
  TableRow = tmp5(tmp6[27]).TableRow;
  intl6 = tmp5(tmp6[16]).intl;
  obj10 = { variant: "text-md/normal", color: "text-muted", children: tmp5Result5.conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier) };
  Text = tmp5(tmp6[28]).Text;
  tmp5Result5 = guildId(tmp6[29]);
  items8[1] = CONJURE_DEFAULT_TIER_SETTINGS(TableRowGroup, obj8);
  let tmp22Result = null;
  if (null != tmp16) {
    let str3 = "text-muted";
    const Text2 = tmp5(tmp6[28]).Text;
    if (0 === tmp16) {
      str3 = "text-feedback-warning";
    }
    let obj11 = { variant: "text-sm/normal", color: str3, children: tmp5Result6.conjureAppSlotsLeftLabel(tmp16) };
    tmp5Result6 = guildId(tmp6[30]);
    tmp22Result = tmp22(Text2, obj11);
  }
  items8[2] = tmp22Result;
  let tmp22Result2 = null;
  if (null != tmp14) {
    let obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp14 };
    tmp22Result2 = tmp22(tmp5(tmp6[28]).Text, obj12);
  }
  items8[3] = tmp22Result2;
  let obj13 = { variant: "text-xs/normal", color: "text-muted", children: intl7.string(tmp15(tmp6[17]).NvvCzX) };
  const Text3 = tmp5(tmp6[28]).Text;
  intl7 = tmp5(tmp6[16]).intl;
  items8[4] = CONJURE_DEFAULT_TIER_SETTINGS(Text3, obj13);
  let obj14 = {
    variant: "primary",
    text: intl8.string(tmp5(tmp6[16]).t.CumH4u),
    disabled: "" === str.trim(),
    loading: disabled,
    onPress() {
      return closure_12();
    }
  };
  const Button = tmp5(tmp6[31]).Button;
  intl8 = tmp5(tmp6[16]).intl;
  items8[5] = CONJURE_DEFAULT_TIER_SETTINGS(Button, obj14);
  items9 = [tmp23(tmp24, obj6), , , ];
  let obj15 = { style: tmp.section, children: items11 };
  let obj16 = { style: tmp.sectionHeading, children: items10 };
  let obj17 = { variant: "text-md/medium", color: "text-default", children: intl9.string(tmp15(tmp6[17]).I7nPgX) };
  const Text4 = tmp5(tmp6[28]).Text;
  intl9 = tmp5(tmp6[16]).intl;
  items10 = [tmp22(Text4, obj17), ];
  const obj18 = { variant: "text-sm/normal", color: "text-muted", children: intl10.string(tmp15(tmp6[17]).FXB8wQ) };
  const Text5 = tmp5(tmp6[28]).Text;
  intl10 = tmp5(tmp6[16]).intl;
  items10[1] = CONJURE_DEFAULT_TIER_SETTINGS(Text5, obj18);
  items11 = [tmp23(tmp24, obj16), ];
  const obj19 = { hasIcons: false, children: CONJURE_DEFAULT_TIER_SETTINGS(TableRow2, obj20) };
  const TableRowGroup2 = tmp5(tmp6[26]).TableRowGroup;
  obj20 = {
    label: intl11.string(tmp15(tmp6[17])["C8/T2E"]),
    arrow: true,
    disabled,
    onPress() {
      const promise = closure_14();
      promise.catch(() => {

      });
    }
  };
  TableRow2 = tmp5(tmp6[27]).TableRow;
  intl11 = tmp5(tmp6[16]).intl;
  items11[1] = CONJURE_DEFAULT_TIER_SETTINGS(TableRowGroup2, obj19);
  items9[1] = disabled(c6, obj15);
  const obj21 = { style: tmp.section, children: items13 };
  const obj22 = { style: tmp.sectionHeading, children: items12 };
  const obj23 = { variant: "text-md/medium", color: "text-default", children: intl12.string(tmp15(tmp6[17]).zzYLlW) };
  const Text6 = tmp5(tmp6[28]).Text;
  intl12 = tmp5(tmp6[16]).intl;
  items12 = [tmp22(Text6, obj23), ];
  const obj24 = { variant: "text-sm/normal", color: "text-muted", children: intl13.string(tmp15(tmp6[17])["N88+Ld"]) };
  const Text7 = tmp5(tmp6[28]).Text;
  intl13 = tmp5(tmp6[16]).intl;
  items12[1] = CONJURE_DEFAULT_TIER_SETTINGS(Text7, obj24);
  items13 = [tmp23(tmp24, obj22), ];
  const obj25 = {
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
        accessibilityLabel: intl.formatToPlainString(initialInstallScope(onCreated[17]).jGyR6p, obj2),
        onPress() {
          return closure_17(name);
        }
      };
      const TableRow = guildId(onCreated[27]).TableRow;
      intl = guildId(onCreated[16]).intl;
      obj2 = { name: name.name };
      return CONJURE_DEFAULT_TIER_SETTINGS(TableRow, obj, name.id);
    })
  };
  const TableRowGroup3 = tmp5(tmp6[26]).TableRowGroup;
  items13[1] = CONJURE_DEFAULT_TIER_SETTINGS(TableRowGroup3, obj25);
  items9[2] = disabled(c6, obj21);
  const obj26 = { style: tmp.section, children: items15 };
  const obj27 = { style: tmp.sectionHeading, children: items14 };
  const obj28 = { variant: "text-md/medium", color: "text-default", children: intl14.string(tmp15(tmp6[17])["2XcV3x"]) };
  const Text8 = tmp5(tmp6[28]).Text;
  intl14 = tmp5(tmp6[16]).intl;
  items14 = [tmp22(Text8, obj28), ];
  const obj29 = { variant: "text-sm/normal", color: "text-muted", children: intl15.string(tmp15(tmp6[17]).JnJOAn) };
  const Text9 = tmp5(tmp6[28]).Text;
  intl15 = tmp5(tmp6[16]).intl;
  items14[1] = CONJURE_DEFAULT_TIER_SETTINGS(Text9, obj29);
  items15 = [tmp23(tmp24, obj27), ];
  const obj30 = {
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
      return CONJURE_DEFAULT_TIER_SETTINGS(guildId(onCreated[27]).TableRow, obj, label);
    })
  };
  const TableRowGroup4 = tmp5(tmp6[26]).TableRowGroup;
  items15[1] = CONJURE_DEFAULT_TIER_SETTINGS(TableRowGroup4, obj30);
  items9[3] = disabled(c6, obj26);
  return CONJURE_DEFAULT_TIER_SETTINGS(ActionSheet, obj3);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";
