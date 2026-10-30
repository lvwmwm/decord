// Module ID: 18335
// Function ID: 18336
// Name: HomeDrawerGuildRow
// Dependencies: [19, 17, 4943, 4862, 4858, 4939, 6880, 4880, 6836, 4951, 6769, 1384, 1072, 6770, 21, 5009, 504, 5199, 5196, 11153, 10973, 5619, 18336, 18337, 5647, 11, 18338, 18339, 13682, 18340, 18341, 18342, 18344, 18345, 18326, 2]
// Exports: default

// Module 18335 (HomeDrawerGuildRow)
import react_native from "react-native" /* 17 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import Text_Text from "Text/Text" /* 5619 */;
import useChannelName from "useChannelName" /* 5647 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import StreamingSubtitleDefault from "StreamingSubtitle" /* 18340 */;
import VoiceSubtitleDefault from "VoiceSubtitle" /* 18341 */;
import MentionSubtitleDefault from "MentionSubtitle" /* 18342 */;
import TypingSubtitleDefault from "TypingSubtitle" /* 18344 */;
import UnreadSubtitleDefault from "UnreadSubtitle" /* 18345 */;
import react_mod from "react" /* 19 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4943 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6880 */;
import GuildStore from "GuildStore" /* 4880 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_15;
let closure_16;
let closure_18;
let closure_19;
function GuildRowWrapper(guild) {
  let closure_3;
  let tmp23Result;
  guild = guild.guild;
  const disableSubtitle = guild.disableSubtitle;
  const onActiveHookChange = guild.onActiveHookChange;
  let unreadChannel;
  let unreadChannelCount;
  let mentionChannel;
  let mentionChannelName;
  let mentionChannelCount;
  let text;
  closure_21 = undefined;
  let memo2;
  let tmp = closure_21();
  react = tmp;
  let tmp2 = guild;
  const tmp3 = onActiveHookChange;
  let obj = guild(onActiveHookChange[16]);
  let items = [unreadChannel];
  const stateFromStores = obj.useStateFromStores(items, () => GuildReadStateStore.hasUnread(guild.id));
  let obj2 = guild(onActiveHookChange[16]);
  const items1 = [mentionChannelName];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.getMuteConfig(guild.id));
  let obj3 = react;
  const items2 = [stateFromStores1];
  const memo = react.useMemo(function() {
    let obj;
    if (null == stateFromStores1) {
      obj = { isMuted: false, isTemporary: false };
    } else {
      let tmp2 = null == tmp.end_time;
      if (!tmp2) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date = new Date(stateFromStores1.end_time);
        tmp2 = date > new Date();
        const date1 = new Date();
      }
      obj = { isMuted: tmp2, isTemporary: null != stateFromStores1.end_time };
    }
    return obj;
  }, items2);
  const items3 = [guild, memo, , ];
  ({ guildName: arr4[2], guildNameText: arr4[3] } = tmp);
  const memo1 = react.useMemo(() => {
    let items;
    let str;
    let tmp2;
    if (memo.isMuted) {
      let BellSlashIcon;
      if (memo.isTemporary) {
        BellSlashIcon = tmp3(11153).BellZIcon;
      } else {
        BellSlashIcon = tmp3(10973).BellSlashIcon;
      }
      tmp2 = BellSlashIcon;
    } else {
      tmp2 = authStore4;
    }
    const obj2 = { variant: "text-md/medium", style: closure_3.guildNameText, lineClamp: 1, color: str, children: guild.name };
    str = "text-default";
    const obj = { style: closure_3.guildName, children: items };
    const Text = Text_Text.Text;
    const tmp5 = closure_19;
    const tmp6 = View;
    if (memo.isMuted) {
      str = "text-muted";
    }
    items = [authStore5(Text, obj2), authStore5(tmp2, { size: "xs", color: "icon-muted" })];
    return tmp5(tmp6, obj);
  }, items3);
  let obj4 = guild(onActiveHookChange[22]);
  const isHomeDrawerChannelMuted = obj4.useIsHomeDrawerChannelMuted();
  let obj5 = guild(onActiveHookChange[23]);
  const isHomeDrawerChannelInChannelList = obj5.useIsHomeDrawerChannelInChannelList();
  const items4 = [isHomeDrawerChannelInChannelList, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, unreadChannelCount, mentionChannelName, stateFromStores1];
  const items5 = [guild.id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  const obj6 = guild(onActiveHookChange[16]);
  const stateFromStoresObject = obj6.useStateFromStoresObject(items4, () => {
    let channelName;
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guild.id);
    const found = selectableChannelIds.filter((item) => {
      const basicChannel = isHomeDrawerChannelMuted.getBasicChannel(item);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        let tmp5 = !closure_1_7(basicChannel);
        closure_1_7(basicChannel);
        if (tmp5) {
          let tmp9 = !(memo(basicChannel.type) && !stateFromStores1.hasJoined(item));
          const tmp7 = memo(basicChannel.type) && !stateFromStores1.hasJoined(item);
          if (tmp9) {
            let tmp11 = isHomeDrawerChannelInChannelList(basicChannel);
            if (tmp11) {
              tmp11 = unreadChannelCount.hasUnread(item) && mentionChannelName.resolveUnreadSetting(basicChannel) === typingChannelId.ALL_MESSAGES;
              const hasUnreadResult = unreadChannelCount.hasUnread(item) && mentionChannelName.resolveUnreadSetting(basicChannel) === typingChannelId.ALL_MESSAGES;
            }
            tmp9 = tmp11;
          }
          tmp5 = tmp9;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    });
    let channel;
    if (found.length > 0) {
      let tmp2 = ChannelStore;
      channel = ChannelStore.getChannel(found[0]);
    }
    const obj = { unreadChannel: channel, unreadChannelName: channelName, unreadChannelCount: found.length };
    channelName = undefined;
    if (null != channel) {
      let tmp5 = dependencyMap;
      let tmp7 = RelationshipStore;
      const obj2 = useChannelName;
      channelName = obj2.computeChannelName(channel, UserStore, RelationshipStore);
    }
    return obj;
  }, items5);
  unreadChannel = stateFromStoresObject.unreadChannel;
  const unreadChannelName = stateFromStoresObject.unreadChannelName;
  unreadChannelCount = stateFromStoresObject.unreadChannelCount;
  const items6 = [unreadChannel, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, stateFromStores1];
  const items7 = [guild.id, isHomeDrawerChannelInChannelList];
  const obj7 = guild(onActiveHookChange[16]);
  const stateFromStoresObject1 = obj7.useStateFromStoresObject(items6, () => {
    let channelName;
    let mentionCounts;
    const tmp = unreadChannel.getMutableGuildStates()[guild.id];
    guild = tmp;
    if (null == tmp) {
      return { mentionChannel: "sa", mentionChannelName: "isArray", mentionChannelCount: null };
    } else {
      let tmp8 = disableSubtitle;
      const obj3 = disableSubtitle(onActiveHookChange[25]);
      const keys = obj3.keys(tmp.mentionCounts);
      const found = keys.filter((item) => {
        if (mentionCounts.mentionCounts[item].count <= 0) {
          return false;
        } else {
          const basicChannel = ChannelStore.getBasicChannel(item);
          let tmp4 = null != basicChannel;
          if (tmp4) {
            const tmp6 = isThread(basicChannel.type) && !JoinedThreadsStore.hasJoined(item);
            tmp4 = !tmp6 && isHomeDrawerChannelInChannelList(basicChannel);
            const tmp8 = !tmp6 && isHomeDrawerChannelInChannelList(basicChannel);
          }
          return tmp4;
        }
      });
      let channel;
      const tmp9 = onActiveHookChange;
      if (found.length > 0) {
        channel = isHomeDrawerChannelMuted.getChannel(found[0]);
      }
      const obj = { mentionChannel: channel, mentionChannelName: channelName, mentionChannelCount: found.length };
      channelName = undefined;
      if (null != channel) {
        let tmp6 = mentionChannelCount;
        const obj2 = guild(tmp9[24]);
        channelName = obj2.computeChannelName(channel, mentionChannelCount, mentionChannel);
      }
      return obj;
    }
  }, items7);
  mentionChannel = stateFromStoresObject1.mentionChannel;
  mentionChannelName = stateFromStoresObject1.mentionChannelName;
  mentionChannelCount = stateFromStoresObject1.mentionChannelCount;
  const obj8 = guild(onActiveHookChange[26]);
  const voiceUsers = obj8.useVoiceUsers(guild);
  const voiceUsers1 = voiceUsers.voiceUsers;
  const streamingUser = voiceUsers.streamingUser;
  const streamingChannelId = voiceUsers.streamingChannelId;
  const obj9 = guild(onActiveHookChange[27]);
  const homeDrawerGuildTyping = obj9.useHomeDrawerGuildTyping(guild.id);
  const typingChannelId = homeDrawerGuildTyping.typingChannelId;
  const typingChannelName = homeDrawerGuildTyping.typingChannelName;
  const typingUserIds = homeDrawerGuildTyping.typingUserIds;
  const items8 = [isHomeDrawerChannelMuted];
  const items9 = [typingChannelId];
  const obj10 = guild(onActiveHookChange[16]);
  const stateFromStores2 = obj10.useStateFromStores(items8, () => ChannelStore.getChannel(typingChannelId), items9);
  let tmp16 = typingChannelId;
  const tmp15 = disableSubtitle(onActiveHookChange[28]);
  if (typingChannelId == null) {
    tmp16 = voiceUsers1;
  }
  const obj11 = { channelId: tmp16, guildId: guild.id, typingUserIds };
  const tmp15Result = tmp15(obj11);
  text = tmp15Result;
  let tmp18 = memo.isMuted || disableSubtitle;
  if (!tmp18) {
    tmp18 = 0 === voiceUsers1.length;
  }
  const tmp19 = !tmp18;
  closure_21 = tmp19;
  const items10 = [tmp19, streamingUser, disableSubtitle, mentionChannelName, mentionChannelCount, typingChannelId, tmp15Result, memo.isMuted, stateFromStores, unreadChannelName, unreadChannelCount];
  memo2 = obj3.useMemo(() => {
    let TYPING;
    const tmp = closure_21;
    if (tmp) {
      let VOICE;
      if (null != streamingUser) {
        VOICE = obj.STREAMING;
      } else {
        VOICE = obj.VOICE;
      }
      TYPING = VOICE;
    } else {
      const tmp2 = disableSubtitle;
      if (tmp2) {
        TYPING = obj.NONE;
      } else {
        if (null != mentionChannelName) {
          if (mentionChannelCount > 0) {
            TYPING = obj.MENTION;
          }
        }
        if (null != typingChannelId) {
          if (null != HomeDrawerActiveHook) {
            if (!memo.isMuted) {
              TYPING = obj.TYPING;
            }
          }
        }
        const tmp10 = stateFromStores;
        if (tmp10) {
          if (null != unreadChannelName) {
            let NONE;
            if (unreadChannelCount > 0) {
              NONE = obj.UNREAD;
            }
            TYPING = NONE;
          }
        }
        NONE = obj.NONE;
      }
    }
    return TYPING;
  }, items10);
  const items11 = [memo2, onActiveHookChange];
  const effect = obj3.useEffect(() => {
    if (onActiveHookChange != null) {
      tmp(memo2);
    }
  }, items11);
  const items12 = [memo2, guild, streamingUser, voiceUsers1, mentionChannel, mentionChannelName, mentionChannelCount, stateFromStores2, typingChannelName, tmp15Result, unreadChannel, unreadChannelName, unreadChannelCount];
  const memo3 = obj3.useMemo(() => {
    let obj;
    if (obj.STREAMING === memo2) {
      const obj2 = { guildId: guild.id, streamingUser };
      return authStore5(StreamingSubtitleDefault, obj2);
    } else if (obj.VOICE === memo2) {
      const obj3 = { guildId: guild.id, voiceUsers: voiceUsers1 };
      return authStore5(VoiceSubtitleDefault, obj3);
    } else if (obj.MENTION === memo2) {
      let tmp20 = null;
      if (null != mentionChannelName) {
        const obj4 = { guild, channel: mentionChannel, channelName: tmp19, count: mentionChannelCount };
        tmp20 = authStore5(MentionSubtitleDefault, obj4);
      }
      return tmp20;
    } else if (obj.TYPING === memo2) {
      const obj5 = { guild, channel: stateFromStores2, channelName: typingChannelName, text };
      return authStore5(TypingSubtitleDefault, obj5);
    } else if (obj.UNREAD === memo2) {
      let tmp5 = null;
      if (null != unreadChannelName) {
        obj = { guild, channel: unreadChannel, channelName: tmp4, count: unreadChannelCount };
        tmp5 = authStore5(UnreadSubtitleDefault, obj);
      }
      return tmp5;
    } else if (obj.NONE === memo2) {
      return null;
    }
  }, items12);
  const obj12 = { title: memo1, subtitle: memo3, right: tmp23Result };
  tmp23Result = null;
  const HomeDrawerSharedItem = tmp2(tmp3[34]).HomeDrawerSharedItem;
  if (!memo.isMuted) {
    tmp23Result = null;
    if (!disableSubtitle) {
      tmp23Result = null;
      if (0 !== voiceUsers1.length) {
        const obj13 = { voiceUsers: voiceUsers1, streamingChannelId, streamingUser, guildId: guild.id };
        tmp23Result = tmp23(tmp2(tmp3[26]).GuildVoiceState, obj13);
      }
    }
  }
  return typingChannelName(HomeDrawerSharedItem, obj12);
}
let react = react_mod;
const View = react_native.View;
const isThread = ChannelRecord.isThread;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_15, NOOP: closure_16 } = Constants);
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
const HomeDrawerActiveHook = { STREAMING: "streaming", VOICE: "voice", MENTION: "mention", TYPING: "typing", UNREAD: "unread", NONE: "none" };
let closure_21 = createStyles.createStyles({ guildName: { flexDirection: "row", alignItems: "center", gap: 4 }, guildNameText: { flexShrink: 1 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildRow.tsx");

export default function HomeDrawerGuildRow(guildId) {
  let disableSubtitle;
  let onActiveHookChange;
  guildId = guildId.guildId;
  ({ disableSubtitle, onActiveHookChange } = guildId);
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const MobileHomeDrawerExperiment = guildId(5199).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "guild-row" }).enableHome;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (enableHome) {
      tmp3 = null;
      if (!tmp2) {
        const obj2 = { guild: stateFromStores, disableSubtitle, onActiveHookChange };
        tmp3 = closure_18(GuildRowWrapper, obj2);
      }
    }
  }
  return tmp3;
};
export { HomeDrawerActiveHook };
