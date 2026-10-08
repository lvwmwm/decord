// Module ID: 13444
// Function ID: 13445
// Name: VoiceChannelHeader
// Dependencies: [19, 17, 2062, 2086, 4707, 1085, 21, 5090, 587, 558, 576, 13445, 13446, 5086, 13447, 504, 10806, 5417, 8658, 1126, 11340, 6785, 13449, 10912, 1200, 10311, 6189, 2]

// Module 13444 (VoiceChannelHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import useChannelNameDefault from "useChannelName" /* 5417 */;
import Pressables from "Pressables" /* 6189 */;
import isRoleRequiredDefault from "isRoleRequired" /* 6785 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8658 */;
import AssetRegistryDefault from "AssetRegistry" /* 10311 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 10806 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11340 */;
import CallStateHooks from "CallStateHooks" /* 13445 */;
import OngoingCallStatusLabelDefault from "OngoingCallStatusLabel" /* 13446 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CallStateHooksDefault = CallStateHooks;
let applicationId, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp2;
let unpackModuleId;
const OngoingCallTimerDefault = tmp2(13447);
const View = react_native.View;
({ Permissions: metroImportDefault, AnalyticsPages: metroImportAll, InstantInviteSources: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 16, alignItems: "center" }, middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 }, icons: obj2, subtitle: obj3, subtitleWrapper: { flexDirection: "row" } };
obj2 = { flexDirection: "row", tintColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.WHITE };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PrivateChannelSubtitle(channel) {
  let items;
  const obj = react2;
  const cResult = obj.c(16);
  channel = channel.channel;
  const tmp4 = closure_12();
  const state = CallStateHooksDefault(channel.id).state;
  if (cResult[0] === channel) {
    if (cResult[1] === tmp4.subtitle) {
      let tmp6;
      if (cResult[2] === state) {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4.subtitle) {
        let tmp8;
        if (cResult[5] === state) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === channel.id) {
          if (cResult[8] === tmp4.subtitle) {
            let tmp11;
            if (cResult[9] === state) {
              tmp11 = cResult[10];
            }
            if (cResult[11] === tmp4.subtitleWrapper) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp8) {
                  let tmp14;
                  if (cResult[14] === tmp11) {
                    tmp14 = cResult[15];
                  }
                  return tmp14;
                }
              }
            }
            const obj2 = { style: tmp4.subtitleWrapper, children: items };
            items = [tmp6, tmp8, tmp11];
            const tmp17 = unpackModuleId(View, obj2);
            cResult[11] = tmp4.subtitleWrapper;
            cResult[12] = tmp6;
            cResult[13] = tmp8;
            cResult[14] = tmp11;
            cResult[15] = tmp17;
            tmp14 = tmp17;
          }
        }
        let tmp12 = state === tmp(13445).CallStates.CONNECTED;
        if (tmp12) {
          const obj3 = { channelId: channel.id, style: tmp4.subtitle };
          tmp12 = authStore(tmp5(13447), obj3);
        }
        cResult[7] = channel.id;
        cResult[8] = tmp4.subtitle;
        cResult[9] = state;
        cResult[10] = tmp12;
        tmp11 = tmp12;
      }
      let tmp9 = state === tmp(13445).CallStates.CONNECTED;
      if (tmp9) {
        const obj4 = { style: tmp4.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
        tmp9 = authStore(tmp(5086).Text, obj4);
      }
      cResult[4] = tmp4.subtitle;
      cResult[5] = state;
      cResult[6] = tmp9;
      tmp8 = tmp9;
    }
  }
  const obj5 = { useAllAloneText: false, channel, voiceState: state, style: tmp4.subtitle };
  const tmp7 = authStore(OngoingCallStatusLabelDefault, obj5);
  cResult[0] = channel;
  cResult[1] = tmp4.subtitle;
  cResult[2] = state;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : (function PrivateChannelSubtitle(channel) {
  let items;
  channel = channel.channel;
  const tmp = closure_12();
  const state = CallStateHooksDefault(channel.id).state;
  const obj = { style: tmp.subtitleWrapper, children: items };
  items = [, , ];
  const obj2 = { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle };
  items[0] = authStore(OngoingCallStatusLabelDefault, obj2);
  let tmp6Result = state === CallStateHooks.CallStates.CONNECTED;
  const tmp4 = unpackModuleId;
  const tmp5 = View;
  if (tmp6Result) {
    const obj3 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
    tmp6Result = tmp6(tmp7(5086).Text, obj3);
  }
  items[1] = tmp6Result;
  let tmp6Result2 = state === tmp7(13445).CallStates.CONNECTED;
  if (tmp6Result2) {
    const obj4 = { channelId: channel.id, style: tmp.subtitle };
    tmp6Result2 = tmp6(OngoingCallTimerDefault, obj4);
  }
  items[2] = tmp6Result2;
  return tmp4(tmp5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelHeader(channel) {
  let first;
  let items2;
  let stateFromStores1;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp7;
  const tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(39);
  channel = channel.channel;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function v() {
      return GuildStore.getGuild(channel.getGuildId());
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmp10 = stateFromStores1(10806)(channel);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmbeddedActivitiesStore];
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== channel.id) {
    class A {
      constructor() {
        return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
      }
    }
    cResult[4] = channel.id;
    cResult[5] = A;
    tmp13 = A;
  } else {
    class A {
      constructor() {
        return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
      }
    }
  }
  if (cResult[6] !== channel) {
    class A {
      constructor() {
        return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
      }
    }
    tmp15[0] = channel;
    cResult[6] = channel;
    cResult[7] = tmp15;
    tmp14 = tmp15;
  } else {
    class A {
      constructor() {
        return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
      }
    }
  }
  const tmpResult2 = tmp(504);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp13, tmp14);
  let tmp17 = tmp9(5417)(channel);
  if (stateFromStores != null) {
    class A {
      constructor() {
        return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
      }
    }
  }
  if (cResult[8] === channel) {
    class A {
      constructor() {
        return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
      }
    }
    const tmp19 = cResult[9];
    if (stateFromStores1 != null) {
      class A {
        constructor() {
          return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
        }
      }
    }
    if (tmp19 === tmp20) {
      class A {
        constructor() {
          return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
        }
      }
      if (channel.isPrivate()) {
        class A {
          constructor() {
            return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
        if (cResult[14] !== channel) {
          class A {
            constructor() {
              return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
            }
          }
          const obj2 = { channel };
          const tmp26 = closure_10(closure_13, obj2);
          cResult[14] = channel;
          cResult[15] = tmp26;
        } else {
          class A {
            constructor() {
              return EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id);
            }
          }
        }
        if (cResult[16] !== channel.id) {
          class O {
            constructor() {
              return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
            }
          }
          cResult[16] = channel.id;
          cResult[17] = O;
        } else {
          class O {
            constructor() {
              return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
            }
          }
        }
        tmp17 = tmp23;
      }
      if (stateFromStores1(6785)(channel)) {
        class O {
          constructor() {
            return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
          }
        }
      } else {
        class O {
          constructor() {
            return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
          }
        }
      }
      if (cResult[18] === tmp4.icons) {
        class O {
          constructor() {
            return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
          }
        }
        if (cResult[21] !== tmp17) {
          let tmp33;
          class O {
            constructor() {
              return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
            }
          }
          if (typeof tmp17 === "string") {
            class O {
              constructor() {
                return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
              }
            }
            const obj3 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-md/semibold", color: "text-overlay-light", children: tmp17 };
            tmp33 = closure_10(tmp(5086).Text, obj3);
          }
          cResult[21] = tmp17;
          cResult[22] = tmp33;
        } else {
          class O {
            constructor() {
              return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
            }
          }
        }
        if (cResult[23] !== tmp18) {
          let tmp35;
          class O {
            constructor() {
              return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
            }
          }
          if (typeof tmp18 === "string") {
            class O {
              constructor() {
                return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
              }
            }
            const obj4 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-xs/medium", color: "text-overlay-light", children: tmp18 };
            tmp35 = closure_10(tmp(5086).Text, obj4);
          }
          cResult[23] = tmp18;
          cResult[24] = tmp35;
        } else {
          class O {
            constructor() {
              return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
            }
          }
        }
        if (cResult[25] === tmp4.middle) {
          class O {
            constructor() {
              return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
            }
          }
        }
        const obj5 = { style: tmp4.middle, children: items2 };
        items2 = [tmp32, tmp34];
        cResult[25] = tmp4.middle;
        cResult[26] = tmp34;
        cResult[27] = tmp32;
        cResult[28] = closure_11(View, obj5);
        const tmp39 = closure_11(View, obj5);
      }
      const obj6 = { size: tmp(1200).Icon.Sizes.MEDIUM, source: tmp28, disableColor: true, style: tmp4.icons };
      const Icon = tmp(1200).Icon;
      cResult[18] = tmp4.icons;
      cResult[19] = tmp28;
      cResult[20] = closure_10(Icon, obj6);
      const tmp31 = closure_10(Icon, obj6);
    }
  }
  if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel)) {
    class O {
      constructor() {
        return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
      }
    }
    if (!tmp10) {
      class O {
        constructor() {
          return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
        }
      }
    }
  }
  cResult[8] = channel;
  if (stateFromStores1 != null) {
    class O {
      constructor() {
        return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
      }
    }
  }
  cResult[9] = undefined;
  cResult[10] = tmp10;
  cResult[11] = null;
}) : (function VoiceChannelHeader(channel) {
  let items3;
  let items4;
  let tmp14Result4;
  let tmp5Result;
  channel = channel.channel;
  const tmp = closure_12();
  let tmp2 = channel;
  let obj = channel(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  const items1 = [EmbeddedActivitiesStore];
  const items2 = [channel];
  const tmp6 = useIsVoiceChannelFullDefault(channel);
  const obj2 = channel(504);
  importDefault = obj2.useStateFromStores(items1, () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id), items2);
  let name;
  const tmp7 = useChannelNameDefault(channel);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  let A = null;
  if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel)) {
    A = null;
    if (!tmp6) {
      A = () => {
        const obj = { source: constants.VOICE_CHANNEL, targetApplicationId: applicationId };
        applicationId = undefined;
        const showInstantInviteActionSheet = instant_invite_InstantInviteUtils.showInstantInviteActionSheet;
        instant_invite_InstantInviteUtils;
        const tmp2 = channel;
        if (applicationId != null) {
          applicationId = applicationId.applicationId;
        }
        return showInstantInviteActionSheet(tmp2, obj);
      };
    }
  }
  let formatToPlainStringResult = tmp7;
  if (channel.isPrivate()) {
    const intl = tmp2(1126).intl;
    const obj3 = { count: channel.recipients.length + 1 };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t["8bn8Br"], obj3);
    const obj4 = { channel };
    name = closure_10(closure_13, obj4);
    class A {
      constructor() {
        return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
      }
    }
  }
  const obj5 = { style: tmp.container, children: items3 };
  const obj6 = { size: tmp2(1200).Icon.Sizes.MEDIUM, source: tmp5Result, disableColor: true, style: tmp.icons };
  const Icon = tmp2(1200).Icon;
  if (isRoleRequiredDefault(channel)) {
    tmp5Result = tmp5(13449);
  } else {
    tmp5Result = tmp5(10912);
  }
  items3 = [closure_10(Icon, obj6), , ];
  let tmp14Result = formatToPlainStringResult;
  const obj7 = { style: tmp.middle, children: items4 };
  if (typeof formatToPlainStringResult === "string") {
    const obj8 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-md/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    tmp14Result = tmp14(tmp2(5086).Text, obj8);
  }
  items4 = [tmp14Result, ];
  let tmp14Result3 = name;
  if (typeof name === "string") {
    const obj9 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-xs/medium", color: "text-overlay-light", children: name };
    tmp14Result3 = tmp14(tmp2(5086).Text, obj9);
  }
  items4[1] = tmp14Result3;
  items3[1] = closure_11(View, obj7);
  const obj10 = { style: tmp.icons, children: tmp14Result4 };
  tmp14Result4 = null != A;
  if (tmp14Result4) {
    const obj11 = { onPress: A };
    tmp14Result4 = tmp14(closure_14, obj11);
  }
  items3[2] = closure_10(View, obj10);
  return closure_11(View, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddMemberButton(onPress) {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  onPress = onPress.onPress;
  const tmp4 = closure_12();
  const icons = tmp4.icons;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t["6Qgrev"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onPress) {
    let tmp7;
    if (cResult[2] === tmp4.icons) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const obj2 = { onPress, iconSource: AssetRegistryDefault, iconStyle: icons, accessibilityLabel: first };
  const tmp8 = authStore(closure_15, obj2);
  cResult[1] = onPress;
  cResult[2] = tmp4.icons;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function AddMemberButton(onPress) {
  let intl;
  let tmp;
  const obj = { onPress: onPress.onPress, iconSource: AssetRegistryDefault, iconStyle: tmp.icons, accessibilityLabel: intl.string(intl2.t["6Qgrev"]) };
  tmp = closure_12();
  intl = intl2.intl;
  return authStore(closure_15, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function IconButton(arg0) {
  let accessibilityLabel;
  let iconSource;
  let iconStyle;
  let onPress;
  let style;
  const obj = react2;
  const cResult = obj.c(8);
  ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = arg0);
  if (cResult[0] === iconSource) {
    let tmp4;
    if (cResult[1] === iconStyle) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === accessibilityLabel) {
      if (cResult[4] === onPress) {
        if (cResult[5] === style) {
          let tmp6;
          if (cResult[6] === tmp4) {
            tmp6 = cResult[7];
          }
          return tmp6;
        }
      }
    }
    const obj2 = { accessibilityRole: "button", accessibilityLabel, onPress, style, children: tmp4 };
    const tmp8 = authStore(Pressables.PressableOpacity, obj2);
    cResult[3] = accessibilityLabel;
    cResult[4] = onPress;
    cResult[5] = style;
    cResult[6] = tmp4;
    cResult[7] = tmp8;
    tmp6 = tmp8;
  }
  const tmp5 = authStore(native.Icon, { source: iconSource, style: iconStyle });
  cResult[0] = iconSource;
  cResult[1] = iconStyle;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function IconButton(arg0) {
  let accessibilityLabel;
  let iconSource;
  let iconStyle;
  let onPress;
  let style;
  ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = arg0);
  const obj = { accessibilityRole: "button", accessibilityLabel, onPress, style, children: authStore(native.Icon, { source: iconSource, style: iconStyle }) };
  const PressableOpacity = Pressables.PressableOpacity;
  return authStore(PressableOpacity, obj);
});
let closure_15 = tmp7;
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default tmp6;
export const VoiceChannelHeader = tmp6;
export const IconButton = tmp7;
