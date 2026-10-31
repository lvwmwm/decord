// Module ID: 12352
// Function ID: 12353
// Name: CommandOptionView
// Dependencies: [19, 17, 5015, 21, 1992, 5014, 575, 504, 5095, 12353, 12354, 5624, 12355, 7086, 2]
// Exports: default

// Module 12352 (CommandOptionView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Server from "Server" /* 1992 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5095 */;
import AppLauncherCommandOptionDefault from "AppLauncherCommandOption" /* 12355 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default function CommandOptionView(option) {
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
  const ReduceMotion = option(5095).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const tmp2Result = option(12353);
  const optionEnteringAnimation = tmp2Result.useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  const EnteringAnimation = optionEnteringAnimation.EnteringAnimation;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (fn) => fn();
    }
    const FadeOut = tmp2(5095).FadeOut;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const FadeInUp = tmp2(5095).FadeInUp;
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
    const LayoutAnimationConfig = tmp2(5095).LayoutAnimationConfig;
    obj4 = { handleQueuedCallback: fn, children: closure_5(View, obj5) };
    AwaitAnimationContext = tmp2(12354).AwaitAnimationContext;
    obj5 = {
      collapsable: false,
      entering: EnteringAnimation,
      exiting: option(12353).ExitingAnimation,
      layout: option(12353).LayoutAnimation,
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
      hasItem1 = tmp18(tmp2(5624).Text, obj7);
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
    items2[2] = closure_5(option(5624).Text, obj9);
    if (hasItem) {
      const obj10 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer, children: items3 };
      const View2 = tmp19(5095).View;
      items3 = [closure_5(option(7086).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), ];
      const obj11 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
      items3[1] = closure_5(option(5624).Text, obj11);
      hasItem = tmp20(View2, obj10);
    }
    items2[3] = hasItem;
    return closure_5(LayoutAnimationConfig, obj3);
  } else {
    return null;
  }
};
