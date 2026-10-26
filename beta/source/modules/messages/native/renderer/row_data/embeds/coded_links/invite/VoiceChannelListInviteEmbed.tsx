// Module ID: 10002
// Function ID: 10003
// Name: VoiceChannelListInviteEmbed
// Dependencies: [17, 4972, 10003, 4841, 4823, 4883, 4845, 4903, 4913, 1392, 5630, 5717, 10004, 1087, 7809, 10005, 8275, 8277, 1417, 5025, 5144, 5604, 1128, 10006, 2]
// Exports: canShowVoiceChannelListInviteEmbed, createVoiceChannelListInviteEmbed

// Module 10002 (VoiceChannelListInviteEmbed)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1087 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import GuildRecord from "GuildRecord" /* 4841 */;
import UserUtilsDefault from "UserUtils" /* 5025 */;
import Constants2 from "Constants" /* 7809 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8277 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10004 */;
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite" /* 10005 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10003 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildMemberStore from "GuildMemberStore" /* 4883 */;
import GuildStore from "GuildStore" /* 4845 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import UserStore from "UserStore" /* 1392 */;
import VoiceStateStore from "VoiceStateStore" /* 5630 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5717 */;
import size from "module_2" /* 2 */;

let member;

const processColor = react_native.processColor;
const getGuildIconSource = GuildRecord.getGuildIconSource;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const BasicPermissions = Constants.BasicPermissions;
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/VoiceChannelListInviteEmbed.tsx");

