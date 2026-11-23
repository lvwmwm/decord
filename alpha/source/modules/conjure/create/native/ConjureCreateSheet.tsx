// Module ID: 18652
// Function ID: 18653
// Name: ConjureCreateSheet
// Dependencies: [5, 32, 19, 17, 6967, 21, 4913, 575, 14756, 18643, 18653, 18642, 5127, 6937, 18391, 1112, 4190, 6933, 5594, 18342, 18654, 18655, 7553, 7515, 7461, 7348, 7045, 5504, 18343, 18661, 5511, 2]
// Exports: default

// Module 18652 (ConjureCreateSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6967 */;
import ConjureEffortPicker from "ConjureEffortPicker" /* 18342 */;
import ConjureLandingModelChoices from "ConjureLandingModelChoices" /* 18643 */;
import ConjureTemplateWizardSheet from "ConjureTemplateWizardSheet" /* 18655 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureTemplateWizardSheetDefault = ConjureTemplateWizardSheet;
let c2, closure_2, closure_3, modelSettings, v2, v3;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let _asyncToGenerator = _asyncToGenerator_mod;
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
const result = size.fileFinishedImporting("modules/conjure/create/native/ConjureCreateSheet.tsx");

export default function ConjureCreateSheet(guildId) {
  let BottomSheetTitleHeader;
  let CONJURE_DEFAULT_TIER_SETTINGS;
  let TableRow;
  let TableRow2;
  let Text;
  let c3;
  let c7;
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
  let items16;
  let items17;
  let obj10;
  let obj20;
  let obj4;
  let obj5;
  let obj9;
  let onChange;
  let tmp14;
  let tmp5Result5;
  let tmp5Result6;
  guildId = guildId.guildId;
  const onCreated = guildId.onCreated;
  const onSubmittingChange = guildId.onSubmittingChange;
  _asyncToGenerator = undefined;
  CONJURE_DEFAULT_TIER_SETTINGS = undefined;
  let disabled;
  let closure_6;
  c7 = undefined;
  let callback;
  let closure_9;
  let callback3;
  closure_11 = undefined;
  let c12;
  let callback2;
  let closure_14;
  let tmp = closure_11();
  let obj = disabled;
  const tmp2 = CONJURE_DEFAULT_TIER_SETTINGS;
  const tmp3 = CONJURE_DEFAULT_TIER_SETTINGS(disabled.useState(""), 2);
  const str = tmp3[0];
  const tmp6 = str;
  const tmp4 = tmp3[1];
  let obj2 = guildId(str[8]);
  const conjureLinkPrefetch = obj2.useConjureLinkPrefetch(str);
  const tmp8 = CONJURE_DEFAULT_TIER_SETTINGS(disabled.useState(null), 2);
  [CONJURE_DEFAULT_TIER_SETTINGS, c3] = tmp8;
  if (CONJURE_DEFAULT_TIER_SETTINGS == null) {
    CONJURE_DEFAULT_TIER_SETTINGS = tmp5(tmp6[9]).CONJURE_DEFAULT_TIER_SETTINGS;
  }
  const tmp2Result = tmp2(obj.useState(false), 2);
  let closure_1 = tmp2Result[1];
  const items = [tmp2Result[0], ];
  const items1 = [onSubmittingChange];
  items[1] = obj.useCallback((arg0) => {
    closure_1(arg0);
    onSubmittingChange(arg0);
  }, items1);
  const tmp2Result3 = tmp2(items, 2);
  disabled = tmp2Result3[0];
  closure_6 = tmp12;
  [tmp14, c7] = tmp2(obj.useState(null), 2);
  tmp2(obj.useState(null), 2);
  const tmp16 = onCreated(tmp6[10])();
  const useCallback = obj.useCallback;
  guildId = _asyncToGenerator(async (guildId, templateId) => {
    let c6 = 0;
    c7 = 0;
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
          if (0 === v2) {
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
              v2(true);
              v3(null);
              c5 = 2;
              v2 = 3;
              v3 = 1;
              const obj5 = { guildId, modelSettings, templateId };
              const obj6 = { value: onCreated(str[11])(obj5), done: false };
              return obj6;
            }
          } else if (1 === v2) {
            c5 = 0;
            v2(false);
            throw modelSettings;
          } else {
            if (2 === v2) {
              c5 = 1;
              closure_2 = modelSettings;
              const obj3 = guildId(str[13]);
              v3(obj3.getConjureCreateErrorMessage(closure_2));
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              v2(false);
              v3 = 3;
              return { value, done: true };
            } else {
              templateId = value;
              guildId(templateId);
              const obj = onCreated(str[12]);
              obj.hideActionSheet(callback3);
              templateId(templateId, guildId);
              c5 = 1;
            }
            c5 = 0;
            v2(false);
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp38) {
          modelSettings = tmp38;
          if (0 === c5) {
            v3 = 3;
            throw tmp38;
          } else if (1 === tmp40) {
            v2 = 1;
          } else {
            v2 = 2;
          }
        }
      }
    })();
  });
  const items2 = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, tmp12];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
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
  const items3 = [callback, str, disabled];
  closure_9 = useCallback2(function() {
    return closure_0(...arguments);
  }, items3);
  const useCallback3 = obj.useCallback;
  guildId = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
          if (0 === c5) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              v3(true);
              closure_1 = null;
              modelSettings = 2;
              c5 = 3;
              v3 = 1;
              const obj4 = { guildId, modelSettings };
              const obj7 = { value: onCreated(str[11])(obj4), done: false };
              return obj7;
            }
          } else if (1 === c5) {
            modelSettings = 0;
            v3(false);
            throw closure_3;
          } else {
            if (2 === c5) {
              modelSettings = 1;
              closure_2 = closure_3;
              if (null != closure_1) {
                c5 = 5;
                v3 = 1;
                const obj6 = guildId(str[17]);
                const obj8 = {
                  value: deleteProjectResult.catch(() => {

                            }),
                  done: false
                };
                deleteProjectResult = obj6.deleteProject(closure_1);
                return obj8;
              } else {
                const presentError2 = guildId(str[18]).presentError;
                guildId(str[18]);
                const obj5 = guildId(str[13]);
                presentError2(obj5.getConjureCreateErrorMessage(closure_2));
              }
            } else if (3 === c5) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                modelSettings = 0;
                v3(false);
                v3 = 3;
                return { value, done: true };
              } else {
                closure_1 = value;
                const sendConjureArchiveImport = guildId(str[14]).sendConjureArchiveImport;
                guildId(str[14]);
                const intl2 = guildId(str[15]).intl;
                c5 = 4;
                v3 = 1;
                const obj10 = { value: sendConjureArchiveImport(closure_1, guildId, intl2.string(onCreated(str[16])["LUc7/5"])), done: false };
                return obj10;
              }
            } else if (4 === c5) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                modelSettings = 0;
                v3(false);
                v3 = 3;
                return { value, done: true };
              } else {
                closure_1(closure_1, guildId);
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
              const presentError = guildId(str[18]).presentError;
              guildId(str[18]);
              const intl = guildId(str[15]).intl;
              presentError(intl.string(onCreated(str[16])["Q+l4Hv"]));
            }
            modelSettings = 0;
            v3(false);
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp62) {
          closure_3 = tmp62;
          if (0 === modelSettings) {
            v3 = 3;
            throw tmp62;
          } else if (1 === tmp64) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  const items4 = [guildId, CONJURE_DEFAULT_TIER_SETTINGS, onCreated, tmp12];
  callback3 = useCallback3(function() {
    return closure_0(...arguments);
  }, items4);
  const items5 = [callback3, disabled];
  closure_11 = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_1;
    let obj7;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guildId = undefined;
            tmp = undefined;
            const tmp44 = first;
            if (!tmp44) {
              const obj6 = tmp(c2[12]);
              obj6.hideActionSheet(callback3);
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: obj7.pickConjureArchive(), done: false };
              obj7 = guildId(c2[14]);
              return obj5;
            }
          }
        } else if (1 === c3) {
          c2 = 0;
          const presentError = guildId(c2[18]).presentError;
          const tmp18 = guildId(c2[18]);
          const intl = guildId(c2[15]).intl;
          presentError(intl.string(tmp(c2[16])["Q+l4Hv"]));
          c4 = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            guildId = value;
            c2 = 0;
            if (null != guildId) {
              const obj11 = guildId(c2[14]);
              tmp = obj11.describeConjureArchiveRejection(guildId);
              if (null == tmp) {
                c3 = 3;
                c4 = 1;
                const obj10 = { value: closure_129_10(guildId), done: false };
                return obj10;
              } else {
                const obj2 = guildId(c2[18]);
                obj2.presentError(tmp);
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp30) {
        if (0 === c2) {
          c4 = 3;
          throw tmp30;
        } else {
          c3 = 1;
        }
      }
    }
  }), items5);
  const tmp5Result = guildId(tmp6[9]);
  const landingModelChoicesResult = tmp5Result.landingModelChoices();
  c12 = landingModelChoicesResult;
  const items6 = [landingModelChoicesResult, CONJURE_DEFAULT_TIER_SETTINGS];
  const callback1 = obj.useCallback(() => {
    let ConjureEffortPickerSheet;
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureEffortPicker.CONJURE_EFFORT_PICKER_SHEET_KEY, stackingBehavior: "stack", content: metroImportAll(ConjureEffortPickerSheet, obj2) };
    obj2 = { initialSettings: CONJURE_DEFAULT_TIER_SETTINGS, tiers: ConjureLandingModelChoices.CONJURE_LANDING_TIER_SEATS, choices, onChange };
    ConjureEffortPickerSheet = ConjureEffortPicker.ConjureEffortPickerSheet;
    showActionSheet(obj);
  }, items6);
  const items7 = [onCreated];
  const tmp5Result4 = guildId(tmp6[20]);
  const conjureTemplatesResult = tmp5Result4.conjureTemplates();
  callback2 = obj.useCallback((arg0, arg1) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureCreateSheet_str);
    onCreated(arg0, arg1);
  }, items7);
  const items8 = [callback, guildId, callback2, CONJURE_DEFAULT_TIER_SETTINGS, disabled];
  closure_14 = obj.useCallback((wizard) => {
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
      let obj = { key: ConjureTemplateWizardSheet.CONJURE_TEMPLATE_WIZARD_SHEET_KEY, stackingBehavior: "stack", content: metroImportAll(ConjureTemplateWizardSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { template: wizard, guildId, modelSettings: CONJURE_DEFAULT_TIER_SETTINGS, onCreated: callback2 };
      showActionSheet(obj);
    }
  }, items8);
  let intl = tmp5(tmp6[15]).intl;
  const items9 = [intl.string(onCreated(tmp6[16])["9w+Chc"]), , ];
  let intl2 = tmp5(tmp6[15]).intl;
  items9[1] = intl2.string(onCreated(tmp6[16]).WAvmdq);
  const intl3 = tmp5(tmp6[15]).intl;
  items9[2] = intl3.string(onCreated(tmp6[16]).SKsrzl);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: callback(BottomSheetTitleHeader, obj4), children: tmp23(tmp24, obj5) };
  const ActionSheet = tmp5(tmp6[22]).ActionSheet;
  obj4 = { title: intl4.string(onCreated(tmp6[16])["+5XyCR"]) };
  BottomSheetTitleHeader = tmp5(tmp6[23]).BottomSheetTitleHeader;
  intl4 = tmp5(tmp6[15]).intl;
  obj5 = { style: tmp.content, children: items11 };
  let obj6 = { style: tmp.form, children: items10 };
  let obj7 = { placeholder: intl5.string(onCreated(tmp6[16]).ab1sMf), autoComplete: "off", value: str, onChange: tmp4, disabled };
  const TextArea = tmp5(tmp6[24]).TextArea;
  intl5 = tmp5(tmp6[15]).intl;
  items10 = [callback(TextArea, obj7), , , , , ];
  let obj8 = { hasIcons: false, children: callback(TableRow, obj9) };
  const TableRowGroup = tmp5(tmp6[25]).TableRowGroup;
  obj9 = { label: intl6.string(onCreated(tmp6[16]).aBPQxX), trailing: callback(Text, obj10), arrow: true, disabled, onPress: callback1 };
  TableRow = tmp5(tmp6[26]).TableRow;
  intl6 = tmp5(tmp6[15]).intl;
  obj10 = { variant: "body-md/normal", color: "text-muted", children: tmp5Result5.conjureTierDescription(CONJURE_DEFAULT_TIER_SETTINGS.tier) };
  Text = tmp5(tmp6[27]).Text;
  tmp5Result5 = guildId(tmp6[28]);
  items10[1] = callback(TableRowGroup, obj8);
  let tmp22Result = null;
  if (null != tmp16) {
    let str2 = "text-muted";
    const Text2 = tmp5(tmp6[27]).Text;
    if (0 === tmp16) {
      str2 = "text-feedback-warning";
    }
    let obj11 = { variant: "body-sm/normal", color: str2, children: tmp5Result6.conjureAppSlotsLeftLabel(tmp16) };
    tmp5Result6 = guildId(tmp6[29]);
    tmp22Result = tmp22(Text2, obj11);
  }
  items10[2] = tmp22Result;
  let tmp22Result2 = null;
  if (null != tmp14) {
    const obj12 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp14 };
    tmp22Result2 = tmp22(tmp5(tmp6[27]).Text, obj12);
  }
  items10[3] = tmp22Result2;
  const obj13 = { variant: "body-xs/normal", color: "text-muted", children: intl7.string(onCreated(tmp6[16]).NvvCzX) };
  const Text3 = tmp5(tmp6[27]).Text;
  intl7 = tmp5(tmp6[15]).intl;
  items10[4] = callback(Text3, obj13);
  const obj14 = {
    variant: "primary",
    text: intl8.string(guildId(tmp6[15]).t.CumH4u),
    disabled: "" === str.trim(),
    loading: disabled,
    onPress() {
      return closure_9();
    }
  };
  const Button = tmp5(tmp6[30]).Button;
  intl8 = tmp5(tmp6[15]).intl;
  items10[5] = callback(Button, obj14);
  items11 = [tmp23(tmp24, obj6), , , ];
  const obj15 = { style: tmp.section, children: items13 };
  const obj16 = { style: tmp.sectionHeading, children: items12 };
  const obj17 = { variant: "body-md/medium", color: "text-default", children: intl9.string(onCreated(tmp6[16]).I7nPgX) };
  const Text4 = tmp5(tmp6[27]).Text;
  intl9 = tmp5(tmp6[15]).intl;
  items12 = [tmp22(Text4, obj17), ];
  const obj18 = { variant: "body-sm/normal", color: "text-muted", children: intl10.string(onCreated(tmp6[16]).FXB8wQ) };
  const Text5 = tmp5(tmp6[27]).Text;
  intl10 = tmp5(tmp6[15]).intl;
  items12[1] = callback(Text5, obj18);
  items13 = [tmp23(tmp24, obj16), ];
  const obj19 = { hasIcons: false, children: callback(TableRow2, obj20) };
  const TableRowGroup2 = tmp5(tmp6[25]).TableRowGroup;
  obj20 = {
    label: intl11.string(onCreated(tmp6[16])["C8/T2E"]),
    arrow: true,
    disabled,
    onPress() {
      const promise = closure_11();
      promise.catch(() => {

      });
    }
  };
  TableRow2 = tmp5(tmp6[26]).TableRow;
  intl11 = tmp5(tmp6[15]).intl;
  items13[1] = callback(TableRowGroup2, obj19);
  items11[1] = closure_9(closure_6, obj15);
  const obj21 = { style: tmp.section, children: items15 };
  const obj22 = { style: tmp.sectionHeading, children: items14 };
  const obj23 = { variant: "body-md/medium", color: "text-default", children: intl12.string(onCreated(tmp6[16]).zzYLlW) };
  const Text6 = tmp5(tmp6[27]).Text;
  intl12 = tmp5(tmp6[15]).intl;
  items14 = [tmp22(Text6, obj23), ];
  const obj24 = { variant: "body-sm/normal", color: "text-muted", children: intl13.string(onCreated(tmp6[16])["N88+Ld"]) };
  const Text7 = tmp5(tmp6[27]).Text;
  intl13 = tmp5(tmp6[15]).intl;
  items14[1] = callback(Text7, obj24);
  items15 = [tmp23(tmp24, obj22), ];
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
        accessibilityLabel: intl.formatToPlainString(onCreated(str[16]).jGyR6p, obj2),
        onPress() {
          return closure_14(name);
        }
      };
      const TableRow = guildId(str[26]).TableRow;
      intl = guildId(str[15]).intl;
      obj2 = { name: name.name };
      return callback(TableRow, obj, name.id);
    })
  };
  const TableRowGroup3 = tmp5(tmp6[25]).TableRowGroup;
  items15[1] = callback(TableRowGroup3, obj25);
  items11[2] = closure_9(closure_6, obj21);
  const obj26 = { style: tmp.section, children: items17 };
  const obj27 = { style: tmp.sectionHeading, children: items16 };
  const obj28 = { variant: "body-md/medium", color: "text-default", children: intl14.string(onCreated(tmp6[16])["2XcV3x"]) };
  const Text8 = tmp5(tmp6[27]).Text;
  intl14 = tmp5(tmp6[15]).intl;
  items16 = [tmp22(Text8, obj28), ];
  const obj29 = { variant: "body-sm/normal", color: "text-muted", children: intl15.string(onCreated(tmp6[16]).JnJOAn) };
  const Text9 = tmp5(tmp6[27]).Text;
  intl15 = tmp5(tmp6[15]).intl;
  items16[1] = callback(Text9, obj29);
  items17 = [tmp23(tmp24, obj27), ];
  const obj30 = {
    hasIcons: false,
    children: items9.map((label) => {
      let closure_0 = label;
      const obj = {
        label,
        arrow: true,
        disabled,
        onPress() {
          return closure_9(label);
        }
      };
      return callback(guildId(str[26]).TableRow, obj, label);
    })
  };
  const TableRowGroup4 = tmp5(tmp6[25]).TableRowGroup;
  items17[1] = callback(TableRowGroup4, obj30);
  items11[3] = closure_9(closure_6, obj26);
  return callback(ActionSheet, obj3);
};
export const CONJURE_CREATE_SHEET_KEY = "ConjureCreateSheet";
