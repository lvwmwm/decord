// Module ID: 11896
// Function ID: 11897
// Name: ApplicationCommandBar
// Dependencies: [32, 19, 17, 2108, 21, 4836, 576, 5753, 5435, 1115, 1177, 504, 11713, 5899, 4832, 8053, 7720, 11897, 2]
// Exports: default

// Module 11896 (ApplicationCommandBar)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import usePreviousDefault from "usePrevious" /* 7720 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11713 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_12;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let tmp2;
let tmp4;
const native = tmp4(1177);
const DescriptionEllipsisDefault = tmp2(11897);
function ApplicationCommandOptionItem(arg0) {
  let LegacyText;
  let intl;
  let items;
  let obj2;
  let obj3;
  let option;
  let optionState;
  ({ option, optionState } = arg0);
  const merged = Object.assign(arg0, Object.assign({ option: 0, optionState: 0 }));
  const tmp2 = closure_11();
  let flag;
  if (optionState != null) {
    flag = optionState.isActive;
  }
  if (flag == null) {
    flag = false;
  }
  const obj = { accessibilityLabel: intl.formatToPlainString(intl2.t.evoEHc, obj2), accessibilityRole: "button", disabled: flag, style: items, children: metroImportAll(LegacyText, obj3) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  items = [tmp2.applicationCommandOption, flag && tmp2.activeCommandOption, ];
  let completeCommandOption = !flag;
  obj2 = { optionName: option.displayName };
  if (completeCommandOption) {
    let success;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success = lastValidationResult.success;
      }
    }
    completeCommandOption = success;
  }
  if (completeCommandOption) {
    completeCommandOption = tmp2.completeCommandOption;
  }
  items[2] = completeCommandOption;
  const merged1 = Object.assign(merged);
  const items1 = [tmp2.applicationCommandOptionText, , , ];
  let activeCommandOptionText = flag;
  LegacyText = native.LegacyText;
  if (flag) {
    activeCommandOptionText = tmp2.activeCommandOptionText;
  }
  items1[1] = activeCommandOptionText;
  let completeCommandOptionText = !flag;
  if (completeCommandOptionText) {
    let success1;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success1 = lastValidationResult2.success;
      }
    }
    completeCommandOptionText = success1;
  }
  if (completeCommandOptionText) {
    completeCommandOptionText = tmp2.completeCommandOptionText;
  }
  items1[2] = completeCommandOptionText;
  let errorCommandOptionText = !flag;
  if (errorCommandOptionText) {
    let success2;
    if (optionState != null) {
      if (optionState.lastValidationResult != null) {
        success2 = lastValidationResult3.success;
      }
    }
    errorCommandOptionText = false === success2;
  }
  if (errorCommandOptionText) {
    errorCommandOptionText = tmp2.errorCommandOptionText;
  }
  obj3 = { style: items1, numberOfLines: 1, children: option.displayName };
  items1[3] = errorCommandOptionText;
  return metroImportAll(PressableOpacity, obj);
}
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { applicationCommandBar: obj2, applicationIcon: size, applicationTopWrapperScrollView: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8 }, applicationName: { textAlignVertical: "center", marginRight: 12 }, applicationOptionalOptionsDivider: size1, applicationOptionalOptionsDividerWithNoRequired: { marginLeft: 4 }, applicationOptionalOptionsIndicator: { marginHorizontal: 4, paddingVertical: 8 }, applicationDescriptionContainer: { flexShrink: 1 }, applicationDescriptionDivider: obj3, applicationCommandOption: obj4, applicationCommandOptionText: obj5, activeCommandOption: obj6, activeCommandOptionText: obj7, completeCommandOptionText: { opacity: 0.5 }, errorCommandOptionText: obj8, optionDescriptionContainer: { overflow: "hidden", paddingHorizontal: 16, paddingVertical: 8, flexDirection: "row" }, descriptionEllipsis: obj9, descriptionEllipsisDots: obj10, completeCommandOption: obj11 };
obj2 = { flexDirection: "column", backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.md, marginRight: 16 };
size1 = { width: StyleSheet.hairlineWidth, marginVertical: 8, marginHorizontal: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, height: "100%" };
obj3 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
obj4 = { marginHorizontal: 4, padding: 8, fontSize: 12, alignItems: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: LegacyTokens.DARK_PRIMARY_800_LIGHT_PRIMARY_300 };
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj7 = { color: nativeDefault.colors.WHITE };
obj8 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj9 = { marginLeft: 10, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj10 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj11 = { backgroundColor: LegacyTokens.DARK_PRIMARY_660_LIGHT_PRIMARY_300 };
let closure_11 = createStyles(obj);
function ApplicationCommandOptionDescription(option) {
  let Text;
  let c6;
  let closure_3;
  let first;
  let first1;
  let items2;
  let obj2;
  let obj5;
  let tmp10;
  let tmp16;
  option = option.option;
  const optionState = option.optionState;
  first = undefined;
  closure_3 = undefined;
  first1 = undefined;
  hasOwnProperty = undefined;
  c6 = undefined;
  const command = option.command;
  let tmp = closure_11();
  let tmp2 = importDefault;
  const tmp4 = usePreviousDefault(option);
  let closure_1 = tmp4;
  [first, closure_3] = react.useState(undefined);
  [first1, hasOwnProperty] = react.useState(0);
  [tmp10, c6] = _slicedToArray(react.useState(0), 2);
  const tmp9 = _slicedToArray(react.useState(0), 2);
  const tmp11 = usePreviousDefault(first1);
  let closure_7 = tmp11;
  const items = [tmp4, option, first1, tmp11];
  const effect = react.useEffect(() => {
    if (closure_1 !== option) {
      closure_5(0);
      _undefined(0);
      closure_3(undefined);
    } else {
      const tmp2 = first1 > 0 && 0 === closure_7;
      if (tmp2) {
        closure_3(1);
      }
    }
  }, items);
  const items1 = [first];
  let tmp14 = 1 === first;
  const callback = react.useCallback(() => {
    closure_3(1);
  }, items1);
  if (tmp14) {
    tmp14 = tmp10 === first1;
  }
  let str = "button";
  if (tmp14) {
    str = "text";
  }
  const obj = { accessibilityRole: str, disabled: tmp14, onPress: callback, children: tmp16(hasOwnProperty, obj2) };
  obj2 = { style: tmp.optionDescriptionContainer, children: items2 };
  const obj3 = { style: tmp.applicationDescriptionContainer, children: metroImportAll(Text, obj5) };
  const PressableOpacity = Pressables.PressableOpacity;
  let error;
  Text = Text_Text.Text;
  tmp16 = authStore;
  if (optionState != null) {
    if (optionState.lastValidationResult != null) {
      error = lastValidationResult.error;
    }
  }
  function onDescriptionLayout(nativeEvent) {
    const truncResult = Math.trunc(nativeEvent.nativeEvent.layout.height);
    const tmp2 = undefined === first || truncResult > first1;
    if (tmp2) {
      closure_5(truncResult);
    }
    _undefined(truncResult);
  }
  if (null != error) {
    obj5 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "text-feedback-critical", children: optionState.lastValidationResult.error };
    const obj4 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "text-feedback-critical", children: optionState.lastValidationResult.error };
  } else {
    obj5 = { lineClamp: first, onLayout: onDescriptionLayout, variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null != option ? option.displayDescription : command.displayDescription };
  }
  items2 = [metroImportAll(hasOwnProperty, obj3), ];
  let tmp15Result = null;
  if (tmp10 !== first1) {
    const obj11 = { style: null, dotStyle: null };
    ({ descriptionEllipsis: obj6.style, descriptionEllipsisDots: obj6.dotStyle } = tmp);
    tmp15Result = tmp15(DescriptionEllipsisDefault, obj11);
  }
  items2[1] = tmp15Result;
  return metroImportAll(PressableOpacity, obj);
}
size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandBar.tsx");

