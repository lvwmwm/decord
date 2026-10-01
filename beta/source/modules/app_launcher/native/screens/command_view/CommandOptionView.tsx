// Module ID: 11642
// Function ID: 11643
// Name: CommandOptionView
// Dependencies: [19, 17, 4825, 21, 1979, 4836, 576, 504, 4566, 11643, 11644, 4832, 11645, 1177, 9877, 2]
// Exports: default

// Module 11642 (CommandOptionView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Server from "Server" /* 1979 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import AssetRegistryDefault from "AssetRegistry" /* 9877 */;
import AppLauncherCommandOptionDefault from "AppLauncherCommandOption" /* 11645 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = [Server.ApplicationCommandOptionType.STRING, Server.ApplicationCommandOptionType.INTEGER, Server.ApplicationCommandOptionType.ATTACHMENT, Server.ApplicationCommandOptionType.BOOLEAN, Server.ApplicationCommandOptionType.MENTIONABLE, Server.ApplicationCommandOptionType.USER, Server.ApplicationCommandOptionType.ROLE, Server.ApplicationCommandOptionType.CHANNEL, Server.ApplicationCommandOptionType.NUMBER];
const set = new Set(items);
let obj = { optionDescription: { marginTop: 4 }, optionErrorContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 }, optionErrorIcon: obj2, labelText: { marginBottom: 8 } };
obj2 = { marginRight: 4, tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, alignItems: "center" };
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
  let tmp20;
  option = option.option;
  ({ editedOptions, onOptionViewLayout: importDefault, onPressOption: dependencyMap, onPressAttachmentOption: View, optionValidationResults, setFocusedOption: AccessibilityStore } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const obj = option(504);
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const ReduceMotion = option(4566).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const tmp2Result = option(11643);
  const optionEnteringAnimation = tmp2Result.useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  const EnteringAnimation = optionEnteringAnimation.EnteringAnimation;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (fn) => fn();
    }
    const FadeOut = tmp2(4566).FadeOut;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const FadeInUp = tmp2(4566).FadeInUp;
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
    const hasItem1 = items1.includes(option.type);
    const obj3 = { skipEntering: option.required || isPreSelectedOption, children: closure_5(AwaitAnimationContext, obj4) };
    const LayoutAnimationConfig = tmp2(4566).LayoutAnimationConfig;
    obj4 = { handleQueuedCallback: fn, children: closure_5(View, obj5) };
    AwaitAnimationContext = tmp2(11644).AwaitAnimationContext;
    obj5 = {
      collapsable: false,
      entering: EnteringAnimation,
      exiting: option(11643).ExitingAnimation,
      layout: option(11643).LayoutAnimation,
      onLayout(arg0) {
          importDefault(arg0, option);
        },
      children: closure_6(tmp20, obj6)
    };
    View = ReanimatedRexportDefault.View;
    let tmp17Result = hasItem1;
    obj6 = { collapsable: false, style, children: items2 };
    tmp20 = View;
    if (hasItem1) {
      const obj7 = { style: tmp.labelText, variant: "text-sm/semibold", color: "text-subtle", children: option.displayName };
      tmp17Result = tmp17(tmp2(4832).Text, obj7);
    }
    items2 = [tmp17Result, , , ];
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
    items2[2] = closure_5(option(4832).Text, obj9);
    if (hasItem) {
      const obj10 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer, children: items3 };
      const View2 = tmp18(4566).View;
      const obj11 = { style: tmp.optionErrorIcon, source: AssetRegistryDefault, size: option(1177).IconSizes.REFRESH_SMALL_16 };
      const Icon = tmp2(1177).Icon;
      items3 = [closure_5(Icon, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
      items3[1] = closure_5(option(4832).Text, obj12);
      hasItem = tmp19(View2, obj10);
    }
    items2[3] = hasItem;
    return closure_5(LayoutAnimationConfig, obj3);
  } else {
    return null;
  }
};
