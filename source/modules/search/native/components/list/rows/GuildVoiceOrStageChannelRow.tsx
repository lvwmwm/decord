// Module ID: 15396
// Function ID: 117517
// Name: GuildVoiceChannelSubtitle
// Dependencies: [31, 27, 1353, 9141, 33, 10290, 3969, 1212, 4130, 566, 15397, 4963, 4957, 15398, 15400, 11418, 2]

// Module 15396 (GuildVoiceChannelSubtitle)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CHANNEL_LIST_SEARCH_LAYOUT as closure_6 } from "SearchAutocompleteSelectAnalyticsActions";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function GuildVoiceChannelSubtitle(channel) {
  channel = channel.channel;
  const voiceStates = channel.voiceStates;
  const id = channel.id;
  const guild_id = channel.guild_id;
  let obj = channel(id[9]);
  const items = [_isNativeReflectConstruct];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stageInstanceByChannel = outer1_5.getStageInstanceByChannel(channel.id);
    let topic;
    if (null != stageInstanceByChannel) {
      topic = stageInstanceByChannel.topic;
    }
    return topic;
  }, items1);
  const items2 = [stateFromStores, voiceStates, id, guild_id];
  obj = {
    style: callback().subtitle,
    children: guild_id.useMemo(() => {
      if (null != stateFromStores) {
        let tmp3 = stateFromStores;
      } else {
        tmp3 = (function getVoiceChannelSubtitle(voiceStates, outer1_6) {
          let closure_0 = voiceStates;
          function getName(arg0) {
            let nick;
            if (null != voiceStates[arg0]) {
              const member = tmp.member;
              if (null != member) {
                nick = member.nick;
              }
            }
            if (null == nick) {
              let user;
              if (null != voiceStates[arg0]) {
                user = tmp6.user;
              }
              nick = voiceStates(id[6]).getName(user);
              const obj = voiceStates(id[6]);
            }
            return nick;
          }
          let obj = channel(id[5]);
          if (obj.isLayoutCompact(outer1_6)) {
            return null;
          } else if (0 === voiceStates.length) {
            return null;
          } else if (1 === length) {
            const intl3 = channel(id[7]).intl;
            obj = { a: getName(0) };
            return intl3.formatToPlainString(channel(id[7]).t["/GCyII"], obj);
          } else if (2 === length) {
            const intl2 = channel(id[7]).intl;
            obj = { a: getName(0), b: getName(1) };
            return intl2.formatToPlainString(channel(id[7]).t["2efxiV"], obj);
          } else {
            const intl = channel(id[7]).intl;
            const obj1 = { a: getName(0), b: getName(1), n: voiceStates.length - 2 };
            return intl.formatToPlainString(channel(id[7]).t.o2nmbk, obj1);
          }
        })(voiceStates, outer1_6);
      }
      let obj = channel(id[10]);
      obj = { subtitle: tmp3, muted: false, layout: outer1_6, channelId: id, guildId: guild_id };
      return obj.renderChannelSubtitle(obj);
    }, items2)
  };
  return <stateFromStores style={callback().subtitle}>{guild_id.useMemo(() => {
    if (null != stateFromStores) {
      let tmp3 = stateFromStores;
    } else {
      tmp3 = (function getVoiceChannelSubtitle(voiceStates, outer1_6) {
        let closure_0 = voiceStates;
        function getName(arg0) {
          let nick;
          if (null != voiceStates[arg0]) {
            const member = tmp.member;
            if (null != member) {
              nick = member.nick;
            }
          }
          if (null == nick) {
            let user;
            if (null != voiceStates[arg0]) {
              user = tmp6.user;
            }
            nick = voiceStates(id[6]).getName(user);
            const obj = voiceStates(id[6]);
          }
          return nick;
        }
        let obj = channel(id[5]);
        if (obj.isLayoutCompact(outer1_6)) {
          return null;
        } else if (0 === voiceStates.length) {
          return null;
        } else if (1 === length) {
          const intl3 = channel(id[7]).intl;
          obj = { a: getName(0) };
          return intl3.formatToPlainString(channel(id[7]).t["/GCyII"], obj);
        } else if (2 === length) {
          const intl2 = channel(id[7]).intl;
          obj = { a: getName(0), b: getName(1) };
          return intl2.formatToPlainString(channel(id[7]).t["2efxiV"], obj);
        } else {
          const intl = channel(id[7]).intl;
          const obj1 = { a: getName(0), b: getName(1), n: voiceStates.length - 2 };
          return intl.formatToPlainString(channel(id[7]).t.o2nmbk, obj1);
        }
      })(voiceStates, outer1_6);
    }
    let obj = channel(id[10]);
    obj = { subtitle: tmp3, muted: false, layout: outer1_6, channelId: id, guildId: guild_id };
    return obj.renderChannelSubtitle(obj);
  }, items2)}</stateFromStores>;
}
function GuildVoiceChannelExtras(arg0) {
  let channel;
  let users;
  ({ channel, users } = arg0);
  const tmp = callback();
  require(4963) /* useStageParticipants */;
  let obj = { style: tmp.subtitle };
  let tmp6 = 0 !== users.length;
  if (tmp6) {
    obj = { style: tmp.users };
    obj = { users, max: 5, guildId: channel.guild_id, layout: closure_6, audienceCount: tmp3 };
    obj.children = jsx(importDefault(15398), { users, max: 5, guildId: channel.guild_id, layout: closure_6, audienceCount: tmp3 });
    tmp6 = <View users={users} max={5} guildId={channel.guild_id} layout={closure_6} audienceCount={tmp3} />;
  }
  obj.children = tmp6;
  return <View style={tmp.subtitle} />;
}
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ users: { marginTop: 4 }, subtitle: { marginEnd: 16 }, trailing: { paddingVertical: 4, alignItems: "center", alignSelf: "center" } });
const memoResult = importAllResult.memo(function GuildVoiceChannelRow(channel) {
  let onPress;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  ({ voiceStates, trailing, onPress } = channel);
  if (channel.isGuildStageVoice()) {
    voiceStates = channel.speakerVoiceStates;
  }
  const mapped = voiceStates.map((user) => user.user);
  const items = [channel.id, onPress];
  const callback = importAllResult.useCallback(() => {
    onPress(channel.id);
  }, items);
  let obj = { onPress: callback, voiceStates, channel };
  obj = { channel, voiceStates, users: mapped };
  const tmp = callback();
  const tmp4 = jsx;
  obj.subtitle = <GuildVoiceChannelSubtitle channel={channel} voiceStates={voiceStates} users={mapped} />;
  if (null == trailing) {
    obj = { style: tmp.trailing };
    const obj1 = { channel, voiceStates };
    obj.children = jsx(channel(11418).VocalChannelJoinButton, { channel, voiceStates });
    trailing = <View style={tmp.trailing} />;
  }
  obj.trailing = trailing;
  const obj2 = { channel, voiceStates, users: mapped };
  obj.extras = <GuildVoiceChannelExtras channel={channel} voiceStates={voiceStates} users={mapped} />;
  return tmp4(onPress(15400), obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx");

export default memoResult;
