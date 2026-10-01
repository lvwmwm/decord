// Module ID: 16471
// Function ID: 16472
// Name: GuildVoiceOrStageChannelRow
// Dependencies: [19, 17, 2050, 7303, 21, 9580, 4678, 1115, 4836, 504, 16472, 5743, 5737, 16473, 16475, 11774, 2]

// Module 16471 (GuildVoiceOrStageChannelRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5743 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import ChannelListLayout from "ChannelListLayout" /* 9580 */;
import guild_channels_ChannelSubtitle from "guild_channels/ChannelSubtitle" /* 16472 */;
import GuildChannelRowDefault from "GuildChannelRow" /* 16475 */;
import react from "react" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

function GuildVoiceChannelSubtitle(channel) {
  channel = channel.channel;
  const voiceStates = channel.voiceStates;
  const id = channel.id;
  const guild_id = channel.guild_id;
  let tmp = closure_8();
  let obj = channel(id[9]);
  const items = [StageInstanceStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
    let topic;
    if (stageInstanceByChannel != null) {
      topic = stageInstanceByChannel.topic;
    }
    return topic;
  }, items1);
  const items2 = [stateFromStores, voiceStates, id, guild_id];
  return <stateFromStores style={tmp.subtitle}>{guild_id.useMemo(() => {
    let nick2;
    let nick4;
    let tmp = stateFromStores;
    if (null == stateFromStores) {
      let formatToPlainString2Result = null;
      const obj6 = ChannelListLayout;
      if (!obj6.isLayoutCompact(layout)) {
        formatToPlainString2Result = null;
        if (0 !== voiceStates.length) {
          if (1 === voiceStates.length) {
            const intl2 = intl4.intl;
            const formatToPlainString2 = intl2.formatToPlainString;
            const first = arr[0];
            let nick;
            const prop = intl4.t["/GCyII"];
            if (first != null) {
              const member5 = first.member;
              if (member5 != null) {
                nick = member5.nick;
              }
            }
            if (nick == null) {
              const first1 = arr[0];
              let user;
              const getName5 = UserUtilsDefault.getName;
              UserUtilsDefault;
              if (first1 != null) {
                user = first1.user;
              }
              nick = getName5(user);
            }
            const obj2 = { a: nick };
            formatToPlainString2Result = formatToPlainString2(prop, obj2);
          } else if (2 === voiceStates.length) {
            const intl = intl4.intl;
            const formatToPlainString = intl.formatToPlainString;
            const first2 = arr[0];
            let nick1;
            const v2efxiV = intl4.t["2efxiV"];
            if (first2 != null) {
              const member3 = first2.member;
              if (member3 != null) {
                nick1 = member3.nick;
              }
            }
            if (nick1 == null) {
              const first3 = arr[0];
              let user1;
              const getName3 = UserUtilsDefault.getName;
              UserUtilsDefault;
              if (first3 != null) {
                user1 = first3.user;
              }
              nick1 = getName3(user1);
            }
            const obj3 = { a: nick1, b: nick2 };
            nick2 = undefined;
            if (voiceStates[1] != null) {
              const member4 = tmp28.member;
              if (member4 != null) {
                nick2 = member4.nick;
              }
            }
            if (nick2 == null) {
              let user2;
              const getName4 = UserUtilsDefault.getName;
              UserUtilsDefault;
              if (voiceStates[1] != null) {
                user2 = tmp33.user;
              }
              nick2 = getName4(user2);
            }
            formatToPlainString2Result = formatToPlainString(v2efxiV, obj3);
          } else {
            const intl3 = intl4.intl;
            const formatToPlainString3 = intl3.formatToPlainString;
            const first4 = arr[0];
            let nick3;
            const o2nmbk = intl4.t.o2nmbk;
            if (first4 != null) {
              const member = first4.member;
              if (member != null) {
                nick3 = member.nick;
              }
            }
            if (nick3 == null) {
              const first5 = arr[0];
              let user3;
              const getName = UserUtilsDefault.getName;
              UserUtilsDefault;
              if (first5 != null) {
                user3 = first5.user;
              }
              nick3 = getName(user3);
            }
            const obj = { a: nick3, b: nick4, n: voiceStates.length - 2 };
            nick4 = undefined;
            if (voiceStates[1] != null) {
              const member2 = tmp9.member;
              if (member2 != null) {
                nick4 = member2.nick;
              }
            }
            if (nick4 == null) {
              let user4;
              const getName2 = UserUtilsDefault.getName;
              UserUtilsDefault;
              if (voiceStates[1] != null) {
                user4 = tmp14.user;
              }
              nick4 = getName2(user4);
            }
            formatToPlainString2Result = formatToPlainString3(o2nmbk, obj);
          }
        }
      }
      tmp = formatToPlainString2Result;
    }
    const obj4 = guild_channels_ChannelSubtitle;
    const obj5 = { subtitle: tmp, muted: false, layout, channelId: id, guildId: guild_id };
    return obj4.renderChannelSubtitle(obj5);
  }, items2)}</stateFromStores>;
}
function GuildVoiceChannelExtras(arg0) {
  let channel;
  let users;
  ({ channel, users } = arg0);
  const tmp = closure_8();
  StageChannelParticipantStoreHooks;
  let tmp5Result = 0 !== users.length;
  if (tmp5Result) {
    const obj2 = { style: tmp.users, children: null };
    tmp5Result = tmp5(tmp6, obj2);
  }
  return <View style={tmp.subtitle}>{tmp5Result}</View>;
}
const View = react_native.View;
const layout = SearchConstants.CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ users: { marginTop: 4 }, subtitle: { marginEnd: 16 }, trailing: { paddingVertical: 4, alignItems: "center", alignSelf: "center" } });
const memoResult = react.memo(function GuildVoiceChannelRow(channel) {
  let onPress;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  ({ voiceStates, trailing, onPress } = channel);
  const speakerVoiceStates = channel.speakerVoiceStates;
  const tmp = closure_8();
  if (channel.isGuildStageVoice()) {
    voiceStates = speakerVoiceStates;
  }
  const mapped = voiceStates.map((user) => user.user);
  const items = [channel.id, onPress];
  const callback = react.useCallback(() => {
    onPress(channel.id);
  }, items);
  GuildChannelRowDefault;
  if (null == trailing) {
    const obj2 = { style: tmp.trailing, children: null };
    trailing = tmp4(View, obj2);
  }
  return <tmp6 onPress={callback} voiceStates={voiceStates} channel={channel} subtitle={null} trailing={trailing} extras={null} />;
});
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx");

export default memoResult;