export const canShowVoiceChannelListInviteEmbed = function canShowVoiceChannelListInviteEmbed(invite) {
  let tmp = null;
  if (null != invite.guild) {
    const guild = GuildStore.getGuild(invite.guild.id);
    tmp = null;
    if (null != guild) {
      const channel = getChannelAndRecipientsFromInviteDefault(invite).channel;
      tmp = null;
      if (null != channel) {
        tmp = null;
        if (channel.isGuildVocal()) {
          let channel1 = ChannelStore.getChannel(channel.id);
          if (channel1 == null) {
            channel1 = channel;
          }
          let tmp11 = null;
          if (PermissionStore.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel1)) {
            tmp11 = { guild, channel: channel1 };
            const obj = { guild, channel: channel1 };
          }
          tmp = tmp11;
        }
      }
    }
  }
  return null != tmp;
};
export const createVoiceChannelListInviteEmbed = function createVoiceChannelListInviteEmbed(invite, theme) {
  let backgroundColor;
  let baseColors;
  let colors;
  let displayNameStylesEnabled;
  let intl;
  let intl2;
  let intl4;
  let items1;
  let str2;
  let tmp31Result;
  let tmp36;
  let tmp40Result;
  let tmp2 = null;
  if (null != invite.guild) {
    const guild1 = GuildStore.getGuild(invite.guild.id);
    tmp2 = null;
    if (null != guild1) {
      const channel = displayNameStylesEnabled(10005)(invite).channel;
      tmp2 = null;
      if (null != channel) {
        tmp2 = null;
        if (channel.isGuildVocal()) {
          let channel1 = ChannelStore.getChannel(channel.id);
          if (channel1 == null) {
            channel1 = channel;
          }
          let tmp11 = channel1;
          let tmp12 = null;
          if (PermissionStore.canBasicChannel(BasicPermissions.VIEW_CHANNEL, channel1)) {
            let obj = { guild: guild1, channel: channel1 };
            tmp12 = obj;
          }
          tmp2 = tmp12;
        }
      }
    }
  }
  if (null == tmp2) {
    return null;
  } else {
    const guild = tmp2.guild;
    const channel2 = tmp2.channel;
    ({ colors, baseColors } = displayNameStylesEnabled(8275)(theme));
    let assetUriForEmbed;
    displayNameStylesEnabled(8275)(theme);
    const tmp40 = displayNameStylesEnabled;
    if (null != guild.icon) {
      let obj2 = guild(8277);
      assetUriForEmbed = obj2.getAssetUriForEmbed(getGuildIconSource(guild, 128, false));
    }
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(channel2.id, guild.id);
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, voiceStatesForChannelAlt.filter((voiceState) => voiceState.voiceState.selfStream), 0);
    HermesBuiltin.arraySpread(items, voiceStatesForChannelAlt.filter((voiceState) => !voiceState.voiceState.selfStream), arraySpreadResult);
    const substr = items.slice(0, 10);
    displayNameStylesEnabled = AccessibilityStore.displayNameStylesEnabled;
    const mapped = substr.map((member) => {
      let flag2;
      let guildMemberAvatarURLSimple;
      let nick;
      member = member.member;
      if (member == null) {
        member = GuildMemberStore.getMember(guild.id, member.user.id);
      }
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        const obj3 = { guildId: guild.id, userId: member.user.id, avatar: member.avatar, size: 24 };
        const obj2 = AvatarUtilsDefault;
        guildMemberAvatarURLSimple = obj2.getGuildMemberAvatarURLSimple(obj3);
      } else {
        const obj = AvatarUtilsDefault;
        guildMemberAvatarURLSimple = obj.getUserAvatarURL(member.user, false, 24);
      }
      let assetUriForEmbed = guildMemberAvatarURLSimple;
      if (typeof guildMemberAvatarURLSimple === "number") {
        const obj6 = renderer_EmbedUtils;
        assetUriForEmbed = obj6.getAssetUriForEmbed(guildMemberAvatarURLSimple);
      }
      let tmp11;
      if (displayNameStylesEnabled) {
        let fontId;
        if (member != null) {
          const displayNameStyles = member.displayNameStyles;
          if (displayNameStyles != null) {
            fontId = displayNameStyles.fontId;
          }
        }
        if (fontId == null) {
          const displayNameStyles2 = member.user.displayNameStyles;
          let fontId1;
          if (displayNameStyles2 != null) {
            fontId1 = displayNameStyles2.fontId;
          }
          fontId = fontId1;
        }
        tmp11 = fontId;
      }
      const obj4 = { userId: member.user.id, displayName: nick, avatarUrl: assetUriForEmbed, isStreaming: flag2, fontId: tmp11 };
      nick = member.nick;
      if (nick == null) {
        const obj5 = UserUtilsDefault;
        nick = obj5.getName(member.user);
      }
      flag2 = member.voiceState.selfStream;
      if (flag2 == null) {
        flag2 = false;
      }
      return obj4;
    });
    const startTime = VoiceChannelStartTimeStore.getStartTime(channel2);
    let obj5 = { backgroundColor, extendedType: CodedLinkExtendedType.VOICE_CHANNEL_LIST_INVITE, headerColor: colors.headerColor, guildName: guild.name, guildIcon: assetUriForEmbed, headerText: "", titleText: tmp31Result.computeChannelName(channel2, UserStore, RelationshipStore), titleColor: voiceStatesForChannelAlt.length > 0 ? colors.voiceActiveColor : colors.voiceMutedColor, acceptLabelText: intl.string(guild(1128).t.gpqgah), canBeAccepted: tmp40Result.canAcceptInvite(items1, invite), embedCanBeTapped: true, type: InviteTypes.GUILD, voiceUsers: mapped, voiceStartTimestamp: startTime, emptyStateText: intl2.string(guild(1128).t.zSqdrS), streamingLabel: str2.toUpperCase(), voiceHeaderBackgroundColor: colors.voiceHeaderBackgroundColor, reducedMotion: AccessibilityStore.useReducedMotion, isConnected: tmp36, privacyHintText: intl4.string(guild(1128).t.fkg9mQ) };
    const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(guild.id);
    const id = channel2.id;
    const merged = Object.assign(baseColors);
    let obj4 = guild(5144);
    const embedScrollGradientBackground = obj4.getEmbedScrollGradientBackground();
    backgroundColor = processColor(embedScrollGradientBackground);
    if (backgroundColor == null) {
      backgroundColor = baseColors.backgroundColor;
    }
    tmp31Result = guild(5604);
    tmp36 = currentClientVoiceChannelId === id;
    intl = tmp31(1128).intl;
    ({ acceptLabelGreenColor: obj3.acceptLabelColor, acceptLabelGreenBackgroundColor: obj3.acceptLabelBackgroundColor } = colors);
    items1 = [GuildMemberStore];
    let flag2 = true;
    tmp40Result = tmp40(10006);
    intl2 = tmp31(1128).intl;
    const intl3 = tmp31(1128).intl;
    str2 = intl3.string(guild(1128).t.dI3q4h);
    intl4 = tmp31(1128).intl;
    return obj5;
  }
};
