// Module ID: 8737
// Function ID: 8738
// Name: InstantInviteRow
// Dependencies: [19, 17, 2063, 8659, 2086, 8673, 1389, 8738, 7418, 21, 5090, 587, 558, 576, 504, 5417, 8660, 8739, 6189, 1200, 8740, 4922, 1126, 1414, 2030, 5086, 8743, 6184, 2]

// Module 8737 (InstantInviteRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 7418 */;
import InstantInviteUtils from "InstantInviteUtils" /* 8660 */;
import InviteQueue from "InviteQueue" /* 8739 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 8659 */;
import GuildStore from "GuildStore" /* 2086 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 8673 */;
import UserStore from "UserStore" /* 1389 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 8738 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const InviteQueueDefault = InviteQueue;

let c10;
let c9;
let size;
const View = react_native.View;
({ setSendState: c9, useInstantInviteSendStates: c10 } = InstantInviteSendStateStore);
const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
let obj = { acronym: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
let closure_13 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function InstantInviteRow(row) {
  let end;
  let onPressAvatar;
  let source;
  let start;
  let tmp5;
  let tmp6;
  let tmp = row;
  let tmp2 = onPressAvatar;
  let obj = row(onPressAvatar[13]);
  const cResult = obj.c(57);
  row = row.row;
  const code = row.code;
  onPressAvatar = row.onPressAvatar;
  const onInviteSent = row.onInviteSent;
  ({ start, end, source } = row);
  const tmp4 = closure_13();
  const id = row.item.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [id];
    class I {
      constructor() {
        return id.isSubmitting();
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp5 = items;
    tmp6 = I;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [id];
    class U {
      constructor() {
        return id.getError();
      }
    }
    cResult[2] = items1;
    cResult[3] = U;
  }
  tmp(tmp2[14]);
  if (cResult[4] === code) {
    let tmp13;
    let tmp16;
    let tmp18;
    if (cResult[5] === id) {
      tmp13 = cResult[6];
    }
    closure_10(tmp13);
    class U {
      constructor() {
        return id.getError();
      }
    }
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [source];
      class U {
        constructor() {
          return id.getError();
        }
      }
      cResult[7] = items2;
      tmp16 = items2;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== id) {
      class G {
        constructor() {
          return ChannelStore.getChannel(id);
        }
      }
      cResult[8] = id;
      class U {
        constructor() {
          return id.getError();
        }
      }
      cResult[9] = G;
      tmp18 = G;
    } else {
      class G {
        constructor() {
          return ChannelStore.getChannel(id);
        }
      }
    }
    const tmpResult4 = tmp(tmp2[14]);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp16, tmp18);
    code(tmp2[15])(stateFromStores1);
    if (null == code) {
      class G {
        constructor() {
          return ChannelStore.getChannel(id);
        }
      }
    } else {
      class G {
        constructor() {
          return ChannelStore.getChannel(id);
        }
      }
      function handlePress() {
        let obj3;
        let obj4;
        let obj6;
        const tmp = code;
        if (null != code) {
          function handleSendState(arg0) {
            if (null != code) {
              closure_2_9(tmp, id, arg0 ? InviteSendStates.SENT : InviteSendStates.ERROR);
              if (arg0) {
                if (onInviteSent != null) {
                  onInviteSent();
                }
              }
            }
          }
          React4(tmp, id, InviteSendStates.SENDING);
          const type = row.type;
          if (InstantInviteUtils.RowTypes.FRIEND !== type) {
            if (InstantInviteUtils.RowTypes.DM !== type) {
              if (InstantInviteUtils.RowTypes.GROUP_DM === type) {
                if (null != tmp) {
                  const obj2 = { inviteKey: tmp, type: InviteQueue.InvitePropertiesType.GROUP_DM, channel: ChannelStore.getChannel(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj3 };
                  const enqueue2 = InviteQueueDefault.enqueue;
                  InviteQueueDefault;
                  obj3 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source };
                  enqueue2(obj2, handleSendState);
                }
              } else if (InstantInviteUtils.RowTypes.CHANNEL === type) {
                if (null != tmp) {
                  const obj = { inviteKey: tmp, type: InviteQueue.InvitePropertiesType.CHANNEL, channel: ChannelStore.getChannel(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj4 };
                  const enqueue = InviteQueueDefault.enqueue;
                  InviteQueueDefault;
                  obj4 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source };
                  enqueue(obj, handleSendState);
                }
              }
            }
          }
          if (null != tmp) {
            const obj5 = { inviteKey: tmp, type: InviteQueue.InvitePropertiesType.USER, user: UserStore.getUser(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj6 };
            const enqueue3 = InviteQueueDefault.enqueue;
            InviteQueueDefault;
            obj6 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source };
            enqueue3(obj5, handleSendState);
          }
        }
      }
      class U {
        constructor() {
          return id.getError();
        }
      }
      cResult[11] = id;
      cResult[12] = onInviteSent;
      cResult[13] = row;
      cResult[14] = source;
      cResult[15] = handlePress;
    }
  }
  const fn = function k(arg0) {
    let tmp2 = null;
    if (null != code) {
      let tmp5;
      if (arg0[tmp] != null) {
        tmp5 = tmp4[id];
      }
      tmp2 = tmp5;
    }
    return tmp2;
  };
  cResult[4] = code;
  cResult[5] = id;
  cResult[6] = fn;
  tmp13 = fn;
}) : (function InstantInviteRow(row) {
  let Avatar3;
  let end;
  let fn;
  let obj15;
  let obj18;
  let source;
  let start;
  let tmp19;
  let tmp32;
  let tmp8Result10;
  row = row.row;
  const code = row.code;
  const onPressAvatar = row.onPressAvatar;
  ({ onInviteSent: View, source: ChannelStore } = row);
  ({ start, end } = row);
  const id = row.item.id;
  let tmp2 = row;
  const tmp3 = onPressAvatar;
  let tmp = closure_13();
  let obj = row(onPressAvatar[14]);
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => id.isSubmitting());
  let obj2 = row(onPressAvatar[14]);
  const items1 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => id.getError());
  const tmp6 = closure_10((arg0) => {
    let tmp2 = null;
    if (null != code) {
      let tmp5;
      if (arg0[tmp] != null) {
        tmp5 = tmp4[id];
      }
      tmp2 = tmp5;
    }
    return tmp2;
  });
  let obj3 = row(onPressAvatar[14]);
  const items2 = [ChannelStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(id));
  let str = code(onPressAvatar[15])(stateFromStores2);
  if (null == code) {
    return null;
  } else {
    let type = row.type;
    if (tmp2(tmp3[16]).RowTypes.DM !== type) {
      let str2;
      let tmp15;
      if (tmp2(tmp3[16]).RowTypes.FRIEND !== type) {
        if (tmp2(tmp3[16]).RowTypes.GROUP_DM === type) {
          let tmp20 = null;
          if (null != stateFromStores2) {
            const Avatar2 = tmp2(tmp3[19]).Avatar;
            const makeSource2 = tmp8(tmp3[23]).makeSource;
            code(tmp3[23]);
            let obj5 = { id: null, icon: null, applicationId: null, size: 32 };
            ({ id: obj12.id, icon: obj12.icon, application_id: obj12.applicationId } = stateFromStores2);
            tmp20 = <Avatar2 source={makeSource2(code(tmp3[23]).getChannelIconURL(obj5))} size={tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32} />;
            const tmp8Result6 = code(tmp3[23]);
          }
          if (str == null) {
            str = "";
          }
          str2 = str;
          tmp15 = tmp20;
        } else if (tmp2(tmp3[16]).RowTypes.CHANNEL === type) {
          let guild_id;
          if (stateFromStores2 != null) {
            guild_id = stateFromStores2.guild_id;
          }
          let guild;
          if (null != guild_id) {
            guild = GuildStore.getGuild(stateFromStores2.guild_id);
          }
          if (null == guild) {
            return null;
          } else {
            if (null != guild.icon) {
              const Avatar = tmp2(tmp3[19]).Avatar;
              const makeSource = tmp8(tmp3[23]).makeSource;
              code(tmp3[23]);
              const obj7 = { id: null, icon: null, size: 32 };
              ({ id: obj9.id, icon: obj9.icon } = guild);
              tmp15 = <Avatar source={makeSource(code(tmp3[23]).getGuildIconURL(obj7))} size={tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32} />;
              const tmp8Result8 = code(tmp3[23]);
            } else {
              const tmp2Result = tmp2(tmp3[24]);
              const acronym = tmp2Result.getAcronym(guild.name);
              tmp15 = <View style={tmp.acronym}>{null}</View>;
            }
            str2 = "";
            if (null != str) {
              const _HermesInternal = HermesInternal;
              str2 = "#" + str;
            }
          }
        } else {
          return null;
        }
      }
      function handlePress() {
        let obj3;
        let obj4;
        let obj6;
        const tmp = code;
        if (null != code) {
          function handleSendState(arg0) {
            if (null != code) {
              closure_2_9(tmp, id, arg0 ? InviteSendStates.SENT : InviteSendStates.ERROR);
              if (arg0) {
                if (closure_1_3 != null) {
                  closure_1_3();
                }
              }
            }
          }
          React4(tmp, id, InviteSendStates.SENDING);
          const type = row.type;
          if (InstantInviteUtils.RowTypes.FRIEND !== type) {
            if (InstantInviteUtils.RowTypes.DM !== type) {
              if (InstantInviteUtils.RowTypes.GROUP_DM === type) {
                if (null != tmp) {
                  const obj2 = { inviteKey: tmp, type: InviteQueue.InvitePropertiesType.GROUP_DM, channel: ChannelStore.getChannel(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj3 };
                  const enqueue2 = InviteQueueDefault.enqueue;
                  InviteQueueDefault;
                  obj3 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source: ChannelStore };
                  enqueue2(obj2, handleSendState);
                }
              } else if (InstantInviteUtils.RowTypes.CHANNEL === type) {
                if (null != tmp) {
                  const obj = { inviteKey: tmp, type: InviteQueue.InvitePropertiesType.CHANNEL, channel: ChannelStore.getChannel(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj4 };
                  const enqueue = InviteQueueDefault.enqueue;
                  InviteQueueDefault;
                  obj4 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source: ChannelStore };
                  enqueue(obj, handleSendState);
                }
              }
            }
          }
          if (null != tmp) {
            const obj5 = { inviteKey: tmp, type: InviteQueue.InvitePropertiesType.USER, user: UserStore.getUser(id), location: "Invite Action Sheet", inviteAnalyticsMetadata: obj6 };
            const enqueue3 = InviteQueueDefault.enqueue;
            InviteQueueDefault;
            obj6 = { suggestionData: InviteSuggestionsStore.getSelectedInviteMetadata(row), source: ChannelStore };
            enqueue3(obj5, handleSendState);
          }
        }
      }
      const obj11 = { start, end, icon: tmp15, label: str2, trailing: null, onPress: handlePress, disabled: tmp32, accessibilityActions: tmp19, onAccessibilityAction: fn };
      const TableRow = tmp2(tmp3[27]).TableRow;
      tmp32 = null != stateFromStores1 || stateFromStores;
      const tmp31 = jsx;
      if (!tmp32) {
        tmp32 = tmp6 === InviteSendStates.SENT;
      }
      return tmp31(TableRow, obj11);
    }
    const user = UserStore.getUser(id);
    const obj14 = {
      importantForAccessibility: "no-hide-descendants",
      accessibilityElementsHidden: true,
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          if (onPressAvatar != null) {
            tmp2(id);
          }
        },
      style: { padding: 8, margin: -8 },
      children: jsx(Avatar3, obj15)
    };
    const PressableOpacity = tmp2(tmp3[18]).PressableOpacity;
    let avatarSource;
    Avatar3 = tmp2(tmp3[19]).Avatar;
    if (user != null) {
      avatarSource = user.getAvatarSource(undefined);
    }
    if (avatarSource == null) {
      avatarSource = null;
    }
    obj15 = { source: avatarSource, size: tmp2(tmp3[19]).AvatarSizes.REFRESH_MEDIUM_32 };
    const obj16 = { nick: tmp8Result10.getGlobalName(user), user };
    const tmp24Result = jsx(PressableOpacity, obj14);
    const tmp8Result9 = code(tmp3[20]);
    let tmp29;
    tmp8Result10 = code(tmp3[21]);
    const tmp24Result2 = jsx(tmp8Result9, obj16);
    if (null != onPressAvatar) {
      const intl = tmp2(tmp3[22]).intl;
      const formatToPlainString = intl.formatToPlainString;
      let tag;
      const uCenkh = tmp2(tmp3[22]).t.uCenkh;
      if (user != null) {
        tag = user.tag;
      }
      const obj17 = { name: "viewProfile", label: formatToPlainString(uCenkh, obj18) };
      const items3 = [obj17];
      tmp29 = items3;
      obj18 = { username: tag };
    }
    fn = function w(nativeEvent) {
      const tmp = "viewProfile" === nativeEvent.nativeEvent.actionName && null !== onPressAvatar;
      if (tmp) {
        if (onPressAvatar != null) {
          tmp4(id);
        }
      }
    };
    str2 = tmp24Result2;
    tmp15 = tmp24Result;
    tmp19 = tmp29;
  }
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteRow.tsx");

export default memoResult;
