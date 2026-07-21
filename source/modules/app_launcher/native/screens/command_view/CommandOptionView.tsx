// Module ID: 11272
// Function ID: 87715
// Name: set
// Dependencies: []
// Exports: default

// Module 11272 (set)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const items = [arg1(dependencyMap[4]).ApplicationCommandOptionType.STRING, arg1(dependencyMap[4]).ApplicationCommandOptionType.INTEGER, arg1(dependencyMap[4]).ApplicationCommandOptionType.ATTACHMENT, arg1(dependencyMap[4]).ApplicationCommandOptionType.BOOLEAN, arg1(dependencyMap[4]).ApplicationCommandOptionType.MENTIONABLE, arg1(dependencyMap[4]).ApplicationCommandOptionType.USER, arg1(dependencyMap[4]).ApplicationCommandOptionType.ROLE, arg1(dependencyMap[4]).ApplicationCommandOptionType.CHANNEL, arg1(dependencyMap[4]).ApplicationCommandOptionType.NUMBER];
const set = new Set(items);
let obj = arg1(dependencyMap[5]);
obj = { optionDescription: { marginTop: 4 }, optionErrorContainer: { onTapButtonActionComponent: "safety_user_sentiment_notice_dismissed_at", onTapSelectActionComponent: "message", onTapWelcomeReply: null } };
obj = { <string:3225485828>: null, <string:1761608784>: 15.1, <string:3679956194>: null, tintColor: importDefault(dependencyMap[6]).colors.ICON_FEEDBACK_CRITICAL };
obj.optionErrorIcon = obj;
obj.labelText = { marginBottom: 8 };
let closure_8 = obj.createStyles(obj);
const items1 = [arg1(dependencyMap[4]).ApplicationCommandOptionType.STRING, arg1(dependencyMap[4]).ApplicationCommandOptionType.INTEGER, arg1(dependencyMap[4]).ApplicationCommandOptionType.NUMBER];
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default function CommandOptionView(option) {
  let autoFocusType;
  let channel;
  let command;
  let editedOptions;
  let isPreSelectedOption;
  let onDismiss;
  let onEndEditing;
  let onOptionValueChange;
  let onStartEditing;
  let optionValidationResults;
  let optionValues;
  let style;
  option = option.option;
  const arg1 = option;
  ({ editedOptions, onOptionViewLayout: closure_1, onPressOption: closure_2, onPressAttachmentOption: closure_3, optionValidationResults, setFocusedOption: closure_4 } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => lib.useReducedMotion);
  const ReduceMotion = arg1(dependencyMap[8]).ReduceMotion;
  const tmp3 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  let obj1 = arg1(dependencyMap[9]);
  const optionEnteringAnimation = obj1.useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (arg0) => arg0();
    }
    const FadeOut = arg1(dependencyMap[8]).FadeOut;
    const FadeInUp = arg1(dependencyMap[8]).FadeInUp;
    obj = {};
    obj = { translateY: -10 };
    const items1 = [obj];
    obj.transform = items1;
    const reduceMotionResult = FadeOut.reduceMotion(tmp3);
    const withInitialValuesResult = FadeInUp.withInitialValues(obj);
    let hasItem = editedOptions.has(option.name);
    if (hasItem) {
      let error;
      if (null != optionValidationResults[option.name]) {
        error = tmp12.error;
      }
      hasItem = null != error;
    }
    const hasItem1 = items1.includes(option.type);
    obj1 = { skipEntering: option.required || isPreSelectedOption };
    const obj2 = { handleQueuedCallback: fn };
    const obj3 = {
      collapsable: false,
      entering: optionEnteringAnimation.EnteringAnimation,
      exiting: arg1(dependencyMap[9]).ExitingAnimation,
      layout: arg1(dependencyMap[9]).LayoutAnimation,
      onLayout(arg0) {
          callback(arg0, option);
        }
    };
    const obj4 = { collapsable: false, style };
    let tmp23 = hasItem1;
    if (hasItem1) {
      const obj5 = { style: tmp.labelText, children: option.displayName };
      tmp23 = callback(arg1(dependencyMap[11]).Text, obj5);
    }
    const items2 = [tmp23, , , ];
    const obj6 = {
      option,
      onStartEditing,
      onEndEditing,
      onDismiss,
      onOptionValueChange,
      onFocus() {
          return lib(option);
        },
      onPress() {
          return callback2(option);
        },
      onPressAttachmentOption() {
          return callback3(option);
        },
      channel,
      autoFocusType,
      command,
      optionValues,
      hasError: hasItem
    };
    items2[1] = callback(importDefault(dependencyMap[12]), obj6);
    const obj7 = { style: tmp.optionDescription, children: option.displayDescription };
    items2[2] = callback(arg1(dependencyMap[11]).Text, obj7);
    if (hasItem) {
      const obj8 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer };
      const obj9 = { style: tmp.optionErrorIcon, source: importDefault(dependencyMap[14]), size: arg1(dependencyMap[13]).IconSizes.REFRESH_SMALL_16 };
      const items3 = [callback(arg1(dependencyMap[13]).Icon, obj9), ];
      const obj10 = { children: optionValidationResults[option.name].error };
      items3[1] = callback(arg1(dependencyMap[11]).Text, obj10);
      obj8.children = items3;
      hasItem = callback2(importDefault(dependencyMap[8]).View, obj8);
    }
    items2[3] = hasItem;
    obj4.children = items2;
    obj3.children = callback2(View, obj4);
    obj2.children = callback(importDefault(dependencyMap[8]).View, obj3);
    obj1.children = callback(arg1(dependencyMap[10]).AwaitAnimationContext, obj2);
    return callback(arg1(dependencyMap[8]).LayoutAnimationConfig, obj1);
  } else {
    return null;
  }
};
