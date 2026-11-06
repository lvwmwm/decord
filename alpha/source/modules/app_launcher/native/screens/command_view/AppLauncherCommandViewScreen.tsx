// Module ID: 12674
// Function ID: 12675
// Name: AppLauncherCommandViewScreen
// Dependencies: [5, 32, 19, 17, 5171, 9868, 5076, 1498, 1072, 1623, 21, 1652, 5745, 5170, 575, 12675, 504, 5400, 5403, 1705, 5406, 5167, 5789, 1113, 5884, 11664, 5916, 5765, 12677, 5837, 6812, 12569, 1259, 12625, 12679, 2116, 9867, 12626, 11909, 1493, 11405, 7042, 10666, 12680, 10667, 8311, 2017, 8300, 12681, 11665, 5422, 5781, 12682, 12683, 12717, 1187, 38, 12648, 10452, 7799, 9873, 10453, 12718, 12719, 12634, 12635, 2]
// Exports: default

// Module 12674 (AppLauncherCommandViewScreen)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1623 */;
import LinearGradientDefault from "LinearGradient" /* 5745 */;
import Text_Text from "Text/Text" /* 5781 */;
import BaseTextButton2 from "BaseTextButton" /* 5789 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5837 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5916 */;
import utils_UploadUtils from "utils/UploadUtils" /* 8311 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9867 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10666 */;
import showMediaKeyboardActionSheet from "showMediaKeyboardActionSheet" /* 10667 */;
import AppLauncherContext from "AppLauncherContext" /* 11664 */;
import AppLauncherTypes from "AppLauncherTypes" /* 11665 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12569 */;
import ApplicationCommandOptionValueParser from "ApplicationCommandOptionValueParser" /* 12626 */;
import AssetRegistryDefault from "AssetRegistry" /* 12634 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12635 */;
import AppLauncherCommandViewHeader from "AppLauncherCommandViewHeader" /* 12675 */;
import ApplicationCommandValidationUtils from "ApplicationCommandValidationUtils" /* 12677 */;
import application_commands_ApplicationCommandValidationUtils from "application_commands/ApplicationCommandValidationUtils" /* 12679 */;
import CommandOptionViewDefault from "CommandOptionView" /* 12682 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12718 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 12719 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9868 */;
import GuildRoleStore from "GuildRoleStore" /* 5076 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1498 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importAll, importDefault, set, set2;

let DEFAULT_CONTENT_PADDING;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
function AppLauncherCommandViewFooter(onHeightChange) {
  let SendMessageIcon;
  let View2;
  let _undefined;
  let animatedStyle;
  let c2;
  let closure_1;
  let enableSubmit;
  let first;
  let footerStickyInsetBottom;
  let intl;
  let isSending;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj5;
  let obj6;
  let onSubmit;
  let point;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp8;
  let useReducedMotion;
  onHeightChange = onHeightChange.onHeightChange;
  importDefault = undefined;
  ({ enableSubmit, onSubmit, animatedStyle, isSending, footerStickyInsetBottom } = onHeightChange);
  let tmp = closure_24();
  [first, importDefault] = react.useState(0);
  let tmp4 = onHeightChange;
  let obj = onHeightChange(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp8, c2] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  let items1 = [closure_26, stateFromStores, tmp8, , , , , , , , ];
  const useAnimatedStyle = onHeightChange(1652).useAnimatedStyle;
  const tmp9 = onHeightChange(1652);
  items1[3] = onHeightChange(1652).withDelay;
  items1[4] = onHeightChange(5400).withTiming;
  items1[5] = onHeightChange(5403).timingStandard;
  items1[6] = closure_25;
  items1[7] = onHeightChange(1705).scheduleOnRN;
  items1[8] = onHeightChange(5406).triggerHapticFeedback;
  items1[9] = onHeightChange(5406).HapticFeedbackTypes;
  items1[10] = isSending;
  let c0;
  let c1;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  class AppLauncherCommandViewScreenTsx2 {
    constructor() {
      let items2;
      let obj2;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      const tmp = c0;
      if (tmp) {
        obj2 = {};
      } else {
        const tmp2 = c1;
        if (tmp2) {
          const items = [c5, c6, c7, c8];
          [tmp12, tmp13, tmp14, tmp15] = items;
          const obj3 = { opacity: 1, transform: items2 };
          const obj4 = { translateX: _undefined2(100, _undefined3(-4, c4, "respect-motion-settings", AppLauncherCommandViewScreenTsx1)) };
          class AppLauncherCommandViewScreenTsx1 {
            constructor() {
              return closure_0(closure_1, closure_2.IMPACT_LIGHT);
            }
          }
          const items1 = [tmp13, tmp14, tmp15];
          AppLauncherCommandViewScreenTsx1.__closure = items1;
          AppLauncherCommandViewScreenTsx1.__workletHash = 323925726197;
          AppLauncherCommandViewScreenTsx1.__initData = tmp12;
          items2 = [obj4];
          obj2 = obj3;
        } else {
          let num = 1;
          const obj = _undefined4;
          if (_undefined4.get()) {
            num = 0;
          }
          obj2 = { opacity: _undefined3(num, c4), transform: null };
          let num2 = 0;
          const tmp4 = c4;
          if (obj.get()) {
            num2 = 100;
          }
          const items3 = [{ translateX: _undefined3(num2, tmp4) }];
          const obj5 = { translateX: _undefined3(num2, tmp4) };
          class AppLauncherCommandViewScreenTsx1 {
            constructor() {
              return closure_0(closure_1, closure_2.IMPACT_LIGHT);
            }
          }
        }
      }
      return obj2;
    }
  }
  let items2 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  AppLauncherCommandViewScreenTsx2.__closure = items2;
  AppLauncherCommandViewScreenTsx2.__workletHash = 1083775890910;
  AppLauncherCommandViewScreenTsx2.__initData = tmp10;
  const animatedStyle1 = useAnimatedStyle(AppLauncherCommandViewScreenTsx2);
  let items3 = [closure_27, footerStickyInsetBottom];
  c0 = undefined;
  [tmp22, tmp23] = items3;
  const tmp4Result = tmp4(1652);
  class AppLauncherCommandViewScreenTsx3 {
    constructor() {
      const obj = { bottom: -_undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp23];
  AppLauncherCommandViewScreenTsx3.__closure = items4;
  AppLauncherCommandViewScreenTsx3.__workletHash = 2219062280688;
  AppLauncherCommandViewScreenTsx3.__initData = tmp22;
  const animatedStyle2 = tmp4Result.useAnimatedStyle(AppLauncherCommandViewScreenTsx3);
  let obj2 = {
    onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      closure_1(height);
      if (onHeightChange != null) {
        onHeightChange(height);
      }
    },
    style: items5,
    children: items8
  };
  items5 = [tmp.footerContainer, animatedStyle];
  let obj3 = { style: items6, start: constants3.START, end: point, colors: items7, pointerEvents: "none" };
  const rect = { width: "100%", top: -12, left: tmp.footerContainer.paddingHorizontal, position: "absolute" };
  items6 = [rect, animatedStyle2];
  point = { x: 0, y: 12 / (first + 12) };
  const View = module_1652.View;
  items7 = [, ];
  const tmp4Result2 = tmp4(5167);
  items7[0] = tmp4Result2.hexWithOpacity(tmp.linearGradient.backgroundColor, 0);
  items7[1] = tmp.linearGradient.backgroundColor;
  items8 = [closure_20(LinearGradient, obj3), ];
  let obj4 = {
    onPress: onSubmit,
    onPressIn() {
      return _undefined(true);
    },
    onPressOut() {
      return _undefined(false);
    },
    disabled: !enableSubmit,
    style: tmp.submitButton,
    text: intl.string(tmp4(1113).t.TXNS7S),
    icon: closure_20(View2, obj5),
    iconPosition: "end"
  };
  const BaseTextButton = tmp4(5789).BaseTextButton;
  intl = tmp4(1113).intl;
  obj5 = { style: animatedStyle1, children: closure_20(SendMessageIcon, obj6) };
  View2 = module_1652.View;
  obj6 = { style: { marginLeft: 8 }, color: nativeDefault.unsafe_rawColors.WHITE, size: "sm" };
  SendMessageIcon = tmp4(5884).SendMessageIcon;
  items8[1] = closure_20(BaseTextButton, obj4);
  return closure_21(View, obj2);
}
function AppLauncherCommandViewInner(command) {
  let BottomSheetScrollView;
  let Text;
  let Text2;
  let _undefined;
  let arr4;
  let c24;
  let c31;
  let hasPermissions;
  let installOnDemand;
  let intl;
  let intl2;
  let intl3;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let loading;
  let obj11;
  let obj13;
  let obj18;
  let obj5;
  let optionalOptionsChild;
  let preSelectedCommand;
  let section;
  let tmp20;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp76;
  let tmp79Result2;
  command = command.command;
  const context = command.context;
  ({ preSelectedCommand, installOnDemand } = command);
  const sectionName = command.sectionName;
  const analyticsLocation = command.analyticsLocation;
  const onCommandExecuted = command.onCommandExecuted;
  let ref4;
  let prefilledOptions;
  let guild_id;
  let stateFromStores;
  let ref6;
  let ref7;
  let ref8;
  let closure_23;
  c24 = undefined;
  let first;
  closure_26 = undefined;
  let ref9;
  let first1;
  closure_29 = undefined;
  let ref10;
  c31 = undefined;
  let optionValues;
  let first2;
  let closure_34;
  let closure_35;
  let first4;
  let closure_37;
  let first5;
  let closure_39;
  let first6;
  let setFocusedOption;
  let sum1;
  let sharedValue;
  let sharedValue1;
  let callback1;
  let callback2;
  let id;
  let commandContext;
  let callback3;
  let onStartEditing;
  let callback5;
  let callback6;
  let onPressAttachmentOption;
  let setLatch;
  let tryCallback;
  let onOptionViewLayout;
  let onDismiss;
  let closure_58;
  ({ section, loading, hasPermissions } = command);
  let tmp = c24();
  react = tmp;
  let tmp2 = ref4();
  let closure_7 = tmp2;
  let tmp3 = command;
  let tmp4 = sectionName;
  let obj = command(sectionName[25]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const entrypoint = requiredAppLauncherContext.entrypoint;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  let obj2 = react;
  react.useRef(null);
  const ref = react.useRef({});
  const ref2 = react.useRef({});
  const ref3 = react.useRef(0);
  ref4 = react.useRef(0);
  const ref5 = react.useRef(0);
  let commandId;
  if (preSelectedCommand != null) {
    commandId = preSelectedCommand.commandId;
  }
  id = undefined;
  if (command != null) {
    id = command.id;
  }
  let tmp9 = null;
  if (commandId === id) {
    prefilledOptions = undefined;
    if (preSelectedCommand != null) {
      prefilledOptions = preSelectedCommand.prefilledOptions;
    }
    if (prefilledOptions == null) {
      prefilledOptions = null;
    }
    tmp9 = prefilledOptions;
  }
  prefilledOptions = tmp9;
  guild_id = context.channel.guild_id;
  let items = [ref2];
  const tmp3Result = tmp3(tmp4[16]);
  stateFromStores = tmp3Result.useStateFromStores(items, () => GuildRoleStore.getRolesSnapshot(guild_id));
  ref6 = obj2.useRef(false);
  ref7 = obj2.useRef(Date.now());
  ref8 = obj2.useRef(null);
  closure_23 = obj2.useRef(false);
  const items1 = [command];
  const effect = obj2.useEffect(() => {
    let current;
    if (null != current) {
      current = ref8.current;
      return () => {
        let num;
        if (!ref.current) {
          const _Date = Date;
          const diff = Date.now() - current;
          const options = command.options;
          const obj = { time_spent: diff, num_options: num, used_options: current, last_used_option_type: current };
          num = undefined;
          const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
          const APP_LAUNCHER_COMMAND_CLOSED = constants.APP_LAUNCHER_COMMAND_CLOSED;
          AppAnalyticsUtils;
          if (options != null) {
            num = options.length;
          }
          if (num == null) {
            num = 0;
          }
          trackWithMetadata(APP_LAUNCHER_COMMAND_CLOSED, obj);
        }
      };
    }
  }, items1);
  const items2 = [chatInputRef, keyboardCloseReasonRef, tmp2];
  const callback = obj2.useCallback(() => {
    const arr = closure_7;
    if (closure_7.canGoBack()) {
      arr.pop();
    } else {
      keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  }, items2);
  let tmp14 = onCommandExecuted(obj2.useState([]), 2);
  [arr4, c24] = tmp14;
  let tmp15 = onCommandExecuted(obj2.useState([]), 2);
  first = tmp15[0];
  closure_26 = tmp15[1];
  const useRef = obj2.useRef;
  set = new Set();
  ref9 = useRef(set);
  const tmp17 = onCommandExecuted(obj2.useState([]), 2);
  first1 = tmp17[0];
  closure_29 = tmp17[1];
  const useRef2 = obj2.useRef;
  const set1 = new Set();
  ref10 = useRef2(set1);
  [tmp20, c31] = onCommandExecuted(obj2.useState([]), 2);
  const tmp19 = onCommandExecuted(obj2.useState([]), 2);
  optionValues = obj2.useRef({});
  const tmp21 = onCommandExecuted(obj2.useState({}), 2);
  first2 = tmp21[0];
  closure_34 = tmp21[1];
  let tmp23 = onCommandExecuted(obj2.useState(true), 2);
  closure_35 = tmp23[1];
  const first3 = tmp23[0];
  const useState = obj2.useState;
  set2 = new Set();
  const tmp26 = onCommandExecuted(useState(set2), 2);
  first4 = tmp26[0];
  closure_37 = tmp26[1];
  const tmp28 = onCommandExecuted(obj2.useState(0), 2);
  first5 = tmp28[0];
  closure_39 = tmp28[1];
  const tmp30 = onCommandExecuted(obj2.useState(null), 2);
  first6 = tmp30[0];
  setFocusedOption = tmp30[1];
  const bottom = context(tmp4[27])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets.bottom;
  const insets = context(tmp4[27])({ includeCustomKeyboardHeight: false, includeKeyboardHeight: true }).insets;
  const tmp33 = onCommandExecuted(obj2.useState(0), 2);
  let sum = insets.bottom + tmp33[0];
  const tmp34 = tmp33[1];
  sum1 = sum + context(tmp4[14]).space.PX_16;
  let sum2 = bottom + context(tmp4[14]).space.PX_16;
  const tmp3Result6 = tmp3(tmp4[11]);
  sharedValue = tmp3Result6.useSharedValue(false);
  const tmp3Result7 = tmp3(tmp4[11]);
  sharedValue1 = tmp3Result7.useSharedValue(0);
  const items3 = [first5, sum1, sharedValue1];
  callback1 = obj2.useCallback((required) => {
    const diff = first5 - sum1;
    const diff1 = diff - AppLauncherCommandViewHeader.COLLAPSED_HEADER_HEIGHT;
    if (null != required) {
      if (null != ref.current[required.name]) {
        if (diff1 > 0) {
          let current3;
          if (required.required) {
            current3 = ref3.current;
          } else {
            current3 = ref4.current;
          }
          const sum = tmp9 + current3;
          const diff2 = sum - AppLauncherCommandViewHeader.COLLAPSED_HEADER_HEIGHT;
          let num = ref2.current[required.name];
          if (num == null) {
            num = 0;
          }
          sum1 = diff2 + num;
          const value = sharedValue1.get();
          const sum2 = value + diff1;
          if (num >= diff1) {
            const tmp23 = sum1 < value || sum1 > sum2;
            if (tmp23) {
              const current5 = ref.current;
              if (current5 != null) {
                const _Math2 = Math;
                const scrollTo2 = current5.scrollTo;
                const obj2 = { y: Math.max(0, sum1 - diff1), animated: true };
                scrollTo2(obj2);
              }
            }
          } else {
            if (sum1 > value) {
              let diff3;
              if (diff2 < sum2) {
                diff3 = diff2;
                if (sum1 > sum2) {
                  diff3 = sum1 - diff1;
                }
              }
              const current4 = ref.current;
              if (current4 != null) {
                const _Math = Math;
                const scrollTo = current4.scrollTo;
                const obj = { y: Math.max(0, diff3), animated: true };
                scrollTo(obj);
              }
            }
            diff3 = diff2 - diff1 / 2;
          }
        }
      }
    } else {
      const diff4 = ref5.current - diff1;
      const obj3 = sharedValue1;
      if (sharedValue1.get() < 0) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.scrollTo({ y: 0, animated: true });
        }
      } else {
        const tmp5 = diff4 > 0 && obj3.get() > diff4;
        if (tmp5) {
          const current = ref.current;
          if (current != null) {
            current.scrollToEnd({ animated: true });
          }
        }
      }
    }
  }, items3);
  const items4 = [context.channel.guild_id, context.channel.id, first2];
  callback2 = obj2.useCallback((name, content) => {
    optionValues.current[name.name] = content;
    const obj = {};
    const merged = Object.assign(first2);
    name = name.name;
    const obj2 = ApplicationCommandValidationUtils;
    const obj3 = { option: name, content, guildId: context.channel.guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER };
    obj[name] = obj2.validateOptionContent(obj3);
    closure_34(obj);
    ref6.current = true;
    ref8.current = name.type;
  }, items4);
  const tmp42 = context(tmp4[30])(command);
  id = tmp42;
  const items5 = [guild_id, command, , , , ];
  let id1;
  const useEffect = obj2.useEffect;
  if (tmp42 != null) {
    id1 = tmp42.id;
  }
  items5[2] = id1;
  items5[3] = tmp9;
  items5[4] = stateFromStores;
  items5[5] = context.channel.id;
  const effect1 = useEffect(() => {
    id = undefined;
    if (closure_0 != null) {
      id = tmp.id;
    }
    let id1;
    if (id != null) {
      id1 = id.id;
    }
    if (id !== id1) {
      closure_0 = [];
      let items = [];
      let closure_2 = [];
      let closure_3 = {};
      closure_32.current = {};
      if (closure_0 != null) {
        const options = tmp.options;
        if (options != null) {
          const item = options.forEach((required) => {
            closure_0 = required;
            if (true !== required.required) {
              let someResult;
              const obj = prefilledOptions;
              if (prefilledOptions != null) {
                someResult = obj.some((name) => name.name === name.name);
              }
              if (someResult) {
                items.push(required);
                const current = optionValues.current;
                const name = required.name;
                const obj3 = { option: required, prefilledValues: prefilledOptions, guildId: guild_id, roles: stateFromStores };
                const obj2 = AppLauncherNativeUtils;
                current[name] = obj2.getInitialOptionValues(obj3);
                const name2 = required.name;
                const obj4 = { option: required, content: optionValues.current[required.name], guildId: guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER };
                const prop = ApplicationCommandValidationUtils.validateOptionContent;
                ApplicationCommandValidationUtils;
                closure_3[name2] = prop(obj4);
              } else {
                closure_0.push(required);
              }
            } else {
              closure_2.push(required);
              const current2 = optionValues.current;
              const name3 = required.name;
              const obj6 = { option: required, prefilledValues: prefilledOptions, guildId: guild_id, roles: stateFromStores };
              const obj5 = AppLauncherNativeUtils;
              current2[name3] = obj5.getInitialOptionValues(obj6);
              const name4 = required.name;
              const obj7 = { option: required, content: optionValues.current[required.name], guildId: guild_id, channelId: context.channel.id, allowEmptyValues: false, commandOrigin: ApplicationCommandTypes.CommandOrigin.APPLICATION_LAUNCHER };
              const prop1 = ApplicationCommandValidationUtils.validateOptionContent;
              ApplicationCommandValidationUtils;
              closure_3[name4] = prop1(obj7);
            }
          });
        }
      }
      let obj = command(sectionName[32]);
      obj.batchUpdates(() => {
        closure_34(closure_3);
        c24(closure_2);
        items = [...items];
        closure_26(items);
        closure_29(items);
        c31(closure_0);
        set = new Set();
        closure_37(set);
      });
      let current = ref9.current;
      current.clear();
      const item1 = items.forEach((name) => {
        const current = ref.current;
        return current.add(name.name);
      });
      let current2 = ref10.current;
      current2.clear();
      const item2 = items.forEach((name) => {
        const current = ref2.current;
        return current.add(name.name);
      });
    }
  }, items5);
  const tmp3Result8 = tmp3(tmp4[33]);
  commandContext = tmp3Result8.useCommandContext(context);
  const items6 = [callback1, chatInputRef, command, commandContext, sharedValue, keyboardCloseReasonRef, onCommandExecuted, first2, sectionName];
  callback3 = obj2.useCallback(function() {
    let ApplicationCommandOptionType;
    let num;
    let rootCommand;
    let tmp13Result4;
    if (null != command) {
      const obj2 = application_commands_ApplicationCommandValidationUtils;
      const firstInvalidOption = obj2.getFirstInvalidOption(tmp, first2);
      const tmp15 = first2;
      if (null != firstInvalidOption) {
        const _Set = Set;
        const _Object = Object;
        const self = this;
        const self2 = this;
        set = new Set(Object.keys(tmp15));
        closure_37(set);
        callback1(firstInvalidOption);
        let obj = { application_id: null, command_id: id, argument_type: ApplicationCommandOptionType[num], is_required: firstInvalidOption.required };
        ({ applicationId: obj.application_id, rootCommand } = command);
        id = undefined;
        const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
        const APPLICATION_COMMAND_VALIDATION_FAILED = ref5.APPLICATION_COMMAND_VALIDATION_FAILED;
        AppAnalyticsUtils;
        if (rootCommand != null) {
          id = rootCommand.id;
        }
        num = firstInvalidOption.type;
        ApplicationCommandOptionType = tmp13(2116).ApplicationCommandOptionType;
        if (num == null) {
          num = 3;
        }
        trackWithMetadata(APPLICATION_COMMAND_VALIDATION_FAILED, obj);
      } else {
        closure_35(false);
        let result = sharedValue.set(true);
        closure_23.current = true;
        const obj3 = { command, optionValues: tmp13Result4.parseOptionValuesForSend(commandContext.channel, command, optionValues.current), context: commandContext, sectionName, commandOrigin: ApplicationCommandTypes.CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW };
        const executeAppLauncherCommand = AppLauncherUtils.executeAppLauncherCommand;
        AppLauncherUtils;
        tmp13Result4 = ApplicationCommandOptionValueParser;
        const result1 = executeAppLauncherCommand(obj3);
        const nextPromise = result1.then(() => {
          const obj = command(sectionName[20]);
          const result = obj.triggerHapticFeedback(command(sectionName[20]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const timerId = setTimeout(() => {
            closure_1_8.current = command(sectionName[25]).AppLauncherKeyboardCloseReason.COMMAND;
            const current = ref.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
            if (closure_1_5 != null) {
              closure_1_5();
            }
          }, 300);
        });
        nextPromise.catch(() => {
          closure_1_35(true);
          const result = sharedValue.set(false);
        });
      }
    }
  }, items6);
  ref(true, true);
  ref(context, true, true);
  const items7 = [installOnDemand, command, context, callback3, sectionName, analyticsLocation, entrypoint];
  const callback4 = obj2.useCallback(analyticsLocation(function*(arg0, value) {
    let closure_0;
    let obj5;
    let obj6;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp14 = installOnDemand;
            if (tmp14) {
              if (null == command) {
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                const obj4 = { applicationId: command.applicationId, channel: context.channel, commandIntegrationTypes: command.integration_types, appLauncherContext: obj6 };
                obj6 = { entrypoint, location: analyticsLocation, sectionName };
                c1 = 1;
                c2 = 1;
                const obj7 = { value: obj5.installApplicationOnDemandIfNeeded(obj4), done: false };
                obj5 = tmp(sectionName[38]);
                return obj7;
              }
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else if (!value.isAuthorized) {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
        closure_128_49();
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  }), items7);
  const height = tmp32(tmp4[39])({ ignoreKeyboard: true }).height;
  const maximum = tmp32(tmp4[40])().maximum;
  const tmp3Result9 = tmp3(tmp4[25]);
  const bottomSheetPosition = tmp3Result9.useRequiredAppLauncherContext().bottomSheetPosition;
  const tmp50 = context(tmp4[41])(sum2);
  const items8 = [closure_29, bottomSheetPosition, height, maximum, tmp50];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp51, tmp52, tmp53, tmp54, tmp55] = items8;
  const tmp3Result10 = tmp3(tmp4[11]);
  class AppLauncherCommandViewScreenTsx4 {
    constructor() {
      let items;
      let sum;
      const obj = { transform: items };
      const obj2 = { translateY: -sum - _undefined2.get() };
      sum = _undefined.get() - c1 + c2;
      items = [obj2];
      return obj;
    }
  }
  const items9 = [tmp52, tmp53, tmp54, tmp55];
  AppLauncherCommandViewScreenTsx4.__closure = items9;
  AppLauncherCommandViewScreenTsx4.__workletHash = 8988942426348;
  AppLauncherCommandViewScreenTsx4.__initData = tmp51;
  const items10 = [first4, callback1];
  const animatedStyle = tmp3Result10.useAnimatedStyle(AppLauncherCommandViewScreenTsx4);
  onStartEditing = obj2.useCallback((name) => {
    first4.delete(name.name);
    set = new Set(first4);
    closure_37(set);
    callback1(name);
  }, items10);
  const items11 = [first4, ];
  let name;
  const useCallback = obj2.useCallback;
  if (first6 != null) {
    name = first6.name;
  }
  items11[1] = name;
  callback5 = useCallback((name) => {
    first4.add(name.name);
    set = new Set(first4);
    closure_37(set);
    let name1;
    name = name.name;
    if (first6 != null) {
      name1 = first6.name;
    }
    if (name === name1) {
      setFocusedOption(null);
    }
  }, items11);
  const items12 = [command];
  callback6 = obj2.useCallback((arg0) => {
    const tmp = command;
    if (null != command) {
      const obj3 = { application_id: null, command_id: null, option_name: null, option_type: null };
      ({ applicationId: obj2.application_id, id: obj2.command_id } = tmp);
      ({ name: obj2.option_name, type: obj2.option_type } = arg0);
      const obj = AppAnalyticsUtils;
      obj.trackWithMetadata(ref5.APPLICATION_COMMAND_OPTION_PRESSED, obj3);
    }
  }, items12);
  const items13 = [chatInputRef, context.channel, callback5, callback6];
  onPressAttachmentOption = obj2.useCallback((option) => {
    let items;
    let onRestoreKeyboard;
    let obj = { target: stateFromStores.APP_LAUNCHER, option };
    let tmp = command;
    let obj2 = command(sectionName[42]);
    const mediaKeyboardDraftType = obj2.getMediaKeyboardDraftType(obj.target);
    let fileTypes;
    if (option.type === command(sectionName[35]).ApplicationCommandOptionType.ATTACHMENT) {
      fileTypes = option.fileTypes;
    }
    let tmpResult = tmp(tmp2[43]);
    const fileTypeFiltering = tmpResult.getFileTypeFiltering(fileTypes);
    const allowedExtensions = fileTypeFiltering.allowedExtensions;
    ({ validateFilenames: analyticsLocation, showInvalidFileTypeAlert: onCommandExecuted } = fileTypeFiltering);
    const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
    callback6(option);
    const tmpResult4 = tmp(sectionName[46]);
    let result = tmpResult4.dismissGlobalKeyboard();
    if (mediaFilesAllowed) {
      const obj3 = {
        channel: obj.channel,
        draftType: mediaKeyboardDraftType,
        extensions: allowedExtensions,
        uploadLimit: 1,
        disableWhenReachedLimit: false,
        includedUploadIds: items,
        onAttachPress() {
            obj = {};
            const handleAttachFile = command(sectionName[42]).handleAttachFile;
            command(sectionName[42]);
            const FILE_ATTACHMENT = command(sectionName[47]).UploadOrigin.FILE_ATTACHMENT;
            const obj2 = {
              channel: obj.channel,
              uploadLimit: 1,
              extensions: allowedExtensions,
              onDismissKeyboard() {
                obj = IMAGE_PICKER(allowedExtensions[44]);
                return obj.hideMediaKeyboardActionSheet();
              },
              onRestoreKeyboard: prefilledOptions,
              onSelectFiles(arg0) {
                if (allowedExtensions.length > 0) {
                  obj = utils_UploadUtils;
                  const items = [obj.getFileFromUploadItem(arg0[0]).filename];
                  if (!analyticsLocation(items)) {
                    return onCommandExecuted();
                  }
                }
                const obj2 = MediaKeyboardUtils;
                const result = obj2.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
              }
            };
            const merged = Object.assign(obj2);
            handleAttachFile(obj);
          },
        onPressCamera(previewType) {
            obj = { previewType };
            const handleCameraDialog = command(sectionName[42]).handleCameraDialog;
            command(sectionName[42]);
            const IMAGE_PICKER = command(sectionName[47]).UploadOrigin.IMAGE_PICKER;
            const obj2 = {
              channel: obj.channel,
              uploadLimit: 1,
              extensions: allowedExtensions,
              onDismissKeyboard() {
                obj = IMAGE_PICKER(allowedExtensions[44]);
                return obj.hideMediaKeyboardActionSheet();
              },
              onRestoreKeyboard: prefilledOptions,
              onSelectFiles(arg0) {
                if (allowedExtensions.length > 0) {
                  obj = utils_UploadUtils;
                  const items = [obj.getFileFromUploadItem(arg0[0]).filename];
                  if (!analyticsLocation(items)) {
                    return onCommandExecuted();
                  }
                }
                const obj2 = MediaKeyboardUtils;
                const result = obj2.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
              }
            };
            const merged = Object.assign(obj2);
            handleCameraDialog(obj);
          },
        onPressItem(channelId) {
            channelId = channelId.channelId;
            const item = channelId.item;
            obj = showMediaKeyboardActionSheet;
            const result = obj.hideMediaKeyboardActionSheet();
            const obj2 = MediaKeyboardUtils;
            const result1 = obj2.mediaNodeToUploadItem(item);
            if (allowedExtensions.length > 0) {
              const items = [];
              const tmpResult = utils_UploadUtils;
              items[0] = tmpResult.getFileFromUploadItem(result1).filename;
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const tmpResult2 = MediaKeyboardUtils;
            const result2 = tmpResult2.addAttachmentForCommand(channelId, chatInputRef, result1, obj, tmp(8300).UploadOrigin.IMAGE_PICKER);
          },
        onViewAll() {
            obj = { draftType: mediaKeyboardDraftType };
            const handleViewAllDialog = command(sectionName[42]).handleViewAllDialog;
            const tmp = command(sectionName[42]);
            const IMAGE_PICKER = command(sectionName[47]).UploadOrigin.IMAGE_PICKER;
            let obj2 = {
              channel: obj.channel,
              uploadLimit: 1,
              extensions: allowedExtensions,
              onDismissKeyboard() {
                obj = IMAGE_PICKER(allowedExtensions[44]);
                return obj.hideMediaKeyboardActionSheet();
              },
              onRestoreKeyboard: prefilledOptions,
              onSelectFiles(arg0) {
                if (allowedExtensions.length > 0) {
                  obj = utils_UploadUtils;
                  const items = [obj.getFileFromUploadItem(arg0[0]).filename];
                  if (!analyticsLocation(items)) {
                    return onCommandExecuted();
                  }
                }
                const obj2 = MediaKeyboardUtils;
                const result = obj2.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
              }
            };
            const merged = Object.assign(obj2);
            handleViewAllDialog(obj);
          },
        onManageLimited() {
            obj = option(allowedExtensions[42]);
            const obj2 = { onDismissKeyboard: option(allowedExtensions[44]).hideMediaKeyboardActionSheet, onRestoreKeyboard };
            const result = obj.handleLimitedPickerDialog(obj2);
          },
        onClose() {
            callback5(option);
          },
        onBack() {
            obj = option(allowedExtensions[44]);
            const result = obj.hideMediaKeyboardActionSheet();
          }
      };
      items = [option.name];
      const tmpResult5 = tmp(sectionName[44]);
      let result1 = tmpResult5.showMediaKeyboardActionSheet(obj3);
    } else {
      const obj4 = {};
      let handleAttachFile = tmp(tmp2[42]).handleAttachFile;
      tmp(sectionName[42]);
      let FILE_ATTACHMENT = tmp(tmp2[47]).UploadOrigin.FILE_ATTACHMENT;
      const obj5 = {
        channel: obj.channel,
        uploadLimit: 1,
        extensions: allowedExtensions,
        onDismissKeyboard() {
            obj = IMAGE_PICKER(allowedExtensions[44]);
            return obj.hideMediaKeyboardActionSheet();
          },
        onRestoreKeyboard: prefilledOptions,
        onSelectFiles(arg0) {
            if (allowedExtensions.length > 0) {
              obj = utils_UploadUtils;
              const items = [obj.getFileFromUploadItem(arg0[0]).filename];
              if (!analyticsLocation(items)) {
                return onCommandExecuted();
              }
            }
            const obj2 = MediaKeyboardUtils;
            const result = obj2.addAttachmentForCommand(context.channel.id, chatInputRef, arg0[0], obj, IMAGE_PICKER);
          }
      };
      let merged = Object.assign(obj5);
      handleAttachFile(obj4);
    }
  }, items13);
  const tmp60 = context(tmp4[48])(() => {
    callback1(first6);
  });
  setLatch = tmp60.setLatch;
  tryCallback = tmp60.tryCallback;
  const items14 = [tryCallback];
  const callback7 = obj2.useCallback((nativeEvent) => {
    ref3.current = nativeEvent.nativeEvent.layout.y;
  }, []);
  const items15 = [first6, setLatch, callback1];
  const callback8 = obj2.useCallback((nativeEvent) => {
    ref4.current = nativeEvent.nativeEvent.layout.y;
    tryCallback();
  }, items14);
  onOptionViewLayout = obj2.useCallback((nativeEvent, name) => {
    let height;
    ({ height, y: closure_12.current[name.name] } = nativeEvent.nativeEvent.layout);
    ref2.current[name.name] = height;
    if (null == ref.current[name.name]) {
      name = undefined;
      if (first6 != null) {
        name = first6.name;
      }
      if (name === name.name) {
        setLatch(true);
      }
    }
    let name1;
    if (first6 != null) {
      name1 = first6.name;
    }
    const tmp4 = name1 === name.name && null != ref2.current[name.name] && height > ref2.current[name.name];
    if (tmp4) {
      callback1(name);
    }
  }, items15);
  const items16 = [first6, callback1];
  const effect2 = obj2.useEffect(() => {
    if (null != first6) {
      callback1(tmp);
    }
  }, items16);
  const items17 = [first1, first, callback2, guild_id, stateFromStores, , ];
  let applicationId;
  const useCallback2 = obj2.useCallback;
  if (command != null) {
    applicationId = command.applicationId;
  }
  items17[5] = applicationId;
  let id2;
  if (command != null) {
    id2 = command.id;
  }
  items17[6] = id2;
  const items18 = [first1, first, first2, first4, , , ];
  let name1;
  const callback21 = useCallback2((name) => {
    let current = ref9.current;
    current.add(name.name);
    const items = [];
    items[HermesBuiltin.arraySpread(items, first1, 0)] = name;
    closure_29(items);
    _undefined(first.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    setFocusedOption(name);
    const obj = AppLauncherNativeUtils;
    const obj2 = { option: name, prefilledValues: [], guildId: guild_id, roles: stateFromStores };
    callback2(name, obj.getInitialOptionValues(obj2));
    ref6.current = true;
    ref8.current = name.type;
    let applicationId;
    const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
    const APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED = ref5.APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED;
    AppAnalyticsUtils;
    if (command != null) {
      applicationId = tmp8.applicationId;
    }
    const obj5 = { application_id: applicationId, command_id: id, option_name: null, option_type: null };
    id = undefined;
    if (command != null) {
      id = tmp8.id;
    }
    ({ name: obj3.option_name, type: obj3.option_type } = name);
    trackWithMetadata(APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED, obj5);
  }, items17);
  const useCallback3 = obj2.useCallback;
  if (first6 != null) {
    name1 = first6.name;
  }
  items18[4] = name1;
  let applicationId1;
  if (command != null) {
    applicationId1 = command.applicationId;
  }
  items18[5] = applicationId1;
  let id3;
  if (command != null) {
    id3 = command.id;
  }
  items18[6] = id3;
  onDismiss = useCallback3((name) => {
    let current = ref9.current;
    current.delete(name.name);
    const current2 = ref10.current;
    current2.delete(name.name);
    closure_29(first1.filter((name) => name.name !== name.name));
    _undefined(first.filter((name) => {
      const current = ref.current;
      return !current.has(name.name);
    }));
    delete closure_12.current[name.name];
    delete closure_13.current[name.name];
    delete closure_32.current[name.name];
    delete first2[name.name];
    const obj = {};
    const merged = Object.assign(first2);
    closure_34(obj);
    first4.delete(name.name);
    set = new Set(first4);
    closure_37(set);
    let name1;
    name = name.name;
    if (first6 != null) {
      name1 = first6.name;
    }
    if (name === name1) {
      setFocusedOption(null);
    }
    let applicationId;
    const trackWithMetadata = command(sectionName[26]).trackWithMetadata;
    const APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED = ref5.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED;
    command(sectionName[26]);
    if (name != null) {
      applicationId = tmp14.applicationId;
    }
    const obj3 = { application_id: applicationId, command_id: id, option_name: null, option_type: null };
    id = undefined;
    if (name != null) {
      id = tmp14.id;
    }
    ({ name: obj2.option_name, type: obj2.option_type } = name);
    trackWithMetadata(APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED, obj3);
  }, items18);
  const callback9 = obj2.useCallback((nativeEvent) => closure_39(nativeEvent.nativeEvent.layout.height), []);
  let tmp79Result = first.length > 0;
  let tmp74 = tmp72;
  const callback10 = obj2.useCallback((arg0, current) => {
    ref5.current = current;
    return current;
  }, []);
  if (arr4.length <= 0) {
    tmp74 = tmp79Result;
  }
  let prefilledOptions1;
  if (preSelectedCommand != null) {
    prefilledOptions1 = preSelectedCommand.prefilledOptions;
  }
  closure_58 = null != prefilledOptions1;
  if (entrypoint === tmp3(tmp4[49]).AppLauncherEntrypoint.VOICE) {
    BottomSheetScrollView = entrypoint;
  } else {
    BottomSheetScrollView = tmp3(tmp4[50]).BottomSheetScrollView;
  }
  if (loading) {
    tmp79Result2 = ref6(optionValues, {});
    tmp76 = ref6;
  } else if (null == command) {
    let obj3 = { onPressBack: callback };
    tmp79Result2 = ref6(first2, obj3);
    tmp76 = ref6;
  } else if (hasPermissions) {
    let obj4 = { ref, contentContainerStyle: tmp.optionsContainer, scrollIndicatorInsets: obj5, scrollToOverflowEnabled: true, onContentSizeChange: callback10, preserveScrollMomentum: true, lockableScrollableContentOffsetY: sharedValue1, keyboardShouldPersistTaps: "handled", contentInsetAdjustmentBehavior: "never", automaticallyAdjustContentInsets: false, onLayout: callback9, automaticallyAdjustsScrollIndicatorInsets: false, children: items20 };
    obj5 = { bottom: sum1 };
    let obj6 = { style: tmp.commandNameContainer, children: items19 };
    let obj7 = { variant: "heading-lg/semibold", color: "text-default", children: command.displayName };
    items19 = [ref6(tmp3(tmp4[51]).Text, obj7), ];
    const obj8 = { variant: "heading-xs/medium", color: "text-default", children: command.displayDescription };
    items19[1] = ref6(tmp3(tmp4[51]).Text, obj8);
    items20 = [ref7(closure_7, obj6), , , , , ];
    let tmp82Result = tmp72;
    if (tmp82Result) {
      const obj9 = {
        style: tmp.requiredOptionsContainer,
        onLayout: callback7,
        children: arr4.map((option, index) => {
              const obj = { option, autoFocusType: null, editedOptions: null, onOptionViewLayout: null, onStartEditing: null, onEndEditing: null, onOptionValueChange: null, onPressOption: null, onPressAttachmentOption: null, channel: null, optionValidationResults: null, setFocusedOption: null, command: null, optionValues: null };
              const tmp = closure_20;
              if (0 === index) {
                let NONE;
                const tmp3 = closure_58;
                if (!tmp3) {
                  NONE = ref3.FIRST_REQUIRED_OPTION;
                }
                obj.autoFocusType = NONE;
                obj.editedOptions = first4;
                obj.onOptionViewLayout = onOptionViewLayout;
                obj.onStartEditing = onStartEditing;
                obj.onEndEditing = callback5;
                obj.onOptionValueChange = callback2;
                obj.onPressOption = callback6;
                obj.onPressAttachmentOption = onPressAttachmentOption;
                obj.channel = context.channel;
                obj.optionValidationResults = first2;
                obj.setFocusedOption = setFocusedOption;
                obj.command = command;
                obj.optionValues = optionValues;
                return tmp(tmp2, obj, option.name);
              }
              NONE = ref3.NONE;
            })
      };
      tmp82Result = tmp82(tmp81, obj9);
    }
    items20[1] = tmp82Result;
    let tmp82Result3 = !tmp72 && tmp74;
    if (tmp82Result3) {
      const obj10 = { style: tmp.noRequiredOptionsCalloutContainer, children: ref6(Text, obj11) };
      obj11 = { variant: "body-sm/medium", color: "text-strong", style: { textAlign: "center" }, children: intl.string(tmp3(tmp4[23]).t.HS2KtY) };
      Text = tmp3(tmp4[51]).Text;
      intl = tmp3(tmp4[23]).intl;
      tmp82Result3 = tmp82(tmp81, obj10);
    }
    items20[2] = tmp82Result3;
    let tmp82Result4 = !tmp74;
    if (tmp82Result4) {
      const obj12 = { style: tmp.noOptionCalloutContainer, children: ref6(Text2, obj13) };
      obj13 = { variant: "body-sm/medium", color: "text-muted", style: { textAlign: "center" }, children: intl2.string(tmp3(tmp4[23]).t.G8lEFB) };
      Text2 = tmp3(tmp4[51]).Text;
      intl2 = tmp3(tmp4[23]).intl;
      tmp82Result4 = tmp82(tmp81, obj12);
    }
    items20[3] = tmp82Result4;
    if (tmp79Result) {
      const obj14 = { children: items21 };
      const obj15 = { style: tmp.optionalOptionsSectionTitle, variant: "body-md/normal", color: "text-default", children: intl3.string(tmp3(tmp4[23]).t["5C107K"]) };
      const Text3 = tmp3(tmp4[51]).Text;
      intl3 = tmp3(tmp4[23]).intl;
      items21 = [ref6(Text3, obj15), , ];
      const obj16 = {
        style: tmp.optionalOptionsContainer,
        onLayout: callback8,
        collapsable: false,
        children: first1.map((option, index) => {
              let current;
              let current2;
              const items = [optionalOptionsChild.optionalOptionsChild, , ];
              let optionalOptionsFirstChild = 0 === index;
              const tmp = closure_20;
              const tmp2 = CommandOptionViewDefault;
              if (optionalOptionsFirstChild) {
                optionalOptionsFirstChild = tmp3.optionalOptionsFirstChild;
              }
              items[1] = optionalOptionsFirstChild;
              const tmp4 = index === first1.length - 1 && optionalOptionsChild.optionalOptionsLastChild;
              items[2] = tmp4;
              const obj = { style: items, option, autoFocusType: current.has(option.name) ? ref3.NONE : ref3.OPTIONAL_OPTION_ADDED, onDismiss, editedOptions: first4, onOptionViewLayout, onStartEditing, onEndEditing: callback5, onOptionValueChange: callback2, onPressOption: callback6, onPressAttachmentOption, channel: context.channel, optionValidationResults: first2, setFocusedOption, command, optionValues, isPreSelectedOption: current2.has(option.name) };
              current = ref10.current;
              current2 = ref10.current;
              return tmp(tmp2, obj, option.name);
            })
      };
      items21[1] = ref6(closure_7, obj16);
      const obj17 = { layout: tmp3(tmp4[53]).LayoutAnimation, collapsable: false, children: ref6(context(tmp4[54]), obj18) };
      const View = tmp32(tmp4[11]).View;
      obj18 = { style: tmp.optionalOptionList, options: tmp20, onSelectOption: callback21 };
      items21[2] = ref6(View, obj17);
      tmp79Result = tmp79(tmp80, obj14);
    }
    const obj19 = { children: items22 };
    items20[4] = tmp79Result;
    const obj20 = { size: sum1 };
    items20[5] = ref6(tmp3(tmp4[55]).Spacer, obj20);
    items22 = [ref7(BottomSheetScrollView, obj4), ];
    const obj21 = { enableSubmit: first3, onSubmit: callback4, animatedStyle, onHeightChange: tmp34, isSending: sharedValue, footerStickyInsetBottom: tmp50 };
    items22[1] = ref6(first1, obj21);
    tmp79Result2 = tmp79(tmp80, obj19);
    tmp76 = tmp82;
  } else {
    tmp76 = ref6;
    const obj22 = { command, onPressBack: callback };
    tmp79Result2 = ref6(closure_34, obj22);
  }
  const obj23 = { style: tmp.container, children: items23 };
  items23 = [tmp76(tmp3(tmp4[15]).AppLauncherCommandViewHeader, { command, onPressBack: callback, scrollOffsetY: sharedValue1, section }), tmp79Result2];
  return ref7(closure_7, obj23);
}
function AppLauncherCommandView(command) {
  let analyticsLocation;
  let closure_2;
  let context;
  let context2;
  let expandBottomSheet;
  let hasAccessResult;
  let hasPermission;
  let installOnDemand;
  let isImpersonating;
  let onCommandExecuted;
  let preSelectedCommand;
  let roleIds;
  let section;
  let sectionDescriptor;
  let sectionName;
  let userId;
  command = command.command;
  ({ context, section, preSelectedCommand, analyticsLocation, sectionName, expandBottomSheet } = command);
  let loading;
  let bottomSheetExpandReasonRef;
  let closure_5;
  let tmp = loading;
  ({ installOnDemand, onCommandExecuted } = command);
  let tmp2 = expandBottomSheet(loading[56])(null != context.channel, "channel should not be null");
  const tmp3 = expandBottomSheet(loading[57])();
  importAll = tmp3;
  const channel = context.channel;
  let command2;
  let descriptor;
  let closure_4;
  let tmp4 = importAll;
  let commandId;
  const useCommand = require("ApplicationCommandQueryApi").useCommand;
  const tmp5 = require("ApplicationCommandQueryApi");
  if (preSelectedCommand != null) {
    commandId = preSelectedCommand.commandId;
  }
  const command1 = useCommand({ channel, type: "channel" }, commandId);
  command2 = command1.command;
  const application = command1.application;
  const tmp8 = closure_11({ channel, type: "channel" }, true, true);
  const tmp9 = closure_12(true, true);
  let tmp10 = null;
  if (null != application) {
    const result = tmp9.result;
    descriptor = undefined;
    if (result != null) {
      if (result.sections[application.id] != null) {
        descriptor = tmp12.descriptor;
      }
    }
    if (descriptor == null) {
      const result2 = tmp8.result;
      let descriptor1;
      if (result2 != null) {
        descriptor1 = result2.sections[application.id].descriptor;
      }
      descriptor = descriptor1;
    }
    tmp10 = descriptor;
  }
  descriptor = tmp10;
  let tmp14 = null != application;
  if (tmp14) {
    const result3 = tmp8.result;
    let tmp15;
    if (result3 != null) {
      tmp15 = result3.sections[application.id];
    }
    tmp14 = null != tmp15;
  }
  let obj = react;
  closure_4 = react.useRef(false);
  const items = [command2, tmp10, analyticsLocation, sectionName];
  const effect = react.useEffect(() => {
    let obj2;
    let current = null == command2;
    const tmp = command2;
    if (!current) {
      current = null == descriptor;
    }
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const obj = { command: tmp, triggerSection: obj2.getCommandTriggerSection(descriptor), location: analyticsLocation, sectionName };
      const trackCommandSelected = command(loading[59]).trackCommandSelected;
      command(loading[59]);
      obj2 = command(loading[59]);
      trackCommandSelected(obj);
      ref.current = true;
    }
  }, items);
  const usePermissionContext = command(tmp[60]).usePermissionContext;
  const items1 = [];
  command(tmp[60]);
  items1[0] = command(tmp[35]).ApplicationCommandType.CHAT;
  const permissionContext = usePermissionContext(channel, items1);
  const tmp17 = command;
  if (null != tmp10) {
    let obj3;
    if (null != command2) {
      ({ context: context2, userId, roleIds, isImpersonating } = permissionContext);
      let guild_id;
      const hasBaseAccessPermissions = permissionContext.hasBaseAccessPermissions;
      if (context2 != null) {
        guild_id = context2.guild_id;
      }
      let allowedForUser = null;
      if (null != guild_id) {
        const tmp4Result = tmp4(tmp[61]);
        allowedForUser = tmp4Result.computeAllowedForUser(tmp10.permissions, context2.guild_id, userId, roleIds, isImpersonating);
      }
      let guild_id1;
      if (context2 != null) {
        guild_id1 = context2.guild_id;
      }
      let allowedForChannel = null;
      if (null != guild_id1) {
        const tmp4Result3 = tmp4(tmp[61]);
        allowedForChannel = tmp4Result3.computeAllowedForChannel(tmp10.permissions, context2, context2.guild_id);
      }
      let obj2 = { applicationAllowedForUser: allowedForUser, applicationAllowedForChannel: allowedForChannel, commandBotId: tmp10.botId, isGuildInstalled: tmp14 };
      obj3 = { command: command2, sectionDescriptor: tmp10, hasPermission: hasAccessResult === tmp4(tmp[61]).HasAccessResult.ALLOWED && hasBaseAccessPermissions, loading: tmp9.fetchState.fetching || tmp8.fetchState.fetching };
      const tmp4Result4 = tmp4(tmp[61]);
      hasAccessResult = tmp4Result4.hasAccess(command2, permissionContext, obj2);
      hasAccessResult === tmp4(tmp[61]).HasAccessResult.ALLOWED && hasBaseAccessPermissions;
    }
    loading = obj3.loading;
    let command3 = command;
    ({ sectionDescriptor, hasPermission } = obj3);
    if (command == null) {
      command3 = obj3.command;
    }
    const tmp17Result = tmp17(tmp[25]);
    bottomSheetExpandReasonRef = tmp17Result.useRequiredAppLauncherContext().bottomSheetExpandReasonRef;
    let tmp31 = null != command3;
    if (tmp31) {
      let options = command3.options;
      if (options == null) {
        options = [];
      }
      tmp31 = options.length > 0;
    }
    closure_5 = tmp31;
    const items2 = [command, tmp31, loading, tmp3, bottomSheetExpandReasonRef, expandBottomSheet];
    const effect1 = obj.useEffect(() => {
      let tmp = closure_2;
      if (tmp) {
        let tmp2 = closure_5;
        if (!tmp2) {
          tmp2 = !loading && null == command;
          const tmp4 = !loading && null == command;
        }
        tmp = tmp2;
      }
      if (tmp) {
        bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.COMMAND_VIEW;
        if (expandBottomSheet != null) {
          expandBottomSheet();
        }
      }
    }, items2);
    const obj4 = { command: command3, context, section, preSelectedCommand, loading, hasPermissions: null != command || hasPermission, installOnDemand, sectionName, analyticsLocation, onCommandExecuted };
    const tmp33 = closure_20;
    const tmp34 = AppLauncherCommandViewInner;
    if (section == null) {
      section = sectionDescriptor;
    }
    if (preSelectedCommand == null) {
      preSelectedCommand = null;
    }
    return tmp33(tmp34, obj4);
  }
  obj3 = { command: null, sectionDescriptor: null, hasPermission: false, loading: tmp9.fetchState.fetching || tmp8.fetchState.fetching };
}
function LoadingState() {
  const obj = { style: { flex: 1, justifyContent: "center", alignItems: "center" }, children: closure_20(metroImportAll, { size: "large" }) };
  return closure_20(metroImportDefault, obj);
}
function NotFoundState(onPressBack) {
  let BaseTextButton;
  let EmptyState;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj4;
  onPressBack = onPressBack.onPressBack;
  const tmp = closure_24();
  const obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NOT_FOUND);
  const obj2 = { style: tmp.emptyStateContainer, children: closure_20(EmptyState, obj3) };
  obj3 = { style: tmp.emptyState, lightSource: AssetRegistryDefault3, darkSource: AssetRegistryDefault4, title: intl.string(intl4.t["pX/qb9"]), body: intl2.string(intl4.t.exOQVY), children: closure_20(BaseTextButton, obj4) };
  EmptyState = native.EmptyState;
  intl = intl4.intl;
  intl2 = intl4.intl;
  obj4 = { shrink: true, size: "sm", variant: "secondary", onPress: onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper, text: intl3.string(intl4.t["/g10LC"]) };
  BaseTextButton = BaseTextButton2.BaseTextButton;
  intl3 = intl4.intl;
  return closure_20(metroImportDefault, obj2);
}
function NoPermsState(command) {
  let BaseTextButton;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj7;
  command = command.command;
  const onPressBack = command.onPressBack;
  const tmp = closure_24();
  const obj = AppLauncherNativeUtils;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.COMMAND_NO_PERMISSIONS);
  const obj3 = { style: tmp.commandNameContainer, children: items };
  items = [, ];
  const obj2 = { style: tmp.emptyStateContainer, children: items1 };
  const obj4 = { variant: "heading-lg/semibold", color: "text-default", children: command.displayName };
  items[0] = closure_20(Text_Text.Text, obj4);
  const obj5 = { variant: "heading-xs/medium", color: "text-default", children: command.displayDescription };
  items[1] = closure_20(Text_Text.Text, obj5);
  items1 = [closure_21(metroImportDefault, obj3), ];
  const obj6 = { style: tmp.emptyState, lightSource: AssetRegistryDefault, darkSource: AssetRegistryDefault2, title: intl.string(intl4.t.TzufcR), body: intl2.string(intl4.t["I/O+A1"]), children: closure_20(BaseTextButton, obj7) };
  const EmptyState = native.EmptyState;
  intl = intl4.intl;
  intl2 = intl4.intl;
  obj7 = { shrink: true, size: "sm", variant: "secondary", onPress: onPressBack, pillStyle: tmp.failureStateButtonPill, style: tmp.failureStateButtonWrapper, text: intl3.string(intl4.t["/g10LC"]) };
  BaseTextButton = BaseTextButton2.BaseTextButton;
  intl3 = intl4.intl;
  items1[1] = closure_20(EmptyState, obj6);
  return closure_21(metroImportDefault, obj2);
}
let react = react_mod;
({ View: metroImportDefault, ActivityIndicator: metroImportAll, ScrollView: c9 } = react_native);
({ useContextIndexState: unpackModuleId, useUserIndexState: closure_12 } = ApplicationCommandIndexStore);
({ AppLauncherOptionAutoFocusType: closure_14, useAppLauncherNavigation: closure_15, DEFAULT_CONTENT_PADDING } = AppLauncherNativeConstants);
({ AnalyticEvents: closure_16, NOOP: closure_17, VerticalGradient: closure_18 } = Constants);
const MediaKeyboardTarget = MediaKeyboardConstants.MediaKeyboardTarget;
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = Fragment);
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
let createStyles = createStyles_mod;
let obj = { container: obj2, optionsContainer: obj3, requiredOptionsContainer: { marginTop: 24, gap: 24 }, optionalOptionsContainer: {}, optionalOptionsChild: { marginBottom: 24 }, optionalOptionsFirstChild: { marginTop: 12 }, optionalOptionsLastChild: { marginBottom: 12 }, footerContainer: { position: "absolute", left: 0, bottom: 0, right: 0, paddingHorizontal: DEFAULT_CONTENT_PADDING }, submitButton: { flex: 1, overflow: "hidden" }, optionalOptionsSectionTitle: { marginTop: 36 }, optionalOptionList: { marginTop: 12 }, noRequiredOptionsCalloutContainer: obj4, noOptionCalloutContainer: obj5, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start", paddingTop: 30 }, emptyStateContainer: obj6, failureStateButtonWrapper: { marginTop: 24, alignSelf: "center" }, failureStateButtonPill: obj7, commandNameContainer: { alignItems: "center", justifyContent: "center", textAlign: "center" }, linearGradient: obj8 };
obj2 = { height: "100%", backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: AppLauncherCommandViewHeader.EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingBottom: DEFAULT_CONTENT_PADDING, backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj4 = { paddingVertical: 16, paddingHorizontal: 12, backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, marginTop: 24, borderRadius: nativeDefault.radii.lg };
obj5 = { padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, borderRadius: nativeDefault.radii.lg };
obj6 = { paddingTop: AppLauncherCommandViewHeader.EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT + nativeDefault.space.PX_4, flex: 1 };
obj7 = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: 12, paddingVertical: 8 };
obj8 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
let closure_24 = createStyles(obj);
let closure_25 = { code: "(function AppLauncherCommandViewScreenTsx1(){let[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;return scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_LIGHT);})" };
let closure_26 = { code: "(function AppLauncherCommandViewScreenTsx2(){let[shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,_worklet_323925726197_init_data,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,isSending]=this.__closure;if(shouldReduceMotion)return{};if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,'respect-motion-settings',function AppLauncherCommandViewScreenTsx1Factory([_worklet_323925726197_init_data,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]){const AppLauncherCommandViewScreenTsx1=function(){return scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_LIGHT);};AppLauncherCommandViewScreenTsx1.__closure=[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes];AppLauncherCommandViewScreenTsx1.__workletHash=323925726197;AppLauncherCommandViewScreenTsx1.__initData=_worklet_323925726197_init_data;return AppLauncherCommandViewScreenTsx1;}([_worklet_323925726197_init_data,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes])))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};})" };
let closure_27 = { code: "(function AppLauncherCommandViewScreenTsx3(){let[footerStickyInsetBottom]=this.__closure;return{bottom:-footerStickyInsetBottom.get()};})" };
let closure_29 = { code: "(function AppLauncherCommandViewScreenTsx4(){let[bottomSheetPosition,screenHeight,maxHeight,animatedFooterStickyInsetBottom]=this.__closure;const animatedSheetOffset=bottomSheetPosition.get()-screenHeight+maxHeight;return{transform:[{translateY:-animatedSheetOffset-animatedFooterStickyInsetBottom.get()}]};})" };
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx");

export default function AppLauncherCommandViewScreen(route) {
  const context = route.route.params.context;
  let tmp9 = null;
  if (null != context) {
    const obj = { command: tmp, context, section: tmp2, preSelectedCommand: tmp3, installOnDemand: tmp5, sectionName: tmp6, analyticsLocation: tmp4, expandBottomSheet: tmp7, onCommandExecuted: tmp8 };
    tmp9 = closure_20(AppLauncherCommandView, obj);
  }
  return tmp9;
};
