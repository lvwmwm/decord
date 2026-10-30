// Module ID: 12946
// Function ID: 12947
// Name: ConjureCreateSheet
// Dependencies: [5, 32, 19, 17, 21, 5009, 575, 10955, 12947, 12561, 12940, 12948, 12939, 5253, 10859, 12545, 12521, 1114, 3865, 10855, 12949, 7358, 12472, 12951, 12952, 7360, 7315, 7247, 7054, 6969, 5619, 12473, 12960, 5629, 2]
// Exports: default

// Module 12946 (ConjureCreateSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 12472 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 12940 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 12952 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;
let c3, c4, c8, modelSettings;

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
  let obj11;
  let obj21;
  let obj5;
  let obj6;
  let onChange;
  let str;
  let tmp15;
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
  let obj2 = guildId(onCreated[7]);
  const conjureLinkPrefetch = obj2.useConjureLinkPrefetch(str);
  let tmp8 = guildId(onCreated[8]);
  const isConjureEligibleGuild = tmp8.isConjureEligibleGuild;
  let obj3 = guildId(onCreated[9]);
  let result = isConjureEligibleGuild(obj3.useConjureEligibleGuilds("ConjureCreateSheet"), guildId);
  _slicedToArray = result;
  let tmp10 = initialInstallScope;
  if (initialInstallScope == null) {
    str2 = "user";
    if (result) {
      str2 = "guild";
    }
    tmp10 = str2;
  }
  str2 = tmp10;
  [CONJURE_DEFAULT_TIER_SETTINGS, c6] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp5(tmp6[10]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result3 = tmp2(obj.useState(false), 2);
  disabled = tmp2Result3[0];
  closure_9 = tmp2Result3[1];
  [tmp15, c10] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  const tmp17 = initialInstallScope(tmp6[11])();
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
          return { value: "HermesInternal", done: null };
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
              const tmp53 = initialInstallScope(onCreated[12]);
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
              const obj3 = guildId(onCreated[14]);
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
              const obj = initialInstallScope(onCreated[13]);
              obj.hideActionSheet(closure_2_9);
              closure_2(closure_1, guildId);
              c5 = 1;
            }
            c5 = 0;
            closure_1_9(false);
            modelSettings = 3;
            return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
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
                value: tmp8((value) => {
                            const obj = trimmed(c2[15]);
                            return obj.startConjurePrompt(value, trimmed, [], closure_2_0);
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
        return { value: "HermesInternal", done: null };
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  const items1 = [callback, guildId, initialInstallScope, str, disabled];
  closure_12 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const useCallback3 = obj.useCallback;
  let closure_0 = str((guildId, installScope) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let deleteProjectResult;
      if (modelSettings === 2) {
        modelSettings = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
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
              closure_1_9(true);
              closure_1_10(null);
              installScope = null;
              c5 = 2;
              c6 = 3;
              const obj5 = { guildId, installScope, modelSettings };
              modelSettings = 1;
              const obj8 = { value: initialInstallScope(onCreated[12])(obj5), done: false };
              return obj8;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_1_9(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              c5 = 1;
              closure_2 = closure_4;
              if (null != installScope) {
                c6 = 5;
                modelSettings = 1;
                const obj7 = guildId(onCreated[19]);
                const obj9 = {
                  value: deleteProjectResult.catch(() => {

                            }),
                  done: false
                };
                deleteProjectResult = obj7.deleteProject(installScope);
                return obj9;
              } else {
                const obj6 = guildId(onCreated[14]);
                closure_1_10(obj6.getConjureCreateErrorMessage(closure_2));
              }
            } else if (3 === c6) {
              if (arg0 === 1) {
                modelSettings = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_1_9(false);
                modelSettings = 3;
                return { value, done: true };
              } else {
                installScope = value;
                const sendConjureArchiveImport = guildId(onCreated[16]).sendConjureArchiveImport;
                guildId(onCreated[16]);
                const intl2 = guildId(onCreated[17]).intl;
                c6 = 4;
                modelSettings = 1;
                const obj11 = { value: sendConjureArchiveImport(installScope, guildId, intl2.string(initialInstallScope(onCreated[18])["LUc7/5"])), done: false };
                return obj11;
              }
            } else if (4 === c6) {
              if (arg0 === 1) {
                modelSettings = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_1_9(false);
                modelSettings = 3;
                return { value, done: true };
              } else {
                const obj2 = initialInstallScope(onCreated[13]);
                obj2.hideActionSheet(closure_2_9);
                closure_2(installScope, guildId);
                c5 = 1;
              }
            } else if (arg0 === 1) {
              modelSettings = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_1_9(false);
              modelSettings = 3;
              return { value, done: true };
            } else {
              const intl = guildId(onCreated[17]).intl;
              closure_1_10(intl.string(initialInstallScope(onCreated[18])["Q+l4Hv"]));
            }
            c5 = 0;
            closure_1_9(false);
            modelSettings = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp55) {
          closure_4 = tmp55;
          if (0 === c5) {
            modelSettings = 3;
            throw tmp55;
          } else if (1 === tmp57) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  const items2 = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated];
  callback3 = useCallback3(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [result, callback3, initialInstallScope, disabled];
  closure_14 = obj.useCallback(str(function*(arg0, value) {
    let _null;
    let closure_1;
    let closure_2;
    let intl;
    let items;
    let obj10;
    let obj12;
    let obj6;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      try {
        let closure_0;
        let closure_3;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp;
            let closure_4 = tmp4;
            closure_0 = undefined;
            initialInstallScope = undefined;
            onCreated = undefined;
            closure_3 = undefined;
            const tmp50 = first;
            if (!tmp50) {
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj4 = { value: obj10.pickConjureArchive(), done: false };
              obj10 = _null(onCreated[16]);
              return obj4;
            }
          }
        } else if (1 === c7) {
          c6 = 0;
          const intl2 = _null(onCreated[17]).intl;
          closure_133_10(intl2.string(initialInstallScope(onCreated[18])["Q+l4Hv"]));
          c8 = 3;
          const obj5 = { value: undefined, done: true };
          return obj5;
        } else if (2 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            c6 = 0;
            if (null != closure_0) {
              const obj14 = _null(onCreated[16]);
              initialInstallScope = obj14.describeConjureArchiveRejection(closure_0);
              if (null == initialInstallScope) {
                onCreated = closure_0;
                const tmp39 = _null(onCreated[20]);
                closure_3 = tmp39;
                onCreated = tmp39.importedConjureInstallScope;
                c7 = 3;
                c8 = 1;
                const obj8 = { value: obj6.readConjureArchiveInstallScope(onCreated.bytes), done: false };
                obj6 = _null(onCreated[20]);
                return obj8;
              } else {
                closure_133_10(initialInstallScope);
              }
            }
          }
        } else if (3 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            const tmp63 = onCreated(value, closure_133_4);
            initialInstallScope = tmp63;
            if (tmp63 == null) {
              initialInstallScope = closure_133_1;
            }
            _null = initialInstallScope;
            if (initialInstallScope == null) {
              let tmp10 = "user";
              if (closure_133_4) {
                tmp10 = null;
              }
              _null = tmp10;
            }
            closure_3 = _null;
            if (null == closure_3) {
              const obj11 = {
                key: "ConjureImportInstallScope",
                stackingBehavior: "stack",
                header: obj12,
                hasIcons: false,
                options: items.map((item) => {
                            let s1TsXl;
                            let closure_0 = item;
                            const intl = c0(closure_2[17]).intl;
                            const string = intl.string;
                            if ("guild" === item) {
                              s1TsXl = closure_1(tmp[18]).LlLIJw;
                            } else {
                              s1TsXl = closure_1(tmp[18]).s1TsXl;
                            }
                            const obj = {
                              label: string(s1TsXl),
                              onPress() {
                                return callback3(closure_2_2, item);
                              }
                            };
                            return obj;
                          })
              };
              obj12 = { title: intl.string(initialInstallScope(onCreated[18]).NyVn6T) };
              const showSimpleActionSheet = _null(onCreated[21]).showSimpleActionSheet;
              const tmp23 = _null(onCreated[21]);
              intl = _null(onCreated[17]).intl;
              items = ["guild", "user"];
              const result = showSimpleActionSheet(obj11);
            } else {
              c7 = 4;
              c8 = 1;
              const obj13 = { value: closure_133_13(onCreated, closure_3), done: false };
              return obj13;
            }
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj = { value, done: true };
          return obj;
        }
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp53) {
        if (0 === c6) {
          c8 = 3;
          throw tmp53;
        } else {
          c7 = 1;
        }
      }
    }
  }), items3);
  const tmp5Result = guildId(tmp6[10]);
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
  const tmp5Result4 = guildId(tmp6[23]);
  const conjureTemplatesResult = tmp5Result4.conjureTemplates();
  callback2 = obj.useCallback((arg0, arg1) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureCreateSheet_str);
    onCreated(arg0, arg1);
  }, items5);
  const items6 = [callback, guildId, callback2, CONJURE_DEFAULT_TIER_SETTINGS, tmp10, disabled];
  closure_17 = obj.useCallback((wizard) => {
    let obj3;
    let closure_0 = wizard;
    if (null == wizard.wizard) {
      const tmp = first;
      if (!tmp) {
        let obj = { installScope: str2, templateId: wizard.id };
        const promise = callback((arg0) => {
          const obj = guildId(onCreated[23]);
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
  let intl = tmp5(tmp6[17]).intl;
  const items7 = [intl.string(initialInstallScope(tmp6[18])["9w+Chc"]), , ];
  let intl2 = tmp5(tmp6[17]).intl;
  items7[1] = intl2.string(initialInstallScope(tmp6[18]).WAvmdq);
  const intl3 = tmp5(tmp6[17]).intl;
  items7[2] = intl3.string(initialInstallScope(tmp6[18]).SKsrzl);
  let tmp23 = CONJURE_DEFAULT_TIER_SETTINGS;
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: CONJURE_DEFAULT_TIER_SETTINGS(BottomSheetTitleHeader, obj5), children: tmp24(tmp25, obj6) };
  const ActionSheet = tmp5(tmp6[25]).ActionSheet;
  obj5 = { title: intl4.string(initialInstallScope(tmp6[18])["+5XyCR"]) };
  BottomSheetTitleHeader = tmp5(tmp6[26]).BottomSheetTitleHeader;
  intl4 = tmp5(tmp6[17]).intl;
  obj6 = { style: tmp.content, children: items9 };
  let obj7 = { style: tmp.form, children: items8 };
  let obj8 = { placeholder: intl5.string(initialInstallScope(tmp6[18]).ab1sMf), autoComplete: "off", value: str, onChange: tmp4, disabled };
  const TextArea = tmp5(tmp6[27]).TextArea;
  intl5 = tmp5(tmp6[17]).intl;
  items8 = [CONJURE_DEFAULT_TIER_SETTINGS(TextArea, obj8), , , , , ];
  let obj9 = { hasIcons: false, children: CONJURE_DEFAULT_TIER_SETTINGS(TableRow, obj10) };
  const TableRowGroup = tmp5(tmp6[28]).TableRowGroup;
  obj10 = { label: intl6.string(initialInstallScope(tmp6[18]).aBPQxX), trailing: CONJURE_DEFAULT_TIER_SETTINGS(Text, obj11), arrow: true, disabled, onPress: callback1 };
  TableRow = tmp5(tmp6[29]).TableRow;
  intl6 = tmp5(tmp6[17]).intl;
  obj11 = { variant: "text-md/normal", color: "text-muted", children: tmp5Result5.conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier) };
  Text = tmp5(tmp6[30]).Text;
  tmp5Result5 = guildId(tmp6[31]);
  items8[1] = CONJURE_DEFAULT_TIER_SETTINGS(TableRowGroup, obj9);
  let tmp23Result = null;
  if (null != tmp17) {
    let str3 = "text-muted";
    const Text2 = tmp5(tmp6[30]).Text;
    if (0 === tmp17) {
      str3 = "text-feedback-warning";
    }
    let obj12 = { variant: "text-sm/normal", color: str3, children: tmp5Result6.conjureAppSlotsLeftLabel(tmp17) };
    tmp5Result6 = guildId(tmp6[32]);
    tmp23Result = tmp23(Text2, obj12);
  }
  items8[2] = tmp23Result;
  let tmp23Result2 = null;
  if (null != tmp15) {
    let obj13 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
    tmp23Result2 = tmp23(tmp5(tmp6[30]).Text, obj13);
  }
  items8[3] = tmp23Result2;
  let obj14 = { variant: "text-xs/normal", color: "text-muted", children: intl7.string(tmp16(tmp6[18]).NvvCzX) };
  const Text3 = tmp5(tmp6[30]).Text;
  intl7 = tmp5(tmp6[17]).intl;
  items8[4] = tmp23(Text3, obj14);
  const obj15 = {
    variant: "primary",
    text: intl8.string(guildId(tmp6[17]).t.CumH4u),
    disabled: "" === undefined.trim(),
    loading: disabled,
    onPress() {
      return closure_12();
    }
  };
  const Button = tmp5(tmp6[33]).Button;
  intl8 = tmp5(tmp6[17]).intl;
  items8[5] = tmp23(Button, obj15);
  items9 = [tmp24(tmp25, obj7), , , ];
  const obj16 = { style: tmp.section, children: items11 };
  const obj17 = { style: tmp.sectionHeading, children: items10 };
  const obj18 = { variant: "text-md/medium", color: "text-default", children: intl9.string(initialInstallScope(tmp6[18]).I7nPgX) };
  const Text4 = tmp5(tmp6[30]).Text;
  intl9 = tmp5(tmp6[17]).intl;
  items10 = [tmp23(Text4, obj18), ];
  const obj19 = { variant: "text-sm/normal", color: "text-muted", children: intl10.string(initialInstallScope(tmp6[18]).FXB8wQ) };
  const Text5 = tmp5(tmp6[30]).Text;
  intl10 = tmp5(tmp6[17]).intl;
  items10[1] = tmp23(Text5, obj19);
  items11 = [tmp24(tmp25, obj17), ];
  const obj20 = { hasIcons: false, children: tmp23(TableRow2, obj21) };
  const TableRowGroup2 = tmp5(tmp6[28]).TableRowGroup;
  obj21 = {
    label: intl11.string(initialInstallScope(tmp6[18])["C8/T2E"]),
    arrow: true,
    disabled,
    onPress() {
      const promise = closure_14();
      promise.catch(() => {

      });
    }
  };
  TableRow2 = tmp5(tmp6[29]).TableRow;
  intl11 = tmp5(tmp6[17]).intl;
  items11[1] = tmp23(TableRowGroup2, obj20);
  items9[1] = disabled(c6, obj16);
  const obj22 = { style: tmp.section, children: items13 };
  const obj23 = { style: tmp.sectionHeading, children: items12 };
  const obj24 = { variant: "text-md/medium", color: "text-default", children: intl12.string(initialInstallScope(tmp6[18]).zzYLlW) };
  const Text6 = tmp5(tmp6[30]).Text;
  intl12 = tmp5(tmp6[17]).intl;
  items12 = [tmp23(Text6, obj24), ];
  const obj25 = { variant: "text-sm/normal", color: "text-muted", children: intl13.string(initialInstallScope(tmp6[18])["N88+Ld"]) };
  const Text7 = tmp5(tmp6[30]).Text;
  intl13 = tmp5(tmp6[17]).intl;
  items12[1] = tmp23(Text7, obj25);
  items13 = [tmp24(tmp25, obj23), ];
  const obj26 = {
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
        accessibilityLabel: intl.formatToPlainString(initialInstallScope(onCreated[18]).jGyR6p, obj2),
        onPress() {
          return closure_17(name);
        }
      };
      const TableRow = guildId(onCreated[29]).TableRow;
      intl = guildId(onCreated[17]).intl;
      obj2 = { name: name.name };
      return CONJURE_DEFAULT_TIER_SETTINGS(TableRow, obj, name.id);
    })
  };
  const TableRowGroup3 = tmp5(tmp6[28]).TableRowGroup;
  items13[1] = tmp23(TableRowGroup3, obj26);
  items9[2] = disabled(c6, obj22);
  const obj27 = { style: tmp.section, children: items15 };
  const obj28 = { style: tmp.sectionHeading, children: items14 };
  const obj29 = { variant: "text-md/medium", color: "text-default", children: intl14.string(initialInstallScope(tmp6[18])["2XcV3x"]) };
  const Text8 = tmp5(tmp6[30]).Text;
  intl14 = tmp5(tmp6[17]).intl;
  items14 = [tmp23(Text8, obj29), ];
  const obj30 = { variant: "text-sm/normal", color: "text-muted", children: intl15.string(initialInstallScope(tmp6[18]).JnJOAn) };
  const Text9 = tmp5(tmp6[30]).Text;
  intl15 = tmp5(tmp6[17]).intl;
  items14[1] = tmp23(Text9, obj30);
  items15 = [tmp24(tmp25, obj28), ];
  const obj31 = {
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
      return CONJURE_DEFAULT_TIER_SETTINGS(guildId(onCreated[29]).TableRow, obj, label);
    })
  };
  const TableRowGroup4 = tmp5(tmp6[28]).TableRowGroup;
  items15[1] = tmp23(TableRowGroup4, obj31);
  items9[3] = disabled(c6, obj27);
  return tmp23(ActionSheet, obj4);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";
