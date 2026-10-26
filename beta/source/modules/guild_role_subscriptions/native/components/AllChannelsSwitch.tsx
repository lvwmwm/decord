// Module ID: 19307
// Function ID: 19308
// Name: AllChannelsSwitch
// Dependencies: [19, 17, 16585, 21, 4971, 587, 558, 576, 5039, 1202, 5234, 9041, 1128, 19308, 19309, 2]

// Module 19307 (AllChannelsSwitch)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import react_native2 from "react-native" /* 5039 */;
import Text_Text from "Text/Text" /* 5234 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9041 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 16585 */;
import AssetRegistryDefault from "AssetRegistry" /* 19308 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19309 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, row: { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 }, rowLabel: { flexShrink: 1, marginHorizontal: 16 }, rowIndicator: { marginStart: "auto" }, separator: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function Row(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let icon;
  let items;
  let label;
  let onPress;
  let selected;
  const obj = react2;
  const cResult = obj.c(22);
  ({ icon, label, onPress, selected, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === (undefined !== disabled && disabled)) {
    let tmp6;
    let tmp9;
    if (cResult[1] === selected) {
      tmp6 = cResult[2];
    }
    const tmpResult = react_native2;
    const radioA11yNative = tmpResult.useRadioA11yNative(tmp6);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    if (cResult[3] !== icon) {
      const obj2 = { size: native.Icon.Sizes.MEDIUM, source: icon };
      const Icon = tmp(1202).Icon;
      const tmp11 = hasOwnProperty(Icon, obj2);
      cResult[3] = icon;
      cResult[4] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    let str = "text-md/medium";
    if (selected) {
      str = "text-md/semibold";
    }
    let str2 = "text-subtle";
    if (selected) {
      str2 = "mobile-text-heading-primary";
    }
    if (cResult[5] === label) {
      if (cResult[6] === tmp5.rowLabel) {
        if (cResult[7] === str) {
          let tmp12;
          if (cResult[8] === str2) {
            tmp12 = cResult[9];
          }
          if (cResult[10] === selected) {
            let tmp15;
            if (cResult[11] === tmp5.rowIndicator) {
              tmp15 = cResult[12];
            }
            if (cResult[13] === accessibilityRole) {
              if (cResult[14] === accessibilityState) {
                if (cResult[15] === onPress) {
                  if (cResult[16] === tmp5.row) {
                    if (cResult[17] === (selected || undefined !== disabled && disabled)) {
                      if (cResult[18] === tmp9) {
                        if (cResult[19] === tmp12) {
                          let tmp18;
                          if (cResult[20] === tmp15) {
                            tmp18 = cResult[21];
                          }
                          return tmp18;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj3 = { style: tmp5.row, accessibilityRole, accessibilityState, disabled: selected || undefined !== disabled && disabled, onPress, children: items };
            items = [tmp9, tmp12, tmp15];
            const tmp21 = metroRequire(TouchableHitBoxDefault, obj3);
            cResult[13] = accessibilityRole;
            cResult[14] = accessibilityState;
            cResult[15] = onPress;
            cResult[16] = tmp5.row;
            cResult[17] = selected || undefined !== disabled && disabled;
            cResult[18] = tmp9;
            cResult[19] = tmp12;
            cResult[20] = tmp15;
            cResult[21] = tmp21;
            tmp18 = tmp21;
          }
          const obj4 = { style: tmp5.rowIndicator, active: selected };
          const tmp17 = hasOwnProperty(native.RadioIndicator, obj4);
          cResult[10] = selected;
          cResult[11] = tmp5.rowIndicator;
          cResult[12] = tmp17;
          tmp15 = tmp17;
        }
      }
    }
    const obj5 = { style: tmp5.rowLabel, variant: str, color: str2, lineClamp: 1, children: label };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[5] = label;
    cResult[6] = tmp5.rowLabel;
    cResult[7] = str;
    cResult[8] = str2;
    cResult[9] = tmp14;
    tmp12 = tmp14;
  }
  const obj6 = { selected, disabled: undefined !== disabled && disabled };
  cResult[0] = undefined !== disabled && disabled;
  cResult[1] = selected;
  cResult[2] = obj6;
  tmp6 = obj6;
}) : (function Row(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let icon;
  let items;
  let label;
  let onPress;
  let selected;
  let str;
  let str2;
  let tmp7;
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const obj = react_native2;
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { style: tmp.row, accessibilityRole, accessibilityState, disabled: tmp7, onPress, children: items };
  tmp7 = selected;
  const tmp5 = metroRequire;
  const tmp6 = TouchableHitBoxDefault;
  if (!selected) {
    tmp7 = disabled;
  }
  const obj3 = { size: native.Icon.Sizes.MEDIUM, source: icon };
  const Icon = tmp2(1202).Icon;
  items = [hasOwnProperty(Icon, obj3), , ];
  const obj4 = { style: tmp.rowLabel, variant: str, color: str2, lineClamp: 1, children: label };
  str = "text-md/medium";
  const Text = tmp2(5234).Text;
  if (selected) {
    str = "text-md/semibold";
  }
  str2 = "text-subtle";
  if (selected) {
    str2 = "mobile-text-heading-primary";
  }
  items[1] = hasOwnProperty(Text, obj4);
  const obj5 = { style: tmp.rowIndicator, active: selected };
  items[2] = hasOwnProperty(native.RadioIndicator, obj5);
  return tmp5(tmp6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function AllChannelsSwitch(arg0) {
  let channelAccessFormat;
  let disabled;
  let setChannelAccessFormat;
  let style;
  const obj = setChannelAccessFormat(576);
  const cResult = obj.c(27);
  ({ channelAccessFormat, setChannelAccessFormat } = arg0);
  ({ style, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === style) {
    let tmp9;
    let tmp12;
    if (cResult[3] !== (undefined !== disabled && disabled)) {
      const obj2 = { disabled: undefined !== disabled && disabled };
      cResult[3] = undefined !== disabled && disabled;
      cResult[4] = obj2;
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(setChannelAccessFormat(1128).t["vs2T+B"]);
      cResult[5] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[5];
    }
    const SOME_CHANNELS_ACCESS = AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
    const tmp11 = AllChannelAccessOptions;
    if (cResult[6] !== setChannelAccessFormat) {
      const fn = function v() {
        return setChannelAccessFormat(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
      };
      cResult[6] = setChannelAccessFormat;
      cResult[7] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === (undefined !== disabled && disabled)) {
      if (cResult[9] === channelAccessFormat === SOME_CHANNELS_ACCESS) {
        let tmp23;
        if (cResult[12] !== tmp5.separator) {
          const obj3 = { style: tmp5.separator };
          cResult[12] = tmp5.separator;
          cResult[13] = closure_5(View, obj3);
          const tmp22 = closure_5(View, obj3);
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1128).intl;
          const stringResult1 = intl2.string(setChannelAccessFormat(1128).t.l4Tr7X);
          cResult[14] = stringResult1;
          tmp23 = stringResult1;
        } else {
          tmp23 = cResult[14];
        }
        const ALL_CHANNELS_ACCESS = tmp11.ALL_CHANNELS_ACCESS;
        if (cResult[15] !== setChannelAccessFormat) {
          class I {
            constructor() {
              return setChannelAccessFormat(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
            }
          }
          cResult[15] = setChannelAccessFormat;
          cResult[16] = I;
        } else {
          class I {
            constructor() {
              return setChannelAccessFormat(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
            }
          }
        }
        if (cResult[17] === (undefined !== disabled && disabled)) {
          class I {
            constructor() {
              return setChannelAccessFormat(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
            }
          }
        }
        const obj4 = { icon: AssetRegistryDefault2, label: tmp23, selected: channelAccessFormat === ALL_CHANNELS_ACCESS, onPress: tmp25, disabled: undefined !== disabled && disabled };
        cResult[17] = undefined !== disabled && disabled;
        cResult[18] = channelAccessFormat === ALL_CHANNELS_ACCESS;
        cResult[19] = tmp25;
        cResult[20] = closure_5(closure_8, obj4);
        const tmp31 = closure_5(closure_8, obj4);
      }
    }
    const obj5 = { icon: AssetRegistryDefault, label: tmp9, selected: channelAccessFormat === SOME_CHANNELS_ACCESS, onPress: tmp12, disabled: undefined !== disabled && disabled };
    cResult[8] = undefined !== disabled && disabled;
    cResult[9] = channelAccessFormat === SOME_CHANNELS_ACCESS;
    cResult[10] = tmp12;
    cResult[11] = closure_5(closure_8, obj5);
    const tmp18 = closure_5(closure_8, obj5);
  }
  const items = [tmp5.container, style];
  cResult[0] = style;
  cResult[1] = tmp5.container;
  cResult[2] = items;
}) : (function AllChannelsSwitch(style) {
  let channelAccessFormat;
  let disabled;
  let intl;
  let intl2;
  let items;
  let items1;
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  style = style.style;
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const obj = { style: items, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: items1 };
  items = [tmp.container, style];
  const obj2 = {
    icon: AssetRegistryDefault,
    label: intl.string(intl3.t["vs2T+B"]),
    selected: channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS,
    onPress() {
      return require(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
    },
    disabled
  };
  intl = intl3.intl;
  items1 = [closure_5(closure_8, obj2), , ];
  const obj3 = { style: tmp.separator };
  items1[1] = closure_5(View, obj3);
  const obj4 = {
    icon: AssetRegistryDefault2,
    label: intl2.string(intl3.t.l4Tr7X),
    selected: channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
    onPress() {
      return require(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
    },
    disabled
  };
  intl2 = intl3.intl;
  items1[2] = closure_5(closure_8, obj4);
  return closure_6(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default tmp5;
