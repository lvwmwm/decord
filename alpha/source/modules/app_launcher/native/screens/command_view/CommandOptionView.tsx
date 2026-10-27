// Module ID: 12046
// Function ID: 12047
// Name: CommandOptionView
// Dependencies: [19, 17, 4973, 21, 1997, 4972, 587, 558, 576, 504, 5053, 12047, 5235, 12048, 7014, 12055, 2]

// Module 12046 (CommandOptionView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Server from "Server" /* 1997 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5053 */;
import AppLauncherCommandOptionDefault from "AppLauncherCommandOption" /* 12048 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = [Server.ApplicationCommandOptionType.STRING, Server.ApplicationCommandOptionType.INTEGER, Server.ApplicationCommandOptionType.ATTACHMENT, Server.ApplicationCommandOptionType.BOOLEAN, Server.ApplicationCommandOptionType.MENTIONABLE, Server.ApplicationCommandOptionType.USER, Server.ApplicationCommandOptionType.ROLE, Server.ApplicationCommandOptionType.CHANNEL, Server.ApplicationCommandOptionType.NUMBER];
const set = new Set(items);
let obj = { optionDescription: { marginTop: 4 }, optionErrorContainer: obj2, labelText: { marginBottom: 8 } };
obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4, marginTop: 4 };
let closure_8 = createStyles.createStyles(obj);
let items1 = [Server.ApplicationCommandOptionType.STRING, Server.ApplicationCommandOptionType.INTEGER, Server.ApplicationCommandOptionType.NUMBER];
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CommandOptionView(onPressAttachmentOption) {
  let EnteringAnimation;
  let autoFocusType;
  let channel;
  let command;
  let editedOptions;
  let items2;
  let onDismiss;
  let onEndEditing;
  let onOptionValueChange;
  let onOptionViewLayout;
  let onPressOption;
  let onStartEditing;
  let option;
  let optionValidationResults;
  let optionValues;
  let registerAnimationCompleteCallback;
  let setFocusedOption;
  let style;
  let tmp27;
  let tmp40;
  let tmp5;
  let tmp6;
  const obj = option(onPressOption[8]);
  const cResult = obj.c(72);
  ({ style, option } = onPressAttachmentOption);
  ({ autoFocusType, onDismiss, editedOptions, onOptionViewLayout } = onPressAttachmentOption);
  ({ onStartEditing, onEndEditing, onOptionValueChange, onPressOption } = onPressAttachmentOption);
  onPressAttachmentOption = onPressAttachmentOption.onPressAttachmentOption;
  ({ channel, optionValidationResults, setFocusedOption } = onPressAttachmentOption);
  ({ command, optionValues } = onPressAttachmentOption);
  const isPreSelectedOption = onPressAttachmentOption.isPreSelectedOption;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [setFocusedOption];
    const fn = function h() {
      return setFocusedOption.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = option(onPressOption[9]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const ReduceMotion = tmp(tmp2[10]).ReduceMotion;
  const tmp9 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const tmpResult2 = option(onPressOption[11]);
  const optionEnteringAnimation = tmpResult2.useOptionEnteringAnimation();
  ({ EnteringAnimation, registerAnimationCompleteCallback } = optionEnteringAnimation);
  if (set.has(option.type)) {
    let fn2;
    if (cResult[2] === registerAnimationCompleteCallback) {
      let tmp13;
      let tmp14;
      let tmp16;
      if (cResult[3] === (option.required || isPreSelectedOption)) {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp9) {
        const FadeOut = tmp(tmp2[10]).FadeOut;
        const reduceMotionResult = FadeOut.reduceMotion(tmp9);
        cResult[5] = tmp9;
        cResult[6] = reduceMotionResult;
        tmp14 = reduceMotionResult;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] !== tmp9) {
        const FadeInUp = tmp(tmp2[10]).FadeInUp;
        const obj2 = { transform: items1 };
        items1 = [{ translateY: -10 }];
        const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
        const reduceMotionResult1 = withInitialValuesResult.reduceMotion(tmp9);
        cResult[7] = tmp9;
        cResult[8] = reduceMotionResult1;
        tmp16 = reduceMotionResult1;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === editedOptions) {
        if (cResult[10] === option.name) {
          let tmp18;
          if (cResult[11] === optionValidationResults) {
            tmp18 = cResult[12];
          }
          if (cResult[13] === option.choices) {
            let tmp22;
            if (cResult[14] === option.type) {
              tmp22 = cResult[15];
            }
            if (cResult[16] === onOptionViewLayout) {
              let tmp25;
              if (cResult[17] === option) {
                tmp25 = cResult[18];
              }
              if (cResult[19] === option.displayName) {
                if (cResult[20] === tmp22) {
                  let tmp26;
                  if (cResult[21] === tmp4.labelText) {
                    tmp26 = cResult[22];
                  }
                  if (cResult[23] === option) {
                    let tmp29;
                    if (cResult[24] === setFocusedOption) {
                      tmp29 = cResult[25];
                    }
                    if (cResult[26] === onPressOption) {
                      let tmp30;
                      if (cResult[27] === option) {
                        tmp30 = cResult[28];
                      }
                      if (cResult[29] === onPressAttachmentOption) {
                        let tmp32;
                        if (cResult[30] === option) {
                          tmp32 = cResult[31];
                        }
                        if (cResult[32] === autoFocusType) {
                          if (cResult[33] === channel) {
                            if (cResult[34] === command) {
                              if (cResult[35] === onDismiss) {
                                if (cResult[36] === onEndEditing) {
                                  if (cResult[37] === onOptionValueChange) {
                                    if (cResult[38] === onStartEditing) {
                                      if (cResult[39] === option) {
                                        if (cResult[40] === optionValues) {
                                          if (cResult[41] === tmp18) {
                                            if (cResult[42] === tmp29) {
                                              if (cResult[43] === tmp30) {
                                                let tmp34;
                                                if (cResult[44] === tmp32) {
                                                  tmp34 = cResult[45];
                                                }
                                                if (cResult[46] === option.displayDescription) {
                                                  let tmp37;
                                                  if (cResult[47] === tmp4.optionDescription) {
                                                    tmp37 = cResult[48];
                                                  }
                                                  if (cResult[49] === tmp16) {
                                                    if (cResult[50] === tmp14) {
                                                      if (cResult[51] === option.name) {
                                                        if (cResult[52] === optionValidationResults) {
                                                          if (cResult[53] === tmp18) {
                                                            let tmp39;
                                                            if (cResult[54] === tmp4.optionErrorContainer) {
                                                              tmp39 = cResult[55];
                                                            }
                                                            if (cResult[56] === style) {
                                                              if (cResult[57] === tmp34) {
                                                                if (cResult[58] === tmp37) {
                                                                  if (cResult[59] === tmp39) {
                                                                    let tmp45;
                                                                    if (cResult[60] === tmp26) {
                                                                      tmp45 = cResult[61];
                                                                    }
                                                                    if (cResult[62] === EnteringAnimation) {
                                                                      if (cResult[63] === tmp45) {
                                                                        let tmp48;
                                                                        if (cResult[64] === tmp25) {
                                                                          tmp48 = cResult[65];
                                                                        }
                                                                        if (cResult[66] === tmp13) {
                                                                          let tmp51;
                                                                          if (cResult[67] === tmp48) {
                                                                            tmp51 = cResult[68];
                                                                          }
                                                                          if (cResult[69] === (option.required || isPreSelectedOption)) {
                                                                            let tmp53;
                                                                            if (cResult[70] === tmp51) {
                                                                              tmp53 = cResult[71];
                                                                            }
                                                                            return tmp53;
                                                                          }
                                                                          class Z {
                                                                            constructor() {
                                                                              return setFocusedOption(option);
                                                                            }
                                                                          }
                                                                          const obj3 = { skipEntering: option.required || isPreSelectedOption, children: tmp51 };
                                                                          const tmp54 = closure_5(option(onPressOption[10]).LayoutAnimationConfig, obj3);
                                                                          cResult[69] = option.required || isPreSelectedOption;
                                                                          cResult[70] = tmp51;
                                                                          cResult[71] = tmp54;
                                                                          tmp53 = tmp54;
                                                                        }
                                                                        class Z {
                                                                          constructor() {
                                                                            return setFocusedOption(option);
                                                                          }
                                                                        }
                                                                        const obj4 = { handleQueuedCallback: tmp13, children: tmp48 };
                                                                        const tmp52 = closure_5(option(onPressOption[15]).AwaitAnimationContext, obj4);
                                                                        cResult[66] = tmp13;
                                                                        cResult[67] = tmp48;
                                                                        cResult[68] = tmp52;
                                                                        tmp51 = tmp52;
                                                                      }
                                                                    }
                                                                    class Z {
                                                                      constructor() {
                                                                        return setFocusedOption(option);
                                                                      }
                                                                    }
                                                                    const obj5 = { collapsable: false, entering: EnteringAnimation, exiting: option(onPressOption[11]).ExitingAnimation, layout: option(onPressOption[11]).LayoutAnimation, onLayout: tmp25, children: tmp45 };
                                                                    const View2 = onOptionViewLayout(tmp2[10]).View;
                                                                    const tmp50 = closure_5(View2, obj5);
                                                                    cResult[62] = EnteringAnimation;
                                                                    cResult[63] = tmp45;
                                                                    cResult[64] = tmp25;
                                                                    cResult[65] = tmp50;
                                                                    tmp48 = tmp50;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            class Z {
                                                              constructor() {
                                                                return setFocusedOption(option);
                                                              }
                                                            }
                                                            const obj6 = { collapsable: false, style, children: items2 };
                                                            items2 = [tmp26, tmp34, tmp37, tmp39];
                                                            const tmp47 = closure_6(onPressAttachmentOption, obj6);
                                                            cResult[56] = style;
                                                            cResult[57] = tmp34;
                                                            cResult[58] = tmp37;
                                                            cResult[59] = tmp39;
                                                            cResult[60] = tmp26;
                                                            cResult[61] = tmp47;
                                                            tmp45 = tmp47;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  class Z {
                                                    constructor() {
                                                      return setFocusedOption(option);
                                                    }
                                                  }
                                                  if (tmp40) {
                                                    class Z {
                                                      constructor() {
                                                        return setFocusedOption(option);
                                                      }
                                                    }
                                                    tmp43[1] = tmp16;
                                                    tmp43[2] = tmp14;
                                                    tmp43[3] = tmp4.optionErrorContainer;
                                                    View = onOptionViewLayout(tmp2[10]).View;
                                                    const items3 = [closure_5(tmp(onPressOption[14]).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), ];
                                                    const obj7 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
                                                    items3[1] = closure_5(option(onPressOption[12]).Text, obj7);
                                                    tmp43[4] = items3;
                                                    tmp40 = closure_6(View, tmp43);
                                                  }
                                                  cResult[49] = tmp16;
                                                  cResult[50] = tmp14;
                                                  cResult[51] = option.name;
                                                  cResult[52] = optionValidationResults;
                                                  cResult[53] = tmp18;
                                                  cResult[54] = tmp4.optionErrorContainer;
                                                  cResult[55] = tmp40;
                                                  tmp39 = tmp40;
                                                }
                                                class Z {
                                                  constructor() {
                                                    return setFocusedOption(option);
                                                  }
                                                }
                                                const obj8 = { style: tmp4.optionDescription, variant: "text-xs/medium", color: "text-muted", children: option.displayDescription };
                                                const tmp38 = closure_5(option(onPressOption[12]).Text, obj8);
                                                cResult[46] = option.displayDescription;
                                                cResult[47] = tmp4.optionDescription;
                                                cResult[48] = tmp38;
                                                tmp37 = tmp38;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        class Z {
                          constructor() {
                            return setFocusedOption(option);
                          }
                        }
                        const obj9 = { option, onStartEditing, onEndEditing, onDismiss, onOptionValueChange, onFocus: tmp29, onPress: tmp30, onPressAttachmentOption: tmp32, channel, autoFocusType, command, optionValues, hasError: tmp18 };
                        const tmp36 = closure_5(onOptionViewLayout(onPressOption[13]), obj9);
                        cResult[32] = autoFocusType;
                        cResult[33] = channel;
                        cResult[34] = command;
                        cResult[35] = onDismiss;
                        cResult[36] = onEndEditing;
                        cResult[37] = onOptionValueChange;
                        cResult[38] = onStartEditing;
                        cResult[39] = option;
                        cResult[40] = optionValues;
                        cResult[41] = tmp18;
                        cResult[42] = tmp29;
                        cResult[43] = tmp30;
                        cResult[44] = tmp32;
                        cResult[45] = tmp36;
                        tmp34 = tmp36;
                      }
                      class Z {
                        constructor() {
                          return setFocusedOption(option);
                        }
                      }
                      cResult[29] = onPressAttachmentOption;
                      cResult[30] = option;
                      cResult[31] = tmp33;
                      tmp32 = tmp33;
                    }
                    class Z {
                      constructor() {
                        return setFocusedOption(option);
                      }
                    }
                    cResult[26] = onPressOption;
                    cResult[27] = option;
                    cResult[28] = tmp31;
                    tmp30 = tmp31;
                  }
                  class Z {
                    constructor() {
                      return setFocusedOption(option);
                    }
                  }
                  cResult[23] = option;
                  cResult[24] = setFocusedOption;
                  cResult[25] = Z;
                  tmp29 = Z;
                }
              }
              class K {
                constructor(arg0) {
                  onOptionViewLayout(arg0, option);
                }
              }
              if (tmp27) {
                const obj10 = { style: null, variant: "text-sm/semibold", color: "text-subtle", children: option.displayName };
                class Z {
                  constructor() {
                    return setFocusedOption(option);
                  }
                }
                tmp27 = closure_5(option(onPressOption[12]).Text, obj10);
              }
              cResult[19] = option.displayName;
              cResult[20] = tmp22;
              cResult[21] = tmp4.labelText;
              cResult[22] = tmp27;
              tmp26 = tmp27;
            }
            class K {
              constructor(arg0) {
                onOptionViewLayout(arg0, option);
              }
            }
            cResult[16] = onOptionViewLayout;
            cResult[17] = option;
            cResult[18] = K;
            tmp25 = K;
          }
          const hasItem = items1.includes(option.type) && null == option.choices;
          cResult[13] = option.choices;
          cResult[14] = option.type;
          cResult[15] = hasItem;
          tmp22 = hasItem;
        }
      }
      let hasItem1 = editedOptions.has(option.name);
      if (hasItem1) {
        let error;
        class Z {
          constructor() {
            return setFocusedOption(option);
          }
        }
        if (optionValidationResults[option.name] != null) {
          error = tmp20.error;
        }
        hasItem1 = null != error;
      }
      cResult[9] = editedOptions;
      cResult[10] = option.name;
      cResult[11] = optionValidationResults;
      cResult[12] = hasItem1;
      tmp18 = hasItem1;
    }
    if (option.required || isPreSelectedOption) {
      fn2 = (fn) => fn();
    }
    cResult[2] = registerAnimationCompleteCallback;
    cResult[3] = option.required || isPreSelectedOption;
    cResult[4] = fn2;
    tmp13 = fn2;
  } else {
    return null;
  }
}) : (function CommandOptionView(option) {
  let AwaitAnimationContext;
  let autoFocusType;
  let channel;
  let command;
  let editedOptions;
  let isPreSelectedOption;
  let items2;
  let items3;
  let obj4;
  let obj5;
  let obj6;
  let onDismiss;
  let onEndEditing;
  let onOptionValueChange;
  let onStartEditing;
  let optionValidationResults;
  let optionValues;
  let style;
  let tmp21;
  option = option.option;
  ({ editedOptions, onOptionViewLayout: importDefault, onPressOption: dependencyMap, onPressAttachmentOption: View, optionValidationResults, setFocusedOption: AccessibilityStore } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const obj = option(504);
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const ReduceMotion = option(5053).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const tmp2Result = option(12047);
  const optionEnteringAnimation = tmp2Result.useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  const EnteringAnimation = optionEnteringAnimation.EnteringAnimation;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (fn) => fn();
    }
    const FadeOut = tmp2(5053).FadeOut;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const FadeInUp = tmp2(5053).FadeInUp;
    const obj2 = { transform: items1 };
    items1 = [{ translateY: -10 }];
    const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
    const reduceMotionResult1 = withInitialValuesResult.reduceMotion(tmp5);
    let hasItem = editedOptions.has(option.name);
    if (hasItem) {
      let error;
      if (optionValidationResults[option.name] != null) {
        error = tmp12.error;
      }
      hasItem = null != error;
    }
    let hasItem1 = items1.includes(option.type) && null == option.choices;
    const obj3 = { skipEntering: option.required || isPreSelectedOption, children: closure_5(AwaitAnimationContext, obj4) };
    const LayoutAnimationConfig = tmp2(5053).LayoutAnimationConfig;
    obj4 = { handleQueuedCallback: fn, children: closure_5(View, obj5) };
    AwaitAnimationContext = tmp2(12055).AwaitAnimationContext;
    obj5 = {
      collapsable: false,
      entering: EnteringAnimation,
      exiting: option(12047).ExitingAnimation,
      layout: option(12047).LayoutAnimation,
      onLayout(arg0) {
          importDefault(arg0, option);
        },
      children: closure_6(tmp21, obj6)
    };
    View = ReanimatedRexportDefault.View;
    obj6 = { collapsable: false, style, children: items2 };
    tmp21 = View;
    if (hasItem1) {
      const obj7 = { style: tmp.labelText, variant: "text-sm/semibold", color: "text-subtle", children: option.displayName };
      hasItem1 = tmp18(tmp2(5235).Text, obj7);
    }
    items2 = [hasItem1, , , ];
    const obj8 = {
      option,
      onStartEditing,
      onEndEditing,
      onDismiss,
      onOptionValueChange,
      onFocus() {
          return AccessibilityStore(option);
        },
      onPress() {
          return dependencyMap(option);
        },
      onPressAttachmentOption() {
          return View(option);
        },
      channel,
      autoFocusType,
      command,
      optionValues,
      hasError: hasItem
    };
    items2[1] = closure_5(AppLauncherCommandOptionDefault, obj8);
    const obj9 = { style: tmp.optionDescription, variant: "text-xs/medium", color: "text-muted", children: option.displayDescription };
    items2[2] = closure_5(option(5235).Text, obj9);
    if (hasItem) {
      const obj10 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer, children: items3 };
      const View2 = tmp19(5053).View;
      items3 = [closure_5(option(7014).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), ];
      const obj11 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
      items3[1] = closure_5(option(5235).Text, obj11);
      hasItem = tmp20(View2, obj10);
    }
    items2[3] = hasItem;
    return closure_5(LayoutAnimationConfig, obj3);
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default tmp5;
