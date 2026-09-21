// Module ID: 12300
// Function ID: 12301
// Name: CommandOptionView
// Dependencies: [19, 17, 4750, 21, 1982, 4758, 580, 558, 568, 504, 4497, 12301, 4754, 12302, 1181, 10710, 12309, 2]

// Module 12300 (CommandOptionView)
import nativeDefault from "native" /* 580 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4497 */;
import AppLauncherCommandOptionDefault from "AppLauncherCommandOption" /* 12302 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = [fn(1982).ApplicationCommandOptionType.STRING, fn(1982).ApplicationCommandOptionType.INTEGER, fn(1982).ApplicationCommandOptionType.ATTACHMENT, fn(1982).ApplicationCommandOptionType.BOOLEAN, fn(1982).ApplicationCommandOptionType.MENTIONABLE, fn(1982).ApplicationCommandOptionType.USER, fn(1982).ApplicationCommandOptionType.ROLE, fn(1982).ApplicationCommandOptionType.CHANNEL, fn(1982).ApplicationCommandOptionType.NUMBER];
const set = new Set(items);
const createStyles = fn(4758);
let obj2 = { optionDescription: { marginTop: 4 }, optionErrorContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 }, optionErrorIcon: { marginRight: 4, tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, alignItems: "center" }, labelText: { marginBottom: 8 } };
let closure_8 = createStyles.createStyles(obj2);
let items1 = [fn(1982).ApplicationCommandOptionType.STRING, fn(1982).ApplicationCommandOptionType.INTEGER, fn(1982).ApplicationCommandOptionType.NUMBER];
const ReactCompilerGating = fn(558);
let obj3 = { marginRight: 4, tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onPressAttachmentOption) => {
  const cResult = option(onPressOption[8]).c(72);
  ({ style, option } = onPressAttachmentOption);
  ({ autoFocusType, onDismiss, editedOptions, onOptionViewLayout } = onPressAttachmentOption);
  ({ onStartEditing, onEndEditing, onOptionValueChange, onPressOption } = onPressAttachmentOption);
  onPressAttachmentOption = onPressAttachmentOption.onPressAttachmentOption;
  ({ channel, optionValidationResults, setFocusedOption } = onPressAttachmentOption);
  ({ command, optionValues } = onPressAttachmentOption);
  closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [setFocusedOption];
    class E {
      constructor() {
        return setFocusedOption.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp5 = items;
    tmp6 = E;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = option(onPressOption[8]);
  const stateFromStores = option(onPressOption[9]).useStateFromStores(tmp5, tmp6);
  const ReduceMotion = tmp(tmp2[10]).ReduceMotion;
  const tmp9 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const tmpResult = option(onPressOption[9]);
  const optionEnteringAnimation = option(onPressOption[11]).useOptionEnteringAnimation();
  ({ EnteringAnimation, registerAnimationCompleteCallback } = optionEnteringAnimation);
  if (set.has(option.type)) {
    if (cResult[2] === registerAnimationCompleteCallback) {
      if (cResult[5] !== tmp9) {
        const FadeOut = tmp(tmp2[10]).FadeOut;
        const reduceMotionResult = FadeOut.reduceMotion(tmp9);
        class E {
          constructor() {
            return setFocusedOption.useReducedMotion;
          }
        }
        cResult[6] = reduceMotionResult;
      }
      if (cResult[7] !== tmp9) {
        const FadeInUp = tmp(tmp2[10]).FadeInUp;
        const obj2 = { transform: null };
        items1 = [];
        class E {
          constructor() {
            return setFocusedOption.useReducedMotion;
          }
        }
        obj2.transform = items1;
        const reduceMotionResult1 = FadeInUp.withInitialValues(obj2).reduceMotion(tmp9);
        cResult[7] = tmp9;
        cResult[8] = reduceMotionResult1;
        const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
      }
      class E {
        constructor() {
          return setFocusedOption.useReducedMotion;
        }
      }
      let hasItem = editedOptions.has(option.name);
      if (hasItem) {
        class E {
          constructor() {
            return setFocusedOption.useReducedMotion;
          }
        }
        hasItem = null != tmp23;
      }
      cResult[9] = editedOptions;
      cResult[10] = option.name;
      cResult[11] = optionValidationResults;
      cResult[12] = hasItem;
    }
    class E {
      constructor() {
        return setFocusedOption.useReducedMotion;
      }
    }
    cResult[2] = registerAnimationCompleteCallback;
    cResult[3] = option.required || onPressAttachmentOption.isPreSelectedOption;
    cResult[4] = registerAnimationCompleteCallback;
  } else {
    return null;
  }
}) : ((option) => {
  option = option.option;
  ({ editedOptions, onOptionViewLayout: importDefault, onPressOption: dependencyMap, onPressAttachmentOption: View, optionValidationResults, setFocusedOption: AccessibilityStore } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const stateFromStores = option(504).useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const ReduceMotion = option(4497).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const obj = option(504);
  const optionEnteringAnimation = option(12301).useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (fn) => fn();
    }
    const FadeOut = tmp2(4497).FadeOut;
    const FadeInUp = tmp2(4497).FadeInUp;
    const obj2 = { transform: null };
    items1 = [{ translateY: -10 }];
    obj2.transform = items1;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
    let hasItem = editedOptions.has(option.name);
    if (hasItem) {
      let error;
      if (optionValidationResults[option.name] != null) {
        error = tmp12.error;
      }
      hasItem = null != error;
    }
    const hasItem1 = items1.includes(option.type);
    const obj3 = { skipEntering: option.required || isPreSelectedOption, children: null };
    const obj4 = { handleQueuedCallback: fn, children: null };
    const obj5 = {
      collapsable: false,
      entering: optionEnteringAnimation.EnteringAnimation,
      exiting: tmp2(12301).ExitingAnimation,
      layout: tmp2(12301).LayoutAnimation,
      onLayout(arg0) {
          importDefault(arg0, option);
        },
      children: null
    };
    const obj6 = { collapsable: false, style, children: null };
    let tmp17Result = hasItem1;
    if (hasItem1) {
      const obj7 = { style: tmp.labelText, variant: "text-sm/semibold", color: "text-subtle", children: option.displayName };
      tmp17Result = tmp17(tmp2(4754).Text, obj7);
    }
    const items2 = [tmp17Result, , , ];
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
    items2[2] = closure_5(tmp2(4754).Text, obj9);
    if (hasItem) {
      const obj10 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer, children: null };
      const obj11 = { style: tmp.optionErrorIcon, source: tmp18(10710), size: tmp2(1181).IconSizes.REFRESH_SMALL_16 };
      const items3 = [tmp17(tmp2(1181).Icon, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
      items3[1] = tmp17(tmp2(4754).Text, obj12);
      obj10.children = items3;
      hasItem = tmp19(tmp18(4497).View, obj10);
    }
    items2[3] = hasItem;
    obj6.children = items2;
    obj5.children = closure_6(View, obj6);
    obj4.children = closure_5(ReanimatedRexportDefault.View, obj5);
    obj3.children = closure_5(tmp2(12309).AwaitAnimationContext, obj4);
    return closure_5(tmp2(4497).LayoutAnimationConfig, obj3);
  } else {
    return null;
  }
  const tmp2Result = option(12301);
});
