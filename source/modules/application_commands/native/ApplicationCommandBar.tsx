// Module ID: 11475
// Function ID: 89269
// Name: ApplicationCommandOptionItem
// Dependencies: [57, 31, 27, 1917, 33, 4130, 689, 4973, 4660, 1212, 1273, 566, 11366, 5085, 4126, 7636, 8328, 11476, 2]
// Exports: default

// Module 11475 (ApplicationCommandOptionItem)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function ApplicationCommandOptionItem(arg0) {
  let option;
  let optionState;
  ({ option, optionState } = arg0);
  let obj = Object.create(null);
  obj.option = 0;
  obj.optionState = 0;
  const merged = Object.assign(arg0, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  let isActive;
  if (null != optionState) {
    isActive = optionState.isActive;
  }
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { optionName: option.displayName };
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.evoEHc, obj);
  obj.accessibilityRole = "button";
  obj.disabled = null != isActive && isActive;
  const items = [tmp3.applicationCommandOption, , ];
  let activeCommandOption = tmp5;
  if (null != isActive && isActive) {
    activeCommandOption = tmp3.activeCommandOption;
  }
  items[1] = activeCommandOption;
  let completeCommandOption = !tmp5;
  if (completeCommandOption) {
    let success;
    if (null != optionState) {
      if (null != optionState.lastValidationResult) {
        success = lastValidationResult.success;
      }
    }
    completeCommandOption = success;
  }
  if (completeCommandOption) {
    completeCommandOption = tmp3.completeCommandOption;
  }
  items[2] = completeCommandOption;
  obj.style = items;
  const merged1 = Object.assign(merged);
  const obj1 = {};
  const items1 = [tmp3.applicationCommandOptionText, , , ];
  let activeCommandOptionText = tmp5;
  if (null != isActive && isActive) {
    activeCommandOptionText = tmp3.activeCommandOptionText;
  }
  items1[1] = activeCommandOptionText;
  let completeCommandOptionText = !tmp5;
  if (completeCommandOptionText) {
    let success1;
    if (null != optionState) {
      if (null != optionState.lastValidationResult) {
        success1 = lastValidationResult2.success;
      }
    }
    completeCommandOptionText = success1;
  }
  if (completeCommandOptionText) {
    completeCommandOptionText = tmp3.completeCommandOptionText;
  }
  items1[2] = completeCommandOptionText;
  let errorCommandOptionText = !tmp5;
  if (errorCommandOptionText) {
    let success2;
    if (null != optionState) {
      if (null != optionState.lastValidationResult) {
        success2 = lastValidationResult3.success;
      }
    }
    errorCommandOptionText = false === success2;
  }
  if (errorCommandOptionText) {
    errorCommandOptionText = tmp3.errorCommandOptionText;
  }
  items1[3] = errorCommandOptionText;
  obj1.style = items1;
  obj1.numberOfLines = 1;
  obj1.children = option.displayName;
  obj["children"] = closure_8(require(1273) /* Button */.LegacyText, obj1);
  return closure_8(require(4660) /* PressableBase */.PressableOpacity, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "column", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
_createForOfIteratorHelperLoose.applicationCommandBar = _createForOfIteratorHelperLoose;
let obj1 = { width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, marginRight: 16 };
_createForOfIteratorHelperLoose.applicationIcon = obj1;
_createForOfIteratorHelperLoose.applicationTopWrapperScrollView = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8 };
_createForOfIteratorHelperLoose.applicationName = { textAlignVertical: "center", marginRight: 12 };
let obj2 = { width: get_ActivityIndicator.StyleSheet.hairlineWidth, marginVertical: 8, marginHorizontal: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, height: "100%" };
_createForOfIteratorHelperLoose.applicationOptionalOptionsDivider = obj2;
_createForOfIteratorHelperLoose.applicationOptionalOptionsDividerWithNoRequired = { marginLeft: 4 };
_createForOfIteratorHelperLoose.applicationOptionalOptionsIndicator = { marginHorizontal: 4, paddingVertical: 8 };
_createForOfIteratorHelperLoose.applicationDescriptionContainer = { flexShrink: 1 };
_createForOfIteratorHelperLoose.applicationDescriptionDivider = { marginLeft: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COMMAND_BAR_DIVIDER };
let obj4 = { marginHorizontal: 4, padding: 8, fontSize: 12, alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("result").DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
_createForOfIteratorHelperLoose.applicationCommandOption = obj4;
let obj3 = { marginLeft: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COMMAND_BAR_DIVIDER };
_createForOfIteratorHelperLoose.applicationCommandOptionText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
let obj5 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.activeCommandOption = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.activeCommandOptionText = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.completeCommandOptionText = { opacity: 0.5 };
let obj7 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.errorCommandOptionText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.optionDescriptionContainer = { overflow: "hidden", paddingHorizontal: 16, paddingVertical: 8, flexDirection: "row" };
const obj8 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.descriptionEllipsis = { marginLeft: 10, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
const obj9 = { marginLeft: 10, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
_createForOfIteratorHelperLoose.descriptionEllipsisDots = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const obj10 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.completeCommandOption = { backgroundColor: require("result").DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
function ApplicationCommandOptionDescription(option) {
  let c6;
  let tmp8;
  option = option.option;
  const optionState = option.optionState;
  let first;
  let first1;
  let closure_5;
  c6 = undefined;
  function onDescriptionLayout(nativeEvent) {
    const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
    let tmp2 = undefined === first;
    if (!tmp2) {
      tmp2 = truncResult > first1;
    }
    if (tmp2) {
      callback2(truncResult);
    }
    _undefined(truncResult);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = importDefault(first[16])(option);
  importDefault = tmp2;
  const tmp3 = callback(first1.useState(undefined), 2);
  first = tmp3[0];
  callback = tmp3[1];
  const tmp5 = callback(first1.useState(0), 2);
  first1 = tmp5[0];
  closure_5 = tmp5[1];
  [tmp8, c6] = callback(first1.useState(0), 2);
  const tmp9 = importDefault(first[16])(first1);
  let _isNativeReflectConstruct = tmp9;
  const items = [tmp2, option, first1, tmp9];
  const effect = first1.useEffect(() => {
    if (closure_1 !== option) {
      callback2(0);
      _undefined(0);
      callback(undefined);
    } else {
      let tmp2 = first1 > 0;
      if (tmp2) {
        tmp2 = 0 === _isNativeReflectConstruct;
      }
      if (tmp2) {
        callback(1);
      }
    }
  }, items);
  const items1 = [first];
  let tmp12 = 1 === first;
  callback = first1.useCallback(() => {
    _slicedToArray(1);
  }, items1);
  if (tmp12) {
    tmp12 = tmp8 === first1;
  }
  let str = "button";
  if (tmp12) {
    str = "text";
  }
  let obj = { accessibilityRole: str, disabled: tmp12, onPress: callback };
  obj = { style: tmp.optionDescriptionContainer };
  obj = { style: tmp.applicationDescriptionContainer };
  let error;
  if (null != optionState) {
    if (null != optionState.lastValidationResult) {
      error = lastValidationResult.error;
    }
  }
  if (null != error) {
    const obj1 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "text-feedback-critical", children: optionState.lastValidationResult.error };
    let tmp18Result = callback2(option(first[14]).Text, obj1);
  } else {
    const obj2 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null != option ? option.displayDescription : option.command.displayDescription };
    tmp18Result = callback2(option(first[14]).Text, obj2);
    const tmp18 = callback2;
  }
  obj.children = tmp18Result;
  const items2 = [callback2(closure_5, obj), ];
  let tmp25 = null;
  if (tmp8 !== first1) {
    ({ descriptionEllipsis: obj6.style, descriptionEllipsisDots: obj6.dotStyle } = tmp);
    tmp25 = callback2(importDefault(first[17]), {});
    const obj3 = {};
  }
  items2[1] = tmp25;
  obj.children = items2;
  obj.children = closure_10(closure_5, obj);
  return callback2(option(first[8]).PressableOpacity, obj);
}
const obj11 = { backgroundColor: require("result").DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/application_commands/native/ApplicationCommandBar.tsx");

export default function _default(command) {
  let closure_10;
  let closure_9;
  let currentOption;
  let dependencyMap;
  let tmp4;
  let tmp6;
  command = command.command;
  const section = command.section;
  ({ guildId: dependencyMap, currentOption } = command);
  const optionStates = command.optionStates;
  const onPressOption = command.onPressOption;
  let tmp = first();
  let closure_6 = tmp;
  const ref = optionStates.useRef(null);
  const callback2 = optionStates.useRef({});
  [tmp4, closure_9] = currentOption(optionStates.useState(false), 2);
  const tmp3 = currentOption(optionStates.useState(false), 2);
  [tmp6, closure_10] = currentOption(optionStates.useState(false), 2);
  const tmp7 = currentOption(optionStates.useState(), 2);
  first = tmp7[0];
  let closure_12 = tmp7[1];
  const items = [command];
  const effect = optionStates.useEffect(() => {
    let options = false;
    let c1 = false;
    options = options.options;
    if (null != options) {
      const item = options.forEach((required) => {
        if (true !== required.required) {
          let c0 = true;
        } else {
          let c1 = true;
        }
      });
    }
    callback(options);
    callback2(c1);
  }, items);
  const items1 = [currentOption];
  const effect1 = optionStates.useEffect(() => {
    let name;
    if (null != currentOption) {
      name = currentOption.name;
    }
    closure_12(name);
  }, items1);
  const items2 = [first, tmp];
  const effect2 = optionStates.useEffect(() => {
    let tmp = null;
    if (null != first) {
      tmp = ref.current[first];
    }
    if (null != tmp) {
      const current = ref.current;
      if (null != current) {
        const obj = { x: tmp.x - tmp.applicationTopWrapperScrollView.paddingHorizontal, animated: true };
        current.scrollTo(obj);
      }
    }
  }, items2);
  let obj = command(566);
  const items3 = [ref];
  const stateFromStores = obj.useStateFromStores(items3, () => {
    if (null != closure_2) {
      let botId;
      if (null != section) {
        botId = section.botId;
      }
      if (null != botId) {
        return ref.getMember(closure_2, section.botId);
      }
    }
  });
  const items4 = [section, stateFromStores];
  const memo = optionStates.useMemo(() => command(outer1_2[12]).getApplicationCommandsIconSource(section, stateFromStores), items4);
  let closure_14 = optionStates.useCallback((nativeEvent, name) => {
    nativeEvent = nativeEvent.nativeEvent;
    const current = ref.current;
    current[name.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
    ref.current = current;
  }, []);
  let name;
  if (null != currentOption) {
    name = currentOption.name;
  }
  let tmp15;
  if (null != name) {
    let name1;
    if (null != currentOption) {
      name1 = currentOption.name;
    }
    tmp15 = optionStates[name1];
  }
  obj = { style: tmp.applicationCommandBar };
  obj = { ref, contentContainerStyle: tmp.applicationTopWrapperScrollView, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, horizontal: true };
  let tmp20 = null != memo;
  if (tmp20) {
    const obj1 = { style: tmp.applicationIcon, source: memo };
    tmp20 = callback2(section(5085), obj1);
  }
  const items5 = [tmp20, , , ];
  const obj2 = { style: tmp.applicationName, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` };
  items5[1] = callback2(command(4126).Text, obj2);
  let options = command.options;
  let mapped;
  if (null != options) {
    mapped = options.map((required) => {
      let closure_0 = required;
      let tmp = null;
      if (required.required) {
        const obj = {
          option: required,
          onPress() {
              let tmp;
              if (null != outer1_5) {
                tmp = outer1_5(closure_0);
              }
              return tmp;
            },
          optionState: optionStates[required.name],
          onLayout(arg0) {
              return outer1_14(arg0, closure_0);
            }
        };
        tmp = ref(stateFromStores, obj, required.name);
      }
      return tmp;
    });
  }
  items5[2] = mapped;
  let tmp26Result = null;
  if (tmp4) {
    const obj3 = {};
    const obj4 = {};
    const items6 = [tmp.applicationOptionalOptionsDivider, ];
    let applicationOptionalOptionsDividerWithNoRequired = !tmp6;
    if (applicationOptionalOptionsDividerWithNoRequired) {
      applicationOptionalOptionsDividerWithNoRequired = tmp.applicationOptionalOptionsDividerWithNoRequired;
    }
    items6[1] = applicationOptionalOptionsDividerWithNoRequired;
    obj4.style = items6;
    const items7 = [callback2(onPressOption, obj4), , ];
    const obj5 = { style: tmp.applicationOptionalOptionsIndicator, lineClamp: 1, variant: "eyebrow", color: "text-muted" };
    const intl = command(1212).intl;
    obj5.children = intl.string(command(1212).t.U19GM3);
    items7[1] = callback2(command(4126).Text, obj5);
    const options1 = command.options;
    let mapped1;
    if (null != options1) {
      mapped1 = options1.map((required) => {
        let closure_0 = required;
        let tmp = null;
        if (!required.required) {
          const obj = {
            option: required,
            onPress() {
                return outer1_5(closure_0);
              },
            optionState: optionStates[required.name],
            onLayout(arg0) {
                return outer1_14(arg0, closure_0);
              }
          };
          tmp = ref(stateFromStores, obj, required.name);
        }
        return tmp;
      });
    }
    items7[2] = mapped1;
    obj3.children = items7;
    tmp26Result = closure_10(closure_9, obj3);
    const tmp26 = closure_10;
    const tmp27 = closure_9;
    const tmp28 = callback2;
    const tmp29 = onPressOption;
  }
  items5[3] = tmp26Result;
  obj.children = items5;
  const items8 = [closure_10(closure_6, obj), callback2(command(7636).FormDivider, { style: tmp.applicationDescriptionDivider }), , ];
  const obj7 = { command, option: currentOption, optionState: tmp15 };
  items8[2] = callback2(closure_12, obj7);
  items8[3] = callback2(command(7636).FormDivider, { style: tmp.applicationDescriptionDivider });
  obj.children = items8;
  return closure_10(onPressOption, obj);
};
