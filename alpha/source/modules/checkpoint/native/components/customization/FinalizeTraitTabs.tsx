// Module ID: 15953
// Function ID: 15954
// Name: FinalizeTraitTabs
// Dependencies: [19, 17, 5434, 21, 15924, 5055, 15954, 2000, 5091, 587, 558, 576, 1382, 1126, 5087, 15955, 15956, 4779, 3115, 10498, 2]

// Module 15953 (FinalizeTraitTabs)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15924 */;
import CheckpointPressable from "CheckpointPressable" /* 15955 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 15956 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5434 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const CheckpointPressableDefault = CheckpointPressable;
let closure_6, dependencyMap;

let CHECKPOINT_PRIMARY;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
({ ScrollView: c3, View: closure_4 } = react_native);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY } = CheckpointConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR];
let closure_10 = items.length + 1;
let createStyles = createStyles_mod;
let obj = { scrollContent: obj2, row: obj3, tabContainerActive: { paddingRight: 0, paddingBottom: 0 }, tab: obj4, tabActive: obj5, tabDisabled: { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL }, tabLabel: { color: nativeDefault.colors.BLACK, textTransform: "uppercase" }, tabLabelActive: { color: CHECKPOINT_PRIMARY, textTransform: "uppercase" }, tabLabelDisabled: { color: nativeDefault.colors.TEXT_SUBTLE } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj4 = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
obj5 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
({ backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL });
({ color: nativeDefault.colors.BLACK, textTransform: "uppercase" });
({ color: nativeDefault.colors.TEXT_SUBTLE });
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitTab(arg0) {
  let accessibilityHint;
  let disabled;
  let isActive;
  let label;
  let onPress;
  let position;
  let tmp5;
  let trailing;
  const obj = react2;
  const cResult = obj.c(28);
  ({ label, position, isActive, disabled, accessibilityHint, onPress, trailing } = arg0);
  let tabLabelDisabled = undefined !== disabled && disabled;
  const tmp4 = closure_11();
  if (cResult[0] !== position) {
    let formatToPlainStringResult;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      const intl = tmp(1126).intl;
      const obj2 = { position, tabCount };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["4EsQA1"], obj2);
    }
    cResult[0] = position;
    cResult[1] = formatToPlainStringResult;
    tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === accessibilityHint) {
    let arr;
    let joined;
    if (cResult[3] === tmp5) {
      arr = cResult[4];
    }
    if (arr.length > 0) {
      joined = arr.join(", ");
    }
    if (cResult[5] === tmp4.tab) {
      if (cResult[6] === (isActive && tmp4.tabActive)) {
        let tmp13;
        if (cResult[7] === (tabLabelDisabled && tmp4.tabDisabled)) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tabLabelDisabled) {
          let tmp15;
          if (cResult[10] === isActive) {
            tmp15 = cResult[11];
          }
          if (isActive) {
            isActive = tmp4.tabLabelActive;
          }
          if (tabLabelDisabled) {
            tabLabelDisabled = tmp4.tabLabelDisabled;
          }
          if (cResult[12] === tmp4.tabLabel) {
            if (cResult[13] === isActive) {
              let tmp16;
              if (cResult[14] === tabLabelDisabled) {
                tmp16 = cResult[15];
              }
              if (cResult[16] === label) {
                let tmp17;
                if (cResult[17] === tmp16) {
                  tmp17 = cResult[18];
                }
                if (cResult[19] === joined) {
                  if (cResult[20] === onPress) {
                    if (cResult[21] === tmp17) {
                      if (cResult[22] === (isActive && tmp4.tabContainerActive)) {
                        if (cResult[23] === tmp13) {
                          if (cResult[24] === (isActive || tabLabelDisabled)) {
                            if (cResult[25] === tmp15) {
                              let tmp20;
                              if (cResult[26] === trailing) {
                                tmp20 = cResult[27];
                              }
                              return tmp20;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj3 = { size: "sm", containerStyle: isActive && tmp4.tabContainerActive, style: tmp13, disabled: isActive || tabLabelDisabled, onPress, accessibilityRole: "tab", accessibilityHint: joined, accessibilityState: tmp15, shadowColor: hasOwnProperty, children: items };
                items = [tmp17, trailing];
                const tmp24 = metroImportAll(CheckpointPressableDefault, obj3);
                cResult[19] = joined;
                cResult[20] = onPress;
                cResult[21] = tmp17;
                cResult[22] = isActive && tmp4.tabContainerActive;
                cResult[23] = tmp13;
                cResult[24] = isActive || tabLabelDisabled;
                cResult[25] = tmp15;
                cResult[26] = trailing;
                cResult[27] = tmp24;
                tmp20 = tmp24;
              }
              const obj4 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: tmp16, children: label };
              const Text = tmp(5087).Text;
              const tmp19 = metroImportDefault(Text, obj4);
              cResult[16] = label;
              cResult[17] = tmp16;
              cResult[18] = tmp19;
              tmp17 = tmp19;
            }
          }
          const items1 = [tmp4.tabLabel, isActive, tabLabelDisabled];
          cResult[12] = tmp4.tabLabel;
          cResult[13] = isActive;
          cResult[14] = tabLabelDisabled;
          cResult[15] = items1;
          tmp16 = items1;
        }
        const obj5 = { selected: isActive, disabled: tabLabelDisabled };
        cResult[9] = tabLabelDisabled;
        cResult[10] = isActive;
        cResult[11] = obj5;
        tmp15 = obj5;
      }
    }
    const items2 = [tmp4.tab, isActive && tmp4.tabActive, tabLabelDisabled && tmp4.tabDisabled];
    cResult[5] = tmp4.tab;
    cResult[6] = isActive && tmp4.tabActive;
    cResult[7] = tabLabelDisabled && tmp4.tabDisabled;
    cResult[8] = items2;
    tmp13 = items2;
  }
  const items3 = [tmp5, accessibilityHint];
  const found = items3.filter((item) => null != item);
  cResult[2] = accessibilityHint;
  cResult[3] = tmp5;
  cResult[4] = found;
  arr = found;
}) : (function TraitTab(arg0) {
  let accessibilityHint;
  let disabled;
  let isActive;
  let items1;
  let items2;
  let items3;
  let label;
  let onPress;
  let position;
  let trailing;
  ({ isActive, disabled } = arg0);
  ({ label, position } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ accessibilityHint, onPress, trailing } = arg0);
  const tmp = closure_11();
  let formatToPlainStringResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const intl = tmp2(1126).intl;
    const obj2 = { position, tabCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t["4EsQA1"], obj2);
  }
  items = [formatToPlainStringResult, accessibilityHint];
  const found = items.filter((item) => null != item);
  let joined;
  if (found.length > 0) {
    joined = found.join(", ");
  }
  let tabContainerActive = isActive;
  const tmp7 = metroImportAll;
  const tmp8 = CheckpointPressableDefault;
  if (isActive) {
    tabContainerActive = tmp.tabContainerActive;
  }
  const obj3 = { size: "sm", containerStyle: tabContainerActive, style: items1, disabled: isActive || disabled, onPress, accessibilityRole: "tab", accessibilityHint: joined, accessibilityState: { selected: isActive, disabled }, shadowColor: hasOwnProperty, children: items3 };
  items1 = [tmp.tab, isActive && tmp.tabActive, disabled && tmp.tabDisabled];
  const obj4 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: items2, children: label };
  const Text = tmp2(5087).Text;
  items2 = [tmp.tabLabel, , ];
  const tmp9 = metroImportDefault;
  if (isActive) {
    isActive = tmp.tabLabelActive;
  }
  items2[1] = isActive;
  if (disabled) {
    disabled = tmp.tabLabelDisabled;
  }
  items2[2] = disabled;
  items3 = [tmp9(Text, obj4), trailing];
  return tmp7(tmp8, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function FinalizeTraitTabs(activeCustomizationOption) {
  let closure_2;
  let disableSwitching;
  let disabled;
  let str2;
  let tmp = activeCustomizationOption;
  let tmp2 = dependencyMap;
  let obj = activeCustomizationOption(576);
  const cResult = obj.c(44);
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const onSelectOption = activeCustomizationOption.onSelectOption;
  ({ disableSwitching, disabled } = activeCustomizationOption);
  let tmp4 = undefined !== disableSwitching && disableSwitching;
  dependencyMap = tmp4;
  let closure_3 = tmp5;
  const tmp6 = closure_11();
  const tmp7 = tmp(15924).CUSTOMIZATION_OPTION_TRAITS[activeCustomizationOption];
  let closure_4 = tmp7;
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp4) {
      let tmp8;
      let tmp10;
      if (cResult[2] === (undefined !== disabled && disabled)) {
        tmp8 = cResult[3];
      }
      const accessibilityHint = tmp8;
      if (cResult[4] !== activeCustomizationOption) {
        const hasItem = items.includes(activeCustomizationOption);
        cResult[4] = activeCustomizationOption;
        cResult[5] = hasItem;
        tmp10 = hasItem;
      } else {
        tmp10 = cResult[5];
      }
      const tmpResult = tmp(4779);
      const token = tmpResult.useToken("text-subtle");
      let tmp15 = token;
      if (!tmp4) {
        tmp15 = token;
        if (!(undefined !== disabled && disabled)) {
          let BLACK;
          if (tmp10) {
            BLACK = onSelectOption(587).colors.BLACK;
          } else {
            BLACK = closure_6;
          }
          tmp15 = BLACK;
        }
      }
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === (undefined !== disabled && disabled)) {
            let tmp17;
            if (cResult[9] === onSelectOption) {
              tmp17 = cResult[10];
            }
            closure_6 = tmp17;
            if (cResult[11] === activeCustomizationOption) {
              if (cResult[12] === tmp7) {
                if (cResult[13] === tmp4) {
                  if (cResult[14] === (undefined !== disabled && disabled)) {
                    let tmp18;
                    if (cResult[15] === onSelectOption) {
                      tmp18 = cResult[16];
                    }
                    if (cResult[17] === activeCustomizationOption) {
                      if (cResult[18] === tmp4) {
                        if (cResult[19] === (undefined !== disabled && disabled)) {
                          if (cResult[20] === tmp8) {
                            let tmp21;
                            let stringResult1;
                            if (cResult[21] === tmp17) {
                              tmp21 = cResult[22];
                            }
                            if (cResult[23] === activeCustomizationOption) {
                              let tmp24;
                              let tmp27;
                              let tmp31;
                              if (cResult[24] === !tmp10) {
                                tmp24 = cResult[25];
                              }
                              if (!tmp4) {
                                tmp4 = tmp5;
                              }
                              if (cResult[26] !== tmp8) {
                                let stringResult = tmp8;
                                if (tmp8 == null) {
                                  const intl2 = tmp(1126).intl;
                                  stringResult = intl2.string(onSelectOption(3115)["8cGmXF"]);
                                }
                                cResult[26] = tmp8;
                                cResult[27] = stringResult;
                                tmp27 = stringResult;
                              } else {
                                tmp27 = cResult[27];
                              }
                              if (cResult[28] !== tmp15) {
                                let obj2 = { color: tmp15, size: "xs" };
                                const tmp33 = closure_7(tmp(10498).ChevronSmallDownIcon, obj2);
                                cResult[28] = tmp15;
                                cResult[29] = tmp33;
                                tmp31 = tmp33;
                              } else {
                                tmp31 = cResult[29];
                              }
                              if (cResult[30] === tmp18) {
                                if (cResult[31] === !tmp10) {
                                  if (cResult[32] === tmp24) {
                                    if (cResult[33] === tmp4) {
                                      if (cResult[34] === tmp27) {
                                        let tmp34;
                                        if (cResult[35] === tmp31) {
                                          tmp34 = cResult[36];
                                        }
                                        if (cResult[37] === tmp6.row) {
                                          if (cResult[38] === tmp34) {
                                            let tmp39;
                                            if (cResult[39] === tmp21) {
                                              tmp39 = cResult[40];
                                            }
                                            if (cResult[41] === tmp6.scrollContent) {
                                              let tmp43;
                                              if (cResult[42] === tmp39) {
                                                tmp43 = cResult[43];
                                              }
                                              return tmp43;
                                            }
                                            let str3;
                                            const tmp44 = closure_7;
                                            const tmp45 = closure_3;
                                            const tmpResult5 = tmp(1382);
                                            if (tmpResult5.isIOS()) {
                                              str3 = "tabbar";
                                            }
                                            const obj3 = { horizontal: true, accessibilityRole: str3, alwaysBounceHorizontal: false, contentContainerStyle: tmp19, children: tmp39 };
                                            const tmp44Result = tmp44(tmp45, obj3);
                                            cResult[41] = tmp6.scrollContent;
                                            cResult[42] = tmp39;
                                            cResult[43] = tmp44Result;
                                            tmp43 = tmp44Result;
                                          }
                                        }
                                        const obj4 = { style: tmp20, accessibilityRole: str2, children: items };
                                        str2 = undefined;
                                        const tmp40 = closure_8;
                                        const tmp41 = closure_4;
                                        const tmpResult6 = tmp(1382);
                                        if (tmpResult6.isAndroid()) {
                                          str2 = "tablist";
                                        }
                                        items = [tmp21, tmp34];
                                        const tmp40Result = tmp40(tmp41, obj4);
                                        cResult[37] = tmp6.row;
                                        cResult[38] = tmp34;
                                        cResult[39] = tmp21;
                                        cResult[40] = tmp40Result;
                                        tmp39 = tmp40Result;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj5 = { position, label: tmp24, isActive: !tmp10, disabled: tmp4, accessibilityHint: tmp27, onPress: tmp18, trailing: tmp31 };
                              const tmp38 = closure_7(closure_12, obj5);
                              cResult[30] = tmp18;
                              cResult[31] = !tmp10;
                              cResult[32] = tmp24;
                              cResult[33] = tmp4;
                              cResult[34] = tmp27;
                              cResult[35] = tmp31;
                              cResult[36] = tmp38;
                              tmp34 = tmp38;
                            }
                            if (tmp10) {
                              const intl = tmp(1126).intl;
                              stringResult1 = intl.string(onSelectOption(3115)["iXpQc+"]);
                            } else {
                              const tmpResult7 = tmp(15924);
                              stringResult1 = tmpResult7.getCustomizationOptionName(activeCustomizationOption);
                            }
                            cResult[23] = activeCustomizationOption;
                            cResult[24] = !tmp10;
                            cResult[25] = stringResult1;
                            tmp24 = stringResult1;
                          }
                        }
                      }
                    }
                    const mapped = items.map((item, index) => {
                      let obj2;
                      let closure_0 = item;
                      const obj = {
                        label: obj2.getCustomizationOptionName(item),
                        position: index + 1,
                        isActive: closure_0 === item,
                        disabled: closure_2 || closure_3,
                        accessibilityHint,
                        onPress() {
                          return closure_6(item);
                        }
                      };
                      obj2 = activeCustomizationOption(closure_2[4]);
                      return closure_1_7(closure_1_12, obj, item);
                    });
                    cResult[17] = activeCustomizationOption;
                    cResult[18] = tmp4;
                    cResult[19] = undefined !== disabled && disabled;
                    cResult[20] = tmp8;
                    cResult[21] = tmp17;
                    cResult[22] = mapped;
                    tmp21 = mapped;
                  }
                }
              }
            }
            function handleMorePress() {
              const tmp = closure_3;
              if (!tmp) {
                const tmp2 = closure_2;
                if (tmp2) {
                  showNitroLockedToastDefault(closure_4);
                } else {
                  const obj = { selectedOption: activeCustomizationOption, onSelectOption };
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.openLazy(asyncRequire(15954, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
                }
              }
            }
            cResult[11] = activeCustomizationOption;
            cResult[12] = tmp7;
            cResult[13] = tmp4;
            cResult[14] = undefined !== disabled && disabled;
            cResult[15] = onSelectOption;
            cResult[16] = handleMorePress;
            tmp18 = handleMorePress;
          }
        }
      }
      function handleSelectOption(arg0) {
        const tmp = closure_3;
        if (!tmp) {
          const tmp2 = closure_2;
          if (tmp2) {
            showNitroLockedToastDefault(closure_4);
          } else {
            onSelectOption(arg0);
          }
        }
      }
      cResult[6] = tmp7;
      cResult[7] = tmp4;
      cResult[8] = undefined !== disabled && disabled;
      cResult[9] = onSelectOption;
      cResult[10] = handleSelectOption;
      tmp17 = handleSelectOption;
    }
  }
  let nitroLockedMessage;
  if (tmp4) {
    if (!(undefined !== disabled && disabled)) {
      const tmpResult8 = tmp(15956);
      nitroLockedMessage = tmpResult8.getNitroLockedMessage(tmp7);
    }
  }
  cResult[0] = tmp7;
  cResult[1] = tmp4;
  cResult[2] = undefined !== disabled && disabled;
  cResult[3] = nitroLockedMessage;
  tmp8 = nitroLockedMessage;
}) : (function FinalizeTraitTabs(activeCustomizationOption) {
  let disableSwitching;
  let obj2;
  let onSelectOption;
  let str2;
  let stringResult;
  let tmp13;
  let tmp14;
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  ({ onSelectOption: importDefault, disableSwitching } = activeCustomizationOption);
  if (disableSwitching === undefined) {
    disableSwitching = false;
  }
  let flag = activeCustomizationOption.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_11();
  let tmp2 = activeCustomizationOption;
  let tmp3 = disableSwitching;
  const tmp4 = activeCustomizationOption(disableSwitching[4]).CUSTOMIZATION_OPTION_TRAITS[activeCustomizationOption];
  let closure_4 = tmp4;
  let nitroLockedMessage;
  if (disableSwitching) {
    if (!flag) {
      const tmp2Result = tmp2(tmp3[16]);
      nitroLockedMessage = tmp2Result.getNitroLockedMessage(tmp4);
    }
  }
  const hasItem = items.includes(activeCustomizationOption);
  const tmp7 = !hasItem;
  const tmp2Result5 = tmp2(tmp3[17]);
  const token = tmp2Result5.useToken("text-subtle");
  let tmp9 = token;
  const arr = items;
  if (!disableSwitching) {
    tmp9 = token;
    if (!flag) {
      let BLACK;
      if (hasItem) {
        BLACK = require("native").colors.BLACK;
      } else {
        BLACK = CHECKPOINT_PRIMARY;
      }
      tmp9 = BLACK;
    }
  }
  let str;
  const tmp12 = flag;
  const tmp2Result6 = tmp2(tmp3[12]);
  if (tmp2Result6.isIOS()) {
    str = "tabbar";
  }
  let obj = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, contentContainerStyle: tmp.scrollContent, children: tmp13(tmp14, obj2) };
  obj2 = { style: tmp.row, accessibilityRole: str2, children: items };
  str2 = undefined;
  tmp13 = closure_8;
  tmp14 = closure_4;
  const tmp2Result7 = tmp2(tmp3[12]);
  if (tmp2Result7.isAndroid()) {
    str2 = "tablist";
  }
  items = [
    arr.map((item, index) => {
      let obj2;
      let closure_0 = item;
      const tmp = closure_1_7;
      let tmp2 = closure_1_12;
      const obj = {
        label: obj2.getCustomizationOptionName(item),
        position: index + 1,
        isActive: closure_0 === item,
        disabled: disableSwitching || flag,
        accessibilityHint: nitroLockedMessage,
        onPress() {
          const tmp2 = flag;
          if (!tmp2) {
            const tmp3 = disableSwitching;
            if (tmp3) {
              showNitroLockedToastDefault(closure_4);
            } else {
              importDefault(tmp);
            }
          }
        }
      };
      obj2 = activeCustomizationOption(disableSwitching[4]);
      return tmp(tmp2, obj, item);
    }),

  ];
  const obj3 = {
    position,
    label: stringResult,
    isActive: tmp7,
    disabled: disableSwitching,
    accessibilityHint: nitroLockedMessage,
    onPress: function handleMorePress() {
      const tmp = flag;
      if (!tmp) {
        const tmp2 = disableSwitching;
        if (tmp2) {
          showNitroLockedToastDefault(closure_4);
        } else {
          const obj = { selectedOption: activeCustomizationOption, onSelectOption: importDefault };
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.openLazy(asyncRequire(15954, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
        }
      }
    },
    trailing: closure_7(tmp2(tmp3[19]).ChevronSmallDownIcon, { color: tmp9, size: "xs" })
  };
  const tmp15 = closure_12;
  if (hasItem) {
    const intl = tmp2(tmp3[13]).intl;
    stringResult = intl.string(require("module_3115")["iXpQc+"]);
  } else {
    const tmp2Result8 = tmp2(tmp3[4]);
    stringResult = tmp2Result8.getCustomizationOptionName(activeCustomizationOption);
  }
  if (!disableSwitching) {
    disableSwitching = flag;
  }
  if (nitroLockedMessage == null) {
    const intl2 = tmp2(tmp3[13]).intl;
    nitroLockedMessage = intl2.string(require("module_3115")["8cGmXF"]);
  }
  items[1] = closure_7(tmp15, obj3);
  return closure_7(tmp12, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export const FinalizeTraitTabs = tmp7;
