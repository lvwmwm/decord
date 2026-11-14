// Module ID: 13982
// Function ID: 13983
// Name: ConjureCreateSheet
// Dependencies: [5, 32, 19, 17, 7365, 21, 5306, 575, 13794, 13983, 13190, 13974, 13984, 13973, 5552, 7333, 13311, 1113, 4131, 7329, 13985, 7949, 13258, 13987, 13988, 7951, 7913, 7859, 7746, 7443, 5929, 13259, 13996, 5936, 2]
// Exports: default

// Module 13982 (ConjureCreateSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7365 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 13258 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 13974 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 13988 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;
let c2, c3, closure_2, modelSettings, v3;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const sendUserMessage = ConjureConnectionStore.sendUserMessage;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const ConjureCreateSheet_str = "ConjureCreateSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, form: obj3, section: obj4, sectionHeading: obj5 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  let BottomSheetTitleHeader;
  let CONJURE_DEFAULT_TIER_SETTINGS;
  let TableRow;
  let TableRow2;
  let Text;
  let _undefined;
  let c4;
  let c8;
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
  let tmp14;
  let tmp4;
  let tmp5Result5;
  let tmp5Result6;
  guildId = guildId.guildId;
  let onCreated = guildId.onCreated;
  str = undefined;
  _slicedToArray = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let disabled;
  let closure_7;
  c8 = undefined;
  let callback;
  let closure_10;
  let callback3;
  let closure_12;
  let c13;
  let callback2;
  let closure_15;
  let tmp = callback3();
  let obj = CONJURE_DEFAULT_TIER_SETTINGS;
  const tmp2 = _slicedToArray;
  [str, tmp4] = CONJURE_DEFAULT_TIER_SETTINGS.useState("");
  const tmp6 = str;
  let obj2 = guildId(str[8]);
  const conjureLinkPrefetch = obj2.useConjureLinkPrefetch(str);
  const isConjureEligibleGuild = guildId(str[9]).isConjureEligibleGuild;
  const tmp8 = guildId(str[9]);
  let obj3 = guildId(str[10]);
  let result = isConjureEligibleGuild(obj3.useConjureEligibleGuilds("ConjureCreateSheet"), guildId);
  _asyncToGenerator = result;
  const tmp10 = _slicedToArray(CONJURE_DEFAULT_TIER_SETTINGS.useState(null), 2);
  [CONJURE_DEFAULT_TIER_SETTINGS, c4] = tmp10;
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp5(tmp6[11]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result = tmp2(obj.useState(false), 2);
  disabled = tmp2Result[0];
  closure_7 = tmp2Result[1];
  [tmp14, c8] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  const tmp16 = onCreated(tmp6[12])();
  const useCallback = obj.useCallback;
  _asyncToGenerator(async (guildId, templateId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              templateId = undefined;
              v3(true);
              closure_1_8(null);
              modelSettings = 2;
              c6 = 3;
              v3 = 1;
              const obj5 = { guildId, modelSettings, templateId };
              const obj6 = { value: onCreated(str[13])(obj5), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            modelSettings = 0;
            v3(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              modelSettings = 1;
              closure_2 = closure_4;
              const obj3 = guildId(str[15]);
              closure_1_8(obj3.getConjureCreateErrorMessage(closure_2));
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              modelSettings = 0;
              v3(false);
              v3 = 3;
              return { value, done: true };
            } else {
              templateId = value;
              guildId(templateId);
              const obj = onCreated(str[14]);
              obj.hideActionSheet(closure_2_10);
              templateId(templateId, guildId);
              modelSettings = 1;
            }
            modelSettings = 0;
            v3(false);
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp38) {
          closure_4 = tmp38;
          if (0 === modelSettings) {
            v3 = 3;
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
  _asyncToGenerator(async (arg0, value) => {
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
        return { value: "HermesInternal", done: null };
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
              const obj4 = { value: callback((arg0) => closure_2_7(arg0, trimmed)), done: false };
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
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  const items1 = [callback, str, disabled];
  closure_10 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  const useCallback3 = obj.useCallback;
  let closure_0 = _asyncToGenerator(async (guildId, installScope) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let deleteProjectResult;
      if (v3 === 2) {
        v3 = 3;
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
          v3 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              v3(true);
              closure_1_8(null);
              installScope = null;
              modelSettings = 2;
              c6 = 3;
              v3 = 1;
              const obj5 = { guildId, installScope, modelSettings };
              const obj8 = { value: onCreated(str[13])(obj5), done: false };
              return obj8;
            }
          } else if (1 === c6) {
            modelSettings = 0;
            v3(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              modelSettings = 1;
              closure_2 = closure_4;
              if (null != installScope) {
                c6 = 5;
                v3 = 1;
                const obj7 = guildId(str[19]);
                const obj9 = {
                  value: deleteProjectResult.catch(() => {

                            }),
                  done: false
                };
                deleteProjectResult = obj7.deleteProject(installScope);
                return obj9;
              } else {
                const obj6 = guildId(str[15]);
                closure_1_8(obj6.getConjureCreateErrorMessage(closure_2));
              }
            } else if (3 === c6) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                modelSettings = 0;
                v3(false);
                v3 = 3;
                return { value, done: true };
              } else {
                installScope = value;
                const sendConjureArchiveImport = guildId(str[16]).sendConjureArchiveImport;
                guildId(str[16]);
                const intl2 = guildId(str[17]).intl;
                c6 = 4;
                v3 = 1;
                const obj11 = { value: sendConjureArchiveImport(installScope, guildId, intl2.string(onCreated(str[18])["LUc7/5"])), done: false };
                return obj11;
              }
            } else if (4 === c6) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                modelSettings = 0;
                v3(false);
                v3 = 3;
                return { value, done: true };
              } else {
                const obj2 = onCreated(str[14]);
                obj2.hideActionSheet(closure_2_10);
                installScope(installScope, guildId);
                modelSettings = 1;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              modelSettings = 0;
              v3(false);
              v3 = 3;
              return { value, done: true };
            } else {
              const intl = guildId(str[17]).intl;
              closure_1_8(intl.string(onCreated(str[18])["Q+l4Hv"]));
            }
            modelSettings = 0;
            v3(false);
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp55) {
          closure_4 = tmp55;
          if (0 === modelSettings) {
            v3 = 3;
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
  const items3 = [result, callback3, disabled];
  closure_12 = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    let _null;
    let closure_1;
    let intl;
    let items;
    let obj10;
    let obj12;
    let obj6;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        let closure_0;
        let bytes;
        let closure_3;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            closure_0 = undefined;
            onCreated = undefined;
            bytes = undefined;
            closure_3 = undefined;
            const tmp47 = first;
            if (!tmp47) {
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj4 = { value: obj10.pickConjureArchive(), done: false };
              obj10 = _null(bytes[16]);
              return obj4;
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          const intl2 = _null(bytes[17]).intl;
          closure_132_8(intl2.string(onCreated(bytes[18])["Q+l4Hv"]));
          c7 = 3;
          const obj5 = { value: undefined, done: true };
          return obj5;
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            c5 = 0;
            if (null != closure_0) {
              const obj14 = _null(bytes[16]);
              onCreated = obj14.describeConjureArchiveRejection(closure_0);
              if (null == onCreated) {
                bytes = closure_0;
                const tmp36 = _null(bytes[20]);
                bytes = tmp36;
                onCreated = tmp36.importedConjureInstallScope;
                c6 = 3;
                c7 = 1;
                const obj8 = { value: obj6.readConjureArchiveInstallScope(bytes.bytes), done: false };
                obj6 = _null(bytes[20]);
                return obj8;
              } else {
                closure_132_8(onCreated);
              }
            }
          }
        } else if (3 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            const tmp60 = onCreated(value, closure_132_3);
            _null = tmp60;
            if (tmp60 == null) {
              let tmp7 = "user";
              if (closure_132_3) {
                tmp7 = null;
              }
              _null = tmp7;
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
                            const intl = c0(bytes[17]).intl;
                            const string = intl.string;
                            if ("guild" === item) {
                              s1TsXl = closure_1(tmp[18]).LlLIJw;
                            } else {
                              s1TsXl = closure_1(tmp[18]).s1TsXl;
                            }
                            const obj = {
                              label: string(s1TsXl),
                              onPress() {
                                return callback3(bytes, item);
                              }
                            };
                            return obj;
                          })
              };
              obj12 = { title: intl.string(onCreated(bytes[18]).NyVn6T) };
              const showSimpleActionSheet = _null(bytes[21]).showSimpleActionSheet;
              const tmp20 = _null(bytes[21]);
              intl = _null(bytes[17]).intl;
              items = ["guild", "user"];
              const result = showSimpleActionSheet(obj11);
            } else {
              c6 = 4;
              c7 = 1;
              const obj13 = { value: closure_132_11(bytes, closure_3), done: false };
              return obj13;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj = { value, done: true };
          return obj;
        }
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp50) {
        if (0 === c5) {
          c7 = 3;
          throw tmp50;
        } else {
          c6 = 1;
        }
      }
    }
  }), items3);
  const tmp5Result = guildId(tmp6[11]);
  const landingModelChoicesResult = tmp5Result.landingModelChoices();
  c13 = landingModelChoicesResult;
  const items4 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback1 = obj.useCallback(() => {
    let ConjureEffortPickerSheet;
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: metroImportAll(ConjureEffortPickerSheet, obj2) };
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
  const items6 = [callback, guildId, callback2, CONJURE_DEFAULT_TIER_SETTINGS, disabled];
  closure_15 = obj.useCallback((wizard) => {
    let obj2;
    let closure_0 = wizard;
    if (null == wizard.wizard) {
      const tmp = first;
      if (!tmp) {
        const promise = callback((arg0) => {
          const obj = guildId(str[23]);
          return obj.startConjureTemplateProject(arg0, closure_0);
        }, wizard.id);
        promise.catch(() => {

        });
      }
    } else {
      let obj = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: metroImportAll(ConjureTemplateWizardSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback2 };
      showActionSheet(obj);
    }
  }, items6);
  let intl = tmp5(tmp6[17]).intl;
  const items7 = [intl.string(onCreated(tmp6[18])["9w+Chc"]), , ];
  let intl2 = tmp5(tmp6[17]).intl;
  items7[1] = intl2.string(onCreated(tmp6[18]).WAvmdq);
  const intl3 = tmp5(tmp6[17]).intl;
  items7[2] = intl3.string(onCreated(tmp6[18]).SKsrzl);
  let obj4 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: c8(BottomSheetTitleHeader, obj5), children: tmp23(tmp24, obj6) };
  const ActionSheet = tmp5(tmp6[25]).ActionSheet;
  obj5 = { title: intl4.string(onCreated(tmp6[18])["+5XyCR"]) };
  BottomSheetTitleHeader = tmp5(tmp6[26]).BottomSheetTitleHeader;
  intl4 = tmp5(tmp6[17]).intl;
  obj6 = { style: tmp.content, children: items9 };
  let obj7 = { style: tmp.form, children: items8 };
  let obj8 = { placeholder: intl5.string(onCreated(tmp6[18]).ab1sMf), autoComplete: "off", value: str, onChange: tmp4, disabled };
  const TextArea = tmp5(tmp6[27]).TextArea;
  intl5 = tmp5(tmp6[17]).intl;
  items8 = [c8(TextArea, obj8), , , , , ];
  let obj9 = { hasIcons: false, children: c8(TableRow, obj10) };
  const TableRowGroup = tmp5(tmp6[28]).TableRowGroup;
  obj10 = { label: intl6.string(onCreated(tmp6[18]).aBPQxX), trailing: c8(Text, obj11), arrow: true, disabled, onPress: callback1 };
  TableRow = tmp5(tmp6[29]).TableRow;
  intl6 = tmp5(tmp6[17]).intl;
  obj11 = { variant: "body-md/normal", color: "text-muted", children: tmp5Result5.conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier) };
  Text = tmp5(tmp6[30]).Text;
  tmp5Result5 = guildId(tmp6[31]);
  items8[1] = c8(TableRowGroup, obj9);
  let tmp22Result = null;
  if (null != tmp16) {
    let str2 = "text-muted";
    const Text2 = tmp5(tmp6[30]).Text;
    if (0 === tmp16) {
      str2 = "text-feedback-warning";
    }
    let obj12 = { variant: "body-sm/normal", color: str2, children: tmp5Result6.conjureAppSlotsLeftLabel(tmp16) };
    tmp5Result6 = guildId(tmp6[32]);
    tmp22Result = tmp22(Text2, obj12);
  }
  items8[2] = tmp22Result;
  let tmp22Result2 = null;
  if (null != tmp14) {
    let obj13 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp14 };
    tmp22Result2 = tmp22(tmp5(tmp6[30]).Text, obj13);
  }
  items8[3] = tmp22Result2;
  let obj14 = { variant: "body-xs/normal", color: "text-muted", children: intl7.string(tmp15(tmp6[18]).NvvCzX) };
  const Text3 = tmp5(tmp6[30]).Text;
  intl7 = tmp5(tmp6[17]).intl;
  items8[4] = c8(Text3, obj14);
  const obj15 = {
    variant: "primary",
    text: intl8.string(guildId(tmp6[17]).t.CumH4u),
    disabled: "" === str.trim(),
    loading: disabled,
    onPress() {
      return closure_10();
    }
  };
  const Button = tmp5(tmp6[33]).Button;
  intl8 = tmp5(tmp6[17]).intl;
  items8[5] = c8(Button, obj15);
  items9 = [tmp23(tmp24, obj7), , , ];
  const obj16 = { style: tmp.section, children: items11 };
  const obj17 = { style: tmp.sectionHeading, children: items10 };
  const obj18 = { variant: "body-md/medium", color: "text-default", children: intl9.string(onCreated(tmp6[18]).I7nPgX) };
  const Text4 = tmp5(tmp6[30]).Text;
  intl9 = tmp5(tmp6[17]).intl;
  items10 = [tmp22(Text4, obj18), ];
  const obj19 = { variant: "body-sm/normal", color: "text-muted", children: intl10.string(onCreated(tmp6[18]).FXB8wQ) };
  const Text5 = tmp5(tmp6[30]).Text;
  intl10 = tmp5(tmp6[17]).intl;
  items10[1] = c8(Text5, obj19);
  items11 = [tmp23(tmp24, obj17), ];
  const obj20 = { hasIcons: false, children: c8(TableRow2, obj21) };
  const TableRowGroup2 = tmp5(tmp6[28]).TableRowGroup;
  obj21 = {
    label: intl11.string(onCreated(tmp6[18])["C8/T2E"]),
    arrow: true,
    disabled,
    onPress() {
      const promise = closure_12();
      promise.catch(() => {

      });
    }
  };
  TableRow2 = tmp5(tmp6[29]).TableRow;
  intl11 = tmp5(tmp6[17]).intl;
  items11[1] = c8(TableRowGroup2, obj20);
  items9[1] = callback(disabled, obj16);
  const obj22 = { style: tmp.section, children: items13 };
  const obj23 = { style: tmp.sectionHeading, children: items12 };
  const obj24 = { variant: "body-md/medium", color: "text-default", children: intl12.string(onCreated(tmp6[18]).zzYLlW) };
  const Text6 = tmp5(tmp6[30]).Text;
  intl12 = tmp5(tmp6[17]).intl;
  items12 = [tmp22(Text6, obj24), ];
  const obj25 = { variant: "body-sm/normal", color: "text-muted", children: intl13.string(onCreated(tmp6[18])["N88+Ld"]) };
  const Text7 = tmp5(tmp6[30]).Text;
  intl13 = tmp5(tmp6[17]).intl;
  items12[1] = c8(Text7, obj25);
  items13 = [tmp23(tmp24, obj23), ];
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
        accessibilityLabel: intl.formatToPlainString(onCreated(str[18]).jGyR6p, obj2),
        onPress() {
          return closure_15(name);
        }
      };
      const TableRow = guildId(str[29]).TableRow;
      intl = guildId(str[17]).intl;
      obj2 = { name: name.name };
      return _undefined(TableRow, obj, name.id);
    })
  };
  const TableRowGroup3 = tmp5(tmp6[28]).TableRowGroup;
  items13[1] = c8(TableRowGroup3, obj26);
  items9[2] = callback(disabled, obj22);
  const obj27 = { style: tmp.section, children: items15 };
  const obj28 = { style: tmp.sectionHeading, children: items14 };
  const obj29 = { variant: "body-md/medium", color: "text-default", children: intl14.string(onCreated(tmp6[18])["2XcV3x"]) };
  const Text8 = tmp5(tmp6[30]).Text;
  intl14 = tmp5(tmp6[17]).intl;
  items14 = [tmp22(Text8, obj29), ];
  const obj30 = { variant: "body-sm/normal", color: "text-muted", children: intl15.string(onCreated(tmp6[18]).JnJOAn) };
  const Text9 = tmp5(tmp6[30]).Text;
  intl15 = tmp5(tmp6[17]).intl;
  items14[1] = c8(Text9, obj30);
  items15 = [tmp23(tmp24, obj28), ];
  const obj31 = {
    hasIcons: false,
    children: items7.map((label) => {
      let closure_0 = label;
      const obj = {
        label,
        arrow: true,
        disabled,
        onPress() {
          return closure_10(label);
        }
      };
      return _undefined(guildId(str[29]).TableRow, obj, label);
    })
  };
  const TableRowGroup4 = tmp5(tmp6[28]).TableRowGroup;
  items15[1] = c8(TableRowGroup4, obj31);
  items9[3] = callback(disabled, obj27);
  return c8(ActionSheet, obj4);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";
