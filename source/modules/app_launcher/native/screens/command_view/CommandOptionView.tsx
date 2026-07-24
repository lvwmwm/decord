// Module ID: 11312
// Function ID: 88030
// Name: set
// Dependencies: [31, 27, 4122, 33, 1881, 4130, 689, 566, 3991, 11313, 11314, 4126, 11315, 1273, 9667, 2]
// Exports: default

// Module 11312 (set)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let items = [require("PermissionOverwriteType").ApplicationCommandOptionType.STRING, require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER, require("PermissionOverwriteType").ApplicationCommandOptionType.ATTACHMENT, require("PermissionOverwriteType").ApplicationCommandOptionType.BOOLEAN, require("PermissionOverwriteType").ApplicationCommandOptionType.MENTIONABLE, require("PermissionOverwriteType").ApplicationCommandOptionType.USER, require("PermissionOverwriteType").ApplicationCommandOptionType.ROLE, require("PermissionOverwriteType").ApplicationCommandOptionType.CHANNEL, require("PermissionOverwriteType").ApplicationCommandOptionType.NUMBER];
let set = new Set(items);
_createForOfIteratorHelperLoose = { optionDescription: { marginTop: 4 }, optionErrorContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 } };
_createForOfIteratorHelperLoose = { marginRight: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL, alignItems: "center" };
_createForOfIteratorHelperLoose.optionErrorIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.labelText = { marginBottom: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let items1 = [require("PermissionOverwriteType").ApplicationCommandOptionType.STRING, require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER, require("PermissionOverwriteType").ApplicationCommandOptionType.NUMBER];
const result = set.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default function CommandOptionView(option) {
  let View;
  let autoFocusType;
  let channel;
  let _isNativeReflectConstruct;
  let command;
  let dependencyMap;
  let editedOptions;
  let importDefault;
  let isPreSelectedOption;
  let onDismiss;
  let onEndEditing;
  let onOptionValueChange;
  let onStartEditing;
  let optionValidationResults;
  let optionValues;
  let style;
  option = option.option;
  ({ editedOptions, onOptionViewLayout: importDefault, onPressOption: dependencyMap, onPressAttachmentOption: View, optionValidationResults, setFocusedOption: _isNativeReflectConstruct } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = option(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
  const ReduceMotion = option(3991).ReduceMotion;
  const tmp3 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  let obj1 = option(11313);
  const optionEnteringAnimation = obj1.useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (arg0) => arg0();
    }
    const FadeOut = option(3991).FadeOut;
    const FadeInUp = option(3991).FadeInUp;
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
      exiting: option(11313).ExitingAnimation,
      layout: option(11313).LayoutAnimation,
      onLayout(arg0) {
          callback(arg0, option);
        }
    };
    const obj4 = { collapsable: false, style };
    let tmp23 = hasItem1;
    if (hasItem1) {
      const obj5 = { style: tmp.labelText, variant: "text-sm/semibold", color: "text-subtle", children: option.displayName };
      tmp23 = callback(option(4126).Text, obj5);
    }
    const items2 = [tmp23, , , ];
    const obj6 = {
      option,
      onStartEditing,
      onEndEditing,
      onDismiss,
      onOptionValueChange,
      onFocus() {
          return callback4(option);
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
    items2[1] = callback(importDefault(11315), obj6);
    const obj7 = { style: tmp.optionDescription, variant: "text-xs/medium", color: "text-muted", children: option.displayDescription };
    items2[2] = callback(option(4126).Text, obj7);
    if (hasItem) {
      const obj8 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer };
      const obj9 = { style: tmp.optionErrorIcon, source: importDefault(9667), size: option(1273).IconSizes.REFRESH_SMALL_16 };
      const items3 = [callback(option(1273).Icon, obj9), ];
      const obj10 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
      items3[1] = callback(option(4126).Text, obj10);
      obj8.children = items3;
      hasItem = callback2(importDefault(3991).View, obj8);
    }
    items2[3] = hasItem;
    obj4.children = items2;
    obj3.children = callback2(View, obj4);
    obj2.children = callback(importDefault(3991).View, obj3);
    obj1.children = callback(option(11314).AwaitAnimationContext, obj2);
    return callback(option(3991).LayoutAnimationConfig, obj1);
  } else {
    return null;
  }
};
