// Module ID: 14711
// Function ID: 110989
// Name: GuildRowWrapper
// Dependencies: []
// Exports: default

// Module 14711 (GuildRowWrapper)
function GuildRowWrapper(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const disableSubtitle = guild.disableSubtitle;
  const importDefault = disableSubtitle;
  const onActiveHookChange = guild.onActiveHookChange;
  const dependencyMap = onActiveHookChange;
  let callback2;
  let memo2;
  const tmp = callback2();
  const React = tmp;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => isHomeDrawerChannelMuted.hasUnread(guild.id));
  const View = stateFromStores;
  let obj1 = arg1(dependencyMap[14]);
  const items1 = [closure_11];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => mentionChannel.getMuteConfig(guild.id));
  let closure_5 = stateFromStores1;
  const items2 = [stateFromStores1];
  const memo = React.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = {};
    } else {
      obj = {};
      let tmp2 = null == stateFromStores1.end_time;
      if (!tmp2) {
        const _Date = Date;
        const date = new Date(stateFromStores1.end_time);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = date > date1;
      }
      obj.isMuted = tmp2;
      obj.isTemporary = null != stateFromStores1.end_time;
    }
    return obj;
  }, items2);
  let closure_6 = memo;
  const items3 = [guild, memo, tmp.guildName];
  const memo1 = React.useMemo(() => {
    if (memo.isMuted) {
      let tmp4 = onActiveHookChange;
      if (memo.isTemporary) {
        tmp4 = tmp4[17];
        let BellSlashIcon = tmp3(tmp4).BellZIcon;
      } else {
        BellSlashIcon = tmp3(tmp4[18]).BellSlashIcon;
      }
    } else {
      let obj = { style: tmp.guildName };
      obj = { 1968435297: "812d0ec6cbf43741fa947b18063ae5e5", 915925470: "server-error", 1375298031: "png" };
      obj = { flexShrink: 1 };
      obj.style = obj;
      let str = "text-default";
      if (memo.isMuted) {
        str = "text-muted";
      }
      obj.color = str;
      obj.children = guild.name;
      const items = [typingChannelId(guild(onActiveHookChange[19]).Text, obj), typingChannelId(voiceUsers1, { flexDirection: -1659219612, alignItems: -652 })];
      obj.children = items;
      return typingChannelName(stateFromStores, obj);
    }
  }, items3);
  const isHomeDrawerChannelMuted = arg1(dependencyMap[20]).useIsHomeDrawerChannelMuted();
  closure_7 = isHomeDrawerChannelMuted;
  const obj3 = arg1(dependencyMap[20]);
  const items4 = [closure_6, closure_5, closure_12, closure_10, closure_9, closure_11];
  const items5 = [guild.id, isHomeDrawerChannelMuted];
  const stateFromStoresObject = arg1(dependencyMap[14]).useStateFromStoresObject(items4, () => {
    const selectableChannelIds = memo.getSelectableChannelIds(guild.id);
    const found = selectableChannelIds.filter((arg0) => {
      const basicChannel = basicChannel.getBasicChannel(arg0);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        let tmp4 = !callback(basicChannel);
        if (tmp4) {
          let hasUnreadResult = closure_9.hasUnread(arg0);
          if (hasUnreadResult) {
            hasUnreadResult = closure_11.resolveUnreadSetting(basicChannel) === constants.ALL_MESSAGES;
          }
          tmp4 = hasUnreadResult;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    });
    let channel;
    if (found.length > 0) {
      channel = stateFromStores1.getChannel(found[0]);
    }
    const obj = { unreadChannel: channel };
    let channelName;
    if (null != channel) {
      channelName = guild(onActiveHookChange[21]).computeChannelName(channel, mentionChannelName, unreadChannelCount);
      const obj2 = guild(onActiveHookChange[21]);
    }
    obj.unreadChannelName = channelName;
    obj.unreadChannelCount = found.length;
    return obj;
  }, items5);
  const unreadChannel = stateFromStoresObject.unreadChannel;
  let closure_8 = unreadChannel;
  const unreadChannelName = stateFromStoresObject.unreadChannelName;
  closure_9 = unreadChannelName;
  const unreadChannelCount = stateFromStoresObject.unreadChannelCount;
  closure_10 = unreadChannelCount;
  const obj4 = arg1(dependencyMap[14]);
  const items6 = [closure_7, closure_5, closure_12, closure_10];
  const items7 = [guild.id];
  const stateFromStoresObject1 = arg1(dependencyMap[14]).useStateFromStoresObject(items6, () => {
    const tmp = isHomeDrawerChannelMuted.getMutableGuildStates()[closure_0.id];
    const guild = tmp;
    if (null == tmp) {
      let obj = { mentionChannel: undefined, mentionChannelName: undefined, mentionChannelCount: 0 };
      return obj;
    } else {
      const keys = disableSubtitle(onActiveHookChange[22]).keys(tmp.mentionCounts);
      const found = keys.filter((arg0) => tmp.mentionCounts[arg0].count > 0);
      let channel;
      if (found.length > 0) {
        channel = stateFromStores1.getChannel(found[0]);
      }
      obj = { mentionChannel: channel };
      let channelName;
      if (null != channel) {
        channelName = guild(onActiveHookChange[21]).computeChannelName(channel, mentionChannelName, unreadChannelCount);
        const obj2 = guild(onActiveHookChange[21]);
      }
      obj.mentionChannelName = channelName;
      obj.mentionChannelCount = found.length;
      return obj;
    }
  }, items7);
  const mentionChannel = stateFromStoresObject1.mentionChannel;
  closure_11 = mentionChannel;
  const mentionChannelName = stateFromStoresObject1.mentionChannelName;
  closure_12 = mentionChannelName;
  const mentionChannelCount = stateFromStoresObject1.mentionChannelCount;
  const obj5 = arg1(dependencyMap[14]);
  const voiceUsers = arg1(dependencyMap[23]).useVoiceUsers(guild);
  const voiceUsers1 = voiceUsers.voiceUsers;
  const streamingUser = voiceUsers.streamingUser;
  const UnreadSetting = streamingUser;
  const obj6 = arg1(dependencyMap[23]);
  const homeDrawerGuildTyping = arg1(dependencyMap[24]).useHomeDrawerGuildTyping(guild.id);
  const typingChannelId = homeDrawerGuildTyping.typingChannelId;
  const typingChannelName = homeDrawerGuildTyping.typingChannelName;
  const obj7 = arg1(dependencyMap[24]);
  const items8 = [closure_5];
  const items9 = [typingChannelId];
  const stateFromStores2 = arg1(dependencyMap[14]).useStateFromStores(items8, () => stateFromStores1.getChannel(typingChannelId), items9);
  obj = stateFromStores2;
  obj = {};
  let tmp13 = typingChannelId;
  const obj8 = arg1(dependencyMap[14]);
  if (null == typingChannelId) {
    tmp13 = mentionChannelCount;
  }
  obj.channelId = tmp13;
  obj.guildId = guild.id;
  obj.typingUserIds = homeDrawerGuildTyping.typingUserIds;
  const tmp12Result = importDefault(dependencyMap[25])(obj);
  callback2 = tmp12Result;
  let tmp15 = memo.isMuted || disableSubtitle;
  if (!tmp15) {
    tmp15 = 0 === voiceUsers1.length;
  }
  const items10 = [!tmp15, streamingUser, disableSubtitle, mentionChannelName, mentionChannelCount, typingChannelId, tmp12Result, memo.isMuted, stateFromStores, unreadChannelName, unreadChannelCount];
  memo2 = React.useMemo(() => {
    if (tmp16) {
      if (null != streamingUser) {
        let VOICE = stateFromStores2.STREAMING;
      } else {
        VOICE = stateFromStores2.VOICE;
      }
      const tmp16 = streamingUser;
    } else {
      if (disableSubtitle) {
        let TYPING = stateFromStores2.NONE;
      } else {
        if (null != mentionChannelName) {
          if (mentionChannelCount > 0) {
            TYPING = stateFromStores2.MENTION;
          }
        }
        if (null != typingChannelId) {
          if (null != tmp12Result) {
            if (!memo.isMuted) {
              TYPING = stateFromStores2.TYPING;
            }
          }
        }
        if (stateFromStores) {
          if (null != unreadChannelName) {
            const UNREAD = stateFromStores2.UNREAD;
          }
        }
        const NONE = stateFromStores2.NONE;
      }
      return TYPING;
    }
  }, items10);
  const items11 = [memo2, onActiveHookChange];
  const effect = React.useEffect(() => {
    if (null != onActiveHookChange) {
      onActiveHookChange(memo2);
    }
  }, items11);
  const items12 = [memo2, guild, streamingUser, voiceUsers1, mentionChannel, mentionChannelName, mentionChannelCount, stateFromStores2, typingChannelName, tmp12Result, unreadChannel, unreadChannelName, unreadChannelCount];
  const memo3 = React.useMemo(() => {
    if (stateFromStores2.STREAMING === memo2) {
      let obj = { guildId: guild.id, streamingUser };
      return typingChannelId(disableSubtitle(onActiveHookChange[26]), obj);
    } else if (stateFromStores2.VOICE === tmp) {
      obj = { guildId: guild.id, voiceUsers: voiceUsers1 };
      return typingChannelId(disableSubtitle(onActiveHookChange[27]), obj);
    } else if (stateFromStores2.MENTION === tmp) {
      let tmp22 = null;
      if (null != mentionChannelName) {
        const obj1 = { guild, channel: mentionChannel, channelName: mentionChannelName, count: mentionChannelCount };
        tmp22 = typingChannelId(disableSubtitle(onActiveHookChange[28]), obj1);
      }
      return tmp22;
    } else if (stateFromStores2.TYPING === tmp) {
      const obj2 = { guild, channel: stateFromStores2, channelName: typingChannelName, text: tmp12Result };
      return typingChannelId(disableSubtitle(onActiveHookChange[29]), obj2);
    } else if (stateFromStores2.UNREAD === tmp) {
      let tmp6 = null;
      if (null != unreadChannelName) {
        obj = { guild, channel: unreadChannel, channelName: unreadChannelName, count: unreadChannelCount };
        tmp6 = typingChannelId(disableSubtitle(onActiveHookChange[30]), obj);
      }
      return tmp6;
    } else if (stateFromStores2.NONE === tmp) {
      return null;
    }
  }, items12);
  obj = { title: memo1, subtitle: memo3 };
  let tmp21 = null;
  if (!memo.isMuted) {
    tmp21 = null;
    if (!disableSubtitle) {
      tmp21 = null;
      if (0 !== voiceUsers1.length) {
        obj1 = { voiceUsers: voiceUsers1, streamingChannelId: voiceUsers.streamingChannelId, streamingUser, guildId: guild.id };
        tmp21 = typingChannelId(arg1(dependencyMap[23]).GuildVoiceState, obj1);
      }
    }
  }
  obj.right = tmp21;
  return typingChannelId(arg1(dependencyMap[31]).HomeDrawerSharedItem, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_13, NOOP: closure_14 } = arg1(dependencyMap[10]));
const UnreadSetting = arg1(dependencyMap[11]).UnreadSetting;
const tmp2 = arg1(dependencyMap[10]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[12]));
const obj = { STREAMING: "streaming", VOICE: "voice", MENTION: "mention", TYPING: "typing", UNREAD: "unread", NONE: "none" };
const tmp3 = arg1(dependencyMap[12]);
let closure_19 = arg1(dependencyMap[13]).createStyles({ guildName: {} });
const obj2 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildRow.tsx");

export default function HomeDrawerGuildRow(guildId) {
  let disableSubtitle;
  let onActiveHookChange;
  const arg1 = guildId.guildId;
  ({ disableSubtitle, onActiveHookChange } = guildId);
  let obj = arg1(dependencyMap[14]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const MobileHomeDrawerExperiment = arg1(dependencyMap[15]).MobileHomeDrawerExperiment;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (MobileHomeDrawerExperiment.useConfig({ location: "guild-row" }).enableHome) {
      tmp3 = null;
      if (!tmp2) {
        obj = { guild: stateFromStores, disableSubtitle, onActiveHookChange };
        tmp3 = callback(GuildRowWrapper, obj);
      }
    }
  }
  return tmp3;
};
export const HomeDrawerActiveHook = obj;
