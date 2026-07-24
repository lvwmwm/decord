// Module ID: 14891
// Function ID: 113575
// Name: GuildRowWrapper
// Dependencies: [31, 27, 3760, 1352, 1348, 1907, 6878, 1838, 4142, 3767, 4325, 1849, 653, 4326, 33, 4130, 566, 3987, 3984, 14892, 10232, 4126, 14894, 14895, 4320, 21, 14896, 14898, 11174, 14899, 14900, 14901, 14903, 14904, 14882, 2]
// Exports: default

// Module 14891 (GuildRowWrapper)
import MentionSubtitle from "MentionSubtitle";
import { View } from "areHomeDrawerGuildTypingStatesEqual";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isThread } from "_callSuper";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "UnreadSubtitle";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_18;
let closure_19;
const require = arg1;
function GuildRowWrapper(guild) {
  guild = guild.guild;
  const disableSubtitle = guild.disableSubtitle;
  const onActiveHookChange = guild.onActiveHookChange;
  let c20;
  let callback2;
  let memo2;
  let tmp = callback2();
  const React = tmp;
  let obj = guild(onActiveHookChange[16]);
  let items = [unreadChannel];
  const stateFromStores = obj.useStateFromStores(items, () => unreadChannel.hasUnread(guild.id));
  let obj1 = guild(onActiveHookChange[16]);
  const items1 = [mentionChannelName];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => mentionChannelName.getMuteConfig(guild.id));
  const items2 = [stateFromStores1];
  const memo = React.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = { isMuted: false, isTemporary: false };
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
  const items3 = [guild, memo, , ];
  ({ guildName: arr4[2], guildNameText: arr4[3] } = tmp);
  const memo1 = React.useMemo(() => {
    if (memo.isMuted) {
      let tmp4 = onActiveHookChange;
      if (memo.isTemporary) {
        tmp4 = tmp4[19];
        let BellSlashIcon = tmp3(tmp4).BellZIcon;
      } else {
        BellSlashIcon = tmp3(tmp4[20]).BellSlashIcon;
      }
    } else {
      let obj = { style: tmp.guildName };
      obj = { variant: "text-md/medium", style: streamingUser.guildNameText, lineClamp: 1 };
      let str = "text-default";
      if (memo.isMuted) {
        str = "text-muted";
      }
      obj.color = str;
      obj.children = guild.name;
      const items = [typingChannelName(guild(onActiveHookChange[21]).Text, obj), typingChannelName(streamingUser, { size: "xs", color: "icon-muted" })];
      obj.children = items;
      return stateFromStores2(stateFromStores, obj);
    }
  }, items3);
  const isHomeDrawerChannelMuted = guild(onActiveHookChange[22]).useIsHomeDrawerChannelMuted();
  const obj3 = guild(onActiveHookChange[22]);
  const isHomeDrawerChannelInChannelList = guild(onActiveHookChange[23]).useIsHomeDrawerChannelInChannelList();
  const obj4 = guild(onActiveHookChange[23]);
  const items4 = [isHomeDrawerChannelInChannelList, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, unreadChannelCount, mentionChannelName, stateFromStores1];
  const items5 = [guild.id, isHomeDrawerChannelMuted, isHomeDrawerChannelInChannelList];
  const stateFromStoresObject = guild(onActiveHookChange[16]).useStateFromStoresObject(items4, () => {
    const selectableChannelIds = isHomeDrawerChannelInChannelList.getSelectableChannelIds(guild.id);
    const found = selectableChannelIds.filter((arg0) => {
      const basicChannel = isHomeDrawerChannelMuted.getBasicChannel(arg0);
      let tmp2 = null != basicChannel;
      if (tmp2) {
        let tmp4 = !outer1_7(basicChannel);
        if (tmp4) {
          let tmp6 = memo(basicChannel.type);
          if (tmp6) {
            tmp6 = !stateFromStores1.hasJoined(arg0);
          }
          let tmp8 = !tmp6;
          if (tmp8) {
            const tmp10 = !outer1_8(basicChannel);
            let tmp11 = !tmp10;
            if (!tmp10) {
              let hasUnreadResult = unreadChannelCount.hasUnread(arg0);
              if (hasUnreadResult) {
                hasUnreadResult = mentionChannelName.resolveUnreadSetting(basicChannel) === typingChannelId.ALL_MESSAGES;
              }
              tmp11 = hasUnreadResult;
            }
            tmp8 = tmp11;
          }
          tmp4 = tmp8;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    });
    let channel;
    if (found.length > 0) {
      channel = isHomeDrawerChannelMuted.getChannel(found[0]);
    }
    const obj = { unreadChannel: channel };
    let channelName;
    if (null != channel) {
      channelName = guild(onActiveHookChange[24]).computeChannelName(channel, mentionChannelCount, mentionChannel);
      const obj2 = guild(onActiveHookChange[24]);
    }
    obj.unreadChannelName = channelName;
    obj.unreadChannelCount = found.length;
    return obj;
  }, items5);
  unreadChannel = stateFromStoresObject.unreadChannel;
  const unreadChannelName = stateFromStoresObject.unreadChannelName;
  unreadChannelCount = stateFromStoresObject.unreadChannelCount;
  const obj5 = guild(onActiveHookChange[16]);
  const items6 = [unreadChannel, isHomeDrawerChannelMuted, mentionChannelCount, mentionChannel, stateFromStores1];
  const items7 = [guild.id, isHomeDrawerChannelInChannelList];
  const stateFromStoresObject1 = guild(onActiveHookChange[16]).useStateFromStoresObject(items6, () => {
    const tmp = unreadChannel.getMutableGuildStates()[guild.id];
    guild = tmp;
    if (null == tmp) {
      let obj = { mentionChannel: undefined, mentionChannelName: undefined, mentionChannelCount: 0 };
      return obj;
    } else {
      const keys = disableSubtitle(onActiveHookChange[25]).keys(tmp.mentionCounts);
      const found = keys.filter((arg0) => {
        if (tmp.mentionCounts[arg0].count <= 0) {
          return false;
        } else {
          const basicChannel = isHomeDrawerChannelMuted.getBasicChannel(arg0);
          let tmp4 = null != basicChannel;
          if (tmp4) {
            let tmp6 = memo(basicChannel.type);
            if (tmp6) {
              tmp6 = !stateFromStores1.hasJoined(arg0);
            }
            let tmp8 = !tmp6;
            if (tmp8) {
              tmp8 = outer1_8(basicChannel);
            }
            tmp4 = tmp8;
          }
          return tmp4;
        }
      });
      let channel;
      if (found.length > 0) {
        channel = isHomeDrawerChannelMuted.getChannel(found[0]);
      }
      obj = { mentionChannel: channel };
      let channelName;
      if (null != channel) {
        channelName = guild(onActiveHookChange[24]).computeChannelName(channel, mentionChannelCount, mentionChannel);
        const obj2 = guild(onActiveHookChange[24]);
      }
      obj.mentionChannelName = channelName;
      obj.mentionChannelCount = found.length;
      return obj;
    }
  }, items7);
  mentionChannel = stateFromStoresObject1.mentionChannel;
  mentionChannelName = stateFromStoresObject1.mentionChannelName;
  mentionChannelCount = stateFromStoresObject1.mentionChannelCount;
  const obj6 = guild(onActiveHookChange[16]);
  const voiceUsers = guild(onActiveHookChange[26]).useVoiceUsers(guild);
  const voiceUsers1 = voiceUsers.voiceUsers;
  const streamingUser = voiceUsers.streamingUser;
  const obj7 = guild(onActiveHookChange[26]);
  const homeDrawerGuildTyping = guild(onActiveHookChange[27]).useHomeDrawerGuildTyping(guild.id);
  const typingChannelId = homeDrawerGuildTyping.typingChannelId;
  const typingChannelName = homeDrawerGuildTyping.typingChannelName;
  const obj8 = guild(onActiveHookChange[27]);
  const items8 = [isHomeDrawerChannelMuted];
  const items9 = [typingChannelId];
  const stateFromStores2 = guild(onActiveHookChange[16]).useStateFromStores(items8, () => isHomeDrawerChannelMuted.getChannel(typingChannelId), items9);
  obj = {};
  let tmp14 = typingChannelId;
  const obj9 = guild(onActiveHookChange[16]);
  if (null == typingChannelId) {
    tmp14 = voiceUsers1;
  }
  obj.channelId = tmp14;
  obj.guildId = guild.id;
  obj.typingUserIds = homeDrawerGuildTyping.typingUserIds;
  const tmp13Result = disableSubtitle(onActiveHookChange[28])(obj);
  c20 = tmp13Result;
  let tmp16 = memo.isMuted || disableSubtitle;
  if (!tmp16) {
    tmp16 = 0 === voiceUsers1.length;
  }
  callback2 = tmp17;
  const items10 = [!tmp16, streamingUser, disableSubtitle, mentionChannelName, mentionChannelCount, typingChannelId, tmp13Result, memo.isMuted, stateFromStores, unreadChannelName, unreadChannelCount];
  memo2 = React.useMemo(() => {
    if (c21) {
      if (null != streamingUser) {
        let VOICE = _undefined.STREAMING;
      } else {
        VOICE = _undefined.VOICE;
      }
    } else {
      if (disableSubtitle) {
        let TYPING = _undefined.NONE;
      } else {
        if (null != mentionChannelName) {
          if (mentionChannelCount > 0) {
            TYPING = _undefined.MENTION;
          }
        }
        if (null != typingChannelId) {
          if (null != _undefined) {
            if (!memo.isMuted) {
              TYPING = _undefined.TYPING;
            }
          }
        }
        if (stateFromStores) {
          if (null != unreadChannelName) {
            const UNREAD = _undefined.UNREAD;
          }
        }
        const NONE = _undefined.NONE;
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
  const items12 = [memo2, guild, streamingUser, voiceUsers1, mentionChannel, mentionChannelName, mentionChannelCount, stateFromStores2, typingChannelName, tmp13Result, unreadChannel, unreadChannelName, unreadChannelCount];
  const memo3 = React.useMemo(() => {
    if (_undefined.STREAMING === memo2) {
      let obj = { guildId: guild.id, streamingUser };
      return typingChannelName(disableSubtitle(onActiveHookChange[29]), obj);
    } else if (_undefined.VOICE === tmp) {
      obj = { guildId: guild.id, voiceUsers: voiceUsers1 };
      return typingChannelName(disableSubtitle(onActiveHookChange[30]), obj);
    } else if (_undefined.MENTION === tmp) {
      let tmp22 = null;
      if (null != mentionChannelName) {
        const obj1 = { guild, channel: mentionChannel, channelName: mentionChannelName, count: mentionChannelCount };
        tmp22 = typingChannelName(disableSubtitle(onActiveHookChange[31]), obj1);
      }
      return tmp22;
    } else if (_undefined.TYPING === tmp) {
      const obj2 = { guild, channel: stateFromStores2, channelName: typingChannelName, text: _undefined };
      return typingChannelName(disableSubtitle(onActiveHookChange[32]), obj2);
    } else if (_undefined.UNREAD === tmp) {
      let tmp6 = null;
      if (null != unreadChannelName) {
        obj = { guild, channel: unreadChannel, channelName: unreadChannelName, count: unreadChannelCount };
        tmp6 = typingChannelName(disableSubtitle(onActiveHookChange[33]), obj);
      }
      return tmp6;
    } else if (_undefined.NONE === tmp) {
      return null;
    }
  }, items12);
  obj = { title: memo1, subtitle: memo3 };
  let tmp22 = null;
  if (!memo.isMuted) {
    tmp22 = null;
    if (!disableSubtitle) {
      tmp22 = null;
      if (0 !== voiceUsers1.length) {
        obj1 = { voiceUsers: voiceUsers1, streamingChannelId: voiceUsers.streamingChannelId, streamingUser, guildId: guild.id };
        tmp22 = typingChannelName(guild(onActiveHookChange[26]).GuildVoiceState, obj1);
      }
    }
  }
  obj.right = tmp22;
  return typingChannelName(guild(onActiveHookChange[34]).HomeDrawerSharedItem, obj);
}
({ EMPTY_STRING_SNOWFLAKE_ID: closure_15, NOOP: closure_16 } = ME);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let obj = { STREAMING: "streaming", VOICE: "voice", MENTION: "mention", TYPING: "typing", UNREAD: "unread", NONE: "none" };
let closure_21 = _createForOfIteratorHelperLoose.createStyles({ guildName: { flexDirection: "row", alignItems: "center", gap: 4 }, guildNameText: { flexShrink: 1 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildRow.tsx");

export default function HomeDrawerGuildRow(guildId) {
  let disableSubtitle;
  let onActiveHookChange;
  guildId = guildId.guildId;
  ({ disableSubtitle, onActiveHookChange } = guildId);
  let obj = guildId(566);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getGuild(guildId));
  const MobileHomeDrawerExperiment = guildId(3987).MobileHomeDrawerExperiment;
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