export default function _default(command) {
  let _undefined;
  let _undefined2;
  let c10;
  let c9;
  let currentOption;
  let intl;
  let items5;
  let items8;
  let tmp4;
  let tmp6;
  command = command.command;
  const section = command.section;
  ({ guildId: dependencyMap, currentOption } = command);
  const optionStates = command.optionStates;
  const onPressOption = command.onPressOption;
  c9 = undefined;
  c10 = undefined;
  let first;
  let tmp = first();
  let closure_6 = tmp;
  optionStates.useRef(null);
  const ref = optionStates.useRef({});
  const tmp3 = currentOption(optionStates.useState(false), 2);
  [tmp4, c9] = tmp3;
  [tmp6, c10] = currentOption(optionStates.useState(false), 2);
  const tmp5 = currentOption(optionStates.useState(false), 2);
  const tmp7 = currentOption(optionStates.useState(), 2);
  first = tmp7[0];
  closure_12 = tmp7[1];
  const items = [command];
  const effect = optionStates.useEffect(() => {
    let c0 = false;
    let c1 = false;
    const options = command.options;
    if (options != null) {
      const item = options.forEach((required) => {
        if (true !== required.required) {
          c0 = true;
        } else {
          c1 = true;
        }
      });
    }
    _undefined(c0);
    _undefined2(c1);
  }, items);
  const items1 = [currentOption];
  const effect1 = optionStates.useEffect(() => {
    let name;
    const tmp = closure_12;
    if (currentOption != null) {
      name = currentOption.name;
    }
    tmp(name);
  }, items1);
  const items2 = [first, tmp];
  const effect2 = optionStates.useEffect(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = ref.current[tmp];
    }
    if (null != tmp2) {
      const current = ref.current;
      if (current != null) {
        const obj = { x: tmp2.x - closure_6.applicationTopWrapperScrollView.paddingHorizontal, animated: true };
        current.scrollTo(obj);
      }
    }
  }, items2);
  let obj = command(504);
  const items3 = [ref];
  const stateFromStores = obj.useStateFromStores(items3, () => {
    if (null != dependencyMap) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const items4 = [section, stateFromStores];
  const memo = optionStates.useMemo(() => {
    const obj = application_commands_ApplicationCommandUtils;
    return obj.getApplicationCommandsIconSource(section, stateFromStores);
  }, items4);
  let closure_14 = optionStates.useCallback((nativeEvent, name) => {
    nativeEvent = nativeEvent.nativeEvent;
    const current = ref.current;
    current[name.name] = { x: nativeEvent.layout.x, width: nativeEvent.layout.width };
    ref.current = current;
  }, []);
  let name;
  if (currentOption != null) {
    name = currentOption.name;
  }
  let tmp17;
  if (null != name) {
    let name1;
    if (currentOption != null) {
      name1 = currentOption.name;
    }
    tmp17 = optionStates[name1];
  }
  let tmp22 = null != memo;
  const obj2 = { style: tmp.applicationCommandBar, children: items8 };
  const obj3 = { ref, contentContainerStyle: tmp.applicationTopWrapperScrollView, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, horizontal: true, children: items5 };
  const tmp21 = closure_6;
  if (tmp22) {
    const obj4 = { style: tmp.applicationIcon, source: memo };
    tmp22 = ref(section(5899), obj4);
  }
  items5 = [tmp22, , , ];
  const obj5 = { style: tmp.applicationName, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: `/ ${command.displayName}` };
  items5[1] = ref(command(4832).Text, obj5);
  let options = command.options;
  let mapped;
  if (options != null) {
    mapped = options.map((required) => {
      let closure_0 = required;
      let tmp = null;
      if (required.required) {
        const obj = {
          option: required,
          onPress() {
              let tmpResult;
              if (onPressOption != null) {
                tmpResult = tmp(required);
              }
              return tmpResult;
            },
          optionState: optionStates[required.name],
          onLayout(arg0) {
              return closure_14(arg0, required);
            }
        };
        tmp = ref(closure_12, obj, required.name);
      }
      return tmp;
    });
  }
  items5[2] = mapped;
  let tmp19Result = null;
  if (tmp4) {
    const items6 = [tmp.applicationOptionalOptionsDivider, ];
    let applicationOptionalOptionsDividerWithNoRequired = !tmp6;
    const tmp28 = c9;
    if (!tmp6) {
      applicationOptionalOptionsDividerWithNoRequired = tmp.applicationOptionalOptionsDividerWithNoRequired;
    }
    const obj6 = { style: items6 };
    items6[1] = applicationOptionalOptionsDividerWithNoRequired;
    const items7 = [ref(onPressOption, obj6), , ];
    const obj7 = { style: tmp.applicationOptionalOptionsIndicator, lineClamp: 1, variant: "eyebrow", color: "text-muted", children: intl.string(command(1115).t.U19GM3) };
    const Text = tmp12(4832).Text;
    intl = tmp12(1115).intl;
    items7[1] = ref(Text, obj7);
    const options1 = command.options;
    let mapped1;
    if (options1 != null) {
      mapped1 = options1.map((required) => {
        let closure_0 = required;
        let tmp = null;
        if (!required.required) {
          const obj = {
            option: required,
            onPress() {
                return onPressOption(required);
              },
            optionState: optionStates[required.name],
            onLayout(arg0) {
                return closure_14(arg0, required);
              }
          };
          tmp = ref(closure_12, obj, required.name);
        }
        return tmp;
      });
    }
    const obj8 = { children: items7 };
    items7[2] = mapped1;
    tmp19Result = tmp19(tmp28, obj8);
  }
  items5[3] = tmp19Result;
  items8 = [c10(tmp21, obj3), , , ];
  const obj9 = { style: tmp.applicationDescriptionDivider };
  items8[1] = ref(command(8053).FormDivider, obj9);
  items8[2] = ref(stateFromStores, { command, option: currentOption, optionState: tmp17 });
  const obj10 = { style: tmp.applicationDescriptionDivider };
  items8[3] = ref(command(8053).FormDivider, obj10);
  return c10(onPressOption, obj2);
};
