// Module ID: 9477
// Function ID: 73831
// Name: resolveVoiceChannelListInviteEmbedData
// Dependencies: [27, 4122, 9478, 1391, 1348, 1917, 1838, 3758, 3767, 1849, 4146, 4203, 9479, 653, 6979, 9480, 7633, 7635, 1392, 3969, 3941, 4320, 1212, 9481, 2]
// Exports: canShowVoiceChannelListInviteEmbed, createVoiceChannelListInviteEmbed

// Module 9477 (resolveVoiceChannelListInviteEmbedData)
import { processColor } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { getGuildIconSource } from "isGuildOwner";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";
import { BasicPermissions } from "ME";
import { InviteTypes } from "InviteSendStates";

function resolveVoiceChannelListInviteEmbedData(guild) {
  if (null == guild.guild) {
    return null;
  } else {
    guild = guild.getGuild(guild.guild.id);
    if (null == guild) {
      return null;
    } else {
      let channel = importDefault(9480)(guild).channel;
      if (null != channel) {
        if (channel.isGuildVocal()) {
          channel = channel.getChannel(channel.id);
          let tmp6 = null;
          if (closure_10.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel)) {
            const obj = { guild, channel };
            tmp6 = obj;
          }
          return tmp6;
        }
      }
      return null;
    }
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx");

export const canShowVoiceChannelListInviteEmbed = function canShowVoiceChannelListInviteEmbed(invite) {
  return null != resolveVoiceChannelListInviteEmbedData(invite);
};
export const createVoiceChannelListInviteEmbed = function createVoiceChannelListInviteEmbed(invite, closure_2) {
  let baseColors;
  let colors;
  const tmp = resolveVoiceChannelListInviteEmbedData(invite);
  if (null == tmp) {
    return null;
  } else {
    const guild = tmp.guild;
    const channel = tmp.channel;
    ({ colors, baseColors } = displayNameStylesEnabled(7633)(closure_2));
    let assetUriForEmbed;
    if (null != guild.icon) {
      let obj = guild(7635);
      assetUriForEmbed = obj.getAssetUriForEmbed(getGuildIconSource(guild, 128, false));
    }
    voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(channel.id, guild.id);
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(voiceStatesForChannelAlt.filter((voiceState) => voiceState.voiceState.selfStream), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(voiceStatesForChannelAlt.filter((voiceState) => !voiceState.voiceState.selfStream), arraySpreadResult);
    const substr = items.slice(0, 10);
    displayNameStylesEnabled = _isNativeReflectConstruct.displayNameStylesEnabled;
    const mapped = substr.map((member) => {
      member = member.member;
      if (null == member) {
        member = outer1_8.getMember(guild.id, member.user.id);
      }
      let avatar;
      if (null != member) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        let obj = { guildId: guild.id, userId: member.user.id, avatar: member.avatar, size: 24 };
        let guildMemberAvatarURLSimple = displayNameStylesEnabled(outer1_2[18]).getGuildMemberAvatarURLSimple(obj);
        const obj2 = displayNameStylesEnabled(outer1_2[18]);
      } else {
        obj = displayNameStylesEnabled(outer1_2[18]);
        guildMemberAvatarURLSimple = obj.getUserAvatarURL(member.user, false, 24);
      }
      let assetUriForEmbed = guildMemberAvatarURLSimple;
      if ("number" === typeof guildMemberAvatarURLSimple) {
        assetUriForEmbed = guild(outer1_2[17]).getAssetUriForEmbed(guildMemberAvatarURLSimple);
        const obj4 = guild(outer1_2[17]);
      }
      let tmp13;
      if (displayNameStylesEnabled) {
        let fontId;
        if (null != member) {
          const displayNameStyles = member.displayNameStyles;
          if (null != displayNameStyles) {
            fontId = displayNameStyles.fontId;
          }
        }
        if (null == fontId) {
          const displayNameStyles2 = member.user.displayNameStyles;
          let fontId1;
          if (null != displayNameStyles2) {
            fontId1 = displayNameStyles2.fontId;
          }
          fontId = fontId1;
        }
        tmp13 = fontId;
      }
      obj = { userId: member.user.id };
      let nick = member.nick;
      if (null == nick) {
        nick = displayNameStylesEnabled(outer1_2[19]).getName(member.user);
        const obj6 = displayNameStylesEnabled(outer1_2[19]);
      }
      obj.displayName = nick;
      obj.avatarUrl = assetUriForEmbed;
      const selfStream = member.voiceState.selfStream;
      obj.isStreaming = null != selfStream && selfStream;
      obj.fontId = tmp13;
      return obj;
    });
    startTime = startTime.getStartTime(channel);
    let tmp15;
    if (null != startTime) {
      tmp15 = startTime;
    }
    obj = {};
    currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(guild.id);
    const merged = Object.assign(baseColors);
    const tmp21 = processColor;
    const tmp40 = displayNameStylesEnabled(7633)(closure_2);
    const embedScrollGradientBackground = guild(3941).getEmbedScrollGradientBackground();
    let tmp25;
    if (null != embedScrollGradientBackground) {
      tmp25 = embedScrollGradientBackground;
    }
    let backgroundColor = tmp21(tmp25);
    if (null == backgroundColor) {
      backgroundColor = baseColors.backgroundColor;
    }
    obj["backgroundColor"] = backgroundColor;
    obj["extendedType"] = CodedLinkExtendedType.VOICE_CHANNEL_LIST_INVITE;
    obj["headerColor"] = colors.headerColor;
    obj["guildName"] = guild.name;
    obj["guildIcon"] = assetUriForEmbed;
    obj["headerText"] = "";
    const obj3 = guild(3941);
    obj["titleText"] = guild(4320).computeChannelName(channel, closure_12, closure_11);
    obj["titleColor"] = voiceStatesForChannelAlt.length > 0 ? colors.voiceActiveColor : colors.voiceMutedColor;
    const intl = guild(1212).intl;
    obj["acceptLabelText"] = intl.string(guild(1212).t.gpqgah);
    obj["acceptLabelColor"] = colors.acceptLabelGreenColor;
    obj["acceptLabelBackgroundColor"] = colors.acceptLabelGreenBackgroundColor;
    let obj4 = guild(4320);
    const items1 = [closure_8];
    obj["canBeAccepted"] = displayNameStylesEnabled(9481).canAcceptInvite(items1, invite);
    obj["embedCanBeTapped"] = true;
    obj["type"] = InviteTypes.GUILD;
    obj["voiceUsers"] = mapped;
    obj["voiceStartTimestamp"] = tmp15;
    const intl2 = guild(1212).intl;
    obj["emptyStateText"] = intl2.string(guild(1212).t.zSqdrS);
    const intl3 = guild(1212).intl;
    const obj5 = displayNameStylesEnabled(9481);
    obj["streamingLabel"] = intl3.string(guild(1212).t.dI3q4h).toUpperCase();
    obj["voiceHeaderBackgroundColor"] = colors.voiceHeaderBackgroundColor;
    obj["reducedMotion"] = _isNativeReflectConstruct.useReducedMotion;
    obj["isConnected"] = currentClientVoiceChannelId === channel.id;
    const intl4 = guild(1212).intl;
    obj["privacyHintText"] = intl4.string(guild(1212).t.fkg9mQ);
    return obj;
  }
};
