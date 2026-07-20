// Module ID: 11427
// Function ID: 88949
// Name: ApplicationCommandOptionItem
// Dependencies: []
// Exports: default

// Module 11427 (ApplicationCommandOptionItem)
function ApplicationCommandOptionItem(arg0) {
  let option;
  let optionState;
  ({ option, optionState } = arg0);
  let obj = Object.create(null);
  obj.option = 0;
  obj.optionState = 0;
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback3();
  let isActive;
  if (null != optionState) {
    isActive = optionState.isActive;
  }
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj = { optionName: option.displayName };
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[9]).t.evoEHc, obj);
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
  obj["children"] = closure_8(arg1(dependencyMap[10]).LegacyText, obj1);
  return closure_8(arg1(dependencyMap[8]).PressableOpacity, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ View: closure_5, ScrollView: closure_6 } = tmp2);
let closure_7 = importDefault(dependencyMap[3]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flexDirection: "column", backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius: importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: importDefault(dependencyMap[6]).colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
obj.applicationCommandBar = obj;
const obj1 = { backgroundColor: false, accessibilityRole: false, -45001119: false, 1379623171: false, borderRadius: importDefault(dependencyMap[6]).radii.md };
obj.applicationIcon = obj1;
obj.applicationTopWrapperScrollView = {};
obj.applicationName = { "Bool(false)": "isArrayBufferToString", "Bool(false)": "sy" };
const obj2 = { "Bool(false)": 0.0000000000000000002609920288403476, "Bool(false)": -0.00000000000000000000000000000000000010579471013961805, "Bool(false)": 8595040800.000618, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000338751164151324, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000598483294717387, width: tmp2.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL };
obj.applicationOptionalOptionsDivider = obj2;
obj.applicationOptionalOptionsDividerWithNoRequired = { marginLeft: 4 };
obj.applicationOptionalOptionsIndicator = {};
obj.applicationDescriptionContainer = { flexShrink: 1 };
const tmp3 = arg1(dependencyMap[4]);
obj.applicationDescriptionDivider = { marginLeft: 0, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_COMMAND_BAR_DIVIDER };
const obj3 = { marginLeft: 0, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_COMMAND_BAR_DIVIDER };
obj.applicationCommandOption = { borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: arg1(dependencyMap[7]).DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
const obj4 = { borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: arg1(dependencyMap[7]).DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
obj.applicationCommandOptionText = { color: importDefault(dependencyMap[6]).colors.TEXT_DEFAULT };
const obj5 = { color: importDefault(dependencyMap[6]).colors.TEXT_DEFAULT };
obj.activeCommandOption = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND };
const obj6 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND };
obj.activeCommandOptionText = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.completeCommandOptionText = { opacity: 0.5 };
const obj7 = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.errorCommandOptionText = { color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_CRITICAL };
obj.optionDescriptionContainer = {};
const obj8 = { color: importDefault(dependencyMap[6]).colors.TEXT_FEEDBACK_CRITICAL };
obj.descriptionEllipsis = { marginLeft: 10, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
const obj9 = { marginLeft: 10, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.descriptionEllipsisDots = { backgroundColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj10 = { backgroundColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.completeCommandOption = { backgroundColor: arg1(dependencyMap[7]).DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
let closure_11 = obj.createStyles(obj);
function ApplicationCommandOptionDescription(option) {
  let tmp8;
  option = option.option;
  const arg1 = option;
  const optionState = option.optionState;
  let dependencyMap;
  let React;
  let closure_5;
  let closure_6;
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
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[16])(option);
  const importDefault = tmp2;
  const tmp3 = callback(React.useState(undefined), 2);
  const first = tmp3[0];
  dependencyMap = first;
  let callback = tmp3[1];
  const tmp5 = callback(React.useState(0), 2);
  const first1 = tmp5[0];
  React = first1;
  closure_5 = tmp5[1];
  [tmp8, closure_6] = callback(React.useState(0), 2);
  const tmp9 = importDefault(dependencyMap[16])(first1);
  let closure_7 = tmp9;
  const items = [tmp2, option, first1, tmp9];
  const effect = React.useEffect(() => {
    if (tmp2 !== option) {
      callback2(0);
      const tmp9 = _undefined(0);
      callback(undefined);
    } else {
      let tmp2 = first1 > 0;
      if (tmp2) {
        tmp2 = 0 === tmp9;
      }
      if (tmp2) {
        callback(1);
      }
    }
  }, items);
  const items1 = [first];
  let tmp12 = 1 === first;
  callback = React.useCallback(() => {
    closure_3(1);
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
    let tmp18Result = callback2(arg1(dependencyMap[14]).Text, obj1);
  } else {
    const obj2 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null != option ? option.displayDescription : option.command.displayDescription };
    tmp18Result = callback2(arg1(dependencyMap[14]).Text, obj2);
    const tmp18 = callback2;
  }
  obj.children = tmp18Result;
  const items2 = [callback2(closure_5, obj), ];
  let tmp25 = null;
  if (tmp8 !== first1) {
    ({ descriptionEllipsis: obj6.style, descriptionEllipsisDots: obj6.dotStyle } = tmp);
    tmp25 = callback2(importDefault(dependencyMap[17]), {});
    const obj3 = {};
  }
  items2[1] = tmp25;
  obj.children = items2;
  obj.children = closure_10(closure_5, obj);
  return callback2(arg1(dependencyMap[8]).PressableOpacity, obj);
}
const obj11 = { backgroundColor: arg1(dependencyMap[7]).DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/application_commands/native/ApplicationCommandBar.tsx");

export default function _default(command) {
  let currentOption;
  let tmp4;
  let tmp6;
  command = command.command;
  const arg1 = command;
  const section = command.section;
  const importDefault = section;
  ({ guildId: closure_2, currentOption } = command);
  const callback = currentOption;
  const optionStates = command.optionStates;
  const React = optionStates;
  const onPressOption = command.onPressOption;
  const tmp = callback3();
  const ref = React.useRef(null);
  let closure_7 = ref;
  const callback2 = React.useRef({});
  [tmp4, closure_9] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(false), 2);
  [tmp6, closure_10] = callback(React.useState(false), 2);
  const tmp7 = callback(React.useState(), 2);
  const first = tmp7[0];
  const callback3 = first;
  let closure_12 = tmp7[1];
  const items = [command];
  const effect = React.useEffect(() => {
    let options = false;
    let closure_1 = false;
    options = options.options;
    if (null != options) {
      const item = options.forEach((required) => {
        if (true !== required.required) {
          let closure_0 = true;
        } else {
          let closure_1 = true;
        }
      });
    }
    callback(options);
    callback2(closure_1);
  }, items);
  const items1 = [currentOption];
  const effect1 = React.useEffect(() => {
    let name;
    if (null != currentOption) {
      name = currentOption.name;
    }
    closure_12(name);
  }, items1);
  const items2 = [first, tmp];
  const effect2 = React.useEffect(() => {
    let tmp = null;
    if (null != first) {
      tmp = ref.current[closure_11];
    }
    if (null != tmp) {
      const current = ref.current;
      if (null != current) {
        const obj = { x: tmp.x - tmp.applicationTopWrapperScrollView.paddingHorizontal, animated: true };
        current.scrollTo(obj);
      }
    }
  }, items2);
  let obj = arg1(dependencyMap[11]);
  const items3 = [closure_7];
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
  const ApplicationCommandOptionItem = stateFromStores;
  const items4 = [section, stateFromStores];
  const memo = React.useMemo(() => command(closure_2[12]).getApplicationCommandsIconSource(section, stateFromStores), items4);
  let closure_14 = React.useCallback((nativeEvent, name) => {
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
  obj = { ref, contentContainerStyle: tmp.applicationTopWrapperScrollView };
  let tmp20 = null != memo;
  if (tmp20) {
    const obj1 = { style: tmp.applicationIcon, source: memo };
    tmp20 = callback2(importDefault(dependencyMap[13]), obj1);
  }
  const items5 = [tmp20, , , ];
  const obj2 = { backgroundColor: 1358955199, alignItems: 1091658877, flexDirection: 89998, borderRadius: 9842, style: tmp.applicationName, children: `/ ${command.displayName}` };
  items5[1] = callback2(arg1(dependencyMap[14]).Text, obj2);
  const options = command.options;
  let mapped;
  if (null != options) {
    mapped = options.map((required) => {
      const command = required;
      let tmp = null;
      if (required.required) {
        const obj = {
          option: required,
          onPress() {
              let tmp;
              if (null != callback) {
                tmp = callback(arg0);
              }
              return tmp;
            },
          optionState: optionStates[required.name],
          onLayout(arg0) {
              return callback2(arg0, arg0);
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
    const obj5 = { backgroundColor: "isArray", alignItems: "key", flexDirection: "constructor", borderRadius: "l", style: tmp.applicationOptionalOptionsIndicator };
    const intl = arg1(dependencyMap[9]).intl;
    obj5.children = intl.string(arg1(dependencyMap[9]).t.U19GM3);
    items7[1] = callback2(arg1(dependencyMap[14]).Text, obj5);
    const options1 = command.options;
    let mapped1;
    if (null != options1) {
      mapped1 = options1.map((required) => {
        const command = required;
        let tmp = null;
        if (!required.required) {
          const obj = {
            option: required,
            onPress() {
                return callback(arg0);
              },
            optionState: optionStates[required.name],
            onLayout(arg0) {
                return callback2(arg0, arg0);
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
  const items8 = [closure_10(tmp, obj), callback2(arg1(dependencyMap[15]).FormDivider, { style: tmp.applicationDescriptionDivider }), , ];
  const obj7 = { command, option: currentOption, optionState: tmp15 };
  items8[2] = callback2(closure_12, obj7);
  items8[3] = callback2(arg1(dependencyMap[15]).FormDivider, { style: tmp.applicationDescriptionDivider });
  obj.children = items8;
  return closure_10(onPressOption, obj);
};
