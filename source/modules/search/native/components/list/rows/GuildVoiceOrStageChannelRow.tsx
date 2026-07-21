// Module ID: 15225
// Function ID: 114982
// Name: GuildVoiceChannelSubtitle
// Dependencies: []

// Module 15225 (GuildVoiceChannelSubtitle)
function GuildVoiceChannelSubtitle(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const voiceStates = channel.voiceStates;
  const importDefault = voiceStates;
  const id = channel.id;
  const dependencyMap = id;
  const guild_id = channel.guild_id;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(channel.id);
    let topic;
    if (null != stageInstanceByChannel) {
      topic = stageInstanceByChannel.topic;
    }
    return topic;
  }, items1);
  const View = stateFromStores;
  const items2 = [stateFromStores, voiceStates, id, guild_id];
  obj = {
    style: callback().subtitle,
    children: guild_id.useMemo(() => {
      if (null != stateFromStores) {
        let tmp3 = stateFromStores;
      } else {
        tmp3 = function getVoiceChannelSubtitle(voiceStates, closure_6) {
          function getName(arg0) {
            let nick;
            if (null != arg0[arg0]) {
              const member = tmp.member;
              if (null != member) {
                nick = member.nick;
              }
            }
            if (null == nick) {
              let user;
              if (null != arg0[arg0]) {
                user = tmp6.user;
              }
              nick = callback(closure_2[6]).getName(user);
              const obj = callback(closure_2[6]);
            }
            return nick;
          }
          let obj = voiceStates(closure_2[5]);
          if (obj.isLayoutCompact(closure_6)) {
            return null;
          } else if (0 === voiceStates.length) {
            return null;
          } else if (1 === length) {
            const intl3 = voiceStates(closure_2[7]).intl;
            obj = { a: getName(0) };
            return intl3.formatToPlainString(voiceStates(closure_2[7]).t./GCyII, obj);
          } else if (2 === length) {
            const intl2 = voiceStates(closure_2[7]).intl;
            obj = { a: getName(0), b: getName(1) };
            return intl2.formatToPlainString(voiceStates(closure_2[7]).t.2efxiV, obj);
          } else {
            const intl = voiceStates(closure_2[7]).intl;
            const obj1 = { a: getName(0), b: getName(1), n: voiceStates.length - 2 };
            return intl.formatToPlainString(voiceStates(closure_2[7]).t.o2nmbk, obj1);
          }
        }(voiceStates, closure_6);
      }
      let obj = channel(id[10]);
      obj = { subtitle: tmp3, muted: false, layout: closure_6, channelId: id, guildId: guild_id };
      return obj.renderChannelSubtitle(obj);
    }, items2)
  };
  return <View {...obj} />;
}
function GuildVoiceChannelExtras(arg0) {
  let channel;
  let users;
  ({ channel, users } = arg0);
  const tmp = callback();
  arg1(dependencyMap[11]);
  let obj = { style: tmp.subtitle };
  let tmp6 = 0 !== users.length;
  if (tmp6) {
    obj = { style: tmp.users };
    obj = { users, max: 5, guildId: channel.guild_id, layout: closure_6, audienceCount: tmp3 };
    obj.children = jsx(importDefault(dependencyMap[13]), obj);
    tmp6 = <View {...obj} />;
  }
  obj.children = tmp6;
  return <View {...obj} />;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[8]).createStyles({ users: { marginTop: 4 }, subtitle: { marginEnd: 16 }, trailing: { 0: true, 0: true, 9223372036854775807: true } });
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function GuildVoiceChannelRow(channel) {
  let onPress;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  const arg1 = channel;
  ({ voiceStates, trailing, onPress } = channel);
  const importDefault = onPress;
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
  obj.subtitle = <GuildVoiceChannelSubtitle {...obj} />;
  if (null == trailing) {
    obj = { style: tmp.trailing };
    const obj1 = { channel, voiceStates };
    obj.children = jsx(arg1(dependencyMap[15]).VocalChannelJoinButton, obj1);
    trailing = <View {...obj} />;
  }
  obj.trailing = trailing;
  const obj2 = { channel, voiceStates, users: mapped };
  obj.extras = <GuildVoiceChannelExtras {...obj2} />;
  return tmp4(importDefault(dependencyMap[14]), obj);
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/search/native/components/list/rows/GuildVoiceOrStageChannelRow.tsx");

export default memoResult;
